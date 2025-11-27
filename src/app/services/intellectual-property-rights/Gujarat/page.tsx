import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Intellectual Property Rights in Gujarat | IP Lawyers Ahmedabad",
  description:
    "Secure your innovations in Gujarat. AMA Legal Solutions offers expert Trademark, Patent & Copyright services in Ahmedabad, Surat & Vadodara. Litigation support at Gujarat High Court.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/intellectual-property-rights/Gujarat',
  },
  openGraph: {
    title: "Intellectual Property Rights in Gujarat | IP Lawyers Ahmedabad",
    description: "Secure your innovations in Gujarat. AMA Legal Solutions offers expert Trademark, Patent & Copyright services in Ahmedabad, Surat & Vadodara. Litigation support at Gujarat High Court.",
    url: "https://amalegalsolutions.com/services/intellectual-property-rights/Gujarat",
    type: "website",
    images: [
      {
        url: "/services/4.png",
        width: 1200,
        height: 630,
        alt: "IPR Services Gujarat",
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
      "name": "Gujarat",
      "item": "https://amalegalsolutions.com/services/intellectual-property-rights/Gujarat"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Intellectual Property Rights Services in Gujarat: Powering Innovation",
  "description": "Comprehensive guide to IPR protection in Gujarat. Learn about patent filing for pharma in Ahmedabad, trademark registration in Surat, and IP litigation at the Gujarat High Court.",
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
  "name": "IPR Services Gujarat",
  "image": "https://amalegalsolutions.com/services/4.png",
  "description": "Expert intellectual property legal services in Gujarat.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "950"
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
        "name": "Dr. Rajesh Patel"
      },
      "reviewBody": "AMA Legal Solutions handled our pharmaceutical patent filing in Ahmedabad with great expertise. Their knowledge of the Gujarat Industrial Policy helped us get a significant subsidy."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sneha Shah"
      },
      "reviewBody": "We are a diamond trading firm in Surat. The team helped us trademark our brand globally, securing our exports."
    }
  ]
};

export default function GujaratIPRPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "industrial-powerhouse", title: "Gujarat's IP Landscape" },
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
    { label: "Gujarat", href: "/services/intellectual-property-rights/Gujarat" },
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
              Secure Your Innovations with <span className="text-[#D2A02A]">IPR Services in Gujarat</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              From Pharma Patents in Ahmedabad to Diamond Trademarks in Surat. We provide premier legal protection for businesses in India's growth engine.
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property in Gujarat: Fueling the Growth Engine</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Gujarat is synonymous with entrepreneurship and industry. As a global hub for pharmaceuticals, chemicals, diamonds, and textiles, the state is a powerhouse of innovation. In such a competitive landscape, <strong>Intellectual Property Rights (IPR)</strong> are not just legal formalities; they are strategic business assets.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Whether you are developing a new drug molecule in Ahmedabad, cutting the world's finest diamonds in Surat, or engineering chemical processes in Vadodara, protecting your intellectual capital is critical. Without it, your R&D investments are at risk of being exploited by competitors.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we offer specialized IP services tailored to Gujarat's industries. With our proximity to the <strong>Trademark Registry in Ahmedabad</strong> and expertise in the <strong>Gujarat High Court</strong>, we ensure your innovations remain exclusively yours.
                  </p>
                </section>

                {/* Industrial Powerhouse */}
                <section id="industrial-powerhouse" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Gujarat's IP Ecosystem</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "Gujarat ranks among the top states in India for patent filings, driven by its robust pharmaceutical and chemical sectors."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Key regions and their specific IP needs:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Ahmedabad & Vadodara: Pharma & Chemicals</h3>
                      <p className="text-gray-600 mb-4">
                        The heart of India's pharmaceutical industry.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li><strong>Pharma:</strong> Product and process patents for drugs and formulations.</li>
                        <li><strong>Chemicals:</strong> Protecting proprietary manufacturing processes.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Surat: Diamonds & Textiles</h3>
                      <p className="text-gray-600 mb-4">
                        A global hub for gems and fabrics.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li><strong>Diamonds:</strong> Trademarks for jewellery brands and Designs for cuts.</li>
                        <li><strong>Textiles:</strong> Design registration for saree and dress material patterns.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Rajkot: Engineering & Auto Parts</h3>
                      <p className="text-gray-600 mb-4">
                        Known for precision engineering and casting.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li><strong>Engineering:</strong> Patents for machinery and industrial designs for auto components.</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">GIFT City: Fintech & IT</h3>
                      <p className="text-gray-600 mb-4">
                        The emerging financial tech hub.
                      </p>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        <li><strong>Fintech:</strong> Copyrights for software code and patents for financial algorithms.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Legal Framework: Courts & Registries</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Gujarat has a well-defined legal structure for handling IP matters.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Gujarat High Court</h3>
                      <p className="text-lg text-gray-700 mb-3">
                        Located in <strong>Ahmedabad</strong>.
                      </p>
                      <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li><strong>Commercial Courts:</strong> Designated Commercial Courts in districts like Ahmedabad, Vadodara, and Surat handle IPR disputes valued above ₹3 Lakhs.</li>
                        <li><strong>Appellate Jurisdiction:</strong> The High Court hears appeals from these Commercial Courts, ensuring proper interpretation of IP laws.</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-[#D2A02A] pl-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">2. The Trade Marks Registry, Ahmedabad</h3>
                      <p className="text-lg text-gray-700 mb-3">
                        Located at <strong>Ghatlodia, Ahmedabad</strong>.
                      </p>
                      <p className="text-gray-700">
                        <strong>Jurisdiction:</strong> It covers Gujarat, Rajasthan, and Daman & Diu.
                        <br />
                        <strong>Our Role:</strong> Being based in the same city as the Registry allows us to personally follow up on files, attend hearings on short notice, and expedite the registration process.
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
                        <span className="text-4xl mr-4">💊</span>
                        <h3 className="text-2xl font-bold text-gray-900">Pharmaceuticals</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        For the pharma giants and MSMEs in Changodar and Ankleshwar.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Patent Filing</h4>
                          <p>Drafting robust claims for new chemical entities (NCEs) and formulations.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Freedom to Operate</h4>
                          <p>Conducting FTO searches to ensure your product doesn't infringe existing patents.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">💎</span>
                        <h3 className="text-2xl font-bold text-gray-900">Gems & Jewellery</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        For the diamond merchants of Varachha and Mahidharpura.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Global Trademarks</h4>
                          <p>Protecting your brand in key export markets like the USA and Dubai via the Madrid Protocol.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Design Registration</h4>
                          <p>Securing rights for unique jewellery settings and cuts.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                      <div className="flex items-center mb-4">
                        <span className="text-4xl mr-4">🧪</span>
                        <h3 className="text-2xl font-bold text-gray-900">Chemicals & Petrochemicals</h3>
                      </div>
                      <p className="text-gray-700 mb-4">
                        For the industrial estates of Dahej and Vapi.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Process Patents</h4>
                          <p>Protecting innovative manufacturing processes that improve yield or reduce waste.</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-bold text-[#D2A02A] mb-2">Trade Secrets</h4>
                          <p>Drafting NDAs to protect confidential chemical formulas and recipes.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Registration Process */}
                <section id="registration-process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Registration Process (Jurisdiction: Ahmedabad)</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Filing in Gujarat is efficient due to the local registry.
                  </p>
                  
                  <div className="relative border-l-4 border-gray-200 ml-6 space-y-10">
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 1: Search & Strategy</h3>
                      <p className="text-gray-700">
                        We conduct a deep search to ensure your IP is unique and advise on the best protection strategy (Patent vs. Trade Secret).
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 2: Filing</h3>
                      <p className="text-gray-700">
                        We prepare and file the application at the Ahmedabad Registry. For patents, we draft detailed specifications.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 3: Prosecution</h3>
                      <p className="text-gray-700">
                        We handle all correspondence with the examiner, filing responses to objections within statutory timelines.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 4: Hearing</h3>
                      <p className="text-gray-700">
                        Our attorneys appear in person at the Ghatlodia office to argue your case.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Step 5: Grant & Renewal</h3>
                      <p className="text-gray-700">
                        Once granted, we manage the renewals to keep your IP active.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Enforcement */}
                <section id="enforcement" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Enforcement: Protecting Your Market Share</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Gujarat has a strong enforcement mechanism against IP violations.
                  </p>
                  <div className="bg-red-50 p-8 rounded-xl border border-red-100 mb-8">
                    <h3 className="text-xl font-bold text-red-900 mb-4">Legal Remedies</h3>
                    <ul className="space-y-4 text-red-800">
                      <li className="flex items-start">
                        <span className="font-bold mr-2">1. Commercial Suits:</span>
                        <span>Filing suits in District Commercial Courts for damages and injunctions against infringers.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">2. Criminal Action:</span>
                        <span>Lodging complaints with the CID Crime (Economic Offences Wing) for raids on counterfeit manufacturing units.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold mr-2">3. Customs Enforcement:</span>
                        <span>Recording IP with Customs at Mundra and Kandla ports to stop the import/export of infringing goods.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Government Support */}
                <section id="government-support" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Government Support: Gujarat Industrial Policy</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Gujarat Government offers some of the best IP incentives in India.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="text-xl font-bold text-green-900 mb-3">Patent Assistance</h3>
                      <p className="text-green-800 mb-2">For MSMEs under the Industrial Policy 2020:</p>
                      <ul className="list-disc pl-5 text-green-800 space-y-2">
                        <li><strong>75% Subsidy</strong> on total expenditure.</li>
                        <li>Maximum cap of <strong>₹25 Lakhs</strong> per applicant.</li>
                        <li>Covers attorney fees, government fees, and search reports.</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="text-xl font-bold text-green-900 mb-3">Technology Acquisition</h3>
                      <p className="text-green-800 mb-2">Support for upgrading technology:</p>
                      <ul className="list-disc pl-5 text-green-800 space-y-2">
                        <li><strong>65% Assistance</strong> for acquiring foreign patented technology.</li>
                        <li>Maximum cap of <strong>₹50 Lakhs</strong>.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Common Mistakes */}
                <section id="common-mistakes" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Common IP Mistakes in Gujarat</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Delaying Patent Filing</h3>
                        <p className="text-gray-700 text-sm">Disclosing an invention in a trade fair or publication before filing a patent application destroys its novelty, making it unpatentable.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold">✕</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-900">Overlooking Designs</h3>
                        <p className="text-gray-700 text-sm">Jewellery and textile manufacturers often focus only on trademarks, missing out on Design Registration which protects the visual appeal of their products.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions in Gujarat?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We combine technical expertise with legal acumen.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🔬</div>
                      <h3 className="font-bold text-xl mb-2">Pharma Experts</h3>
                      <p className="text-gray-600">Specialized team for drafting complex pharmaceutical and chemical patents.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🏢</div>
                      <h3 className="font-bold text-xl mb-2">Ahmedabad Based</h3>
                      <p className="text-gray-600">Direct access to the Trademark Registry and High Court in Ahmedabad.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">💰</div>
                      <h3 className="font-bold text-xl mb-2">Subsidy Guidance</h3>
                      <p className="text-gray-600">Proven track record of helping MSMEs claim the 75% government subsidy.</p>
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
                        "We are a chemical manufacturing unit in Dahej. AMA Legal Solutions helped us patent our new process and guided us through the subsidy paperwork. We received ₹20 Lakhs back from the government."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">M</div>
                        <div>
                          <p className="font-bold text-gray-900">Manish Desai</p>
                          <p className="text-sm text-gray-500">Director, ChemTech Industries</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Our diamond jewellery designs were being copied. AMA filed a design infringement suit in Surat Commercial Court and got us an injunction in record time."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">K</div>
                        <div>
                          <p className="font-bold text-gray-900">Ketan Mehta</p>
                          <p className="text-sm text-gray-500">Owner, Mehta Jewellers</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Protect Your Business in Gujarat</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Secure your hard-earned innovations with Gujarat's most trusted IP experts.
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
                    Get immediate assistance for patent filing and litigation in Gujarat.
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

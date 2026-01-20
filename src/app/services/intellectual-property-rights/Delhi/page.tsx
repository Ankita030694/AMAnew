import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// Extensive FAQ data for rendering and Schema
const faqs = [
  {
    question: "Where is the Trademark Registry located in Delhi?",
    answer: "The Trademark Registry for the Delhi jurisdiction is located at Boudhik Sampada Bhawan, Plot No. 32, Sector 14, Dwarka, New Delhi. This office handles trademark applications, hearings, and oppositions for Delhi, Haryana, Punjab, Himachal Pradesh, Jammu & Kashmir, Chandigarh, and Uttarakhand. Our team regularly visits this office to attend hearings and expedite client files."
  },
  {
    question: "What is the role of the Intellectual Property Division (IPD) in the Delhi High Court?",
    answer: "Established in 2021, the IPD is a specialized division of the Delhi High Court dedicated to handling all IP-related matters. It adjudicates on infringement suits, revocation petitions, and appeals from the Registry. The IPD is known for its speed and efficiency, using video conferencing and specialized rules to fast-track cases. It has made Delhi the preferred venue for high-stakes IP litigation in India."
  },
  {
    question: "How can I protect my startup's IP in Gurgaon or Noida?",
    answer: "Startups in the NCR region (Gurgaon, Noida, Delhi) must prioritize IP protection early. You should file provisional patent applications for your tech innovations to secure a priority date. For branding, trademark registration is essential. Use Non-Disclosure Agreements (NDAs) with employees. Startups can also avail benefits under the government's SIPP scheme, including an 80 percent rebate on patent fees, which we can help you facilitate."
  },
  {
    question: "What legal actions can be taken against counterfeiters in Delhi markets?",
    answer: "Delhi has several hotspots for duplicates, such as Sadar Bazar and Nehru Place. Legal remedies include filing a civil suit for a permanent injunction in the High Court. We can seek a 'John Doe' (Ashok Kumar) order to raid unknown infringers. Additionally, we can file criminal complaints with the Economic Offences Wing (EOW) of the Delhi Police for search and seizure operations to confiscate the fake goods."
  },
  {
    question: "How long does trademark registration take in Delhi?",
    answer: "If there are no objections or oppositions, a trademark can be registered in approximately 6 to 8 months. However, if the Registry in Dwarka raises an objection, it typically takes another 6 to 12 months for the legal reply and hearing process. Litigation or third-party oppositions can extend this timeline further. We strive to expedite this by filing accurate responses promptly."
  },
  {
    question: "What represents a 'John Doe' order in IP litigation?",
    answer: "A 'John Doe' order, also known as an Ashok Kumar order in India, is an injunction issued by the court against unknown persons. This is particularly useful in Delhi for tackling widespread counterfeiting where the specific identity of every infringer is not known. It grants the power to raid and seize goods from any party found infringing the plaintiff's rights during the enforcement drive."
  },
  {
    question: "Can I file for a patent if I have already displayed my invention in an exhibition in Delhi?",
    answer: "Generally, public disclosure destroys novelty. However, the Indian Patents Act provides a grace period of 12 months if the invention was displayed at an industrial or other exhibition notified by the Central Government. You must file the patent application within 12 months of such display. It is best to consult us before any public unveiling to ensure your rights are preserved."
  },
  {
    question: "What is the cost of filing a trademark in Delhi?",
    answer: "The government fee for filing a trademark application online is ₹4,500 for individuals, startups, and MSMEs, and ₹9,000 for other entities (like large companies). Professional fees for drafting, search, and filing are additional. We offer competitive packages for startups in Delhi NCR to ensure affordable protection."
  },
  {
    question: "Do I need to be physically present for IP hearings in Delhi?",
    answer: "Not necessarily. The Delhi High Court and the Trademark Registry have adopted hybrid hearing models. Most hearings can be attended via video conferencing. Our attorneys handle extensive arguments virtually. However, if personal presence is required or strategic for the case, we will accompany you to the court or registry."
  },
  {
    question: "What is the difference between a trademark and a copyright?",
    answer: "A trademark protects branding elements like logos, brand names, and slogans that distinguish your goods from others (e.g., your company name). Copyright protects original artistic, literary, musical, or dramatic works (e.g., software code, website content, books). While trademarks must be registered to have the strongest protection, copyright exists automatically upon creation, though registration is recommended for enforcement."
  },
  {
    question: "Can I register a sound or smell as a trademark in India?",
    answer: "Yes, non-conventional trademarks like sound marks (e.g., the Yahoo yodel) and smell marks are registrable in India if they are graphically representable and capable of distinguishing the goods. The Delhi Registry has granted registrations for sound marks. These require specialized evidence of distinctiveness, which our team can help collate."
  },
  {
    question: "What are the benefits of the SIPP scheme for Delhi startups?",
    answer: "The Scheme for Facilitating Startups Intellectual Property Protection (SIPP) is a central government initiative. It provides startups with access to empanelled facilitators (attorneys) whose fees are paid by the government. Startups only pay the statutory government fees, which are also significantly subsidized (80 percent for patents, 50 percent for trademarks). It makes IP protection highly accessible."
  },
  {
    question: "How do I transfer my IP rights to another company?",
    answer: "IP rights can be transferred through an 'Assignment' or 'Licensing' agreement. An assignment transfers ownership permanently (like selling a house), while licensing grants permission to use the IP for a fee (like renting). These agreements must be in writing and should be recorded with the respective IP office (Trademark Registry in Dwarka or Patent Office) to be legally binding against third parties."
  },
  {
    question: "What is trademark infringement vs passing off?",
    answer: "Infringement is a statutory remedy available only for registered trademarks. You sue for violation of your exclusive rights. Passing off is a common law tort used to protect unregistered marks where you must prove that you have an established reputation (goodwill), that the defendant made a misrepresentation, and that it caused damage to your business. The Delhi High Court hears both types of matters."
  },
  {
    question: "Why should I choose a Delhi-based law firm for my IP needs?",
    answer: "Choosing a Delhi-based firm like AMA Legal Solutions gives you a strategic advantage. We have immediate access to the Trademark Registry in Dwarka and the Patent Office. We appear daily before the Delhi High Court's IP Division. Our relationships with local enforcement agencies (EOW) facilitate quicker raids and actions compared to out-of-station firms."
  }
];

// Breadcrumb Schema
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

// Article Schema
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
  "dateModified": "2024-01-20"
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

// Review Schema
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
      "reviewBody": "Excellent guidance for our fintech startup in Gurgaon. They handled our trademark and patent filings seamlessly. The SIPP scheme benefits were explained clearly."
    }
  ]
};

// WebPage Schema
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Intellectual Property Rights Services in Delhi NCR | Top IP Lawyers",
  "description": "Secure your IP in India's capital. AMA Legal Solutions offers expert Trademark, Patent & Copyright services in Delhi, Gurgaon & Noida. Litigation support at Delhi High Court.",
  "url": "https://amalegalsolutions.com/services/intellectual-property-rights/Delhi",
};

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

export default function DelhiIPRPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "delhi-advantage", title: "The Delhi Advantage" },
    { id: "legal-framework", title: "High Court & Registry" },
    { id: "industry-focus", title: "Industry Solutions" },
    { id: "practice-areas", title: "Our Services" },
    { id: "registration-process", title: "Registration Process" },
    { id: "enforcement", title: "Raids & Litigation" },
    { id: "startups-government", title: "Startup Support" },
    { id: "testimonials", title: "Client Reviews" },
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
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <Script
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: "url('/services/ipr-hero-delhi.jpg')", backgroundColor: "#1e293b" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-28 md:py-36 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight mt-10">
              Secure Your Brand In <span className="text-[#D2A02A]">Delhi NCR</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-200 font-light">
              From the High Court's IP Division to the Dwarka Registry. We provide comprehensive protection for your Trademarks, Patents, and Copyrights in India's capital.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg border-2 border-[#D2A02A]">
                  Free IP Consultation
                </button>
              </Link>
              <a href="tel:+918700343611">
                <button className="bg-transparent hover:bg-white/10 text-white font-bold py-4 px-10 rounded-full transition-all border-2 border-white text-lg">
                  Call: +91-8700343611
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-12">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              
              <TableOfContents sections={tocSections} className="lg:hidden mb-12" />

              <div className="bg-white p-6 md:p-12 rounded-2xl shadow-sm space-y-16 border border-gray-100">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 relative inline-block">
                    Intellectual Property in the Capital
                    <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-[#D2A02A]"></span>
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                    <p>
                      <strong>Delhi NCR</strong> demands a robust strategy to protect intangible assets. As the political and commercial heart of India, it attracts the biggest brands and, unfortunately, the boldest counterfeiters. From the chaotic wholesale markets of <em>Chandni Chowk</em> and <em>Sadar Bazar</em> to the gleaming tech hubs of <em>Gurgaon</em> and <em>Noida</em>, Intellectual Property Rights (IPR) are the currency of modern business.
                    </p>
                    <p>
                      In this highly competitive landscape, merely having a unique idea is not enough. You must legally secure it. <strong>AMA Legal Solutions</strong> stands as a fortress for your creativity. We are not just lawyers; we are IP strategists located in close proximity to the <strong>Trademark Registry in Dwarka</strong> and the <strong>Delhi High Court</strong>. Whether you are a bootstrapping startup needing a patent or an established corporation fighting trademark infringement, our specialized team delivers results with precision and speed.
                    </p>
                  </div>
                </section>

                {/* Delhi Advantage */}
                <section id="delhi-advantage" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">The Delhi Advantage: Why IP Matters Here</h2>
                  <div className="bg-blue-50 border-l-8 border-blue-600 p-8 mb-10 rounded-r-xl shadow-sm">
                    <p className="text-xl text-blue-900 italic font-medium">
                      "Delhi is the only jurisdiction in India with a dedicated Intellectual Property Division (IPD) in its High Court, making it the country's premier venue for IP litigation."
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all group">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-2xl">🏛️</span>
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-gray-900">Regulatory Headquarters</h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        Being in the capital means direct access to policy makers and registers.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#D2A02A] rounded-full mr-2"></span><strong>Copyright Office (Dwarka):</strong> Central filings for all of India.</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#D2A02A] rounded-full mr-2"></span><strong>DPIIT (Udyog Bhawan):</strong> The central policy node for IP in India.</li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all group">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-2xl">🦄</span>
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-gray-900">Startup Capital</h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        With India's highest concentration of unicorns in Gurgaon/Noida.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#D2A02A] rounded-full mr-2"></span><strong>Fintech & SaaS:</strong> Critical need for software patents.</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#D2A02A] rounded-full mr-2"></span><strong>D2C Brands:</strong> Heavy reliance on trademark protection.</li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all group">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-2xl">🛍️</span>
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-gray-900">Traditional Markets</h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        Old Delhi markets are centers of trade and potential infringement.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#D2A02A] rounded-full mr-2"></span><strong>Textiles:</strong> Design protection in Gandhi Nagar.</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#D2A02A] rounded-full mr-2"></span><strong>Auto Parts:</strong> Trademark enforcement in Kashmere Gate.</li>
                      </ul>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all group">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-2xl">📚</span>
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-gray-900">Media & Publishing</h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        Delhi is the hub for national media and publishing houses.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#D2A02A] rounded-full mr-2"></span><strong>Daryaganj:</strong> Copyright enforcement for books.</li>
                        <li className="flex items-center"><span className="w-1.5 h-1.5 bg-[#D2A02A] rounded-full mr-2"></span><strong>Newsrooms:</strong> Protecting broadcast rights.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Legal Framework: The Power of Delhi Courts</h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    When disputes arise, the venue matters. Delhi offers a judicial infrastructure that is unmatched in its expertise and efficiency regarding Intellectual Property.
                  </p>
                  
                  <div className="space-y-6">
                    {/* High Court */}
                    <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                      <div className="bg-[#1e293b] text-white p-6 md:w-1/3 flex flex-col justify-center items-center text-center">
                        <span className="text-5xl mb-4">⚖️</span>
                        <h3 className="text-xl font-bold">Delhi High Court (IPD)</h3>
                      </div>
                      <div className="p-8 md:w-2/3">
                        <p className="text-gray-700 mb-4">
                           The <strong>Intellectual Property Division (IPD)</strong> was created to handle the influx of technical cases. It deals with infringement suits, revocation/cancellation petitions, and appeals from the Registry.
                        </p>
                        <ul className="list-disc pl-5 text-gray-600 space-y-2 text-sm">
                          <li><strong>Specialized Judges:</strong> Cases are heard by judges with subject matter expertise.</li>
                          <li><strong>Hybrid Hearings:</strong> Efficient use of video conferencing saves legal costs.</li>
                          <li><strong>Strict Timelines:</strong> Designed to prevent delays common in civil suits.</li>
                        </ul>
                      </div>
                    </div>

                    {/* Registry */}
                    <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                      <div className="bg-[#D2A02A] text-white p-6 md:w-1/3 flex flex-col justify-center items-center text-center">
                        <span className="text-5xl mb-4">📝</span>
                        <h3 className="text-xl font-bold">Trademark Registry (Dwarka)</h3>
                      </div>
                      <div className="p-8 md:w-2/3">
                        <p className="text-gray-700 mb-4">
                           Located at <strong>Sector 14, Dwarka</strong>, this office has jurisdiction over North India (Delhi, Haryana, Punjab, etc.).
                        </p>
                        <p className="text-gray-700 text-sm">
                           Our proximity allows us to physically visit for:
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                           <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold text-gray-700 border border-gray-300">Show Cause Hearings</span>
                           <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold text-gray-700 border border-gray-300">Rectifications</span>
                           <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold text-gray-700 border border-gray-300">Opposition Proceedings</span>
                        </div>
                      </div>
                    </div>

                    {/* EOW */}
                    <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                      <div className="bg-[#ef4444] text-white p-6 md:w-1/3 flex flex-col justify-center items-center text-center">
                        <span className="text-5xl mb-4">👮</span>
                        <h3 className="text-xl font-bold">Economic Offences Wing (EOW)</h3>
                      </div>
                      <div className="p-8 md:w-2/3">
                        <p className="text-gray-700 mb-4">
                           The Delhi Police EOW has a specialized unit to tackle IP crimes. They are instrumental in executing raids.
                        </p>
                        <p className="text-gray-700 text-sm">
                           We coordinate with them for criminal enforcement actions against manufacturers of counterfeit goods in industrial belts like Okhla and Bawana.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Practice Areas */}
                <section id="practice-areas" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Our IPR Services in Delhi NCR</h2>
                   <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <span className="bg-blue-100 text-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">™</span>
                          Trademark Registration
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          Comprehensive brand protection services at the Delhi Registry.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                          <li>• Search & Availability Analysis</li>
                          <li>• Filing Applications (TM-A)</li>
                          <li>• Responding to Examination Reports</li>
                          <li>• Opposition Management</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <span className="bg-purple-100 text-purple-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">💡</span>
                          Patent Filing
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          Serving the innovation hubs of Gurgaon and Noida.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                          <li>• Prior Art Search</li>
                          <li>• Provisional & Complete Specification Drafting</li>
                          <li>• PCT (International) Filings</li>
                          <li>• Fast-Track Examination for Startups</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <span className="bg-orange-100 text-orange-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">©</span>
                          Copyright Services
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          Protecting creativity in publishing, software, and media.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                          <li>• Literature, Software & Music Registration</li>
                          <li>• Takedown Notices for Online Piracy</li>
                          <li>• Licensing Agreements</li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                          <span className="bg-red-100 text-red-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">⚖️</span>
                          IP Litigation
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          Aggressive representation at the Delhi High Court.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-500">
                          <li>• Permanent Injunction Suits</li>
                          <li>• John Doe Orders (Raids)</li>
                          <li>• Passing Off Actions</li>
                          <li>• Domain Name Disputes</li>
                        </ul>
                      </div>
                   </div>
                </section>

                {/* Registration Process */}
                <section id="registration-process" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Registration Workflow at TMR Delhi</h2>
                  <p className="text-lg text-gray-700 mb-8">
                    Our structured approach ensures higher acceptance rates at the Dwarka Registry.
                  </p>
                  
                  <div className="relative border-l-4 border-gray-100 ml-4 md:ml-6 space-y-12">
                    <div className="relative pl-10">
                      <div className="absolute -left-[14px] top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">1. The Search</h3>
                      <p className="text-gray-600 text-sm">
                        We don't just check the database; we check the markets. A common law search in Delhi's trade hubs helps assess risks of 'passing off' claims later.
                      </p>
                    </div>
                    <div className="relative pl-10">
                      <div className="absolute -left-[14px] top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">2. Filing at Dwarka</h3>
                      <p className="text-gray-600 text-sm">
                        We file the application (TM-A) with the Delhi jurisdiction. Precision in class selection (Nice Classification) is key here.
                      </p>
                    </div>
                    <div className="relative pl-10">
                      <div className="absolute -left-[14px] top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">3. Examination & Reply</h3>
                      <p className="text-gray-600 text-sm">
                        If an objection is raised (e.g., Section 9 or 11), we draft a robust legal reply citing Delhi High Court precedents to overcome it.
                      </p>
                    </div>
                    <div className="relative pl-10">
                      <div className="absolute -left-[14px] top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">4. Hearing</h3>
                      <p className="text-gray-600 text-sm">
                        Our attorneys appear personally at Boudhik Sampada Bhawan in Dwarka for the Show Cause Hearing to argue your case.
                      </p>
                    </div>
                    <div className="relative pl-10">
                      <div className="absolute -left-[14px] top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">5. Registration</h3>
                      <p className="text-gray-600 text-sm">
                        Once advertised and unopposed for 4 months, the Registration Certificate is issued, valid for 10 years.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Enforcement */}
                <section id="enforcement" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Enforcement: Taking Action Against Infringers</h2>
                  <div className="bg-red-50 p-8 rounded-2xl border border-red-100">
                    <p className="text-lg text-red-900 mb-6 font-medium">
                      Delhi is a transit hub, making it a hotspot for counterfeit goods. When dialogue fails, we take decisive action.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                       <div className="bg-white p-5 rounded-lg shadow-sm">
                          <h4 className="font-bold text-red-700 mb-2">John Doe Orders</h4>
                          <p className="text-gray-600 text-sm">
                            We obtain "Ashok Kumar" orders from the High Court, allowing court commissioners to raid premises of unknown infringers without prior notice.
                          </p>
                       </div>
                       <div className="bg-white p-5 rounded-lg shadow-sm">
                          <h4 className="font-bold text-red-700 mb-2">Local Commissioner Raids</h4>
                          <p className="text-gray-600 text-sm">
                            Court-appointed officials seize stock, seal premises, and preserve evidence in markets like Nehru Place or Sadar Bazar.
                          </p>
                       </div>
                       <div className="bg-white p-5 rounded-lg shadow-sm">
                          <h4 className="font-bold text-red-700 mb-2">Customs Recordal</h4>
                          <p className="text-gray-600 text-sm">
                            We record your IP with Customs at Tughlakabad ICD to intercept and seize counterfeit imports entering the capital.
                          </p>
                       </div>
                       <div className="bg-white p-5 rounded-lg shadow-sm">
                          <h4 className="font-bold text-red-700 mb-2">Criminal Actions</h4>
                          <p className="text-gray-600 text-sm">
                            Filing FIRs under the Copyright Act or Trademark Act for cognizable offenses, leading to immediate police action.
                          </p>
                       </div>
                    </div>
                  </div>
                </section>

                {/* Startup Support */}
                <section id="startups-government" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Government Support for Delhi Startups</h2>
                   <p className="text-lg text-gray-700 mb-6">
                     The government helps foot the bill for protecting innovation.
                   </p>
                   <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
                         <h3 className="text-xl font-bold text-green-800 mb-4">SIPP Scheme</h3>
                         <p className="text-green-700 mb-4 text-sm">
                           Start-ups Intellectual Property Protection (SIPP) scheme is a boon for DPIIT recognized startups.
                         </p>
                         <ul className="text-sm font-medium text-green-800 space-y-2">
                           <li className="flex items-center">✓ 80% Rebate on Patent Fees</li>
                           <li className="flex items-center">✓ 50% Rebate on Trademark Fees</li>
                           <li className="flex items-center">✓ Free Facilitator Services (Legal Fees Paid by Govt)</li>
                         </ul>
                      </div>
                      <div className="bg-green-50 p-8 rounded-2xl border border-green-100">
                         <h3 className="text-xl font-bold text-green-800 mb-4">Delhi Startup Policy</h3>
                         <p className="text-green-700 mb-4 text-sm">
                           The Delhi Government actively fosters the ecosystem.
                         </p>
                         <ul className="text-sm font-medium text-green-800 space-y-2">
                           <li className="flex items-center">✓ Incubation Centers in Universities</li>
                           <li className="flex items-center">✓ Reimbursement of Patent Filing Costs</li>
                           <li className="flex items-center">✓ Collateral-free loans for IP-backed ventures</li>
                         </ul>
                      </div>
                   </div>
                </section>

                {/* Reviews */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Client Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm relative">
                      <div className="text-6xl text-gray-100 absolute top-4 left-4 font-serif">"</div>
                      <p className="text-gray-700 italic mb-6 relative z-10 text-lg leading-relaxed">
                        We needed urgent injunction against a counterfeiter in Sadar Bazar. AMA Legal Solutions moved the Delhi High Court swiftly and got us a John Doe order in record time. Their knowledge of the local courts is impressive.
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">V</div>
                        <div>
                          <p className="font-bold text-gray-900">Vikram Singh</p>
                          <p className="text-sm text-gray-500">Director, Singh Electronics</p>
                          <div className="flex text-[#D2A02A] text-sm mt-1">
                            ★★★★★
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm relative">
                      <div className="text-6xl text-gray-100 absolute top-4 left-4 font-serif">"</div>
                      <p className="text-gray-700 italic mb-6 relative z-10 text-lg leading-relaxed">
                        Excellent guidance for our fintech startup in Gurgaon. They handled our trademark and patent filings seamlessly. The SIPP scheme benefits were explained clearly, saving us a lot of money.
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">A</div>
                        <div>
                          <p className="font-bold text-gray-900">Anjali Sharma</p>
                          <p className="text-sm text-gray-500">Co-Founder, PayEasy Tech</p>
                          <div className="flex text-[#D2A02A] text-sm mt-1">
                            ★★★★★
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32 mb-12">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                  <div className="grid gap-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                          <span className="text-[#D2A02A] mr-3 mt-1">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-8 text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-r from-[#D2A02A] to-[#b88a22] rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Protect Your Intellectual Property in Delhi</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto font-light">
                      Don't leave your brand vulnerable. Partner with Delhi's top IP experts today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-white text-[#b88a22] font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Start Registration
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#D2A02A]"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Talk to an IP Expert</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Get immediate assistance for trademark filing, objections, or litigation in Delhi NCR.
                </p>
                <a 
                  href="tel:+918700343611" 
                  className="block w-full bg-[#D2A02A] text-white text-center py-4 rounded-xl font-bold hover:bg-[#b88a22] transition-colors mb-4 shadow-md"
                >
                  Call +91-8700343611
                </a>
                <Link 
                  href="/contact" 
                  className="block w-full border-2 border-gray-200 text-gray-700 text-center py-4 rounded-xl font-bold hover:border-[#D2A02A] hover:text-[#D2A02A] transition-all"
                >
                  Request Callback
                </Link>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link href="/services/corporate" className="group flex items-center text-gray-600 hover:text-[#D2A02A] transition-colors">
                      <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-[#D2A02A]"></span>
                      Corporate Law
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/entertainment" className="group flex items-center text-gray-600 hover:text-[#D2A02A] transition-colors">
                      <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-[#D2A02A]"></span>
                      Entertainment Law
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/cyber" className="group flex items-center text-gray-600 hover:text-[#D2A02A] transition-colors">
                      <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-[#D2A02A]"></span>
                      Cyber Crime
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/litigation" className="group flex items-center text-gray-600 hover:text-[#D2A02A] transition-colors">
                      <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-[#D2A02A]"></span>
                      Litigation Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">IPR Services Across India</h2>
            <GenericStatesGrid serviceName="Trademark Registration" servicePath="intellectual-property-rights" />
          </div>
        </div>
      </div>
    </>
  );
}

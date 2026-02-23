import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";

export const metadata = {
  title: "Intellectual Property Rights in Punjab | Trademark & Patent Lawyers Ludhiana Jalandhar",
  description:
    "Protect your brand in Punjab with AMA Legal Solutions. We specialize in IPR services for Ludhiana's textile industry, Jalandhar's sports goods, and Mohali's tech startups. Expert litigation at Punjab & Haryana High Court.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/intellectual-property-rights/Punjab',
  },
  openGraph: {
    title: "Intellectual Property Rights in Punjab | Trademark & Patent Lawyers Ludhiana Jalandhar",
    description: "Protect your brand in Punjab with AMA Legal Solutions. We specialize in IPR services for Ludhiana's textile industry, Jalandhar's sports goods, and Mohali's tech startups.",
    url: "https://amalegalsolutions.com/services/intellectual-property-rights/Punjab",
    type: "website",
    images: [
      {
        url: "/services/4.png",
        width: 1200,
        height: 630,
        alt: "IPR Services Punjab",
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
      "name": "Punjab",
      "item": "https://amalegalsolutions.com/services/intellectual-property-rights/Punjab"
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Intellectual Property Rights Services in Punjab: Shielding Innovation from Ludhiana to Chandigarh",
  "description": "A comprehensive guide to IPR in Punjab. Covering Trademark Class 25 for Hosiery, Class 28 for Sports Goods, and patent registration for agro-machinery in Punjab.",
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
  "dateModified": "2026-01-20"
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Intellectual Property Rights in Punjab",
  "description": "Expert legal services for Trademark, Patent, and Copyright registration and litigation in Punjab, serving Ludhiana, Jalandhar, Amritsar, and Mohali.",
  "mainEntity": {
    "@type": "Service",
    "serviceType": "Legal Services",
    "areaServed": {
      "@type": "State",
      "name": "Punjab"
    },
    "provider": {
      "@type": "LegalService",
      "name": "AMA Legal Solutions",
      "image": "https://amalegalsolutions.com/ama-legal-solutions-logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110075",
        "addressCountry": "IN"
      },
      "telephone": "+918700343611"
    }
  }
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "IPR Legal Services Punjab",
  "image": "https://amalegalsolutions.com/services/4.png",
  "description": "Specialized Intellectual Property Rights services for Punjab industries including Textiles, Sports Goods, and Agriculture.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "840"
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
        "name": "Harpreet Singh Bedi"
      },
      "reviewBody": "Our sports manufacturing unit in Jalandhar faced severe issues with counterfeit products in local markets. AMA Legal Solutions not only helped us register our trademark but also coordinated with the local police for enforcement. Their knowledge of Punjab's industry is unmatched."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Manish Gupta"
      },
      "reviewBody": "We are a hosiery exporter in Ludhiana. AMA guided us through the Design Registration process for our winter collection. It gave us the confidence to showcase our products at international expos without fear of copying."
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
      "reviewBody": "For our biotech startup in Mohali, filing a patent seemed daunting initially. The team at AMA explained the SIPP scheme benefits and handled the entire drafting and filing process. We received our patent grant much faster than expected."
    }
  ]
};

export default function PunjabIPRPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "punjab-ip-necessity", title: "Why IP Matters in Punjab" },
    { id: "ludhiana-textiles", title: "Ludhiana: Textile & Auto Hub" },
    { id: "jalandhar-sports", title: "Jalandhar: Sports Capital" },
    { id: "mohali-innovation", title: "Mohali: The Tech Triangle" },
    { id: "legal-jurisdiction", title: "Courts & Registries" },
    { id: "agricultural-ip", title: "Agri-Innovation" },
    { id: "trademark-process", title: "Trademark Registration" },
    { id: "patent-process", title: "Patent Filing Guide" },
    { id: "enforcement-raids", title: "Raids & Enforcement" },
    { id: "govt-incentives", title: "Punjab Industrial Policy" },
    { id: "why-ama-punjab", title: "Why Choose Us" },
    { id: "client-testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Intellectual Property Rights", href: "/services/intellectual-property-rights" },
    { label: "Punjab", href: "/services/intellectual-property-rights/Punjab" },
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
        id="webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: "url('/services/punjab-industrial-hero.jpg')", backgroundColor: "#1e293b" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Intellectual Property Protection for <span className="text-[#D2A02A]">Punjab's Industries</span>
            </h1>
            <p className="text-lg md:text-2xl mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Defending the "Made in Punjab" legacy. From the hosiery looms of Ludhiana to the sports factories of Jalandhar, we provide specialized Legal Protection for your Trademarks, Patents, and Designs.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Book a Free Consultation
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full px-4 lg:px-12 py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              
              <div className="lg:hidden mb-8">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 relative">
                    <span className="relative z-10">Protecting the Spirit of Punjab</span>
                    <span className="absolute bottom-0 left-0 w-20 h-1 bg-[#D2A02A]"></span>
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Punjab is not just the granary of India; it is a powerhouse of manufacturing, entrepreneurship, and innovation. The state's industrial landscape is diverse, ranging from the world renowned sports goods industry in <strong>Jalandhar</strong> to the massive hosiery and textile clusters in <strong>Ludhiana</strong>, and the rapidly growing IT and biotech corridor in <strong>Mohali (SAS Nagar)</strong>.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    However, with industrial success comes the threat of imitation. Counterfeiting is a significant challenge in local markets and international exports. A business that fails to secure its <strong>Intellectual Property Rights (IPR)</strong> risks losing its brand identity and market share to cheap knock offs.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    At <strong>AMA Legal Solutions</strong>, we understand the pulse of Punjab's business ecosystem. We provide targeted legal strategies to protect your commercial interests, ensuring that no one else profits from your hard work and reputation.
                  </p>
                </section>

                {/* Punjab IP Necessity */}
                <section id="punjab-ip-necessity" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Why IPR is Critical for Punjab's Growth</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
                    <p className="text-lg text-blue-900 italic">
                      "In an export oriented economy like Punjab, your Trademark is your global passport. Without it, your products are vulnerable at every port."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The necessity for robust IP protection in Punjab arises from its unique industrial structure:
                  </p>
                  <ul className="list-disc pl-6 space-y-4 text-gray-700 text-lg">
                    <li><strong>Export Protection:</strong> Punjab is a major exporter of bicycles, auto parts, and textiles to Africa, Europe, and the Middle East. International Trademark registration (via the Madrid Protocol) is essential to stop counterfeits in these destination markets.</li>
                    <li><strong>Brand Differentiation:</strong> In clustered industries like Jalandhar's sports goods, hundreds of manufacturers make similar products. A registered trademark is the only way to distinguish your premium 'Export Quality' goods from local generic variants.</li>
                    <li><strong>Valuation for MSMEs:</strong> For the thousands of MSMEs in the state, holding patents or designs adds immense value to the company's valuation, helping in securing loans and attracting investors.</li>
                  </ul>
                </section>

                {/* Ludhiana Focus */}
                <section id="ludhiana-textiles" className="scroll-mt-32">
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">🧵</span>
                    <h2 className="text-2xl font-bold text-gray-900">Ludhiana: The Manchester of India</h2>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Ludhiana is the heart of Punjab's industry. Our legal team provides specialized services tailored to the specific needs of this city's stalwarts.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Textiles & Hosiery</h3>
                      <p className="text-gray-600 mb-4">
                        Known for woolens and garments.
                      </p>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li><strong>Trademark Class 25:</strong> Essential for brand names of clothing and footwear.</li>
                        <li><strong>Design Registration:</strong> Protecting unique knitting patterns and fabric prints from being copied by rival mills.</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h3 className="font-bold text-xl mb-3 text-[#D2A02A]">Bicycles & Auto Parts</h3>
                      <p className="text-gray-600 mb-4">
                        Asia's largest bicycle manufacturing hub.
                      </p>
                      <ul className="text-sm text-gray-700 space-y-2">
                        <li><strong>Patents:</strong> Securing rights for new gear mechanisms or energy efficient components.</li>
                        <li><strong>Industrial Design:</strong> Protecting the shape and aesthetics of bicycle frames and rims.</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Jalandhar Focus */}
                <section id="jalandhar-sports" className="scroll-mt-32">
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">🏏</span>
                    <h2 className="text-2xl font-bold text-gray-900">Jalandhar: The Sports Capital</h2>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Jalandhar puts India on the global sports map. From cricket bats used in international tournaments to footballs exported worldwide, the intellectual property stakes are high.
                  </p>
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <h3 className="font-bold text-xl mb-4 text-gray-900">Strategic Protection for Sports Manufacturers</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-2">1. Trademark Class 28:</span>
                        <span className="text-gray-700">We file bulk applications for sports equipment brands, ensuring comprehensive protection for bats, balls, protective gear, and fitness equipment.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-2">2. Combating Fakes:</span>
                        <span className="text-gray-700">Jalandhar faces a menace of 'pass off' products—inferior goods sold under famous brand names. We initiate civil suits and criminal raids to cleanse the market of these fakes.</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-2">3. Hand Tools Industry:</span>
                        <span className="text-gray-700">Apart from sports, Jalandhar is a hub for hand tools. We help manufacturers secure Design rights for ergonomic tool handles and grips.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Mohali Focus */}
                <section id="mohali-innovation" className="scroll-mt-32">
                  <div className="flex items-center mb-6">
                    <span className="text-4xl mr-4">💻</span>
                    <h2 className="text-2xl font-bold text-gray-900">Mohali: The Innovation Hub</h2>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Adjacent to Chandigarh, Mohali (SAS Nagar) has emerged as a major IT and biotech cluster. The IP needs here shift from traditional manufacturing to digital and scientific assets.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border-l-4 border-indigo-500 pl-4">
                      <h3 className="font-bold text-lg mb-2">Software Copyrights</h3>
                      <p className="text-gray-700">For IT companies developing proprietary code, apps, and SaaS platforms. Source code protection is vital.</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h3 className="font-bold text-lg mb-2">Biotech Patents</h3>
                      <p className="text-gray-700">For research labs and pharma units working on new formulations. We assist in complex patent drafting.</p>
                    </div>
                  </div>
                </section>

                {/* Legal Framework */}
                <section id="legal-jurisdiction" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Legal Jurisdiction: Where We Fight for You</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Understanding the jurisdiction is key to effective legal action.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">The Trademark Registry, Delhi</h3>
                      <p className="text-gray-700">
                        All Trademark and Patent applications from Punjab are processed at the <strong>Intellectual Property Office in Dwarka, Delhi</strong>. Being based in Delhi, AMA Legal Solutions has a strategic advantage. We personally attend hearings and follow up on files at the registry, saving you the travel and hassle.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Punjab & Haryana High Court</h3>
                      <p className="text-gray-700">
                        Located in Chandigarh, this High Court has jurisdiction over IP disputes in the region. Whether it is an appeal against a registry decision or a high stakes infringement suit, our seasoned litigators represent you effectively in Chandigarh.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">District Courts</h3>
                      <p className="text-gray-700">
                        For swift injunctions against local infringers, we approach the designated Commercial Courts in Ludhiana, Jalandhar, and Amritsar. These courts are empowered to issue stay orders to immediately halt the manufacturing of fake goods.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Agri Innovation */}
                <section id="agricultural-ip" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Agricultural Innovation</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Punjab is the breadbasket of India, and its agricultural machinery industry is constantly innovating. From laser land levelers to straw management systems (Happy Seeders), these innovations transform farming.
                  </p>
                  <div className="bg-[#fff9e6] p-6 rounded-xl border border-[#D2A02A]">
                    <h3 className="font-bold text-xl mb-3 text-[#B0801D]">Patent Protection for Machinery</h3>
                    <p className="text-gray-700 mb-4">
                      We urge manufacturers to file for Utility Patents before showcasing new machines at agricultural fairs (Kisan Melas). Public disclosure before filing can destroy your chances of getting a patent.
                    </p>
                    <p className="text-gray-700 font-medium">
                      We also assist in registering Geographical Indications (GI) for unique agricultural produce, ensuring the legacy of Punjab's soil is protected.
                    </p>
                  </div>
                </section>

                {/* Trademark Process */}
                <section id="trademark-process" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">The Registration Process</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Our process is streamlined for the convenience of Punjab's business owners. You do not need to visit Delhi; we handle everything digitally and legally.
                  </p>
                  
                  <div className="relative border-l-4 border-gray-200 ml-6 space-y-10">
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">1. Exhaustive Search</h3>
                      <p className="text-gray-700">
                        We check the database to ensure your brand name (e.g., 'Super Star' for bats) is not already taken. This saves your money and time.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">2. Filing Application</h3>
                      <p className="text-gray-700">
                        We draft the application with the correct User Date and Goods Description. Correct drafting reduces the chances of objection by 80%.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">3. Overcoming Objections</h3>
                      <p className="text-gray-700">
                        If the Registry sends an objection (Examination Report), our lawyers draft a strong legal reply citing relevant case laws to clear it.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">4. Registration</h3>
                      <p className="text-gray-700">
                        Once advertised and unopposed for 4 months, you receive your Registration Certificate valid for 10 years.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Enforcement & Raids */}
                <section id="enforcement-raids" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Enforcement & Anti-Counterfeiting</h2>
                  <div className="bg-red-50 p-8 rounded-xl border border-red-100">
                    <h3 className="text-xl font-bold text-red-900 mb-4">Taking Action on Ground</h3>
                    <p className="text-gray-700 mb-6">
                      A registration certificate on the wall is useless if fakes are being sold in the market. We take aggressive action.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-red-800 mb-2">Civil Raids (John Doe Orders)</h4>
                        <p className="text-sm text-red-700">We obtain 'Ashok Kumar' orders from the High Court, allowing court commissioners to raid unknown manufacturers in industrial areas like Focal Point, Ludhiana.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-red-800 mb-2">Criminal Action</h4>
                        <p className="text-sm text-red-700">We coordinate with the Economic Offences Wing (EOW) of Punjab Police to register FIRs under the Trade Marks Act and Copyright Act.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Government Incentives */}
                <section id="govt-incentives" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Punjab Industrial Policy Support</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The Punjab Government aggressively promotes innovation. Under the Industrial and Business Development Policy, MSMEs can claim substantial financial support.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="text-xl font-bold text-green-900 mb-3">MSME Reimbursement</h3>
                      <ul className="list-disc pl-5 text-green-800 space-y-2">
                        <li><strong>Patent Registration:</strong> 75% reimbursement of costs up to ₹10 Lakhs (Domestic) and ₹20 Lakhs (International).</li>
                        <li><strong>Trademark Registration:</strong> 50% reimbursement of filing fees.</li>
                        <li><strong>Geographical Indications:</strong> Reimbursement up to ₹2 Lakhs.</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="text-xl font-bold text-green-900 mb-3">Startup Punjab</h3>
                      <p className="text-green-800 mb-4">
                        Registered startups in Punjab get additional benefits like fast track examination of patent applications, reducing the grant time from years to months.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Why Choose AMA */}
                <section id="why-ama-punjab" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🌐</div>
                      <h3 className="font-bold text-xl mb-2">Delhi Presence</h3>
                      <p className="text-gray-600">We are physically present at the Delhi Registry where your files are processed, ensuring faster approvals.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Litigation Strength</h3>
                      <p className="text-gray-600">Our grasp of the Punjab & Haryana High Court procedures gives you an edge in disputes.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">💰</div>
                      <h3 className="font-bold text-xl mb-2">Subsidy Assistance</h3>
                      <p className="text-gray-600">We don't just file your IP; we help you get the government subsidy money back into your account.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="client-testimonials" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Voices of Trust</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "As a cycle parts manufacturer, I was worried about Chinese imports copying my design. AMA Legal Solutions helped me secure an Industrial Design registration. Now I feel secure."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Rajinder Bansal</p>
                          <p className="text-sm text-gray-500">Ludhiana Engineering Works</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Top notch service for Trademark hearing. We had a difficult objection which two other lawyers failed to clear. AMA Legal Solutions got it cleared in one go."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">A</div>
                        <div>
                          <p className="font-bold text-gray-900">Amit Mahajan</p>
                          <p className="text-sm text-gray-500">Mahajan Exports, Jalandhar</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <FaqSection />

                {/* Call to Action */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Secure Your Business Legacy Today</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't let competitors steal your success. Partner with the leading IP experts in Punjab.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Start IP Registration
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-8 text-sm opacity-70">
                      Serving Ludhiana • Jalandhar • Amritsar • Mohali • Patiala
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
              {/* Talk to Expert Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#D2A02A]"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Talk to an IP Expert</h3>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">👨‍⚖️</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Specialist for</p>
                    <p className="font-bold text-gray-900">Punjab Region</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Get immediate assistance for filings at the Delhi Registry or litigation at the High Court.
                </p>
                <div className="space-y-3">
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-xl font-bold hover:bg-[#b88a22] transition-all transform hover:-translate-y-1 shadow-md"
                  >
                    Call +91-8700343611
                  </a>
                  <Link 
                    href="/contact" 
                    className="block w-full bg-gray-50 text-gray-900 border-2 border-gray-200 text-center py-3 rounded-xl font-bold hover:border-[#D2A02A] hover:text-[#D2A02A] transition-all"
                  >
                    Request Callback
                  </Link>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                  <p className="text-xs text-gray-400 font-medium">CONFIDENTIAL CONSULTATION</p>
                </div>
              </div>

              {/* Review Snippet */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="flex text-[#D2A02A]">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                  </div>
                  <span className="ml-2 text-sm text-gray-400">5.0/5.0</span>
                </div>
                <p className="text-gray-700 italic text-sm mb-4">
                  "They handled our trademark objection case with great expertise. Highly recommended for businesses in Jalandhar."
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600 mr-3">KS</div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Karan S.</p>
                    <p className="text-xs text-gray-500">Sports Goods Mfr.</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <Link href="/services/corporate" className="text-gray-600 hover:text-[#D2A02A] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-[#D2A02A] transition-colors"></span>
                      Corporate Law
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/litigation" className="text-gray-600 hover:text-[#D2A02A] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-[#D2A02A] transition-colors"></span>
                      Litigation Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/cyber-crime" className="text-gray-600 hover:text-[#D2A02A] flex items-center group">
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-3 group-hover:bg-[#D2A02A] transition-colors"></span>
                      Cyber Crime
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
          
          <div className="mt-16">
            <GenericStatesGrid 
              serviceName="Trademark Registration" 
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

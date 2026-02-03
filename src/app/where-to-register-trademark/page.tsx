import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Where is the official trademark registry in India located?",
    answer: "The Head Office of the Trade Marks Registry is in Mumbai. However, there are regional offices located in Delhi, Chennai, Kolkata, and Ahmedabad to facilitate registration based on your place of business. Most applications are now filed online through the IP India e-filing portal, which is accessible from anywhere."
  },
  {
    question: "Can I register a trademark online by myself?",
    answer: "Yes, you can register a trademark online through the official IP India portal (ipindia.gov.in). You will need a Class III Digital Signature Certificate (DSC) to sign the application. While DIY filing is possible, seeking legal expertise is recommended to handle potential objections or complex classification issues."
  },
  {
    question: "What is the difference between the ™ and ® symbols?",
    answer: "The ™ symbol is used when a trademark application has been filed and is pending registration. It indicates that you are claiming rights to the brand. The ® symbol can only be used once the trademark is officially registered and you have received the registration certificate from the Trade Marks Registry."
  },
  {
    question: "How much are the government fees for trademark registration in India?",
    answer: "For individuals, startups, and MSMEs (Small Enterprises), the government fee for online filing is ₹4,500 per class. For other entities like companies and partnership firms, the fee is ₹9,000 per class. Physical filing attracts a higher fee of ₹5,000 for individuals/MSMEs and ₹10,000 for others."
  },
  {
    question: "How long does it take to get a trademark registered?",
    answer: "The entire process usually takes between 6 to 12 months if there are no objections or oppositions. If the registry issues an examination report with objections or if a third party opposes the mark, the timeline can extend to 18 to 24 months depending on the hearings required."
  },
  {
    question: "Is a trademark search mandatory before registration?",
    answer: "While not legally mandatory, a trademark search is highly critical. It helps you identify if a similar or identical mark already exists in the registry. This prevents future legal disputes, reduces the risk of rejection by the registrar, and saves you time and money spent on a failing application."
  },
  {
    question: "What are the 45 classes of trademarks?",
    answer: "Trademarks are categorized under the Nice Classification system, which consists of 45 classes. Classes 1 to 34 are for goods (tangible products), and Classes 35 to 45 are for services. Identifying the correct class is essential for the legal protection of your specific business activities."
  },
  {
    question: "Can I register a sound or a color as a trademark?",
    answer: "Yes, non-conventional trademarks like sounds, colors, and even shapes can be registered if they possess distinctive character and can be represented graphically. Sound marks require a musical notation, and color marks require a description of the specific shade or combination."
  },
  {
    question: "What happens if someone opposes my trademark application?",
    answer: "If an opposition is filed by a third party within four months of publication in the Trademark Journal, you must file a counter-statement within two months. Failing to do so will result in the abandonment of your application. Both parties then submit evidence, followed by a hearing before the Registrar."
  },
  {
    question: "How long is a trademark registration valid for?",
    answer: "A trademark registration is valid for 10 years from the date of the application. It can be renewed indefinitely for successive periods of 10 years by paying the renewal fees within the prescribed time. Neglecting renewal leads to the removal of the mark from the registry."
  }
];

// Review data
const reviews = [
  {
    id: 1,
    author: "Rajesh Khanna",
    rating: 5,
    text: "The team at AMA Legal Solutions was incredibly helpful in identifying the right regional office for our filing. Their knowledge of the IP India portal saved us weeks of potential delays.",
    date: "2024-01-12",
    location: "Mumbai"
  },
  {
    id: 2,
    author: "Anjali Sharma",
    rating: 5,
    text: "Highly recommended for online trademark registration. They handled our multi-class application with precision and successfully navigated a complex objection from the registrar.",
    date: "2024-01-25",
    location: "Delhi"
  },
  {
    id: 3,
    author: "Siddharth Nair",
    rating: 5,
    text: "Fast, professional, and transparent. Getting our trademark certificate was a breeze thanks to their expert attorneys. Truly the best IPR partner in India.",
    date: "2023-12-05",
    location: "Bangalore"
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
      "name": "Where to Register Trademark",
      "item": "https://amalegalsolutions.com/where-to-register-trademark"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Where to Register Trademark in India: A Comprehensive Guide for Brands",
  "description": "Discover where and how to register a trademark in India. Detailed information on regional offices, online filing via IP India, documents, and the registration process.",
  "image": "https://amalegalsolutions.com/services/trademark.png",
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
  "datePublished": "2024-02-03",
  "dateModified": "2024-02-03"
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
  "name": "Trademark Registration Services",
  "image": "https://amalegalsolutions.com/services/trademark.png",
  "description": "Professional trademark registration and IPR services in India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1540"
  },
  "review": reviews.map(r => ({
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": r.rating.toString()
    },
    "author": {
      "@type": "Person",
      "name": r.author
    },
    "reviewBody": r.text
  }))
};

export const metadata = {
  title: "Where to Register Trademark in India | Official Registry & Online Guide",
  description: "Learn where to register a trademark in India. Complete guide to the Trademark Registry offices, online filing through IP India, documents required, and step by step procedure.",
  keywords: [
    "where to register trademark",
    "trademark registration india",
    "ip india portal",
    "trademark registry offices",
    "online trademark registration",
    "how to file trademark",
    "trademark regional offices",
    "intellectual property india",
    "brand registration",
    "trademark application process"
  ],
  alternates: {
    canonical: 'https://amalegalsolutions.com/where-to-register-trademark',
  },
};

export default function WhereToRegisterTrademark() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "brand-philosophy", title: "Brand Identity Philosophy" },
    { id: "definition", title: "What is Trademark Registration?" },
    { id: "where-to-register", title: "Where to Register?" },
    { id: "online-filing", title: "Online E-Filing System" },
    { id: "regional-offices", title: "Regional Trademark Offices" },
    { id: "eligibility", title: "Who Can Register?" },
    { id: "process", title: "The Registration Process" },
    { id: "documents", title: "Documents Required" },
    { id: "common-objections", title: "Handling Registry Objections" },
    { id: "opposition", title: "Managing Third-Party Opposition" },
    { id: "classification", title: "Trademark Classification" },
    { id: "benefits", title: "Benefits of Registration" },
    { id: "renewal", title: "Renewal and Maintenance" },
    { id: "international", title: "International Registration" },
    { id: "infringement", title: "Dealing with Infringement" },
    { id: "reviews", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Where to Register Trademark", href: "/where-to-register-trademark" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section - Scaled Down by 20% */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-24 text-center">
            <h1 className="text-2xl md:text-5xl font-extrabold mb-5 leading-tight mt-6">
              Where to Register <span className="text-[#D2A02A]">Trademark in India</span>: The Complete Guide
            </h1>
            <p className="text-base md:text-xl mb-8 max-w-3xl mx-auto text-gray-200 leading-relaxed font-light">
              Protect your brand identity today. Learn exactly where and how to file your trademark application with the official authorities for maximum legal protection.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl text-base uppercase tracking-wider">
                Consult a Trademark Expert
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-full py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_260px] gap-8 items-start mt-8">
            {/* Left Sidebar - Table of Contents - Scaled Down */}
            <div className="hidden lg:block sticky top-28 bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-base font-bold mb-4 text-gray-900 border-b pb-2">On This Page</h3>
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Middle Container - Main Content - Scaled Down */}
            <div className="min-w-0">
              <div className="bg-white p-5 md:p-10 rounded-2xl shadow-sm space-y-10 text-gray-700">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 font-serif">Securing Your Intellectual Property in the Modern Era</h2>
                  <p className="text-base leading-relaxed mb-5">
                    In the contemporary business landscape, the value of a brand often exceeds the value of its physical assets. A brand is a promise, an expectation, and a repository of customer loyalty. However, in an age where digital mimicry and physical counterfeiting are rampant, protecting this intangible asset becomes the first priority for any serious business owner. The question of <strong>where to register trademark</strong> is not just a logistical query but a fundamental step in the legal architectural design of your company.
                  </p>
                  <p className="text-base leading-relaxed mb-5">
                    The Indian economy has seen a dramatic shift in how brands are perceived and protected. With the "Make in India" initiative and the rise of the digital startup ecosystem, the number of trademark applications has skyrocketed. This surge has led to the evolution of the Indian Trademark Registry, which has transitioned from a purely physical, bureaucratically heavy system into a sophisticated, digital first infrastructure.
                  </p>
                  <p className="text-base leading-relaxed mb-5">
                    When you decide to register a trademark, you are essentially seeking a state granted monopoly over a specific identifier. This identifier could be your company name, a unique logo, a catchy slogan, or even the distinct packaging of your product. By knowing exactly where to register trademark and following the prescribed legal channels, you are ensuring that your intellectual property is backed by the full force of Indian law.
                  </p>
                </section>

                {/* Brand Identity Philosophy */}
                <section id="brand-philosophy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 font-serif">The Philosophy Behind Brand Identity Protection</h2>
                  <p className="text-base leading-relaxed mb-5">
                    Before we delve into the locations and procedures, it is important to understand why the registry exists. The primary goal of a trademark is to prevent consumer confusion. Imagine a world where two different companies could sell electronic goods under the name "Samsung." The consumer would have no way of knowing the quality or origin of the product they are buying. Trademark registration solves this by providing "source identification."
                  </p>
                  <p className="text-base leading-relaxed mb-5">
                    Legally, a trademark is a "negative right." It does not necessarily give you the right to do something (though it helps); rather, it gives you the right to stop others from doing something. Specifically, it allows you to stop others from using a mark that is "confusingly similar" to yours in a way that would deceive a customer of average intelligence and imperfect recollection.
                  </p>
                  <p className="text-base leading-relaxed mb-5">
                    This protection is not automatic. While "Common Law" rights exist for brands that have been used for a long time without registration, the burden of proof in such cases (known as "Passing Off") is extremely high and the legal costs are prohibitive. Registration with the official registry provides a "prima facie" evidence of ownership, making legal enforcement significantly easier and cheaper.
                  </p>
                </section>

                {/* What is Trademark Registration */}
                <section id="definition" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 font-serif">What is Trademark Registration?</h2>
                  <div className="bg-[#fff9e6] border-l-4 border-[#D2A02A] p-5 mb-6 rounded-r-lg shadow-sm">
                    <p className="text-lg text-gray-800 italic leading-relaxed">
                      "A trademark registration is a legal protection granted under the Trade Marks Act, 1999, which provides exclusive rights to the proprietor to use a specific mark for their business activities."
                    </p>
                  </div>
                  <p className="text-base leading-relaxed mb-5">
                    In India, the legal framework is primarily governed by the Trade Marks Act of 1999 and the Trade Marks Rules of 2017. Registration covers a period of 10 years and is applicable across the entire territory of India. It is a national right, meaning a registration in Mumbai is equally valid in Nagaland or Kerala.
                  </p>
                  <p className="text-base leading-relaxed mb-5">
                    The registration covers various aspects of branding. You can register word marks (standard text), device marks (logos), labels, color combinations, and even three dimensional shapes. Non-conventional trademarks like sound marks (e.g., the Nokia tune or the Britannia jingle) are also becoming common. The key requirement is that the mark must be capable of being represented graphically and must have a distinctive character.
                  </p>
                  <p className="text-base leading-relaxed mb-5">
                    Furthermore, the act divides goods and services into 45 different classes. This system, known as the Nice Classification, ensures that registration is specific. For example, a company might use the name "Everest" for tea (Class 30) while another company uses "Everest" for cement (Class 19). Because the products are vastly different, both marks can often coexist unless one is so well-known that it transcends its specific class.
                  </p>
                </section>

                {/* Where to Register */}
                <section id="where-to-register" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 font-serif">Exactly Where to Register Trademark: The Official Authority</h2>
                  <p className="text-base leading-relaxed mb-5">
                    The official answer to where to register trademark is the <strong>Office of the Controller General of Patents, Designs and Trade Marks (CGPDTM)</strong>. This office is a specialized department under the Ministry of Commerce and Industry, Government of India. It is often colloquially referred to as the "Trademark Registry."
                  </p>
                  <p className="text-base leading-relaxed mb-5">
                    The head of this organization is the Controller General, who oversees the administration of all intellectual property legislation in the country. The registry operates through a decentralized network of offices to manage the regional jurisdictional needs of businesses. However, the centralized database ensures that there is no duplication and that the priority of filings is maintained nationally.
                  </p>
                  <p className="text-base leading-relaxed mb-5">
                    It is crucial to file in the correct jurisdiction. If you file in a registry office that does not have jurisdiction over your principal place of business, your application may be rejected or required to be transferred, causing significant delays. If the applicant is a foreign entity, the jurisdiction is determined by the address of their attorney or agent in India.
                  </p>
                  <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 flex items-start gap-4 shadow-inner">
                    <div className="text-xl text-blue-500 font-bold">!</div>
                    <p className="text-blue-900 font-medium text-sm">
                      Critical Point: While physical offices exist, the "location" for 98% of modern filings is the official web portal at ipindia.gov.in. This portal is the gateway to all IP services in India.
                    </p>
                  </div>
                </section>

                {/* Online Filing */}
                <section id="online-filing" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">The IP India Online E-Filing System: The Virtual Hub</h2>
                  <p className="text-lg leading-relaxed mb-6">
                    The digital transformation has redefined where to register trademark. The <strong>Comprehensive e-Filing (CeF)</strong> system launched by the government has made the physical submission of documents nearly obsolete. This portal is a robust, high security platform designed to handle thousands of concurrent users and large file uploads.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    To access this "virtual registry office," users must undergo a registration process that links their account to a Class III Digital Signature Certificate (DSC). This ensures the authenticity and legal validity of the electronic submissions. Once logged in, the portal provides a suite of tools, including internal database searches, form filling wizards, and secure payment gateways.
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Technical Requirements for E-Filing</h3>
                  <p className="text-lg leading-relaxed mb-6">
                    Using the online portal requires some technical preparation. You must use a compatible browser (ideally updated versions of Edge or Chrome) with specific Java settings enabled for the DSC to function correctly. The documents, such as the user affidavit or the power of attorney, must be scanned in PDF format with file size limits (usually under 500KB per document).
                  </p>
                  <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Cost Incentive of Online Filing</h3>
                  <p className="text-lg leading-relaxed mb-6">
                    The government actively discourages physical filing by offering a 10% discount on the official fees for all online submissions. For an individual or startup, this means paying ₹4,500 online versus ₹5,000 for physical filing. For companies, the saving is ₹1,000 (₹9,000 vs. ₹10,000). While these amounts may seem small, when filing for multiple classes, the savings become substantial.
                  </p>
                </section>

                {/* Regional Offices */}
                <section id="regional-offices" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">Physical Regional Trademark Registry Offices</h2>
                  <p className="text-lg leading-relaxed mb-8">
                    Despite the digital shift, physical offices remain the centers for original hearings, documentation audits, and post-registration disputes. Each office serves a specific geographical cluster of states.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border-l-8 border-[#D2A02A]">
                      <div className="bg-gray-800 text-white p-5 font-bold text-xl uppercase tracking-wider">1. Mumbai (The Central Hub)</div>
                      <div className="p-8 text-lg">
                        <p className="mb-4"><strong>Jurisdiction:</strong> The state of Maharashtra, Madhya Pradesh, Chhattisgarh, and Goa.</p>
                        <p className="mb-4"><strong>Significance:</strong> Mumbai serves as the head office where the central administration and database servers are located. Most major corporate filings from India's financial capital are handled here.</p>
                        <p><strong>Address:</strong> Trade Marks Registry, Boudhik Sampada Bhavan, Antop Hill, S.M. Road, Mumbai - 400037.</p>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border-l-8 border-gray-700">
                      <div className="bg-gray-800 text-white p-5 font-bold text-xl uppercase tracking-wider">2. New Delhi (The Political Nexus)</div>
                      <div className="p-8 text-lg">
                        <p className="mb-4"><strong>Jurisdiction:</strong> Delhi, Haryana, Punjab, Himachal Pradesh, Jammu and Kashmir, Ladakh, and Uttar Pradesh.</p>
                        <p className="mb-4"><strong>Significance:</strong> This office handles a massive volume of applications due to the concentration of corporate headquarters in the NCR region and the large industrial belts of Haryana and Punjab.</p>
                        <p><strong>Address:</strong> Trade Marks Registry, Plot No. 32, Sector 14, Dwarka, New Delhi - 110075.</p>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border-l-8 border-[#D2A02A]">
                      <div className="bg-gray-800 text-white p-5 font-bold text-xl uppercase tracking-wider">3. Chennai (The Southern Gateway)</div>
                      <div className="p-8 text-lg">
                        <p className="mb-4"><strong>Jurisdiction:</strong> Andhra Pradesh, Telangana, Karnataka, Kerala, Tamil Nadu, and the Union Territory of Puducherry.</p>
                        <p className="mb-4"><strong>Significance:</strong> Known for its efficient processing, the Chennai registry handles applications from the technology hubs of Bangalore and Hyderabad, as well as the manufacturing sectors of Tamil Nadu.</p>
                        <p><strong>Address:</strong> Trade Marks Registry, Intellectual Property Rights Building, G.S.T. Road, Guindy, Chennai - 600032.</p>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border-l-8 border-gray-700">
                      <div className="bg-gray-800 text-white p-5 font-bold text-xl uppercase tracking-wider">4. Kolkata (The Eastern Front)</div>
                      <div className="p-8 text-lg">
                        <p className="mb-4"><strong>Jurisdiction:</strong> West Bengal, Bihar, Odisha, Jharkhand, and the Seven Sister States of Northeast India.</p>
                        <p className="mb-4"><strong>Significance:</strong> Historically significant, this office caters to the diverse commercial interests of the eastern and northeastern parts of the country, ranging from tea gardens to steel industries.</p>
                        <p><strong>Address:</strong> Trade Marks Registry, CP 2, Sector V, Salt Lake City, Kolkata - 700091.</p>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border-l-8 border-[#D2A02A]">
                      <div className="bg-gray-800 text-white p-5 font-bold text-xl uppercase tracking-wider">5. Ahmedabad (The Western Corridor)</div>
                      <div className="p-8 text-lg">
                        <p className="mb-4"><strong>Jurisdiction:</strong> The state of Gujarat and Rajasthan.</p>
                        <p className="mb-4"><strong>Significance:</strong> This office supports the vibrant entrepreneurial culture of Gujarat and the growing tourism and craft industries of Rajasthan.</p>
                        <p><strong>Address:</strong> Trade Marks Registry, CP-2, Opp. Bhagwat Vidyapeeth, Sola, Ahmedabad - 380060.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Eligibility */}
                <section id="eligibility" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">Who is Eligible to Register a Trademark?</h2>
                  <p className="text-lg leading-relaxed mb-6">
                    In India, the criteria for being an "applicant" are quite inclusive. The Trade Marks Act allows any person "claiming to be the proprietor" of a mark to file an application. This includes both marks that are already in use and marks that are "proposed to be used" (intent to use).
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    Specific entities that frequently register trademarks include:
                  </p>
                  <ul className="list-disc pl-8 space-y-4 mb-6 text-lg">
                    <li><strong>Individuals/Proprietors:</strong> Young entrepreneurs and freelancers often register marks in their personal names before formalizing a company structure.</li>
                    <li><strong>Startups:</strong> Entities recognized under the Startup India scheme can avail fast-track examination and significant fee discounts.</li>
                    <li><strong>Partnership Firms:</strong> Marks registered collectively by partners, usually supported by a partnership deed.</li>
                    <li><strong>Private/Public Companies:</strong> The most common applicants, where the mark is owned by the legal entity.</li>
                    <li><strong>Non-Profit Organizations/Trusts:</strong> Even non-commercial entities can protect their names and logos to prevent misuse.</li>
                    <li><strong>Foreign Nationals/Companies:</strong> International brands must register in India to protect their rights locally, even if they have global registrations.</li>
                  </ul>
                </section>

                {/* The Registration Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">The Comprehensive Trademark Registration Journey</h2>
                  <p className="text-lg leading-relaxed mb-10">
                    Understanding the roadmap is essential. The process is a marathon, not a sprint, and each phase serves a specific legal purpose in validating your ownership.
                  </p>
                  
                  <div className="space-y-12">
                    <div className="flex flex-col md:flex-row gap-8 items-start group">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:rotate-12 transition-transform">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategic Public Search</h3>
                        <p className="text-gray-700 leading-relaxed text-lg">
                          This is the foundation. We conduct a search of the "Trade Marks Index" to identify identical or phonetically similar marks. This search is conducted using the "Vienna Code" for logos and phonetic algorithms for word marks. A successful search provides a green light for filing and helps in crafting the application to avoid "absolute grounds" of refusal.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-start group">
                      <div className="flex-shrink-0 w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:-rotate-12 transition-transform">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Drafting and E-Filing</h3>
                        <p className="text-gray-700 leading-relaxed text-lg">
                          Form TM-A is prepared with precision. We must include the "Mark Type" (Word, Device, etc.), the "Class" of goods/services, and a detailed "Description." If the mark has been used previously, a "User Affidavit" with annexures of invoices and advertisements must be submitted. Mistakes in the description can lead to permanent restrictions on the mark's use.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-start group">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:rotate-12 transition-transform">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Official Examination</h3>
                        <p className="text-gray-700 leading-relaxed text-lg">
                          An Examiner reviews the application under Sections 9 (Absolute Grounds) and 11 (Relative Grounds) of the Act. Section 9 deals with the distinctiveness of the mark (it shouldn't be descriptive, like calling a mobile phone company "Mobile"). Section 11 deals with similarity to existing marks. If the examiner raises objections, a formal response must be filed, often followed by a show cause hearing.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-start group">
                      <div className="flex-shrink-0 w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:-rotate-12 transition-transform">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Journal Publication</h3>
                        <p className="text-gray-700 leading-relaxed text-lg">
                          Once accepted, the mark is advertised in the weekly Trademark Journal. This is the stage where the public can scrutinize your claim. Any third party who feels your mark infringes on their prior rights can file a "Notice of Opposition." This is a quasi-judicial process that takes place before the Registrar and can last for months.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-start group">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-lg group-hover:rotate-12 transition-transform">5</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Registration and Certification</h3>
                        <p className="text-gray-700 leading-relaxed text-lg">
                          If no opposition is received within 4 months of publication, the registry enters the mark into the official Register of Trade Marks. An electronic Registration Certificate is issued. The proprietor is now legally entitled to use the ® symbol and can enforce their rights against any infringer across India.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Documents Required */}
                <section id="documents" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">Essential Documents: Precision in Submission</h2>
                  <p className="text-lg leading-relaxed mb-6">
                    A successful application requires clean documentation. Any discrepancy in names or addresses between the KYC documents and the application can lead to an "Office Action" or rejection.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 flex items-start gap-4">
                      <div className="bg-[#D2A02A] text-white p-2 rounded-lg">📄</div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Power of Attorney (POA)</h4>
                        <p>A legally signed document authorizing a trademark agent or attorney to represent you before the registry. This is required for almost all professional filings.</p>
                      </div>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 flex items-start gap-4">
                      <div className="bg-gray-800 text-white p-2 rounded-lg">👤</div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">User Affidavit</h4>
                        <p>If you claim the mark has been used prior to the application date, you must submit a notarized affidavit along with supporting evidence like sales bills and media clips.</p>
                      </div>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 flex items-start gap-4">
                      <div className="bg-[#D2A02A] text-white p-2 rounded-lg">🏢</div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Entity Proof</h4>
                        <p>For companies, the Certificate of Incorporation is vital. For MSMEs and Startups, the government registration certificates are needed to qualify for lower fees.</p>
                      </div>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 flex items-start gap-4">
                      <div className="bg-gray-800 text-white p-2 rounded-lg">🖼️</div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Logo Representation</h4>
                        <p>High resolution images of the logo (ideally in TIFF or JPEG format). If colors are a vital part of the mark, a color claim must be explicitly made.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Common Objections */}
                <section id="common-objections" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">Handling Common Registry Objections</h2>
                  <p className="text-lg leading-relaxed mb-6">
                    Receiving an Examination Report is a standard part of the process. It doesn't mean your application is rejected; it means the registrar needs clarification. The two main types of objections are:
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    <strong>1. Descriptiveness (Section 9):</strong> If your mark directly describes the product (e.g., "Apple" for someone selling actual apples), the registry will object because no one should have a monopoly over a common word. We handle this by proving that the mark has acquired "secondary meaning" through long use or that it is used in an arbitrary way (like Apple for computers).
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    <strong>2. Similarity (Section 11):</strong> If the registry finds a mark that looks or sounds like yours, they will object to prevent consumer confusion. We counter this by highlighting the visual and phonetic differences, the different nature of the target audience, or the different pricing points between the two brands.
                  </p>
                </section>

                {/* Opposition */}
                <section id="opposition" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">Managing Third-Party Opposition</h2>
                  <p className="text-lg leading-relaxed mb-6">
                    The opposition stage is the most contentious part of the trademark lifecycle. It is a four month window where anyone can challenge your mark. Common grounds for opposition include a claim that your mark is identical to a prior registered mark, or that you are filing in "bad faith" to piggyback on another brand's reputation.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    Responding to an opposition involves filing a "Counter Statement," followed by an evidence phase where both parties submit documents to prove their case. The matter finally goes to a physical hearing before a Registrar of Trade Marks, who acts as a judge. Professional legal representation is non-negotiable at this stage.
                  </p>
                </section>

                {/* Classification */}
                <section id="classification" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">The Power of Correct Classification</h2>
                  <p className="text-lg leading-relaxed mb-6">
                    Filing in the wrong class is the most common reason for trademark registration failure. The Nice Classification is divided into two main categories:
                  </p>
                  <ul className="list-disc pl-8 space-y-4 mb-6 text-lg">
                    <li><strong>Classes 1 to 34 (Goods):</strong> Covering everything from chemicals (Class 1) to luxury watches (Class 14) and tobacco products (Class 34).</li>
                    <li><strong>Classes 35 to 45 (Services):</strong> Covering advertising and business management (Class 35), finance and real estate (Class 36), construction (Class 37), and legal/social services (Class 45).</li>
                  </ul>
                  <p className="text-lg leading-relaxed mb-6">
                    Many modern businesses operate across multiple classes. An E-commerce platform, for instance, might need registration in Class 35 (the service of selling) and also in classes representing the specific products they manufacture or brand themselves. A multi-class application can be filed to simplify the process, though fees are charged per class.
                  </p>
                </section>

                {/* Benefits */}
                <section id="benefits" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">Why Register? The Business Logic</h2>
                  <p className="text-lg leading-relaxed mb-8">
                    A registered trademark is not just a legal formality; it's a strategic business asset that adds quantifiable value to your company.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm transition-transform hover:scale-105">
                      <h4 className="text-xl font-bold mb-4 text-blue-900 flex items-center gap-2">
                        <span className="text-2xl">💰</span> Valuation and Investment
                      </h4>
                      <p className="text-blue-800 leading-relaxed">Investors and venture capitalists rarely fund businesses that don't own their intellectual property. A registered trademark is an asset on your balance sheet that increases the overall valuation of your firm during a merger or acquisition.</p>
                    </div>
                    <div className="p-8 bg-green-50 rounded-2xl border border-green-100 shadow-sm transition-transform hover:scale-105">
                      <h4 className="text-xl font-bold mb-4 text-green-900 flex items-center gap-2">
                        <span className="text-2xl">🌍</span> Global Expansion Ease
                      </h4>
                      <p className="text-green-800 leading-relaxed">With an Indian registration, you can easily apply for protection in over 120 countries through the Madrid Protocol. It serves as the legal foundation for your global brand strategy, protecting you from international brand squatters.</p>
                    </div>
                    <div className="p-8 bg-purple-50 rounded-2xl border border-purple-100 shadow-sm transition-transform hover:scale-105">
                      <h4 className="text-xl font-bold mb-4 text-purple-900 flex items-center gap-2">
                        <span className="text-2xl">🛡️</span> Legal Shield and Remedy
                      </h4>
                      <p className="text-purple-800 leading-relaxed">Registration allows you to take criminal action against counterfeiters. It also enables you to block infringing products at customs and remove infringing content from major E-commerce and social media platforms through "Brand Registry" programs.</p>
                    </div>
                    <div className="p-8 bg-orange-50 rounded-2xl border border-orange-100 shadow-sm transition-transform hover:scale-105">
                      <h4 className="text-xl font-bold mb-4 text-orange-900 flex items-center gap-2">
                        <span className="text-2xl">💎</span> Exclusive Goodwill
                      </h4>
                      <p className="text-orange-800 leading-relaxed">It builds a permanent association in the consumer's mind between your mark and your product's quality. This "goodwill" is what allows established brands to charge a premium over generic competitors.</p>
                    </div>
                  </div>
                </section>

                {/* Renewal */}
                <section id="renewal" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">Renewal and Maintenance: Keeping Your Rights Alive</h2>
                  <p className="text-lg leading-relaxed mb-6">
                    A common mistake is thinking that registration is forever. A trademark is valid for 10 years. Within 6 months of the expiry date, a renewal application must be filed to extend the protection for another decade. If you miss this window, there is a "grace period" of another 6 months with a late fee.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    Failure to renew results in the "Removal" of the mark from the registry. While restoration is possible in some cases, it is expensive and leaves your brand vulnerable during the period of removal. We provide automated monitoring services to ensure our clients never miss a renewal deadline.
                  </p>
                </section>

                {/* International */}
                <section id="international" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">International Trademark Registration (Madrid Protocol)</h2>
                  <p className="text-lg leading-relaxed mb-6">
                    For those who ask where to register trademark for a global audience, the answer lies in the <strong>Madrid System</strong> managed by WIPO. As long as you have a trademark application or registration in India, you can use that as a "Base" to file an international application.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    This is significantly more cost effective than hiring local lawyers in every country. You file in one language (English) and pay in one currency (Swiss Francs). The international registry then coordinates with the local trademark offices of all the countries you have selected. If no objection is received from a specific country within 18 months, your mark is deemed registered in that territory.
                  </p>
                </section>

                {/* Deal with Infringement */}
                <section id="infringement" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 font-serif">Dealing with Infringement: Enforcement of Rights</h2>
                  <p className="text-base leading-relaxed mb-5">
                    Registration is the sword; enforcement is how you use it. If someone uses a similar mark, the first step is usually a "Cease and Desist" notice sent by a law firm. This notice informs the infringer of your rights and demands that they stop the use immediately.
                  </p>
                  <p className="text-base leading-relaxed mb-5">
                    If the infringer refuses, you can file an "Infringement Suit" in a District Court or High Court. The court can grant "Interim Injunctions" (immediate orders to stop the use) and later award "Damages" or an "Account of Profits" (where the infringer pays you the money they made using your mark). In cases of blatant counterfeiting, the police can also conduct raids and seize the illegal goods.
                  </p>
                </section>

                {/* Reviews Section - Scaled Down */}
                <section id="reviews" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8 font-serif uppercase tracking-tight">Client Testimonials</h2>
                   <div className="grid md:grid-cols-3 gap-5">
                      {reviews.map((r) => (
                        <div key={r.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
                           <div>
                              <div className="flex text-amber-400 mb-3 text-sm">
                                {[...Array(r.rating)].map((_, i) => (
                                  <span key={i}>★</span>
                                ))}
                              </div>
                              <p className="text-gray-700 text-sm italic mb-4">"{r.text}"</p>
                           </div>
                           <div className="border-t pt-4">
                              <p className="font-bold text-gray-900 text-xs">{r.author}</p>
                              <div className="flex justify-between text-[10px] text-gray-500 mt-1">
                                 <span>{r.location}</span>
                                 <span>{r.date}</span>
                              </div>
                           </div>
                        </div>
                      ))}
                   </div>
                   <div className="mt-6 text-center">
                      <p className="text-xs text-gray-500">Overall Rating: <span className="font-bold text-gray-900">4.9/5</span> based on 1540+ reviews</p>
                   </div>
                </section>

                {/* Final Thoughts */}
                <section className="bg-gray-50 p-6 md:p-10 rounded-3xl border border-gray-200 border-t-8 border-[#D2A02A]">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 font-serif text-center uppercase tracking-tight">Final Thoughts: Your Brand, Your Legacy</h2>
                  <p className="text-lg leading-relaxed mb-5 text-center text-gray-800 font-medium">
                    The journey of building a brand is filled with challenges. From product design to marketing strategies, you invest immense resources into your business identity. Leaving that identity unprotected is a risk no prudent business owner should take.
                  </p>
                  <p className="text-base leading-relaxed mb-5 text-center">
                    Knowing <strong>where to register trademark</strong> is the empowering first step. Whether you choose the efficiency of the online IP India portal or the jurisdictional security of the regional offices, ensure that your application is handled with legal precision. At AMA Legal Solutions, we don't just file forms; we build legal fortresses around your brand. Let us handle the complexities of the registry so you can focus on building your legacy.
                  </p>
                </section>

                {/* FAQs - Scaled Down */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 border-b pb-4 font-serif uppercase tracking-tight">Commonly Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#D2A02A] transition-all group">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-3">
                          <span className="bg-[#D2A02A] text-white w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0 mt-1 shadow-md group-hover:scale-110 transition-transform font-bold">Q</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-10 text-base">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Bottom CTA - Scaled Down */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-8 md:p-14 text-center text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[#D2A02A] opacity-10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-56 h-56 bg-white opacity-5 rounded-full -ml-16 -mb-16 blur-2xl"></div>
                  <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-5xl font-bold mb-6 leading-tight uppercase tracking-tight">Secure Your Identity <span className="text-[#D2A02A]">In 24 Hours</span></h2>
                    <p className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed font-light">
                      Don't wait for a copycat to steal your hard work. Get your trademark application number and start using the ™ symbol today with our express filing service.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-extrabold py-4 px-10 rounded-full transition-all text-lg shadow-2xl hover:scale-105 active:scale-95 uppercase tracking-wider">
                          Register Now
                        </button>
                      </Link>
                      <a href="tel:+918700343611" className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-extrabold py-4 px-10 rounded-full transition-all text-lg uppercase tracking-wider">
                        Call for Advice
                      </a>
                    </div>
                    <div className="mt-10 flex flex-wrap justify-center gap-6 opacity-60 text-xs">
                      <div className="flex items-center gap-2"><span>🛡️</span> Gov Authorized</div>
                      <div className="flex items-center gap-2"><span>⚡</span> Express Filing</div>
                      <div className="flex items-center gap-2"><span>👨‍⚖️</span> Expert Attorneys</div>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar - Scaled Down */}
            <div className="hidden lg:block space-y-6 sticky top-28">
              {/* CTA Container */}
              <div className="bg-[#1a202c] p-6 rounded-3xl text-white shadow-2xl relative overflow-hidden group border border-white/5">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#D2A02A] opacity-10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="bg-[#D2A02A]/20 w-10 h-10 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-xl">⚖️</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Official Filing</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed text-xs">
                    Our team of trademark attorneys ensures that your application is technically sound and legally bulletproof.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2 text-xs text-gray-300">
                      <span className="text-[#D2A02A]">●</span> 99% Success Rate
                    </li>
                    <li className="flex items-center gap-2 text-xs text-gray-300">
                      <span className="text-[#D2A02A]">●</span> 24h Express Filing
                    </li>
                  </ul>
                  <Link href="/contact" className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-2xl font-extrabold hover:bg-[#b88a22] transition-all shadow-lg hover:shadow-[#D2A02A]/20 text-sm uppercase">
                    Get Expert Help
                  </Link>
                </div>
              </div>

              {/* Related Pages Container */}
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-full -mr-12 -mt-12"></div>
                <h3 className="text-base font-bold text-gray-900 mb-4 border-b border-gray-100 pb-3 relative z-10">Resources</h3>
                <ul className="space-y-4 relative z-10">
                  <li>
                    <Link href="/trademark-registration-fees" className="flex items-center justify-between text-gray-600 hover:text-[#D2A02A] transition-all group">
                      <span className="text-sm font-medium">Reg. Fees 2024</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs">→</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/trademark-search" className="flex items-center justify-between text-gray-600 hover:text-[#D2A02A] transition-all group">
                      <span className="text-sm font-medium">Free Search</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs">→</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/what-documents-are-required-for-trademark-registration" className="flex items-center justify-between text-gray-600 hover:text-[#D2A02A] transition-all group">
                      <span className="text-sm font-medium">Doc Checklist</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs">→</span>
                    </Link>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-100">
                   <div className="flex items-center gap-3 text-[10px] text-gray-400">
                      <Image src="/ama-legal-solutions-logo.png" alt="AMA" width={30} height={8} className="grayscale opacity-50" />
                      <span>Updated: Feb 2024</span>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

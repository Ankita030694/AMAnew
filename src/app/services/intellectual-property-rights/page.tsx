import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What is the validity period of a trademark registration in India?",
    answer: "A trademark registration in India is valid for an initial period of 10 years from the date of filing the application. It can be renewed indefinitely for successive periods of 10 years each by paying the prescribed renewal fees. It is crucial to file the renewal application within six months before the expiry date to avoid any lapses in protection or additional restoration fees."
  },
  {
    question: "Can I register a trademark before starting my business?",
    answer: "Yes, you can file for trademark registration on a 'Proposed to be Used' basis even before you have started using the mark commercially. This is actually a recommended strategy to secure your brand name early and prevent others from claiming it. However, you must commence the usage of the trademark within a reasonable time frame after registration to avoid potential cancellation actions on the grounds of non usage."
  },
  {
    question: "What is the difference between the TM and R symbols?",
    answer: "The TM symbol is used to indicate that you have filed a trademark application and are claiming rights over the mark, but it is not yet registered. You can use the TM symbol immediately after filing your application. The R symbol (®) can only be used once your trademark is officially registered and a registration certificate has been issued by the Trademark Registry. Using the R symbol for an unregistered mark is an offence under the Trade Marks Act."
  },
  {
    question: "How long does the trademark registration process take in India?",
    answer: "The trademark registration process in India typically takes anywhere between 12 to 18 months if there are no objections or oppositions. However, if the application faces objections from the Registry or oppositions from third parties, the process can take longer, sometimes extending to 2 or 3 years. Our expert attorneys work diligently to respond to objections promptly to expedite the process."
  },
  {
    question: "What happens if my trademark application is objected to?",
    answer: "If your trademark application receives an objection (Examination Report) from the Registrar, it does not mean your application is rejected. It simply means you need to provide clarifications or legal arguments against the objections raised. You must file a formal written response to the examination report within 30 days. Our legal team specializes in drafting strong responses to overcome such objections and move the application forward."
  },
  {
    question: "Can I register a sound or a smell as a trademark?",
    answer: "Yes, under the Indian Trade Marks Act, non conventional marks like sounds and smells can be registered if they are capable of graphical representation and can distinguish the goods or services of one person from those of others. Sound marks are becoming increasingly common, while smell marks are rarer and require distinctiveness to be proven. Expert legal guidance is essential for such complex registrations."
  },
  {
    question: "Is a trademark registration in India valid globally?",
    answer: "No, trademark rights are territorial, meaning a registration in India provides protection only within Indian territory. To protect your brand globally, you need to file separate applications in each country or use the Madrid Protocol system. India is a member of the Madrid Protocol, which allows you to file a single international application to seek protection in multiple member countries simultaneously."
  },
  {
    question: "What documents are required for filing a trademark application?",
    answer: "The primary documents required include the applicant's details (name, address, and nationality), a clear image of the logo or brand name, a list of goods or services for which the mark is used, and the date of first use in India (if applicable). For companies, a Board Resolution or Power of Attorney authorizing the filing is also needed. MSME or Start up certificates can be provided to avail fee concessions."
  },
  {
    question: "Can I sell or transfer my registered trademark?",
    answer: "Yes, a registered trademark is an intellectual property asset that can be sold, licensed, or transferred to another party. This process is known as 'Assignment'. You can assign a trademark with or without the goodwill of the business. The assignment deed must be in writing and recorded with the Trademark Registry to be legally valid and binding on third parties."
  },
  {
    question: "What is the penalty for trademark infringement in India?",
    answer: "Trademark infringement is a serious offence in India, attracting both civil and criminal remedies. Civil remedies include injunctions (stopping the use), damages (monetary compensation), and accounts of profits. Criminal penalties can include imprisonment for a term not less than six months and up to three years, along with a fine ranging from fifty thousand to two lakh rupees. Police also have the power to seize infringing goods."
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
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Trademark Registration in India: The Ultimate Guide to IP Protection",
  "description": "Comprehensive guide to trademark registration in India. Learn about the process, documents, fees, and legal protection for your brand with AMA Legal Solutions.",
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
  "datePublished": "2023-11-15",
  "dateModified": "2023-11-20"
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
  "image": "https://amalegalsolutions.com/services/4.png",
  "description": "Expert trademark registration and IP protection services in India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "850"
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
        "name": "Vikram Malhotra"
      },
      "reviewBody": "AMA Legal Solutions handled our trademark registration seamlessly. Their team was proactive in responding to objections and secured our brand registration within the expected timeline. Highly professional service."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sneha Gupta"
      },
      "reviewBody": "I was worried about a trademark opposition filed against my brand. The lawyers at AMA drafted a strong counter statement and represented me brilliantly. We won the case and got our registration. Thank you!"
    }
  ]
};

// WebPage Schema
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Trademark Registration in India | IP Rights Services",
  "description": "Secure your brand with expert trademark registration services in India. AMA Legal Solutions offers comprehensive IP protection, patent filing, and copyright registration.",
  "url": "https://amalegalsolutions.com/services/intellectual-property-rights",
};

export const metadata = {
  title: "Trademark Registration in India | Expert IP Rights Lawyers",
  description:
    "Protect your brand with AMA Legal Solutions. We provide expert trademark registration in India, patent filing, copyright protection, and IP litigation services. Secure your intellectual property today.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/intellectual-property-rights',
  },
  openGraph: {
    title: "Trademark Registration in India | Expert IP Rights Lawyers",
    description: "Secure your brand identity with our comprehensive trademark registration and intellectual property services in India.",
    url: "https://amalegalsolutions.com/services/intellectual-property-rights",
    type: "website",
    images: [
      {
        url: "/services/4.png",
        width: 1200,
        height: 630,
        alt: "Trademark Registration Services India",
      },
    ],
  },
};

export default function IntellectualPropertyPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-trademark", title: "What is a Trademark?" },
    { id: "importance", title: "Why Register a Trademark?" },
    { id: "registration-process", title: "Registration Process" },
    { id: "documents-required", title: "Documents Required" },
    { id: "objection-opposition", title: "Objection & Opposition" },
    { id: "other-ip-services", title: "Other IP Services" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Intellectual Property Rights", href: "/services/intellectual-property-rights" },
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
            className="absolute inset-0 bg-cover bg-center z-0 bg-black" 
            style={{ background: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Secure Your Brand Identity with <span className="text-[#D2A02A]">Trademark Registration</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Comprehensive Intellectual Property Rights services in India. From trademark filing to patent prosecution, we protect what is yours.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Start Your Registration
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
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property Rights in India</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In the rapidly evolving global marketplace, intangible assets often hold more value than physical ones. Your brand name, your unique inventions, your creative designs, and your artistic works are the lifeblood of your business. Protecting these assets through <strong>Intellectual Property Rights (IPR)</strong> is not just a legal formality; it is a critical business strategy.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    India has seen a significant paradigm shift in its IPR regime, aligning itself with global standards to foster innovation and creativity. The government's "Make in India" and "Startup India" initiatives have further emphasized the need for robust IP protection. Whether you are a startup founder, an established business owner, or a creative artist, securing your intellectual property is the first step towards building a sustainable and valuable brand.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we understand the nuances of Indian IP laws. We provide end to end services ranging from <strong>trademark registration in India</strong> to complex patent litigation. Our mission is to ensure that your hard work remains exclusively yours, protected from infringement and misuse by competitors.
                  </p>
                </section>

                {/* What is a Trademark */}
                <section id="what-is-trademark" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What is a Trademark?</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "A trademark is a unique symbol, word, or words legally registered or established by use as representing a company or product."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    A trademark is essentially your brand's identity. It serves as a source identifier, distinguishing your goods or services from those of others in the market. When a consumer sees your trademark, they associate it with a certain level of quality and reputation.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Trademarks can take many forms. While most people think of brand names and logos, the definition under the Trade Marks Act, 1999 is much broader. It includes:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4 mb-6">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-2 font-bold">✓</span>
                      <span><strong>Word Marks:</strong> Brand names like "Apple" or "Google".</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-2 font-bold">✓</span>
                      <span><strong>Device Marks:</strong> Logos and symbols like the Nike Swoosh.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-2 font-bold">✓</span>
                      <span><strong>Slogans/Taglines:</strong> Catchphrases like "I'm Lovin' It".</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-2 font-bold">✓</span>
                      <span><strong>Shape Marks:</strong> Unique product shapes like the Coca Cola bottle.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-2 font-bold">✓</span>
                      <span><strong>Sound Marks:</strong> Distinctive sounds like the MGM Lion roar.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-2 font-bold">✓</span>
                      <span><strong>Color Marks:</strong> Specific color combinations associated with a brand.</span>
                    </li>
                  </ul>
                </section>

                {/* Importance */}
                <section id="importance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why is Trademark Registration Crucial?</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Many business owners operate under the misconception that registering a company name or a domain name is enough to protect their brand. This is factually incorrect. Only a registered trademark grants you the exclusive legal right to use your brand name nationwide.
                  </p>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">1. Exclusive Rights & Legal Protection</h3>
                      <p className="text-gray-700">
                        Registration gives you the exclusive right to use the mark for your goods and services. If anyone else uses a similar mark, you can sue them for infringement and claim damages. Without registration, you can only file a "passing off" suit, which is much harder to prove.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">2. Asset Creation & Valuation</h3>
                      <p className="text-gray-700">
                        A registered trademark is an intangible asset that appreciates in value over time. It can be sold, franchised, or licensed to others, creating a new revenue stream. Investors often look for registered IP as a sign of a serious and valuable business.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">3. Building Trust & Goodwill</h3>
                      <p className="text-gray-700">
                        The ® symbol is a badge of trust. It signals to your customers that you are an established and credible entity. It prevents copycats from diluting your brand's reputation with inferior quality products.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">4. Global Expansion</h3>
                      <p className="text-gray-700">
                        If you plan to expand your business internationally, a trademark registration in India serves as a solid foundation. It allows you to use the Madrid Protocol to register your trademark in multiple countries through a single application.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Registration Process */}
                <section id="registration-process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Step by Step Trademark Registration Process</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    The process of <strong>trademark registration in India</strong> is systematic and legalistic. It involves several stages of scrutiny by the Trademark Registry. At AMA Legal Solutions, we guide you through each step to ensure a smooth registration.
                  </p>
                  
                  <div className="relative border-l-4 border-[#D2A02A] ml-6 space-y-12">
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Step 1: Trademark Search</h3>
                      <p className="text-gray-700">
                        Before filing, we conduct a comprehensive public search on the Trademark Registry database. This is critical to ensure that your proposed mark is not identical or deceptively similar to an existing registered trademark. A thorough search minimizes the risk of objection and rejection later.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Step 2: Filing the Application</h3>
                      <p className="text-gray-700">
                        Once the search is clear, we draft and file the trademark application (Form TM A). This involves selecting the appropriate trademark class (1 to 45) that corresponds to your goods or services. Upon filing, you receive an acknowledgement receipt and can start using the "TM" symbol.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Step 3: Examination</h3>
                      <p className="text-gray-700">
                        The Registrar examines the application to check for distinctiveness and similarities with existing marks. If they find any issues, they issue an Examination Report raising objections. We must reply to this report within 30 days with legal arguments to overcome the objections.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Step 4: Publication</h3>
                      <p className="text-gray-700">
                        If the Registrar accepts the application (either initially or after our response), the mark is published in the Trade Marks Journal. This public notice invites third parties to oppose the registration if they believe it infringes on their rights. The opposition period lasts for 4 months.
                      </p>
                    </div>
                    <div className="relative pl-8">
                      <div className="absolute -left-3.5 top-1 w-6 h-6 bg-[#D2A02A] rounded-full border-4 border-white"></div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Step 5: Registration</h3>
                      <p className="text-gray-700">
                        If there is no opposition within 4 months, or if the opposition is decided in your favor, the Registrar issues the Registration Certificate. You are now the proud owner of a registered trademark and can use the ® symbol next to your brand name.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Documents Required */}
                <section id="documents-required" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Documents Required for Registration</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    To ensure a hassle free filing process, it is important to have the correct documentation ready. The requirements vary slightly depending on the type of applicant.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">For Individuals / Sole Proprietors</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Copy of Logo / Brand Name
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Identity Proof (PAN Card / Aadhaar / Passport)
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Address Proof
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> User Affidavit (if claiming prior usage)
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Signed Form 48 (Power of Attorney)
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">For Companies / LLPs / Startups</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Certificate of Incorporation / Partnership Deed
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> MSME / Startup India Certificate (for 50% fee concession)
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Identity & Address Proof of Signatory
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Board Resolution authorizing the signatory
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">✓</span> Signed Form 48
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Objection & Opposition */}
                <section id="objection-opposition" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Handling Objections and Oppositions</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The path to registration is not always straightforward. Applications often face hurdles in the form of objections or oppositions. This is where the expertise of a seasoned IP lawyer becomes indispensable.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-red-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-red-800 mb-3">Trademark Objection</h3>
                      <p className="text-gray-700 mb-4">
                        Raised by the <strong>Trademark Registry</strong> during examination. Common reasons include:
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li><strong>Section 9:</strong> The mark is not distinctive (e.g., "Best Quality Rice" for selling rice).</li>
                        <li><strong>Section 11:</strong> The mark is similar to an already registered mark.</li>
                      </ul>
                      <p className="text-gray-700 mt-4 font-medium">
                        Solution: We draft a detailed legal reply citing relevant case laws to prove the distinctiveness of your mark.
                      </p>
                    </div>
                    
                    <div className="bg-orange-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-orange-800 mb-3">Trademark Opposition</h3>
                      <p className="text-gray-700 mb-4">
                        Filed by a <strong>Third Party</strong> (competitor or public) after the mark is published in the journal.
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>They claim your mark is confusingly similar to theirs.</li>
                        <li>They claim your mark hurts religious sentiments.</li>
                        <li>They claim your mark is descriptive or generic.</li>
                      </ul>
                      <p className="text-gray-700 mt-4 font-medium">
                        Solution: This initiates a quasi judicial process. We file a Counter Statement, submit evidence, and argue your case at the hearing.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Other IP Services */}
                <section id="other-ip-services" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Beyond Trademarks: Our Comprehensive IP Services</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    AMA Legal Solutions is a full service Intellectual Property law firm. Apart from trademarks, we assist clients in protecting all forms of creativity and innovation.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center">
                          <span className="text-6xl">🔬</span>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Patent Filing & Prosecution</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Patents protect inventions that are novel, non obvious, and have industrial application. Our team of patent agents and attorneys assists with:
                        </p>
                        <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                          <li>• Patentability Search</li>
                          <li>• Drafting Provisional & Complete Specifications</li>
                          <li>• Filing PCT International Applications</li>
                          <li>• Responding to First Examination Reports (FER)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center">
                          <span className="text-6xl">©️</span>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Copyright Registration</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Copyright protects original literary, dramatic, musical, and artistic works. It also covers cinematograph films and sound recordings. We help creators secure their rights over:
                        </p>
                        <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                          <li>• Software code and algorithms</li>
                          <li>• Books, scripts, and lyrics</li>
                          <li>• Website content and designs</li>
                          <li>• Paintings and photographs</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center">
                          <span className="text-6xl">📐</span>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Industrial Design Registration</h3>
                        <p className="text-gray-700 leading-relaxed mb-4">
                          Design registration protects the aesthetic or ornamental aspect of an article. It covers the shape, configuration, pattern, or ornamentation. We assist in:
                        </p>
                        <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                          <li>• Design searches</li>
                          <li>• Filing design applications</li>
                          <li>• Handling objections</li>
                          <li>• Design infringement suits</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Intellectual Property is a specialized field requiring deep legal knowledge and technical understanding. Here is why businesses across India trust us with their IP portfolio:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🎯</div>
                      <h3 className="font-bold text-xl mb-2">High Success Rate</h3>
                      <p className="text-gray-600">Our meticulous search and drafting process ensures a high approval rate for trademark and patent applications.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚡</div>
                      <h3 className="font-bold text-xl mb-2">Fast Processing</h3>
                      <p className="text-gray-600">We file applications within 24 hours of receiving documents to ensure you get the earliest priority date.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">💰</div>
                      <h3 className="font-bold text-xl mb-2">Transparent Pricing</h3>
                      <p className="text-gray-600">No hidden costs. We provide a clear breakdown of government fees and professional charges upfront.</p>
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
                        "AMA Legal Solutions handled our trademark registration seamlessly. Their team was proactive in responding to objections and secured our brand registration within the expected timeline. Highly professional service."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">V</div>
                        <div>
                          <p className="font-bold text-gray-900">Vikram Malhotra</p>
                          <p className="text-sm text-gray-500">CEO, TechVision Pvt Ltd</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I was worried about a trademark opposition filed against my brand. The lawyers at AMA drafted a strong counter statement and represented me brilliantly. We won the case and got our registration. Thank you!"
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Sneha Gupta</p>
                          <p className="text-sm text-gray-500">Fashion Designer, Mumbai</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                          <span className="text-[#D2A02A] mr-3">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-8">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Protect Your Intellectual Property Today</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't leave your brand vulnerable. Secure your rights with India's most trusted IP legal experts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Get Free Consultation
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
                    Get immediate assistance for trademark filing and objections.
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
import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/newcomp/Footer";

// FAQ data for rendering and Schema focused on Punjab
const faqs = [
  {
    question: "What is a legal notice and how does it work in Punjab?",
    answer: "A legal notice is a formal written document sent by an advocate on behalf of a client to inform the recipient of a grievance and a demand for resolution. In Punjab, it is a crucial tool in civil litigation, property disputes, and commercial matters. It serves as a final warning and often leads to out-of-court settlements, saving time in the Punjab and Haryana High Court and various district courts like Ludhiana or Amritsar."
  },
  {
    question: "Are there special laws for NRIs sending legal notices in Punjab?",
    answer: "Yes, Punjab has specific provisions like Section 13-B of the East Punjab Urban Rent Restriction Act, which provides a fast-track summary procedure for NRIs to recover possession of their property. A legal notice is the first step to establish the landlord's intent and is often vital for cases before the Punjab State NRI Commission."
  },
  {
    question: "How long is the notice period for a cheque bounce case in Punjab?",
    answer: "Under Section 138 of the Negotiable Instruments Act, which is strictly followed in Punjab's industrial hubs like Ludhiana, you must send a legal notice within 30 days of receiving the cheque return memo. The notice must give the debtor 15 days to pay. Failure to do so allows you to file a criminal complaint in a magistrate's court in Punjab."
  },
  {
    question: "Can I send a legal notice for a property dispute in Ludhiana or Mohali?",
    answer: "Absolutely. Property disputes involving ancestral land, illegal encroachment, or tenant issues are common in Punjab. A professionally drafted notice by AMA Legal Solutions clearly states your rights under the Punjab Land Revenue Act or the Punjab Rent Act, creating a strong legal foundation for any future court action in the state."
  },
  {
    question: "Is a legal notice necessary before filing a case in the Punjab and Haryana High Court?",
    answer: "In many civil and service matters, sending a legal notice (often called a 'demand justice notice') is a procedural requirement before filing a writ petition or a lawsuit. It gives the concerned authority or party a chance to rectify the error, and if they fail, it strengthens your case by showing the court that you attempted an amicable resolution."
  },
  {
    question: "How much does AMA Legal Solutions charge for a legal notice in Punjab?",
    answer: "Our pricing is transparent and competitive. For standard recovery or grievance notices in Punjab, fees start from Rs 3,500. This includes professional consultation, drafting by experts familiar with Punjab's legal nuances, and dispatch via Registered Post AD. We cater to clients in Ludhiana, Amritsar, Mohali, and all other Punjab districts."
  },
  {
    question: "Can legal notices in Punjab be served via digital means?",
    answer: "While courts in Punjab increasing accept service through email or WhatsApp, we always recommend sending a physical notice via Registered Post AD or Speed Post. This provides an official tracking record that is essential as evidence in the District Courts of Punjab to prove successful delivery."
  },
  {
    question: "What is the role of the Punjab State NRI Commission in these cases?",
    answer: "If a legal notice regarding property grabbing or police inaction remains unheeded, NRIs can approach the Punjab State NRI Commission. The Commission can direct state officials to take swift action. A well-drafted legal notice sent through AMA Legal Solutions is often the primary document used to initiate this process."
  },
  {
    question: "Do I need to visit Punjab to send a legal notice for my property?",
    answer: "No, you can engage AMA Legal Solutions remotely. We handle everything from consultation via phone/video to the final dispatch of the notice in Punjab. We have a strong network across the state, including the High Court in Chandigarh and district courts, ensuring your interests are protected regardless of where you are located."
  },
  {
    question: "What happens if the recipient doesn't respond to the notice in Punjab?",
    answer: "If there is no response or an unsatisfactory one within the specified timeframe (usually 15-30 days), you have the legal right to proceed with a lawsuit or criminal complaint. The notice and the proof of delivery will be key documents in your filing, showing the court your intent and the recipient's non-compliance."
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
      "item": "https://www.amalegalsolutions.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://www.amalegalsolutions.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Send Legal Notice in Punjab",
      "item": "https://www.amalegalsolutions.com/send-legal-notice-in-punjab"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Expert Legal Notice Services in Punjab: Protect Your Rights in 2026",
  "description": "Comprehensive guide to sending a legal notice in Punjab. Learn about the procedure, state laws, NRI protections, and costs for legal notices in Ludhiana, Amritsar, and all of Punjab.",
  "image": "https://www.amalegalsolutions.com/future.png",
  "author": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "url": "https://www.amalegalsolutions.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2026-01-30",
  "dateModified": "2026-01-30"
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

// Review Schema optimized for Rich Results
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Legal Notice Services in Punjab",
  "description": "Expert legal notice drafting and dispatch services in Punjab by AMA Legal Solutions, specialized in property and NRI matters.",
  "image": "https://www.amalegalsolutions.com/future.png",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1240"
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
        "name": "Gurbir Singh"
      },
      "reviewBody": "Excellent help for my property matter in Ludhiana. The legal notice sent by AMA Legal Solutions was very professional and resolved the tenant issue quickly."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Amritpal Kaur"
      },
      "reviewBody": "Being an NRI, I was worried about my land in Jalandhar. AMA Legal Solutions provided great guidance and sent a strong notice that stopped the encroachment."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Harprit Singh"
      },
      "reviewBody": "Best legal notice service in Mohali for commercial matters. They handled our debt recovery notice with great professionalism and got us results."
    }
  ]
};

// Organization Schema
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "AMA Legal Solutions",
    "@id": "https://www.amalegalsolutions.com/",
    "url": "https://www.amalegalsolutions.com/",
    "logo": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
    "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
    "telephone": "8700343611",
    "priceRange": "Rs Rs",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mohali Phase 7",
      "addressLocality": "Mohali",
      "addressRegion": "Punjab",
      "postalCode": "160062",
      "addressCountry": "IN"
    }
};

export const metadata = {
  title: "Send Legal Notice in Punjab | Lawyers in Ludhiana",
  description: "Need to send a legal notice in Punjab? Expert drafting and dispatch in Ludhiana, Amritsar, Mohali, and all UP districts. Specliazed for NRIs and property matters.",
  keywords: [
    "send legal notice in Punjab",
    "legal notice lawyers Ludhiana",
    "NRI legal notice Punjab",
    "property dispute notice Punjab",
    "money recovery Punjab",
    "cheque bounce notice Ludhiana",
    "Punjab Rent Act notice",
    "how to send legal notice in Punjab",
    "legal notice service Amritsar",
    "Punjab and Haryana High Court lawyers",
    "Mohali legal notice lawyers",
    "Jalandhar property dispute lawyer",
    "Patiala legal notice service",
    "Bathinda court lawyers"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/send-legal-notice-in-punjab',
  },
  openGraph: {
    title: "Send Legal Notice in Punjab | Expert Legal Drafting",
    description: "Protect your rights and assets in Punjab with a professional legal notice. Trusted expertise for NRIs and local residences.",
    url: "https://www.amalegalsolutions.com/send-legal-notice-in-punjab",
    type: "website",
    images: [
      {
        url: "/future.png",
        width: 1200,
        height: 630,
        alt: "Legal Notice Services Punjab",
      },
    ],
  },
};

export default function LegalNoticePunjabPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-notice", title: "What is a Legal Notice?" },
    { id: "significance", title: "Significance in Punjab" },
    { id: "situations", title: "Common Situations" },
    { id: "nri-focus", title: "Special Focus: NRIs" },
    { id: "procedure", title: "Procedure in Punjab" },
    { id: "industrial-hubs", title: "Ludhiana & Mohali Focus" },
    { id: "costs", title: "Costs & Transparency" },
    { id: "why-ama", title: "Why AMA Legal Solutions?" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Send Legal Notice in Punjab", href: "/send-legal-notice-in-punjab" },
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
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: "url('/newAssets/delhi-hero.jpg')", backgroundColor: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-24 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Professional <span className="text-[#D2A02A]">Legal Notice</span> Services in Punjab
            </h1>
            <p className="text-base md:text-xl mb-6 md:mb-10 max-w-4xl mx-auto text-gray-200">
              Expert legal drafting for Ludhiana, Amritsar, Mohali, and all districts of Punjab. Specialized protection for NRIs, property disputes, and commercial recoveries.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-2xl text-base md:text-lg">
                Consult a Punjab Advocate
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-8xl py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_250px] gap-10 items-start">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-28">
              <TableOfContents sections={tocSections} orientation="vertical" />
              <div className="mt-8 p-4 bg-[#fdf2f2] rounded-xl border border-red-100">
                <p className="text-xs font-semibold text-red-600 uppercase tracking-wider mb-2">Exclusive for NRIs</p>
                <p className="text-sm font-bold text-gray-900">Fast-Track Property Recovery Protection</p>
                <div className="flex flex-wrap gap-2 mt-3 text-left">
                  {['Section 13-B', 'NRI Commission', 'High Court Support'].map(tag => (
                    <span key={tag} className="text-[10px] bg-white px-2 py-1 rounded-md border border-gray-100 shadow-sm">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-8 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-5 md:p-10 rounded-3xl shadow-sm space-y-8 md:space-y-12 text-justify">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">Legal Empowerment in the Heart of Punjab</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                        Punjab, the land of five rivers, is a state characterized by its robust agricultural heritage, its vibrant industrial spirit in hubs like Ludhiana and Jalandhar, and its significant global diaspora. However, this prosperity and growth often come with a unique set of legal challenges. From intricate property disputes involving ancestral land to complex commercial disagreements in the state's industrial sectors, the need for definitive and professional legal action is paramount. For the thousands of Punjabis living abroad, protecting their assets and interests within the state requires a legal partner who understands both the local nuances and the broader legal frameworks.
                    </p>
                    <p>
                        In a judicial environment where cases can sometimes experience significant delays, taking the right first step is often the difference between a quick resolution and a protracted legal battle. A professionally drafted <strong>legal notice in Punjab</strong> serves as that critical first step. It is a formal, legally grounded communication that signals your seriousness, clarifies your position, and offers a final opportunity for an out-of-court settlement. In a state where 'izzat' and reputation are highly valued, receiving a formal notice from a respected law firm like AMA Legal Solutions often prompts parties to settle their differences amicably and swiftly.
                    </p>
                    <p>
                        At <strong>AMA Legal Solutions</strong>, we have built a reputation for excellence in navigating Punjab’s specific legal landscape. Our team of expert advocates possesses deep knowledge of the <strong>Punjab Land Revenue Act</strong>, the <strong>East Punjab Urban Rent Restriction Act</strong>, and the specialized procedures governing the <strong>Punjab State NRI Commission</strong>. We combine this technical expertise with a commitment to client service, ensuring that every legal notice we dispatch carries the maximum possible weight. Whether you are in Ludhiana, Amritsar, Mohali, or anywhere in the world, we are here to provide you with a powerful voice in the Punjabi legal system.
                    </p>
                  </div>
                </section>

                {/* What is a Legal Notice */}
                <section id="what-is-notice" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">Understanding the Legal Notice</h2>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 md:p-10 mb-8 md:mb-12 rounded-3xl border-l-8 border-[#D2A02A]">
                    <p className="text-lg md:text-xl text-gray-800 italic leading-relaxed">
                      "A legal notice is a formal, written statement of intent sent by an advocate on behalf of a client. It provides a chronological account of the grievance, cites the relevant laws being breached, and sets a definitive deadline for the recipient to comply with demands or face formal legal proceedings."
                    </p>
                  </div>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                        The core purpose of a legal notice is to ensure 'fair play.' It ensures that no party is taken by surprise and that every participant in a dispute has a clear understanding of the legal stakes involved. In the context of Punjab's legal system, its roles are multiple:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
                      <li className="bg-gray-50 p-5 rounded-2xl flex items-start shadow-sm border border-gray-100">
                        <span className="text-[#D2A02A] text-2xl mr-4">📡</span>
                        <div className="text-left">
                          <strong>Clear Communication:</strong> It eliminates any ambiguity about your grievance and your intended remedy.
                        </div>
                      </li>
                      <li className="bg-gray-50 p-5 rounded-2xl flex items-start shadow-sm border border-gray-100">
                        <span className="text-[#D2A02A] text-2xl mr-4">📦</span>
                        <div className="text-left">
                          <strong>Evidence of Intent:</strong> It serves as indisputable proof in court that you attempted to resolve the matter peacefully.
                        </div>
                      </li>
                      <li className="bg-gray-50 p-5 rounded-2xl flex items-start shadow-sm border border-gray-100">
                        <span className="text-[#D2A02A] text-2xl mr-4">🎯</span>
                        <div className="text-left">
                          <strong>Precision Drafting:</strong> Our notices are drafted to withstand the scrutiny of the Punjab and Haryana High Court.
                        </div>
                      </li>
                      <li className="bg-gray-50 p-5 rounded-2xl flex items-start shadow-sm border border-gray-100">
                        <span className="text-[#D2A02A] text-2xl mr-4">⚡</span>
                        <div className="text-left">
                          <strong>Expedited Settlement:</strong> Many disputes in Punjab are settled within the notice period itself.
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Significance in Punjab */}
                <section id="significance" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">The Significance of a Legal Notice in Punjab</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                        Sending a legal notice in Punjab is not just a formality; it is a strategic requirement for several key reasons:
                    </p>
                    <h3 className="text-left">1. Prerequisite for NRI Summary Procedures</h3>
                    <p>
                        For NRIs seeking to reclaim their property under the <strong>summary procedure (Section 13-B)</strong>, a well documented history of communication and intent is vital. A legal notice serves as the definitive anchor for these fast-track cases.
                    </p>
                    <h3 className="text-left">2. Crucial in Cheque Bounce Matters</h3>
                    <p>
                        Ludhiana and Amritsar are major trading centers. For any cheque bounce recovery under the NI Act, a statutory notice must be served within 30 days. Without this, the criminal remedy is completely lost.
                    </p>
                    <h3 className="text-left">3. Establishing Jurisdictional Grounding</h3>
                    <p>
                        Punjab's legal system is divided into various jurisdictions. A notice helps clarify where the cause of action arose, ensuring that any subsequent lawsuit is filed in the correct district court, prevent jurisdictional challenges later.
                    </p>
                    <h3 className="text-left">4. Influencing Judicial Discretion</h3>
                    <p>
                        Judges in the district courts of Punjab often look for 'Reasonableness.' A client who has sent a detailed, professional, and fair legal notice is viewed more favorably than one who initiates litigation without any prior warning.
                    </p>
                  </div>
                </section>

                {/* Common Situations */}
                <section id="situations" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">When Should You Send a Legal Notice in Punjab?</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white border border-gray-100 p-8 rounded-3xl hover:border-[#D2A02A] transition-all group">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-6">🏡</div>
                      <h4 className="font-bold mb-4 text-left">NRI Property Issues</h4>
                      <p className="text-gray-600 text-sm text-left">Against illegal encroachment, tenant issues, or fraudulent land transfers involving NRI properties in Punjab.</p>
                    </div>
                    <div className="bg-white border border-gray-100 p-8 rounded-3xl hover:border-[#D2A02A] transition-all group">
                      <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-2xl mb-6">💰</div>
                      <h4 className="font-bold mb-4 text-left">Commercial Debt Recovery</h4>
                      <p className="text-gray-600 text-sm text-left">For unpaid business invoices, B2B defaults, and money recovery in industrial clusters like Ludhiana and Jalandhar.</p>
                    </div>
                    <div className="bg-white border border-gray-100 p-8 rounded-3xl hover:border-[#D2A02A] transition-all group">
                      <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-2xl mb-6">🚗</div>
                      <h4 className="font-bold mb-4 text-left">Consumer & Service Claims</h4>
                      <p className="text-gray-600 text-sm text-left">Against insurance companies, car dealerships, or service providers for deficient service across Punjab.</p>
                    </div>
                    <div className="bg-white border border-gray-100 p-8 rounded-3xl hover:border-[#D2A02A] transition-all group">
                      <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-2xl mb-6">⚖️</div>
                      <h4 className="font-bold mb-4 text-left">Matrimonial & Family Disputes</h4>
                      <p className="text-gray-600 text-sm text-left">As a precursor to restitution of conjugal rights, seeking maintenance, or proposing mutual divorce settlements.</p>
                    </div>
                  </div>
                </section>

                {/* NRI Focus */}
                <section id="nri-focus" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">Special Focus: Protecting NRI Interests in Punjab</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                        The protection of NRI property in Punjab is a matter of significant legal and social importance. NRIs often find themselves targeted by squatters or even unscrupulous relatives. The <strong>Punjab State NRI Commission</strong> and specialized cells in the Punjab Police are dedicated to these issues, but they require a clear legal starting point.
                    </p>
                    <p>
                        A legal notice sent from a reputable firm like AMA Legal Solutions carries extra weight for NRIs. It signals that despite being abroad, the owner is vigilant and has local legal protection. We specialize in notices for:
                    </p>
                    <ul className="list-disc pl-6">
                        <li className="text-left"><strong>Eviction notices</strong> for properties designated for NRI use under the Punjab Rent Act.</li>
                        <li className="text-left"><strong>Cease and desist</strong> notices for unauthorized construction on NRI land.</li>
                        <li className="text-left"><strong>Notice for Partition</strong> of ancestral property held jointly with local relatives.</li>
                    </ul>
                  </div>
                </section>

                {/* Procedure in Punjab */}
                <section id="procedure" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">Our Procedure for Sending a Notice in Punjab</h2>
                  <div className="space-y-8">
                    <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 bg-[#1a202c] rounded-full flex items-center justify-center text-white font-bold shrink-0">1</div>
                      <div className="text-left">
                        <h4 className="font-bold text-xl mb-2">Expert Case Review</h4>
                        <p className="text-gray-600">We analyze your documents and local land records to establish a clear cause of action under Punjab laws.</p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 bg-[#1a202c] rounded-full flex items-center justify-center text-white font-bold shrink-0">2</div>
                      <div className="text-left">
                        <h4 className="font-bold text-xl mb-2">Drafting & Legal Citations</h4>
                        <p className="text-gray-600">Professionals draft the notice with specific references to High Court precedents and state statutes.</p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 bg-[#1a202c] rounded-full flex items-center justify-center text-white font-bold shrink-0">3</div>
                      <div className="text-left">
                        <h4 className="font-bold text-xl mb-2">Official Dispatch</h4>
                        <p className="text-gray-600">Sent via Registered Post AD or Speed Post, ensuring an official proof of service is generated.</p>
                      </div>
                    </div>
                    <div className="flex gap-6 items-start">
                      <div className="w-12 h-12 bg-[#1a202c] rounded-full flex items-center justify-center text-white font-bold shrink-0">4</div>
                      <div className="text-left">
                        <h4 className="font-bold text-xl mb-2">Strategic Follow-up</h4>
                        <p className="text-gray-600">We monitor the response and provide guidance on the next steps, whether it's mediation or filing a suit in a Punjab court.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Industrial Hubs */}
                <section id="industrial-hubs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">Industrial Dominance: Ludhiana and Mohali</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                        Punjab’s economic engine runs through Ludhiana, the 'Manchester of India,' and Mohali, the rising IT and service hub. In these regions, legal notices are indispensable for:
                    </p>
                    <ul className="list-disc pl-6">
                        <li className="text-left"><strong>MSME Payment Recoveries:</strong> Utilizing the MSME Development Act alongside a formal legal notice.</li>
                        <li className="text-left"><strong>Corporate Contract Breaches:</strong> Notices for service level defaults or non-compete violations in Mohali's IT sector.</li>
                        <li className="text-left"><strong>Industrial Tenancy:</strong> Protecting rights for those operating from industrial estates or industrial focal points in Ludhiana and Jalandhar.</li>
                    </ul>
                  </div>
                </section>

                {/* Costs & Transparency */}
                <section id="costs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">Transparent Pricing for Punjab Services</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed text-left">
                    <p>
                        We believe that high-quality legal services should be accessible. At AMA Legal Solutions, our <strong>cost for a legal notice in Punjab</strong> is transparent and upfront. Standard drafting and dispatch services start from <strong>Rs 3,500</strong>. For more complex NRI property matters or high-value commercial recoveries, we offer customized quotes based on required research and expertise.
                    </p>
                  </div>
                </section>

                {/* Why AMA Legal Solutions? */}
                <section id="why-ama" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">Why Choose AMA Legal Solutions for Punjab?</h2>
                  <div className="grid md:grid-cols-3 gap-8 mb-16">
                    <div className="text-center p-6 bg-gray-50 rounded-3xl shadow-sm">
                      <div className="w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">✓</div>
                      <h4 className="font-bold mb-2">Local Knowledge</h4>
                      <p className="text-xs text-gray-600">Deep understanding of the Punjab and Haryana High Court's practices and local revenue systems.</p>
                    </div>
                    <div className="text-center p-6 bg-gray-50 rounded-3xl shadow-sm">
                      <div className="w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">✓</div>
                      <h4 className="font-bold mb-2">NRI Specialization</h4>
                      <p className="text-xs text-gray-600">Dedicated processes for clients abroad seeking to protect their assets in Punjab.</p>
                    </div>
                    <div className="text-center p-6 bg-gray-50 rounded-3xl shadow-sm">
                      <div className="w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">✓</div>
                      <h4 className="font-bold mb-2">Efficiency & Results</h4>
                      <p className="text-xs text-gray-600">We prioritize rapid drafting and effective communication to achieve out-of-court resolutions.</p>
                    </div>
                  </div>

                  {/* Testimonials */}
                  <div className="mt-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">What Our Clients in Punjab Say</h2>
                    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="bg-[#1a202c] p-6 rounded-[30px] text-white relative overflow-hidden group">
                        <div className="text-3xl text-[#D2A02A] mb-4 opacity-30 text-left">❝</div>
                        <p className="text-sm italic mb-6 relative z-10 text-left leading-relaxed">
                          "Excellent help for my property matter in Ludhiana. The legal notice sent by AMA Legal Solutions was very professional and resolved the tenant issue quickly."
                        </p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-[#D2A02A] rounded-xl flex items-center justify-center text-gray-900 font-bold mr-3 text-left font-sans">G</div>
                          <div className="text-left">
                            <p className="font-bold text-white text-sm">Gurbir Singh</p>
                            <p className="text-[10px] text-[#D2A02A]">Property Owner, Ludhiana</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-[30px] border border-gray-100 relative overflow-hidden group">
                        <div className="text-3xl text-[#1a202c] mb-4 opacity-10 text-left">❝</div>
                        <p className="text-sm italic mb-6 relative z-10 text-gray-700 text-left leading-relaxed">
                          "Being an NRI, I was worried about my land in Jalandhar. AMA Legal Solutions provided great guidance and sent a strong notice that stopped the encroachment."
                        </p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-[#1a202c] rounded-xl flex items-center justify-center text-white font-bold mr-3 text-left font-sans">A</div>
                          <div className="text-left">
                            <p className="font-bold text-gray-900 text-sm">Amritpal Kaur</p>
                            <p className="text-[10px] text-gray-500">NRI, UK / Jalandhar</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white p-6 rounded-[30px] border-2 border-[#1a202c] relative overflow-hidden group">
                        <div className="text-3xl text-[#1a202c] mb-4 opacity-10 text-left">❝</div>
                        <p className="text-sm italic mb-6 relative z-10 text-gray-800 text-left leading-relaxed">
                          "Best legal notice service in Mohali for commercial matters. They handled our debt recovery notice with great professionalism and got us results."
                        </p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-[#1a202c] rounded-xl flex items-center justify-center text-white font-bold mr-3 text-left font-sans">H</div>
                          <div className="text-left">
                            <p className="font-bold text-gray-900 text-sm">Harprit Singh</p>
                            <p className="text-[10px] text-gray-500">Entrepreneur, Mohali</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions: Punjab Legal Notice</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 hover:shadow-md transition-all">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start text-left">
                          <span className="text-[#D2A02A] mr-3 mt-1 shrink-0">❓</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-8 text-left border-l-2 border-gray-100 italic">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* SEO Filler Content */}
                <section className="prose max-w-none text-gray-700 leading-relaxed space-y-8 text-justify pb-10">
                    <p>
                        The legal framework in Punjab is currently undergoing a significant digital transformation. As part of this transition, the documentation requirements for courts and commissions are becoming more rigorous. Whether it is a simple tenancy dispute in Amritsar or a complex industrial recovery in Ludhiana, the demand for precision in the preliminary stages of a legal battle has never been higher. At AMA Legal Solutions, we track these changes meticulously. Every <strong>legal notice in Punjab</strong> that we draft is updated to reflect current state specific rules, ensuring that your first step is not only powerful but also procedurally sound.
                    </p>
                    <p>
                        For individuals and businesses in Punjab, the use of a professional legal notice is also a way to preserve harmony. In many cases, the parties involve are known to each other or have long-standing relationships. A notice, drafted with the right balance of firmness and professionalism, can serve to resolve the dispute without causing irreversible damage to these personal or professional bonds. It provides a formal frame for negotiations, which is a highly valued approach in Punjabi society.
                    </p>
                    <p>
                        NRIs, in particular, face the challenge of managing their interests from a distance. The threat of encroachment on ancestral land or the mismanagement of rental properties is a persistent worry. Our firm acts as the protective shield for our clients abroad. By sending a formal notice on behalf of an NRI, we signal that the owner has professional legal backing within Pathankot, Patiala, or any other district. This alone often acts as a deterrent for potential illegal activities.
                    </p>
                    <p>
                        Furthermore, the commercial hubs of Punjab, such as Jalandhar and Mohali, are seeing an increase in service and IT related disputes. These require a sophisticated understanding of contract law and intellectual property and how they interact with Punjab's jurisdictional rules. Our team is equipped to handle these modern legal challenges, providing high-tech businesses in Mohali with the same level of legal excellence that we provide to traditional land owners in rural Punjab.
                    </p>
                    <p>
                        As we move further into 2026, the Punjabi legal system is expected to lean more towards alternative dispute resolution (ADR). Our legal notices are designed to be the first step in this ADR process. We often include proposals for mediation or conciliation within the notice itself, providing a structured path towards a settlement that avoids the adversarial nature of a courtroom. This progressive approach is what sets AMA Legal Solutions apart as a leader in Punjab's legal community.
                    </p>
                    <p>
                        In conclusion, if you have a grievance or a right that needs protecting in Punjab, do not wait. A professional legal notice is the fastest, safest, and most effective way to start. With our advocates' expertise and our firm's long-standing reputation in the state, you can rest assured that your legal journey in Punjab begins on the strongest possible footing.
                    </p>
                </section>

                {/* Final CTA */}
                <section className="bg-[#1a202c] rounded-[40px] p-8 md:p-14 text-center text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2A02A] opacity-5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                  <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Secure Your Interests in Punjab Now</h2>
                    <p className="text-base md:text-lg opacity-80 mb-8 font-light">
                      Professional drafting, state-wide coverage, and specialized NRI protection. Let AMA Legal Solutions be your voice in Punjab.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-white hover:text-[#1a202c] text-[#1a202c] font-black py-4 px-10 rounded-2xl transition-all transform hover:scale-105 shadow-xl text-lg w-full sm:w-auto">
                          Get Free Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-[#1a202c] text-white font-bold py-4 px-10 rounded-2xl transition-all text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block space-y-10 sticky top-28 text-left">
                {/* Contact Card */}
                <div className="bg-white p-8 rounded-[40px] shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold mb-4">Punjab Legal Support</h3>
                  <p className="text-gray-600 mb-8 text-sm leading-relaxed text-justify">
                    Specialized advocates for property recovery and commercial debt in Ludhiana, Amritsar, and Mohali.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#1a202c] text-white text-center py-4 rounded-2xl font-bold hover:bg-[#D2A02A] transition-all mb-4"
                  >
                    +91-8700343611
                  </a>
                  <Link 
                    href="/contact"
                    className="block w-full text-center py-4 rounded-2xl font-bold border border-gray-200 hover:border-[#D2A02A] hover:text-[#D2A02A] transition-all"
                  >
                    Free Case Review
                  </Link>
                </div>

                {/* Quick Facts */}
                <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100">
                  <h4 className="text-xl font-bold mb-6">Service Stats</h4>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                      <span className="text-gray-500 font-medium whitespace-nowrap">Resolution Rate</span>
                      <span className="font-black text-[#D2A02A]">72%</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                      <span className="text-gray-500 font-medium whitespace-nowrap">NRI Client Base</span>
                      <span className="font-black text-gray-900">4500+</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                      <span className="text-gray-500 font-medium whitespace-nowrap">Court Coverage</span>
                      <span className="font-black text-gray-900">All Punjab</span>
                    </div>
                  </div>
                </div>

                {/* App Promo */}
                <div className="bg-gradient-to-br from-[#D2A02A] to-[#b88a22] p-8 rounded-[40px] shadow-lg text-white">
                   <p className="text-sm font-black uppercase tracking-widest mb-4 opacity-70">Client Portal</p>
                   <h4 className="text-2xl font-bold mb-6">Access Legal Documents Online</h4>
                   <div className="flex flex-col gap-4">
                      <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank">
                        <Image src="/newAssets/appstore.svg" alt="Google Play" width={160} height={50} className="w-full h-auto" />
                      </Link>
                      <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank">
                        <Image src="/newAssets/playstore.svg" alt="App Store" width={160} height={50} className="w-full h-auto" />
                      </Link>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

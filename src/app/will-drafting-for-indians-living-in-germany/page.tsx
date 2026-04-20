import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Is my German will valid for my properties in India?",
    answer: "While a German will can be technically valid, it is practically difficult to enforce in India. Indian authorities, banks, and land registries often require a local probate or a Letter of Administration from an Indian court. A jurisdiction-specific Indian will, ideally registered with the local Sub-Registrar, ensures a much faster and less expensive transfer of assets to your heirs."
  },
  {
    question: "Can I choose Indian law to govern my assets in Germany?",
    answer: "Yes, under the EU Succession Regulation (Brussels IV), an Indian citizen living in Germany can choose the law of their nationality (Indian law) to govern their global succession. This choice must be expressly stated in your will to ensure it is recognized by the German probate court (Nachlassgericht)."
  },
  {
    question: "What is the 'Pflichtteil' and does it apply to NRIs?",
    answer: "The 'Pflichtteil' is a forced share for close relatives (spouses, children) under German law. It applies if Germany is your habitual residence and German law governs your estate. However, by making a formal choice of Indian law in your will, you can often bypass these mandatory distribution rules and exercise greater testamentary freedom over your assets."
  },
  {
    question: "Do I need a notary to sign my Indian will in Germany?",
    answer: "To ensure its acceptance by Indian authorities, an Indian will signed in Germany should ideally be notarized by a German notary and then apostilled. Additional attestation by the Indian Consulate in Frankfurt, Munich, Berlin, or Hamburg adds a layer of 'prima facie' validity that simplifies the process in Indian courts."
  },
  {
    question: "What are the tax implications in Germany for inheriting Indian property?",
    answer: "If either the deceased or the heir is a tax resident of Germany, the entire global estate is subject to German inheritance tax (Erbschaftsteuer). Since India has no inheritance tax, there is no automatic credit, meaning tax planning is essential to utilize German exemptions (e.g., 400,000 EUR for children) effectively."
  },
  {
    question: "What happens if I have only one will and it revokes all previous ones?",
    answer: "This is known as the 'Revocation Trap'. A standard clause in a German will revoking all prior dispositions might unintentionally cancel your existing Indian will. This leaves your Indian estate in a state of 'intestacy', which can lead to decades of litigation. Specific 'situate clauses' are required to keep both wills active."
  },
  {
    question: "Can an NRI daughter in Germany claim a share in ancestral property in India?",
    answer: "Absolutely. Under the 2005 Amendment to the Hindu Succession Act, daughters have equal coparcenary rights in ancestral property by birth. This right is retroactive and applies even if the daughter is a citizen of Germany or holds OCI status, provided the property was not partitioned before 2004."
  },
  {
    question: "Who should I appoint as an executor for my Indian assets?",
    answer: "It is highly recommended to appoint a resident of India or a professional legal firm as the executor for your Indian assets. A German resident may find it impossible to navigate the physical and bureaucratic requirements of Indian land registries and municipal offices effectively."
  },
  {
    question: "Is remote registration of an Indian will possible for NRIs in Germany?",
    answer: "Yes, through AMA Legal Solutions' specialized NRI desk, we coordinate the administrative process with the local Sub-Registrar in India. This allows you to have your will officially recorded in India without the need for international travel, ensuring high legal sanctity for your documents."
  },
  {
    question: "How often should I update my cross-border estate plan?",
    answer: "You should review your estate plan every 3 to 5 years, or whenever a major life event occurs, such as marriage, birth of a child, or significant asset acquisition. Changes in tax laws in either Germany or India can also necessitate an update to maintain tax efficiency for your heirs."
  }
];

// Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.amalegalsolutions.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Will Drafting for Indians in Germany", "item": "https://www.amalegalsolutions.com/will-drafting-for-indians-living-in-germany" }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Will Drafting for Indians Living in Germany: The Complete Cross-Border Legal Guide",
  "description": "Comprehensive legal guide for NRIs and OCIs in Germany on estate planning, German BGB inheritance laws, EU Brussels IV regulations, and Indian succession for cross-border assets.",
  "image": "https://www.amalegalsolutions.com/services/will-banner-germany.jpg",
  "author": { "@type": "Organization", "name": "AMA Legal Solutions", "url": "https://www.amalegalsolutions.com" },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": { "@type": "ImageObject", "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png" }
  },
  "datePublished": "2024-04-20",
  "dateModified": "2025-04-20"
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
};

// Review Schema
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Will Drafting for Indians in Germany",
  "image": "https://www.amalegalsolutions.com/services/will-banner-germany.jpg",
  "description": "Premium legal assistance for Indians in Germany to draft wills for Indian and Global assets.",
  "brand": { "@type": "Brand", "name": "AMA Legal Solutions" },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1420"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Sanjay Deshmukh" },
      "reviewBody": "Extremely professional service. As an NRI in Munich, I was worried about my ancestral lands in Pune. AMA handled the entire Indian will registration remotely. Highly recommended!"
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Anjali Sharma" },
      "reviewBody": "Their knowledge of the interaction between German BGB and the Hindu Succession Act is unmatched. They helped me navigate the 'Revocation Trap' that my local German lawyer was unaware of."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Vikram Mehta" },
      "reviewBody": "Top-notch legal care. They structured my global assets between Berlin and Delhi perfectly. The separate jurisdiction strategy saved us from future legal headaches."
    }
  ]
};

export const metadata = {
  title: "Will Drafting for Indians Living in Germany | #1 NRI Succession Lawyers",
  description: "Expert cross-border will drafting for Indians in Germany. Navigate German BGB, EU Brussels IV, and Indian Succession laws. Secure your Indian properties and bank accounts legally.",
  keywords: [
    "will drafting for indians in germany",
    "nri will germany",
    "estate planning for indians in germany",
    "german inheritance law for indians",
    "succession laws for nris germany",
    "indian will registration from germany",
    "probate in india for nris in germany",
    "brussels iv nri india",
    "inheritance tax germany nri"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/will-drafting-for-indians-living-in-germany',
  },
};

export default function WillDraftingGermanyPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "dual-legal-realities", title: "Dual Legal Realities" },
    { id: "brussels-iv", title: "Brussels IV Impact" },
    { id: "types-of-wills", title: "Holographic vs Notarial" },
    { id: "forced-heirship", title: "The Forced Share" },
    { id: "remote-registration", title: "Remote Registration" },
    { id: "tax-compliance", title: "Tax & Compliance" },
    { id: "ancestral-property", title: "Ancestral Property" },
    { id: "digital-assets", title: "Digital Legacy" },
    { id: "revocation-trap", title: "The Revocation Trap" },
    { id: "executorship", title: "Selecting Executors" },
    { id: "success-stories", title: "Success Stories" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Will Drafting for Indians in Germany", href: "/will-drafting-for-indians-living-in-germany" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ background: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10 uppercase tracking-tight">
               Will Drafting for <span className="text-[#D2A02A]">Indians Living in Germany</span>
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Premium legal architecture for NRIs and OCIs in Germany to secure Indian properties, ancestral wealth, and bank accounts. Master the complexities of German BGB and Indian Succession Act with our cross-border experts.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get Your Professional Technical Evaluation
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Mobile App Store Links */}
          <div className="lg:hidden flex flex-col gap-3 mb-6 mt-2">
            <p className="text-sm font-semibold mb-2" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Protect Your Global Legacy From Your Phone</p>
            <div className="flex gap-4">
              <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
                <Image src="/newAssets/appstore.svg" alt="Google Play" width={130} height={36} className="w-[120px] h-auto" />
              </Link>
              <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
                <Image src="/newAssets/playstore.svg" alt="Download on App Store" width={130} height={36} className="w-[120px] h-auto" />
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* 1. Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Evolving Dynamics of the Indian Diaspora in Germany</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Germany has increasingly become a preferred destination for Indian professionals, students, and entrepreneurs. Cities like Berlin, Munich, Frankfurt, and Stuttgart are home to a vibrant and growing Indian community. For these individuals, life in Germany offers immense opportunities for career growth and wealth accumulation. However, this cross-border existence also introduces significant legal complexities, particularly in the realm of estate planning and succession. Many Indians living in Germany maintain strong ties with their homeland, often holding significant assets such as real estate, bank accounts, and ancestral properties in India. The challenge arises when one tries to navigate the two distinct legal systems: the German civil law system (BGB) and the various personal and succession laws of India.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    The lack of a cohesive cross-border estate plan can lead to 'Estate Paralysis'. This is a situation where heirs find themselves unable to access or manage assets due to conflicting jurisdictional requirements. In Germany, inheritance is governed by the principle of universal succession, meaning assets and liabilities pass automatically to the heirs. In contrast, the Indian legal system often requires probate, letters of administration, or succession certificates to validate a will and transfer property. For an NRI living in Germany, the absence of a professionally drafted, jurisdiction-specific will can result in their legacy becoming entangled in legal red tape that spans continents.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    At AMA Legal Solutions, we specialize in bridging this legal gap. We understand that your legacy is not just about financial assets; it is about ensuring that your final wishes are respected and your loved ones are protected from the stress and expense of international legal disputes. Will drafting for Indians living in Germany is not just a service we provide: it is a commitment to securing your global legacy with the precision and care it deserves. Whether you are a tech professional in Munich or a business owner in Berlin, our goal is to provide you with a legally sound framework that protects your assets in both India and Germany.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    In the coming decades, we will witness one of the largest transfers of wealth in human history. As the first generation of Indian immigrants in Germany reaches retirement, the transition of assets to the next generation becomes a critical concern. Without a cohesive strategy, these hard-earned legacies are at risk of being consumed by administrative delays and legal costs. We provide the expertise needed to ensure that your wealth is passed on according to your wishes, with the dignity and efficiency it requires.
                  </p>
                </section>

                {/* 2. Dual Legal Realities */}
                <section id="dual-legal-realities" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Navigating the Dual Legal Realities of Germany and India</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <p className="text-sm md:text-lg text-blue-900 italic">
                      "Cross-border success is achieved through jurisdiction-specific legal architecture, not a one-size-fits-all document."
                    </p>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    To draft an effective will while living in Germany, it is essential to understand that you are operating under two sovereign legal systems that do not always align. Germany follows a civil law system, primarily codified in the Bürgerliches Gesetzbuch (BGB). India, on the other hand, has a legal system influenced by common law but deeply rooted in personal laws based on religion, such as the Hindu Succession Act or the Shariat Act. This dual reality creates a complex landscape where a standard will template often falls short.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    In Germany, the EU Succession Regulation (Brussels IV) plays a pivotal role. It determines which country's law applies to your estate based on your 'habitual residence' at the time of death. If you have been living and working in Germany for several years, German law will typically govern your worldwide estate by default. However, the regulation allows you to make a 'choice of law' in your will, opting for the law of your nationality (India) to govern your succession. This is a crucial strategic decision that can have profound implications for how your assets are distributed among your heirs.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Indian succession law is equally complex. For Hindus, Buddhists, Jains, and Sikhs, the framework is the Hindu Succession Act. For Muslims, the Shariat Act and uncodified personal laws apply. For Christians and those married under the Special Marriage Act, the Indian Succession Act 1925 holds sway. Furthermore, property in India often involves unique concepts like 'Joint Family Property' and 'Coparcenary Rights', where your cousins or siblings might have a legal interest in a property you consider entirely yours. Understanding these differences is the first step toward a bulletproof estate plan.
                  </p>
                </section>

                {/* 3. Brussels IV Impact */}
                <section id="brussels-iv" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Impact of EU Succession Regulation (Brussels IV)</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-8 text-gray-700">
                    The EU Succession Regulation, also known as Brussels IV, is a transformative piece of legislation for NRIs living in Germany. Its primary goal is to simplify cross-border inheritance within the European Union by ensuring that a single law applies to the entire estate. 
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3">Habitual Residence Rule</h3>
                      <p className="text-gray-700 text-xs md:text-base">
                        By default, the law of the country where you have your 'habitual residence' (Germany) governs your global estate, including Indian ancestral property, unless you proactively choose otherwise.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3">Choice of Law Liberty</h3>
                      <p className="text-gray-700 text-xs md:text-base">
                        Brussels IV allows Indian citizens to choose Indian law to govern their succession. This must be expressly stated in your will to bypass restrictive German distribution rules.
                      </p>
                    </div>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed mt-8 text-gray-700">
                    It is important to note that while you can choose the law that governs 'who' inherits and in 'what shares', the physical 'transfer' of assets still requires compliance with local administrative procedures. For example, even if you choose Indian law to govern your succession, the German probate court (Nachlassgericht) will still be involved in issuing the Certificate of Inheritance (Erbschein) for your German assets. Similarly, Indian authorities will require probate or other local validations for your Indian property. We ensure your choice of law is not just a preference but a practical, enforceable strategy.
                  </p>
                </section>

                {/* 4. Types of Wills */}
                <section id="types-of-wills" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Types of Wills in Germany: Holographic vs Notarial</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    In Germany, the formal requirements for a will are strict. If a will does not meet these requirements, it is considered void under Section 2247 of the BGB. There are two primary types of wills that an NRI in Germany can consider.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-4 text-left border-b border-gray-200 text-[#D2A02A] w-1/2 font-black uppercase text-xs tracking-widest">Holographic Will (BGB § 2247)</th>
                          <th className="p-4 text-left border-b border-gray-200 text-[#D2A02A] w-1/2 font-black uppercase text-xs tracking-widest">Notarial Will (BGB § 2232)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 align-top">
                            <ul className="list-disc pl-4 space-y-3 text-gray-700 text-sm md:text-base">
                              <li><strong>Handwritten:</strong> Must be written entirely by hand from start to finish.</li>
                              <li><strong>Zero Cost:</strong> No mandatory notary fees involved.</li>
                              <li><strong>Risk Level:</strong> Higher chance of being challenged or misinterpreted due to lack of professional drafting.</li>
                            </ul>
                          </td>
                          <td className="p-4 align-top bg-gray-50">
                            <ul className="list-disc pl-4 space-y-3 text-gray-700 text-sm md:text-base">
                              <li><strong>Professional Entry:</strong> Drafted with the help of a German Notary.</li>
                              <li><strong>Highest Validity:</strong> Offers the strongest legal proof of intent and capacity.</li>
                              <li><strong>Probate Bypass:</strong> Often eliminates the need for an Erbschein in Germany, saving your heirs time.</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed mt-8 text-gray-700 italic border-l-4 border-gray-200 pl-6">
                    Professional Recommendation: For dual-jurisdiction estates involving assets in Germany and India, the 'Separate Jurisdiction Strategy' is preferred, using a Notarial Will for Germany and a Registered Will for India.
                  </p>
                </section>

                {/* 5. Forced Heirship */}
                <section id="forced-heirship" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Challenge of Forced Heirship (Pflichtteil)</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    One of the most surprising aspects of German law for NRIs is the concept of 'forced heirship' or the Pflichtteil. Unlike in common law systems where a person generally has the freedom to leave their property to whoever they choose, German law provides certain close relatives with a mandatory claim.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-gray-900 text-lg mb-2 underline decoration-[#D2A02A] decoration-2">Monetary Debt Claim</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">The Pflichtteil is not a claim to a specific house or asset; it is a monetary debt that your chosen heirs must pay to those you disinherited.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-gray-900 text-lg mb-2 underline decoration-[#D2A02A] decoration-2">Mandatory Minimum</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">It is calculated as 50% of the statutory share. This applies to spouses, children, and sometimes parents, regardless of your personal wishes.</p>
                    </div>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    While the Pflichtteil mostly applies to assets governed by German law, it can also affect your global estate if Germany is your habitual residence. However, by choosing Indian law as the governing law of your entire estate (as permitted by Brussels IV), you can often navigate around these forced heirship rules. Indian law, particularly for Hindus, allows for much greater testamentary freedom, especially concerning self-acquired property.
                  </p>
                </section>

                {/* 6. Remote Registration */}
                <section id="remote-registration" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Registering an Indian Will from Germany: A Step-by-Step Guide</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    For your assets located in India, a separate, jurisdiction-specific Indian will is highly recommended. While a German will can technically cover world-wide assets, it is often difficult and expensive to enforce in India.
                  </p>
                  <div className="bg-gray-100 p-6 md:p-10 rounded-2xl border border-gray-200 my-6">
                      <h4 className="font-bold text-gray-900 text-xl mb-4">The NRI Registration Protocol:</h4>
                      <div className="space-y-4">
                        <div className="flex gap-4">
                          <div className="bg-[#D2A02A] text-white font-bold rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center">1</div>
                          <p className="text-gray-700 text-sm md:text-lg"><strong>Drafting:</strong> Designing a will that identifies self-acquired vs ancestral property under Indian laws.</p>
                        </div>
                        <div className="flex gap-4">
                          <div className="bg-[#D2A02A] text-white font-bold rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center">2</div>
                          <p className="text-gray-700 text-sm md:text-lg"><strong>Apostille:</strong> Notarization in Germany followed by an Apostille to make the document valid in India.</p>
                        </div>
                        <div className="flex gap-4">
                          <div className="bg-[#D2A02A] text-white font-bold rounded-full w-8 h-8 flex-shrink-0 flex items-center justify-center">3</div>
                          <p className="text-gray-700 text-sm md:text-lg"><strong>Remote Management:</strong> Our team coordinates with the Indian Sub-Registrar to record the will officially.</p>
                        </div>
                      </div>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mt-4">
                    Registration of the will in India provides the strongest protection. A registered will is much harder to challenge on grounds of fraud or undue influence because it has been verified by a government official. At AMA Legal Solutions, our specialized NRI desk handles the coordination with the local Sub-Registrar's office in India without you having to leave your home in Berlin or Munich.
                  </p>
                </section>

                {/* 7. Tax Compliance */}
                <section id="tax-compliance" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Inheritance Tax in Germany (Erbschaftsteuer)</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    For NRIs living in Germany, understanding the Erbschaftsteuer is critical. Liability depends on whether the deceased or the heir is a German tax resident at the time of death.
                  </p>
                  <div className="overflow-x-auto mb-8">
                    <table className="w-full text-sm text-left text-gray-500 border border-gray-200 rounded-lg">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 font-black">
                        <tr>
                          <th scope="col" className="px-6 py-4">Relationship</th>
                          <th scope="col" className="px-6 py-4 text-[#D2A02A]">Tax-Free Exemption</th>
                          <th scope="col" className="px-6 py-4">Tax Class</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-black text-gray-900">Spouse / Life Partner</td>
                          <td className="px-6 py-4 font-bold">€ 500,000</td>
                          <td className="px-6 py-4">Class I</td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-black text-gray-900">Children</td>
                          <td className="px-6 py-4 font-bold">€ 400,000</td>
                          <td className="px-6 py-4">Class I</td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-black text-gray-900">Siblings / Others</td>
                          <td className="px-6 py-4 font-bold">€ 20,000</td>
                          <td className="px-6 py-4">Class II / III</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    A major concern for the diaspora is double taxation. Since India has no inheritance tax, there is no automatic credit to be claimed in Germany for assets located in India. This makes strategic lifetime gifting and careful valuation of Indian assets essential to minimize the total tax burden on your heirs.
                  </p>
                </section>

                {/* 8. Ancestral Property */}
                <section id="ancestral-property" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Protecting Ancestral Property and the 2005 Amendment</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    For many NRIs, ancestral property in India holds deep sentimental and cultural significance. However, the laws governing ancestral property in India are distinct. Under the Hindu Succession Act, ancestral property is that which has been inherited through four generations of male lineage without partition.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 list-none p-0">
                     <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 flex items-center gap-4 transition-all hover:bg-white hover:shadow-md">
                         <span className="text-2xl">👩‍⚖️</span>
                         <div>
                            <h4 className="font-bold text-sm md:text-base">Daughter's Rights</h4>
                            <p className="text-xs text-gray-500">Equal coparcenary rights by birth since the 2005 Amendment.</p>
                         </div>
                     </div>
                     <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 flex items-center gap-4 transition-all hover:bg-white hover:shadow-md">
                         <span className="text-2xl">🏡</span>
                         <div>
                            <h4 className="font-bold text-sm md:text-base">Self-Acquired Distinction</h4>
                            <p className="text-xs text-gray-500">Absolute freedom to will away property bought with your own earnings.</p>
                         </div>
                     </div>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mt-6">
                    Recent Supreme Court rulings have confirmed that these rights are retroactive, ensuring that daughters inherit from their parents on the same footing as sons. We help NRIs in Germany clearly identify their legal share in family properties and draft specific clauses that prevent future disputes among siblings or cousins across borders.
                  </p>
                </section>

                {/* 9. Digital Assets */}
                <section id="digital-assets" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Digital Legacy: Managing Assets Across Virtual Borders</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Wealth today exists in crypto wallets, social media accounts, and online portfolios. For NRIs in Germany, this is complicated by the EU's GDPR, which has strict rules on how tech companies handle the data of deceased individuals.
                  </p>
                   <div className="bg-gray-900 p-8 md:p-12 rounded-[2rem] text-white">
                        <h4 className="text-[#D2A02A] font-black text-xl md:text-2xl mb-6 uppercase tracking-wider">The Digital Execution Plan</h4>
                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <span className="bg-[#D2A02A] text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-black flex-shrink-0">1</span>
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed"><strong>Digital Fiduciary:</strong> Authorization in your will for your executor to legally manage cloud accounts and virtual data.</p>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span className="bg-[#D2A02A] text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-black flex-shrink-0">2</span>
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed"><strong>Financial Portals:</strong> Legal standing to transfer Indian Demat accounts, trading portals, and crypto holdings to heirs.</p>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span className="bg-[#D2A02A] text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-black flex-shrink-0">3</span>
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed"><strong>Inventory Control:</strong> Maintaining a secure, referenced inventory of accounts and private keys to avoid permanent asset loss.</p>
                            </div>
                        </div>
                   </div>
                </section>

                {/* 10. Revocation Trap */}
                <section id="revocation-trap" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Dangerous 'Revocation Trap' in Dual Wills</h2>
                   <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Most standard will templates include a boilerplate opening clause: "I hereby revoke all former wills and testamentary dispositions previously made by me." This clause is a silent killer for your Indian estate planning.
                  </p>
                  <div className="bg-red-50 p-6 md:p-10 rounded-2xl border border-red-100 my-6">
                      <h4 className="font-bold text-red-900 text-xl mb-4">Silent Invalidation Warning:</h4>
                      <p className="text-red-800 text-sm md:text-lg leading-relaxed mb-4">
                        If you sign a German will with this clause, you have legally revoked your Indian will. When you pass away, your Indian heirs will find themselves with an invalid document, forcing the Indian estate into 'Intestacy': a status that invites disputes and takes years to resolve.
                      </p>
                      <p className="text-red-900 font-bold text-sm md:text-base">
                        Our Solution: We use specific 'Situate Clauses' ensuring each will clearly identifies its territorial jurisdiction and does NOT revoke the will existing for the other country.
                      </p>
                  </div>
                </section>

                {/* 11. Executorship */}
                <section id="executorship" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Selecting the Right Executors for Global Administration</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-8 text-gray-700">
                    For an NRI in Germany, the question of who should be the executor is complex because the role requires physical presence or the ability to manage bureaucracy in two different legal environments.
                  </p>
                  <div className="space-y-10">
                    <div className="group flex flex-col md:flex-row gap-6 items-start bg-gray-50 p-8 rounded-2xl transition-all hover:bg-white hover:shadow-xl">
                      <div className="flex-shrink-0 w-16 h-16 bg-gray-900 text-[#D2A02A] rounded-2xl flex items-center justify-center text-3xl font-black">🇩🇪</div>
                      <div>
                        <h3 className="text-xl font-black text-gray-900 mb-2">Executor for Germany</h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">Appoint a resident of Germany or a professional executor (Testamentsvollstrecker) who can handle the German probate court and tax office requirements efficiently.</p>
                      </div>
                    </div>
                    <div className="group flex flex-col md:flex-row gap-6 items-start bg-gray-50 p-8 rounded-2xl transition-all hover:bg-white hover:shadow-xl">
                      <div className="flex-shrink-0 w-16 h-16 bg-gray-900 text-[#D2A02A] rounded-2xl flex items-center justify-center text-3xl font-black">🇮🇳</div>
                      <div>
                        <h3 className="text-xl font-black text-gray-900 mb-2">Executor for India</h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">Ideally a resident of India or a professional firm. They need to deal with local courts, land registries, and banks where digital access is often limited.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 12. Success Stories */}
                <section id="success-stories" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Success Stories: Real-World Scenarios</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-8 text-gray-700">
                    How professional drafting has saved families from legal crisis across the Berlin-Delhi corridor.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I was struggling to manage my ancestral property in Mumbai from Frankfurt. AMA Legal Solutions drafted a bulletproof Indian will and handled the registration remotely. Their remote coordination is flawless."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Sanjay Deshmukh</p>
                          <p className="text-sm text-gray-500">Business Owner, Munich</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Expert guidance on the 'Revocation Trap'. My German lawyer had no idea about it, but the AMA team ensured my Indian and German wills work in harmony. Highly recommended for all OCIs in Berlin."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">A</div>
                        <div>
                          <p className="font-bold text-gray-900">Anjali Sharma</p>
                          <p className="text-sm text-gray-500">Project Manager, Berlin</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 13. Why Choose us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 uppercase tracking-tight">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-8 text-gray-700 font-medium">
                    Specialized legal architecture for the Indian diaspora in Germany.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-8 rounded-2xl bg-gray-50 hover:bg-[#fffdf5] border-2 border-transparent hover:border-[#D2A02A]/30 transition-all">
                      <div className="text-5xl mb-6">⚖️</div>
                      <h3 className="font-black text-xl mb-3 text-gray-900">Dual Expertise</h3>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">Our lawyers are exceptionally skilled in both German BGB and Indian Succession Act, providing a unified legal strategy.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 hover:bg-[#fffdf5] border-2 border-transparent hover:border-[#D2A02A]/30 transition-all">
                      <div className="text-5xl mb-6">🏛️</div>
                      <h3 className="font-black text-xl mb-3 text-gray-900">Desk Coordination</h3>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">We handle the coordination with local Sub-Registrars in India while you stay in Germany. No travel required for will registration.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 hover:bg-[#fffdf5] border-2 border-transparent hover:border-[#D2A02A]/30 transition-all">
                      <div className="text-5xl mb-6">🛡️</div>
                      <h3 className="font-black text-xl mb-3 text-gray-900">Full Protection</h3>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">Our NRI cell focuses on preventing hostile property takeovers through bulletproof global drafting.</p>
                    </div>
                  </div>
                </section>

                {/* 14. FAQs */}
                <section id="faqs" className="scroll-mt-32 pt-10">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-10 border-b-2 border-[#D2A02A]/20 pb-4">
                     Frequently Asked Questions <span className="text-[#D2A02A] text-sm">(SUCCESSION DESK)</span>
                  </h2>
                  <div className="space-y-8">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 pb-8 last:border-0 hover:bg-gray-50/50 p-4 transition-all rounded-xl">
                        <h3 className="text-lg md:text-xl font-black text-gray-900 mb-4 flex items-start leading-tight">
                          <span className="text-[#D2A02A] mr-4 text-2xl font-serif">Q.</span>
                          {faq.question}
                        </h3>
                        <div className="text-gray-700 leading-[1.8] pl-10 text-sm md:text-base font-medium">
                          {faq.answer}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Local Jurisdictions Grid */}
                <section id="jurisdictions" className="scroll-mt-32 pt-10 border-t border-gray-100">
                  <h2 className="text-2xl md:text-4xl font-black text-gray-800 mb-6 uppercase tracking-tight">
                    German Jurisdictions <span className="text-[#D2A02A]">We Serve</span>
                  </h2>
                  <p className="text-gray-600 mb-10 text-sm md:text-lg leading-relaxed max-w-4xl">
                    Our cross-border legal architects provide comprehensive will drafting and estate planning services across all 16 federal states of Germany, ensuring your global legacy is secured under both German BGB and Indian Succession laws.
                  </p>
                  
                  <div className="space-y-12">
                    {[
                      {
                        country: "Germany",
                        flag: "🇩🇪",
                        states: ["Baden-Württemberg", "Bavaria", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hesse", "Lower Saxony", "Mecklenburg-Vorpommern", "North Rhine-Westphalia", "Rhineland-Palatinate", "Saarland", "Saxony", "Saxony-Anhalt", "Schleswig-Holstein", "Thuringia"]
                      }
                    ].map((item, idx) => (
                      <div key={idx} className="group">
                        <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-3">
                          <span className="text-2xl">{item.flag}</span>
                          Federal States (Bundesländer)
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                          {item.states.map((state, sIdx) => (
                            <div 
                              key={sIdx} 
                              className="bg-gray-50 border border-gray-100 p-3 rounded-xl text-xs md:text-sm font-bold text-gray-700 hover:border-[#D2A02A]/30 hover:bg-white hover:shadow-md transition-all cursor-default"
                            >
                              {state}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-[2rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-20 bg-[#D2A02A]/10 rounded-full blur-3xl opacity-20"></div>
                  <div className="relative z-10">
                    <h2 className="text-2xl md:text-6xl font-black mb-6 md:mb-8 leading-tight tracking-tighter">Your Legacy is Global.<br /><span className="text-[#D2A02A]">Your Protection Should Be Too.</span></h2>
                    <p className="text-sm md:text-2xl opacity-90 mb-10 md:mb-16 max-w-4xl mx-auto leading-relaxed font-light">
                      Don't leave your hard-earned Indian wealth to the mercy of complex international laws. Secure your family's future across Germany and India with a professionally architected estate plan today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                      <Link href="/contact" className="w-full sm:w-auto">
                        <button className="w-full bg-[#D2A02A] hover:bg-[#b88a22] text-white font-black py-4 px-10 md:py-6 md:px-16 rounded-full transition-all transform hover:scale-105 shadow-[0_20px_50px_rgba(210,160,42,0.3)] text-base md:text-2xl">
                          Start Your Professional Drafting
                        </button>
                      </Link>
                      <a href="tel:+918700343611" className="w-full sm:w-auto">
                        <button className="w-full bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/5 text-white font-black py-4 px-10 md:py-6 md:px-16 rounded-full transition-all text-sm md:text-2xl">
                          Call Expert: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-8 md:mt-12 text-xs md:text-lg opacity-60 font-medium">
                      Confidential Consultation • EU & India Compliance • Specialized NRI Attorneys
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 group transition-all hover:border-[#D2A02A]/30">
                  <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tighter leading-tight italic">Need Urgent<br />Expert Help?</h3>
                  <p className="text-gray-500 mb-8 text-sm leading-relaxed font-medium">
                    Speak directly with our senior cross-border succession desk for immediate clarity on your global assets.
                  </p>
                  <a href="tel:+918700343611" className="block w-full bg-[#D2A02A] text-white text-center py-4 rounded-2xl font-black hover:bg-[#b88a22] transition-colors mb-4 shadow-[0_10px_20px_rgba(210,160,42,0.2)]">
                    Call +91-8700343611
                  </a>
                  <Link href="/contact" className="block w-full border-2 border-[#D2A02A] text-[#D2A02A] text-center py-4 rounded-2xl font-black hover:bg-[#D2A02A] hover:text-white transition-all">
                    Request Strategy Call
                  </Link>
                </div>

                {/* Related Pages */}
                <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100">
                  <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-[#D2A02A] rounded-full"></span>
                    Quick Links
                  </h3>
                  <ul className="space-y-4">
                    {['Will Drafting for NRI', 'Drafting of Will Guide', 'Simple Will Format', 'Will Drafting India Content', 'Legal Help for Indians in USA'].map((service, idx) => (
                      <li key={idx} className="group border-b border-gray-50 pb-2 last:border-0 hover:translate-x-1 transition-transform">
                        <Link href={['/will-drafting-for-nri', '/drafting-of-will', '/simple-will-format-download-free-legal-document-sample', '/legal-services-in-gurgaon', '/will-drafting-for-indians-living-in-usa'][idx]} className="text-gray-800 hover:text-[#D2A02A] text-sm font-bold transition-colors">
                          {service} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* App Download Card */}
                <div className="bg-gray-900 p-8 rounded-[2rem] shadow-2xl border border-gray-800 text-white relative overflow-hidden group">
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#D2A02A] rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                  <h4 className="font-black mb-3 text-lg leading-tight tracking-widest text-[#D2A02A]">AMA CONNECT</h4>
                  <p className="text-[10px] text-gray-400 mb-8 font-black uppercase tracking-widest opacity-80">The Global NRI Legal Hub</p>
                  <p className="text-xs text-blue-50/70 mb-8 font-medium leading-relaxed">Coordinate your Indian succession matters legally from your smartphone in Germany. Track status in real-time.</p>
                  <div className="space-y-4">
                    <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="block transform hover:scale-105 transition-transform">
                      <Image src="/newAssets/appstore.svg" alt="Google Play" width={140} height={40} className="w-full h-auto opacity-90 hover:opacity-100" />
                    </Link>
                    <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="block transform hover:scale-105 transition-transform">
                      <Image src="/newAssets/playstore.svg" alt="App Store" width={140} height={40} className="w-full h-auto opacity-90 hover:opacity-100" />
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

import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Is a Canadian will sufficient for my properties in India?",
    answer: "While a Canadian will can technically cover assets worldwide, it is highly impractical for India. Indian authorities, banks, and land registries typically require a local probate or a Letter of Administration from an Indian court. A jurisdiction-specific Indian will, ideally registered with the local Sub-Registrar, ensures a much faster and less expensive transfer of assets to your heirs."
  },
  {
    question: "What is the importance of separate wills for Canada and India?",
    answer: "Separate wills allow for parallel administration of your estate. Your Canadian executor can handle your house and accounts in Toronto or Vancouver while your Indian executor manages your ancestral property or bank accounts in Delhi or Mumbai. This prevents the legal standstill that occurs when courts in one country have to wait for courts in another to validate the same document."
  },
  {
    question: "Do daughters have equal rights in Indian ancestral property for NRIs?",
    answer: "Yes, following the 2005 amendment to the Hindu Succession Act, daughters have equal coparcenary rights in ancestral property by birth. This applies whether the daughter is a resident of India or an NRI in Canada. Recent Supreme Court rulings have confirmed that these rights are retroactive, ensuring that daughters inherit from their parents on the same footing as sons."
  },
  {
    question: "What happens if I sign my Indian will in Canada?",
    answer: "If you sign your Indian will in Canada, it must be witnessed by two adults who are not beneficiaries. To ensure its acceptance in Indian courts, it is strongly recommended to have the will notarized and apostilled, or attested by the Indian Consulate. This provides the document with 'prima facie' authenticity in the eyes of Indian authorities."
  },
  {
    question: "What are the tax implications in Canada for inheriting Indian property?",
    answer: "Canada does not have a direct inheritance tax, but it has 'deemed disposition' rules. When you inherit, your cost basis is established. If you later sell the Indian property, you must pay capital gains tax in Canada on any appreciation. Additionally, if the cost of your Indian assets exceeds 100,000 CAD, you must report them annually on Form T1135 to avoid heavy CRA penalties."
  },
  {
    question: "Can an NRI maintain NRE and NRO accounts after becoming a Canadian citizen?",
    answer: "Yes, NRIs and OCIs can maintain NRE (Non-Resident External) and NRO (Non-Resident Ordinary) accounts. NRE accounts are ideal for repatriable funds, while NRO accounts handle income earned in India like rent or dividends. Succession to these accounts is much easier if a nomination is recorded and a specific Indian will is in place."
  },
  {
    question: "What is the 'revocation trap' in cross-border will drafting?",
    answer: "Most boilerplate wills include a clause that revokes all prior wills. If you sign a Canadian will with this clause, it could unintentionally cancel your existing Indian will. Expert cross-border drafting ensures that each will is limited to its specific jurisdiction (e.g., 'this will applies only to my assets situated in India'), protecting your global legacy."
  },
  {
    question: "How do I manage digital assets like crypto or social media in my will?",
    answer: "Digital assets require specific clauses in your will that authorize your executor to access your private keys, social media profiles, and email accounts. For cross-border residents, this is complex as platform terms of service vary. We recommend creating a digital inventory that complements your legal will to ensure your digital footprint is managed according to your wishes."
  },
  {
    question: "Is remote witnessing of wills valid in India?",
    answer: "Unlike Ontario, which legalized remote witnessing during the pandemic, Indian law still generally requires the physical presence of the testator and witnesses. Section 63 of the Indian Succession Act 1925 is strict about this. For an Indian will to be fully secure, physical signing with witnesses present is the safest legal route."
  },
  {
    question: "What is the role of an executor in an NRI will?",
    answer: "The executor is the person responsible for carrying out the terms of your will. For an Indian will, it is often better to appoint a resident of India or a professional firm because they need to deal with local courts, municipal offices, and banks. An executor in Canada might find it impossible to navigate the ground-level bureaucracy of the Indian legal system."
  },
  {
    question: "Can I mention ancestral property in my will?",
    answer: "Under Hindu law, your right to will away ancestral property is limited to your specific share in the coparcenary. You cannot will away the entire property if other coparceners have a claim. It is vital to distinguish between self-acquired property (which you can will entirely) and ancestral property (where only your portion can be willed)."
  },
  {
    question: "What if I die without a will (intestate) in Canada?",
    answer: "If you die intestate, your Canadian assets are distributed according to provincial laws (e.g., the first portion goes to the spouse in Ontario). However, your Indian assets will follow Indian succession laws. This split can lead to significant disputes among family members and may result in a distribution you never intended."
  },
  {
    question: "Do I need probate for bank accounts in India?",
    answer: "If you have a clear nomination on your Indian bank accounts, the nominee can usually claim the funds without probate. However, for large sums or when there is a dispute among heirs, banks often demand a probate or a succession certificate. A will makes the process of obtaining these documents significantly easier."
  },
  {
    question: "How often should I update my cross-border will?",
    answer: "You should review your will every 3 to 5 years, or whenever a major life event occurs, such as marriage, divorce, the birth of a child, or the acquisition of a new property. Changes in tax laws in either Canada or India can also necessitate an update to ensure your estate remains tax efficient."
  },
  {
    question: "How does AMA Legal Solutions coordinate with Canadian lawyers?",
    answer: "We offer a collaborative approach where we work alongside your Canadian estate lawyers. We provide the specific legal wording for your Indian assets and ensure that the 'jurisdiction clauses' in both wills are perfectly aligned. This unified strategy ensures that your global estate is a cohesive, legally sound structure."
  }
];

// Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.amalegalsolutions.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Will Drafting for Indians in Canada", "item": "https://www.amalegalsolutions.com/will-drafting-for-indians-living-in-canada" }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Will Drafting for Indians Living in Canada: The Ultimate Cross-Border Guide",
  "description": "Comprehensive guide on estate planning for NRIs and OCIs in Canada. Learn about separate wills, Indian succession laws, Canadian tax implications, and how to protect your cross-border assets.",
  "image": "https://www.amalegalsolutions.com/services/will-banner.jpg",
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
  "name": "Will Drafting for Indians in Canada",
  "image": "https://www.amalegalsolutions.com/services/will-banner.jpg",
  "description": "Expert legal assistance for Indians in Canada to draft wills for Indian assets.",
  "brand": { "@type": "Brand", "name": "AMA Legal Solutions" },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1250"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Sandeep Gill" },
      "reviewBody": "Excellent service. My family in Brampton and I were worried about our Punjab properties. AMA handled everything perfectly and registered our will remotely."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Meera Iyer" },
      "reviewBody": "Highly professional. They helped me navigate the complex Hindu Succession Act for my Mumbai flat while I was in Toronto. The team is very knowledgeable."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Rajiv Khanna" },
      "reviewBody": "The best legal firm for NRIs. Their understanding of both Canadian and Indian laws is unmatched. They saved us from a potential revocation trap."
    }
  ]
};

export const metadata = {
  title: "Will Drafting for Indians Living in Canada | #1 NRI Estate Lawyers",
  description: "Secure your global legacy with expert will drafting for Indians in Canada. Navigate cross-border laws, avoid Indian probate delays, and manage Canadian tax compliance. Legal and safe.",
  keywords: [
    "will drafting for indians in canada",
    "nri will for indian assets",
    "estate planning for indians in canada",
    "canadian will for indian property",
    "succession laws for nris",
    "indian will registration for nri",
    "probate process in india for nris"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/will-drafting-for-indians-living-in-canada',
  },
};

export default function WillDraftingCanadaPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "dual-legal-realities", title: "Dual Legal Realities" },
    { id: "why-separate-wills", title: "Why Separate Wills?" },
    { id: "canadian-provincial-laws", title: "Provincial Laws" },
    { id: "indian-succession", title: "Indian Succession" },
    { id: "revocation-trap", title: "The Revocation Trap" },
    { id: "tax-compliance", title: "Tax & Compliance" },
    { id: "digital-assets", title: "Digital Assets" },
    { id: "witnessing", title: "Witnessing Rules" },
    { id: "probate", title: "The Probate Process" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Will Drafting for Indians in Canada", href: "/will-drafting-for-indians-living-in-canada" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section - STRICTLY LIKE LOAN SETTLEMENT */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ background: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10 uppercase tracking-tight">
               Will Drafting for <span className="text-[#D2A02A]">Indians Living in Canada</span>
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Expert legal architecture for NRIs and OCIs to secure properties, ancestral wealth, and bank accounts in India while living across Canada. Secure your cross-border legacy legally and ethically.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get a Free Technical Consultation
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Mobile App Store Links - STRICTLY LIKE LOAN SETTLEMENT */}
          <div className="lg:hidden flex flex-col gap-3 mb-6 mt-2">
            <p className="text-sm font-semibold mb-2" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Protect Your Future From Your Phone</p>
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
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Evolving Landscape of NRI Estate Planning in Canada</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    In the grand tapestry of the Indian diaspora, the community in Canada holds a place of profound significance. From the tech hubs of Toronto and Waterloo to the majestic landscapes of British Columbia, Indians have built successful lives, acquired significant wealth, and established deep roots. However, a significant portion of their identity, family history, and financial future often remains anchored in the Indian subcontinent. This dual existence creates a unique opportunity for wealth creation but also introduces a cavernous gap in legal protections: the absence of a cohesive cross-border estate plan.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    When an NRI or OCI acquires property, opens bank accounts, or invests in the Canadian market, they are governed by provincial laws centered on administrative efficiency. Simultaneously, ancestral lands in Punjab, family businesses in Gujarat, or luxury apartments in Gurgaon are governed by an intricate web of Indian statutes, religious personal laws, and decades-old precedents. The mismatch often leads to "Estate Paralysis": a scenario where heirs cannot legally access or manage assets due to conflicting jurisdictional requirements.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    The importance of <strong>will drafting for Indians living in Canada</strong> has never been more critical. We are currently witnessing a massive generational shift in wealth. NRIs of the first generation are looking to pass their legacies to children who may have never lived in India. Without a professionally drafted, jurisdiction-specific will, these legacies are at high risk of becoming entangled in the notorious Indian legal system, where civil cases can span decades and consume family savings in legal fees and administrative red tape.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    At AMA Legal Solutions, we don't just draft documents: we build legal bridges that ensure your final wishes are respected, your family is protected from harassment, and your wealth is transitioned with the dignity it deserves. Dealing with cross-border succession requires more than just a lawyer; it requires an architect of global legacy who understands the ground realities of both Mississauga and Mumbai, ensuring absolute clarity for your heirs across two continents.
                  </p>
                </section>

                {/* 2. Dual Legal Realities */}
                <section id="dual-legal-realities" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Navigating Dual Legal Realities: One Life, Two Systems</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <p className="text-sm md:text-lg text-blue-900 italic">
                      "Legal success across borders is not about having one document for everything; it is about having the right document for every jurisdiction where those assets sit physically."
                    </p>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    To draft an effective will while living in Canada, one must first recognize that they are operating under two sovereign jurisdictions that do not always harmonize. Canada is a federal state where succession law falls under the exclusive authority of the provinces. Whether you are in Mississauga, Calgary, or Surrey, the rules governing your Canadian assets are codified in provincial statutes like Ontario's Succession Law Reform Act (SLRA) or British Columbia's Wills, Estates and Succession Act (WESA).
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    India presents a mosaic of legal frameworks. For Hindus, Buddhists, Jains, and Sikhs, the framework is the Hindu Succession Act (HSA). For Muslims, the Shariat Act and uncodified personal laws apply. For Christians and those married under the Special Marriage Act, the Indian Succession Act 1925 holds sway. Furthermore, property in India often involves unique concepts like "Joint Family Property" and "Coparcenary Rights," where your cousins or siblings might have a legal interest in a property you consider entirely yours.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    This "Dual Reality" is where most DIY or standard legal plans fail. A Canadian lawyer may not be aware of the 2005 amendment to the Hindu Succession Act that gives daughters equal rights in ancestral property. They may not know that in India, a will signed before two witnesses who are also beneficiaries is void regarding those beneficiaries. They may not understand the requirement of mutation (changing names in govt records), which often requires a specific type of registered document to be accepted without a long probate process.
                  </p>
                </section>

                {/* 3. Why Separate Wills */}
                <section id="why-separate-wills" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Case for Separate Jurisdictional Wills: A Strategy</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-8 text-gray-700 font-medium">
                    Relying on a single "worldwide will" is often the most expensive and time-consuming mistake an NRI can make. Here is why the "Separate Wills Strategy" is the preferred approach for high-net-worth individuals and families alike:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3">Parallel Administration</h3>
                      <p className="text-gray-700 text-xs md:text-base">
                        Your Canadian executor can handle assets in Toronto while your Indian executor manages properties in Delhi simultaneously, cutting wait times from years down to just a few months.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3">Minimizing Probate Fees</h3>
                      <p className="text-gray-700 text-xs md:text-base">
                        By carving out Indian assets, you avoid paying Canadian probate taxes (like Ontario's Estate Administration Tax) on assets that aren't even situated in Canada, saving thousands in unnecessary duties.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3">Terminology Precision</h3>
                      <p className="text-gray-700 text-xs md:text-base">
                        Indian Sub-Registrars expect specific terms like 'Immovable Property', 'Coparcenary', and 'Mutation'. Using these terms accurately prevents administrative rejections in Indian registries.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3">Registration & Sanctity</h3>
                      <p className="text-gray-700 text-xs md:text-base">
                        An Indian will can be registered locally, providing it with high legal sanctity and making it significantly harder to challenge in an Indian court compared to a foreign document.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 4. Provincial Laws */}
                <section id="canadian-provincial-laws" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 font-sans">Understanding Canadian Provincial Estate Nuances</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    For Indians living in Canada, the first step is understanding the specific rules of their home province. While all common law provinces share similarities, the differences can impact your plan's efficacy.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-4 text-left border-b border-gray-200 text-[#D2A02A] w-1/2 font-black uppercase text-xs tracking-widest">Ontario (SLRA)</th>
                          <th className="p-4 text-left border-b border-gray-200 text-[#D2A02A] w-1/2 font-black uppercase text-xs tracking-widest">British Columbia (WESA)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 align-top">
                            <ul className="list-disc pl-4 space-y-3 text-gray-700 text-sm md:text-base">
                              <li><strong>Strict Compliance:</strong> Formalities must be precisely followed; even small errors can invalidate the will.</li>
                              <li><strong>Remote Witnessing:</strong> Permanent video link signing allowed since 2021 (with at least one lawyer/paralegal).</li>
                              <li><strong>Marriage Impact:</strong> Marriage no longer revokes a will automatically in Ontario, a major recent legal shift.</li>
                            </ul>
                          </td>
                          <td className="p-4 align-top bg-gray-50">
                            <ul className="list-disc pl-4 space-y-3 text-gray-700 text-sm md:text-base">
                              <li><strong>Curative Provisions:</strong> BC courts can validate documents that show clear final intent, even with formal flaws.</li>
                              <li><strong>Will Variation:</strong> Children have significant legal standing to challenge wills they deem unfair.</li>
                              <li><strong>Simplified Probate:</strong> Faster routes for smaller estate values compared to Ontario.</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed mt-8 text-gray-700 italic border-l-4 border-gray-200 pl-6">
                    Note for Quebec Residents: Quebec operates under a Civil Law system where 'Notarial Wills' are often the preferred route to avoid the probate process entirely, though they require strict adherence to the Civil Code of Quebec.
                  </p>
                </section>

                {/* 5. Indian Succession Deep Dive */}
                <section id="indian-succession" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Indian Succession Laws: A Deep Dive for the Diaspora</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    The <strong>Hindu Succession Act of 1956</strong> and its subsequent amendments are the most relevant for the majority of the diaspora. The 2005 Amendment was a landmark, giving daughters equal coparcenary rights in ancestral property by birth.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-gray-900 text-lg mb-2 underline decoration-[#D2A02A] decoration-2">Self-Acquired Property</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Assets you bought with your own earnings. You have absolute freedom to bequeath these to anyone, including non-family members or charities, without restriction.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-gray-900 text-lg mb-2 underline decoration-[#D2A02A] decoration-2">Ancestral Property</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Wealth inherited through four generations of male lineage. You only have authority over your specific share of the total family coparcenary, not the whole property.</p>
                    </div>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    For Muslim clients in Canada, distribution follows fixed Quranic shares defined by Shariat. Typically, you can only will away up to one-third of your estate to non-heirs; any attempt to bypass these shares for the remaining two-thirds can be challenged unless all legal heirs provide unanimous consent after your passing.
                  </p>
                </section>

                {/* 6. Revocation Trap */}
                <section id="revocation-trap" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Dangerous Revocation Trap in Dual Wills</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Most standard Canadian will templates include a boilerplate opening clause: "I hereby revoke all former wills and testamentary dispositions previously made by me." This clause is a silent killer for your Indian estate planning.
                  </p>
                  <div className="bg-red-50 p-6 md:p-10 rounded-2xl border border-red-100 my-6">
                      <h4 className="font-bold text-red-900 text-xl mb-4">Silent Invalidation Warning:</h4>
                      <p className="text-red-800 text-sm md:text-lg leading-relaxed mb-4">
                        If you sign a Canadian will with this clause, you have legally revoked your Indian will. When you pass away, your Indian heirs will find themselves with an invalid document, forcing the Indian estate into 'Intestacy'-a status that invites disputes and takes years to resolve in Indian civil courts.
                      </p>
                      <p className="text-red-900 font-bold text-sm md:text-base">
                        Our Solution: We use specific 'Situate Clauses' ensuring each will clearly identifies its territorial jurisdiction and does NOT revoke the will existing for the other country.
                      </p>
                  </div>
                </section>

                {/* 7. Tax Compliance */}
                <section id="tax-compliance" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Taxation and CRA Compliance for Indo-Canadians</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    While India abolished inheritance tax in 1985, the Canadian tax system handles the death of a citizen quite differently. As a Canadian tax resident, you are taxed on your worldwide income and assets.
                  </p>
                  <div className="overflow-x-auto mb-8">
                    <table className="w-full text-sm text-left text-gray-500 border border-gray-200 rounded-lg">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 font-black">
                        <tr>
                          <th scope="col" className="px-6 py-4">Reporting Mandate</th>
                          <th scope="col" className="px-6 py-4 bg-red-50 text-red-900 italic">Penalty Risk</th>
                          <th scope="col" className="px-6 py-4">Compliance Guide</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-black text-gray-900">Form T1135</td>
                          <td className="px-6 py-4 bg-red-50 text-red-900 font-bold">$2,500/year max</td>
                          <td className="px-6 py-4">Required if foreign assets (cost base) exceed $100,000 CAD at any time.</td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-black text-gray-900">Deemed Disposition</td>
                          <td className="px-6 py-4 bg-red-50 text-red-900 font-bold">Capital Gains Tax</td>
                          <td className="px-6 py-4">Fair Market Value tax triggered at the moment of death for all worldwide assets.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Your estate plan must account for these disclosures to ensure your heirs aren't hit with massive retroactive tax bills or CRA investigations into unreported foreign income generated by Indian properties or bank interests. Proper valuation in India at the time of inheritance is a non-negotiable step for long-term protection.
                  </p>
                </section>

                {/* 8. Digital Assets */}
                <section id="digital-assets" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Digital Assets: The New Frontier of NRI Legacies</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Wealth today isn't just in physical land. It's in crypto wallets, social media accounts, and online portfolios. Your will must include a "Digital Fiduciary" clause to allow your executor to legally interact with platforms like Google, Facebook, and Coinbase.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 list-none p-0">
                     <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 flex items-center gap-4 transition-all hover:bg-white hover:shadow-md">
                         <span className="text-2xl">💰</span>
                         <div>
                            <h4 className="font-bold text-sm md:text-base">Crypto & Wallets</h4>
                            <p className="text-xs text-gray-500">Authorization for private keys and exchange account management.</p>
                         </div>
                     </div>
                     <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 flex items-center gap-4 transition-all hover:bg-white hover:shadow-md">
                         <span className="text-2xl">📸</span>
                         <div>
                            <h4 className="font-bold text-sm md:text-base">Cloud Data</h4>
                            <p className="text-xs text-gray-500">Access to sentimental photos, videos, and private cloud documents.</p>
                         </div>
                     </div>
                     <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 flex items-center gap-4 transition-all hover:bg-white hover:shadow-md">
                         <span className="text-2xl">📈</span>
                         <div>
                            <h4 className="font-bold text-sm md:text-base">Trading Portals</h4>
                            <p className="text-xs text-gray-500">Legal standing to close or transfer Indian Demat and Zerodha accounts.</p>
                         </div>
                     </div>
                     <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 flex items-center gap-4 transition-all hover:bg-white hover:shadow-md">
                         <span className="text-2xl">💬</span>
                         <div>
                            <h4 className="font-bold text-sm md:text-base">Social Media</h4>
                            <p className="text-xs text-gray-500">Memorialization or deletion instructions for global digital footprints.</p>
                         </div>
                     </div>
                  </div>
                </section>

                {/* 9. Witnessing Rules */}
                <section id="witnessing" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Witnessing and Authentication for Global Enforceability</h2>
                   <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    A will is only as good as its execution. For an Indian will signed in Canada, the formalities must be impeccable to avoid rejection in an Indian High Court probate proceeding.
                  </p>
                   <div className="bg-gray-900 p-8 md:p-12 rounded-[2rem] text-white">
                        <h4 className="text-[#D2A02A] font-black text-xl md:text-2xl mb-6 uppercase tracking-wider">The Triple Lock Security</h4>
                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <span className="bg-[#D2A02A] text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-black flex-shrink-0">1</span>
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed"><strong>Physical Signing:</strong> You must sign in the presence of two witnesses who see each other sign. India does not yet fully recognize 'solely' virtual signings for wills.</p>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span className="bg-[#D2A02A] text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-black flex-shrink-0">2</span>
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed"><strong>Apostille:</strong> Your document notarized in Canada must be apostilled by Global Affairs Canada to be legally 'readable' by Indian authorities.</p>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span className="bg-[#D2A02A] text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-black flex-shrink-0">3</span>
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed"><strong>Consular Attestation:</strong> While not always mandatory, having the Indian Consulate in Toronto or Vancouver attest the will provides 'prima facie' validity.</p>
                            </div>
                        </div>
                   </div>
                </section>

                {/* 10. Probate */}
                <section id="probate" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Probate Journey: A Two-Track Parallel Path</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-8 text-gray-700 italic border-b border-gray-100 pb-4">
                    Probate is the official court confirmation of your will's validity. Relying on one country's probate for another is a strategic failure.
                  </p>
                  <div className="space-y-10">
                    <div className="group flex flex-col md:flex-row gap-6 items-start bg-gray-50 p-8 rounded-2xl transition-all hover:bg-white hover:shadow-xl">
                      <div className="flex-shrink-0 w-16 h-16 bg-gray-900 text-[#D2A02A] rounded-2xl flex items-center justify-center text-3xl font-black">🇨🇦</div>
                      <div>
                        <h3 className="text-xl font-black text-gray-900 mb-2">Probate in Canada</h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">The 'Certificate of Appointment of Estate Trustee' is obtained from the provincial court. This is necessary to unlock RRSPs, TFSAs, Canadian bank accounts, and real estate in cities like Brampton or Surrey.</p>
                      </div>
                    </div>
                    <div className="group flex flex-col md:flex-row gap-6 items-start bg-gray-50 p-8 rounded-2xl transition-all hover:bg-white hover:shadow-xl">
                      <div className="flex-shrink-0 w-16 h-16 bg-gray-900 text-[#D2A02A] rounded-2xl flex items-center justify-center text-3xl font-black">🇮🇳</div>
                      <div>
                        <h3 className="text-xl font-black text-gray-900 mb-2">Probate in India</h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">Mandatory in presidency towns like Mumbai, Kolkata, or Chennai. For other areas, it's practically required to ensure smooth mutation of property records and to satisfy bank legal departments without delays.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 11. Why Choose us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 uppercase tracking-tight">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-8 text-gray-700 font-medium">
                    In a market flooded with generic templates, AMA Legal Solutions stands apart as a specialized NRI powerhouse. Here is why the diaspora trusts our architects:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-8 rounded-2xl bg-gray-50 hover:bg-[#fffdf5] border-2 border-transparent hover:border-[#D2A02A]/30 transition-all">
                      <div className="text-5xl mb-6">⚖️</div>
                      <h3 className="font-black text-xl mb-3 text-gray-900">Dual Expertise</h3>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">Our lawyers are qualified in India and deeply understand Canadian provincial estate regulations, bridging the legal gap perfectly.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 hover:bg-[#fffdf5] border-2 border-transparent hover:border-[#D2A02A]/30 transition-all">
                      <div className="text-5xl mb-6">🏛️</div>
                      <h3 className="font-black text-xl mb-3 text-gray-900">Desk Coordination</h3>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">We handle the coordination with local Sub-Registrars in India while you stay at home in Canada-no travel to India required for will registration.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 hover:bg-[#fffdf5] border-2 border-transparent hover:border-[#D2A02A]/30 transition-all">
                      <div className="text-5xl mb-6">🛡️</div>
                      <h3 className="font-black text-xl mb-3 text-gray-900">Full Protection</h3>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">Our dedicated NRI cell is focused on preventing hostile property takeovers and succession disputes through bulletproof drafting.</p>
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
                        "I was struggling to manage my ancestral property in Ludhiana from Brampton. AMA Legal Solutions drafted a bulletproof Indian will and handled the registration without me having to travel. Their remote coordination is flawless."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Sandeep Gill</p>
                          <p className="text-sm text-gray-500">Business Owner, Brampton</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Expert guidance on the 'Revocation Trap'. My Canadian lawyer had no idea about it, but the AMA team ensured my Indian and Canadian wills work in harmony. Highly recommended for all OCIs in Toronto."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">M</div>
                        <div>
                          <p className="font-bold text-gray-900">Meera Iyer</p>
                          <p className="text-sm text-gray-500">Software Engineer, Toronto</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32 pt-10">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-10 border-b-2 border-[#D2A02A]/20 pb-4">
                     Frequently Asked Questions <span className="text-[#D2A02A] text-sm">(NRI SUCCESSION DESK)</span>
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
                    Canadian Jurisdictions <span className="text-[#D2A02A]">We Serve</span>
                  </h2>
                  <p className="text-gray-600 mb-10 text-sm md:text-lg leading-relaxed max-w-4xl">
                    Our cross-border legal architects provide comprehensive will drafting and estate planning services across all provinces and territories in Canada, deep-diving into the specific succession laws of each jurisdiction from Ontario to British Columbia.
                  </p>
                  
                  <div className="space-y-12">
                    {[
                      {
                        country: "Canada",
                        flag: "🇨🇦",
                        states: ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Northwest Territories", "Nunavut", "Yukon"]
                      }
                    ].map((item, idx) => (
                      <div key={idx} className="group">
                        <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-3">
                          <span className="text-2xl">{item.flag}</span>
                          Provinces & Territories
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

                {/* Final CTA - STRICTLY LIKE LOAN SETTLEMENT */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-[2rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-20 bg-[#D2A02A]/10 rounded-full blur-3xl opacity-20"></div>
                  <div className="relative z-10">
                    <h2 className="text-2xl md:text-6xl font-black mb-6 md:mb-8 leading-tight tracking-tighter">Your Legacy Spans Continents.<br /><span className="text-[#D2A02A]">Your Will Should Too.</span></h2>
                    <p className="text-sm md:text-2xl opacity-90 mb-10 md:mb-16 max-w-4xl mx-auto leading-relaxed font-light">
                      Don't leave your hard-earned Indian wealth to the mercy of complex succession laws. Secure your family's future across Canada and India with a professionally architected estate plan today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                      <Link href="/contact" className="w-full sm:w-auto">
                        <button className="w-full bg-[#D2A02A] hover:bg-[#b88a22] text-white font-black py-4 px-10 md:py-6 md:px-16 rounded-full transition-all transform hover:scale-105 shadow-[0_20px_50px_rgba(210,160,42,0.3)] text-base md:text-2xl">
                          Start Legal Drafting Now
                        </button>
                      </Link>
                      <a href="tel:+918700343611" className="w-full sm:w-auto">
                        <button className="w-full bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/5 text-white font-black py-4 px-10 md:py-6 md:px-16 rounded-full transition-all text-sm md:text-2xl">
                          Call Expert: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-8 md:mt-12 text-xs md:text-lg opacity-60 font-medium">
                      Confidential Consultation • Global Compliance • Expert Attorneys
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar - STRICTLY LIKE LOAN SETTLEMENT */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 group transition-all hover:border-[#D2A02A]/30">
                  <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tighter leading-tight italic">Need Urgent<br />Expert Help?</h3>
                  <p className="text-gray-500 mb-8 text-sm leading-relaxed font-medium">
                    Speak directly with our senior cross-border succession desk for immediate clarity on your Indian assets.
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
                    Resource Links
                  </h3>
                  <ul className="space-y-4">
                    {['Will Drafting for NRI', 'Drafting of Will Guide', 'Simple Will Format', 'Real Estate Legal Help', 'Civil Litigation Services'].map((service, idx) => (
                      <li key={idx} className="group border-b border-gray-50 pb-2 last:border-0 hover:translate-x-1 transition-transform">
                        <Link href={['/will-drafting-for-nri', '/drafting-of-will', '/simple-will-format-download-free-legal-document-sample', '/services/real-estate', '/services/civil'][idx]} className="text-gray-800 hover:text-[#D2A02A] text-sm font-bold transition-colors">
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
                  <p className="text-[10px] text-gray-400 mb-8 font-black uppercase tracking-widest opacity-80">The NRI Legal Hub</p>
                  <p className="text-xs text-blue-50/70 mb-8 font-medium leading-relaxed">Coordinate your Indian succession matters legally from your smartphone in Canada. Track status in real-time.</p>
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

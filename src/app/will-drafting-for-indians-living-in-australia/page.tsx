import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Is an Australian will sufficient for my properties in India?",
    answer: "While an Australian will can technically cover assets worldwide, it is highly impractical for Indian assets. Indian authorities, banks, and land registries typically require a local probate or a Letter of Administration from an Indian court. A jurisdiction-specific Indian will, ideally registered with the local Sub-Registrar, ensures a much faster and less expensive transfer of assets to your heirs without the need to domesticate a foreign document."
  },
  {
    question: "Why should I have separate wills for Australia and India?",
    answer: "Separate wills allow for parallel administration of your estate. Your Australian executor can handle your house in Sydney or Melbourne while your Indian executor manages your ancestral land or bank accounts in Punjab or Delhi. This prevents a legal logjam where courts in one country must wait for courts in another to validate the same document, often taking years and incurring massive legal costs."
  },
  {
    question: "How does Australian Capital Gains Tax (CGT) affect my Indian inheritance?",
    answer: "Australia does not have a direct inheritance tax, but as an Australian tax resident, you are taxed on your worldwide income. When you inherit an Indian property, its market value at the time of the deceased's death becomes your cost base. If you later sell the property, you will be liable for CGT in Australia on any appreciation, though you may claim a Foreign Income Tax Offset (FITO) for taxes paid in India under the DTAA."
  },
  {
    question: "Can an OCI or NRI inherit agricultural land in India?",
    answer: "Yes, NRIs and OCIs can inherit agricultural land, plantation property, or farmhouses from an Indian resident. However, they cannot purchase such properties. Selling inherited agricultural land also requires compliance with FEMA regulations, and the proceeds can typically be repatriated up to USD 1 million per financial year from an NRO account."
  },
  {
    question: "What is the 'revocation trap' for Indians in Australia?",
    answer: "Most Australian will templates include a standard clause that revokes all previous wills. If you sign such a will in Australia, it may unintentionally cancel your existing Indian will. Expert drafting ensures that your Australian will includes a 'situate clause' that limits its scope to Australian assets, keeping your Indian succession plan intact."
  },
  {
    question: "Do daughters have equal rights in Indian ancestral property for Australia-based NRIs?",
    answer: "Absolutely. Under the 2005 amendment to the Hindu Succession Act, daughters have equal coparcenary rights in ancestral property by birth. This applies regardless of whether the daughter is a resident of India or an OCI in Australia. Recent rulings have confirmed these rights are retroactive, ensuring daughters inherit on the same footing as sons."
  },
  {
    question: "How do I ensure my Indian will is valid if signed in Australia?",
    answer: "An Indian will signed in Australia must be witnessed by two adults who are not beneficiaries. To be accepted by Indian courts or registries, it should be notarized and then apostilled by the Department of Foreign Affairs and Trade (DFAT). Consular attestation from the Indian Consulate in Sydney, Melbourne, or Perth adds further legal sanctity."
  },
  {
    question: "What are the rules for repatriating funds from inherited Indian assets?",
    answer: "Under FEMA regulations, NRIs can repatriate up to USD 1 million per financial year from their NRO account, which includes sale proceeds of inherited assets. This requires submitting Form 15CA and 15CB (certified by a Chartered Accountant) to confirm that all applicable taxes in India have been paid."
  },
  {
    question: "What happens if I die without a will (intestate) in Australia?",
    answer: "If you die intestate, your Australian assets are distributed according to state laws (e.g., NSW Succession Act). However, your Indian assets will follow Indian personal laws (Hindu, Muslim, etc.). This split can lead to conflicting distributions and prolonged legal battles among family members who may be living across different continents."
  },
  {
    question: "Can I manage my Indian bank accounts and investments via my Australian will?",
    answer: "Your Australian will can mention these assets, but for seamless succession, a specific Indian will is better. Additionally, having clear nominations on NRE/NRO accounts, demat accounts, and mutual funds is vital. Nominees act as trustees and help in the immediate transfer of funds, though the legal title ultimately rests with the heirs named in the will."
  },
  {
    question: "What is the role of an executor for an Indian will?",
    answer: "The executor is responsible for carrying out your will's terms. For Indian assets, we recommend appointing a resident of India or a professional firm. They need to navigate local bureaucracies, deal with municipal offices for mutation, and satisfy bank legal departments-tasks that are nearly impossible for someone living in Australia to manage remotely."
  },
  {
    question: "Do I need probate in India for my property?",
    answer: "Probate is mandatory for wills executed in presidency towns like Mumbai, Kolkata, or Chennai, or for properties located there. In other regions, while not always mandatory by law, banks and housing societies often demand a probate or succession certificate to transfer title, making a clear will essential to simplify the court process."
  },
  {
    question: "How does the Double Taxation Avoidance Agreement (DTAA) help?",
    answer: "The DTAA between India and Australia ensures you aren't taxed twice on the same income. If you pay capital gains tax in India on the sale of an inherited property, you can use that as a credit against your tax liability in Australia. Both countries require disclosure of these transactions to remain compliant with tax authorities (ATO and IT Dept)."
  },
  {
    question: "How often should I update my cross-border will?",
    answer: "We recommend a review every 3 to 5 years or upon major life events like marriage, divorce, birth of a child, or significant asset acquisition. Changes in tax laws (like the recent ATO shifts on foreign residents' main residence exemption) or Indian succession amendments can also make an update necessary."
  },
  {
    question: "Can AMA Legal Solutions handle my Indian property registration remotely?",
    answer: "Yes, our specialized NRI cell coordinates with local Sub-Registrars in India. We handle the drafting, documentation, and coordination so you don't have to travel to India. Our team bridges the gap between Australian legal standards and Indian ground realities to ensure your legacy is secure."
  }
];

// Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.amalegalsolutions.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Will Drafting for Indians in Australia", "item": "https://www.amalegalsolutions.com/will-drafting-for-indians-living-in-australia" }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Will Drafting for Indians Living in Australia: The Complete Cross-Border Strategy",
  "description": "Comprehensive guide for NRIs and OCIs in Australia on drafting wills for Indian assets. Learn about separate wills, ATO tax implications, Indian succession laws, and protecting ancestral wealth.",
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
  "name": "Will Drafting for Indians in Australia",
  "image": "https://www.amalegalsolutions.com/services/will-banner.jpg",
  "description": "Expert legal assistance for Indians in Australia to draft wills for Indian assets.",
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
      "author": { "@type": "Person", "name": "Vikram Singh" },
      "reviewBody": "Extremely professional. From Parramatta, it was hard to manage my Jalandhar properties. AMA drafted a perfect Indian will and handled everything remotely."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Priya Sharma" },
      "reviewBody": "They saved us from a huge tax mistake in Australia by explaining the CGT implications of our Indian inheritance. Highly recommended for all OCIs in Melbourne."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Rohan Mehta" },
      "reviewBody": "The best firm for NRI legal issues. Their knowledge of both NSW and Indian laws is unmatched. Very smooth process from Sydney."
    }
  ]
};

export const metadata = {
  title: "Will Drafting for Indians Living in Australia | #1 NRI Estate Lawyers",
  description: "Secure your Indian assets from Australia with expert will drafting. Navigate cross-border laws, avoid probate delays, and manage ATO tax compliance. Expert NRI Lawyers.",
  keywords: [
    "will drafting for indians in australia",
    "nri will for indian property australia",
    "estate planning for indians in australia",
    "australian will for indian assets",
    "succession laws for nris australia",
    "indian will registration from sydney",
    "probate process in india for australian residents"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/will-drafting-for-indians-living-in-australia',
  },
};

export default function WillDraftingAustraliaPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "australian-indian-legal", title: "Legal Landscape" },
    { id: "why-separate-wills", title: "Why Separate Wills?" },
    { id: "australian-state-laws", title: "Australian State Laws" },
    { id: "indian-succession-nri", title: "Indian Succession" },
    { id: "revocation-trap", title: "The Revocation Trap" },
    { id: "tax-ato-compliance", title: "Tax & Compliance" },
    { id: "fema-repatriation", title: "FEMA & Repatriation" },
    { id: "digital-assets", title: "Digital Legacy" },
    { id: "witnessing-australia", title: "Signing & Witnesses" },
    { id: "probate-process", title: "Probate in India" },
    { id: "why-choose-ama", title: "Why Choose AMA" },
    { id: "testimonials", title: "Client Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Will Drafting for Indians in Australia", href: "/will-drafting-for-indians-living-in-australia" },
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
               Will Drafting for <span className="text-[#D2A02A]">Indians Living in Australia</span>
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Precision legal architecture for NRIs and OCIs in Sydney, Melbourne, Perth, and Brisbane. Secure your Indian properties, bank accounts, and ancestral wealth with a professionally drafted cross-border will.
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
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            {/* Left Sidebar - TOC */}
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Content will be inserted here */}
                {/* 1. Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Strategic Imperative of Indian Estate Planning for the Australian Diaspora</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    The Indian community in Australia has evolved into one of the most successful and influential diaspora groups in the Southern Hemisphere. From the bustling financial districts of Sydney to the tech corridors of Melbourne and the growing suburbs of Perth, Indians have established deep economic and social roots. However, for many Indo-Australians, their financial heart remains partially anchored in the Indian subcontinent. Whether it is ancestral land in Punjab, a luxury apartment in Gurgaon, or significant balances in NRE accounts, these assets represent a lifetime of hard work and cultural heritage that requires sophisticated legal protection.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Living in Australia introduces a layer of legal complexity that many are unprepared for. The Australian legal system, based on English common law but heavily modified by state-specific statutes, does not always recognize the nuances of Indian personal laws. When an NRI or OCI passes away without a cohesive cross-border plan, their heirs often face a "Jurisdictional Nightmare." They find themselves caught between the Australian Taxation Office (ATO) reporting requirements and the notoriously slow-moving Indian civil courts. This is where wealth turns into a liability, and family legacies are consumed by decades of litigation and administrative red tape.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    The act of <strong>will drafting for Indians living in Australia</strong> is no longer just a recommendation; it is a critical necessity for wealth preservation. We are currently witnessing the largest intergenerational wealth transfer in history. Assets acquired by the first generation of immigrants are now being passed to second and third-generation Indo-Australians who may have little connection to the ground realities of Indian bureaucracy. Without a professionally architected, jurisdiction-specific will, these assets are at immense risk of hostile property grabs, unauthorized occupations, or being lost to the state due to lack of proof of succession.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    At AMA Legal Solutions, we understand the specific anxieties of the Australian NRI. Our team acts as the legal bridge, ensuring that your final wishes are translated into documents that are enforceable in both an Australian probate registry and an Indian Sub-Registrar's office. We don't just draft wills; we create comprehensive succession frameworks that respect your cultural values while adhering to modern global legal standards. Your legacy across two continents deserves nothing less than absolute clarity and bulletproof protection.
                  </p>

                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mt-8 mb-4">Why the Australian Context is Unique</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Unlike other diaspora hubs, the Australian community is heavily concentrated in states with very different succession acts. An Indian family in Blacktown, Sydney, is governed by different rules than a family in Point Cook, Melbourne. The NSW Succession Act of 2006, for example, allows for a "notional estate" concept where assets given away shortly before death can be pulled back into the estate to satisfy a claim. This has profound implications for NRIs who might be gifting properties in India to their children while living in Australia.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Furthermore, the ATO's focus on "Foreign Income Tax Offsets" (FITO) means that every dollar inherited in India must be accounted for with precision. If an heir in Brisbane inherits a property in Bangalore and fails to establish its "cost base" at the time of death, they could find themselves paying 45 percent tax on the entire sale proceeds years later. Our approach integrates these Australian tax realities into the very fabric of your Indian will.
                  </p>
                </section>

                {/* 2. Legal Landscape */}
                <section id="australian-indian-legal" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Navigating Two legal Worlds: The Common Law Connection</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <p className="text-sm md:text-lg text-blue-900 italic">
                      "A global life requires a global legal strategy. One document can rarely serve two masters when those masters are the High Courts of Australia and India."
                    </p>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    To draft an effective will from Australia, one must first understand that they are operating under two distinct sovereign authorities. Australia is a federation where succession law is governed primarily at the state level. Whether you reside in New South Wales, Victoria, or Queensland, the rules for your Australian assets like your family home, superannuation, and local bank accounts are dictated by state-specific acts. These laws focus on testamentary freedom but include strong "family provision" rules that allow certain relatives to challenge a will if they feel they have not been adequately provided for.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Contrast this with India, where succession is a patchwork of religious personal laws and national statutes. For Hindus, Sikhs, Buddhists, and Jains, the Hindu Succession Act (HSA) of 1956 is the governing framework. For Muslims, the uncodified Shariat laws apply, which place strict limits on how much of an estate can be willed away (usually only one-third). For Christians and those married under the Special Marriage Act, the Indian Succession Act 1925 applies. Furthermore, property in India often involves the complex concept of "Ancestral Property" and "Coparcenary Rights," where your relatives may have a birthright claim to the land that you cannot legally override with a will.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    This "Double Reality" is where standard legal templates and generalist lawyers often fail our NRI clients. An Australian solicitor might not know about the 2005 amendment to the HSA that grants daughters equal rights in ancestral property. They might not understand that in India, a will witnessed by a beneficiary is void regarding that beneficiary's portion. They certainly will not know the specific internal circulars of Indian banks like SBI or ICICI that dictate how an NRI's funds are released after death. Our expertise lies in merging these two worlds into a single, cohesive success strategy.
                  </p>

                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mt-8 mb-4">The Convergence of Two Systems</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    While both countries share a common law heritage, the application has diverged significantly. In Australia, the focus is on the "Nuclear Family" and individual rights. In India, the law still respects the "Joint Family" structure and community interests. When you draft a will in Sydney, your lawyer may not ask about your cousins in Jalandhar, but under Indian law, those cousins could have a claim to your ancestral home if the property was not partitioned correctly.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    We ensure that your will accounts for these "invisible claimants." By clearly defining what assets are self-acquired and which ones are ancestral, we remove the ambiguity that Indian lawyers often exploit to drag estates into litigation. We also ensure that the witnessing process in Australia meets the high evidentiary standards of the Indian High Courts, preventing your document from being dismissed as a foreign anomaly.
                  </p>
                </section>

                {/* 3. Why Separate Wills */}
                <section id="why-separate-wills" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Case for Separate Jurisdictional Wills: A Master Strategy</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-8 text-gray-700 font-medium">
                    The temptation to draft a single "Worldwide Will" is strong, but for Indians in Australia, it is a strategic error that often leads to years of delay. Here is why we recommend the "Split-Jurisdiction Strategy":
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3">Parallel Administration</h3>
                      <p className="text-gray-700 text-xs md:text-base">
                        Your Australian executor can unlock your house in Sydney while your Indian executor handles properties in Bangalore simultaneously. This prevents the "waiting for a foreign court" trap that can freeze assets for 3 to 5 years.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3">Administrative Acceptance</h3>
                      <p className="text-gray-700 text-xs md:text-base">
                        Indian Sub-Registrars and banks are trained to read specific legal terminology. A will that uses accurate Indian legal terms like 'Immovable Property' and 'Karta' is processed significantly faster than a foreign-styled document.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3">Cost Efficiency</h3>
                      <p className="text-gray-700 text-xs md:text-base">
                        By excluding Indian assets from your Australian probate, you may reduce the valuation-based fees charged by Australian authorities and avoid paying multiple layers of administrative costs on the same assets.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3">Local Enforceability</h3>
                      <p className="text-gray-700 text-xs md:text-base">
                        An Indian will can be registered in India, providing it with high legal sanctity. A registered will is much harder to challenge in an Indian court, effectively shielding your heirs from frivolous lawsuits.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mt-8 mb-4">Strategic Separation as a Defense Mechanism</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    When you have assets in two countries, you have two sets of creditors, two sets of tax collectors, and two sets of court systems. By separating your wills, you "compartmentalize" your risk. If a dispute arises regarding your business in Melbourne, it does not necessarily freeze your ancestral flat in Mumbai. This barrier is the most effective way to ensure that your family always has access to some portion of their inheritance while any legal dust settles.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Moreover, the process of "resealing" a probate from the NSW Supreme Court in an Indian High Court is a bureaucratic mountain. It involves certified copies, translations, and multiple rounds of authentication. Often, the Indian court may refuse the resealing if the original Australian will does not meet every specific requirement of the Indian Succession Act. A separate Indian will skips this entire multi-year hurdle, allowing for immediate action in India.
                  </p>
                </section>

                {/* 4. Australian State Laws */}
                <section id="australian-state-laws" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 font-sans">Understanding State-Specific Nuances Across Australia</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    For Indians residing in Australia, the first level of estate planning happens at the state level. While the broad principles of succession are similar, the specific "Family Provision" rules can vary, impacting how securely you can pass on your local wealth.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-4 text-left border-b border-gray-200 text-[#D2A02A] w-1/3 font-black uppercase text-xs tracking-widest">New South Wales</th>
                          <th className="p-4 text-left border-b border-gray-200 text-[#D2A02A] w-1/3 font-black uppercase text-xs tracking-widest">Victoria</th>
                          <th className="p-4 text-left border-b border-gray-200 text-[#D2A02A] w-1/3 font-black uppercase text-xs tracking-widest">Queensland</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 align-top">
                            <p className="font-bold text-sm mb-2 text-gray-900">Succession Act 2006</p>
                            <ul className="list-disc pl-4 space-y-2 text-gray-700 text-xs md:text-sm leading-relaxed">
                              <li>Includes "Notional Estate" provisions, allowing the court to pull back assets given away before death into the estate.</li>
                              <li>Broad definition of "eligible persons" who can claim against the will.</li>
                              <li>Strict requirements for the mental capacity of the testator at the time of signing.</li>
                            </ul>
                          </td>
                          <td className="p-4 align-top bg-gray-50">
                            <p className="font-bold text-sm mb-2 text-gray-900">Wills Act 1997 / A&P Act</p>
                            <ul className="list-disc pl-4 space-y-2 text-gray-700 text-xs md:text-sm leading-relaxed">
                              <li>Stricter rules on who can challenge a will; claimant must prove they were dependent and the deceased had a moral duty.</li>
                              <li>Strong focus on "testamentary intent" over pure formalities.</li>
                              <li>Allows for electronic wills in specific circumstances since 2021.</li>
                            </ul>
                          </td>
                          <td className="p-4 align-top">
                            <p className="font-bold text-sm mb-2 text-gray-900">Succession Act 1981</p>
                            <ul className="list-disc pl-4 space-y-2 text-gray-700 text-xs md:text-sm leading-relaxed">
                              <li>Specific timelines for filing family provision claims.</li>
                              <li>Allows for "informal wills" if the court is satisfied the deceased intended the document to be their will.</li>
                              <li>Requires specific wording for the appointment of executors to avoid ambiguity.</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mt-8 mb-4">Western Australia and South Australia</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    If you are in Perth or Adelaide, the rules around "Superannuation Death Benefits" are particularly critical. For many NRIs, super is a major asset. Unlike other property, super does not automatically form part of your estate. It is governed by a "Binding Death Benefit Nomination" (BDBN). If your BDBN is not aligned with your will, your super could end up with a person you did not intend, regardless of what your will says.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Our team works to synchronize these Australian financial instruments with your global plan. We ensure that your Australian executors have the power to deal with these complex structures while your Indian executors are empowered to protect your ancestral lands. This 360 degree coverage is the difference between an amateur plan and a professional legal architecture.
                  </p>
                </section>

                {/* 5. Indian Succession */}
                <section id="indian-succession-nri" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Indian Succession Nuances for the Australia-Based NRI</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Indian succession law is not a monolith; it is a complex web of religious and civil statutes. For the diaspora in Australia, understanding the classification of your Indian assets is the first step toward a secure will.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-gray-900 text-lg mb-2 underline decoration-[#D2A02A] decoration-2">Self-Acquired Assets</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Includes properties you bought, investments in your name, and bank balances. You have 100% testamentary freedom to name any heir for these assets, regardless of family ties.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-gray-900 text-lg mb-2 underline decoration-[#D2A02A] decoration-2">Ancestral Assets</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Inherited property that has remained in the family for four generations. Your legal right to will this away is limited to your specific share in the family coparcenary.</p>
                    </div>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mb-6">
                    For our Muslim clients in Australia, it is vital to account for the "Third-Share Rule." Under Islamic Law in India, you can only will away up to one-third of your assets to a non-heir or for specific purposes; the remaining two-thirds must follow fixed Quranic shares. Any attempt to deviate from this requires the unanimous consent of all legal heirs after your passing, which can be nearly impossible to obtain in a distributed family.
                  </p>

                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mt-8 mb-4">The Coparcenary Conundrum</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    One of the most common issues we see for NRIs in Australia is the "Ancestral Property Trap." You may have grown up believing that your family home in Ludhiana or your farm in Gujarat belongs entirely to your father. However, under the Mitakshara system of Hindu law, you and your siblings acquired a birthright in that property the moment you were born. This birthright remains even if you have lived in Australia for 30 years and have Australian citizenship.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    When you draft your will, you cannot bequeath the entire ancestral property. You can only bequeath your specific undivided share. If you attempt to give away the whole property, your cousins or other relatives can challenge the will in an Indian court, leading to a freeze on the entire asset. We help you identify these shares accurately to ensure your will is legally valid and cannot be thrown out by a judge later.
                  </p>
                </section>

                {/* 6. Revocation Trap */}
                <section id="revocation-trap" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The "Revocation Trap": A Critical Warning for Indo-Australians</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Most Australian will-making services and standard solicitors use a boilerplate opening clause: "I hereby revoke all former wills and other testamentary dispositions previously made by me." While standard in Sydney or Melbourne, this clause is a silent poison for your global estate.
                  </p>
                  <div className="bg-red-50 p-6 md:p-10 rounded-2xl border border-red-100 my-6">
                      <h4 className="font-bold text-red-900 text-xl mb-4">The Danger of Unintentional Revocation:</h4>
                      <p className="text-red-800 text-sm md:text-lg leading-relaxed mb-4">
                        If you sign an Australian will containing this clause, you have legally cancelled any prior will you made in India. When you pass away, your Indian heirs will find that your Indian will is no longer valid. Your Indian estate will then fall into "Intestacy," where assets are distributed by rigid laws rather than your wishes, leading to massive delays and potential family wars.
                      </p>
                      <p className="text-red-900 font-bold text-sm md:text-base">
                        Our Solution: We utilize specific "Jurisdiction and Situate Clauses." These ensure that your Australian will is limited to assets in Australia and explicitly preserves the validity of your existing or future Indian will.
                      </p>
                  </div>

                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mt-8 mb-4">Case Study: The Sydney IT Architect's Mistake</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Consider the case of Rajesh, a software architect in Parramatta. He had an Indian will registered in 2015 for his flats in Bangalore. In 2022, he bought a house in Sydney and used a cheap online Australian will service. That new will revoked all prior wills. When Rajesh passed away, his Indian will was technically invalid. His family in India had to spend four years in the Bangalore High Court proving his original intent, during which time his flat was nearly taken over by a "distant relative" claim.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    This mistake is avoidable. By coordinating your Australian and Indian drafting through a single expert team, you ensure that both documents work in harmony. We call this "Cross-Border Synchronization," and it is the only way to truly protect a global portfolio from administrative self-destruction.
                  </p>
                </section>

                {/* 7. Tax & Compliance */}
                <section id="tax-ato-compliance" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">ATO Compliance and Australia-India Tax Strategy</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    While India abolished estate duty (inheritance tax) in 1985, the Australian tax system is vigilant about foreign assets. As an Australian tax resident, you must navigate the worldwide income rules to ensure your inheritance does not trigger an ATO investigation.
                  </p>
                  <div className="overflow-x-auto mb-8">
                    <table className="w-full text-sm text-left text-gray-500 border border-gray-200 rounded-lg">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 font-black">
                        <tr>
                          <th scope="col" className="px-6 py-4">Tax Pillar</th>
                          <th scope="col" className="px-6 py-4 bg-red-50 text-red-900 italic">Compliance Risk</th>
                          <th scope="col" className="px-6 py-4">Strategy Guide</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-black text-gray-900">Capital Gains Tax (CGT)</td>
                          <td className="px-6 py-4 bg-red-50 text-red-900 font-bold">45% Max Marginal Rate</td>
                          <td className="px-6 py-4">Inherited Indian property market value at death sets your 'Cost Base'. Accurate valuation in India is crucial for future Australian tax offsets.</td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-black text-gray-900">Double Taxation (DTAA)</td>
                          <td className="px-6 py-4 bg-red-50 text-red-900 font-bold">Double Payment Risk</td>
                          <td className="px-6 py-4">Utilize the Foreign Income Tax Offset (FITO) to credit taxes paid on Indian property sales against your Australian liability.</td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-black text-gray-900">Foreign Asset Reporting</td>
                          <td className="px-6 py-4 bg-red-50 text-red-900 font-bold">Heavy ATO Penalties</td>
                          <td className="px-6 py-4">Declare rental income and interest from Indian NRO accounts annually. Undisclosed foreign wealth can lead to severe audits.</td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-black text-gray-900">Main Residence Exemption</td>
                          <td className="px-6 py-4 bg-red-50 text-red-900 font-bold">Residency Surcharge</td>
                          <td className="px-6 py-4">Understand how recent Australian law changes affect your ability to claim exemptions on homes you still hold in India.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mt-8 mb-4">The Importance of the "Valuation at Death"</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    A critical trap for Indo-Australians is the failure to value an Indian property on the day the original owner passes away. The ATO treats you as having "purchased" the property for its Fair Market Value on that exact date. If you wait five years to sell the property and have no official government-approved valuation from five years ago, the ATO may use a much lower historical cost base, resulting in a significantly higher tax bill in Australia.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Our estate plans include specific tax-awareness clauses that advise your heirs on the necessary valuation steps to take immediately after your passing, ensuring they are fully compliant with both the ATO and the Indian Income Tax Department. We coordinate with Indian government recognized valuers to get this right from day one.
                  </p>
                </section>

                {/* 8. FEMA & Repatriation */}
                <section id="fema-repatriation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">FEMA Regulations and the USD 1 Million Repatriation Rule</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    For heirs living in Australia, getting the money out of India is often more stressful than inheriting the asset itself. The Foreign Exchange Management Act (FEMA) dictates how and when these funds can be moved to an Australian bank account.
                  </p>
                  <div className="bg-gray-50 p-6 md:p-10 rounded-2xl border border-gray-100">
                      <ul className="space-y-6">
                        <li className="flex gap-4">
                            <span className="text-[#D2A02A] font-bold text-xl">01.</span>
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed"><strong>Inheritance Freedom:</strong> NRIs and OCIs can inherit any immovable property in India from a resident without prior RBI permission, including agricultural land and plantation property.</p>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-[#D2A02A] font-bold text-xl">02.</span>
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed"><strong>The Million Dollar Limit:</strong> NRIs can repatriate up to USD 1 million per financial year from their NRO account, representing the sale proceeds of inherited assets, subject to tax clearance.</p>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-[#D2A02A] font-bold text-xl">03.</span>
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed"><strong>Compliance Documentation:</strong> Repatriation requires Form 15CA and 15CB. A local Chartered Accountant in India must certify that the funds are legitimate and taxes have been settled correctly.</p>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-[#D2A02A] font-bold text-xl">04.</span>
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed"><strong>Remittance of Income:</strong> Rental income and interest earned in India are fully repatriable (after tax) and do not count toward the USD 1 million capital limit.</p>
                        </li>
                      </ul>
                  </div>

                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mt-8 mb-4">Navigating the Indian Banking Red Tape</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    Even with a valid will, Indian banks are notoriously difficult when it comes to releasing NRI funds. They often demand "Succession Certificates" or legal heirship certificates from the local Tehsildar office. If your will is not phrased correctly or lacks registration, the bank's legal department can sit on your application for months.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    We ensure your will includes specific "Banking Empowerment Clauses." These authorize your executors to represent you at the bank, sign the necessary indemnity bonds, and handle the 15CA/CB documentation required for a smooth transfer to your Australian accounts. We bridge the gap between the Reserve Bank of India (RBI) guidelines and the actual ground-level reality of the bank manager's desk.
                  </p>
                </section>

                {/* 9. Digital Assets */}
                <section id="digital-assets" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Preserving Your Digital Legacy: Cross-Border Assets</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    In our modern age, a significant portion of an NRI's wealth exists in bit and bytes. Your will must provide your executor with the "Digital Right of Entry" to manage your online financial life across Australia and India.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                     <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 flex items-center gap-4 transition-all hover:bg-white hover:shadow-md">
                         <span className="text-2xl">💰</span>
                         <div>
                            <h4 className="font-bold text-sm md:text-base">Crypto & Wallets</h4>
                            <p className="text-xs text-gray-500">Legal authority to access exchange accounts and move private keys for Bitcoin, Ethereum, and other global assets.</p>
                         </div>
                     </div>
                     <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 flex items-center gap-4 transition-all hover:bg-white hover:shadow-md">
                         <span className="text-2xl">📈</span>
                         <div>
                            <h4 className="font-bold text-sm md:text-base">Demat Accounts</h4>
                            <p className="text-xs text-gray-500">Specific instructions for transferring shares in Indian trading portals like Zerodha or ICICI Direct.</p>
                         </div>
                     </div>
                     <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 flex items-center gap-4 transition-all hover:bg-white hover:shadow-md">
                         <span className="text-2xl">☁️</span>
                         <div>
                            <h4 className="font-bold text-sm md:text-base">Cloud Data</h4>
                            <p className="text-xs text-gray-500">Authorization to manage personal photos, videos, and private cloud storage across Google, Apple, and AWS.</p>
                         </div>
                     </div>
                     <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 flex items-center gap-4 transition-all hover:bg-white hover:shadow-md">
                         <span className="text-2xl">📱</span>
                         <div>
                            <h4 className="font-bold text-sm md:text-base">Social Footprint</h4>
                            <p className="text-xs text-gray-500">Instructions for the memorialization or deletion of global social profiles on LinkedIn, Instagram, and Facebook.</p>
                         </div>
                     </div>
                  </div>

                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mt-8 mb-4">The Challenge of Two Factor Authentication (2FA)</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    A common problem for heirs is that bank accounts are linked to an Indian mobile number for 2FA. If that number is deactivated after your death, your heirs may find it impossible to log in to manage assets. Your will must provide the executor with the legal standing to request the bank to change linked mobile numbers or email IDs based on the probate or will.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    We include "fiduciary access" language that complies with both Australian privacy standards and Indian IT laws. This ensures your executor is not treated as a hacker, but as a legally authorized representative when dealing with Google, Microsoft, or Indian financial institutions. We help you create a digital inventory that complements your legal will, ensuring nothing is lost in the digital void.
                  </p>
                </section>

                {/* 10. Witnessing & Documentation */}
                <section id="witnessing-australia" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Notary, Apostille, and Consular Authentication</h2>
                   <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    A will signed in Australia is a "foreign document" in the eyes of Indian law. For it to carry legal weight in a Jalandhar court or a Mumbai bank, it must undergo a rigorous authentication process.
                  </p>
                   <div className="bg-gray-900 p-8 md:p-12 rounded-[2rem] text-white">
                        <h4 className="text-[#D2A02A] font-black text-xl md:text-2xl mb-6 uppercase tracking-wider">The Triple-Lock Security Protocol</h4>
                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <span className="bg-[#D2A02A] text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-black flex-shrink-0">1</span>
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed"><strong>Australian Notarization:</strong> Your Indian will must be signed in Australia before a Notary Public who verifies your identity and the physical signing process.</p>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span className="bg-[#D2A02A] text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-black flex-shrink-0">2</span>
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed"><strong>DFAT Apostille:</strong> The Department of Foreign Affairs and Trade (DFAT) must apostille the Notary's signature, confirming its legal validity for international use under the Hague Convention.</p>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span className="bg-[#D2A02A] text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-black flex-shrink-0">3</span>
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed"><strong>Consular Attestation:</strong> While not always mandatory, getting the Indian Consulate in Sydney, Melbourne, or Perth to attest the will provides it with "Prima Facie" validity in the eyes of Indian officials.</p>
                            </div>
                        </div>
                   </div>

                   <h3 className="text-lg md:text-2xl font-bold text-gray-800 mt-8 mb-4">Why Physical Witnessing Still Rules</h3>
                   <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    While Victoria and other Australian states have legalized remote or electronic witnessing for wills during the pandemic, India has not. Section 63 of the Indian Succession Act 1925 is extremely strict about the physical presence of the testator and two witnesses. If you sign an Indian will via Zoom in Australia, it will likely be thrown out by an Indian court even if it is legal in Australia.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    We ensure your execution process follows the "Highest Common Denominator" rule. We set up physical signing protocols that meet both Australian state and Indian national requirements. This means your will is bulletproof in both jurisdictions, leaving no room for a disgruntled relative to challenge it on technical grounds.
                  </p>
                </section>

                {/* 11. Probate */}
                <section id="probate-process" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Probate Paradox: Navigating Courts in Two Countries</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-8 text-gray-700 italic border-b border-gray-100 pb-4">
                    Probate is the official court confirmation of a will's validity. For an NRI, this process must often happen in both countries to satisfy local asset holders and government registries.
                  </p>
                  <div className="space-y-10">
                    <div className="group flex flex-col md:flex-row gap-6 items-start bg-gray-50 p-8 rounded-2xl transition-all hover:bg-white hover:shadow-xl">
                      <div className="flex-shrink-0 w-16 h-16 bg-gray-900 text-[#D2A02A] rounded-2xl flex items-center justify-center text-3xl font-black">🇦🇺</div>
                      <div>
                        <h3 className="text-xl font-black text-gray-900 mb-2">Probate in Australia</h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">Necessary to deal with Australian real estate, superannuation (if paid to the estate), and banks like CBA, NAB, or Westpac. The Supreme Court of your state issues the Grant of Probate after verifying the will's validity under local law.</p>
                      </div>
                    </div>
                    <div className="group flex flex-col md:flex-row gap-6 items-start bg-gray-50 p-8 rounded-2xl transition-all hover:bg-white hover:shadow-xl">
                      <div className="flex-shrink-0 w-16 h-16 bg-gray-900 text-[#D2A02A] rounded-2xl flex items-center justify-center text-3xl font-black">🇮🇳</div>
                      <div>
                        <h3 className="text-xl font-black text-gray-900 mb-2">Probate in India</h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">Mandatory for wills executed in presidency towns or for assets in Mumbai, Kolkata, or Chennai. Our local team in India manages the entire court filing, advertisement, and final grant process while you remain in Australia.</p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mt-8 mb-4">The "Letters of Administration" Alternative</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    If you die without a will (intestate), your heirs must apply for "Letters of Administration." This is significantly more difficult than probate, especially in India. It often requires a "Succession Certificate" which can involve placing advertisements in local newspapers and waiting for months for any objections. If the heirs are in Australia, this becomes a logistics nightmare involving powers of attorney and multiple translations.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    By having a clear, professionally drafted will, you bypass this entire level of bureaucracy. In many parts of India (outside the presidency towns), a well-drafted and registered will can often be used for property mutation and bank transfers without any court probate at all, saving your family thousands of dollars and years of mental stress.
                  </p>
                </section>

                {/* 12. Why AMA */}
                <section id="why-choose-ama" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 uppercase tracking-tight">Why AMA Legal Solutions is the Preferred Choice for Indo-Australians?</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-8 text-gray-700 font-medium">
                    We are not just a law firm; we are specialized architects of cross-border legacies. Our NRI Succession Desk is built on three pillars of excellence:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-8 rounded-2xl bg-gray-50 hover:bg-[#fffdf5] border-2 border-transparent hover:border-[#D2A02A]/30 transition-all">
                      <div className="text-5xl mb-6">⚖️</div>
                      <h3 className="font-black text-xl mb-3 text-gray-900">Dual Proficiency</h3>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">Lawyers who are qualified in India and deeply conversant with Australian state-level estate regulations like the NSW Succession Act or Victorian Wills Act.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 hover:bg-[#fffdf5] border-2 border-transparent hover:border-[#D2A02A]/30 transition-all">
                      <div className="text-5xl mb-6">🏛️</div>
                      <h3 className="font-black text-xl mb-3 text-gray-900">Remote Registration</h3>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">We coordinate the entire registration process with Indian Sub-Registrars. No need to travel from Australia to India just for legal documentation or registration rituals.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 hover:bg-[#fffdf5] border-2 border-transparent hover:border-[#D2A02A]/30 transition-all">
                      <div className="text-5xl mb-6">🛡️</div>
                      <h3 className="font-black text-xl mb-3 text-gray-900">Asset Vigilance</h3>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">Our team provides proactive advice on preventing property encroachments and hostile family takeovers-the most common risks for NRI estates in the subcontinent.</p>
                    </div>
                  </div>

                  <h3 className="text-lg md:text-2xl font-bold text-gray-800 mt-8 mb-4">A Holistic Philosophy of Legacy</h3>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    We believe that a will is more than just a list of names and numbers. It is a set of instructions that protects your values and your peace of mind. For our Australian clients, this often means ensuring that their children (who may be growing up with Australian values) are not cheated out of their Indian inheritance by greedy extended family members.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Our drafting process includes "Family Context Analysis." We talk to you about the family dynamics in India-who are the reliable cousins, and who might try to contest the will? We then build defensive layers into the document to make it as "contest-proof" as possible. This level of care is something you simply cannot get from an automated template or a high-street generalist.
                  </p>
                </section>

                {/* Additional Detailed Sections for Word Count and Depth */}
                <section id="executor-selection" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Art of Executor Selection for Indian Assets</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Choosing an executor for your Australian assets is simple-you usually pick your spouse or a adult child. But picking an executor for your Indian assets requires a different set of criteria. The person you pick in India must have "Ground Level Agility."
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <h4 className="font-bold text-gray-900 mb-3">Attributes of an Indian Executor:</h4>
                        <ul className="list-disc pl-4 space-y-2 text-gray-700 text-sm">
                            <li>Physical Presence: They must be able to visit government offices and banks in India.</li>
                            <li>Legal Standing: Ideally a resident of India to simplify POA and identification requirements.</li>
                            <li>Financial Integrity: They will handle large sums of money and title deeds.</li>
                            <li>Persistence: The ability to deal with Indian bureaucracy over months or years.</li>
                        </ul>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                        <h4 className="font-bold text-gray-900 mb-3">The Professional Executor Option:</h4>
                        <p className="text-gray-700 text-sm leading-relaxed">
                            For families who do not have a reliable relative in India, we offer the option of a Corporate or Professional Executor. This removes the risk of family bias and ensures that the estate is handled with professional efficiency and full transparency for the heirs in Australia.
                        </p>
                    </div>
                  </div>
                </section>

                <section id="property-mutation" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Post-Death Formalities: The Mutation Process Explained</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Winning the probate is only half the battle. In India, you must "mutate" the property records. Mutation is the process of changing the name in the government's land and tax records from the deceased to the new owner.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    In cities, mutation happens at the Municipal Corporation. In rural areas, it happens at the Patwari or Tehsildar's office. This process requires a specific set of documents, including a certified copy of the will, death certificate, and often a "No Objection Certificate" (NOC) from other legal heirs. For NRIs in Australia, this is where most estates get stuck.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    We manage this entire process for you. Our legal team on the ground in India files the mutation application, handles the "public notice" requirements, and follows up with the officials to ensure the title is updated successfully. We ensure that the record in the 'Jamabandi' or 'Khata' is correct, which is the only way to ensure the property can eventually be sold.
                  </p>
                </section>

                <section id="nri-investment-succession" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Succession for NRI Mutual Funds, Shares, and Demat Accounts</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Many Indians in Australia have active portfolios in the Indian stock market through NRE or NRO Demat accounts. The succession of these digital financial assets is governed by both SEBI regulations and the Indian Succession Act.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                    The biggest mistake NRIs make is relying solely on "Nomination." In India, a nominee is merely a "collector" of the assets on behalf of the legal heirs. They do not own the money. If you name your brother as a nominee on your Zerodha account, but your will says everything goes to your daughter, the daughter is the legal owner. This often leads to ugly disputes between the nominee and the heir.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    We ensure your will and your nominations are perfectly aligned. We help you draft "Letter of Instructions" for the Demat participants and mutual fund houses, ensuring that upon your passing, the transfer happens through the "Transmission" route seamlessly, without requiring the heirs to jump through the "Nominee vs Heir" legal fire.
                  </p>
                </section>

                {/* 13. Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Voices of the Australian Diaspora</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Drafting my Indian will from Sydney was seamless with AMA. They understood the interaction between my Australian superannuation and my Indian FD accounts perfectly. Their remote service saved me thousands in travel and time."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">V</div>
                        <div>
                          <p className="font-bold text-gray-900">Vikram Singh</p>
                          <p className="text-sm text-gray-500">IT Consultant, Parramatta</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I was worried about the tax implications in Melbourne if I inherited my parents' property in Pune. AMA Legal Solutions provided a clear tax roadmap alongside a bulletproof will. Exceptional cross-border expertise."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">P</div>
                        <div>
                          <p className="font-bold text-gray-900">Priya Sharma</p>
                          <p className="text-sm text-gray-500">Education Professional, Point Cook</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 14. FAQs */}
                <section id="faqs" className="scroll-mt-32 pt-10">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-10 border-b-2 border-[#D2A02A]/20 pb-4">
                     Frequently Asked Questions <span className="text-[#D2A02A] text-sm">(AUSTRALIA-INDIA DESK)</span>
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
                    Australian Jurisdictions <span className="text-[#D2A02A]">We Serve</span>
                  </h2>
                  <p className="text-gray-600 mb-10 text-sm md:text-lg leading-relaxed max-w-4xl">
                    Our cross-border legal architects provide comprehensive will drafting and estate planning services across all 6 states and 2 territories of Australia, ensuring your global wealth is protected under both Australian State laws and Indian Succession Act.
                  </p>
                  
                  <div className="space-y-12">
                    {[
                      {
                        country: "Australia",
                        flag: "🇦🇺",
                        states: ["New South Wales", "Queensland", "South Australia", "Tasmania", "Victoria", "Western Australia", "Australian Capital Territory", "Northern Territory"]
                      }
                    ].map((item, idx) => (
                      <div key={idx} className="group">
                        <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-3">
                          <span className="text-2xl">{item.flag}</span>
                          States & Territories
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
                    <h2 className="text-2xl md:text-6xl font-black mb-6 md:mb-8 leading-tight tracking-tighter">Your Legacy Knows No Borders.<br /><span className="text-[#D2A02A]">Your Security Shouldn't Either.</span></h2>
                    <p className="text-sm md:text-2xl opacity-90 mb-10 md:mb-16 max-w-4xl mx-auto leading-relaxed font-light">
                      Do not let your hard-earned Indian assets be swallowed by jurisdictional gaps and complex succession laws. Secure your family's future across Australia and India with a professionally managed estate plan now.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                      <Link href="/contact" className="w-full sm:w-auto">
                        <button className="w-full bg-[#D2A02A] hover:bg-[#b88a22] text-white font-black py-4 px-10 md:py-6 md:px-16 rounded-full transition-all transform hover:scale-105 shadow-[0_20px_50px_rgba(210,160,42,0.3)] text-base md:text-2xl">
                          Start Australia-India Drafting
                        </button>
                      </Link>
                      <a href="tel:+918700343611" className="w-full sm:w-auto">
                        <button className="w-full bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/5 text-white font-black py-4 px-10 md:py-6 md:px-16 rounded-full transition-all text-sm md:text-2xl">
                          Call Specialist: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-8 md:mt-12 text-xs md:text-lg opacity-60 font-medium">
                      Confidential Advisory • Australia-Wide Support • Certified NRI Attorneys
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 group transition-all hover:border-[#D2A02A]/30">
                  <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tighter leading-tight italic">Need Expert<br />NRI Guidance?</h3>
                  <p className="text-gray-500 mb-8 text-sm leading-relaxed font-medium">
                    Our Australia-specific succession desk is available to help you navigate Indian asset protection today.
                  </p>
                  <a href="tel:+918700343611" className="block w-full bg-[#D2A02A] text-white text-center py-4 rounded-2xl font-black hover:bg-[#b88a22] transition-colors mb-4 shadow-[0_10px_20px_rgba(210,160,42,0.2)]">
                    Call +91-8700343611
                  </a>
                  <Link href="/contact" className="block w-full border-2 border-[#D2A02A] text-[#D2A02A] text-center py-4 rounded-2xl font-black hover:bg-[#D2A02A] hover:text-white transition-all">
                    Request Legal Strategy
                  </Link>
                </div>

                {/* Resource Links */}
                <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100">
                  <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-1.5 h-6 bg-[#D2A02A] rounded-full"></span>
                    Helpful Links
                  </h3>
                  <ul className="space-y-4">
                    {['Will Drafting for NRI', 'Succession Laws Guide', 'Simple Will Format', 'NRI Legal Services', 'Civil Dispute Help'].map((service, idx) => (
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
                  <p className="text-xs text-blue-50/70 mb-8 font-medium leading-relaxed">Manage your Indian succession matters legally from your home in Sydney or Melbourne. Real-time updates.</p>
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

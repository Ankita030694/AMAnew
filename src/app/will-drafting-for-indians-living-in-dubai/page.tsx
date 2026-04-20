import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Is a DIFC Will valid for my properties located in India?",
    answer: "A DIFC Will is specifically designed for assets within the UAE or in jurisdictions that recognize DIFC orders. While it is a robust legal instrument for your Dubai and Northern Emirates assets, it is not the ideal tool for Indian real estate. Indian authorities, especially at the flat registration offices and banks, expect a document that conforms to the Indian Succession Act. We strongly recommend a separate Indian Will for your assets in India to avoid the long and expensive process of getting a foreign grant of probate recognized in Indian courts."
  },
  {
    question: "What happens if an Indian expatriate dies in Dubai without a Will?",
    answer: "If you die intestate (without a Will) in the UAE, your assets, including bank accounts and properties, may be frozen. Previously, Sharia law principles were applied more broadly to non-Muslims. However, recent legal reforms in the UAE now allow for the laws of your home country to apply to inheritance in many cases, or for the new Civil Personal Status Law to take effect. Despite these improvements, the default process is slow and may not match your intentions. A registered Non-Muslim Will ensures that your assets are distributed exactly as you wish, without judicial delays."
  },
  {
    question: "Can I register an Indian Will at the Indian Consulate in Dubai?",
    answer: "Yes: you can have your Indian Will notarized or attested at the Indian Consulate in Dubai or the Embassy in Abu Dhabi. This provides a layer of authentication that is highly respected by Indian government departments. However: attestation at the consulate is not the same as registration with the Sub-Registrar in India. For maximum security: we recommend attesting at the consulate and subsequently registering the Will with the relevant authorities in India to ensure it is bulletproof against challenges."
  },
  {
    question: "Do daughters have equal inheritance rights in UAE and India?",
    answer: "Under the Hindu Succession Act in India: daughters have equal coparcenary rights in ancestral property as per the 2005 amendment. In the UAE: the new Civil Personal Status Law for non-Muslims also grants equal inheritance rights to men and women. This is a significant shift from traditional defaults. Our drafting ensures that your estate plan remains compliant with these modern standards in both jurisdictions: protecting the rights of all your heirs equally."
  },
  {
    question: "Is a separate Will necessary for Abu Dhabi and Dubai assets?",
    answer: "Generally: a Will registered with the Abu Dhabi Judicial Department (ADJD) is valid across all Emirates: including Dubai. However: if you have complex real estate holdings in the Dubai International Financial Centre (DIFC): a specialized DIFC Will may be more appropriate. We help you choose the most cost-effective and legally sound registration authority based on the location and nature of your UAE-based wealth."
  },
  {
    question: "What is the role of guardianship in a Dubai Will?",
    answer: "Guardianship is perhaps the most critical element for young families in Dubai. Without a registered Will that specifically names guardians: the UAE courts may follow statutory procedures to decide who cares for your minor children in the event of both parents' passing. This could lead to temporary placement in state care or with relatives you might not have chosen. A registered Will allows you to name both permanent and interim guardians: providing immediate protection for your children."
  },
  {
    question: "How do I manage my NRE and NRO accounts through my Will?",
    answer: "Your Indian Will should specifically mention your Non-Resident External (NRE) and Non-Resident Ordinary (NRO) accounts. While nominations on these accounts are helpful: they only make the nominee a 'trustee' in the eyes of the law: not the ultimate owner. A Will provides the definitive legal title to these funds: ensuring that your savings are transferred to your heirs without the need for a succession certificate from an Indian court."
  },
  {
    question: "What are the requirements for witnesses for an Indian Will signed in Dubai?",
    answer: "An Indian Will requires at least two adult witnesses. They must observe you signing the document and then sign it themselves in your presence. Crucially: a witness should not be a beneficiary under the Will: nor should they be the spouse of a beneficiary. If a beneficiary witnesses the Will: the bequest to them becomes void under the Indian Succession Act. We ensure that your witnessing process in Dubai meets all the technical requirements of Indian law."
  },
  {
    question: "Can I include my UAE end-of-service benefits in my Will?",
    answer: "Your gratuity or end-of-service benefits are generally paid to your designated beneficiaries as per your employment contract. However: including a residuary clause in your UAE Will can help cover any funds that are paid into your estate after your passing. This ensures that every dirham earned during your career in Dubai is accounted for and distributed according to your wishes."
  },
  {
    question: "How often should I update my cross-border estate plan?",
    answer: "You should review your Wills every three to five years or whenever there is a major life event: such as the birth of a child: marriage: divorce: or the acquisition of a new property in either the UAE or India. Legal landscapes in both countries are evolving rapidly: and keeping your documentation updated ensures that you take advantage of new protections and remain compliant with current tax and succession regulations."
  },
  {
    question: "What is the 'Revocation Trap' for NRIs in the UAE?",
    answer: "Many standard Will formats include a clause that 'revokes all former Wills.' If you sign a UAE Will with this boilerplate language: you may unintentionally cancel your existing Indian Will. Our expert drafting uses specific jurisdictional clauses: ensuring that your UAE Will only applies to your UAE assets and your Indian Will remains valid and active for your assets in India."
  },
  {
    question: "Is probate mandatory in India for UAE-based NRIs?",
    answer: "Probate is mandatory in certain presidency towns like Mumbai: Chennai: and Kolkata for Wills relating to immovable property. In other parts of India: it may not be legally mandatory but is often demanded by banks and housing societies to verify the authenticity of the Will. Having a clearly drafted and registered Indian Will makes the probate process significantly faster and less burdensome for your family."
  },
  {
    question: "Can I bequeath ancestral property in my Indian Will?",
    answer: "You can only will away your specific share in ancestral property: known as your coparcenary interest. You cannot will away the entire property if other members of the joint family have a legal claim to it. We help you identify the exact extent of your legal rights in ancestral wealth: ensuring that your Will is legally valid and cannot be struck down in an Indian court."
  },
  {
    question: "Do I need to travel to India for Will registration?",
    answer: "No: it is not always necessary for you to travel to India for the registration of your Will. While the most common method is personal appearance before the Sub-Registrar: there are alternative legal strategies and remote coordination options available. We manage the entire coordination with local authorities in India while you remain in Dubai: providing a seamless and stress-free experience."
  },
  {
    question: "How does AMA Legal Solutions coordinate with UAE lawyers?",
    answer: "We act as your global legal architects. We work alongside UAE-based law firms to ensure that your local Wills (DIFC or ADJD) are in perfect harmony with your Indian estate plan. Our expertise in the Indian Succession Act complements the local UAE knowledge: giving you a robust: 360 degree legal shield that covers your entire global footprint."
  }
];

// Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.amalegalsolutions.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Will Drafting for Indians in Dubai", "item": "https://www.amalegalsolutions.com/will-drafting-for-indians-living-in-dubai" }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Will Drafting for Indians Living in Dubai: The Complete NRI Estate Guide",
  "description": "Comprehensive legal guide for NRIs and OCIs in Dubai and the UAE. Learn how to secure your Indian properties: manage UAE assets through DIFC and ADJD Wills: and navigate cross-border succession laws effectively.",
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
  "name": "Will Drafting for Indians in Dubai",
  "image": "https://www.amalegalsolutions.com/services/will-banner.jpg",
  "description": "Expert legal assistance for Indians in Dubai and the UAE to draft registered Wills for Indian and UAE assets: avoiding Sharia defaults and Indian probate delays.",
  "brand": { "@type": "Brand", "name": "AMA Legal Solutions" },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1480"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Rahul Mehra" },
      "reviewBody": "As an NRI in Dubai for 15 years: I were always worried about my properties in Gurgaon. AMA Legal Solutions helped me draft separate Wills for my UAE and Indian assets. The process was professional and completely stress-free."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Priyanka Sharma" },
      "reviewBody": "Highly recommended for families in the UAE. They explained the importance of guardianship clauses in our DIFC Will and handled our Indian property registration remotely. Truly experts in cross-border law."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Vikram Sethi" },
      "reviewBody": "Excellent service. Their understanding of the interface between UAE Non-Muslim Wills and the Indian Succession Act is unmatched. They saved my family from potential legal complications."
    }
  ]
};

export const metadata = {
  title: "Will Drafting for Indians Living in Dubai | #1 UAE NRI Estate Lawyers",
  description: "Secure your legacy across Dubai and India. Expert Will drafting for Indians in the UAE. DIFC: ADJD: and Indian registered Wills. Avoid Sharia defaults and Indian court delays.",
  keywords: [
    "will drafting for indians in dubai",
    "nri will for indian property dubai",
    "difc will for non-muslims",
    "adjd will registration uae",
    "indian succession law for nris in dubai",
    "estate planning for indians in uae",
    "registration of indian will in dubai"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/will-drafting-for-indians-living-in-dubai',
  },
};

export default function WillDraftingDubaiPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "uae-legal-reforms", title: "UAE Legal Reforms" },
    { id: "sharia-vs-civil", title: "Sharia vs Civil Law" },
    { id: "difc-adjd-wills", title: "DIFC & ADJD Wills" },
    { id: "indian-inheritance", title: "Indian Inheritance" },
    { id: "separate-will-strategy", title: "Separate Wills Strategy" },
    { id: "guardianship", title: "Guardianship Matters" },
    { id: "bank-accounts", title: "NRE/NRO Management" },
    { id: "registration-process", title: "Registration Guide" },
    { id: "revocation-trap", title: "Avoid Revocation Trap" },
    { id: "digital-estate", title: "Digital Estate" },
    { id: "why-choose-us", title: "Why AMA Legal?" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Will Drafting for Indians in Dubai", href: "/will-drafting-for-indians-living-in-dubai" },
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
               Will Drafting for <span className="text-[#D2A02A]">Indians Living in Dubai</span>
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-4xl mx-auto text-gray-200 leading-relaxed">
              Professional cross-border estate planning for NRIs and OCIs in the UAE. Protect your Dubai assets and Indian properties with legally registered Wills. Avoid jurisdictional conflicts and secure your family's future.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get Your Professional Strategy Call
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="lg:hidden flex flex-col gap-3 mb-6 mt-2">
            <p className="text-sm font-semibold mb-2" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Corporate Grade Protection At Your Fingertips</p>
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
                
                {/* 1. Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Crossroads of Legacy: Indian Expatriates in the UAE</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Dubai and the wider UAE have become the second home for millions of Indians who have contributed significantly to the region's meteoric rise. From the sprawling skyscrapers of Dubai Marina to the business districts of Abu Dhabi: the Indian diaspora has built vast empires: professional reputations: and significant financial reserves. However: this success across borders comes with a silent: often ignored complexity: the challenge of estate planning across two distinct and powerful legal systems. For an Indian living in Dubai: a life well lived must be capped by a legacy well protected.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    Many expatriates live with the misconception that their Indian assets are naturally protected or that their UAE wealth will be distributed according to their cultural preferences by default. The reality is far more rigid. In the absence of a professionally drafted: jurisdiction specific Will: your assets in Dubai may be subjected to statutory freezes: while your properties in India could become the subject of decade-long succession battles in civil courts. THE GULF between your intentions and the legal outcomes can be vast and devastating for your heirs.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    <strong>Will drafting for Indians living in Dubai</strong> is not merely a task of listing assets: it is an act of legal architecture. It requires a deep understanding of the Sharia-inspired framework of the UAE and the secular yet multi-religious tapestry of the Indian Succession Act. As the UAE introduces progressive reforms for non-Muslims: the window of opportunity to secure your family's future has never been clearer. At AMA Legal Solutions: we specialize in bridging these two worlds: ensuring that your hard-earned wealth remains a source of comfort for your family rather than a cause of legal trauma.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Whether it is your luxury villa in Jumeirah: your ancestral land in Punjab: or your NRE savings: each asset requires a specific legal key to be unlocked for the next generation. Our mission is to provide you with those keys: crafted with precision: registered with authority: and designed to withstand the highest levels of judicial scrutiny. Your legacy deserves the protection of experts who understand the weight of your cross-border existence.
                  </p>
                </section>

                {/* 2. UAE Legal Reforms */}
                <section id="uae-legal-reforms" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Renaissance of UAE Inheritance Laws: What NRIs Must Know</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 mb-4 md:mb-8 rounded-r-lg">
                    <p className="text-sm md:text-lg text-blue-900 italic">
                      "Recent reforms in the UAE have transformed inheritance from a source of uncertainty into a pillar of stability for expatriate families."
                    </p>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    The legal landscape for non-Muslims in the UAE has undergone a historic transformation. For years: many expatriates feared that Sharia-based inheritance rules would apply by default to their UAE assets. While Sharia remains a core part of the legal fabric: the UAE government has introduced landmark legislation: most notably the Civil Personal Status Law: to provide a more familiar: civil-law-based framework for non-Muslim residents. This shift is designed to enhance the UAE's position as a global hub for talent and long term residency.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Under these new reforms: non-Muslims have the right to register Wills at specialized centers such as the Dubai International Financial Centre (DIFC) Wills Service Centre or the Abu Dhabi Judicial Department (ADJD). These Wills allow for greater freedom in asset distribution: the appointment of guardians for minor children: and a faster: more predictable probate process. The ability to choose the law that governs your UAE estate is a privilege that every Indian expatriate should exercise to avoid the default statutory rules.
                  </p>
                </section>

                {/* 3. Sharia vs Civil Law */}
                <section id="sharia-vs-civil" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Sharia Law vs. Civil Personal Status: Navigating the Choice</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-4 md:mb-8 text-gray-700 font-medium">
                    Understanding the default inheritance rules in the UAE is essential for every NRI family. In the absence of a registered Will: the distribution of assets may follow traditional principles that might not align with your specific family needs:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3">Statutory Asset Freezes</h3>
                      <p className="text-gray-700 text-xs md:text-base">
                        Upon the death of a resident: bank accounts (including joint accounts) and properties are typically frozen until the court issues an inheritance certificate. A registered Will can significantly shorten this period.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3">Fixed Heir Percentages</h3>
                      <p className="text-gray-700 text-xs md:text-base">
                        Default rules often distribute assets in fixed percentages to a wide range of relatives. A Will allows you to prioritize your spouse: children: or specific beneficiaries according to your own values.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3">Guardianship Vulnerability</h3>
                      <p className="text-gray-700 text-xs md:text-base">
                        Without a specific legal directive: the local courts will decide on the guardianship of minor children based on statutory guidelines. A Will ensures your chosen guardians are legally recognized immediately.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-base md:text-xl font-bold text-[#D2A02A] mb-2 md:mb-3">Administrative Delays</h3>
                      <p className="text-gray-700 text-xs md:text-base">
                        Navigating the court system without a registered Will can take months or even years: leaving your family in a state of financial and emotional limbo during their most difficult time.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 4. DIFC & ADJD Wills */}
                <section id="difc-adjd-wills" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 font-sans">The Power Centers: DIFC and ADJD Will Registries</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    For Indians in the UAE: choosing the right registry is a strategic decision based on the location and complexity of their assets. Both the DIFC and ADJD offer excellent: secure environments for non-Muslim Wills.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-4 text-left border-b border-gray-200 text-[#D2A02A] w-1/2 font-black uppercase text-xs tracking-widest">DIFC Wills Service Centre</th>
                          <th className="p-4 text-left border-b border-gray-200 text-[#D2A02A] w-1/2 font-black uppercase text-xs tracking-widest">Abu Dhabi Non-Muslim Wills</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="p-4 align-top">
                            <ul className="list-disc pl-4 space-y-3 text-gray-700 text-sm md:text-base">
                              <li><strong>Common Law System:</strong> Based on English law principles: providing high familiarity for those used to Western legal systems.</li>
                              <li><strong>English Language:</strong> The entire process: from drafting to registration and probate: is conducted in English.</li>
                              <li><strong>Specific for DIFC:</strong> Highly recommended if your primary real estate holdings or business interests are within the DIFC zone.</li>
                            </ul>
                          </td>
                          <td className="p-4 align-top bg-gray-50">
                            <ul className="list-disc pl-4 space-y-3 text-gray-700 text-sm md:text-base">
                              <li><strong>UAE-Wide Validity:</strong> A Will registered with the ADJD is automatically recognized across all seven Emirates.</li>
                              <li><strong>Cost Effective:</strong> Often more accessible for a wider range of the expatriate community while providing robust protection.</li>
                              <li><strong>Bilingual Process:</strong> Documents are typically executed in both Arabic and English: ensuring seamless integration with local courts.</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* 5. Indian Inheritance */}
                <section id="indian-inheritance" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Securing Your Indian Roots: The Hindu Succession Act</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    While you live in the gleaming towers of Dubai: your family legacy in India remains governed by the <strong>Indian Succession Act 1925</strong> and your respective personal laws. For the majority of the diaspora: the **Hindu Succession Act (HSA) 1956** is the governing statute. Understanding the distinction between your different types of assets in India is the first step toward a bulletproof Will.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-gray-900 text-lg mb-2 underline decoration-[#D2A02A] decoration-2">Self-Acquired Assets</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Modern apartments in Bangalore or investments in the Indian stock market bought with your UAE earnings. You have absolute freedom to bequeath these as you choose: provided your Will is technically sound.</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <h4 className="font-bold text-gray-900 text-lg mb-2 underline decoration-[#D2A02A] decoration-2">Coparcenary Interest</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Your share in ancestral properties passed down through generations. Your Will must accurately identified your specific portion of the family wealth to be legally enforceable in an Indian court.</p>
                    </div>
                  </div>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    A common error for NRIs in Dubai is assuming that their UAE registered Will can easily transfer Indian agricultural land or ancestral bungalows. India's land registries are notoriously bureaucratic: and they frequently reject foreign documents that do not conform to the specific templates and registration standards of the local Sub-Registrar. Our drafting ensures that your Indian assets are handled with the level of detail that Indian authorities require.
                  </p>
                </section>

                {/* 6. Separate Wills Strategy */}
                <section id="separate-will-strategy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Case for the Separate Jurisdictional Wills Strategy</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    At AMA Legal Solutions: we firmly advocate for the **Separate Wills Strategy** for all Indian expatriates in the UAE. Attempting to use a single "Global Will" for both Dubai and India is a recipe for legal gridlock. Here is why separate documents are a necessity:
                  </p>
                  <div className="bg-gray-100 p-6 md:p-10 rounded-2xl border border-gray-200 my-6">
                      <ul className="space-y-4">
                        <li className="flex gap-3">
                          <span className="text-[#D2A02A] font-bold">●</span>
                          <p className="text-gray-800 text-sm md:text-lg leading-relaxed"><strong>Parallel Administration:</strong> Your UAE executor can unlock bank accounts in Dubai while your Indian executor handles property mutation in India simultaneously: cutting the resolution time by years.</p>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-[#D2A02A] font-bold">●</span>
                          <p className="text-gray-800 text-sm md:text-lg leading-relaxed"><strong>Specific Legal Terminology:</strong> A document written for the DIFC Courts uses different terminology than a document meant for a Sub-Registrar in Ludhiana or Hyderabad. Separate Wills allow for technical precision in both languages.</p>
                        </li>
                        <li className="flex gap-3">
                          <span className="text-[#D2A02A] font-bold">●</span>
                          <p className="text-gray-800 text-sm md:text-lg leading-relaxed"><strong>Lower Costs:</strong> Avoiding the need to "legalize" and "authenticate" a single document for use in another country multiple times can save thousands of dirhams in administrative and translation fees.</p>
                        </li>
                      </ul>
                  </div>
                </section>

                {/* 7. Guardianship */}
                <section id="guardianship" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Guardianship: Protecting Your Most Precious Assets</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    For Indian families with young children in the UAE: guardianship is often the primary motivator for drafting a Will. In the event of a tragedy affecting both parents: the UAE courts must intervene to decide on the care of minor children. Without a registered Will: the outcome is uncertain.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700 italic border-l-4 border-[#D2A02A] pl-6 bg-gray-50 py-4">
                    Our Will drafting services include the appointment of Permanent Guardians (typically relatives in India) and Interim Guardians (trusted friends in the UAE) who can take immediate custody while travel and legal arrangements are finalized. This ensures that your children are never placed in a position of vulnerability.
                  </p>
                </section>

                {/* 8. NRE/NRO Management */}
                <section id="bank-accounts" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Succession of NRE/NRO Accounts: Moving Beyond Nominations</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    A major gap in NRI estate planning is the reliance on bank nominations. In Indian law: a nominee is merely a "trustee" who is authorized to receive funds but is not the legal owner. This means that other legal heirs can still claim those funds: leading to bitter family disputes. A professionally drafted Will provides the definitive legal title: superseding any nomination and ensuring your savings go exactly where you intended.
                  </p>
                </section>

                {/* 9. Registration Process */}
                <section id="registration-process" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Authentication Journey: Consulates and Sub-Registrars</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    Executing an Indian Will in the UAE requires a specific authentication process to be recognized by Indian courts. We guide you through each step of this "Triple-Lock" security system:
                  </p>
                   <div className="bg-gray-900 p-8 md:p-12 rounded-[2rem] text-white">
                        <h4 className="text-[#D2A02A] font-black text-xl md:text-2xl mb-6 uppercase tracking-wider">The Triple-Lock Security Process</h4>
                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <span className="bg-[#D2A02A] text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-black flex-shrink-0">1</span>
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed"><strong>Consular Attestation:</strong> Signing your Will before a consular officer at the Indian Consulate in Dubai provides a high level of prima facie validity for Indian authorities.</p>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span className="bg-[#D2A02A] text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-black flex-shrink-0">2</span>
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed"><strong>MOFA Legalization:</strong> For UAE-based assets: documents must be legalized by the Ministry of Foreign Affairs (MOFA) to be enforceable in local courts.</p>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span className="bg-[#D2A02A] text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-black flex-shrink-0">3</span>
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed"><strong>Indian Registration:</strong> Our team coordinates the formal registration of your Will with the Sub-Registrar in India: providing the final: unshakeable layer of legal protection.</p>
                            </div>
                        </div>
                   </div>
                </section>

                {/* 10. Revocation Trap */}
                <section id="revocation-trap" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Boilerplate Danger: Avoiding the Revocation Trap</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700 text-red-600 font-bold">
                    WARNING: Most standard legal templates include a clause that "revokes all prior Wills." If you sign a UAE Will with this clause: you may have just legally deleted your Indian Will. 
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">
                    We use specific "Conflict of Laws" provisions to ensure that your global estate operates smoothly as two independent halves of a single whole. This attention to detail is what separates a generic document from a professional estate plan.
                  </p>
                </section>

                {/* 11. Digital Estate */}
                <section id="digital-estate" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase tracking-tight">The Digital Diaspora: Successing in a Digital Age</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-8 text-gray-700 font-medium">
                    Modern wealth is more than just keys and title deeds. Your estate plan must account for your digital footprint:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-8 rounded-2xl bg-gray-50 border-2 border-transparent hover:border-[#D2A02A]/30 transition-all">
                      <div className="text-5xl mb-6">🔑</div>
                      <h3 className="font-black text-xl mb-3 text-gray-900">Private Keys</h3>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">Authorization for your executor to manage cryptocurrency portfolios and digital wallet security.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 border-2 border-transparent hover:border-[#D2A02A]/30 transition-all">
                      <div className="text-5xl mb-6">☁️</div>
                      <h3 className="font-black text-xl mb-3 text-gray-900">Cloud Storage</h3>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">Legal standing to access family photos: financial documents: and personal archives stored on global platforms.</p>
                    </div>
                  </div>
                </section>

                {/* 12. Why Choose us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 uppercase tracking-tight">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-8 text-gray-700 font-medium">
                    NRIs in Dubai require legal partners who are as global as they are. We stand at the intersection of UAE ambition and Indian heritage:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-8 rounded-2xl bg-gray-50 hover:bg-[#fffdf5] border-2 border-transparent hover:border-[#D2A02A]/30 transition-all">
                      <div className="text-5xl mb-6">🌍</div>
                      <h3 className="font-black text-xl mb-3 text-gray-900">NRI Specialization</h3>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">Our entire firm architecture is built to serve the unique needs of the global Indian diaspora: specifically the Middle East corridor.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 hover:bg-[#fffdf5] border-2 border-transparent hover:border-[#D2A02A]/30 transition-all">
                      <div className="text-5xl mb-6">📞</div>
                      <h3 className="font-black text-xl mb-3 text-gray-900">Remote Registration</h3>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">We handle the coordination with Indian Sub-Registrars while you remain in the UAE: providing a completely frictionless experience.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 hover:bg-[#fffdf5] border-2 border-transparent hover:border-[#D2A02A]/30 transition-all">
                      <div className="text-5xl mb-6">🔒</div>
                      <h3 className="font-black text-xl mb-3 text-gray-900">Holistic Shield</h3>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">We don't just draft documents: we build legal shields that cover real estate: bank accounts: and family protection requirements.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Voices of Trust: Our Clients in the UAE</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Drafting our Wills with AMA was a revelation. Their understanding of both Dubai and Indian laws gave us the peace of mind we've been seeking for a decade. The remote registration for our Indian property was seamless."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Rahul Mehra</p>
                          <p className="text-sm text-gray-500">Entrepreneur, Dubai Marina</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "The team at AMA Legal Solutions are true professionals. They explained the complexities of Sharia law and the new civil reforms in a way that empowered our family. Truly the gold standard for NRI estate planning."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">P</div>
                        <div>
                          <p className="font-bold text-gray-900">Priyanka Sharma</p>
                          <p className="text-sm text-gray-500">Finance Manager, Business Bay</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32 pt-10">
                  <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-10 border-b-2 border-[#D2A02A]/20 pb-4">
                     Succession Intelligence: <span className="text-[#D2A02A] text-sm">NRI DESK UAEXINDIA</span>
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
                    UAE Emirates <span className="text-[#D2A02A]">We Serve</span>
                  </h2>
                  <p className="text-gray-600 mb-10 text-sm md:text-lg leading-relaxed max-w-4xl">
                    Our cross-border legal architects provide comprehensive will drafting and estate planning services across all 7 Emirates of the UAE, ensuring your local assets and Indian properties are structurally protected.
                  </p>
                  
                  <div className="space-y-12">
                    {[
                      {
                        country: "United Arab Emirates",
                        flag: "🇦🇪",
                        states: ["Abu Dhabi", "Dubai", "Sharjah", "Ajman", "Umm Al-Quwain", "Ras Al Khaimah", "Fujairah"]
                      }
                    ].map((item, idx) => (
                      <div key={idx} className="group">
                        <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-3">
                          <span className="text-2xl">{item.flag}</span>
                          All 7 Emirates
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
                    <h2 className="text-2xl md:text-6xl font-black mb-6 md:mb-8 leading-tight tracking-tighter">Your Legacy is Global.<br /><span className="text-[#D2A02A]">Protect it with Authority.</span></h2>
                    <p className="text-sm md:text-2xl opacity-90 mb-10 md:mb-16 max-w-4xl mx-auto leading-relaxed font-light">
                      Do not leave your cross-border wealth to chance. Secure your assets in Dubai and India with a professionally architected estate plan today. Empower your heirs with clarity and legal soundess.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                      <Link href="/contact" className="w-full sm:w-auto">
                        <button className="w-full bg-[#D2A02A] hover:bg-[#b88a22] text-white font-black py-4 px-10 md:py-6 md:px-16 rounded-full transition-all transform hover:scale-105 shadow-[0_20px_50px_rgba(210,160,42,0.3)] text-base md:text-2xl">
                          Initiate My Estate Plan
                        </button>
                      </Link>
                      <a href="tel:+918700343611" className="w-full sm:w-auto">
                        <button className="w-full bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/5 text-white font-black py-4 px-10 md:py-6 md:px-16 rounded-full transition-all text-sm md:text-2xl">
                          Call Specialist: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-8 md:mt-12 text-xs md:text-lg opacity-60 font-medium italic">
                      Zero-Tolerance Compliance • International Legal Standards • Expert NRI Attornies
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 group transition-all hover:border-[#D2A02A]/30">
                  <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tighter leading-tight italic">Global Asset<br />Vulnerability?</h3>
                  <p className="text-gray-500 mb-8 text-sm leading-relaxed font-medium">
                    Get an immediate legal assessment of your cross-border asset exposure from our senior NRI succession desk.
                  </p>
                  <a href="tel:+918700343611" className="block w-full bg-[#D2A02A] text-white text-center py-4 rounded-2xl font-black hover:bg-[#b88a22] transition-colors mb-4 shadow-[0_10px_20px_rgba(210,160,42,0.2)]">
                    Call +91-8700343611
                  </a>
                  <Link href="/contact" className="block w-full border-2 border-[#D2A02A] text-[#D2A02A] text-center py-4 rounded-2xl font-black hover:bg-[#D2A02A] hover:text-white transition-all">
                    Request Strategy Note
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
                  <p className="text-[10px] text-gray-400 mb-8 font-black uppercase tracking-widest opacity-80">MIDDLE EAST NRI HUB</p>
                  <p className="text-xs text-blue-50/70 mb-8 font-medium leading-relaxed">Secure your Indian heritage and Dubai empire from your smartphone. Direct access to cross-border legal experts.</p>
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

import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/newcomp/Footer";

// FAQ data for Gurugram
const faqs = [
  {
    question: "How do I send a legal notice to a builder in Gurugram?",
    answer: "Given the high volume of real estate development in Gurugram, sending a notice to a builder for delay in possession or poor construction quality is very common. You should gather all communication, allotment letters, and receipts. A legal notice drafted by a Gurugram lawyer should cite the RERA Haryana (HRERA) provisions and the specific clauses of your Buyer's Agreement. It is typically sent via Registered Post AD to the builder's local office in Cyber City or their registered corporate address."
  },
  {
    question: "What are the common courts for filing cases in Gurugram?",
    answer: "If a legal notice remains unresolved, cases are typically filed in the District and Sessions Court, Gurugram, located in the Judicial Complex. For consumer-related matters, you would approach the District Consumer Disputes Redressal Commission in Gurugram. High-value matters may eventually reach the Punjab and Haryana High Court in Chandigarh, but most initial litigation starts within the city's district courts."
  },
  {
    question: "Can I send a legal notice for unpaid salary to a company in Gurugram's Cyber City?",
    answer: "Absolutely. Gurugram's IT and corporate hub sees many employment disputes. A legal notice for recovery of dues, unpaid salary, or bonus can be sent to the company. It acts as a final warning before you approach the Labour Court or file a civil suit for recovery. Most companies settle after receiving a formal notice on a Law Firm's letterhead to avoid damaging their corporate reputation."
  },
  {
    question: "How much does it cost to send a legal notice in Gurugram?",
    answer: "Legal fees in Gurugram are generally comparable to Delhi, ranging from ₹3,500 to ₹10,000 for standard recovery and matrimonial notices. More complex property-related or builder-buyer dispute notices involving HRERA compliance may range from ₹7,500 to ₹15,000. At AMA Legal Solutions, we offer transparent pricing including drafting, legal consultation, and dispatch."
  },
  {
    question: "Is it mandatory to send a legal notice for a cheque bounce case in Gurgaon?",
    answer: "Yes, under Section 138 of the Negotiable Instruments Act, it is a mandatory statutory requirement to send a legal notice to the drawer within 30 days of receiving the 'cheque return memo' from the bank. The notice should give the recipient 15 days to pay the amount. Failure to send this notice correctly within the timeframe will render your case inadmissible in the Gurugram courts."
  },
  {
    question: "What areas in Gurugram do you cover for legal notice services?",
    answer: "AMA Legal Solutions covers the entire Gurugram district including DLF Phases 1-5, Cyber City, Udyog Vihar, Sohna Road, Golf Course Road, Palam Vihar, Old Gurgaon, and industrial areas like Manesar. We provide both physical dispatch and digital tracking for all these locations."
  },
  {
    question: "How long should I wait after sending the legal notice?",
    answer: "Standard practice is to wait for 15 to 30 days depending on the nature of the dispute and the time mentioned in the notice. During this period, the recipient might reach out for a settlement or send a reply. If no response is received by the deadline, you have the legal right to proceed with filing a suit in the Gurugram district court."
  },
  {
    question: "Can I send a legal notice for a property dispute in Old Gurgaon?",
    answer: "Yes, property disputes involving ancestral property, partition, or rent control in older parts of Gurgaon are very common. A legal notice helps formalize your claim and can often prevent a long-drawn-out litigation in the civil courts."
  },
  {
    question: "Do I need to visit your office in Gurugram to send a notice?",
    answer: "While we have offices to assist you, most of the process can be handled online. You can share your documents via email or WhatsApp, consult with our lawyers over a call, and we will share the draft for your approval before dispatching it."
  },
  {
    question: "What happens if a Gurugram company denies receiving the notice?",
    answer: "We send notices via Registered Post with Acknowledgment Due (RPAD) and Speed Post. The delivery proof provided by the Department of Posts is legally binding. If the company 'refuses' delivery, it is considered 'Deemed Service' by the courts in Gurugram, and the legal process can proceed accordingly."
  },
  {
    question: "Can I send a legal notice to a tenant for eviction in Gurgaon?",
    answer: "Yes, under the Haryana Urban (Control of Rent and Eviction) Act, 1973, you can send a legal notice to a tenant for non-payment of rent, subletting, or personal necessity. The notice period is usually 30 days. It is critical to cite the correct grounds for eviction to ensure the petition is maintainable in the Gurugram Rent Controller's office."
  },
  {
    question: "Is an email legal notice valid in Gurgaon courts?",
    answer: "Yes, under the Information Technology Act, 2000, legal notices sent via email are valid and recognized by the Gurugram courts. However, we always recommend following up with a physical copy via Registered Post to ensure there is a clear paper trail and proof of delivery, which is often easier to present as evidence during trial."
  },
  {
    question: "What documents do I need for a property dispute notice in Sector 56 or 57?",
    answer: "You will need the Sale Deed, Conveyance Deed, Property Tax receipts, and any correspondence with the local Huda (HSVP) or the Municipal Corporation of Gurugram (MCG). For apartment owners, the BBA and maintenance receipts are also essential. Our lawyers will review these to ensure the notice details the chain of ownership accurately."
  },
  {
    question: "How do I deal with a fake legal notice received in Gurgaon?",
    answer: "If you have received a legal notice that you believe is based on false facts, do not ignore it. Ignoring a notice can be seen as an admission of facts in court. You should consult a Gurugram lawyer immediately to draft a 'Reply to Legal Notice' that denies the false allegations and sets the record straight. A strong reply can often nip the dispute in the bud."
  },
  {
    question: "Can I claim the cost of sending the legal notice from the other party?",
    answer: "Yes, it is standard practice to include a clause in the legal notice demanding that the recipient pay the legal fees incurred by you for sending the notice. While this is not always recoverable in every settlement, it adds pressure on the recipient to resolve the matter and compensate you for the trouble they have caused."
  }
];

// Content for Gurugram
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.amalegalsolutions.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Send Legal Notice in Gurugram", "item": "https://www.amalegalsolutions.com/send-legal-notice-in-gurugram" }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Steps to Send a Legal Notice in Gurugram: Professional 2026 Guide",
  "description": "The ultimate guide for residents and businesses in Gurgaon to send legal notices for property, builder-buyer disputes, and recovery of money.",
  "image": "https://www.amalegalsolutions.com/future.png",
  "author": { "@type": "Organization", "name": "AMA Legal Solutions" },
  "datePublished": "2026-01-28"
};

const faqSchema = {
  "@context": "https://schema.org",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Legal Notice Services in Gurugram",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "620"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Rohan Mehra" },
      "reviewBody": "Excellent service for my builder dispute in Sector 57. The notice was drafted professionally and I got my refund within a month."
    }
  ]
};

export const metadata = {
  title: "Send Legal Notice in Gurugram | Expert Gurgaon Lawyers",
  description: "Send a professional legal notice in Gurugram for property disputes, builder delays, money recovery, and corporate issues. Fast drafting and dispatch by AMA Legal Solutions.",
  keywords: [
    "send legal notice in Gurugram",
    "legal notice lawyers Gurgaon",
    "builder buyer dispute notice Gurgaon",
    "property lawyer Gurugram",
    "cheque bounce notice Gurgaon",
    "HRERA legal notice Gurugram",
    "money recovery lawyer Gurgaon",
    "Cyber City legal services",
    "DLF legal notice lawyers",
    "District Court Gurugram lawyers"
  ],
  alternates: { canonical: 'https://www.amalegalsolutions.com/send-legal-notice-in-gurugram' }
};

export default function LegalNoticeGurugramPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "millennium-city", title: "Gurugram's Legal Landscape" },
    { id: "common-disputes", title: "Common Disputes" },
    { id: "builder-buyer", title: "Builder-Buyer Issues" },
    { id: "procedure", title: "Sending Procedure" },
    { id: "costs", title: "Fees & Pricing" },
    { id: "hrera", title: "HRERA Compliance" },
    { id: "why-ama", title: "Why Choose Us" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Send Legal Notice in Gurugram", href: "/send-legal-notice-in-gurugram" },
  ];

  return (
    <>
      <Script id="b-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="a-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="f-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="r-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: "url('/newAssets/gurugram-skyline.jpg')", backgroundColor: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-24 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Expert <span className="text-[#D2A02A]">Legal Notice</span> Services in Gurugram
            </h1>
            <p className="text-base md:text-xl mb-6 md:mb-10 max-w-4xl mx-auto text-gray-200">
              Gurugram's leading law firm for builder disputes, financial recovery, and corporate resolution. Secure your rights in the Millennium City today.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-2xl text-base md:text-lg">
                Talk to a Gurgaon Expert
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-8xl py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_250px] gap-10 items-start">
            {/* Sidebar TOC */}
            <div className="hidden lg:block sticky top-28">
              <TableOfContents sections={tocSections} orientation="vertical" />
              <div className="mt-8 p-4 bg-[#fff9e6] rounded-xl border border-[#D2A02A] border-opacity-30">
                <p className="text-xs font-semibold text-[#D2A02A] uppercase tracking-wider mb-2">Gurgaon Reach</p>
                <p className="text-sm font-bold text-gray-900">Cyber City to Manesar</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['DLF Phase 1-5', 'Sohna Road', 'Udyog Vihar', 'Golf Course', 'Manesar'].map(area => (
                    <span key={area} className="text-[10px] bg-white px-2 py-1 rounded-md border border-gray-100 shadow-sm">{area}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="min-w-0">
              <div className="lg:hidden mb-8 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-5 md:p-10 rounded-3xl shadow-sm space-y-8 md:space-y-12 text-justify">
                
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6">Protecting Your Interests in Gurugram</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Gurugram, often hailed as India's Millennium City, has transformed from a sleepy suburb of Delhi into a global corporate and residential powerhouse. With its glitzy skyscrapers in <strong>Cyber City</strong>, sprawling residential complexes along <strong>Sohna Road</strong>, and massive industrial hubs in <strong>Manesar</strong>, Gurugram is the engine of Haryana's economy. However, this rapid growth has also brought about a high volume of complex legal disputes. From homebuyers struggling with real estate giants to corporate employees facing contract breaches, the legal needs of Gurugram's citizens are unique and demanding.
                    </p>
                    <p>
                      At <strong>AMA Legal Solutions</strong>, we specialize in helping individuals and businesses navigate these challenges. A strategically drafted <strong>legal notice in Gurugram</strong> is often the first and most vital step toward achieving justice. In a city where time is money, avoiding lengthy court battles through professional pre-litigation communication is not just a legal choice—it is a smart business decision.
                    </p>
                    <p>
                      Our Gurugram-based legal team understands the specific nuances of Haryana's legal system, including the workings of the <strong>Gurugram District Courts</strong>, the <strong>Haryana Real Estate Regulatory Authority (HRERA)</strong>, and local consumer forums. Whether you are dealing with a property dispute in DLF Phase 3 or a financial recovery matter in Udyog Vihar, our 3500+ word guide is designed to empower you with the knowledge needed to send a powerful legal notice today.
                    </p>
                  </div>
                </section>

                <section id="millennium-city" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6">The Unique Legal Landscape of Gurgaon</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      What sets Gurugram apart from other cities is its hybrid nature. It is a city of high-stakes corporate contracts, multi-crore real estate deals, and a massive floating population of professionals. This diversity requires a lawyer who can draft a <strong>legal notice in Gurgaon</strong> that addresses multiple jurisdictions—be it civil, criminal, or specialized tribunals.
                    </p>
                    <p>
                      Unlike other districts in Haryana, Gurugram's legal disputes often involve multi-national corporations (MNCs) headquartered in <strong>One Horizon Center</strong> or <strong>Cyber Hub</strong>. These entities have robust legal departments, and a generic, poorly-worded notice will simply be ignored. Your legal notice must be drafted with precision, citing exact Haryana state amendments and relevant Supreme Court precedents to command the attention it deserves.
                    </p>
                    <p>
                      Furthermore, the <strong>District and Sessions Court, Gurugram</strong>, is one of the busiest in the country. To avoid getting lost in the judicial backlog, a legal notice acts as a gateway. If drafted correctly, it creates a record of your attempt to resolve the matter, which is looked upon favorably by Gurugram judges if you eventually have to file a suit.
                    </p>
                    <p>
                      In addition to the district courts, Gurugram is home to several specialized tribunals. The <strong>Haryana Real Estate Regulatory Authority (HRERA) Gurugram</strong> bench, located in Sector 18, is often the first stop for thousands of homebuyers. Similarly, the <strong>Consumer Disputes Redressal Commission</strong> in Gurugram handles matters related to deficiency in service by insurance companies, electronic brands, and local vendors. A professional legal notice must be tailored to the specific tribunal that will eventually hear the case. For instance, a notice for a RERA complaint must emphasize 'violation of Section 18 of the RERA Act,' while a consumer notice must focus on 'Unfair Trade Practices' under the Consumer Protection Act, 2019.
                    </p>
                    <p>
                      The city's connectivity to the <strong>Punjab and Haryana High Court</strong> in Chandigarh also means that local lawyers must be prepared for the possibility of the matter escalating to the state level. At AMA Legal Solutions, we act as a bridge, ensuring that your initial communication in Gurgaon is robust enough to stand scrutiny even at the High Court or Supreme Court level.
                    </p>
                  </div>
                </section>

                <section id="common-disputes" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6">Common Legal Disputes in Gurugram</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Our firm handles a wide array profile of cases in Gurugram. The following are the most frequent scenarios where a legal notice is dispatched:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
                      <li className="bg-gray-50 p-5 rounded-2xl flex items-start shadow-sm border border-gray-100">
                        <span className="text-[#D2A02A] text-2xl mr-4">🏠</span>
                        <div>
                          <strong>Real Estate Conflicts:</strong> Builders failing to deliver projects on time, hidden charges, or change in floor plans without consent.
                        </div>
                      </li>
                      <li className="bg-gray-50 p-5 rounded-2xl flex items-start shadow-sm border border-gray-100">
                        <span className="text-[#D2A02A] text-2xl mr-4">💸</span>
                        <div>
                          <strong>Financial Recovery:</strong> Cheque bounce cases (Sec 138 NI Act) and recovery of unpaid consultancy fees or business loans.
                        </div>
                      </li>
                      <li className="bg-gray-50 p-5 rounded-2xl flex items-start shadow-sm border border-gray-100">
                        <span className="text-[#D3A02A] text-2xl mr-4">💼</span>
                        <div>
                          <strong>Corporate Matters:</strong> Breach of Non-Disclosure Agreements (NDAs), non-compete clauses, and service level agreement (SLA) violations.
                        </div>
                      </li>
                      <li className="bg-gray-50 p-5 rounded-2xl flex items-start shadow-sm border border-gray-100">
                        <span className="text-[#D2A02A] text-2xl mr-4">🤝</span>
                        <div>
                          <strong>Matrimonial Notices:</strong> Dealing with restitution of conjugal rights or formal communication regarding mutual separation.
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="builder-buyer" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6">Specific Focus: Builder-Buyer Disputes in Gurgaon</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Gurugram's real estate market is notorious for delays. From projects in <strong>Sector 65</strong> to those on the <strong>Dwarka Expressway</strong>, thousands of homebuyers are stuck in a limbo. Sending a legal notice to a builder is not just about complaining; it is about building a case for <strong>HRERA Haryana</strong>.
                    </p>
                    <p>
                      A professional <strong>legal notice lawyer in Gurugram</strong> will ensure that your notice mentions:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>The exact clause of the BBA (Builder Buyer Agreement) that has been violated.</li>
                      <li>Calculated interest for the period of delay under RERA rules.</li>
                      <li>Demand for 'Occupation Certificate' (OC) or 'Possession Letter'.</li>
                      <li>Warning about escalating the matter to the Real Estate Regulatory Authority.</li>
                    </ul>
                    <p>
                      In our experience, a well-timed notice can often push a developer to offer a settlement or expedite the possession to avoid a heavy penalty from the regulator.
                    </p>
                    <p>
                      Beyond delays, many Gurgaon residents face issues with <strong>maintenance charges</strong> and <strong>undivided share of land</strong>. Builders often charge exorbitant amounts for 'Common Area Maintenance' (CAM) without providing commensurate services. A legal notice can demand transparency in accounts and a breakdown of these charges. If you are a resident of a township like <strong>Emaar MGF</strong> or <strong>DLF Ultima</strong>, you might also be facing issues with GST on maintenance or club membership fees. Our lawyers are well-versed in these specific local real estate conflicts and can draft notices that successfully challenge these unfair practices.
                    </p>
                    <p>
                      Another growing area of dispute in Gurugram is <strong>illegal construction</strong> or <strong>encroachment</strong> in gated communities. If your neighbor or the builder has made alterations that violate the sanctioned building plan, a legal notice is your first line of defense before approaching the <strong>Directorate of Town and Country Planning (DTCP)</strong> or the MCG. These notices must be backed by technical evidence, such as maps and sanctioned layouts, which our team helps you organize.
                    </p>
                  </div>
                </section>

                <section id="procedure" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6">How to Send a Legal Notice in Gurugram</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      The procedure followed at AMA Legal Solutions for Gurugram clients is streamlined and optimized for speed:
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 my-10">
                      {[
                        { step: "01", title: "Evidence Review", desc: "We review your Haryana land records, bank statements, and contracts online or at our office." },
                        { step: "02", title: "Expert Drafting", desc: "Our Gurgaon-specialist lawyers draft a rigorous notice cited with HRERA and NI Act laws." },
                        { step: "03", title: "Secure Dispatch", desc: "Sent via RPAD with a copy to our legal archives to ensure proof of delivery is maintained." }
                      ].map((item, i) => (
                        <div key={i} className="p-6 bg-gray-50 rounded-3xl border border-gray-200">
                          <div className="text-[#D2A02A] font-bold text-3xl mb-4">{item.step}</div>
                          <h4 className="font-bold mb-2 text-gray-900">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="costs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6">Transparent Costs for Legal Notices in Gurgaon</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed mb-10 text-justify">
                    <p>
                      We believe that quality legal help should be accessible to all residents of Gurugram. Here is a breakdown of our standard fee structure:
                    </p>
                    <div className="overflow-x-auto my-8 shadow-xl rounded-3xl border border-gray-100">
                      <table className="w-full text-left bg-white text-sm md:text-base">
                        <thead className="bg-[#1a202c] text-white">
                          <tr>
                            <th className="px-6 py-4 font-bold">Nature of Notice</th>
                            <th className="px-6 py-4 font-bold">Fee Range</th>
                            <th className="px-6 py-4 font-bold">Standard Time</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr>
                            <td className="px-6 py-4 font-bold">Cheque Bounce (Sec 138)</td>
                            <td className="px-6 py-4 text-[#D2A02A] font-bold">₹3,500 - ₹5,000</td>
                            <td className="px-6 py-4">24 Hours</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-bold">Builder Refund/Possession</td>
                            <td className="px-6 py-4 text-[#D2A02A] font-bold">₹7,500 - ₹12,000</td>
                            <td className="px-6 py-4">3-5 Days</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-bold">Salary/Employment Issues</td>
                            <td className="px-6 py-4 text-[#D2A02A] font-bold">₹5,000 - ₹8,500</td>
                            <td className="px-6 py-4">2-3 Days</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>

                <section id="hrera" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6">Importance of HRERA in Gurugram Notices</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      For any real estate dispute in Gurgaon, the <strong>Haryana Real Estate Regulatory Authority (HRERA)</strong> is the ultimate watchdog. Since its inception, HRERA Gurugram has passed thousands of orders directing builders to pay interest for delays. A legal notice that doesn't mention HRERA is essentially a wasted effort. 
                    </p>
                    <p>
                      At AMA Legal Solutions, our <strong>Gurugram legal notice experts</strong> ensure that your notice is compliant with the HRERA rules and forms. This creates a solid foundation for your complaint if you eventually have to approach the authority's office at <strong>Sector 18, Gurugram</strong>.
                    </p>
                    <p>
                      It is also important to note that HRERA has separate jurisdictions for <strong>Gurugram</strong> and the <strong>Panchkula</strong> bench. Since Gurugram has its own dedicated bench (The Haryana Real Estate Regulatory Authority, Gurugram), the rules slightly differ from projects in other parts of Haryana. For example, the 'Interest on Delay' calculations must follow the State Bank of India's Marginal Cost of Funds based Lending Rate (MCLR) plus 2%. Our legal notice calculates this amount to the last decimal, ensuring that when the record is placed before the Adjudicating Officer, there is zero ambiguity about the claim amount.
                    </p>
                    <p>
                      Furthermore, a legal notice for HRERA often works better when sent as a <strong>Group Notice</strong> by multiple allottees of the same project. If you are part of a Resident Welfare Association (RWA) or a group of buyers in a project like <strong>BPTP</strong> or <strong>M3M</strong>, we can draft a collective notice that carries significant weight and demonstrates to the builder that the grievances are widespread and consistent.
                    </p>
                  </div>
                </section>

                <section id="why-ama" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6">Why AMA Legal Solutions for Gurugram?</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed mb-12">
                    <p>
                      We are not just a law firm; we are your legal partners in the Millennium City. Our advantage includes:
                    </p>
                    <div className="space-y-6">
                      <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white transition-all shadow-sm">
                        <div className="text-3xl">🏗️</div>
                        <div>
                          <h4 className="font-bold text-gray-900">Real Estate Mastery</h4>
                          <p className="text-sm text-gray-600">Deep expertise in handling Gurgaon's major developers and land disputes.</p>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white transition-all shadow-sm">
                        <div className="text-3xl">🚀</div>
                        <div>
                          <h4 className="font-bold text-gray-900">Rapid Online Process</h4>
                          <p className="text-sm text-gray-600">From Cyber City to Manesar, we handle everything digitally for your convenience.</p>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:bg-white transition-all shadow-sm">
                        <div className="text-3xl">⚖️</div>
                        <div>
                          <h4 className="font-bold text-gray-900">Proven Track Record</h4>
                          <p className="text-sm text-gray-600">Over 5,000 successful resolutions through legal notices in the Haryana region.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">Gurugram's Most Asked Legal Questions</h2>
                  <div className="grid gap-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 hover:shadow-lg transition-shadow">
                        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-start">
                          <span className="bg-[#D2A02A] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-4 shrink-0 mt-1">Q</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed pl-10">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#000000] rounded-[40px] p-8 md:p-14 text-center text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2A02A] opacity-5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                   <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 opacity-5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
                  
                  <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Ready to Resolve Your Gurgaon Dispute?</h2>
                    <p className="text-base md:text-lg opacity-80 mb-8 font-light">
                      Professional legal notices starting at ₹3,500. Don't wait for the court backlog. Take control today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-[#1a202c] font-black py-3 px-8 md:py-4 md:px-10 rounded-2xl transition-all transform hover:scale-105 shadow-xl text-base md:text-lg w-full sm:w-auto">
                          Get Free Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-white/10 backdrop-blur-md border-2 border-white/20 hover:bg-white hover:text-[#1a202c] text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-2xl transition-all text-base md:text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block space-y-10 sticky top-28">
                <div className="bg-[#1a202c] p-8 rounded-[40px] shadow-2xl relative overflow-hidden text-white border border-white/10">
                  <h3 className="text-2xl font-bold mb-4 relative z-10">Gurgaon Legal Desk</h3>
                  <p className="text-white/70 mb-8 text-base relative z-10 leading-relaxed font-light">
                    Specific expertise in Cyber City, Sohna Road, and HRERA Gurgaon.
                  </p>
                  <a href="tel:+918700343611" className="block w-full bg-[#D2A02A] text-[#1a202c] text-center py-4 rounded-[15px] font-black text-lg hover:bg-white transition-all mb-4 relative z-10">
                    +91-8700343611
                  </a>
                  <Link href="/contact" className="block w-full text-center py-3 rounded-[15px] font-bold text-base border border-white/20 hover:bg-white/10 transition-all relative z-10">
                    Free Evaluation
                  </Link>
                </div>

                <div className="p-8 bg-white rounded-[40px] shadow-sm border border-gray-100">
                  <h4 className="text-lg font-bold mb-4 text-gray-900">Gurugram Highlights</h4>
                  <div className="space-y-4">
                     <div className="flex justify-between items-center text-sm border-b pb-2">
                        <span className="text-gray-500">Builder Notice Success</span>
                        <span className="font-bold text-[#D2A02A]">72%</span>
                     </div>
                     <div className="flex justify-between items-center text-sm border-b pb-2">
                        <span className="text-gray-500">Draft Turnaround</span>
                        <span className="font-bold">24-48h</span>
                     </div>
                     <div className="flex justify-between items-center text-sm pb-2">
                        <span className="text-gray-500">Corporate Clients</span>
                        <span className="font-bold">1500+</span>
                     </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#D2A02A] to-[#b88a22] p-8 rounded-[40px] text-white">
                   <h4 className="text-xl font-bold mb-4">Track HRERA Cases</h4>
                   <p className="text-sm opacity-80 mb-6">Download our app to track your builder disputes in Gurgaon in real-time.</p>
                   <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="block mb-2 overflow-hidden rounded-xl">
                      <Image src="/newAssets/appstore.svg" alt="Play Store" width={160} height={50} className="w-full h-auto" />
                   </Link>
                   <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="block overflow-hidden rounded-xl">
                      <Image src="/newAssets/playstore.svg" alt="App Store" width={160} height={50} className="w-full h-auto" />
                   </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

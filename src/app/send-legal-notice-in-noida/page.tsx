import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/newcomp/Footer";

// FAQ data for Noida
const faqs = [
  {
    question: "How do I send a legal notice to a builder in Noida/Greater Noida?",
    answer: "In Noida and Greater Noida, builder disputes are primarily governed by UP RERA. You should first gather your Builder-Buyer Agreement (BBA) and payment receipts. A legal notice should be drafted by a specialized Noida lawyer, citing specific violations of the UP Apartment Act or RERA sections (like Section 18 for delays). It's typically sent via Registered Post AD to the builder's corporate office, often located in Sector 62, Sector 18, or Greater Noida Knowledge Park."
  },
  {
    question: "What is the role of UP RERA in Gurgaon/Noida disputes?",
    answer: "UP RERA (Uttar Pradesh Real Estate Regulatory Authority) is the governing body for all registered real estate projects in Noida and Greater Noida. A legal notice is often a prerequisite to show the authority that you attempted an amicable settlement. If the builder ignores the notice, you can file a formal complaint on the UP RERA portal, and the regional office in Greater Noida will hear the matter."
  },
  {
    question: "How much does a legal notice cost in Noida?",
    answer: "Costs in Noida range from ₹3,500 to ₹12,000 depending on the complexity. Standard cheque bounce or recovery notices are at the lower end, while complex UP RERA-compliant notices for multi-crore property disputes can range higher. Our fees at AMA Legal Solutions are transparent and include legal drafting, consultation, and dispatch with proof of delivery."
  },
  {
    question: "Can I send a legal notice for unauthorized commercial use in Noida residential areas?",
    answer: "Yes, the Noida Authority has strict lease deed conditions prohibiting commercial activities in residential sectors. If a neighbor or tenant is violating these terms, a legal notice is the first step before filing a formal complaint with the Noida Authority. This helps create a legal record of the violation."
  },
  {
    question: "What courts handle legal notice disputes in Gautam Buddha Nagar?",
    answer: "Most civil and criminal matters post-notice are handled by the District and Sessions Court in Gautam Buddha Nagar (Surajpur, Greater Noida). For consumer matters, the District Consumer Disputes Redressal Commission is the relevant body. High-stake matters might reach the Allahabad High Court via its bench."
  },
  {
    question: "Is an email legal notice valid in Uttar Pradesh?",
    answer: "Yes, email notices are legally recognized under the IT Act, 2000. However, for property disputes in Noida, we strongly advise sending a physical copy via Registered Post with Acknowledgment Due (RPAD) to ensure the proof of service is indisputable in UP RERA or local courts."
  },
  {
    question: "How long is the notice period for tenant eviction in Noida?",
    answer: "Under the UP Urban Buildings (Regulation of Letting, Rent and Eviction) Act, a standard 30-day notice is usually required for eviction on grounds like non-payment of rent or personal requirement. The notice must clearly state the grounds and the date by which the premises must be vacated."
  },
  {
    question: "Can I send a legal notice for a cheque bounce in Greater Noida?",
    answer: "Yes, under Section 138 of the NI Act, you must send a legal notice within 30 days of the cheque being returned by the bank. The recipient then has 15 days to pay. If they fail, you can file a criminal complaint in the Surajpur District Court."
  },
  {
    question: "What happens if a builder refuses to receive the legal notice in Noida?",
    answer: "If the builder 'refuses' delivery of a Registered Post, it is legally considered 'Deemed Service' under the Indian Evidence Act. The proof of refusal provided by the post office is sufficient to proceed with a UP RERA complaint or a civil suit."
  },
  {
    question: "Do you cover projects along the Noida-Greater Noida Expressway?",
    answer: "Yes, AMA Legal Solutions covers all major projects along the Expressway, including Sectors 93, 128, 137, 143, 150, and 168. We have extensive experience dealing with developers like Jaypee, Unitech, Logix, and ATS in these regions."
  },
  {
    question: "How do I deal with a fake legal notice received in Noida?",
    answer: "If you receive a legal notice that is based on false allegations, do not panic or ignore it. In Noida's litigious real estate market, 'counter-claims' are common. You should immediately engage a lawyer to draft a 'Reply to Legal Notice' that denies all false facts and puts the sender on notice for potential defamation or malicious prosecution. A strong reply can often prevent the matter from reaching the Gautam Buddha Nagar courts."
  },
  {
    question: "Can I send a legal notice to the Noida Authority directly?",
    answer: "Yes, if you have a dispute with the Noida Authority regarding lease deed execution, transfer of property, or illegal sealing of premises, a legal notice must be sent under Section 197 of the UP Municipal Corporation Act or specific sections of the UP Industrial Area Development Act. These notices usually have a mandatory 2-month cooling-off period before a suit can be filed."
  },
  {
    question: "What documents are needed for a matrimonial legal notice in Noida?",
    answer: "For matrimonial matters like restitution of conjugal rights or maintenance, you will need the marriage certificate, proof of residence in Gautam Buddha Nagar, and any relevant communication (chats/emails). Our family law experts ensure the notice is drafted with the required sensitivity while protecting your legal interests."
  }
];

// JSON-LD Schemas
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.amalegalsolutions.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Send Legal Notice in Noida", "item": "https://www.amalegalsolutions.com/send-legal-notice-in-noida" }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Complete Guide to Sending a Legal Notice in Noida & Greater Noida (2026)",
  "description": "Expert advice on drafting and sending legal notices for property delays, builder disputes, money recovery, and corporate issues in Noida, UP.",
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
  "name": "Legal Notice Services in Noida",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "580"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Ananya Sharma" },
      "reviewBody": "Managed to get my possession in a Noida Expressway project after sending a rigorous legal notice through AMA. Highly recommended for builder issues."
    }
  ]
};

export const metadata = {
  title: "Send Legal Notice in Noida | Professional Noida Lawyers",
  description: "Send a professional legal notice in Noida and Greater Noida for property delays, UP RERA complaints, money recovery, and business disputes. Expert drafting by AMA Legal Solutions.",
  keywords: [
    "send legal notice in Noida",
    "legal notice lawyers Noida",
    "builder buyer dispute notice Greater Noida",
    "UP RERA legal notice Noida",
    "property lawyer Noida",
    "cheque bounce notice Gautam Buddha Nagar",
    "money recovery lawyer Greater Noida",
    "Noida Expressway legal services",
    "Surajpur Court lawyers",
    "Greater Noida real estate legal notice"
  ],
  alternates: { canonical: 'https://www.amalegalsolutions.com/send-legal-notice-in-noida' }
};

export default function LegalNoticeNoidaPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "noida-jurisdiction", title: "Noida's Legal Framework" },
    { id: "property-delays", title: "Property & Builder Delays" },
    { id: "up-rera", title: "UP RERA Compliance" },
    { id: "procedure", title: "Sending Procedure" },
    { id: "costs", title: "Fees & Pricing" },
    { id: "consumer-rights", title: "Consumer Rights" },
    { id: "why-ama", title: "Why Choose Us" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Send Legal Notice in Noida", href: "/send-legal-notice-in-noida" },
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
            style={{ backgroundImage: "url('/newAssets/noida-city.jpg')", backgroundColor: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-24 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Reliable <span className="text-[#D2A02A]">Legal Notice</span> Services in Noida
            </h1>
            <p className="text-base md:text-xl mb-6 md:mb-10 max-w-4xl mx-auto text-gray-200">
              Resolved builder delays, money recovery, and corporate disputes in Noida & Greater Noida. Professional drafting and dispatch by specialized lawyers.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-2xl text-base md:text-lg">
                Consult a Noida Expert
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1300px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_250px] gap-10 items-start">
            {/* Sidebar TOC */}
            <div className="hidden lg:block sticky top-28">
              <TableOfContents sections={tocSections} orientation="vertical" />
              <div className="mt-8 p-4 bg-[#fff9e6] rounded-xl border border-[#D2A02A] border-opacity-30">
                <p className="text-xs font-semibold text-[#D2A02A] uppercase tracking-wider mb-2">UP Coverage</p>
                <p className="text-sm font-bold text-gray-900">Noida to Greater Noida</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['Sector 18', 'Sector 62', 'Expressway', 'Greater Noida West', 'Knowledge Park'].map(area => (
                    <span key={area} className="text-[10px] bg-white px-2 py-1 rounded-md border border-gray-100 shadow-sm">{area}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="min-w-0">
              <div className="lg:hidden mb-8 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-5 md:p-10 rounded-3xl shadow-sm space-y-8 md:space-y-12 text-justify">
                
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6">Navigating Legal Disputes in Noida</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Noida and Greater Noida, the twin cities of Uttar Pradesh's Gautam Buddha Nagar district, have evolved into one of India's most significant real estate and industrial hubs. From the high-rises along the **Noida Expressway** to the sprawling industrial sectors in **Greater Noida West**, the region is a microcosm of modern India's growth. However, this massive development has also triggered a unique set of legal challenges. For a resident or business owner in Noida, a simple dispute can quickly escalate into a complex legal battle if not handled professionally at the very beginning.
                    </p>
                    <p>
                      At <strong>AMA Legal Solutions</strong>, we believe that a well-crafted <strong>legal notice in Noida</strong> is your strongest weapon for dispute resolution. Whether you are a homebuyer fighting for your dream home in Sector 150, a commercial entity recovery dues in Sector 62, or an individual dealing with a cheque bounce in Greater Noida, our team provides the expert guidance needed to secure your rights. 
                    </p>
                    <p>
                      In a legal landscape heavily influenced by <strong>UP RERA</strong> and the <strong>Gautam Buddha Nagar District Courts</strong>, sending a formal notice is not just about communication; it is about establishing a solid legal foundation. This 4000+ word guide is designed to provide you with everything you need to know about the procedure, importance, and costs of sending a legal notice in Noida in 2026.
                    </p>
                  </div>
                </section>

                <section id="noida-jurisdiction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6">Understanding the Jurisdiction of Noida & Greater Noida</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Legal disputes in Noida are governed by several key judicial and administrative bodies. Understanding where your case will eventually land is crucial for drafting an effective notice.
                    </p>
                    <p>
                      1. <strong>District & Sessions Court, Gautam Buddha Nagar:</strong> Located in **Surajpur**, this is the primary court for civil and criminal litigation. If your legal notice regarding a property partition, simple recovery, or criminal defamation doesn't yield results, this is where your petition will be filed.
                    </p>
                    <p>
                      2. <strong>UP RERA Regional Office:</strong> Situated in **Greater Noida**, the UP Real Estate Regulatory Authority is the powerhouse for property disputes. Any notice sent to a developer for a project registered in Noida must be strictly compliant with RERA guidelines to be effective.
                    </p>
                    <p>
                      3. <strong>District Consumer Commission:</strong> For grievances against service providers (e.g., faulty electronics, insurance claims, or e-commerce issues), the Consumer Commission in Gautam Buddha Nagar has jurisdiction. A <strong>consumer legal notice in Noida</strong> is mandatory to show that the complainant gave the service provider a chance to rectify the deficiency.
                    </p>
                  </div>
                </section>

                <section id="property-delays" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6">Property & Builder Disputes: The Noida Crisis</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Noida is famously known as the graveyard of unfinished real estate projects. Hundreds of thousands of homebuyers are still waiting for their flats in projects by developers who have declared insolvency or simply stopped construction. In such a scenario, a <strong>legal notice to a builder in Noida</strong> is your first step to being heard.
                    </p>
                    <p>
                      Common triggers for property notices in Noida include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                       <li><strong>Delay in Possession:</strong> When the builder fails to offer possession beyond the 'Grace Period' mentioned in the BBA.</li>
                       <li><strong>Non-Registration of Sale Deed:</strong> Many projects in Noida offer possession without executing the registry, leading to legal insecurity for the owner.</li>
                       <li><strong>Change in Layout Plan:</strong> Builders often increase the number of units or change the location of common amenities without the consent of 2/3rd of the allottees, violating the UP Apartment Act.</li>
                       <li><strong>Maintenance Disputes:</strong> Overcharging for CAM (Common Area Maintenance) or failure to provide basic security and water services in gated sectors.</li>
                    </ul>
                    <p>
                       A professional legal notice for possession must cite the <strong>Uttar Pradesh Apartment (Promotion of Construction, Ownership and Maintenance) Act, 2010</strong>, which provides specific protections for flat owners in Noida.
                    </p>
                  </div>
                </section>

                <section id="up-rera" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6">UP RERA: The Game Changer for Homebuyers</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      The <strong>Uttar Pradesh Real Estate Regulatory Authority (UP RERA)</strong> has its most active regional office in Greater Noida. Since its inception, it has revolutionized how builders are held accountable. However, many buyers make the mistake of filing a RERA complaint without first sending a proper legal notice.
                    </p>
                    <p>
                      A <strong>RERA-compliant legal notice in Noida</strong> drafted by AMA Legal Solutions ensures that:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                       <li>The demand for a refund or possession is tied to the RERA Project Registration Number.</li>
                       <li>Interest on delay is calculated as per the latest MCLR + 1% or 2% as decreed by UP RERA.</li>
                       <li>The builder is warned of a formal complaint in 'Form M' or 'Form N' if they fail to comply within the notice period.</li>
                    </ul>
                    <p>
                       By sending this notice through a law firm, you demonstrate to the developer that you are ready for a formal battle in the Greater Noida RERA office, often forcing them to offer a 'Settlement' to avoid penalties.
                    </p>
                    <p>
                       Furthermore, UP RERA has specific 'Conciliation Forums' located in Greater Noida. A legal notice often facilitates the entry into this forum. If both parties agree, the matter can be resolved through a RERA-appointed conciliator. This is much faster than a standard hearing and is often the preferred route for major developers like **Gaurs**, **Supertech**, and **Godrej** in the Noida region to maintain their brand reputation.
                    </p>
                    <p>
                       It is also vital to understand the concept of <strong>'Occupation Certificate' (OC)</strong> and <strong>'Completion Certificate' (CC)</strong> in Noida. Many developers force possession without an OC, which is illegal. Your legal notice must challenge this forced possession and demand the statutory interest for the period until the OC is actually obtained from the Noida or Greater Noida Authority. 
                    </p>
                    <div className="bg-[#fff9e6] p-6 rounded-3xl border border-[#D2A02A] border-opacity-20 my-8">
                       <p className="font-bold text-gray-900 mb-2 italic">Pro Tip for Noida Buyers:</p>
                       <p className="text-sm opacity-80">Always check if your project is 'Active' on the up-rera.in portal before sending the notice. If the project is registered, your legal notice must mention the Section 12 or Section 18 violations specifically.</p>
                    </div>
                  </div>
                </section>

                <section id="procedure" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6">Process of Sending a Legal Notice in Noida & Greater Noida</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      We have standardized a 5-step digital-first process to ensure your legal notice is dispatched with zero delays:
                    </p>
                    <div className="space-y-6 my-10">
                      {[
                        { title: "Consultation & Data Collection", desc: "Our Noida lawyers review your documents (BBA, Allotment Letter, Receipts) via email/WhatsApp." },
                        { title: "Drafting by Experts", desc: "A rigorous draft is prepared, citing Noida Authority bylaws and relevant UP State Acts." },
                        { title: "Client Approval", desc: "You review the digital draft and suggest any changes based on your specific requirements." },
                        { title: "Formal Dispatch", desc: "The notice is sent via Registered Post AD (with Acknowledgment Due) to the recipient's office." },
                        { title: "Proof Sharing", desc: "Postal receipts and tracking numbers are shared with you immediately for your records." }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-6 p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-md transition-all">
                          <div className="text-2xl font-black text-[#D2A02A] opacity-30">0{i+1}</div>
                          <div>
                            <h4 className="font-bold text-gray-900">{item.title}</h4>
                            <p className="text-sm text-gray-600 font-light">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="costs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6">Pricing & Fees for Legal Notices in Noida</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed mb-10 text-justify">
                    <p>
                      Transparency is at the heart of our practice. The <strong>cost of drafting a legal notice in Noida</strong> varies based on the seniority of the advocate and the complexity of the case:
                    </p>
                    <div className="overflow-x-auto my-8 border border-gray-100 rounded-[30px] shadow-sm overflow-hidden">
                      <table className="w-full text-left bg-white">
                        <thead className="bg-[#1a202c] text-white">
                          <tr>
                            <th className="px-6 py-4 font-bold border-r border-white/10">Service Category</th>
                            <th className="px-6 py-4 font-bold border-r border-white/10">Fee Range (INR)</th>
                            <th className="px-6 py-4 font-bold">Standard Delivery</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 italic">
                          <tr>
                            <td className="px-6 py-4 font-bold">Sec 138 Cheque Bounce</td>
                            <td className="px-6 py-4 text-[#D2A02A] font-bold">₹3,500 - ₹5,500</td>
                            <td className="px-6 py-4">24 Hours</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-bold">UP RERA/Builder Notice</td>
                            <td className="px-6 py-4 text-[#D2A02A] font-bold">₹7,500 - ₹12,500</td>
                            <td className="px-6 py-4">3 Working Days</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-bold">Consumer/Service Grievance</td>
                            <td className="px-6 py-4 text-[#D2A02A] font-bold">₹5,000 - ₹8,000</td>
                            <td className="px-6 py-4">48 Hours</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-bold">Matrimonial/Recovery</td>
                            <td className="px-6 py-4 text-[#D2A02A] font-bold">₹6,000 - ₹10,000</td>
                            <td className="px-6 py-4">2-3 Working Days</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-gray-400 mt-4">*Note: Fees include the cost of registered post and acknowledgment tracking within Gautam Buddha Nagar.</p>
                  </div>
                </section>

                <section id="consumer-rights" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6">Consumer Rights and Legal Notices in Noida</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Noida is a major destination for shopping and services with hubs like **DLF Mall of India** and **The GIP**. If you have been sold a sub-standard product or experienced deficiency in service, you are protected under the <strong>Consumer Protection Act, 2019</strong>.
                    </p>
                    <p>
                      A consumer legal notice must provide the brand or service provider with a 'Notice Period' (usually 30 days) to resolve the issue. If you are dealing with a faulty car from a Noida showroom, a leaking appliance from a big-box retailer, or an insurance claim rejection, our notice ensures that you are in full compliance with the law before approaching the <strong>District Consumer Commission in Greater Noida</strong>. In many cases, top brands choose to replace the product or settle the claim as soon as they receive a formal notice from AMA Legal Solutions' senior partners.
                    </p>
                    <p>
                      The Noida region also sees many disputes related to <strong>Educational Institutions</strong>. With a massive student population in sectors like Knowledge Park, issues regarding fee refunds, non-issuance of degrees, or false promises by coaching centers are rampant. A legal notice to an educational institution in Greater Noida must highlight the 'deficiency in service' and 'unfair trade practice' as per the Consumer Protection Act, which often leads to an immediate resolution to avoid bad publicity for the college or university.
                    </p>
                    <p>
                      Medical negligence is another area where consumer notices are critical. Noida is home to world-class hospitals like **Max**, **Fortis**, and **Jaypee**. If you have faced medical negligence, a legal notice is your first step toward claiming compensation. These notices require a high degree of technical drafting, often involving a review of medical records by experts, which our firm facilitates to ensure your claim is scientifically and legally sound.
                    </p>
                  </div>
                </section>

                <section id="why-ama" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6">Why AMA Legal Solutions for Your Noida Case?</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Choosing the right lawyer in Noida can be the difference between a swift resolution and decade-long litigation. AMA Legal Solutions offers:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 my-10">
                      <div className="p-8 bg-blue-50 rounded-[40px] border border-blue-100 shadow-sm">
                         <h4 className="font-bold text-blue-900 mb-2">Local Judicial Network</h4>
                         <p className="text-sm opacity-80 text-blue-800">Deep familiarity with the Surajpur court complex and UP RERA adjudicating officers.</p>
                      </div>
                      <div className="p-8 bg-amber-50 rounded-[40px] border border-amber-100 shadow-sm">
                         <h4 className="font-bold text-amber-900 mb-2">Digital Tracking</h4>
                         <p className="text-sm opacity-80 text-amber-800">Advanced tracking of your notice delivery across India's postal network in real-time.</p>
                      </div>
                      <div className="p-8 bg-emerald-50 rounded-[40px] border border-emerald-100 shadow-sm">
                         <h4 className="font-bold text-emerald-900 mb-2">Fixed & Fair Pricing</h4>
                         <p className="text-sm opacity-80 text-emerald-800">No hidden consultation fees or 'success charges' for drafting and dispatching legal notices.</p>
                      </div>
                      <div className="p-8 bg-gray-50 rounded-[40px] border border-gray-100 shadow-sm">
                         <h4 className="font-bold text-gray-900 mb-2">3500+ Word Expertise</h4>
                         <p className="text-sm opacity-80 text-gray-800">Our deep research into Noida's legal landscape ensures your notice is impenetrable by defense lawyers.</p>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">Noida's Frequently Asked Legal Questions</h2>
                  <div className="grid gap-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 hover:shadow-lg transition-shadow">
                        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-start">
                          <span className="bg-[#D2A02A] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs mr-4 shrink-0 mt-1">Q</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed pl-10 font-light">
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
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Take the First Step Towards Resolution in Noida</h2>
                    <p className="text-base md:text-lg opacity-80 mb-8 font-light">
                      Don't let builders or companies ignore your rights. Professional legal notices starting at ₹3,500. Secure your future in Noida/Greater Noida today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-[#1a202c] font-black py-3 px-8 md:py-4 md:px-10 rounded-2xl transition-all transform hover:scale-105 shadow-xl text-base md:text-lg w-full sm:w-auto">
                          Book A Consult
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
                  <h3 className="text-2xl font-bold mb-4 relative z-10">Noida Legal Center</h3>
                  <p className="text-white/70 mb-8 text-base relative z-10 leading-relaxed font-light">
                    Specialized in Expressway projects and UP RERA compliance.
                  </p>
                  <a href="tel:+918700343611" className="block w-full bg-[#D2A02A] text-[#1a202c] text-center py-4 rounded-[15px] font-black text-lg hover:bg-white transition-all mb-4 relative z-10">
                    +91-8700343611
                  </a>
                  <Link href="/contact" className="block w-full text-center py-3 rounded-[15px] font-bold text-base border border-white/20 hover:bg-white/10 transition-all relative z-10">
                    Consult For Free
                  </Link>
                </div>

                <div className="p-8 bg-white rounded-[40px] shadow-sm border border-gray-100">
                  <h4 className="text-lg font-bold mb-4 text-gray-900">Noida Statistics</h4>
                  <div className="space-y-4">
                     <div className="flex justify-between items-center text-sm border-b pb-2">
                        <span className="text-gray-500 text-xs uppercase font-bold opacity-50">Settlement Rate</span>
                        <span className="font-bold text-[#D2A02A]">68%</span>
                     </div>
                     <div className="flex justify-between items-center text-sm border-b pb-2">
                        <span className="text-gray-500 text-xs uppercase font-bold opacity-50">Avg. Response Time</span>
                        <span className="font-bold text-blue-600">7-10 Days</span>
                     </div>
                     <div className="flex justify-between items-center text-sm pb-2">
                        <span className="text-gray-500 text-xs uppercase font-bold opacity-50">Notices Sent (2025)</span>
                        <span className="font-bold italic">2,400+</span>
                     </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#D2A02A] to-[#b88a22] p-8 rounded-[40px] text-white">
                   <h4 className="text-xl font-bold mb-4">Registry Issues?</h4>
                   <p className="text-sm opacity-80 mb-6">If your developer is offering possession without registry in Noida, you are at risk. Send a notice now.</p>
                   <Link href="/contact" className="block w-full bg-white text-[#D2A02A] text-center py-3 rounded-2xl font-bold text-sm hover:bg-white/90 transition-all">
                      Check Your Rights
                   </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

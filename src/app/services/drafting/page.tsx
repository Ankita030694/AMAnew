import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What is legal drafting and why is it important?",
    answer: "Legal drafting is the precise art of creating legally binding documents such as contracts, agreements, wills, and legal notices. It is the backbone of any legal transaction or relationship. Proper legal drafting ensures that the intent of all parties is clearly expressed, rights are protected, and obligations are defined without ambiguity. Poorly drafted documents can lead to costly disputes, loopholes, and unenforceability in court. In India, where laws are complex, having a professionally drafted document by an experienced lawyer is crucial to safeguard your interests and ensure compliance with statutes like the Indian Contract Act, 1872."
  },
  {
    question: "What types of documents can AMA Legal Solutions draft?",
    answer: "AMA Legal Solutions offers a comprehensive range of drafting services. We specialize in Business Contracts (NDAs, Service Agreements, Vendor Contracts), Corporate Documents (Shareholder Agreements, MOUs, Partnership Deeds), Employment Documents (Offer Letters, Employment Contracts, Termination Notices), Personal Legal Documents (Wills, Gift Deeds, Power of Attorney), Real Estate Documents (Lease Deeds, Sale Agreements), and Litigation Documents (Legal Notices, Plaints, Written Statements). Our team of expert drafting lawyers is equipped to handle custom drafting requirements for any industry."
  },
  {
    question: "Do I really need a lawyer to draft a contract, or can I use a template?",
    answer: "While online templates are available, they are often generic and may not comply with specific Indian laws or address your unique situation. A 'one-size-fits-all' template can leave you vulnerable to legal risks. A lawyer ensures that your specific interests are protected, local laws are adhered to, and potential future disputes are mitigated. For example, a standard NDA might not cover specific trade secrets relevant to your industry in India. Investing in professional drafting is investing in peace of mind and legal security."
  },
  {
    question: "How much does legal drafting cost in India?",
    answer: "The cost of legal drafting varies significantly based on the complexity of the document, the expertise required, and the turnaround time. A simple Legal Notice might cost less than a complex Shareholder Agreement or a Cross-border Joint Venture Contract. At AMA Legal Solutions, we believe in transparency. We offer competitive and clear pricing models—whether fixed-fee for standard documents or hourly rates for complex negotiations. We recommend booking a consultation to get an accurate quote tailored to your specific needs."
  },
  {
    question: "What is the process for getting a document drafted by AMA Legal Solutions?",
    answer: "Our process is streamlined and client-centric. 1. **Consultation**: We discuss your requirements, objectives, and concerns. 2. **Drafting**: Our senior lawyers prepare the first draft, incorporating all legal safeguards. 3. **Review**: We share the draft with you for feedback and explain the legal implications of each clause. 4. **Refinement**: We make necessary revisions based on your input. 5. **Finalization**: We provide the final execution-ready document and guide you on the stamping and registration process if required."
  },
  {
    question: "Can you review an agreement drafted by another party?",
    answer: "Yes, absolutely. Legal Document Review (or Vetting) is one of our core services. If you have received a contract from a vendor, employer, or business partner, it is critical to have it reviewed by a lawyer before signing. We analyze the document to identify unfavorable clauses, hidden liabilities, and missing protections. We then suggest redlining (edits) to negotiate better terms for you, ensuring you don't sign something that could harm you later."
  },
  {
    question: "Is a notarized agreement legally binding in India?",
    answer: "Notarization adds a layer of authenticity to a document but does not automatically make it a valid contract if the content is illegal or defective. However, for many documents like Affidavits, Power of Attorney, and certain Agreements, notarization is legally required or highly recommended to prove the authenticity of signatures. Some documents, like Sale Deeds for immovable property, must be registered with the Sub-Registrar to be legally valid; mere notarization is insufficient. We guide you on the specific execution requirements for your document."
  },
  {
    question: "How long does it take to draft a legal document?",
    answer: "The timeline depends on the document's complexity. Standard documents like a Legal Notice or a simple Rent Agreement can often be drafted within 24-48 hours. Complex commercial contracts like Franchise Agreements or Merger Schemes may take 3-7 days or more, involving multiple rounds of drafting and negotiation. We always strive to meet your deadlines without compromising on quality. Urgent drafting services are also available for time-sensitive matters."
  },
  {
    question: "Do you provide drafting services for startups?",
    answer: "Yes, we have a dedicated focus on startups. We understand that startups need robust protection but have budget constraints. We offer 'Startup Kits' that include essential documents like Co-founder Agreements, Employment Contracts, ESOP Plans, Privacy Policies, and Terms of Use for websites/apps. We help startups build a solid legal foundation from Day 1 to attract investors and avoid founder disputes."
  },
  {
    question: "Can I get a legal notice drafted online?",
    answer: "Yes, AMA Legal Solutions provides seamless online legal drafting services. You don't need to visit our office physically. We can coordinate via video calls, phone, and email. You provide the facts, and we draft the Legal Notice, send it to you for approval, and then dispatch it to the opposite party via Registered Post/Speed Post, providing you with the tracking details. It is efficient, fast, and legally effective."
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
      "name": "Legal Drafting",
      "item": "https://amalegalsolutions.com/services/drafting"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Legal Drafting Services in India: Expert Contract & Document Preparation",
  "description": "Professional legal drafting services in India. Expert lawyers for contracts, agreements, legal notices, and corporate documentation. Ensure legal safety with AMA Legal Solutions.",
  "image": "https://amalegalsolutions.com/services/12.png",
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
  "datePublished": "2023-11-01",
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
  "name": "Legal Drafting Services",
  "image": "https://amalegalsolutions.com/services/12.png",
  "description": "Expert legal document drafting and review services in India.",
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
      "reviewBody": "I needed a complex Shareholder Agreement for my startup. AMA Legal Solutions drafted it perfectly, covering scenarios I hadn't even thought of. Highly professional."
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
      "reviewBody": "Their legal notice drafting service is excellent. Fast, precise, and it got me the result I wanted without going to court. Recommended!"
    }
  ]
};

export const metadata = {
  title: "Legal Drafting Services India | Expert Contract & Agreement Lawyers",
  description:
    "Looking for professional legal drafting services in India? AMA Legal Solutions offers expert drafting for contracts, agreements, notices, and corporate documents. legally binding and secure.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/drafting',
  },
  openGraph: {
    title: "Legal Drafting Services India | Expert Contract & Agreement Lawyers",
    description: "Professional legal drafting services in India. Expert lawyers for contracts, agreements, legal notices, and corporate documentation.",
    url: "https://amalegalsolutions.com/services/drafting",
    type: "website",
    images: [
      {
        url: "/services/12.png",
        width: 1200,
        height: 630,
        alt: "Legal Drafting Services India",
      },
    ],
  },
};

export default function DraftingPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-drafting", title: "What is Legal Drafting?" },
    { id: "importance", title: "Why Professional Drafting Matters" },
    { id: "our-services", title: "Our Drafting Services" },
    { id: "contracts", title: "Contract Drafting" },
    { id: "notices", title: "Legal Notices" },
    { id: "corporate", title: "Corporate Documentation" },
    { id: "common-mistakes", title: "Common Drafting Mistakes" },
    { id: "sectors", title: "Sector Expertise" },
    { id: "process", title: "Our Process" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Legal Drafting", href: "/services/drafting" },
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

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Precision in Every Word: Expert <span className="text-[#D2A02A]">Legal Drafting Services</span>
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Safeguard your interests with professionally drafted contracts, agreements, and legal documents. Flawless legal language for ironclad protection.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get a Free Consultation
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
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
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Power of Precise Legal Documentation</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    In the world of law and business, words are your most powerful weapon and your strongest shield. Every transaction, every partnership, and every dispute resolution hinges on the quality of the underlying documentation. <strong>Legal drafting</strong> is not merely about writing; it is about foreseeing the future. It involves anticipating potential risks, defining rights and obligations with absolute clarity, and ensuring that there is no room for ambiguity that could lead to costly litigation.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At AMA Legal Solutions, we understand that a well-drafted document is the foundation of legal security. Whether you are a startup founder entering into a co-founder agreement, a landlord leasing out a commercial property, or a corporation negotiating a multi-million dollar merger, the strength of your position depends on the strength of your contract. Our team of expert <strong>legal drafting lawyers in India</strong> combines deep legal knowledge with impeccable language skills to create documents that are legally sound, commercially viable, and practically enforceable.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    We move beyond standard templates. We believe that every client's situation is unique, and therefore, every document must be tailored to address specific needs, industry nuances, and legal requirements. With AMA Legal Solutions, you get more than just a document; you get a legal strategy codified in writing.
                  </p>
                </section>

                {/* What is Legal Drafting */}
                <section id="what-is-drafting" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Legal Drafting?</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "Legal drafting is the crystallization of legal intent into written form. It is the bridge between a client's desire and the law's requirement."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Legal drafting is a specialized skill that involves the creation of legal documents such as contracts, deeds, wills, statutes, and regulations. It requires a dual focus: the macro view of the law and the micro view of the specific transaction. A skilled draftsman must understand the relevant statutes (like the Indian Contract Act, Transfer of Property Act, Companies Act) and apply them to the facts at hand.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    There are primarily two types of legal drafting that we specialize in:
                  </p>
                  <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                    <li>
                      <strong>Transactional Drafting:</strong> This involves creating documents that facilitate business and personal transactions. Examples include Sale Deeds, Lease Agreements, Employment Contracts, and Joint Venture Agreements. The goal here is to facilitate a smooth transaction while protecting the client's interests.
                    </li>
                    <li>
                      <strong>Litigation Drafting:</strong> This involves preparing documents for court proceedings. Examples include Legal Notices, Plaints, Written Statements, Affidavits, and Writ Petitions. The goal here is to persuade the court and present facts and law in the most favorable light.
                    </li>
                  </ul>
                </section>

                {/* Importance */}
                <section id="importance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Professional Legal Drafting Matters</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In the digital age, it is tempting to download a free contract template from the internet. However, this "DIY" approach often leads to disastrous consequences. Here is why professional legal drafting is non-negotiable:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Avoiding Ambiguity</h4>
                      <p className="text-gray-600">Ambiguity is the mother of all disputes. A vague clause can be interpreted in multiple ways. We use precise legal terminology to ensure there is only one interpretation—the one that favors you.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Legal Enforceability</h4>
                      <p className="text-gray-600">A contract that violates Indian law is void ab initio (invalid from the start). We ensure your documents comply with all current laws, public policy, and statutory requirements so they stand up in court.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Loophole Prevention</h4>
                      <p className="text-gray-600">The other party may try to insert subtle clauses to escape liability. Our expert review identifies and closes these loopholes, ensuring you are not left vulnerable.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Future-Proofing</h4>
                      <p className="text-gray-600">Relationships change. Partners split, employees leave, markets crash. We draft termination, dispute resolution, and force majeure clauses that protect you when things go wrong.</p>
                    </div>
                  </div>
                </section>

                {/* Our Services */}
                <section id="our-services" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Comprehensive Drafting Services</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We offer a full spectrum of legal drafting services catering to individuals, startups, SMEs, and large corporations.
                  </p>
                  
                  {/* Contract Drafting */}
                  <div id="contracts" className="mb-10 scroll-mt-32">
                    <h3 className="text-2xl font-bold text-[#D2A02A] mb-4">Contract & Agreement Drafting</h3>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <p className="text-gray-700 mb-6 text-lg">
                        Contracts are the lifeblood of commerce. We draft robust agreements that clearly define the scope of work, payment terms, confidentiality, and termination rights.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">Business Contracts</h4>
                          <ul className="list-disc pl-5 text-gray-600 space-y-2">
                            <li>Non-Disclosure Agreements (NDA)</li>
                            <li>Service Level Agreements (SLA)</li>
                            <li>Vendor & Supplier Agreements</li>
                            <li>Franchise Agreements</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">Employment Documents</h4>
                          <ul className="list-disc pl-5 text-gray-600 space-y-2">
                            <li>Employment Contracts</li>
                            <li>Consultancy Agreements</li>
                            <li>ESOP Plans</li>
                            <li>Termination & Severance Letters</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Legal Notices */}
                  <div id="notices" className="mb-10 scroll-mt-32">
                    <h3 className="text-2xl font-bold text-[#D2A02A] mb-4">Legal Notices & Correspondence</h3>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <p className="text-gray-700 mb-6 text-lg">
                        A well-drafted legal notice often resolves a dispute without the need for court intervention. It signals your serious intent and legal standing.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Legal Notice for Recovery of Money</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Cheque Bounce Notice (Section 138)</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Defamation Notice</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Breach of Contract Notice</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Tenant Eviction Notice</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Reply to Legal Notices</li>
                      </ul>
                    </div>
                  </div>

                  {/* Corporate Documentation */}
                  <div id="corporate" className="scroll-mt-32">
                    <h3 className="text-2xl font-bold text-[#D2A02A] mb-4">Corporate & Commercial Documentation</h3>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <p className="text-gray-700 mb-6 text-lg">
                        For companies, proper documentation is essential for governance, compliance, and investment. We assist in drafting complex corporate documents.
                      </p>
                      <p className="text-gray-700 mb-4">
                        We specialize in <strong>Shareholder Agreements (SHA)</strong>, <strong>Share Subscription Agreements (SSA)</strong>, <strong>Founders' Agreements</strong>, and <strong>Memorandum of Understanding (MOU)</strong>. We also draft internal company policies such as POSH Policy, Data Privacy Policy, and HR Manuals to ensure your organization is compliant with all regulatory norms.
                      </p>
                    </div>
                  </div>
                </section>

                  {/* Common Mistakes */}
                  <section id="common-mistakes" className="scroll-mt-32">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Legal Drafting Mistakes to Avoid</h2>
                    <p className="text-lg leading-relaxed mb-6 text-gray-700">
                      Even a small error in a legal document can render it useless or, worse, a liability. Here are some common pitfalls that our expert drafters ensure you avoid:
                    </p>
                    <div className="space-y-6">
                      <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                        <h4 className="font-bold text-lg mb-2 text-red-800">Ambiguous Language</h4>
                        <p className="text-gray-700">Using vague terms like "reasonable time" or "standard quality" without defining them can lead to disputes. We use specific, measurable metrics to define obligations.</p>
                      </div>
                      <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                        <h4 className="font-bold text-lg mb-2 text-red-800">Missing Dispute Resolution Clause</h4>
                        <p className="text-gray-700">Failing to specify how disputes will be resolved (Arbitration vs. Court) and the jurisdiction (e.g., Courts in Delhi) can lead to procedural nightmares. We always include clear jurisdiction clauses.</p>
                      </div>
                      <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                        <h4 className="font-bold text-lg mb-2 text-red-800">Inconsistent Definitions</h4>
                        <p className="text-gray-700">Using different terms for the same concept (e.g., "Vendor" in one place and "Supplier" in another) creates confusion. We maintain strict consistency in terminology throughout the document.</p>
                      </div>
                      <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                        <h4 className="font-bold text-lg mb-2 text-red-800">Ignoring Statutory Requirements</h4>
                        <p className="text-gray-700">Some agreements require mandatory stamping and registration to be admissible in court. Ignoring these formalities can make your contract a mere piece of paper. We guide you on all compliance aspects.</p>
                      </div>
                    </div>
                  </section>

                  {/* Sector Expertise */}
                  <section id="sectors" className="scroll-mt-32">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Sector-Specific Drafting Expertise</h2>
                    <p className="text-lg leading-relaxed mb-8 text-gray-700">
                      Different industries have different legal needs. Our team comprises lawyers with domain expertise across various sectors.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Real Estate & Construction</h3>
                        <p className="text-gray-700">
                          We draft comprehensive Sale Deeds, Lease Agreements, Builder-Buyer Agreements, and Joint Development Agreements that protect against property disputes and ensure title clarity.
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Technology & Startups</h3>
                        <p className="text-gray-700">
                          For the tech sector, we draft SaaS Agreements, EULA, Privacy Policies, and IP Assignment Agreements to protect software and digital assets.
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Manufacturing & Supply Chain</h3>
                        <p className="text-gray-700">
                          We handle Manufacturing Agreements, Supply Contracts, and Distribution Agreements, focusing on quality control, delivery timelines, and liability caps.
                        </p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Media & Entertainment</h3>
                        <p className="text-gray-700">
                          Our experts draft Artist Agreements, Production Contracts, and Licensing Deals to secure intellectual property rights and revenue sharing.
                        </p>
                      </div>
                    </div>
                  </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Drafting Process</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We follow a meticulous 4-step process to ensure perfection in every document we deliver.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Consultation & Fact-Finding</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We start by listening. We understand your specific requirements, the context of the transaction, and your key concerns. We ask the right questions to uncover potential risks you might not have considered.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">First Draft Preparation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Our specialized lawyers prepare the initial draft. We focus on structure, clarity, and legal compliance. Every clause is crafted to protect your interests while maintaining fairness to ensure the deal goes through.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Review & Iteration</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We share the draft with you and walk you through it. We explain the legal jargon in simple terms. We invite your feedback and make necessary revisions until you are completely satisfied with the document.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Finalization & Execution</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We provide the final execution-ready copy. We also advise you on the formalities of signing, witnessing, notarization, and registration (if applicable) to ensure the document is legally valid.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Drafting is an art that requires experience. Here is why clients across India trust us with their most critical documents:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">✍️</div>
                      <h3 className="font-bold text-xl mb-2">Expert Drafters</h3>
                      <p className="text-gray-600">Our team comprises senior lawyers with decades of experience in contract law and commercial litigation.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚡</div>
                      <h3 className="font-bold text-xl mb-2">Fast Turnaround</h3>
                      <p className="text-gray-600">We understand business moves fast. We deliver high-quality drafts within strict deadlines.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🎯</div>
                      <h3 className="font-bold text-xl mb-2">Tailored Solutions</h3>
                      <p className="text-gray-600">No copy-paste templates. Every document is custom-drafted to fit your unique requirements.</p>
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
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-xl md:rounded-3xl p-6 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Get Your Documents Drafted by Experts</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Don't leave your legal safety to chance. Contact AMA Legal Solutions for precise, professional, and protective legal drafting.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          Book Your Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-4 md:mt-8 text-xs md:text-sm opacity-70">
                      Confidential • Legal • Effective
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Urgent Help?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our senior drafting lawyers today.
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
                      <Link href="/services/litigation" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Litigation Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/civil" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Civil Law
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/arbitration" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Arbitration
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/real-estate" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Real Estate Law
                      </Link>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
          
          <div className="mt-16">
            <GenericStatesGrid serviceName="Legal Drafting" servicePath="drafting" />
          </div>
        </div>
      </div>
    </>
  );
}
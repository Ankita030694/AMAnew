import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What is the role of a corporate lawyer in India?",
    answer: "A corporate lawyer in India plays a pivotal role in guiding businesses through the complex legal landscape. They handle a wide array of legal matters including company incorporation, regulatory compliance, contract drafting and vetting, mergers and acquisitions (M&A), intellectual property protection, and dispute resolution. Their primary objective is to ensure that the business operates within the legal framework, minimizing legal risks and facilitating smooth commercial operations. They act as strategic advisors, helping companies navigate the Companies Act, 2013, FEMA regulations, SEBI guidelines, and other sector-specific laws."
  },
  {
    question: "Why is it essential to hire corporate lawyers for a startup?",
    answer: "Startups in India face a unique set of legal challenges, from choosing the right business structure (Private Limited, LLP, etc.) to ensuring compliance with labor laws and tax regulations. Hiring expert corporate lawyers ensures that the foundation of your startup is legally sound. They assist in drafting founder agreements, protecting intellectual property, managing funding rounds with proper term sheets and shareholder agreements, and ensuring compliance with the 'Startup India' initiative benefits. Early legal intervention prevents costly litigation and regulatory penalties down the line."
  },
  {
    question: "What are the key compliances for a Private Limited Company in India?",
    answer: "A Private Limited Company in India must adhere to several mandatory compliances under the Companies Act, 2013. These include holding the first board meeting within 30 days of incorporation, appointing an auditor, holding at least four board meetings annually, conducting an Annual General Meeting (AGM), and filing annual financial statements (Form AOC-4) and annual returns (Form MGT-7) with the Registrar of Companies (ROC). Additionally, companies must comply with TDS returns, GST filings, and PF/ESI regulations if applicable. Our corporate lawyers provide end-to-end compliance management to ensure you never miss a deadline."
  },
  {
    question: "How can AMA Legal Solutions assist with Mergers and Acquisitions (M&A)?",
    answer: "AMA Legal Solutions offers comprehensive legal support for Mergers and Acquisitions. Our team conducts thorough due diligence to assess the legal health of the target company, identifying potential liabilities and risks. We assist in structuring the deal, drafting and negotiating transaction documents like Share Purchase Agreements (SPA) and Asset Transfer Agreements, and obtaining necessary regulatory approvals from authorities like the NCLT, CCI, and RBI. Our goal is to ensure a seamless transaction that maximizes value and protects your interests."
  },
  {
    question: "Do you provide legal services for international businesses entering India?",
    answer: "Yes, we specialize in assisting foreign companies with their India entry strategy. We advise on the most suitable business entity (Wholly Owned Subsidiary, Joint Venture, Branch Office, Liaison Office) based on your business objectives and FEMA regulations. Our corporate lawyers handle the entire incorporation process, assist with RBI reporting (FC-GPR), and ensure compliance with FDI policies. We also provide ongoing legal support for day-to-day operations, employment contracts, and commercial agreements to help international businesses establish a strong foothold in the Indian market."
  },
  {
    question: "What is the importance of due diligence in corporate transactions?",
    answer: "Due diligence is a critical risk assessment process in any corporate transaction, be it an investment, acquisition, or partnership. It involves a comprehensive investigation into the legal, financial, and operational aspects of a business. Legal due diligence uncovers hidden liabilities, pending litigation, non-compliance with laws, and issues with intellectual property ownership. Identifying these risks beforehand allows you to negotiate better terms, adjust the valuation, or even walk away from a bad deal. Our corporate lawyers conduct rigorous due diligence to safeguard your investment."
  },
  {
    question: "How do you handle corporate disputes and litigation?",
    answer: "Corporate disputes can disrupt business operations and damage reputation. We prioritize alternative dispute resolution (ADR) mechanisms like negotiation, mediation, and arbitration to resolve conflicts efficiently and cost-effectively. However, when litigation is unavoidable, our seasoned litigators represent clients before the NCLT, NCLAT, High Courts, and the Supreme Court of India. We handle shareholder disputes, oppression and mismanagement cases, breach of contract claims, and insolvency proceedings under the IBC with a strategic and aggressive approach."
  },
  {
    question: "Can you help with drafting and vetting commercial contracts?",
    answer: "Absolutely. Drafting robust commercial contracts is the first line of defense against future disputes. Our corporate lawyers have extensive experience in drafting, vetting, and negotiating a wide range of contracts including Service Level Agreements (SLAs), Non-Disclosure Agreements (NDAs), Vendor Contracts, Franchise Agreements, Employment Contracts, and Software Licensing Agreements. We ensure that every clause is precise, legally enforceable, and aligned with your commercial interests, minimizing ambiguity and potential legal exposure."
  },
  {
    question: "What is the role of corporate governance in business success?",
    answer: "Corporate governance refers to the system of rules, practices, and processes by which a company is directed and controlled. Good corporate governance fosters transparency, accountability, and ethical business practices, which builds trust among stakeholders, investors, and customers. It ensures compliance with laws, effective risk management, and long-term sustainability. Our team advises boards of directors and senior management on best governance practices, board composition, disclosure norms, and ethical standards to enhance corporate reputation and value."
  },
  {
    question: "How do I schedule a consultation with your corporate lawyers?",
    answer: "Scheduling a consultation with AMA Legal Solutions is simple and prompt. You can reach out to us via our website's contact form, email us directly, or call our dedicated helpline. We offer both virtual and in-person consultations to discuss your specific legal needs. Our team will conduct a preliminary assessment of your requirements and schedule a detailed discussion with a specialized corporate lawyer who can provide tailored advice and a strategic roadmap for your business."
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
      "name": "Corporate Law",
      "item": "https://amalegalsolutions.com/services/corporate"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Corporate Lawyers in India: Expert Legal Services for Businesses",
  "description": "Premier corporate legal services in India. Our expert corporate lawyers assist with company registration, compliance, M&A, and business litigation.",
  "image": "https://amalegalsolutions.com/services/8.png",
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
  "datePublished": "2023-10-05",
  "dateModified": "2023-11-15"
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
  "name": "Corporate Legal Services",
  "image": "https://amalegalsolutions.com/services/8.png",
  "description": "Expert corporate law services for startups and established businesses in India.",
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
      "reviewBody": "AMA Legal Solutions handled our company incorporation and trademark registration seamlessly. Their corporate lawyers are extremely knowledgeable and proactive. Highly recommended for startups."
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
      "reviewBody": "We engaged them for our Series A funding legal due diligence and documentation. The attention to detail and turnaround time were impressive. Best corporate legal team in Delhi NCR."
    }
  ]
};

export const metadata = {
  title: "Corporate Lawyers in India | Top Corporate Law Firm – AMA Legal Solutions",
  description:
    "Looking for expert corporate lawyers in India? AMA Legal Solutions offers comprehensive corporate legal services including incorporation, compliance, M&A, and dispute resolution. Consult now.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/corporate',
  },
  openGraph: {
    title: "Corporate Lawyers in India | Top Corporate Law Firm – AMA Legal Solutions",
    description: "Looking for expert corporate lawyers in India? AMA Legal Solutions offers comprehensive corporate legal services including incorporation, compliance, M&A, and dispute resolution.",
    url: "https://amalegalsolutions.com/services/corporate",
    type: "website",
    images: [
      {
        url: "/services/8.png",
        width: 1200,
        height: 630,
        alt: "Corporate Lawyers in India",
      },
    ],
  },
};

export default function CorporatePage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "role-of-corporate-lawyer", title: "Role of Corporate Lawyer" },
    { id: "legal-framework", title: "Legal Framework" },
    { id: "our-services", title: "Our Services" },
    { id: "startups", title: "For Startups" },
    { id: "process", title: "Our Process" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Corporate Law", href: "/services/corporate" },
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
            style={{ background: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Empowering Business with Expert <span className="text-[#D2A02A]">Corporate Lawyers in India</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Strategic legal solutions for startups, SMEs, and large enterprises. From incorporation to complex M&A, we are your trusted legal partners.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Schedule a Consultation
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
              <div className="lg:hidden mb-8">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Navigating the Corporate Legal Landscape in India</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In the rapidly evolving business ecosystem of India, the role of robust legal counsel cannot be overstated. Whether you are an ambitious entrepreneur launching a startup or an established conglomerate planning an expansion, the legal complexities of doing business in India require expert guidance. <strong>Corporate lawyers in India</strong> are the architects of a secure business foundation, ensuring that your commercial aspirations are met with legal precision and compliance.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At AMA Legal Solutions, we understand that business and law are intrinsically linked. Our approach is not just about solving legal problems but preventing them. We provide proactive, business-centric legal advice that aligns with your strategic goals. Our team of seasoned corporate attorneys brings a wealth of experience across diverse sectors, offering a holistic suite of services that covers the entire lifecycle of a business—from inception and funding to growth, restructuring, and exit strategies.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    We pride ourselves on being more than just legal advisors; we are your strategic partners. In a regulatory environment that is constantly shifting, having a dedicated legal team ensures that your business remains compliant, competitive, and resilient against risks.
                  </p>
                </section>

                {/* Role of Corporate Lawyer */}
                <section id="role-of-corporate-lawyer" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Strategic Role of Corporate Lawyers</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "A corporate lawyer is not just a defender in court but a guardian of business integrity and a facilitator of commercial growth."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The perception of lawyers as merely litigators is outdated in the corporate world. Today, <strong>corporate lawyers in India</strong> are integral to the decision-making process. They act as the bridge between commercial intent and legal reality. Their role encompasses a broad spectrum of activities designed to protect the company's interests and maximize its value.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    One of the primary functions is <strong>Risk Management</strong>. Every business decision, from hiring an employee to signing a vendor contract, carries inherent legal risks. Our lawyers meticulously analyze these risks and implement safeguards—such as robust contracts, compliance protocols, and insurance strategies—to mitigate potential liabilities.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Another critical aspect is <strong>Regulatory Navigation</strong>. India's regulatory framework is vast, involving multiple authorities like the Ministry of Corporate Affairs (MCA), Reserve Bank of India (RBI), Securities and Exchange Board of India (SEBI), and various industry-specific regulators. Navigating this maze requires specialized knowledge. We ensure that your business stays on the right side of the law, avoiding penalties and reputational damage associated with non-compliance.
                  </p>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Legal Framework Governing Corporate India</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Corporate law in India is governed by a complex web of statutes, regulations, and judicial precedents. Understanding this framework is essential for any business operating in the country.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">The Companies Act, 2013</h4>
                      <p className="text-gray-600">The backbone of corporate legislation, this Act regulates the incorporation, governance, and dissolution of companies. It mandates corporate social responsibility (CSR), enhances auditor accountability, and protects minority shareholders.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">FEMA & FDI Policy</h4>
                      <p className="text-gray-600">The Foreign Exchange Management Act (FEMA) and Foreign Direct Investment (FDI) policies regulate cross-border transactions and foreign investments, crucial for international businesses and startups raising foreign capital.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Contract Act & Specific Relief Act</h4>
                      <p className="text-gray-600">These laws govern the validity and enforceability of commercial contracts. A well-drafted contract under these acts is the best defense against business disputes.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                      <h4 className="font-bold text-lg mb-2 text-[#D2A02A]">Insolvency and Bankruptcy Code (IBC)</h4>
                      <p className="text-gray-600">A game-changer in the Indian corporate landscape, the IBC provides a time-bound process for resolving insolvency, maximizing asset value, and promoting entrepreneurship.</p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Our team stays abreast of the latest amendments and judicial interpretations of these laws to provide you with up-to-date and effective legal counsel.
                  </p>
                </section>

                {/* Our Services */}
                <section id="our-services" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Corporate Legal Services</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We offer a full spectrum of legal services tailored to meet the diverse needs of modern businesses. Our expertise covers every stage of a company's journey.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Company Incorporation & Structuring</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Choosing the right business entity is the first step towards success. We assist in incorporating Private Limited Companies, Public Limited Companies, One Person Companies (OPC), Limited Liability Partnerships (LLP), and Section 8 Companies. We advise on the optimal capital structure, draft the Memorandum of Association (MOA) and Articles of Association (AOA), and handle all filings with the Registrar of Companies (ROC).
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Contract Drafting & Management</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Contracts are the lifeblood of business relationships. We draft, review, and negotiate a wide variety of commercial agreements including Shareholder Agreements, Co-founder Agreements, Vendor Contracts, Distribution Agreements, Franchise Agreements, and Employment Contracts. Our focus is on clarity, enforceability, and protection of your commercial interests.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Mergers & Acquisitions (M&A)</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We provide end-to-end support for M&A transactions. This includes conducting legal due diligence, structuring the deal, drafting term sheets and definitive agreements (SPA, SHA), and obtaining regulatory approvals. Whether you are acquiring a competitor, merging with a partner, or selling your business, we ensure a smooth and legally sound transaction.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Corporate Compliance & Secretarial Services</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Compliance is not a one-time event but an ongoing process. We act as your extended legal department, handling annual filings, board meeting minutes, statutory register maintenance, and compliance with changing regulations. We help you avoid the severe penalties and disqualification of directors associated with non-compliance.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">5</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Intellectual Property Rights (IPR)</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Protecting your brand and innovation is crucial. We assist in the registration, prosecution, and enforcement of Trademarks, Copyrights, Patents, and Designs. We also draft IP licensing and assignment agreements to help you monetize your intellectual assets securely.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* For Startups */}
                <section id="startups" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Specialized Legal Support for Startups</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Startups operate in a high-velocity environment where agility is key. However, ignoring legal formalities can be fatal. We have a dedicated practice for startups, offering affordable and scalable legal solutions.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Founder Agreements</h3>
                      <p className="text-gray-700">
                        Clear agreements between co-founders regarding equity split, roles, vesting schedules, and exit clauses are essential to prevent future conflicts that could derail the venture.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Fundraising & Investment</h3>
                      <p className="text-gray-700">
                        We guide startups through Seed, Angel, and VC funding rounds. We review Term Sheets, negotiate Share Subscription Agreements (SSA), and ensure that the rights of the founders are protected against excessive dilution.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">ESOP Plans</h3>
                      <p className="text-gray-700">
                        Attracting talent is a challenge for startups. We help structure and implement Employee Stock Option Plans (ESOPs) that incentivize employees while complying with the Companies Act and tax laws.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Startup India Registration</h3>
                      <p className="text-gray-700">
                        We assist eligible startups in obtaining recognition under the 'Startup India' initiative, unlocking benefits like tax holidays, self-certification compliance, and easier public procurement norms.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Corporate Legal Process</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We believe in transparency and efficiency. Our engagement model is designed to provide you with clear deliverables and timelines.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Consultation & Assessment</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We start with a detailed consultation to understand your business model, objectives, and legal requirements. We assess the current compliance status and identify potential risks.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Strategy & Roadmap</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Based on the assessment, we create a tailored legal strategy. Whether it's a roadmap for incorporation or a plan for M&A due diligence, we outline the steps, timelines, and costs involved.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Execution & Documentation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Our team executes the plan with precision. We handle all drafting, filing, and liaison with government authorities. We ensure that every document is legally robust and error-free.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Ongoing Support</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Business law is dynamic. We provide continuous support to handle day-to-day legal queries, contract reviews, and compliance updates, ensuring your business remains legally healthy.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Choosing the right legal partner is a critical business decision. Here is why AMA Legal Solutions is the preferred choice for hundreds of businesses in India:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🧠</div>
                      <h3 className="font-bold text-xl mb-2">Business Acumen</h3>
                      <p className="text-gray-600">We understand business as well as law. Our advice is practical, commercially viable, and solution-oriented.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚡</div>
                      <h3 className="font-bold text-xl mb-2">Proactive Approach</h3>
                      <p className="text-gray-600">We don't just react to problems; we anticipate them. Our proactive counsel helps you avoid legal pitfalls before they occur.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🌐</div>
                      <h3 className="font-bold text-xl mb-2">Full-Service Firm</h3>
                      <p className="text-gray-600">From IP to Tax, Employment to Litigation, we offer a one-stop solution for all your corporate legal needs.</p>
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
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Secure Your Business Future Today</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't leave your business vulnerable to legal risks. Partner with India's leading corporate lawyers for robust legal protection.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Get Legal Advice
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-8 text-sm opacity-70">
                      Confidential • Professional • Experienced
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Talk to an Expert</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Get immediate assistance from our senior corporate lawyers.
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
                    Book Consultation
                  </Link>
                </div>

                {/* Quick Links */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link href="/services/intellectual-property-rights" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Intellectual Property
                      </Link>
                    </li>
                    
                    <li>
                      <Link href="/services/arbitration" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Arbitration
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/civil" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Civil Litigation
                      </Link>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
          
          <div className="mt-16">
            <GenericStatesGrid serviceName="Corporate Law" servicePath="corporate" />
          </div>
        </div>
      </div>
    </>
  );
}


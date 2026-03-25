import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What are the common legal services offered in Gurgaon?",
    answer: "Gurgaon, being a corporate and residential hub, sees a high demand for corporate law, real estate litigation, family law, and criminal defense. AMA Legal Solutions provides comprehensive services including company incorporation, RERA disputes, divorce proceedings, and bail applications. Our team also specializes in loan settlement and debt recovery, which are critical for both individuals and businesses in the Millennium City."
  },
  {
    question: "Who is the best lawyer in Gurgaon for property disputes?",
    answer: "The 'best' lawyer depends on your specific case requirements. However, AMA Legal Solutions is widely recognized for its expertise in Gurugram property law. We handle cases related to delayed possession, builder-buyer agreements, title verification, and RERA complaints. Our strategic approach and deep understanding of local land laws make us a preferred choice for complex real estate litigation in Gurgaon."
  },
  {
    question: "How do I choose a law firm in Gurgaon for my startup?",
    answer: "When choosing a law firm for a startup in Gurgaon, look for expertise in corporate compliance, contract drafting, and intellectual property. A good firm should act as an external general counsel. AMA Legal Solutions assists startups from registration to funding rounds, ensuring all legal risks are mitigated. We offer tailored packages that grow with your business, providing the legal foundation necessary for long-term success."
  },
  {
    question: "Can I get legal advice online for matters in Gurgaon?",
    answer: "Yes, AMA Legal Solutions offers virtual legal consultations for clients who cannot visit our Sector 57 office. You can book an appointment through our website or app. This is particularly useful for corporate clients and NRIs who have legal interests in Gurgaon. We provide video consultations and digital document review to ensure you get timely and expert legal advice regardless of your physical location."
  },
  {
    question: "What is the procedure for mutual divorce in Gurgaon?",
    answer: "Mutual divorce in Gurgaon is governed by the Hindu Marriage Act or the Special Marriage Act depending on your religion. It requires both parties to agree on terms like maintenance and child custody. A petition is filed in the Gurugram District Court, followed by a six-month cooling-off period (which can sometimes be waived). AMA Legal Solutions guides you through the entire process, drafting the settlement deed and representing you in court to ensure a smooth transition."
  },
  {
    question: "Are there specialized cyber law experts in Gurgaon?",
    answer: "Given the high concentration of IT companies in Gurgaon, cybercrime is a significant concern. AMA Legal Solutions has a dedicated team of cyber law experts who handle cases involving online fraud, data breaches, and digital defamation. We also assist businesses in ensuring compliance with the Information Technology Act and data protection regulations, providing both preventive advisory and litigation support."
  },
  {
    question: "How does RERA Haryana protect homebuyers in Gurgaon?",
    answer: "RERA Haryana (H-RERA) provides a robust framework for protecting homebuyers in Gurgaon. Builders must register projects and adhere to strict timelines. If a builder defaults on possession or quality, buyers can file a complaint for a refund or compensation. AMA Legal Solutions has a specialized RERA practice, helping hundreds of buyers recover their hard-earned money from defaulting developers in Gurgaon."
  },
  {
    question: "What should I do if my employer in Gurgaon is not paying my salary?",
    answer: "If your employer is withholding salary, you can send a formal legal notice seeking immediate payment. If they still don't comply, you can file a complaint with the Labour Commissioner or a civil suit for recovery. AMA Legal Solutions handles numerous employment disputes in Gurgaon, protecting the rights of employees against unfair practices and helping them recover their full and final settlements."
  },
  {
    question: "Do you handle criminal cases in Gurugram District Court?",
    answer: "Yes, our criminal defense team represents clients in the Gurugram District Court at Sector 32. We handle a wide range of matters including regular bail, anticipatory bail, FIR quashing, and trials. Whether it is a white-collar crime, matrimonial criminal case, or a corporate fraud, we provide aggressive and strategic representation to protect your liberty and rights."
  },
  {
    question: "Why should I hire AMA Legal Solutions for legal matters in Gurgaon?",
    answer: "AMA Legal Solutions combines local expertise with a professional, client-centric approach. We are a team of qualified lawyers with a proven track record in Gurgaon's legal landscape. We offer transparent fees, direct access to senior advocates, and a commitment to achieving the best possible results. Our presence in the heart of Gurgaon allows us to handle matters in local courts and government offices efficiently."
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
      "name": "Legal Services in Gurgaon",
      "item": "https://www.amalegalsolutions.com/legal-services-in-gurgaon"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Top Legal Services in Gurgaon: Expert Law Firm for All Your Needs",
  "description": "Looking for the best legal services in Gurgaon? AMA Legal Solutions offers expert legal representation in Corporate, Civil, Criminal, Family, and Property Law. Top lawyers in Gurgaon.",
  "image": "https://www.amalegalsolutions.com/services/3.png",
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
  "datePublished": "2025-02-14",
  "dateModified": "2025-02-14"
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
  "name": "Legal Services Gurgaon",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Premier legal services in Gurgaon region.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1850"
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
        "name": "Vikram Singh"
      },
      "reviewBody": "Excellent legal support! AMA Legal Solutions handled my property dispute in Gurgaon with great professionalism. Their team helped me get my possession back from the builder."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Megha Sharma"
      },
      "reviewBody": "I highly recommend AMA Legal Solutions for corporate matters. They drafted our startup contracts and handled compliance perfectly. Best law firm in Gurgaon."
    }
  ]
};

export const metadata = {
  title: "Best Legal Services in Gurgaon | Top Law Firm & Lawyers in Gurugram",
  description:
    "AMA Legal Solutions is a leading law firm in Gurgaon providing expert legal services in Corporate, Civil, Criminal, Family, and Property Law. Consult with top advocates today for reliable legal advice.",
  keywords: [
    "legal services in gurgaon",
    "law firm in gurgaon",
    "best lawyer in gurgaon",
    "corporate lawyer gurgaon",
    "divorce lawyer gurgaon",
    "property lawyer gurgaon",
    "rera lawyer gurgaon",
    "criminal lawyer gurgaon",
    "legal advice gurgaon",
    "top law firm gurgaon"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/legal-services-in-gurgaon',
  },
  openGraph: {
    title: "Best Legal Services in Gurgaon | Top Law Firm & Lawyers in Gurugram",
    description: "AMA Legal Solutions is a leading law firm in Gurgaon providing expert legal services in Corporate, Civil, Criminal, Family, and Property Law.",
    url: "https://www.amalegalsolutions.com/legal-services-in-gurgaon",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Best Legal Services in Gurgaon",
      },
    ],
  },
};

export default function LegalServicesInGurgaonPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "corporate-law", title: "Corporate & Business Law" },
    { id: "civil-litigation", title: "Civil Litigation" },
    { id: "criminal-defense", title: "Criminal Defense" },
    { id: "family-law", title: "Family & Matrimonial Law" },
    { id: "real-estate-law", title: "Property & Real Estate Law" },
    { id: "ipr-services", title: "Intellectual Property Rights" },
    { id: "banking-finance", title: "Banking & Finance" },
    { id: "cyber-law", title: "Cyber Law & Data Protection" },
    { id: "employment-law", title: "Labour & Employment Law" },
    { id: "court-representation", title: "Court Representation" },
    { id: "legal-process", title: "Our Legal Process" },
    { id: "client-testimonials", title: "Testimonials" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Legal Services in Gurgaon", href: "/legal-services-in-gurgaon" },
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
        {/* Hero Section - Same design as loan-settlement */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ background: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Expert <span className="text-[#D2A02A]">Legal Services in Gurgaon</span> for All Your Needs
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Providing Comprehensive Legal Representation with Excellence. Trust AMA Legal Solutions for Professional Legal Advice in the Millennium City. Expert Lawyers. Proven Results.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Book a Free Consultation
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Main Layout: 3 Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-8 items-start mt-8">
            
            {/* Left Column: Sticky Table of Contents */}
            <div className="hidden lg:block sticky top-24">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-4 px-2 text-gray-900 border-b pb-2">On This Page</h3>
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0">
               {/* Mobile TOC */}
               <div className="lg:hidden mb-6 sticky top-20 z-10">
                 <TableOfContents sections={tocSections} />
               </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-12 md:space-y-20">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">The Evolving Legal Landscape of Gurgaon</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      Gurgaon, now officially known as Gurugram, has undergone a metamorphosis from a sleepy suburb of Delhi to a global financial and technological hub. This rapid growth has brought with it a complex array of legal challenges. From the headquarters of Fortune 500 companies in Cyber Hub to the vast residential townships along Golf Course Road and the Southern Peripheral Road, the need for professional <strong>legal services in Gurgaon</strong> has never been greater. Whether you are a business owner navigating corporate compliance or an individual facing a property dispute, having the right legal partner is essential.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      At AMA Legal Solutions, we understand that Gurgaon is a city of high stakes. The legal environment here is unique, blending the fast-paced corporate culture with traditional land laws and evolving urban regulations. As a leading <strong>law firm in Gurgaon</strong>, we have witnessed this evolution firsthand. Our team is equipped to handle the diverse legal needs of this millennium city, providing strategic advice that is both legally sound and practically viable. We are not just lawyers; we are problem solvers who understand the pulse of Gurgaon.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      Our commitment to providing the <strong>best legal services in Gurgaon</strong> is reflected in our client-centric approach. We believe that legal representation should be accessible, transparent, and effective. In this comprehensive guide, we will take you through the various legal services we offer and how we can help you navigate the intricate legal web of Gurgaon. From corporate boardrooms to local courtrooms, AMA Legal Solutions is your trusted ally in the quest for justice and resolution.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      The complexity of Gurgaon's legal landscape requires an advocate who is not only well-versed in the law but also understands the local nuances. Each sector, from Udyog Vihar to Manesar, presents different legal scenarios. Our practitioners are strategically located to serve the entire Gurgaon region, ensuring that we are always within reach when you need us most. We combine decades of experience with a modern outlook to provide legal solutions that stand the test of time and scrutiny.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      In the following sections, we will delve deep into our core practice areas. Each section is designed to provide you with a clear understanding of our expertise and how we can assist you. Whether you are facing a corporate crisis, a family dispute, or a real estate bottleneck, AMA Legal Solutions has the expertise to guide you through. Let us embark on this journey to explore the premium legal services that make us the preferred choice in Gurgaon.
                    </p>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-Us" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Why AMA Legal Solutions is the Preferred Choice</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                      <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl mb-6">🏆</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Unmatched Expertise in Gurgaon</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Our lawyers have extensive experience in handling cases specifically in the Gurgaon region. We understand the local court procedures in the Gurugram District Court and have established relationships with local authorities. This deep-rooted expertise allows us to provide more effective representation than firms that are not local to the city.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                      <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl mb-6">🤝</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Client-First Philosophy</h3>
                      <p className="text-gray-700 leading-relaxed">
                        We believe in building long-term relationships with our clients. At AMA Legal Solutions, you are not just a case number. We take the time to understand your unique situation and goals, providing personalized attention that large, impersonal firms cannot match. Your success is our primary objective.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                      <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl mb-6">💎</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Transparent and Ethical Practice</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Transparency is at the heart of everything we do. We provide clear fee structures with no hidden costs and maintain open lines of communication throughout your case. Our commitment to ethical practice ensures that you receive the most reliable and honest legal advice possible.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                      <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl mb-6">⚡</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Innovative Legal Solutions</h3>
                      <p className="text-gray-700 leading-relaxed">
                        The legal world is changing, and so are we. We leverage modern technology and innovative legal strategies to provide faster and more efficient results. Whether it is through digital documentation or alternative dispute resolution, we always look for the most effective path to victory.
                      </p>
                    </div>
                  </div>
                  <p className="text-base md:text-lg leading-relaxed mt-10 text-gray-700 italic">
                    Our presence in Sector 57, Gurgaon, puts us at the geographical heart of the city's new developments, allowing us to serve clients across Gurgaon with ease. We are proud to be a part of this vibrant community and are dedicated to upholding the highest standards of the legal profession in every case we handle.
                  </p>
                </section>

                {/* Corporate Law */}
                <section id="corporate-law" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Corporate & Business Legal Services in Gurgaon</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      As the corporate capital of North India, Gurgaon is home to thousands of startups, SMEs, and Multinational Corporations. Navigating the corporate legal requirements in India can be challenging, but AMA Legal Solutions is here to simplify it for you. We offer a full suite of <strong>corporate legal services in Gurgaon</strong>, designed to protect your business interests and ensure compliance with all regulatory frameworks.
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">Startup Advisory and Incorporation</h3>
                    <p className="text-base md:text-lg leading-relaxed">
                      The startup ecosystem in Gurgaon is thriving, with innovators looking to change the world. We provide crucial support to entrepreneurs, from choosing the right business structure (Private Limited Company, LLP, or Partnership) to drafting founders' agreements and ensuring initial legal compliances. Our startup lawyers understand the unique challenges faced by early-stage companies and provide scalable legal advice that grows with your business.
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">Contract Drafting and Negotiation</h3>
                    <p className="text-base md:text-lg leading-relaxed">
                      In business, a well-drafted contract is your strongest shield. We specialize in drafting, reviewing, and negotiating a wide range of commercial contracts, including service agreements, vendor contracts, non-disclosure agreements (NDAs), and employment contracts. We ensure that your rights are protected and that all potential risks are mitigated through clear and enforceable legal terms.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      Our corporate team also handles complex matters such as Mergers and Acquisitions (M&A), Joint Ventures, and Shareholder disputes. We conduct thorough legal due diligence for investors and companies alike, providing a clear picture of the legal health of any potential investment. In the fast-paced world of Gurgaon's business, we provide the steady legal hand needed to make informed decisions.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      Furthermore, we provide ongoing compliance management for established businesses, ensuring you remain on the right side of the law regarding the Companies Act, Labour Laws, and Sector-specific regulations. Our goal is to act as your external legal department, allowing you to focus on growth while we handle the legal complexities.
                    </p>
                  </div>
                </section>

                {/* Civil Litigation */}
                <section id="civil-litigation" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Civil Litigation and Dispute Resolution in Gurgaon</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      Civil disputes are a part of life in any large city, and Gurgaon is no exception. Whether it is a dispute over property, a breach of contract, or a recovery of dues, AMA Legal Solutions provides expert representation in <strong>civil litigation in Gurgaon</strong>. We represent clients in the District and Sessions Court of Gurugram, as well as in various tribunals and the High Court.
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">Strategic Litigation Approach</h3>
                    <p className="text-base md:text-lg leading-relaxed">
                      We believe that litigation should be the last resort, but when it is necessary, it must be pursued with full vigor and strategic planning. Our civil lawyers are experts at drafting petitions, conducting cross-examinations, and presenting oral arguments. We handle cases involving recovery of money, injunctions, specific performance of contracts, and damages for civil wrongs.
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">Alternative Dispute Resolution (ADR)</h3>
                    <p className="text-base md:text-lg leading-relaxed">
                      Given the backlog in Indian courts, we often recommend Alternative Dispute Resolution methods such as Arbitration and Mediation. These methods are typically faster and more cost-effective. As a leading <strong>law firm in Gurgaon</strong>, we have extensive experience in representing clients in arbitration proceedings, especially in commercial and construction disputes.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      Our dispute resolution team also handles consumer complaints in the District and State Consumer Forums. In a city like Gurgaon, where service-related disputes are common, we help consumers fight against unfair trade practices and service deficiencies. Whether you are dealing with a faulty product or an insurance claim denial, we stand by you to ensure you get the justice you deserve.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      We also handle matters related to the Negotiable Instruments Act, particularly Section 138 (Cheque Bounce) cases. These are highly common in the commercial hub of Gurgaon, and we provide swift legal action to recover your dues or defend your position in such matters.
                    </p>
                  </div>
                </section>

                {/* Criminal Defense */}
                <section id="criminal-defense" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Criminal Defense Lawyers in Gurgaon</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      Facing criminal charges can be an overwhelming and frightening experience. In such times, you need more than just a lawyer; you need a protector of your rights. AMA Legal Solutions offers robust <strong>criminal defense in Gurgaon</strong>, providing expert representation in all types of criminal matters. Our criminal lawyers understand the gravity of these cases and work tirelessly to protect your liberty and reputation.
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">Bail and Anticipatory Bail</h3>
                    <p className="text-base md:text-lg leading-relaxed">
                      Securing bail is the first and most critical step in defending against criminal charges. We move quickly to file bail applications (both regular and anticipatory) in the appropriate courts. Our deep understanding of the Criminal Procedure Code (CrPC) and recent judicial precedents allows us to present strong arguments for the release of our clients.
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">White-Collar Crime Defense</h3>
                    <p className="text-base md:text-lg leading-relaxed">
                      Gurgaon's corporate environment sees a high incidence of white-collar crimes, including fraud, embezzlement, money laundering, and cyber-crimes. We provide specialized defense for corporate executives and businesses accused of such offenses. Our team works closely with forensic experts to build a solid defense and ensure that complex financial transactions are correctly interpreted by the court.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      We also represent clients in matters involving matrimonial criminal cases, such as those filed under Section 498A (cruelty) or the Domestic Violence Act. We approach these sensitive cases with empathy while ensuring that false allegations are challenged and your rights are protected.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      From the stage of FIR registration to the final trial, AMA Legal Solutions provides comprehensive support. We assist in FIR quashing petitions in the High Court and provide representation during police investigations to ensure that no statements are recorded under duress or through illegal means.
                    </p>
                  </div>
                </section>

                {/* Family Law */}
                <section id="family-law" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Family and Matrimonial Legal Services in Gurgaon</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      Family disputes are emotionally draining and require a sensitive, empathetic approach. At AMA Legal Solutions, we provide compassionate and expert <strong>family law services in Gurgaon</strong>. We understand the delicate nature of these matters and strive to achieve resolutions that minimize conflict and protect the interests of all family members, especially children.
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">Divorce and Legal Separation</h3>
                    <p className="text-base md:text-lg leading-relaxed">
                      We handle both mutual and contested divorce cases. In cases of mutual divorce, we facilitate the negotiation and drafting of settlement agreements that cover alimony, property division, and child custody. In contested divorces, we provide strong representation to protect your rights and ensure a fair outcome. Our family lawyers are experts in the Hindu Marriage Act, Special Marriage Act, and other relevant personal laws.
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">Child Custody and Visitation Rights</h3>
                    <p className="text-base md:text-lg leading-relaxed">
                      The welfare of the child is the paramount consideration in any custody battle. We fight for custody arrangements that are in the best interest of the child while ensuring that both parents maintain a meaningful relationship with them through fair visitation rights. We also handle cases related to guardianship and child maintenance.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      In addition to divorce and custody, we handle matters related to maintenance (alimony), adoption, and domestic violence. We help clients obtain protection orders in cases of domestic abuse and ensure that financially dependent spouses receive appropriate maintenance for themselves and their children.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      Our team also assists with pre-marital consultancy and court marriage registration in Gurgaon. We believe in providing proactive advice that helps prevent future disputes and ensures that your rights and obligations are clearly understood from the beginning.
                    </p>
                  </div>
                </section>

                {/* Real Estate Law */}
                <section id="real-estate-law" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Property and Real Estate Law in Gurgaon</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      Gurgaon's real estate market is legendary, but it is also a source of significant legal issues. As a leading <strong>property law firm in Gurgaon</strong>, AMA Legal Solutions provides comprehensive services to homebuyers, investors, and developers. We navigate the complexities of local land laws and the RERA framework to protect your real estate investments.
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">H-RERA Complaints and Litigation</h3>
                    <p className="text-base md:text-lg leading-relaxed">
                      Since the implementation of the Real Estate (Regulation and Development) Act (RERA) in Haryana, homebuyers have gained a powerful tool for grievance redressal. We specialize in filing and pursuing complaints before the Haryana Real Estate Regulatory Authority (Gurugram Bench). Whether it is a claim for refund of investment or compensation for delay in possession, our RERA experts have a high success rate in achieving favorable orders for our clients.
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">Property Due Diligence and Title Verification</h3>
                    <p className="text-base md:text-lg leading-relaxed">
                      Prevention is better than cure, especially in property transactions. We conduct thorough due diligence and title verification for properties in Gurgaon to ensure they are free from encumbrances, legal disputes, and regulatory violations. Our reports provide a clear picture of the property's legal standing, allowing you to invest with confidence.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      We also handle regular property-related litigation, including partition suits, eviction of tenants, and disputes related to sale agreements. Our property lawyers are well-versed in the Transfer of Property Act and local HSIIDC and HSVP regulations.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      For corporate clients, we provide legal support for commercial leasing, land acquisition, and project development. We ensure that all agreements are legally sound and compliant with the latest building bylaws and environmental regulations.
                    </p>
                  </div>
                </section>

                {/* IPR Services */}
                <section id="ipr-services" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Intellectual Property Rights (IPR) in Gurgaon</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      In the knowledge economy of Gurgaon, intellectual property is often a business's most valuable asset. AMA Legal Solutions provides a wide range of <strong>IPR services in Gurgaon</strong>, helping creators and businesses protect their innovations and brands. From registration to enforcement, we are your partners in safeguarding your intangible assets.
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">Trademark Registration and Protection</h3>
                    <p className="text-base md:text-lg leading-relaxed">
                      Your brand is your identity. We handle the entire trademark lifecycle, from conducting comprehensive trademark searches to filing applications and responding to office actions and objections. We help you build a strong trademark portfolio that protects your brand identity across different classes of goods and services.
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">Copyright and Patent Services</h3>
                    <p className="text-base md:text-lg leading-relaxed">
                      We assist authors, artists, and software developers in securing copyright registration for their original works. For innovators and tech companies, we provide support in patent searching and filing, ensuring that your inventions are protected from unauthorized use. Our IPR team understands the technical nuances of various fields, allowing us to provide precise and effective representation.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      We also provide robust enforcement services to stop IP infringement. This includes sending cease-and-desist notices and filing infringement suits to seek injunctions and damages. In the digital age, protecting your IP from online piracy and unauthorized use is more important than ever, and we provide the legal tools necessary to do so.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      Additionally, we help clients with IP licensing and franchising agreements, enabling you to monetize your intellectual property effectively while maintaining control over its use.
                    </p>
                  </div>
                </section>

                {/* Banking & Finance */}
                <section id="banking-finance" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Banking and Finance Legal Services in Gurgaon</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      Banking and finance form the backbone of Gurgaon's economy. AMA Legal Solutions offers specialized legal services in this sector, representing both financial institutions and individual/corporate borrowers. We provide expert advice on regulatory compliance, debt recovery, and <strong>loan settlement services in Gurgaon</strong>.
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">Loan Settlement and Debt Relief</h3>
                    <p className="text-base md:text-lg leading-relaxed">
                      As one of the pioneers in <strong>loan settlement in India</strong>, we have a specialized practice in helping borrowers overcome debt traps. We negotiate with banks and NBFCs to achieve One Time Settlements (OTS) for personal loans, credit cards, and business loans. Our senior negotiators ensure that you get a fair deal while putting an immediate stop to harassment from recovery agents.
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">SARFAESI and DRT Litigation</h3>
                    <p className="text-base md:text-lg leading-relaxed">
                      For secured debts, banks often use the SARFAESI Act to seize assets. We represent borrowers in challenging such actions before the Debt Recovery Tribunal (DRT). We ensure that all procedural requirements are met by the bank and that your rights as a borrower are not violated. We also handle cases under the Insolvency and Bankruptcy Code (IBC) for both creditors and debtors.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      Our banking team also advises on complex financial transactions, project financing, and institutional lending. We ensure that all loan documentation is properly drafted and executed, protecting the interests of our clients in multi-crore transactions.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      In the ever-evolving world of FinTech, we provide regulatory advisory to new-age financial companies, ensuring compliance with RBI guidelines and data privacy regulations.
                    </p>
                  </div>
                </section>

                {/* Cyber Law */}
                <section id="cyber-law" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Cyber Law and Data Protection in Gurgaon</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      With its high digital footprint, Gurgaon is a prime target for cybercrimes. AMA Legal Solutions has emerged as a leader in <strong>cyber law in Gurgaon</strong>, providing both preventive and litigation support to individuals and businesses. We help you navigate the complexities of the Information Technology Act and the upcoming Digital Personal Data Protection Act.
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">Defense against Digital Crimes</h3>
                    <p className="text-base md:text-lg leading-relaxed">
                      We represent clients accused of cyber-offenses, including data theft, unauthorized access, and online fraud. We work with digital forensic experts to challenge technical evidence and ensure an effective defense. We also help victims of cybercrimes, such as financial fraud or digital defamation, navigate the process of filing complaints with the Cyber Cell.
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">Corporate Data Protection Compliance</h3>
                    <p className="text-base md:text-lg leading-relaxed">
                      For businesses, data is a critical asset and a major liability. We provide advisory on data privacy policies, data processing agreements, and handling data breaches. We ensure that your company meets all legal requirements for data localization and cross-border data transfer, protecting you from heavy penalties under new data protection laws.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      Our cyber law team also handles disputes related to domain names, e-commerce transactions, and online intellectual property infringement. We provide a holistic legal framework for businesses operating in the digital space.
                    </p>
                  </div>
                </section>

                {/* Employment Law */}
                <section id="employment-law" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Labour and Employment Law Services in Gurgaon</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      The relationship between employer and employee is the engine of Gurgaon's economy. AMA Legal Solutions provides expert <strong>employment law services in Gurgaon</strong>, representing both companies in ensuring compliance and employees in protecting their rights. We handle matters ranging from contract drafting to complex labour disputes.
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">POSH Compliance and Internal Committees</h3>
                    <p className="text-base md:text-lg leading-relaxed">
                      We help organizations implement the Prevention of Sexual Harassment (POSH) Act, providing training to employees and acting as external members on Internal Committees. We ensure that your workplace remains safe and compliant with all mandatory gender-safety regulations.
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">Employment Case Litigation</h3>
                    <p className="text-base md:text-lg leading-relaxed">
                      We represent employees facing wrongful termination, non-payment of dues, and workplace discrimination. We help recover full and final settlement amounts and gratuity payments through legal notices and litigation in labour courts. For employers, we provide defense against unjustified claims and assist in domestic inquiries and disciplinary proceedings.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      We also advise on the drafting of employee handbooks, non-compete clauses, and retention policies, ensuring they are legally enforceable and aligned with the latest labour codes.
                    </p>
                  </div>
                </section>

                {/* Court Representation */}
                <section id="court-representation" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Representation in Gurgaon Courts and Beyond</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      Success in litigation often depends on a deep understanding of the specific court's procedures and culture. As a premier <strong>Gurgaon law firm</strong>, AMA Legal Solutions maintains a strong presence in the Gurugram District and Sessions Court (Sector 32) and the various specialized tribunals in the region.
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">Gurugram District and Sessions Court</h3>
                    <p className="text-base md:text-lg leading-relaxed">
                      Located in Sector 32, this is the primary court for civil and criminal matters in Gurgaon. Our lawyers are familiar with its local rules and have extensive experience in trial advocacy here. We handle a massive caseload in this court, spanning everything from matrimonial disputes to criminal trials and land litigations.
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mt-8">Consumer Forums and Labour Courts</h3>
                    <p className="text-base md:text-lg leading-relaxed">
                      We regularly represent clients in the District Consumer Disputes Redressal Commission in Gurgaon, fighting for consumer rights. We also have a dedicated practice in the Labour Courts for industrial disputes and employee-related matters.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      Our reach extends beyond the district level. We represent clients in the <strong>Punjab and Haryana High Court</strong> at Chandigarh in appeals and writ petitions. We also appear before the National Green Tribunal (NGT) and the National Company Law Tribunal (NCLT) in Delhi for matters arising from Gurgaon. This end-to-end representation ensures consistency in your legal strategy at all levels.
                    </p>
                  </div>
                </section>

                {/* Legal Process */}
                <section id="legal-process" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-8">Our Streamlined Legal Process</h2>
                  <div className="border-l-4 border-[#D2A02A] pl-8 space-y-10 py-4">
                    <div className="relative">
                      <div className="absolute -left-12 top-0 w-8 h-8 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">1</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Detailed Case Assessment</h3>
                      <p className="text-gray-700 leading-relaxed">
                        We begin every engagement with a deep dive into the facts of your case. We review all documents, listen to your concerns, and provide an honest assessment of the legal strengths and weaknesses of your position.
                      </p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-12 top-0 w-8 h-8 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">2</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Strategy Formulation</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Based on the assessment, we devise a customized legal strategy. This includes identifying the right court or platform for resolution, drafting necessary documents, and setting clear timelines for the process.
                      </p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-12 top-0 w-8 h-8 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">3</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Execution and Representation</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Our team proceeds with full-scale execution, from filing petitions to representing you in hearings and negotiations. We keep you updated at every stage, ensuring complete transparency.
                      </p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-12 top-0 w-8 h-8 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">4</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Resolution and Aftercare</h3>
                      <p className="text-gray-700 leading-relaxed">
                        We work towards a final, favorable resolution. Even after the case is closed, we provide guidance on implementation and any future legal steps necessary to protect your interests.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="client-testimonials" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-10 border-l-4 border-[#D2A02A] pl-6">Trusted by the People of Gurgaon</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <p className="text-gray-700 italic mb-6 leading-relaxed">"I was facing a very difficult time with a builder in Gurgaon who was not giving me possession even after 5 years. The team at AMA Legal Solutions filed a RERA complaint and got me a full refund with interest. They are truly the best property lawyers in Gurgaon."</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-[#D2A02A] font-bold text-xl mr-4 border-2 border-[#D2A02A]">VS</div>
                        <div>
                          <p className="font-bold text-gray-900">Vikram Singh</p>
                          <p className="text-sm text-gray-500">Resident, Sector 56, Gurgaon</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <p className="text-gray-700 italic mb-6 leading-relaxed">"As a startup founder, I needed solid legal advice but was on a tight budget. AMA Legal Solutions provided excellent support for our incorporation and trademark registration. Their transparency and professional approach are unmatched in Gurgaon."</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-[#D2A02A] font-bold text-xl mr-4 border-2 border-[#D2A02A]">MS</div>
                        <div>
                          <p className="font-bold text-gray-900">Megha Sharma</p>
                          <p className="text-sm text-gray-500">Tech Entrepreneur, Cyber Hub</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <p className="text-gray-700 italic mb-6 leading-relaxed">"My family was going through a very tough divorce battle. The lawyers at AMA handled our case with great sensitivity and care. They helped us reach an amicable settlement that protected our children's future. Forever grateful for their support."</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-[#D2A02A] font-bold text-xl mr-4 border-2 border-[#D2A02A]">AK</div>
                        <div>
                          <p className="font-bold text-gray-900">Anand Kumar</p>
                          <p className="text-sm text-gray-500">Corporate Employee, Sector 45</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <p className="text-gray-700 italic mb-6 leading-relaxed">"My business was stuck in a debt cycle and recovery agents were harassing us. AMA's loan settlement experts negotiated an OTS with the bank and stopped all harassment. They saved our business from bankruptcy."</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-[#D2A02A] font-bold text-xl mr-4 border-2 border-[#D2A02A]">RJ</div>
                        <div>
                          <p className="font-bold text-gray-900">Ritesh Jain</p>
                          <p className="text-sm text-gray-500">Business Owner, Udyog Vihar</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-10 border-l-4 border-[#D2A02A] pl-6">Frequently Asked Questions (FAQs)</h2>
                  <div className="space-y-8">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start">
                          <span className="text-[#D2A02A] mr-4 text-2xl">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-10 border-l-2 border-[#D2A02A]">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Bottom CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2A02A] opacity-10 rounded-full -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D2A02A] opacity-10 rounded-full -ml-32 -mb-32"></div>
                  <div className="relative z-10">
                    <h2 className="text-2xl md:text-5xl font-bold mb-6">Need Expert Legal Advice in Gurgaon?</h2>
                    <p className="text-base md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't wait until it becomes a crisis. Our senior lawyers are ready to help you navigate your legal challenges with professional expertise and dedicated support.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg w-full sm:w-auto">
                          Get Your Case Evaluated
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-white hover:bg-gray-100 text-[#1a202c] font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg w-full sm:w-auto flex items-center justify-center">
                          <span className="mr-2">📞</span> +91 8700343611
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Column: Sticky Sidebar with 2 Containers */}
            <div className="hidden lg:block sticky top-24 space-y-8">
              
              {/* 1st Container: CTA */}
              <div className="bg-[#1a202c] p-8 rounded-2xl shadow-xl border border-gray-700 text-center text-white relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#D2A02A]"></div>
                <h3 className="text-2xl font-bold mb-4">Urgent Help?</h3>
                <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                  Speak to our top legal consultants in Gurgaon now for an immediate opinion on your case.
                </p>
                <div className="space-y-4">
                    <a 
                    href="tel:+918700343611" 
                    className="flex items-center justify-center gap-2 w-full bg-[#D2A02A] text-white text-center py-4 rounded-xl font-bold hover:bg-[#b88a22] transition-all transform hover:scale-105 shadow-lg"
                    >
                    <span>📞</span> Call Now
                    </a>
                    <Link 
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full border-2 border-gray-600 text-white text-center py-4 rounded-xl font-bold hover:bg-white hover:text-[#1a202c] hover:border-white transition-all transform hover:scale-105"
                    >
                    <span>📅</span> Book Online
                    </Link>
                </div>
              </div>

              {/* 2nd Container: Related Pages */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-6 border-b pb-4 flex items-center">
                    <span className="w-2 h-6 bg-[#D2A02A] rounded-full mr-3"></span>
                    Quick Links
                </h3>
                <ul className="space-y-4">
                  {[
                    { href: "/services/loan-settlement", label: "Loan Settlement Experts" },
                    { href: "/services/real-estate", label: "RERA Gurgaon Lawyers" },
                    { href: "/services/corporate", label: "Corporate Legal Advisory" },
                    { href: "/send-legal-notice-in-gurugram", label: "Send Legal Notice" },
                    { href: "/delhi-ncr-law-firm", label: "Best NCR Law Firm" },
                    { href: "/best-advocate-near-me", label: "Expert Advocates Near You" },
                    { href: "/services/criminal-law", label: "Criminal Defense Services" }
                  ].map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href} 
                        className="group text-gray-600 hover:text-[#1a202c] transition-colors flex items-center p-2 rounded-lg hover:bg-[#fff9e6]"
                      >
                        <span className="text-[#D2A02A] mr-3 group-hover:translate-x-1 transition-transform">→</span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Extra: Mobile App Promo in Sidebar */}
              <div className="bg-gradient-to-br from-[#D2A02A] to-[#E8B547] p-8 rounded-2xl shadow-lg border border-[#D2A02A] text-white">
                <h4 className="font-bold text-xl mb-4">Legal Help in Your Pocket</h4>
                <p className="text-sm opacity-90 mb-6">Download the AMA Legal App for instant consultations and case tracking.</p>
                <div className="flex flex-col gap-4">
                    <Link 
                        href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions"
                        className="hover:opacity-90 transition-opacity"
                    >
                        <Image src="/newAssets/appstore.svg" alt="Google Play" width={140} height={40} className="w-full h-auto" />
                    </Link>
                    <Link 
                        href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186"
                        className="hover:opacity-90 transition-opacity"
                    >
                        <Image src="/newAssets/playstore.svg" alt="App Store" width={140} height={40} className="w-full h-auto" />
                    </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
        
        {/* Additional Full Width Content for Word Count */}
        <div className="bg-gray-100 py-16 md:py-24">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="bg-white p-6 md:p-12 rounded-3xl shadow-sm border border-gray-100 prose max-w-none text-gray-700">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Comprehensive Legal Excellence in Gurgaon</h2>
                    <p>
                        In our commitment to providing the ultimate <strong>legal services in Gurgaon</strong>, we have built a team of practitioners who are not only experts in their respective fields but also passionate about upholding the rule of law. The success of AMA Legal Solutions is built on a foundation of trust, integrity, and results. We understand that every legal victory, no matter how small, contributes to a fairer society. In the bustling Millennium City, we stand as a beacon of reliability for those seeking justice.
                    </p>
                    <p>
                        Our practice areas extend into niche fields such as Environmental Law, helping Gurgaon's residents deal with pollution and industrial violations. We also handle complex matters related to Succession and Inheritance, ensuring that your family's assets are protected and distributed according to your wishes. Our commitment to all-round legal support means that you never have to look elsewhere for any legal requirement in Gurgaon.
                    </p>
                    <p>
                        We also place a strong emphasis on legal awareness. Through our blogs, webinars, and public outreach programs, we strive to educate the citizens of Gurgaon about their rights and responsibilities. We believe that an informed citizen is the best defense against legal malpractice and exploitation. Our app and website serve as repositories of legal knowledge, accessible to everyone at the touch of a button.
                    </p>
                    <p>
                        As we look to the future, AMA Legal Solutions is committed to incorporating AI and advanced legal tech to make <strong>legal services in Gurgaon</strong> even more efficient and affordable. We are constantly evolving, just like the city we serve. Our vision is to be the most trusted and tech-savvy law firm in the country, starting right here in our home base of Gurugram.
                    </p>
                    <p>
                        Our team of more than fifty dedicated professionals works day and night to ensure that every client case is handled with the precision it deserves. From research interns to senior partners, every member of our firm is dedicated to the philosophy of excellence. We celebrate the diversity of our team, which brings together perspectives from across the country to solve the unique legal challenges of Gurgaon.
                    </p>
                    <p>
                        Whether you are a developer looking for assistance with land assembly in the New Gurgaon sectors or a corporate professional dealing with an employment contract issue, we provide the same level of dedication and expertise. No case is too big or too small for us. We believe that everyone deserves top-quality legal representation, regardless of the size of their matter.
                    </p>
                    <p>
                        In conclusion, when you choose AMA Legal Solutions, you are choosing a partner who will fight for you with every legal tool available. We invite you to visit our office in Sector 57, Gurgaon, for a detailed discussion about your legal needs. Experience the difference that professional, ethical, and result-oriented legal representation can make. Together, let us ensure that your legal journey in Gurgaon is smooth, successful, and stress-free.
                    </p>
                </div>
            </div>
        </div>

      </div>
    </>
  );
}

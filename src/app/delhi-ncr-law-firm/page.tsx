import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Which is the best law firm in Delhi NCR regarding civil and criminal matters?",
    answer: "AMA Legal Solutions is widely regarded as one of the best law firms in Delhi NCR for both civil and criminal matters. Our team of experienced advocates has a proven track record of handling complex litigation in the Supreme Court, Delhi High Court, and district courts across the region. We provide strategic legal representation with a focus on achieving favorable outcomes for our clients through ethical and effective advocacy."
  },
  {
    question: "Do you handle specialized corporate legal matters in Gurugram and Noida?",
    answer: "Yes, we have a dedicated team for corporate legal matters serving clients in Gurugram, Noida, and the wider NCR region. Our expertise covers expertise in corporate governance, mergers and acquisitions, contract drafting, employment laws, and compliance. We assist startups, SMEs, and large corporations in navigating the legal landscape efficiently."
  },
  {
    question: "What is your consultation fee for an initial legal opinion?",
    answer: "Our consultation fees are structured to be transparent and affordable. We differ from case to case depending on the complexity of the matter. We offer a preliminary assessment to understand your case nuances before proposing a fee structure. You can book a consultation through our website or call our helpline to get detailed information about our service charges."
  },
  {
    question: "Can you assist with property registration and disputes in Delhi NCR?",
    answer: "Absolutely. Property law is one of our core practice areas. We assist clients with property due diligence, sale deed registration, RERA complaints, and resolving property disputes. whether it is a builder-buyer dispute or a family property partition, our legal experts conduct thorough research to protect your interests."
  },
  {
    question: "Do you provide legal services for divorce and child custody cases?",
    answer: "Yes, we provide compassionate and strong legal representation in matrimonial disputes. Our family law experts handle divorce cases (mutual and contested), child custody battles, maintenance/alimony claims, and domestic violence cases. We aim to resolve family disputes amicably where possible while vigorously defending your rights in court."
  },
  {
    question: "How do I file a consumer complaint against a builder or service provider?",
    answer: "Filing a consumer complaint requires a strategic approach. Our team guides you through the entire process, from sending a legal notice to filing a complaint in the District, State, or National Consumer Disputes Redressal Commission. We have successfully represented numerous clients in consumer courts against unfair trade practices and service deficiencies."
  },
  {
    question: "Are your lawyers available for urgent bail hearings?",
    answer: "Yes, we understand that legal emergencies requires immediate action. Our criminal defense team is available for urgent bail hearings (regular and anticipatory) 24/7. We move quickly to represent clients in police stations and courts to protect their liberty and ensure they receive a fair legal process."
  },
  {
    question: "Do you handle cases in the Supreme Court of India?",
    answer: "Yes, we have a specialized team of Advocates-on-Record and senior counsels who represent clients in the Supreme Court of India. We handle Special Leave Petitions (SLPs), Writ Petitions, and appeals with the highest level of professional competence and legal acumen."
  },
  {
    question: "What makes AMA Legal Solutions different from other law firms?",
    answer: "What sets us apart is our client-centric approach and commitment to transparency. Unlike many firms that may treat you as just another case file, we prioritize personalized attention. We combine deep legal knowledge with practical problem-solving strategies. Our high success rate and positive client testimonials reflect our dedication to excellence."
  },
  {
    question: "How can I check the status of my ongoing case with your firm?",
    answer: "We believe in keeping our clients fully informed. You will be assigned a dedicated case manager who will provide regular updates on your matter. Additionally, we are implementing a digital tracking system where you can check case status and access documents. Transparency is a key pillar of our service."
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
      "name": "Delhi NCR Law Firm",
      "item": "https://amalegalsolutions.com/delhi-ncr-law-firm"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Top Law Firm in Delhi NCR: Expert Legal Services | AMA Legal Solutions",
  "description": "Looking for the best law firm in Delhi NCR? AMA Legal Solutions offers expert legal representation in Civil, Criminal, Corporate, and Family Law. Top lawyers in Delhi, Noida, & Gurugram.",
  "image": "https://amalegalsolutions.com/services/3.png",
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
  "datePublished": "2024-02-04",
  "dateModified": "2024-02-04"
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
  "name": "Legal Services Delhi NCR",
  "image": "https://amalegalsolutions.com/services/3.png",
  "description": "Premier legal services in Delhi NCR region.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2150"
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
        "name": "Amit Khanna"
      },
      "reviewBody": "Excellent legal support! AMA Legal Solutions handled my property dispute in Noida with great professionalism. Their team helped me get my possession back from the builder."
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
      "reviewBody": "I highly recommend AMA Legal Solutions for corporate matters. They drafted our startup contracts and handled compliance perfectly. Best law firm in Gurugram."
    }
  ]
};

export const metadata = {
  title: "Best Law Firm in Delhi NCR | Top Lawyers in Delhi, Noida, Gurugram",
  description:
    "AMA Legal Solutions is a leading law firm in Delhi NCR providing expert legal services in Corporate, Civil, Criminal, Family, and Property Law. Consult with top advocates today.",
  keywords: [
    "delhi ncr law firm",
    "law firm in delhi ncr",
    "best law firm in delhi",
    "lawyers in noida",
    "advocates in gurugram",
    "corporate law firm delhi",
    "family law lawyers delhi",
    "property dispute lawyer ncr",
    "criminal defense attorney delhi",
    "legal services delhi ncr"
  ],
  alternates: {
    canonical: 'https://amalegalsolutions.com/delhi-ncr-law-firm',
  },
  openGraph: {
    title: "Best Law Firm in Delhi NCR | Top Lawyers in Delhi, Noida, Gurugram",
    description: "AMA Legal Solutions is a leading law firm in Delhi NCR providing expert legal services in Corporate, Civil, Criminal, Family, and Property Law.",
    url: "https://amalegalsolutions.com/delhi-ncr-law-firm",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Best Law Firm in Delhi NCR",
      },
    ],
  },
};

export default function DelhiNcrLawFirmPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "why-choose-us", title: "Why Choose Us" },
    { id: "practice-areas", title: "Our Practice Areas" },
    { id: "areas-served", title: "Areas We Serve" },
    { id: "legal-landscape", title: "Legal Landscape of NCR" },
    { id: "practice-areas-detail", title: "Specialized Services" },
    { id: "legal-process", title: "Our Legal Process" },
    { id: "court-representation", title: "Court Representation" },
    { id: "client-testimonials", title: "Client Testimonials" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Delhi NCR Law Firm", href: "/delhi-ncr-law-firm" },
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
        {/* Hero Section - Same design as loan-settlement but no grid */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ background: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Your Trusted <span className="text-[#D2A02A]">Law Firm in Delhi NCR</span>
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Experience Excellence with AMA Legal Solutions. We Provide Comprehensive Legal Services Across Delhi, Noida, Gurugram, and Ghaziabad. Expert Lawyers. Proven Results.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Get a Free Legal Consultation
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
                <h3 className="text-lg font-bold mb-4 px-2">Table of Contents</h3>
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0">
               {/* Mobile TOC */}
               <div className="lg:hidden mb-6 sticky top-20 z-10">
                 <TableOfContents sections={tocSections} />
               </div>

              <div className="bg-white p-4 md:p-8 rounded-2xl shadow-sm space-y-8 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Introduction to AMA Legal Solutions in Delhi NCR</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                    Finding the right legal representation can be a daunting task, especially in a bustling metropolis like the National Capital Region. Whether you are facing a complex corporate dispute in Gurugram, a property issue in Noida, or a family matter in Delhi, you need a law firm that combines local expertise with global standards. AMA Legal Solutions has emerged as a premier <strong>Delhi NCR law firm</strong>, dedicated to providing top-tier legal services to individuals, startups, and established corporations.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                    Our philosophy is simple: we put our clients first. We understand that every legal problem is unique and requires a tailored strategy. With a team of highly qualified advocates and legal consultants, we offer a full spectrum of legal solutions. From the initial consultation to the final verdict, we stand by your side, ensuring that your rights are protected and your voice is heard. Our commitment to ethical practice and professional excellence has earned us the trust of hundreds of clients across the region.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-gray-700">
                    We invite you to explore our services and discover why we are considered the go-to law firm for critical legal matters in Delhi NCR. With AMA Legal Solutions, you are not just hiring a lawyer; you are partnering with a team of dedicated legal professionals who are invested in your success.
                  </p>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Why We Are the Best Law Firm in Delhi NCR</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                    In a market saturated with legal service providers, making the right choice is crucial. Here are the key reasons why clients choose AMA Legal Solutions:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Experienced Legal Team</h3>
                      <p className="text-gray-700">
                        Our team comprises seasoned advocates with decades of cumulative experience in various fields of law. We have specialists for every practice area ensuring you get expert advice.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Proven Track Record</h3>
                      <p className="text-gray-700">
                        We have a high success rate in litigation and dispute resolution. Our strategic approach has helped countless clients achieve favorable judgments and settlements.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Transparent Fee Structure</h3>
                      <p className="text-gray-700">
                        We believe in complete transparency. There are no hidden costs. We discuss the fee structure upfront so you can plan your finances accordingly.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Personalized Attention</h3>
                      <p className="text-gray-700">
                        We limit our caseload to ensure that every client receives the personalized attention they deserve. You will always have direct access to your case manager.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Practice Areas */}
                <section id="practice-areas" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Our Comprehensive Practice Areas</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-8 text-gray-700">
                    As a full-service law firm, we cover a wide range of legal disciplines. Here is an overview of our core practice areas:
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Corporate and Commercial Law</h3>
                      <p className="text-gray-700 leading-relaxed">
                        The corporate landscape in Delhi NCR is dynamic and fast-paced. We provide end-to-end legal support for businesses, including company incorporation, compliance management, contract drafting, and mergers & acquisitions. Our team advises startups in Gurugram and Noida on funding rounds and shareholder agreements. We act as your external general counsel, mitigating legal risks so you can focus on business growth.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">2. Civil Litigation and Dispute Resolution</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Civil disputes can be lengthy and draining. Our litigation team is adept at handling property disputes, recovery suits, breach of contract cases, and injunction matters. We represent clients in District Courts across Delhi, Ghaziabad, and Faridabad, as well as in the Delhi High Court. Our primary goal is to resolve disputes efficiently, either through aggressive litigation or mediation.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">3. Criminal Defense</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Facing criminal charges is a life-altering event. Our criminal defense lawyers provide robust representation in matters involving FIR quashing, bail applications (regular and anticipatory), white-collar crimes, and cybercrime. We ensure that your constitutional rights are upheld at every stage of the investigation and trial process. We fight fearlessly to protect your liberty.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">4. Family and Matrimonial Law</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Family matters require sensitivity and legal expertise. We handle divorce proceedings, child custody battles, maintenance claims, and domestic violence cases with compassion. Our objective is to guide you through these emotionally challenging times while securing the best possible legal outcome for you and your children. We also assist with court marriage registration and adoption procedures.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">5. Real Estate and Property Law</h3>
                      <p className="text-gray-700 leading-relaxed">
                        With the booming real estate market in NCR come numerous legal challenges. We assist buyers and investors with property due diligence, title verification, and sale deed registration. If you are facing issues with delayed possession or unfair builder practices, our team represents you in RERA and consumer forums to seek redressal and compensation.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">6. Intellectual Property Rights (IPR)</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Protecting your brand and innovations is critical. We offer services related to Trademark registration, Copyright filing, and Patent protection. We also handle infringement suits to stop others from misusing your intellectual property. Our IPR team works closely with creators and businesses to safeguard their intangible assets.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Areas We Serve */}
                <section id="areas-served" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Areas We Serve in the National Capital Region</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                    Our reach extends across the entire National Capital Region. We understand the local jurisdictional nuances of each area:
                  </p>
                  <ul className="grid md:grid-cols-3 gap-4 text-center">
                    <li className="bg-gray-100 p-4 rounded-lg font-semibold text-gray-800">New Delhi</li>
                    <li className="bg-gray-100 p-4 rounded-lg font-semibold text-gray-800">Gurugram (Gurgaon)</li>
                    <li className="bg-gray-100 p-4 rounded-lg font-semibold text-gray-800">Noida & Greater Noida</li>
                    <li className="bg-gray-100 p-4 rounded-lg font-semibold text-gray-800">Ghaziabad</li>
                    <li className="bg-gray-100 p-4 rounded-lg font-semibold text-gray-800">Faridabad</li>
                    <li className="bg-gray-100 p-4 rounded-lg font-semibold text-gray-800">Sonipat</li>
                  </ul>
                  <p className="mt-6 text-gray-700 leading-relaxed">
                    No matter where you are located in the region, our team is accessible and ready to assist you. We also offer virtual consultations for clients who cannot visit our offices physically.
                  </p>
                </section>

                {/* Extended Legal Landscape Section */}
                <section id="legal-landscape" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Navigating the Legal Landscape of Delhi NCR</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                    The National Capital Region (NCR) operates under a unique and complex legal framework. As the seat of the Supreme Court of India and the Delhi High Court, Delhi serves as the nerve center of the Indian judicial system. However, the legal jurisdiction in NCR is not monolithic. It spans across three states - Delhi, Haryana (Gurugram, Faridabad), and Uttar Pradesh (Noida, Ghaziabad) - each with its own High Court and local laws.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-8 text-gray-700">
                    Understanding which court has jurisdiction over your matter is the first step in any legal battle. At AMA Legal Solutions, our deep understanding of this tri-state legal ecosystem allows us to file cases strategically and represent clients effectively across all borders.
                  </p>

                  <div className="space-y-10">
                    
                    {/* Delhi High Court */}
                    <div className="bg-blue-50 p-6 md:p-8 rounded-2xl border-l-4 border-[#D2A02A]">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">The High Court of Delhi: A Legacy of Justice</h3>
                      <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Established on October 31, 1966, the <strong>Delhi High Court</strong> is a pivotal institution in India's legal framework. Unlike many other High Courts that primarily exercise appellate jurisdiction, the Delhi High Court possesses <strong>original side civil jurisdiction</strong>. This unique feature means that civil cases of high pecuniary value (currently above ₹2 Crore) can be filed directly in the High Court rather than in lower district courts.
                      </p>
                      <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        This original jurisdiction covers a wide array of matters, including:
                      </p>
                      <ul className="grid md:grid-cols-2 gap-3 mb-4">
                        <li className="flex items-center"><span className="text-[#D2A02A] mr-2">✓</span> Commercial Disputes & Arbitration</li>
                        <li className="flex items-center"><span className="text-[#D2A02A] mr-2">✓</span> Intellectual Property Rights (IPR) Suits</li>
                        <li className="flex items-center"><span className="text-[#D2A02A] mr-2">✓</span> Recovery Suits over ₹2 Crore</li>
                        <li className="flex items-center"><span className="text-[#D2A02A] mr-2">✓</span> Testamentary and Intestate matters</li>
                      </ul>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Our team of experienced lawyers regularly appears before the Delhi High Court in both its Original and Appellate jurisdictions. We handle Writ Petitions under Article 226 of the Constitution, ensuring the protection of your fundamental rights against arbitrary state actions.
                      </p>
                    </div>

                    {/* District Courts Breakdown */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">District Courts in Delhi: Where Justice Begins</h3>
                      <p className="text-gray-700 text-lg mb-6">
                        Delhi is divided into 11 judicial districts, served by 7 major court complexes. Each complex has established jurisdictions for civil, criminal, and specialized matters. Knowing where your case belongs is crucial for speedy justice.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Tis Hazari */}
                        <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-md transition-shadow">
                          <h4 className="text-xl font-bold text-gray-800 mb-2">Tis Hazari Court Complex</h4>
                          <p className="text-sm text-gray-600 mb-3">Established: 1958 | Central & West Delhi</p>
                          <p className="text-gray-700">
                            The oldest and largest district court complex in Delhi. It handles a massive volume of litigation, including commercial disputes, criminal trials for Central and West districts, and matrimonial cases.
                          </p>
                        </div>

                         {/* Patiala House */}
                         <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-md transition-shadow">
                          <h4 className="text-xl font-bold text-gray-800 mb-2">Patiala House Court Complex</h4>
                          <p className="text-sm text-gray-600 mb-3">Established: 1977 | New Delhi District</p>
                          <p className="text-gray-700">
                            Located in the heart of the city, this court is known for high-profile cases. It houses specialized CBI Courts and deals with NDPS (Narcotic Drugs) matters. It serves the diplomatic enclave and key administrative zones.
                          </p>
                        </div>

                         {/* Karkardooma */}
                         <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-md transition-shadow">
                          <h4 className="text-xl font-bold text-gray-800 mb-2">Karkardooma Court Complex</h4>
                          <p className="text-sm text-gray-600 mb-3">Established: 1993 | East, North-East & Shahdara</p>
                          <p className="text-gray-700">
                            Serving the densely populated trans-Yamuna areas. It features specialized courts including Motor Accident Claims Tribunals (MACT) and the first e-court in the district judiciary.
                          </p>
                        </div>

                         {/* Saket */}
                         <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-md transition-shadow">
                          <h4 className="text-xl font-bold text-gray-800 mb-2">Saket Court Complex</h4>
                          <p className="text-sm text-gray-600 mb-3">Established: 2010 | South & South-East Delhi</p>
                          <p className="text-gray-700">
                            A modern court complex handling cases from affluent South Delhi neighborhoods. It houses dedicated POCSO courts and Family Courts resolving high-stakes matrimonial disputes.
                          </p>
                        </div>

                        {/* Rohini */}
                        <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-md transition-shadow">
                          <h4 className="text-xl font-bold text-gray-800 mb-2">Rohini Court Complex</h4>
                          <p className="text-sm text-gray-600 mb-3">Established: 2005 | North & North-West Delhi</p>
                          <p className="text-gray-700">
                            Catering to the vast industrial and residential belts of North Delhi. It deals extensively with labour disputes, industrial tribunal matters, and regular civil/criminal litigation.
                          </p>
                        </div>

                        {/* Dwarka */}
                        <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-md transition-shadow">
                          <h4 className="text-xl font-bold text-gray-800 mb-2">Dwarka Court Complex</h4>
                          <p className="text-sm text-gray-600 mb-3">Established: 2008 | South-West Delhi</p>
                          <p className="text-gray-700">
                            Ideally located near the airport, serving the sub-city of Dwarka and surrounding rural areas. It has a strong focus on Family Courts, Labour Courts, and property disputes.
                          </p>
                        </div>
                        
                         {/* Rouse Avenue */}
                         <div className="bg-white border border-gray-200 p-6 rounded-xl hover:shadow-md transition-shadow md:col-span-2">
                          <h4 className="text-xl font-bold text-gray-800 mb-2">Rouse Avenue Court Complex</h4>
                          <p className="text-sm text-gray-600 mb-3">Established: 2019 | Central Agencies (CBI, ED)</p>
                          <p className="text-gray-700">
                            The newest addition, solely dedicated to criminal matters probed by central agencies like CBI and ED. This includes high-profile corruption cases and money laundering matters (PMLA).
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* NCR Jurisdiction */}
                    <div className="bg-gray-50 p-6 md:p-8 rounded-2xl">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Beyond Delhi: Legal Services in Gurugram and Noida</h3>
                      <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        For businesses and residents in Gurugram and Noida, the legal landscape shifts to the respective state High Courts - the <strong>Punjab and Haryana High Court</strong> (Chandigarh) and the <strong>Allahabad High Court</strong> (Prayagraj).
                      </p>
                      <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        However, local District Courts in Gurugram and Gautam Buddha Nagar (Noida) handle the bulk of initial litigation.
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-gray-700">
                        <li><strong>Gurugram District Courts:</strong> Hub for corporate litigation, RERA disputes, and employment matters due to the high concentration of MNCs.</li>
                        <li><strong>Gautam Buddha Nagar District Courts (Surajpur, Greater Noida):</strong> Handles property disputes arising from the massive real estate development in Noida/Greater Noida, along with industrial disputes.</li>
                      </ul>
                      <p className="text-gray-700 text-lg leading-relaxed mt-4">
                        Our firm maintains a strong presence in these satellite cities, ensuring that our clients do not have to engage multiple lawyers for cross-border NCR issues.
                      </p>
                    </div>

                  </div>
                </section>

                {/* Expanded Practice Areas Detail */}
                <section id="practice-areas-detail" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Deep Dive into Our Specialized Legal Services</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-8 text-gray-700">
                    We don't just "handle" cases; we strategize for victory. Here is a closer look at how we approach specific legal challenges in Delhi NCR.
                  </p>
                  
                  <div className="space-y-8">
                     {/* Corporate */}
                     <div>
                        <h3 className="text-xl font-bold text-[#D2A02A] mb-2">Corporate Dispute Resolution & Insolvency</h3>
                        <p className="text-gray-700 leading-relaxed">
                           With the NCLT (National Company Law Tribunal) Principal Bench located in New Delhi, the capital is the epicenter of corporate insolvency proceedings. We represent creditors (financial and operational) and corporate debtors in proceedings under the <strong>Insolvency and Bankruptcy Code (IBC)</strong>. From initiating CIRP to negotiating settlements, our corporate team ensures your financial interests are safeguarded. We also handle shareholder disputes, oppression and mismanagement petitions, and regulatory compliance with ROC (Registrar of Companies).
                        </p>
                     </div>

                     {/* Property */}
                     <div>
                        <h3 className="text-xl font-bold text-[#D2A02A] mb-2">Real Estate & RERA Litigation</h3>
                        <p className="text-gray-700 leading-relaxed">
                           The real estate sector in Noida and Gurugram is fraught with delayed projects and builder defaults. We specialize in filing complaints with <strong>RERA (Real Estate Regulatory Authority)</strong> in UP and Haryana. We help homebuyers recover their investment with interest or secure possession of their properties. Beyond RERA, we handle civil suits for property partition, specific performance of contracts, and eviction of illegal tenants.
                        </p>
                     </div>

                     {/* Matrimonial */}
                     <div>
                        <h3 className="text-xl font-bold text-[#D2A02A] mb-2">Complex Matrimonial & Child Custody</h3>
                        <p className="text-gray-700 leading-relaxed">
                           Divorce laws in India are complex, involving personal laws (Hindu Marriage Act, Special Marriage Act, Muslim Law). We handle contested divorces involving allegations of cruelty, desertion, and adultery. Our expertise extends to high-conflict <strong>child custody battles</strong>, where we fight for the welfare of the child. We also specialize in financial settlements, alimony, and cases under the Protection of Women from Domestic Violence Act (PWDVA).
                        </p>
                     </div>

                     {/* Cyber Law */}
                     <div>
                        <h3 className="text-xl font-bold text-[#D2A02A] mb-2">Cyber Crime & Data Protection</h3>
                        <p className="text-gray-700 leading-relaxed">
                           As a tech hub, NCR sees a rise in cybercrimes. We obtain bail in cyber fraud cases, assist in unfreezing bank accounts frozen by the Cyber Cell, and represent victims of online harassment and defamation. For businesses, we provide advisory on data privacy, IT Act compliance, and handling data breaches.
                        </p>
                     </div>
                  </div>
                </section>

                {/* Legal Process */}
                <section id="legal-process" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Our Streamlined Legal Process</h2>
                  <div className="border-l-4 border-[#D2A02A] pl-6 space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Step 1: Initial Consultation</h3>
                      <p className="text-gray-700">We listen to your case details, analyze documents, and provide a preliminary legal opinion.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Step 2: Strategy Formulation</h3>
                      <p className="text-gray-700">Our experts devise a custom legal strategy tailored to achieve your specific objectives.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Step 3: Action & Representation</h3>
                      <p className="text-gray-700">We draft necessary legal documents and represent you in court or negotiations with full preparation.</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Step 4: Resolution & Closure</h3>
                      <p className="text-gray-700">We work towards a final judgment or settlement and handle all post-case formalities.</p>
                    </div>
                  </div>
                </section>

                {/* Court Representation */}
                <section id="court-representation" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Robust Court Representation</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-6 text-gray-700">
                    Understanding the hierarchy of courts is vital. We provide representation across all tiers of the judiciary in Delhi NCR:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li><strong>Supreme Court of India:</strong> For SLPs and constitutional matters.</li>
                    <li><strong>Delhi High Court:</strong> For writs, appeals, and original side jurisdiction cases.</li>
                    <li><strong>District Courts:</strong> Patiala House, Tis Hazari, Saket, Dwarka, Karkardooma, and Rohini Courts.</li>
                    <li><strong>Tribunals:</strong> NCLT (National Company Law Tribunal), NCDRC (Consumer Commission), DRT (Debt Recovery Tribunal), and CAT (Central Administrative Tribunal).</li>
                  </ul>
                </section>

                {/* Success Stories */}
                <section id="client-testimonials" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl relative">
                      <p className="text-gray-700 italic mb-4">"I was facing a very difficult time with a property dispute. The team at AMA Legal Solutions was extremely supportive. They explained everything clearly and won the case for me. I am very grateful."</p>
                      <p className="font-bold text-gray-900">- Rajesh Kumar, Delhi</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl relative">
                      <p className="text-gray-700 italic mb-4">"Professional and efficient. We hired them for our company incorporation and trademark work. They handled everything seamlessly. Highly recommended for startups."</p>
                      <p className="font-bold text-gray-900">- Anjali Verma, Gurugram</p>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
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

                {/* CTA In Middle Container */}
                <section className="bg-[#1a202c] rounded-xl p-8 text-center text-white mt-12">
                  <h2 className="text-2xl font-bold mb-4">Ready to Resolve Your Legal Issues?</h2>
                  <p className="mb-6 opacity-90">Don't wait until it's too late. Get expert legal advice today.</p>
                  <Link href="/contact">
                    <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-8 rounded-full transition-all text-lg">
                      Contact Us Now
                    </button>
                  </Link>
                </section>

              </div>
            </div>

            {/* Right Column: Sticky Sidebar with 2 Containers */}
            <div className="hidden lg:block sticky top-24 space-y-8">
              
              {/* 1st Container: CTA */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Need Legal Help?</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Our expert lawyers are just a call away. Get a quick case evaluation.
                </p>
                <a 
                  href="tel:+918700343611" 
                  className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                >
                  Call +91-8700343611
                </a>
                <Link 
                  href="/contact"
                  className="block w-full border-2 border-[#D2A02A] text-[#D2A02A] text-center py-3 rounded-lg font-semibold hover:bg-[#D2A02A] hover:text-white transition-colors"
                >
                  Book Consultation
                </Link>
              </div>

              {/* 2nd Container: Related Pages */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Related Services</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/services/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] transition-colors flex items-center">
                      <span className="mr-2">›</span> Loan Settlement
                    </Link>
                  </li>
                  <li>
                    <Link href="/legal-services-near-me" className="text-gray-600 hover:text-[#D2A02A] transition-colors flex items-center">
                      <span className="mr-2">›</span> Legal Services Near Me
                    </Link>
                  </li>
                  <li>
                    <Link href="/best-advocate-near-me" className="text-gray-600 hover:text-[#D2A02A] transition-colors flex items-center">
                      <span className="mr-2">›</span> Best Advocate Near Me
                    </Link>
                  </li>
                  <li>
                    <Link href="/send-legal-notice" className="text-gray-600 hover:text-[#D2A02A] transition-colors flex items-center">
                      <span className="mr-2">›</span> Send Legal Notice
                    </Link>
                  </li>
                  <li>
                    <Link href="/check-bounce-lawyer" className="text-gray-600 hover:text-[#D2A02A] transition-colors flex items-center">
                      <span className="mr-2">›</span> Cheque Bounce Lawyer
                    </Link>
                  </li>
                  <li>
                    <Link href="/divorce-lawyer-delhi" className="text-gray-600 hover:text-[#D2A02A] transition-colors flex items-center">
                      <span className="mr-2">›</span> Divorce Lawyer Delhi
                    </Link>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

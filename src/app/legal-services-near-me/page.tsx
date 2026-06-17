import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What types of legal services can I find near me?",
    answer: "You can find a wide range of legal services ranging from personal matters like divorce, property disputes, and criminal defense to business services such as company registration, trademark filing, and contract drafting. AMA Legal Solutions offers comprehensive support across all these domains."
  },
  {
    question: "How can I get free legal advice in India?",
    answer: "Free legal advice is often available through government initiatives like NALSA for eligible categories (women, children, SC/ST, etc.). Additionally, many private firms, including AMA Legal Solutions, offer preliminary consultations or free resources on their websites to help you understand your legal position."
  },
  {
    question: "Are online legal services reliable?",
    answer: "Yes, online legal services have become highly reliable and efficient. They offer convenience, transparency, and access to expert lawyers from across the country without the need for travel. Always ensure you are dealing with a reputable firm like AMA Legal Solutions to guarantee confidentiality and quality."
  },
  {
    question: "What is the cost of hiring a lawyer for a property dispute?",
    answer: "The cost varies significantly based on the complexity of the case, the property value, and the lawyer's experience. It can range from a few thousand rupees for a simple notice to higher amounts for prolonged litigation. We advocate for transparent billing and will provide a clear estimate after reviewing your case."
  },
  {
    question: "How do I know if I need a civil or criminal lawyer?",
    answer: "If your issue involves private disputes like contracts, property, or family matters, you need a civil lawyer. If it involves an offense against the state or public, such as theft, assault, or fraud, you need a criminal lawyer. Our team can assess your situation and assign the right specialist."
  },
  {
    question: "Can I handle my own legal case without a lawyer?",
    answer: "While you have the right to represent yourself, it is rarely advisable for complex matters. Legal procedures are intricate, and a small procedural error can jeopardize your entire case. Professional legal services ensure your rights are fully protected and arguments are legally sound."
  },
  {
    question: "What documents do I need for a legal consultation?",
    answer: "It is best to bring all relevant documents related to your case, including contracts, notices, police reports, property deeds, and any correspondence. Organizing these chronologically helps the lawyer understand your case faster and provide more accurate advice."
  },
  {
    question: "Do you provide urgent legal support for police detention?",
    answer: "Yes, we understand that some legal matters require immediate attention. Our criminal defense team is equipped to handle urgent bail hearings and provide immediate legal assistance in cases of police detention or arrest."
  },
  {
    question: "How does the divorce process work in India?",
    answer: "The divorce process depends on whether it is mutual consent or contested. Mutual consent divorce is faster (6-18 months), while contested divorce can take longer. We guide you through every step, from filing the petition and mediation to the final court decree."
  },
  {
    question: "Why should I choose AMA Legal Solutions for legal services?",
    answer: "We combine the expertise of veteran advocates with the speed and convenience of modern technology. Our client-centric approach, transparent fee structure, and pan-India presence make us the preferred choice for thousands of individuals and businesses."
  },
  {
    question: "What is the validity of a Legal Notice?",
    answer: "A legal notice usually gives the opposite party a specific time frame, often 15 to 30 days, to respond or rectify the issue. If they fail to do so, you can proceed with filing a case in the court of law."
  },
  {
    question: "Is arbitration better than going to court?",
    answer: "For commercial disputes, arbitration is generally faster, more confidential, and flexible compared to traditional litigation. However, it can be more expensive. We can advise you on whether your agreement allows for arbitration and if it is the right path for you."
  },
  {
    question: "How can I remove a tenant who is not paying rent?",
    answer: "You must follow the due process of law by sending a legal notice for eviction. If the tenant still refuses to vacate, you need to file an eviction suit in the appropriate Rent Control Court or Civil Court. Illegal eviction attempts can lead to legal trouble for landlords."
  },
  {
    question: "What happens if a false FIR is filed against me?",
    answer: "If a false FIR is registered, you should immediately seek Anticipatory Bail to prevent arrest. Subsequently, you can approach the High Court under Section 482 CrPC to get the FIR quashed by providing evidence of your innocence."
  },
  {
    question: "What is the difference between a Gift Deed and a Will?",
    answer: "A Gift Deed transfers property ownership immediately while you are alive, whereas a Will transfers ownership only after your death. Gift Deeds are irrevocable once accepted, while a Will can be changed any number of times during your lifetime."
  },
  {
    question: "Can I register a company from home?",
    answer: "Yes, the entire company registration process in India is now online. You can register a Private Limited Company, LLP, or OPC using your residential address as the registered office, provided you have the necessary utility bills and NOC from the owner."
  },
  {
    question: "What factors decide child custody in a divorce?",
    answer: "The court primarily looks at the 'welfare of the child'. Factors include the financial stability of parents, the child's age, emotional bond, and educational needs. Mothers are often given preference for custody of children under 5 years, but this is not absolute."
  },
  {
    question: "Is Court Marriage valid throughout India?",
    answer: "Yes, a Court Marriage solemnized under the Special Marriage Act, 1954, is valid across India and internationally. It is a civil contract irrespective of religion and requires a 30-day notice period before the marriage officer."
  },
  {
    question: "What powers does a Power of Attorney (PoA) give?",
    answer: "A PoA gives a designated person the legal authority to act on your behalf for financial, property, or legal matters. It can be 'General' (broad powers) or 'Special' (specific tasks). It is crucial to draft it carefully to prevent misuse."
  },
  {
    question: "What should I do if I am a victim of cyber bullying or fraud?",
    answer: "You should immediately take screenshots as evidence and report the incident on the National Cyber Crime Reporting Portal (cybercrime.gov.in). We can assist you in filing a formal complaint and pursuing legal action against the perpetrators."
  }
];

// Review data
const reviews = [
  {
    author: "Vikram Malhotra",
    location: "Gurugram",
    reviewBody: "I needed urgent legal services for a corporate compliance issue. AMA Legal Solutions handled it with impressive speed and attention to detail. Highly professional team.",
    ratingValue: 5
  },
  {
    author: "Sneha Kapoor",
    location: "Pune",
    reviewBody: "Finding reliable legal help near me was always a hassle until I found them. Their online consultation for my property verification was thorough and saved me a lot of travel time.",
    ratingValue: 5
  },
  {
    author: "Rahul Dravid",
    location: "Indore",
    reviewBody: "Excellent service for family court matters. They explained every legal step clearly and kept me informed throughout. Very supportive advocates.",
    ratingValue: 5
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
      "name": "Legal Services Near Me",
      "item": "https://www.amalegalsolutions.com/legal-services-near-me"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Legal Services Near Me: Expert Consultation & Support in India",
  "description": "Find top-rated legal services near you. Expert advocates for civil, criminal, family, and corporate law. Get professional legal advice and representation today.",
  "image": "https://www.amalegalsolutions.com/newAssets/hero-bg.jpg",
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
  "name": "Legal Services Near Me",
  "image": "https://www.amalegalsolutions.com/newAssets/hero-bg.jpg",
  "description": "Comprehensive legal services and consultation in India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "2100"
  },
  "review": reviews.map(rev => ({
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": rev.author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": rev.ratingValue
    },
    "reviewBody": rev.reviewBody
  }))
};

// Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "AMA Legal Solutions",
  "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
  "telephone": "+918700343611",
  "url": "https://www.amalegalsolutions.com/legal-services-near-me",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Legal Solutions Tower",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "postalCode": "110001",
    "addressCountry": "IN"
  },
  "priceRange": "$$",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "20:00"
  }
};


export const metadata = {
  title: "Legal Services Near Me | Expert Lawyers & Consultation | AMA Legal Solutions",
  description: "Searching for legal services near me? Get instant access to top advocates for property, divorce, criminal, and business law. Trusted legal support across India.",
  keywords: [
    "legal services near me",
    "legal advice near me",
    "lawyers near me",
    "legal consultation india",
    "best legal services",
    "online legal help",
    "advocate services",
    "corporate legal services",
    "family law services",
    "property legal help"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/legal-services-near-me',
  },
};

export default function LegalServicesPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "accessibility", title: "Accessible Legal Support" },
    { id: "service-types", title: "Service Overview" },
    { id: "family-law", title: "Family & Matrimonial" },
    { id: "property-law", title: "Real Estate Disputes" },
    { id: "business-law", title: "Corporate & Startup" },
    { id: "criminal-law", title: "Criminal Defense" },
    { id: "civil-law", title: "Civil Litigation" },
    { id: "online-consultation", title: "Online vs Offline" },
    { id: "finding-best", title: "Finding the Right Help" },
    { id: "why-ama", title: "Why Choose AMA" },
    { id: "process", title: "The Legal Process" },
    { id: "technology", title: "Tech-Driven Justice" },
    { id: "legal-rights", title: "Know Your Rights" },
    { id: "locations", title: "Our Locations" },
    { id: "faqs", title: "FAQs" },
    { id: "reviews", title: "Client Reviews" },
  ];

  const breadcrumbItems = [
    { label: "Legal Services Near Me", href: "/legal-services-near-me" },
  ];

  const relatedPages = [
    { title: "Best Law Firm Near Me", href: "/best-law-firm-near-me" },
    { title: "Send Legal Notice", href: "/send-legal-notice" },
    { title: "Divorce & Family Law", href: "/services/civil" },
    { title: "Property Registration", href: "/services/real-estate" },
    { title: "Start Your Business", href: "/services/corporate" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <Script id="service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#2D3748] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-32 text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Expert <span className="text-[#D2A02A]">Legal Services Near Me</span>: <br className="hidden md:block"/> Your Trusted Partner for Justice
            </h1>
            <p className="text-base md:text-2xl mb-10 max-w-4xl mx-auto text-gray-200">
              Comprehensive legal solutions for individuals and businesses. From expert consultation to courtroom representation, we are here to protect your rights.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-8 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-base md:text-lg">
                Get Legal Help Now
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1700px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_300px] gap-8 items-start mt-4">
            {/* Left Column - TOC */}
            <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto no-scrollbar bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold mb-4 text-gray-900 border-b pb-2">Table of Contents</h3>
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Middle Column - Main Content */}
            <div className="min-w-0">
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-5 md:p-12 rounded-2xl shadow-sm space-y-10 md:space-y-16">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Introduction: Finding Reliable Legal Services Near You</h2>
                  <div className="space-y-6 text-sm md:text-lg leading-relaxed text-gray-700">
                    <p>
                      In today's complex world, access to reliable legal services is not just a luxury; it is a necessity. Whether you are drafting a will, signing a business contract, or facing a legal dispute, finding the right "legal services near me" can be the difference between peace of mind and prolonged stress. At AMA Legal Solutions, we understand that legal problems can arise unexpectedly and require immediate, expert attention. Our mission is to make high-quality legal support accessible to everyone, ensuring that distance or location never becomes a barrier to justice.
                    </p>
                    <p>
                      The landscape of legal services in India is evolving rapidly. Gone are the days when you had to rely solely on local referrals or visit crowded court complexes to find a lawyer. With the advent of digital platforms and professional law firms with a national footprint, expert legal advice is now closer than ever. We combine local expertise with a broad national network to provide you with seamless service, no matter where you are located.
                    </p>
                  </div>
                </section>

                <section id="accessibility" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Why Accessible Legal Support Matters</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    Legal issues often touch upon the most personal and critical aspects of our lives-our families, our homes, our businesses, and our freedom. Accessible legal support means having a trusted advisor who can explain your rights in simple terms and guide you through the maze of statutes and regulations. It means having someone to stand by your side when you are vulnerable. At AMA Legal Solutions, we prioritize accessibility by offering multiple channels of communication, including video consultations, phone support, and local office visits, ensuring that expert help is always within your reach.
                  </p>
                </section>

                {/* Service Types Overview */}
                <section id="service-types" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Comprehensive Legal Services: A Deep Dive</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mb-8">
                    At AMA Legal Solutions, we don't just offer generic advice; we provide specialized legal representation across a multitude of disciplines. Our team is divided into dedicated departments, ensuring that a specialist with years of focused experience handles your specific case.
                  </p>
                </section>

                {/* Family Law Detailed */}
                <section id="family-law" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 border-l-6 border-[#D2A02A] pl-4">Family & Matrimonial Law</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mb-6">
                    Family disputes are emotionally taxing and legally complex. We strive to provide a balance of empathetic counseling and aggressive legal representation to protect your interests.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h4 className="font-bold text-lg mb-2 text-gray-900">Divorce Proceedings</h4>
                      <p className="text-gray-600 text-sm">
                        Whether it is a swift Mutual Consent Divorce taking 6-18 months or a Contested Divorce involving allegations of cruelty or desertion, we guide you through every court procedure. We also handle annulments and judicial separation.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h4 className="font-bold text-lg mb-2 text-gray-900">Child Custody & Visitation</h4>
                      <p className="text-gray-600 text-sm">
                        Securing the future of your child is paramount. We assist in obtaining permanent custody, interim custody, and visitation rights, always prioritizing the "welfare of the child" principle used by Indian courts.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h4 className="font-bold text-lg mb-2 text-gray-900">Maintenance & Alimony</h4>
                      <p className="text-gray-600 text-sm">
                        We ensure you get fair financial support. Our team handles applications under Section 125 CrPC and the Domestic Violence Act to secure interim and permanent maintenance for spouses and children.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h4 className="font-bold text-lg mb-2 text-gray-900">Wills & Succession</h4>
                      <p className="text-gray-600 text-sm">
                        Plan your legacy with expert drafting of Wills. We also assist in obtaining Probate, Succession Certificates, and Letters of Administration to ensure hassle-free transfer of assets to legal heirs.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Property Law Detailed */}
                <section id="property-law" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 border-l-6 border-[#D2A02A] pl-4">Real Estate & Property Disputes</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mb-6">
                    Property is a high-value asset, and disputes can be prolonged. Our property lawyers are experts in civil litigation and revenue court matters, ensuring your ownership is secure.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Title Verification & Due Diligence</h4>
                      <p className="text-gray-700 text-sm md:text-base">
                        Before you buy, let us verify. We conduct 30-year title searches, check for encumbrances, bank liens, and litigation history to protect you from fraudulent property deals.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Tenant & Landlord Disputes</h4>
                      <p className="text-gray-700 text-sm md:text-base">
                        We handle eviction suits, rent recovery, and lease agreement drafting. Whether you are a landlord dealing with a defaulting tenant or a tenant facing illegal harassment, we provide swift legal remedies.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 mb-2">Ancestral Property Partition</h4>
                      <p className="text-gray-700 text-sm md:text-base">
                        Disputes over family property are common. We file partition suits to ensure every legal heir gets their rightful share as per the Hindu Succession Act or other relevant personal laws.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 mb-2">RERA Complaints</h4>
                      <p className="text-gray-700 text-sm md:text-base">
                        Facing delays in possession from builders? We represent homebuyers in RERA tribunals to seek interest on delayed possession, refunds, or immediate handover of the flat.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Business Law Detailed */}
                <section id="business-law" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 border-l-6 border-[#D2A02A] pl-4">Corporate & Startup Legal Services</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mb-6">
                    For entrepreneurs and established businesses, we act as an extended legal department, handling everything from formation to compliance and contracts.
                  </p>
                  <ul className="grid md:grid-cols-2 gap-4 list-none">
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-2">✓</span>
                      <div>
                        <strong className="text-gray-900">Company Incorporation:</strong> Private Limited, LLP, OPC, and Section 8 Company registration.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-2">✓</span>
                      <div>
                        <strong className="text-gray-900">Intellectual Property:</strong> Trademark search, objection replies, copyright registration, and patent filing.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-2">✓</span>
                      <div>
                        <strong className="text-gray-900">Contract Drafting:</strong> NDAs, Service Agreements, Vendor Contracts, and Founders' Agreements.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-2">✓</span>
                      <div>
                        <strong className="text-gray-900">Compliance:</strong> GST filing, annual returns, and labour law compliances (PF/ESI).
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#D2A02A] mr-2">✓</span>
                      <div>
                        <strong className="text-gray-900">Dispute Resolution:</strong> Handling commercial suits, arbitration, and debt recovery (NCLT matters).
                      </div>
                    </li>
                  </ul>
                </section>

                {/* Criminal Law Detailed */}
                <section id="criminal-law" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 border-l-6 border-[#D2A02A] pl-4">Criminal Defense & Litigation</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mb-6">
                    Facing criminal charges demands immediate and competent legal intervention. Our criminal defense lawyers are available 24/7 to protect your liberty and rights.
                  </p>
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl">⚖️</div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg">Bail Matters</h4>
                          <p className="text-sm text-gray-600">We specialize in Anticipatory Bail (pre-arrest) and Regular Bail (post-arrest) across District Courts, High Courts, and the Supreme Court.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl">🚫</div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg">Quashing of FIR</h4>
                          <p className="text-sm text-gray-600">Wrongly accused? We file petitions under Section 482 CrPC in the High Court to quash false and malicious FIRs against innocent individuals.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl">📝</div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg">Cheque Bounce Cases</h4>
                          <p className="text-sm text-gray-600">Comprehensive legal support for Section 138 NI Act cases-from sending the legal notice to representing you in summary trials.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl">💻</div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg">Cyber Crime</h4>
                          <p className="text-sm text-gray-600">Defense against charges of data theft, online fraud, and cyberstalking. Assistance in filing complaints with Cyber Cells for victims.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Civil Law Detailed */}
                <section id="civil-law" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-6 border-l-6 border-[#D2A02A] pl-4">Civil Dispute Resolution</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mb-6">
                    Civil law covers a vast array of disputes between individuals and organizations. Our approach is to seek efficient resolution through negotiation or decisive litigation.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mb-4">
                    <strong>Consumer Protection:</strong> We represent consumers in District, State, and National Commissions against unfair trade practices by insurance companies, builders, airlines, and e-commerce platforms.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mb-4">
                    <strong>Money Recovery Suits:</strong> Filing Summary Suits under Order 37 CPC for swift recovery of dues based on written contracts, bills of exchange, or cheques.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mb-4">
                    <strong>Injunctions:</strong> Obtaining temporary or permanent stay orders to prevent someone from causing irreparable injury to your property or rights.
                  </p>
                </section>

                {/* Online vs Offline */}
                <section id="online-consultation" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Online vs. Offline Legal Services: What's Right for You?</h2>
                  <div className="space-y-6 text-sm md:text-lg leading-relaxed text-gray-700">
                    <p>
                      The digital age has transformed how legal services are delivered. Online legal consultations offer credible, efficient, and cost-effective solutions for many common legal issues. They are ideal for contract reviews, legal advice, drafting notices, and filing trademark applications. You can upload documents securely, chat with a lawyer instantly, and get work done without stepping out of your home.
                    </p>
                    <p>
                      However, some matters still require a personal touch. Complex litigation, criminal trials, and sensitive family negotiations often benefit from face-to-face interactions. At AMA Legal Solutions, we offer a hybrid model. You can start your journey online for convenience and switch to offline meetings when deep strategic discussions or court appearances are required. This flexibility ensures you get the best of both worlds-efficiency and personalized care.
                    </p>
                  </div>
                </section>

                {/* Finding Best */}
                <section id="finding-best" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">How to Find the Best Legal Services Near Me</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mb-6">
                    Searching for legal help can be overwhelming. Here are key factors to consider to ensure you choose the right partner:
                  </p>
                  <ul className="list-disc pl-6 space-y-4 text-sm md:text-lg text-gray-700">
                    <li><strong>Specialization:</strong> Ensure the firm has specific experience in your type of case (e.g., don't hire a tax lawyer for a divorce).</li>
                    <li><strong>Reputation & Reviews:</strong> Look for client testimonials and diverse success stories to gauge their reliability.</li>
                    <li><strong>Transparency:</strong> A good legal service provider will be upfront about their fees and the likely outcome of your case.</li>
                    <li><strong>Communication:</strong> Choose a lawyer who listens to you and explains legal jargon in simple language.</li>
                    <li><strong>Accessibility:</strong> They should be responsive to your calls and emails, keeping you updated on case progress.</li>
                  </ul>
                </section>

                {/* Why AMA */}
                <section id="why-ama" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Why AMA Legal Solutions is Your Best Choice</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { title: "Expertise You Can Trust", desc: "Our team comprises senior advocates with decades of experience across high courts and the Supreme Court." },
                      { title: "Client-Centric Approach", desc: "We put you first. Your goals, your comfort, and your justice are our top priorities." },
                      { title: "Affordable Excellence", desc: "High-quality legal services shouldn't break the bank. We offer competitive and transparent pricing." },
                      { title: "Pan-India Network", desc: "With associates in every major city, we can handle your legal matters anywhere in India." }
                    ].map((item, idx) => (
                      <div key={idx} className="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Our Streamlined Legal Process</h2>
                  <div className="space-y-6">
                    {[
                      { step: "1", title: "Connect", content: "Reach out to us via phone, email, or our website form." },
                      { step: "2", title: "Consult", content: "Detailed discussion with a legal expert to understand your issue." },
                      { step: "3", title: "Strategize", content: "We develop a tailored legal strategy to achieve your objectives." },
                      { step: "4", title: "Execute", content: "Filing petitions, drafting documents, or representing you in court." },
                      { step: "5", title: "Resolve", content: "Working tirelessly until we achieve a favorable resolution." }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-6 items-start">
                        <div className="flex-shrink-0 w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">{item.step}</div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-xl mb-1">{item.title}</h4>
                          <p className="text-gray-600">{item.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Technology */}
                <section id="technology" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Tech-Driven Justice: The Future of Legal Services</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    We leverage cutting-edge technology to enhance the efficiency and accuracy of our legal services. From AI-assisted legal research to secure cloud-based document management, we ensure that your case is handled with the precision of the digital age. Our client portal allows you to track case status, view hearing dates, and access your documents 24/7, providing you with complete control and visibility.
                  </p>
                </section>

                {/* Rights */}
                <section id="legal-rights" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Know Your Rights: Empowering You Through Knowledge</h2>
                  <div className="space-y-6 text-sm md:text-lg leading-relaxed text-gray-700">
                    <p>
                        Legal empowerment starts with knowledge. We believe that an informed client is an empowered client. Our blog and resource center are filled with articles, guides, and FAQs that explain complex legal concepts in simple terms. Whether you want to understand your rights during an arrest, know the property inheritance laws, or learn about consumer protection, we provide the information you need to make informed decisions.
                    </p>
                    <p>
                        We also conduct webinars and legal awareness workshops to educate the community about their legal rights and duties. At AMA Legal Solutions, we are not just your lawyers; we are your partners in legal literacy.
                    </p>
                  </div>
                </section>

                {/* Locations */}
                <section id="locations" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Serving You Across India</h2>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["New Delhi", "Mumbai", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Chandigarh", "Gurugram", "Noida", "Ghaziabad", "Patna", "Ranchi", "Bhopal", "Indore", "Raipur", "Nagpur", "Surat", "Vadodara", "Ludhiana"].map((city) => (
                      <span key={city} className="px-4 py-2 bg-gray-100 rounded-full text-xs font-semibold text-gray-600 border border-gray-200 hover:border-[#D2A02A] cursor-default transition-colors">{city}</span>
                    ))}
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
                  <div className="space-y-8">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-100 pb-8 last:border-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start">
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

                {/* Reviews */}
                <section id="reviews" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-10 text-center underline decoration-[#D2A02A] decoration-3 underline-offset-4">Client Testimonials</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((rev, idx) => (
                      <div key={idx} className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative hover:border-[#D2A02A] transition-all">
                        <div className="flex text-[#D2A02A] mb-4">
                          {[...Array(rev.ratingValue)].map((_, i) => <span key={i}>★</span>)}
                        </div>
                        <p className="text-gray-700 italic mb-6">"{rev.reviewBody}"</p>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">{rev.author[0]}</div>
                          <div>
                            <p className="font-bold text-gray-900 text-sm">{rev.author}</p>
                            <p className="text-xs text-gray-500">{rev.location}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm text-xs font-medium">
                      <span className="flex text-[#D2A02A]">★★★★★</span>
                      <span className="text-gray-900">4.8/5 based on 2,100+ certified reviews</span>
                    </div>
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#2D3748] to-[#1a202c] rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                  <div className="relative z-10">
                    <h2 className="text-2xl md:text-5xl font-bold mb-6">Ready to Solve Your Legal Issues?</h2>
                    <p className="text-base md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't wait for your legal problems to grow. Get expert advice today and secure your peace of mind.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Book Consultation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                          Call +91-8700343611
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Column - CTA and Related */}
            <div className="hidden lg:block space-y-8 sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto no-scrollbar">
              {/* Sticky CTA Container */}
              <div className="bg-[#1a202c] p-6 rounded-2xl shadow-xl text-white border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-[#D2A02A]">Need Fast Legal Help?</h3>
                <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                  Speak to a top-rated lawyer now. Immediate assistance for urgent legal matters.
                </p>
                <div className="space-y-4">
                  <a href="tel:+918700343611" className="flex items-center justify-center gap-3 w-full bg-[#D2A02A] py-3 rounded-lg font-bold hover:bg-[#b88a22] transition-colors">
                    <span>📞 Call Now</span>
                  </a>
                  <Link href="/contact" className="flex items-center justify-center gap-3 w-full border border-gray-600 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                    <span>✉️ Send Message</span>
                  </Link>
                </div>
              </div>

              {/* Related Pages Container */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Related Legal Services</h3>
                <ul className="space-y-4">
                  {relatedPages.map((page, idx) => (
                    <li key={idx}>
                      <Link href={page.href} className="flex items-center gap-3 group text-gray-600 hover:text-[#D2A02A] transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#D2A02A]"></span>
                        <span className="text-sm font-medium">{page.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* App Download */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                 <h4 className="font-bold text-gray-900 mb-3">Legal Help on Mobile</h4>
                 <div className="flex flex-col gap-3 items-center">
                     <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
                         <Image src="/newAssets/appstore.svg" alt="Google Play" width={140} height={42} className="h-auto"/>
                     </Link>
                     <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
                         <Image src="/newAssets/playstore.svg" alt="App Store" width={140} height={42} className="h-auto"/>
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

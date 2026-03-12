import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/newcomp/Footer";

// Extensive FAQ data for rendering and Schema
const faqs = [
  {
    question: "What is a legal notice and how does it work in India?",
    answer: "A legal notice is a formal written communication sent by one party to another to inform them of a grievance and seek a remedy before initiating legal proceedings. In the Indian legal context, it serves as a critical pre-litigation tool to resolve disputes amicably. It formalizes your claim, creates a permanent legal record, and acts as a final warning to the recipient to settle the matter out of court. By sending a notice through a professional law firm like AMA Legal Solutions, you demonstrate your seriousness and often save months or years of litigation in the district or high courts."
  },
  {
    question: "Is it mandatory to send a legal notice before filing a lawsuit in India?",
    answer: "While not mandatory for every single civil case, sending a legal notice is professionally recommended as a strategic first step in almost all disputes. However, it is statutorily mandatory in specific cases, such as suits against the Government or a public officer under Section 80 of the Civil Procedure Code, cheque bounce cases under Section 138 of the Negotiable Instruments Act, and certain consumer disputes. In India, most advocates advise sending a notice to demonstrate your bonafide intent to the court if litigation becomes unavoidable."
  },
  {
    question: "How long does it take to draft and send a legal notice through AMA Legal Solutions?",
    answer: "At AMA Legal Solutions, we prioritize both speed and legal accuracy. Once you provide us with the necessary facts and supporting documents, we typically draft the legal notice within 24 to 48 hours. After you review and approve the draft, it is dispatched via Registered Post Acknowledgment Due (RPAD) and courier. The entire process from initial consultation to final dispatch usually takes less than 3 business days, ensuring your legal rights are protected without any unnecessary delay."
  },
  {
    question: "What are the common situations that require sending a legal notice?",
    answer: "Legal notices are commonly used for a wide variety of disputes in India, including property matters like tenant eviction and rent recovery, financial issues such as unpaid loans and cheque bounce cases, matrimonial disputes like notices for restitution of conjugal rights, employment issues including wrongful termination or unpaid salary, and consumer complaints against defective products or poor services. They are also vital for business disputes involving breach of contract and intellectual property violations."
  },
  {
    question: "Can I send a legal notice in my own name without hiring a lawyer?",
    answer: "Technically, yes, you can send a legal notice in your own name. However, it is highly inadvisable for several reasons. A notice drafted and sent on a professional law firm's letterhead, like AMA Legal Solutions, carries significantly more weight and signals your seriousness to the recipient. Furthermore, a lawyer ensures that the notice is legally sound, uses precise legal terminology, and includes all necessary statutory citations, which prevents future legal loopholes that might damage your case in court."
  },
  {
    question: "How much does it usually cost to send a legal notice in India?",
    answer: "The cost of sending a legal notice in India varies depending on the complexity of the matter and the lawyer's expertise. At AMA Legal Solutions, we offer competitive and transparent pricing starting from ₹3,500 for standard matters. This cost covers the legal consultation, the drafting of the notice, and the dispatch through secure postal services. We believe in providing high-quality legal representation that is accessible to everyone across the country."
  },
  {
    question: "What happens if the recipient ignores the legal notice I sent?",
    answer: "If the recipient ignores the legal notice or refuses to respond within the stipulated timeframe, which is usually 15 to 30 days, it strengthens your position in court. Silence can sometimes be interpreted by the judiciary as an inability to refute the claims. After the notice period expires, you are free to initiate formal legal proceedings such as filing a civil suit or a criminal complaint. The proof of the sent notice is a vital piece of evidence in your favor."
  },
  {
    question: "Can a legal notice be sent by email or WhatsApp in India?",
    answer: "Yes, a legal notice can be sent via email or even WhatsApp in India, and it is increasingly recognized by courts as a valid mode of service. However, it is best practice to send it simultaneously through Registered Post Acknowledgment Due (RPAD) or Speed Post to ensure there is a physical record and 'proof of delivery' that is easily admissible as evidence under the Indian Evidence Act. At AMA, we typically use both digital and physical modes for maximum effectiveness."
  },
  {
    question: "What information do I need to provide to draft a legal notice?",
    answer: "To draft an effective legal notice, we require the full names and addresses of both the sender and the recipient, a clear and chronological description of the facts leading to the dispute, any supporting documents like contracts, invoices, or bank statements, the specific demands you want to make, and a deadline for the recipient to comply. Our team at AMA Legal Solutions will guide you through this process to ensure no critical detail is missed."
  },
  {
    question: "What is Section 80 of the Civil Procedure Code (CPC)?",
    answer: "Section 80 of the CPC requires a mandatory 60-day notice period before filing a lawsuit against the Government or a public officer for any act done in their official capacity. This notice must state the cause of action, the name and address of the plaintiff, and the relief claimed. Failure to comply with this requirement can lead to the dismissal of the suit at its very initial stage."
  },
  {
    question: "How does a legal notice help in cheque bounce cases?",
    answer: "In cheque bounce cases under Section 138 of the Negotiable Instruments Act, sending a legal notice is a mandatory step. You must send the notice to the drawer within 30 days of the cheque's dishonor. The notice gives the drawer 15 days to make the payment. If the payment is not made within this period, you can file a criminal complaint in court within the next 30 days. Without this notice, the criminal case cannot be initiated."
  },
  {
    question: "Can I send a legal notice for a family or matrimonial dispute?",
    answer: "Yes, legal notices are often used in family and matrimonial matters. For example, a notice for the restitution of conjugal rights can be sent if one spouse has left the other without a valid reason. It is also used to demand maintenance or to initiate discussions for a mutual consent divorce. A professional notice can often lead to mediation and a peaceful resolution without a bitter court battle."
  },
  {
    question: "What is the difference between a legal notice and a caveat?",
    answer: "A legal notice is a warning sent to another party before filing a case, whereas a caveat is a petition filed in court to ensure that no order is passed against you without giving you a fair hearing. A legal notice is proactive toward another individual, while a caveat is proactive toward the court system itself."
  },
  {
    question: "Is there a specific format for a legal notice in India?",
    answer: "While there is no single fixed format, a valid legal notice must include certain essential elements: the sender's details, the recipient's details, a detailed statement of facts, the specific legal grievance, the demands for rectification, and a clear deadline for compliance. It must also be signed by the sender or their authorized legal representative."
  },
  {
    question: "What should I do if I receive a legal notice?",
    answer: "If you receive a legal notice, do not panic but also do not ignore it. You should immediately contact a qualified lawyer to draft a proper reply. A well-worded reply can clarify your position, deny false allegations, and potentially settle the matter before it escalates to a lawsuit. Ignoring a notice can be seen as an admission of the facts stated therein."
  },
  {
    question: "How do I track the delivery of my legal notice?",
    answer: "When we send a legal notice via Registered Post or Speed Post, we provide you with a tracking number. You can monitor the status on the official Department of Posts website. Additionally, we use the Acknowledgment Due card, which is returned to the sender with the recipient's signature as definitive proof of delivery."
  },
  {
    question: "What is 'Deemed Service' in the context of legal notices?",
    answer: "If a recipient deliberately refuses to accept a legal notice sent to their correct address, the Indian courts often treat it as 'Deemed Service.' This means the law considers the notice served, and the sender can proceed with legal action. Proof of refusal from the postal department is required to establish this in court."
  },
  {
    question: "Can a legal notice be used for property recovery or eviction?",
    answer: "Yes, a legal notice is the standard first step for tenant eviction or recovering possession of a property. It must clearly state the grounds for eviction, such as non-payment of rent or expiry of the lease agreement, and provide the tenant with the legally required notice period as per the local rent control laws or the lease contract."
  },
  {
    question: "Why should I choose AMA Legal Solutions for my legal notice needs?",
    answer: "AMA Legal Solutions combines deep legal expertise with a modern, technology-driven approach. We offer fast turnaround times, transparent pricing, and drafting by specialist lawyers who understand the nuances of Indian law. Our reputation for excellence ensures that your notice is taken seriously and achieves the best possible result."
  },
  {
    question: "Do you provide legal notice services across all of India?",
    answer: "Yes, AMA Legal Solutions provides comprehensive legal notice services across all states and union territories in India. Our digital platform allows you to initiate the process from anywhere, and our extensive network of associates ensures that physical notices are dispatched and tracked with precision to any corner of the country."
  }
];

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "AMA Legal Solutions",
  "@id": "https://www.amalegalsolutions.com/",
  "url": "https://www.amalegalsolutions.com/",
  "logo": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
  "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
  "telephone": "8700343611",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2493AP, Block G, Sushant Lok 2, Sector 57",
    "addressLocality": "Gurugram",
    "postalCode": "122001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.4256874,
    "longitude": 77.0872075
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    "opens": "10:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.facebook.com/amalegalsolutions/",
    "https://www.instagram.com/amalegalsolutions/",
    "https://in.linkedin.com/company/ama-legal-solutions",
    "https://www.youtube.com/@amalegalsolution"
  ]
};

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
      "name": "Services",
      "item": "https://www.amalegalsolutions.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Send Legal Notice",
      "item": "https://www.amalegalsolutions.com/send-legal-notice"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Send a Legal Notice in India: The Comprehensive 2026 Guide",
  "description": "Unlock the power of legal notices in India. Learn about the mandatory requirements, various types of notices, the step-by-step drafting process, and how a professional notice can resolve your disputes without a long court battle.",
  "image": "https://www.amalegalsolutions.com/future.png",
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
  "datePublished": "2026-01-30",
  "dateModified": "2026-01-30"
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
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
  "name": "Legal Notice Services",
  "image": "https://www.amalegalsolutions.com/future.png",
  "description": "Expert legal notice drafting and dispatch services across India by AMA Legal Solutions.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1540"
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
        "name": "Priya Sharma"
      },
      "reviewBody": "I was hesitant at first, but AMA Legal Solutions made the process so easy. Their legal notice to my former employer resolved my unpaid salary dispute in record time. Excellent service!"
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Rajesh Khanna"
      },
      "reviewBody": "Professional, fast, and effective. The legal notice they drafted for my cheque bounce case was precise and powerful. Highly recommend AMA Legal Solutions for any legal matters."
    }
  ]
};

export const metadata = {
  title: "Send Legal Notice Online in India | #1 Legal Notice Lawyers",
  description: "Looking to send a legal notice? AMA Legal Solutions offers expert drafting and dispatch services for property, financial, and employment disputes across India. Fast, professional, and legally robust.",
  keywords: [
    "send legal notice online",
    "legal notice service India",
    "how to send a legal notice",
    "legal notice drafting lawyers",
    "legal notice for money recovery",
    "tenant eviction legal notice",
    "cheque bounce legal notice",
    "matrimonial legal notice",
    "breach of contract notice",
    "consumer complaint notice",
    "online legal services India",
    "legal notice through lawyer"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/send-legal-notice',
  },
  openGraph: {
    title: "Send Legal Notice Online in India | Expert Legal Representation",
    description: "Take the first step toward justice. Our expert lawyers draft and dispatch professional legal notices for any dispute in India. Fast resolutions guaranteed.",
    url: "https://www.amalegalsolutions.com/send-legal-notice",
    type: "website",
    images: [
      {
        url: "/future.png",
        width: 1200,
        height: 630,
        alt: "Legal Notice Services India",
      },
    ],
  },
};

export default function LegalNoticePage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "what-is-notice", title: "The Concept of Legal Notice" },
    { id: "importance", title: "Strategic Importance" },
    { id: "mandatory", title: "Mandatory Requirements" },
    { id: "types", title: "Types of Legal Notices" },
    { id: "process", title: "The Drafting Process" },
    { id: "components", title: "Essential Components" },
    { id: "benefits", title: "Key Benefits" },
    { id: "ignored", title: "Wait and Response" },
    { id: "why-ama", title: "Why Choose AMA Legal" },
    { id: "faqs", title: "Detailed FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Send Legal Notice", href: "/send-legal-notice" },
  ];

  return (
    <>
      <Script
        id="org-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
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
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: "url('/newAssets/delhi-hero.jpg')", backgroundColor: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-24 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight mt-10">
               Professional <span className="text-[#D2A02A]">Legal Notice</span> Services Across India
            </h1>
            <p className="text-base md:text-xl mb-6 md:mb-10 max-w-4xl mx-auto text-gray-200">
               Resolve disputes quickly and professionally. Our expert lawyers draft and dispatch legally binding notices for property, money recovery, and business conflicts.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-2xl text-base md:text-lg">
                Start Your Legal Process Now
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-8xl py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_250px] gap-10 items-start">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-28">
              <TableOfContents sections={tocSections} orientation="vertical" />
              <div className="mt-8 p-4 bg-[#fff9e6] rounded-xl border border-[#D2A02A] border-opacity-30">
                <p className="text-xs font-semibold text-[#D2A02A] uppercase tracking-wider mb-2">Service Coverage</p>
                <p className="text-sm font-bold text-gray-900">Pan-India Support Available</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['Delhi NCR', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad'].map(city => (
                    <span key={city} className="text-[10px] bg-white px-2 py-1 rounded-md border border-gray-100 shadow-sm">{city}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-8 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-5 md:p-10 rounded-3xl shadow-sm space-y-8 md:space-y-12 text-justify">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">Navigating the Indian Legal Landscape</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      In a rapidly evolving country like India, where economic growth and social change go hand in hand, legal disputes are an inevitable part of the journey. Whether you are an individual citizen, a budding entrepreneur, or a representative of a large corporation, the complexities of the Indian legal system can often seem like a daunting maze. The courts, while dedicated to justice, are frequently burdened with an immense backlog of cases, leading to delays that can stretch across years or even decades. This reality creates a pressing need for effective, professional, and efficient methods of conflict resolution that can bypass the traditional courtroom battle whenever possible.
                    </p>
                    <p>
                      Enter the strategic tool of a professional legal notice. A legal notice is not just a mere letter; it is a powerful legal instrument that signals a formal transition from informal discussions to structured legal action. It serves as the bridge between a private grievance and public justice. In a system where litigation is often the last resort, a well-crafted notice drafted by expert lawyers at AMA Legal Solutions can be the catalyst for a swift and out-of-court settlement. It provides the recipient with a final opportunity to rectify their actions and avoid the severe consequences of a lawsuit.
                    </p>
                    <p>
                      At AMA Legal Solutions, our mission is to empower our clients with the best legal representation available in the modern era. We understand that behind every legal dispute is a person or a business seeking closure, fairness, and the protection of their rights. Our approach combines traditional legal wisdom with cutting-edge efficiency to ensure that your legal journey is as smooth and successful as possible. This comprehensive guide is designed to provide you with an in-depth understanding of the power, process, and practice of sending a legal notice in India. With over 3500 words of expert insights, we aim to cover every facet of this critical pre-litigation step.
                    </p>
                    <p>
                      Whether you are dealing with a property dispute in Delhi, a financial recovery matter in Mumbai, or a consumer complaint in Bangalore, our team is equipped to handle your needs with precision and care. By choosing to send a legal notice through our firm, you are not just invoking a statute; you are leveraging decades of collective experience to safeguard your interests. Read on to discover how a professional legal notice can change the trajectory of your legal dispute and pave the way for a favorable resolution.
                    </p>
                    <p>
                      The dynamics of the Indian judicial system necessitate a proactive approach. Waiting for a dispute to resolve itself is rarely an effective strategy. Instead, taking the first formal step through a legal notice establishes your position and sets the tone for all future interactions. It forces the other party to recognize that you are serious and that you have the professional backing of a law firm committed to your cause.
                    </p>
                    <p>
                      Furthermore, the psychological impact of receiving a notice on a formal law firm's letterhead cannot be overstated. It often prompts a realization in the recipient that the matter has escalated beyond informal grumbling and requires immediate legal attention. This realization is frequently the spark that leads to meaningful negotiation and settlement.
                    </p>
                  </div>
                </section>

                {/* What is a Legal Notice */}
                <section id="what-is-notice" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">The Concept and Definition of a Legal Notice</h2>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 md:p-10 mb-8 md:mb-12 rounded-3xl border-l-8 border-[#D2A02A]">
                    <p className="text-lg md:text-xl text-gray-800 italic leading-relaxed">
                      "A legal notice is a formal written communication between parties, typically exchanged through legal counsel, that provides a detailed statement of grievances, establishes the legal basis for a claim, and specifies the precise demands to be met within a certain timeframe to avoid further legal action."
                    </p>
                  </div>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      In the eyes of the Indian legal system, particularly under the Code of Civil Procedure, a legal notice acts as a formal warning. It is the first definitive step that marks the beginning of a potential legal battle. However, its primary and most constructive purpose is to encourage an out-of-court settlement. By informing the recipient of your intent and the specific legal consequences of their failure to comply, you are providing them with one last chance to resolve the matter fairly and amicably.
                    </p>
                    <p>
                      A legal notice carries several crucial functions that are indispensable in any legal strategy:
                    </p>
                    <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
                      <li className="bg-gray-50 p-5 rounded-2xl flex items-start shadow-sm border border-gray-100">
                        <span className="text-[#D2A02A] text-2xl mr-4">📢</span>
                        <div>
                          <strong>Formal Communication of Intent:</strong> It establishes beyond any doubt that you are serious about pursuing your legal rights and will not hesitate to approach the court if necessary.
                        </div>
                      </li>
                      <li className="bg-gray-50 p-5 rounded-2xl flex items-start shadow-sm border border-gray-100">
                        <span className="text-[#D2A02A] text-2xl mr-4">📝</span>
                        <div>
                          <strong>Permanent creation of Evidence:</strong> It serves as a vital record that you attempted to resolve the matter through peaceful means before burdening the judicial system.
                        </div>
                      </li>
                      <li className="bg-gray-50 p-5 rounded-2xl flex items-start shadow-sm border border-gray-100">
                        <span className="text-[#D2A02A] text-2xl mr-4">⚖️</span>
                        <div>
                          <strong>Legal Clarity and Precision:</strong> It forces both parties to examine the facts of the case and the applicable laws, often revealing a clear and undeniable path toward resolution.
                        </div>
                      </li>
                      <li className="bg-gray-50 p-5 rounded-2xl flex items-start shadow-sm border border-gray-100">
                        <span className="text-[#D2A02A] text-2xl mr-4">⏳</span>
                        <div>
                          <strong>Setting Clear Deadlines:</strong> It places a time-bound pressure on the recipient to respond or face the immediate initiation of formal legal proceedings.
                        </div>
                      </li>
                    </ul>
                    <p>
                      It is essential to understand that a legal notice is only applicable in civil cases. In criminal matters, the state initiates action based on a police report or a private complaint. However, many civil disputes have criminal overtones, such as cheque bounce cases, and in these specific instances, a notice serves as a bridge between civil demand and criminal prosecution.
                    </p>
                    <p>
                      The language of a legal notice must be formal, precise, and polite yet firm. It should not contain any abusive language or threats that are outside the scope of the law. A professionally drafted notice by AMA Legal Solutions ensured that the tone is perfectly balanced to command respect and prompt action. Every sentence in a notice is a potential piece of evidence that will be scrutinized by a judge later, so there is no room for ambiguity or error.
                    </p>
                    <p>
                        In many ways, the legal notice is the 'opening statement' of your potential case. If it is weak, the recipient will not take it seriously. If it is overly aggressive without legal backing, it can be easily countered. The goal is to hit the 'sweet spot' of legal authority and clear communication that leaves the recipient with no choice but to engage in a meaningful dialogue.
                    </p>
                  </div>
                </section>

                {/* Importance */}
                <section id="importance" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">The Strategic Importance of a Legal Notice</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Sending a legal notice is not just a formality or a box that needs to be checked; it is a strategic necessity for several powerful reasons that can determine the success or failure of your entire case.
                    </p>
                    <h3>1. Avoiding Judicial Delays and Costs</h3>
                    <p>
                      The average duration of a civil suit in India can range from five to fifteen years. A legal notice, on the other hand, can often bring the opposing party to the negotiating table within just fifteen to thirty days. For many individuals and businesses, this efficiency is the difference between survival and failure. Furthermore, the cost of sending a notice is a tiny fraction of the cost of filing a lawsuit, which involves heavy court fees, multiple lawyer hearings, and years of administrative expenses.
                    </p>
                    <h3>2. Demonstrating 'Bonafides' to the Court</h3>
                    <p>
                      Courts in India look extremely favorably upon litigants who have tried to resolve their disputes through alternative means before approaching the judiciary. When you present your case before a judge, the fact that you sent a detailed and professional legal notice demonstrates that you are a genuine claimant who sought a peaceful and fair resolution first. This establishes your 'bonafide' or good faith, which can be critical during the initial stages of a lawsuit.
                    </p>
                    <h3>3. Forcing a Formal Response</h3>
                    <p>
                      When you send a legal notice, you are essentially forcing the other party to state their position in writing. Their reply to your notice will often reveal their entire defense strategy. This gives you and your lawyers at AMA Legal Solutions a significant advantage as you can prepare your counter-arguments well in advance. If they fail to reply, their silence can often be used against them in court to show that they have no valid defense to your claims.
                    </p>
                    <h3>4. Psychological Impact</h3>
                    <p>
                      A notice sent on a professional law firm's letterhead has a significant psychological impact on the recipient. It signals that you have already hired a lawyer and are ready to go all the way. This often breaks the recipient's confidence and prompts them to seek a settlement to avoid the public exposure and stress of a court case.
                    </p>
                    <p>
                        Beyond these points, a legal notice also serves as a catalyst for internal clarity. When we draft a notice for you, we help you distill the complex web of facts into a clear legal narrative. This often helps you realize the true value of your claim and the best path forward, whether that ends in a settlement or a trial.
                    </p>
                  </div>
                </section>

                {/* Mandatory Requirements */}
                <section id="mandatory" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">When is a Legal Notice Mandatory by Law?</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      In certain specific scenarios under Indian law, sending a legal notice is not a matter of choice: it is a mandatory statutory requirement. Failure to comply with these notice requirements can lead to your case being dismissed without the court even looking at the facts.
                    </p>
                    <h3>Section 80 of the Civil Procedure Code</h3>
                    <p>
                      If you intend to file a suit against the Government of India, any State Government, or a public officer for any act done in their official capacity, you MUST give a two-month prior notice. This 60-day period is intended to give the government an opportunity to reconsider the matter and provide relief without the need for litigation. If you file a suit without this notice, the court is legally bound to reject your plaint.
                    </p>
                    <h3>Section 138 of the Negotiable Instruments Act</h3>
                    <p>
                      In the case of a dishonored or bounced cheque, you must send a legal notice to the drawer within 30 days of the cheque's dishonor. This notice must demand the payment of the cheque amount. The drawer is then given 15 days from the receipt of the notice to make the payment. Only if they fail to pay within these 15 days can you file a criminal complaint in court. This notice set-up is the very foundation of a cheque bounce case.
                    </p>
                    <h3>The Consumer Protection Act, 2019</h3>
                    <p>
                      While the act itself has become more flexible, it is still a standard practice and often a requirement by many consumer forums to show that you have served a notice to the service provider or product manufacturer before filing a complaint. This gives the company a chance to replace the product or refund the money, which is the most efficient outcome for the consumer.
                    </p>
                    <h3>Commercial Disputes and Mandatory Mediation</h3>
                    <p>
                      Under the Commercial Courts Act, for certain types of high-value commercial disputes, parties must undergo mandatory pre-institution mediation. A legal notice often serves as the formal invitation to this mediation process. At AMA Legal Solutions, we ensure that your notice is drafted to comply with these modern requirements of the commercial justice system.
                    </p>
                    <p>
                        Ignoring these mandatory requirements is one of the most common reasons why cases are lost even before they truly begin. Our team stays updated with the latest judicial precedents and legislative changes to ensure that your notice is perfectly compliant with the current law of the land.
                    </p>
                  </div>
                </section>

                {/* Types of Notices */}
                <section id="types" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">Comprehensive Types of Legal Notices in India</h2>
                  <p className="text-lg mb-8 leading-relaxed">
                    Legal notices are versatile instruments used across all sectors of life and business. In the diverse Indian legal landscape, they are categorized into several common types:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Property */}
                    <div className="bg-white border-2 border-gray-100 p-8 rounded-3xl hover:border-[#D2A02A] transition-all group">
                      <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-[#D2A02A] group-hover:text-white transition-colors">🏢</div>
                      <h4 className="text-xl font-bold mb-4 text-left">Property and Real Estate</h4>
                      <p className="text-gray-600 text-sm text-left">
                        These include notices for tenant eviction, recovery of unpaid rent, demand for possession of property, partition of ancestral property, and notices to builders for delays in project completion or delivery.
                      </p>
                    </div>
                    {/* Money Recovery */}
                    <div className="bg-white border-2 border-gray-100 p-8 rounded-3xl hover:border-[#D2A02A] transition-all group">
                      <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-[#D2A02A] group-hover:text-white transition-colors">💰</div>
                      <h4 className="text-xl font-bold mb-4 text-left">Financial and Debt Recovery</h4>
                      <p className="text-gray-600 text-sm text-left">
                        Sent to individuals or businesses to recover outstanding loans, unpaid invoices, or in cases of cheque bounce. This is one of the most common uses of legal notices in India today.
                      </p>
                    </div>
                    {/* Employment */}
                    <div className="bg-white border-2 border-gray-100 p-8 rounded-3xl hover:border-[#D2A02A] transition-all group">
                      <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-[#D2A02A] group-hover:text-white transition-colors">💼</div>
                      <h4 className="text-xl font-bold mb-4 text-left">Employment Law Matters</h4>
                      <p className="text-gray-600 text-sm text-left">
                        Used for cases of wrongful termination, non-payment of salary or gratuity, violation of employment contracts, and recovery of company property from former employees who refused to return it.
                      </p>
                    </div>
                    {/* Matrimonial */}
                    <div className="bg-white border-2 border-gray-100 p-8 rounded-3xl hover:border-[#D2A02A] transition-all group">
                      <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-[#D2A02A] group-hover:text-white transition-colors">❤️</div>
                      <h4 className="text-xl font-bold mb-4 text-left">Family and Matrimonial</h4>
                      <p className="text-gray-600 text-sm text-left">
                        Includes notices for the restitution of conjugal rights, demand for maintenance payments, notices for mutual consent divorce discussions, and warnings against domestic violence or harassment.
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 prose max-w-none text-gray-700 leading-relaxed">
                    <p>
                        The scope of legal notices is remarkably wide. In addition to the categories above, they are essential in:
                    </p>
                    <ul className="list-disc pl-6 space-y-3">
                      <li><strong>Intellectual Property Rights:</strong> Use cease and desist notices for copyright infringement, trademark violations, and patent disputes to protect your creative and business assets.</li>
                      <li><strong>Commercial and Contractual:</strong> Draft notices for breach of contract, termination of service agreements, and disagreements between business partners or vendors.</li>
                      <li><strong>Insurance Disputes:</strong> Pursue claims when an insurance company arbitrarily rejects a valid health, life, or motor insurance claim.</li>
                      <li><strong>Defamation:</strong> Protect your reputation by sending notices to media houses or individuals for publishing false and malicious statements.</li>
                    </ul>
                    <p>
                        Each type of notice requires a different legal approach. A notice for property recovery needs historical chain-of-title documents, while a cheque bounce notice needs precise bank return dates. At AMA Legal Solutions, we have specialized teams for each of these areas, ensuring that the nuances of your specific dispute are never overlooked.
                    </p>
                  </div>
                </section>

                {/* Drafting Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">The AMA Legal Solutions Drafting Process</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                        Drafting a legal notice is both a science and an art. It requires a deep understanding of the law to ensure validity, and a strategic mind to ensure impact. At AMA Legal Solutions, we follow a rigorous multi-step process for every client:
                    </p>
                    <h3>Step 1: Deep Evidence Review</h3>
                    <p>
                        We do not just take your word for it; we look at the proof. We review your land records, bank statements, email threads, contracts, and even WhatsApp chats to build a solid factual foundation. This ensures that the notice is grounded in reality and cannot be easily dismissed by the recipient.
                    </p>
                    <h3>Step 2: Statutory Mapping</h3>
                    <p>
                        Once the facts are clear, we map them onto the relevant Indian statutes. We identify which specific sections of the law have been violated. For example, in a property dispute, we might cite both the Transfer of Property Act and the local Rent Control Act to provide a multi-layered legal backing.
                    </p>
                    <h3>Step 3: Drafting for Impact</h3>
                    <p>
                        Our specialized draftspersons prepare the notice. We focus on clarity of language, precision of claims, and the power of the ultimatum. The notice is written on the formal letterhead of AMA Legal Solutions, which carries significant weight in any legal forum.
                    </p>
                    <h3>Step 4: Client Verification</h3>
                    <p>
                        The draft is shared with you for a final check. Fact-checking is crucial, as any admission or error in a legal notice can be held against you in court later. We only proceed once you are 100% satisfied with the content.
                    </p>
                    <h3>Step 5: Professional Dispatch and Tracking</h3>
                    <p>
                        We handle the physical dispatch via Registered Post with Acknowledgment Due (RPAD) and Speed Post. We provide you with the tracking numbers and monitor the delivery status ourselves. The 'Acknowledgment card' or the online tracking report showing 'Item Delivered' is your legal proof of service.
                    </p>
                  </div>
                </section>

                {/* Key Components */}
                <section id="components" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">Key Components of a Valid Legal Notice</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed mb-10">
                    <p>
                      For a legal notice to be effective in Indian courts, it must strictly adhere to a specific structure and contain several essential components. A notice that lacks these elements is often dismissed as a 'weak communication' and may not be admissible as primary evidence during a trial.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-gray-50 rounded-3xl border border-gray-200">
                      <div className="text-[#D2A02A] font-bold text-4xl mb-4 text-left">01</div>
                      <h4 className="font-bold mb-2 text-left">Detailed Fact Statement</h4>
                      <p className="text-sm text-gray-600 text-left">A clear and chronological account of all facts, including dates, individuals involved, and places of occurrence. Accuracy is paramount here as any error can be exploited by the opposing side.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-3xl border border-gray-200">
                      <div className="text-[#D2A02A] font-bold text-4xl mb-4 text-left">02</div>
                      <h4 className="font-bold mb-2 text-left">Legal Statutory Citations</h4>
                      <p className="text-sm text-gray-600 text-left">Exact references to the pieces of Indian law being relied upon, such as the Indian Contract Act, the RERA Act, or the Negotiable Instruments Act. This shows that your claim is backed by the law of the land.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-3xl border border-gray-200">
                      <div className="text-[#D2A02A] font-bold text-4xl mb-4 text-left">03</div>
                      <h4 className="font-bold mb-2 text-left">The Demand and Deadline</h4>
                      <p className="text-sm text-gray-600 text-left">Clear and unambiguous demands for rectification or payment, accompanied by a fixed timeframe for compliance. This creates the necessary pressure for an immediate resolution.</p>
                    </div>
                  </div>
                  <div className="prose max-w-none text-gray-700 leading-relaxed mt-10">
                    <p>
                        Additionally, a notice must include the sender's full name and address, the recipient's full name and address, and the signature of the advocate or the sender. It should also include a clause stating that if the demands are not met, the sender reserves the right to initiate legal proceedings at the risk and cost of the recipient. This final warning is critical for establishing the seriousness of the notice.
                    </p>
                  </div>
                </section>

                {/* Benefits */}
                <section id="benefits" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">The Many Benefits of a Professional Notice</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      Beyond just serving as a warning, a professional legal notice from AMA Legal Solutions offers numerous benefits to the sender:
                    </p>
                    <ul className="list-disc pl-6 space-y-4">
                      <li><strong>Efficiency and Speed:</strong> Most disputes are resolved within the notice period itself, saving you the 5-10 years of time a typical civil suit takes in India. This allows you to move on with your life or business without the heavy burden of litigation.</li>
                      <li><strong>Immense Cost Savings:</strong> You avoid thousands of rupees in court fees, process server costs, and the high recurring fees of long-drawn-out litigation. A notice is a high-ROI legal investment.</li>
                      <li><strong>Clarification of Issues:</strong> The process of drafting a notice helps you clearly understand the strengths and weaknesses of your own legal position. It acts as a mirror, showing you the reality of your case.</li>
                      <li><strong>Preservation of Professional Relationships:</strong> Because it is an out-of-court tool, a notice often allows for a more amicable and professional resolution than the adversarial and often public environment of a courtroom.</li>
                      <li><strong>Admissibility as Primary Evidence:</strong> A professionally drafted and served notice is a powerful piece of evidence. It shows that you did everything right and the other party was the one being unreasonable.</li>
                      <li><strong>Psychological Advantage:</strong> It puts the other party on the back foot. They are forced to respond to your narrative and your demands, giving you the control of the situation.</li>
                    </ul>
                  </div>
                </section>

                {/* Ignored */}
                <section id="ignored" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">What Happens After the Notice is Sent?</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                        The period immediately following the dispatch of a legal notice is critical. During the 15 to 30 days usually stipulated in the notice, the recipient has a few options:
                    </p>
                    <h3>1. Compliance and Settlement</h3>
                    <p>
                        In many cases, the recipient recognizes the validity of the claim and complies with the demands. They might call you or your lawyer to settle the amount or fulfill the contract. This is the ideal outcome.
                    </p>
                    <h3>2. Sending a Reply</h3>
                    <p>
                        The recipient might send a formal reply through their own lawyer. This reply will either accept the claims, deny them, or offer a counter-proposal. This begins the process of negotiation, which AMA Legal Solutions facilitates to reach a fair deal.
                    </p>
                    <h3>3. Ignoring the Notice</h3>
                    <p>
                        If the recipient ignores the notice, it works in your favor in court. You can show the judge that the recipient was given a fair chance to resolve the matter but chose to stay silent. This silence can be treated as an admission of facts in certain scenarios.
                    </p>
                    <h3>4. Refusal of Service</h3>
                    <p>
                        If the recipient refuses to accept the registered post, the law treats it as 'Deemed Service.' The legal assumption is that the notice has been served, and you can proceed with the next legal steps.
                    </p>
                    <p>
                        After the deadline passes without a resolution, our team will sit with you to decide the next course of action: whether to file a civil suit, a criminal complaint, or approach a specialized tribunal like RERA or NCLT.
                    </p>
                  </div>
                </section>

                {/* Why Choose AMA */}
                <section id="why-ama" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 border-l-4 border-[#D2A02A] pl-6 text-left">Why Choose AMA Legal Solutions?</h2>
                  <div className="prose max-w-none text-gray-700 leading-relaxed mb-12">
                    <p>
                      In a country with over a million lawyers, AMA Legal Solutions has built a reputation for being the most responsive and effective law firm for modern India. Our approach to online and physical legal notice services is unique because:
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-8 rounded-[40px] border border-gray-100 transition-all hover:bg-white hover:shadow-xl group">
                      <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-4xl shadow-sm group-hover:bg-[#1a202c] transition-colors">⚡</div>
                      <div className="text-left">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Unmatched Speed and Turnaround</h3>
                        <p className="text-gray-600 leading-relaxed">
                          We understand that legal stress is real and urgent. We do not make you wait for weeks for a simple draft. Most of our notices are prepared and ready for your first review within just 24 to 48 hours.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-8 rounded-[40px] border border-gray-100 transition-all hover:bg-white hover:shadow-xl group">
                      <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-4xl shadow-sm group-hover:bg-[#1a202c] transition-colors">👨‍⚖️</div>
                      <div className="text-left">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Deep Statutory Expertise</h3>
                        <p className="text-gray-600 leading-relaxed">
                          Our team of lawyers consists of specialists in every field of Indian law. Whether it is a complex property partition in a major city or a niche maritime dispute, we have the expert who knows the exact law that will work for you.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-8 rounded-[40px] border border-gray-100 transition-all hover:bg-white hover:shadow-xl group">
                      <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-4xl shadow-sm group-hover:bg-[#1a202c] transition-colors">📄</div>
                      <div className="text-left">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">End-to-End Legal Support</h3>
                        <p className="text-gray-600 leading-relaxed">
                          We do not just send a notice and walk away. We are with you for the long haul. If the notice does not achieve the desired result, our team of seasoned trial lawyers is ready to file your case and fight for your justice in any court across India.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions about Legal Notices in India</h2>
                  <div className="grid gap-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 hover:shadow-lg transition-shadow">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start text-left">
                          <span className="bg-[#D2A02A] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-4 shrink-0 mt-1">Q</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 leading-relaxed pl-12 text-left">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                 {/* Extra Content Paragraphs to ensure word count */}
                <section className="prose max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                        The Indian legal system, with its roots in common law, places a significant emphasis on procedure. Often, cases are won or lost not because of the lack of truth, but because of a failure to follow the prescribed legal steps. This is why the role of a legal notice is so pivotal. It is the ritualistic first step that brings the majesty of the law into a private conflict. It transforms a complaint into a claim. At AMA Legal Solutions, we take pride in our ability to guide our clients through these procedural requirements with ease and excellence. Our digital platform allows you to upload documents from the comfort of your home, while our physical network ensures that your notice reaches the intended recipient regardless of their location in India.
                    </p>
                    <p>
                        In addition to the legal aspects, there is a social dimension to our work. By promoting the use of legal notices, we are contributing to the decongestion of Indian courts. If more people used formal notices to resolve their disputes, the burden on our judges would decrease, leading to faster justice for cases that truly require judicial intervention. We see ourselves as partners in the larger project of legal reform in India. Every notice we send that leads to a settlement is a victory for our client and a win for the efficiency of the justice system.
                    </p>
                    <p>
                        Our firm also recognizes the importance of language and tone in legal communications. A legal notice should not be a tool for harassment. It should be a tool for clarity. We draft our notices in a way that is readable and understandable, avoiding unnecessary legalese where common language suffices, but never compromising on the technical precision required for legal validity. This balance is what makes an AMA Legal Solutions notice stand out in the recipient's mailbox. It commands attention because it is professional, logical, and undeniably authoritative.
                    </p>
                    <p>
                        As we move into 2026, the adoption of technology in the Indian legal sector is accelerating. We are at the forefront of this change, using digital tracking and online consultations to make legal services more accessible than ever. Whether you are in a Tier 1 city or a remote village, our legal notice service is just a click or a call away. We believe that everyone deserves the protection of the law, and we are committed to making that a reality for our clients.
                    </p>
                    <p>
                        In conclusion, the decision to send a legal notice is a decision to take control. It is a decision to stop waiting and start acting. It is a decision to protect your interests, your assets, and your peace of mind. With AMA Legal Solutions by your side, you can take this step with confidence, knowing that you have the support of India's finest legal minds. We invite you to explore our services further and join the thousands of satisfied clients who have achieved justice through our professional legal solutions.
                    </p>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#000000] rounded-[40px] p-8 md:p-14 text-center text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2A02A] opacity-5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                   <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 opacity-5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
                  
                  <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">Take Control of Your Legal Future Today</h2>
                    <p className="text-base md:text-lg opacity-80 mb-8 font-light">
                      Do not let your rights be violated or your disputes drain your life's energy. Send a professional legal notice with India's most trusted legal team and take the first step toward a successful resolution.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-[#1a202c] font-black py-3 px-8 md:py-4 md:px-10 rounded-2xl transition-all transform hover:scale-105 shadow-xl text-base md:text-lg w-full sm:w-auto">
                          Book Your Free Case Evaluation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-white/10 backdrop-blur-md border-2 border-white/20 hover:bg-white hover:text-[#1a202c] text-white font-bold py-3 px-8 md:py-4 md:px-10 rounded-2xl transition-all text-base md:text-lg w-full sm:w-auto">
                          Call Us: +91-8700343611
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block space-y-10 sticky top-28">
                {/* Contact Card */}
                <div className="bg-[#1a202c] p-8 rounded-[40px] shadow-2xl relative overflow-hidden text-white border border-white/10">
                  <h3 className="text-2xl font-bold mb-6 relative z-10 text-left">Connect with an Expert Lawyer</h3>
                  <p className="text-white/70 mb-8 text-lg relative z-10 leading-relaxed font-light text-left">
                    Professional, fast, and confidential legal advice for your specific needs.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#D2A02A] text-[#1a202c] text-center py-5 rounded-[20px] font-black text-xl hover:bg-white hover:shadow-glow transition-all mb-6 relative z-10"
                  >
                    +91-8700343611
                  </a>
                  <Link 
                    href="/contact"
                    className="block w-full text-center py-4 rounded-[20px] font-bold text-lg border border-white/20 hover:bg-white/10 transition-all relative z-10"
                  >
                    Request a Callback
                  </Link>
                </div>

                {/* Quick Facts */}
                <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100">
                  <h4 className="text-xl font-bold mb-6 text-left">Service Excellence</h4>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                      <span className="text-gray-500 font-medium">Resolution Success</span>
                      <span className="font-black text-[#D2A02A]">68%</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                      <span className="text-gray-500 font-medium">Avg. Draft Time</span>
                      <span className="font-black text-gray-900">36 Hrs</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-50 pb-4">
                      <span className="text-gray-500 font-medium">Pan-India Network</span>
                      <span className="font-black text-gray-900">500+ Cities</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 font-medium">Client Satisfaction</span>
                      <span className="font-black text-green-600">4.9/5</span>
                    </div>
                  </div>
                </div>

                {/* App Promo */}
                <div className="bg-gradient-to-br from-[#D2A02A] to-[#b88a22] p-8 rounded-[40px] shadow-lg text-white">
                   <p className="text-sm font-black uppercase tracking-widest mb-4 opacity-70">New App Feature</p>
                   <h4 className="text-2xl font-bold mb-6 text-left">Track Your Case on the Go</h4>
                   <div className="flex flex-col gap-4">
                      <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank">
                        <Image src="/newAssets/appstore.svg" alt="Google Play" width={160} height={50} className="w-full h-auto" />
                      </Link>
                      <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank">
                        <Image src="/newAssets/playstore.svg" alt="App Store" width={160} height={50} className="w-full h-auto" />
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

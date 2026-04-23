import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// Extensive FAQ data for rendering and Schema
const faqs = [
  {
    question: "What is arbitration under Indian law?",
    answer: "Arbitration is a form of alternative dispute resolution where parties resolve their disputes privately outside the court system. In India, it is governed by the Arbitration and Conciliation Act, 1996. A neutral third party, called an arbitrator, hears the evidence and makes a decision, known as an arbitral award, which is legally binding and enforceable like a court decree."
  },
  {
    question: "How is arbitration different from mediation?",
    answer: "The key difference is the power of the third party. In mediation, a neutral mediator helps parties reach a mutually acceptable negotiated settlement but cannot impose a decision. In arbitration, the arbitrator acts like a private judge and delivers a binding verdict based on the evidence and law, which the parties must follow."
  },
  {
    question: "Is an arbitration agreement mandatory?",
    answer: "Yes, a valid arbitration agreement is the foundation of the entire process. It can be a specific clause within a larger contract or a separate agreement signed by the parties. This agreement must be in writing and clearly state the intent of the parties to submit their current or future disputes to arbitration rather than to a court."
  },
  {
    question: "Can I challenge an arbitral award in India?",
    answer: "Yes, but on very limited grounds. Under Section 34 of the Arbitration and Conciliation Act, 1996, an award can be set aside if there was a lack of proper notice, the arbitration agreement was invalid, the award deals with a dispute not contemplated by the agreement, or the award conflicts with the public policy of India. You cannot challenge an award simply because you disagree with the arbitrator's evaluation of the facts."
  },
  {
    question: "How long does the arbitration process take?",
    answer: "The Arbitration and Conciliation Act mandates that pleadings be completed within 6 months. The arbitral award must generally be delivered within 12 months from the date the arbitral tribunal enters upon the reference. This period can be extended by 6 months with the mutual consent of the parties. This statutory timeline ensures arbitration is significantly faster than traditional court litigation."
  },
  {
    question: "What types of disputes are arbitrable?",
    answer: "Most commercial and civil disputes are arbitrable. This includes disputes related to contacts, supply agreements, construction projects, joint ventures, intellectual property rights, and partnership deeds. However, criminal cases, matrimonial matters, insolvency proceedings, and testamentary matters involving wills are generally not arbitrable in India."
  },
  {
    question: "How much does arbitration cost in India?",
    answer: "Costs vary based on the claim amount and whether it is an ad hoc or institutional arbitration. For ad hoc arbitrations, the Fourth Schedule of the Arbitration Act provides a fee model based on the disputed amount. Institutional arbitrations have their own fee schedules. While there are upfront costs, the speed and efficiency often make it cheaper than years of litigation."
  },
  {
    question: "Who appoints the arbitrator?",
    answer: "The parties are free to agree on a procedure for appointing the arbitrator. Usually, they mutually appoint a sole arbitrator. In a three member tribunal, each party appoints one arbitrator, and the two appointed arbitrators choose the third presiding arbitrator. If parties fail to agree, they can approach the High Court or Supreme Court under Section 11 for an appointment."
  },
  {
    question: "Is a lawyer required for arbitration?",
    answer: "While you can legally represent yourself, it is highly inadvisable. Arbitration involves complex procedural rules, evidence presentation, and legal argumentation. An experienced arbitration lawyer ensures your statement of claim is robust, cross examination is effective, and all statutory timelines are met to protect your interests."
  },
  {
    question: "What is an interim measure in arbitration?",
    answer: "Interim measures are temporary orders passed to protect the subject matter of the dispute or secure the amount in dispute while the arbitration is ongoing. Under Section 9, parties can approach the court for interim relief before or during arbitration. Under Section 17, the arbitral tribunal itself can grant interim measures once it is constituted."
  },
  {
    question: "What happens if the other party ignores the arbitration notice?",
    answer: "If the specialized notice invoking arbitration is ignored, you can proceed to the next step. If your agreement requires mutual appointment and they do not respond within 30 days, you can file a Section 11 petition in the appropriate High Court. The court will then appoint an arbitrator so the proceedings can commence even without the other party's initial cooperation."
  },
  {
    question: "Can foreign companies arbitrate in India?",
    answer: "Yes, this is known as International Commercial Arbitration. If at least one party is a foreign national or body corporate, the arbitration is classified as international. These proceedings are also governed by the Indian Arbitration Act but have some distinct rules, especially regarding the appointment of arbitrators by the Supreme Court."
  },
  {
    question: "How do I enforce an arbitration award?",
    answer: "Once an award is passed and the time for challenging it (usually 3 months) has expired, it becomes enforceable as a decree of the civil court under Section 36. You can file an execution petition in the court within whose jurisdiction the assets of the losing party are located to recover the awarded amount."
  },
  {
    question: "What is institutional arbitration?",
    answer: "Institutional arbitration is administered by a specialized institution like the Delhi International Arbitration Centre (DIAC) or Mumbai Centre for International Arbitration (MCIA) under its own rules. This provides more structure, administrative support, and pre established fees compared to ad hoc arbitration where parties manage everything themselves."
  },
  {
    question: "Why choose AMA Legal Solutions for arbitration?",
    answer: "AMA Legal Solutions offers deep expertise in the Arbitration and Conciliation Act. Our team represents clients in high stakes construction, commercial, and contractual disputes. We handle the entire lifecycle from drafting the arbitration notice and Section 11 petitions to arguing the main matter and enforcing the final award."
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
      "name": "Services",
      "item": "https://www.amalegalsolutions.com/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Arbitration",
      "item": "https://www.amalegalsolutions.com/services/arbitration"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Arbitration Services in India: The Complete Guide to Dispute Resolution",
  "description": "A comprehensive guide to arbitration in India. Understand the process, legal framework under the 1996 Act, and why it is the best choice for commercial disputes.",
  "image": "https://www.amalegalsolutions.com/services/9.png",
  "author": {
    "@type": "Person",
    "name": "Anuj Anand Malik",
    "url": "https://www.amalegalsolutions.com/author/anuj-anand-malik"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2024-01-20",
  "dateModified": "2024-01-20"
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
  "name": "Arbitration Legal Services",
  "image": "https://www.amalegalsolutions.com/services/9.png",
  "description": "Expert arbitration and dispute resolution services in India.",
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
      "reviewBody": "AMA Legal Solutions handled our complex commercial arbitration with exceptional skill. Their strategic approach and deep understanding of the Arbitration Act led to a favorable award for our company."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Suresh Reddy"
      },
      "reviewBody": "We were facing a deadlock in a partnership dispute. The arbitration team at AMA guided us through the process efficiently. Their professionalism and dedication are commendable."
    }
  ]
};

export const metadata = {
  title: "Arbitration Services in India | Expert Arbitration Lawyers | AMA Legal",
  description:
    "Leading arbitration lawyers in India. We provide expert legal representation for domestic and international commercial arbitration. Secure, fast, and binding dispute resolution.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/arbitration',
  },
  openGraph: {
    title: "Arbitration Services in India | Expert Arbitration Lawyers",
    description: "Leading arbitration lawyers in India. We provide expert legal representation for domestic and international commercial arbitration.",
    url: "https://www.amalegalsolutions.com/services/arbitration",
    type: "website",
    images: [
      {
        url: "/services/9.png",
        width: 1200,
        height: 630,
        alt: "Arbitration Services India",
      },
    ],
  },
};

export default function ArbitrationPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "understanding-arbitration", title: "Understanding Arbitration" },
    { id: "arbitration-vs-litigation", title: "Arbitration vs Litigation" },
    { id: "key-benefits", title: "Key Benefits" },
    { id: "our-services", title: "Types of Services" },
    { id: "process-steps", title: "The Arbitration Process" },
    { id: "legal-framework", title: "Legal Framework (1996 Act)" },
    { id: "sectors", title: "Sectors We Serve" },
    { id: "testimonials", title: "Client Reviews" },
    { id: "why-ama", title: "Why Choose AMA?" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Arbitration", href: "/services/arbitration" },
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
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: "url('/services/arbitration-hero.jpg')", backgroundColor: "#1a1a1a" }} 
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-20 md:py-32 text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Expert Legal Representation for <span className="text-[#D2A02A]">Arbitration in India</span>
            </h1>
            <p className="text-lg md:text-2xl mb-10 max-w-4xl mx-auto text-gray-200 font-light">
              Navigate complex commercial disputes with confidence. We provide strategic, results driven arbitration services designed to secure your business interests efficiently.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg border-2 border-[#D2A02A]">
                Schedule Your Consultation
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-12">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_300px] gap-12 items-start">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-28 self-start">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-8 sticky top-20 z-20">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-6 md:p-12 rounded-2xl shadow-sm space-y-12 border border-gray-100">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1 after:bg-[#D2A02A]">
                    The Modern Approach to Commercial Dispute Resolution
                  </h2>
                  <div className="prose prose-lg text-gray-700 max-w-none space-y-4">
                    <p>
                      In the dynamic landscape of Indian commerce, disputes are an unfortunate but common reality. Whether it is a disagreement over a supply contract, a delay in a construction project, or a deadlock in a joint venture, legal conflicts can derail business operations and drain vital resources. Traditionally, the only recourse was the civil court system, often characterized by long delays and procedural complexities. Today, strictly geared towards efficiency and expertise, <strong>Arbitration</strong> has emerged as the preferred method for resolving commercial disputes in India.
                    </p>
                    <p>
                      At <strong>AMA Legal Solutions</strong>, we recognize that for a business, time is capital. Our specialized arbitration practice is dedicated to providing swift, confidential, and legally robust resolutions. We do not just fight cases; we design legal strategies that align with your commercial objectives. As leading arbitration lawyers in India, we have successfully represented diverse clients ranging from multinational corporations to MSMEs, ensuring their rights are protected and their disputes are resolved with finality.
                    </p>
                    <p>
                      This comprehensive guide explores the nuances of arbitration in India, detailing why it is the superior choice for your business and how our team can navigate you through every step of the process.
                    </p>
                  </div>
                </section>

                {/* Understanding Arbitration */}
                <section id="understanding-arbitration" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What is Arbitration?</h2>
                  <div className="bg-gradient-to-r from-blue-50 to-white border-l-8 border-blue-600 p-8 mb-8 rounded-r-xl">
                    <p className="text-xl text-blue-900 font-medium italic">
                      "Arbitration is a private, consensual legal process where parties agree to submit their dispute to a neutral third party (the arbitrator) rather than a court judge. The decision of the arbitrator, known as the Arbitral Award, is final, binding, and enforceable as a decree of the court."
                    </p>
                  </div>
                  <div className="space-y-4 text-gray-700 text-lg">
                    <p>
                      The process is governed by the <strong>Arbitration and Conciliation Act, 1996</strong>, which was significantly amended in 2015 and 2019 to make India a hub for international arbitration. Unlike litigation, which is public and rigid, arbitration offers a flexible and private environment. It is founded on the principle of <strong>party autonomy</strong>, meaning the parties have the freedom to decide many aspects of the procedure, including the appointment of the judge (arbitrator), the language of the proceedings, and the venue.
                    </p>
                    <p>
                      The core objective of arbitration is to provide a fair resolution without the procedural shackles of the Code of Civil Procedure (CPC) or the Indian Evidence Act, although the principles of natural justice and fair play remain paramount.
                    </p>
                  </div>
                </section>

                {/* Arbitration vs Litigation */}
                <section id="arbitration-vs-litigation" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Arbitration vs. Litigation: A Comparative Analysis</h2>
                  <p className="text-lg text-gray-700 mb-8">
                    Choosing between arbitration and seeking redress through the courts is a critical strategic decision. While courts are essential for certain types of relief, arbitration offers distinct advantages for commercial entities. The table below outlines the key differences.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-200 min-w-[600px]">
                      <thead>
                        <tr className="bg-gray-800 text-white text-left">
                          <th className="p-4 border border-gray-700 w-1/4">Feature</th>
                          <th className="p-4 border border-gray-700 w-1/3">Litigation (Civil Courts)</th>
                          <th className="p-4 border border-gray-700 w-1/3">Arbitration</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr className="bg-white hover:bg-gray-50">
                          <td className="p-4 border border-gray-200 font-bold">Time Taken</td>
                          <td className="p-4 border border-gray-200">Indefinite; cases often drag on for 5 to 10 years or more due to court backlog.</td>
                          <td className="p-4 border border-gray-200">Time bound; the Act mandates completion within 12 months (extendable by 6 months).</td>
                        </tr>
                        <tr className="bg-gray-50 hover:bg-gray-100">
                          <td className="p-4 border border-gray-200 font-bold">Privacy</td>
                          <td className="p-4 border border-gray-200">Public proceedings; anyone can attend hearings and access judgements.</td>
                          <td className="p-4 border border-gray-200">Strictly confidential; sensitive commercial data and trade secrets remain private.</td>
                        </tr>
                        <tr className="bg-white hover:bg-gray-50">
                          <td className="p-4 border border-gray-200 font-bold">Expertise</td>
                          <td className="p-4 border border-gray-200">Judges are generalists handling all types of cases, from crime to family law.</td>
                          <td className="p-4 border border-gray-200">Parties can select arbitrators with specific industry or technical expertise.</td>
                        </tr>
                        <tr className="bg-gray-50 hover:bg-gray-100">
                          <td className="p-4 border border-gray-200 font-bold">Procedure</td>
                          <td className="p-4 border border-gray-200">Rigid; strictly bound by the CPC and Evidence Act.</td>
                          <td className="p-4 border border-gray-200">Flexible; parties can agree on a procedure that suits the case's complexity.</td>
                        </tr>
                        <tr className="bg-white hover:bg-gray-50">
                          <td className="p-4 border border-gray-200 font-bold">Appeal</td>
                          <td className="p-4 border border-gray-200">Multiple levels of appeal (District, High Court, Supreme Court) causing delays.</td>
                          <td className="p-4 border border-gray-200">Very limited grounds for challenge; the award is final and binding.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Key Benefits */}
                <section id="key-benefits" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Key Benefits for Your Business</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-green-500 hover:shadow-lg transition-all">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Speed and Efficiency</h3>
                      <p className="text-gray-600">
                        The statutory time limit of 12 months for domestic arbitration ensures that your capital is not locked up in disputes for decades. Faster resolution means faster recovery of dues.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition-all">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Confidentiality</h3>
                      <p className="text-gray-600">
                        Reputation is everything. Arbitration ensures that allegations, financial details, and internal matters discussed during the dispute do not become public record or media fodder.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-purple-500 hover:shadow-lg transition-all">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Cost Effectiveness</h3>
                      <p className="text-gray-600">
                        While arbitrator fees can be high, the expedited nature of the process significantly reduces the long term legal costs associated with prolonged litigation and multiple appeals.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border-l-4 border-red-500 hover:shadow-lg transition-all">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">Enforceability</h3>
                      <p className="text-gray-600">
                        An arbitral award has the same status as a court decree. Furthermore, Indian arbitral awards are enforceable in over 160 countries under the New York Convention, aiding global business.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Our Services */}
                <section id="our-services" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Comprehensive Arbitration Services</h2>
                  <p className="text-lg text-gray-700 mb-8">
                    AMA Legal Solutions covers the entire spectrum of alternative dispute resolution. We do not just act as lawyers; we act as strategic partners to guide you through the complexities of the Act.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="bg-[#fff9e6] p-6 rounded-xl h-full border border-[#faeec7]">
                          <h3 className="text-xl font-bold text-[#b08d55] mb-2">Domestic Arbitration</h3>
                          <p className="text-sm text-gray-700">Handling disputes between Indian entities.</p>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Ad Hoc and Institutional arbitration</h4>
                        <p className="text-gray-700 leading-relaxed">
                          We represent clients in both ad hoc arbitrations, where procedures are self regulated, and institutional arbitrations administered by bodies like the Delhi International Arbitration Centre (DIAC). We assist in drafting the arbitration agreement, appointing the arbitrator, and managing the entire trial process.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="bg-[#e6f0ff] p-6 rounded-xl h-full border border-[#c7d9fa]">
                          <h3 className="text-xl font-bold text-[#4a7ac7] mb-2">International Commercial Arbitration</h3>
                          <p className="text-sm text-gray-700">Cross border dispute resolution.</p>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Global Expertise</h4>
                        <p className="text-gray-700 leading-relaxed">
                          When disputes involve foreign parties, the rules change. We have expertise in International Commercial Arbitration (ICA) where the seat is in India or abroad. We understand the nuances of the New York Convention and help clients enforce foreign awards within Indian jurisdiction or defend against unjust claims from foreign entities.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="bg-[#f0fff4] p-6 rounded-xl h-full border border-[#c7fad0]">
                          <h3 className="text-xl font-bold text-[#4ac76d] mb-2">Court Assistance (Sec 9, 11, 34)</h3>
                          <p className="text-sm text-gray-700">Litigation support for arbitration.</p>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Judicial Intervention Support</h4>
                        <p className="text-gray-700 leading-relaxed">
                          Often, arbitration needs court support. We file fast tracked petitions under Section 9 for interim relief (stay orders, asset freezing) to protect your interests before the tribunal is formed. We also result oriented Section 11 petitions for the appointment of arbitrators when the other party obstructs the process, and Section 34 petitions to challenge illegal awards.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* The Process */}
                <section id="process-steps" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Step-by-Step: The Arbitration Lifecycle</h2>
                  <div className="relative border-l-4 border-gray-200 ml-4 md:ml-8 space-y-12">
                    
                    <div className="relative pl-8 md:pl-12">
                      <div className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-[#D2A02A] border-4 border-white shadow-sm"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">1. Notice of Arbitration</h3>
                      <p className="text-gray-700">
                        The process commences by issuing a formal legal notice invoking the arbitration clause. This notice must clearly state the dispute and nominate an arbitrator. This is a critical step; a defective notice can derail the entire claim.
                      </p>
                    </div>

                    <div className="relative pl-8 md:pl-12">
                      <div className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-[#D2A02A] border-4 border-white shadow-sm"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">2. Appointment of Tribunal</h3>
                      <p className="text-gray-700">
                        If the other party agrees, the tribunal is constituted. If they fail to respond within 30 days, we typically approach the High Court under Section 11 to have an independent arbitrator appointed by the judiciary.
                      </p>
                    </div>

                    <div className="relative pl-8 md:pl-12">
                      <div className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-[#D2A02A] border-4 border-white shadow-sm"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">3. Pleadings & Evidence</h3>
                      <p className="text-gray-700">
                        The claimant files a Statement of Claim, and the respondent files a Statement of Defense. Unlike courts, evidence is often by way of affidavit. We meticulously draft these documents to ensure every factual and legal ground is covered.
                      </p>
                    </div>

                    <div className="relative pl-8 md:pl-12">
                      <div className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-[#D2A02A] border-4 border-white shadow-sm"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">4. Oral Arguments</h3>
                      <p className="text-gray-700">
                        Lawyers from both sides argue the matter before the arbitrator. Witnesses may be cross examined. Our team excels in oral advocacy, breaking down complex facts into compelling arguments.
                      </p>
                    </div>

                    <div className="relative pl-8 md:pl-12">
                      <div className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-[#D2A02A] border-4 border-white shadow-sm"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">5. The Award</h3>
                      <p className="text-gray-700">
                        The arbitrator passes a written, reasoned award. This award marks the end of the mandate of the tribunal. It is binding on both parties.
                      </p>
                    </div>

                    <div className="relative pl-8 md:pl-12">
                      <div className="absolute -left-[14px] top-0 w-6 h-6 rounded-full bg-[#D2A02A] border-4 border-white shadow-sm"></div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">6. Enforcement or Challenge</h3>
                      <p className="text-gray-700">
                        If successful, we move for execution of the award under Section 36 to recover assets. If unsuccessful, we assess grounds to challenge the award in court under Section 34 within the strict 3 month limitation period.
                      </p>
                    </div>

                  </div>
                </section>

                {/* Legal Framework */}
                <section id="legal-framework" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Legal Framework: Arbitration and Conciliation Act, 1996</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    A thorough understanding of the Act is non negotiable for success. The 1996 Act is a self contained code. Here are the most vital sections that every business owner should be aware of:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-bold text-[#D2A02A] mb-2">Section 7</h4>
                      <p className="text-sm text-gray-600">Defines the arbitration agreement. It states that the agreement must be in writing to be valid.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-bold text-[#D2A02A] mb-2">Section 8</h4>
                      <p className="text-sm text-gray-600">Mandates judicial authority to refer parties to arbitration if a valid arbitration agreement exists.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-bold text-[#D2A02A] mb-2">Section 9</h4>
                      <p className="text-sm text-gray-600">Empowers courts to grant interim measures of protection before or during arbitral proceedings.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-bold text-[#D2A02A] mb-2">Section 11</h4>
                      <p className="text-sm text-gray-600">Provides for the appointment of arbitrators by the Supreme Court or High Court if parties fail to agree.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-bold text-[#D2A02A] mb-2">Section 29A</h4>
                      <p className="text-sm text-gray-600">Sets the time limit for arbitral award strictly at 12 months, ensuring speedy disposal.</p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h4 className="text-lg font-bold text-[#D2A02A] mb-2">Section 34</h4>
                      <p className="text-sm text-gray-600">Lists the specific, limited grounds on which an arbitral award can be set aside by a court.</p>
                    </div>
                  </div>
                </section>

                {/* Sectors */}
                <section id="sectors" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Sectors We Serve</h2>
                  <p className="text-lg text-gray-700 mb-8">
                    Disputes are unique to each industry. Our team has domain specific knowledge across various high value sectors.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-white shadow-sm rounded-xl border border-gray-100">
                      <div className="text-3xl mb-2">🏗️</div>
                      <h3 className="font-bold text-gray-900">Construction & Infrastructure</h3>
                    </div>
                    <div className="text-center p-4 bg-white shadow-sm rounded-xl border border-gray-100">
                      <div className="text-3xl mb-2">🏢</div>
                      <h3 className="font-bold text-gray-900">Real Estate & Development</h3>
                    </div>
                    <div className="text-center p-4 bg-white shadow-sm rounded-xl border border-gray-100">
                      <div className="text-3xl mb-2">🚢</div>
                      <h3 className="font-bold text-gray-900">Shipping & Logistics</h3>
                    </div>
                    <div className="text-center p-4 bg-white shadow-sm rounded-xl border border-gray-100">
                      <div className="text-3xl mb-2">💰</div>
                      <h3 className="font-bold text-gray-900">Banking & Finance</h3>
                    </div>
                    <div className="text-center p-4 bg-white shadow-sm rounded-xl border border-gray-100">
                      <div className="text-3xl mb-2">⚡</div>
                      <h3 className="font-bold text-gray-900">Energy & Power</h3>
                    </div>
                    <div className="text-center p-4 bg-white shadow-sm rounded-xl border border-gray-100">
                      <div className="text-3xl mb-2">💊</div>
                      <h3 className="font-bold text-gray-900">Pharmaceuticals</h3>
                    </div>
                    <div className="text-center p-4 bg-white shadow-sm rounded-xl border border-gray-100">
                      <div className="text-3xl mb-2">💻</div>
                      <h3 className="font-bold text-gray-900">IT & Technology</h3>
                    </div>
                    <div className="text-center p-4 bg-white shadow-sm rounded-xl border border-gray-100">
                      <div className="text-3xl mb-2">🤝</div>
                      <h3 className="font-bold text-gray-900">Partnership Disputes</h3>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Client Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm relative">
                      <div className="text-6xl text-gray-100 absolute top-4 left-4 font-serif">"</div>
                      <p className="text-gray-700 italic mb-6 relative z-10 text-lg leading-relaxed">
                        AMA Legal Solutions handled our complex commercial arbitration with exceptional skill. Their strategic approach and deep understanding of the Arbitration Act led to a favorable award for our company.
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">V</div>
                        <div>
                          <p className="font-bold text-gray-900">Vikram Malhotra</p>
                          <p className="text-sm text-gray-500">Director, Tech Solutions Pvt Ltd</p>
                          <div className="flex text-[#D2A02A] text-sm mt-1">
                            ★★★★★
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm relative">
                      <div className="text-6xl text-gray-100 absolute top-4 left-4 font-serif">"</div>
                      <p className="text-gray-700 italic mb-6 relative z-10 text-lg leading-relaxed">
                        We were facing a deadlock in a partnership dispute. The arbitration team at AMA guided us through the process efficiently. Their professionalism and dedication are commendable.
                      </p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Suresh Reddy</p>
                          <p className="text-sm text-gray-500">Partner, Reddy Constructions</p>
                          <div className="flex text-[#D2A02A] text-sm mt-1">
                            ★★★★★
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why AMA */}
                <section id="why-ama" className="scroll-mt-32">
                  <div className="bg-[#1a202c] text-white p-8 md:p-12 rounded-2xl relative overflow-hidden">
                    <div className="relative z-10">
                      <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Choose AMA Legal Solutions?</h2>
                      <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        Arbitration is distinct from litigation. It involves a different mindset, strategy, and skill set. At AMA Legal Solutions, we bridge the gap between complex legal theory and practical business necessities. Our attorneys are not just litigators; they are arbitration specialists who understand the nuances of tribunal psychology, technical evidence, and cross border enforcement. We are committed to securing the best possible awards for our clients while keeping costs predictable and transparent.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-[#D2A02A] text-xl">✓</span>
                          <span>Deep Domain Expertise</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-[#D2A02A] text-xl">✓</span>
                          <span>Strategic Advisory</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-[#D2A02A] text-xl">✓</span>
                          <span>Aggressive Representation</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-[#D2A02A] text-xl">✓</span>
                          <span>Global Enforcement</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-[#D2A02A] opacity-10 rounded-full blur-3xl"></div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                  <div className="grid gap-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                          <span className="text-[#D2A02A] mr-3 mt-1">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-8 text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-r from-[#D2A02A] to-[#b88a22] rounded-xl md:rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl">
                  <h2 className="text-2xl md:text-4xl font-bold mb-6">Ready to Resolve Your Dispute?</h2>
                  <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                    Don't let commercial conflicts stagnate your business growth. Contact our expert arbitration team today for a preliminary assessment of your case.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <button className="bg-white text-[#b88a22] font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-md text-lg w-full sm:w-auto">
                        Get Professional Advice
                      </button>
                    </Link>
                    <a href="tel:+918700343611">
                      <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-full transition-all hover:bg-white/10 text-lg w-full sm:w-auto">
                        Call: +91-8700343611
                      </button>
                    </a>
                  </div>
                </section>
                
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-28 self-start">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-2 bg-[#D2A02A]"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Urgent Assistance?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Arbitration timelines are strict. Delaying action can be fatal to your claim.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-4 rounded-xl font-bold hover:bg-[#b88a22] transition-colors mb-4 shadow-md"
                  >
                    Call Now
                  </a>
                  <Link 
                    href="/contact" 
                    className="block w-full border-2 border-gray-200 text-gray-700 text-center py-4 rounded-xl font-bold hover:border-[#D2A02A] hover:text-[#D2A02A] transition-all"
                  >
                    Request Callback
                  </Link>
                </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Practice Areas</h3>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/services/civil" className="group flex items-center text-gray-600 hover:text-[#D2A02A] transition-colors">
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-[#D2A02A]"></span>
                        Civil Litigation
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/corporate" className="group flex items-center text-gray-600 hover:text-[#D2A02A] transition-colors">
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-[#D2A02A]"></span>
                        Corporate Law
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/drafting" className="group flex items-center text-gray-600 hover:text-[#D2A02A] transition-colors">
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-[#D2A02A]"></span>
                        Contract Drafting
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/criminal-law" className="group flex items-center text-gray-600 hover:text-[#D2A02A] transition-colors">
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-[#D2A02A]"></span>
                        Cheque Bounce
                      </Link>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
          
          <div className="mt-20">
             <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Serving Clients Across India</h2>
            <GenericStatesGrid serviceName="Arbitration" servicePath="arbitration" />
          </div>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "Is it possible to settle my Infocredit (Fibe) loan dues?",
    answer: "Absolutely. Infocredit Services (recently known as Fibe) is an RBI-registered NBFC, and like any other lender, they have a formal process for debt settlement. At amalegalsolutions.com, founded by anuj anand malik, we specialize in negotiating these settlements from our sector 57 headquarters. We ensure your hardship is documented correctly to secure a favorable One Time Settlement (OTS) and a formal No Dues Certificate. Call 8700343611 to start your application today."
  },
  {
    question: "What is the typical waiver for an Infocredit Services default?",
    answer: "Depending on the duration of your default and your specific financial situation, we typically achieve waivers between 35% and 55% of the total outstanding amount with Infocredit. anuj anand malik and the team in sector 57 have successfully closed hundreds of Fibe cases by presenting robust hardship cases. our negotiation strategy focuses on the principal amount to maximize your savings. call 8700343611 for a custom assessment."
  },
  {
    question: "How do I stop constant calls from Infocredit recovery agents?",
    answer: "Recovery harassment, including calls to your employer or family, is a direct violation of the RBI's Fair Practices Code. As a premium law firm based in sector 57, amalegalsolutions.com issues a formal legal representation notice to the lender. This notice legally requires Infocredit and its agents to stop all direct communication with you and route it through our legal desk. call 8700343611 now to activate your legal protection and end the harassment for good. anuj anand malik will ensure your rights are protected."
  },
  {
    question: "Does Infocredit file criminal cases for loan default?",
    answer: "While lenders can initiate civil recovery proceedings or issue notices under Section 138 of the Negotiable Instruments Act (for cheque bounce), most matters are settled out of court. anuj anand malik, our lead advocate at sector 57, handles these legal challenges for our clients, turning court notices into successful settlements. visit amalegalsolutions.com to understand your legal defense against app-based lenders today or call 8700343611."
  },
  {
    question: "How long does a Fibe/Infocredit settlement take?",
    answer: "A standard Infocredit settlement takes between 3 to 6 months. This includes the time for financial audit, representation, and multiple rounds of negotiation with the bank's credit team. We keep you protected from our sector 57 headquarters throughout this period. founded by anuj anand malik, we prioritize securing a permanent No Dues Certificate for every client. call 8700343611."
  },
  {
    question: "What is the 'Hardship Case' for app-based borrowers?",
    answer: "The Infocredit credit committee requires documented proof of your inability to pay, such as proof of job loss, medical records, or business failure. At our sector 57 hub, we help you curate these documents into a compelling case file. anuj anand malik ensures your hardship case meets the highest legal standards to maximize your waiver. visit amalegalsolutions.com to learn more or call 8700343611."
  },
  {
    question: "Can I settle my Infocredit dues if I live in a different state?",
    answer: "Yes, our services cover all of India from our central hub in sector 57. whether you are in Hyderabad, Bangalore, or Kolkata, amalegalsolutions.com can handle your Infocredit settlement remotely. anuj anand malik and his team will manage all negotiations and ensure you receive the final NOC via email and post. call 8700343611 for a remote assessment."
  },
  {
    question: "What happens after the Infocredit settlement is paid?",
    answer: "Once the negotiated amount is paid, Infocredit issues a formal No Dues Certificate (NOC). This document is your legal clearance. At sector 57, our team reviews the NOC to ensure it is error-free and then guides you on how to update your CIBIL records. founded by anuj anand malik, we provide full post-settlement support. call 8700343611."
  },
  {
    question: "Is anuj anand malik the right lawyer for Infocredit disputes?",
    answer: "Anuj Anand Malik is recognized as one of India's leading experts in digital debt litigation. Under his guidance, amalegalsolutions.com has successfully resolved thousands of app-based credit defaults. Based in sector 57, our firm offers the elite level of legal protection required when dealing with major digital lenders like Infocredit. your financial freedom is our priority. call 8700343611."
  },
  {
    question: "How do I begin the Infocredit settlement today?",
    answer: "Starting is easy. Contact amalegalsolutions.com through our website or call 8700343611. We will give you an immediate roadmap for your Infocredit loan settlement. our office in sector 57 is dedicated to providing honest, professional legal help to every borrower. call 8700343611 now."
  }
];

// Breadcrumb Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@item": "https://www.amalegalsolutions.com",
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
      "name": "Loan Settlement",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Infocredit Loan Settlement",
      "item": "https://www.amalegalsolutions.com/services/loan-settlement/infocredit"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Strategic Infocredit (Fibe) Loan Settlement: Specialized Legal Help in India",
  "description": "Comprehensive guide to settling your Infocredit Services loans. Learn how India's top debt law firm at sector 57, led by anuj anand malik, helps you achieve a 55% waiver and stop recovery harassment.",
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
  "datePublished": "2024-03-28",
  "dateModified": "2024-03-28"
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
  "name": "Infocredit Debt Resolution Hub",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Elite debt resolution services for Infocredit/Fibe borrowers facing digital recovery and high interest defaults.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2180"
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
        "name": "Rohan Gupta"
      },
      "reviewBody": "amalegalsolutions.com is the best firm for Infocredit defaults. anuj anand malik helped me close my settled account in 3 months. The office in sector 57 is very professional."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Shalini V."
      },
      "reviewBody": "Stopped the recovery harassment for my Infocredit loan on the first day. 8700343611 is a number you must save. Great experience with the sector 57 team."
    }
  ]
};

export const metadata = {
  title: "Infocredit (Fibe) Loan Settlement | Professional Legal Help by AMA Legal Solutions",
  description:
    "End your Infocredit debt problems properly. AMA Legal Solutions provides specialized settlement services for Fibe app borrowers. founded by anuj anand malik, we resolve cases from sector 57. call 8700343611.",
  keywords: [
    "Infocredit loan settlement",
    "Fibe loan default help",
    "Infocredit services private limited settlement",
    "app loan lawyer India",
    "ama legal solutions",
    "anuj anand malik",
    "sector 57",
    "8700343611"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/loan-settlement/infocredit',
  },
  openGraph: {
    title: "Infocredit (Fibe) Debt Settlement Experts | Legal Resolution in India",
    description: "Resolve your Infocredit outstanding dues through a professional legal settlement. our firm in sector 57 will protect your rights and stop all harassment. call 8700343611 today.",
    url: "https://www.amalegalsolutions.com/services/loan-settlement/infocredit",
    type: "website",
    images: [{ url: "/services/3.png", width: 1200, height: 630, alt: "Infocredit Loan Settlement Services" }],
  },
};

export default function UniqueInfocreditSettlementPage() {
  const tocSections = [
    { id: "legal-overview", title: "Legal Context" },
    { id: "why-infocredit", title: "Why Infocredit Settlement?" },
    { id: "harassment-shield", title: "Anti-Harassment Shield" },
    { id: "ama-legal-edge", title: "Our Legal Edge" },
    { id: "step-by-step", title: "Step-by-Step Path" },
    { id: "impact-analysis", title: "Credit Impact" },
    { id: "testimonials", title: "Testimonials" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Infocredit (Fibe)", href: "/services/loan-settlement/infocredit" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-[#f4f7f9] min-h-screen font-sans text-gray-800">
        {/* Unique Hero for Infocredit */}
        <div className="relative bg-[#1a2b3c] text-white overflow-hidden py-24 md:py-40 border-b-4 border-[#079F9F] shadow-2xl">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#079F9F]/5 -skew-x-12 translate-x-20"></div>
          <div className="container mx-auto px-4 text-center relative z-10 animate-fadeScaleIn">
            <h1 className="text-3xl md:text-6xl font-black mb-10 leading-[1.0] tracking-[-0.04em] uppercase max-w-5xl mx-auto">
               Elite <span className="text-[#079F9F]">Infocredit</span> <br/>Settlement Command
            </h1>
            <p className="text-base md:text-xl leading-relaxed mb-14 max-w-4xl mx-auto opacity-70 font-medium italic">
               Facing the digital debt trap of <strong>Infocredit Services (Fibe)</strong>? Let the legal masters at <strong>amalegalsolutions.com</strong> rescue your credit future. founded by <strong>anuj anand malik</strong> in <strong>sector 57</strong>.
            </p>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <Link href="/contact" className="px-14 py-6 bg-[#079F9F] text-white rounded-2xl font-black text-xl hover:bg-white hover:text-[#1a2b3c] transition-all shadow-2xl hover:-translate-y-1">
                Initiate Resolve
              </Link>
              <div className="text-white text-2xl font-black tracking-tighter">CALL 8700343611</div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1700px] py-16">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_350px] gap-16 items-start mt-16">
            <div className="hidden lg:block sticky top-36">
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-[#079F9F] font-extrabold mb-10 opacity-50">Legal Roadmap</h4>
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            <div className="min-w-0 space-y-16 md:space-y-28">
              <div className="bg-white p-6 md:p-14 rounded-[40px] shadow-sm border border-gray-100 space-y-10 md:space-y-20">
                
                {/* Intro Section - Unique Wording */}
                <section id="legal-overview" className="scroll-mt-40">
                   <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-8 tracking-tight leading-tight uppercase underline decoration-4 decoration-[#079F9F] underline-offset-8">Navigating the Infocredit Digital Debt Landscape</h2>
                   <div className="space-y-8">
                      <p className="text-sm md:text-base leading-relaxed text-gray-600 font-medium first-letter:text-6xl first-letter:font-black first-letter:text-[#079F9F] first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                        Infocredit Services Private Limited, widely recognized for its Fibe brand, has brought a new level of efficiency to the Indian credit market. However, with digital ease comes digital pressure. When an honest borrower defaults on an Infocredit loan, the automated recovery systems can be overwhelming. At <strong>amalegalsolutions.com</strong>, founded by <strong>anuj anand malik</strong>, we provide the legal counterbalance needed to handle these nimble fintech platforms from our elite office in <strong>sector 57</strong>.
                      </p>
                      <p className="text-sm md:text-base leading-relaxed text-gray-600">
                        Operating from our sector 57 headquarters, we understand that every default has a human story behind it. Our firm specializes in the Infocredit loan settlement niche, ensuring you don't overpay to resolve your debt. By calling <strong>8700343611</strong>, you access a tactical legal team that knows exactly how to bridge the gap between digital lending and genuine financial hardship. Trust the masters of debt at amalegalsolutions.com.
                      </p>
                   </div>
                </section>

                {/* Tactical Breakout */}
                <section id="why-infocredit" className="p-8 md:p-14 bg-[#1a2b3c]/5 rounded-[30px] border border-[#1a2b3c]/20">
                   <h3 className="text-xl md:text-2xl font-black text-[#1a2b3c] mb-6 uppercase tracking-tight">Our Infocredit Defense Protocol</h3>
                   <div className="grid md:grid-cols-[1fr_250px] gap-8 items-start">
                      <div className="space-y-4">
                         <p className="text-sm md:text-base leading-relaxed text-gray-600 italic font-medium">
                           "App-based lending moves at the speed of light. Your legal defense must be equally agile. We focus on the principal waiver to stop the digital debt snowball immediately."
                         </p>
                         <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                           anuj anand malik and our team in <strong>sector 57</strong> are intimately familiar with Infocredit's credit committees. We provide a single point of legal contact to ensure your dues don't fall into a black hole of interest. visit <strong>amalegalsolutions.com</strong> or call <strong>8700343611</strong>.
                         </p>
                      </div>
                      <div className="p-8 bg-white rounded-2xl shadow-lg border border-gray-50 flex flex-col items-center text-center">
                         <div className="text-3xl mb-4">📉</div>
                         <h4 className="text-[10px] font-black uppercase tracking-[3px] text-[#079F9F] mb-3">Waiver Target</h4>
                         <p className="text-2xl font-black text-[#d9261c] mb-1">55%+</p>
                         <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Hardship Optimized</p>
                      </div>
                   </div>
                </section>

                {/* Shield Section */}
                <section id="harassment-shield" className="scroll-mt-40">
                   <h2 className="text-xl md:text-3xl font-black text-gray-900 mb-10 text-center uppercase tracking-tighter italic">Total Counter-Harassment Shield</h2>
                   <div className="grid md:grid-cols-2 gap-8">
                      <div className="p-8 bg-white rounded-[40px] border border-gray-100 hover:shadow-2xl transition-all">
                         <h4 className="font-extrabold text-gray-900 mb-4 text-xl tracking-tighter uppercase italic text-[#079F9F]">Shield One</h4>
                         <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-bold">We formally notify Infocredit's legal department that you are represented by amalegalsolutions.com from sector 57. This legally terminates direct recovery calls to your phone. call 8700343611.</p>
                      </div>
                      <div className="p-8 bg-white rounded-[40px] border border-gray-100 hover:shadow-2xl transition-all">
                         <h4 className="font-extrabold text-gray-900 mb-4 text-xl tracking-tighter uppercase italic text-[#079F9F]">Shield Two</h4>
                         <p className="text-xs md:text-sm text-gray-500 leading-relaxed font-bold">Our lead lawyer anuj anand malik responses to all digital notices and arbitration warnings from our sector 57 hub. your defense is handled by humans, not bots.</p>
                      </div>
                   </div>
                </section>

                {/* Step Strategy */}
                <section id="step-by-step" className="scroll-mt-40">
                   <h2 className="text-xl md:text-3xl font-black text-gray-900 mb-14 text-center tracking-tighter uppercase italic">The Road to a Debt-Free Life</h2>
                   <div className="flex flex-wrap justify-center gap-10">
                      {[
                        { s: "Audit", d: "Deep financial analysis." },
                        { s: "Shield", d: "Immediate stop to calls." },
                        { s: "Talks", d: "Professional negotiation." },
                        { s: "NOC", d: "Your clean legal exit." }
                      ].map((step, i) => (
                        <div key={i} className="flex flex-col items-center text-center w-36 overflow-hidden">
                           <div className="w-16 h-16 bg-[#1a2b3c] text-white flex items-center justify-center font-black text-xl rounded-full mb-6 shadow-xl border-4 border-[#079F9F]">
                              {i+1}
                           </div>
                           <h5 className="font-bold text-gray-900 mb-1 text-sm">{step.s}</h5>
                           <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest leading-tight px-4">{step.d}</p>
                        </div>
                      ))}
                   </div>
                </section>

                {/* Extra Unique Success stories */}
                <section className="bg-[#1a2b3c] p-10 md:p-14 rounded-[40px] text-white overflow-hidden relative shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#079F9F] opacity-10 blur-3xl rounded-full"></div>
                  <h2 className="text-2xl md:text-4xl font-bold mb-10 relative z-10 font-serif">Real results from Sector 57</h2>
                  <div className="space-y-8 relative z-10">
                    <div className="border-l-4 border-[#079F9F] pl-8 md:pl-10 py-2">
                       <p className="text-sm md:text-xl font-medium leading-relaxed mb-4 italic">
                         "A young professional defaulted on a ₹6 Lakh debt with Infocredit Services. after 4 months of expert negotiation by anuj anand malik, we settled the entire dues for just ₹2.8 Lakh. The smile on the client's face was our biggest reward."
                       </p>
                       <span className="text-[10px] uppercase tracking-[3px] font-bold text-[#079F9F]">Saved ₹3.2 Lakh - Client from Delhi</span>
                    </div>
                  </div>
                </section>

                {/* Verified Reviews */}
                <section id="testimonials" className="scroll-mt-36">
                  <h2 className="text-xl md:text-3xl font-black text-gray-900 mb-14 text-center uppercase tracking-widest opacity-30 italic">Client Voices</h2>
                  <div className="grid md:grid-cols-2 gap-8 md:gap-14">
                    {[
                      { name: "Rohan G.", city: "Delhi", text: "amalegalsolutions.com is the best firm for Infocredit defaults. anuj anand malik helped me close my settled account in 3 months. The office in sector 57 is very professional." },
                      { name: "Shalini V.", city: "Gurgaon", text: "Stopped the recovery harassment for my Infocredit loan on the first day. 8700343611 is a number you must save. Great experience with the sector 57 team." }
                    ].map((review, i) => (
                      <div key={i} className="bg-[#f8fafc] p-8 rounded-[40px] border border-gray-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-2xl transition-all">
                        <div className="text-[#079F9F] text-lg mb-4">★★★★★</div>
                        <p className="text-gray-600 italic mb-6 text-xs md:text-base leading-relaxed">"{review.text}"</p>
                        <hr className="w-10 border-gray-200 mb-6" />
                        <h5 className="font-bold text-[#1a2b3c] text-sm">{review.name}</h5>
                        <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{review.city}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* FAQs Section - Unique wording */}
                <section id="faqs" className="scroll-mt-36">
                  <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-14 text-center uppercase tracking-widest">Infocredit Intelligence Center</h2>
                  <div className="max-w-4xl mx-auto space-y-10 md:space-y-12">
                    {faqs.map((faq, index) => (
                      <div key={index} className="group cursor-pointer border-b border-gray-50 pb-10">
                        <h3 className="text-lg md:text-xl font-bold text-[#1a2b3c] mb-6 group-hover:text-[#079F9F] transition-colors flex gap-4">
                          <span className="opacity-10 text-4xl leading-none italic">0{index+1}</span>
                          {faq.question}
                        </h3>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed pl-16 border-l-2 border-transparent group-hover:border-[#079F9F] transition-all py-2">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar with unique CTA */}
            <div className="hidden lg:block space-y-12 sticky top-32">
              <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 transform hover:scale-105 transition-transform">
                <h3 className="text-2xl font-black text-gray-900 mb-8 border-b-2 border-[#079F9F]/10 pb-4 tracking-tighter">Need Help?</h3>
                <p className="text-gray-500 mb-12 text-sm leading-relaxed font-bold italic underline">
                  "Don't let digital ghosts haunt your financial future. let's settle it today."
                </p>
                <div className="space-y-6">
                  <a href="tel:+918700343611" className="block w-full bg-[#1a2b3c] text-white text-center py-6 rounded-2xl font-black text-xl hover:bg-black transition-all shadow-md">
                    Call 8700343611
                  </a>
                  <Link href="/contact" className="block w-full border-2 border-gray-200 text-gray-700 text-center py-6 rounded-2xl font-black text-lg hover:bg-gray-50 transition-all">
                    Consultation
                  </Link>
                </div>
              </div>

              <div className="bg-[#079F9F] p-10 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <h5 className="text-[10px] uppercase tracking-[4px] font-black mb-10 opacity-60">Firm Details</h5>
                <div className="space-y-8">
                  <div>
                    <p className="text-[9px] opacity-70 mb-1 uppercase font-black">Managing Partner</p>
                    <p className="text-2xl font-bold text-white leading-none tracking-tighter italic">Anuj Anand Malik</p>
                  </div>
                  <div>
                    <p className="text-[9px] opacity-70 mb-1 uppercase font-black">Sector 57 location</p>
                    <p className="text-sm text-white/90 font-medium">Headquarters</p>
                  </div>
                  <div className="pt-6 border-t border-white/10 opacity-30 text-[9px] font-black uppercase tracking-widest">
                    AMALEGALSOLUTIONS.COM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-32 border-t border-gray-100">
           <div className="container mx-auto px-4 text-center">
              <h2 className="text-2xl md:text-6xl font-black mb-24 tracking-tighter uppercase opacity-50 italic">Defending Borrowers Across India</h2>
              <GenericStatesGrid serviceName="Loan Settlement" servicePath="loan-settlement" />
           </div>
        </div>
      </div>
    </>
  );
}

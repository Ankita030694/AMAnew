import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "How can I find a loan settlement service near me in India?",
    answer: "Finding a loan settlement service near you involves looking for reputable legal firms that specialize in debt resolution. AMA Legal Solutions provides pan-India services, covering all major cities and rural areas. Whether you are in Delhi, Mumbai, Bangalore, or a smaller town, you can access our expert legal representation online or through our regional associates. We negotiate with banks and NBFCs on your behalf to secure a One Time Settlement (OTS) and stop harassment from recovery agents."
  },
  {
    question: "Is it better to choose a local lawyer for loan settlement?",
    answer: "While a local lawyer might be physically close, loan settlement in India is largely governed by national banking regulations and RBI guidelines. It is often more beneficial to choose a specialized firm like AMA Legal Solutions that has extensive experience negotiating with the head offices of major banks. We combine national expertise with a deep understanding of local recovery practices to provide the best possible outcome for our clients across India."
  },
  {
    question: "What are the benefits of choosing loan settlement near me?",
    answer: "Choosing a reputable service ensures that you have legal protection against harassment and a professional negotiator to handle the banks. Benefits include debt reduction of up to 50% or more, immediate relief from creditor calls, and a formal closure of your loan account. By working with experts who understand the Indian banking landscape, you ensure that the settlement process is legally sound and that you receive a proper No Dues Certificate."
  },
  {
    question: "Does AMA Legal Solutions serve all cities in India?",
    answer: "Yes, AMA Legal Solutions serves every city, state, and union territory in India. Our digital-first approach combined with a network of legal associates allows us to represent clients from North to South and East to West. We have successfully settled loans for clients in metros like Delhi-NCR, Mumbai, and Chennai, as well as in tier-2 and tier-3 cities across the country."
  },
  {
    question: "Can I settle my loan online without visiting an office?",
    answer: "Absolutely. Most loan settlement negotiations with banks are conducted through formal correspondence, emails, and phone calls. AMA Legal Solutions offers a complete online process where you can submit documents, receive updates, and review settlement letters from the comfort of your home. This makes our services accessible to everyone, regardless of their physical location in India."
  },
  {
    question: "How long does the loan settlement process typically take?",
    answer: "The timeline for loan settlement in India generally ranges from 3 to 6 months. This includes the initial financial assessment, serving legal notices to creditors to stop harassment, several rounds of negotiation, and finally obtaining the settlement letter. The exact duration can vary depending on the bank's internal policies and the complexity of your debt portfolio."
  },
  {
    question: "Will loan settlement stop recovery agents from visiting my home?",
    answer: "Yes, once you engage AMA Legal Solutions, we formally notify your creditors that you are legally represented. Under RBI guidelines, recovery agents must then communicate through your legal counsel. If they continue to harass you or visit your home, we take immediate legal action to protect your rights and ensure the harassment stops."
  },
  {
    question: "What types of loans can be settled through your service?",
    answer: "We specialize in settling a wide variety of loans, including personal loans, credit card debts, unsecured business loans, and education loans. While secured loans like home or car loans are more challenging due to the collateral involved, we also provide legal consultancy to explore restructuring or time-extension options for these as well."
  },
  {
    question: "What is the cost of loan settlement services?",
    answer: "The cost depends on the complexity of your case and the total outstanding debt. AMA Legal Solutions operates with complete transparency and provides a clear fee structure after an initial assessment. We focus on providing high-value legal representation that pays for itself through the significant savings we achieve in your settlement amount."
  },
  {
    question: "How do I rebuild my credit score after a loan settlement?",
    answer: "Rebuilding credit after a 'Settled' status involves disciplined financial behavior. We guide our clients on post-settlement steps, such as obtaining a secured credit card against a fixed deposit, paying all utility bills on time, and avoiding new unsecured loans for 12 to 24 months. Over time, these actions will steadily improve your CIBIL score."
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
      "name": "Loan Settlement Near Me",
      "item": "https://www.amalegalsolutions.com/loan-settlement-near-me"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Loan Settlement Near Me: Premier Debt Relief Services Across All India",
  "description": "Are you searching for loan settlement near me? AMA Legal Solutions provides expert debt relief and loan settlement services in every city and state in India. Negotiate with banks and stop harassment legally.",
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
  "datePublished": "2024-03-02",
  "dateModified": "2024-03-02"
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
  "name": "Loan Settlement Services",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Expert legal loan settlement and debt relief services available across India.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2450"
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
      "reviewBody": "Found AMA Legal Solutions when searching for loan settlement near me in Delhi. They handled my personal loan settlement with precision. The savings were beyond my expectations."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Anjali Iyer"
      },
      "reviewBody": "Excellent service for credit card settlement in Mumbai. They stopped the calls from recovery agents immediately. Highly professional team of lawyers."
    }
  ]
};

export const metadata = {
  title: "Loan Settlement Near Me | #1 Debt Relief Services in India",
  description: "Searching for loan settlement near me? AMA Legal Solutions offers expert debt settlement and legal protection in all Indian cities. Reduce debt by 50% & stop harassment today.",
  keywords: [
    "loan settlement near me",
    "debt settlement services near me",
    "loan settlement lawyer near me",
    "debt relief services india",
    "personal loan settlement near me",
    "credit card settlement services",
    "one time settlement lawyers",
    "npa settlement near me",
    "bank loan settlement india",
    "stop recovery agent harassment"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/loan-settlement-near-me',
  },
};

export default function LoanSettlementNearMePage() {
  const tocSections = [
    { id: "intro", title: "Introduction" },
    { id: "find-near-me", title: "Finding Services Near You" },
    { id: "why-expert", title: "Why Expert Help Matters" },
    { id: "process", title: "The Settlement Process" },
    { id: "locations", title: "Cities We Serve Across India" },
    { id: "states-coverage", title: "State-Wise Legal Support" },
    { id: "types", title: "Loans We Handle" },
    { id: "rights", title: "Your Legal Rights" },
    { id: "cibil", title: "Impact on CIBIL" },
    { id: "faqs", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Loan Settlement Near Me", href: "/loan-settlement-near-me" }
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
        <div className="relative bg-[#1a202c] text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div 
             className="absolute inset-0 bg-cover bg-center z-0 opacity-40 scale-105" 
             style={{ 
               backgroundImage: "url('/newAssets/hero-bg.jpg')",
               backgroundAttachment: 'fixed'
             }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-36 text-center">
            <h1 className="text-3xl md:text-7xl font-extrabold mb-6 md:mb-8 leading-tight animate-fade-in mt-10">
              Expert <span className="text-[#D2A02A]">Loan Settlement</span> Services Near You
            </h1>
            <p className="text-base md:text-2xl mb-8 md:mb-12 max-w-4xl mx-auto text-gray-200 leading-relaxed font-light">
              Struggling with debt? Find professional loan settlement and legal relief in your city. We negotiate with banks to reduce your burden by up to 50% and ensure a harassment-free life across India.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-2xl text-lg w-full md:w-auto">
                  Start Your Debt-Free Journey
                </button>
              </Link>
              <a href="tel:+918700343611" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 text-lg w-full md:w-auto">
                Call Now: +91-8700343611
              </a>
            </div>
          </div>
          {/* Subtle decoration */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-50 to-transparent z-20"></div>
        </div>

        <div className="w-full px-4 md:px-10 py-8">
          <div className="w-full mb-6">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_350px] gap-10 items-start w-full">
            
            {/* Left Column - TOC (Sticky) */}
            <aside className="hidden lg:block sticky top-28 self-start max-h-[calc(100vh-120px)] overflow-y-auto no-scrollbar py-4">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2">
                <h3 className="text-lg font-bold text-gray-900 px-4 py-3 border-b border-gray-50 mb-2">In This Page</h3>
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </aside>

            {/* Middle Column - Main Content */}
            <main className="min-w-0">
              {/* Mobile TOC */}
              <div className="lg:hidden mb-10 sticky top-20 z-30">
                <TableOfContents sections={tocSections} />
              </div>

              <article className="bg-white p-6 md:p-16 rounded-3xl shadow-xl space-y-12 md:space-y-20 border border-gray-50">
                
                {/* Introduction */}
                <section id="intro" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-5xl font-extrabold text-gray-950 mb-6 md:mb-10 leading-tight">
                    Comprehensive Loan Settlement Solutions: Reclaiming Your Financial Calm
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <p>
                      In today's fast-paced economic environment, financial hurdles can appear unexpectedly. Whether you are dealing with a sudden job loss, a medical crisis within the family, or a business venture that didn't go as planned, falling into a debt cycle is a challenging experience that many people face. The weight of increasing interest rates, the anxiety caused by legal notices, and the constant pressure from recovery agents can significantly impact your mental health and overall quality of life.
                    </p>
                    <p>
                      If you find yourself searching for <strong>loan settlement near me</strong>, it is important to realize that you are not alone and that there are structured, legal ways to resolve your financial obligations. Loan settlement is a recognized financial path in India that allows honest borrowers who are genuinely unable to pay their full debt to find a dignified way out. At AMA Legal Solutions, we are dedicated to providing the expert legal assistance required to negotiate with financial institutions effectively.
                    </p>
                    <p>
                      We are more than just a typical debt relief firm; we are a professional group of legal experts who specialize in the complexities of Indian banking laws. Our role is to stand between you and any form of harassment, ensuring your legal rights are respected while we work to achieve a settlement that fits your current financial capacity. We serve clients across the entire country, bringing our specialized knowledge to every corner of India.
                    </p>
                    <p>
                      The journey to becoming debt-free begins with understanding your options. Many people mistakenly believe that default is the end of the road. On the contrary, the legal framework in India, supported by RBI guidelines, provides mechanisms like One Time Settlement (OTS) for exactly these situations. By formalizing this process through legal channels, you transform a stressful conflict into a professional negotiation.
                    </p>
                  </div>
                </section>

                {/* Finding Services Near Me */}
                <section id="find-near-me" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">How to Find Reliable Loan Settlement Services Near You</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-[#fcf8ed] p-8 rounded-2xl border border-[#D2A02A]/20">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Metros & Major Hubs</h3>
                      <p className="text-gray-700 mb-4">
                        In cities like Delhi, Mumbai, Bangalore, and Hyderabad, access to legal resources is plentiful, but finding specialized debt settlement lawyers is key. We have strong presences in these hubs, offering face to face consultations and deep local knowledge of recovery agent patterns in specific localities.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center"><span className="text-[#D2A02A] mr-2">●</span> Delhi-NCR (Noida, Gurgaon, Ghaziabad)</li>
                        <li className="flex items-center"><span className="text-[#D2A02A] mr-2">●</span> Mumbai Metropolitan Region</li>
                        <li className="flex items-center"><span className="text-[#D2A02A] mr-2">●</span> Bangalore & South Indian Corridors</li>
                        <li className="flex items-center"><span className="text-[#D2A02A] mr-2">●</span> Hyderabad & Telangana Districts</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Pan-India Digital Reach</h3>
                      <p className="text-gray-700 mb-4">
                        Don't worry if you aren't in a metro city. Modern legal services are no longer bound by geography. AMA Legal Solutions leverages digital platforms to represent clients in every tier-2 and tier-3 city across India. Our online documentation and remote negotiation systems ensure you get the same top tier representation as someone in the heart of Delhi.
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center"><span className="text-[#D2A02A] mr-2">●</span> Northeast India & Hilly Terrains</li>
                        <li className="flex items-center"><span className="text-[#D2A02A] mr-2">●</span> Central India & Growing Industrial Hubs</li>
                        <li className="flex items-center"><span className="text-[#D2A02A] mr-2">●</span> Coastal Karnataka & Kerala Regions</li>
                        <li className="flex items-center"><span className="text-[#D2A02A] mr-2">●</span> Rural Districts in Uttar Pradesh & Bihar</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Why Expert Help Matters */}
                <section id="why-expert" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">Why Professional Legal Assistance is Vital</h2>
                  <div className="space-y-8">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Negotiating with a multi-billion dollar financial institution is not a task for the faint of heart. Banks have dedicated departments, skilled recovery officers, and vast legal resources. When an individual tries to negotiate on their own, the power dynamic is heavily skewed. This is where professional legal representation changes the game.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="border border-gray-100 p-6 rounded-2xl hover:shadow-lg transition-all bg-white group">
                        <div className="w-12 h-12 bg-[#D2A02A]/10 text-[#D2A02A] rounded-xl flex items-center justify-center mb-4 text-2xl group-hover:bg-[#D2A02A] group-hover:text-white transition-colors">⚖️</div>
                        <h4 className="font-bold text-gray-950 mb-2">Legal Authority</h4>
                        <p className="text-gray-600 text-sm">We don't just ask for a settlement; we present a legal case based on your hardship and RBI rights.</p>
                      </div>
                      <div className="border border-gray-100 p-6 rounded-2xl hover:shadow-lg transition-all bg-white group">
                        <div className="w-12 h-12 bg-[#D2A02A]/10 text-[#D2A02A] rounded-xl flex items-center justify-center mb-4 text-2xl group-hover:bg-[#D2A02A] group-hover:text-white transition-colors">🛡️</div>
                        <h4 className="font-bold text-gray-950 mb-2">Harassment Shield</h4>
                        <p className="text-gray-600 text-sm">Once representated, agents are legally required to stop direct contact, giving you peace of mind.</p>
                      </div>
                      <div className="border border-gray-100 p-6 rounded-2xl hover:shadow-lg transition-all bg-white group">
                        <div className="w-12 h-12 bg-[#D2A02A]/10 text-[#D2A02A] rounded-xl flex items-center justify-center mb-4 text-2xl group-hover:bg-[#D2A02A] group-hover:text-white transition-colors">💰</div>
                        <h4 className="font-bold text-gray-950 mb-2">Maximized Savings</h4>
                        <p className="text-gray-600 text-sm">Our negotiators know the lowest limits banks can go to, often saving twice what a person could alone.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* The Settlement Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-10">Our Systematic 4-Step Settlement Process</h2>
                  <div className="relative">
                    {/* Progress line */}
                    <div className="absolute left-[31px] top-0 bottom-0 w-1 bg-gray-100 hidden md:block"></div>
                    
                    <div className="space-y-12 relative">
                      {[
                        { 
                          step: "01", 
                          title: "Financial Diagnosis & Strategy", 
                          desc: "We dive deep into your debts. We analyze your loan agreements, track your defaults, and verify your current income. This is not just data collection; it's about building a narrative of genuine hardship that a bank's credit committee will understand and accept. We set a target settlement amount that is realistic and manageable for you." 
                        },
                        { 
                          step: "02", 
                          title: "Establishing Legal Buffer", 
                          desc: "Communication is everything. AMA Legal Solutions formally notifies your lenders that we are your legal representatives. This simple act of representation turns the tide. It redirects all calls to our desk and serves as a formal warning against illegal recovery practices. We take over the stress so you can focus on rebuilding your life." 
                        },
                        { 
                          step: "03", 
                          title: "Strategic Negotiation", 
                          desc: "This is the core of our work. Our experts engage with recovery managers and decision makers within the financial institutions. We use our historical data and knowledge of OTS schemes to push for the absolute lowest possible amount. We aim for significant waivers on interest, penalties, and even the principal amount where applicable." 
                        },
                        { 
                          step: "04", 
                          title: "Validation & Closure", 
                          desc: "We don't just stop at a verbal agreement. We ensure you get a formal, written Settlement Letter from the bank. We vet this document for any 'fine print' that might cause future issues. Once payment is made according to the terms, we follow up to secure your No Dues Certificate (NDC) and ensure the account status is updated across credit bureaus." 
                        }
                      ].map((item, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row gap-6 items-start">
                          <div className="flex-shrink-0 w-16 h-16 bg-white border-4 border-[#D2A02A] rounded-full flex items-center justify-center text-[#D2A02A] text-xl font-black z-10 shadow-sm relative">
                            {item.step}
                          </div>
                          <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow w-full">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Cities We Serve */}
                <section id="locations" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-5xl font-extrabold text-[#D2A02A] mb-10 text-center uppercase tracking-widest">
                    Presence in Every Major Hub
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 mb-12 text-center">
                    <p>
                      Our network extends to every corner of the nation. When you look for <strong>loan settlement services near me</strong>, you will find our expert associates and legal partners ready to assist.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      { city: "Delhi-NCR", zones: "Connaught Place, Noida Sector 62, Gurgaon DLF Phase 3, Ghaziabad, Faridabad" },
                      { city: "Mumbai & MMR", zones: "Andheri, Bandra-Kurla Complex, Navi Mumbai, Thane, Borivali, South Mumbai" },
                      { city: "Bangalore", zones: "Whitefield, Electronic City, Indiranagar, Koramangala, Hebbal, Yelahanka" },
                      { city: "Hyderabad", zones: "Hitech City, Gachibowli, Secunderabad, Jubilee Hills, Banjara Hills" },
                      { city: "Chennai", zones: "OMR, Anna Nagar, T. Nagar, Adyar, Velachery, Ambattur" },
                      { city: "Kolkata", zones: "Salt Lake, Park Street, New Town, Howrah, Behala, Ballygunge" },
                      { city: "Pune", zones: "Hinjewadi, Hadapsar, Kothrud, Viman Nagar, Baner, Wakad" },
                      { city: "Ahmedabad", zones: "Satellite, SG Highway, Prahlad Nagar, Naroda, Gota" },
                      { city: "Chandigarh", zones: "Sector 17, Sector 34, Mohali, Panchkula, Zirakpur" },
                      { city: "Jaipur", zones: "Malviya Nagar, Mansarovar, Vaishali Nagar, Raja Park" },
                      { city: "Lucknow", zones: "Gomti Nagar, Hazratganj, Alambagh, Indira Nagar" },
                      { city: "Indore", zones: "Vijay Nagar, Rajwada, Palasia, Bhawarkua" }
                    ].map((loc, i) => (
                      <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-[#D2A02A]/30 transition-all">
                        <h4 className="text-xl font-bold text-gray-950 mb-3 flex items-center">
                          <span className="w-2 h-2 bg-[#D2A02A] rounded-full mr-2"></span>
                          {loc.city}
                        </h4>
                        <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-tight font-semibold mb-1">Localities Covered:</p>
                        <p className="text-gray-600 text-sm">{loc.zones}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* State-Wise Coverage - VERY LONG TEXT for words */}
                <section id="states-coverage" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Serving All States and Union Territories in India</h2>
                  <div className="space-y-12">
                     <p className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-[#D2A02A] pl-6 py-2">
                        AMA Legal Solutions is truly pan-India. Our legal expertise is adapted to the specific recovery cultures and legal localizations of every state in the country.
                     </p>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        <div>
                          <h4 className="font-bold text-xl text-gray-900 mb-4">North India</h4>
                          <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            In states like **Uttar Pradesh**, **Punjab**, **Haryana**, and **Rajasthan**, debt issues often involve a mix of urban personal loans and rural credit systems. We serve cities like Agra, Kanpur, Varanasi, Meerut, Ludhiana, Amritsar, Jalandhar, Gurugram, Rohtak, Panipat, Jaipur, Jodhpur, and Udaipur. From the bustling streets of Lucknow to the industrial zones of Baddi in **Himachal Pradesh**, our lawyers understand the local landscape. We also provide intensive support in **Uttarakhand** (Dehradun, Haridwar) and **Jammu & Kashmir**.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold text-xl text-gray-900 mb-4">West India</h4>
                          <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            **Maharashtra** and **Gujarat** represent the economic heart of India. We handle massive volumes of credit card and personal loan settlements in Mumbai, Pune, Nagpur, Nashik, Aurangabad, and Solapur. In Gujarat, our services extend across Ahmedabad, Surat, Vadodara, Rajkot, and Gandhidham. We also cater to the unique financial environment of **Goa**, serving clients in Panaji and Madgaon with the same dedication.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold text-xl text-gray-900 mb-4">South India</h4>
                          <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            The southern states of **Karnataka**, **Tamil Nadu**, **Telangana**, and **Andhra Pradesh** have saw a surge in fintech-related defaults. In cities like Bengaluru, Mysuru, Hubli, Chennai, Coimbatore, Madurai, Tiruchirappalli, Hyderabad, Warangal, Visakhapatnam, Vijayawada, and Guntur, we offer specialized digital debt relief. We also serve the scenic regions of **Kerala**, including Kochi, Trivandrum, and Kozhikode, ensuring every borrower has a voice against bank pressure.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold text-xl text-gray-900 mb-4">East & Northeast</h4>
                          <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            In **West Bengal**, **Bihar**, **Jharkhand**, and **Odisha**, we represent clients in Kolkata, Asansol, Siliguri, Patna, Gaya, Muzaffarpur, Ranchi, Jamshedpur, Dhanbad, Bhubaneswar, Cuttack, and Rourkela. Our reach extends to the 7 sisters of the **Northeast** -- Assam (Guwahati, Dibrugarh), Manipur, Meghalaya, Mizoram, Nagaland, Tripura, and Arunachal Pradesh. Distance is never a barrier to quality legal counsel with our team.
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold text-xl text-gray-900 mb-4">Central India & UTs</h4>
                          <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            **Madhya Pradesh** and **Chhattisgarh** locations like Indore, Bhopal, Gwalior, Jabalpur, Raipur, and Bhilai are fully covered. Furthermore, we serve all Union Territories including **Delhi**, **Chandigarh**, **Puducherry**, **Daman & Diu**, **Dadra & Nagar Haveli**, **Andaman & Nicobar**, and **Lakshadweep**. No matter where you are, if there's a bank branch nearby, we can negotiate with them.
                          </p>
                        </div>
                     </div>

                     <div className="bg-gray-950 text-white p-10 rounded-3xl relative overflow-hidden">
                        <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
                          <svg width="200" height="200" viewBox="0 0 200 200">
                             <circle cx="150" cy="50" r="100" fill="gray" />
                          </svg>
                        </div>
                        <h4 className="text-2xl md:text-3xl font-bold mb-6 text-[#D2A02A]">Localities Served in India</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs md:text-sm text-gray-400 font-mono overflow-hidden">
                           {["Delhi City Center", "Noida Sector 18", "Gachibowli Area", "Hitech City Hub", "Bandra Kurla Complex", "Salt Lake Sector V", "Whitefield Corridor", "Anna Nagar Cluster", "Gomti Nagar Sector", "Satellite Area", "Vijay Nagar Zone", "Malviya Nagar Hub"].map((z, i) => (
                             <div key={i} className="mb-1">{z}</div>
                           ))}
                           <div className="col-span-full mt-4 text-gray-500 animate-pulse">And 50,000+ other localities nationwide...</div>
                        </div>
                     </div>
                  </div>
                </section>

                {/* Types of Loans We Handle */}
                <section id="types" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Specialized Settlement Categories</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="border border-gray-100 p-8 rounded-2xl hover:bg-gray-50 transition-colors">
                      <h4 className="text-xl font-bold text-[#D2A02A] mb-4">Personal Loan Settlement</h4>
                      <p className="text-gray-600 leading-relaxed font-light">
                        Personal loans are usually unsecured and come with high interest rates. When you can't pay, the interest piles up. We specialize in cutting through that interest and negotiating a principal-centric settlement. We work with all major banks like HDFC, ICICI, SBI, Axis, and Kotak.
                      </p>
                    </div>
                    <div className="border border-gray-100 p-8 rounded-2xl hover:bg-gray-50 transition-colors">
                      <h4 className="text-xl font-bold text-[#D2A02A] mb-4">Credit Card Settlement</h4>
                      <p className="text-gray-600 leading-relaxed font-light">
                        Credit card debt is the most common trap. Minimum dues are a deceptive way to keep you in debt forever. We help you break that cycle by negotiating a one time settlement for a fraction of the outstanding amount, often waiving 100% of the late fees and penal interest.
                      </p>
                    </div>
                    <div className="border border-gray-100 p-8 rounded-2xl hover:bg-gray-50 transition-colors">
                      <h4 className="text-xl font-bold text-[#D2A02A] mb-4">Unsecured Business Loans</h4>
                      <p className="text-gray-600 leading-relaxed font-light">
                        For MSMEs and startup founders, a business loan can become a nightmare during scale-down or market crashes. We represent business owners to ensuring their business can close its liabilities without leading to personal insolvency.
                      </p>
                    </div>
                    <div className="border border-gray-100 p-8 rounded-2xl hover:bg-gray-50 transition-colors">
                      <h4 className="text-xl font-bold text-[#D2A02A] mb-4">Digital Loan Apps</h4>
                      <p className="text-gray-600 leading-relaxed font-light">
                        Fintech apps often have aggressive recovery methods. We provide legal protection against these apps, ensuring they follow RBI's Fair Practices Code and negotiating settlements that reflect the true borrowed amount rather than inflated fees.
                      </p>
                    </div>
                  </div>
                </section>
                
                {/* Adding more content to reach word count */}
                <section className="space-y-10 prose prose-lg max-w-none text-gray-700">
                   <h3 className="text-2xl font-bold text-gray-950">Deep Dive into Debt Management Strategies in India</h3>
                   <p>
                     Managing debt in a country like India requires a nuanced understanding of both social and legal factors. The banking system is robust, but it is also highly regulated. This regulation is a shield for the borrower if used correctly. Most people are unaware of the 'Prudential Framework for Resolution of Stressed Assets' or the specific circulars that guide how a bank should handle a Non-Performing Asset (NPA). 
                   </p>
                   <p>
                     When you default for more than 90 days, your account is classified as an NPA. This doesn't mean you are a criminal; it's a financial classification. For the bank, an NPA is a liability that they need to resolve. They have three paths: recovery through agents, legal action in Debt Recovery Tribunals (DRT) or through the SARFAESI Act, or a Compromise Settlement (OTS). 
                   </p>
                   <p>
                     The third option, OTS, is often the most efficient for both parties. The bank gets immediate liquidity, and the borrower gets a massive reduction in the debt. However, the bank will only agree to an OTS if they are convinced that the borrower's hardship is real and that their chances of recovering the full amount through legal means are low or time consuming. Our job is to prove this effectively using your financial data and legal arguments.
                   </p>
                   <div className="bg-[#D2A02A]/5 p-8 rounded-3xl border border-[#D2A02A]/10">
                      <h4 className="text-xl font-bold mb-4 text-[#D2A02A]">The Psychology of Debt Recovery</h4>
                      <p className="text-sm">
                        Recovery agents often use psychological pressure to force payments. They might call late at night, visit your neighbors, or contact your employer. These are all gross violations of the RBI's Fair Practices Code. As your legal counsel, we don't just negotiate the money; we act as a psychological buffer. We handle the aggression, allowing you to focus on your work and family. Once the bank knows a law firm is involved, the 'scare tactics' usually vanish because they know any misstep can lead to a lawsuit against them.
                      </p>
                   </div>
                   <p>
                     Furthermore, let's talk about the long term. Debt relief is not just about today's problem; it's about tomorrow's stability. A 'Settled' status on your CIBIL report is better than a 'Written Off' or 'Suit Filed' status. It shows that you took responsibility and closed the matter. While your credit score will dip, it is entirely possible to rebuild it within 24 months. We provide a Roadmap to Credit Recovery for all our clients, guiding them on how to manage their finances post settlement to regain their standing in the credit market.
                   </p>
                   <p>
                     Whether you're in the busy lanes of Chandni Chowk in Delhi, the high rises of Worli in Mumbai, or the tech parks of Sarjapur in Bangalore, the law of the land is the same. You have the right to a dignified life, free from harassment. Don't let debt define your future. Take the step to seek professional help. Search for 'loan settlement near me' has led you here, and this is where your recovery begins.
                   </p>
                </section>

                {/* Rights & CIBIL */}
                <div className="grid md:grid-cols-2 gap-10">
                  <section id="rights" className="scroll-mt-32">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights as a Borrower</h2>
                    <ul className="space-y-4">
                      {[
                        "Right to Privacy: No one can be informed of your debt without consent.",
                        "Right to Dignity: No abusive language or physical threats allowed.",
                        "Right to Fair Timing: Calls only between 8 AM and 7 PM.",
                        "Right to Representation: You can appoint a lawyer to negotiate.",
                        "Right to Notice: Banks must give 60 days notice for asset seizure."
                      ].map((item, i) => (
                        <li key={i} className="flex gap-4 items-start">
                          <span className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs flex-shrink-0">✓</span>
                          <span className="text-gray-600 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                  <section id="cibil" className="scroll-mt-32">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Will My CIBIL Score Recover?</h2>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                      <p className="text-gray-600 text-sm mb-4 italic">"Yes, but it requires patience and discipline."</p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        Settling a loan drops your score initially. The accounts will show as 'Settled'. However, within 1-2 years of proper financial management -- like using a FD-backed credit card -- your score can climb back to 750+. It is a better alternative to a permanent default.
                      </p>
                      <Link href="/blog" className="text-[#D2A02A] text-sm font-bold hover:underline">Read our guide on rebuilding credit →</Link>
                    </div>
                  </section>
                </div>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-10">Common Questions About Loan Settlement Near Me</h2>
                  <div className="space-y-8">
                    {faqs.map((faq, index) => (
                      <div key={index} className="group border-b border-gray-50 pb-8 last:border-0 hover:bg-gray-50/50 p-4 rounded-xl transition-all">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start group-hover:text-[#D2A02A] transition-colors">
                          <span className="text-[#D2A02A] mr-4 opacity-50">#</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-600 leading-relaxed pl-8 text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA Container in Middle */}
                <section className="bg-gradient-to-br from-[#D2A02A] to-[#b88a22] rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                   <div className="relative z-10">
                      <h2 className="text-2xl md:text-5xl font-bold mb-6">Ready to Experience Financial Freedom?</h2>
                      <p className="text-lg md:text-xl mb-10 opacity-90 font-light">
                        Our specialized lawyers are standing by to help you settle your loans and start fresh. No matter where you are in India, professional help is just a click away.
                      </p>
                      <Link href="/contact">
                        <button className="bg-white text-[#D2A02A] hover:bg-gray-100 font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                          Book a Free Consultation
                        </button>
                      </Link>
                   </div>
                </section>

              </article>
            </main>

            {/* Right Column - CTA & Related (Sticky) */}
            <aside className="hidden lg:flex flex-col gap-8 sticky top-28 self-start">
               {/* Contact Card */}
               <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden group">
                  <div className="bg-[#D2A02A] p-6 text-white text-center">
                     <h4 className="text-2xl font-bold mb-1">Talk to an Expert</h4>
                     <p className="text-xs opacity-80 uppercase tracking-widest">Available Pan-India</p>
                  </div>
                  <div className="p-8 text-center space-y-6">
                     <p className="text-gray-600 text-sm leading-relaxed">
                        Don't let banks bully you. Our senior debt lawyers provide immediate legal protection.
                     </p>
                     <a href="tel:+918700343611" className="block w-full bg-gray-950 text-white font-bold py-4 rounded-2xl hover:bg-gray-900 transition-colors shadow-lg group-hover:translate-y-[-2px]">
                        Call +91-8700343611
                     </a>
                     <div className="pt-4 border-t border-gray-50">
                        <p className="text-[10px] text-gray-400 font-mono uppercase">Avg. Savings: 45% - 65%</p>
                        <p className="text-[10px] text-gray-400 font-mono uppercase">Cases Settled: 15,000+</p>
                     </div>
                  </div>
               </div>

               {/* Related Pages */}
               <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 space-y-6">
                  <h4 className="text-lg font-bold text-gray-950 border-b border-gray-50 pb-4">Explore More Services</h4>
                  <div className="flex flex-col gap-4">
                     {[
                        { title: "Credit Card Settlement", link: "/services/loan-settlement" },
                        { title: "Personal Loan Relief", link: "/services/loan-settlement" },
                        { title: "Business Debt Solutions", link: "/services/loan-settlement" },
                        { title: "SARFAESI Legal Help", link: "/services/loan-settlement" },
                        { title: "Stop Debt Harassment", link: "/services/loan-settlement" },
                        { title: "OTS Negotiation Help", link: "/services/loan-settlement" }
                     ].map((item, i) => (
                        <Link 
                          key={i} 
                          href={item.link}
                          className="flex items-center group"
                        >
                           <span className="w-1.5 h-1.5 bg-[#D2A02A] rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                           <span className="text-sm text-gray-600 group-hover:text-[#D2A02A] group-hover:translate-x-1 transition-all">
                              {item.title}
                           </span>
                        </Link>
                     ))}
                  </div>
                  <div className="pt-4 mt-4 bg-gray-50 rounded-2xl p-4 text-center">
                     <p className="text-xs text-gray-500 mb-2 italic">Need local help in Delhi-NCR?</p>
                     <Link href="/delhi-ncr-law-firm" className="text-[#D2A02A] font-bold text-sm hover:underline">View Local Presence →</Link>
                  </div>
               </div>
               
               {/* Mobile App Banner (Right Sidebar Version) */}
               <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 text-white text-center">
                  <p className="text-xs font-bold mb-4 text-[#D2A02A] tracking-widest uppercase">Download AMA App</p>
                  <div className="flex flex-col gap-3">
                    <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank">
                      <Image src="/newAssets/appstore.svg" alt="Google Play" width={140} height={40} className="mx-auto" />
                    </Link>
                    <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank">
                      <Image src="/newAssets/playstore.svg" alt="App Store" width={140} height={40} className="mx-auto" />
                    </Link>
                  </div>
               </div>
            </aside>

          </div>
        </div>

        {/* Full Service Coverage Across India */}
        <section className="bg-white py-20 px-4 border-t border-gray-200">
          <div className="max-w-[1400px] mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-950 mb-12">Full Service Coverage Across India</h2>
            <p className="text-lg text-gray-800 mb-12 max-w-3xl mx-auto">All major localities where our expert loan settlement lawyers are actively serving clients.</p>
            <div className="space-y-4 text-sm md:text-base text-gray-900 leading-relaxed">
               {[
                 "Andhra Pradesh: Anantapur, Guntur, Kakinada, Nellore, Rajahmundry, Tirupati, Vijayawada, Visakhapatnam",
                 "Arunachal Pradesh: Itanagar, Naharlagun, Pasighat, Tawang, Ziro",
                 "Assam: Guwahati, Dibrugarh, Jorhat, Nagaon, Silchar, Tinsukia",
                 "Bihar: Arrah, Bhagalpur, Bihar Sharif, Darbhanga, Gaya, Muzaffarpur, Patna, Purnia",
                 "Chhattisgarh: Bhilai, Bilaspur, Durg, Korba, Raipur, Rajnandgaon",
                 "Delhi: Central Delhi, East Delhi, New Delhi, North Delhi, South Delhi, West Delhi",
                 "Goa: Panaji, Margao, Vasco da Gama, Mapusa, Ponda",
                 "Gujarat: Ahmedabad, Bhavnagar, Gandhidham, Jamnagar, Junagadh, Rajkot, Surat, Vadodara",
                 "Haryana: Ambala, Faridabad, Gurugram, Hisar, Karnal, Panipat, Rohtak, Sonipat",
                 "Himachal Pradesh: Shimla, Manali, Dharamshala, Solan, Mandi, Baddi",
                 "Jharkhand: Ranchi, Jamshedpur, Dhanbad, Bokaro, Hazaribagh, Deoghar",
                 "Karnataka: Belagavi, Bengaluru, Davanagere, Hubli-Dharwad, Mangaluru, Mysuru, Shivamogga, Tumakuru",
                 "Kerala: Thiruvananthapuram, Kochi, Kozhikode, Thrissur, Kollam, Palakkad",
                 "Madhya Pradesh: Bhopal, Indore, Gwalior, Jabalpur, Ujjain, Sagar, Dewas",
                 "Maharashtra: Ahmednagar, Aurangabad, Jalgaon, Kalyan-Dombivli, Kolhapur, Mumbai, Nagpur, Nashik, Pune, Solapur, Thane",
                 "Manipur: Imphal, Bishnupur, Thoubal, Churachandpur",
                 "Meghalaya: Shillong, Tura, Jowai, Nongstoin",
                 "Mizoram: Aizawl, Lunglei, Champhai, Serchhip",
                 "Nagaland: Kohima, Dimapur, Mokokchung, Tuensang",
                 "Odisha: Bhubaneswar, Cuttack, Rourkela, Berhampur, Sambalpur, Puri",
                 "Punjab: Amritsar, Bathinda, Jalandhar, Ludhiana, Patiala, Mohali",
                 "Rajasthan: Ajmer, Alwar, Bikaner, Jaipur, Jodhpur, Kota, Udaipur",
                 "Sikkim: Gangtok, Namchi, Gyalshing, Mangan",
                 "Tamil Nadu: Chennai, Coimbatore, Erode, Madurai, Salem, Tiruchirappalli, Tirunelveli, Tiruppur, Vellore",
                 "Telangana: Hyderabad, Karimnagar, Khammam, Nizamabad, Ramagundam, Warangal",
                 "Tripura: Agartala, Udaipur, Dharmanagar, Kailashahar",
                 "Uttar Pradesh: Agra, Aligarh, Bareilly, Firozabad, Ghaziabad, Gorakhpur, Jhansi, Kanpur, Lucknow, Mathura, Meerut, Moradabad, Noida, Prayagraj, Saharanpur, Varanasi",
                 "Uttarakhand: Dehradun, Haridwar, Rishikesh, Haldwani, Roorkee, Kashipur",
                 "West Bengal: Asansol, Bardhaman, Durgapur, Kolkata, Maheshtala, Rajpur Sonarpur, Siliguri"
               ].map((state, sidx) => (
                 <p key={sidx} className="text-gray-900 font-medium">{state}</p>
               ))}
               <p className="text-gray-900 font-bold mt-6">Union Territories: Andaman & Nicobar Islands, Chandigarh, Dadra & Nagar Haveli and Daman & Diu, Jammu & Kashmir, Ladakh, Lakshadweep, Puducherry</p>
               <p className="text-gray-700 mt-2 italic">Plus all secondary districts and rural areas across the Indian peninsula.</p>
            </div>
          </div>
        </section>

        {/* State-Wise Client Reviews */}
        <section className="bg-gray-50 py-20 px-4 border-t border-gray-100">
          <div className="max-w-[1400px] mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-950 mb-4">What Our Clients Say Across India</h2>
            <p className="text-lg text-gray-700 mb-14 max-w-3xl mx-auto">Real feedback from real people in every state who trusted AMA Legal Solutions for their debt relief.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Rajesh Verma", state: "Delhi", rating: 5, text: "I was getting 15 calls a day from recovery agents. AMA Legal Solutions stopped all of it within 48 hours. Settled my 12 Lakh personal loan for 5.5 Lakhs. Truly grateful." },
                { name: "Sneha Patil", state: "Maharashtra", rating: 5, text: "Living in Mumbai, the cost of living made my credit card debt spiral. AMA negotiated a settlement that saved me over 4 Lakhs. Very professional team." },
                { name: "Arjun Reddy", state: "Telangana", rating: 5, text: "From Hyderabad, I was skeptical about online legal services. But AMA proved me wrong. They settled my HDFC loan in just 4 months. Highly recommended." },
                { name: "Kavitha Nair", state: "Kerala", rating: 5, text: "Being in Kochi, I thought I would need a local lawyer. AMA handled everything digitally. My education loan settlement was smooth and stress-free." },
                { name: "Amit Sharma", state: "Uttar Pradesh", rating: 5, text: "From Lucknow, I reached out to AMA after losing my job. They helped me settle two personal loans and one credit card debt. I am debt-free now." },
                { name: "Pooja Desai", state: "Gujarat", rating: 5, text: "In Ahmedabad, finding a good settlement firm was difficult. AMA stood out with their transparency. No hidden charges, clear communication, and great results." },
                { name: "Suresh Kumar", state: "Tamil Nadu", rating: 5, text: "Chennai based IT professional here. After a layoff, my EMIs piled up. AMA settled my Axis Bank personal loan for 40% of the outstanding. Life-changing." },
                { name: "Manpreet Kaur", state: "Punjab", rating: 5, text: "From Ludhiana, my family business took a hit. AMA helped settle our business loan with SBI. The lawyers were empathetic and fought hard for us." },
                { name: "Debashish Roy", state: "West Bengal", rating: 5, text: "Kolkata resident. I was facing SARFAESI proceedings. AMA's legal team intervened and negotiated an OTS that saved my property. Cannot thank them enough." },
                { name: "Pradeep Joshi", state: "Rajasthan", rating: 5, text: "From Jaipur, I had defaulted on multiple loans. AMA created a consolidated strategy and settled all my debts one by one. Very methodical approach." },
                { name: "Ravi Shankar", state: "Bihar", rating: 5, text: "Living in Patna, I was not sure if a Delhi-based firm could help me. AMA proved that geography does not matter. They handled my ICICI settlement remotely." },
                { name: "Meera Iyer", state: "Karnataka", rating: 5, text: "Bangalore IT sector layoffs hit me hard. Had 3 active personal loans. AMA settled all three within 6 months. Their negotiation skills are top-notch." },
                { name: "Sanjay Tiwari", state: "Madhya Pradesh", rating: 5, text: "From Indore, I found AMA online. They settled my Kotak Mahindra personal loan and stopped constant agent visits to my home. Very responsive team." },
                { name: "Anita Devi", state: "Jharkhand", rating: 5, text: "Ranchi based teacher. Medical bills forced me into debt. AMA settled my loan with genuine care. They understood my hardship and fought accordingly." },
                { name: "Vikash Gupta", state: "Haryana", rating: 5, text: "From Gurugram, recovery agents were visiting my office. AMA sent a legal notice and everything stopped. My HDFC credit card debt was settled for less than half." },
                { name: "Lakshmi Pillai", state: "Andhra Pradesh", rating: 5, text: "Visakhapatnam resident. AMA settled my husband's business loan after his health issues. They were compassionate and got us a fair deal from the bank." },
                { name: "Nitin Pandey", state: "Chhattisgarh", rating: 5, text: "From Raipur, I had a Bajaj Finance loan that was becoming unmanageable. AMA negotiated it down significantly. Very knowledgeable about banking laws." },
                { name: "Fatima Sheikh", state: "Odisha", rating: 4, text: "Bhubaneswar based professional. AMA handled my credit card settlement with care. The process took 5 months but the savings were worth the wait." },
                { name: "Arun Prakash", state: "Uttarakhand", rating: 5, text: "Dehradun resident. Lost income during the pandemic. AMA helped me settle two loans and guided me on rebuilding my CIBIL score. Excellent service." },
                { name: "Gurpreet Singh", state: "Chandigarh", rating: 5, text: "AMA's team is truly professional. They settled my personal loan and credit card dues in Chandigarh without me having to visit any office. All online." },
                { name: "Bhaskar Das", state: "Assam", rating: 5, text: "From Guwahati, I was worried about finding good legal help for my loan issues. AMA proved that quality legal services can reach even the Northeast." },
                { name: "Swati Jain", state: "Goa", rating: 5, text: "Small business owner in Panaji. After tourism collapsed, my business loan became a burden. AMA settled it fairly and helped me get back on my feet." },
                { name: "Ramesh Yadav", state: "Himachal Pradesh", rating: 5, text: "From Shimla, distance was my concern. But AMA handled everything through calls and emails. My PNB loan settlement was done smoothly." },
                { name: "Pankaj Mishra", state: "Sikkim", rating: 5, text: "Even in Gangtok, AMA provided top-quality service. They settled my personal loan and the entire process was transparent from start to finish." },
              ].map((review, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-left hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, si) => (
                      <span key={si} className="text-[#D2A02A] text-sm">★</span>
                    ))}
                    {Array.from({ length: 5 - review.rating }).map((_, si) => (
                      <span key={si} className="text-gray-300 text-sm">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#D2A02A]/10 text-[#D2A02A] font-bold rounded-full flex items-center justify-center text-sm">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-gray-900 font-bold text-sm">{review.name}</p>
                      <p className="text-gray-500 text-xs">{review.state}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

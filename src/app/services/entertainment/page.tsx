import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What specific services do entertainment lawyers in India provide?",
    answer: "Entertainment lawyers in India provide a vast array of services tailored to the media and entertainment industry. These include drafting and negotiating contracts for films, television, and music production; handling intellectual property rights such as copyright and trademark registration; managing licensing and distribution deals; providing legal counsel on defamation and privacy issues; and representing clients in litigation and dispute resolution. At AMA Legal Solutions, we cover every aspect of the legal landscape to ensure your creative endeavors are protected and profitable."
  },
  {
    question: "Why is it crucial to hire an entertainment lawyer for film production?",
    answer: "Film production involves a complex web of agreements and legal compliance requirements. An entertainment lawyer ensures that all contracts with actors, directors, crew, and locations are legally sound and protect the producer's interests. We handle chain of title issues to guarantee you own the rights to your film, manage financing and distribution agreements, and ensure compliance with unions and guilds. Without expert legal guidance, productions face significant risks of lawsuits, copyright claims, and financial loss."
  },
  {
    question: "How does an entertainment lawyer protect intellectual property rights?",
    answer: "Intellectual property is the lifeblood of the entertainment industry. Our lawyers protect these assets by registering copyrights for scripts, music, and films, and trademarks for brand names and logos. We structure licensing agreements to monetize these assets while retaining ownership. In cases of infringement, we take swift legal action to stop unauthorized use and seek damages. We also conduct due diligence to ensure your content does not infringe on the rights of others."
  },
  {
    question: "Can you assist with digital media and influencer marketing contracts?",
    answer: "Yes, the digital landscape is a key focus area for us. We draft and negotiate agreements for influencers, content creators, and digital platforms. This includes brand endorsement deals, content licensing, multi channel network (MCN) agreements, and platform terms of service. We also advise on compliance with advertising standards and data privacy laws, ensuring that your digital presence is both profitable and legally compliant."
  },
  {
    question: "What is the role of an entertainment lawyer in music licensing?",
    answer: "In the music industry, licensing is critical for revenue generation. We represent artists, composers, and record labels in negotiating synchronization licenses (for film and TV), mechanical licenses, and performance rights. We ensure that royalties are properly calculated and collected. Our team also handles publishing agreements and recording contracts, ensuring that artists retain fair ownership and control over their master recordings and compositions."
  },
  {
    question: "How do you handle disputes in the entertainment industry?",
    answer: "Disputes in entertainment can range from breach of contract to copyright infringement and defamation. We prioritize alternative dispute resolution methods like mediation and arbitration to resolve issues quickly and confidentially, preserving professional relationships. However, if litigation is necessary, our aggressive litigators are prepared to represent you in court to protect your rights and reputation. We handle cases in all relevant Indian courts and tribunals."
  },
  {
    question: "Do you represent talent and celebrities?",
    answer: "Absolutely. We provide comprehensive representation for actors, musicians, directors, and other talent. Our services include negotiating talent agreements, protecting image and publicity rights, managing reputation, and handling endorsement deals. We act as strategic partners, helping talent navigate their careers while ensuring their legal and financial interests are safeguarded against exploitation."
  },
  {
    question: "What are the legal requirements for international co-productions?",
    answer: "International co-productions require navigating the legal systems of multiple countries. We advise on co-production treaties, tax incentives, and foreign investment regulations. Our team drafts co-production agreements that clearly define the rights and obligations of each party, revenue sharing, and credit allocation. We also handle immigration and visa issues for cast and crew, ensuring a smooth production process across borders."
  },
  {
    question: "How can I protect my script or format before pitching?",
    answer: "Protecting your ideas before pitching is essential. We recommend registering your script with the Copyright Office and relevant industry associations. Additionally, we draft non disclosure agreements (NDAs) and submission release forms for you to use when pitching to studios or producers. These legal tools create a confidential relationship and provide a paper trail, significantly reducing the risk of idea theft."
  },
  {
    question: "What is the cost of hiring an entertainment lawyer in India?",
    answer: "The cost varies based on the complexity of the matter and the scope of services required. We offer flexible billing structures, including hourly rates, flat fees for specific services (like contract drafting), and retainer agreements for ongoing support. We believe in transparency and will provide a clear fee structure during our initial consultation, ensuring you receive high quality legal services that fit your budget."
  }
];

// Reviews data
const reviews = [
  {
    name: "Rajesh K.",
    role: "Film Producer",
    content: "AMA Legal Solutions saved our production from a potential copyright disaster. Their deep knowledge of entertainment law and quick action were invaluable. Highly recommended for any serious filmmaker.",
    rating: 5
  },
  {
    name: "Priya S.",
    role: "Independent Artist",
    content: "Navigating the music industry is tough, but having AMA by my side made it easier. They explained every clause in my recording contract and fought for better terms. I feel truly protected.",
    rating: 5
  },
  {
    name: "Digital Wave Media",
    role: "OTT Platform",
    content: "We rely on AMA Legal Solutions for all our content licensing and compliance needs. Their team is responsive, professional, and understands the nuances of the digital media landscape in India.",
    rating: 5
  }
];

// WebPage Schema
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Entertainment Lawyers in India | AMA Legal Solutions",
  "description": "Top-rated entertainment lawyers in India. Expert legal services for film, music, media, and digital content. Contract drafting, IP protection, and dispute resolution.",
  "url": "https://www.amalegalsolutions.com/services/entertainment",
  "mainEntity": {
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Comprehensive Guide to Entertainment Law Services in India",
  "description": "An in-depth look at the role of entertainment lawyers in India, covering film, music, digital media, and intellectual property rights.",
  "author": {
    "@type": "Organization",
    "name": "AMA Legal Solutions"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png"
    }
  },
  "datePublished": "2023-10-27",
  "dateModified": "2023-10-27"
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
      "name": "Entertainment Law",
      "item": "https://www.amalegalsolutions.com/services/entertainment"
    }
  ]
};

export const metadata = {
  title: "Entertainment Lawyers in India | Film, Music & Media Law Experts",
  description:
    "Leading entertainment lawyers in India offering specialized legal services for film production, music licensing, digital media, and celebrity rights. Secure your creative assets with AMA Legal Solutions.",
  keywords: [
    "entertainment lawyers in India",
    "media law firm India",
    "film production legal services",
    "music copyright lawyers",
    "celebrity lawyer India",
    "OTT legal compliance",
    "entertainment contract drafting",
    "intellectual property rights entertainment"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/entertainment',
  },
  openGraph: {
    title: "Entertainment Lawyers in India | AMA Legal Solutions",
    description: "Expert legal counsel for the entertainment industry. From Bollywood to digital creators, we protect your art and business.",
    url: "https://www.amalegalsolutions.com/services/entertainment",
    siteName: "AMA Legal Solutions",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/services/5.png",
        width: 1200,
        height: 630,
        alt: "Entertainment Lawyers in India",
      },
    ],
  },
};

export default function EntertainmentLawPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "role-of-entertainment-lawyer", title: "Role of Entertainment Lawyer" },
    { id: "our-services", title: "Our Comprehensive Services" },
    { id: "film-production", title: "Film & TV Production" },
    { id: "music-law", title: "Music Law & Licensing" },
    { id: "digital-media", title: "Digital Media & OTT" },
    { id: "ip-protection", title: "Intellectual Property" },
    { id: "why-choose-ama", title: "Why Choose AMA" },
    { id: "process", title: "Our Process" },
    { id: "reviews", title: "Client Reviews" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Entertainment Law", href: "/services/entertainment" },
  ];

  return (
    <>
      <Script
        id="entertainment-webpage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([webPageSchema, articleSchema, breadcrumbSchema]),
        }}
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
              Premier <span className="text-[#D2A02A]">Entertainment Lawyers</span> in India
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Protecting Creativity, Securing Rights, and Empowering the Media Industry. From Bollywood to digital creators, we protect your art and business.
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
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Navigating the Complex World of Entertainment Law</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700">
                    The Indian entertainment industry is a vibrant, rapidly evolving ecosystem that commands global attention. From the glitz of Bollywood and the dynamic regional cinema of Tollywood to the booming music industry and the explosive growth of Over The Top (OTT) platforms, the sector is expanding at an unprecedented rate. However, with this growth comes a myriad of legal complexities. Navigating this landscape requires more than just general legal knowledge; it demands the specialized expertise of seasoned <strong>entertainment lawyers in India</strong> who understand the nuances of creativity, commerce, and the law.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At AMA Legal Solutions, we recognize that every creative project is a labor of love and a significant financial investment. Whether you are a production house planning a blockbuster, an independent artist releasing your debut album, or a digital content creator building a brand, the legal foundation you lay today determines your success tomorrow. Our dedicated team of legal experts provides comprehensive support, ensuring that your intellectual property is protected, your contracts are watertight, and your commercial interests are secured.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    In an industry where timelines are tight and stakes are high, having a reliable legal partner is indispensable. We bridge the gap between artistic vision and legal compliance, allowing you to focus on what you do best—creating magic. Our deep understanding of the Copyright Act, 1957, the Trade Marks Act, 1999, and evolving media regulations positions us as the go-to firm for entertainment law services in India.
                  </p>
                </section>

                {/* Role of Entertainment Lawyer */}
                <section id="role-of-entertainment-lawyer" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">The Critical Role of an Entertainment Lawyer</h2>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <p className="text-lg text-blue-900 italic">
                      "An entertainment lawyer serves as the guardian of a creative professional's career and business, ensuring that the legal framework supporting your project is robust."
                    </p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The role extends far beyond reviewing documents; it involves strategic advisory, risk management, and deal structuring. In the high-stakes world of media, a single overlooked clause in a contract can lead to the loss of rights to one's own creation or significant financial deficits.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Our primary function is to ensure that the legal framework supporting your project is robust. This involves:
                  </p>
                  <ul className="list-disc pl-6 space-y-4 text-gray-700 mb-6">
                    <li>
                      <strong>Deal Making and Negotiation:</strong> We structure deals that maximize your revenue streams while minimizing liability. From backend profit participation to royalty structures, we ensure you get your fair share.
                    </li>
                    <li>
                      <strong>Rights Management:</strong> Identifying, acquiring, and protecting intellectual property rights is central to our practice. We ensure that the chain of title is clear, preventing future disputes over ownership.
                    </li>
                    <li>
                      <strong>Regulatory Compliance:</strong> The media sector is subject to various regulations, including censorship laws and broadcasting codes. We guide you through these regulatory mazes to ensure seamless distribution of your content.
                    </li>
                    <li>
                      <strong>Dispute Resolution:</strong> When conflicts arise, we provide swift and effective resolution strategies, whether through negotiation, mediation, or litigation, protecting your reputation and assets.
                    </li>
                  </ul>
                </section>

                {/* Our Services */}
                <section id="our-services" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Comprehensive Entertainment Law Services</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We offer a 360-degree suite of legal services tailored to the unique needs of the entertainment and media industry. Our expertise covers every stage of the creative process, from development to distribution.
                  </p>
                  
                  {/* Film Production */}
                  <div id="film-production" className="mb-10 scroll-mt-32">
                    <h3 className="text-2xl font-bold text-[#D2A02A] mb-4">Film & Television Production</h3>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <p className="text-gray-700 mb-6 text-lg">
                        Film and TV production is a capital-intensive venture involving numerous stakeholders. We act as production counsel for domestic and international projects, handling legal matters from script to screen.
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">Development Phase</h4>
                          <ul className="list-disc pl-5 text-gray-600 space-y-2">
                            <li>Option and purchase agreements for scripts and books</li>
                            <li>Life rights agreements for biopics</li>
                            <li>Writer and showrunner agreements</li>
                            <li>Chain of title analysis and clearance</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">Production & Post-Production</h4>
                          <ul className="list-disc pl-5 text-gray-600 space-y-2">
                            <li>Cast and crew agreements (Director, Actor, DOP)</li>
                            <li>Location releases and equipment rental contracts</li>
                            <li>Composer and music supervisor agreements</li>
                            <li>VFX and post-production vendor contracts</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Music Law */}
                  <div id="music-law" className="mb-10 scroll-mt-32">
                    <h3 className="text-2xl font-bold text-[#D2A02A] mb-4">Music Law & Licensing</h3>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <p className="text-gray-700 mb-6 text-lg">
                        The music industry is driven by complex copyright laws and licensing models. We represent record labels, music publishers, composers, and performing artists, ensuring their sonic art is legally protected and monetized.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Recording and publishing agreements</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Synchronization licenses for film, TV, and ads</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Management and touring contracts</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Royalty disputes and audit rights</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Copyright registration for sound recordings and compositions</li>
                        <li className="flex items-start"><span className="text-green-500 mr-2">✓</span> Sample clearance and fair use analysis</li>
                      </ul>
                    </div>
                  </div>

                  {/* Digital Media */}
                  <div id="digital-media" className="mb-10 scroll-mt-32">
                    <h3 className="text-2xl font-bold text-[#D2A02A] mb-4">Digital Media, OTT & Influencer Marketing</h3>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <p className="text-gray-700 mb-6 text-lg">
                        With the explosion of digital content, the legal landscape has shifted online. We provide cutting-edge legal solutions for OTT platforms, digital content creators, influencers, and gaming companies.
                      </p>
                      <div className="space-y-4">
                        <div className="flex gap-4">
                          <div className="min-w-[4px] bg-[#D2A02A] rounded-full"></div>
                          <div>
                            <h4 className="font-bold text-gray-900">OTT & Streaming</h4>
                            <p className="text-gray-600">We advise on content acquisition deals, platform terms of use, privacy policies, and compliance with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules.</p>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="min-w-[4px] bg-[#D2A02A] rounded-full"></div>
                          <div>
                            <h4 className="font-bold text-gray-900">Influencer & Social Media</h4>
                            <p className="text-gray-600">Drafting brand collaboration agreements, advising on ASCI guidelines for influencer advertising, and protecting digital avatars and online reputation.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* IP Protection */}
                  <div id="ip-protection" className="scroll-mt-32">
                    <h3 className="text-2xl font-bold text-[#D2A02A] mb-4">Intellectual Property Protection & Litigation</h3>
                    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                      <p className="text-gray-700 mb-6 text-lg">
                        Your ideas are your currency. We employ aggressive strategies to protect your intellectual property from infringement and theft. Our team is adept at handling high-profile IP litigation.
                      </p>
                      <p className="text-gray-700 mb-4">
                        We handle trademark registration for production house names, movie titles, and artist brands. We also manage copyright registration and enforcement, sending cease and desist notices to infringers and pursuing damages in court. Whether it is a case of script theft, unauthorized use of music, or personality rights violation, we stand as your staunch defenders.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Why Choose AMA */}
                <section id="why-choose-ama" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    In a market flooded with general practitioners, AMA Legal Solutions stands apart as a specialized media law firm. Here is why industry leaders trust us:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🎬</div>
                      <h3 className="font-bold text-xl mb-2">Industry Insider Knowledge</h3>
                      <p className="text-gray-600">We don't just know the law; we know the industry. We stay abreast of the latest trends in media consumption and technology.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🤝</div>
                      <h3 className="font-bold text-xl mb-2">Strategic Deal Structuring</h3>
                      <p className="text-gray-600">We believe in creating win-win situations. Our negotiation style is firm yet collaborative, aiming to close deals that build long-term relationships.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🛡️</div>
                      <h3 className="font-bold text-xl mb-2">Comprehensive Support</h3>
                      <p className="text-gray-600">From the initial spark of an idea to the final release and beyond, we are with you at every step, acting as your in-house legal department.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🌍</div>
                      <h3 className="font-bold text-xl mb-2">Global Perspective</h3>
                      <p className="text-gray-600">We assist clients in cross-border transactions, international distribution deals, and navigating foreign legal systems through our global network.</p>
                    </div>
                  </div>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Engagement Process</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We have streamlined our legal process to ensure transparency and efficiency for our creative clients.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Consultation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We begin with a deep dive into your project to understand your creative vision and business goals. We identify potential legal risks and opportunities.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Strategy Development</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Based on our assessment, we develop a tailored legal strategy. This includes a roadmap for rights acquisition, compliance, and deal structuring.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Execution & Negotiation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Our team drafts, reviews, and negotiates all necessary agreements. We ensure every detail is covered and that your interests are protected in every clause.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Ongoing Support</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We provide ongoing legal maintenance, IP enforcement, and dispute resolution support as your project grows and evolves in the market.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="reviews" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {reviews.map((review, index) => (
                      <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                        <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                        <p className="text-gray-700 italic mb-4 relative z-10">
                          "{review.content}"
                        </p>
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">{review.name.charAt(0)}</div>
                          <div>
                            <p className="font-bold text-gray-900">{review.name}</p>
                            <p className="text-sm text-gray-500">{review.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
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
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Ready to Protect Your Creative Legacy?</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Don't let legal hurdles stifle your creativity. Partner with India's leading entertainment lawyers and secure your future in the spotlight.
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
                    Speak to our senior entertainment lawyers today.
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
                      <Link href="/services/intellectual-property-rights" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Intellectual Property
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/civil" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Civil Litigation
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/arbitration" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Arbitration
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/cyber" className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> Cyber Crime
                      </Link>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
          
          <div className="mt-16">
            <GenericStatesGrid serviceName="Entertainment Law" servicePath="entertainment" />
          </div>
        </div>
      </div>
    </>
  );
}

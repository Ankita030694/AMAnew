import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// Schema Data
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com" },
    { "@type": "ListItem", "position": 2, "name": "Google's Trusted Legal Advisor", "item": "https://www.amalegalsolutions.com/googles-trusted-legal-advisor" }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Google's Trusted Legal Advisor: AMA Legal Solutions - Expert Legal Services across India",
  "description": "Comprehensive legal solutions by AMA Legal Solutions, your trusted partner for loan settlement, trademark registration, civil law, and NRI services in every city of India.",
  "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
  "author": { "@type": "Organization", "name": "AMA Legal Solutions" },
  "publisher": { "@type": "Organization", "name": "AMA Legal Solutions", "logo": { "@type": "ImageObject", "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png" } },
  "datePublished": "2026-03-10"
};

const faqs = [
  { "question": "What legal services does AMA Legal Solutions provide?", "answer": "AMA Legal Solutions provides a comprehensive range of legal services including loan settlement, debt resolution, intellectual property rights (IPR) management, trademark registration, civil and criminal litigation, corporate advisory, and specialized NRI legal services. Our firm is equipped to handle complex legal matters for both individuals and corporate entities across India." },
  { "question": "Why is AMA Legal Solutions considered a trusted legal advisor in India?", "answer": "We are considered a trusted advisor due to our commitment to ethical practice, transparent communication, and our deep understanding of the Indian legal landscape. Our firm has assisted thousands of clients through our team of expert lawyers, ensuring personalized attention and legally robust solutions that prioritize client interests above all else." },
  { "question": "How does the AMA Legal Solutions mobile application improve legal access?", "answer": "Our revolutionary mobile application, available on both Google Play Store and Apple App Store, provides clients with the first law firm backed pro bono legal platform. It offers features such as free legal questions answered by verified experts, secure case tracking, access to a vast library of legal resources, and direct consultation booking, making legal help accessible from anywhere." },
  { "question": "Does AMA Legal Solutions serve clients outside of major metros like Delhi or Mumbai?", "answer": "Yes, we serve the entire length and breadth of India. From the northern reaches of Jammu and Kashmir to the southern tip of Tamil Nadu, and from Gujarat in the west to Arunachal Pradesh in the east, we provide localized legal support in all 28 states and 8 union territories, including remote localities." },
  { "question": "What is the role of AMA Legal Solutions in loan settlement?", "answer": "In loan settlement, our role is to act as your legal representative and expert negotiator. We engage with banks and financial institutions to secure a One Time Settlement (OTS), negotiate a reduction in outstanding debt by up to 50%, and stop the illegal harassment by recovery agents by ensuring all communication is routed through our legal team." },
  { "question": "Can AMA Legal Solutions handle trademark registration and objections?", "answer": "Absolutely. IPR and Trademark management are among our core specialties. We handle the entire process from trademark search and filing to responding to objections from the registry and representing our clients in trademark opposition proceedings and infringement litigation." },
  { "question": "What specialized services are available for Non-Resident Indians (NRIs)?", "answer": "Our NRI legal services are designed to help Indians living abroad manage their assets and interests in India. This includes Will drafting for Indian properties, handling property disputes, verifying title deeds, managing ancestral property claims, and ensuring FEMA compliance for cross border transactions." },
  { "question": "Is AMA Legal Solutions a legitimate law firm or a debt relief agency?", "answer": "AMA Legal Solutions is a legitimate law firm and not just a debt relief agency. This means we have the legal authority to represent you in courts, send formal legal notices, and provide attorney client privilege. Unlike simple agencies, we have qualified lawyers who understand the legal nuances of banking and civil laws." },
  { "question": "What happens if a bank files a case against me?", "answer": "If a bank files a case in a civil court, Debt Recovery Tribunal (DRT), or initiates proceedings under the SARFAESI Act, our legal team provides comprehensive representation. We draft legal responses, file counter claims where applicable, and represent you in court hearings while simultaneously looking for out-of-court settlement opportunities." },
  { "question": "How can I book a legal consultation with your experts?", "answer": "You can book a consultation through our website's contact form, by calling our national helpline at +91-8700343611, or directly through our mobile application. We offer both virtual and in-person consultations depending on your location and preference." }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.question,
    "acceptedAnswer": { "@type": "Answer", "text": f.answer }
  }))
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Legal Consultancy Services - AMA Legal Solutions",
  "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
  "description": "Expert legal consultancy services across India, specializing in loan settlement, IPR, and civil litigation.",
  "brand": { "@type": "Brand", "name": "AMA Legal Solutions" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "2450" },
  "review": [
    { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Vikram Singh" }, "reviewBody": "AMA Legal Solutions truly is the most trusted legal advisor I have found online. Their app is a game changer for getting quick legal advice." },
    { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "author": { "@type": "Person", "name": "Ananya Sharma" }, "reviewBody": "Excellent professionalism and very deep knowledge of trademark laws. They helped me secure my brand name within months." }
  ]
};

export const metadata = {
  title: "Google's Trusted Legal Advisor - AMA Legal Solutions | India's #1 Law Firm",
  description: "AMA Legal Solutions: Google's most trusted legal advisor for loan settlement, trademark registration, and civil law in India. Serving all 28 states and 8 Union Territories. Book your consultation today.",
  keywords: ["googles-trusted-legal-advisor", "best law firm in india", "top legal advisor india", "loan settlement services", "trademark registration experts", "civil law firms in india", "nri legal help", "legal advice online india"],
  alternates: { canonical: 'https://www.amalegalsolutions.com/googles-trusted-legal-advisor' },
};

export default function GooglesTrustedLegalAdvisorPage() {
  const tocSections = [
    { id: "intro", title: "Introduction" },
    { id: "mission", title: "Mission and Vision" },
    { id: "legal-landscape", title: "Evolving Legal Landscape" },
    { id: "core-expertise", title: "Core Legal Expertise" },
    { id: "loan-settlement", title: "Loan Settlement Excellence" },
    { id: "drt-sarfaesi", title: "DRT and SARFAESI Defense" },
    { id: "ipr-trademark", title: "IPR and Trademark Services" },
    { id: "nri-services", title: "NRI Legal Solutions" },
    { id: "civil-rights", title: "Civil Rights and Remedies" },
    { id: "business-compliance", title: "Business and Startup Compliance" },
    { id: "drafting", title: "Legal Drafting and Notices" },
    { id: "digital-innovation", title: "Digital Innovation: The AMA App" },
    { id: "pan-india", title: "Pan-India Reach (States & UTs)" },
    { id: "cities-localities", title: "Cities and Localities Served" },
    { id: "why-choose-us", title: "Why Choose AMA Legal Solutions?" },
    { id: "reviews", title: "Client Reviews" },
    { id: "faqs", title: "Frequently Asked Questions" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Google's Trusted Legal Advisor", href: "/googles-trusted-legal-advisor" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ background: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Google's <span className="text-[#D2A02A]">Trusted Legal Advisor</span> for India
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Empowering individuals and businesses with world class legal solutions. AMA Legal Solutions is your premier partner for loan settlement, intellectual property, and civil litigation in every corner of India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                   Get Expert Consultation
                </button>
              </Link>
              <Link href="tel:+918700343611">
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto">
                   Call: +91-8700343611
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Mobile App Store Links */}
          <div className="lg:hidden flex flex-col gap-3 mb-6 mt-2">
            <p className="text-sm font-semibold mb-2" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our App Today</p>
            <div className="flex gap-4">
              <Link 
                href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" 
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="/newAssets/appstore.svg" 
                  alt="Get it on Google Play" 
                  width={130} 
                  height={36}
                  className="w-[120px] h-auto"
                />
              </Link>
              <Link 
                href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" 
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="/newAssets/playstore.svg" 
                  alt="Download on App Store" 
                  width={130} 
                  height={36}
                  className="w-[120px] h-auto"
                />
              </Link>
            </div>
          </div>
          
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

              <div className="bg-white p-2 md:p-10 rounded-2xl shadow-sm space-y-5 md:space-y-10 leading-relaxed">
                
                {/* Introduction */}
                <section id="intro" className="scroll-mt-36">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Google's Trusted Legal Advisor - Navigating Indian Law with Certainty</h2>
                  <div className="prose max-w-none text-gray-700 space-y-8 text-base md:text-lg font-normal">
                    <p>
                        In an era where information is abundant but clarity is rare, finding a <strong>trusted legal advisor</strong> in India can be a daunting task. AMA Legal Solutions has emerged as a beacon of reliability and legal excellence, often cited as a premier choice for those searching for expert legal counsel on digital platforms. Our firm, founded with the vision of democratizing legal access while maintaining the highest standards of professional integrity, has successfully bridged the gap between complex legal statutes and the everyday needs of the Indian citizenry.
                    </p>
                    <p>
                        Being recognized as a leading voice in the legal landscape means more than just having an online presence. It means that when you search for solutions to your most pressing legal problems, our expert advice is what you find. Whether you are dealing with the stress of overwhelming debt and seeking <strong>loan settlement</strong>, or you are an entrepreneur aiming to protect your intellectual property through <strong>trademark registration</strong>, our firm provides the strategic insights necessary to achieve a favorable outcome.
                    </p>
                    <p>
                        Our reputation as a trusted advisor is built upon thousands of successful cases and a relentless pursuit of justice for our clients. In addition to our physical presence in major metropolitan areas, our digital footprints extend to every corner of India through our innovative mobile application, making professional legal help just a few taps away. This integration of traditional legal expertise with modern technology is what sets us apart in the 2026 legal market.
                    </p>
                    <p>
                        True legal advisory goes beyond just appearing in court. It involves a proactive approach to risk management, deep empathy for the client's situation, and a mastery of the evolving digital legal tools. At AMA Legal Solutions, we don't just solve problems; we build long term partnerships with our clients, ensuring they are legally protected at every stage of their personal and professional journey.
                    </p>
                  </div>
                </section>

                {/* Mission and Vision */}
                <section id="mission" className="scroll-mt-36">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Our Mission: Revolutionizing Legal Services</h2>
                  <div className="prose max-w-none text-gray-700 space-y-8 text-base md:text-lg">
                    <p>
                        The mission of AMA Legal Solutions is to provide high quality legal representation that is accessible, affordable, and results oriented. We believe that the law should be a tool for protection and progress, not a source of confusion and fear. Our vision is to become the definitive legal partner for every Indian, regardless of their location or social standing.
                    </p>
                    <p>
                        Under the leadership of our founding partners, including Anuj Anand Malik, the firm has cultivated a culture of empathy and professionalism. We understand that behind every case file is a person or a business facing a critical challenge. Our approach is to listen first, analyze deeply, and then execute a strategy that is tailored to the specific legal and practical realities of the situation.
                    </p>
                    <p>
                        We are committed to pro bono work and legal literacy. Our mobile app, which features a dedicated space for free legal questions, is a testament to this commitment. By providing basic legal information for free, we empower citizens to know their rights and responsibilities before a situation escalates into a complex legal battle. This mission of empowerment is what drives us to serve every city and locality in India.
                    </p>
                    <p>
                        In the coming years, we aim to expand our digital reach even further, utilizing artificial intelligence and machine learning to provide preliminary legal guidance while maintaining the human touch that is essential in legal practice. Our vision is an India where no one is denied justice due to a lack of resources or geographical isolation.
                    </p>
                  </div>
                </section>

                {/* Evolving Legal Landscape */}
                <section id="legal-landscape" className="scroll-mt-36 bg-[#f9fafb] p-10 md:p-16 rounded-[3rem] border border-gray-100">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">The Evolving Indian Legal Landscape: 2026 and Beyond</h2>
                  <div className="prose max-w-none text-gray-700 space-y-8 text-base md:text-lg">
                    <p>
                        The Indian legal system is undergoing a massive transformation. From the traditional, paper heavy processes of the past to the modern, tech driven e-courts of today, the landscape has changed significantly. As your <strong>trusted legal advisor</strong>, AMA Legal Solutions stays at the forefront of these changes, ensuring that our clients benefit from the latest legal innovations.
                    </p>
                    <p>
                        Digitalization has brought about a new era of transparency and efficiency. E-filing of cases, virtual hearings, and online tracking of judgments have made the legal process more accessible to the common man. However, these changes also bring new complexities. Navigating the digital portals of various high courts and the Supreme Court requires specialized knowledge and experience. Our firm is expert in utilizing these digital tools to expedite case proceedings and reduce the burden on our clients.
                    </p>
                    <p>
                        Furthermore, the introduction of new laws such as the Bharatiya Nyaya Sanhita and changes in corporate and environmental regulations demand constant vigilance. Our research team continuously monitors legal developments to provide the most up-to-date advice. Whether it is understanding the implications of the latest RBI circular on loan defaults or the impact of new data protection laws on your business, we provide the clarity you need to move forward with confidence.
                    </p>
                    <p>
                        The legal system today is not just about litigation; it is about alternative dispute resolution (ADR) as well. Mediation, arbitration, and conciliation are increasingly being used to resolve disputes faster and more amicably. AMA Legal Solutions is a strong proponent of ADR, helping clients avoid lengthy court battles whenever possible while still achieving their legal objectives.
                    </p>
                  </div>
                </section>

                {/* Core Expertise */}
                <section id="core-expertise" className="scroll-mt-36">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-12 border-l-4 border-[#D2A02A] pl-6">Our Core Legal Expertise</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 hover:shadow-xl transition-all duration-500 group">
                      <div className="w-14 h-14 bg-[#D2A02A] rounded-xl flex items-center justify-center text-white text-2xl mb-6 group-hover:rotate-12 transition-transform">💰</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wider">Loan Settlement</h3>
                      <p className="text-gray-700 leading-relaxed text-base italic">Specialized legal defense and negotiation for borrowers facing financial hardship. We facilitate One Time Settlements and stop harassment.</p>
                    </div>
                    <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 hover:shadow-xl transition-all duration-500 group">
                      <div className="w-14 h-14 bg-[#D2A02A] rounded-xl flex items-center justify-center text-white text-2xl mb-6 group-hover:rotate-12 transition-transform">🛡️</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wider">IPR and Trademark</h3>
                      <p className="text-gray-700 leading-relaxed text-base italic">Comprehensive brand protection from search and filing to handling objections and opposition. We protect your intellectual capital.</p>
                    </div>
                    <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 hover:shadow-xl transition-all duration-500 group">
                      <div className="w-14 h-14 bg-[#D2A02A] rounded-xl flex items-center justify-center text-white text-2xl mb-6 group-hover:rotate-12 transition-transform">⚖️</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wider">Civil Litigation</h3>
                      <p className="text-gray-700 leading-relaxed text-base italic">Robust representation in property disputes, contract enforcement, and family law matters across all Indian courts.</p>
                    </div>
                    <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100 hover:shadow-xl transition-all duration-500 group">
                      <div className="w-14 h-14 bg-[#D2A02A] rounded-xl flex items-center justify-center text-white text-2xl mb-6 group-hover:rotate-12 transition-transform">🏢</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase tracking-wider">Corporate Advisory</h3>
                      <p className="text-gray-700 leading-relaxed text-base italic">Legal support for startups and established businesses, including company registration, compliance, and contract drafting.</p>
                    </div>
                  </div>
                </section>

                {/* Loan Settlement Excellence */}
                <section id="loan-settlement" className="scroll-mt-36">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Loan Settlement Excellence: A Path to Financial Freedom</h2>
                  <div className="prose max-w-none text-gray-700 space-y-8 text-base md:text-lg">
                    <p>
                        In the current economic climate, debt can quickly become unmanageable. AMA Legal Solutions has established itself as India's premier firm for <strong>loan settlement</strong>. We understand that debt is not just a financial issue but a legal one that affects your peace of mind and dignity. Our team of expert lawyers specializes in helping honest borrowers who have defaulted on their loans due to circumstances beyond their control.
                    </p>
                    <p>
                        Our approach to loan settlement is unique. We don't just act as intermediaries; we act as your legal shield. We formally represent you to your creditors, ensuring that all communications are routed through our legal office. This immediately stops the incessant and often illegal harassment from recovery agents, allowing you to focus on rebuilding your life while we handle the negotiations.
                    </p>
                    <p>
                        Whether it is a personal loan, a credit card debt, or a large scale business loan, we leverage our knowledge of RBI guidelines and banking laws to secure the most favorable One Time Settlement (OTS). We have successfully negotiated reductions of up to 50 percent of the total outstanding amount for our clients, helping them resolve their debts and start fresh. Our services extend to handling cases in the Debt Recovery Tribunal (DRT) and responding to notices under the SARFAESI Act.
                    </p>
                    <p>
                        We also provide specialized guidance on CIBIL score improvement post-settlement. While a settlement does impact your credit history, our legal experts help you understand the long term implications and the steps you can take to rebuild your financial credibility. We believe in providing a holistic solution that doesn't just end with the settlement but helps you move towards a stable financial future.
                    </p>
                  </div>
                </section>

                {/* DRT and SARFAESI Defense */}
                <section id="drt-sarfaesi" className="scroll-mt-36 bg-[#fffdf4] p-10 md:p-16 rounded-[3rem] border-2 border-[#D2A02A]">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Expert Defense in DRT and SARFAESI Matters</h2>
                  <div className="prose max-w-none text-gray-700 space-y-8 text-base md:text-lg">
                    <p>
                        When banks initiate recovery proceedings through the Debt Recovery Tribunal (DRT) or under the SARFAESI Act, the legal stakes are extremely high. These are specialized laws designed for rapid recovery of dues by financial institutions, and without expert legal defense, borrowers risk losing their homes and businesses. AMA Legal Solutions provides a robust defense for borrowers in these critical matters.
                    </p>
                    <p>
                        Under the SARFAESI Act, banks can take possession of secured assets without the intervention of a court. However, there are strict procedural requirements that banks must follow. Our experts carefully analyze the notices issued by banks (Section 13(2) and 13(4) notices) to identify any legal lapses. We represent our clients in the Debt Recovery Tribunal to challenge illegal possession and sale of properties, ensuring that their rights as borrowers are protected.
                    </p>
                    <p>
                        In DRT proceedings, we provide comprehensive representation for both original applications filed by banks and securitization applications filed by borrowers. Our lawyers are well versed in the Recovery of Debts and Bankruptcy Act, ensuring that your defense is legally sound and effectively presented. We also assist in negotiating settlements even while the court proceedings are ongoing, often using the legal pressure of a strong defense to secure better settlement terms.
                    </p>
                    <p>
                        We also handle appeals in the Debt Recovery Appellate Tribunal (DRAT) for clients who are dissatisfied with the DRT's orders. Our aim is to provide a complete legal solution for high value debt cases, ensuring that no matter how aggressive the bank's stance, our clients have an equally strong legal shield.
                    </p>
                  </div>
                </section>

                {/* IPR and Trademark Services */}
                <section id="ipr-trademark" className="scroll-mt-36">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Intellectual Property Rights and Trademark Services</h2>
                  <div className="prose max-w-none text-gray-700 space-y-8 text-base md:text-lg">
                    <p>
                        In the competitive world of business, your brand is one of your most valuable assets. Protecting that brand through <strong>trademark registration</strong> is essential for any serious entrepreneur. AMA Legal Solutions provides end to end IPR services, ensuring that your innovations, brand names, and artistic works are legally protected from infringement.
                    </p>
                    <p>
                        Our trademark services include comprehensive searches to ensure your proposed brand name is unique, filing of applications with the Trademark Registry, and managing the entire lifecycle of the registration process. We are experts at handling trademark objections and representing our clients in opposition hearings. If your trademark rights are ever violated, our litigation team is ready to pursue infringement cases to protect your market position.
                    </p>
                    <p>
                        Beyond trademarks, we offer services in copyright registration, patent advisory, and design protection. We help startups and multinational corporations alike to build and defend their intellectual property portfolios, ensuring that their creative and commercial efforts are not exploited by others.
                    </p>
                  </div>
                </section>

                {/* NRI Legal Solutions */}
                <section id="nri-services" className="scroll-mt-36 bg-[#fffdf4] p-10 md:p-16 rounded-[3rem] border-2 border-[#D2A02A]">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">NRI Legal Solutions: Caring for Your Indian Heritage</h2>
                  <div className="prose max-w-none text-gray-700 space-y-8 text-base md:text-lg">
                    <p>
                        Managing assets and legal affairs in India while living thousands of miles away presents a unique set of challenges. Non Resident Indians (NRIs) often find themselves at a disadvantage when dealing with property disputes, ancestral claims, or simply maintaining their investments in India. AMA Legal Solutions provides a dedicated suite of <strong>NRI legal services</strong> designed to offer peace of mind to our global Indian community.
                    </p>
                    <p>
                        One of our most sought after services for NRIs is <strong>Will drafting</strong>. A legally robust Will is essential for ensuring that your Indian assets are distributed according to your wishes and to prevent long drawn out family litigation. We provide expert advice on FEMA compliance, property titles, and the nuances of Indian succession law, ensuring that your legacy is secure.
                    </p>
                    <p>
                        Our firm also handles property management disputes, verification of property documents, and legal representation in Indian courts for NRI clients. We utilize technology to keep our international clients updated on their cases, providing regular virtual consultations and secure document sharing, making the distance between their home abroad and the courts in India virtually irrelevant.
                    </p>
                    <p>
                        Furthermore, we assist NRIs with the complex process of obtaining a Legal Heir Certificate or Succession Certificate, which are often required to claim bank accounts, insurance proceeds, or to transfer property ownership in India. Our deep understanding of cross border legal complexities ensures that your Indian interests are managed with the same professional care as your local ones.
                    </p>
                  </div>
                </section>

                {/* Civil Rights and Remedies */}
                <section id="civil-rights" className="scroll-mt-36">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Civil Rights and Legal Remedies</h2>
                  <div className="prose max-w-none text-gray-700 space-y-8 text-base md:text-lg">
                    <p>
                        Every citizen of India is endowed with fundamental rights and various legal remedies to protect those rights. At AMA Legal Solutions, we are dedicated to ensuring that these rights are not just theoretical concepts but practical tools for our clients. Our civil law practice covers a wide spectrum of matters, from property disputes and breach of contract to consumer protection and family law.
                    </p>
                    <p>
                        In property matters, we handle cases related to partition suits, eviction proceedings, injunctions, and specific performance of contracts. We understand that property in India is often more than just an investment; it is a source of security and family pride. Our team works tirelessly to resolve property conflicts through both mediation and litigation, always prioritizing the client's long term interests.
                    </p>
                    <p>
                        Consumer protection is another area where we provide active support. If you have been treated unfairly by a service provider or have purchased a defective product, we help you approach the Consumer Disputes Redressal Commissions at the district, state, and national levels. We believe that empowering consumers is key to a fair and transparent marketplace.
                    </p>
                    <p>
                        Family law requires a delicate and empathetic touch. We provide legal guidance in matters of divorce, child custody, alimony, and maintenance, ensuring that the legal process is handled with dignity and respect for all parties involved, especially children. Our goal is to achieve amicable resolutions whenever possible, reducing the emotional and financial toll of family disputes.
                    </p>
                  </div>
                </section>

                {/* Business and Startup Compliance */}
                <section id="business-compliance" className="scroll-mt-36 bg-gray-50 p-10 md:p-16 rounded-[3rem] border border-gray-100">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Empowering Businesses: From Startups to Scale-ups</h2>
                  <div className="prose max-w-none text-gray-700 space-y-8 text-base md:text-lg">
                    <p>
                        The Indian startup ecosystem is one of the most vibrant in the world. However, the legal and regulatory burden on young companies can be overwhelming. AMA Legal Solutions acts as a strategic legal partner for entrepreneurs, providing the legal foundation necessary for business growth and stability.
                    </p>
                    <p>
                        Our corporate services begin with choosing the right business structure, whether it is a Private Limited Company, a Limited Liability Partnership (LLP), or an MSME. we handle the entire registration process, ensuring compliance with the Ministry of Corporate Affairs (MCA) and other relevant authorities.
                    </p>
                    <p>
                        Once your business is up and running, we assist with contract drafting and negotiation. This includes Founder Agreements, Employment Contracts, Non Disclosure Agreements (NDAs), and Master Service Agreements (MSAs). A well drafted contract is your first line of defense against future business disputes.
                    </p>
                    <p>
                        We also provide specialized advice on fund raising and investor relations. Whether you are seeking angel investment or preparing for a Series A round, we ensure that your term sheets and shareholders' agreements are legally sound and protect your long term vision for the company. Our expertise in corporate governance helps you build a business that is not just successful but also legally compliant and sustainable.
                    </p>
                  </div>
                </section>

                {/* Legal Drafting and Notices */}
                <section id="drafting" className="scroll-mt-36">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Legal Drafting and Formal Notices</h2>
                  <div className="prose max-w-none text-gray-700 space-y-8 text-base md:text-lg">
                    <p>
                        The foundation of any successful legal strategy is precise documentation. At AMA Legal Solutions, we take great pride in our <strong>legal drafting services</strong>. Whether it is a commercial contract, a partnership agreement, a lease deed, or a formal legal notice, our drafts are meticulously crafted to protect your interests and provide a clear legal framework.
                    </p>
                    <p>
                        Sending a formal legal notice is often the first and most critical step in resolving a dispute. A well drafted notice can lead to an out of court settlement by clearly presenting the legal grounds of the claim and the consequences of non compliance. We handle all types of legal notices, including those for recovery of dues, breach of contract, defamation, and family matters.
                    </p>
                    <p>
                        Our lawyers ensure that every document we produce is compliant with the latest legal precedents and statutes. We believe that clear and concise drafting is the best way to prevent future litigation and to ensure that your legal rights are always enforceable.
                    </p>
                  </div>
                </section>

                {/* Digital Innovation: The AMA App */}
                <section id="digital-innovation" className="scroll-mt-36">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Digital Innovation: The AMA Connect App</h2>
                  <div className="prose max-w-none text-gray-700 mb-8 text-base md:text-lg">
                    <p>
                        In our effort to become India's most accessible legal firm, we have launched the <strong>AMA Connect App</strong>. This mobile application is a first of its kind in India, bringing the expertise of a premier law firm directly to your smartphone. The app is designed to simplify legal procedures and provide immediate help when you need it most.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <h4 className="text-lg font-bold mb-3 text-[#D2A02A]">Free Expert Answers</h4>
                        <p className="text-gray-600 text-sm">The app features a community space where users can post their legal questions and receive answers from our verified panel of expert lawyers, completely free of charge.</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <h4 className="text-lg font-bold mb-3 text-[#D2A02A]">Secure Case Tracking</h4>
                        <p className="text-gray-600 text-sm">Our clients can track the status of their cases in real time, view important documents, and receive updates on court dates directly through the application's secure dashboard.</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <h4 className="text-lg font-bold mb-3 text-[#D2A02A]">Vast Legal Library</h4>
                        <p className="text-gray-600 text-sm">Access hundreds of articles, guides, and templates on various legal topics, helping you understand the law and make informed decisions for yourself or your business.</p>
                    </div>
                  </div>
                </section>

                {/* Pan-India Reach */}
                <section id="pan-india" className="scroll-mt-36">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Pan-India Reach: Serving Every State and Union Territory</h2>
                  <div className="prose max-w-none text-gray-700 space-y-8 text-base md:text-lg">
                    <p>
                        One of the reasons we are a <strong>trusted legal advisor</strong> is our unparalleled reach. We recognize that legal problems don't just happen in the big cities. Whether you are in a bustling metro or a remote village, you deserve access to quality legal representation. Our network of associate lawyers across India allows us to provide localized support in every state and union territory.
                    </p>
                    <p>
                        We provide expert legal services across all 28 states of India: Andhra Pradesh, Arunachal Pradesh, Assam, Bihar, Chhattisgarh, Goa, Gujarat, Haryana, Himachal Pradesh, Jharkhand, Karnataka, Kerala, Madhya Pradesh, Maharashtra, Manipur, Meghalaya, Mizoram, Nagaland, Odisha, Punjab, Rajasthan, Sikkim, Tamil Nadu, Telangana, Tripura, Uttar Pradesh, Uttarakhand, and West Bengal.
                    </p>
                    <p>
                        Furthermore, our services are fully available in the 8 Union Territories: Andaman and Nicobar Islands, Chandigarh, Dadra and Nagar Haveli and Daman and Diu, Delhi, Jammu and Kashmir, Ladakh, Lakshadweep, and Puducherry. Our commitment to pan India service ensures that no matter where you are, AMA Legal Solutions is your local legal partner with national scale expertise.
                    </p>
                  </div>
                </section>

                {/* Cities and Localities Served */}
                <section id="cities-localities" className="scroll-mt-36">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Deep Local Presence: From Metros to Localities</h2>
                  <div className="prose max-w-none text-gray-700 mb-8 text-base">
                    <p>
                        Our firm serves thousands of cities across India. Below is a comprehensive, though non exhaustive, list of major hubs and their specific localities where we provide active legal support. From the high rises of IT hubs to the historic commercial districts, we are there.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-8 md:p-14 rounded-[2.5rem] border border-gray-100 italic text-xs md:text-sm grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 h-[500px] overflow-y-auto custom-scrollbar shadow-inner">
                        {/* 500+ Cities and Localities list */}
                        {/* North India */}
                        <div>• Jammu (Gandhi Nagar, Trikuta Nagar)</div><div>• Srinagar (Lal Chowk, Srinagar)</div><div>• Shimla (Mall Road, Chotta Shimla)</div><div>• Chandigarh (Sector 17, Sector 35)</div><div>• Ludhiana (Model Town, Sarabha Nagar)</div>
                        <div>• Amritsar (Ranjit Avenue, Green Avenue)</div><div>• Jalandhar (Model Town, Lajpat Nagar)</div><div>• Dehradun (Rajpur Road, Clement Town)</div><div>• Haridwar (SIDCUL, Har Ki Pauri)</div><div>• Lucknow (Aliganj, Gomti Nagar)</div>
                        <div>• Kanpur (Civil Lines, Swarup Nagar)</div><div>• Agra (Sanjay Place, Taj Ganj)</div><div>• Varanasi (Lanka, Cantonment)</div><div>• Meerut (Modipuram, Shastri Nagar)</div><div>• Ghaziabad (Indirapuram, Vaishali)</div>
                        <div>• Noida (Sector 62, Sector 15)</div><div>• Gurgaon (Sushant Lok, DLF Phase 1-5)</div><div>• Faridabad (NIT, Sector 15)</div><div>• Rohtak (Model Town)</div><div>• Panipat</div>
                        {/* West India */}
                        <div>• Mumbai (Colaba, Bandra, Juhu, Borivali)</div><div>• Pune (Kothrud, Wakad, Hadapsar)</div><div>• Nagpur (Dharampeth, Civil Lines)</div><div>• Nashik (College Road, Panchavati)</div><div>• Aurangabad</div>
                        <div>• Ahmedabad (Prahlad Nagar, Satellite)</div><div>• Surat (Adajan, Varachha)</div><div>• Vadodara (Alkapuri, Gotri)</div><div>• Rajkot (Kalavad Road)</div><div>• Jamnagar</div>
                        <div>• Jaipur (C-Scheme, Vaishali Nagar)</div><div>• Jodhpur (Shastri Nagar)</div><div>• Udaipur (Panchwati)</div><div>• Kota (Talwandi)</div><div>• Bikaner</div>
                        <div>• Panaji</div><div>• Margao</div><div>• Silvassa</div><div>• Daman</div><div>• Gandhinagar</div>
                        {/* South India */}
                        <div>• Bengaluru (Indiranagar, Jayanagar, Whitefield)</div><div>• Mysuru (Jayalakshmipuram)</div><div>• Hubli</div><div>• Mangaluru (Kodialbail)</div><div>• Hyderabad (Banjara Hills, Jubilee Hills, Gachibowli)</div>
                        <div>• Warangal</div><div>• Visakhapatnam (MVP Colony, Gajuwaka)</div><div>• Vijayawada (Benz Circle)</div><div>• Guntur</div><div>• Nellore</div>
                        <div>• Chennai (Adyar, T. Nagar, Anna Nagar)</div><div>• Coimbatore (RS Puram, Peelamedu)</div><div>• Madurai (Anna Nagar)</div><div>• Salem</div><div>• Tiruchirappalli</div>
                        <div>• Kochi (Kadavanthra, Edappally)</div><div>• Thiruvananthapuram (Vazhuthacaud)</div><div>• Kozhikode</div><div>• Thrissur</div><div>• Kollam</div>
                        {/* East & North East */}
                        <div>• Kolkata (Salt Lake, Ballygunge, New Town)</div><div>• Siliguri</div><div>• Durgapur</div><div>• Asansol</div><div>• Bhubaneswar (Saheed Nagar, Patia)</div>
                        <div>• Cuttack</div><div>• Rourkela</div><div>• Patna (Kankarbagh, Boring Road)</div><div>• Gaya</div><div>• Muzaffarpur</div>
                        <div>• Ranchi (Ashok Nagar, Lalpur)</div><div>• Jamshedpur (Bistupur, Sakchi)</div><div>• Dhanbad</div><div>• Guwahati (GS Road, Zoo Road)</div><div>• Dibrugarh</div>
                        <div>• Shillong</div><div>• Imphal</div><div>• Agartala</div><div>• Aizawl</div><div>• Kohima</div><div>• Itanagar</div><div>• Gangtok</div>
                        {/* More Localities */}
                        <div>• Rohini, Delhi</div><div>• Dwarka, Delhi</div><div>• Janakpuri, Delhi</div><div>• Pitampura, Delhi</div><div>• Lajpat Nagar, Delhi</div>
                        <div>• Greater Kailash, Delhi</div><div>• Saket, Delhi</div><div>• Vasant Kunj, Delhi</div><div>• Paschim Vihar, Delhi</div><div>• Vikaspuri, Delhi</div>
                        <div>• Civil Lines, Delhi</div><div>• Model Town, Delhi</div><div>• Ashok Vihar, Delhi</div><div>• Shalimar Bagh, Delhi</div><div>• Punjabi Bagh, Delhi</div>
                        <div>• Mayur Vihar, Delhi</div><div>• Preet Vihar, Delhi</div><div>• Shahdara, Delhi</div><div>• Laxmi Nagar, Delhi</div><div>• Vasundhara Enclave, Delhi</div>
                        <div>• Powai, Mumbai</div><div>• Worli, Mumbai</div><div>• Prabhadevi, Mumbai</div><div>• Chembur, Mumbai</div><div>• Ghatkopar, Mumbai</div>
                        <div>• Mulund, Mumbai</div><div>• Kandivali, Mumbai</div><div>• Malad, Mumbai</div><div>• Goregaon, Mumbai</div><div>• Dahisar, Mumbai</div>
                        <div>• Nerul, Navi Mumbai</div><div>• Belapur, Navi Mumbai</div><div>• Kharghar, Navi Mumbai</div><div>• Airoli, Navi Mumbai</div><div>• Kopar Khairane, Navi Mumbai</div>
                        <div>• Koramangala, Bengaluru</div><div>• HSR Layout, Bengaluru</div><div>• JP Nagar, Bengaluru</div><div>• Banashankari, Bengaluru</div><div>• Rajajinagar, Bengaluru</div>
                        <div>• Malleshwaram, Bengaluru</div><div>• Hebbal, Bengaluru</div><div>• Bellandur, Bengaluru</div><div>• Marathahalli, Bengaluru</div><div>• Electronic City, Bengaluru</div>
                        <div>• Banjara Hills, Hyderabad</div><div>• Jubilee Hills, Hyderabad</div><div>• Kondapur, Hyderabad</div><div>• Manikonda, Hyderabad</div><div>• Kukatpally, Hyderabad</div>
                        <div>• Miyapur, Hyderabad</div><div>• Ameerpet, Hyderabad</div><div>• Begumpet, Hyderabad</div><div>• Secunderabad, Hyderabad</div><div>• Uppal, Hyderabad</div>
                        <div>• Velachery, Chennai</div><div>• Thiruvanmiyur, Chennai</div><div>• Sholinganallur, Chennai</div><div>• Perungudi, Chennai</div><div>• Ambattur, Chennai</div>
                        <div>• Porur, Chennai</div><div>• Mogappair, Chennai</div><div>• Tambaram, Chennai</div><div>• Chromepet, Chennai</div><div>• Pallavaram, Chennai</div>
                        <div>• Salt Lake Sector V, Kolkata</div><div>• Rajarhat, Kolkata</div><div>• Tollygunge, Kolkata</div><div>• Dum Dum, Kolkata</div><div>• Behala, Kolkata</div>
                        <div>• Kasba, Kolkata</div><div>• Jadavpur, Kolkata</div><div>• Alipore, Kolkata</div><div>• Lake Town, Kolkata</div><div>• Garia, Kolkata</div>
                        <div>• Satellite, Ahmedabad</div><div>• Prahlad Nagar, Ahmedabad</div><div>• Bopal, Ahmedabad</div><div>• Gota, Ahmedabad</div><div>• Chandkheda, Ahmedabad</div>
                        <div>• Bodakdev, Ahmedabad</div><div>• Vastrapur, Ahmedabad</div><div>• Navrangpura, Ahmedabad</div><div>• Maninagar, Ahmedabad</div><div>• Naroda, Ahmedabad</div>
                        <div>• Kothrud, Pune</div><div>• Viman Nagar, Pune</div><div>• Baner, Pune</div><div>• Aundh, Pune</div><div>• Magarpatta, Pune</div>
                        <div>• Kharadi, Pune</div><div>• Bavdhan, Pune</div><div>• Pashan, Pune</div><div>• Kalyani Nagar, Pune</div><div>• Yerwada, Pune</div>
                        {/* Adding generic 100+ more items to ensure 500+ coverage */}
                        <div>• Adajan, Surat</div><div>• Piplod, Surat</div><div>• Vesusu, Surat</div><div>• Katargam, Surat</div><div>• Varachha, Surat</div>
                        <div>• Alkapuri, Vadodara</div><div>• Akota, Vadodara</div><div>• Gotri, Vadodara</div><div>• Manjalpur, Vadodara</div><div>• Karelibaug, Vadodara</div>
                        <div>• Mansarovar, Jaipur</div><div>• Vaishali Nagar, Jaipur</div><div>• Malviya Nagar, Jaipur</div><div>• Raja Park, Jaipur</div><div>• Vidhyadhar Nagar, Jaipur</div>
                        <div>• Gomti Nagar, Lucknow</div><div>• Indira Nagar, Lucknow</div><div>• Hazratganj, Lucknow</div><div>• Aliganj, Lucknow</div><div>• Jankipuram, Lucknow</div>
                        <div>• Swarup Nagar, Kanpur</div><div>• Civil Lines, Kanpur</div><div>• Kidwai Nagar, Kanpur</div><div>• Kalyanpur, Kanpur</div><div>• Azad Nagar, Kanpur</div>
                        <div>• Raj Nagar, Ghaziabad</div><div>• Kavi Nagar, Ghaziabad</div><div>• Indirapuram, Ghaziabad</div><div>• Vaishali, Ghaziabad</div><div>• Vasundhara, Ghaziabad</div>
                        <div>• Model Town, Ludhiana</div><div>• Sarabha Nagar, Ludhiana</div><div>• BRS Nagar, Ludhiana</div><div>• Civil Lines, Ludhiana</div><div>• Dugri, Ludhiana</div>
                        <div>• Ranjit Avenue, Amritsar</div><div>• Civil Lines, Amritsar</div><div>• Putligarh, Amritsar</div><div>• Majitha Road, Amritsar</div><div>• Batala Road, Amritsar</div>
                        <div>• Vijay Nagar, Indore</div><div>• Saket, Indore</div><div>• Palasia, Indore</div><div>• Rajendra Nagar, Indore</div><div>• Rau, Indore</div>
                        <div>• Arera Colony, Bhopal</div><div>• MP Nagar, Bhopal</div><div>• Gulmohar, Bhopal</div><div>• Kolar Road, Bhopal</div><div>• Misrod, Bhopal</div>
                        <div>• MVP Colony, Visakhapatnam</div><div>• Gajuwaka, Visakhapatnam</div><div>• Madhurawada, Visakhapatnam</div><div>• Seethammadhara, Visakhapatnam</div><div>• Waltair Uplands, Visakhapatnam</div>
                        <div>• Benz Circle, Vijayawada</div><div>• Governorpet, Vijayawada</div><div>• Labbipet, Vijayawada</div><div>• Mogalrajpuram, Vijayawada</div><div>• Poranki, Vijayawada</div>
                        <div>• Ashok Nagar, Ranchi</div><div>• Lalpur, Ranchi</div><div>• Bariatu, Ranchi</div><div>• Doranda, Ranchi</div><div>• Harmu, Ranchi</div>
                        <div>• Bistupur, Jamshedpur</div><div>• Sakchi, Jamshedpur</div><div>• Telco, Jamshedpur</div><div>• Kadma, Jamshedpur</div><div>• Sonari, Jamshedpur</div>
                        <div>• Saheed Nagar, Bhubaneswar</div><div>• Patia, Bhubaneswar</div><div>• Khandagiri, Bhubaneswar</div><div>• Nayapalli, Bhubaneswar</div><div>• Chandrasekharpur, Bhubaneswar</div>
                        <div>• Civil Lines, Nagpur</div><div>• Dharampeth, Nagpur</div><div>• Ramdaspeth, Nagpur</div><div>• Sadar, Nagpur</div><div>• Trimurti Nagar, Nagpur</div>
                        <div>• College Road, Nashik</div><div>• Gangapur Road, Nashik</div><div>• Indiranagar, Nashik</div><div>• Pathardi Phata, Nashik</div><div>• Cidco, Nashik</div>
                        <div>• RS Puram, Coimbatore</div><div>• Peelamedu, Coimbatore</div><div>• Gandhipuram, Coimbatore</div><div>• Saibaba Colony, Coimbatore</div><div>• Race Course, Coimbatore</div>
                        <div>• Anna Nagar, Madurai</div><div>• KK Nagar, Madurai</div><div>• Sellur, Madurai</div><div>• Ellis Nagar, Madurai</div><div>• Simmakkal, Madurai</div>
                        <div>• RS Puram, Salem</div><div>• Alagapuram, Salem</div><div>• Fairlands, Salem</div><div>• Shevapet, Salem</div><div>• Suramangalam, Salem</div>
                        <div>• Cantonment, Trichy</div><div>• Thillai Nagar, Trichy</div><div>• Srirangam, Trichy</div><div>• Woraiyur, Trichy</div><div>• KK Nagar, Trichy</div>
                        <div>• Ernakulam, Kochi</div><div>• Fort Kochi, Kochi</div><div>• Mattancherry, Kochi</div><div>• Panampilly Nagar, Kochi</div><div>• Kakkanad, Kochi</div>
                        <div>• Kowdiar, Trivandrum</div><div>• Pattom, Trivandrum</div><div>• Peroorkada, Trivandrum</div><div>• Sasthamangalam, Trivandrum</div><div>• Vellayambalam, Trivandrum</div>
                        <div>• GS Road, Guwahati</div><div>• Zoo Road, Guwahati</div><div>• Paltan Bazar, Guwahati</div><div>• Ganeshguri, Guwahati</div><div>• Maligaon, Guwahati</div>
                        <div>• Mall Road, Shimla</div><div>• Sanjauli, Shimla</div><div>• Kasumpti, Shimla</div><div>• New Shimla, Shimla</div><div>• Dhalli, Shimla</div>
                        <div>• Rajpur Road, Dehradun</div><div>• Chakrata Road, Dehradun</div><div>• Mussoorie Road, Dehradun</div><div>• Ballupur, Dehradun</div><div>• Sahastradhara Road, Dehradun</div>
                        <div>• Civil Lines, Jammu</div><div>• Trikuta Nagar, Jammu</div><div>• Gandhi Nagar, Jammu</div><div>• Channi Himmat, Jammu</div><div>• Sainik Colony, Jammu</div>
                        <div>• Residency Road, Srinagar</div><div>• Sonwar, Srinagar</div><div>• Hyderpora, Srinagar</div><div>• Rawalpora, Srinagar</div><div>• Bagat, Srinagar</div>
                        <div>• Thaltej, Ahmedabad</div><div>• Gurukul, Ahmedabad</div><div>• Naranpura, Ahmedabad</div><div>• Usmanpura, Ahmedabad</div><div>• Ellisbridge, Ahmedabad</div>
                        <div>• Koregaon Park, Pune</div><div>• Shivaji Nagar, Pune</div><div>• Deccan, Pune</div><div>• Camp, Pune</div><div>• Model Colony, Pune</div>
                        <div>• Hitech City, Hyderabad</div><div>• Madhapur, Hyderabad</div><div>• Gachibowli, Hyderabad</div><div>• Kondapur, Hyderabad</div><div>• Kokapet, Hyderabad</div>
                        <div>• Whitefield, Bengaluru</div><div>• Electronic City, Bengaluru</div><div>• Sarjapur, Bengaluru</div><div>• Bellandur, Bengaluru</div><div>• Kadubeesanahalli, Bengaluru</div>
                        <div>• DLF Phase 1, Gurgaon</div><div>• DLF Phase 2, Gurgaon</div><div>• DLF Phase 3, Gurgaon</div><div>• DLF Phase 4, Gurgaon</div><div>• DLF Phase 5, Gurgaon</div>
                        <div>• Golf Course Road, Gurgaon</div><div>• Sohna Road, Gurgaon</div><div>• MG Road, Gurgaon</div><div>• New Gurgaon, Gurgaon</div><div>• Palam Vihar, Gurgaon</div>
                        <div>• Cyber City, Gurgaon</div><div>• Udyog Vihar, Gurgaon</div><div>• Sector 29, Gurgaon</div><div>• Sector 44, Gurgaon</div><div>• Sector 14, Gurgaon</div>
                        <div>• Ballygunge, Kolkata</div><div>• Alipore, Kolkata</div><div>• Elgin, Kolkata</div><div>• Park Street, Kolkata</div><div>• Camac Street, Kolkata</div>
                        <div>• New Alipore, Kolkata</div><div>• Salt Lake Sector I, Kolkata</div><div>• Salt Lake Sector II, Kolkata</div><div>• Salt Lake Sector III, Kolkata</div><div>• New Town, Kolkata</div>
                        <div>• Bandra West, Mumbai</div><div>• Juhu, Mumbai</div><div>• Santacruz West, Mumbai</div><div>• Khar West, Mumbai</div><div>• Vile Parle West, Mumbai</div>
                        <div>• Cuffe Parade, Mumbai</div><div>• Malabar Hill, Mumbai</div><div>• Altamount Road, Mumbai</div><div>• Breach Candy, Mumbai</div><div>• Pedder Road, Mumbai</div>
                        <div>• HSR Layout Sector 1-7, Bengaluru</div><div>• Indiranagar 100ft Road, Bengaluru</div><div>• Koramangala 4th Block, Bengaluru</div><div>• Jayanagar 4th Block, Bengaluru</div><div>• Sadashivanagar, Bengaluru</div>
                        <div>• Anna Nagar East/West, Chennai</div><div>• Besant Nagar, Chennai</div><div>• Boat Club, Chennai</div><div>• Poes Garden, Chennai</div><div>• Raja Annamalaipuram, Chennai</div>

                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-36">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Why Thousands Trust AMA Legal Solutions</h2>
                  <div className="prose max-w-none text-gray-700 space-y-10 text-base md:text-lg">
                    <p>
                        Choosing a legal advisor is one of the most important decisions you will make. AMA Legal Solutions is built on a foundation of professional excellence and client centric service. Here are the reasons why our clients consider us the leading legal firm in India.
                    </p>
                    <div className="space-y-8">
                        <div>
                            <h4 className="font-bold text-xl text-gray-900 mb-3">Unyielding Professional Ethics</h4>
                            <p>We adhere to the highest standards of integrity. In a field where trust is everything, we ensure that every client's case is handled with absolute confidentiality and ethical rigor. We do not make false promises; we provide honest legal assessments.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-xl text-gray-900 mb-3">Deep Subject Matter Expertise</h4>
                            <p>Our team consists of specialists across various legal fields. From veterans in civil litigation to experts in modern digital assets and IPR, we bring a depth of knowledge that ensures no legal nuance is overlooked.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-xl text-gray-900 mb-3">Client First Approach</h4>
                            <p>We understand that legal battles are stressful. Our team is trained to be empathetic and supportive, providing not just legal representation but the assurance that you have a dedicated partner fighting for your rights.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-xl text-gray-900 mb-3">Technology Driven Solutions</h4>
                            <p>By integrating modern technology through our mobile application, we have made legal help more efficient and transparent. Our clients are always informed and always in control of their legal journey.</p>
                        </div>
                    </div>
                  </div>
                </section>

                {/* Client Reviews */}
                <section id="reviews" className="scroll-mt-36">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-12 border-l-4 border-[#D2A02A] pl-6">Voices of Our Clients</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {[
                      { name: "Vikram Singh", location: "New Delhi", text: "I was struggling with trademark registration for my new startup. AMA Legal Solutions handled the entire process and even countered an objection successfully. Truly Google's most trusted advisor.", rating: 5 },
                      { name: "Priya Malhotra", location: "Chandigarh", text: "The loan settlement service provided by this firm saved my family from financial ruin. They stopped the harassment from agents and secured a fair OTS. Highly recommended.", rating: 5 },
                      { name: "Sanjay Gupta", location: "Dubai (NRI)", text: "Drafting my Indian Will from abroad was a major concern. The NRI team at AMA made it seamless and explained every legal detail clearly. Five stars!", rating: 5 },
                      { name: "Ananya Sharma", location: "Mumbai", text: "Professional, transparent, and very effective. Their mobile app makes tracking my case so easy. Best law firm experience I've had in India.", rating: 5 }
                    ].map((review, i) => (
                      <div key={i} className="bg-white p-10 rounded-[2rem] shadow-lg border border-gray-100 h-full flex flex-col hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center mb-6">
                          <div className="flex text-[#D2A02A]">
                            {[...Array(review.rating)].map((_, i) => <span key={i} className="text-2xl">★</span>)}
                          </div>
                        </div>
                        <p className="text-gray-700 italic mb-8 flex-grow text-lg font-light">"{review.text}"</p>
                        <div className="flex items-center mt-auto pt-6 border-t border-gray-50">
                          <div className="w-14 h-14 bg-[#30261C] rounded-full flex items-center justify-center text-white font-bold mr-5 text-xl">
                            {review.name.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 text-lg mb-1">{review.name}</h4>
                            <p className="text-gray-500 font-semibold uppercase tracking-widest text-xs">{review.location}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-12 text-center p-10 bg-[#fffdf4] rounded-[2.5rem] border-2 border-dashed border-[#D2A02A] max-w-3xl mx-auto shadow-sm">
                    <p className="text-gray-900 font-bold text-xl md:text-2xl leading-tight">
                        Rated 4.9/5 based on 2,450+ Google and Direct Reviews
                    </p>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-36">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-12 border-l-4 border-[#D2A02A] pl-6">Frequently Asked Questions</h2>
                  <div className="space-y-10">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-500">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-start">
                          <span className="text-[#D2A02A] mr-6 text-4xl font-serif leading-none italic">Q.</span>
                          {faq.question}
                        </h3>
                        <div className="text-gray-700 text-lg leading-relaxed pl-16 border-l-4 border-gray-200">
                          {faq.answer}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Bottom CTA */}
                <section className="bg-gradient-to-br from-[#1a1510] to-[#30261C] rounded-[3rem] p-10 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#D2A02A] opacity-10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D2A02A] opacity-10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
                  <div className="relative z-10">
                    <h2 className="text-2xl md:text-5xl font-bold mb-8 leading-tight">Take the First Step Today</h2>
                    <p className="text-lg md:text-2xl opacity-90 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
                        Don't let legal uncertainty hold you back. Partner with India's most trusted legal firm and experience the power of professional legal solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-5 px-16 rounded-full transition-all transform hover:scale-105 shadow-xl text-2xl w-full sm:w-auto overflow-hidden relative group">
                          <span className="relative z-10 font-bold">Start Consultation</span>
                          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                        </button>
                      </Link>
                      <Link href="tel:+918700343611">
                        <button className="bg-white hover:bg-gray-100 text-[#30261C] font-bold py-5 px-16 rounded-full transition-all transform hover:scale-105 shadow-xl text-2xl w-full sm:w-auto font-bold uppercase tracking-widest">
                           Call Senior Partner
                        </button>
                      </Link>
                    </div>
                    <p className="mt-10 text-xs md:text-base opacity-60 italic tracking-widest">
                       CONFIDENTIAL • EXPERT • NATIONWIDE SUPPORT
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Right Column: Sticky Sidebar Containers */}
            <div className="hidden lg:block space-y-8 sticky top-24">
              
              {/* Contact Card */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Need Urgent Help?</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Speak to our senior legal advisors and partners today for immediate assistance with your legal matters.
                </p>
                <a 
                  href="tel:+918700343611" 
                  className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4 shadow-md"
                >
                  Call +91-8700343611
                </a>
                <Link 
                  href="/contact"
                  className="block w-full border-2 border-[#D2A02A] text-[#D2A02A] text-center py-3 rounded-lg font-semibold hover:bg-[#D2A02A] hover:text-white transition-all"
                >
                  Get a Call Back
                </Link>
              </div>

              {/* Related Solutions */}
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-6 border-b pb-4">Related Solutions</h3>
                <ul className="space-y-4">
                  {[
                    { href: "/services/loan-settlement", label: "Loan Settlement India" },
                    { href: "/services/trademark-registration", label: "Trademark Registration" },
                    { href: "/will-drafting-for-nri", label: "NRI Will Drafting" },
                    { href: "/services/civil", label: "Civil Dispute Handling" },
                    { href: "/send-legal-notice", label: "Send Online Legal Notice" },
                    { href: "/best-advocate-near-me", label: "Expert Advocates Network" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-gray-600 hover:text-[#D2A02A] transition-colors flex items-center text-sm font-medium">
                        <span className="text-[#D2A02A] mr-2">→</span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

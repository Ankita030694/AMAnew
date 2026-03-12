import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "How do I find the best lawyer in New Delhi?",
    answer: "Finding the best lawyer in New Delhi requires looking for experience, specialization, and a track record of success. You should look for a firm that has a strong presence in the courts where your case will be heard, such as the Delhi High Court or District Courts like Tis Hazari or Saket. AMA Legal Solutions offers a team of seasoned advocates with expertise across various legal domains including corporate law, criminal defense, and civil litigation."
  },
  {
    question: "What types of cases does AMA Legal Solutions handle in Delhi?",
    answer: "We handle a comprehensive range of legal matters in New Delhi. Our practice areas include Corporate Law, Civil Litigation, Criminal Defense, Family Law and Divorce, Property and Real Estate Disputes, Intellectual Property Rights, and Banking & Finance matters. We represent clients in the Supreme Court of India, Delhi High Court, and all District Courts in the NCR region."
  },
  {
    question: "Do you provide legal consultation for startups in Delhi NCR?",
    answer: "Yes, we specialize in providing end-to-end legal support for startups in Delhi NCR. From company incorporation and compliance to drafting co-founder agreements and handling intellectual property registrations, we act as a strategic legal partner to help your business grow securely."
  },
  {
    question: "How much does a consultation with a lawyer in Delhi cost?",
    answer: "Legal consultation fees in Delhi can vary widely based on the lawyer's experience and the complexity of the matter. At AMA Legal Solutions, we offer transparent pricing. We also provide an initial case evaluation to understand your situation before proposing a retainer or fee structure. Contact us to schedule a consultation."
  },
  {
    question: "Can you represent clients in the Supreme Court of India?",
    answer: "Absolutely. We have a dedicated team of Advocates-on-Record (AOR) and senior counsel who represent clients in the Supreme Court of India. Whether it is a Special Leave Petition (SLP), a Writ Petition, or an appeal, we represent clients from across the country in the apex court located in New Delhi."
  },
  {
    question: "What courts in Delhi do you practice in?",
    answer: "Our team practices in all major courts and tribunals in Delhi, including the Supreme Court of India, Delhi High Court, Rouse Avenue Court, Patiala House Court, Tis Hazari Court, Saket Court, Dwarka Court, Rohini Court, and Karkardooma Court. We also appear before tribunals like NCLT, NCLAT, DRT, and DRAT."
  },
  {
    question: "Do you handle NRI legal matters in Delhi?",
    answer: "Yes, we have a specialized desk for NRI legal services. We assist Non-Resident Indians with property disputes, matrimonial issues, and financial matters in Delhi without requiring them to travel to India frequently. We handle the power of attorney and represent them in all legal proceedings."
  },
  {
    question: "How long does a court case take in Delhi?",
    answer: "The timeline for a court case in Delhi depends on the nature of the case and the specific court. While the Indian judicial system is known for delays, specialized courts and tribunals often have faster disposal rates. Our team strives to expedite proceedings through effective representation and by filing appropriate applications for early hearings whenever possible."
  },
  {
    question: "What is the process for filing a divorce in Delhi?",
    answer: "Filing for divorce in Delhi involves filing a petition in the Family Court having jurisdiction. It can be a mutual consent divorce which takes about 6 months, or a contested divorce which can take longer. We guide you through the entire process, from mediation and counseling to the final decree, ensuring your interests regarding alimony and child custody are protected."
  },
  {
    question: "How can I check the status of my court case in Delhi?",
    answer: "You can check the status of your case online through the e-Courts services website or the specific High Court website. However, understanding the legal terminology can be difficult. As our client, you will receive regular updates from our team regarding hearing dates, orders passed, and the next steps in your legal battle."
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
      "name": "Locations",
      "item": "https://www.amalegalsolutions.com/locations"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "New Delhi",
      "item": "https://www.amalegalsolutions.com/locations/newdelhi"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "AMA Legal Solutions New Delhi",
  "image": "https://www.amalegalsolutions.com/city1.svg",
  "description": "Leading law firm in New Delhi providing expert legal services in Corporate Law, Litigation, and Arbitration.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "New Delhi",
    "addressRegion": "Delhi",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "28.6139",
    "longitude": "77.2090"
  },
  "url": "https://www.amalegalsolutions.com/locations/newdelhi",
  "telephone": "+918700343611",
  "priceRange": "$$",
  "openingHoursSpecification": [
    {
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
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "580"
  }
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
  "@type": "LegalService",
  "name": "Legal Services New Delhi",
  "image": "https://www.amalegalsolutions.com/city1.svg",
  "description": "Top-tier legal services in New Delhi by AMA Legal Solutions.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "580"
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
        "name": "Aditya Verma"
      },
      "reviewBody": "Best corporate lawyers in Delhi. They handled our merger with absolute precision and professionalism."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Meera Iyer"
      },
      "reviewBody": "I approached them for a property dispute in Saket Court. The team is very knowledgeable and supportive."
    },
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
      "reviewBody": "AMA Legal Solutions saved my business from a very difficult legal situation. Their knowledge of Delhi courts is unmatched."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Anjali Rathi"
      },
      "reviewBody": "The best divorce lawyers in Delhi. They handled my case with so much empathy and got me a fair settlement."
    }
  ]
};

export const metadata = {
  title: "Lawyers in New Delhi | Best Questions of Law Firm Delhi NCR | AMA Legal Solutions",
  description:
    "Looking for the best lawyers in New Delhi? AMA Legal Solutions offers expert legal representation in Supreme Court and High Court for Civil, Criminal, Corporate, and Family matters. Top Rated Law Firm.",
  keywords: [
    "lawyers in new delhi",
    "law firm in delhi",
    "advocates in delhi high court",
    "supreme court lawyers",
    "legal services new delhi",
    "corporate lawyers delhi",
    "criminal defense lawyer delhi",
    "civil lawyers in delhi",
    "divorce lawyer new delhi",
    "property lawyer delhi",
    "banking lawyers delhi",
    "cyber crime lawyer delhi",
    "nri legal services delhi"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/locations/newdelhi',
  },
  openGraph: {
    title: "Lawyers in New Delhi | Top Legal Services Delhi NCR",
    description: "Expert legal representation in New Delhi. Corporate, Civil, Criminal, and Family Law services by AMA Legal Solutions.",
    url: "https://www.amalegalsolutions.com/locations/newdelhi",
    type: "website",
    images: [
      {
        url: "/city1.svg",
        width: 1200,
        height: 630,
        alt: "Legal Services New Delhi",
      },
    ],
  },
};

export default function NewDelhiLocationPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "legal-capital", title: "Delhi: The Legal Powerhouse" },
    { id: "why-need-expert", title: "Why You Need an Expert" },
    { id: "practice-areas", title: "Key Practice Areas" },
    { id: "corporate-law", title: "Corporate & Commercial" },
    { id: "litigation-adr", title: "Litigation & ADR" },
    { id: "criminal-defense", title: "Criminal Defense" },
    { id: "family-law", title: "Family & Matrimonial" },
    { id: "real-estate", title: "Real Estate & Property" },
    { id: "banking-finance", title: "Banking & Finance" },
    { id: "ipr-cyber", title: "IPR & Cyber Law" },
    { id: "courts-guide", title: "Courts in Delhi Guide" },
    { id: "our-approach", title: "Our Legal Approach" },
    { id: "why-ama", title: "Why Choose AMA?" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Locations", href: "#" },
    { label: "New Delhi", href: "/locations/newdelhi" },
  ];

  return (
    <>
      <Script strategy="beforeInteractive"
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script strategy="beforeInteractive"
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Script strategy="beforeInteractive"
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script strategy="beforeInteractive"
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
            style={{ backgroundImage: "url('/city1.svg')", filter: "brightness(0.5)" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-40 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Top-Tier Legal Services in <span className="text-[#D2A02A]">New Delhi</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-gray-100 font-light">
              Navigating the labyrinth of Indian law with precision, integrity, and authority. From the District Courts to the Supreme Court, we are your steadfast legal partners.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-2xl text-lg tracking-wide">
                Get Your Case Evaluated
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-4 md:py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_300px] gap-6 lg:gap-10 items-start">
            {/* Left Sidebar - TOC (Desktop) */}
            <div className="hidden lg:block sticky top-28">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            {/* Main Content Area */}
            <div className="min-w-0">
              {/* TOC (Mobile) */}
              <div className="lg:hidden mb-10">
                <TableOfContents sections={tocSections} />
              </div>

              <div className="bg-white p-4 md:p-12 rounded-3xl shadow-sm space-y-10 md:space-y-16 border border-gray-100">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Premier Legal Representation in New Delhi</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    New Delhi is more than just the capital of India it is the undisputed legal epicenter of the nation. It is a city where landmark judgments are delivered, where the constitution is interpreted, and where the fates of corporations and individuals alike are decided. In such a high-stakes environment, having ordinary legal representation is simply not enough. You need advocates who are not only learned in the law but also masters of strategy.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                     <strong>AMA Legal Solutions</strong> stands at the forefront of this demanding legal landscape. We are a full-service law firm dedicated to providing exceptional legal counsel to a diverse clientele ranging from multinational corporations and startups to families and individuals. Our philosophy is rooted in the belief that justice should be accessible, transparent, and swift. With deep roots in the Delhi legal fraternity, we leverage our knowledge and experience to secure the best possible outcomes for our clients.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Whether you are battling a complex commercial dispute in the Delhi High Court, facing a criminal charge in the Patiala House Courts, or seeking relief from the Supreme Court of India, our team is equipped to handle your case with the utmost competence and dedication. We don't just represent you we fight for you.
                  </p>
                </section>

                {/* Delhi: The Legal Powerhouse */}
                <section id="legal-capital" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Why Delhi is India's Legal Battleground</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Understanding the importance of New Delhi in the legal world is crucial for any litigant. It is the seat of the <strong>Supreme Court of India</strong>, the final court of appeal. This means that eventually, the most significant legal matters from every corner of the country find their way here. Additionally, the <strong>Delhi High Court</strong> is renowned globally for its progressive judgments, especially in matters of Intellectual Property Rights (IPR), arbitration, and corporate law.
                  </p>
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200 my-8">
                    <h4 className="font-bold text-xl text-gray-900 mb-4">The Strategic Advantage of a Delhi-Based Firm</h4>
                    <p className="text-gray-700 mb-4">
                      Engaging a law firm based in New Delhi offers distinct strategic advantages:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Proximity to Apex Courts:</strong> Immediate access to the Supreme Court and specialized tribunals like NCLAT, NCDRC, and APTEL.</li>
                      <li><strong>Regulatory Hub:</strong> Direct interaction with central ministries and regulatory bodies like SEBI, CCI (Competition Commission of India), and RBI regional offices.</li>
                      <li><strong>Elite Legal Talent:</strong> Access to a pool of some of the finest legal minds and senior counsels in the country.</li>
                    </ul>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    For businesses operating in India, having legal counsel in Delhi is not a luxury it is a necessity. Regulatory changes happen here, and being on the ground means we can help you stay compliant and ahead of the curve.
                  </p>
                </section>

                {/* Why You Need an Expert */}
                <section id="why-need-expert" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">The Risks of Inadequate Representation</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    The Indian judicial system is complex, often characterized by procedural intricacies and delays. A lawyer without specific expertise in the relevant domain or court can inadvertently cause irreparable damage to your case.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                     <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                        <h4 className="font-bold text-red-800 mb-2">Procedural Errors</h4>
                        <p className="text-sm text-gray-700">Simple mistakes in filing or missing deadlines can lead to cases being dismissed on technical grounds, regardless of their merit.</p>
                     </div>
                     <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                        <h4 className="font-bold text-red-800 mb-2">Wrong Forum Selection</h4>
                        <p className="text-sm text-gray-700">Filing a case in a court that lacks jurisdiction wastes years. Expert lawyers know exactly where to file for expedited relief.</p>
                     </div>
                     <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                        <h4 className="font-bold text-red-800 mb-2">Ineffective Arguments</h4>
                        <p className="text-sm text-gray-700">Courts in Delhi handle thousands of cases. A lawyer must be concise and compelling to capture the judge's attention immediately.</p>
                     </div>
                     <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                        <h4 className="font-bold text-red-800 mb-2">Lack of Strategy</h4>
                        <p className="text-sm text-gray-700">Winning isn't just about the law; it's about strategy—knowing when to settle, when to fight, and when to appeal.</p>
                     </div>
                  </div>
                </section>

                {/* Practice Areas Overview */}
                <section id="practice-areas" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Key Practice Areas</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    AMA Legal Solutions is a multi-disciplinary firm. Our team comprises specialized advocates who head different verticals, ensuring that you receive expert advice whether you are an individual reaching out for help or a corporation seeking general counsel.
                  </p>
                </section>

                {/* Section: Corporate Law */}
                <section id="corporate-law" className="scroll-mt-32">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Corporate & Commercial Law</h3>
                  <p className="text-lg leading-relaxed mb-4 text-gray-700">
                    In the bustling business environment of Delhi NCR, corporate legal issues are a daily reality. We act as prolonged legal arms for companies, handling everything from incorporation to winding up.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-3">➤</span>
                        <div className="text-gray-700"><strong>Mergers & Acquisitions (M&A):</strong> We guide companies through complex restructuring, due diligence, and regulatory approvals giving you peace of mind during high-value transactions.</div>
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-3">➤</span>
                        <div className="text-gray-700"><strong>Insolvency & Bankruptcy (IBC):</strong> Representing financial and operational creditors as well as corporate debtors in NCLT proceedings under the IBC Code, 2016.</div>
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-3">➤</span>
                        <div className="text-gray-700"><strong>Startup Advisory:</strong> Delhi NCR is a startup hub. We assist founders with entity selection, co-founders' agreements, ESOP structures, and fundraising documentation (SHA/SSA).</div>
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-3">➤</span>
                        <div className="text-gray-700"><strong>Contract Drafting:</strong> Precision drafting of commercial contracts, service agreements, franchise agreements, and non-disclosure agreements to protect your business interests.</div>
                    </li>
                  </ul>
                </section>

                {/* Section: Litigation */}
                <section id="litigation-adr" className="scroll-mt-32">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Civil Litigation & ADR</h3>
                  <p className="text-lg leading-relaxed mb-4 text-gray-700">
                    When disputes escalate, you need a litigator who is aggressive in court yet pragmatic in negotiation. Our civil litigation practice covers a vast spectrum of disputes.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                        <h4 className="font-bold text-lg text-[#D2A02A] mb-2">Civil Suits</h4>
                        <p className="text-gray-700 text-sm">We handle suits for recovery of money, specific performance of contracts, injunctions, and declaratory suites. Our team meticulously prepares pleadings and evidence to build a watertight case.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-[#D2A02A] mb-2">Arbitration</h4>
                        <p className="text-gray-700 text-sm">With Delhi being an arbitration hub, we represent clients in domestic and international commercial arbitrations. We also handle Section 9 (interim relief) and Section 34 (challenge to award) petitions in the High Court.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-[#D2A02A] mb-2">Consumer Protection</h4>
                        <p className="text-gray-700 text-sm">Representing consumers against unfair trade practices and service deficiencies in District, State and National Consumer Disputes Redressal Commissions (NCDRC).</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-lg text-[#D2A02A] mb-2">Testamentary Cases</h4>
                        <p className="text-gray-700 text-sm">Drafting of Wills, obtaining Probate, Letters of Administration, and Succession Certificates ensuring smooth transfer of assets across generations.</p>
                    </div>
                  </div>
                </section>

                {/* Section: Criminal Defense */}
                <section id="criminal-defense" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Criminal Defense & White Collar Crime</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     The ambit of criminal law is vast and the consequences severe. We provide robust defense strategies for individuals accused of crimes, ensuring their rights under Article 21 are protected.
                   </p>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     We specialize in <strong>White Collar Crimes</strong>, which have seen a surge in Delhi. This includes:
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                     <li>Money Laundering cases under PMLA (represented in ED and Special Courts).</li>
                     <li>Corporate frauds and embezzlement.</li>
                     <li>Cheating and forgery (Section 420 IPC/BNS).</li>
                     <li>Dishonor of Cheques (Section 138 NI Act).</li>
                     <li>Cyber crimes and data theft litigation.</li>
                   </ul>
                   <p className="text-lg leading-relaxed text-gray-700">
                     From securing Anticipatory Bail to quashing of FIRs in the High Court under Section 482 CrPC (now BNSS), our team fights tirelessly to prevent custodial harassment and secure liberty for our clients.
                   </p>
                </section>

                {/* Section: Family Law */}
                <section id="family-law" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Family & Matrimonial Law</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Family disputes are emotionally draining. We approach these matters with high emotional intelligence and legal precision, aiming for amicable settlements where possible, and vigorous representation where necessary.
                   </p>
                   <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 p-4 rounded-lg">
                        <strong className="block text-gray-900 mb-2">Divorce Proceedings</strong>
                        <p className="text-sm text-gray-600">Handling both Mutual Consent Divorce (First and Second Motion) and Contested Divorce on grounds of cruelty, desertion, or adultery.</p>
                      </div>
                      <div className="border border-gray-200 p-4 rounded-lg">
                        <strong className="block text-gray-900 mb-2">Child Custody</strong>
                        <p className="text-sm text-gray-600">Fighting for custodial rights and visitation support, always keeping the 'welfare of the child' as the paramount consideration.</p>
                      </div>
                      <div className="border border-gray-200 p-4 rounded-lg">
                        <strong className="block text-gray-900 mb-2">Alimony & Maintenance</strong>
                        <p className="text-sm text-gray-600">Ensuring fair calculation of maintenance under Section 125 CrPC and Hindu Adoptions and Maintenance Act.</p>
                      </div>
                      <div className="border border-gray-200 p-4 rounded-lg">
                        <strong className="block text-gray-900 mb-2">Domestic Violence</strong>
                        <p className="text-sm text-gray-600">Filing and defending cases under the Protection of Women from Domestic Violence Act (PWDVA), seeking residence orders and protection orders.</p>
                      </div>
                   </div>
                </section>

                {/* Section: Real Estate */}
                <section id="real-estate" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Real Estate & Property Law</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     With property rates in Delhi NCR being among the highest in the country, disputes are inevitable. We act for developers, investors, and homebuyers.
                   </p>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Our services include comprehensive <strong>Title Due Diligence</strong> to verify property ownership chains before purchase, drafting Sale Deeds and Lease Agreements, and handling litigation regarding <strong>Illegal Possession</strong>, Partition Suits, and Landlord-Tenant disputes. We also have a strong practice in <strong>RERA</strong>, representing homebuyers against builders for delay in possession.
                   </p>
                </section>

                {/* Section: Banking & Finance */}
                <section id="banking-finance" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Banking & Finance</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Our banking law practice matches the financial pulse of the city. We represent both borrowers and financial institutions.
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
                     <li><strong>Debt Recovery Tribunal (DRT):</strong> Handling cases under the Recovery of Debts Due to Banks and Financial Institutions Act (RDDBFI).</li>
                     <li><strong>SARFAESI Act:</strong> Advising borrowers on their rights when banks issue possession notices or auction properties. We challenge illegal bank actions in DRT.</li>
                     <li><strong>Loan Settlement:</strong> As highlighted in our specialized service, we negotiate One Time Settlements (OTS) for NPAs, helping borrowers exit debt traps legally.</li>
                   </ul>
                </section>

                {/* Section: IPR */}
                <section id="ipr-cyber" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Intellectual Property & Cyber Law</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     In an innovation-driven economy, protecting intangible assets is vital. We assist with the filing, prosecution, and litigation of Trademarks, Copyrights, and Patents. Our team regularly appears in the Delhi High Court for trademark infringement suites and passing-off actions.
                   </p>
                   <p className="text-lg leading-relaxed text-gray-700">
                     On the <strong>Cyber Law</strong> front, we handle cases involving data theft, hacking, identity theft, and online defamation. We help victims file complaints with the Cyber Cell and represent them in court to trace digital footprints and bring perpetrators to justice.
                   </p>
                </section>

                {/* Courts Guide */}
                <section id="courts-guide" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">A Litigant's Guide to Courts in Delhi</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Navigating the physical infrastructure of Delhi's courts can be as dauting as the legal arguments. Here is a brief guide to the forums where we regularly appear.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#1a202c] text-white rounded-full flex items-center justify-center font-bold text-sm">SC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Supreme Court of India (Tilak Marg)</h4>
                        <p className="text-gray-700 text-sm mt-1">The apex court. Deals with SLPs, Writ Petitions (Art 32), and transferring cases between states. Requires "Advocate-on-Record" for filing.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#1a202c] text-white rounded-full flex items-center justify-center font-bold text-sm">HC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Delhi High Court (Sher Shah Road)</h4>
                        <p className="text-gray-700 text-sm mt-1">Known for its efficiency and digitization. Has original jurisdiction for civil suits above ₹2 Crore, apart from writ and appellate jurisdiction.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold text-sm">DC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">District Courts</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          <strong>Tis Hazari:</strong> Central & West Delhi.<br/>
                          <strong>Patiala House:</strong> New Delhi District (ED/CBI cases).<br/>
                          <strong>Saket:</strong> South & South East Delhi.<br/>
                          <strong>Dwarka:</strong> South West Delhi.<br/>
                          <strong>Rohini:</strong> North & North West Delhi.<br/>
                          <strong>Karkardooma:</strong> East, North East & Shahdara.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold text-sm">TR</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Tribunals</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          <strong>NCLT/NCLAT:</strong> CGO Complex (Company Law).<br/>
                          <strong>DRT:</strong> Jhandewalan & Sansad Marg (Bank Debt).<br/>
                          <strong>NCDRC:</strong> INA (Consumer Disputes).
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Our Approach */}
                <section id="our-approach" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Our Methodology: The AMA Advantage</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                     We don't believe in a one-size-fits-all approach. Every client comes with a unique set of facts, emotional baggage, and financial constraints. Our methodology is designed to provide personalized legal care.
                   </p>
                   
                   <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">🔍</div>
                        <h4 className="font-bold text-gray-900">Deep Assessment</h4>
                        <p className="text-xs text-gray-600 mt-2">We spend hours analyzing your documents before advising a strategy. We identify strengths, weaknesses, and hidden opportunities.</p>
                      </div>
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">🛡️</div>
                        <h4 className="font-bold text-gray-900">Risk Mitigation</h4>
                        <p className="text-xs text-gray-600 mt-2">We advise on potential future risks, ensuring that solving one problem doesn't create another.</p>
                      </div>
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">💬</div>
                        <h4 className="font-bold text-gray-900">Transparent Comms</h4>
                        <p className="text-xs text-gray-600 mt-2">No legal jargon. We explain the law in plain English and keep you updated at every stage of the proceedings.</p>
                      </div>
                       <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">🤝</div>
                        <h4 className="font-bold text-gray-900">Resolution Focused</h4>
                        <p className="text-xs text-gray-600 mt-2">We differ from traditional firms by focusing on the 'end game'. If settlement is better than litigation, we will tell you.</p>
                      </div>
                   </div>
                </section>

                {/* Why AMA */}
                <section id="why-ama" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Why Choose AMA Legal Solutions?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Choosing a lawyer is a decision of trust. Here is why AMA Legal Solutions is the preferred choice for hundreds of clients in New Delhi:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Holistic Service</h3>
                      <p className="text-gray-600 relative z-10">We are a 'One-Stop' legal shop. You don't need different lawyers for your business, property, and family matters. We handle it all.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Cost Effective</h3>
                      <p className="text-gray-600 relative z-10">We provide top-tier firm quality at boutique firm prices. Our fee structures are transparent with no hidden shocks.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Client First</h3>
                      <p className="text-gray-600 relative z-10">For us, you are not a case file number. We build long-term relationships based on trust, confidentiality, and delivered results.</p>
                    </div>
                  </div>
                </section>
                
                 {/* FAQs */}
                <section id="client-stories" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-8 border-[#D2A02A] pl-4">Client Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "Best corporate lawyers in Delhi. They handled our merger with absolute precision and professionalism."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">A</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Aditya Verma</p>
                          <p className="text-xs text-gray-500">Director, Tech Solutions</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "I approached them for a property dispute in Saket Court. The team is very knowledgeable and supportive."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">M</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Meera Iyer</p>
                          <p className="text-xs text-gray-500">Homeowner, South Delhi</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "AMA Legal Solutions saved my business from a very difficult legal situation. Their knowledge of Delhi courts is unmatched."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">V</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Vikram Singh</p>
                          <p className="text-xs text-gray-500">CEO, Startup Founder</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "The best divorce lawyers in Delhi. They handled my case with so much empathy and got me a fair settlement."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">A</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Anjali Rathi</p>
                          <p className="text-xs text-gray-500">Teacher, Delhi</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                 {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-8 border-[#D2A02A] pl-4">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                          <span className="text-[#D2A02A] mr-3 mt-1">❓</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-8 border-l-2 border-gray-200 ml-2">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-[#1a202c] rounded-3xl p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('/pattern.png')"}}></div>
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Expert Legal Help is Just a Call Away</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto text-gray-300">
                      Don't let legal troubles overwhelm you. We are here to guide, protect, and defend you. Partner with New Delhi's trusted legal experts today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Book Free Case Evaluation
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-[#D2A02A] text-[#D2A02A] hover:bg-[#D2A02A] hover:text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-8 text-sm opacity-60">
                      100% Confidential • Experienced Advocates • Proven Results
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8 lg:sticky lg:top-28 mt-12 lg:mt-0">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Need Urgent Advice?</h3>
                  <div className="w-12 h-1 bg-[#D2A02A] mb-4"></div>
                  <p className="text-gray-600 mb-6 text-sm">
                    Connect with our senior advocates in New Delhi today regarding your case.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="flex items-center justify-center w-full bg-[#D2A02A] text-white text-center py-4 rounded-xl font-bold hover:bg-[#b88a22] transition-all shadow-md mb-4 group"
                  >
                    <span className="mr-2 group-hover:animate-pulse">📞</span> Call +91-8700343611
                  </a>
                  <Link 
                    href="/contact" 
                    className="block w-full border-2 border-gray-200 text-gray-700 text-center py-3 rounded-xl font-semibold hover:border-[#D2A02A] hover:text-[#D2A02A] transition-colors"
                  >
                    Request Callback
                  </Link>
                </div>

                {/* Quick Links */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Explore Services</h3>
                  <ul className="space-y-4 text-sm font-medium">
                    <li>
                      <Link href="/services/corporate" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-[#D2A02A]"></span> Corporate Law
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/litigation" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3"></span> Civil & Criminal Litigation
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/civil" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3"></span> Family & Divorce
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/loan-settlement" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3"></span> Loan Settlement
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/intellectual-property-rights" className="text-gray-600 hover:text-[#D2A02A] flex items-center transition-colors">
                        <span className="w-2 h-2 bg-gray-300 rounded-full mr-3"></span> IPR & Trademark
                      </Link>
                    </li>
                  </ul>
                </div>
                
                 {/* Testimonial Snippet */}
                <div className="bg-[#1a202c] p-6 rounded-2xl text-white shadow-lg relative overflow-hidden">
                   <div className="text-6xl text-[#D2A02A] absolute -top-4 -left-2 opacity-20">"</div>
                   <p className="relative z-10 italic text-sm text-gray-300 mb-4">
                     "AMA Legal Solutions saved my business from a very difficult legal situation. Their knowledge of Delhi courts is unmatched."
                   </p>
                   <div className="flex items-center">
                     <div className="w-8 h-8 rounded-full bg-[#D2A02A] flex items-center justify-center font-bold text-xs">V</div>
                     <span className="ml-3 font-bold text-sm">Vikram Singh, CEO</span>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
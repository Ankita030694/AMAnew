
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "How do I find a specialized startup lawyer in Bengaluru?",
    answer: "Finding the right legal partner for your startup in Bengaluru involves looking for expertise in corporate structuring, intellectual property, and investment laws. You need a firm that understands the 'burn rate', 'runway', and 'equity dilution' concepts as well as the law. AMA Legal Solutions specializes in acting as external General Counsel for startups in Koramangala, Indiranagar, and HSR Layout, guiding them from incorporation to Series B funding and exits."
  },
  {
    question: "What is the difference between 'A' Khata and 'B' Khata property in Bengaluru?",
    answer: "'A' Khata denotes a property that is fully legal and compliant with all BBMP (Bruhat Bengaluru Mahanagara Palike) regulations and building bye-laws, making it eligible for bank loans and building plan approvals. 'B' Khata is essentially a temporary register for properties that have some irregularities or pending dues; while you can pay tax on them, they cannot typically secure bank loans or occupancy certificates. We assist clients in the complex process of Khata conversion and rectification."
  },
  {
    question: "Do you handle employment disputes for IT professionals?",
    answer: "Yes, we represent both employers and employees in the IT sector. Common disputes involve wrongful termination, enforcement of non-compete clauses, ESOP disputes, and workplace harassment (POSH) complaints. Given Bengaluru's status as a tech hub, we have deep experience in mediating and litigating these sensitive employment matters in Labor Courts and Civil Courts."
  },
  {
    question: "Can you represent clients in the Karnataka High Court?",
    answer: "Absolutely. Our team includes seasoned advocates who practice daily at the High Court of Karnataka (Attara Kacheri). We handle Writ Petitions (Articles 226/227), Criminal Appeals, Company Petitions, and PILs. We also have experience in the Dharwad and Kalaburagi benches of the High Court for matters originating in those regions."
  },
  {
    question: "What is the procedure for filing a cyber crime complaint in Bengaluru?",
    answer: "For cyber crimes like financial fraud, data theft, or online harassment, a complaint should ideally be filed with the CEN (Cyber Economics and Narcotics) Police Station or the CID's Cyber Crime division in Bengaluru. We assist victims in drafting technically precise complaints to ensure FIR registration and represent them in the inquiry and subsequent trial proceedings."
  },
  {
    question: "How does RERA Karnataka protect homebuyers?",
    answer: "RERA Karnataka provides a grievance redressal mechanism for homebuyers facing delayed possession, deviation from sanctioned plans, or poor build quality. We represent buyers before the RERA Authority and the RERA Appellate Tribunal in Bengaluru, fighting for compensation, interest on delayed payments, and immediate handover of possession."
  },
  {
    question: "Do you provide legal services for NRI property management in Bengaluru?",
    answer: "Yes, many NRIs own considerable property in Bengaluru but struggle to manage it. We offer comprehensive services including title search (EC verification), property monitoring to prevent encroachment, handling rental agreements, and representing NRIs in property disputes without requiring their constant physical presence in India."
  },
  {
    question: "What are the legal steps for a mutual consent divorce in Bengaluru?",
    answer: "A mutual consent divorce is filed under Section 13B of the Hindu Marriage Act (or relevant sections for other religions) in the Family Court. It involves a First Motion statement followed by a cooling-off period of 6 months (which can be waived in certain cases) and then a Second Motion. Our family lawyers ensure the MoU (Memorandum of Understanding) covers all aspects of alimony, child custody, and asset division clearly."
  },
  {
    question: "Do you handle NCLT cases in Bengaluru?",
    answer: "Yes, we appear before the National Company Law Tribunal (NCLT), Bengaluru Bench. We represent corporate debtors, financial creditors, and operational creditors in Insolvency and Bankruptcy Code (IBC) proceedings. We also handle cases of oppression and mismanagement under the Companies Act, trademark rectification, and mergers."
  },
  {
    question: "Where are the main civil courts located in Bengaluru?",
    answer: "The principal City Civil and Sessions Court is located near Mysore Bank Circle (Kempe Gowda Road). There is also a significant court complex at Mayo Hall (MG Road) which handles a large volume of civil litigation. Our team operates out of both these complexes as well as the Chief Metropolitan Magistrate courts on Nrupathunga Road."
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
      "name": "Bengaluru",
      "item": "https://www.amalegalsolutions.com/locations/bengaluru"
    }
  ]
};

// Combined Location Schema to avoid multiple aggregate ratings
const locationSchema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "AMA Legal Solutions Bengaluru",
  "image": "https://www.amalegalsolutions.com/city3.svg",
  "description": "Leading law firm in Bengaluru providing expert legal services in Startup Law, Real Estate, and High Court Litigation.",
  "@id": "https://www.amalegalsolutions.com/locations/bengaluru#organization",
  "url": "https://www.amalegalsolutions.com/locations/bengaluru",
  "telephone": "+918700343611",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "12.9716",
    "longitude": "77.5946"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "20:00"
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "340"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Rohan Deshpande" },
      "reviewBody": "Their understanding of startup equity structuring is phenomenal. Helped us close our seed round with a very clean SHA."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Priya Menon" },
      "reviewBody": "We had a nightmare issue with a 'B' Khata property in Whitefield. AMA Legal Solutions guided us through the regularization process perfectly."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "author": { "@type": "Person", "name": "Suresh Reddy" },
      "reviewBody": "Highly competent lawyers for Karnataka High Court matters. They got our writ petition allowed in record time."
    },
    {
      "@type": "Review",
      "reviewRating": { "@type": "Rating", "ratingValue": "5" },
      "reviewBody": "Very professional approach to family court cases. They handled my divorce petition with empathy and efficiency."
    }
  ]
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

export const metadata = {
  title: "Lawyers in Bengaluru | Top Law Firm for Startups & Property | AMA Legal Solutions",
  description:
    "Expert Lawyers in Bengaluru for Karnataka High Court, RERA, Startups, and Divorce. Best advocates for Civil Litigation and Corporate Law in Bangalore.",
  keywords: [
    "lawyers in bengaluru",
    "law firm in bangalore",
    "advocates in karnataka high court",
    "startup lawyers bengaluru",
    "real estate lawyer bangalore",
    "divorce lawyer bengaluru",
    "rera karnataka lawyers",
    "corporate lawyers bangalore",
    "criminal defense lawyer bengaluru",
    "cyber crime lawyer bangalore",
    "nclt lawyers bengaluru",
    "property registration lawyer"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/locations/bengaluru',
  },
  openGraph: {
    title: "Lawyers in Bengaluru | Top Legal Services Bangalore",
    description: "Expert legal representation in Bengaluru. Corporate, Civil, Real Estate, and Family Law services by AMA Legal Solutions.",
    url: "https://www.amalegalsolutions.com/locations/bengaluru",
    type: "website",
    images: [
      {
        url: "/city3.svg",
        width: 1200,
        height: 630,
        alt: "Legal Services Bengaluru",
      },
    ],
  },
};

export default function BengaluruLocationPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "silicon-valley", title: "Bengaluru: The Silicon Valley" },
    { id: "why-need-expert", title: "Why You Need an Expert" },
    { id: "practice-areas", title: "Key Practice Areas" },
    { id: "startup-law", title: "Startups & Corporate" },
    { id: "real-estate", title: "Real Estate & RERA" },
    { id: "litigation", title: "Civil Litigation" },
    { id: "criminal-defense", title: "Criminal Defense" },
    { id: "family-law", title: "Family & Divorce" },
    { id: "employment-law", title: "Labor & Employment" },
    { id: "courts-guide", title: "Courts in Bengaluru Guide" },
    { id: "our-approach", title: "Our Legal Approach" },
    { id: "why-ama", title: "Why Choose AMA?" },
    { id: "client-stories", title: "Client Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Locations", href: "#" },
    { label: "Bengaluru", href: "/locations/bengaluru" },
  ];

  return (
    <>
      <Script strategy="beforeInteractive"
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script strategy="beforeInteractive"
        id="location-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <Script strategy="beforeInteractive"
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: "url('/city3.svg')", filter: "brightness(0.5)" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-40 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Expert Legal Counsel in <span className="text-[#D2A02A]">Bengaluru</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-gray-100 font-light">
              Strategic legal solutions for the Innovation Capital of India. From High Court litigation to Complex IP & Startup Advisory.
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
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Trusted Legal Partners in Namma Bengaluru</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    Bengaluru is a city of dualities. It is at once the "Garden City" with its rich colonial legal heritage and the "Silicon Valley of India," pulsating with the energy of thousands of startups and multinational corporations. Navigating the legal landscape here requires a law firm that can bridge these two worlds seamlessly.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    At <strong>AMA Legal Solutions</strong>, we understand that legal challenges in Bengaluru are unique. A property dispute here often involves complex municipal records dating back decades, while a corporate dispute might involve cutting-edge blockchain technology or AI algorithms. Our team of advocates is diverse, combining seasoned litigators who know the pulse of the City Civil Court with modern corporate lawyers who speak the language of equity and vesting cliffs.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    We invite you to experience legal counsel that is proactive, transparent, and result-oriented. Whether you are fighting for your rights in the High Court of Karnataka or structuring your company for global expansion, we are the partners you can trust.
                  </p>
                </section>

                {/* Silicon Valley */}
                <section id="silicon-valley" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Bengaluru: The Innovation & Legal Hub</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                     Bengaluru is distinct in the Indian legal ecosystem. It is the headquarters for some of the world's largest IT firms and home to over 40% of India's tech startups. This concentration of technology creates a high demand for specialized legal services that go beyond traditional litigation.
                   </p>
                   <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200 my-8">
                    <h4 className="font-bold text-xl text-gray-900 mb-4">Why Location Matters</h4>
                    <p className="text-gray-700 mb-4">
                      Our physical presence in Bengaluru allows us to effectively serve clients across key zones:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Central Business District (CBD):</strong> Proximity to the High Court, NCLT, and corporate headquarters on MG Road/Lavender Road.</li>
                      <li><strong>Tech Corridors:</strong> Assessing the needs of clients in Electronic City, Whitefield, and Outer Ring Road.</li>
                      <li><strong>Startup Hubs:</strong> Rapid response for clients in Koramangala, Indiranagar, and HSR Layout.</li>
                    </ul>
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700">
                    Furthermore, the <strong>High Court of Karnataka</strong> is known for its progressive stance on digital rights and corporate governance, setting precedents that are followed nationwide.
                  </p>
                </section>

                {/* Why You Need an Expert */}
                <section id="why-need-expert" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">The Cost of Legal Oversight</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    In a fast-moving city like Bengaluru, skipping legal due diligence or choosing inexperienced counsel can have disastrous consequences. The cost of correcting a legal mistake is often ten times the cost of preventing it.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                     <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                        <h4 className="font-bold text-red-800 mb-2">Property Traps</h4>
                        <p className="text-sm text-gray-700">Buying a 'B' Khata property without understanding the implications or investing in lakeshore land without environmental clearance can lead to demolition or litigation.</p>
                     </div>
                     <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                        <h4 className="font-bold text-red-800 mb-2">Startup Equity Mistakes</h4>
                        <p className="text-sm text-gray-700">Poorly drafted co-founder agreements can paralyze a company when it scales. We see founders losing control of their own companies due to bad advice.</p>
                     </div>
                     <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                        <h4 className="font-bold text-red-800 mb-2">Litigation Delays</h4>
                        <p className="text-sm text-gray-700">Filing a case in the wrong court jurisdiction in Bengaluru (e.g., filing a commercial suit in a regular civil court) can waste years.</p>
                     </div>
                     <div className="p-6 bg-red-50 rounded-xl border border-red-100">
                        <h4 className="font-bold text-red-800 mb-2">Compliance Penalties</h4>
                        <p className="text-sm text-gray-700">Ignore labor laws or sexual harassment (POSH) compliance, and your company could face massive fines and reputational damage.</p>
                     </div>
                  </div>
                </section>

                 {/* Practice Areas Overview */}
                <section id="practice-areas" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Key Practice Areas</h2>
                  <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                    We offer a full spectrum of legal services tailored to the specific needs of Bengaluru's residents and businesses.
                  </p>
                </section>

                {/* Section: Startup Law */}
                <section id="startup-law" className="scroll-mt-32">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Startups & Corporate Law</h3>
                  <p className="text-lg leading-relaxed mb-4 text-gray-700">
                    We are deeply embedded in the Bengaluru startup ecosystem. We don't just draft documents; we help structure your business for success.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-3">➤</span>
                        <div className="text-gray-700"><strong>Incorporation & Structure:</strong> Advising on Private Limited vs LLP, dealing with MCA filings, and ensuring FEMA compliance for foreign direct investment (FDI).</div>
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-3">➤</span>
                        <div className="text-gray-700"><strong>Founder Dynamics:</strong> Drafting robust Co-Founders Agreements that clearly define roles, vesting schedules, and exit scenarios.</div>
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-3">➤</span>
                        <div className="text-gray-700"><strong>Fundraising:</strong> Managing the legal legwork for Seed, Angel, and Series A/B rounds. We review Term Sheets, Shareholders Agreements (SHA), and Subscription Agreements (SSA).</div>
                    </li>
                    <li className="flex items-start">
                        <span className="text-[#D2A02A] font-bold mr-3">➤</span>
                        <div className="text-gray-700"><strong>Intellectual Property:</strong> Filing Trademarks and Patents to protect your brand and tech. We also enforce IP rights against infringers in the Commercial Courts.</div>
                    </li>
                  </ul>
                </section>

                {/* Section: Real Estate */}
                <section id="real-estate" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Real Estate, RERA & Property Law</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Property law in Bengaluru is unique due to the overlapping jurisdictions of BBMP, BDA, BMRDA, and DTCP.
                   </p>
                   <div className="mb-4">
                     <h4 className="font-bold text-gray-900 mb-2">Khata & Title Verification</h4>
                     <p className="text-gray-700 text-sm">
                       The infamous 'A' Khata vs 'B' Khata distinction is crucial. We conduct deep due diligence (tracing title for 30+ years) to ensure you aren't buying a property with legal defects or on encroached land (Raja Kaluve).
                     </p>
                   </div>
                   <div className="mb-4">
                     <h4 className="font-bold text-gray-900 mb-2">RERA Karnataka Litigation</h4>
                     <p className="text-gray-700 text-sm">
                       We aggressively represent homebuyers against erratic builders. If your project is delayed, we file complaints with RERA Karnataka for refund with interest or immediate possession. We also assist in execution of RERA orders.
                     </p>
                   </div>
                   <div>
                     <h4 className="font-bold text-gray-900 mb-2">Civil Property Disputes</h4>
                     <p className="text-gray-700 text-sm">
                       We handle Partition Suits for ancestral property, Declaration Suits to establish title, and Permanent Injunction suits to protect possession against illegal trespassers.
                     </p>
                   </div>
                </section>

                {/* Section: Litigation */}
                <section id="litigation" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Civil Litigation & Dispute Resolution</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Our litigation team is a formidable presence in the Karnataka courts. We understand that litigation is a means to an end, and our strategy is always focused on the client's commercial or personal objective.
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
                     <li><strong>Commercial Suits:</strong> Handling high-value business disputes in the dedicated Commercial Courts in Bengaluru.</li>
                     <li><strong>Money Recovery:</strong> Filing suits under Order 37 ('Summary Suit') for faster recovery of dues.</li>
                     <li><strong>Injunctions:</strong> obtain immediate interim relief (stay orders) to prevent irreparable harm.</li>
                     <li><strong>Writ Jurisdiction:</strong> Filing Writ Petitions in the High Court against arbitrary actions of state authorities like BBMP, BDA, or the Police.</li>
                   </ul>
                </section>

                {/* Section: Criminal Defense */}
                <section id="criminal-defense" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Criminal Defense & Cyber Crime</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Facing a criminal charge can be terrifying. We provide immediate assistance for bail (Regular and Anticipatory) and robust defense during trials.
                   </p>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     <strong>Cyber Crime Specialization:</strong> With Bengaluru being the IT capital, cyber crimes are rampant. We handle:
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                     <li>Data Theft & Hacking cases.</li>
                     <li>Online Banking Fraud & Phishing.</li>
                     <li>Cyber Stalking & Harassment.</li>
                     <li>Identity Theft.</li>
                   </ul>
                   <p className="text-lg leading-relaxed text-gray-700">
                     We work closely with the Cyber Crime Police Stations to register FIRs for victims and defend the accused against false allegations.
                   </p>
                </section>

                {/* Section: Family Law */}
                <section id="family-law" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Family & Matrimonial Law</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     We handle sensitive family matters with the dignity and privacy they deserve. Our team appears regularly at the Family Courts in Nyaya Degula and Mayo Hall.
                   </p>
                   <div className="grid md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 p-4 rounded-lg">
                        <strong className="block text-gray-900 mb-2">Divorce</strong>
                        <p className="text-sm text-gray-600">Expert handling of Contest Divorce (Cruelty, Desertion) and Mutual Consent Divorce. We also handle annulment of marriages.</p>
                      </div>
                      <div className="border border-gray-200 p-4 rounded-lg">
                        <strong className="block text-gray-900 mb-2">498A Defense</strong>
                        <p className="text-sm text-gray-600">Strategic defense against misuse of Section 498A (Dowry Harassment) and Domestic Violence Act provisions.</p>
                      </div>
                      <div className="border border-gray-200 p-4 rounded-lg">
                        <strong className="block text-gray-900 mb-2">Child Custody</strong>
                        <p className="text-sm text-gray-600">Representing parents in intense custody battles, focusing on visitation rights and joint parenting plans.</p>
                      </div>
                      <div className="border border-gray-200 p-4 rounded-lg">
                        <strong className="block text-gray-900 mb-2">Maintenance</strong>
                        <p className="text-sm text-gray-600">Ensuring appropriate maintenance/alimony is awarded or defending against exorbitant claims.</p>
                      </div>
                   </div>
                </section>

                {/* Section: Employment Law */}
                <section id="employment-law" className="scroll-mt-32">
                   <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-gray-50 p-4 rounded-lg">Labor & Employment Law</h3>
                   <p className="text-lg leading-relaxed mb-4 text-gray-700">
                     Employment disputes are rising in the gig economy and tech sector. We advise on:
                   </p>
                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
                     <li><strong>Employment Contracts:</strong> Analyzing and drafting Offer Letters, NDA, and Non-Compete agreements.</li>
                     <li><strong>Termination Disputes:</strong> Challenging wrongful termination and unlawful layoffs/retrenchment in Labor Courts.</li>
                     <li><strong>POSH:</strong> Assisting companies in setting up Internal Complaints Committees (ICC) and conducting inquiries into sexual harassment complaints.</li>
                   </ul>
                </section>

                {/* Courts Guide */}
                <section id="courts-guide" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Guide to Courts in Bengaluru</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    Understanding the jurisdiction is half the battle. Here are the key forums where we advocate for you.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold text-sm">HC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">High Court of Karnataka</h4>
                        <p className="text-gray-700 text-sm mt-1">Located in the majestic 'Attara Kacheri' opposite Vidhana Soudha. It has jurisdiction over the entire state. We handle Appeals, Writs, and Company matters here.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#1a202c] text-white rounded-full flex items-center justify-center font-bold text-sm">CC</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">City Civil Court Complex</h4>
                        <p className="text-gray-700 text-sm mt-1">Located near Mysore Bank Circle. This is the hub for all civil litigation in Bengaluru Urban district, handling suits for property, money, and injunctions.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold text-sm">MH</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Mayo Hall Courts</h4>
                        <p className="text-gray-700 text-sm mt-1">Located on MG Road. A significant division of the civil and criminal courts operates here, serving the Cantonment and Eastern parts of the city.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gray-500 text-white rounded-full flex items-center justify-center font-bold text-sm">TR</div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">Tribunals (NCLT / DRT / RERA)</h4>
                        <p className="text-gray-700 text-sm mt-1">
                          <strong>NCLT:</strong> Raheja Towers (Corporate Law).<br/>
                          <strong>DRT:</strong> Residency Road (Bank Recovery).<br/>
                          <strong>RERA:</strong> KH Road (Real Estate Complaints).
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Our Approach */}
                <section id="our-approach" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">The AMA Approach</h2>
                   <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">
                     We combine the rigor of a traditional law firm with the agility of a startup. Our approach is client-centric, tech-savvy, and result-driven.
                   </p>
                   
                   <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">🧠</div>
                        <h4 className="font-bold text-gray-900">Strategic Thinking</h4>
                        <p className="text-xs text-gray-600 mt-2">We don't just file cases; we plan them. We map out the endgame before the first hearing.</p>
                      </div>
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">⚡</div>
                        <h4 className="font-bold text-gray-900">Swift Action</h4>
                        <p className="text-xs text-gray-600 mt-2">In matters like stay orders or bail, speed is everything. Our team can mobilize instantly.</p>
                      </div>
                      <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">🔍</div>
                        <h4 className="font-bold text-gray-900">Tech Enabled</h4>
                        <p className="text-xs text-gray-600 mt-2">We use technology for case tracking and research, ensuring efficiency and cost-effectiveness.</p>
                      </div>
                       <div className="p-4 border rounded-xl hover:shadow-lg transition-all">
                        <div className="text-3xl mb-2">⚖️</div>
                        <h4 className="font-bold text-gray-900">Ethical Practice</h4>
                        <p className="text-xs text-gray-600 mt-2">Honesty is our currency. We will give you a realistic assessment, not false hope.</p>
                      </div>
                   </div>
                </section>

                {/* Why AMA */}
                <section id="why-ama" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 border-l-8 border-[#D2A02A] pl-4">Why Bengaluru Chooses AMA?</h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    In a city with thousands of lawyers, we stand out because we care.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Local Expertise</h3>
                      <p className="text-gray-600 relative z-10">We know how the local registries worked, how to navigate the BBMP, and the nuances of Karnataka State laws.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Diverse Team</h3>
                      <p className="text-gray-600 relative z-10">Our team speaks Kannada, Tamil, Telugu, Hindi, and English fluently, breaking language barriers for our clients.</p>
                    </div>
                    <div className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#D2A02A] transition-colors relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D2A02A]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
                      <h3 className="font-bold text-xl mb-3 relative z-10">Proven Results</h3>
                      <p className="text-gray-600 relative z-10">From complex high court appeals to successful startup exits, our track record speaks for itself.</p>
                    </div>
                  </div>
                </section>
                
                 {/* Client Stories */}
                <section id="client-stories" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-8 border-[#D2A02A] pl-4">Client Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "Their understanding of startup equity structuring is phenomenal. Helped us close our seed round with a very clean SHA."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">R</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Rohan Deshpande</p>
                          <p className="text-xs text-gray-500">Co-Founder, Fintech Startup</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "We had a nightmare issue with a 'B' Khata property in Whitefield. AMA Legal Solutions guided us through the regularization process perfectly."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">P</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Priya Menon</p>
                          <p className="text-xs text-gray-500">IT Professional</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "Highly competent lawyers for Karnataka High Court matters. They got our writ petition allowed in record time."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">S</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Suresh Reddy</p>
                          <p className="text-xs text-gray-500">Business Owner</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10 text-sm">
                        "Very professional approach to family court cases. They handled my divorce petition with empathy and efficiency."
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3 text-xs">M</div>
                        <div>
                          <p className="font-bold text-gray-900 text-sm">Meghna Gowda</p>
                          <p className="text-xs text-gray-500">Doctor</p>
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
                  <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('/bannerbg.png')"}}></div>
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Expert Legal Help is Just a Call Away</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto text-gray-300">
                      Don't let legal troubles overwhelm you. We are here to guide, protect, and defend you. Partner with Bengaluru's trusted legal experts today.
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
                    Connect with our senior advocates in Bengaluru today regarding your case.
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
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
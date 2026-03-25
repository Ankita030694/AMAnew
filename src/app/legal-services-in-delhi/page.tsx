import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What legal services are most in demand in Delhi?",
    answer: "As the national capital, Delhi has a high demand for a variety of legal services. These include corporate law for the numerous business hubs, real estate litigation involving DDA and private developers, family law matters in the various district courts, and criminal defense. AMA Legal Solutions provides comprehensive representation in all these areas, leveraging our deep understanding of the Delhi judicial system."
  },
  {
    question: "Which is the best law firm in Delhi for Supreme Court matters?",
    answer: "Selecting the best firm depends on your specific case. AMA Legal Solutions has a dedicated team of advocates who represent clients in the Supreme Court of India. We handle complex constitutional matters, civil appeals, and criminal SLPs. Our strategic location and proximity to the apex court allow us to provide timely and effective legal support for matters of national importance."
  },
  {
    question: "How do I handle a property dispute with the DDA in Delhi?",
    answer: "Disputes with the Delhi Development Authority (DDA) often involve issues related to allotment, leasehold conversion, or unauthorized construction. It is essential to have a lawyer who understands the specific DDA regulations. AMA Legal Solutions has extensive experience in handling DDA related litigation, representing clients in the High Court and before the relevant administrative authorities to protect their property rights."
  },
  {
    question: "What is the procedure for filing a divorce in Delhi courts?",
    answer: "Divorce in Delhi can be filed in the family court having jurisdiction over your area (such as Saket, Dwarka, or Rohini). The process typically begins with filing a petition for either mutual consent or on contested grounds. AMA Legal Solutions guides you through every step, from drafting the petition and settlement deeds to representing you in court, ensuring that your interests and those of your family are prioritized."
  },
  {
    question: "Can I get help with a cheque bounce case in Delhi?",
    answer: "Yes, cheque bounce cases under Section 138 of the Negotiable Instruments Act are very common in Delhi. AMA Legal Solutions provides swift legal action for both complainants and defendants. We handle the process of sending legal notices, filing complaints in the appropriate metropolitan magistrate court, and representing you through the trial to ensure a fast and effective resolution."
  },
  {
    question: "Are there specialized cyber crime lawyers in Delhi?",
    answer: "Delhi has a dedicated Cyber Crime Unit to handle the increasing number of digital offenses. AMA Legal Solutions has experts who specialize in cyber law, assisting clients with cases of online fraud, data breaches, and digital harassment. We help in filing complaints with the Cyber Cell and provide robust legal representation in court, ensuring compliance with the Information Technology Act."
  },
  {
    question: "How does the Delhi High Court handle commercial disputes?",
    answer: "The Delhi High Court has a dedicated commercial division that handles high value business disputes under the Commercial Courts Act. This ensures a more streamlined and faster resolution process. AMA Legal Solutions represents corporate clients in the High Court for matters related to breach of contract, intellectual property infringement, and arbitration, providing the high level expertise required for commercial litigation."
  },
  {
    question: "Where can I find free legal aid in Delhi?",
    answer: "The Delhi State Legal Services Authority (DSLSA) provides free legal aid to eligible individuals, including women, children, and those from weake sections of society. For those who can afford professional representation but seek expert guidance, AMA Legal Solutions offers initial consultations to help you understand your legal standing and choose the best path forward for your case."
  },
  {
    question: "What should I do if I receive a legal notice in Delhi?",
    answer: "If you receive a legal notice, do not panic but do not ignore it. It is critical to consult a lawyer immediately to draft a proper reply. A well drafted reply can often prevent a matter from escalating into a full blown court case. AMA Legal Solutions assists clients in responding to various legal notices, including those related to property, employment, and matrimonial disputes, protecting your rights from the very beginning."
  },
  {
    question: "Why choose AMA Legal Solutions for legal matters in Delhi?",
    answer: "AMA Legal Solutions offers a combination of local expertise, professional integrity, and a client centric approach. Our advocates have a strong presence in all Delhi courts, including the High Court and District Courts. We provide transparent fee structures, direct access to senior counsel, and a commitment to achieving the best possible results through a strategic and compassionate approach to the law."
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
      "name": "Legal Services in Delhi",
      "item": "https://www.amalegalsolutions.com/legal-services-in-delhi"
    }
  ]
};

// Article Schema
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Top Legal Services in Delhi: Expert Law Firm for All Your Needs",
  "description": "Looking for the best legal services in Delhi? AMA Legal Solutions offers expert legal representation in Corporate, Civil, Criminal, Family, and Property Law. Top lawyers in Delhi.",
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
  "datePublished": "2026-02-14",
  "dateModified": "2026-02-14"
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
  "name": "Legal Services Delhi",
  "image": "https://www.amalegalsolutions.com/services/3.png",
  "description": "Premier legal services in Delhi region.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2500"
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
        "name": "Rajesh Khanna"
      },
      "reviewBody": "Excellent legal support! AMA Legal Solutions handled my DDA property dispute in Delhi with great professionalism. Their team helped me get my allotment restored."
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Sonia Verma"
      },
      "reviewBody": "I highly recommend AMA Legal Solutions for family matters. They handled our mutual divorce in Saket Court very efficiently. Best law firm in Delhi."
    }
  ]
};

export const metadata = {
  title: "Best Legal Services in Delhi | Top Law Firm & Lawyers in Delhi NCR",
  description:
    "AMA Legal Solutions is a leading law firm in Delhi providing expert legal services in Corporate, Civil, Criminal, Family, and Property Law. Consult with top advocates in Delhi High Court and District Courts.",
  keywords: [
    "legal services in delhi",
    "law firm in delhi",
    "best lawyer in delhi",
    "corporate lawyer delhi",
    "divorce lawyer delhi",
    "property lawyer delhi",
    "criminal lawyer delhi",
    "supreme court advocate",
    "delhi high court lawyer",
    "top law firm delhi"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/legal-services-in-delhi',
  },
  openGraph: {
    title: "Best Legal Services in Delhi | Top Law Firm & Lawyers in Delhi NCR",
    description: "AMA Legal Solutions is a leading law firm in Delhi providing expert legal services in Corporate, Civil, Criminal, Family, and Property Law.",
    url: "https://www.amalegalsolutions.com/legal-services-in-delhi",
    type: "website",
    images: [
      {
        url: "/services/3.png",
        width: 1200,
        height: 630,
        alt: "Best Legal Services in Delhi",
      },
    ],
  },
};

export default function LegalServicesInDelhiPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "delhi-legal-ecosystem", title: "Delhi's Legal Ecosystem" },
    { id: "supreme-high-court", title: "Supreme & High Court" },
    { id: "dda-mcd-disputes", title: "DDA & MCD Property Issues" },
    { id: "corporate-law-delhi", title: "Corporate & Business Law" },
    { id: "family-law-delhi", title: "Family & Divorce Law" },
    { id: "criminal-defense-delhi", title: "Criminal Defense Lawyers" },
    { id: "cyber-law-delhi", title: "Cyber Law & Digital Security" },
    { id: "district-courts-delhi", title: "Delhi District Courts" },
    { id: "banking-finance-delhi", title: "Banking & Debt Recovery" },
    { id: "startup-legal-delhi", title: "Startup & IPR Support" },
    { id: "labor-employment-delhi", title: "Labor & Employment Law" },
    { id: "civil-dispute-delhi", title: "Civil Litigation" },
    { id: "why-hire-us-delhi", title: "Why Hire Our Delhi Team" },
    { id: "legal-process-delhi", title: "Our Working Process" },
    { id: "faqs-delhi", title: "Frequently Asked Questions" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Legal Services in Delhi", href: "/legal-services-in-delhi" },
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
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ background: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Expert <span className="text-[#D2A02A]">Legal Services in Delhi</span>: Your Justice Is Our Priority
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Providing World Class Legal Representation Across the National Capital. From the Supreme Court to District Benches, We Protect Your Future.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Book a Free Consultation
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
                <h3 className="text-lg font-bold mb-4 px-2 text-gray-900 border-b pb-2">On This Page</h3>
                <TableOfContents sections={tocSections} orientation="vertical" />
              </div>
            </div>

            {/* Middle Column: Main Content */}
            <div className="min-w-0">
               {/* Mobile TOC */}
               <div className="lg:hidden mb-6 sticky top-20 z-10">
                 <TableOfContents sections={tocSections} />
               </div>

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-12 md:space-y-20">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Professional Legal Services in Delhi: Navigating the Capital's Complex Laws</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      Delhi, the capital of India, is the epicenter of the nation's legal and political power. It is home to the ultimate judicial authority, the Supreme Court of India, along with one of the most prestigious High Courts in the country. This concentration of power makes Delhi's legal environment both unique and highly complex. Whether you are a resident of the city, a business based in Connaught Place, or an international entity looking for representation in the apex court, finding the right <strong>legal services in Delhi</strong> is the first step toward securing justice. AMA Legal Solutions is a premier law firm with a deep commitment to serving the diverse legal needs of the national capital region.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      The legal landscape of Delhi is marked by its vast judicial infrastructure, consisting of several district courts across the city, specialized tribunals, and the apex court itself. Each of these institutions has its own set of procedures and traditions. As a leading <strong>law firm in Delhi</strong>, we have built a team of highly qualified advocates who have a strong presence in all these forums. We understand the nuances of practicing in the different district courts, from Saket in the south to Rohini in the north, and we bring this extensive local knowledge to every case we handle. Our goal is to provide strategic and effective legal solutions that are tailored to the specific needs of our Delhi clients.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      In the following sections, we will delve into the various areas of law that are most relevant to those living and working in Delhi. From complex real estate matters involving the <strong>Delhi Development Authority (DDA)</strong> to high stakes corporate litigation and sensitive family law issues, we cover all ground. Our approach is based on a foundation of professional excellence, integrity, and a result oriented mindset. We believe in providing our clients with the highest level of legal advocacy, ensuring that their voices are heard and their rights are protected in the capital's judicial system.
                    </p>
                  </div>
                </section>

                {/* Delhi Legal Ecosystem */}
                <section id="delhi-legal-ecosystem" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">The Vast Judicial Ecosystem of India's Capital</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      Delhi's legal ecosystem is as diverse as the city itself. It is anchored by the Supreme Court of India, located in the heart of the city, which serves as the final arbiter of law in the country. Just a few kilometers away is the Delhi High Court, known for its expertise in commercial and intellectual property matters. Below the High Court are several district courts that handle the majority of the city's civil and criminal caseload. These include the Saket Court, Patiala House Court, Rohini Court, Dwarka Court, and Karkardooma Court. Each court has its own jurisdiction based on the geography of the city, and having a lawyer who is familiar with all of them is a significant advantage.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      In addition to the traditional courts, Delhi is home to numerous specialized tribunals that handle specific types of disputes. These include the National Company Law Tribunal (NCLT) for corporate matters, the Debt Recovery Tribunal (DRT) for banking issues, and the National Green Tribunal (NGT) for environmental cases. Navigating this web of judicial and quasi judicial bodies requires a law firm with broad expertise and deep experience. At AMA Legal Solutions, we pride ourselves on being a full service <strong>law firm in Delhi</strong>, capable of representing our clients in any forum or court in the city.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      The role of local authorities such as the <strong>Delhi Development Authority (DDA)</strong> and the <strong>Municipal Corporation of Delhi (MCD)</strong> cannot be overstated. These bodies are central to the functioning of the city, and their regulations often have significant legal implications for property owners and businesses. Many legal disputes in Delhi arise from issues related to land allotment, property taxes, and building bylaw violations. As experts in <strong>legal services in Delhi</strong>, we have extensive experience in dealing with these authorities, helping our clients navigate the complexities of local regulations and protecting their interests in administrative and judicial proceedings.
                    </p>
                  </div>
                </section>

                {/* Supreme & High Court */}
                <section id="supreme-high-court" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Representation in the Supreme Court and Delhi High Court</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      Practicing in the <strong>Supreme Court of India</strong> requires a unique set of skills and a deep understanding of constitutional law. Our team includes Advocates on Record (AOR) who are authorized to file and pursue matters in the apex court. We handle a wide range of cases in the Supreme Court, including Special Leave Petitions (SLPs), Transfer Petitions, and Writ Petitions. We assist clients from all over India who seek representation in the highest court of the land, providing them with the expert guidance and strategic advocacy necessary for success at this level.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      The <strong>Delhi High Court</strong> is equally significant, particularly for commercial and civil matters. It is known for its efficiency and its willingness to adopt modern judicial practices. Our High Court advocates specialize in commercial litigation, intellectual property rights, and complex civil appeals. We represent businesses and individuals in cases involving breach of contract, patent infringement, and administrative law. The High Court also has original jurisdiction over certain high value commercial matters, and we have a proven track record of delivering results for our clients in this prestigious forum.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      Whether you are pursuing a matter in the Supreme Court or the High Court, AMA Legal Solutions provides a level of expertise that is unmatched. We meticulously prepare for every hearing, ensuring that all legal arguments are thoroughly researched and effectively presented. Our strategic location in Delhi allows us to provide timely support for urgent matters, and our commitment to professional excellence ensures that your case is in the most capable hands. For the <strong>best legal representation in Delhi high courts</strong>, trust AMA Legal Solutions.
                    </p>
                  </div>
                </section>

                {/* DDA & MCD Property Issues */}
                <section id="dda-mcd-disputes" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">DDA and MCD Related Property Legal Support</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      Property in Delhi is a highly valuable but also highly contentious asset. Many property related legal issues in the city involve the <strong>Delhi Development Authority (DDA)</strong>. Disputes over land allotment, conversion of leasehold to freehold, and cancellation of allotments are common. AMA Legal Solutions has a specialized practice area dedicated to <strong>DDA property disputes in Delhi</strong>. We assist clients in challenging arbitrary decisions of the authority and in securing their property rights through administrative appeals and writ petitions in the High Court.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      Similarly, the <strong>Municipal Corporation of Delhi (MCD)</strong> plays a central role in property management, particularly regarding building bylaws and unauthorized construction. Receiving a demolition or sealing notice from the MCD can be a highly stressful experience. Our property lawyers provide immediate legal assistance to stay such notices and challenge their validity in the court or before the MCD Appellate Tribunal. We also assist in regularizing unauthorized constructions wherever possible, helping you save your investment from local authority action.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      We also provide essential property title verification and due diligence services in Delhi. Before you buy a property in the capital, it is critical to ensure that it has a clear title and all necessary approvals from the DDA and MCD. We conduct comprehensive searches at the sub registrar offices and verify the records of the local authorities, providing you with a detailed report that minimizes your legal risk. Our property documentation team also handles the drafting and registration of sale deeds, lease agreements, and partition deeds, ensuring that your property transactions are legally sound and protected against future disputes.
                    </p>
                  </div>
                </section>

                {/* Corporate Law Delhi */}
                <section id="corporate-law-delhi" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Corporate and Commercial Legal Services in Delhi</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      As the commercial hub of the region, Delhi is home to a vast array of businesses, from established multi national corporations to innovative startups. At AMA Legal Solutions, we offer comprehensive <strong>corporate legal services in Delhi</strong>, assisting businesses at every stage of their lifecycle. We handle company incorporation, drafting of intricate commercial contracts, and provide ongoing advice on regulatory compliance. Our corporate team understands the dynamic business environment of Delhi and provides legal solutions that are both proactive and practical.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      Mergers and Acquisitions (M&A) is another area of our expertise. We assist our clients in due diligence, deal structuring, and the preparation of all necessary documentation. We also represent clients before the National Company Law Tribunal (NCLT) in matters related to insolvency and company law disputes. Our approach is to help businesses navigate the legal complexities of the Indian market while ensuring their interests are fully protected. Whether you are a large corporate entity or an entrepreneur starting your first venture, we provide the same high level of dedication and legal expertise.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      Intellectual Property is often a business's most valuable asset. We help our Delhi clients protect their brands, innovations, and creative works through trademark registration, patent filing, and copyright protection. We also provide litigation support in case of IP infringement, helping you protect your intellectual property from unauthorized use in the competitive Delhi market. Having a strong legal partner like AMA Legal Solutions allows your business to function with confidence in the national capital.
                    </p>
                  </div>
                </section>

                {/* Family Law Delhi */}
                <section id="family-law-delhi" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Family and Divorce Judicial Support in Delhi</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      Family law issues are among the most sensitive matters we handle. At AMA Legal Solutions, we approach every <strong>family law case in Delhi</strong> with the compassion and sensitivity it deserves. Our family lawyers have extensive experience in handling matters related to divorce, child custody, alimony, and the division of marital property. We understand the emotional toll that these proceedings can take and work to achieve a resolution that is in the best interest of our clients and their families.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      For couples seeking a mutual consent divorce in Delhi, we facilitate a process that is both efficient and dignified. We assist in drafting the settlement agreement and represent you in the family court to ensure a smooth transition. In cases of contested divorce, we provide strong and strategic representation, ensuring that your rights are upheld and your voice is heard throughout the proceedings. We also specialize in cases related to domestic violence and maintenance, providing the necessary legal protection for vulnerable individuals in Delhi.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      Child custody is often the most contentious part of a divorce. Our child custody lawyers are dedicated to protecting the welfare of the child while ensuring the parental rights of our clients. We work to develop custody and visitation arrangements that provide a stable environment for the child. Whether you are dealing with a complex divorce or a simple name change procedure, AMA Legal Solutions offers the <strong>best family legal services in Delhi</strong>, combining world class legal expertise with a deeply personal touch.
                    </p>
                  </div>
                </section>

                {/* Criminal Defense Delhi */}
                <section id="criminal-defense-delhi" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Expert Criminal Defense Lawyers in Delhi</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      If you are facing a criminal charge in Delhi, you need an advocate who is aggressive, strategic, and deeply knowledgeable about criminal procedure. AMA Legal Solutions has a team of seasoned <strong>criminal defense lawyers in Delhi</strong> who represent clients in all the district courts and the High Court. We handle a wide range of criminal matters, from white collar crimes and corporate fraud to matrimonial criminal cases under Section 498A and serious offenses like assault or theft.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      Our criminal law practice covers every stage of the legal process, from the filing of an FIR to bail applications, trials, and appeals. We have a thorough understanding of the Indian Penal Code (IPC) and the Criminal Procedure Code (CrPC), allowing us to build a strong defense for our clients. We specialize in obtaining both regular and anticipatory bail, ensuring that our clients' liberty is protected while the case proceeds. We also have expertise in quashing FIRs through the High Court in appropriate circumstances.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      Cheque bounce cases under Section 138 of the Negotiable Instruments Act are increasingly frequent in Delhi's commercial environment. We provide rapid legal action for the recovery of funds and robust defense for those accused of default. Our criminal lawyers understand that their reputation and future are at stake in every case, and we work tirelessly to achieve the best possible outcome. For the <strong>top criminal advocates in Delhi</strong>, AMA Legal Solutions is the firm you can trust.
                    </p>
                  </div>
                </section>

                {/* Cyber Law Delhi */}
                <section id="cyber-law-delhi" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Cyber Law and digital Security Legal Assistance</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      In the digital age, cyber threats are a major concern for both individuals and businesses in Delhi. From online financial fraud to data breaches and digital defamation, the number of cyber offenses is on the rise. At AMA Legal Solutions, we have a specialized <strong>cyber law practice in Delhi</strong> that assists clients in navigating this complex and rapidly evolving field. We work with victims of cybercrime to file complaints with the Delhi Police Cyber Cell and provide strong representation in court to bring the perpetrators to justice.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      For corporate clients, we provide essential advice on data protection and privacy compliance. With new data laws coming into effect, it is critical for businesses to ensure that their digital infrastructure is legally compliant. We conduct data privacy audits, draft user agreements and privacy policies, and provide legal support in case of a data breach. Our cyber lawyers combine legal expertise with a deep understanding of technology, providing a comprehensive solution for our clients' digital security needs.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      We also handle legal issues related to e commerce, domain name disputes, and online copyright infringement. In a city where so much of life and business is now online, having expert cyber legal support is essential. AMA Legal Solutions is committed to protecting our clients in the digital frontier, providing the <strong>best cyber legal services in Delhi</strong>.
                    </p>
                  </div>
                </section>

                {/* District Courts Delhi */}
                <section id="district-courts-delhi" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Integrated Representation Across All Delhi District Courts</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      The judicial map of Delhi is divided into several districts, each served by its own major court complex. Successful legal representation requires an advocate who knows the specific terrain of each court. Our team has a daily presence in all major Delhi District Courts:
                    </p>
                    <ul className="list-disc pl-8 space-y-4">
                      <li><strong>Saket Court:</strong> Serving South Delhi and South East Delhi, this is one of the busiest court complexes handling a high volume of civil and criminal cases.</li>
                      <li><strong>Patiala House Court:</strong> Located in the heart of the city, it handles many sensitive and high profile criminal matters.</li>
                      <li><strong>Rohini Court:</strong> Serving North and North West Delhi, it is a key judicial center for the northern half of the city.</li>
                      <li><strong>Dwarka Court:</strong> Serving the Dwarka sub city and South West Delhi, this modern complex handles a vast array of civil and matrimonial matters.</li>
                      <li><strong>Karkardooma Court:</strong> Serving East and North East Delhi, it is the primary judicial forum for the trans Yamuna area.</li>
                      <li><strong>Tis Hazari Court:</strong> One of the oldest and largest court complexes in the city, handling a major portion of Central and North Delhi's legal work.</li>
                    </ul>
                    <p className="text-base md:text-lg leading-relaxed">
                      By having a team that is distributed across these locations, AMA Legal Solutions ensures that your case is always handled by a lawyer who understands the local procedures and has a strong standing in that specific court. This integrated approach allows us to provide consistent and expert <strong>court representation in Delhi</strong>, regardless of where your case is filed.
                    </p>
                  </div>
                </section>

                {/* Banking & Finance */}
                <section id="banking-finance-delhi" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Banking, Finance, and Loan Settlement Services</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      Delhi is the financial hub of Northern India, and its economy is supported by a robust banking sector. AMA Legal Solutions offers specialized <strong>banking legal services in Delhi</strong>, representing financial institutions as well as borrowers. We handle matters related to loan recovery, statutory compliance, and commercial finance. Our team has deep expertise in the SARFAESI Act and the Debt Recovery Tribunal (DRT) procedures, providing effective representation in high value recovery cases.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      A major part of our practice involves <strong>loan settlement</strong>. Many individuals and businesses in Delhi find themselves overwhelmed by debt due to unforeseen financial challenges. Our expert negotiators work with banks and NBFCs to achieve One Time Settlements (OTS) that provide a clean break for our clients. we guide you through the complex world of debt resolution, ensuring that your rights as a borrower are respected while working toward a sustainable financial future.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      We also assist in the legal aspects of project finance, structured lending, and private equity investments. Our banking lawyers meticulously review all loan documentation to ensure risks are mitigated and that our clients' interests are fully protected. Whether you are dealing with a debt recovery issue or looking to secure funding for a new project, AMA Legal Solutions is your trusted partner in Delhi's financial legal space.
                    </p>
                  </div>
                </section>

                {/* Startup & IPR Support */}
                <section id="startup-legal-delhi" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Supporting Delhi's Startup Innovation and IPR</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      Delhi has emerged as one of the leading startup hubs in the country, with a thriving ecosystem supported by government initiatives and a vast pool of talent. Protecting innovation is critical for the success of these new ventures. AMA Legal Solutions provides specialized <strong>startup legal support in Delhi</strong>, focusing on intellectual property protection and early stage compliance. We help founders choose the right legal structure, navigate the process of incorporation, and protect their brands and inventions through trademarks and patents.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      We also assist startups in drafting essential documents like Shareholder Agreements (SHA), Founder Agreements, and Employment Contracts. As the business grows, we provide ongoing support for funding rounds, from term sheet reviews to final documentation. Our goal is to provide startups with the solid legal foundation they need to attract investors and scale their operations. We offer flexible and scalable legal services that understand the unique challenges of the startup world.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      Our IPR practice handles the registration and enforcement of trademarks, copyrights, and patents. We also manage IP portfolios for several established businesses in Delhi, ensuring their intellectual assets are protected across all markets. In a knowledge based economy, your intellectual property is your most valuable competitive advantage, and we are dedicated to its protection. For the <strong>best IPR lawyers in Delhi</strong>, trust the expertise of AMA Legal Solutions.
                    </p>
                  </div>
                </section>

                {/* Labor & Employment Law */}
                <section id="labor-employment-delhi" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Labor and Employment Legal Assistance in Delhi</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      Delhi has a massive workforce spread across its industrial areas and corporate offices. This makes labor and employment law a vital area of practice. AMA Legal Solutions represents both employers and employees in various labor related issues. We handle disputes related to non payment of salary, wrongful termination, and worker compensation in the Delhi Labor Courts and before the Regional Labor Commissioner.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      For businesses, we provide advice on complying with all Indian labor regulations, including the new labor codes. We assist in drafting HR policies, employment manuals, and in handling sensitive internal inquiries related to workplace harassment (POSH). Our proactive compliance approach helps businesses avoid costly litigation and maintain a healthy work environment. We believe that a well regulated workplace is key to organizational success in a competitive city like Delhi.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      For individual employees, we provide a strong voice in case of unfair treatment or breach of contract. Whether you are a corporate executive dealing with a severance issue or an industrial worker seeking your rightful wages, we provide the expert legal representation you need. Our goal is to ensure that the rights of the workforce in Delhi are protected in accordance with the law.
                    </p>
                  </div>
                </section>

                {/* Civil Dispute Delhi */}
                <section id="civil-dispute-delhi" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Civil Litigation and Dispute Resolution in Delhi</h2>
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <p className="text-base md:text-lg leading-relaxed">
                      Civil disputes are common in a city with Delhi's population and commercial intensity. From simple monetary recovery suits to complex inheritance and partition cases, AMA Legal Solutions provides expert representation in <strong>civil litigation in Delhi</strong>. We appear in all civil courts and handling a wide array of matters, including breach of contract, possession of property, and injunctions.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      We believe that litigation should be the last resort. We often assist our clients in achieving resolutions through negotiation and mediation, saving them time and expense. However, when court action is necessary, we provide a robust and well researched representation. Our civil lawyers are experts at drafting pleadings and conducting effective court proceedings. We also handle the execution of court orders, ensuring that the legal victory translates into the recovery of assets or possession of property for our clients.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      Our civil practice also includes specialized matters like trusts and estates, probate of wills, and land acquisition cases. We understand that these disputes often involve family members and require a delicate but firm legal approach. For comprehensive and reliable <strong>civil legal services in Delhi</strong>, AMA Legal Solutions is the partner you can depend on.
                    </p>
                  </div>
                </section>

                {/* Why Hire Our Delhi Team */}
                <section id="why-hire-us-delhi" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-6">Why AMA Legal Solutions is the Best Law Firm for Delhi</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                      <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl mb-6">🏛️</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Deep Capital Presence</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Our advocates are present in every major court in Delhi, from the Supreme Court to the various district benches. We know the local procedures and traditions that can make all the difference in a case.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                      <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl mb-6">🛡️</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Uncompromising Integrity</h3>
                      <p className="text-gray-700 leading-relaxed">
                        We uphold the highest ethical standards in our practice. Transparency and honesty with our clients are the pillars upon which our firm is built. You can trust us to always give you a realistic assessment of your case.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                      <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl mb-6">🚀</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Advocacy</h3>
                      <p className="text-gray-700 leading-relaxed">
                        We don't just follow a process; we develop a strategy. We map out the legal journey for our clients, anticipating challenges and creating opportunities for a favorable resolution.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                      <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-xl mb-6">🤝</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Client Centric Focus</h3>
                      <p className="text-gray-700 leading-relaxed">
                        You are not just a case number to us. We listen to your concerns and treat your matter with the seriousness it deserves. Direct access to our senior advocates ensures you always have the best guidance.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Legal Process */}
                <section id="legal-process-delhi" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 border-l-4 border-[#D2A02A] pl-8">Our Streamlined Working Process for Delhi Cases</h2>
                  <div className="border-l-4 border-[#D2A02A] pl-8 space-y-10 py-4">
                    <div className="relative">
                      <div className="absolute -left-12 top-0 w-8 h-8 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">1</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Initial Case Evaluation</h3>
                      <p className="text-gray-700 leading-relaxed">
                        We begin with a thorough discussion of your case, reviewing all relevant documents and understanding your goals. This allows us to provide an honest assessment of your legal position in the Delhi judicial system.
                      </p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-12 top-0 w-8 h-8 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">2</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Strategy and Planning</h3>
                      <p className="text-gray-700 leading-relaxed">
                         Our experts then formulate a step by step legal plan, identifying the appropriate court and the best legal arguments to present. We provide a clear roadmap for the entire proceeding.
                      </p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-12 top-0 w-8 h-8 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">3</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Vigorous Representation</h3>
                      <p className="text-gray-700 leading-relaxed">
                         We proceed with filing of the necessary petitions and represent you aggressively in court. We keep you informed about every development and are always available for consultation.
                      </p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-12 top-0 w-8 h-8 bg-[#D2A02A] rounded-full flex items-center justify-center text-white font-bold">4</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Efficient Resolution</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Our ultimate goal is to achieve a resolution that meets your objectives in the shortest possible time. We also provide post resolution support to ensure all court orders are properly executed.
                      </p>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs-delhi" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-10 border-l-4 border-[#D2A02A] pl-6">Frequently Asked Questions (FAQs)</h2>
                  <div className="space-y-8">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-start">
                          <span className="text-[#D2A02A] mr-4 text-2xl">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-10 border-l-2 border-[#D2A02A]">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Bottom CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#D2A02A] opacity-10 rounded-full -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D2A02A] opacity-10 rounded-full -ml-32 -mb-32"></div>
                  <div className="relative z-10">
                    <h2 className="text-2xl md:text-5xl font-bold mb-6">Get Expert Legal Counsel in Delhi</h2>
                    <p className="text-base md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Whether it is a matter in the Supreme Court or your local district court, our team is ready to provide you with the professional representation you deserve.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg w-full sm:w-auto">
                          Talk to a Delhi Advocate
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-white hover:bg-gray-100 text-[#1a202c] font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-xl text-lg w-full sm:w-auto flex items-center justify-center">
                          <span className="mr-2">📞</span> +91 8700343611
                        </button>
                      </a>
                    </div>
                  </div>
                </section>

                {/* Extended Content for Word Count */}
                <section className="prose max-w-none text-gray-700 space-y-10">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Excellence in Legal Practice in the National Capital</h2>
                    <p>
                        Our commitment to providing the ultimate <strong>legal services in Delhi</strong> is built on years of experience and thousands of successful cases. We believe that the law is not just a profession but a way to serve the people of this great city. Our team of advocates is passionate about the law and dedicated to achieving justice for our clients. In the fast paced and often overwhelming judicial system of Delhi, we provide the steady hand and the expert guidance you need.
                    </p>
                    <p>
                        The Delhi High Court is one of the most proactive courts in the country, often leading the way in legal innovation. We ensure that our practice is always aligned with the latest legal developments and procedural changes. By leveraging technology and modern case management systems, we provide our clients with faster and more efficient legal services. We believe that quality legal representation should be accessible, and we work to make the judicial process as smooth as possible for our clients.
                    </p>
                    <p>
                        In our real estate practice, we have successfully represented hundreds of clients in disputes with major developers and local authorities like the DDA. We understand the nuances of the Delhi Land Reforms Act and the Delhi Municipal Corporation Act, allowing us to provide expert advice on complex property issues. Whether you are dealing with a title dispute, an illegal demolition, or a conversion issue, our property lawyers have the expertise to protect your investment.
                    </p>
                    <p>
                        Our family law practice is known for its empathetic but firm approach. We understand that matrimonial disputes are life changing events, and we work to ensure that our clients come out of them with their dignity and their rights intact. From the Saket Family Court to the Rohini District Court, our presence across the city ensures that we can handle your case with the local expertise it requires. We are dedicated to providing the <strong>best family legal help in Delhi</strong>.
                    </p>
                    <p>
                        In the corporate sector, we assist a wide range of clients from various industries, including IT, finance, and hospitality. Our commercial lawyers are experts at drafting contracts that minimize legal risk and protect our clients' business interests. We also provide representation in high stakes commercial arbitrations, providing our clients with an alternative to traditional litigation. We help our corporate clients navigate the regulatory landscape of the national capital with ease and confidence.
                    </p>
                    <p>
                        Criminal defense is another pillar of our practice. We believe that everyone is entitled to a fair and robust defense, regardless of the charges against them. Our criminal defense team is meticulous in their preparation, leaving no stone unturned in their efforts to protect our clients' liberty. We have a solid record of achieving bail and successfully defending our clients in the district courts of Delhi.
                    </p>
                    <p>
                        As the capital becomes increasingly digital, our cyber law practice is growing to meet the needs of our clients. We assist companies in ensuring their data handling practices are compliant with the latest regulations and help individuals who have fallen victim to cybercrime. Our integrated approach combines legal knowledge with technical understanding, providing a holistic solution to cyber security and legal compliance.
                    </p>
                    <p>
                        Our presence in all the district courts from Dwarka to Karkardooma ensures that we provide a truly city wide service. This integrated representation is one of the key reasons why AMA Legal Solutions is the preferred choice for many clients in Delhi. We bring the same level of expertise and dedication to every court and every case, ensuring that justice is served across the capital.
                    </p>
                    <p>
                        We also believe in building long term relationships with our clients. Many of the families and businesses we represent have been with us for years, trusting us with all their legal needs. This trust is something we value above all else, and we work every day to earn it. We are not just your lawyers; we are your partners in navigating the legal system of Delhi.
                    </p>
                    <p>
                        In conclusion, the legal needs of a city like Delhi are vast and varied. At AMA Legal Solutions, we are dedicated to meeting those needs with professional excellence and local expertise. Whether you are dealing with a property dispute, a corporate crisis, or a personal family matter, our team of expert advocates is here to guide you. Trust in our experience, and let us help you achieve the justice you deserve in the national capital of India.
                    </p>
                    <p>
                        As we moving into an era of more complex legalities, we remain committed to our founding values of integrity, transparency, and excellence. We continue to evolve our practice to meet the changing needs of the people of Delhi, always putting our clients' interests first. Whether it is in the apex court or a local district bench, AMA Legal Solutions is the name you can trust for all your legal requirements in Delhi.
                    </p>
                    <p>
                        We also actively participate in pro bono initiatives and legal awareness campaigns, believing that the law should be accessible to all sections of society. Our goal is to empower the citizens of Delhi with the knowledge of their rights and the legal support to enforce them. We are proud to be a part of the vibrant legal community of Delhi and are dedicated to its continuous development and improvement.
                    </p>
                    <p>
                        Through our website and mobile application, we provide our clients with easy access to legal information and the ability to track their cases in real time. We believe that technology can greatly improve the transparency and efficiency of legal services. We are dedicated to being the most technologically advanced and client friendly <strong>law firm in Delhi</strong>, setting new standards for legal practice in the capital.
                    </p>
                    <p>
                        Thank you for considering AMA Legal Solutions as your legal partner. We are ready to take on your challenge and work tirelessly toward a successful resolution. Contact us today to learn more about how our expert <strong>legal services in Delhi</strong> can help you secure your rights and your future.
                    </p>
                </section>

              </div>
            </div>

            {/* Right Column: Sticky Sidebar with 2 Containers */}
            <div className="hidden lg:block sticky top-24 space-y-8">
              
              {/* 1st Container: CTA */}
              <div className="bg-[#1a202c] p-8 rounded-2xl shadow-xl border border-gray-700 text-center text-white relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-[#D2A02A]"></div>
                <h3 className="text-2xl font-bold mb-4">Urgent Advice?</h3>
                <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                  Speak to our senior Delhi advocates now for an immediate opinion on your case.
                </p>
                <div className="space-y-4">
                    <a 
                    href="tel:+918700343611" 
                    className="flex items-center justify-center gap-2 w-full bg-[#D2A02A] text-white text-center py-4 rounded-xl font-bold hover:bg-[#b88a22] transition-all transform hover:scale-105 shadow-lg"
                    >
                    <span>📞</span> Talk to us
                    </a>
                    <Link 
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full border-2 border-gray-600 text-white text-center py-4 rounded-xl font-bold hover:bg-white hover:text-[#1a202c] hover:border-white transition-all transform hover:scale-105"
                    >
                    <span>📅</span> Visit our office
                    </Link>
                </div>
              </div>

              {/* 2nd Container: Related Pages */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-6 border-b pb-4 flex items-center">
                    <span className="w-2 h-6 bg-[#D2A02A] rounded-full mr-3"></span>
                    Direct Links
                </h3>
                <ul className="space-y-4">
                  {[
                    { href: "/send-legal-notice-in-delhi", label: "Send Legal Notice" },
                    { href: "/delhi-ncr-law-firm", label: "Best NCR Law Firm" },
                    { href: "/services/loan-settlement/Delhi", label: "Loan Settlement Delhi" },
                    { href: "/services/corporate", label: "Corporate Legal Advice" },
                    { href: "/best-advocate-near-me", label: "Advocates Near You" },
                    { href: "/legal-services-in-gurgaon", label: "Legal Services Gurgaon" },
                    { href: "/legal-services-in-noida", label: "Legal Services Noida" }
                  ].map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href} 
                        className="group text-gray-600 hover:text-[#1a202c] transition-colors flex items-center p-2 rounded-lg hover:bg-[#fff9e6]"
                      >
                        <span className="text-[#D2A02A] mr-3 group-hover:translate-x-1 transition-transform">→</span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile App Promo */}
              <div className="bg-gradient-to-br from-[#D2A02A] to-[#E8B547] p-8 rounded-2xl shadow-lg border border-[#D2A02A] text-white">
                <h4 className="font-bold text-xl mb-4">AMA Legal App</h4>
                <p className="text-sm opacity-90 mb-6">Expert legal opinion at your fingertips. Download now for Delhi lawyers.</p>
                <div className="flex flex-col gap-4">
                    <Link 
                        href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions"
                        className="hover:opacity-90 transition-opacity"
                    >
                        <Image src="/newAssets/appstore.svg" alt="Google Play" width={140} height={40} className="w-full h-auto" />
                    </Link>
                    <Link 
                        href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186"
                        className="hover:opacity-90 transition-opacity"
                    >
                        <Image src="/newAssets/playstore.svg" alt="App Store" width={140} height={40} className="w-full h-auto" />
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

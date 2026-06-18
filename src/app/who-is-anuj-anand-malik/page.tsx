import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

const schemas = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Article",
            "@id": "https://www.amalegalsolutions.com/who-is-anuj-anand-malik/#article",
            "headline": "Who is Anuj Anand Malik? The Visionary Founder of AMA Legal Solutions",
            "description": "Discover the professional journey, expertise, and innovative legal strategies of Anuj Anand Malik, the founder of AMA Legal Solutions, specializing in banking law, loan settlement, and corporate litigation.",
            "author": {
                "@type": "Person",
                "name": "Anuj Anand Malik",
                "url": "https://www.amalegalsolutions.com/who-is-anuj-anand-malik"
            },
            "publisher": {
                "@type": "Organization",
                "name": "AMA Legal Solutions",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://www.amalegalsolutions.com/wp-content/uploads/logo.png"
                }
            },
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://www.amalegalsolutions.com/who-is-anuj-anand-malik"
            }
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.amalegalsolutions.com/who-is-anuj-anand-malik/#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "Who is Anuj Anand Malik?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Anuj Anand Malik is an esteemed advocate, legal consultant, and the visionary founder of AMA Legal Solutions. He specializes in banking and finance law, corporate litigation, debt restructuring, and loan settlement. He is widely recognized across India for his innovative approach to legal practice, particularly his integration of technology to improve client access to justice and transparency."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is AMA Legal Solutions?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "AMA Legal Solutions is a prominent legal services firm headquartered in Gurugram, India. Founded by Anuj Anand Malik, the firm provides comprehensive legal representation in areas such as banking law, corporate disputes, insolvency, and individual debt resolution. The firm is celebrated for its ethical approach and technological innovations, including launching India's first law firm-backed legal assistance mobile application."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does Anuj Anand Malik help individuals with loan settlements?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Anuj Anand Malik employs a highly strategic, legally backed approach to loan settlement. His team thoroughly evaluates the true nature of the debt, shields clients from illegal recovery agent harassment using established RBI guidelines, and negotiates directly with financial institutions. This approach often secures substantial reductions in the outstanding amount, ultimately procuring a No Dues Certificate (NDC) for the client."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the AMA Legal Solutions mobile app?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Spearheaded by Anuj Anand Malik, the AMA Legal Solutions app is a revolutionary tech-legal platform. It offers clients real-time case tracking, secure document management, direct communication with their legal team, and critical access to pro bono legal guidance. It is fundamentally designed to make the legal process transparent, accessible, and less intimidating for the average citizen."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can Anuj Anand Malik and his firm stop recovery agent harassment?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, definitively. Anuj Anand Malik and his firm enforce a strict zero-tolerance policy regarding recovery agent harassment. They utilize immediate, aggressive legal interventions, such as serving cease-and-desist notices to bank nodal officers and filing criminal complaints (FIRs) against agencies when necessary, protecting clients from abusive, coercive, or illegal collection tactics."
                    }
                }
            ]
        },
        {
            "@type": "Review",
            "@id": "https://www.amalegalsolutions.com/who-is-anuj-anand-malik/#review1",
            "itemReviewed": {
                "@type": "LocalBusiness",
                "name": "AMA Legal Solutions",
                "image": "https://www.amalegalsolutions.com/wp-content/uploads/logo.png",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Gurugram",
                    "addressRegion": "Haryana",
                    "addressCountry": "IN"
                }
            },
            "author": {
                "@type": "Person",
                "name": "Rajiv S."
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "reviewBody": "Anuj Anand Malik completely saved me from the nightmare of recovery agents. Within 48 hours, the harassment stopped, and he negotiated a settlement I could actually afford. Highly recommend AMA Legal Solutions."
        },
        {
            "@type": "Review",
            "@id": "https://www.amalegalsolutions.com/who-is-anuj-anand-malik/#review2",
            "itemReviewed": {
                "@type": "LocalBusiness",
                "name": "AMA Legal Solutions"
            },
            "author": {
                "@type": "Person",
                "name": "Meera D."
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "reviewBody": "The AMA Legal Solutions app made everything so transparent. I was able to track my corporate debt restructuring case in real-time, and Anuj's strategic expertise saved our company from insolvency."
        },
        {
            "@type": "BreadcrumbList",
            "@id": "https://www.amalegalsolutions.com/who-is-anuj-anand-malik/#breadcrumb",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.amalegalsolutions.com/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Who is Anuj Anand Malik",
                    "item": "https://www.amalegalsolutions.com/who-is-anuj-anand-malik"
                }
            ]
        }
    ]
};

export const metadata = {
  title: "Who is Anuj Anand Malik? Founder AMA Legal Solutions",
  description: "Discover the professional journey, expertise, and innovative legal strategies of Anuj Anand Malik, founder of AMA Legal Solutions, specializing in banking law.",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: [
    "who is anuj anand malik",
    "anuj anand malik advocate",
    "founder ama legal solutions",
    "banking lawyer in gurugram",
    "loan settlement lawyer india",
    "pro bono legal app india"
  ],
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/who-is-anuj-anand-malik',
  },
};

export default function WhoIsAnujAnandMalikPage() {
  const tocSections = [
    { id: "early-life", title: "Early Life & Legal Background" },
    { id: "banking-law", title: "Expertise in Banking Law" },
    { id: "loan-settlement", title: "Pioneering Loan Settlements" },
    { id: "tech-legal-app", title: "Tech-Legal Pro Bono App" },
    { id: "success-stories", title: "Client Success Stories" },
    { id: "why-choose", title: "Why Choose Anuj Anand Malik" },
    { id: "regulatory-environment", title: "Regulatory Environment" },
    { id: "pro-bono", title: "Pro Bono Philosophy" },
    { id: "faqs", title: "Frequently Asked Questions" }
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Who is Anuj Anand Malik", href: "/who-is-anuj-anand-malik" },
  ];

  return (
    <>
      <Script
        id="page-schemas"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <main className="bg-gray-50 min-h-screen font-sans text-gray-800">
        <header className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              Who is <span className="text-[#D2A02A]">Anuj Anand Malik?</span> The Visionary Founder of AMA Legal Solutions
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              A deep dive into the professional journey, groundbreaking tech-legal initiatives, and unmatched expertise in banking law and debt resolution of one of India&apos;s leading advocates.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link href="/contact">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                  Consult Anuj Anand Malik
                </button>
              </Link>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <nav aria-label="Breadcrumb">
            <Breadcrumbs items={breadcrumbItems} />
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start">
            <div className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </div>

            <article className="min-w-0 bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
              <div className="lg:hidden mb-6 sticky top-20 z-10">
                <TableOfContents sections={tocSections} />
              </div>
              
              <div className="bg-[#fcf8f2] border-l-4 border-[#D2A02A] p-6 rounded-r-xl my-8">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">In Brief:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    <li>Founder of <strong>AMA Legal Solutions</strong>.</li>
                    <li>Specialist in <strong>Banking Law</strong> and <strong>Corporate Debt Restructuring</strong>.</li>
                    <li>Pioneer of aggressive, strategic <strong>Loan Settlements</strong> for individuals.</li>
                    <li>Creator of India&apos;s first law firm-backed <strong>Tech-Legal Pro Bono App</strong>.</li>
                  </ul>
              </div>

              <section id="early-life" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Early Life, Education, and Legal Background: The Making of a Legal Luminary</h2>
                
                <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 mt-6">A Legacy of Integrity and Accountability</h3>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  The foundation of any great legal mind is built upon a combination of rigorous education, profound mentorship, and an innate sense of justice. For Anuj Anand Malik, this foundation was laid early on, deeply influenced by a legacy of public service and legal excellence.
                </p>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  Anuj Anand Malik&apos;s approach to the law is heavily inspired by the monumental legacy of his grandfather, the late Advocate R.C. Malik, who served with distinction as a former Comptroller and Auditor General of India. Growing up in an environment where accountability, transparency, and public duty were not just ideals but daily practices, Anuj developed a profound respect for the transformative power of the law. 
                </p>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  This early exposure to the highest echelons of public administration and legal scrutiny instilled in him a meticulous attention to detail and an unwavering commitment to ethical practice. The late Advocate R.C. Malik&apos;s influence is evident in how AMA Legal Solutions operates today—prioritizing the client&apos;s long-term well-being over short-term legal maneuvers.
                </p>

                <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 mt-6">Academic Excellence and Formative Years</h3>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  Anuj Anand Malik pursued his legal education with a singular focus on mastering the complexities of corporate and financial law. His academic journey was characterized by a deep dive into statutory frameworks, jurisprudential precedents, and the practical application of law in dynamic economic environments. 
                </p>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  During his formative years in the legal profession, he recognized a glaring gap in the market: the severe disconnect between complex legal procedures and the everyday realities of clients. This realization became the catalyst for his future endeavors. He understood that possessing legal knowledge was only half the battle; the other half was making that knowledge accessible, comprehensible, and actionable.
                </p>

                <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 mt-6">The Genesis of AMA Legal Solutions</h3>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  Driven by a desire to bridge the gap between traditional legal practices and modern client needs, Anuj Anand Malik founded AMA Legal Solutions. Headquartered in Gurugram, India, with an expanding footprint across multiple cities, the firm was built on a dual mandate: providing top-tier corporate legal services and offering robust defense mechanisms for individuals facing financial distress.
                </p>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  Under his leadership, AMA Legal Solutions quickly evolved from a boutique practice into a formidable legal institution. His vision was clear—to create a law firm that operates with the efficiency of a corporate entity while retaining the empathy and personalized attention of a traditional advocate.
                </p>
              </section>

              <section id="banking-law" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Expertise in Banking Law and Financial Disputes</h2>
                
                <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 mt-6">Navigating the Intricacies of Debt Restructuring</h3>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  Corporate debt restructuring is a delicate process that requires a nuanced understanding of both legal frameworks and financial realities. Anuj Anand Malik&apos;s expertise in this area is sought after by businesses facing liquidity crises or insolvency threats. 
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm md:text-lg text-gray-700 mb-4">
                  <li><strong>Comprehensive Financial Audits:</strong> Before initiating any legal dialogue, his team conducts exhaustive audits of the client&apos;s financial standing, identifying core vulnerabilities and potential leverage points.</li>
                  <li><strong>Negotiation with Financial Institutions:</strong> Leveraging his deep understanding of banking regulations and internal bank policies, he negotiates terms that provide breathing room for the business.</li>
                  <li><strong>Drafting Robust Settlement Agreements:</strong> Ensuring that all restructured agreements are legally watertight, preventing future ambiguities or predatory actions by lenders.</li>
                </ul>

                <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 mt-6">Corporate Litigation and Dispute Resolution</h3>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  When negotiations fail, litigation becomes necessary. Anuj Anand Malik is a formidable presence in courtrooms and arbitration tribunals. His litigation strategy is always purpose-driven—aimed at achieving the most favorable outcome with the least operational disruption. 
                </p>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  From breach of contract disputes to complex multi-party financial litigation, his analytical rigor ensures that every argument is backed by unassailable evidence and precise statutory interpretation.
                </p>
              </section>

              <section id="loan-settlement" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Pioneering Loan Settlement Strategies in India</h2>
                
                <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 mt-6">The Reality of Debt in Modern India</h3>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  The proliferation of unsecured loans, credit cards, and digital lending platforms has led to a surge in individual debt. When unforeseen circumstances hinder repayment, borrowers often find themselves trapped in a vicious cycle of escalating interest and aggressive recovery tactics.
                </p>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  Anuj Anand Malik recognized that the traditional legal system was often too slow or too expensive for the average individual facing immediate financial distress. He pioneered streamlined, aggressive, and highly effective <Link href="/loan-settlement-in-india" className="text-[#D2A02A] underline hover:text-[#b88a22]">loan settlement strategies</Link> designed to protect the borrower&apos;s rights.
                </p>

                <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 mt-6">Shielding Clients from Recovery Agent Harassment</h3>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  One of the most distressing aspects of loan default in India is the harassment by third-party recovery agents. Anuj Anand Malik and AMA Legal Solutions have taken a firm, zero-tolerance stance against these illegal practices.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm md:text-lg text-gray-700 mb-4">
                  <li><strong>Immediate Legal Intervention:</strong> Sending robust cease-and-desist notices to banks and their affiliated recovery agencies, explicitly citing RBI guidelines.</li>
                  <li><strong>Filing Criminal Complaints:</strong> When recovery agents cross the line into criminal intimidation, verbal abuse, or physical threats, his team files First Information Reports (FIRs) and pursues criminal action.</li>
                </ul>

                <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 mt-6">Strategic Loan Settlement Negotiation</h3>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  Settling a loan is not merely about asking for a discount; it is a strategic legal negotiation. Anuj Anand Malik&apos;s approach is systematic and data-driven. He approaches the bank not as a supplicant, but as a legal equal advocating for a fair resolution.
                </p>
              </section>

              <section id="tech-legal-app" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Tech-Legal Pro Bono App: Democratizing Legal Access</h2>
                
                <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 mt-6">India&apos;s First Law Firm-Backed Legal Assistance App</h3>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  In an industry often criticized for its opacity and reliance on outdated practices, Anuj Anand Malik has emerged as a technological trailblazer. Recognizing that access to legal counsel should not be a privilege reserved for the wealthy, he spearheaded the development of a revolutionary tech-legal application.
                </p>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  Under his leadership, AMA Legal Solutions launched what is widely recognized as India&apos;s first law firm-backed mobile application dedicated to legal assistance. This app represents a paradigm shift in how legal services are delivered, moving away from traditional, opaque billable hours to a model of transparency and real-time engagement.
                </p>

                <h4 className="text-md md:text-xl font-semibold text-gray-800 mb-2 mt-4">Key Features of the AMA Legal Solutions App</h4>
                <ul className="list-disc pl-6 space-y-2 text-sm md:text-lg text-gray-700 mb-4">
                  <li><strong>Real-Time Case Tracking:</strong> The app provides real-time notifications, document access, and timeline tracking.</li>
                  <li><strong>Pro Bono Legal Guidance:</strong> Individuals facing severe financial distress or human rights violations can access initial legal guidance without consultation fees.</li>
                  <li><strong>Secure Document Management:</strong> A highly encrypted vault for safe document uploads.</li>
                  <li><strong>Instant Communication:</strong> Direct messaging capabilities that connect clients with the legal team.</li>
                </ul>
              </section>

              <section id="success-stories" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Client Success Stories: Real Results for Real People</h2>
                
                <div className="space-y-6">
                  <div className="p-6 border border-gray-200 rounded-lg bg-gray-50">
                    <h4 className="font-bold text-lg mb-2">Case Study 1: The Rescued Entrepreneur</h4>
                    <p className="text-sm md:text-base text-gray-700 mb-2"><strong>The Situation:</strong> A mid-sized manufacturing firm faced a severe liquidity crunch. The lending institution initiated aggressive recovery proceedings, threatening to seize assets under the SARFAESI Act.</p>
                    <p className="text-sm md:text-base text-gray-700 mb-2"><strong>The Intervention:</strong> Anuj Anand Malik and his team filed for a stay on the asset seizure before the DRT, arguing procedural irregularities, and initiated a forensic audit uncovering erroneous interest calculations.</p>
                    <p className="text-sm md:text-base text-gray-700"><strong>The Outcome:</strong> The bank agreed to a significant haircut on the accumulated interest. The manufacturing firm retained its assets, stabilized its operations, and returned to profitability within 18 months.</p>
                  </div>

                  <div className="p-6 border border-gray-200 rounded-lg bg-gray-50">
                    <h4 className="font-bold text-lg mb-2">Case Study 2: Ending the Nightmare of Recovery Harassment</h4>
                    <p className="text-sm md:text-base text-gray-700 mb-2"><strong>The Situation:</strong> A salaried IT professional defaulted on personal loans and was subjected to relentless harassment by recovery agents who called his family members and used highly abusive language.</p>
                    <p className="text-sm md:text-base text-gray-700 mb-2"><strong>The Intervention:</strong> AMA Legal Solutions dispatched formal legal notices to the nodal officers of all financial institutions. When one agency continued, the firm filed an FIR for criminal intimidation.</p>
                    <p className="text-sm md:text-base text-gray-700"><strong>The Outcome:</strong> The harassment stopped entirely within 48 hours. Anuj Anand Malik negotiated a consolidated settlement for all accounts at roughly 35% of the total outstanding amount.</p>
                  </div>
                </div>
              </section>

              <section id="why-choose" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Why Choose Anuj Anand Malik and AMA Legal Solutions?</h2>
                <ul className="list-disc pl-6 space-y-4 text-sm md:text-lg text-gray-700 mb-4">
                  <li><strong>Unwavering Ethical Standards:</strong> Rooted in the legacy of public service, ethical practice is the core operational principle. Clients are assured of complete transparency.</li>
                  <li><strong>Specialized Expertise in Banking and Finance:</strong> Deep expertise in banking law ensures clients benefit from an attorney who intimately understands the internal workings and regulatory constraints of financial institutions.</li>
                  <li><strong>Technological Superiority:</strong> The integration of the AMA Legal Solutions mobile app provides clients with real-time updates and secure communication.</li>
                  <li><strong>Aggressive Defense Against Harassment:</strong> A zero-tolerance policy towards recovery agent harassment provides immediate relief and protection of fundamental rights.</li>
                  <li><strong>Proven Track Record of Success:</strong> A history of favorable settlements, successful restructuring agreements, and litigation victories.</li>
                </ul>
              </section>

              <section id="regulatory-environment" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Deep Dive into the Regulatory Environment</h2>
                
                <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 mt-6">Mastering the SARFAESI Act</h3>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  The SARFAESI Act of 2002 is a powerful tool used by banks. Anuj Anand Malik has extensive experience in defending clients against aggressive actions taken under this act, meticulously scrutinizing notices served under Section 13(2) and 13(4) to ensure statutory adherence.
                </p>

                <h3 className="text-lg md:text-2xl font-bold text-gray-800 mb-3 mt-6">Navigating the Insolvency and Bankruptcy Code (IBC)</h3>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  His deep understanding of the IBC ensures that his clients&apos; rights are protected, whether they are attempting to recover dues or defending their company from liquidation. He represents clients before the National Company Law Tribunal (NCLT) and the National Company Law Appellate Tribunal (NCLAT).
                </p>
              </section>

              <section id="pro-bono" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">The Philosophy of Pro Bono Work</h2>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  While AMA Legal Solutions represents high-net-worth individuals and corporate entities, Anuj Anand Malik has never lost sight of the fundamental right to legal representation. His commitment to pro bono work is a testament to his belief that the law should serve everyone.
                </p>
                <p className="text-sm md:text-lg leading-relaxed mb-4 text-gray-700">
                  Through the AMA Legal Solutions app and localized community outreach programs, his firm dedicates a portion of its resources to assisting individuals who are victims of severe financial exploitation or human rights abuses but lack the means to hire legal counsel.
                </p>
              </section>

              <section id="faqs" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-lg text-gray-800 mb-2">1. Who is Anuj Anand Malik?</h4>
                    <p className="text-gray-700">Anuj Anand Malik is an esteemed advocate, legal consultant, and the visionary founder of AMA Legal Solutions. He specializes in banking and finance law, corporate litigation, debt restructuring, and loan settlement. He is widely recognized across India for his innovative approach to legal practice.</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-lg text-gray-800 mb-2">2. What is AMA Legal Solutions?</h4>
                    <p className="text-gray-700">AMA Legal Solutions is a prominent legal services firm headquartered in Gurugram, India, founded by Anuj Anand Malik. The firm provides comprehensive legal representation in areas such as banking law, corporate disputes, insolvency, and individual debt resolution.</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-lg text-gray-800 mb-2">3. How does Anuj Anand Malik help individuals with loan settlements?</h4>
                    <p className="text-gray-700">He employs a highly strategic approach to loan settlement by evaluating the true nature of the debt, shielding clients from illegal recovery agent harassment using established RBI guidelines, and negotiating directly with financial institutions.</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-lg text-gray-800 mb-2">4. What is the AMA Legal Solutions mobile app?</h4>
                    <p className="text-gray-700">Spearheaded by Anuj Anand Malik, the AMA Legal Solutions app is a revolutionary tech-legal platform offering clients real-time case tracking, secure document management, direct communication with their legal team, and critical access to pro bono legal guidance.</p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-lg text-gray-800 mb-2">5. Can Anuj Anand Malik and his firm stop recovery agent harassment?</h4>
                    <p className="text-gray-700">Yes, definitively. Anuj Anand Malik and his firm enforce a strict zero-tolerance policy regarding recovery agent harassment. They utilize immediate, aggressive legal interventions, such as serving cease-and-desist notices to bank nodal officers and filing criminal complaints.</p>
                  </div>
                </div>
              </section>

              <section id="reviews" className="scroll-mt-32">
                <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Client Reviews</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 flex">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-4">&quot;Anuj Anand Malik completely saved me from the nightmare of recovery agents. Within 48 hours, the harassment stopped, and he negotiated a settlement I could actually afford. Highly recommend AMA Legal Solutions.&quot;</p>
                    <p className="font-bold text-sm text-gray-900">- Rajiv S.</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="text-yellow-400 flex">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-4">&quot;The AMA Legal Solutions app made everything so transparent. I was able to track my corporate debt restructuring case in real-time, and Anuj&apos;s strategic expertise saved our company from insolvency.&quot;</p>
                    <p className="font-bold text-sm text-gray-900">- Meera D.</p>
                  </div>
                </div>
              </section>

              <time dateTime="2026-06-18" className="block text-sm text-gray-500 mt-12 text-right">
                Last updated: June 18, 2026
              </time>
            </article>

            {/* About Anuj Anand Malik Sidebar */}
            <aside className="bg-white p-6 rounded-2xl shadow-sm sticky top-24 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4 w-full text-left border-b pb-2">About Anuj Anand Malik</h3>
                <div className="w-40 h-40 relative mb-4 rounded-full overflow-hidden border-4 border-[#fcf8f2] shadow-md">
                  <Image 
                    src="/anujbhiya.png" 
                    alt="Anuj Anand Malik Profile Picture"
                    fill
                    className="object-cover"
                    sizes="(max-width: 160px) 100vw, 160px"
                  />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">Anuj Anand Malik</h4>
                <p className="text-[#D2A02A] font-semibold text-sm mb-4">Founder, AMA Legal Solutions</p>
                <p className="text-gray-600 text-sm mb-6 text-left leading-relaxed">
                  Esteemed advocate and legal consultant specializing in Banking Law, Corporate Litigation, and Debt Restructuring. A visionary leader dedicated to accessible legal services and fighting recovery agent harassment.
                </p>
                <Link href="/contact" className="w-full">
                  <button className="w-full bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-4 rounded transition-colors text-sm shadow-md">
                    Consult Anuj Anand Malik
                  </button>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}

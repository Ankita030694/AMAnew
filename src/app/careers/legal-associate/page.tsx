import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import Navbar from "@/newcomp/Navbar";
import type { Metadata } from "next";

// FAQ data
const faqs = [
  {
    question: "What legal domains will I work on as a Legal Associate at AMA?",
    answer: "Our practice is diverse. You will primarily work on Loan Settlement negotiations, Intellectual Property (Trademarks/Copyrights), Arbitration, Civil Litigation, and Corporate Compliance. We encourage associates to specialize while maintaining a broad understanding of the firm's core areas."
  },
  {
    question: "Is there an opportunity for litigation and court appearances?",
    answer: "Yes, AMA Legal Solutions actively represents clients in various courts including the Delhi High Court, District Courts, and Tribunals like DRT and NCLT. Associates are encouraged to assist senior counsels in drafting and appearing for matters, depending on their experience and seniority."
  },
  {
    question: "How does the firm support continuing legal education?",
    answer: "We value intellectual growth. AMA regularly hosts internal knowledge-sharing sessions, workshops on new legal amendments (like the new Criminal Laws or Digital Personal Data Protection Act), and provides access to premium legal databases like SCC Online and Manupatra."
  },
  {
    question: "What is the work-life balance like for Legal Associates?",
    answer: "While the legal profession is demanding, especially around key court dates, AMA prioritizes a sustainable work environment. We work 'In Office' at our Gurugram headquarters to foster a collaborative culture where team members support each other through complex case deadlines."
  }
];

// Schemas
const breadcrumbSchema = (baseUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
    { "@type": "ListItem", "position": 2, "name": "Careers", "item": `${baseUrl}/careers` },
    { "@type": "ListItem", "position": 3, "name": "Legal Associate", "item": `${baseUrl}/careers/legal-associate` }
  ]
});

const faqSchema = {
  "@context": "https://schema.org",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
};

const jobPostingSchema = (baseUrl: string) => ({
  "@context": "https://schema.org/",
  "@type": "JobPosting",
  "title": "Legal Associate",
  "description": "Join the legal team at AMA Legal Solutions as a Legal Associate. Work on high-impact litigation, IPR, and loan settlement cases.",
  "identifier": {
    "@type": "PropertyValue",
    "name": "AMA Legal Solutions",
    "value": "LA2024"
  },
  "datePosted": "2024-03-12",
  "validThrough": "2024-06-12T00:00",
  "employmentType": "FULL_TIME",
  "hiringOrganization" : {
    "@type" : "Organization",
    "name" : "AMA Legal Solutions",
    "sameAs" : baseUrl,
    "logo" : `${baseUrl}/ama-legal-solutions-logo.png`
  },
  "jobLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2493AP, Block G, Sushant Lok 2, Sector 57",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122001",
      "addressCountry": "IN"
    }
  },
  "baseSalary": {
    "@type": "MonetaryAmount",
    "currency": "INR",
    "value": {
      "@type": "QuantitativeValue",
      "minValue": 400000,
      "maxValue": 800000,
      "unitText": "YEAR"
    }
  }
});

const articleSchema = (baseUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Legal Associate Jobs in Gurugram | AMA Legal Solutions Careers",
  "description": "Join the legal team at AMA Legal Solutions as a Legal Associate. Work on high-impact litigation, IPR, and loan settlement cases.",
  "author": { "@type": "Organization", "name": "AMA Legal Solutions", "url": baseUrl },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": { "@type": "ImageObject", "url": `${baseUrl}/ama-legal-solutions-logo.png` }
  },
  "datePublished": "2024-02-17"
});

export const metadata: Metadata = {
  title: "Legal Associate Jobs in Gurugram | AMA Legal Solutions Careers",
  description: "Join the legal team at AMA Legal Solutions as a Legal Associate. Work on high-impact litigation, IPR, and loan settlement cases. Elevate your legal career in Gurugram.",
  keywords: ["legal associate jobs gurugram", "lawyer careers india", "litigation associate roles", "IPR lawyer jobs", "corporate law associate careers"],
  alternates: { canonical: 'https://www.amalegalsolutions.com/careers/legal-associate' }
};

export default function LegalAssociatePage() {
  const baseUrl = "https://www.amalegalsolutions.com";
  
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "practice-areas", title: "Practice Areas" },
    { id: "responsibilities", title: "Responsibilities" },
    { id: "requirements", title: "Requirements" },
    { id: "why-join", title: "Why join AMA?" },
    { id: "application-process", title: "Application Process" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Careers", href: "/careers" },
    { label: "Legal Associate", href: "/careers/legal-associate" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(baseUrl)) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(baseUrl)) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="job-posting-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema(baseUrl)) }} />

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
              Elevate your Legal Career as a <span className="text-[#D2A02A]">Legal Associate</span>
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Join a team of expert lawyers dedicated to innovation in legal practice. Work on complex cases that matter.
            </p>
            <Link href="/careers#application-form">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Submit Your Profile
              </button>
            </Link>
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

              <div className="bg-white p-3 md:p-12 rounded-2xl shadow-sm space-y-6 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">A Dynamic Practice for Ambitious Lawyers</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700">
                    AMA Legal Solutions is built on the pillars of legal precision and client-centricity. As a <strong>Legal Associate</strong>, you will be at the core of our legal operations, managing a diverse portfolio of cases that range from high-stakes <strong>loan settlement negotiations</strong> to complex <strong>intellectual property litigation</strong>. We look for analytical minds who can navigate the complexities of Indian law while providing practical, effective solutions to our clients.
                  </p>
                </section>

                <section id="practice-areas" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Core Practice Areas</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {["Banking & Finance (Loan Settlement)", "Intellectual Property Rights", "Civil & Commercial Litigation", "Arbitration & Dispute Resolution", "Corporate Advisory", "Real Estate Law"].map((area, i) => (
                      <div key={i} className="bg-gray-50 p-4 rounded-lg text-center font-semibold text-gray-800 text-sm border border-gray-100">
                        {area}
                      </div>
                    ))}
                  </div>
                </section>

                <section id="responsibilities" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Key Responsibilities</h2>
                  <ul className="space-y-4">
                    {[
                      "Conduct in-depth legal research on precedents, statutes, and regulations.",
                      "Draft legal documents including notices, pleadings, contracts, and settlement agreements.",
                      "Represent clients in negotiations with financial institutions and opposing counsels.",
                      "Assist senior partners in court preparations and strategy development.",
                      "Manage client relationships and provide regular updates on case progress.",
                      "Ensure high levels of compliance and ethical standards in all legal work."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#D2A02A] mr-3 font-bold">•</span>
                        <span className="text-sm md:text-lg text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section id="requirements" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Requirements</h2>
                  <ul className="list-disc pl-6 space-y-2 text-sm md:text-lg text-gray-700">
                    <li>LL.B / B.A. LL.B from a recognized university.</li>
                    <li>Enrolled with the Bar Council of India.</li>
                    <li>1-4 years of experience in litigation or corporate practice.</li>
                    <li>Excellent drafting and verbal communication skills.</li>
                    <li>Strong analytical and problem-solving abilities.</li>
                  </ul>
                </section>

                <section id="why-join" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">Why Join AMA Legal Solutions?</h2>
                  <p className="text-sm md:text-lg leading-relaxed text-gray-700 mb-6">
                    We believe in nurturing talent. At AMA, you will find a flat hierarchy, mentorship from senior practitioners, and a culture that values your contribution to every case.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
                    <div className="p-4 border border-gray-100 rounded-lg text-gray-700"><strong>Industry Standard Pay:</strong> Competitive salary based on experience.</div>
                    <div className="p-4 border border-gray-100 rounded-lg text-gray-700"><strong>In-Office Growth:</strong> Collaborate daily with Gurugram's best legal minds.</div>
                    <div className="p-4 border border-gray-100 rounded-lg text-gray-700"><strong>Tech-First Law:</strong> Use the latest legal tech and research tools.</div>
                    <div className="p-4 border border-gray-100 rounded-lg text-gray-700"><strong>Social Impact:</strong> Work on cases that change lives.</div>
                  </div>
                </section>

                <section id="application-process" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">How to Apply</h2>
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#D2A02A]/20"></div>
                    <div className="space-y-8 relative">
                      {[
                        { step: "1", title: "Submit Form", text: "Fill out the career application form with your details and Resume." },
                        { step: "2", title: "Initial Screening", text: "Our HR team will review your profile and reach out for a preliminary call." },
                        { step: "3", title: "Interview Rounds", text: "Meet with our Legal Partners to discuss your expertise and case handling." },
                        { step: "4", title: "Onboarding", text: "Join the core legal team at our Gurugram headquarters." }
                      ].map((s, i) => (
                        <div key={i} className="flex gap-6 items-center ml-1">
                          <div className="w-8 h-8 rounded-full bg-[#D2A02A] text-white flex items-center justify-center font-bold z-10 shrink-0">
                            {s.step}
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">{s.title}</h4>
                            <p className="text-sm text-gray-500">{s.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-8">Frequently Asked Questions</h2>
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
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Start Your Legal Career Today</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Join AMA Legal Solutions and work on high-impact cases that shape the legal landscape in India.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                      <Link href="/careers#application-form">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          Apply Now
                        </button>
                      </Link>
                      <Link href="/careers">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all text-sm md:text-lg w-full sm:w-auto">
                          Back to Careers
                        </button>
                      </Link>
                    </div>
                    <p className="mt-4 md:mt-8 text-xs md:text-sm opacity-70">
                      Innovative • Impactful • Professional
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Join our Legal Team</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Ready to take your legal career to the next level? Apply for the Legal Associate position in Gurugram.
                  </p>
                  <Link 
                    href="/careers#application-form" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                  >
                    Apply Now
                  </Link>
                </div>

                {/* App Store Links */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <p className="text-sm font-semibold mb-3" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our App Today</p>
                  <div className="flex flex-col gap-3">
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
                        className="w-full h-auto max-w-[130px]"
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
                        className="w-full h-auto max-w-[130px]"
                      />
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

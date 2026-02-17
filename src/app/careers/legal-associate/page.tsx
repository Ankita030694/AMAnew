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
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
};

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

      <div className="bg-[#F8F5EC] min-h-screen font-[family-name:var(--font-polysans)]">
        <Navbar />
        
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-20 md:py-32 text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Elevate your Legal Career as a <span className="text-[#D2A02A]">Legal Associate</span>
            </h1>
            <p className="text-sm md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Join a team of expert lawyers dedicated to innovation in legal practice. Work on complex cases that matter.
            </p>
            <Link href="/careers#application-form">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg text-lg">
                Submit Your Profile
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-4">
            <aside className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </aside>

            <article className="min-w-0 bg-white p-6 md:p-12 rounded-2xl shadow-sm space-y-12">
              <section id="introduction" className="scroll-mt-32">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] mb-6 border-b border-[#D2A02A]/20 pb-4">A Dynamic Practice for Ambitious Lawyers</h2>
                <p className="text-lg leading-relaxed text-[#30261C]/80">
                  AMA Legal Solutions is built on the pillars of legal precision and client-centricity. As a <strong>Legal Associate</strong>, you will be at the core of our legal operations, managing a diverse portfolio of cases that range from high-stakes <strong>loan settlement negotiations</strong> to complex <strong>intellectual property litigation</strong>. We look for analytical minds who can navigate the complexities of Indian law while providing practical, effective solutions to our clients.
                </p>
              </section>

              <section id="practice-areas" className="scroll-mt-32">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] mb-6">Core Practice Areas</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["Banking & Finance (Loan Settlement)", "Intellectual Property Rights", "Civil & Commercial Litigation", "Arbitration & Dispute Resolution", "Corporate Advisory", "Real Estate Law"].map((area, i) => (
                    <div key={i} className="bg-[#F8F5EC] p-4 rounded-lg text-center font-semibold text-[#30261C]/90 text-sm">
                      {area}
                    </div>
                  ))}
                </div>
              </section>

              <section id="responsibilities" className="scroll-mt-32">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] mb-6">Key Responsibilities</h2>
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
                      <span className="text-[#30261C]/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section id="requirements" className="scroll-mt-32">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] mb-6">Requirements</h2>
                <ul className="list-disc pl-6 space-y-2 text-[#30261C]/80">
                  <li>LL.B / B.A. LL.B from a recognized university.</li>
                  <li>Enrolled with the Bar Council of India.</li>
                  <li>1-4 years of experience in litigation or corporate practice.</li>
                  <li>Excellent drafting and verbal communication skills.</li>
                  <li>Strong analytical and problem-solving abilities.</li>
                </ul>
              </section>

              <section id="why-join" className="scroll-mt-32">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] mb-6">Why Join AMA Legal Solutions?</h2>
                <p className="text-lg leading-relaxed text-[#30261C]/80 mb-6">
                  We believe in nurturing talent. At AMA, you will find a flat hierarchy, mentorship from senior practitioners, and a culture that values your contribution to every case.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="p-4 border border-gray-100 rounded-lg text-black"><strong>Industry Standard Pay:</strong> Competitive salary based on experience.</div>
                  <div className="p-4 border border-gray-100 rounded-lg text-black"><strong>In-Office Growth:</strong> Collaborate daily with Gurugram's best legal minds.</div>
                  <div className="p-4 border border-gray-100 rounded-lg text-black"><strong>Tech-First Law:</strong> Use the latest legal tech and research tools.</div>
                  <div className="p-4 border border-gray-100 rounded-lg text-black"><strong>Social Impact:</strong> Work on cases that change lives.</div>
                </div>
              </section>

              <section id="application-process" className="scroll-mt-32">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] mb-6">How to Apply</h2>
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
                          <h4 className="font-bold text-[#30261C]">{s.title}</h4>
                          <p className="text-sm text-[#30261C]/60">{s.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="faqs" className="scroll-mt-32">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] mb-8">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-100 pb-6 last:border-0">
                      <h3 className="text-xl font-bold text-[#30261C] mb-3 flex items-start">
                        <span className="text-[#D2A02A] mr-3">Q.</span>
                        {faq.question}
                      </h3>
                      <p className="text-[#30261C]/80 leading-relaxed pl-8">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </article>

            <aside className="hidden lg:block sticky top-24">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#D2A02A]/10">
                <h3 className="text-xl font-bold text-[#30261C] mb-4">Join our Legal Team</h3>
                <p className="text-sm text-[#30261C]/60 mb-6">
                  Ready to take your legal career to the next level? Apply for the Legal Associate position in Gurugram.
                </p>
                <Link href="/careers#application-form">
                  <button className="w-full bg-[#D2A02A] text-white py-3 rounded-xl font-bold hover:bg-[#b88a22] transition-colors">
                    Apply Now
                  </button>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import Navbar from "@/newcomp/Navbar";
import type { Metadata } from "next";

// FAQ data for rendering and Schema
const faqs = [
  {
    question: "What is the typical career path for a BDA at AMA Legal Solutions?",
    answer: "At AMA Legal Solutions, a Business Development Associate (BDA) has a clear growth trajectory. From BDA, you can progress to Senior BDA, Business Development Manager, and eventually Head of Business Development. We focus on merit-based promotions and provide regular training to help you ascend the leadership ladder."
  },
  {
    question: "Will I receive training on legal products and services?",
    answer: "Yes, every new BDA undergoes a comprehensive 'Legal Sales Boot Camp'. You will be trained on our various services, including Loan Settlement, IPR, Arbitration, and Corporate Law, ensuring you can speak with authority and confidence when consulting with prospective clients."
  },
  {
    question: "Is there any field work involved in this role?",
    answer: "The BDA role at AMA is primarily focused on strategic growth and client acquisition. While much of the initial consultation happens via digital and telephonic channels, occasional field visits for high-profile client meetings or legal networking events may be required as per institutional needs."
  },
  {
    question: "How is performance measured at AMA for BDA roles?",
    answer: "Performance is measured through a combination of lead conversion rates, client relationship quality, and contribution to the firm's strategic growth goals. We value consistency, ethical sales practices, and a deep understanding of the client's legal needs."
  },
  {
    question: "What are the working hours and location policy?",
    answer: "This is an in-office role based in our Gurugram headquarters. We follow standard professional working hours, providing a structured environment that fosters collaboration among the legal and business teams."
  }
];

// JSON-LD Schemas
const breadcrumbSchema = (baseUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
    { "@type": "ListItem", "position": 2, "name": "Careers", "item": `${baseUrl}/careers` },
    { "@type": "ListItem", "position": 3, "name": "Business Development Associate", "item": `${baseUrl}/careers/business-development-associate` }
  ]
});

const articleSchema = (baseUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Business Development Associate Jobs in Gurugram | AMA Legal Solutions Careers",
  "description": "Join AMA Legal Solutions as a Business Development Associate. Lead strategic growth, client acquisition, and help expand India's top law firm.",
  "author": { "@type": "Organization", "name": "AMA Legal Solutions", "url": baseUrl },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": { "@type": "ImageObject", "url": `${baseUrl}/ama-legal-solutions-logo.png` }
  },
  "datePublished": "2024-02-17"
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
  "title": "Business Development Associate",
  "description": "Join AMA Legal Solutions as a Business Development Associate. Lead strategic growth, client acquisition, and help expand India's top law firm.",
  "identifier": {
    "@type": "PropertyValue",
    "name": "AMA Legal Solutions",
    "value": "BDA2024"
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
      "minValue": 300000,
      "maxValue": 600000,
      "unitText": "YEAR"
    }
  }
});

export const metadata: Metadata = {
  title: "Business Development Associate | AMA Legal Solutions",
  description: "Exciting career opportunity for Sales and Business Development Associates at AMA Legal Solutions. Join Gurugram's top law firm and drive strategic growth. Apply now.",
  keywords: ["business development associate jobs", "sales associate careers", "law firm jobs gurugram", "legal sales associate", "jobs for bda in delhi ncr"],
  alternates: { canonical: 'https://www.amalegalsolutions.com/careers/business-development-associate' }
};

export default function BDACareerPage() {
  const baseUrl = "https://www.amalegalsolutions.com";
  
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "the-role", title: "The Role" },
    { id: "responsibilities", title: "Responsibilities" },
    { id: "requirements", title: "Skills & Qualifications" },
    { id: "why-join", title: "Why Join AMA?" },
    { id: "application-process", title: "Application Process" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Careers", href: "/careers" },
    { label: "Business Development Associate", href: "/careers/business-development-associate" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(baseUrl)) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(baseUrl)) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="job-posting-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema(baseUrl)) }} />

      <div className="bg-[#F8F5EC] min-h-screen font-[family-name:var(--font-polysans)]">
        <Navbar />
        
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="absolute inset-0 bg-[url('/bannerbg.png')] bg-cover bg-center opacity-40"></div>
          <div className="relative z-20 container mx-auto px-4 py-20 md:py-32 text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Drive the Future of Legal Services as our <span className="text-[#D2A02A]">Business Development Associate</span>
            </h1>
            <p className="text-sm md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Join India's premier law firm and lead the charge in redefining how legal solutions are delivered. High impact, strategic growth, and professional excellence.
            </p>
            <Link href="/careers#application-form">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Apply for this Position
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_280px] gap-8 items-start mt-4">
            {/* Sidebar TOC - Desktop */}
            <aside className="hidden lg:block sticky top-24">
              <TableOfContents sections={tocSections} orientation="vertical" />
            </aside>

            {/* Main Content */}
            <article className="min-w-0 bg-white p-6 md:p-12 rounded-2xl shadow-sm space-y-12">
              
              {/* Introduction */}
              <section id="introduction" className="scroll-mt-32">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] mb-6 border-b border-[#D2A02A]/20 pb-4">
                  Strategic Growth at AMA Legal Solutions
                </h2>
                <p className="text-lg leading-relaxed text-[#30261C]/80 mb-6">
                  At AMA Legal Solutions, we don't just solve legal problems; we create lasting value for our clients. As a <strong>Business Development Associate (BDA)</strong>, you are the face of our firm, often being the first touchpoint for individuals and businesses seeking justice and resolution. This role is pivotal in scaling our impact across India, particularly in our high-growth sectors like loan settlement and intellectual property.
                </p>
                <div className="bg-[#F8F5EC] border-l-4 border-[#D2A02A] p-6 rounded-r-xl">
                  <p className="italic text-[#30261C]/90">
                    "We are looking for visionaries who understand that business development in law is about empathy, strategy, and relentless pursuit of excellence."
                  </p>
                </div>
              </section>

              {/* The Role */}
              <section id="the-role" className="scroll-mt-32">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] mb-6">The Role</h2>
                <p className="text-lg leading-relaxed text-[#30261C]/80">
                  This isn't your typical sales role. You will be working at the intersection of law and business, identifying opportunities where AMA's expertise can solve critical pain points for clients. Whether it's helping a family trapped in debt through our <strong>loan settlement services</strong> or assisting a startup in protecting their brand through <strong>trademark registration</strong>, your goal is to build trust and facilitate solutions.
                </p>
              </section>

              {/* Responsibilities */}
              <section id="responsibilities" className="scroll-mt-32">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] mb-6">Key Responsibilities</h2>
                <ul className="space-y-4">
                  {[
                    "Identify and reach out to prospective clients through strategic channels and networking.",
                    "Conduct initial legal consultations to understand client needs and present appropriate AMA solutions.",
                    "Collaborate with the legal team to prepare tailored proposals and pitch decks for corporate clients.",
                    "Manage the end-to-end client conversion funnel, ensuring a seamless onboarding experience.",
                    "Represent AMA Legal Solutions at industry conferences, legal forums, and networking events.",
                    "Maintain and expand our database of prospective leads and client relationships in the CRM.",
                    "Develop and execute quarterly growth strategies to meet firm-wide expansion goals."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 font-bold">•</span>
                      <span className="text-[#30261C]/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Requirements */}
              <section id="requirements" className="scroll-mt-32">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] mb-6">Skills & Qualifications</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-[#F8F5EC]/50 p-6 rounded-xl border border-[#D2A02A]/10">
                    <h3 className="font-bold text-[#30261C] mb-4">Core Competencies</h3>
                    <ul className="space-y-2 text-[#30261C]/80 text-sm">
                      <li>Strategic communication and persuasion</li>
                      <li>Relationship management and CRM handling</li>
                      <li>Consultative sales approach</li>
                      <li>Ability to simplify complex legal jargon</li>
                    </ul>
                  </div>
                  <div className="bg-[#F8F5EC]/50 p-6 rounded-xl border border-[#D2A02A]/10">
                    <h3 className="font-bold text-[#30261C] mb-4">Background</h3>
                    <ul className="space-y-2 text-[#30261C]/80 text-sm">
                      <li>Bachelor's degree in Business, Law, or related field</li>
                      <li>1-3 years of experience in B2B sales or BD roles</li>
                      <li>Proven track record of meeting growth targets</li>
                      <li>Interest in the legal and financial services sector</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Why Join */}
              <section id="why-join" className="scroll-mt-32">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] mb-6">Why Join AMA?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "Compensation", text: "Competitive salary as per industry standards with high-growth incentives." },
                    { title: "Culture", text: "A vibrant, collaborative environment where business meet law." },
                    { title: "Growth", text: "Rapid career advancement opportunities in a fast-scaling firm." },
                    { title: "Impact", text: "Help thousands of people solve life-changing legal issues." }
                  ].map((box, i) => (
                    <div key={i} className="p-6 border border-gray-100 rounded-xl hover:bg-[#F8F5EC] transition-colors">
                      <h4 className="font-bold text-[#D2A02A] mb-2">{box.title}</h4>
                      <p className="text-sm text-[#30261C]/70">{box.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Application Process */}
              <section id="application-process" className="scroll-mt-32">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] mb-6">How to Apply</h2>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#D2A02A]/20"></div>
                  <div className="space-y-8 relative">
                    {[
                      { step: "1", title: "Submit Form", text: "Fill out the career application form with your details and Resume." },
                      { step: "2", title: "Initial Screening", text: "Our HR team will review your profile and reach out for a preliminary call." },
                      { step: "3", title: "Interview Rounds", text: "Meet with our BD and Legal heads to discuss strategy and alignment." },
                      { step: "4", title: "Onboarding", text: "Receive your offer and join the mission at AMA Legal Solutions." }
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

              {/* FAQs */}
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

            {/* Sidebar CTA - Desktop */}
            <aside className="hidden lg:block space-y-8 sticky top-24">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#D2A02A]/10">
                <h3 className="text-xl font-bold text-[#30261C] mb-4">Ready to Apply?</h3>
                <p className="text-sm text-[#30261C]/60 mb-6">
                  Join our Gurugram office and start your journey as a Business Development Associate.
                </p>
                <Link href="/careers#application-form">
                  <button className="w-full bg-[#D2A02A] text-white py-3 rounded-xl font-bold hover:bg-[#b88a22] transition-colors">
                    Apply Now
                  </button>
                </Link>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-xs font-semibold text-[#D2A02A] uppercase mb-4">Download Our App</p>
                  <div className="flex flex-col gap-3">
                    <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80">
                      <Image src="/newAssets/appstore.svg" alt="Play Store" width={140} height={40} />
                    </Link>
                    <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80">
                      <Image src="/newAssets/playstore.svg" alt="App Store" width={140} height={40} />
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

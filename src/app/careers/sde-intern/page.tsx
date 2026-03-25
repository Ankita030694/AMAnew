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
    question: "What is the tech stack used at AMA Legal Solutions?",
    answer: "We focus on modern, scalable web technologies. Our primary stack includes React.js, Next.js (App Router), TypeScript, Tailwind CSS, and Firebase (Firestore, Storage, Auth). We also explore AI integrations to optimize legal workflows."
  },
  {
    question: "Will I work on live projects for real users?",
    answer: "Absolutely. At AMA, interns are integrated into the product team. You will be contributing to our main website, client dashboards, and internal legal automation tools that are used by thousands of clients and our legal team every day."
  },
  {
    question: "Is there a mentorship program for interns?",
    answer: "Yes, every SDE intern is paired with a senior developer. You will participate in code reviews, architecture discussions, and sprint planning, providing you with a holistic view of the software development life cycle in a fast-paced environment."
  },
  {
    question: "Can an internship lead to a full-time offer?",
    answer: "We use our internship program as a pipeline for full-time talent. Exceptional performers who demonstrate technical growth and cultural alignment are frequently considered for PPOs (Pre-Placement Offers) at the end of their internship."
  },
  {
    question: "What are the working hours for interns?",
    answer: "This is an In-Office internship based in Gurugram. We follow a standard full-time schedule, allowing for deep collaboration with the engineering and legal teams. We value your learning time and ensure you have a balanced workload."
  }
];

// Schemas
const breadcrumbSchema = (baseUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": baseUrl },
    { "@type": "ListItem", "position": 2, "name": "Careers", "item": `${baseUrl}/careers` },
    { "@type": "ListItem", "position": 3, "name": "SDE Intern", "item": `${baseUrl}/careers/sde-intern` }
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

const jobPostingSchema = (baseUrl: string) => ({
  "@context": "https://schema.org/",
  "@type": "JobPosting",
  "title": "Software Development Engineer (SDE) Intern",
  "description": "Apply for SDE Internship at AMA Legal Solutions. Work on Next.js, React, and build the future of Legal Tech in Gurugram.",
  "identifier": {
    "@type": "PropertyValue",
    "name": "AMA Legal Solutions",
    "value": "SDEI2024"
  },
  "datePosted": "2024-03-12",
  "validThrough": "2024-06-12T00:00",
  "employmentType": "INTERN",
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
      "value": 15000,
      "unitText": "MONTH"
    }
  }
});

const articleSchema = (baseUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "SDE Intern Jobs in Gurugram | AMA Legal Solutions Careers",
  "description": "Apply for SDE Internship at AMA Legal Solutions. Work on Next.js, React, and build the future of Legal Tech in Gurugram.",
  "author": { "@type": "Organization", "name": "AMA Legal Solutions", "url": baseUrl },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": { "@type": "ImageObject", "url": `${baseUrl}/ama-legal-solutions-logo.png` }
  },
  "datePublished": "2024-02-17"
});

export const metadata: Metadata = {
  title: "SDE Intern Jobs in Gurugram | AMA Legal Solutions Careers",
  description: "Apply for SDE Internship at AMA Legal Solutions. Work on Next.js, React, and build the future of Legal Tech in Gurugram. Kickstart your tech career now.",
  keywords: ["SDE intern jobs gurugram", "software engineering internship india", "Next.js intern roles", "React developer internship", "legal tech careers"],
  alternates: { canonical: 'https://www.amalegalsolutions.com/careers/sde-intern' }
};

export default function SDEInternPage() {
  const baseUrl = "https://www.amalegalsolutions.com";
  
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "tech-focus", title: "Tech Focus" },
    { id: "responsibilities", title: "Responsibilities" },
    { id: "what-you-learn", title: "What You Learn" },
    { id: "requirements", title: "Requirements" },
    { id: "application-process", title: "Application Process" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Careers", href: "/careers" },
    { label: "SDE Intern", href: "/careers/sde-intern" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(baseUrl)) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(baseUrl)) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="job-posting-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema(baseUrl)) }} />

      <div className="bg-[#F8F5EC] min-h-screen font-[family-name:var(--font-polysans)]">
        <Navbar />
        
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="relative z-20 container mx-auto px-4 py-20 md:py-32 text-center">
            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Build the Future of Legal Tech as an <span className="text-[#D2A02A]">SDE Intern</span>
            </h1>
            <p className="text-sm md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Get hands-on experience with modern web technologies and build products that make a difference. Join our engineering team in Gurugram.
            </p>
            <Link href="/careers#application-form">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg text-lg">
                Apply for Internship
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
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] mb-6 border-b border-[#D2A02A]/20 pb-4">Engineering at AMA Legal Solutions</h2>
                <p className="text-lg leading-relaxed text-[#30261C]/80">
                  Legal tech is one of the most exciting frontiers in technology today. At AMA Legal Solutions, we are leveraging modern software engineering to make legal help more accessible, transparent, and efficient. As an <strong>SDE Intern</strong>, you won't just be fetching coffee; you'll be writing code that powers our direct-to-consumer legal platforms, our internal case management systems, and our AI-driven legal search tools.
                </p>
              </section>

              <section id="tech-focus" className="scroll-mt-32">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] mb-6">Our Tech Stack</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["React / Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Node.js", "Git / GitHub", "Vercel", "AI Integration"].map((tech, i) => (
                    <div key={i} className="bg-[#F8F5EC] p-4 rounded-lg text-center font-bold text-[#D2A02A] text-xs">
                      {tech}
                    </div>
                  ))}
                </div>
              </section>

              <section id="responsibilities" className="scroll-mt-32">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] mb-6">Key Responsibilities</h2>
                <ul className="space-y-4">
                  {[
                    "Develop and maintain responsive web components using React and Tailwind CSS.",
                    "Build server-side logic and API routes using Next.js App Router.",
                    "Integrate and manage data in Firestore and handle file uploads in Firebase Storage.",
                    "Participate in daily stand-ups and contribute to sprint planning.",
                    "Perform thorough testing and participate in peer code reviews.",
                    "Help optimize website performance and SEO metrics."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-[#D2A02A] mr-3 font-bold">•</span>
                      <span className="text-[#30261C]/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section id="what-you-learn" className="scroll-mt-32">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] mb-6">What You Will Learn</h2>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-[#30261C]/80">
                  <div className="p-4 bg-gray-50 rounded-lg"><strong>Professional Workflow:</strong> Learn how to ship production-ready code in a team.</div>
                  <div className="p-4 bg-gray-50 rounded-lg"><strong>SEO & Performance:</strong> Understand how to build pages that rank #1 on Google.</div>
                  <div className="p-4 bg-gray-50 rounded-lg"><strong>Legal Tech Domain:</strong> Gain unique insights into the legal industry and its digital transformation.</div>
                  <div className="p-4 bg-gray-50 rounded-lg"><strong>Mentorship:</strong> Receive direct feedback and guidance from senior engineers.</div>
                </div>
              </section>

              <section id="requirements" className="scroll-mt-32">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] mb-6">Requirements</h2>
                <ul className="list-disc pl-6 space-y-2 text-[#30261C]/80">
                  <li>Pursuing or recently completed B.Tech/B.E. in CS or related field.</li>
                  <li>Strong foundation in JavaScript/TypeScript and ES6+.</li>
                  <li>Good understanding of React hooks and component lifecycle.</li>
                  <li>Familiarity with CSS frameworks like Tailwind or Bootstrap.</li>
                  <li>Basic knowledge of Git and version control.</li>
                  <li>A passion for building high-quality products and learning new technologies.</li>
                </ul>
              </section>

              <section id="application-process" className="scroll-mt-32">
                <h2 className="text-2xl md:text-3xl font-bold text-[#30261C] mb-6">How to Apply</h2>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#D2A02A]/20"></div>
                  <div className="space-y-8 relative">
                    {[
                      { step: "1", title: "Submit Form", text: "Fill out the career application form with your details and Resume." },
                      { step: "2", title: "Tech Screening", text: "Take a short technical assessment to showcase your coding skills." },
                      { step: "3", title: "Interview Round", text: "Meet with our engineering lead to discuss legal tech and your projects." },
                      { step: "4", title: "Onboarding", text: "Start your internship at our engineering hub in Gurugram." }
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
                <h3 className="text-xl font-bold text-[#30261C] mb-4">Code with AMA</h3>
                <p className="text-sm text-[#30261C]/60 mb-6">
                  Ready to kickstart your tech career? Apply for the SDE Internship in Gurugram.
                </p>
                <Link href="/careers#application-form">
                  <button className="w-full bg-[#D2A02A] text-white py-3 rounded-xl font-bold hover:bg-[#b88a22] transition-colors">
                    Apply Now
                  </button>
                </Link>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs text-center text-[#30261C]/50 italic">Stipend: As per industry standards</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

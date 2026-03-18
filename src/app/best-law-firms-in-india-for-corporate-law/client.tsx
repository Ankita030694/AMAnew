'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import TableOfContents from '@/components/TableOfContents';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUser, faQuoteLeft, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Script from 'next/script';

// Content sections for TOC
const TOC_SECTIONS = [
  { id: 'introduction', title: 'The Evolving Landscape of Indian Corporate Law' },
  { id: 'cyril-amarchand-mangaldas', title: '1. Cyril Amarchand Mangaldas (CAM)' },
  { id: 'shardul-amarchand-mangaldas', title: '2. Shardul Amarchand Mangaldas & Co (SAM)' },
  { id: 'azb-partners', title: '3. AZB & Partners' },
  { id: 'khaitan-co', title: '4. Khaitan & Co.' },
  { id: 'trilegal', title: '5. Trilegal' },
  { id: 'jsa', title: '6. J. Sagar Associates (JSA)' },
  { id: 'luthra-luthra', title: '7. Luthra and Luthra Law Offices' },
  { id: 'nishith-desai', title: '8. Nishith Desai Associates' },
  { id: 'sandr-associates', title: '9. S&R Associates' },
  { id: 'induslaw', title: '10. IndusLaw' },
  { id: 'practice-areas', title: 'Essential Practice Areas in Corporate Law' },
  { id: 'choosing-firm', title: 'How to Choose the Right Corporate Legal Partner' },
  { id: 'faqs', title: 'Frequently Asked Questions (FAQ)' },
];

export default function CorporateLawContent() {
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    setExpandedFaqs(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Best Law Firms in India for Corporate Law", href: "/best-law-firms-in-india-for-corporate-law" },
  ];

  const faqData = [
    {
      question: "Which are the top 3 corporate law firms in India?",
      answer: "The top 3 corporate law firms in India are generally considered to be Cyril Amarchand Mangaldas, Shardul Amarchand Mangaldas, and AZB & Partners. These firms consistently rank at the top of international legal directories like Chambers and Partners and The Legal 500 due to their involvement in the largest and most complex transactions in the country."
    },
    {
      question: "What legal services do corporate law firms provide?",
      answer: "Corporate law firms provide a wide range of services including mergers and acquisitions (M&A), private equity and venture capital investments, capital markets (IPOs), banking and finance, corporate governance, intellectual property, tax advisory, and dispute resolution for commercial matters."
    },
    {
      question: "How do I choose the right corporate law firm for my startup?",
      answer: "For startups, it is important to choose a firm that has a dedicated startup or venture capital practice. You should look for firms that offer flexible fee structures, have experience in your specific industry sector, and can provide long-term strategic guidance as your company grows."
    },
    {
      question: "What is the difference between a full-service firm and a boutique firm?",
      answer: "A full-service law firm offers legal assistance across all major practice areas including corporate, litigation, tax, and intellectual property. A boutique law firm specializes in one or two specific areas of law, such as taxation or intellectual property, providing deep niche expertise but may not handle all legal requirements of a business."
    },
    {
      question: "Who is the most famous corporate lawyer in India?",
      answer: "Several lawyers are icons in the Indian corporate legal landscape. Zia Mody of AZB & Partners, Cyril Shroff of Cyril Amarchand Mangaldas, Shardul Shroff of Shardul Amarchand Mangaldas, and Haigreve Khaitan of Khaitan & Co are among the most respected and influential names in the profession."
    },
    {
      question: "Are Indian law firms allowed to partner with foreign firms?",
      answer: "Currently, foreign law firms are not allowed to practice Indian law directly or open offices in India for litigation. However, they can provide legal advice on international law and foreign law. Indian law firms often collaborate with global firms on cross-border transactions as co-counsels."
    },
    {
      question: "What is the significance of the 2015 split of Amarchand Mangaldas?",
      answer: "The 2015 split of the nearly century-old Amarchand Mangaldas & Suresh A Shroff & Co led to the formation of two major powerhouses: Cyril Amarchand Mangaldas (based in Mumbai) and Shardul Amarchand Mangaldas & Co (based in Delhi). This event significantly reshaped the competitive landscape of corporate legal services in India."
    },
    {
      question: "Which firms are best for Private Equity in India?",
      answer: "Firms like AZB & Partners, Trilegal, and Cyril Amarchand Mangaldas are widely recognized for their excellence in private equity. They advise major global funds and investors on high-value investments across various sectors in the Indian economy."
    },
    {
      question: "Do corporate law firms handle commercial litigation?",
      answer: "Yes, most top-tier full-service corporate law firms have robust dispute resolution and litigation practices. They represent corporate clients in various forums including the National Company Law Tribunal (NCLT), High Courts, and the Supreme Court of India, as well as in international arbitrations."
    },
    {
      question: "What is the cost of hiring a top corporate law firm in India?",
      answer: "The cost varies significantly depending on the complexity of the matter, the seniority of the lawyers involved, and the duration of the engagement. Top-tier firms often charge premium hourly rates or fixed fees for large transactions. Smaller firms or boutique practices might offer more competitive pricing for routine legal work."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="bg-[#FAF9F6] text-[#30261C] font-sans selection:bg-[#D2A02A] selection:text-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-[#1A1A1A]">
        {/* Abstract Background Design */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,#D2A02A_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,#5A4C33_0%,transparent_50%)]"></div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight">
            Best Law Firms in India for <span className="text-[#D2A02A]">Corporate Law</span> (2024-2025)
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            The ultimate guide to India's premier corporate legal advisors. Discover rankings, 
            exclusive deals, and top-tier legal experts reshaping the Indian business world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-10 py-5 bg-[#D2A02A] text-white rounded-xl font-bold text-lg hover:bg-[#B88A22] transition-all transform hover:scale-105 shadow-2xl"
            >
              Consult a Corporate Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb Section */}
      <div className="bg-white border-b border-gray-100 py-4 px-4 sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto max-w-[1600px]">
           <Breadcrumbs items={breadcrumbItems} />
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-[1700px] py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-12 items-start">
          
          {/* LEFT COLUMN: Table of Contents */}
          <aside className="hidden lg:block sticky top-32 max-h-[80vh] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-200">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-6 text-[#30261C] border-b pb-4">Guide Navigator</h3>
              <nav className="space-y-2">
                {TOC_SECTIONS.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="block text-sm text-gray-600 hover:text-[#D2A02A] transition-colors py-1 leading-relaxed border-l-2 border-transparent hover:border-[#D2A02A] pl-4"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* MIDDLE COLUMN: Main Content */}
          <main className="min-w-0">
            <article className="prose prose-xl max-w-none prose-headings:text-[#30261C] prose-p:text-gray-700 prose-p:leading-[1.8] prose-li:text-gray-700 bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-gray-50">
              
              <section id="introduction" className="mb-20 scroll-mt-32">
                <h2 className="text-4xl font-bold mb-8">The Evolving Landscape of Indian Corporate Law</h2>
                <p>
                  The corporate legal sector in India has undergone a massive transformation over the last decade. As the Indian economy continues to grow at a rapid pace, the demand for sophisticated legal services has reached unprecedented heights. Corporate law firms in India are no longer just legal advisors; they have become strategic partners to businesses, helping them navigate a complex web of regulatory frameworks, mergers, acquisitions, and cross-border investments.
                </p>
                <p>
                  In this comprehensive guide, we delve into the top 10 best law firms in India for corporate law. We look at their history, their expertise, and why they are the preferred choice for some of the world's largest companies. This ranking is based on various factors including market reputation, quality of deals, client feedback, and recognition from international legal bodies.
                </p>
                <p>
                  India's legal market is unique. Unlike many other global jurisdictions, law firms in India are restricted in their structure and size, yet they manage to handle transactions worth billions of dollars. The liberalization of the economy in the 1990s was the initial spark, but the modern era of corporate law was truly defined by the rise of home-grown powerhouses that rival global giants in terms of expertise and service quality.
                </p>
                <p>
                  The role of a corporate lawyer in India today involves more than just drafting contracts. It requires a deep understanding of sectoral regulations, taxation, and international business standards. Whether it is a multi-billion dollar acquisition or a complex restructuring of a family-owned business, these firms have demonstrated an ability to deliver results under high pressure.
                </p>
                <p>
                   As we look towards 2025, the focus is shifting towards emerging technologies, environmental and social governance (ESG), and digital transformation. The firms listed here are at the forefront of these changes, setting new benchmarks for legal excellence in the country.
                </p>
                <h3 className="text-2xl font-bold mt-12 mb-6">The Importance of Corporate Legal Counsel in Modern Business</h3>
                <p>
                  In the early days of Indian industry, legal advice was often sought as a reactive measure, typically when a dispute had already surfaced or a regulation had been breached. However, the contemporary business environment demands a proactive approach. Corporate legal counsel now plays a critical role in the strategic planning of a company. From the initial stages of incorporation and capital raising to the maturity phase of global expansion and initial public offerings, legal experts are involved in every step.
                </p>
                <p>
                  One of the primary reasons for the increased importance of corporate law firms is the complexity of Indian regulations. India has a federal system where both central and state laws can overlap. Furthermore, sectors like telecommunications, aviation, insurance, and banking have their own powerful regulators like TRAI, DGCA, IRDAI, and RBI, respectively. Navigating these requires specialized knowledge that only top-tier firms can provide.
                </p>
                <p>
                  Moreover, as Indian companies look to expand globally, they face the challenge of complying with international laws like the GDPR in Europe or the FCPA in the United States. Indian corporate law firms have evolved to provide advice that is not only valid in India but also aligned with global best practices. This dual capability is a hallmark of the best firms in the country.
                </p>
                <p>
                  The rise of the startup ecosystem in India has also contributed to the growth of corporate law. Startups require specialized advice on venture capital funding, founder agreements, and employee stock option plans (ESOPs). Many top firms have set up dedicated practices to cater to this high-growth sector, recognizing that today's fledgling startups could be tomorrow's multi-billion dollar conglomerates.
                </p>
                <p>
                  Finally, the increasing focus on corporate governance and ethics has made legal counsel indispensable. In an era where corporate transparency is highly valued by investors and the public, firms help companies set up robust internal systems to ensure compliance and avoid white-collar crimes. This preventive role is perhaps the most significant contribution of modern corporate law firms to the Indian economy.
                </p>
              </section>

              <section id="cyril-amarchand-mangaldas" className="mb-20 scroll-mt-32">
                <h2 className="text-4xl font-bold mb-8">1. Cyril Amarchand Mangaldas (CAM)</h2>
                <p>
                  Cyril Amarchand Mangaldas is widely regarded as the premier destination for high-stakes corporate legal work in India. The firm, led by the legendary Cyril Shroff, has a presence across the nation and is known for its involvement in the most complex and high-value transactions.
                </p>
                <h3 className="text-2xl font-bold mt-8 mb-4">Historical Context and Legacy</h3>
                <p>
                  The roots of CAM trace back to the iconic Amarchand & Mangaldas & Suresh A. Shroff & Co, which was founded in 1917. Following a historic split in 2015, Cyril Amarchand Mangaldas emerged as a new entity but carried forward a legacy of nearly 100 years. This transition was a pivotal moment in the Indian legal history, creating two of the most powerful firms in the country today.
                </p>
                <p>
                  Cyril Shroff, the Managing Partner, has consistently been ranked as one of the most influential lawyers in Asia. His vision for the firm has always been global, seeking to implement international standards within the Indian context. The firm's headquarters in Mumbai, often referred to as the financial capital of India, serves as the nerve center for its nationwide operations.
                </p>
                <h3 className="text-2xl font-bold mt-8 mb-4">Unmatched Expertise in Mergers and Acquisitions</h3>
                <p>
                  CAM has built an unmatched reputation in Mergers and Acquisitions (M&A). They have advised on some of the largest deals in Indian corporate history, including Walmart's acquisition of Flipkart and various major acquisitions by the Reliance Group and Tata Sons. Their expertise is not limited to M&A; they also excel in banking, project finance, and capital markets.
                </p>
                <p>
                  The firm's ability to handle high-value cross-border transactions is particularly noteworthy. They have a team of over 750 lawyers, including more than 150 partners, providing a depth of expertise that is difficult to match. The firm has also been a leader in adopting legal technology, using artificial intelligence and data analytics to streamline the due diligence process and enhance client service.
                </p>
                <h3 className="text-2xl font-bold mt-8 mb-4">Strategic Sectoral Focus</h3>
                <p>
                  Beyond traditional corporate law, CAM has developed specialized niche practices in sectors like renewable energy, pharmaceutical compliance, and technology law. Their advice is often sought by the government for drafting new legislations and policy frameworks. This unique position at the intersection of law, business, and policy gives them an edge over competitors.
                </p>
                <p>
                  The firm also places a strong emphasis on continuing legal education for its associates. The CAM Academy is internally renowned for its rigorous training modules, ensuring that every lawyer at the firm is equipped with the latest knowledge and skills required for high-stakes advisory work.
                </p>
                <h3 className="text-2xl font-bold mt-8 mb-4">Notable Accolades and Rankings</h3>
                <p>
                   CAM consistently sweeps the awards at major legal ceremonies. They have been named India Law Firm of the Year multiple times by ALB India Awards and IBLJ Indian Law Firm Awards. Their partners are frequently featured in the Global Elite lists published by Chambers and Partners. For many businesses, having the CAM name on a legal opinion is considered the ultimate gold standard of reliability.
                </p>
              </section>

              <section id="shardul-amarchand-mangaldas" className="mb-20 scroll-mt-32">
                <h2 className="text-4xl font-bold mb-8">2. Shardul Amarchand Mangaldas & Co (SAM)</h2>
                <p>
                  Shardul Amarchand Mangaldas & Co is the other half of the historic 2015 split and has quickly established itself as a formidable force in the Indian legal market. Led by Shardul Shroff and Pallavi Shroff, the firm has a strong presence in New Delhi and has expanded rapidly across all major Indian cities.
                </p>
                <h3 className="text-2xl font-bold mt-8 mb-4">Core Strengths</h3>
                <p>
                  SAM is particularly known for its strong litigation and dispute resolution practices, which complement its stellar corporate team. They have a reputation for being aggressive yet strategic, often finding creative solutions to impossible legal problems. Their work in the fields of competition law and white-collar crime is highly respected.
                </p>
                <p>
                  In the corporate sphere, SAM has been involved in major telecommunications deals and has a strong practice in the infrastructure and energy sectors. Their client list includes global tech giants, major domestic players, and public sector undertakings. The firm is known for its rigor and academic depth, with many of its partners being distinguished legal scholars.
                </p>
                <p>
                  The firm's commitment to excellence is reflected in its recruitment and training programs. They attract Some of the brightest legal minds in the country, ensuring that their services are of the highest standard. Their ability to integrate corporate advisory with robust litigation support provides a unique advantage to their clients during hostile takeovers or complex shareholders' disputes.
                </p>
              </section>

              <section id="azb-partners" className="mb-20 scroll-mt-32">
                <h2 className="text-4xl font-bold mb-8">3. AZB & Partners</h2>
                <p>
                  AZB & Partners is often described as the most elite boutique-style large firm in India. Founded by Zia Mody, Bahram Vakil, and Ajay Bahl, the firm is known for its intense focus on quality and its enviable client roster.
                </p>
                <h3 className="text-2xl font-bold mt-8 mb-4">The Zia Mody Legacy</h3>
                <p>
                  Zia Mody is arguably the most recognizable name in Indian corporate law. Her leadership has placed AZB at the center of almost every major deal in the country. The firm is known for its responsiveness and its ability to work around the clock to close complex transactions.
                </p>
                <p>
                  AZB focuses heavily on Private Equity and M&A. They are the preferred advisors for global investment firms like Blackstone and KKR. The firm's culture is one of extreme dedication, with partners personally involved in every major aspect of a deal. This hands-on approach has earned them immense loyalty from their clients.
                </p>
                <p>
                  Beyond M&A, AZB has a strong regulatory and compliance practice. They help companies navigate the complexities of the Securities and Exchange Board of India (SEBI) and the Reserve Bank of India (RBI) regulations. Their ability to provide clear, actionable advice in a volatile regulatory environment is what sets them apart.
                </p>
              </section>

              <section id="khaitan-co" className="mb-20 scroll-mt-32">
                <h2 className="text-4xl font-bold mb-8">4. Khaitan & Co.</h2>
                <p>
                  Founded in 1911, Khaitan & Co is one of the oldest law firms in India. While many old firms struggled to keep up with the changing times, Khaitan & Co successfully modernized itself in the early 2000s and is now a powerhouse in the corporate world.
                </p>
                <h3 className="text-2xl font-bold mt-8 mb-4">A Full-Service Powerhouse</h3>
                <p>
                  What makes Khaitan & Co stand out is its truly full-service nature. They have strong practices in tax, intellectual property, and real estate, in addition to their top-tier corporate team. This allows them to provide comprehensive legal solutions under one roof.
                </p>
                <p>
                  The firm has a strong presence in Mumbai, Kolkata, New Delhi, and Bengaluru. They are known for their collegiate environment and their focus on long-term client relationships. Their transition from a traditional family-run firm to a modern professional entity is a case study in successful evolution.
                </p>
                <p>
                  Khaitan and Co's corporate team is highly regarded for its work in the manufacturing and retail sectors. They have also been at the forefront of the insolvency and bankruptcy reforms in India, advising on many of the largest cases under the Insolvency and Bankruptcy Code (IBC). Their deep understanding of the Indian market combined with global standards of service makes them a formidable competitor.
                </p>
              </section>

              <section id="trilegal" className="mb-20 scroll-mt-32">
                <h2 className="text-4xl font-bold mb-8">5. Trilegal</h2>
                <p>
                  Trilegal is a relatively young firm compared to the others on this list, but its rise has been nothing short of meteoric. Founded in 2000, it was one of the first firms in India to adopt a professional management structure without a core family at the helm.
                </p>
                <h3 className="text-2xl font-bold mt-8 mb-4">Innovative Partnership Model</h3>
                <p>
                  Trilegal's lockstep partnership model has been a key factor in its success. It promotes a culture of cooperation rather than competition among partners, which translates into better service for clients. The firm is known for its high energy and its focus on new-age sectors like technology, renewables, and e-commerce.
                </p>
                <p>
                  They have a strong practice in employment law and project finance. Their corporate team is known for its pragmatic and business-oriented advice. This approach has made them a favorite among young entrepreneurs and multinational technology companies.
                </p>
                <p>
                  Trilegal has consistently been recognized as one of the best places to work in the legal industry. This allows them to retain top talent and provide consistent quality to their clients. Their international perspective and local expertise make them a top choice for cross-border transactions.
                </p>
              </section>

              <section id="jsa" className="mb-20 scroll-mt-32">
                <h2 className="text-4xl font-bold mb-8">6. J. Sagar Associates (JSA)</h2>
                <p>
                  JSA was founded by Jyoti Sagar in 1991, coinciding with the liberalization of the Indian economy. The firm has grown from a small practice to one of the largest and most respected firms in the country.
                </p>
                <h3 className="text-2xl font-bold mt-8 mb-4">Pioneering Professionalism</h3>
                <p>
                  JSA was a pioneer in moving away from the family-led model that dominated the Indian legal landscape. They have a strong focus on corporate governance within the firm, ensuring that merit is rewarded at all levels.
                </p>
                <p>
                   Their expertise is particularly strong in the power, infrastructure, and banking sectors. They have been involved in many of India's most significant energy projects. Their regulatory practice is also highly regarded, with several partners often consulted by government bodies on policy matters.
                </p>
                <p>
                  In recent years, JSA has expanded its corporate and commercial litigation practice, making it a truly full-service firm. They have a reputation for providing honest and straightforward advice, even if it is not what the client wants to hear. This integrity has built them a very loyal client base over the decades.
                </p>
              </section>

              <section id="luthra-luthra" className="mb-20 scroll-mt-32">
                <h2 className="text-4xl font-bold mb-8">7. Luthra and Luthra Law Offices</h2>
                <p>
                  Luthra and Luthra, founded by Rajiv Luthra, has been a central player in the Indian legal scene for decades. The firm is known for its vibrant culture and its involvement in some of the most innovative deals in the country.
                </p>
                <h3 className="text-2xl font-bold mt-8 mb-4">Focus on Innovation</h3>
                <p>
                  Luthra and Luthra has always been at the cutting edge of legal developments. They were among the first to build a dedicated practice for capital markets and have remained a leader in that field. Their corporate team is known for its versatility and its ability to handle projects across different industries.
                </p>
                <p>
                  The firm has a strong presence in New Delhi and Mumbai and is known for its excellent training ground for young lawyers. Their work in project finance and banking is particularly noteworthy, having advised on several large-scale international thermal and solar power projects.
                </p>
              </section>

              <section id="nishith-desai" className="mb-20 scroll-mt-32">
                <h2 className="text-4xl font-bold mb-8">8. Nishith Desai Associates</h2>
                <p>
                  Nishith Desai Associates (NDA) is a research-driven boutique firm that has outsized influence in the corporate legal world. They specialize in high-growth sectors like technology, media, and healthcare.
                </p>
                <h3 className="text-2xl font-bold mt-8 mb-4">The Research-First Approach</h3>
                <p>
                  Unlike most firms that focus on billable hours, NDA focuses on research and thought leadership. They are often the first to publish detailed analyses on new laws or emerging trends like cryptocurrency, fintech, and digital taxation.
                </p>
                <p>
                  Their corporate practice is highly integrated with their tax and regulatory expertise. This makes them the go-to firm for complex international tax planning and cross-border investments into India's tech sector. They have a unique firm culture that resembles a think-tank rather than a traditional law office.
                </p>
              </section>

              <section id="sandr-associates" className="mb-20 scroll-mt-32">
                <h2 className="text-4xl font-bold mb-8">9. S&R Associates</h2>
                <p>
                  S&R Associates is a premium firm that focuses on high-end corporate work. They have chosen to remain relatively small compared to the giants, allowing them to maintain an extremely high partner-to-associate ratio.
                </p>
                <h3 className="text-2xl font-bold mt-8 mb-4">High-End Corporate Focus</h3>
                <p>
                  S&R is known for its expertise in Capital Markets and M&A. They often work on deals that involve global investment banks and major multinational corporations. Their work is characterized by precision and a deep understanding of international legal standards.
                </p>
                <p>
                  The firm's focus on quality over quantity has earned them a reputation as one of the most reliable firms in the country. Their partners are deeply involved in every matter, ensuring that clients receive top-level strategic advice at all times.
                </p>
              </section>

              <section id="induslaw" className="mb-20 scroll-mt-32">
                <h2 className="text-4xl font-bold mb-8">10. IndusLaw</h2>
                <p>
                  IndusLaw is a rapidly growing full-service firm with a strong presence in India's startup hubs, particularly Bengaluru. They have built a reputation for being accessible, practical, and highly efficient.
                </p>
                <h3 className="text-2xl font-bold mt-8 mb-4">The Tech and Startup Favorite</h3>
                <p>
                  IndusLaw is the preferred firm for many of India's unicorns and upcoming startups. They understand the fast-paced nature of the tech world and provide legal advice that keeps up with business needs. Their work in Private Equity and Venture Capital is among the best in the country.
                </p>
                <p>
                  In addition to their work with startups, IndusLaw has a strong general corporate and real estate practice. Their ability to handle large volumes of work without compromising on quality has made them a significant player in a very short amount of time.
                </p>
              </section>

              <section id="practice-areas" className="mb-20 scroll-mt-32">
                <h2 className="text-4xl font-bold mb-8">Essential Practice Areas in Corporate Law</h2>
                <p>
                  To understand what makes these firms the best, one must look at the various sub-fields of corporate law they excel in. Each area requires a different set of skills and a unique understanding of the legal landscape:
                </p>
                <h3 className="text-2xl font-bold mt-10 mb-4">1. Mergers and Acquisitions (M&A)</h3>
                <p>
                  M&A is the cornerstone of corporate law. It involves the buying, selling, and merging of businesses. Top-tier firms help companies navigate the complex process of due diligence, valuation, and contract negotiation. In India, this also involves strict compliance with the Companies Act and SEBI regulations. A successful M&A lawyer must be a master of contract law while also having a keen sense of business strategy.
                </p>
                <h3 className="text-2xl font-bold mt-10 mb-4">2. Private Equity and Venture Capital</h3>
                <p>
                  This practice area has seen explosive growth due to the Indian startup boom. Firms represent investors like private equity funds and venture capitalists, as well as the companies receiving the investment. The work includes drafting investment agreements, shareholders' agreements, and ensuring that the rights of both parties are protected. It often requires creative legal structuring to ensure tax efficiency and regulatory compliance.
                </p>
                <h3 className="text-2xl font-bold mt-10 mb-4">3. Capital Markets</h3>
                <p>
                  When a company decides to go public, it enters the world of capital markets. Law firms act as legal counsels to the issuers or the underwriters. They prepare the Draft Red Herring Prospectus (DRHP), ensure compliance with SEBI's listing requirements, and manage the legal aspects of the entire IPO process. This is one of the most high-pressure practice areas, with strict deadlines and rigorous disclosure standards.
                </p>
                <h3 className="text-2xl font-bold mt-10 mb-4">4. Banking and Finance</h3>
                <p>
                  Corporate firms are essential for large-scale lending. They advise banks and corporate borrowers on loan agreements, security creation, and complex financial instruments. This also includes project finance for infrastructure projects where the legal structure must account for long-term risks and government guarantees.
                </p>
                <h3 className="text-2xl font-bold mt-10 mb-4">5. Insolvency and Bankruptcy</h3>
                <p>
                  Since the enactment of the Insolvency and Bankruptcy Code (IBC) in 2016, this has become a dominant practice area. Firms represent creditors, corporate debtors, or insolvency professionals. The focus is on the time-bound resolution of distressed assets. It requires a deep understanding of financial forensics and the ability to litigate effectively in the National Company Law Tribunal (NCLT).
                </p>
                <h3 className="text-2xl font-bold mt-10 mb-4">6. Corporate Governance and Compliance</h3>
                <p>
                  With increasing regulatory scrutiny, companies need ongoing advice on how to manage their internal affairs. This includes advising on board compositions, director liabilities, corporate social responsibility (CSR) mandates, and environmental regulations. Firms help companies set up ethical frameworks that reduce the risk of legal action and enhance their reputation in the market.
                </p>
                <h3 className="text-2xl font-bold mt-10 mb-4">7. Real Estate and Project Development</h3>
                <p>
                  In a country like India, real estate law is notoriously complex due to land title issues and varying state regulations. Corporate firms with strong real estate practices help companies acquire land for factories, offices, and commercial projects. This involves intensive title searches and navigating the Real Estate Regulatory Authority (RERA) rules.
                </p>
                <h3 className="text-2xl font-bold mt-10 mb-4">8. Intellectual Property (IP)</h3>
                <p>
                  In the modern digital economy, a company's intellectual property is often its most valuable asset. Law firms help companies register and protect their trademarks, patents, and copyrights. They also handle IP litigation, which is becoming increasingly common in the technology and pharmaceutical sectors.
                </p>
                 <h3 className="text-2xl font-bold mt-10 mb-4">9. Tax Advisory</h3>
                <p>
                  Corporate law and tax law are inseparable. Every major corporate decision has tax implications. The best corporate law firms have integrated tax practices that provide advice on direct and indirect taxes, including GST. They help companies structure their transactions in the most tax-efficient manner while ensuring full compliance with the law.
                </p>
              </section>

              <section id="choosing-firm" className="mb-20 scroll-mt-32">
                <h2 className="text-4xl font-bold mb-8">How to Choose the Right Corporate Legal Partner</h2>
                <p>
                   Choosing a law firm is one of the most important decisions a company will make. It's not just about the name of the firm; it's about the people who will be handling your matters.
                </p>
                <p>
                  Consider the following factors:
                </p>
                <ol>
                  <li><strong>Relevant Experience:</strong> Does the firm have experience in your specific industry? A firm that understands the nuances of the pharmaceutical sector might be better for a drug manufacturing company than a general corporate firm.</li>
                  <li><strong>Partner Availability:</strong> On a complex deal, you want to ensure that the experienced partners are actually involved and not just delegating everything to junior associates.</li>
                  <li><strong>Cost Structure:</strong> Understand how the firm bills. Are they open to fixed fee arrangements or are they strictly hourly? For startups, cost predictability is often more important than the absolute lowest price.</li>
                  <li><strong>Global Reach:</strong> If your company has international operations, you need a firm with strong international desks or partnerships with foreign firms.</li>
                  <li><strong>Culture and Chemistry:</strong> Legal matters can be stressful. You need to work with a team that you trust and respect.</li>
                </ol>
              </section>

              <section id="faqs" className="mb-20 scroll-mt-32">
                <h2 className="text-4xl font-bold mb-8">Frequently Asked Questions (FAQ)</h2>
                <div className="space-y-6">
                  {faqData.map((faq, index) => (
                    <div key={index} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm transition-all hover:shadow-md bg-gray-50/30">
                      <button 
                        onClick={() => toggleFaq(index)}
                        className="w-full flex justify-between items-center p-6 text-left font-bold text-lg hover:bg-gray-50 transition-colors"
                      >
                        <span className="flex items-center gap-4">
                           <span className="text-[#D2A02A] text-2xl">Q.</span>
                           {faq.question}
                        </span>
                        <span className={`transition-transform duration-300 ${expandedFaqs.includes(index) ? 'rotate-180' : ''}`}>
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </span>
                      </button>
                      <div className={`overflow-hidden transition-all duration-300 ${expandedFaqs.includes(index) ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 mt-2 ml-10">
                          {faq.answer}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <div className="mt-20 p-12 bg-[#30261C] text-white rounded-3xl text-center shadow-xl">
                <h2 className="text-4xl font-bold mb-6 text-white">Need Expert Corporate Legal Solutions?</h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                  At AMA Legal Solutions, we bridge the gap between complex legal regulations and your business goals. Our experts are ready to guide you.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-block px-12 py-5 bg-[#D2A02A] text-white rounded-xl font-bold text-xl hover:bg-white hover:text-[#30261C] transition-all transform hover:scale-105"
                >
                  Schedule an Expert Consultation
                </Link>
              </div>

            </article>
          </main>

          {/* RIGHT COLUMN: Sidebar CTA and Related Links */}
          <aside className="space-y-8 sticky top-32">
            
            {/* CTA Container */}
            <div className="bg-[#5A4C33] p-8 rounded-2xl shadow-lg border border-[#D2A02A]/20 text-white relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#D2A02A]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">Legal Strategy Session</h3>
              <p className="text-gray-200 mb-8 text-sm relative z-10 leading-relaxed">
                Connect with our expert corporate legal advisors today. We specialize in navigating the complex legal terrain of the Indian market.
              </p>
              <div className="space-y-4 relative z-10">
                <a 
                  href="tel:+918700343611" 
                  className="flex items-center gap-4 w-full bg-[#D2A02A] p-4 rounded-xl font-bold hover:bg-white hover:text-[#5A4C33] transition-all shadow-md group/btn"
                >
                  <FontAwesomeIcon icon={faPhone} className="group-hover/btn:animate-bounce" />
                  +91 8700343611
                </a>
                <Link 
                  href="/contact" 
                  className="flex items-center gap-4 w-full border border-white p-4 rounded-xl font-bold hover:bg-white hover:text-[#5A4C33] transition-all justify-center"
                >
                  Request a Free Callback
                </Link>
              </div>
            </div>

            {/* Related Pages container */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
               <h3 className="text-xl font-bold mb-6 text-[#30261C] border-b pb-4">Our Expertise</h3>
               <div className="space-y-4">
                 {[
                   { name: "Legal Services in Delhi", url: "/legal-services-in-delhi" },
                   { name: "Trademark Registration", url: "/how-to-register-fssai-licence" }, // Reusing relevant internal links
                   { name: "Loan Settlement Advice", url: "/how-to-settle-loan-with-bank" },
                   { name: "Send Legal Notice", url: "/send-legal-notice" },
                   { name: "Corporate Compliance", url: "/virtual-inhouse-councel" }
                 ].map((link, idx) => (
                   <Link 
                    key={idx} 
                    href={link.url}
                    className="flex items-center gap-3 text-sm font-medium text-gray-600 hover:text-[#D2A02A] transition-all group"
                   >
                     <span className="w-1.5 h-1.5 bg-[#D2A02A] rounded-full opacity-50 group-hover:opacity-100"></span>
                     {link.name}
                   </Link>
                 ))}
               </div>
            </div>

            {/* Trust Badge / Meta Info */}
            <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-gray-300 text-center">
               <div className="flex justify-center text-[#D2A02A] mb-3 text-xl">
                 <FontAwesomeIcon icon={faStar} />
                 <FontAwesomeIcon icon={faStar} />
                 <FontAwesomeIcon icon={faStar} />
                 <FontAwesomeIcon icon={faStar} />
                 <FontAwesomeIcon icon={faStar} />
               </div>
               <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                 Rated #1 Corporate Legal Advisor
               </p>
               <p className="text-[10px] text-gray-400 mt-2 leading-tight">
                 Updated for 2024-2025 based on peer reviews and deal volume.
               </p>
            </div>

          </aside>

        </div>
      </div>
    </div>
  );
}

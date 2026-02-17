import React from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import TableOfContents from "../../components/TableOfContents";
import Breadcrumbs from "../../components/Breadcrumbs";

export const metadata = {
  title: "What Loan Settlement Services Have Good Customer Support in India? (2025)",
  description:
    "Harassment stops when you have a responsive legal team. Discover loan settlement services with 24/7 support, dedicated case managers, and empathy.",
  keywords: [
    "loan settlement customer support india",
    "debt settlement companies with best reviews",
    "AMA Legal Solutions support number",
    "harassment complaints loan agents",
    "24/7 debt relief helpline",
    "personal loan settlement contact"
  ],
  alternates: {
    canonical: 'https://amalegalsolutions.com/what-loan-settlement-services-have-good-customer-support-in-india',
  },
  openGraph: {
    title: "What Loan Settlement Services Have Good Customer Support in India?",
    description: "Don't face the bank alone. Find settlement firms that actually pick up the phone and fight for you.",
    url: "https://amalegalsolutions.com/what-loan-settlement-services-have-good-customer-support-in-india",
    type: "article",
    images: [
      {
        url: "/services/support-hero.png",
        width: 1200,
        height: 630,
        alt: "Empathetic Loan Settlement Support",
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which loan settlement company has the best support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AMA Legal Solutions is rated highest for support because they provide a dedicated Case Manager and direct access to lawyers, unlike call-center based agencies."
      }
    },
    {
      "@type": "Question",
      "name": "Do settlement companies talk to recovery agents for me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, a good settlement firm will divert all valid calls to their legal team. If an agency asks you to just 'switch off your phone', they are providing bad support."
      }
    },
    {
      "@type": "Question",
      "name": "What if I get a legal notice at night?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Top-tier firms like AMA Legal have emergency helplines for clients to report police complaints or urgent legal notices, ensuring immediate legal intervention."
      }
    }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What Loan Settlement Services Have Good Customer Support in India?",
  "description": "A guide to finding debt relief agencies that prioritize client mental health and communication.",
  "author": {
    "@type": "Organization",
    "name": "AMA Legal Solutions"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AMA Legal Solutions",
    "logo": {
      "@type": "ImageObject",
      "url": "https://amalegalsolutions.com/logo.png"
    }
  },
  "datePublished": "2025-02-18",
  "dateModified": "2025-02-18"
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Loan Settlement Client Support",
  "description": "Legal and emotional support service for debt settlement clients.",
  "brand": {
    "@type": "Brand",
    "name": "AMA Legal Solutions"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "1200"
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
        "name": "Sneha R."
      },
      "reviewBody": "I was crying when I called them. The case manager calmed me down and told me exactly what to say to the agents. They saved my sanity."
    }
  ]
};

export default function CustomerSupportPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "why-support-matters", title: "Why Support is Critical" },
    { id: "support-metrics", title: "Evaluating Support Quality" },
    { id: "top-providers", title: "Top Support Providers" },
    { id: "ama-difference", title: "The AMA Human Touch" },
    { id: "mental-health", title: "Debt & Mental Health" },
    { id: "red-flags", title: "Signs of Bad Support" },
    { id: "client-reviews", title: "Client Experiences" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: "Loan Settlement", href: "/services/loan-settlement" },
    { label: "Best Customer Support", href: "/what-loan-settlement-services-have-good-customer-support-in-india" },
  ];

  // Mock Data for FAQs
  const faqs = [
    {
      question: "Which loan settlement company has the best support?",
      answer: "AMA Legal Solutions is rated highest for support because they provide a dedicated Case Manager and direct access to lawyers, unlike call-center based agencies."
    },
    {
      question: "Do settlement companies talk to recovery agents for me?",
      answer: "Yes, a good settlement firm will divert all valid calls to their legal team. If an agency asks you to just 'switch off your phone', they are providing bad support."
    },
    {
      question: "What if I get a legal notice at night?",
      answer: "Top-tier firms like AMA Legal have emergency helplines for clients to report police complaints or urgent legal notices, ensuring immediate legal intervention."
    },
    {
       question: "Can I meet the lawyer in person?",
       answer: "Most digital agencies don't allow this. AMA Legal Solutions has physical offices in Delhi, Mumbai, and Bangalore where you can meet your case manager face-to-face."
    }
  ];

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchemaWithId(breadcrumbItems)) }}
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
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-32 text-center">
            <h1 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight mt-10">
              What Loan Settlement Services Have <span className="text-[#D2A02A]">Good Customer Support?</span>
            </h1>
            <p className="text-sm md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Debt settlement isn't just about money; it's about peace of mind. Choose a partner who listens, responds, and stands by you against harassment <strong>24/7.</strong>
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg">
                Talk to a Caring Expert
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
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

              <div className="bg-white p-4 md:p-12 rounded-2xl shadow-sm space-y-8 md:space-y-12">
                
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why Empathy is the Most Underrated Feature in Debt Relief</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    When you are drowning in debt, you don't just need a calculator; you need a lifeline. The recovery agents calling you 50 times a day are trained to break your spirit. If your settlement agency is also unresponsive or rude, you are effectively fighting a war on two fronts.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    <strong>Good customer support in loan settlement</strong> means more than just picking up the phone. It means having a dedicated ally who understands the legal limits of recovery, calms your anxiety, and takes over the burden of communication from day one.
                  </p>
                </section>
                

                {/* Why Support Matters */}
                <section id="why-support-matters" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The "Silence" Check: Why Unresponsive Agencies Are Dangerous</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Imagine this: It's Saturday evening. Recovery agents are banging on your door. You call your settlement agency's helpline, but it says "Office closed, call back on Monday."
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    This scenario is a nightmare. Debt collection doesn't follow 9-5 office hours, so neither should your support system. Responsiveness is not a luxury; it's a safety requirement. Rapid intervention (sending a legal notice copy via WhatsApp to the agent) can stop the harassment instantly.
                  </p>
                </section>

                {/* Legal Rights Deep Dive */}
                <section id="legal-rights" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Legal Rights: The Shield Against Harassment</h2>
                   <p className="text-lg leading-relaxed mb-6 text-gray-700">
                     A customer support team that doesn't know the law is useless. Real support comes from empowering you with your rights defined by the RBI and Supreme Court.
                   </p>
                   
                   <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl mb-8">
                      <h3 className="text-xl font-bold text-blue-900 mb-3">RBI Fair Practices Code (Recovery)</h3>
                      <ul className="list-disc pl-5 space-y-2 text-blue-800">
                         <li><strong>Time Restriction:</strong> Agents can only call between 8:00 AM and 7:00 PM. Calls outside this window are illegal.</li>
                         <li><strong>Privacy:</strong> Agents cannot contact your neighbors, relatives, or employer about your debt without your explicit permission.</li>
                         <li><strong>Decency:</strong> Abusive language, threats to physical safety, or public shaming are strictly prohibited.</li>
                      </ul>
                   </div>

                   <p className="text-lg leading-relaxed mb-6 text-gray-700">
                     Most "Sales-Driven" settlement agencies won't tell you this because they want you to fear the bank. At AMA Legal Solutions, our support team actively uses these laws to file complaints with the <strong>Banking Ombudsman</strong> if a lender crosses the line.
                   </p>
                </section>

                {/* Psychology of Recovery */}
                <section id="psychology" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Psychology of Debt Recovery: How They Break You</h2>
                   <p className="text-lg leading-relaxed mb-6 text-gray-700">
                     Banks hire recovery agencies that use psychological scripts designed to induce panic. Understanding these tactics is the first step to defeating them.
                   </p>
                   <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                         <h3 className="font-bold text-lg mb-2 text-[#D2A02A]">The "Good Cop, Bad Cop" Routine</h3>
                         <p className="text-gray-600">One agent screams at you, and minutes later, another calls speaking politely, offering a "one-time deal" if you pay immediately. This creates confusion and urgency.</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                         <h3 className="font-bold text-lg mb-2 text-[#D2A02A]">The "Social Shame" Threat</h3>
                         <p className="text-gray-600">"We will send agents to your office" or "We will call your relatives." They know your reputation is your weak point and exploit it.</p>
                      </div>
                   </div>
                   <p className="text-lg leading-relaxed mb-6 text-gray-700">
                     <strong>Our Counter-Strategy:</strong> We intercept these threats. When an agent realizes they are speaking to a lawyer who is recording the call, the "script" falls apart immediately.
                   </p>
                </section>

                {/* Escalation Matrix */}
                <section id="escalation-matrix" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our 4-Level Escalation Matrix</h2>
                   <p className="text-lg leading-relaxed mb-6 text-gray-700">
                     We don't just "talk" to agents; we escalate complaints systematically to ensure results.
                   </p>
                   <div className="space-y-4 mb-8">
                      <div className="flex items-center bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                         <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold mr-4">1</div>
                         <div><strong className="text-blue-900">Level 1: Recovery Agent</strong> - We demand their ID and agency authorization letter.</div>
                      </div>
                      <div className="flex items-center bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                         <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4">2</div>
                         <div><strong className="text-blue-900">Level 2: Team Leader/Manager</strong> - We report the agent's misconduct and demand a written apology.</div>
                      </div>
                      <div className="flex items-center bg-blue-50 p-4 rounded-lg border-l-4 border-blue-700">
                         <div className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold mr-4">3</div>
                         <div><strong className="text-blue-900">Level 3: Bank Nodal Officer</strong> - We file a formal grievance citing RBI guidelines.</div>
                      </div>
                      <div className="flex items-center bg-blue-50 p-4 rounded-lg border-l-4 border-blue-800">
                         <div className="w-8 h-8 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold mr-4">4</div>
                         <div><strong className="text-blue-900">Level 4: Banking Ombudsman</strong> - If unresolved, we escalate to the RBI's Ombudsman scheme.</div>
                      </div>
                   </div>
                </section>

                {/* Support Metrics */}
                <section id="support-metrics" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">How to Evaluate Support Quality: The Checklist</h2>
                   <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-600 border border-gray-200">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                          <th className="px-6 py-3">Metric</th>
                          <th className="px-6 py-3">Bad Support (Run Away)</th>
                          <th className="px-6 py-3">Good Support (AMA Legal)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-bold">Response Time</td>
                          <td className="px-6 py-4">24-48 Hours (Email only)</td>
                          <td className="px-6 py-4 text-[#D2A02A] font-bold">Instant (WhatsApp/Phone)</td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-bold">Point of Contact</td>
                          <td className="px-6 py-4">Random Loop of Agents</td>
                          <td className="px-6 py-4 text-[#D2A02A] font-bold">Dedicated Case Manager</td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-bold">Escalation</td>
                          <td className="px-6 py-4">"Ma'am is busy"</td>
                          <td className="px-6 py-4 text-[#D2A02A] font-bold">Direct Lawyer Access</td>
                        </tr>
                        <tr className="bg-white border-b">
                          <td className="px-6 py-4 font-bold">Tone</td>
                          <td className="px-6 py-4">Scripted, Cold, Salesy</td>
                          <td className="px-6 py-4 text-[#D2A02A] font-bold">Empathetic, Legal, Calm</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Top Providers */}
                <section id="top-providers" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Top Loan Settlement Services by Support Quality</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We tested the support channels of major Indian settlement firms. Here is the verdict.
                  </p>

                  <div className="space-y-8">
                    {/* AMA Legal */}
                    <div className="border-2 border-[#D2A02A] bg-white p-6 md:p-8 rounded-xl shadow-lg relative">
                      <div className="absolute top-0 right-0 bg-[#D2A02A] text-white font-bold px-4 py-1 rounded-bl-lg rounded-tr-lg">#1 Best Support</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">1. AMA Legal Solutions</h3>
                      <p className="text-[#D2A02A] font-bold mb-4">Model: Dedicated Case Manager + Legal Team</p>
                      <p className="text-gray-700 mb-4">
                        AMA Legal treats clients like humans, not case numbers. You get a dedicated WhatsApp group with your Case Manager and a Senior Advocate. If you are harassed, you message in the group, and a lawyer responds with a plan of action within minutes.
                      </p>
                      <ul className="list-disc pl-5 text-gray-600 space-y-2">
                        <li><strong>Availability:</strong> Ultra-responsive, even on weekends for emergencies.</li>
                        <li><strong>Empathy:</strong> Staff is trained in mental health awareness.</li>
                        <li><strong>Video Calls:</strong> Yes, you can schedule Zoom/Meet calls to discuss strategy.</li>
                      </ul>
                       <Link href="/contact" className="text-[#D2A02A] font-bold hover:underline mt-4 block">Meet Your Case Manager &rarr;</Link>
                    </div>

                    {/* FREED */}
                    <div className="border border-gray-200 bg-white p-6 md:p-8 rounded-xl">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">2. FREED</h3>
                      <p className="text-gray-600 font-bold mb-4">Model: App-Based Support</p>
                      <p className="text-gray-700 mb-4">
                        FREED has a great app that lets you track your savings account. Their chat support is decent but can feel robotic. It is good for tech-savvy users who prefer not to talk on the phone, but lacks the "comforting voice" needed during severe crises.
                      </p>
                    </div>

                    {/* SingleDebt */}
                    <div className="border border-gray-200 bg-white p-6 md:p-8 rounded-xl">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">3. SingleDebt</h3>
                      <p className="text-gray-600 font-bold mb-4">Model: Counseling Based</p>
                      <p className="text-gray-700 mb-4">
                        SingleDebt offers good counseling and budgeting advice. Their support is friendly, though sometimes slow to respond to legal notices compared to a dedicated law firm.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Mental Health */}
                <section id="mental-health" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Debt & Mental Health: You Are Not Alone</h2>
                   <p className="text-lg leading-relaxed mb-6 text-gray-700">
                     The correlation between debt and depression is real. A supportive settlement agency doesn't just fix your finances; it protects your mental health.
                   </p>
                   <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                      <h3 className="font-bold text-blue-900 mb-2">The "Buffer" Effect</h3>
                      <p className="text-gray-700">
                        When you hire AMA Legal, we become the "Buffer Zone". We direct all calls to us. We handle the yelling and the threats. You get the silence you need to heal, work, and save money. This reduction in daily cortisol (stress) levels is our most valuable service.
                      </p>
                   </div>
                </section>

                {/* AMA Difference */}
                <section id="ama-difference" className="scroll-mt-32">
                   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The AMA Human Touch: Our "Client First" Protocol</h2>
                   <p className="text-lg leading-relaxed mb-6 text-gray-700">
                     At AMA Legal Solutions, we believe that debt settlement is 50% legal and 50% psychological. Our protocol is designed to support you on both fronts.
                   </p>
                   <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                         <h3 className="font-bold text-[#D2A02A] mb-2">Weekly Status Calls</h3>
                         <p className="text-gray-700">You don't have to chase us. Your Case Manager will schedule a weekly call to update you on negotiations, even if there is no major news, just to keep you informed and calm.</p>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
                         <h3 className="font-bold text-blue-900 mb-2">Emergency Harassment Line</h3>
                         <p className="text-gray-700">We have a dedicated line for active harassment. If an agent is at your door, you call us, and our lawyer speaks to them immediately on speakerphone.</p>
                      </div>
                   </div>
                </section>

                {/* Red Flags */}
                <section id="red-flags" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Signs of Bad Support (Red Flags)</h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    If your current agency does any of the following, fire them immediately.
                  </p>
                  <div className="space-y-4">
                     <div className="flex items-start bg-red-50 p-4 rounded-lg">
                        <span className="text-2xl mr-4">🚩</span>
                        <div>
                           <h4 className="font-bold text-red-900">Advice to "Switch Off Phone"</h4>
                           <p className="text-gray-700 text-sm">This is lazy and dangerous advice. Switiching off your phone makes you look like a willful defaulter (absconder) in the eyes of the law. A good agency handles the calls; they don't tell you to hide.</p>
                        </div>
                     </div>
                     <div className="flex items-start bg-red-50 p-4 rounded-lg">
                        <span className="text-2xl mr-4">🚩</span>
                        <div>
                           <h4 className="font-bold text-red-900">Rude or Aggressive Agents</h4>
                           <p className="text-gray-700 text-sm">Some settlement agencies hire ex-recovery agents who treat clients with the same disrespect. You are paying for help, not to be scolded.</p>
                        </div>
                     </div>
                     <div className="flex items-start bg-red-50 p-4 rounded-lg">
                        <span className="text-2xl mr-4">🚩</span>
                        <div>
                           <h4 className="font-bold text-red-900">No Written Updates</h4>
                           <p className="text-gray-700 text-sm">If they refuse to give you updates on email or WhatsApp and insist on "verbal only" communication, they are hiding their lack of progress.</p>
                        </div>
                     </div>
                  </div>
                </section>

                {/* Case Studies */}
                <section id="case-studies" className="scroll-mt-32">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Real Stories: How Good Support Saved the Day</h2>
                  
                  <div className="space-y-6 mb-8">
                     <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Case Study 1: The Senior Citizen Harassment</h3>
                        <div className="flex flex-col md:flex-row gap-4 mb-4">
                           <div className="bg-blue-50 px-3 py-1 rounded text-blue-800 text-sm font-semibold">Debt: ₹12 Lakhs</div>
                           <div className="bg-green-50 px-3 py-1 rounded text-green-800 text-sm font-semibold">Settled: ₹4.5 Lakhs</div>
                        </div>
                        <p className="text-gray-700 mb-2"><strong>The Crisis:</strong> Mr. Verma (68) was receiving 40+ calls daily. Agents threatened to visit his home while his wife was bedridden. He was hospitalized due to high BP.</p>
                        <p className="text-gray-700"><strong> AMA Intervention:</strong> Our Case Manager, Rahul, immediately took over. He served a legal notice for senior citizen harassment. He spoke to the bank's Zonal Manager. The calls stopped within 24 hours. Mr. Verma recovered and we settled the loan 3 months later.</p>
                     </div>

                     <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Case Study 2: The HR Email Threat</h3>
                        <div className="flex flex-col md:flex-row gap-4 mb-4">
                           <div className="bg-blue-50 px-3 py-1 rounded text-blue-800 text-sm font-semibold">Debt: ₹5 Lakhs</div>
                           <div className="bg-green-50 px-3 py-1 rounded text-green-800 text-sm font-semibold">Settled: ₹1.8 Lakhs</div>
                        </div>
                        <p className="text-gray-700 mb-2"><strong>The Crisis:</strong> An agent threatened to email Anjali's HR and CEO about her credit card default. She was terrified of losing her job.</p>
                        <p className="text-gray-700"><strong> AMA Intervention:</strong> We advised Anjali NOT to pay out of fear. We recorded the threat. Our lawyer sent a draft complaint to the Banking Ombudsman regarding privacy violation. The agency backtracked immediately and apologized.</p>
                     </div>
                  </div>
                </section>

                {/* Client Reviews */}
                <section id="client-reviews" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I was suicidal because of the threats. The AMA team didn't just settle my loan; they gave me hope. My case manager, Priya, spoke to me like a sister. I can't thank them enough."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">S</div>
                        <div>
                          <p className="font-bold text-gray-900">Sneha R.</p>
                          <p className="text-sm text-gray-500">Teacher, Bangalore</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "Other agencies treated me like a criminal for defaulting. AMA Legal treated me with dignity. They explained clearly that financial crisis can happen to anyone. Their support is 10/10."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">M</div>
                        <div>
                          <p className="font-bold text-gray-900">Manish K.</p>
                          <p className="text-sm text-gray-500">Business Owner, Mumbai</p>
                        </div>
                      </div>
                    </div>

                     <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "I used to get panic attacks every time the phone rang. After hiring AMA, I simply forwarded the calls to them. The silence was golden. They handled everything professionally."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Rajesh Verma</p>
                          <p className="text-sm text-gray-500">IT Professional, Pune</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "The best part was that I could actually meet them in their Delhi office. It gave me confidence that they are not a fly-by-night operator. Legit lawyers, real support."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">A</div>
                        <div>
                          <p className="font-bold text-gray-900">Amit Singh</p>
                          <p className="text-sm text-gray-500">Sales Manager, Delhi</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
                          <span className="text-[#D2A02A] mr-3">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-8">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            <div className="hidden lg:block space-y-8 sticky top-24">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need Someone to Listen?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Our experts are here to support you, not judge you.
                  </p>
                  <a 
                    href="tel:+918700343611" 
                    className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                  >
                    Call Support: +91-8700343611
                  </a>
                  <Link 
                    href="/contact"
                    className="block w-full bg-gray-100 text-gray-800 text-center py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Request Callback
                  </Link>
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

// Helper for breadcrumb schema
function breadcrumbSchemaWithId(items: { label: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://amalegalsolutions.com${item.href}`
    }))
  };
}

import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";

// Schema Data
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.amalegalsolutions.com" },
    { "@type": "ListItem", "position": 2, "name": "AMA Legal Solutions Application", "item": "https://www.amalegalsolutions.com/ama-legal-solutions-application" }
  ]
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "India's Best App for Legal Advice: AMA Legal Solutions Application 2026",
  "description": "Download AMA Legal Solutions, India's premier application for legal advice. Get direct access to a ranked law firm for loan settlement, pro-bono aid, and IPR services.",
  "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
  "author": { "@type": "Organization", "name": "AMA Legal Solutions" },
  "publisher": { "@type": "Organization", "name": "AMA Legal Solutions", "logo": { "@type": "ImageObject", "url": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png" } },
  "datePublished": "2026-03-11"
};

const faqs = [
  { "question": "What is the best app for legal advice in India?", "answer": "AMA Legal Solutions is recognized as India's best application for legal advice because it is the first app backed by a regulated pro-bono law firm. Unlike marketplace apps, queries are answered by verified advocates working directly under the firm's supervision." },
  { "question": "How can I get free legal advice through the AMA app?", "answer": "The application features a dedicated 'AMA' (Ask Me Anything) desk where users can post legal queries. Verified advocates provide preliminary guidance at no cost as part of the firm's pro-bono initiative to promote legal literacy." },
  { "question": "Does the AMA Legal Solutions app handle loan settlement?", "answer": "Yes, the app has a specialized module for loan and debt settlement. Users can upload their loan documents, receive a legal audit of their debt, and track the progress of their settlement negotiations with banks and lenders in real-time." },
  { "question": "Is my data secure on the AMA Legal Solutions application?", "answer": "The application uses military-grade encryption and is fully compliant with the Digital Personal Data Protection Act (DPDP) 2023. All communications and uploaded documents are stored in a secure vault accessible only to the client and assigned legal team." },
  { "question": "Can I track my court cases using the AMA app?", "answer": "Yes, our 'Case Desk' feature provides real-time updates on your litigation status. You can see upcoming hearing dates, access court orders, and view all filings related to your matter directly from your mobile device." },
  { "question": "Are the advocates on the AMA app verified?", "answer": "Every legal expert on the platform is a verified advocate enrolled with the Bar Council of India. Since the app is an extension of a regulated law firm, we maintain strict quality control over all guidance provided." },
  { "question": "How do I download the AMA Legal Solutions app?", "answer": "The app is available for download on both the Google Play Store (for Android) and the Apple App Store (for iOS). Simply search for 'AMA Legal Solutions' or use the official links on our website." },
  { "question": "Can NRIs use the AMA app for property matters in India?", "answer": "Absolutely. The app is specifically designed to bridge the gap for Global Indians. NRIs can manage their Indian properties, request title verifications, and draft wills or power of attorney through the app without traveling." },
  { "question": "What other services does the app offer besides advice?", "answer": "Beyond advice, the app facilitates trademark searches, IPR registration, drafting of legal notices, company incorporation, and MSME registrations. It is a comprehensive legal workspace in your pocket." },
  { "question": "Is the AMA Legal Solutions app free to use?", "answer": "Downloading the app and using the pro-bono query desk is free. Specialized services like document drafting, specific case representation, or advanced debt audits carry professional fees which are transparently quoted." }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.question,
    "acceptedAnswer": { "@type": "Answer", "text": f.answer }
  }))
};

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "AMA Legal Solutions Application",
  "image": "https://www.amalegalsolutions.com/ama-legal-solutions-logo.png",
  "description": "Comprehensive legal assistance app for loan settlement, pro-bono advice, and more.",
  "brand": { "@type": "Brand", "name": "AMA Legal Solutions" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "5240" }
};

export const metadata = {
  title: "AMA Legal Solutions Application - India's Best App for Legal Advice",
  description: "Download the best legal app in India for free advice, loan settlement, and direct firm-backed support. Join thousands who trust AMA Legal Solutions for their legal needs.",
  keywords: ["ama legal solutions application", "best app for legal advice in india", "free legal advice app", "loan settlement app india", "online legal assistance india", "nri legal app"],
  alternates: { canonical: 'https://www.amalegalsolutions.com/ama-legal-solutions-application' },
};

export default function AMALegalApplicationPage() {
  const tocSections = [
    { id: "introduction", title: "Introduction" },
    { id: "digital-justice", title: "Digital Justice" },
    { id: "core-features", title: "Core Features" },
    { id: "loan-settlement", title: "Loan Settlement" },
    { id: "pro-bono-aid", title: "Pro-Bono Aid" },
    { id: "nri-services", title: "NRI Services" },
    { id: "corporate-tools", title: "Corporate Tools" },
    { id: "data-privacy", title: "Data Privacy" },
    { id: "how-to-use", title: "How to Use" },
    { id: "why-trust-ama", title: "Why Trust AMA?" },
    { id: "testimonials", title: "Success Stories" },
    { id: "faqs", title: "FAQs" },
  ];

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "AMA Legal Solutions Application", href: "/ama-legal-solutions-application" },
  ];

  return (
    <>
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section - Matching loan-settlement style */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ background: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-12 md:py-32 text-center">
            <h1 className="text-2xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight mt-20">
              India's <span className="text-[#D2A02A]">Best App</span> for Legal Advice
            </h1>
            <p className="text-sm md:text-2xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-200">
              Empowering 1.4 billion citizens with instant access to elite legal counsel. Download the AMA Legal Solutions Application and secure your rights today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank">
                <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                  Download Android App
                </button>
              </Link>
              <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank">
                <button className="bg-white hover:bg-gray-100 text-[#1a202c] font-bold py-3 px-6 md:py-4 md:px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                  Download iOS App
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-[1600px] py-8">
          <Breadcrumbs items={breadcrumbItems} />
          
          {/* Mobile App Store Links */}
          <div className="lg:hidden flex flex-col gap-3 mb-6 mt-2">
            <p className="text-sm font-semibold mb-2" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Get Legal Help on Your Phone</p>
            <div className="flex gap-4">
              <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
                <Image src="/newAssets/appstore.svg" alt="Google Play" width={130} height={36} className="w-[120px] h-auto" />
              </Link>
              <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
                <Image src="/newAssets/playstore.svg" alt="App Store" width={130} height={36} className="w-[120px] h-auto" />
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
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-justify">India's Leading Legal Tech Application: A Digital Shield for Every Citizen</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700 text-justify">
                    In the dynamic economic landscape of India, accessing professional legal help has historically been a challenge. Many people find themselves navigating complex statutes, confusing court procedures, and predatory middlemen without a clear path to justice. This is the problem that the <strong>AMA Legal Solutions Application</strong> was built to solve. As we move through 2026, the demand for digital-first solutions has reached every sector, including the judiciary. People are no longer willing to wait for days or travel to crowded district courts just to get a basic query answered. They need information that is instant, accurate, and vetted by actual advocates.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700 text-justify">
                    The AMA app is not just another legal aggregator or a directory of lawyers; it is a direct extension of a highly ranked law firm, bringing an institution of justice directly to your mobile screen. Whether you are a borrower facing harassment from recovery agents, a startup founder looking to protect your brand, or an individual dealing with a property dispute, the application provides a secure and structured environment to resolve your issues. By combining advanced technology with traditional legal wisdom, we have created a platform that prioritizes the client experience while upholding the highest standards of the Indian Bar Council.
                  </p>
                </section>

                {/* Digital Justice */}
                <section id="digital-justice" className="scroll-mt-32">
                   <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-justify">The Digital Justice Revolution</h2>
                   <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700 text-justify">
                    The 'Digital India' initiative has paved the way for innovations that were previously unthinkable. The Indian Judiciary is itself moving towards e-courts and digital filings. In this era of rapid change, the AMA Legal Solutions App stands at the forefront of the Legal-Tech revolution. We are breaking down the barriers of distance and high costs that often prevent the common man from seeking professional counsel. What sets our application apart is its foundation. Most legal apps in the market today are marketplaces where you are pawned off to the highest bidder. There is no accountability for the quality of advice, and your sensitive data is often at risk.
                   </p>
                </section>

                {/* Core Features */}
                <section id="core-features" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-justify">Elite Features for the Modern Client</h2>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div className="flex items-start bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">⚖️</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Pro-Bono Desk</h4>
                        <p className="text-gray-600 text-sm">Post legal queries for free and get preliminary guidance from verified advocates.</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">📁</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Secure Vault</h4>
                        <p className="text-gray-600 text-sm">Military-grade encrypted storage for all your sensitive legal documents.</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">📊</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Case Tracking</h4>
                        <p className="text-gray-600 text-sm">Real-time updates on your court dates, filings, and case status in one dashboard.</p>
                      </div>
                    </div>
                    <div className="flex items-start bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3 mt-1">💬</div>
                      <div>
                        <h4 className="font-bold text-gray-900">Expert Connect</h4>
                        <p className="text-gray-600 text-sm">Instant video consultations with senior partners for high-priority matters.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Loan Settlement */}
                <section id="loan-settlement" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-justify">Loan Settlement and Debt Management</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700 text-justify">
                    One of the most used features of our application is the Debt Resolution module. Thousands of Indians find themselves overwhelmed by loans they cannot repay due to job loss, medical emergencies, or business downturns. The stress of debt is often compounded by the aggressive tactics of recovery agents who disregard RBI guidelines. Our application provides an immediate shield against this harassment. Through the app, users can register for the **Loan Settlement** program. The process begins with our legal team conducting a comprehensive audit of your loan accounts. Once we are appointed as your legal counsel, we notify the bank under the official RBI circulars. This results in an immediate cessation of direct contact from the bank, as all future communication must legally be routed through us.
                  </p>
                </section>

                {/* Pro-Bono Aid */}
                <section id="pro-bono-aid" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-justify">The Pro-Bono Aid Initiative</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700 text-justify">
                    The heart of our application is the Pro-Bono Legal Desk. We believe that money should not be a barrier to knowing your rights. In many situations, a person only needs a simple clarification on a law or a procedure to avoid a major legal mistake. Our advocates volunteer their time to answer hundreds of queries every day from people who may not be able to afford a consultation fee. This initiative is directed by Senior Advocate Anuj Anand Malik, who remains committed to the idea of spreading legal awareness. By providing free preliminary guidance, we help citizens identify if they truly need to hire a lawyer or if their issue can be resolved through simple administrative steps.
                  </p>
                </section>

                {/* NRI Services */}
                <section id="nri-services" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-justify">Global NRI Legal Gateway</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700 text-justify">
                    Managing property and legal interests in India while living in the USA, UK, Canada, or Australia can be a nightmare. Distance often makes NRIs vulnerable to property encroachment, family disputes over inheritance, and mismanagement of funds. The AMA Legal Solutions app acts as a bridge for the Global Indian. NRIs can use our specialized module to request **Title Verifications** of properties they intend to buy or have inherited. Our team conducts physical verifications at the sub-registrar's office and checks revenue records, providing a comprehensive report within the app.
                  </p>
                </section>

                {/* Corporate Tools */}
                <section id="corporate-tools" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-justify">Corporate Tools and Startup Compliance</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700 text-justify">
                    For entrepreneurs and small business owners, the application is a powerful administrative tool. We understand that startups need to move fast, and legal bottlenecks should not slow them down. Our corporate module assists in everything from company registration and MSME certification to complex IPR strategies. Startups can use the **Trademark Search** feature in the app to check the availability of their brand name across all 45 classes of the trademark registry. Once a name is chosen, our advocates can file the application directly from the firm's central hub, ensuring that the brand is protected from day one.
                  </p>
                </section>

                {/* Data Privacy */}
                <section id="data-privacy" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-justify">Uncompromising Data Privacy (DPDP Compliant)</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700 text-justify">
                    In the legal profession, confidentiality is everything. When you share your personal details, financial statements, or property documents with us, you are placing a great deal of trust in our platform. We take this responsibility very seriously. Our application is built on a foundation of military-grade security protocols. We are fully compliant with the Digital Personal Data Protection (DPDP) Act 2023. This means that your data is stored on secure Indian servers with multi-factor authentication. We use end-to-end encryption for all messages and document transfers.
                  </p>
                </section>

                {/* How to Use */}
                <section id="how-to-use" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-justify">3 Simple Steps to Start</h2>
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="text-3xl mb-4 font-bold text-[#D2A02A]">01</div>
                      <h3 className="font-bold text-lg mb-2">Download</h3>
                      <p className="text-gray-600 text-sm">Install the app from the Play Store or App Store and login securely.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="text-3xl mb-4 font-bold text-[#D2A02A]">02</div>
                      <h3 className="font-bold text-lg mb-2">Post Query</h3>
                      <p className="text-gray-600 text-sm">Submit your legal query at the AMA Desk or upload docs for audit.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 border border-gray-100">
                      <div className="text-3xl mb-4 font-bold text-[#D2A02A]">03</div>
                      <h3 className="font-bold text-lg mb-2">Get Results</h3>
                      <p className="text-gray-600 text-sm">Receive a strategy from our expert panel and start your legal fix.</p>
                    </div>
                  </div>
                </section>

                {/* Why Trust AMA */}
                <section id="why-trust-ama" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-justify">Why Thousands Trust AMA Legal Solutions</h2>
                  <p className="text-sm md:text-lg leading-relaxed mb-3 md:mb-6 text-gray-700 text-justify">
                    Trust in the legal world is earned through consistency, transparency, and results. AMA Legal Solutions is not just a brand; it is a promise of justice. Our firm has been recognized by various industry bodies for our innovative approach to law. With thousands of verified 5-star reviews on transition platforms, we are the highest evaluated legal institution for citizen-centric services. Our status as a regulated law firm provides an additional layer of security for our clients. Unlike anonymous internet consultants, we have professional accountability. We are headquartered in Sector 57, Gurugram, and we encourage our clients to visit our office to see the power of our organization.
                  </p>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8">Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <p className="text-gray-700 italic mb-4">
                        "I was being harassed by four different banks for credit card debts. The AMA app saved my life. They stopped the calls and helped me settle all four accounts for nearly 50% of what I owed."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Rajesh Varma</p>
                          <p className="text-sm text-gray-500">Business Owner, Mumbai</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <p className="text-gray-700 italic mb-4">
                        "As an NRI, tracking my property was impossible. I used the AMA app for a title search and they stopped a fraudulent transfer. Highly professional and efficient property desk!"
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">P</div>
                        <div>
                          <p className="font-bold text-gray-900">Priya Singh</p>
                          <p className="text-sm text-gray-500">IT Professional, London</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <section id="faqs" className="scroll-mt-32">
                  <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 flex items-start">
                          <span className="text-[#D2A02A] mr-3 font-serif italic text-2xl">Q.</span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed pl-8 text-justify">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-2xl md:rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">Ready for Legal Excellence?</h2>
                    <p className="text-sm md:text-xl opacity-90 mb-6 md:mb-10 max-w-2xl mx-auto">
                      Join thousands who trust AMA Legal Solutions for their legal battles. Download the app today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          Get it on Play Store
                        </button>
                      </Link>
                      <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank">
                        <button className="bg-white hover:bg-gray-100 text-[#1a202c] font-bold py-3 px-6 md:py-4 md:px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-sm md:text-lg w-full sm:w-auto">
                          Get it on App Store
                        </button>
                      </Link>
                    </div>
                  </div>
                </section>

              </div>
              
              {/* Dense SEO Content Block */}
              <div className="mt-20 space-y-12 text-gray-600 text-justify font-light leading-relaxed max-w-none prose prose-lg px-4 md:px-0">
                <p>The AMA Legal Solutions application stands as a pinnacle of innovation in the Indian legal landscape, representing a significant leap towards digital sovereignty for the common citizen. As we navigate the complexities of 2026, the intersection of law and technology has become more critical than ever. Our application is designed to be more than just a tool; it is a companion for justice, providing a robust framework for managing legal matters with transparency and efficiency. From the bustling streets of Delhi to the remote villages of Kerala, our goal is to ensure that professional legal counsel is never more than a few taps away. The institutional backing of a regulated law firm ensures that every piece of advice dispensed through our platform carries the weight of professional accountability, something that marketplace-driven apps simply cannot offer. This commitment to quality and ethical practice is what defines us and what continues to earn the trust of thousands of users across the country.</p>
                <p>In the specialized arena of debt management and loan settlement, our application provides a sophisticated interface for borrowers to reclaim their financial peace. We understand that debt is often a byproduct of unfortunate circumstances rather than a lack of intent. Our legal team uses the data provided through the app to construct powerful hardship cases that resonate with banking committees. By centralizing all communication and documentation within our secure vault, we provide an audit trail that is invaluable during negotiations. This systematic approach has revolutionized how settlements are processed in India, moving away from opaque, backroom deals to a transparent, legal framework that benefits both the institution and the individual. We are proud to lead this charge, helping families move from the shadow of debt into the light of financial stability.</p>
                <p>Furthermore, our Global NRI Legal Gateway addresses the unique challenges faced by the Indian diaspora. living abroad should not mean losing your rights or your legacy in India. The AMA app provides a secure, physical presence in the Indian legal system for those who cannot be here in person. Whether it is a routine property title search or a complex civil litigation, our app ensures that NRIs are always in the loop, with real-time updates and direct access to senior advocates. This bridge of trust is essential for maintaining the strong bonds between the diaspora and their homeland, and we are honored to serve as the legal anchor for Global Indians. As we look to the future, we will continue to innovate, integrating emerging technologies like AI and blockchain to further enhance the security and efficiency of our platform, while always maintaining the human empathy that is at the core of true justice.</p>
                <p>The Digital Personal Data Protection (DPDP) Act of 2023 has fundamentally shifted the responsibilities of digital platforms in India. AMA Legal Solutions has embraced this change, not as a hurdle, but as an opportunity to set the gold standard for legal data privacy. Our application is built on a 'Privacy by Design' philosophy, ensuring that your sensitive legal information is always protected by the most advanced encryption standards. We understand that in the legal world, a breach of data is a breach of trust. By complying with the strictest global standards, we provide our users with the peace of mind they need to discuss their private matters openly. Our transparent data handling policies and easy-to-use privacy controls empower you to stay in charge of your personal legal history. This commitment to security is a testament to our overall mission: to provide a safe, ethical, and effective platform for the pursuit of justice in the digital age.</p>
              </div>
            </div>

            {/* Right Sidebar - Matching loan-settlement style */}
            <div className="hidden lg:block space-y-8 sticky top-24">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Priority Legal Desk</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Speak directly to our senior partners for high-value matters or urgent cases.
                </p>
                <a 
                  href="tel:+918700343611" 
                  className="block w-full bg-[#D2A02A] text-white text-center py-3 rounded-lg font-semibold hover:bg-[#b88a22] transition-colors mb-4"
                >
                  Call +91-8700343611
                </a>
                <Link 
                  href="/contact" 
                  className="block w-full border border-[#D2A02A] text-[#D2A02A] text-center py-3 rounded-lg font-semibold hover:bg-[#D2A02A] hover:text-white transition-colors"
                >
                  Request Callback
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Related Guides</h3>
                <ul className="space-y-3 text-sm">
                  {[
                    { href: "/services/loan-settlement", label: "Loan Settlement Mastery" },
                    { href: "/services/trademark-registration", label: "IPR & Brand Protection" },
                    { href: "/will-drafting-for-nri", label: "NRI Legal Solutions" },
                    { href: "/googles-trusted-law-firm", label: "Institutional Trust" },
                    { href: "/ama-legal-solutions", label: "#1 Pan-India Firm" }
                  ].map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-gray-600 hover:text-[#D2A02A] flex items-center">
                        <span className="mr-2">›</span> {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                
                {/* App Store Links */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <p className="text-sm font-semibold mb-3" style={{ color: 'rgba(210, 158, 13, 0.8)' }}>Download Our App</p>
                  <div className="flex flex-col gap-3">
                    <Link href="https://play.google.com/store/apps/details?id=com.ama.ama_legal_solutions" target="_blank" className="hover:opacity-80 transition-opacity">
                      <Image src="/newAssets/appstore.svg" alt="Play Store" width={130} height={36} className="w-full h-auto max-w-[130px]" />
                    </Link>
                    <Link href="https://apps.apple.com/in/app/ama-legal-solutions/id6755156186" target="_blank" className="hover:opacity-80 transition-opacity">
                      <Image src="/newAssets/playstore.svg" alt="App Store" width={130} height={36} className="w-full h-auto max-w-[130px]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

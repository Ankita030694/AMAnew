"use client";

import React from "react";
import Link from "next/link";
import GenericStatesGrid from "@/components/GenericStatesGrid";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "./FaqSection";
import Script from "next/script";

const breadcrumbItems = [
  { label: "Services", href: "/services" },
  { label: "Intellectual Property Rights", href: "/services/intellectual-property-rights" },
  { label: "Telangana", href: "/services/intellectual-property-rights/telangana" },
];

const tocSections = [
  { id: "introduction", title: "Introduction" },
  { id: "importance", title: "Importance of IPR" },
  { id: "trademark", title: "Trademark Registration" },
  { id: "patent", title: "Patent Filing" },
  { id: "copyright", title: "Copyright Protection" },
  { id: "design", title: "Industrial Designs" },
  { id: "gi-tags", title: "GI Tags in Telangana" },
  { id: "process", title: "Registration Process" },
  { id: "why-choose-us", title: "Why Choose Us" },
  { id: "testimonials", title: "Client Reviews" },
  { id: "faqs", title: "FAQs" },
];

export default function ClientPage() {
  return (
    <>
      <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
        {/* Hero Section */}
        <div className="relative bg-[#1a202c] text-white">
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ background: "black" }}
          ></div>
          <div className="relative z-20 container mx-auto px-4 py-24 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight mt-10">
              Intellectual Property Rights Services in <span className="text-[#D2A02A]">Telangana</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200">
              Secure your innovations and brand identity with expert IPR legal services in Telangana. From Visakhapatnam to Vijayawada, we protect your Trademarks, Patents, and GI Tags.
            </p>
            <Link href="/contact">
              <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg">
                Get a Free Consultation
              </button>
            </Link>
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl py-8">
          <Breadcrumbs items={breadcrumbItems} />

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content Area */}
            <div className="lg:w-3/4">
              <TableOfContents sections={tocSections} />

              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm mt-8 space-y-12">
                {/* Introduction */}
                <section id="introduction" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Protecting Innovation in the Sunrise State
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Telangana, often referred to as the "Sunrise State," is rapidly emerging as a powerhouse of industrial growth, technological innovation, and agricultural excellence. With major hubs like Visakhapatnam transforming into IT and fintech centers, and regions like Guntur and Krishna continuing their legacy in agriculture and textiles, the intellectual capital of the state is growing exponentially. In this competitive landscape, <strong>Intellectual Property Rights (IPR)</strong> are not just legal formalities; they are strategic business assets.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    At AMA Legal Solutions, we recognize the diverse needs of Telangana's economy. Whether you are a tech startup in Vizag's Millennium Tower, a pharmaceutical manufacturer in the API clusters, or a traditional artisan in Kondapalli, your creations deserve robust legal protection. Our specialized IPR team provides end-to-end services to identify, register, and enforce your intellectual property rights, ensuring that your hard work translates into exclusive commercial benefits.
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    We bridge the gap between local innovators and the national IP framework. While the jurisdictional Patent and Trademark Office is located in Chennai, our digital-first approach ensures that clients across Telangana-from Tirupati to Kurnool-receive seamless, expert legal assistance without the need for physical travel.
                  </p>
                </section>

                {/* Importance of IPR */}
                <section id="importance" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Why IPR is Crucial for Telangana's Businesses
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In the globalized economy, tangible assets like land and machinery are important, but intangible assets like brands, designs, and inventions often hold greater value. For Telangana, which is aggressively courting foreign investment and promoting exports, IPR compliance is non-negotiable.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                      <h3 className="font-bold text-xl text-blue-900 mb-3">Brand Protection</h3>
                      <p className="text-gray-700">
                        For the booming retail and hospitality sectors in cities like Vijayawada, a registered trademark prevents competitors from capitalizing on your brand's reputation and confusing your customers.
                      </p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                      <h3 className="font-bold text-xl text-green-900 mb-3">R&D Monetization</h3>
                      <p className="text-gray-700">
                        Telangana is a hub for pharma and biotech. Patents allow these companies to recover their R&D costs by granting them a monopoly over their new drugs and formulations for 20 years.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                      <h3 className="font-bold text-xl text-purple-900 mb-3">Export Competitiveness</h3>
                      <p className="text-gray-700">
                        International buyers insist on IPR compliance. Whether exporting Guntur chillies or textile products, having registered IP rights enhances your credibility and market access globally.
                      </p>
                    </div>
                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                      <h3 className="font-bold text-xl text-orange-900 mb-3">Valuation & Investment</h3>
                      <p className="text-gray-700">
                        For startups seeking venture capital, a portfolio of registered IP assets significantly increases company valuation and investor confidence.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Trademark Registration */}
                <section id="trademark" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Trademark Registration Services in Telangana
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    A trademark is your business's identity. It distinguishes your goods and services from those of others. In a state with a vibrant MSME sector, securing your brand name, logo, or tagline is the first step towards building a legacy.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Comprehensive Trademark Solutions:</h3>
                  <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
                    <li><strong>Trademark Search:</strong> We conduct exhaustive searches to ensure your desired mark doesn't conflict with existing registrations, saving you from future litigation.</li>
                    <li><strong>Application Filing:</strong> We handle the filing of Form TM-A under the appropriate classes. Whether you are in food processing (Class 29/30) or software services (Class 42), we ensure correct classification.</li>
                    <li><strong>Objection Handling:</strong> It is common for the Registry to raise objections. Our attorneys draft legally sound replies to examination reports to overcome these hurdles.</li>
                    <li><strong>Opposition Proceedings:</strong> If a competitor opposes your mark, we represent you in hearings before the Registrar to defend your rights.</li>
                    <li><strong>Watch Services:</strong> We monitor the Trademark Journal to alert you if someone tries to register a mark similar to yours, allowing you to oppose it in time.</li>
                  </ul>
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
                    <p className="text-lg text-yellow-900">
                      <strong>Local Insight:</strong> Many businesses in Telangana operate in the food and spice sector. We have specific expertise in registering trademarks for these goods, navigating the complexities of descriptive vs. distinctive marks.
                    </p>
                  </div>
                </section>

                {/* Patent Filing */}
                <section id="patent" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Patent Filing for Technological Advancements
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    With the establishment of premier institutes like IIT Tirupati, IIM Visakhapatnam, and numerous pharma parks, innovation is surging in Telangana. A patent grants exclusive rights to an inventor, preventing others from making, using, or selling the invention without permission.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    The patent process is technically demanding. It requires a perfect blend of scientific understanding and legal drafting skills. Our team includes patent agents with engineering and science backgrounds to ensure your invention is described accurately and protected broadly.
                  </p>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Patent Services:</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold">1</div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">Patentability Assessment</h4>
                        <p className="text-gray-700">Evaluating if your invention meets the criteria of novelty, inventive step, and industrial applicability.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold">2</div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">Drafting Specifications</h4>
                        <p className="text-gray-700">Writing detailed Provisional and Complete Specifications. The "Claims" section is drafted meticulously to define the boundary of your monopoly.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold">3</div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">Prosecution</h4>
                        <p className="text-gray-700">Handling all correspondence with the Patent Office, including responding to the First Examination Report (FER) and attending hearings.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#D2A02A] text-white rounded-full flex items-center justify-center font-bold">4</div>
                      <div>
                        <h4 className="font-bold text-lg text-gray-900">PCT Filing</h4>
                        <p className="text-gray-700">Assisting with international patent filing under the Patent Cooperation Treaty (PCT) for businesses looking to expand globally.</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Copyright Protection */}
                <section id="copyright" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Copyright Registration for Creative Works
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Telangana has a rich cultural heritage in literature, cinema (Tollywood), and music. Copyright protects these original expressions. It is also critical for the booming IT sector in Visakhapatnam, as software code is protected under copyright law.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist authors, filmmakers, software developers, and artists in registering their works. Registration serves as prima facie evidence of ownership, which is essential for enforcing rights in cases of piracy or plagiarism.
                  </p>
                </section>

                {/* Industrial Designs */}
                <section id="design" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Industrial Design Registration
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    In consumer markets, the visual appeal of a product often drives sales. The <strong>Designs Act, 2000</strong> protects the aesthetic features-shape, pattern, configuration, or ornamentation-of an article.
                  </p>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    For manufacturers in Telangana's industrial corridors, protecting the unique look of their products (be it a bottle shape, a textile pattern, or a machine part) is vital to prevent cheap knock-offs. We help you secure these rights efficiently.
                  </p>
                </section>

                {/* GI Tags */}
                <section id="gi-tags" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Geographical Indications (GI) of Telangana
                  </h2>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    Telangana is home to a treasure trove of GI-tagged products. These tags certify that a product possesses certain qualities or a reputation due to its geographical origin. They are community rights that protect the livelihoods of local artisans and farmers.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Tirupati Laddu</h3>
                      <p className="text-gray-700">
                        Perhaps the most famous GI, this sweet offering from the Tirumala Venkateswara Temple is protected to ensure that only the temple authorities can produce and sell it, maintaining its sanctity and quality.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Kondapalli Bommallu</h3>
                      <p className="text-gray-700">
                        These lightweight wooden toys from Kondapalli in the Krishna district are known for their vibrant colors and distinct style. The GI tag protects the traditional artisans from mass-produced plastic imitations.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Araku Valley Arabica Coffee</h3>
                      <p className="text-gray-700">
                        Grown in the Eastern Ghats of Visakhapatnam district, this coffee is known for its unique flavor profile. The GI tag has helped it gain international recognition and premium pricing.
                      </p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-[#D2A02A] mb-3">Srikalahasthi Kalamkari</h3>
                      <p className="text-gray-700">
                        This style of Kalamkari involves free-hand drawing with a pen (kalam) and using natural dyes. The GI tag ensures the authenticity of this intricate textile art form.
                      </p>
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed mb-6 text-gray-700">
                    We assist producer groups in filing for new GI tags and help authorized users (artisans/farmers) register themselves to legally use the GI logo, enhancing the marketability of their products.
                  </p>
                </section>

                {/* Process */}
                <section id="process" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Our Streamlined Registration Process
                  </h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We simplify the complex legal procedures into a transparent, step-by-step workflow.
                  </p>
                  
                  <div className="space-y-8">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">1</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Consultation & Strategy</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We start by understanding your business goals. We advise on what can be protected-whether it's a trademark, patent, design, or copyright-and the best strategy to do so.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">2</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Due Diligence (Search)</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We perform rigorous searches in IP databases to identify any existing rights that might block your application. This proactive step minimizes the risk of rejection.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">3</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Filing & Documentation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Our experts prepare all necessary legal documents, affidavits, and technical specifications. We file the application online for immediate priority dates.
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-[#D2A02A] rounded-full flex items-center justify-center text-white text-2xl font-bold">4</div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Legal Representation</h3>
                        <p className="text-gray-700 leading-relaxed">
                          We act as your authorized agents, handling all communication with the IP Office. We respond to objections and attend hearings to ensure your application moves towards the grant.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Why Choose Us */}
                <section id="why-choose-us" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Why Choose AMA Legal Solutions in Telangana?
                  </h2>
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    We combine national-level expertise with a deep understanding of the local business environment in Telangana.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">⚖️</div>
                      <h3 className="font-bold text-xl mb-2">Legal Expertise</h3>
                      <p className="text-gray-600">Our team consists of qualified lawyers and patent agents with a proven track record.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">🌐</div>
                      <h3 className="font-bold text-xl mb-2">Digital First</h3>
                      <p className="text-gray-600">We offer seamless online services, making high-quality legal support accessible to businesses in every district of AP.</p>
                    </div>
                    <div className="p-6 rounded-xl bg-gray-50 hover:bg-[#fff9e6] transition-colors">
                      <div className="text-4xl mb-4">💼</div>
                      <h3 className="font-bold text-xl mb-2">Business Focused</h3>
                      <p className="text-gray-600">We don't just file forms; we provide strategic advice to help you monetize and enforce your IP assets.</p>
                    </div>
                  </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Success Stories</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "We are a food processing unit in Guntur. AMA Legal Solutions helped us register our trademark and navigate the complex classification issues. Their service was professional and prompt."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">R</div>
                        <div>
                          <p className="font-bold text-gray-900">Ramesh Babu</p>
                          <p className="text-sm text-gray-500">Guntur</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 relative">
                      <div className="text-4xl text-[#D2A02A] absolute top-4 left-4 opacity-20">"</div>
                      <p className="text-gray-700 italic mb-4 relative z-10">
                        "As a tech startup in Visakhapatnam, protecting our software code was a priority. The team at AMA guided us through the copyright process and explained everything clearly. Highly recommended."
                      </p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-3">K</div>
                        <div>
                          <p className="font-bold text-gray-900">Kiran Kumar</p>
                          <p className="text-sm text-gray-500">Visakhapatnam</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* FAQs */}
                <FaqSection />

                {/* Final CTA */}
                <section className="bg-gradient-to-br from-[#1a202c] to-[#2d3748] rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Secure Your Intellectual Property Today</h2>
                    <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
                      Don't leave your valuable assets unprotected. Partner with Telangana's trusted IPR experts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact">
                        <button className="bg-[#D2A02A] hover:bg-[#b88a22] text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg text-lg w-full sm:w-auto">
                          Start Your Registration
                        </button>
                      </Link>
                      <a href="tel:+918700343611">
                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-4 px-12 rounded-full transition-all text-lg w-full sm:w-auto">
                          Call: +91-8700343611
                        </button>
                      </a>
                    </div>
                    <p className="mt-8 text-sm opacity-70">
                      Confidential • Professional • Reliable
                    </p>
                  </div>
                </section>

              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-24 space-y-8">
                {/* Contact Card */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Need IPR Advice?</h3>
                  <p className="text-gray-600 mb-6 text-sm">
                    Speak to our IPR experts in Telangana for a preliminary assessment of your trademark or patent.
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

                {/* Quick Links */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
                  <ul className="space-y-3 text-sm">
                    
                    
                    
                    
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <GenericStatesGrid 
              serviceName="Intellectual Property Rights" 
              servicePath="intellectual-property-rights"
              customSlugs={{
                "Delhi": "delhi",
                "Gujarat": "gujarat",
                "Maharashtra": "maharashtra",
                "Punjab": "punjab",
                "Rajasthan": "rajasthan",
                "Tamil Nadu": "tamil-nadu",
                "Uttar Pradesh": "uttar-pradesh",
                "Puducherry": "puducherry"
              }}
            />
          </div>
        </div>
      </div>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Intellectual Property Rights Services in Telangana",
            "description": "Comprehensive IPR services in Telangana including Trademark, Patent, and Copyright registration. Protect your brand and innovations with expert legal support.",
            "image": "https://www.amalegalsolutions.com/services/ipr-telangana.jpg",
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
            "datePublished": "2024-11-26",
            "dateModified": "2024-11-26"
          })
        }}
      />
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "IPR Services Telangana",
            "image": "https://www.amalegalsolutions.com/services/ipr-telangana.jpg",
            "description": "Expert Intellectual Property Rights registration and protection services in Telangana.",
            "brand": {
              "@type": "Brand",
              "name": "AMA Legal Solutions"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "150"
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
                  "name": "Ramesh Babu"
                },
                "reviewBody": "We are a food processing unit in Guntur. AMA Legal Solutions helped us register our trademark and navigate the complex classification issues. Their service was professional and prompt."
              },
              {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Kiran Kumar"
                },
                "reviewBody": "As a tech startup in Visakhapatnam, protecting our software code was a priority. The team at AMA guided us through the copyright process and explained everything clearly. Highly recommended."
              }
            ]
          })
        }}
      />
    </>
  );
}

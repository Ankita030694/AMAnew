"use client";

import Link from "next/link";
import TableOfContents from "@/components/TableOfContents";

interface Content {
  title: string;
  description: string;
  city: string;
  state: string;
  jurisdiction: string;
  specializations: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

interface CyberClientProps {
  content: Content;
  faqs: FAQ[];
}

export default function CyberClient({ content, faqs }: CyberClientProps) {
  const sections = [
    { id: "hero", title: "Overview" },
    { id: "state-info", title: "State Information" },
    { id: "services", title: "Our Services" },
    { id: "expertise", title: "Our Expertise" },
    { id: "how-we-help", title: "How We Help" },
    { id: "benefits", title: "Benefits" },
    { id: "process", title: "Our Process" },
    { id: "faqs", title: "FAQs" },
    { id: "contact", title: "Contact" }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Banner Section */}
      <div className="relative w-full h-[300px] md:h-[550px] overflow-hidden">
        <img
          src="/services/10.png"
          alt={`Cyber Law Services in ${content.state}`}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Table of Contents */}
      <TableOfContents sections={sections} />

      {/* Main Content Container */}
      <div className="container mx-auto px-4 max-w-6xl py-16">
        
        {/* Hero Section */}
        <div id="hero" className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Expert <span className="text-[#D2A02A]">Cyber Law</span> Services in {content.state}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Need cyber law assistance in {content.city}? Get professional legal help for cyber crime defense, data protection, and digital law compliance with our experienced cyber law lawyers in {content.state}.
          </p>
        </div>

        {/* State-Specific Information */}
        <section id="state-info" className="mb-20">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Cyber Law Services in {content.state}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our cyber law services in {content.city}, {content.state} are designed to provide comprehensive digital legal solutions. We understand the evolving cyber legal landscape and work within the jurisdiction of the {content.jurisdiction} to ensure your cyber law matters are handled professionally.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <p className="text-blue-800 font-medium">
                    Our expert <strong>cyber law lawyers in {content.state}</strong> ensure you get the best possible legal representation while protecting your digital rights and interests.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-xl rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Local Specializations</h3>
                <ul className="space-y-3 text-gray-700">
                  {content.specializations.map((specialization, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✓</span>
                      {specialization}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Jurisdiction:</strong> {content.jurisdiction}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Cyber Law Services in {content.state}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We provide comprehensive <strong>cyber law services in {content.city}</strong> covering all aspects of digital legal issues, from cyber crime defense to data protection compliance. Our expertise spans all areas of cyber law within the {content.jurisdiction} jurisdiction.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-blue-800 font-medium">
                  Our expert <strong>cyber law lawyers in {content.state}</strong> ensure you get the best possible legal representation while protecting your digital rights and interests.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-xl rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Services in {content.state}</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Cyber crime defense & representation
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Data protection & privacy compliance
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  IT Act violations & defense
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Digital forensics support
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Service Categories Section */}
        <section id="expertise" className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Cyber Law Expertise in {content.state}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🛡️</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Cyber Crime Defense</h3>
              <p className="text-gray-600 text-center">
                <strong>Cyber crime defense</strong> including hacking cases, online fraud, cyber stalking, and digital identity theft defense in {content.state} courts.
              </p>
            </div>
            
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🔒</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Data Protection</h3>
              <p className="text-gray-600 text-center">
                <strong>Data protection compliance</strong> including GDPR compliance, data privacy laws, and data breach response within {content.jurisdiction} jurisdiction.
              </p>
            </div>
            
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">💻</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">IT Act Compliance</h3>
              <p className="text-gray-600 text-center">
                <strong>IT Act compliance</strong> and violations defense including unauthorized access, data theft, and cyber terrorism cases.
              </p>
            </div>
            
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🔍</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Digital Forensics</h3>
              <p className="text-gray-600 text-center">
                <strong>Digital forensics support</strong> including evidence collection, analysis, and expert testimony in cyber law cases.
              </p>
            </div>
          </div>
        </section>

        {/* How We Help Section */}
        <section id="how-we-help" className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            How AMA Legal Solutions Helps with Cyber Law in {content.state}
          </h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Cyber Crime Defense & Strategy</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We provide comprehensive cyber crime defense and legal strategy for cases in {content.state}:
              </p>
              <ul className="text-gray-700 space-y-2 ml-6">
                <li>• Cyber crime case analysis and defense strategy</li>
                <li>• Digital evidence review and legal arguments</li>
                <li>• Understanding cyber law procedures in {content.jurisdiction}</li>
                <li>• Client counseling and case preparation</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Data Protection & Compliance</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our experienced cyber law lawyers provide data protection services in {content.city}:
              </p>
              <ul className="text-gray-700 space-y-2 ml-6">
                <li>• Data protection compliance and advisory</li>
                <li>• GDPR compliance and privacy law guidance</li>
                <li>• Data breach response and legal support</li>
                <li>• Digital rights protection and advocacy</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. IT Act Representation & Digital Forensics</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Comprehensive IT Act representation and digital forensics support:
              </p>
              <ul className="text-gray-700 space-y-2 ml-6">
                <li>• IT Act violations defense and representation</li>
                <li>• Digital forensics support and expert testimony</li>
                <li>• Cyber law compliance and risk assessment</li>
                <li>• Ongoing digital legal support and consultation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Benefits of Choosing Our Cyber Law Lawyers in {content.state}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cyber Defense</h3>
              <p className="text-gray-600">
                Professional cyber crime defense with deep understanding of cyber law in {content.state}.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">🔒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Protection</h3>
              <p className="text-gray-600">
                Specialized expertise in data protection compliance and privacy law.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">💻</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">IT Act Expertise</h3>
              <p className="text-gray-600">
                Comprehensive IT Act representation and compliance guidance.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">🔍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Forensics</h3>
              <p className="text-gray-600">
                Expert digital forensics support and evidence analysis.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rapid Response</h3>
              <p className="text-gray-600">
                Quick response to cyber incidents and digital legal emergencies.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
              <p className="text-gray-600">
                Successful track record in cyber law with numerous favorable outcomes in {content.state}.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="mb-20">
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Our Proven 4-Step Cyber Law Process in {content.state}
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Case Analysis</h3>
                <p className="text-gray-300">Comprehensive cyber law case analysis and digital evidence review for {content.state} jurisdiction</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Legal Strategy</h3>
                <p className="text-gray-300">Strategic cyber law planning and digital legal argument preparation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Court Representation</h3>
                <p className="text-gray-300">Professional court representation and cyber law defense</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Digital Support</h3>
                <p className="text-gray-300">Ongoing digital legal support and cyber law consultation</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            FAQs on Cyber Law Services in {content.state}
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700 mb-4">
              Have more questions about cyber law services in {content.state}?
            </p>
            <Link href="/contact" className="text-[#D2A02A] font-semibold hover:underline">
              Contact our cyber law lawyers in {content.city} for expert advice →
            </Link>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className="text-center bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Cyber Law Assistance in {content.state}?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert legal assistance for cyber law matters and digital legal issues in {content.city}, {content.state} today.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-2xl">📞</span>
              <div>
                <p className="font-semibold">Call Now</p>
                <p className="text-lg">+91-8700343611</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">🌐</span>
              <div>
                <p className="font-semibold">Visit Online</p>
                <a href="http://www.amalegalsolutions.com" className="text-lg hover:underline">
                  www.amalegalsolutions.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📍</span>
              <div>
                <p className="font-semibold">Office Location</p>
                <p className="text-lg">Sector-57, Gurugram</p>
              </div>
            </div>
          </div>
          
          <Link href="/contact">
            <div className="inline-block bg-white text-[#D2A02A] px-12 py-4 rounded-full font-bold text-lg cursor-pointer hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Get Started with Cyber Law Services
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
}

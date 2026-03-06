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

interface CivilClientProps {
  content: Content;
  faqs: FAQ[];
}

export default function CivilClient({ content, faqs }: CivilClientProps) {
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
          src="/services/11.png"
          alt={`Civil Law Services in ${content.state}`}
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
            Expert <span className="text-[#D2A02A]">Civil Law</span> Services in {content.state}
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Facing civil disputes or legal conflicts in {content.city}? Get professional legal help for civil litigation, contract disputes, and civil rights matters with our experienced civil lawyers in {content.state}.
          </p>
        </div>

        {/* State-Specific Information */}
        <section id="state-info" className="mb-20">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Civil Law Legal Services in {content.state}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our civil law services in {content.city}, {content.state} are designed to provide comprehensive support for all civil legal matters. We understand the local legal landscape and work within the jurisdiction of the {content.jurisdiction} to ensure your civil legal matters are handled professionally.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <p className="text-blue-800 font-medium">
                    Our expert <strong>civil lawyers in {content.state}</strong> ensure you get the best possible legal representation while protecting your interests throughout the civil litigation process.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-xl rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Local Civil Law Specializations</h3>
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
            Our Civil Law Legal Services in {content.state}
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                We provide comprehensive <strong>civil law services in {content.city}</strong> covering all aspects of civil legal matters, from initial consultation to final resolution. Our expertise spans individual disputes to complex corporate civil litigation within the {content.jurisdiction} jurisdiction.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-blue-800 font-medium">
                  Our expert <strong>civil lawyers in {content.state}</strong> ensure you get the best possible legal representation while protecting your interests throughout the civil litigation process.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-xl rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Services in {content.state}</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Civil litigation & dispute resolution
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Contract disputes & enforcement
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Property disputes & civil rights
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  Family law & consumer disputes
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Service Categories Section */}
        <section id="expertise" className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Our Civil Law Expertise in {content.state}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">⚖️</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Civil Litigation</h3>
              <p className="text-gray-600 text-center">
                <strong>Civil litigation</strong> services including lawsuit filing, court representation, evidence presentation, and legal arguments in civil courts and tribunals within {content.jurisdiction} jurisdiction.
              </p>
            </div>
            
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">📄</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Contract Disputes</h3>
              <p className="text-gray-600 text-center">
                <strong>Contract disputes</strong> resolution including breach of contract, contract enforcement, and commercial agreement litigation with expert legal representation in {content.state}.
              </p>
            </div>
            
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🏠</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Property Disputes</h3>
              <p className="text-gray-600 text-center">
                <strong>Property disputes</strong> resolution including ownership conflicts, boundary disputes, possession matters, and property rights litigation in {content.city}.
              </p>
            </div>
            
            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">👥</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Civil Rights</h3>
              <p className="text-gray-600 text-center">
                <strong>Civil rights</strong> protection including constitutional rights, discrimination cases, and civil liberties litigation with expert legal advocacy in {content.state}.
              </p>
            </div>
          </div>
        </section>

        {/* How We Help Section */}
        <section id="how-we-help" className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            How AMA Legal Solutions Helps with Civil Law Matters in {content.state}
          </h2>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Case Assessment & Legal Strategy</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We conduct comprehensive case assessment and develop effective legal strategies for civil matters in {content.state}:
              </p>
              <ul className="text-gray-700 space-y-2 ml-6">
                <li>• Analyzing legal documents and evidence</li>
                <li>• Evaluating legal options and potential outcomes</li>
                <li>• Developing strategic approaches for dispute resolution</li>
                <li>• Understanding local civil law requirements in {content.jurisdiction}</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Civil Litigation & Court Representation</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our experienced civil lawyers provide complete litigation support in {content.city}:
              </p>
              <ul className="text-gray-700 space-y-2 ml-6">
                <li>• Filing lawsuits and legal petitions</li>
                <li>• Representing clients in civil courts and tribunals</li>
                <li>• Presenting evidence and making legal arguments</li>
                <li>• Negotiating settlements and alternative dispute resolution</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Dispute Resolution & Enforcement</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Comprehensive dispute resolution and enforcement services including:
              </p>
              <ul className="text-gray-700 space-y-2 ml-6">
                <li>• Mediation and arbitration for civil disputes</li>
                <li>• Enforcement of court judgments and settlements</li>
                <li>• Appeal and review proceedings</li>
                <li>• Ongoing legal protection and compliance monitoring</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Benefits of Choosing Our Civil Lawyers in {content.state}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">⚖️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Litigation</h3>
              <p className="text-gray-600">
                Specialized civil litigation expertise with deep understanding of civil laws and court procedures in {content.state}.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Dispute Resolution</h3>
              <p className="text-gray-600">
                Effective dispute resolution through negotiation, mediation, arbitration, and litigation when necessary.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">📊</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
              <p className="text-gray-600">
                Successful track record in civil litigation with numerous favorable judgments and settlements in {content.state}.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Approach</h3>
              <p className="text-gray-600">
                Strategic legal approach tailored to your specific civil law matter and desired outcomes in {content.city}.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Efficient Resolution</h3>
              <p className="text-gray-600">
                Efficient case handling with timely resolution and cost-effective legal representation.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl text-white">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Rights Protection</h3>
              <p className="text-gray-600">
                Strong focus on protecting your civil rights and legal interests throughout the process.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="mb-20">
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Our Proven 4-Step Civil Law Process in {content.state}
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Case Assessment</h3>
                <p className="text-gray-300">Comprehensive case evaluation and legal strategy development for {content.jurisdiction} jurisdiction</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Legal Action</h3>
                <p className="text-gray-300">File lawsuits, represent in court, and pursue legal remedies</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Resolution</h3>
                <p className="text-gray-300">Negotiate settlements or achieve favorable court judgments</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Enforcement</h3>
                <p className="text-gray-300">Enforce judgments and ensure compliance with legal outcomes</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            FAQs on Civil Law Services in {content.state}
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
              Have more questions about civil law services in {content.state}?
            </p>
            <Link href="/contact" className="text-[#D2A02A] font-semibold hover:underline">
              Contact our civil lawyers in {content.city} for expert advice →
            </Link>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className="text-center bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Expert Civil Law Assistance in {content.state}?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get professional legal help for civil disputes and litigation matters in {content.city}, {content.state} today.
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
                <a href="https://www.amalegalsolutions.com" className="text-lg hover:underline">
                  https://www.amalegalsolutions.com
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
              Get Started with Civil Law Services
            </div>
          </Link>
        </section>
      </div>
    </div>
  );
}

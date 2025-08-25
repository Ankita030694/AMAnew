import Link from "next/link";
import Script from "next/script";

// FAQ data for rendering
const faqs = [
  {
    question: "What types of civil law services do you provide?",
    answer: "We provide comprehensive civil law services including civil litigation, contract disputes, property disputes, family law matters, civil appeals, and alternative dispute resolution. Our civil lawyers handle all aspects of civil law."
  },
  {
    question: "How do you handle civil litigation cases?",
    answer: "We handle civil litigation including contract disputes, property matters, family law cases, and civil appeals. Our civil lawyers provide expert representation in courts and tribunals with strategic legal solutions."
  },
  {
    question: "Can you help with contract dispute resolution?",
    answer: "Yes, we specialize in contract dispute resolution including contract drafting, breach of contract cases, contract enforcement, and representing clients in contract-related litigation and arbitration."
  },
  {
    question: "Do you provide family law services?",
    answer: "Absolutely. We provide family law services including divorce cases, child custody matters, property disputes, and family mediation with expertise in family laws and domestic relations."
  }
];

// WebPage Schema with FAQ content for SEO
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Civil Law Legal Services in India",
  "description": "Expert civil lawyers in India. AMA Legal Solutions provides civil litigation, contract disputes, and family law services.",
  "url": "https://amalegalsolutions.com/services/civil",
  "mainEntity": {
    "@type": "FAQPage",
    "name": "Civil Law Services FAQs",
    "description": "Frequently asked questions about civil law services, civil litigation, and contract disputes in India",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
};

export const metadata = {
  title: "Civil Law Lawyers in India | Civil Litigation & Dispute Resolution – AMA Legal Solutions",
  description:
    "Expert civil law lawyers in India. AMA Legal Solutions provides civil litigation, contract disputes, property cases, and civil rights representation. Book your consultation now.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/civil',
  },
};

export default function page() {
  // Sample service data (replace with your actual content)
  const service = {
    title: "Civil Law Legal Services",
    bannerImage: "/services/11.png", // Replace with your actual image path
    description:
      "Our civil law legal services provide comprehensive support for all civil legal matters. We work closely with you to understand your civil law needs and deliver effective legal solutions.",
    buttonText: "Get Started",
    buttonLink: "/contact",
  };

  return (
    <>
      {/* WebPage Schema Markup with FAQ content */}
      <Script
        id="civil-law-webpage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      
      <div className="bg-white min-h-screen">
        {/* Banner Section */}
        <div className="relative w-full h-[300px] md:h-[550px] overflow-hidden">
          <img
            src={service.bannerImage}
            alt={service.title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Main Content Container */}
        <div className="container mx-auto px-4 max-w-6xl py-16">
          
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Expert <span className="text-[#D2A02A]">Civil Law</span> Services in India
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Facing civil disputes or legal conflicts? Get professional legal help for civil litigation, contract disputes, and civil rights matters with our experienced civil lawyers.
            </p>
          </div>

          {/* Introduction Section */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Comprehensive Civil Law & Dispute Resolution
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Civil law encompasses a wide range of legal matters affecting individuals and businesses in their daily lives. Whether you're dealing with contract disputes, property conflicts, family matters, or civil rights issues, having expert legal guidance is crucial.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At AMA Legal Solutions, we specialize in <strong>civil law</strong>, providing comprehensive legal services for civil litigation, dispute resolution, contract matters, and civil rights protection. Our expert <strong>civil lawyers in India</strong> ensure your legal interests are fully protected.
              </p>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Civil Law Legal Services
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We provide comprehensive <strong>civil law services</strong> covering all aspects of civil legal matters, from initial consultation to final resolution. Our expertise spans individual disputes to complex corporate civil litigation.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <p className="text-blue-800 font-medium">
                    Our expert <strong>civil lawyers</strong> ensure you get the best possible legal representation while protecting your interests throughout the civil litigation process.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-xl rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Services</h3>
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
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Civil Law Expertise
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
                  <strong>Civil litigation</strong> services including lawsuit filing, court representation, evidence presentation, and legal arguments in civil courts and tribunals.
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
                  <strong>Contract disputes</strong> resolution including breach of contract, contract enforcement, and commercial agreement litigation with expert legal representation.
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
                  <strong>Property disputes</strong> resolution including ownership conflicts, boundary disputes, possession matters, and property rights litigation.
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
                  <strong>Civil rights</strong> protection including constitutional rights, discrimination cases, and civil liberties litigation with expert legal advocacy.
                </p>
              </div>
            </div>
          </section>

          {/* How We Help Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              How AMA Legal Solutions Helps with Civil Law Matters
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Case Assessment & Legal Strategy</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We conduct comprehensive case assessment and develop effective legal strategies:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Analyzing legal documents and evidence</li>
                  <li>• Evaluating legal options and potential outcomes</li>
                  <li>• Developing strategic approaches for dispute resolution</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Civil Litigation & Court Representation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our experienced civil lawyers provide complete litigation support:
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
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Benefits of Choosing Our Civil Lawyers
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">⚖️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Litigation</h3>
                <p className="text-gray-600">
                  Specialized civil litigation expertise with deep understanding of civil laws and court procedures.
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
                  Successful track record in civil litigation with numerous favorable judgments and settlements.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Approach</h3>
                <p className="text-gray-600">
                  Strategic legal approach tailored to your specific civil law matter and desired outcomes.
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
          <section className="mb-20">
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Our Proven 4-Step Civil Law Process
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Case Assessment</h3>
                  <p className="text-gray-300">Comprehensive case evaluation and legal strategy development</p>
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
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              FAQs on Civil Law Services
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
                Have more questions about civil law services?
              </p>
              <Link href="/contact" className="text-[#D2A02A] font-semibold hover:underline">
                Contact our civil lawyers for expert advice →
              </Link>
            </div>
          </section>

          {/* Contact CTA Section */}
          <section className="text-center bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Expert Civil Law Assistance?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get professional legal help for civil disputes and litigation matters today.
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
            
            <Link href={service.buttonLink}>
              <div className="inline-block bg-white text-[#D2A02A] px-12 py-4 rounded-full font-bold text-lg cursor-pointer hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                {service.buttonText}
              </div>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}

import Link from "next/link";
import Script from "next/script";

// FAQ data for rendering
const faqs = [
  {
    question: "What types of intellectual property can you help protect?",
    answer: "We provide comprehensive IP protection services including trademark registration, patent filing, copyright protection, design registration, and geographical indication protection. Our IP lawyers handle all aspects of intellectual property rights in India and internationally."
  },
  {
    question: "How long does trademark registration take in India?",
    answer: "Trademark registration typically takes 18-24 months in India, though we can expedite the process in certain cases. Our IP lawyers ensure proper documentation and follow-up to minimize delays and maximize protection."
  },
  {
    question: "Can you help with international IP protection?",
    answer: "Yes, we provide international IP protection services including PCT patent applications, Madrid Protocol trademark filings, and copyright protection across multiple jurisdictions. Our global network ensures comprehensive IP coverage."
  },
  {
    question: "What should I do if someone infringes my IP rights?",
    answer: "Contact our IP lawyers immediately. We'll assess the infringement, send cease and desist notices, and take appropriate legal action including filing lawsuits, seeking injunctions, and claiming damages for IP violations."
  }
];

// FAQ Schema Markup for SEO
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export const metadata = {
  title: "Intellectual Property Rights Lawyers in India | IP Protection Services – AMA Legal Solutions",
  description:
    "Expert intellectual property rights lawyers in India. AMA Legal Solutions provides trademark registration, patent filing, copyright protection, and IP litigation services. Book your consultation now.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/intellectual-property-rights',
  },
};

export default function page() {
  // Sample service data (replace with your actual content)
  const service = {
    title: "Intellectual Property Rights Legal Services",
    bannerImage: "/services/4.png", // Replace with your actual image path
    description:
      "Our intellectual property rights legal services provide comprehensive protection for your innovations, brands, and creative works. We work closely with you to understand your IP needs and deliver robust protection strategies.",
    buttonText: "Get Started",
    buttonLink: "/contact",
  };

  return (
    <>
      {/* FAQ Schema Markup - Using Next.js Script component for proper SSR */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
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
              Expert <span className="text-[#D2A02A]">Intellectual Property Rights</span> Protection in India
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Protect your innovations, brands, and creative works with our comprehensive intellectual property rights legal services. Get expert IP protection and enforcement.
            </p>
          </div>

          {/* Introduction Section */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Comprehensive Intellectual Property Protection
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In today's knowledge-driven economy, protecting your intellectual property is crucial for business success. Whether you're an inventor, entrepreneur, artist, or business owner, your IP assets need robust legal protection to prevent infringement and maximize their value.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At AMA Legal Solutions, we specialize in <strong>intellectual property rights</strong> protection, providing comprehensive legal services for trademark registration, patent filing, copyright protection, and IP litigation. Our expert <strong>IP lawyers in India</strong> ensure your innovations and brands are fully protected.
              </p>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Intellectual Property Legal Services
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We provide comprehensive <strong>intellectual property rights services</strong> covering all aspects of IP protection, from initial registration to enforcement and litigation. Our expertise spans domestic and international IP matters.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <p className="text-blue-800 font-medium">
                    Our expert <strong>IP lawyers</strong> ensure you get the best possible protection for your intellectual property while maximizing its commercial value.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-xl rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Services</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Trademark registration & protection
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Patent filing & prosecution
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Copyright protection & licensing
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    IP litigation & enforcement
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Service Categories Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our IP Protection Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">™️</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Trademark Registration</h3>
                <p className="text-gray-600 text-center">
                  Complete <strong>trademark registration</strong> services including search, filing, prosecution, and protection against infringement and counterfeiting.
                </p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🔬</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Patent Filing</h3>
                <p className="text-gray-600 text-center">
                  <strong>Patent filing</strong> and prosecution services for inventions, utility models, and design patents with international protection options.
                </p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">©️</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Copyright Protection</h3>
                <p className="text-gray-600 text-center">
                  <strong>Copyright protection</strong> for literary, artistic, musical works, software, and digital content with licensing and enforcement services.
                </p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">⚖️</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">IP Litigation</h3>
                <p className="text-gray-600 text-center">
                  <strong>IP litigation</strong> and enforcement services including infringement lawsuits, opposition proceedings, and dispute resolution.
                </p>
              </div>
            </div>
          </section>

          {/* How We Help Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              How AMA Legal Solutions Protects Your IP Rights
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. IP Assessment & Strategy Development</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We assess your intellectual property portfolio and develop comprehensive protection strategies:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Conducting IP audits and portfolio analysis</li>
                  <li>• Identifying protectable IP assets</li>
                  <li>• Developing IP protection and commercialization strategies</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. IP Registration & Prosecution</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our experienced IP lawyers handle all aspects of IP registration:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Filing trademark, patent, and copyright applications</li>
                  <li>• Responding to office actions and objections</li>
                  <li>• Managing international IP protection</li>
                  <li>• Ensuring proper IP documentation and maintenance</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. IP Enforcement & Litigation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Comprehensive IP protection and enforcement including:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Monitoring for IP infringement and violations</li>
                  <li>• Filing infringement lawsuits and seeking injunctions</li>
                  <li>• Defending against IP challenges and oppositions</li>
                  <li>• Negotiating IP licensing and settlement agreements</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Benefits of Choosing Our IP Lawyers
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Specialized Expertise</h3>
                <p className="text-gray-600">
                  Expert lawyers specialized in IP laws, patent prosecution, and trademark registration with deep industry knowledge.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🌍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Global Protection</h3>
                <p className="text-gray-600">
                  International IP protection services including PCT patents, Madrid trademarks, and multi-jurisdictional enforcement.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Protection</h3>
                <p className="text-gray-600">
                  End-to-end IP protection from initial filing to enforcement and commercialization strategies.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Processing</h3>
                <p className="text-gray-600">
                  Efficient IP registration and prosecution with minimal delays and maximum protection coverage.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">💰</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Value Maximization</h3>
                <p className="text-gray-600">
                  Strategic IP management to maximize commercial value and licensing opportunities for your intellectual property.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Proactive Monitoring</h3>
                <p className="text-gray-600">
                  Continuous IP monitoring and enforcement to prevent infringement and protect your valuable intellectual assets.
                </p>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-20">
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Our Proven 4-Step IP Protection Process
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">IP Assessment</h3>
                  <p className="text-gray-300">Comprehensive evaluation of your IP assets and protection needs</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Strategy Development</h3>
                  <p className="text-gray-300">Create comprehensive IP protection and commercialization strategy</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Registration</h3>
                  <p className="text-gray-300">File and prosecute IP applications with proper documentation</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Enforcement</h3>
                  <p className="text-gray-300">Monitor and enforce IP rights against infringement</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              FAQs on Intellectual Property Rights
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
                Have more questions about intellectual property protection?
              </p>
              <Link href="/contact" className="text-[#D2A02A] font-semibold hover:underline">
                Contact our IP lawyers for expert advice →
              </Link>
            </div>
          </section>

          {/* Contact CTA Section */}
          <section className="text-center bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Protect Your Intellectual Property?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get expert legal assistance for IP protection and maximize the value of your innovations today.
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
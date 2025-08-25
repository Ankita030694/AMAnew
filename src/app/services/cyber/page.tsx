import Link from "next/link";
import Script from "next/script";

// FAQ data for rendering
const faqs = [
  {
    question: "What types of cyber law services do you provide?",
    answer: "We provide comprehensive cyber law services including cybercrime defense, data protection compliance, IT Act compliance, cyber fraud cases, digital evidence handling, and cyber litigation. Our cyber lawyers handle all aspects of cyber law."
  },
  {
    question: "Can you help with cybercrime defense cases?",
    answer: "Yes, we specialize in cybercrime defense including online fraud, cyber harassment, data theft, hacking cases, and digital evidence disputes with expertise in cyber laws and digital forensics."
  },
  {
    question: "Do you provide data protection compliance services?",
    answer: "Absolutely. We provide data protection compliance services including GDPR compliance, data privacy audits, privacy policy drafting, and ensuring adherence to data protection regulations and laws."
  },
  {
    question: "How do you handle digital evidence in cyber cases?",
    answer: "We handle digital evidence collection, preservation, and presentation in cyber cases. Our cyber lawyers work with digital forensics experts to ensure proper handling of electronic evidence in legal proceedings."
  }
];

// WebPage Schema with FAQ content for SEO
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Cyber Law Legal Services in India",
  "description": "Expert cyber lawyers in India. AMA Legal Solutions provides cybercrime defense, data protection compliance, and cyber law services.",
  "url": "https://amalegalsolutions.com/services/cyber",
  "mainEntity": {
    "@type": "FAQPage",
    "name": "Cyber Law Services FAQs",
    "description": "Frequently asked questions about cyber law services, cybercrime defense, and data protection in India",
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
  title: "Cyber Law Lawyers in India | Cyber Crime & Data Protection – AMA Legal Solutions",
  description:
    "Expert cyber law lawyers in India. AMA Legal Solutions provides cyber crime defense, data protection, online fraud cases, and IT Act compliance services. Book your consultation now.",
  alternates: {
    canonical: 'https://www.amalegalsolutions.com/services/cyber',
  },
};

export default function page() {
  // Sample service data (replace with your actual content)
  const service = {
    title: "Cyber Law Legal Services",
    bannerImage: "/services/10.png", // Replace with your actual image path
    description:
      "Our cyber law legal services provide comprehensive protection for digital rights and cyber security matters. We work closely with you to understand your cyber legal needs and deliver effective solutions.",
    buttonText: "Get Started",
    buttonLink: "/contact",
  };

  return (
    <>
      {/* WebPage Schema Markup with FAQ content */}
      <Script
        id="cyber-law-webpage-schema"
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
              Expert <span className="text-[#D2A02A]">Cyber Law</span> Services in India
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Facing cyber crime issues or digital legal problems? Get professional legal help for cyber fraud, data protection, and IT Act compliance with our experienced cyber lawyers.
            </p>
          </div>

          {/* Introduction Section */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Comprehensive Cyber Law & Digital Rights Protection
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In today's digital world, cyber crimes and online legal issues have become increasingly prevalent. Whether you're a victim of cyber fraud, facing data protection challenges, or dealing with online defamation, having expert cyber law guidance is essential.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At AMA Legal Solutions, we specialize in <strong>cyber law</strong>, providing comprehensive legal services for cyber crime defense, data protection, IT Act compliance, and digital rights protection. Our expert <strong>cyber lawyers in India</strong> ensure your digital interests are fully protected.
              </p>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Cyber Law Legal Services
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We provide comprehensive <strong>cyber law services</strong> covering all aspects of digital legal matters, from cyber crime defense to data protection compliance. Our expertise spans individual cyber issues to complex corporate digital legal matters.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <p className="text-blue-800 font-medium">
                    Our expert <strong>cyber lawyers</strong> ensure you get the best possible legal representation while protecting your digital rights throughout the process.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-xl rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Services</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Cyber crime defense & investigation
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Data protection & privacy compliance
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Online fraud & digital evidence
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    IT Act compliance & litigation
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Service Categories Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Cyber Law Expertise
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
                  <strong>Cyber crime defense</strong> including hacking cases, online fraud, cyber stalking, and digital evidence representation with expert legal protection.
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
                  <strong>Data protection</strong> and privacy law services including GDPR compliance, data breach response, and privacy policy development for businesses.
                </p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">💻</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Digital Evidence</h3>
                <p className="text-gray-600 text-center">
                  <strong>Digital evidence</strong> handling and forensic analysis including electronic discovery, data recovery, and expert testimony in cyber cases.
                </p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">📱</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Social Media Law</h3>
                <p className="text-gray-600 text-center">
                  <strong>Social media law</strong> services including online defamation, fake news complaints, and digital reputation management with legal remedies.
                </p>
              </div>
            </div>
          </section>

          {/* How We Help Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              How AMA Legal Solutions Helps with Cyber Law Matters
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Cyber Crime Investigation & Defense</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We provide comprehensive cyber crime investigation and defense services:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Filing complaints with cyber crime cells and police</li>
                  <li>• Digital evidence collection and forensic analysis</li>
                  <li>• Legal representation in cyber crime cases</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Data Protection & Compliance</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our experienced cyber lawyers provide complete data protection services:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• GDPR and data protection compliance audits</li>
                  <li>• Data breach response and notification assistance</li>
                  <li>• Privacy policy development and implementation</li>
                  <li>• Representation in data protection disputes</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Digital Rights Protection & Litigation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Comprehensive digital rights protection including:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Online defamation and social media dispute resolution</li>
                  <li>• IT Act compliance and regulatory matters</li>
                  <li>• Cyber security incident response and recovery</li>
                  <li>• Digital asset protection and intellectual property</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Benefits of Choosing Our Cyber Lawyers
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Investigation</h3>
                <p className="text-gray-600">
                  Specialized cyber crime investigation with digital forensics expertise and evidence collection.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Response</h3>
                <p className="text-gray-600">
                  Quick response to cyber incidents with immediate legal action and protection measures.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Comprehensive Protection</h3>
                <p className="text-gray-600">
                  Complete digital rights protection including prevention, defense, and recovery strategies.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
                <p className="text-gray-600">
                  Successful track record in cyber crime cases, data protection, and digital rights litigation.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🔒</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Privacy Focused</h3>
                <p className="text-gray-600">
                  Strong focus on data privacy and protection with compliance expertise across jurisdictions.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🌐</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Global Expertise</h3>
                <p className="text-gray-600">
                  International cyber law expertise with cross-border digital rights protection capabilities.
                </p>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-20">
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Our Proven 4-Step Cyber Law Process
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Incident Assessment</h3>
                  <p className="text-gray-300">Comprehensive cyber incident evaluation and legal strategy development</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Evidence Collection</h3>
                  <p className="text-gray-300">Digital evidence collection, forensic analysis, and documentation</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Legal Action</h3>
                  <p className="text-gray-300">File complaints, represent in court, and pursue legal remedies</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Recovery & Protection</h3>
                  <p className="text-gray-300">Asset recovery, ongoing protection, and prevention strategies</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              FAQs on Cyber Law Services
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
                Have more questions about cyber law services?
              </p>
              <Link href="/contact" className="text-[#D2A02A] font-semibold hover:underline">
                Contact our cyber lawyers for expert advice →
              </Link>
            </div>
          </section>

          {/* Contact CTA Section */}
          <section className="text-center bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Expert Cyber Law Assistance?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get professional legal help for cyber crime defense and digital rights protection today.
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
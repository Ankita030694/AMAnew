import Link from "next/link";
import Script from "next/script";
import GenericStatesGrid from "@/components/GenericStatesGrid";

// FAQ data for rendering
const faqs = [
  {
    question: "What types of entertainment law services do you provide?",
    answer: "We provide comprehensive entertainment law services including media law, film production contracts, music licensing, celebrity rights, entertainment contracts, and intellectual property protection. Our entertainment lawyers handle all aspects of media and entertainment law."
  },
  {
    question: "Can you help with film production legal matters?",
    answer: "Yes, we specialize in film production legal matters including production contracts, distribution agreements, licensing deals, and intellectual property protection for filmmakers and production companies."
  },
  {
    question: "Do you handle music industry legal services?",
    answer: "Absolutely. We handle music industry legal services including music licensing, copyright protection, recording contracts, performance agreements, and representing artists and music companies in legal matters."
  },
  {
    question: "How do you protect celebrity rights and image?",
    answer: "We protect celebrity rights and image through trademark registration, publicity rights protection, endorsement agreements, and legal representation in cases involving unauthorized use of celebrity likeness or brand."
  }
];

// WebPage Schema with FAQ content for SEO
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Entertainment Law Legal Services in India",
  "description": "Expert entertainment lawyers in India. AMA Legal Solutions provides media law, film production contracts, and entertainment legal services.",
  "url": "https://amalegalsolutions.com/services/entertainment",
  "mainEntity": {
    "@type": "FAQPage",
    "name": "Entertainment Law Services FAQs",
    "description": "Frequently asked questions about entertainment law services, media law, and entertainment contracts in India",
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
  title: "Entertainment Lawyers in India | Media & Entertainment Law – AMA Legal Solutions",
  description:
    "Expert entertainment lawyers in India. AMA Legal Solutions provides entertainment contracts, copyright protection, media law, and entertainment dispute resolution. Book your consultation now.",
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/entertainment',
  },
};

export default function page() {
  // Sample service data (replace with your actual content)
  const service = {
    title: "Entertainment Law Legal Services",
    bannerImage: "/services/5.png", // Replace with your actual image path
    description:
      "Our entertainment law legal services provide comprehensive support for all media and entertainment legal matters. We work closely with you to understand your entertainment needs and deliver effective legal solutions.",
    buttonText: "Get Started",
    buttonLink: "/contact",
  };

  return (
    <>
      {/* WebPage Schema Markup with FAQ content */}
      <Script
        id="entertainment-webpage-schema"
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
              Expert <span className="text-[#D2A02A]">Entertainment Law</span> Services in India
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Need legal support for entertainment and media projects? Get professional entertainment law services for contracts, copyright protection, and media legal matters with our experienced entertainment lawyers.
            </p>
          </div>

          {/* Introduction Section */}
          <section className="mb-20">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Comprehensive Entertainment & Media Law Services
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The entertainment and media industry involves complex legal considerations that require specialized expertise. Whether you're an artist, producer, studio, or media company, having expert entertainment law guidance is crucial for protecting your creative and commercial interests.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At AMA Legal Solutions, we specialize in <strong>entertainment law</strong>, providing comprehensive legal services for entertainment contracts, copyright protection, media law, and entertainment dispute resolution. Our expert <strong>entertainment lawyers in India</strong> ensure your creative and commercial interests are fully protected.
              </p>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Our Entertainment Law Legal Services
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  We provide comprehensive <strong>entertainment law services</strong> covering all aspects of media and entertainment legal matters, from contract drafting to intellectual property protection. Our expertise spans individual artists to major media companies.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <p className="text-blue-800 font-medium">
                    Our expert <strong>entertainment lawyers</strong> ensure you get the best possible legal representation while protecting your creative and commercial interests throughout the process.
                  </p>
                </div>
              </div>
              <div className="bg-white shadow-xl rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Services</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Entertainment contracts & agreements
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Copyright & intellectual property
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Media law & production legal
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    Entertainment dispute resolution
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Service Categories Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Our Entertainment Law Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">📄</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Entertainment Contracts</h3>
                <p className="text-gray-600 text-center">
                  <strong>Entertainment contracts</strong> including artist agreements, production contracts, licensing deals, and talent management agreements with fair terms and legal protections.
                </p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">©️</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Copyright Protection</h3>
                <p className="text-gray-600 text-center">
                  <strong>Copyright protection</strong> for entertainment works including music, films, scripts, and digital content with licensing and enforcement services.
                </p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">🎬</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Media Production</h3>
                <p className="text-gray-600 text-center">
                  <strong>Media production</strong> legal services including film financing, distribution agreements, and compliance with entertainment regulations and media laws.
                </p>
              </div>
              
              <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl">⚖️</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Entertainment Disputes</h3>
                <p className="text-gray-600 text-center">
                  <strong>Entertainment disputes</strong> resolution including contract disputes, copyright infringement, and media law litigation with expert representation.
                </p>
              </div>
            </div>
          </section>

          {/* How We Help Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              How AMA Legal Solutions Helps with Entertainment Law
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Contract Drafting & Negotiation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We provide comprehensive contract services for entertainment projects:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Drafting artist and talent agreements</li>
                  <li>• Negotiating production and distribution contracts</li>
                  <li>• Creating licensing and merchandising agreements</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Intellectual Property Protection</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our experienced entertainment lawyers provide complete IP protection:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Copyright registration and protection</li>
                  <li>• Trademark protection for entertainment brands</li>
                  <li>• IP licensing and enforcement strategies</li>
                  <li>• Digital rights management and protection</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Media Law & Compliance</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Comprehensive media law and compliance services including:
                </p>
                <ul className="text-gray-700 space-y-2 ml-6">
                  <li>• Film and media production legal support</li>
                  <li>• Entertainment industry compliance</li>
                  <li>• Digital media and streaming regulations</li>
                  <li>• Entertainment dispute resolution and litigation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Benefits of Choosing Our Entertainment Lawyers
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🎭</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Expertise</h3>
                <p className="text-gray-600">
                  Deep understanding of entertainment industry practices, trends, and legal requirements.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">📄</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Contract Excellence</h3>
                <p className="text-gray-600">
                  Expert contract drafting and negotiation ensuring fair terms and legal protection.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">©️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">IP Protection</h3>
                <p className="text-gray-600">
                  Comprehensive intellectual property protection for creative works and entertainment assets.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Response</h3>
                <p className="text-gray-600">
                  Quick response to entertainment legal matters with efficient contract and IP services.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Creative Support</h3>
                <p className="text-gray-600">
                  Supportive approach to creative projects with legal solutions that enable artistic expression.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Track Record</h3>
                <p className="text-gray-600">
                  Successful track record in entertainment law with numerous satisfied clients and projects.
                </p>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-20">
            <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Our Proven 4-Step Entertainment Law Process
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Project Assessment</h3>
                  <p className="text-gray-300">Comprehensive evaluation of entertainment project and legal requirements</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Legal Strategy</h3>
                  <p className="text-gray-300">Develop comprehensive legal strategy and contract framework</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Implementation</h3>
                  <p className="text-gray-300">Draft contracts, protect IP, and ensure legal compliance</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#D2A02A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Ongoing Support</h3>
                  <p className="text-gray-300">Provide ongoing legal support and dispute resolution</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              FAQs on Entertainment Law Services
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
                Have more questions about entertainment law services?
              </p>
              <Link href="/contact" className="text-[#D2A02A] font-semibold hover:underline">
                Contact our entertainment lawyers for expert advice →
              </Link>
            </div>
          </section>

          {/* Contact CTA Section */}
          <section className="text-center bg-gradient-to-r from-[#D2A02A] to-[#5A4C33] rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Expert Entertainment Law Assistance?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get professional entertainment law services and protect your creative interests today.
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

          <GenericStatesGrid serviceName="Entertainment Law" servicePath="entertainment" />
        </div>
      </div>
    </>
  );
}

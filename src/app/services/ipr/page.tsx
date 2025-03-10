"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function page() {
  // Sample service data (replace with your actual content)
  const service = {
    title: "Professional Consultation",
    bannerImage: "/services/4.png", // Replace with your actual image path
    description:
      "Our professional consultation service provides expert guidance tailored to your specific needs. We work closely with you to understand your requirements and deliver solutions that exceed your expectations. Our team of experienced consultants brings years of industry knowledge to help you navigate complex challenges and achieve your goals.",
    buttonText: "Get Started",
    buttonLink: "/contact",
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Banner Section - 1920x550 as specified */}
      <motion.div
        className="relative w-full h-[550px] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={service.bannerImage}
          alt={service.title}
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Service Description Section */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-[#5A4C33] text-lg leading-relaxed mb-8">
            <strong>
              Intellectual Property Rights (IPR) – Protect Your Innovation with
              Expert Legal Assistance
            </strong>
            <br />
            <br />
            <strong>
              Secure Your Intellectual Property with AMA Legal Solutions
            </strong>
            <br />
            <br />
            In today’s competitive world, protecting intellectual property (IP)
            is crucial for businesses, startups, creators, and innovators.
            Whether it’s a trademark, patent, copyright, or design, safeguarding
            your intellectual assets ensures that your brand, inventions, and
            creative works remain legally protected against unauthorized use or
            infringement.
            <br />
            <br />
            At AMA Legal Solutions, we offer comprehensive Intellectual Property
            Rights (IPR) services to help individuals and businesses register,
            enforce, and defend their IP rights in India and internationally.
            <br />
            <br />
            <strong>Our Intellectual Property Legal Services:</strong>
            <br />
            <br />
            <strong>1. Trademark Registration & Protection</strong>
            <br />
            A trademark distinguishes your brand and builds a strong identity in
            the market. We provide:
            <br />
            • Trademark registration for businesses, startups, and individuals
            <br />
            • Trademark search and clearance to avoid conflicts
            <br />
            • Trademark objections and oppositions handling
            <br />
            • Legal enforcement against trademark infringement
            <br />
            • Renewal and portfolio management of trademarks
            <br />
            <br />
            <strong>2. Patent Registration & Protection</strong>
            <br />
            If you have developed a unique invention, securing a patent ensures
            exclusive rights to its usage and commercialization. Our
            patent-related services include:
            <br />
            • Patent search and analysis to assess patentability
            <br />
            • Filing and prosecution of patents with the Indian Patent Office
            <br />
            • Patent drafting and documentation
            <br />
            • Patent infringement analysis and litigation support
            <br />
            • Patent licensing and commercialization advisory
            <br />
            <br />
            <strong>3. Copyright Registration & Legal Protection</strong>
            <br />
            Copyright protection is essential for artists, writers, musicians,
            filmmakers, and content creators. Our services include:
            <br />
            • Copyright registration for artistic, literary, and digital content
            <br />
            • Legal action against copyright infringement and piracy
            <br />
            • Copyright licensing and royalty agreements
            <br />
            • Enforcement of copyright laws for online and offline works
            <br />
            <br />
            <strong>4. Industrial Design Registration & Protection</strong>
            <br />
            A unique product design adds value to a brand and needs legal
            protection against imitation. We assist with:
            <br />
            • Industrial design registration and filing
            <br />
            • Legal action against design infringement
            <br />
            • Consultation on design patenting and protection strategies
            <br />
            <br />
            <strong>5. Intellectual Property Litigation & Enforcement</strong>
            <br />
            If your intellectual property is infringed, we provide legal support
            to protect your rights through:
            <br />
            • Cease and desist notices against infringers
            <br />
            • Trademark, patent, and copyright infringement lawsuits
            <br />
            • Alternative dispute resolution (ADR) and IP mediation
            <br />
            • IPR enforcement with regulatory authorities
            <br />
            <br />
            <strong>6. IP Licensing & Commercialization</strong>
            <br />
            Monetizing intellectual property requires strategic licensing and
            commercialization. We offer:
            <br />
            • IP licensing agreements for businesses and startups
            <br />
            • Franchising and technology transfer agreements
            <br />
            • Due diligence for IP transactions
            <br />
            <br />
            <strong>
              Why Choose AMA Legal Solutions for Intellectual Property
              Protection?
            </strong>
            <br />
            <br />• <strong>Experienced IP Lawyers</strong> – Our team
            specializes in IP registration, protection, and enforcement.
            <br />• <strong>Complete End-to-End IP Solutions</strong> – From
            registration to litigation, we handle all aspects of IP law.
            <br />• <strong>Global IP Protection</strong> – Assistance with
            international trademark, patent, and copyright registrations.
            <br />• <strong>Strategic Legal Approach</strong> – We offer
            customized solutions for businesses, startups, and individuals.
            <br />• <strong>Proven Track Record</strong> – Successfully handled
            numerous IP infringement cases and registrations.
            <br />
            <br />
            <strong>How Our IPR Process Works</strong>
            <br />
            <br />
            <strong>1. Consultation & IP Evaluation</strong> – Understanding
            your intellectual property needs.
            <br />
            <strong>2. IP Search & Documentation</strong> – Conducting necessary
            searches for conflicts and preparing applications.
            <br />
            <strong>3. Filing & Registration</strong> – Registering trademarks,
            patents, copyrights, and designs with the authorities.
            <br />
            <strong>4. Monitoring & Enforcement</strong> – Regular monitoring to
            prevent infringements and taking legal action when necessary.
            <br />
            <strong>5. IP Commercialization</strong> – Assisting in licensing,
            franchising, and monetization of IP rights.
            <br />
            <br />
            <strong>
              Protect Your Intellectual Property – Contact AMA Legal Solutions
              Today
            </strong>
            <br />
            <br />
            If you need trademark registration, patent protection, copyright
            enforcement, or legal action against IP infringement, our expert IP
            lawyers are here to help.
            <br />
            <br />
            📞 Call us at <strong>+91-8700343611</strong>
            <br />
            🌐 Visit:{" "}
            <a
              href="http://www.amalegalsolutions.com"
              className="text-blue-600 underline"
            >
              www.amalegalsolutions.com
            </a>
            <br />
            📍 <strong>Office Location: Sector-57, Gurugram</strong>
          </p>

          {/* Feature Highlights */}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href={service.buttonLink}>
            <div
              className="inline-block bg-[#D2A02A] text-white px-8 py-4 rounded-md font-medium 
                text-lg cursor-pointer hover:bg-[#5A4C33] transition-colors duration-300"
            >
              {service.buttonText}
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

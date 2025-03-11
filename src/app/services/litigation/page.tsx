"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function page() {
  // Sample service data (replace with your actual content)
  const service = {
    title: "Professional Consultation",
    bannerImage: "/services/13.png", // Replace with your actual image path
    description:
      "Our professional consultation service provides expert guidance tailored to your specific needs. We work closely with you to understand your requirements and deliver solutions that exceed your expectations. Our team of experienced consultants brings years of industry knowledge to help you navigate complex challenges and achieve your goals.",
    buttonText: "Get Started",
    buttonLink: "/contact",
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Banner Section - 1920x550 as specified */}
      <motion.div
        className="relative w-full h-[300px] md:h-[550px] overflow-hidden"
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
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-[#5A4C33] text-lg leading-relaxed mb-8">
            <strong>
              Expert Litigation Services – Strong Legal Representation in Courts
            </strong>
            <br />
            <br />
            <strong>
              Comprehensive Legal Solutions for Civil, Criminal & Commercial
              Disputes
            </strong>
            <br />
            <br />
            Litigation is a critical legal process involving the resolution of
            disputes through court proceedings, arbitration, and legal
            negotiation. Whether you are dealing with corporate disputes,
            criminal charges, property conflicts, or financial claims, expert
            legal representation is essential to protect your rights. At{" "}
            <strong>AMA Legal Solutions</strong>, we specialize in litigation
            services for individuals, businesses, and corporations, ensuring
            effective legal strategies and strong advocacy in courts.
            <br />
            <br />
            <strong>Our Litigation Services:</strong>
            <br />
            <br />
            <strong>1. Civil Litigation</strong>
            <br />
            We provide legal representation in civil disputes, including:
            <br />
            • Breach of contract & commercial litigation
            <br />
            • Property disputes & real estate conflicts
            <br />
            • Debt recovery & financial claims
            <br />
            • Defamation, slander & libel cases
            <br />
            • Consumer disputes & unfair trade practices
            <br />
            <br />
            <strong>2. Criminal Litigation</strong>
            <br />
            We handle criminal defense & prosecution in matters including:
            <br />
            • Bail applications & anticipatory bail
            <br />
            • White-collar crimes & financial fraud
            <br />
            • Cybercrimes & IT Act violations
            <br />
            • Theft, forgery, and corporate fraud cases
            <br />
            • Domestic violence & criminal defamation
            <br />
            <br />
            <strong>3. Corporate & Commercial Litigation</strong>
            <br />
            We assist businesses, startups, and corporations in:
            <br />
            • Shareholder & partnership disputes
            <br />
            • Employment & labor litigation
            <br />
            • Contract enforcement & business fraud cases
            <br />
            • Intellectual Property (IP) disputes & trademark infringement
            <br />
            • Banking & financial dispute litigation
            <br />
            <br />
            <strong>4. Real Estate & Property Litigation</strong>
            <br />
            Our legal team ensures protection in property-related legal
            conflicts, including:
            <br />
            • Title disputes & ownership claims
            <br />
            • Landlord-tenant conflicts & eviction cases
            <br />
            • Illegal possession & property fraud
            <br />
            • Construction & builder disputes
            <br />
            • Partition & succession-related matters
            <br />
            <br />
            <strong>5. Debt Recovery & Financial Disputes</strong>
            <br />
            We represent individuals, businesses, and financial institutions in:
            <br />
            • Loan default & non-payment cases
            <br />
            • Cheque bounce & dishonor of negotiable instruments (NI Act)
            <br />
            • Debt recovery tribunal (DRT) cases
            <br />
            • Corporate insolvency & bankruptcy disputes (IBC cases)
            <br />
            <br />
            <strong>
              6. Arbitration & Alternative Dispute Resolution (ADR)
            </strong>
            <br />
            We help clients resolve disputes through alternative legal
            mechanisms, including:
            <br />
            • Arbitration for business & contract disputes
            <br />
            • Mediation & negotiation for out-of-court settlements
            <br />
            • Conciliation proceedings for faster dispute resolution
            <br />
            • Enforcement of arbitration awards
            <br />
            <br />
            <strong>Who Can Benefit from Our Litigation Services?</strong>
            <br />
            <br />
            • Individuals facing civil, criminal, or financial disputes
            <br />
            • Businesses & Corporations requiring legal representation in
            commercial litigation
            <br />
            • Real Estate Investors & Homeowners dealing with property-related
            conflicts
            <br />
            • Financial Institutions & Lenders needing debt recovery assistance
            <br />
            • Startups & Entrepreneurs handling business disputes, contracts,
            and employment litigation
            <br />
            <br />
            <strong>Why Choose AMA Legal Solutions for Litigation?</strong>
            <br />
            <br />• <strong>Experienced Litigation Lawyers</strong> –
            Specialized in civil, criminal, and corporate litigation
            <br />• <strong>Strong Legal Representation</strong> – Expertise in
            District Courts, High Courts & Tribunals
            <br />• <strong>Strategic Dispute Resolution</strong> – Litigation
            backed by negotiation, mediation & arbitration
            <br />• <strong>Comprehensive Case Handling</strong> – From case
            filing to final judgment & appeals
            <br />• <strong>Client-Centric Approach</strong> – Focused on
            achieving favorable legal outcomes
            <br />
            <br />
            <strong>Need Litigation Support? Contact Us Today</strong>
            <br />
            <br />
            If you need legal representation for civil, criminal, corporate, or
            property disputes, contact <strong>AMA Legal Solutions</strong> now.
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

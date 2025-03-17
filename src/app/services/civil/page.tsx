import Link from "next/link";

export const metadata = {
  title: "Civil Law Services in Gurugram | AMA Legal Solutions",
  description:
    "Protect your legal rights with expert civil law services from AMA Legal Solutions, offering solutions for individuals and businesses in Gurugram, Haryana.",
};
export default function page() {
  // Sample service data (replace with your actual content)
  const service = {
    title: "Professional Consultation",
    bannerImage: "/services/11.png", // Replace with your actual image path
    description:
      "Our professional consultation service provides expert guidance tailored to your specific needs. We work closely with you to understand your requirements and deliver solutions that exceed your expectations. Our team of experienced consultants brings years of industry knowledge to help you navigate complex challenges and achieve your goals.",
    buttonText: "Get Started",
    buttonLink: "/contact",
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Banner Section - 1920x550 as specified */}
      <div className="relative w-full h-[300px] md:h-[550px] overflow-hidden">
        <img
          src={service.bannerImage}
          alt={service.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Service Description Section */}
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-center mb-8 text-black">
            Expert Civil Law Services – Legal Solutions for Individuals &
            Businesses
          </h1>
          <p className="text-[#5A4C33] text-lg leading-relaxed mb-8">
            <br />
            <br />
            <strong>
              Protecting Your Legal Rights with Experienced Civil Lawyers
            </strong>
            <br />
            <br />
            Civil law governs disputes between individuals, businesses, and
            organizations involving contracts, property, financial matters, and
            personal rights. Whether you need legal assistance with a breach of
            contract, property disputes, consumer rights, debt recovery, or
            defamation cases, our team of expert civil lawyers at{" "}
            <strong>AMA Legal Solutions</strong> provides reliable legal
            representation and advisory services to help you achieve a fair
            resolution.
            <br />
            <br />
            <strong>Our Civil Law Services:</strong>
            <br />
            <br />
            <strong>1. Contractual & Commercial Disputes</strong>
            <br />
            We handle legal disputes arising from contracts and commercial
            agreements, including:
            <br />
            • Breach of contract & non-performance claims
            <br />
            • Partnership & business disputes
            <br />
            • Service & supply agreement violations
            <br />
            • Employment contract disputes
            <br />
            • Franchise & licensing agreement conflicts
            <br />
            <br />
            <strong>2. Property & Real Estate Disputes</strong>
            <br />
            We assist clients in property-related civil disputes, ensuring their
            rights are protected in:
            <br />
            • Title disputes & property ownership conflicts
            <br />
            • Landlord-tenant disputes & eviction matters
            <br />
            • Illegal possession & encroachment cases
            <br />
            • Real estate fraud & misrepresentation cases
            <br />
            • Partition & inheritance disputes
            <br />
            <br />
            <strong>3. Consumer Protection & Product Liability</strong>
            <br />
            Consumers have rights under the Consumer Protection Act, 2019, and
            we help individuals and businesses in:
            <br />
            • Filing consumer complaints against defective products & services
            <br />
            • Misleading advertisements & unfair trade practices
            <br />
            • E-commerce fraud & online transaction disputes
            <br />
            • Medical negligence & professional malpractice claims
            <br />
            <br />
            <strong>4. Debt Recovery & Financial Disputes</strong>
            <br />
            We represent clients in financial disputes and debt recovery cases,
            including:
            <br />
            • Loan default & non-payment cases
            <br />
            • Cheque bounce & dishonor of negotiable instruments
            <br />
            • Money recovery suits under CPC & NI Act
            <br />
            • Banking & financial fraud litigation
            <br />
            <br />
            <strong>5. Defamation, Libel & Slander Cases</strong>
            <br />
            If you or your business has been affected by false accusations or
            reputational damage, we provide legal support in:
            <br />
            • Civil defamation cases under IPC & IT Act
            <br />
            • Online defamation & cyber libel cases
            <br />
            • Takedown notices for defamatory content
            <br />
            • Compensation claims for reputational damage
            <br />
            <br />
            <strong>6. Succession, Wills & Estate Planning</strong>
            <br />
            Ensuring a smooth transfer of assets and legal clarity on
            inheritance matters is crucial. We provide:
            <br />
            • Drafting & execution of wills
            <br />
            • Probate & succession certificate matters
            <br />
            • Disputes in inheritance & family property division
            <br />
            • Trust formation & estate planning advisory
            <br />
            <br />
            <strong>
              7. Civil Litigation & Alternative Dispute Resolution (ADR)
            </strong>
            <br />
            We provide legal representation for civil suits, arbitration,
            mediation, and negotiation, including:
            <br />
            • Filing & defending civil suits in courts
            <br />
            • Negotiation & mediation for faster settlements
            <br />
            • Arbitration for business & commercial disputes
            <br />
            • Legal representation in tribunals & consumer forums
            <br />
            <br />
            <strong>Who Can Benefit from Our Civil Law Services?</strong>
            <br />
            <br />
            • Individuals facing property, inheritance, or consumer disputes
            <br />
            • Businesses & corporations dealing with contract breaches &
            financial disputes
            <br />
            • Startups & entrepreneurs needing legal protection for business
            contracts
            <br />
            • Homebuyers & real estate investors dealing with fraud or property
            disputes
            <br />
            • Individuals & professionals facing defamation or reputation damage
            cases
            <br />
            <br />
            <strong>
              Why Choose AMA Legal Solutions for Civil Law Matters?
            </strong>
            <br />
            <br />• <strong>Experienced Civil Lawyers</strong> – Specialized in
            contract, property, and financial disputes.
            <br />• <strong>Personalized Legal Solutions</strong> – Tailored
            legal strategies for individuals & businesses.
            <br />• <strong>Cost-Effective & Efficient</strong> – Quick dispute
            resolution through litigation & ADR.
            <br />• <strong>Comprehensive Legal Support</strong> – Handling
            everything from case filing to final settlement.
            <br />• <strong>Strong Legal Representation</strong> – Expertise in
            District Courts, High Court & Tribunals.
            <br />
            <br />
            <strong>Need Civil Law Legal Assistance? Contact Us Today</strong>
            <br />
            <br />
            If you need a civil lawyer in Gurugram for property disputes,
            contract litigation, consumer protection, or debt recovery, contact{" "}
            <strong>AMA Legal Solutions</strong> now.
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
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mb-5">
          <Link href={service.buttonLink}>
            <div
              className="inline-block bg-[#D2A02A] text-white px-8 py-4 rounded-md font-medium 
                text-lg cursor-pointer hover:bg-[#5A4C33] transition-colors duration-300"
            >
              {service.buttonText}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

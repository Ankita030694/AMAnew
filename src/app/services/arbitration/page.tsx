import Link from "next/link";


export const metadata = {
  title: 'Arbitration & Dispute Resolution | AMA Legal Solutions',
  description: 'Resolve disputes efficiently with expert arbitration services. AMA Legal Solutions offers alternative dispute resolution for businesses and individuals',
}
export default function page() {
  // Sample service data (replace with your actual content)
  const service = {
    title: "Professional Consultation",
    bannerImage: "/services/9.png", // Replace with your actual image path
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
          <p className="text-[#5A4C33] text-lg leading-relaxed mb-8">
            <strong>
              Arbitration Law Services – Fast & Effective Dispute Resolution
            </strong>
            <br />
            <br />
            <strong>
              Resolve Disputes Efficiently with Expert Arbitration Lawyers
            </strong>
            <br />
            <br />
            Litigation can be time-consuming and expensive, making arbitration a
            preferred choice for resolving commercial and financial disputes.
            Whether you are dealing with a business contract dispute,
            cross-border arbitration, or investor-state conflicts, our
            experienced arbitration lawyers provide strategic legal
            representation for a quick and cost-effective resolution.
            <br />
            <br />
            At AMA Legal Solutions, we offer comprehensive arbitration services,
            ensuring that disputes are resolved fairly, efficiently, and in
            compliance with the{" "}
            <strong>Arbitration & Conciliation Act, 1996</strong>.<br />
            <br />
            <strong>Our Arbitration Law Services:</strong>
            <br />
            <br />
            <strong>1. Commercial & Contractual Arbitration</strong>
            <br />
            We assist businesses in resolving commercial disputes through
            arbitration, including:
            <br />
            • Breach of contract & non-performance claims
            <br />
            • Joint venture & partnership disputes
            <br />
            • Supply chain & vendor disputes
            <br />
            • Real estate and construction arbitration
            <br />
            <br />
            <strong>2. Institutional & Ad-Hoc Arbitration</strong>
            <br />
            Our lawyers have experience handling disputes in institutional and
            ad-hoc arbitration, including:
            <br />
            • Arbitration before SIAC, LCIA, ICC, ICA, MCIA, and NCLT
            <br />
            • Domestic arbitration under Indian laws
            <br />
            • International arbitration for cross-border disputes
            <br />
            • Custom arbitration frameworks for business-specific needs
            <br />
            <br />
            <strong>3. Corporate & Financial Arbitration</strong>
            <br />
            We specialize in arbitration for corporate and financial disputes,
            including:
            <br />
            • Shareholder and investment disputes
            <br />
            • Mergers & Acquisitions (M&A) conflicts
            <br />
            • Debt recovery & banking disputes
            <br />
            • Private equity & venture capital arbitration
            <br />
            <br />
            <strong>4. Construction & Infrastructure Arbitration</strong>
            <br />
            Construction projects often face legal disputes related to
            contracts, delays, and cost overruns. We handle:
            <br />
            • Contractual breach and performance disputes
            <br />
            • Real estate arbitration for property disputes
            <br />
            • Government contract & infrastructure arbitration
            <br />
            • FIDIC contract disputes
            <br />
            <br />
            <strong>5. Investor-State & International Arbitration</strong>
            <br />
            We provide expert legal representation in cross-border arbitration
            and investor disputes, including:
            <br />
            • Bilateral Investment Treaty (BIT) disputes
            <br />
            • International trade and commercial arbitration
            <br />
            • Foreign direct investment (FDI) legal disputes
            <br />
            • Export-import contract disputes
            <br />
            <br />
            <strong>6. Mediation & Conciliation</strong>
            <br />
            Alternative dispute resolution (ADR) can prevent lengthy court
            battles. We offer:
            <br />
            • Pre-arbitration mediation & conciliation
            <br />
            • Negotiation strategies for faster dispute resolution
            <br />
            • Commercial dispute settlement without litigation
            <br />
            • Mediation for partnership & shareholder disputes
            <br />
            <br />
            <strong>7. Arbitration Enforcement & Challenging Awards</strong>
            <br />
            Once an arbitration award is granted, proper execution is critical.
            We assist with:
            <br />
            • Enforcement of domestic & foreign arbitration awards
            <br />
            • Challenging arbitration awards in High Court & Supreme Court
            <br />
            • Interim reliefs under Section 9 & Section 17 of the Arbitration
            Act
            <br />
            • Appeals & review of arbitration decisions
            <br />
            <br />
            <strong>8. Emergency Arbitration & Interim Reliefs</strong>
            <br />
            For urgent legal matters requiring quick relief, we provide:
            <br />
            • Emergency arbitration under international arbitration rules
            <br />
            • Injunctions & asset freezing orders
            <br />
            • Interim measures for business protection
            <br />
            • Immediate legal action for contract breaches
            <br />
            <br />
            <strong>Who Can Benefit from Our Arbitration Services?</strong>
            <br />
            <br />
            • Corporations & businesses seeking fast dispute resolution
            <br />
            • Investors & shareholders involved in financial disputes
            <br />
            • Real estate developers & contractors facing arbitration cases
            <br />
            • Banks & financial institutions dealing with loan recovery disputes
            <br />
            • International businesses requiring cross-border arbitration
            <br />
            <br />
            <strong>Why Choose AMA Legal Solutions for Arbitration?</strong>
            <br />
            <br />• <strong>Expert Arbitration Lawyers</strong> – Specialized in
            handling commercial, corporate, and financial arbitration cases.
            <br />• <strong>Cost-Effective & Time-Saving Solutions</strong> –
            Alternative dispute resolution that avoids lengthy court battles.
            <br />• <strong>Global Arbitration Expertise</strong> –
            Representation in domestic & international arbitration forums.
            <br />• <strong>Enforcement & Appeals Support</strong> – Ensuring
            swift execution & defense of arbitration awards.
            <br />• <strong>Confidential & Professional Approach</strong> –
            Resolving disputes privately and efficiently.
            <br />
            <br />
            <strong>Need Arbitration Legal Support? Contact Us Today</strong>
            <br />
            <br />
            If you need an arbitration lawyer in Gurugram for business disputes,
            financial arbitration, or commercial contract enforcement, get in
            touch with AMA Legal Solutions now.
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

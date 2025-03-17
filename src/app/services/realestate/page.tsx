import Link from "next/link";

export const metadata = {
  title: "Real Estate Legal Solutions | AMA Legal Solutions",
  description:
    "Need legal help in property transactions, land disputes, or real estate compliance? AMA Legal Solutions provides expert guidance for individuals & businesses",
};
export default function page() {
  // Sample service data (replace with your actual content)
  const service = {
    title: "Professional Consultation",
    bannerImage: "/services/6.png", // Replace with your actual image path
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
          Real Estate Legal Services | Support for Transactions & Disputes
          </h1>
          <p className="text-[#5A4C33] text-lg leading-relaxed mb-8">
            <br />
            <br />
            <strong>
              Expert Real Estate Lawyers for Property Transactions & Litigation
            </strong>
            <br />
            <br />
            Buying, selling, or leasing real estate involves complex legal
            procedures that require expert guidance. Whether you are a
            homebuyer, property investor, builder, developer, landlord, or
            tenant, having a knowledgeable real estate lawyer ensures secure
            transactions, contract compliance, and protection from disputes.
            <br />
            <br />
            At AMA Legal Solutions, we offer comprehensive real estate legal
            services to help individuals, businesses, and investors navigate
            property transactions, title verifications, lease agreements, land
            disputes, and regulatory compliance across India.
            <br />
            <br />
            <strong>Our Real Estate Legal Services:</strong>
            <br />
            <br />
            <strong>1. Property Due Diligence & Title Verification</strong>
            <br />
            Before investing in real estate, it is crucial to verify property
            ownership and legal status. We assist with:
            <br />
            • Title verification and ownership checks
            <br />
            • Encumbrance certificate verification
            <br />
            • Legal due diligence for property purchases
            <br />
            • RERA compliance checks for under-construction projects
            <br />
            <br />
            <strong>2. Property Documentation & Agreement Drafting</strong>
            <br />
            Proper documentation ensures smooth real estate transactions. We
            specialize in:
            <br />
            • Sale deed and purchase agreements
            <br />
            • Lease and rental agreements
            <br />
            • Gift deed and power of attorney (POA) drafting
            <br />
            • Property registration and stamp duty consultation
            <br />
            <br />
            <strong>3. Real Estate Dispute Resolution & Litigation</strong>
            <br />
            Real estate disputes can be costly and stressful. Our legal experts
            handle:
            <br />
            • Title disputes and ownership claims
            <br />
            • Landlord-tenant disputes
            <br />
            • Property fraud and misrepresentation cases
            <br />
            • RERA complaints and builder-buyer disputes
            <br />
            • Illegal possession and eviction cases
            <br />
            <br />
            <strong>4. RERA Compliance & Builder-Buyer Disputes</strong>
            <br />
            The Real Estate (Regulation and Development) Act (RERA) protects
            homebuyers and regulates builders. We provide:
            <br />
            • Legal assistance in RERA complaints
            <br />
            • Representation in RERA tribunals for delayed possession claims
            <br />
            • Refund and compensation claims against builders
            <br />
            • Legal compliance for real estate developers
            <br />
            <br />
            <strong>5. Land & Property Acquisition Laws</strong>
            <br />
            Whether you are acquiring land for personal use or commercial
            projects, we help with:
            <br />
            • Legal guidance on land acquisition laws
            <br />
            • Compensation claims for land acquisition
            <br />
            • Agricultural land conversion to residential/commercial use
            <br />
            • Transfer of development rights (TDR) advisory
            <br />
            <br />
            <strong>6. Commercial & Residential Lease Agreements</strong>
            <br />
            A well-drafted lease agreement prevents disputes between landlords
            and tenants. We offer:
            <br />
            • Residential rental agreements
            <br />
            • Commercial lease drafting and negotiation
            <br />
            • Lease disputes and eviction procedures
            <br />
            • Tenant rights and legal protection
            <br />
            <br />
            <strong>7. Construction & Infrastructure Law</strong>
            <br />
            For builders and developers, legal compliance is essential. We
            assist with:
            <br />
            • Contract drafting for construction projects
            <br />
            • Real estate joint ventures and partnerships
            <br />
            • Dispute resolution in construction contracts
            <br />
            • Approvals and licenses for real estate projects
            <br />
            <br />
            <strong>
              Who Can Benefit from Our Real Estate Legal Services?
            </strong>
            <br />
            <br />
            • Homebuyers & property investors
            <br />
            • Builders & real estate developers
            <br />
            • Landlords & tenants
            <br />
            • Commercial property owners & businesses
            <br />
            • Housing societies & RWAs
            <br />
            • Banks & financial institutions dealing with real estate loans
            <br />
            <br />
            <strong>
              Why Choose AMA Legal Solutions for Real Estate Legal Services?
            </strong>
            <br />
            <br />• <strong>Experienced Real Estate Lawyers</strong> – Our team
            specializes in property transactions, land laws, and real estate
            litigation.
            <br />• <strong>RERA & Property Law Expertise</strong> – We help
            clients navigate builder-buyer agreements, delayed possession
            issues, and legal claims.
            <br />• <strong>End-to-End Legal Support</strong> – From title
            verification to dispute resolution, we cover all real estate legal
            matters.
            <br />• <strong>Transparent & Client-Focused Approach</strong> – We
            ensure clarity, compliance, and legal security in property dealings.
            <br />
            <br />
            <strong>Need Legal Help in Real Estate? Contact Us Today</strong>
            <br />
            <br />
            If you need expert legal assistance for property transactions, real
            estate disputes, or RERA compliance, AMA Legal Solutions is here to
            help.
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
                text-lg cursor-pointer hover:bg-[#5A4C33] transition-colors duration-300 mb-10"
            >
              {service.buttonText}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

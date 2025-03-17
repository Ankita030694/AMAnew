import Link from "next/link";

export const metadata = {
  title: 'Corporate Legal Services | Business Law Experts',
  description: 'Get professional legal support for business contracts, corporate compliance, mergers & acquisitions, and company disputes at AMA Legal Solutions',
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/corporate', // Add your canonical URL here
  },
}
export default function page() {
  // Sample service data (replace with your actual content)
  const service = {
    title: "Professional Consultation",
    bannerImage: "/services/8.png", // Replace with your actual image path
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
        Corporate Law Services | Legal Solutions for Businesses & Startups
          </h1>
          <p className="text-[#5A4C33] text-lg leading-relaxed mb-8">
            <br />
            <br />
            <strong>
              Comprehensive Legal Support for Companies, Startups &amp; Entrepreneurs
            </strong>
            <br />
            <br />
            Navigating the complexities of corporate law requires expert legal guidance. Whether you are starting a business, handling contracts, resolving disputes, or ensuring compliance, having a trusted corporate lawyer is essential for risk mitigation and smooth business operations.
            <br />
            <br />
            At AMA Legal Solutions, we specialize in corporate and commercial law, providing tailored legal solutions for companies, startups, investors, and business owners. Our expertise ensures that your business remains legally compliant, protected, and prepared for growth.
            <br />
            <br />
            <strong>Our Corporate Law Services:</strong>
            <br />
            <br />
            <strong>1. Business Incorporation &amp; Startup Legal Services</strong>
            <br />
            Starting a business requires proper legal structuring. We assist with:
            <br />
            • Company registration (Private Limited, LLP, OPC, Partnership, Sole Proprietorship)
            <br />
            • Drafting MOA, AOA, and shareholder agreements
            <br />
            • Startup legal compliance (DPIIT registration, MSME certification)
            <br />
            • Tax and regulatory advisory for new businesses
            <br />
            <br />
            <strong>2. Corporate Compliance &amp; Regulatory Advisory</strong>
            <br />
            Every business must comply with legal regulations. We help with:
            <br />
            • Companies Act &amp; LLP Act compliance
            <br />
            • RBI, SEBI, and FEMA compliance for foreign investments
            <br />
            • Annual filings, statutory audits, and board resolutions
            <br />
            • Corporate governance advisory for ethical business practices
            <br />
            <br />
            <strong>3. Contract Drafting &amp; Agreement Review</strong>
            <br />
            Well-drafted contracts protect businesses from legal risks. We specialize in:
            <br />
            • Shareholder &amp; partnership agreements
            <br />
            • Vendor &amp; supplier contracts
            <br />
            • Employment contracts &amp; HR policies
            <br />
            • Franchise, joint venture, and licensing agreements
            <br />
            <br />
            <strong>4. Mergers &amp; Acquisitions (M&amp;A) and Corporate Restructuring</strong>
            <br />
            Business expansion and restructuring require strategic legal planning. We offer:
            <br />
            • Mergers, acquisitions, and demergers advisory
            <br />
            • Due diligence for business acquisitions
            <br />
            • Drafting &amp; negotiation of share purchase agreements (SPA)
            <br />
            • Corporate restructuring &amp; liquidation
            <br />
            <br />
            <strong>5. Intellectual Property (IP) Protection for Businesses</strong>
            <br />
            Protecting your business assets is crucial. We help with:
            <br />
            • Trademark registration &amp; brand protection
            <br />
            • Copyright &amp; patent filing for innovations
            <br />
            • IP licensing and infringement litigation
            <br />
            • Trade secret &amp; confidentiality agreements
            <br />
            <br />
            <strong>6. Business Dispute Resolution &amp; Corporate Litigation</strong>
            <br />
            Legal disputes can disrupt business operations. We provide:
            <br />
            • Arbitration &amp; mediation for commercial disputes
            <br />
            • Contract enforcement &amp; breach of agreement cases
            <br />
            • Corporate fraud &amp; misrepresentation litigation
            <br />
            • Representation in NCLT, High Courts &amp; Supreme Court
            <br />
            <br />
            <strong>7. Employment &amp; Labor Law Compliance</strong>
            <br />
            Employee-related legal compliance is essential for businesses. We assist with:
            <br />
            • Employment contracts &amp; termination policies
            <br />
            • POSH (Prevention of Sexual Harassment) compliance
            <br />
            • Labour law disputes &amp; employee grievance handling
            <br />
            • ESI, PF, and wage law compliance
            <br />
            <br />
            <strong>8. Foreign Direct Investment (FDI) &amp; Cross-Border Transactions</strong>
            <br />
            For businesses dealing with international transactions, we provide:
            <br />
            • Foreign Direct Investment (FDI) approvals
            <br />
            • FEMA compliance for cross-border trade
            <br />
            • Joint venture &amp; foreign subsidiary setup in India
            <br />
            • International contract drafting &amp; legal due diligence
            <br />
            <br />
            <strong>Who Can Benefit from Our Corporate Law Services?</strong>
            <br />
            <br />
            • Startups &amp; entrepreneurs looking for business incorporation &amp; compliance
            <br />
            • Companies &amp; large corporations seeking legal risk management
            <br />
            • Investors &amp; venture capital firms requiring due diligence &amp; agreements
            <br />
            • E-commerce &amp; technology businesses needing legal protection
            <br />
            • Manufacturing &amp; service-based industries requiring labor law compliance
            <br />
            <br />
            <strong>Why Choose AMA Legal Solutions for Corporate Law?</strong>
            <br />
            <br />
            • Experienced Corporate Lawyers – Experts in business laws, contracts, and regulatory compliance.
            <br />
            • Custom Legal Strategies – Tailored solutions for startups, MSMEs, and large corporations.
            <br />
            • End-to-End Legal Support – From company registration to dispute resolution, we cover all corporate legal matters.
            <br />
            • Trusted by Businesses Across India – A strong track record in corporate compliance, mergers, and litigation.
            <br />
            <br />
            <strong>Need Expert Corporate Legal Assistance? Contact Us Today</strong>
            <br />
            <br />
            If you need a corporate lawyer in Gurugram for business incorporation, contract drafting, or legal compliance, get in touch with AMA Legal Solutions now.
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

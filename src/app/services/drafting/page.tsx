import Link from "next/link";

export const metadata = {
  title: 'Legal Drafting & Documentation | AMA Legal Solutions',
  description: 'Need precise legal documents? Our experts provide drafting services for contracts, agreements, legal notices, and more. Get legally sound documents today',
}
export default function page() {
  // Sample service data (replace with your actual content)
  const service = {
    title: "Professional Consultation",
    bannerImage: "/services/12.png", // Replace with your actual image path
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
              Expert Legal Drafting Services – Precision & Compliance in Every
              Document
            </strong>
            <br />
            <br />
            <strong>
              Accurate, Legally Compliant & Customized Legal Documents
            </strong>
            <br />
            <br />
            Legal drafting is a critical aspect of law, ensuring that contracts,
            agreements, and legal documents are precise, enforceable, and
            compliant with Indian laws. Poorly drafted documents can lead to
            disputes, financial losses, and legal complications. At{" "}
            <strong>AMA Legal Solutions</strong>, we specialize in drafting
            clear, legally sound, and customized agreements, contracts, and
            legal notices tailored to your needs.
            <br />
            <br />
            <strong>Our Legal Drafting Services:</strong>
            <br />
            <br />
            <strong>1. Contract Drafting & Agreements</strong>
            <br />
            We draft legally binding contracts and agreements for businesses,
            startups, and individuals, including:
            <br />
            • Business & Commercial Contracts
            <br />
            • Employment & HR Agreements
            <br />
            • Non-Disclosure Agreements (NDAs)
            <br />
            • Service Agreements & Vendor Contracts
            <br />
            • Partnership & Shareholder Agreements
            <br />
            <br />
            <strong>2. Property & Real Estate Document Drafting</strong>
            <br />
            We ensure legally sound property transactions with expert drafting
            of:
            <br />
            • Sale & Purchase Agreements
            <br />
            • Lease & Rental Agreements
            <br />
            • Gift Deeds & Power of Attorney
            <br />
            • Title Transfer Documents
            <br />
            • Property Settlement Agreements
            <br />
            <br />
            <strong>3. Corporate & Startup Legal Documents</strong>
            <br />
            For businesses and startups, we provide comprehensive documentation,
            including:
            <br />
            • Memorandum & Articles of Association (MoA & AoA)
            <br />
            • Founders & Shareholder Agreements
            <br />
            • Intellectual Property (IP) Licensing Agreements
            <br />
            • Investment & Fundraising Documents
            <br />
            • Corporate Governance Policies
            <br />
            <br />
            <strong>4. Legal Notices & Replies</strong>
            <br />
            Our legal drafting experts prepare strong and legally valid notices,
            including:
            <br />
            • Legal Notices for Non-Payment & Breach of Contract
            <br />
            • Employment Termination & HR Dispute Notices
            <br />
            • Property Eviction & Tenant Dispute Notices
            <br />
            • Consumer Complaint & Defamation Notices
            <br />
            <br />
            <strong>5. Wills, Trusts & Estate Planning</strong>
            <br />
            To ensure a hassle-free inheritance process, we draft:
            <br />
            • Wills & Testamentary Documents
            <br />
            • Trust Deeds & Estate Planning Documents
            <br />
            • Succession & Probate Applications
            <br />
            <br />
            <strong>6. Litigation & Court Document Drafting</strong>
            <br />
            For individuals and businesses involved in legal proceedings, we
            assist in drafting:
            <br />
            • Petitions & Applications
            <br />
            • Affidavits & Declarations
            <br />
            • Bail Applications & Criminal Complaints
            <br />
            • Civil Suits & Legal Claims
            <br />
            <br />
            <strong>7. Arbitration & Dispute Resolution Drafting</strong>
            <br />
            We prepare legal documents for arbitration and mediation, including:
            <br />
            • Arbitration Agreements & Dispute Resolution Clauses
            <br />
            • Settlement Agreements & Mediation Drafts
            <br />
            • Conciliation & Negotiation Documents
            <br />
            <br />
            <strong>Who Can Benefit from Our Legal Drafting Services?</strong>
            <br />
            <br />
            • Businesses & Corporations needing contracts, policies & legal
            agreements
            <br />
            • Startups & Entrepreneurs requiring founder agreements, NDAs &
            business contracts
            <br />
            • Property Owners & Tenants needing lease agreements & property
            documentation
            <br />
            • Individuals requiring wills, legal notices & affidavits
            <br />
            • Lawyers & Law Firms needing well-drafted legal documents
            <br />
            <br />
            <strong>Why Choose AMA Legal Solutions for Legal Drafting?</strong>
            <br />
            <br />• <strong>Experienced Legal Drafters</strong> – Experts in
            business, corporate, and property laws.
            <br />• <strong>Legally Sound & Enforceable Documents</strong> –
            Compliant with Indian Contract Act, Real Estate Laws, and Business
            Regulations.
            <br />• <strong>Tailored to Your Needs</strong> – Customized
            contracts, agreements, and notices.
            <br />• <strong>Confidential & Secure</strong> – Ensuring complete
            legal protection for clients.
            <br />• <strong>Quick Turnaround</strong> – Timely drafting & review
            for urgent legal requirements.
            <br />
            <br />
            <strong>Need Legal Drafting Services? Contact Us Today</strong>
            <br />
            <br />
            If you need contract drafting, legal notices, business agreements,
            or property documents, contact <strong>
              AMA Legal Solutions
            </strong>{" "}
            now.
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
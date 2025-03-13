import Link from "next/link";

export const metadata = {
  title: 'IT & Cyber Law Services in Gurugram | AMA Legal Solutions',
  description: 'Safeguard your digital interests with AMA Legal Solutions IT and cyber law services, addressing cybercrime',
}
export default function page() {
  // Sample service data (replace with your actual content)
  const service = {
    title: "Professional Consultation",
    bannerImage: "/services/10.png", // Replace with your actual image path
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
              IT & Cyber Law Services – Protecting Businesses in the Digital Age
            </strong>
            <br />
            <br />
            <strong>
              Legal Solutions for Cybercrime, Data Protection & IT Compliance
            </strong>
            <br />
            <br />
            In today's digital era, cybersecurity, data privacy, and online
            fraud have become major concerns for businesses and individuals.
            Cyber law governs digital transactions, cyber fraud, data breaches,
            hacking, and online defamation, making it essential to have expert
            IT law and cybercrime lawyers to navigate the complexities of the{" "}
            <strong>Information Technology (IT) Act, 2000</strong> and related
            laws.
            <br />
            <br />
            At AMA Legal Solutions, we specialize in cyber law and IT legal
            services, ensuring that individuals, businesses, and startups stay
            legally compliant, protected, and prepared against cyber threats.
            <br />
            <br />
            <strong>Our IT & Cyber Law Services:</strong>
            <br />
            <br />
            <strong>1. Cybercrime Legal Assistance</strong>
            <br />
            We provide legal solutions for individuals and businesses facing
            cyber frauds and crimes, including:
            <br />
            • Hacking & unauthorized system access cases
            <br />
            • Phishing, identity theft & financial frauds
            <br />
            • Online stalking, cyberbullying & harassment cases
            <br />
            • Defamation, fake news & cyber libel cases
            <br />
            • Dark web activities & illegal data access
            <br />
            <br />
            <strong>2. Data Privacy & Protection Compliance</strong>
            <br />
            With increasing data security laws, businesses must comply with
            Indian & international data protection regulations such as:
            <br />
            • Personal Data Protection Bill (PDPB), 2019
            <br />
            • General Data Protection Regulation (GDPR) Compliance
            <br />
            • IT Act, 2000 & Digital Personal Data Protection Act, 2023
            <br />
            • Cybersecurity compliance for companies & e-commerce businesses
            <br />
            • Legal advisory for handling customer data breaches
            <br />
            <br />
            <strong>3. Online Fraud & Financial Cybercrime Cases</strong>
            <br />
            With the rise of digital transactions, we assist clients in legal
            matters related to:
            <br />
            • Credit card fraud, UPI fraud & online banking scams
            <br />
            • Cryptocurrency fraud & blockchain disputes
            <br />
            • Internet banking legal issues & unauthorized transactions
            <br />
            • Investment scams & Ponzi scheme cases
            <br />
            • Online job frauds & work-from-home scams
            <br />
            <br />
            <strong>
              4. IT Contracts, Software Licensing & Intellectual Property (IP)
              Protection
            </strong>
            <br />
            We assist IT companies, startups, and software developers with:
            <br />
            • Software & mobile app licensing agreements
            <br />
            • Website terms of service & privacy policies
            <br />
            • E-commerce compliance & consumer protection laws
            <br />
            • Intellectual property (IP) rights for digital businesses
            <br />
            • Technology transfer agreements & SaaS contracts
            <br />
            <br />
            <strong>5. Cybersecurity & IT Compliance for Businesses</strong>
            <br />
            With rising cyber threats, businesses need to ensure strong
            cybersecurity measures and legal compliance:
            <br />
            • Drafting cybersecurity policies & internal compliance frameworks
            <br />
            • Legal protection against ransomware & cyber extortion cases
            <br />
            • Cloud computing legal advisory & data storage compliance
            <br />
            • Legal risk assessment for IT & tech startups
            <br />
            • Employee training on cybersecurity laws & compliance
            <br />
            <br />
            <strong>6. Social Media & Digital Rights Protection</strong>
            <br />
            With the increase in social media usage, individuals and businesses
            face legal issues related to:
            <br />
            • Cyber defamation & online reputation management
            <br />
            • Takedown requests for fake news & false allegations
            <br />
            • Social media fraud & fake accounts
            <br />
            • Content copyright protection & DMCA takedown notices
            <br />
            • Legal actions against trolling, hate speech & misinformation
            <br />
            <br />
            <strong>7. E-Commerce & Fintech Legal Advisory</strong>
            <br />
            Online businesses must comply with various IT laws and digital
            financial regulations. We offer:
            <br />
            • Legal support for e-commerce & fintech startups
            <br />
            • Regulatory compliance for digital payment platforms
            <br />
            • Online consumer disputes & e-commerce fraud cases
            <br />
            • Legal documentation for payment gateways & wallet services
            <br />
            <br />
            <strong>8. Cyber Law Litigation & Arbitration</strong>
            <br />
            We represent clients in court cases, arbitration, and mediation
            related to:
            <br />
            • Cybercrime investigations & legal representation
            <br />
            • Enforcement of cyber law violations
            <br />
            • Filing cases under IT Act & IPC for digital offenses
            <br />
            • NCLT & High Court cases related to cyber disputes
            <br />
            <br />
            <strong>Who Can Benefit from Our IT & Cyber Law Services?</strong>
            <br />
            <br />
            • Corporations & IT firms requiring cybersecurity & legal compliance
            <br />
            • Startups & entrepreneurs operating in e-commerce, fintech, and
            digital platforms
            <br />
            • Individuals & businesses facing cyber fraud, hacking, or data
            breach issues
            <br />
            • Banks & financial institutions dealing with online fraud and
            digital transactions
            <br />
            • Social media influencers & digital content creators needing
            protection from cyber harassment and defamation
            <br />
            <br />
            <strong>Why Choose AMA Legal Solutions for Cyber Law?</strong>
            <br />
            <br />• <strong>Experienced Cyber Law Attorneys</strong> – Experts
            in IT Act, cybersecurity, and data privacy laws.
            <br />• <strong>Business-Oriented Approach</strong> – Customized
            legal solutions for startups, corporates, and fintech companies.
            <br />• <strong>
              Quick Legal Support for Cybercrime Victims
            </strong>{" "}
            – Immediate action on hacking, fraud, and online harassment cases.
            <br />•{" "}
            <strong>Legal Compliance for IT & Digital Businesses</strong> –
            Ensuring your business follows GDPR, PDPB, IT Act, and other
            cybersecurity regulations.
            <br />• <strong>Proven Track Record</strong> – Successfully handling
            cyber law litigation and corporate compliance cases.
            <br />
            <br />
            <strong>
              Need IT & Cyber Law Legal Assistance? Contact Us Today
            </strong>
            <br />
            <br />
            If you need a cyber law expert in Gurugram for IT compliance,
            cybersecurity, digital fraud protection, or online dispute
            resolution, contact AMA Legal Solutions now.
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
import Link from "next/link";

export const metadata = {
  title: "Loan Settlement Experts | Reduce Debt Legally",
  description:
    "Struggling with loan repayment? AMA Legal Solutions provides professional loan settlement services to help you negotiate and resolve debt legally",
};
export default function page() {
  // Sample service data (replace with your actual content)
  const service = {
    title: "Professional Consultation",
    bannerImage: "/services/3.png", // Replace with your actual image path
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
            Loan Settlement Services – Expert Legal Assistance to Reduce Your
            Debt Burden
          </h1>
          <p className="text-[#5A4C33] text-lg leading-relaxed mb-8">
            <br />
            <br />
            Struggling with Loan Repayments? Get Legal Help for Loan Settlement
            <br />
            <br />
            Managing debt can be overwhelming, especially when faced with
            high-interest rates, legal notices, collection harassment, and
            financial uncertainty. If you are struggling with loan repayment,
            experiencing harassment from banks and NBFCs, or looking for a way
            to settle your loan legally, expert legal intervention can help.
            <br />
            <br />
            At AMA Legal Solutions, we specialize in loan settlement and debt
            resolution, ensuring that individuals and businesses achieve a fair
            and legally compliant loan settlement with banks, NBFCs, and
            financial institutions.
            <br />
            <br />
            <strong>What is Loan Settlement?</strong>
            <br />
            <br />
            Loan settlement is a legal process where borrowers negotiate with
            banks and financial institutions to reduce the outstanding loan
            amount and close the loan at a mutually agreed-upon amount. This is
            different from loan closure and is often a last-resort option when a
            borrower is unable to make full repayment.
            <br />
            <br />
            <strong>Our Loan Settlement Services:</strong>
            <br />
            <br />
            <strong>1. Legal Consultation & Debt Assessment</strong>
            <br />
            We assess your financial situation and determine the best approach
            to settle your loan legally. Our services include:
            <br />
            • Reviewing loan agreements and outstanding dues
            <br />
            • Evaluating legal options for debt resolution
            <br />
            • Advising on whether loan restructuring, settlement, or waiver is
            the best course of action
            <br />
            <br />
            <strong>2. Negotiation with Banks & NBFCs</strong>
            <br />
            Our experienced lawyers negotiate with banks and financial
            institutions on your behalf to:
            <br />
            • Reduce the total outstanding loan amount
            <br />
            • Eliminate excessive penalties and late payment charges
            <br />
            • Prevent legal action and credit score damage
            <br />
            • Achieve a mutually agreeable one-time settlement (OTS)
            <br />
            <br />
            <strong>3. Handling Legal Notices & Bank Recovery Agents</strong>
            <br />
            If you are receiving legal notices from banks or NBFCs, we provide:
            <br />
            • Legal defense against loan recovery lawsuits
            <br />
            • Filing complaints against illegal harassment by recovery agents
            <br />
            • Protecting your rights under RBI guidelines and banking laws
            <br />
            • Assisting with settlements before legal escalation
            <br />
            <br />
            <strong>
              4. SARFAESI Act & Debt Recovery Tribunal (DRT) Assistance
            </strong>
            <br />
            For secured loans, including home loans, business loans, and
            property-backed loans, banks may take action under the SARFAESI Act.
            We provide:
            <br />
            • Legal representation in Debt Recovery Tribunal (DRT) cases
            <br />
            • Assistance in stopping property auctions & bank takeovers
            <br />
            • Strategic negotiations to settle loans under SARFAESI regulations
            <br />
            <br />
            <strong>5. Credit Score Protection & Financial Advisory</strong>
            <br />
            Loan settlement can impact your CIBIL score and future borrowing
            capacity. Our experts help you:
            <br />
            • Understand how settlement affects your credit score
            <br />
            • Implement strategies to restore creditworthiness post-settlement
            <br />
            • Avoid future debt traps and loan mismanagement
            <br />
            <br />
            <strong>Who Can Benefit from Our Loan Settlement Services?</strong>
            <br />
            <br />
            • Salaried professionals struggling with personal loan repayment
            <br />
            • Business owners facing financial distress due to business loans
            <br />
            • Individuals with multiple unsecured loans such as credit card debt
            <br />
            • Home loan borrowers facing property seizure threats
            <br />
            • Borrowers receiving legal notices or threats of legal action from
            banks/NBFCs
            <br />
            <br />
            <strong>Why Choose AMA Legal Solutions for Loan Settlement?</strong>
            <br />
            <br />• <strong>Experienced Loan Settlement Lawyers</strong> –
            Specialized in banking laws, financial negotiations, and debt
            recovery.
            <br />• <strong>Direct Negotiation with Banks & NBFCs</strong> – We
            negotiate legally to secure the best settlement offers for our
            clients.
            <br />• <strong>Legal Protection Against Harassment</strong> – We
            help you take legal action against unethical debt recovery
            practices.
            <br />• <strong>End-to-End Loan Settlement Assistance</strong> –
            From case evaluation to final settlement, we handle everything.
            <br />• <strong>Confidential & Client-Focused Approach</strong> –
            Your financial matters remain strictly confidential, with a focus on
            achieving the best outcome for you.
            <br />
            <br />
            <strong>How Our Loan Settlement Process Works</strong>
            <br />
            <br />
            <strong>1. Case Evaluation & Financial Analysis</strong> – We assess
            your financial condition and outstanding loans.
            <br />
            <strong>2. Legal Strategy & Documentation</strong> – We create a
            strong legal strategy for settlement negotiations.
            <br />
            <strong>3. Negotiation & Settlement Discussions</strong> – We
            negotiate with banks, NBFCs, and financial institutions.
            <br />
            <strong>4. Final Settlement Agreement</strong> – We ensure that the
            final agreement is legally valid and protects your interests.
            <br />
            <br />
            <strong>
              Need Legal Assistance for Loan Settlement? Contact Us Today
            </strong>
            <br />
            <br />
            If you are facing loan repayment challenges, harassment from banks,
            or legal notices, AMA Legal Solutions is here to help. Our expert
            loan settlement lawyers will guide you through every legal step to
            ensure financial relief and legal protection.
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

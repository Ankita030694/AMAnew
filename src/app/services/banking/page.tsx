"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function page() {
  // Sample service data (replace with your actual content)
  const service = {
    title: "Professional Consultation",
    bannerImage: "/services/2.png", // Replace with your actual image path
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
              Banking & Financial Dispute Litigation – Expert Legal Solutions in
              India
            </strong>
            <br />
            <br />
            Struggling with Banking & Financial Disputes? Let AMA Legal
            Solutions Help You
            <br />
            <br />
            In today’s fast-paced financial world, banking and financial
            disputes have become increasingly common, affecting both individuals
            and businesses. Whether it is a loan default, cheque bounce case,
            banking fraud, or corporate financial dispute, having the right
            legal experts by your side is crucial.
            <br />
            <br />
            At AMA Legal Solutions, we specialize in banking and financial
            dispute litigation, providing legal solutions tailored to your
            needs. With a team of seasoned banking lawyers in Gurugram, we
            ensure swift and effective resolution of your financial legal
            matters.
            <br />
            <br />
            <strong>
              Our Comprehensive Banking & Financial Legal Services:
            </strong>
            <br />
            <br />
            <strong>1. Loan Default & Debt Recovery Litigation</strong>
            <br />
            Facing issues with loan repayment or being harassed by banks or
            collection agents? Our expert legal team assists in:
            <br />
            • Legal action against unlawful debt recovery tactics
            <br />
            • Filing cases under the Debt Recovery Tribunal (DRT)
            <br />
            • Negotiating settlements with banks and NBFCs
            <br />
            • Assistance with SARFAESI Act cases for secured loan disputes
            <br />
            <br />
            <strong>2. Cheque Bounce & Dishonored Payments Litigation</strong>
            <br />
            If your cheque has bounced or you need to take action against
            dishonored payments, we provide:
            <br />
            • Legal notice for cheque bounce cases under Section 138 of the
            Negotiable Instruments Act
            <br />
            • Defense in false cheque bounce allegations
            <br />
            • Filing and defending cheque dishonor complaints in court
            <br />
            • Assistance with criminal and civil remedies for cheque fraud
            <br />
            <br />
            <strong>3. Banking & Financial Fraud Legal Assistance</strong>
            <br />
            With increasing cases of banking frauds, phishing scams, and
            unauthorized transactions, we provide:
            <br />
            • Legal support for victims of financial fraud and online scams
            <br />
            • Representation in bank fraud and misrepresentation cases
            <br />
            • Filing complaints with banking ombudsman and regulatory bodies
            like RBI
            <br />
            • Legal action for cyber financial fraud and identity theft cases
            <br />
            <br />
            <strong>4. Corporate & Commercial Banking Disputes</strong>
            <br />
            Businesses often face financial disputes with banks, investors, and
            financial institutions. We assist with:
            <br />
            • Legal representation in corporate financial disputes
            <br />
            • Resolving business loan disputes with banks and NBFCs
            <br />
            • Breach of financial contracts litigation
            <br />
            • Negotiation and arbitration for commercial banking matters
            <br />
            <br />
            <strong>5. Investment & Securities Fraud Litigation</strong>
            <br />
            If you have been misled by fraudulent investment schemes, Ponzi
            schemes, or stock market manipulations, we provide:
            <br />
            • Legal action against investment fraud and financial scams
            <br />
            • Representation in securities fraud and stock market disputes
            <br />
            • Legal remedies for mis-sold mutual funds and investment products
            <br />
            • Protection of investor rights and financial asset disputes
            <br />
            <br />
            <strong>
              Why Choose AMA Legal Solutions for Banking & Financial Dispute
              Litigation?
            </strong>
            <br />
            <br />•{" "}
            <strong>Experienced Banking & Financial Dispute Lawyers</strong> –
            Specialized legal expertise in banking laws, financial regulations,
            and debt recovery laws.
            <br />• <strong>Proven Track Record of Success</strong> –
            Successfully handled loan disputes, banking fraud cases, and
            corporate financial disputes.
            <br />• <strong>Strategic Legal Approach</strong> – We use a
            combination of litigation, negotiation, and arbitration for the best
            outcomes.
            <br />• <strong>Complete End-to-End Legal Support</strong> – From
            drafting legal notices to courtroom representation, we handle it
            all.
            <br />• <strong>Client-Focused Legal Services</strong> – We provide
            customized legal strategies based on your specific case needs.
            <br />
            <br />
            <strong>
              How We Help Clients with Banking & Financial Disputes
            </strong>
            <br />
            <br />
            <strong>1. Consultation & Case Evaluation</strong> – We assess your
            case and suggest the most effective legal course of action.
            <br />
            <strong>2. Legal Notice & Representation</strong> – If necessary, we
            send legal notices and represent you in financial dispute
            negotiations.
            <br />
            <strong>3. Court Litigation & Arbitration</strong> – We represent
            clients in Debt Recovery Tribunals (DRT), consumer courts, high
            courts, and the Supreme Court of India.
            <br />
            <strong>4. Final Settlement & Legal Enforcement</strong> – We ensure
            that you get the compensation or settlement you deserve through
            legal enforcement mechanisms.
            <br />
            <br />
            <strong>
              Need Legal Assistance? Contact AMA Legal Solutions Today
            </strong>
            <br />
            <br />
            If you are dealing with banking disputes, loan recovery issues,
            cheque bounce cases, or financial fraud, we are here to help. Our
            expert banking dispute lawyers will guide you through every legal
            step to ensure justice and financial protection.
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
          className="flex justify-center mb-5"
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

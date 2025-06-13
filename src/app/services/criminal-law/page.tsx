import Link from "next/link";

export const metadata = {
  title: 'Top criminal law firms in India',
  description: 'Looking for trusted criminal law firms in india? AMA Legal Solutions offers legal defense for bail, trial, and criminal litigation. Consult today!',
  alternates: {
    canonical: 'https://amalegalsolutions.com/services/criminal-law', // Add your canonical URL here
  },
}
export default function page() {
  // Sample service data (replace with your actual content)
  const service = {
    title: "Professional Consultation",
    bannerImage: "/services/7.png", // Replace with your actual image path
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
          Criminal Law Services – Expert Legal Defense & Representation
          </h1>
          <p className="text-[#5A4C33] text-lg leading-relaxed mb-8">
            <br />
            <br />
            <strong>
              Protecting Your Legal Rights with Experienced Criminal Lawyers
            </strong>
            <br />
            <br />
            Being involved in a criminal case can be stressful and
            life-changing. Whether you are facing false accusations, criminal
            charges, or need bail assistance, having a skilled criminal defense
            lawyer is crucial to protect your rights and ensure a fair trial.
            <br />
            <br />
            At AMA Legal Solutions, we provide strong legal representation for
            individuals facing criminal charges, ensuring a strategic defense,
            bail assistance, and trial advocacy. Our experienced criminal
            lawyers in Gurugram handle all types of criminal cases, from
            financial crimes to serious offenses.
            <br />
            <br />
            <strong>Our Criminal Law Services:</strong>
            <br />
            <br />
            <strong>1. Bail & Anticipatory Bail Assistance</strong>
            <br />
            Quick and effective bail representation is crucial in criminal
            cases. We help with:
            <br />
            • Regular Bail & Anticipatory Bail Applications
            <br />
            • High Court & Supreme Court Bail Matters
            <br />
            • FIR Quashing & Preventing Arrests
            <br />
            • Legal Consultation Before Arrest
            <br />
            <br />
            <strong>2. Criminal Trial Defense & Representation</strong>
            <br />
            We provide strong legal defense in courts for:
            <br />
            • Theft, Fraud, & Financial Crimes
            <br />
            • White-Collar Crimes & Corporate Fraud
            <br />
            • Cheating, Forgery, and Misrepresentation Cases
            <br />
            • Cyber Crimes & Online Fraud
            <br />
            <br />
            <strong>3. Serious Offenses & Defense Litigation</strong>
            <br />
            If facing serious allegations, expert legal representation is
            critical. We defend clients against:
            <br />
            • Murder & Attempt to Murder (IPC 302, 307)
            <br />
            • Sexual Offenses & POCSO Cases
            <br />
            • Domestic Violence & Dowry Cases (Section 498A IPC)
            <br />
            • Drug-Related Offenses (NDPS Act)
            <br />
            <br />
            <strong>4. Quashing of FIR & Criminal Complaints</strong>
            <br />
            We help clients get false or malicious FIRs quashed through:
            <br />
            • Filing Quashing Petitions in High Court
            <br />
            • Challenging False Allegations & Harassment
            <br />
            • Criminal Writ Petitions for Rights Protection
            <br />
            <br />
            <strong>5. White-Collar Crimes & Financial Offenses</strong>
            <br />
            Corporate professionals and businesses may face fraud and financial
            crime allegations. We provide legal defense in:
            <br />
            • Money Laundering (PMLA Act) Cases
            <br />
            • Corporate & Banking Fraud Cases
            <br />
            • Breach of Trust & Embezzlement Defense
            <br />
            • Income Tax & GST-Related Offenses
            <br />
            <br />
            <strong>6. Cyber Crime Defense & Legal Assistance</strong>
            <br />
            With the rise in digital fraud and cyber offenses, we provide legal
            support for:
            <br />
            • Online Fraud & Financial Cyber Crimes
            <br />
            • Identity Theft & Phishing Cases
            <br />
            • Cyber Defamation & Social Media Harassment
            <br />
            • Hacking & Data Theft Cases
            <br />
            <br />
            <strong>7. Domestic Violence & Matrimonial Criminal Cases</strong>
            <br />
            Criminal disputes often arise in matrimonial conflicts. We handle:
            <br />
            • 498A IPC (Dowry Harassment) Defense
            <br />
            • False Allegations in Domestic Violence Cases
            <br />
            • Divorce-Related Criminal Proceedings
            <br />
            • Protection of Women & Children in Criminal Cases
            <br />
            <br />
            <strong>8. Criminal Appeals & High Court Representation</strong>
            <br />
            For those seeking relief in higher courts, we provide:
            <br />
            • Filing Appeals & Revisions in High Court & Supreme Court
            <br />
            • Challenging Wrongful Convictions
            <br />
            • Legal Representation in Sessions & High Courts
            <br />
            <br />
            <strong>Who Can Benefit from Our Criminal Law Services?</strong>
            <br />
            <br />
            • Individuals facing criminal charges
            <br />
            • Businesses & professionals involved in corporate crimes
            <br />
            • Victims of false accusations seeking defense
            <br />
            • Families dealing with domestic violence allegations
            <br />
            • Cybercrime victims and accused individuals
            <br />
            <br />
            <strong>
              Why Choose AMA Legal Solutions for Criminal Defense?
            </strong>
            <br />
            <br />• <strong>Experienced Criminal Lawyers</strong> – Specialized
            in criminal defense, bail, and trial advocacy.
            <br />• <strong>Quick Legal Assistance</strong> – 24/7 support for
            urgent bail applications and legal advice.
            <br />• <strong>Strategic Defense Approach</strong> – Strong legal
            arguments for FIR quashing, anticipatory bail, and trial
            representation.
            <br />• <strong>High Court & Supreme Court Representation</strong> –
            Handling complex cases at higher judicial levels.
            <br />• <strong>Confidential & Professional Legal Support</strong> –
            Ensuring client privacy and protection of legal rights.
            <br />
            <br />
            <strong>
              Facing Criminal Charges? Get Expert Legal Help Today
            </strong>
            <br />
            <br />
            If you need a criminal lawyer in Gurugram for bail, defense, or FIR
            quashing, contact AMA Legal Solutions now.
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
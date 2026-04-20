import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Complete Loan Settlement Services & Legal Help | AMA Legal Solutions",
  description:
    "Explore our comprehensive range of loan settlement services including DRT lawyers, bank harassment protection, SARFAESI defense, and financial restructuring across India.",
};

const allServices = [
  "Debt Recovery Tribunal (DRT) Lawyer",
  "Appeal Against DRT Order",
  "DRT Stay Petition Filing",
  "Writ Petition in High Court Against Bank",
  "Review Petition in DRT or High Court (Loan-Related)",
  "Contempt of Court in Loan Recovery Cases",
  "Civil Suit for Recovery",
  "Recovery Case by Bank",
  "Case for Over Recovery By Bank",
  "Legal Representation in Lok Adalat for Loan Matters",
  "Loan Restructuring & Financial Strategy",
  "Loan & EMI Settlement Lawyer",
  "Loan Restructuring Lawyer",
  "Bad Loan Recovery Strategy",
  "Overdue Loan Legal Protection",
  "EMI Default Legal Advice",
  "Loan Foreclosure Assistance",
  "Strategic Negotiation & Representation",
  "Negotiation with Banks/NBFCs for Reduced Settlement Amount",
  "Secured vs Unsecured Loan Legal Strategy for Businesses",
  "Bank, NBFC & Harassment Legal Defense",
  "Bank Harassment Legal Action",
  "Recovery Agent Complaints",
  "Legal Notices to Banks & NBFCs",
  "RBI/Banking Complaints",
  "RBI and NBFC Compliance Advisory",
  "Legal Advice on RBI Ombudsman Scheme",
  "Excess Interest Charge Complaint",
  "Hidden Loan Charges Legal Support",
  "Wrong Loan Recovery Complaint Filing",
  "Fraud in Loan by Agent",
  "Fraud by Bank Case",
  "Bank Account Freezing Due to Loan Default - Legal Help",
  "Salary Garnishment Protection in Loan Case",
  "SARFAESI & Property Protection",
  "Sarfaesi Act Legal Defense",
  "Property Attachment Stay Order (Loan Default)",
  "Auction Prevention Legal Strategy",
  "Home Auction Stay & Objection",
  "Loan Against Property Dispute Lawyer",
  "Borrower Disputes & Consumer Complaints",
  "Legal for Loan Disputes",
  "Cheque Bounce (Section 138) Lawyer",
  "Co-applicant Loan Dispute Resolution",
  "Guarantor Loan Dispute Assistance",
  "Credit Score Settlement Lawyer",
  "CIBIL Score Dispute Resolution",
  "Credit Limit Misuse Dispute Resolution",
  "Wrong Loan Account Mapping/Multiple Loans Issue",
  "Unsecured Loan Legal Advisory",
  "Auto-Debit or NACH Dispute Legal Help",
  "Loan Closure Certificate Dispute Resolution",
  "Legal Help for Non-Closure of Settled Loan",
  "Settlement Letter & No-Due Certificate Dispute",
  "CIBIL Update After Settlement or OTS",
  "Consumer Court & Loan Fraud Cases",
  "Consumer Court Case for Mis-sold Loan",
  "Filing Consumer Case Against NBFC/Bank",
  "Case Against Loan Agent Misrepresentation",
  "Filing FIR for Loan Fraud",
  "Cyber Fraud Related to Loans & EMI Apps",
  "Online Loan Scam & Fraud Case Lawyer",
  "Instant Loan App Harassment Legal Help",
  "Digital & Online Loan Disputes",
  "Identity Theft & Forgery Cases",
  "Financial Abuse & Identity Theft",
  "Loan Taken in Someone Else's Name (Identity Theft Case)",
  "Dispute Over Forged Loan Signatures",
  "Legal Case for Loan Sanction Without Consent",
  "Wrong PAN or Aadhaar Usage in Loan - Legal Help",
  "Business & Corporate Loan Matters",
  "Corporate Loan Matters",
  "SME Loan Dispute Resolution",
  "Working Capital Loan Legal Help",
  "Pre/Post Loan Legal Services",
  "Legal Due Diligence for Loans",
  "Pre-loan Legal Verification",
  "Loan Agreement Drafting & Review",
  "Post-Settlement & Compliance Services",
  "Loan & Banking Legal Issues",
  "Litigation & Consumer Court Expansion",
  "Enforcement & Garnishee Protection",
  "Borrower Protection & Rights",
  "Borrower Rights Under RBI Guidelines Advisory",
  "NPA Account Legal Consultation",
  "Written Off Loan Settlement Support",
  "Debt Consolidation Legal Services",
  "Settlement Notice Drafting",
  "NBFC Fraud Complaint Handling",
  "Credit Card Settlement Legal Help",
  "Startup Loan Legal Advisory",
  "Mudra Loan Settlement Legal Help",
  "Stop Harassment by Loan Recovery Agents – Legal Protection",
  "Legal Remedies if Your Co-Signer or Guarantor Refuses to Pay the Loan",
  "Account Unfreezing & Bank Representation",
  "Account Unfreezing Legal Assistance",
  "Drafting and Filing Representations to Banks",
  "Filing Complaints to RBI Ombudsman or Approaching Court",
  "Loan Default & Recovery Freeze Defense",
  "Loan Default Account Freeze Defense",
  "Negotiations with Bank for Account Freeze",
  "NBFC for Settlement for Account Freeze",
  "Legal Intervention if Freezing Done Without Court Order",
  "Cybercrime-Related Freeze Help",
  "Legal Support if Account Frozen Due to Cyber Complaint",
  "Liaising with Cyber Cell to Close Investigation",
  "Fraud & Police Case Account Freezes",
  "Fraud Case Account Freeze Response",
  "Representation in Police or EOW Inquiries",
  "Challenging Unlawful Freezing via High Court (Writ Petition)",
  "Income Tax & Government Attachment",
  "Income Tax Attachment & Account Freeze",
  "Representation Before Income Tax Department",
  "Challenging Section 226(3) Actions or Provisional Attachments",
  "GST or Commercial Tax Freezes",
  "Defense Against GST Fraud-Related Freeze",
  "Filing Objections and Getting Orders Vacated",
  "Garnishee Order & Civil Suit Freezes",
  "Third-Party Garnishee Order Defense",
  "Application to Modify or Set Aside Garnishee Orders",
  "False Complaint or Wrongful Freeze",
  "False Complaint Account Freeze",
  "Quashing FIR or Defending Against Baseless Freezing",
  "Drafting Clarification Notices for Police/Bank",
  "KYC/AML Compliance Issues",
  "KYC/AML Compliance Freeze Resolution",
  "Advising Clients on Documentation",
  "Legal Support for Unjustified KYC Suspension",
  "Business & Corporate Account Freezes",
  "Business Account Freeze (Company/LLP)",
  "Corporate Legal Services to Get Freeze Lifted",
  "Legal Liaison with ROC/ED if Involved",
  "Emergency Legal Relief",
  "Emergency Account Access Orders",
  "Filing Interim Relief Petition for Access to Funds",
  "Representing in District Court/High Court for Urgent Relief",
  "Preventive Advisory & Legal Compliance",
  "Account Holder Legal Advisory & Compliance",
  "Advising Clients on How to Avoid Freeze Situations",
  "Drafting Power of Attorney or Settlement MoUs"
];

const getSlug = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};

export default function LoanSettlementServices() {
  return (
    <div className="min-h-screen bg-[#EBE9E4] text-[#30261C] py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#30261C 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1
            className="text-4xl md:text-6xl font-normal tracking-tight mb-6 mt-12 text-[#30261C]"
            style={{ fontFamily: "var(--font-polysans)" }}
          >
            Comprehensive{" "}
            <span className="text-[#D29E0D]">Loan Settlement Services</span>
          </h1>
          <p className="text-lg md:text-xl text-[#30261C]/70 max-w-4xl mx-auto font-light leading-relaxed">
            Explore our wide range of expert legal services designed to protect borrowers, 
            negotiate settlements, and resolve complex financial disputes across India.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allServices.map((service, index) => (
            <Link
              key={index}
              href={`/loan-settlement-services/${getSlug(service)}`}
              className="bg-white/70 backdrop-blur-sm border border-black/5 hover:border-[#D29E0D]/30 p-5 rounded-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] group hover:-translate-y-1 block relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#D29E0D] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="text-sm md:text-base font-medium text-[#30261C] group-hover:text-[#D29E0D] transition-colors leading-snug">
                {service}
              </h3>
              <div className="mt-3 flex items-center text-xs text-[#D29E0D] font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                Inquire Now{" "}
                <span className="ml-1 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Contact Info Footer */}
        <div className="mt-24 p-8 bg-[#30261C] text-[#EBE9E4] rounded-3xl text-center shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-polysans)" }}>Need Expert Legal Protection?</h2>
                <p className="text-lg opacity-80 mb-8 max-w-2xl mx-auto">
                    With decades of experience in banking law and RBI regulations, our lawyers provide strategic protection for your financial rights.
                </p>
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <div className="flex flex-col items-center">
                        <p className="text-[#D29E0D] text-sm uppercase tracking-widest font-bold mb-1">Call or WhatsApp</p>
                        <a href="tel:+919654961599" className="text-2xl font-bold hover:text-[#D29E0D] transition-colors">+91 96549 61599</a>
                    </div>
                    <div className="w-px h-12 bg-white/20 hidden md:block"></div>
                    <div className="flex flex-col items-center">
                        <p className="text-[#D29E0D] text-sm uppercase tracking-widest font-bold mb-1">Email Us</p>
                        <a href="mailto:advocates@loansettlementlawyer.in" className="text-xl font-medium hover:text-[#D29E0D] transition-colors">advocates@loansettlementlawyer.in</a>
                    </div>
                </div>
                <div className="mt-10">
                    <Link href="/contact">
                        <button className="bg-[#D29E0D] hover:bg-[#b88a22] text-white font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-lg">
                            Book a Free Consultation
                        </button>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

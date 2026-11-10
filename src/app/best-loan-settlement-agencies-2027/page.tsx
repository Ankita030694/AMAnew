import Link from "next/link";
import YearGuidePage, { guideLinkClass as linkClass, yearGuideMetadata } from "@/components/YearGuidePage";

const path = "/best-loan-settlement-agencies-2027";
const description =
  "Choosing a loan settlement agency in 2027? Use this checklist to compare fees, legal standing and promises, and to spot warning signs before you pay anyone.";

export const metadata = yearGuideMetadata(path, "Best Loan Settlement Agencies in 2027: How to Choose One", description);

const faqs = [
  {
    question: "Which is the best loan settlement agency in 2027?",
    answer:
      "The best choice depends on your loans, legal stage and budget. Compare providers on legal standing, written fees and how they handle your money, rather than on rankings or promised percentages.",
  },
  {
    question: "Is a loan settlement agency approved by RBI?",
    answer:
      "Be cautious if an agency claims RBI approval to settle your loans. RBI regulates lenders. Ask exactly what registration the provider holds, and verify it yourself.",
  },
  {
    question: "Can an agency guarantee a waiver?",
    answer:
      "No. The lender makes the final decision under its own policy. A guaranteed percentage before anyone has reviewed your account is a warning sign.",
  },
  {
    question: "Should I pay settlement money to the agency?",
    answer:
      "Prefer paying the settlement amount directly to the lender after you have its written letter. If a provider collects money on your behalf, get clear written terms on where it is held.",
  },
  {
    question: "Do I need an agency at all?",
    answer:
      "Not always. You can negotiate directly with your lender. Professional help can be more useful where there are legal notices, several lenders or harassment.",
  },
  {
    question: "How do I verify a lawyer's credentials?",
    answer:
      "Ask for the advocate's full name, enrolment number and State Bar Council, then check them with that council.",
  },
];

const checklist = [
  ["Legal standing", "Who will act for me, and what is their enrolment or company registration?", "No named person or verifiable registration"],
  ["Fees", "What is the total, when is each part due, and is it in writing?", "Vague or verbal fees, or large payments before any review"],
  ["Promises", "How do you estimate an outcome for my account?", "A guaranteed percentage before seeing your papers"],
  ["Handling of money", "Will I pay the lender directly?", "Settlement money sent to a personal account"],
  ["Scope", "Do you handle notices, arbitration, Lok Adalat and harassment?", "Only phone negotiation, with no legal support"],
  ["Documents", "Will I receive the lender's letter and closure document?", "Payment requested without a letter on the lender's letterhead"],
  ["Exit terms", "What happens to my fees if I stop or the lender refuses?", "No written refund or cancellation terms"],
  ["Reviews", "Can I see reviews on independent platforms?", "Only testimonials on the provider's own site"],
];

const compare = [
  ["Settling yourself", "No professional fee and direct contact with the lender", "You handle negotiation, paperwork and any legal notices"],
  ["Settlement company", "Can manage calls and negotiation", "Check its legal standing, fees and how your money is handled"],
  ["Law firm", "Can respond to notices and represent you in legal forums", "Fees vary, so confirm the scope in writing"],
];

const sections = [
  { id: "quick-answer", title: "Quick Answer" },
  { id: "no-ranking", title: "Why No Ranking" },
  { id: "checklist", title: "Comparison Checklist" },
  { id: "options", title: "Your Three Options" },
  { id: "warning", title: "Waiver Scam Warning" },
];

export default function BestAgencies2027Page() {
  return (
    <YearGuidePage
      path={path}
      breadcrumbLabel="Best Settlement Agencies 2027"
      headline="Best Loan Settlement Agencies in 2027: How to Choose One"
      description={description}
      h1Lead="Best Loan Settlement Agencies in 2027:"
      h1Accent="How to Choose One"
      intro="Before you hand over your loan papers or your money, use these checks to compare any provider, including us."
      sections={sections}
      faqs={faqs}
      relatedLinks={[
        { href: "/best-loan-settlement-agencies-in-india", label: "Loan settlement agencies in India" },
        { href: "/loan-settlement-agency-fees-and-charges-in-india", label: "Agency fees and charges" },
        { href: "/ama-legal-solutions-reviews", label: "AMA Legal Solutions reviews" },
        { href: "/loan-settlement-2027", label: "What changes in 2027" },
      ]}
    >
      <section id="quick-answer" className="scroll-mt-32 bg-amber-50 border border-amber-200 rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick answer</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Choose on verifiable legal standing, written fees and safe handling of your money.</li>
          <li>Avoid anyone guaranteeing a waiver before reviewing your account.</li>
          <li>Pay the settlement amount directly to the lender, after you receive its letter.</li>
          <li>For a simple single loan, you may not need an agency at all.</li>
        </ul>
      </section>

      <section id="no-ranking" className="scroll-mt-32">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why this page has no ranking</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          AMA Legal Solutions is a law firm working in this field, so we are not a neutral judge of our competitors. Instead of a list, here are the questions that reveal whether a provider is right for you.
        </p>
      </section>

      <section id="checklist" className="scroll-mt-32">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Comparison checklist</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-4 bg-gray-100 font-bold text-gray-900 border-b border-gray-300">Check</th>
                <th className="p-4 bg-gray-100 font-bold text-gray-900 border-b border-gray-300">Ask</th>
                <th className="p-4 bg-gray-100 font-bold text-gray-900 border-b border-gray-300">Warning sign</th>
              </tr>
            </thead>
            <tbody>
              {checklist.map(([check, ask, warning]) => (
                <tr key={check}>
                  <td className="p-4 border-b border-gray-200 font-semibold align-top">{check}</td>
                  <td className="p-4 border-b border-gray-200 text-gray-700">{ask}</td>
                  <td className="p-4 border-b border-gray-200 text-gray-700">{warning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="options" className="scroll-mt-32">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Your three options</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {compare.map(([option, good, watch]) => (
            <div key={option} className="p-5 rounded-xl border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">{option}</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-2">{good}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{watch}</p>
            </div>
          ))}
        </div>
        <p className="text-lg leading-relaxed mt-6 text-gray-700">
          Read more about <Link href="/best-loan-settlement-agencies-in-india" className={linkClass}>loan settlement agencies in India</Link> and <Link href="/loan-settlement-agency-fees-and-charges-in-india" className={linkClass}>what they charge</Link>.
        </p>
      </section>

      <section id="warning" className="scroll-mt-32">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Beware of loan waiver campaigns</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          RBI has warned the public about misleading loan waiver campaigns. Read <Link href="/rbi-beware-misleading-loan-waiver-campaigns" className={linkClass}>what the warning means</Link> before responding to any offer of a waiver.
        </p>
      </section>
    </YearGuidePage>
  );
}

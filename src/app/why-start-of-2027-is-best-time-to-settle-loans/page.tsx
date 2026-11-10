import Link from "next/link";
import YearGuidePage, { guideLinkClass as linkClass, yearGuideMetadata } from "@/components/YearGuidePage";

const path = "/why-start-of-2027-is-best-time-to-settle-loans";
const description =
  "Is the start of 2027 the best time to settle pending loans? See the real reasons it can help, who should not settle, and how to prioritise several loans.";

export const metadata = yearGuideMetadata(path, "Why the Start of 2027 Is a Good Time to Settle Pending Loans", description);

const faqs = [
  {
    question: "Is January 2027 the best time to settle a loan?",
    answer:
      "It can be a good time if you are already in default and have money ready. No rule or published data shows that lenders give better terms in January.",
  },
  {
    question: "Should I settle all my pending loans at once?",
    answer:
      "Only if you can fund each agreement in full. Otherwise, prioritise the loans with legal deadlines or serious recovery pressure, and do not promise money you do not have.",
  },
  {
    question: "Should I stop paying my EMI so that I can settle in 2027?",
    answer:
      "No. Do not default on purpose. Default harms your credit and can bring recovery action, and a lender does not have to agree to settle.",
  },
  {
    question: "Should I wait until March 2027 for a better deal?",
    answer:
      "Year-end targets may make lenders more responsive, but a better deal is not assured. Waiting can also add interest, so start preparing early.",
  },
  {
    question: "What if I can repay my loan in full?",
    answer:
      "Repaying in full is generally better for your credit than settling. Consider restructuring or a repayment plan with your lender before settlement.",
  },
];

const reasons = [
  ["New recovery rules begin", "RBI's recovery conduct directions take effect on 1 January 2027, which sets clearer limits while you negotiate."],
  ["Time before year-end", "Starting in January leaves room for documents and internal approvals before 31 March."],
  ["Year-end targets", "Lenders work towards recovery targets as the financial year closes, which may make them more responsive."],
  ["Dues can keep growing", "Interest and charges can continue, so a delayed decision can cost more."],
  ["Earlier recovery", "Credit rebuilding and any lender's cooling period can only begin after your settlement is done."],
];

const notFor = [
  "Your EMIs are up to date. Do not default to qualify for a settlement.",
  "You can repay in full, even if it takes longer.",
  "The loan is secured on a home or vehicle you want to keep, and you have not taken advice.",
  "You do not have the money yet. An agreement you cannot complete can leave you worse off.",
];

const priorities = [
  "Anything with a court, arbitration, SARFAESI or Lok Adalat date.",
  "Loans where you face serious recovery pressure.",
  "Secured loans on assets you need to keep.",
  "Remaining unsecured loans and cards, starting with those that have the highest charges.",
];

const sections = [
  { id: "quick-answer", title: "Quick Answer" },
  { id: "reasons", title: "Why It Can Help" },
  { id: "not-for", title: "Who Should Not Settle" },
  { id: "several-loans", title: "Several Pending Loans" },
  { id: "plan", title: "January to March Plan" },
];

export default function WhyStartOf2027Page() {
  return (
    <YearGuidePage
      path={path}
      breadcrumbLabel="Settling at the Start of 2027"
      headline="Why the Start of 2027 Is a Good Time to Settle Pending Loans"
      description={description}
      h1Lead="Is the Start of 2027 the"
      h1Accent="Best Time to Settle Your Pending Loans?"
      intro="For some borrowers, yes. Here are the real reasons it can help, and the situations where settling would be the wrong move."
      sections={sections}
      faqs={faqs}
      relatedLinks={[
        { href: "/benefits-of-settling-your-loan-in-march", label: "Settling in March 2027" },
        { href: "/best-time-for-loan-settlement", label: "Best time for loan settlement" },
        { href: "/loan-settlement-2027", label: "What changes in 2027" },
        { href: "/loan-settlement-percentage", label: "Settlement percentage" },
      ]}
    >
      <section id="quick-answer" className="scroll-mt-32 bg-amber-50 border border-amber-200 rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick answer</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Early 2027 can be a good time if you are already in default and can fund an offer.</li>
          <li>It gives you a full quarter before the financial year ends on 31 March.</li>
          <li>No rule or published data shows lenders give better terms at this time.</li>
          <li>Never stop paying on purpose in order to settle.</li>
        </ul>
      </section>

      <section id="reasons" className="scroll-mt-32">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why the start of 2027 can help</h2>
        <div className="space-y-4">
          {reasons.map(([title, detail]) => (
            <div key={title} className="p-5 rounded-xl border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
              <p className="text-gray-700 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="not-for" className="scroll-mt-32">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">When you should not settle</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
          {notFor.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="text-lg leading-relaxed mt-6 text-gray-700">
          A settlement can lower your credit score. Read <Link href="/does-loan-settlement-affect-cibil-score" className={linkClass}>how it affects your CIBIL score</Link> first.
        </p>
      </section>

      <section id="several-loans" className="scroll-mt-32">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">If you have several pending loans</h2>
        <p className="text-lg leading-relaxed mb-4 text-gray-700">
          Add up everything you owe and all the money you can arrange. If it will not cover every loan, a common order of priority is:
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-gray-700 text-lg">
          {priorities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
        <p className="text-lg leading-relaxed mt-6 text-gray-700">
          Waiver guides: <Link href="/personal-loan-settlement-2027-maximum-waiver" className={linkClass}>personal loans</Link>, <Link href="/credit-card-settlement-2027-maximum-waiver" className={linkClass}>credit cards</Link> and <Link href="/payday-loan-settlement-2027-maximum-waiver" className={linkClass}>payday loans</Link>.
        </p>
      </section>

      <section id="plan" className="scroll-mt-32">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">A simple January to March plan</h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li><strong>January:</strong> Get a written breakup of each loan, and collect your hardship documents.</li>
          <li><strong>February:</strong> Send written proposals, starting with your priority loans.</li>
          <li><strong>March:</strong> Finalize terms, get each settlement letter, and pay through official channels.</li>
        </ul>
        <p className="text-lg leading-relaxed mt-6 text-gray-700">
          For more detail, see the <Link href="/benefits-of-settling-your-loan-in-march" className={linkClass}>March 2027 settlement timeline</Link>.
        </p>
      </section>
    </YearGuidePage>
  );
}

import Link from "next/link";
import YearGuidePage, { guideLinkClass as linkClass, yearGuideMetadata } from "@/components/YearGuidePage";

const path = "/personal-loan-settlement-2027-maximum-waiver";
const description =
  "How to get the highest realistic waiver on a personal loan settlement in 2027: what improves your offer, how to negotiate, and why banks publish no fixed maximum.";

export const metadata = yearGuideMetadata(path, "Personal Loan Settlement 2027: How to Get the Maximum Waiver", description);

const faqs = [
  {
    question: "What is the maximum waiver on a personal loan in 2027?",
    answer:
      "No law or RBI rule sets a maximum or minimum waiver. Each lender decides under its board-approved policy, based on your account and circumstances.",
  },
  {
    question: "Can interest and penalties be waived completely?",
    answer:
      "They are often the first items discussed, but nothing is guaranteed. Ask for a written breakup so you can see what each part of your dues is.",
  },
  {
    question: "Does my salary account affect a settlement?",
    answer:
      "It can, if your salary goes to the same bank. Check your loan agreement and read about salary account risks before you begin talks.",
  },
  {
    question: "Should I accept the first offer from the bank?",
    answer:
      "You do not have to. Compare it in rupees with what you can arrange, make a documented counter-offer, and accept only terms you can complete on time.",
  },
  {
    question: "Is the waived amount taxable?",
    answer:
      "It may have tax consequences depending on your situation. Take advice on your facts before you assume there is no tax effect.",
  },
  {
    question: "Do the 2027 recovery rules increase my waiver?",
    answer:
      "No. They govern how lenders may recover dues from 1 January 2027. They do not set settlement amounts.",
  },
];

const levers = [
  ["Age of the default", "Older unpaid accounts generally leave more room than recent ones."],
  ["Documented hardship", "Termination letters, medical bills or bank statements carry more weight than a verbal request."],
  ["Lump sum", "A single payment on a near date is generally stronger than a long instalment plan."],
  ["A clear breakup of dues", "You can only challenge charges that you can see."],
  ["Who approves the offer", "Field agents have limited authority, so ask who can approve a settlement and put your proposal to them in writing."],
  ["Your other legal exposure", "A pending notice, arbitration or Lok Adalat listing can change how talks proceed."],
];

const sections = [
  { id: "quick-answer", title: "Quick Answer" },
  { id: "no-maximum", title: "Is There a Maximum?" },
  { id: "what-improves", title: "What Improves Your Waiver" },
  { id: "example", title: "Worked Example" },
  { id: "negotiate", title: "How to Negotiate" },
  { id: "cost", title: "What It Costs You" },
];

export default function PersonalLoanMaximumWaiverPage() {
  return (
    <YearGuidePage
      path={path}
      breadcrumbLabel="Personal Loan Maximum Waiver 2027"
      headline="Personal Loan Settlement 2027: How to Get the Maximum Waiver"
      description={description}
      h1Lead="Personal Loan Settlement 2027:"
      h1Accent="How to Get the Maximum Waiver"
      intro="No bank publishes a maximum. What you can control is the strength of your offer, and that is what this guide covers."
      sections={sections}
      faqs={faqs}
      relatedLinks={[
        { href: "/personal-loan-settlement", label: "Personal loan settlement" },
        { href: "/loan-settlement-percentage", label: "Settlement percentage" },
        { href: "/loan-settlement-2027", label: "What changes in 2027" },
        { href: "/loan-settlement-amount-calculator", label: "Settlement calculator" },
      ]}
    >
      <section id="quick-answer" className="scroll-mt-32 bg-amber-50 border border-amber-200 rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick answer</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>There is no fixed or guaranteed maximum waiver on a personal loan.</li>
          <li>The strongest offers combine an older default, documented hardship and a ready lump sum.</li>
          <li>Measure every offer in rupees against both your principal and your total dues.</li>
          <li>A higher waiver still leaves a settled status on your credit report.</li>
        </ul>
      </section>

      <section id="no-maximum" className="scroll-mt-32">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Is there a maximum waiver?</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          No. RBI requires lenders to work under board-approved policies for compromise settlements, and a settlement is not a borrower's right. Be careful with anyone who names a guaranteed percentage before reviewing your account. Our <Link href="/loan-settlement-percentage" className={linkClass}>settlement percentage guide</Link> explains why quoted figures can mislead.
        </p>
      </section>

      <section id="what-improves" className="scroll-mt-32">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">What improves your waiver</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {levers.map(([title, detail]) => (
            <div key={title} className="p-5 rounded-xl border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>
        <p className="text-lg leading-relaxed mt-6 text-gray-700">
          If your salary reaches the same bank, first read <Link href="/can-a-bank-freeze-my-salary-account-for-personal-loan-default" className={linkClass}>whether a bank can freeze a salary account</Link>.
        </p>
      </section>

      <section id="example" className="scroll-mt-32">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">A worked example</h2>
        <p className="text-lg leading-relaxed mb-4 text-gray-700">
          Say you owe ₹5,00,000: ₹3,80,000 principal, ₹90,000 interest and ₹30,000 in penalties. A settlement at ₹2,50,000 is described as a 50% waiver of the total dues, but it is about a 34% reduction of the principal. This is arithmetic to show the difference, not a prediction of any bank's decision.
        </p>
      </section>

      <section id="negotiate" className="scroll-mt-32">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">How to negotiate</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 text-lg">
          <li>Request a written statement of principal, interest, penalties and other charges.</li>
          <li>Fix your absolute limit, and the date by which you can pay it.</li>
          <li>Send a written proposal with your hardship documents through an official channel.</li>
          <li>Start below your limit, and keep a record of every reply.</li>
          <li>Never pay on a verbal promise. Get the settlement letter on the lender's letterhead first.</li>
          <li>After paying, collect the closure letter or no-dues certificate.</li>
        </ol>
      </section>

      <section id="cost" className="scroll-mt-32">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">What a settlement costs you</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          A settled account can lower your <Link href="/does-loan-settlement-affect-cibil-score" className={linkClass}>CIBIL score</Link>, and lenders apply a cooling period before giving you fresh credit. The waived amount may also have <Link href="/what-are-the-income-tax-implications-of-a-settled-debt-amount" className={linkClass}>tax implications</Link>. If you can repay in full over time, compare that option first. New <Link href="/loan-settlement-2027" className={linkClass}>recovery rules from 1 January 2027</Link> affect how lenders may contact you, not what you owe.
        </p>
      </section>
    </YearGuidePage>
  );
}

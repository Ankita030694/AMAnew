import Link from "next/link";
import YearGuidePage, { guideLinkClass as linkClass, yearGuideMetadata } from "@/components/YearGuidePage";

const path = "/credit-card-settlement-2027-maximum-waiver";
const description =
  "How to get the highest realistic waiver on credit card dues in 2027: separating spends from finance charges, handling several cards, and what to check before paying.";

export const metadata = yearGuideMetadata(path, "Credit Card Settlement 2027: How to Get the Maximum Waiver", description);

const faqs = [
  {
    question: "What is the maximum waiver on credit card dues in 2027?",
    answer:
      "There is no fixed maximum. Each card issuer decides under its own board-approved policy, depending on the account and your circumstances.",
  },
  {
    question: "Can finance charges and late fees be waived?",
    answer:
      "They are a natural place to start negotiating, because they can make up much of the balance. A waiver is never guaranteed, so get the final figure in writing.",
  },
  {
    question: "Does paying the minimum amount due help a settlement?",
    answer:
      "Paying the minimum keeps interest running on the remaining balance and does not create a right to settlement. Take advice on your account before changing what you pay.",
  },
  {
    question: "How do I settle several credit cards?",
    answer:
      "Each issuer needs its own agreement. Prioritise cards with legal action or a deadline, and do not commit money to one card that you will need for another agreed payment.",
  },
  {
    question: "Will my card be closed after settlement?",
    answer:
      "You should expect the account to be closed. Confirm this in the settlement letter, along with your card number and final amount.",
  },
  {
    question: "Do the 2027 recovery rules apply to credit cards?",
    answer:
      "The recovery conduct directions effective 1 January 2027 cover lenders' recovery of dues. They limit how recovery is carried out and do not set a waiver.",
  },
];

const breakup = [
  ["Card spends and cash withdrawals", "₹1,80,000", "Usually the hardest part to reduce"],
  ["Finance charges", "₹90,000", "Often the main focus of negotiation"],
  ["Late fees, other charges and GST", "₹30,000", "Ask how each amount was calculated"],
];

const sections = [
  { id: "quick-answer", title: "Quick Answer" },
  { id: "breakup", title: "Break Up the Balance" },
  { id: "strengthen", title: "Strengthen Your Offer" },
  { id: "multiple-cards", title: "Several Cards" },
  { id: "before-paying", title: "Before You Pay" },
];

export default function CreditCardMaximumWaiverPage() {
  return (
    <YearGuidePage
      path={path}
      breadcrumbLabel="Credit Card Maximum Waiver 2027"
      headline="Credit Card Settlement 2027: How to Get the Maximum Waiver"
      description={description}
      h1Lead="Credit Card Settlement 2027:"
      h1Accent="How to Get the Maximum Waiver"
      intro="Card balances grow through charges on top of charges. The biggest waiver starts with knowing exactly what your balance is made of."
      sections={sections}
      faqs={faqs}
      relatedLinks={[
        { href: "/credit-card-settlement", label: "Credit card settlement" },
        { href: "/multiple-credit-card-loan-settlement", label: "Settling several cards" },
        { href: "/loan-settlement-percentage", label: "Settlement percentage" },
        { href: "/loan-settlement-2027", label: "What changes in 2027" },
      ]}
    >
      <section id="quick-answer" className="scroll-mt-32 bg-amber-50 border border-amber-200 rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick answer</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>No card issuer publishes a maximum waiver, and none can be guaranteed.</li>
          <li>Start by separating your spends from finance charges, late fees and GST.</li>
          <li>Treat each card as a separate agreement with its own letter.</li>
          <li>Pay only after you have written terms, and only through an official channel.</li>
        </ul>
      </section>

      <section id="breakup" className="scroll-mt-32">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Break up the balance first</h2>
        <p className="text-lg leading-relaxed mb-6 text-gray-700">
          Here is an illustrative ₹3,00,000 card balance. Your issuer's statement may show different categories, so ask for them to be set out clearly.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-4 bg-gray-100 font-bold text-gray-900 border-b border-gray-300">Part of the balance</th>
                <th className="p-4 bg-gray-100 font-bold text-gray-900 border-b border-gray-300">Example</th>
                <th className="p-4 bg-gray-100 font-bold text-gray-900 border-b border-gray-300">In negotiation</th>
              </tr>
            </thead>
            <tbody>
              {breakup.map(([part, amount, note]) => (
                <tr key={part}>
                  <td className="p-4 border-b border-gray-200 font-semibold align-top">{part}</td>
                  <td className="p-4 border-b border-gray-200 text-gray-700">{amount}</td>
                  <td className="p-4 border-b border-gray-200 text-gray-700">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-lg leading-relaxed mt-6 text-gray-700">
          On these figures, paying ₹1,50,000 is a 50% reduction of the balance but only about a 17% reduction of the spends. Always ask which figure a percentage refers to.
        </p>
      </section>

      <section id="strengthen" className="scroll-mt-32">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">How to strengthen your offer</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 text-lg">
          <li>Collect your recent statements and note when the default began.</li>
          <li>Show your hardship with documents, not only an explanation.</li>
          <li>Offer a lump sum on a date you can meet, if possible.</li>
          <li>Make your proposal in writing through the issuer's official channel.</li>
          <li>Counter any first offer using your own limit, not the issuer's percentage.</li>
        </ol>
      </section>

      <section id="multiple-cards" className="scroll-mt-32">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">If you have several cards</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Add up all your dues and available money before you agree anything. Deal first with any card that has a court, arbitration or Lok Adalat date. See our guide to <Link href="/multiple-credit-card-loan-settlement" className={linkClass}>settling several credit cards</Link>, or your bank's page: <Link href="/blog/hdfc-credit-card-settlement-complete-guide-to-managing-debt-with-expert-legal-help" className={linkClass}>HDFC</Link>, <Link href="/blog/sbi-credit-card-settlement-process" className={linkClass}>SBI Card</Link>, <Link href="/articles/credit-card-icici-bank-guide-with-legal-insights-by-ama-legal-solutions" className={linkClass}>ICICI</Link> or <Link href="/settlement-waiver-percentage-of-axis-bank" className={linkClass}>Axis</Link>.
        </p>
      </section>

      <section id="before-paying" className="scroll-mt-32">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Check before you pay</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
          <li>The letter shows your name, card number, agreed amount and payment date.</li>
          <li>It says the payment closes the account in full and final settlement.</li>
          <li>You know how the account will be reported to credit bureaus.</li>
          <li>You will receive a closure letter or no-dues certificate after payment.</li>
        </ul>
        <p className="text-lg leading-relaxed mt-6 text-gray-700">
          Learn more about the <Link href="/does-loan-settlement-affect-cibil-score" className={linkClass}>effect on your CIBIL score</Link> and the <Link href="/loan-settlement-2027" className={linkClass}>recovery rules that start in January 2027</Link>.
        </p>
      </section>
    </YearGuidePage>
  );
}

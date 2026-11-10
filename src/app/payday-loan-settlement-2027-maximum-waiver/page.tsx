import Link from "next/link";
import YearGuidePage, { guideLinkClass as linkClass, yearGuideMetadata } from "@/components/YearGuidePage";

const path = "/payday-loan-settlement-2027-maximum-waiver";
const description =
  "How to approach payday and instant loan app settlement in 2027: checking whether the lender is regulated, working out what you really owe, and staying safe from harassment.";

export const metadata = yearGuideMetadata(path, "Payday Loan Settlement 2027: How to Get the Maximum Waiver", description);

const faqs = [
  {
    question: "What is the maximum waiver on a payday loan in 2027?",
    answer:
      "There is no fixed maximum. A regulated lender decides under its own policy. An unregulated app may not follow any rules, so a promised waiver from one has little value.",
  },
  {
    question: "How do I know if a loan app is RBI-regulated?",
    answer:
      "Check RBI's public directory of digital lending apps, and identify the bank or NBFC named in your loan documents. RBI says that directory data is not verified by it, so a listing is not an endorsement.",
  },
  {
    question: "Can a loan app access my contacts?",
    answer:
      "Under RBI's Digital Lending Directions, 2025, apps of regulated lenders and their service providers are barred from accessing phone contacts, files and call logs. Limited one-time access for KYC needs explicit consent.",
  },
  {
    question: "What if the app is sending morphed photos or threats?",
    answer:
      "Save the evidence and report it right away at cybercrime.gov.in or on the 1930 helpline, and to the police. Do this regardless of what you owe.",
  },
  {
    question: "Should I keep paying an illegal loan app?",
    answer:
      "Payments to an unregulated app may not close anything, and demands can continue. Take legal advice on your specific situation, and report the app on RBI's Sachet portal.",
  },
  {
    question: "How do I settle several loan apps?",
    answer:
      "List each lender, separate regulated from unregulated apps, and work out your total available money first. Get written closure for each loan you pay.",
  },
];

const routes = [
  ["Regulated lender", "A bank or NBFC is named, and the app appears on RBI's directory.", "Make a written settlement proposal, get a closure letter, and use its grievance process if needed."],
  ["Unregulated or unknown app", "No regulated lender can be identified, or the app has no proper loan documents.", "Do not rely on promised waivers. Report on RBI's Sachet portal and take legal advice."],
];

const sections = [
  { id: "quick-answer", title: "Quick Answer" },
  { id: "who-is-lender", title: "Identify the Lender" },
  { id: "what-you-owe", title: "What You Really Owe" },
  { id: "settle-safely", title: "How to Settle Safely" },
  { id: "harassment", title: "If You Are Harassed" },
];

export default function PaydayMaximumWaiverPage() {
  return (
    <YearGuidePage
      path={path}
      breadcrumbLabel="Payday Loan Maximum Waiver 2027"
      headline="Payday Loan Settlement 2027: How to Get the Maximum Waiver"
      description={description}
      h1Lead="Payday Loan Settlement 2027:"
      h1Accent="How to Get the Maximum Waiver"
      intro="With instant loan apps, the first question is not how much you can save. It is who you are actually dealing with."
      sections={sections}
      faqs={faqs}
      relatedLinks={[
        { href: "/loan-settlement-for-payday-loans", label: "Payday loan settlement" },
        { href: "/how-to-settle-7-days-loan-apps", label: "Settling 7-day loan apps" },
        { href: "/how-to-report-harassment-from-instant-loan-apps-in-india", label: "Report loan app harassment" },
        { href: "/loan-settlement-2027", label: "What changes in 2027" },
      ]}
      sources={[
        { href: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2241255&reg=3&lang=2", label: "Government of India statement on digital lending apps" },
        { href: "https://taxguru.in/rbi/rbi-digital-lending-directions-2025-key-changes.html", label: "RBI Digital Lending Directions, 2025: summary by TaxGuru" },
        { href: "https://sachet.rbi.org.in", label: "RBI Sachet portal" },
      ]}
    >
      <section id="quick-answer" className="scroll-mt-32 bg-amber-50 border border-amber-200 rounded-2xl p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick answer</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>No lender publishes a maximum waiver for payday loans, and none can be guaranteed.</li>
          <li>First find out whether a regulated bank or NBFC is behind the app.</li>
          <li>Calculate what you received and what you have already repaid.</li>
          <li>Report threats and morphed images at once, whatever you owe.</li>
        </ul>
      </section>

      <section id="who-is-lender" className="scroll-mt-32">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Start by identifying the lender</h2>
        <p className="text-lg leading-relaxed mb-6 text-gray-700">
          Look at your sanction letter or loan agreement for the name of the bank or NBFC, then check RBI's public directory of digital lending apps.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="p-4 bg-gray-100 font-bold text-gray-900 border-b border-gray-300">Type</th>
                <th className="p-4 bg-gray-100 font-bold text-gray-900 border-b border-gray-300">How to tell</th>
                <th className="p-4 bg-gray-100 font-bold text-gray-900 border-b border-gray-300">What to do</th>
              </tr>
            </thead>
            <tbody>
              {routes.map(([type, tell, action]) => (
                <tr key={type}>
                  <td className="p-4 border-b border-gray-200 font-semibold align-top">{type}</td>
                  <td className="p-4 border-b border-gray-200 text-gray-700">{tell}</td>
                  <td className="p-4 border-b border-gray-200 text-gray-700">{action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="what-you-owe" className="scroll-mt-32">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Work out what you really owe</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Short loans can look small while fees do the damage. Suppose ₹10,000 was sanctioned, ₹8,000 reached your account after charges, and you have already repaid ₹6,000. These facts are the basis of your offer, so write them down and keep your bank statements. The figures are only an example.
        </p>
      </section>

      <section id="settle-safely" className="scroll-mt-32">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">How to settle safely</h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700 text-lg">
          <li>List every app, lender, amount received and amount repaid.</li>
          <li>Ask the regulated lender for the full breakup of your dues.</li>
          <li>Make your offer in writing, with proof of hardship.</li>
          <li>Pay only into the lender's official account or channel, never to an agent's personal UPI.</li>
          <li>Get written confirmation that the loan is closed.</li>
        </ol>
      </section>

      <section id="harassment" className="scroll-mt-32">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">If you are being harassed</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          Save screenshots, numbers and call logs. For threats or morphed images, use cybercrime.gov.in or the 1930 helpline and contact the police. For a regulated lender, complain to its grievance officer, then escalate to RBI. See <Link href="/how-to-report-harassment-from-instant-loan-apps-in-india" className={linkClass}>how to report loan app harassment</Link>. <Link href="/loan-settlement-2027" className={linkClass}>New recovery rules from 1 January 2027</Link> add further limits on regulated lenders.
        </p>
      </section>
    </YearGuidePage>
  );
}

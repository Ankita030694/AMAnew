import InteractiveLeadModalTrigger from "@/components/InteractiveLeadModalTrigger";

interface SettlementLetterGuideProps {
  bank: string;
  // Official domains the letter or email should come from, e.g. ["hdfcbank.com"]
  domains: string[];
  // Optional bank-specific note, e.g. that cards are issued by a separate company
  note?: string;
}

export default function SettlementLetterGuide({ bank, domains, note }: SettlementLetterGuideProps) {
  const domainText = domains.map((d) => `@${d}`).join(" or ");

  return (
    <section id="settlement-letter" className="container mx-auto px-4 py-12 max-w-4xl scroll-mt-32">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        {bank} Settlement Letter: What It Must Say and How to Verify It
      </h2>
      <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">
        In a {bank} settlement, the settlement letter is the bank&apos;s written acceptance of your one-time
        settlement (OTS) amount. It is the document that protects you later, so do not pay anything until you
        have it in writing.
      </p>
      {note && <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">{note}</p>}

      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-6 mb-3">A valid {bank} settlement letter should show</h3>
      <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-gray-700">
        <li>{bank} letterhead, or an email from an official {domainText} address</li>
        <li>Your name and your loan account or card number (usually partly masked)</li>
        <li>The total outstanding and the agreed settlement amount, in figures</li>
        <li>The payment deadline, and whether the amount can be paid in instalments</li>
        <li>How to pay: only to {bank}&apos;s own account or official payment link, never to an agent&apos;s personal UPI or bank account</li>
        <li>A clear statement that the account will be closed as &quot;settled&quot; once you pay, with no further dues claimed</li>
        <li>A reference number and an authorised signatory or department name</li>
      </ul>

      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-6 mb-3">How to verify it before paying</h3>
      <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-gray-700">
        <li>Confirm the letter and reference number through {bank}&apos;s official customer care number or your branch, not a number given by a recovery agent</li>
        <li>Check that the sender&apos;s email domain is exactly {domainText}</li>
        <li>Keep every payment receipt and the transaction reference until you receive the No Dues Certificate</li>
      </ul>

      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mt-6 mb-3">After you pay: NOC and CIBIL</h3>
      <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">
        Ask {bank} for a No Dues Certificate (NOC) once the settlement amount is paid. Since January 2025, RBI
        requires lenders to report credit data to the bureaus at least once a fortnight, so the &quot;Settled&quot;
        status usually appears in your CIBIL report within about 30–45 days. If it does not, raise a dispute with
        the credit bureau and attach the settlement letter and NOC.
      </p>

      <div className="mt-6 rounded-2xl border border-[#D2A02A]/40 bg-[#FAF9F5] p-5 md:p-6">
        <p className="text-base md:text-lg text-gray-800 mb-4">
          Our advocates negotiate the settlement amount with {bank} and check the settlement letter before you pay.
        </p>
        <InteractiveLeadModalTrigger
          preset="bank-pl-cc"
          className="inline-flex items-center rounded-full bg-[#D2A02A] px-6 py-3 font-semibold text-white hover:bg-[#b88a1f] transition-colors"
        >
          Get My {bank} Settlement Reviewed
        </InteractiveLeadModalTrigger>
      </div>
    </section>
  );
}

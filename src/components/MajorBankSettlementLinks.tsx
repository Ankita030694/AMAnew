import Link from "next/link";

type Variant = "credit-card" | "personal-loan" | "cross-sell";

interface BankLink {
  name: string;
  href: string;
}

// Strongest page per bank for each product (consolidated targets, Nov 2026)
const CREDIT_CARD_LINKS: BankLink[] = [
  { name: "HDFC Bank", href: "/blog/hdfc-credit-card-settlement-complete-guide-to-managing-debt-with-expert-legal-help" },
  { name: "SBI Card", href: "/blog/sbi-credit-card-settlement-process" },
  { name: "ICICI Bank", href: "/articles/credit-card-icici-bank-guide-with-legal-insights-by-ama-legal-solutions" },
  { name: "Axis Bank", href: "/settlement-waiver-percentage-of-axis-bank" },
  { name: "IDFC FIRST Bank", href: "/credit-card-settlement/idfc-first" },
  { name: "Kotak Mahindra", href: "/credit-card-settlement/kotak" },
  { name: "IndusInd Bank", href: "/indusind-bank-credit-card-settlement" },
  { name: "RBL Bank", href: "/services/loan-settlement/rbl-bank" },
  { name: "Yes Bank", href: "/credit-card-settlement/yes-bank" },
  { name: "AU Small Finance", href: "/credit-card-settlement/au-bank" },
  { name: "Standard Chartered", href: "/credit-card-settlement/standard-chartered" },
  { name: "American Express", href: "/credit-card-settlement/amex" },
];

const PERSONAL_LOAN_LINKS: BankLink[] = [
  { name: "HDFC Bank", href: "/services/loan-settlement/hdfc-bank" },
  { name: "SBI", href: "/services/loan-settlement/sbi-bank" },
  { name: "ICICI Bank", href: "/services/loan-settlement/icici-bank" },
  { name: "Axis Bank", href: "/services/loan-settlement/axis-bank" },
  { name: "IDFC FIRST Bank", href: "/services/loan-settlement/idfc-bank" },
  { name: "Kotak Mahindra", href: "/services/loan-settlement/kotak-mahindra" },
  { name: "IndusInd Bank", href: "/services/loan-settlement/indusind-bank" },
  { name: "RBL Bank", href: "/services/loan-settlement/rbl-bank" },
  { name: "Yes Bank", href: "/services/loan-settlement/yes-bank" },
  { name: "AU Small Finance", href: "/services/loan-settlement/au-small-finance" },
  { name: "Bank of Baroda", href: "/services/loan-settlement/bank-of-baroda" },
  { name: "PNB", href: "/services/loan-settlement/pnb-bank" },
];

const COPY: Record<Variant, { heading: string; intro: string; links: BankLink[] }> = {
  "credit-card": {
    heading: "Credit Card Settlement by Major Bank",
    intro: "Each bank runs its own structured settlement process. Pick your card issuer for its settlement percentage, process and settlement letter.",
    links: CREDIT_CARD_LINKS,
  },
  "personal-loan": {
    heading: "Personal Loan Settlement by Major Bank",
    intro: "Pick your lender for its OTS process, documents and how to get a valid settlement letter.",
    links: PERSONAL_LOAN_LINKS,
  },
  "cross-sell": {
    heading: "Also Have Bank Credit Cards or Personal Loans?",
    intro: "Bank dues follow a different, structured settlement process. Our advocates handle credit cards and personal loans with HDFC, SBI, ICICI, Axis and other major banks.",
    links: [
      { name: "Credit Card Settlement", href: "/credit-card-settlement" },
      { name: "Personal Loan Settlement", href: "/personal-loan-settlement" },
      ...PERSONAL_LOAN_LINKS.slice(0, 6),
    ],
  },
};

export default function MajorBankSettlementLinks({ variant }: { variant: Variant }) {
  const { heading, intro, links } = COPY[variant];

  return (
    <section className="scroll-mt-32 mt-12">
      <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">{heading}</h2>
      <p className="text-sm md:text-lg leading-relaxed mb-6 text-gray-700">{intro}</p>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-3 md:gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="bg-white border border-gray-200 hover:border-[#D2A02A] p-3 md:p-4 rounded-xl text-center shadow-sm hover:shadow-md transition-all group"
          >
            <span className="text-sm md:text-base font-semibold text-gray-800 group-hover:text-[#D2A02A] transition-colors">{link.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

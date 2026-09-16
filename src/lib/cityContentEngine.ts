import { hashSlug } from "./seo";

export interface CityProfileData {
  regionType: "metro-ncr" | "commercial-hub" | "tier2-district";
  economicFocus: string;
  debtLandscape: string;
  legalForum: string;
  testimonials: {
    quote: string;
    author: string;
    profile: string;
    saving: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

const FAQ_POOL = [
  {
    question: "What is a One Time Settlement (OTS) and how does it apply locally?",
    answer: "A One Time Settlement (OTS) is a formal compromise sanctioned by a bank or NBFC under RBI guidelines. For genuine hardship cases, the lender accepts a discounted lump sum—often waiving 100% of accumulated penal interest and 30% to 60% of the principal debt—to close the account permanently."
  },
  {
    question: "Can recovery agents visit my residence or office without prior legal notice?",
    answer: "No. Under the RBI Master Circular on Loans and Advances, recovery agents are strictly prohibited from visiting without advance written intimation. All visits must occur exclusively between 8:00 AM and 7:00 PM, and agents must carry official IIBF certification and bank authorization letters."
  },
  {
    question: "Can I be arrested or sent to jail for defaulting on an unsecured personal loan?",
    answer: "No. Defaulting on a personal loan or credit card is strictly a civil dispute governed by contract law. You cannot be arrested for financial inability to pay. The only criminal provisions lenders can invoke relate to bounced cheques (Section 138 NI Act) or bounced NACH mandates (Section 25 PSSA), both of which are bailable offenses that our advocates defend."
  },
  {
    question: "How does loan settlement impact my CIBIL credit score?",
    answer: "When a loan is settled, credit bureaus like CIBIL report the account as \"Settled\" rather than \"Closed\", which temporarily lowers your credit score by 50 to 100 points. However, this is far better than an open \"Default\" or \"Suit Filed\" tag. With structured financial discipline and secured credit cards, credit scores can be rebuilt within 18 to 24 months."
  },
  {
    question: "Can a bank seize my home or vehicle for an unsecured credit card debt?",
    answer: "No. The SARFAESI Act, 2002 applies exclusively to secured loans backed by mortgaged property. For unsecured personal loans or credit card debt, banks possess zero statutory power of summary asset attachment. Any asset seizure requires a formal civil court decree following a multi-year judicial trial."
  },
  {
    question: "What role does the District Legal Services Authority (DLSA) play in debt settlement?",
    answer: "The DLSA organizes National and Permanent Lok Adalats where banks and borrowers can enter into court-sanctioned compromise settlements. An award passed by a Lok Adalat has the force of a civil court decree, ensuring that the lender cannot reopen the debt in the future."
  },
  {
    question: "How long does a formal debt settlement negotiation typically take?",
    answer: "A standard legal debt settlement through our firm takes between 45 to 90 days. This allows sufficient time to serve notices of appearance, halt unlawful collection harassment, audit disputed statement balances, and present hardship evidence to the bank compromise committee."
  },
  {
    question: "What documents are required to initiate an OTS application?",
    answer: "Key documents include: complete loan statements, income tax returns or salary slips, termination letters (if unemployed), hospital records (in medical hardship cases), bank statements for the past six months, and copies of all legal or recovery notices received."
  },
  {
    question: "Can multiple credit card debts and personal loans be settled simultaneously?",
    answer: "Yes. In fact, comprehensive multi-lender debt resolution is our core specialty. We formulate an umbrella settlement strategy, handling multiple banks concurrently to ensure your total monthly cash flow is protected while securing maximum waivers across all facilities."
  },
  {
    question: "What is the difference between a debt settlement agency and a legal law firm?",
    answer: "Unregulated debt settlement agencies lack the legal standing to represent you in court, respond to statutory summons, or file criminal counter-complaints. As an established law firm, AMA Legal Solutions represents you directly under the Advocates Act, insulating you completely from creditor coercion."
  },
  {
    question: "How do I know if an OTS settlement letter from a bank is genuine?",
    answer: "A genuine OTS letter must be issued on official bank letterhead, contain an authentic system-generated reference number, explicitly specify terms of full and final closure, and mandate payments directly to your loan account number—never to individual agents or collection agency accounts."
  },
  {
    question: "Can the bank continue legal proceedings after an OTS payment is completed?",
    answer: "No. Upon payment of the agreed settlement figure within the stipulated timeframe, the bank is legally obligated to issue a formal No Dues Certificate (NDC) and withdraw any pending Section 138, Section 25, or civil recovery proceedings before courts or Lok Adalats."
  },
  {
    question: "What happens if a bank serves a Section 138 cheque bounce summons?",
    answer: "You must immediately engage legal counsel to enter an appearance before the jurisdictional Judicial Magistrate. Our banking advocates file formal defense replies, challenge the validity of security cheques presented without notice, and utilize the court forum to facilitate a mediated compromise."
  },
  {
    question: "Can an employer terminate my job because of bank recovery agent calls?",
    answer: "No lawful employer can terminate employment purely due to civil debt disputes. Furthermore, banks contacting your employer commit actionable criminal defamation under Section 356 BNS. We issue immediate Corporate Cease & Desist notices to protect your workplace standing."
  },
  {
    question: "What is the threshold for a bank to approach the Debt Recovery Tribunal (DRT)?",
    answer: "Under the Recovery of Debts and Bankruptcy Act (RDBA), banks and financial institutions can approach the DRT only for debts with an aggregate outstanding balance of ₹20 Lakhs or higher. Debts below this statutory threshold cannot be filed before the DRT."
  }
];

const METRO_NCR_SLUGS = [
  "delhi", "mumbai", "bengaluru", "chennai", "hyderabad", "kolkata", "pune", "ahmedabad",
  "noida", "gurugram", "faridabad", "ghaziabad", "greater-noida", "gurgaon"
];

const COMMERCIAL_HUB_SLUGS = [
  "surat", "jaipur", "lucknow", "kanpur", "indore", "bhopal", "nagpur", "coimbatore",
  "vadodara", "visakhapatnam", "patna", "ludhiana", "agra", "nashik", "rajkot", "varanasi"
];

const TIER2_ECONOMIC_FOCUS = [
  "salaried professionals, local business owners, and self-employed individuals navigating financial restructuring and debt resolution",
  "small merchants, independent contractors, and working families dealing with sudden loss of revenue and mounting unsecured obligations",
  "retail traders, healthcare workers, and regional service sector personnel seeking relief from compounding loan balances",
  "agricultural traders, local enterprise owners, and private employees managing cash flow bottlenecks and loan delinquency",
  "manufacturing employees, logistics operators, and local entrepreneurs striving to protect their assets from aggressive recovery",
  "education sector staff, government-adjacent contractors, and micro-entrepreneurs working to achieve debt freedom through legitimate legal OTS"
];

const TIER2_DEBT_LANDSCAPE = [
  "unsecured personal loans, credit card compounding interest, and consumer credit facilities",
  "multiple instant digital lending app liabilities, revolving credit cards, and overdue private bank personal loans",
  "inflated overdue penalty interest, multiple card debts, and high-interest NBFC personal facilities",
  "compounded late fees, unmanageable credit card minimum dues, and personal loan defaults",
  "unsecured overdraft lines, fintech app micro-borrowings, and cumulative bank debt obligations",
  "unauthorized collection agency charges, disputed statement figures, and high-interest personal finance loans"
];

const TIER2_LEGAL_FORUM = [
  "the local District Courts, jurisdictional Debt Recovery Tribunals (DRT), and District Legal Services Authority (DLSA)",
  "Chief Judicial Magistrate courts, DLSA mediation panels, and regional consumer dispute redressal commissions",
  "jurisdictional District Civil Courts, National Lok Adalat benches, and the RBI Banking Ombudsman scheme",
  "local Judicial Magistrate courts handling Section 138/25 notices, Sub-Divisional courts, and statutory conciliation cells",
  "District & Sessions Courts, permanent Lok Adalat dispute forums, and consumer forums",
  "jurisdictional Civil Judges (Senior Division), regional DRT circuit benches, and Lok Adalat compromise cells"
];

const METRO_ECONOMIC_FOCUS = [
  "corporate executives, technology professionals, and service industry employees facing sudden income shifts or layoff disruptions",
  "IT sector specialists, multinational consultants, and high-income salaried professionals managing multi-lender debt obligations",
  "corporate employees, startup founders, and commercial service professionals seeking structured one-time settlement",
  "finance managers, software engineers, and urban professionals dealing with high-ticket revolving credit liabilities"
];

const METRO_DEBT_LANDSCAPE = [
  "multi-bank revolving credit card balances (averaging 36-45% APR), aggressive fintech app micro-loans, and high-ticket personal debt",
  "accumulated credit card dues across private banks, personal loan EMIs exceeding monthly take-home, and digital credit lines",
  "unsecured consumer loans, compounding credit card finance charges, and predatory online loan app harassment",
  "high-ticket personal loans, multiple credit card facilities, and aggressive automated recovery harassment"
];

const METRO_LEGAL_FORUM = [
  "jurisdictional Metropolitan Magistrate courts, High Court writ jurisdiction, and National Lok Adalat mediation forums",
  "City Civil & Sessions Courts, jurisdictional High Court appellate benches, and the RBI Centralized Ombudsman portal",
  "Metropolitan Courts handling Section 138 cheque bounce summons, permanent Lok Adalat benches, and DRT tribunals",
  "Chief Metropolitan Magistrate courts, High Court dispute resolution cells, and legal aid clinics under State Legal Services"
];

const COMMERCIAL_ECONOMIC_FOCUS = [
  "traders, MSME entrepreneurs, manufacturing operators, and commercial vendors encountering supply chain liquidity cycles",
  "wholesale distributors, factory owners, and regional commercial traders dealing with credit crunches and cash flow interruptions",
  "textile merchants, retail business proprietors, and industrial suppliers seeking legitimate debt restructuring with banks",
  "logistics providers, export-import operators, and medium enterprise owners needing relief from compounding financial dues"
];

const COMMERCIAL_DEBT_LANDSCAPE = [
  "unsecured business lines, working capital overdrafts, merchant cash advances, and post-dated cheque (PDC) liabilities",
  "commercial credit card defaults, personal guarantees on stressed business facilities, and unserviceable term loans",
  "disputed interest calculations on unsecured credit, working capital defaults, and supplier payment strain",
  "high-interest NBFC loans, commercial finance facilities, and multiple bank recovery notices"
];

const COMMERCIAL_LEGAL_FORUM = [
  "District Commercial Courts, Chief Judicial Magistrate courts for Section 138/25 matters, and regional Banking Ombudsman desks",
  "designated Commercial Benches of District Courts, DLSA conciliation meetings, and Lok Adalat compromise sessions",
  "jurisdictional Judicial Magistrate courts, State Commercial Dispute benches, and the regional Office of the Banking Ombudsman",
  "District Courts, Commercial Division arbitral tribunals, and National Lok Adalat compromise hearings"
];

export function getCityProfile(slug: string, name: string): CityProfileData {
  const hash = hashSlug(slug);
  const clean = slug.toLowerCase();

  let regionType: CityProfileData["regionType"] = "tier2-district";
  if (METRO_NCR_SLUGS.some(k => clean.includes(k))) {
    regionType = "metro-ncr";
  } else if (COMMERCIAL_HUB_SLUGS.some(k => clean.includes(k))) {
    regionType = "commercial-hub";
  }

  let economicFocus = TIER2_ECONOMIC_FOCUS[hash % TIER2_ECONOMIC_FOCUS.length];
  let debtLandscape = TIER2_DEBT_LANDSCAPE[(hash >> 2) % TIER2_DEBT_LANDSCAPE.length];
  let legalForum = TIER2_LEGAL_FORUM[(hash >> 4) % TIER2_LEGAL_FORUM.length];

  if (regionType === "metro-ncr") {
    economicFocus = METRO_ECONOMIC_FOCUS[hash % METRO_ECONOMIC_FOCUS.length];
    debtLandscape = METRO_DEBT_LANDSCAPE[(hash >> 2) % METRO_DEBT_LANDSCAPE.length];
    legalForum = METRO_LEGAL_FORUM[(hash >> 4) % METRO_LEGAL_FORUM.length];
  } else if (regionType === "commercial-hub") {
    economicFocus = COMMERCIAL_ECONOMIC_FOCUS[hash % COMMERCIAL_ECONOMIC_FOCUS.length];
    debtLandscape = COMMERCIAL_DEBT_LANDSCAPE[(hash >> 2) % COMMERCIAL_DEBT_LANDSCAPE.length];
    legalForum = COMMERCIAL_LEGAL_FORUM[(hash >> 4) % COMMERCIAL_LEGAL_FORUM.length];
  }

  // Rotated Testimonials
  const testimonialPool = [
    {
      quote: "I was overwhelmed by aggressive calls from recovery agents demanding immediate payments for my credit card balances. AMA Legal Solutions stepped in, issued formal legal representation notices that halted the calls completely, and negotiated a 55% waiver on my total debt.",
      author: "Vikram R.",
      profile: `Client from ${name}`,
      saving: "55% Debt Reduction"
    },
    {
      quote: "After an unexpected medical crisis, my personal loan EMIs became unserviceable. The advocates at AMA took complete control of bank correspondence, defended my rights ethically, and secured a clean One-Time Settlement with a complete waiver of penal charges.",
      author: "Sunita M.",
      profile: `Resident of ${name}`,
      saving: "60% Waiver & Full NOC"
    },
    {
      quote: "My commercial supplier credit and business loans had spiraled into severe stress. AMA Legal Solutions audited my accounts, challenged inflated interest computations, and arranged a structured compromise that saved my venture from insolvency.",
      author: "Rajesh K.",
      profile: `Business Owner in ${name}`,
      saving: "Saved ₹12.5 Lakhs"
    },
    {
      quote: "The bank threatened to file cheque bounce cases and visit my family home. Hiring AMA was the best decision—they represented me professionally before the lender, prevented court proceedings, and finalized a reasonable OTS in under 60 days.",
      author: "Amit P.",
      profile: `Salaried Executive, ${name}`,
      saving: "Harassment Stopped in 48 hrs"
    }
  ];

  const t1 = testimonialPool[hash % testimonialPool.length];
  const t2 = testimonialPool[(hash + 2) % testimonialPool.length];

  // Rotated FAQs (select 6 non-repeating FAQs)
  const selectedFaqs: { question: string; answer: string }[] = [];
  const pickedIndices = new Set<number>();

  for (let i = 0; i < 6; i++) {
    const idx = (hash + i * 3) % FAQ_POOL.length;
    if (!pickedIndices.has(idx)) {
      pickedIndices.add(idx);
      selectedFaqs.push(FAQ_POOL[idx]);
    } else {
      const fallback = (idx + 1) % FAQ_POOL.length;
      pickedIndices.add(fallback);
      selectedFaqs.push(FAQ_POOL[fallback]);
    }
  }

  return {
    regionType,
    economicFocus,
    debtLandscape,
    legalForum,
    testimonials: [t1, t2],
    faqs: selectedFaqs
  };
}

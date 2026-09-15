import { hashSlug } from "./seo";
import { getBankCategory, BankCategory } from "./harassmentContentEngine";

export interface BankSettlementProfile {
  category: BankCategory;
  categoryLabel: string;
  regulatoryOverview: string;
  coreDirectives: { title: string; desc: string }[];
  debtTypes: { title: string; desc: string }[];
  reviews: {
    author: string;
    profile: string;
    quote: string;
    rating: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

const FAQ_POOL = (bankName: string) => [
  {
    question: `How does an official One Time Settlement (OTS) for ${bankName} work?`,
    answer: `An OTS with ${bankName} is a formal bilateral compromise sanctioned under RBI guidelines. In cases of genuine hardship, ${bankName} agrees to accept a discounted lump-sum payment to close the account permanently, waiving accumulated penal interest and a significant portion of the principal balance.`
  },
  {
    question: `How can I stop recovery agent harassment from ${bankName}?`,
    answer: `To halt harassment from ${bankName}, document all abusive calls and messages. Our legal team serves an immediate formal Cease & Desist Notice to the Principal Nodal Officer of ${bankName} citing RBI Fair Practices Code and BNS Section 351, legally compelling agents to cease direct contact.`
  },
  {
    question: `What percentage discount can I expect during an OTS with ${bankName}?`,
    answer: `Depending on the aging of default (NPA duration), income disruption proof, and legal representation, ${bankName} typically waives 100% of accumulated penal interest and between 40% to 75% of the principal loan amount.`
  },
  {
    question: `Will defaulting on ${bankName} lead to police arrest or jail?`,
    answer: `No. Defaulting on an unsecured loan or credit card with ${bankName} is strictly a civil contract dispute. Lenders cannot arrest or imprison borrowers for inability to pay. The only criminal provisions arise from bounced cheques (Section 138 NI Act) or bounced NACH mandates (Section 25 PSSA), both of which are bailable offenses defended by our advocates.`
  },
  {
    question: `How does a loan settlement with ${bankName} impact my CIBIL score?`,
    answer: `Once settled, ${bankName} reports the account status as \"Settled\" to credit bureaus, which lowers your credit score by 50 to 100 points. However, this is far better than an active, compounding \"Default\" or \"Written-Off\" tag. Your credit score can be systematically rebuilt within 18 to 24 months.`
  },
  {
    question: `Can ${bankName} seize my property or salary account for an unsecured debt?`,
    answer: `No. The SARFAESI Act applies strictly to secured loans backed by mortgaged property. For unsecured personal credit with ${bankName}, the bank possesses zero statutory power of summary asset attachment and cannot freeze outside bank accounts without a civil court decree.`
  },
  {
    question: `How long does the entire settlement process take with ${bankName}?`,
    answer: `A structured legal settlement with ${bankName} typically concludes in 30 to 90 days. This timeframe allows our advocates to halt collection harassment, audit disputed statement charges, and negotiate optimal waivers with the bank compromise committee.`
  },
  {
    question: `How do I ensure that a settlement offer letter from ${bankName} is genuine?`,
    answer: `A genuine OTS letter must be issued on official ${bankName} letterhead, carry a verifiable system-generated reference number, state terms of full-and-final settlement, and specify payments directly into your loan account—never to an individual or third-party agency.`
  },
  {
    question: `What documents are required to apply for an OTS with ${bankName}?`,
    answer: `Required documents include loan account statements, KYC documents (PAN and Aadhaar), income disruption proof (salary slips, ITR, or termination letter), bank statements for the last 6 months, and medical records if the default was caused by health emergencies.`
  },
  {
    question: `Can ${bankName} take legal action after the agreed OTS amount is paid?`,
    answer: `No. Once the agreed settlement sum is disbursed within the specified timeline, ${bankName} is legally obligated to issue a formal No Dues Certificate (NDC) and withdraw any pending Section 138 or Section 25 proceedings.`
  }
];

export function getBankSettlementProfile(slug: string, bankName: string): BankSettlementProfile {
  const category = getBankCategory(slug);
  const hash = hashSlug(slug);

  let categoryLabel = "Scheduled Commercial Bank";
  let regulatoryOverview = `As a premier scheduled commercial bank, ${bankName} is strictly bound by the Reserve Bank of India Master Circular on Loans and Advances, the Banking Regulation Act, and the Banking Ombudsman Scheme.`;
  let coreDirectives = [
    {
      title: "Mandatory IIBF DRA Certification",
      desc: `All collection personnel representing ${bankName} must possess valid Indian Institute of Banking and Finance certification and display authorized identification.`
    },
    {
      title: "Strict Permitted Calling Hours",
      desc: `Agents of ${bankName} are legally prohibited from calling or visiting outside 8:00 AM to 7:00 PM.`
    },
    {
      title: "Vicarious Principal-Agent Liability",
      desc: `Under Section 230 of the Indian Contract Act, ${bankName} is directly and corporately liable for any intimidation or privacy violations committed by its outsourced recovery agencies.`
    },
    {
      title: "Prohibition of Workplace Shaming",
      desc: `${bankName} cannot communicate debt details to your employer, HR department, or relatives.`
    }
  ];

  let debtTypes = [
    {
      title: "High-Interest Credit Card Balances",
      desc: `Resolving compounding credit card dues where annual interest and late finance charges have accumulated to 36-45% APR.`
    },
    {
      title: "Unsecured Personal Loans",
      desc: `Negotiating principal haircuts on unsecured facilities where borrowers have experienced verified employment or business disruption.`
    },
    {
      title: "Commercial Lines & Jumbo Overdrafts",
      desc: `Restructuring stressed SME overdraft facilities to prevent insolvency and achieve affordable compromise closures.`
    }
  ];

  if (category === "fintech") {
    categoryLabel = "Digital Lending Platform / Fintech NBFC";
    regulatoryOverview = `${bankName} operates under the RBI Digital Lending Regulatory Framework (2022), which enforces zero tolerance for data privacy breaches, unauthorized contact harvesting, and cyber harassment.`;
    coreDirectives = [
      {
        title: "Prohibition of Contact List & Media Scraping",
        desc: `Under RBI guidelines, digital lending apps like ${bankName} are strictly barred from accessing borrower contacts, photo galleries, or social media accounts.`
      },
      {
        title: "Information Technology Act Protection",
        desc: `Any threats to distribute defamatory messages or morphed images to emergency contacts constitute non-bailable cybercrimes under Sections 66E and 67 of the IT Act.`
      },
      {
        title: "LSP and DLA Disclosure Mandate",
        desc: `${bankName} must transparently disclose all underlying lending NBFCs and regulated digital lending app partners.`
      },
      {
        title: "RBI Sachet Portal Escalation",
        desc: `Rogue collection networks associated with digital apps can be escalated directly to the RBI Sachet division for swift regulatory intervention.`
      }
    ];
    debtTypes = [
      {
        title: "Instant Digital Personal Loans",
        desc: `Resolving high-interest app-based micro-loans disbursed through automated algorithms without comprehensive underwriting.`
      },
      {
        title: "Buy Now Pay Later (BNPL) Lines",
        desc: `Consolidating and settling multi-disbursement revolving credit lines with aggressive default fees.`
      },
      {
        title: "Emergency Salary Advances",
        desc: `Negotiating clean full-and-final waivers on short-term digital credit facilities.`
      }
    ];
  } else if (category === "nbfc") {
    categoryLabel = "Non-Banking Financial Company (NBFC)";
    regulatoryOverview = `${bankName} is regulated under the RBI Scale Based Regulatory Framework for NBFCs, requiring transparent grievance mechanisms and strict adherence to the Fair Practices Code.`;
    coreDirectives = [
      {
        title: "Countering Section 25 PSSA Notices",
        desc: `We draft robust legal replies to automated NACH bounce notices under Section 25 of the PSSA, asserting genuine civil dispute.`
      },
      {
        title: "Quashing Unilateral Arbitration Petitions",
        desc: `Unilateral appointment of sole arbitrators by NBFCs is void ab initio under Supreme Court rulings. We challenge and quash fraudulent arbitration attempts.`
      },
      {
        title: "Removal of Usurious Penal Charges",
        desc: `RBI directives on Fair Lending Practices bar compounding penal interest. We demand audited reconciliation of the loan ledger.`
      },
      {
        title: "Board-Approved Fair Recovery Code",
        desc: `${bankName} must provide its board-approved recovery policy upon legal requisition, preventing unauthorized field collection practices.`
      }
    ];
    debtTypes = [
      {
        title: "Unsecured Business Term Loans",
        desc: `Settling working capital and term loans for MSMEs facing market downturns or cash-flow disruption.`
      },
      {
        title: "Consumer Durable & Personal Facilities",
        desc: `Eliminating inflated penal interest and securing affordable lump-sum settlements on consumer credit.`
      },
      {
        title: "Professional & Equipment Loans",
        desc: `Structuring customized debt workouts for self-employed professionals and service providers.`
      }
    ];
  } else if (category === "small-finance") {
    categoryLabel = "Small Finance Bank";
    regulatoryOverview = `${bankName} is governed by RBI Small Finance Bank charters prioritizing fair customer treatment and humane, regulated recovery protocols.`;
    coreDirectives = [
      {
        title: "Integrated Ombudsman Escalation",
        desc: `Complaints escalate directly to the RBI Centralized Receipt and Processing Centre under the 2021 Integrated Ombudsman Scheme.`
      },
      {
        title: "Priority Sector Borrower Protections",
        desc: `Public shaming, residential intimidation, or community harassment is strictly barred with institutional license review consequences.`
      },
      {
        title: "Mandatory 30-Day Resolution Window",
        desc: `Failure to resolve registered customer grievances within 30 days entitles borrowers to claim compensatory damages up to ₹20 Lakhs.`
      },
      {
        title: "Injunction Against Coercive Field Visits",
        desc: `We obtain interim protection restraining field managers from conducting unannounced visits during formal dispute resolution.`
      }
    ];
  }

  // Rotated Reviews
  const reviewPool = [
    {
      author: "Rajiv M.",
      profile: "Corporate Manager",
      quote: `AMA Legal Solutions stopped the aggressive recovery calls from ${bankName} within 48 hours. Their advocates negotiated directly with senior bank managers and secured a 55% waiver on my total outstanding dues. Highly professional team!`,
      rating: "5"
    },
    {
      author: "Dr. Sunita K.",
      profile: "Healthcare Professional",
      quote: `After a severe family medical crisis, I was unable to service my personal loan with ${bankName}. AMA Legal Solutions stepped in, defended me against legal scare notices, and achieved an authentic OTS with complete penal interest waiver.`,
      rating: "5"
    },
    {
      author: "Amit B.",
      profile: "MSME Proprietor",
      quote: `My business credit facility with ${bankName} had turned into an NPA. The legal team at AMA audited the statement, stripped away exorbitant bounce charges, and structured a clean settlement that saved our business from insolvency.`,
      rating: "5"
    },
    {
      author: "Deepali R.",
      profile: "IT Consultant",
      quote: `Recovery agents were calling my family and threatening workplace visits. Hiring AMA Legal Solutions ended the nightmare immediately. They handled all communications and secured a full-and-final NDC from ${bankName}.`,
      rating: "5"
    }
  ];

  const r1 = reviewPool[hash % reviewPool.length];
  const r2 = reviewPool[(hash + 1) % reviewPool.length];

  // Rotated FAQs (pick 6)
  const pool = FAQ_POOL(bankName);
  const selectedFaqs: { question: string; answer: string }[] = [];
  const picked = new Set<number>();

  for (let i = 0; i < 6; i++) {
    const idx = (hash + i * 2) % pool.length;
    if (!picked.has(idx)) {
      picked.add(idx);
      selectedFaqs.push(pool[idx]);
    } else {
      const fallback = (idx + 1) % pool.length;
      picked.add(fallback);
      selectedFaqs.push(pool[fallback]);
    }
  }

  return {
    category,
    categoryLabel,
    regulatoryOverview,
    coreDirectives,
    debtTypes,
    reviews: [r1, r2],
    faqs: selectedFaqs
  };
}

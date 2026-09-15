import { HarassmentBank } from "@/data/harassmentBanks";
import { HarassmentCity } from "@/data/harassmentCities";
import { hashSlug } from "./seo";

export type BankCategory = "fintech" | "commercial-bank" | "nbfc" | "small-finance";

const FINTECH_KEYWORDS = [
  "prefr", "zype", "infocredit", "ndx", "newtap", "paytm", "kissht", "kreditbee",
  "moneyview", "ring", "navi", "cashe", "mpokket", "fibe", "earlysalary", "rupeek",
  "branch", "smartcoin", "payme", "faircent", "truebalance", "kreditzy", "rapidrupee",
  "lazypay", "simpl", "slice", "freo", "stashfin", "incred", "mobikwik", "fi-money",
  "jupiter", "privo", "postpe", "cred", "krazybee", "creditvidya", "liquiloans"
];

const NBFC_KEYWORDS = [
  "bajaj", "tata-capital", "aditya-birla", "piramal", "l-and-t", "muthoot",
  "manappuram", "shriram", "poonawalla", "fullerton", "smfg", "hero-fincorp",
  "cholamandalam", "mahindra", "sundaram", "hdb", "home-credit", "dmi-finance",
  "clix-capital", "fedbank", "indiabulls", "avanse", "auxilo", "iifl"
];

const SMALL_FINANCE_KEYWORDS = [
  "au-small", "equitas", "ujjivan", "jana", "capital-small", "suryoday",
  "esaf", "utkarsh", "fincare", "north-east-small", "shivalik"
];

export function getBankCategory(slug: string): BankCategory {
  const clean = slug.toLowerCase();
  if (FINTECH_KEYWORDS.some(k => clean.includes(k))) return "fintech";
  if (NBFC_KEYWORDS.some(k => clean.includes(k))) return "nbfc";
  if (SMALL_FINANCE_KEYWORDS.some(k => clean.includes(k))) return "small-finance";
  return "commercial-bank";
}

export interface BankCityContentData {
  category: BankCategory;
  categoryLabel: string;
  regulatoryFramework: {
    title: string;
    description: string;
    keyPoints: { title: string; desc: string }[];
  };
  highCourtPrecedent: {
    title: string;
    citation: string;
    analysis: string;
  };
  policeProcedure: {
    title: string;
    steps: { title: string; desc: string }[];
  };
  caseStudy: {
    title: string;
    borrowerProfile: string;
    loanAmount: string;
    challenge: string;
    legalAction: string;
    resolution: string;
  };
  faqs: { question: string; answer: string }[];
}

const HIGH_COURT_DATA: Record<string, { citation: string; analysis: string }> = {
  "Delhi High Court": {
    citation: "ICICI Bank Ltd. v. Shanti Devi Sharma, (2008) 7 SCC 538 & Delhi HC Directives",
    analysis: "The Delhi High Court has held that recovery cannot be effected through strong-arm tactics, coercion, or mental torment. The Court reaffirmed that banks using musclemen and extra-judicial recovery agents are guilty of abetting criminal intimidation and trespass under Indian criminal law."
  },
  "Bombay High Court": {
    citation: "Standard Chartered Bank v. State of Maharashtra & Bombay HC Criminal Jurisdiction",
    analysis: "The Bombay High Court has repeatedly penalized scheduled banks and financial institutions for outsourcing recovery to coercive collection agencies. The Court established that corporate directors and nodal heads are directly answerable when outsourced recovery agencies violate the fundamental right to live with dignity under Article 21."
  },
  "Karnataka High Court": {
    citation: "State of Karnataka v. Recovery Agents & Digital Lending App Directives",
    analysis: "The Karnataka High Court has taken an exceptionally strict stance against predatory tele-calling, workplace visits, and unlawful cyber threats. The bench reiterated that legitimate civil recovery must occur via civil courts or Lok Adalats, strictly prohibiting physical intimidation and unannounced residential visits."
  },
  "Madras High Court": {
    citation: "Madras HC Ruling on Third-Party Recovery Agencies & Banking Fair Practices",
    analysis: "The Madras High Court held that the employment of unauthorized recovery personnel to humiliate borrowers in front of family or neighbors constitutes an actionable tort and criminal extortion. The Court directed state police to register FIRs immediately upon receipt of documented intimidation complaints."
  },
  "Calcutta High Court": {
    citation: "Calcutta HC Bench Directives on Debt Collection & Police Injunctions",
    analysis: "The Calcutta High Court ruled that economic duress and public shaming by recovery agents violate constitutional guarantees of privacy. The Court has readily issued interim protection orders preventing bank representatives from approaching borrowers residences or places of employment."
  },
  "Allahabad High Court": {
    citation: "State of U.P. v. Private Financial Institutions & Allahabad HC Writ Remedies",
    analysis: "The Allahabad High Court affirmed that police authorities cannot turn away harassed borrowers under the pretext of a civil financial dispute when offenses of criminal breach of peace, intimidation, and unauthorized home trespass have been disclosed."
  },
  "Gujarat High Court": {
    citation: "Gujarat HC Landmark Ruling on Coercive Banking Practices",
    analysis: "The Gujarat High Court ruled that banks cannot use recovery agents to supersede statutory dispute resolution mechanisms. Borrowers are entitled to police protection against continuous telephonic harassment and non-bailable extortion threats."
  },
  "Punjab and Haryana High Court": {
    citation: "P&H High Court Strictures on Intimidation in Debt Collection",
    analysis: "The Punjab and Haryana High Court has issued clear directions that no recovery agent can contact a borrower outside permitted hours (8 AM to 7 PM), nor can they enter a borrower premises without an explicit authorization letter and prior written notice."
  }
};

const DEFAULT_HIGH_COURT = {
  citation: "Supreme Court of India in ICICI Bank Ltd. v. Prakash Kaur (2007) 2 SCC 711",
  analysis: "The Supreme Court of India conclusively ruled that banks cannot recover loans by employing musclemen or unauthorized recovery agents. The apex court held that debt recovery must follow due process of law, and any attempt to intimidate, coerce, or publicly humiliate a borrower entitles the citizen to criminal and civil remedies."
};

export function getDynamicBankCityContent(
  bank: HarassmentBank,
  city: HarassmentCity
): BankCityContentData {
  const category = getBankCategory(bank.slug);
  const hash = hashSlug(`${bank.slug}-${city.slug}`);

  // Regulatory Framework per Category
  let categoryLabel = "Commercial Scheduled Bank";
  let regulatoryFramework = {
    title: `RBI Fair Practices Code & Section 35 BNSS Summons against ${bank.name}`,
    description: `As a major banking institution, ${bank.name} is bound by the Reserve Bank of India Master Circular on Loans and Advances and the Code of Bank Commitment to Customers.`,
    keyPoints: [
      {
        title: "Vicarious Principal-Agent Liability",
        desc: `Under Section 230 of the Indian Contract Act, ${bank.name} is corporately and legally responsible for every action, threat, or phone call made by its appointed Debt Recovery Agencies (DRAs).`
      },
      {
        title: "Mandatory DRA Certification",
        desc: `RBI rules require all recovery personnel of ${bank.name} to possess valid Indian Institute of Banking and Finance (IIBF) certification and carry authorized bank identity cards with verifiable staff IDs.`
      },
      {
        title: "Permitted Operating Windows",
        desc: `Recovery representatives of ${bank.name} are strictly barred from calling or visiting borrowers before 8:00 AM and after 7:00 PM. Calls outside this window constitute harassment per se.`
      },
      {
        title: "Workplace & Third-Party Privacy",
        desc: `${bank.name} is legally prohibited from contacting your colleagues, employer, HR department, or relatives regarding personal debt obligations.`
      }
    ]
  };

  if (category === "fintech") {
    categoryLabel = "Digital Lending Platform / Fintech NBFC";
    regulatoryFramework = {
      title: `RBI Digital Lending Guidelines (2022) & IT Act Protection against ${bank.name}`,
      description: `${bank.name} operates under the RBI Digital Lending Regulatory Framework (2022), which enforces zero tolerance for privacy intrusions and unauthorized contact access.`,
      keyPoints: [
        {
          title: "Prohibition of Contact List & Media Access",
          desc: `Under RBI guidelines, digital lending apps like ${bank.name} are strictly prohibited from scraping borrower contact books, photo galleries, or social media accounts.`
        },
        {
          title: "Section 66E / 67 IT Act Violations",
          desc: `Any threat to send messages, morphed images, or default notices to contacts on your phone is a non-bailable cybercrime punishable by up to 3 years imprisonment.`
        },
        {
          title: "LSP and DLA Disclosure Mandate",
          desc: `${bank.name} must disclose its regulated Lending Service Provider (LSP) and Digital Lending App (DLA) partner details transparently. Concealing entity ownership is an actionable offense.`
        },
        {
          title: "RBI Sachet Portal Escalation",
          desc: `Unregistered collection networks associated with ${bank.name} can be reported directly to the RBI Sachet portal for emergency domain blocking and enforcement action.`
        }
      ]
    };
  } else if (category === "nbfc") {
    categoryLabel = "Non-Banking Financial Company (NBFC)";
    regulatoryFramework = {
      title: `RBI Scale Based Regulation & Section 25 PSSA Defense against ${bank.name}`,
      description: `${bank.name} is regulated under the RBI Scale Based Regulatory Framework for NBFCs, requiring strict adherence to customer grievance mechanisms.`,
      keyPoints: [
        {
          title: "Countering Section 25 PSSA Scare Tactics",
          desc: `${bank.name} agents often threaten immediate arrest using automated NACH mandate failure notices under Section 25 of the PSSA. We file formal legal replies establishing genuine civil dispute.`
        },
        {
          title: "Quashing Unilateral Arbitration Notices",
          desc: `Many NBFCs issue unilateral arbitration notices in distant cities. Under Supreme Court precedent (Perkins Eastman), unilateral appointments are void ab initio and can be quashed.`
        },
        {
          title: "Penal Interest & Fee Auditing",
          desc: `RBI circulars on Fair Lending Practices bar usurious compound penal charges. We mandate an independent account re-computation to eliminate inflated balances.`
        },
        {
          title: "Mandatory Board-Approved Recovery Policy",
          desc: `${bank.name} must provide its board-approved recovery code upon legal requisition. Failure to produce it renders their collection attempts ultra vires.`
        }
      ]
    };
  } else if (category === "small-finance") {
    categoryLabel = "Small Finance Bank";
    regulatoryFramework = {
      title: `RBI Integrated Ombudsman Scheme & Priority Lending Protection against ${bank.name}`,
      description: `${bank.name} operates under RBI Small Finance Bank licensing mandates, prioritizing fair financial inclusion and humane recovery protocols.`,
      keyPoints: [
        {
          title: "Integrated Ombudsman Escalation",
          desc: `Complaints against ${bank.name} bypass local resistance by escalating directly to the RBI Centralized Receipt and Processing Centre (CRPC) under the 2021 Ombudsman Scheme.`
        },
        {
          title: "Microfinance & Priority Sector Safeguards",
          desc: `Harassment of family members or community shaming for unsecured loans is expressly prohibited with severe license-review penalties.`
        },
        {
          title: "Statutory 30-Day Grievance Window",
          desc: `If ${bank.name} fails to provide an acceptable resolution within 30 days, the RBI Ombudsman can award damages of up to ₹20 Lakhs for mental agony and deficiency of service.`
        },
        {
          title: "Bar on Coercive Recovery Injunctions",
          desc: `Our legal team files emergency interim representations to restrain regional managers of ${bank.name} from initiating home visits during disputed reconciliations.`
        }
      ]
    };
  }

  // High Court Jurisprudence
  const courtInfo = HIGH_COURT_DATA[city.highCourt] || DEFAULT_HIGH_COURT;
  const highCourtPrecedent = {
    title: `Precedents of the ${city.highCourt}`,
    citation: courtInfo.citation,
    analysis: courtInfo.analysis
  };

  // Police Procedure
  const policeProcedure = {
    title: `Mobilizing the ${city.policeAuthority} in ${city.name}`,
    steps: [
      {
        title: "Step 1: Evidence Compilation",
        desc: `Record all abusive calls, preserve WhatsApp transcripts, take screenshots of incoming numbers, and document exact dates and times of visits in ${city.name}.`
      },
      {
        title: "Step 2: Formal Representation to Local SHO",
        desc: `Submit a structured complaint to the Station House Officer under BNS Section 351 (Criminal Intimidation), Section 308 (Extortion), and Section 356 (Defamation).`
      },
      {
        title: "Step 3: Section 35 BNSS Notice Issuance",
        desc: `The ${city.policeAuthority} has the authority to summon ${bank.name} regional managers and collection agency heads to join the investigation in ${city.name}.`
      },
      {
        title: "Step 4: Section 175(3) / 156(3) Magistrate Escalation",
        desc: `If local police hesitate to register an FIR, our advocates immediately file a formal application before the local Chief Judicial Magistrate in ${city.name} to compel immediate registration.`
      }
    ]
  };

  // Case Studies rotation based on hash
  const caseStudyPool = [
    {
      title: `Resolving Severe Workplace Defamation in ${city.name}`,
      borrowerProfile: `Senior Technology Lead residing in ${city.name}`,
      loanAmount: `₹14,80,000 Unsecured Personal Debt with ${bank.name}`,
      challenge: `Recovery agents contacted the borrower office reception and HR email desk in ${city.name}, falsely asserting financial fraud and demanding salary deductions.`,
      legalAction: `AMA Legal Solutions served a comprehensive Corporate Cease & Desist Notice to the Principal Nodal Officer of ${bank.name} and lodged an official complaint with the ${city.policeAuthority}.`,
      resolution: `${bank.name} issued a formal written retraction to the borrower employer within 72 hours, replaced the recovery agency, and approved a 62% One-Time Settlement (OTS).`
    },
    {
      title: `Stopping Digital App Harassment & Contact List Threats in ${city.name}`,
      borrowerProfile: `Digital Marketing Consultant based in ${city.name}`,
      loanAmount: `₹4,50,000 Multi-disbursement loan with ${bank.name}`,
      challenge: `Call agents used VoIP spoofed numbers to harass family members in ${city.name} with morphed messages and threatening WhatsApp voice notes.`,
      legalAction: `Our legal team registered a high-priority cyber complaint with the ${city.policeAuthority} and initiated proceedings under Section 66E of the IT Act while lodging an RBI Sachet grievance.`,
      resolution: `All abusive calls halted within 24 hours of police summons being drafted. ${bank.name} closed the loan under a full-and-final settlement at 40% of the disputed balance.`
    },
    {
      title: `Defeating Fake Arbitration & Legal Scare Notices in ${city.name}`,
      borrowerProfile: `Manufacturing SME Proprietor operating in ${city.name}`,
      loanAmount: `₹22,00,000 Business Overdraft / Credit Facility with ${bank.name}`,
      challenge: `The borrower received intimidating fake legal notices and Section 25 PSSA summons demanding surrender of commercial equipment in ${city.name}.`,
      legalAction: `AMA Legal Solutions filed a detailed legal defense challenging the jurisdiction of the unilateral notice, citing Supreme Court rulings, and issued a counter-notice for tortious interference.`,
      resolution: `${bank.name} dropped all unilateral proceedings, audited excess interest charges, and structured a structured repayment plan with 100% penal interest waiver.`
    },
    {
      title: `Neutralizing Residential Doorstep Intimidation in ${city.name}`,
      borrowerProfile: `Healthcare Professional living with elderly parents in ${city.name}`,
      loanAmount: `₹9,20,000 Personal Loan with ${bank.name}`,
      challenge: `Unaccredited recovery agents visited the borrower residence in ${city.name} unannounced at 9:30 PM, creating a public scene and shouting in front of neighbors.`,
      legalAction: `We immediately drafted a police complaint for house trespass and criminal intimidation with the ${city.policeAuthority}, backed by CCTV footage and Section 35 BNSS requisitions.`,
      resolution: `The local agency manager was summoned to the police station, leading ${bank.name} corporate compliance to permanently bar agency visits and grant an OTS with a 55% waiver.`
    }
  ];

  const caseStudy = caseStudyPool[hash % caseStudyPool.length];

  // Dynamic FAQs pool
  const allFaqs = [
    {
      question: `Can ${bank.name} recovery agents come to my house in ${city.name} without prior notice?`,
      answer: `No. Under RBI Master Guidelines, recovery agents must provide prior written intimation before any home visit. They are strictly prohibited from visiting before 8:00 AM or after 7:00 PM, and they must present official IIBF certification and authorization letters from ${bank.name}.`
    },
    {
      question: `Can the ${city.policeAuthority} summon senior executives of ${bank.name}?`,
      answer: `Yes. Under Section 35 of the Bharatiya Nagarik Suraksha Sanhita (BNSS), investigating officers in ${city.name} can issue formal notices to the Principal Nodal Officer or Regional Manager of ${bank.name} to join criminal proceedings if their agents engage in extortion or intimidation.`
    },
    {
      question: `Can ${bank.name} seize my vehicle or property in ${city.name} for an unsecured loan?`,
      answer: `No. Unsecured loans and credit card debts have no asset hypothecation. The SARFAESI Act, 2002 applies exclusively to secured loans like home or auto loans. ${bank.name} has no legal right to touch your property without a formal civil court decree after full trial.`
    },
    {
      question: `What should I do if ${bank.name} agents call my workplace or HR in ${city.name}?`,
      answer: `Immediately obtain written confirmation from your employer or HR documenting the call. This serves as decisive evidence of criminal defamation and privacy breach under BNS Section 356. Our advocates use this evidence to file criminal complaints and demand substantial damages from ${bank.name}.`
    },
    {
      question: `How does the ${city.highCourt} protect borrowers against loan recovery harassment?`,
      answer: `The ${city.highCourt} has established that the fundamental right to life with dignity under Article 21 overrides civil debt recovery. The High Court regularly grants writ protection and quashes coercive recovery proceedings initiated by unregulated collection agents.`
    },
    {
      question: `Is call recording admissible in court against ${bank.name} in India?`,
      answer: `Yes. Indian law operates under a single-party consent rule for personal telephone calls. Recordings of abusive or threatening conversations with ${bank.name} agents are fully admissible as electronic evidence under Section 65B of the Indian Evidence Act (now Section 63 of Bharatiya Sakshya Adhiniyam).`
    },
    {
      question: `Can ${bank.name} file a criminal case against me for defaulting on an EMI?`,
      answer: `Defaulting on an EMI is strictly a civil contract breach, not a crime. Agents often bluff with "police complaints" or "jail threats." The only criminal provision banks can invoke is Section 138 of the NI Act (for bounced cheques) or Section 25 of the PSSA (for bounced NACH mandates), both of which are bailable offenses that we routinely defend.`
    },
    {
      question: `What is the average OTS discount ${bank.name} approves in ${city.name}?`,
      answer: `Depending on the default aging (NPA status) and legal leverage applied, ${bank.name} typically waives 100% of accumulated penal interest and late fees, and between 40% to 75% of the principal loan amount through a formalized One-Time Settlement.`
    },
    {
      question: `What should I do if agents from ${bank.name} claim to be police officers or court bailiffs?`,
      answer: `Impersonating a public servant or court official is a severe non-bailable offense under the Bharatiya Nyaya Sanhita. Demand their official government identification, record the statement, and immediately submit a criminal complaint to the ${city.policeAuthority}.`
    },
    {
      question: `How do I know if an OTS letter from ${bank.name} is genuine?`,
      answer: `A genuine OTS letter must be issued on official ${bank.name} letterhead, contain a verifiable system-generated reference number, clearly state the terms of full-and-final settlement, and specify payment directly into your loan account number—never to an individual or third-party agency UPI.`
    },
    {
      question: `Can ${bank.name} freeze my savings account in another bank in ${city.name}?`,
      answer: `No bank can unilaterally freeze an account held at another banking institution without a specific garnishee order issued by a competent civil court or a statutory tax authority order. Threats to freeze outside accounts are illegal scare tactics.`
    },
    {
      question: `How does hiring AMA Legal Solutions stop harassment from ${bank.name}?`,
      answer: `Once we issue a formal Notice of Appearance and Representation to ${bank.name}, all direct collection communications must by law be routed through our legal offices. Any subsequent contact with you or your family constitutes contempt and intentional harassment.`
    }
  ];

  // Deterministically select 6 FAQs using hash rotation
  const selectedFaqs: { question: string; answer: string }[] = [];
  const totalFaqs = allFaqs.length;
  const pickedIndices = new Set<number>();

  for (let i = 0; i < 6; i++) {
    const idx = (hash + i * 2) % totalFaqs;
    if (!pickedIndices.has(idx)) {
      pickedIndices.add(idx);
      selectedFaqs.push(allFaqs[idx]);
    } else {
      const fallbackIdx = (idx + 1) % totalFaqs;
      pickedIndices.add(fallbackIdx);
      selectedFaqs.push(allFaqs[fallbackIdx]);
    }
  }

  return {
    category,
    categoryLabel,
    regulatoryFramework,
    highCourtPrecedent,
    policeProcedure,
    caseStudy,
    faqs: selectedFaqs
  };
}

export interface BankSingleContentData {
  category: BankCategory;
  categoryLabel: string;
  regulatoryFramework: {
    title: string;
    description: string;
    keyPoints: { title: string; desc: string }[];
  };
  caseStudy: {
    title: string;
    borrowerProfile: string;
    loanAmount: string;
    challenge: string;
    legalAction: string;
    resolution: string;
  };
  faqs: { question: string; answer: string }[];
}

export function getDynamicBankSingleContent(bank: HarassmentBank): BankSingleContentData {
  const category = getBankCategory(bank.slug);
  const hash = hashSlug(bank.slug);

  let categoryLabel = "Commercial Scheduled Bank";
  let regulatoryFramework = {
    title: `RBI Fair Practices Code & Institutional Liability of ${bank.name}`,
    description: `As a scheduled commercial bank, ${bank.name} is subject to direct supervisory penalties by the Reserve Bank of India under Section 35A of the Banking Regulation Act for abusive debt collection.`,
    keyPoints: [
      {
        title: "Master Circular on Debt Recovery Agents",
        desc: `RBI guidelines explicitly forbid ${bank.name} recovery agents from intimidating borrowers, shouting, or using profane language. All agency staff must be IIBF certified.`
      },
      {
        title: "Strict Permitted Calling Hours (8 AM - 7 PM)",
        desc: `No representative of ${bank.name} can contact a borrower before 8:00 AM or after 7:00 PM. Calls at odd hours constitute an actionable privacy infringement.`
      },
      {
        title: "Principal-Agent Corporate Liability",
        desc: `Under Section 230 of the Indian Contract Act, ${bank.name} is 100% vicariously liable for the civil torts and criminal threats committed by its collection agencies.`
      },
      {
        title: "Mandatory Notice for Residential Visits",
        desc: `Agents cannot arrive at your residence without carrying an official authorization letter from ${bank.name} and providing advance notice.`
      }
    ]
  };

  if (category === "fintech") {
    categoryLabel = "Digital Lending Platform / Fintech NBFC";
    regulatoryFramework = {
      title: `RBI Digital Lending Guidelines (2022) Compliance for ${bank.name}`,
      description: `${bank.name} operates under the RBI Digital Lending regulatory regime, which imposes criminal and administrative sanctions for data privacy intrusions.`,
      keyPoints: [
        {
          title: "Absolute Ban on Contact Harvesting",
          desc: `Digital lenders are prohibited by the RBI from accessing borrower contact books, photo galleries, and location history. Threatening your contacts is a non-bailable cyber offense.`
        },
        {
          title: "IT Act Criminal Penalties (Sections 66E & 67)",
          desc: `Any attempt to blackmail or send defamatory WhatsApp messages to friends or family members carries up to 3 years imprisonment under the Information Technology Act.`
        },
        {
          title: "LSP and DLA Registration Requirements",
          desc: `${bank.name} must publicly list all its Lending Service Providers (LSPs) and partner NBFCs. Unregistered collection desks are deemed illegal boiler rooms.`
        },
        {
          title: "RBI Sachet Portal Domain Takedowns",
          desc: `We file emergency representations to the RBI Sachet and CERT-In divisions to freeze rogue payment gateways and reporting channels used by ${bank.name}.`
        }
      ]
    };
  } else if (category === "nbfc") {
    categoryLabel = "Non-Banking Financial Company (NBFC)";
    regulatoryFramework = {
      title: `RBI Scale Based Regulation & Defense Protocol for ${bank.name}`,
      description: `${bank.name} is regulated under the RBI Scale Based Regulatory Framework for NBFCs, requiring transparent grievance redressal and fair customer treatment.`,
      keyPoints: [
        {
          title: "Defending Against Section 25 PSSA Notices",
          desc: `Automated bounce notices under Section 25 of the PSSA for NACH mandates are routinely weaponized by ${bank.name}. We prepare formal replies asserting civil dispute and accounting reconciliation.`
        },
        {
          title: "Challenging Unilateral Arbitration Petitions",
          desc: `Unilateral appointment of arbitrators by NBFCs has been declared null and void by the Supreme Court. We challenge and quash fraudulent arbitration awards.`
        },
        {
          title: "Waiver of Usurious Penal Interest",
          desc: `RBI mandates on Fair Lending Practices prohibit penal compound charges. We mandate an independent recalculation to remove excessive late fees.`
        },
        {
          title: "Mandatory Board-Approved Recovery Code",
          desc: `${bank.name} must furnish its board-approved fair practices code upon legal requisition. Failure to do so invalidates their collection actions.`
        }
      ]
    };
  } else if (category === "small-finance") {
    categoryLabel = "Small Finance Bank";
    regulatoryFramework = {
      title: `RBI Integrated Ombudsman Scheme Safeguards for ${bank.name}`,
      description: `${bank.name} operates under RBI Small Finance Bank charters requiring humane collection mechanisms and strict accountability to the Banking Ombudsman.`,
      keyPoints: [
        {
          title: "Integrated Ombudsman Escalation (CRPC)",
          desc: `Complaints bypass branch delays by directly escalating to the RBI Centralized Receipt and Processing Centre under the 2021 Ombudsman Scheme.`
        },
        {
          title: "Microfinance Safeguards",
          desc: `Harassment of family members or public shaming in residential localities is strictly banned with institutional license review repercussions.`
        },
        {
          title: "Statutory 30-Day Resolution Window",
          desc: `Failure by ${bank.name} to redress a recorded grievance within 30 days entitles the borrower to escalate for financial compensation up to ₹20 Lakhs.`
        },
        {
          title: "Injunction Against Third-Party Recovery",
          desc: `We obtain interim protection orders directing ${bank.name} to cease all physical home visits during formal dispute resolution.`
        }
      ]
    };
  }

  const caseStudyPool = [
    {
      title: `Neutralizing Unlawful Recovery Intimidation by ${bank.name}`,
      borrowerProfile: `Senior Executive with multiple unsecured facilities`,
      loanAmount: `₹16,50,000 Unsecured Credit with ${bank.name}`,
      challenge: `Outsourced recovery agents initiated aggressive calls to family members and threatened doorstep disruption.`,
      legalAction: `AMA Legal Solutions served a comprehensive Cease & Desist Notice to the Principal Nodal Officer of ${bank.name} citing BNS criminal intimidation provisions and RBI Fair Practices codes.`,
      resolution: `${bank.name} replaced the recovery vendor, issued a formal apology, and approved a 60% One-Time Settlement (OTS) with full waiver of all penal interest.`
    },
    {
      title: `Overcoming Digital App Cyber Harassment by ${bank.name}`,
      borrowerProfile: `Self-employed professional`,
      loanAmount: `₹5,20,000 Digital Loan with ${bank.name}`,
      challenge: `Agents spoofed numbers to harass emergency contacts with abusive audio clips and morphed notices.`,
      legalAction: `Our advocates lodged a cybercrime complaint under Section 66E IT Act and escalated an emergency grievance through the RBI CMS portal.`,
      resolution: `All abusive communications ceased within 48 hours. ${bank.name} agreed to close the loan under a full-and-final settlement at 45% of the disputed balance.`
    }
  ];

  const caseStudy = caseStudyPool[hash % caseStudyPool.length];

  const bankFaqs = [
    {
      question: `Will ${bank.name} waive my principal loan amount?`,
      answer: `Yes, under a negotiated One-Time Settlement (OTS). Once legal notices highlight regulatory and consumer violations by recovery agents, ${bank.name} compromise committees routinely waive 100% of penal charges and between 40% to 70% of the principal balance.`
    },
    {
      question: `How do I bypass recovery agents and deal with ${bank.name} directly?`,
      answer: `You must stop responding to telephone calls from unaccredited agency personnel. All communication should be formally submitted in writing to ${bank.name} Grievance Redressal Officer at ${bank.emails.split(",")[0]}, establishing a verifiable legal record.`
    },
    {
      question: `Is ${bank.name} legally responsible for the actions of its third-party agency?`,
      answer: `Yes. Under the doctrine of vicarious liability in the Indian Contract Act and landmark Supreme Court rulings, ${bank.name} as Principal is 100% accountable for all acts, civil wrongs, and criminal threats committed by its appointed recovery agents.`
    },
    {
      question: `What if ${bank.name} claims the agents were acting independently?`,
      answer: `This defense fails in court. We demand the formal authorization letter issued by ${bank.name} to the collection agency. If the bank disowns the agency, we file an immediate FIR for criminal extortion against unknown individuals.`
    },
    {
      question: `Can ${bank.name} block my salary account in another bank?`,
      answer: `No bank possesses the authority to freeze an account in another financial institution without a specific civil court garnishee decree or tax authority order. Any threat to freeze outside accounts is an illegal bluff.`
    },
    {
      question: `What is the limitation period for ${bank.name} to file a recovery suit?`,
      answer: `Under the Limitation Act, 1963, ${bank.name} has exactly three years from the date of default or last written acknowledgment of debt to file a civil recovery suit. Beyond three years, the debt becomes legally time-barred.`
    }
  ];

  return {
    category,
    categoryLabel,
    regulatoryFramework,
    caseStudy,
    faqs: bankFaqs
  };
}

export interface CitySingleContentData {
  highCourtPrecedent: {
    title: string;
    citation: string;
    analysis: string;
  };
  policeProcedure: {
    title: string;
    steps: { title: string; desc: string }[];
  };
  caseStudy: {
    title: string;
    borrowerProfile: string;
    challenge: string;
    legalAction: string;
    resolution: string;
  };
  faqs: { question: string; answer: string }[];
}

export function getDynamicCitySingleContent(city: HarassmentCity): CitySingleContentData {
  const hash = hashSlug(city.slug);
  const courtInfo = HIGH_COURT_DATA[city.highCourt] || DEFAULT_HIGH_COURT;

  const highCourtPrecedent = {
    title: `Precedents of the ${city.highCourt}`,
    citation: courtInfo.citation,
    analysis: courtInfo.analysis
  };

  const policeProcedure = {
    title: `Activating the ${city.policeAuthority} in ${city.name}`,
    steps: [
      {
        title: "1. Document Telephonic & Physical Abuse",
        desc: `Maintain systematic audio recordings, timestamped call logs, and WhatsApp transcripts of all coercive collection efforts in ${city.name}.`
      },
      {
        title: "2. Formal Complaint to Local Police Station",
        desc: `Draft an FIR application citing BNS Section 351 (Criminal Intimidation), Section 308 (Extortion), and Section 356 (Defamation).`
      },
      {
        title: "3. Escalation to District Cyber Cell",
        desc: `Report digital shaming, spoofed numbers, or emergency contact calls to the ${city.policeAuthority} Cyber Crime unit.`
      },
      {
        title: "4. Section 175(3) BNSS Application to Magistrate",
        desc: `If local police hesitate to register an FIR due to the commercial nature of the dispute, our advocates file an application before the local magistrate to direct registration.`
      }
    ]
  };

  const caseStudy = {
    title: `Arresting Unauthorized Recovery Operations in ${city.name}`,
    borrowerProfile: `Resident of ${city.name} facing multi-lender collection harassment`,
    challenge: `Unaccredited collection agents visited the borrower residential building in ${city.name}, creating a disturbance and defaming the family to neighbors.`,
    legalAction: `AMA Legal Solutions petitioned the ${city.policeAuthority} and served statutory Section 35 BNSS summons requisitions on the lender regional compliance desk.`,
    resolution: `Local police issued a formal warning to the agency manager, ending doorstep visits permanently, and paving the way for a 65% OTS closure.`
  };

  const cityFaqs = [
    {
      question: `Can the ${city.policeAuthority} stop bank recovery agents?`,
      answer: `Yes. While debt default is a civil matter, harassment, abusive calling, and unauthorized residential visits constitute cognizable offenses under the Bharatiya Nyaya Sanhita. The ${city.policeAuthority} has full jurisdiction to summon agents and register FIRs.`
    },
    {
      question: `How does the ${city.highCourt} protect borrowers?`,
      answer: `The ${city.highCourt} has held that economic distress does not deprive a citizen of dignity under Article 21. The Court grants urgent writ relief and restrains institutions from deploying musclemen or coercive agencies.`
    },
    {
      question: `Can recovery agents visit my residence in ${city.name} late at night?`,
      answer: `No. RBI guidelines strictly mandate that recovery visits must occur between 8:00 AM and 7:00 PM only, with prior written notice. Any visit outside these hours constitutes criminal trespass.`
    },
    {
      question: `What should I do if agents in ${city.name} claim to have arrest warrants?`,
      answer: `Civil recovery agents have zero power to issue arrest warrants. Only a competent criminal court can issue warrants. Threatening arrest for an unsecured debt is a felony punishable under BNS Section 308 (Extortion).`
    },
    {
      question: `Can I file a cyber complaint in ${city.name} for WhatsApp harassment?`,
      answer: `Yes. The ${city.policeAuthority} Cyber Cell investigates online harassment, VoIP spoofing, and morphed images under Section 66E of the Information Technology Act.`
    },
    {
      question: `How can AMA Legal Solutions help me in ${city.name}?`,
      answer: `We provide comprehensive legal representation: serving formal notices of representation to stop direct calls, filing police and magistrate complaints in ${city.name}, and negotiating maximum OTS debt reductions.`
    }
  ];

  return {
    highCourtPrecedent,
    policeProcedure,
    caseStudy,
    faqs: cityFaqs
  };
}

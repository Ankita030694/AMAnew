import { hashSlug } from "./seo";

export interface ExpertiseDetails {
  category: string;
  item: string;
  statutoryBasis: string;
  statutoryHighlights: { title: string; desc: string }[];
  proceduralStages: { stage: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

const CATEGORY_MAP: Record<string, {
  statutoryBasis: string;
  statutoryHighlights: { title: string; desc: string }[];
  proceduralStages: { stage: string; desc: string }[];
  faqPool: { question: string; answer: string }[];
}> = {
  "CRIMINAL CASES": {
    statutoryBasis: "Governed under the Bharatiya Nyaya Sanhita (BNS), Bharatiya Nagarik Suraksha Sanhita (BNSS), and Bharatiya Sakshya Adhiniyam (BSA).",
    statutoryHighlights: [
      { title: "Bail & Pre-Trial Liberty", desc: "Enforcing statutory rights to regular, anticipatory, and interim bail under Sections 479-484 BNSS." },
      { title: "Section 35 BNSS Protections", desc: "Ensuring strict police adherence before arrest in offenses punishable by less than seven years." },
      { title: "High Court Quashing Jurisdiction", desc: "Petitioning for quashing of frivolous FIRs and malicious prosecutions under Section 528 BNSS." }
    ],
    proceduralStages: [
      { stage: "Stage 1: Pre-Arrest & Legal Representation", desc: "Drafting anticipatory bail applications or legal notices to prevent unlawful detention." },
      { stage: "Stage 2: Investigation & Charge Sheet Scrutiny", desc: "Reviewing police diaries, electronic evidence, and forensic reports for procedural infirmities." },
      { stage: "Stage 3: Framing of Charges & Trial Advocacy", desc: "Cross-examining prosecution witnesses and presenting robust defense evidentiary dockets." }
    ],
    faqPool: [
      { question: "What is the procedure for securing anticipatory bail?", answer: "An anticipatory bail application is filed before the Sessions Court or High Court under Section 482 BNSS, establishing bona fide apprehension of arrest in non-bailable accusations." },
      { question: "Can a frivolous FIR be quashed by the High Court?", answer: "Yes, under Section 528 BNSS (formerly Section 482 CrPC), the High Court possesses inherent powers to quash FIRs that represent an abuse of judicial process." },
      { question: "Are electronic records admissible as evidence in criminal trials?", answer: "Yes, electronic evidence is admissible under Section 63 BSA upon submission of proper certificate verifying authenticity and chain of custody." }
    ]
  },
  "CIVIL / PROPERTY": {
    statutoryBasis: "Governed under the Code of Civil Procedure (CPC), Transfer of Property Act, Specific Relief Act, and Indian Registration Act.",
    statutoryHighlights: [
      { title: "Title Due Diligence & Search", desc: "Verifying 30-year revenue records, encumbrance certificates, and statutory development clearances." },
      { title: "Interim Injunctions (Order 39)", desc: "Securing emergency status quo and temporary restraining orders to prevent unlawful alienation." },
      { title: "Specific Performance of Contracts", desc: "Enforcing purchase agreements and builder-buyer contracts through civil court decrees." }
    ],
    proceduralStages: [
      { stage: "Stage 1: Title Verification & Legal Notice", desc: "Conducting title scrutiny and issuing statutory legal demands before entering litigation." },
      { stage: "Stage 2: Plaint Filing & Interim Injunction", desc: "Filing a civil suit with supporting documentary evidence and securing emergency stay orders." },
      { stage: "Stage 3: Evidence, Final Decree & Execution", desc: "Leading oral and documentary evidence to obtain and execute a final civil court decree." }
    ],
    faqPool: [
      { question: "How can I protect my property from illegal encroachment?", answer: "You can file a civil suit for permanent injunction under Order 39 CPC, coupled with police complaints for criminal trespass under BNS." },
      { question: "What is the limitation period for filing a property suit?", answer: "Under the Limitation Act, a suit for possession based on title must be filed within 12 years from the date the possession becomes adverse." },
      { question: "Is an unregistered agreement to sell legally enforceable?", answer: "An unregistered agreement cannot create title, but it can be relied upon for specific performance or defense of possession under Section 53A TPA." }
    ]
  },
  "FAMILY MATRIMONIAL": {
    statutoryBasis: "Governed under the Hindu Marriage Act, Special Marriage Act, Guardians and Wards Act, and Protection of Women from Domestic Violence Act.",
    statutoryHighlights: [
      { title: "Mutual Consent Divorce (Section 13B)", desc: "Fast-tracking mutual divorce petitions and seeking waiver of statutory statutory cooling-off periods." },
      { title: "Maintenance & Alimony Rights", desc: "Securing equitable interim and permanent maintenance under Section 144 BNSS and family law provisions." },
      { title: "Child Custody & Visitation Protocols", desc: "Structuring comprehensive parenting plans prioritizing the paramount welfare of the minor child." }
    ],
    proceduralStages: [
      { stage: "Stage 1: Mediation & Counseling", desc: "Exploring amicable dispute resolution, settlement terms, and formalizing Memorandum of Understanding." },
      { stage: "Stage 2: Petition Filing before Family Court", desc: "Drafting detailed pleadings with income affidavits in compliance with Supreme Court mandates (*Rajnesh v. Neha*)." },
      { stage: "Stage 3: Evidence & Final Decree", desc: "Adjudicating contested claims or recording joint statements for mutual decrees." }
    ],
    faqPool: [
      { question: "How long does a mutual consent divorce take?", answer: "Mutual consent divorce typically takes 6 months, but courts can waive the statutory waiting period in cases of established irretrievable breakdown." },
      { question: "How is maintenance calculated by family courts?", answer: "Courts evaluate comprehensive income declarations of both spouses, considering living standards, earning capacity, and dependent needs." },
      { question: "Who gets custody of a young child in divorce?", answer: "The paramount consideration is always the welfare of the child. Mothers are generally favored for infants, with structured visitation rights for fathers." }
    ]
  },
  "CONSUMER COURT SERVICES": {
    statutoryBasis: "Governed under the Consumer Protection Act, 2019 and Central Consumer Protection Authority (CCPA) Regulations.",
    statutoryHighlights: [
      { title: "Deficiency of Service Redressal", desc: "Holding corporate service providers, builders, airlines, and e-commerce platforms accountable." },
      { title: "Product Liability & Unfair Trade", desc: "Claiming full refunds and punitive damages for defective goods and misleading marketing." },
      { title: "E-Daakhil Online Adjudication", desc: "Leveraging digital consumer portals for swift case filing across District, State, and National Commissions." }
    ],
    proceduralStages: [
      { stage: "Stage 1: Statutory Legal Demand Notice", desc: "Giving the service provider 15-30 days to remedy the deficiency or face consumer litigation." },
      { stage: "Stage 2: Complaint Filing before Commission", desc: "Filing before District, State, or National Commission based on pecuniary jurisdiction." },
      { stage: "Stage 3: Evidence, Final Order & Execution", desc: "Adducing documentary evidence and enforcing compliance under execution provisions." }
    ],
    faqPool: [
      { question: "What is the pecuniary jurisdiction of consumer commissions?", answer: "District Commissions handle claims up to ₹50 Lakhs; State Commissions handle ₹50 Lakhs to ₹2 Crores; National Commission handles above ₹2 Crores." },
      { question: "Can I file a consumer complaint against real estate builders?", answer: "Yes, home buyers can file consumer cases for delayed project delivery, seeking full refunds with interest or possession with compensation." },
      { question: "What is the limitation period for filing a consumer complaint?", answer: "A consumer complaint must be filed within two years from the date on which the cause of action arose." }
    ]
  },
  "R.E.R.A": {
    statutoryBasis: "Governed under the Real Estate (Regulation and Development) Act, 2016 and State Real Estate Regulatory Rules.",
    statutoryHighlights: [
      { title: "Delay Compensation & Interest", desc: "Enforcing monthly delayed possession interest at the SBI highest marginal cost of funds lending rate plus 2%." },
      { title: "Complete Refund of Investment", desc: "Securing full refund of principal amounts with statutory interest where projects fail completion schedules." },
      { title: "Adjudication & Appellate Tribunal", desc: "Representing allottees before the Real Estate Appellate Tribunal (REAT) and executing recovery warrants." }
    ],
    proceduralStages: [
      { stage: "Stage 1: Documentation Audit & Conciliation", desc: "Scrutinizing builder-buyer agreements, payment receipts, and project construction milestone logs." },
      { stage: "Stage 2: Formal RERA Complaint Submission", desc: "Submitting digital applications before the State RERA Authority seeking relief under Section 18." },
      { stage: "Stage 3: Recovery Warrant Issuance", desc: "Securing recovery certificates directed to District Collectors for revenue-arrears attachment." }
    ],
    faqPool: [
      { question: "What can a homebuyer claim under Section 18 of RERA?", answer: "A buyer can claim either a full refund of all amounts paid with statutory interest, or monthly delay interest until physical possession is handed over." },
      { question: "How does RERA execute refund orders if a builder defaults?", answer: "RERA issues a formal Recovery Certificate (RC) to the District Collector to attach the builder bank accounts and properties as land revenue arrears." },
      { question: "Can a builder unilaterally alter approved building plans?", answer: "No, Section 14 of RERA strictly requires the written consent of two-thirds of all allottees before any major modification to approved layout plans." }
    ]
  }
};

const DEFAULT_CATEGORY = {
  statutoryBasis: "Governed under the relevant statutes of the Indian Legal System, supported by high court and supreme court precedents.",
  statutoryHighlights: [
    { title: "Comprehensive Legal Advisory", desc: "Analyzing regulatory requirements and framing actionable legal strategy." },
    { title: "Statutory Documentation & Compliance", desc: "Ensuring all drafting and filings adhere strictly to procedural mandates." },
    { title: "Litigation & Dispute Resolution", desc: "Offering representation before appropriate judicial and quasi-judicial tribunals." }
  ],
  proceduralStages: [
    { stage: "Stage 1: Case Review & Consultation", desc: "Thoroughly examining facts, documentation, and applicable statutes." },
    { stage: "Stage 2: Drafting & Statutory Filings", desc: "Preparing detailed pleadings, petitions, and evidence affidavits." },
    { stage: "Stage 3: Adjudication & Enforcement", desc: "Representing client interests in hearings to secure enforceable decrees." }
  ],
  faqPool: [
    { question: "What should I bring to an initial legal consultation?", answer: "Bring all relevant contracts, correspondence, notices, financial records, and official communications related to your matter." },
    { question: "How long does dispute resolution take?", answer: "Timelines depend on forum jurisdiction and whether an out-of-court negotiated settlement is feasible." },
    { question: "Can dispute be resolved without full-scale litigation?", answer: "Yes, skilled pre-litigation notices and formal mediation frequently achieve swift resolution without prolonged trials." }
  ]
};

export function getCategoryDetails(categoryName: string, itemName: string): ExpertiseDetails {
  const normCat = (categoryName || "").toUpperCase();
  const matched = Object.keys(CATEGORY_MAP).find(k => normCat.includes(k));
  const data = matched ? CATEGORY_MAP[matched] : DEFAULT_CATEGORY;
  const hash = hashSlug(`${categoryName}-${itemName}`);

  return {
    category: categoryName || "Legal Practice",
    item: itemName,
    statutoryBasis: data.statutoryBasis,
    statutoryHighlights: data.statutoryHighlights,
    proceduralStages: data.proceduralStages,
    faqs: data.faqPool
  };
}

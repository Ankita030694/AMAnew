import { hashSlug } from "./seo";

export type KeywordCluster = "criminal-procedure" | "cibil-credit" | "settlement-relief" | "harassment-complaint";

export interface ClusterData {
  cluster: KeywordCluster;
  badge: string;
  statutoryReference: string;
  legalAnalysis: string[];
  keyRules: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

export function getKeywordClusterData(keyword: string): ClusterData {
  const k = keyword.toLowerCase();

  let cluster: KeywordCluster = "settlement-relief";
  if (k.includes("bailable") || k.includes("punish") || k.includes("jail") || k.includes("cheque") || k.includes("bounce") || k.includes("section 25") || k.includes("fraud") || k.includes("police")) {
    cluster = "criminal-procedure";
  } else if (k.includes("cibil") || k.includes("score") || k.includes("suit filed") || k.includes("written off") || k.includes("dpd") || k.includes("overdue")) {
    cluster = "cibil-credit";
  } else if (k.includes("harass") || k.includes("recovery agent") || k.includes("complaint") || k.includes("manager") || k.includes("letter") || k.includes("agent")) {
    cluster = "harassment-complaint";
  }

  if (cluster === "criminal-procedure") {
    return {
      cluster,
      badge: "Criminal Procedure & Legal Defense",
      statutoryReference: "Governed under Section 138 Negotiable Instruments Act, Section 25 PSSA, and Bharatiya Nagarik Suraksha Sanhita (BNSS).",
      legalAnalysis: [
        `Issues concerning "${keyword}" frequently involve intersection between civil default and statutory quasi-criminal provisions. Under Indian law, pure monetary default on an unsecured loan is not a crime.`,
        `Criminal proceedings in banking disputes arise almost exclusively from dishonored payment instruments—such as post-dated cheques under Section 138 NI Act or automated NACH mandates under Section 25 PSSA. Both offenses are bailable and compoundable.`,
        `Our advocates examine the legal validity of statutory demand notices, challenge inflated claims, and defend borrowers before Judicial Magistrates while exploring mediated compromise settlements.`
      ],
      keyRules: [
        { title: "Bailable Statutory Offense", desc: "Cheque and NACH mandate bounces are bailable matters; immediate arrest without summons is prohibited." },
        { title: "Mandatory 15-Day Demand Notice", desc: "A creditor must serve a written 15-day statutory notice before initiating court complaints." },
        { title: "Compounding & Court Settlement", desc: "Offenses can be compounded at any stage of proceedings upon agreed compromise settlement." },
        { title: "Defense Against Security Cheques", desc: "Undated blank cheques presented without prior statement reconciliation can be contested." }
      ],
      faqs: [
        { question: `Can a default concerning "${keyword}" lead to immediate arrest?`, answer: "No. Defaulting on debt is a civil contract matter. Even in Section 138 NI Act or Section 25 PSSA cases, the court issues summons first, and the offense is bailable as a matter of right." },
        { question: "What is the limitation period to file a complaint after cheque bounce?", answer: "The complainant must issue a legal notice within 30 days of receiving the memo, give 15 days to pay, and file the court complaint within 30 days thereafter." },
        { question: "Can a criminal bounce case be settled out of court?", answer: "Yes. Section 147 of the NI Act allows compounding of offenses. Once the agreed settlement sum is paid, the complainant formally withdraws the case." },
        { question: "What should I do upon receiving a court summons?", answer: "Engage an advocate immediately to enter an appearance on the scheduled date, apply for regular bail, and seek mediation or quashing." },
        { question: "Is police inquiry permissible for unpaid personal loans?", answer: "No. Police stations have no legal jurisdiction to recover civil loans or summon borrowers without a registered cognizable FIR." }
      ]
    };
  }

  if (cluster === "cibil-credit") {
    return {
      cluster,
      badge: "Credit Bureau Law & CIBIL Defense",
      statutoryReference: "Governed under Credit Information Companies (Regulation) Act (CICRA), 2005 and RBI Credit Reporting Master Directions.",
      legalAnalysis: [
        `Questions regarding "${keyword}" reflect the critical importance of credit bureau scoring under the Credit Information Companies (Regulation) Act, 2005.`,
        `Reporting classifications such as "Settled", "Written-Off", or "Suit Filed" significantly alter a borrower credit rating and commercial eligibility. Credit bureaus are statutory repositories obligated to report verified financial facts accurately.`,
        `Our firm assists clients in auditing inaccurate CIBIL entries, contesting unauthorized credit inquiries, and obtaining definitive No Dues Certificates (NDCs) to mandate bureau status updates.`
      ],
      keyRules: [
        { title: "Statutory 30-Day Dispute Resolution", desc: "Under CICRA regulations, credit institutions must resolve recorded data disputes within 30 days." },
        { title: "No Dues Certificate (NDC) Mandate", desc: "Upon settlement payment, the lender must furnish an NDC and update bureau records within 30-45 days." },
        { title: "Suit Filed Database Deletion", desc: "Withdrawn or compromised civil proceedings must be formally expunged from the suit-filed registry." },
        { title: "Credit Score Rehabilitation Roadmap", desc: "Using secured credit cards and regular utility payments allows score recovery to 750+ in 18-24 months." }
      ],
      faqs: [
        { question: `How does "${keyword}" impact my CIBIL credit score?`, answer: "Reporting statuses reflect on your credit profile for up to 7 years. Resolving active defaults through formal settlement stops compounding balance accumulation and allows rebuilding." },
        { question: "What is the difference between Written-Off and Settled in CIBIL?", answer: "Written-Off indicates the bank absorbed the loss on its books; Settled proves both parties executed a mutual compromise with waivers. Settled is vastly superior for rebuilding credit." },
        { question: "Can a Suit Filed entry be removed from CIBIL?", answer: "Yes, once litigation is dismissed, withdrawn, or resolved through an OTS, the court order is submitted to the lender to update bureau records to Suit Withdrawn." },
        { question: "How can I raise a formal dispute with CIBIL?", answer: "Disputes are lodged through the online CIBIL Dispute Resolution portal with account statement evidence. If unresolved in 30 days, escalate to the RBI Ombudsman." },
        { question: "How long does it take to rebuild a credit score after settlement?", answer: "With a disciplined credit utilization under 30% and timely payments on secured credit cards, most borrowers reach a 750+ score within 18 to 24 months." }
      ]
    };
  }

  if (cluster === "harassment-complaint") {
    return {
      cluster,
      badge: "Anti-Harassment & Consumer Redressal",
      statutoryReference: "Governed under RBI Master Circular on Fair Practices Code, Section 351 BNS (Criminal Intimidation), and Consumer Protection Act.",
      legalAnalysis: [
        `Addressing issues around "${keyword}" requires immediate, structured escalation against unauthorized collection agency practices.`,
        `The Reserve Bank of India has repeatedly held that recovery cannot supersede citizen fundamental rights to dignity and privacy under Article 21 of the Constitution. Coercive tele-calling, unannounced doorstep visits, and third-party shaming are actionable crimes.`,
        `We issue formal Corporate Cease & Desist notices to bank compliance heads, petition local police cyber authorities, and file complaints before the Banking Ombudsman.`
      ],
      keyRules: [
        { title: "Strict Calling Windows (8 AM - 7 PM)", desc: "Calls outside permitted hours constitute statutory harassment per se." },
        { title: "Vicarious Corporate Liability", desc: "Lending institutions are directly liable for any civil wrong or criminal act by their recovery agents." },
        { title: "Zero Third-Party Communication", desc: "Agents cannot contact your employer, coworkers, friends, or family regarding personal debt." },
        { title: "Admissibility of Call Records", desc: "Audio recordings of abusive collection calls are admissible electronic evidence under Section 63 BSA." }
      ],
      faqs: [
        { question: `How do I handle issues regarding "${keyword}"?`, answer: "Document all abusive phone calls and messages methodically, refuse to deal with unverified agents, and issue a formal lawyer Cease & Desist notice to the bank corporate desk." },
        { question: "Can recovery agents visit my office or talk to my manager?", answer: "No. Third-party disclosure constitutes criminal defamation under Section 356 BNS and severe violation of RBI Fair Practice Codes." },
        { question: "What should I do if an agent threatens physical harm?", answer: "Immediately dial emergency police (112), record the interaction, and file a written complaint under BNS Section 351 (Criminal Intimidation)." },
        { question: "How do I lodge a complaint with the RBI Banking Ombudsman?", answer: "Register a complaint online through the RBI Complaint Management System (CMS) with supporting call recordings, bank notices, and emails." },
        { question: "Can hiring AMA Legal Solutions stop recovery calls?", answer: "Yes. Once we issue a formal Notice of Representation, the bank is legally required to route all future communications through our legal chambers." }
      ]
    };
  }

  // Default: settlement-relief
  return {
    cluster,
    badge: "Debt Settlement & Banking Relief",
    statutoryReference: "Governed under RBI Master Directions on Prudential Framework, OTS Schemes, and Indian Contract Act.",
    legalAnalysis: [
      `Understanding "${keyword}" is essential for borrowers navigating financial distress and debt restructuring under Indian banking law.`,
      `A One Time Settlement (OTS) offers an honorable exit from spiraling interest burdens. When genuine hardship is demonstrated through comprehensive financial documentation, lenders are incentivized to approve substantial waivers.`,
      `Our advocates review debt ledgers, challenge inflated late fees, and negotiate directly with bank compromise committees to secure legally binding No Dues Certificates.`
    ],
    keyRules: [
      { title: "Substantial Principal Haircuts", desc: "Hardship-backed OTS negotiations routinely secure 40% to 75% reductions on total claimed arrears." },
      { title: "100% Penal Interest Waiver", desc: "All accumulated late fees, bounce charges, and compounding penalties are removed from the ledger." },
      { title: "Authentic Sanction Letter", desc: "Settlements are finalized exclusively upon receipt of verified letters on official bank letterhead." },
      { title: "Permanent Account Closure", desc: "Full settlement payment mandates issuance of an NDC and cessation of all pending recovery actions." }
    ],
    faqs: [
      { question: `How does "${keyword}" relate to loan settlement in India?`, answer: "It forms part of the broader legal landscape of debt restructuring, where borrowers negotiate compromised closures under RBI guidelines to achieve debt freedom." },
      { question: "What are the eligibility criteria for an OTS?", answer: "A borrower must demonstrate genuine, verifiable financial hardship—such as job loss, medical emergency, or business failure—and possess a loan default exceeding 90 days." },
      { question: "Can credit card debt be settled under an OTS?", answer: "Yes. Unsecured credit card balances with 36-45% compound finance charges are among the most frequently and successfully settled debts." },
      { question: "What documents are required to initiate debt settlement?", answer: "Account statements, KYC documents, income disruption proof (ITR, salary slips, or termination letter), and recent banking statements." },
      { question: "Why should I engage an advocate rather than a settlement agency?", answer: "Law firms have legal standing to represent you in court, defend against statutory summons, and ensure all settlement documentation is legally watertight." }
    ]
  };
}

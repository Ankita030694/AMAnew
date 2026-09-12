/**
 * SEO metadata utilities for title, description, and H1 optimization.
 * Ensures titles strictly fit within 30-60 characters and descriptions within 120-155 characters.
 * Implements deterministic slug-hash variation to eliminate duplicate content warnings across pSEO routes.
 */

/**
 * Fast 32-bit deterministic integer hash for rotating templates based on URL slug.
 */
export function hashSlug(slug: string): number {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    const char = slug.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return Math.abs(hash);
}

/**
 * Truncates an entity (service, bank, city, or expertise name) cleanly at a whole word boundary.
 */
export function truncateEntity(name: string, maxLen = 35): string {
  if (!name || name.length <= maxLen) return name || "";
  const sliced = name.slice(0, maxLen).trim();
  const lastSpace = sliced.lastIndexOf(" ");
  if (lastSpace > 0) {
    return sliced.slice(0, lastSpace).trim();
  }
  return sliced;
}

/**
 * Formats a meta title to strictly fit within maxLen (default 60 characters)
 * and ensure it is not shorter than minLen (default 30 characters).
 */
export function formatMetaTitle(
  subject: string,
  preferredSuffix = " | AMA Legal",
  maxLen = 60,
  minLen = 30
): string {
  const cleanSubject = subject.replace(/\s+/g, " ").trim();
  let full = `${cleanSubject}${preferredSuffix}`;

  // If already contains brand or preferred suffix
  if (cleanSubject.includes("AMA")) {
    full = cleanSubject;
  }

  // If too short, expand with the full brand suffix if it fits
  if (full.length < minLen) {
    const longerSuffix = " | AMA Legal Solutions";
    if (`${cleanSubject}${longerSuffix}`.length <= maxLen) {
      full = `${cleanSubject}${longerSuffix}`;
    } else {
      full = `${cleanSubject} - Legal Assistance`;
    }
  }

  if (full.length <= maxLen) {
    return full;
  }

  // Need to trim subject to fit within maxLen
  const targetLen = cleanSubject.includes("AMA") ? maxLen : maxLen - preferredSuffix.length;
  const trimmed = truncateEntity(cleanSubject, targetLen);
  return cleanSubject.includes("AMA") ? trimmed : `${trimmed}${preferredSuffix}`;
}

/**
 * Formats or clamps a meta description to stay strictly within 120-155 characters.
 */
export function formatMetaDescription(text: string, maxLen = 155, minLen = 120): string {
  let clean = text.replace(/\s+/g, " ").trim();
  if (clean.length > maxLen) {
    const sliced = clean.slice(0, maxLen - 1).trim();
    const lastSpace = sliced.lastIndexOf(" ");
    const truncated = lastSpace > 0 ? sliced.slice(0, lastSpace).trim() : sliced;
    clean = truncated.replace(/[,;:\s-]+$/, "") + ".";
  }

  if (clean.length < minLen) {
    clean = clean.replace(/\.$/, "") + " Contact AMA Legal Solutions today.";
  }

  return clean;
}

/**
 * Diversified SEO generator for services (e.g., loan-settlement-services/[slug])
 */
export function getServiceSEO(serviceName: string, slug: string) {
  const clean = truncateEntity(serviceName, 23);
  const h = hashSlug(slug);

  const titles = [
    `${clean} | AMA Legal Solutions`,
    `Top ${clean} in India | AMA Legal`,
    `Expert ${clean} | AMA Legal Solutions`,
    `${clean} - Legal Aid & Solutions`,
    `Hire ${clean} | AMA Legal Solutions`,
    `${clean}: Expert Legal Support`
  ];

  const descs = [
    `Legal help for ${clean}. Stop unlawful recovery harassment, assert your borrower rights, and settle bank debt with AMA Legal Solutions.`,
    `Expert ${clean} in India. We negotiate directly with lenders to secure maximum waivers and formal One-Time Settlement closure.`,
    `Facing bank notices for ${clean}? Get experienced defense against Section 138, DRT summons, and arbitration with AMA Legal Solutions.`,
    `Struggling with debt? Professional ${clean} to protect your assets, challenge illegal bank action, and achieve fair financial settlement.`,
    `Resolve debt peacefully with ${clean}. Our advocates leverage RBI rules to stop harassment and negotiate sustainable loan settlements.`,
    `Consult top banking lawyers for ${clean}. We provide nationwide legal defense, debt restructuring, and No Dues Certificate procurement.`,
    `Complete legal support for ${clean}. Safeguard your family against recovery agents and resolve bank disputes with AMA Legal Solutions.`,
    `Get legal protection and debt relief with ${clean}. Our advocates represent you before lenders and Lok Adalat for full loan closure.`
  ];

  const h1s = [
    `${serviceName} in India`,
    `Expert ${serviceName}`,
    `Legal Representation for ${serviceName}`,
    `${serviceName}: Professional Legal Guidance`
  ];

  return {
    title: formatMetaTitle(titles[h % titles.length]),
    description: formatMetaDescription(descs[(h >> 3) % descs.length]),
    h1: h1s[(h >> 6) % h1s.length]
  };
}

/**
 * Diversified SEO generator for city/location pages (e.g., lawyer-by-city, personal-loan-settlement, credit-card-settlement)
 */
export function getCitySEO(cityName: string, slug: string, service = "Loan Settlement") {
  const clean = truncateEntity(cityName, 22);
  const h = hashSlug(slug);

  const titles = [
    `${service} in ${clean} | AMA Legal`,
    `Top ${service} Lawyers in ${clean} - AMA`,
    `${clean} ${service} | Expert Advocates`,
    `Best ${service} Services in ${clean} | AMA`,
    `Settle Loans in ${clean} | AMA Legal Help`,
    `${service} Advocates in ${clean} | AMA`
  ];

  const descs = [
    `Trusted ${service.toLowerCase()} lawyers in ${clean}. Stop recovery harassment under RBI guidelines and settle bank loans legally with AMA Legal Solutions.`,
    `Struggling with debts in ${clean}? Our experienced advocates negotiate maximum OTS waivers directly with banks for complete legal debt relief.`,
    `Facing legal notices in ${clean}? Get expert defense against Section 138, DRT, and bank summons while settling loans with AMA Legal Solutions.`,
    `Professional ${service.toLowerCase()} services in ${clean}. Protect your assets, counter unlawful collection tactics, and secure your No Dues Certificate.`,
    `Resolve unpaid EMIs in ${clean} peacefully. Seasoned banking lawyers provide legal representation, debt restructuring, and full loan settlement.`,
    `Top-rated ${service.toLowerCase()} advocates in ${clean}. Assert your borrower rights, prevent legal escalation, and rebuild your financial future.`,
    `Need debt relief in ${clean}? AMA Legal Solutions negotiates fair one-time settlements with banks and NBFCs with complete legal documentation.`,
    `Comprehensive debt resolution in ${clean}. Shield yourself from collection calls, resolve disputes, and close loans with AMA Legal Solutions.`
  ];

  const h1s = [
    `${service} Lawyers in ${cityName}`,
    `Top ${service} Services in ${cityName}`,
    `Legal ${service} in ${cityName}`,
    `${service} Advocates & Legal Help in ${cityName}`
  ];

  return {
    title: formatMetaTitle(titles[h % titles.length]),
    description: formatMetaDescription(descs[(h >> 3) % descs.length]),
    h1: h1s[(h >> 6) % h1s.length]
  };
}

/**
 * Diversified SEO generator for recovery agent harassment (bank or city)
 */
export function getHarassmentSEO(entity: string, slug: string, isBank = false) {
  const clean = truncateEntity(entity, 22);
  const h = hashSlug(slug);

  if (isBank) {
    const titles = [
      `Stop ${clean} Harassment | AMA Legal`,
      `${clean} Recovery Harassment - Legal Aid`,
      `Legal Action Against ${clean} - AMA`,
      `${clean} Agent Harassment | Legal Defense`,
      `Fight ${clean} Harassment | AMA Legal`,
      `${clean} Loan Recovery Complaints | AMA`
    ];

    const descs = [
      `Facing harassment from ${clean} recovery agents? File a legal complaint under RBI guidelines and stop abusive collection calls with AMA Legal.`,
      `Protect your legal rights against ${clean} recovery agents. Our advocates take strict action against illegal harassment and privacy violations.`,
      `Is ${clean} harassing you for loan recovery? Get immediate legal intervention, police complaint assistance, and RBI ombudsman representation.`,
      `Stop illegal recovery tactics by ${clean}. Our senior advocates issue legal notices, challenge unfair collection, and protect your peace of mind.`,
      `Harassed by ${clean} debt collectors? Consult experienced lawyers to assert RBI fair practice code and stop intimidation legally today.`,
      `Legal defense against ${clean} recovery misconduct. We take decisive legal action to halt agent visits and resolve debts peacefully.`,
      `End abusive collection calls from ${clean}. Experienced advocates represent you before banking ombudsman and secure complete legal protection.`,
      `Take legal action against ${clean} recovery agents. AMA Legal Solutions protects borrowers from harassment, threats, and defamatory visits.`
    ];

    const h1s = [
      `Stop ${entity} Recovery Agent Harassment`,
      `Legal Action Against ${entity} Recovery Agents`,
      `Complaint Against ${entity} Harassment`,
      `Protection Against ${entity} Debt Collection`
    ];

    return {
      title: formatMetaTitle(titles[h % titles.length]),
      description: formatMetaDescription(descs[(h >> 3) % descs.length]),
      h1: h1s[(h >> 6) % h1s.length]
    };
  }

  const titles = [
    `Recovery Harassment in ${clean} | AMA Legal`,
    `Stop Recovery Harassment in ${clean} - AMA`,
    `Legal Help for Harassment in ${clean} | AMA`,
    `Harassment Complaint in ${clean} | Legal Aid`,
    `Fight Loan Harassment in ${clean} | AMA`,
    `Anti-Harassment Lawyers in ${clean} | AMA`
  ];

  const descs = [
    `Facing recovery agent harassment in ${clean}? Stop abusive calls and home visits under RBI fair practice guidelines with AMA Legal Solutions.`,
    `Protect yourself from illegal debt recovery in ${clean}. Our seasoned advocates issue legal notices, file complaints, and safeguard your rights.`,
    `Are loan recovery agents threatening you in ${clean}? Get immediate legal protection, police complaint support, and RBI escalation with AMA.`,
    `Stop unlawful recovery tactics in ${clean}. Our lawyers take prompt legal action to halt harassment and negotiate legitimate debt settlement.`,
    `Experienced anti-harassment advocates in ${clean}. Defend your dignity and peace of mind against aggressive collection agents legally.`,
    `Legal remedy against loan agent harassment in ${clean}. We represent borrowers against illegal collection practices and secure civil stay.`,
    `Put an end to debt collection harassment in ${clean}. Our legal experts enforce RBI borrower rights and resolve bank disputes peacefully.`,
    `Facing recovery threats in ${clean}? AMA Legal Solutions provides robust legal representation to stop agent intimidation immediately.`
  ];

  const h1s = [
    `Stop Recovery Agent Harassment in ${entity}`,
    `Legal Help Against Recovery Harassment in ${entity}`,
    `Complaint Against Recovery Agents in ${entity}`,
    `Protection from Loan Agent Harassment in ${entity}`
  ];

  return {
    title: formatMetaTitle(titles[h % titles.length]),
    description: formatMetaDescription(descs[(h >> 3) % descs.length]),
    h1: h1s[(h >> 6) % h1s.length]
  };
}

/**
 * Diversified SEO generator for bank + city harassment combinations
 */
export function getBankCityHarassmentSEO(bankName: string, cityName: string, slug: string, citySlug: string) {
  const cleanBank = truncateEntity(bankName, 16);
  const cleanCity = truncateEntity(cityName, 16);
  const h = hashSlug(`${slug}-${citySlug}`);

  const titles = [
    `Stop ${cleanBank} Harassment in ${cleanCity} | AMA`,
    `${cleanBank} Recovery Harassment in ${cleanCity} - Legal`,
    `Fight ${cleanBank} Harassment in ${cleanCity} | AMA Legal`,
    `${cleanBank} Collection Complaints in ${cleanCity} | AMA`,
    `Anti-Harassment Lawyers: ${cleanBank} in ${cleanCity}`,
    `Stop ${cleanBank} Agents in ${cleanCity} | AMA Legal`
  ];

  const descs = [
    `Facing ${cleanBank} recovery agent harassment in ${cleanCity}? Stop unlawful calls and home visits under RBI rules with AMA Legal Solutions.`,
    `Protect your legal rights against ${cleanBank} recovery agents in ${cleanCity}. Our seasoned lawyers take decisive action against debt intimidation.`,
    `Harassed by ${cleanBank} debt collectors in ${cleanCity}? Get immediate legal representation, police complaint support, and RBI escalation.`,
    `Stop illegal recovery practices by ${cleanBank} in ${cleanCity}. Our senior advocates issue legal notices and defend your peace of mind.`,
    `Take legal action against ${cleanBank} recovery agents in ${cleanCity}. We protect borrower rights, enforce RBI fair practices, and stop threats.`,
    `Legal protection from ${cleanBank} recovery harassment in ${cleanCity}. Consult experienced banking advocates to resolve loan disputes safely.`,
    `Put an end to abusive calls from ${cleanBank} in ${cleanCity}. Experienced lawyers enforce RBI borrower guidelines and halt agent misconduct.`,
    `Need legal defense against ${cleanBank} agents in ${cleanCity}? AMA Legal Solutions halts aggressive recovery and assists in legitimate loan settlement.`
  ];

  const h1s = [
    `Stop ${bankName} Recovery Agent Harassment in ${cityName}`,
    `Legal Help: ${bankName} Harassment in ${cityName}`,
    `${bankName} Collection Complaint in ${cityName}`,
    `Anti-Harassment Protection for ${bankName} in ${cityName}`
  ];

  return {
    title: formatMetaTitle(titles[h % titles.length]),
    description: formatMetaDescription(descs[(h >> 3) % descs.length]),
    h1: h1s[(h >> 6) % h1s.length]
  };
}

/**
 * Diversified SEO generator for bank loan settlement
 */
export function getBankSettlementSEO(bankName: string, slug: string) {
  const cleanBank = truncateEntity(bankName, 22);
  const h = hashSlug(slug);

  const titles = [
    `${cleanBank} Loan Settlement | AMA Legal Solutions`,
    `Settle ${cleanBank} Loans | Top Lawyers in India`,
    `${cleanBank} Debt Settlement - Expert Legal Aid`,
    `Best Advocates for ${cleanBank} Settlement - AMA`,
    `Resolve ${cleanBank} Loan Debt | AMA Legal`,
    `${cleanBank} One Time Settlement (OTS) Lawyers`
  ];

  const descs = [
    `Legal loan settlement for ${cleanBank}. Settle personal loans and credit cards with maximum waivers and RBI compliance through AMA Legal Solutions.`,
    `Struggling with ${cleanBank} loan EMIs? Our experienced advocates negotiate directly with the bank for One-Time Settlement (OTS) debt relief.`,
    `Facing legal notices from ${cleanBank}? Get expert defense against Section 138, arbitration, and DRT summons while settling your loan peacefully.`,
    `Professional ${cleanBank} loan settlement services in India. Stop recovery agent harassment, protect your assets, and secure your No Dues Certificate.`,
    `Resolve your ${cleanBank} outstanding debt with legal backing. We help borrowers secure maximum waivers and formal closure without harassment.`,
    `Experienced banking advocates for ${cleanBank} settlements. Assert your borrower rights, prevent asset attachment, and rebuild your financial future.`,
    `Need debt relief for ${cleanBank} loans? AMA Legal Solutions negotiates fair one-time settlements with complete legal transparency and documentation.`,
    `Comprehensive debt resolution for ${cleanBank} borrowers. End collection calls, challenge irregular interest, and settle loans with AMA Legal.`
  ];

  const h1s = [
    `${bankName} Loan Settlement Services in India`,
    `Legal Loan Settlement for ${bankName}`,
    `${bankName} Debt Settlement & Legal Aid`,
    `Professional ${bankName} Loan Settlement Representation`
  ];

  return {
    title: formatMetaTitle(titles[h % titles.length]),
    description: formatMetaDescription(descs[(h >> 3) % descs.length]),
    h1: h1s[(h >> 6) % h1s.length]
  };
}

/**
 * Diversified SEO generator for legal expertise practice areas
 */
export function getExpertiseSEO(expertiseName: string, slug: string) {
  const cleanExp = truncateEntity(expertiseName, 22);
  const h = hashSlug(slug);

  const titles = [
    `${cleanExp} Lawyers in India | AMA Legal`,
    `Top ${cleanExp} Advocates - AMA Legal Solutions`,
    `Best ${cleanExp} Legal Help | AMA Legal`,
    `Hire ${cleanExp} Lawyers | AMA Legal Solutions`,
    `${cleanExp} Law Firm in India | AMA Legal`,
    `Expert ${cleanExp} Advocates | AMA Legal Solutions`
  ];

  const descs = [
    `Consult top-rated ${cleanExp.toLowerCase()} lawyers in India. AMA Legal Solutions provides expert legal counsel, litigation defense, and dispute resolution.`,
    `Looking for experienced ${cleanExp.toLowerCase()} advocates? Get dedicated legal guidance, document drafting, and courtroom representation nationwide.`,
    `Professional ${cleanExp.toLowerCase()} legal services in India. Our seasoned lawyers protect your rights and represent you across all judicial forums.`,
    `Need legal assistance in ${cleanExp.toLowerCase()}? AMA Legal Solutions offers strategic advisory, arbitration, and robust litigation representation.`,
    `Trusted ${cleanExp.toLowerCase()} advocates in India. We represent individuals and corporations with meticulous legal strategy and proven expertise.`,
    `Specialized ${cleanExp.toLowerCase()} legal counsel. Protect your interests and resolve complex disputes with senior advocates at AMA Legal Solutions.`,
    `Leading law firm for ${cleanExp.toLowerCase()} in India. Contact our senior lawyers today for comprehensive legal evaluation and dispute resolution.`,
    `Expert advocates specializing in ${cleanExp.toLowerCase()}. Get strategic representation before High Courts, District Courts, and national tribunals.`
  ];

  const h1s = [
    `${expertiseName} Lawyers & Legal Services in India`,
    `Expert ${expertiseName} Advocates in India`,
    `${expertiseName} Legal Consultation & Representation`,
    `Leading ${expertiseName} Law Firm in India`
  ];

  return {
    title: formatMetaTitle(titles[h % titles.length]),
    description: formatMetaDescription(descs[(h >> 3) % descs.length]),
    h1: h1s[(h >> 6) % h1s.length]
  };
}

/**
 * Diversified SEO generator for bank + state settlement (personal loan & credit card settlement)
 */
export function getBankStateSettlementSEO(
  bankName: string,
  stateName: string,
  slug: string,
  stateSlug: string,
  isCard = false
) {
  const cleanBank = truncateEntity(bankName, 18);
  const cleanState = truncateEntity(stateName, 16);
  const h = hashSlug(`${slug}-${stateSlug}`);
  const itemType = isCard ? "Credit Card" : "Personal Loan";

  const titles = [
    `${cleanBank} Settlement in ${cleanState} | AMA Legal`,
    `Settle ${cleanBank} ${itemType} in ${cleanState}`,
    `${cleanBank} ${itemType} Relief in ${cleanState} - AMA`,
    `${cleanBank} Loan Lawyers in ${cleanState} | AMA`,
    `OTS ${cleanBank} Settlement in ${cleanState} | AMA`,
    `Close ${cleanBank} Debt in ${cleanState} | AMA Legal`
  ];

  const descs = [
    `Settle ${cleanBank} ${itemType.toLowerCase()}s in ${cleanState}. Stop recovery harassment, resolve default legally, and get an NOC with AMA Legal Solutions.`,
    `Struggling with ${cleanBank} debt in ${cleanState}? Our senior advocates negotiate maximum OTS waivers directly with the bank for legal loan closure.`,
    `Facing legal action from ${cleanBank} in ${cleanState}? Get expert defense against Section 138 and arbitration summons while settling loans safely.`,
    `Professional ${cleanBank} debt settlement across ${cleanState}. Protect your assets, stop unlawful collection calls, and secure your No Dues Certificate.`,
    `Resolve your ${cleanBank} ${itemType.toLowerCase()} default in ${cleanState}. Seasoned banking lawyers negotiate sustainable settlements with full legal backing.`,
    `Experienced loan settlement lawyers for ${cleanBank} in ${cleanState}. Assert your borrower rights, prevent legal escalation, and rebuild credit.`,
    `Need debt relief for ${cleanBank} loans in ${cleanState}? AMA Legal Solutions negotiates fair one-time settlements with complete legal documentation.`,
    `End collection harassment for ${cleanBank} loans in ${cleanState}. Consult senior banking advocates to achieve full legal settlement and NOC.`
  ];

  const h1s = [
    `${bankName} ${itemType} Settlement in ${stateName}`,
    `Settle ${bankName} Debt in ${stateName}`,
    `Legal Relief for ${bankName} ${itemType} in ${stateName}`,
    `${bankName} Settlement Lawyers in ${stateName}`
  ];

  return {
    title: formatMetaTitle(titles[h % titles.length]),
    description: formatMetaDescription(descs[(h >> 3) % descs.length]),
    h1: h1s[(h >> 6) % h1s.length]
  };
}

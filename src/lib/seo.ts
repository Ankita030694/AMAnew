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
  if (!name || name.length <= maxLen) return (name || "").replace(/[\s|:,-]+$/, "");
  const sliced = name.slice(0, maxLen).trim();
  const lastSpace = sliced.lastIndexOf(" ");
  const truncated = lastSpace > 0 ? sliced.slice(0, lastSpace).trim() : sliced;
  return truncated.replace(/[\s|:,-]+$/, "");
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

  // If the subject alone is already within [minLen, maxLen] and has brand/delimiter
  if (
    cleanSubject.length >= minLen &&
    cleanSubject.length <= maxLen &&
    (cleanSubject.includes("AMA") || cleanSubject.includes("|") || cleanSubject.includes(" - ") || !preferredSuffix)
  ) {
    return cleanSubject;
  }

  // Remove existing partial brand suffix if present to re-expand cleanly
  const strippedSubject = cleanSubject.replace(/\s*\|\s*AMA(\s*Legal)?.*$/i, "").replace(/\s*-\s*AMA.*$/i, "").trim();

  let full = `${strippedSubject}${preferredSuffix}`;

  // If too short, expand with the full brand suffix
  if (full.length < minLen) {
    const longerSuffix = " | AMA Legal Solutions";
    if (`${strippedSubject}${longerSuffix}`.length <= maxLen) {
      full = `${strippedSubject}${longerSuffix}`;
    } else {
      full = `${strippedSubject} - Legal Solutions`;
    }
  }

  if (full.length <= maxLen && full.length >= minLen) {
    return full;
  }

  if (full.length > maxLen) {
    const targetLen = maxLen - preferredSuffix.length;
    const trimmed = truncateEntity(strippedSubject, targetLen);
    return `${trimmed}${preferredSuffix}`;
  }

  return full;
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
    const filler = " Consult seasoned advocates at AMA Legal Solutions for dedicated legal representation and debt resolution across India.";
    const combined = clean.replace(/\.$/, "") + "." + filler;
    if (combined.length <= maxLen && combined.length >= minLen) {
      clean = combined;
    } else if (combined.length > maxLen) {
      const sliced = combined.slice(0, maxLen - 1).trim();
      const lastSpace = sliced.lastIndexOf(" ");
      clean = (lastSpace >= minLen ? sliced.slice(0, lastSpace) : sliced).replace(/[,;:\s-]+$/, "") + ".";
    }
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
export function getBankSettlementSEO(
  bankName: string,
  slug: string,
  serviceType = "Personal Loan"
) {
  const cleanBank = truncateEntity(bankName, 20);
  const isCard = serviceType.toLowerCase().includes("credit card");
  const isBank = serviceType.toLowerCase() === "bank" || serviceType.toLowerCase() === "loan settlement";
  const itemLabel = isCard ? "Credit Card" : isBank ? "Loan" : "Personal Loan";
  const h = hashSlug(`${itemLabel.toLowerCase()}-${slug}`);

  const titles = isCard ? [
    `${cleanBank} Credit Card Settlement | AMA Legal`,
    `Settle ${cleanBank} Credit Card Debt - AMA`,
    `${cleanBank} Credit Card Relief | Expert Lawyers`,
    `Best Advocates for ${cleanBank} Card Settlement`,
    `Resolve ${cleanBank} Card Dues | AMA Legal`,
    `${cleanBank} Credit Card OTS Scheme | AMA`
  ] : isBank ? [
    `${cleanBank} Loan Settlement | AMA Legal Solutions`,
    `Settle ${cleanBank} Loans | Top Lawyers in India`,
    `${cleanBank} Debt Settlement - Expert Legal Aid`,
    `Best Advocates for ${cleanBank} Settlement - AMA`,
    `Resolve ${cleanBank} Loan Debt | AMA Legal`,
    `${cleanBank} One Time Settlement (OTS) Lawyers`
  ] : [
    `${cleanBank} Personal Loan Settlement | AMA`,
    `Settle ${cleanBank} Personal Loan Debt - Legal`,
    `${cleanBank} Personal Loan Relief | AMA Lawyers`,
    `Top Lawyers for ${cleanBank} Personal Loan OTS`,
    `Resolve ${cleanBank} Personal Loan | AMA Legal`,
    `${cleanBank} Personal Loan Default Settlement`
  ];

  const descs = isCard ? [
    `Legal credit card settlement for ${cleanBank}. Resolve outstanding dues, stop harassment, and eliminate late fees with AMA Legal Solutions advocates.`,
    `Struggling with ${cleanBank} credit card interest traps? Senior banking advocates negotiate One-Time Settlement (OTS) waivers up to 50-70% legally.`,
    `Facing collection calls for unpaid ${cleanBank} credit cards? Secure legal protection, prevent escalation, and settle directly with AMA Legal.`,
    `Professional ${cleanBank} credit card debt settlement in India. End agent intimidation, assert RBI borrower guidelines, and obtain official NOC.`,
    `Resolve ${cleanBank} credit card defaults with full legal backing. Seasoned advocates negotiate lump-sum OTS closures directly with the bank.`,
    `Legal defense and settlement for ${cleanBank} cards. Challenge compound finance charges and negotiate fair closure with AMA Legal Solutions.`
  ] : isBank ? [
    `Legal loan settlement for ${cleanBank}. Settle personal loans and credit cards with maximum waivers and RBI compliance through AMA Legal Solutions.`,
    `Struggling with ${cleanBank} loan EMIs? Our experienced advocates negotiate directly with the bank for One-Time Settlement (OTS) debt relief.`,
    `Facing legal notices from ${cleanBank}? Get expert defense against Section 138, arbitration, and DRT summons while settling your loan peacefully.`,
    `Professional ${cleanBank} loan settlement services in India. Stop recovery agent harassment, protect your assets, and secure your No Dues Certificate.`,
    `Resolve your ${cleanBank} outstanding debt with legal backing. We help borrowers secure maximum waivers and formal closure without harassment.`,
    `Experienced banking advocates for ${cleanBank} settlements. Assert your borrower rights, prevent asset attachment, and rebuild your financial future.`
  ] : [
    `Expert legal settlement for ${cleanBank} personal loans. Negotiate substantial OTS principal waivers and stop agent harassment with AMA Legal.`,
    `Unable to pay ${cleanBank} personal loan EMIs? Our senior advocates negotiate directly with bank nodal officers for legal loan closure.`,
    `Received legal or arbitration notice from ${cleanBank} for personal loan? Protect your rights with expert counter-notices and debt resolution.`,
    `Professional ${cleanBank} personal loan settlement services across India. Settle delinquent accounts legally and obtain an official No Dues Certificate.`,
    `Resolve high-interest ${cleanBank} personal loans through structured OTS. Experienced banking lawyers represent you for maximum waiver.`,
    `Defend against aggressive recovery for ${cleanBank} personal loans. We enforce RBI guidelines and achieve complete legal debt settlement.`
  ];

  const h1s = isCard ? [
    `${bankName} Credit Card Settlement Services in India`,
    `Legal Credit Card Settlement for ${bankName}`,
    `${bankName} Credit Card Debt Settlement & Legal Relief`,
    `Professional ${bankName} Credit Card Settlement Advocates`
  ] : isBank ? [
    `${bankName} Loan Settlement Services in India`,
    `Legal Loan Settlement for ${bankName}`,
    `${bankName} Debt Settlement & Legal Aid`,
    `Professional ${bankName} Loan Settlement Representation`
  ] : [
    `${bankName} Personal Loan Settlement Services in India`,
    `Legal Personal Loan Settlement for ${bankName}`,
    `${bankName} Personal Loan Debt Relief & Legal Aid`,
    `Professional ${bankName} Personal Loan Settlement Representation`
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
  const h = hashSlug(`${isCard ? "card" : "loan"}-${slug}-${stateSlug}`);
  const itemType = isCard ? "Credit Card" : "Personal Loan";

  const titles = [
    `${cleanBank} ${itemType} Settlement in ${cleanState} | AMA`,
    `Settle ${cleanBank} ${itemType} in ${cleanState} - Legal`,
    `${cleanBank} ${itemType} Relief in ${cleanState} | AMA Legal`,
    `${cleanBank} ${itemType} Lawyers in ${cleanState} | AMA`,
    `OTS ${cleanBank} ${itemType} in ${cleanState} | AMA Legal`,
    `Close ${cleanBank} ${itemType} Debt in ${cleanState} | AMA`
  ];

  const descs = [
    `Settle ${cleanBank} ${itemType.toLowerCase()}s in ${cleanState}. Stop recovery harassment, resolve default legally, and get an NOC with AMA Legal Solutions.`,
    `Struggling with ${cleanBank} ${itemType.toLowerCase()} debt in ${cleanState}? Our senior advocates negotiate maximum OTS waivers directly with the bank.`,
    `Facing legal action from ${cleanBank} for ${itemType.toLowerCase()} in ${cleanState}? Get expert defense against notices while settling debt safely.`,
    `Professional ${cleanBank} ${itemType.toLowerCase()} settlement across ${cleanState}. Protect your assets, stop unlawful calls, and secure your NOC.`,
    `Resolve your ${cleanBank} ${itemType.toLowerCase()} default in ${cleanState}. Seasoned banking lawyers negotiate sustainable settlements legally.`,
    `Experienced ${itemType.toLowerCase()} settlement lawyers for ${cleanBank} in ${cleanState}. Assert your borrower rights and rebuild credit.`,
    `Need debt relief for ${cleanBank} ${itemType.toLowerCase()} in ${cleanState}? AMA Legal Solutions negotiates fair OTS with complete legal documentation.`,
    `End collection harassment for ${cleanBank} ${itemType.toLowerCase()} in ${cleanState}. Consult senior banking advocates to achieve full legal closure.`
  ];

  const h1s = [
    `${bankName} ${itemType} Settlement in ${stateName}`,
    `Settle ${bankName} ${itemType} Debt in ${stateName}`,
    `Legal Relief for ${bankName} ${itemType} in ${stateName}`,
    `${bankName} ${itemType} Settlement Lawyers in ${stateName}`
  ];

  return {
    title: formatMetaTitle(titles[h % titles.length]),
    description: formatMetaDescription(descs[(h >> 3) % descs.length]),
    h1: h1s[(h >> 6) % h1s.length]
  };
}

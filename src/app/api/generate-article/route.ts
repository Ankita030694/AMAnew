import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { adminDb } from '../../../lib/firebase-admin';

// Models configured with cost-optimized tiered strategy
const MODEL_HEAVY = process.env.OPENAI_MODEL_HEAVY || 'gpt-4o';
const MODEL_LIGHT = process.env.OPENAI_MODEL_LIGHT || 'gpt-4o-mini';

// Core static service & key landing page directory for reliable interlinking
const CORE_SITE_LINKS = [
    { url: '/services/loan-settlement', title: 'Loan Settlement Services', keywords: ['loan settlement services', 'loan settlement', 'settle loans', 'debt settlement'] },
    { url: '/services/banking-and-finance', title: 'Banking and Finance Law', keywords: ['banking and finance', 'banking lawyer', 'banking law firm'] },
    { url: '/services/debt-consolidation', title: 'Debt Consolidation & Restructuring', keywords: ['debt consolidation', 'debt restructuring', 'debt relief'] },
    { url: '/services/civil', title: 'Civil Litigation and Disputes', keywords: ['civil litigation', 'civil dispute', 'civil lawyer'] },
    { url: '/services/criminal-law', title: 'Criminal Law & Cheque Bounce Defense', keywords: ['criminal law', 'cheque bounce defense', 'section 138 ni act', '138 ni act'] },
    { url: '/services/corporate', title: 'Corporate Law and Compliance', keywords: ['corporate law', 'corporate compliance', 'business legal advisory'] },
    { url: '/services/trademark-registration', title: 'Trademark Registration in India', keywords: ['trademark registration', 'trademark filing', 'ip protection'] },
    { url: '/services/arbitration', title: 'Arbitration and Dispute Resolution', keywords: ['arbitration', 'arbitration proceedings', 'dispute resolution'] },
    { url: '/services/drafting', title: 'Legal Notice and Agreement Drafting', keywords: ['legal notice drafting', 'agreement drafting', 'contract drafting'] },
    { url: '/credit-card-debt-settlement', title: 'Credit Card Debt Settlement', keywords: ['credit card debt settlement', 'credit card settlement', 'credit card default'] },
    { url: '/how-to-reply-to-bank-legal-notice-for-personal-loan-default', title: 'Reply to Bank Legal Notice for Loan Default', keywords: ['reply to bank legal notice', 'bank legal notice', 'loan default notice'] },
    { url: '/what-are-my-legal-rights-when-dealing-with-recovery-agents', title: 'Legal Rights Against Recovery Agent Harassment', keywords: ['recovery agent harassment', 'rights against recovery agents', 'rbi recovery guidelines'] },
    { url: '/difference-between-loan-settlement-and-loan-closure-impact-on-cibil', title: 'Loan Settlement vs Loan Closure Impact on CIBIL', keywords: ['loan settlement vs loan closure', 'cibil score impact', 'loan closure'] },
    { url: '/pay-day-loan-settlement', title: 'Payday and Loan App Settlement', keywords: ['payday loan settlement', 'instant loan app settlement', 'loan app harassment'] },
    { url: '/how-to-repair-your-credit-score', title: 'How to Repair Your Credit Score', keywords: ['repair credit score', 'improve credit score', 'cibil repair'] },
    { url: '/cheque-bounce-legal-notice', title: 'Cheque Bounce Section 138 Notice', keywords: ['cheque bounce notice', 'section 138 notice', 'dishonour of cheque'] },
    { url: '/who-is-the-best-lawyer-for-loan-settlement-in-india', title: 'Best Lawyer for Loan Settlement in India', keywords: ['best lawyer for loan settlement', 'loan settlement advocate'] },
    { url: '/services', title: 'All Legal Services', keywords: ['legal services', 'practice areas'] },
    { url: '/contact', title: 'Contact AMA Legal Solutions', keywords: ['contact our legal team', 'legal consultation', 'schedule legal consultation'] },
    { url: '/about', title: 'About AMA Legal Solutions', keywords: ['about ama legal solutions', 'ama legal solutions team'] }
];

// Helper to sanitize em-dashes and uniform typography
const sanitizeText = (txt: string) => txt.replace(/—|\u2014|&mdash;/g, " - ");

// Title Sanitizer: Strip repetitive AI clichés and robotic template suffixes, and fix outdated years
function sanitizeTitle(title: string, currentYear: number): string {
    return title
        .replace(/:\s*(A\s+Complete\s+Guide|Comprehensive\s+Overview|Legal\s+Solutions|Step-by-Step\s+Guide|Everything\s+You\s+Need\s+to\s+Know|All\s+You\s+Need\s+to\s+Know|Ultimate\s+Guide|Full\s+Guide|Detailed\s+Guide|In-Depth\s+Guide|The\s+Ultimate\s+Playbook)\b/gi, '')
        .replace(/\s*[-–—|]\s*(A\s+Complete\s+Guide|Comprehensive\s+Overview|Legal\s+Solutions|Step-by-Step\s+Guide|Everything\s+You\s+Need\s+to\s+Know|All\s+You\s+Need\s+to\s+Know|Ultimate\s+Guide|Full\s+Guide|Detailed\s+Guide|In-Depth\s+Guide|The\s+Ultimate\s+Playbook)\b/gi, '')
        .replace(/\b(202[0-4])\b/g, String(currentYear))
        .replace(/["']/g, '')
        .trim();
}

// Comprehensive Post-Processing & HTML Sanitizer Layer
function postProcessAndSanitizeHtml(rawHtml: string): string {
    let processed = rawHtml;

    // Strip markdown code fences if present
    processed = processed.replace(/^```(?:html)?\s*/i, '').replace(/```\s*$/i, '').trim();

    // Em-dash typography normalization
    processed = sanitizeText(processed);

    // Bare Markdown Headers to HTML Headers
    processed = processed.replace(/^####\s+(.+)$/gm, '<h4>$1</h4>');
    processed = processed.replace(/^###\s+(.+)$/gm, '<h3>$1</h3>');
    processed = processed.replace(/^##\s+(.+)$/gm, '<h2>$1</h2>');
    processed = processed.replace(/^#\s+(.+)$/gm, '<h2>$1</h2>');

    // Bold Markdown fallbacks: **bold** and __bold__ -> <strong>bold</strong>
    processed = processed.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    processed = processed.replace(/__(.+?)__/g, '<strong>$1</strong>');

    // Italic Markdown fallbacks: *italic* and _italic_ -> <em>italic</em>
    processed = processed.replace(/(?<![a-zA-Z0-9])\*([^*]+?)\*(?![a-zA-Z0-9])/g, '<em>$1</em>');
    processed = processed.replace(/(?<![a-zA-Z0-9])_([^_]+?)_(?![a-zA-Z0-9])/g, '<em>$1</em>');

    // List header bold fallbacks: e.g. 1. **Title**: text -> 1. <strong>Title:</strong> text
    processed = processed.replace(/(?:^|\n)(?:\d+\.|\*|-|•)\s*(<strong>.+?<\/strong>)/g, '\n<li>$1');

    // Strip any trailing meta-commentary, apologies, or parenthetical notes generated by LLM
    processed = processed.replace(/\(?\s*(?:The HTML content above|Note:|Please note:|As requested|Sections were omitted|This concludes|Omitted following your instructions)[\s\S]*?\)?$/gi, '').trim();
    processed = processed.replace(/<p>\s*\(?(?:The HTML content above|Note:|Please note:|As requested|Sections were omitted|This concludes|Omitted following your instructions)[\s\S]*?<\/p>/gi, '').trim();

    // Strip any hallucinated or outdated publication date lines and bylines in the HTML body (CMS handles them)
    processed = processed.replace(/<p>\s*(?:<strong>)?\s*(?:Publication Date|Published on|Date of Publication|Published Date|Article Date|Last Updated)\s*:?[\s\S]*?<\/p>/gi, '').trim();

    return processed;
}

// Helper to ensure internal links are well-distributed (6 to 10 contextual links)
function enrichInternalLinks(htmlContent: string, links: { url: string; keywords: string[] }[]) {
    let enriched = htmlContent;
    let currentLinkCount = (enriched.match(/<a\s[^>]*href=["'][^"']*["']/gi) || []).length;
    if (currentLinkCount >= 8) return enriched;

    for (const linkItem of links) {
        if (currentLinkCount >= 10) break;
        // If url already linked, skip
        if (enriched.includes(`href="${linkItem.url}"`) || enriched.includes(`href='${linkItem.url}'`)) {
            continue;
        }
        for (const keyword of linkItem.keywords) {
            const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            // Match keyword only if not inside an HTML tag or already within an <a>...</a>
            const regex = new RegExp(`(?<!<[^>]*)(?<!<a[^>]*>[^<]*)\\b(${escapedKeyword})\\b(?![^<]*<\\/a>)`, 'i');
            if (regex.test(enriched)) {
                enriched = enriched.replace(regex, `<a href="${linkItem.url}">$1</a>`);
                currentLinkCount++;
                break;
            }
        }
    }
    return enriched;
}

// Safe text extractor for Responses API output
function extractResponseText(resp: any): string {
    if (!resp) return '';
    if (typeof resp.output_text === 'string') return resp.output_text;
    if (Array.isArray(resp.output)) {
        const texts: string[] = [];
        for (const item of resp.output) {
            if (item.type === 'message' && Array.isArray(item.content)) {
                for (const part of item.content) {
                    if (part.type === 'text' && part.text) {
                        texts.push(part.text);
                    } else if (typeof part === 'string') {
                        texts.push(part);
                    }
                }
            } else if (item.text) {
                texts.push(item.text);
            }
        }
        if (texts.length > 0) return texts.join('\n');
    }
    return '';
}

export async function POST(request: Request) {
    const openai = new OpenAI({
        apiKey: process.env.HELLO_DROP_CHOO,
    });

    try {
        const body = await request.json();
        const primaryKeyword = typeof body.primaryKeyword === 'string' ? body.primaryKeyword.trim() : '';
        const promptId = body.promptId;

        // Dynamically compute real-world current date and year
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentDateFormatted = now.toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        const todayIsoDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

        // 1. Out-of-Scope & Brand Scope Guard
        if (!primaryKeyword) {
            return NextResponse.json({ error: 'Primary Keyword is required' }, { status: 400 });
        }

        let coreInstructions = "You are a senior legal SEO, AEO strategist and counsel for AMA Legal Solutions (India). Write in an authoritative, highly informative, and practical tone suitable for India's leading law firm.";
        let targetWordCount = 3500; // Dynamic default if no prompt profile exists in Firestore

        try {
            if (promptId) {
                const promptDoc = await adminDb.collection('prompts').doc(promptId).get();
                if (promptDoc.exists) {
                    const data = promptDoc.data();
                    coreInstructions = data?.coreInstructions || coreInstructions;
                    targetWordCount = Number(data?.targetWordCount) || targetWordCount;
                    console.log(`[AI Generator Flow] Loaded Selected Prompt Profile: "${data?.name}", Target Word Count: ${targetWordCount}`);
                }
            } else {
                // If promptId not explicitly passed, load the default prompt profile from Firestore
                const defaultPromptSnap = await adminDb.collection('prompts').where('isDefault', '==', true).limit(1).get();
                if (!defaultPromptSnap.empty) {
                    const data = defaultPromptSnap.docs[0].data();
                    coreInstructions = data?.coreInstructions || coreInstructions;
                    targetWordCount = Number(data?.targetWordCount) || targetWordCount;
                    console.log(`[AI Generator Flow] Loaded Default Prompt Profile: "${data?.name}", Target Word Count: ${targetWordCount}`);
                }
            }
        } catch (error) {
            console.error("[AI Generator Flow] Error fetching prompt profile:", error);
        }

        // 2. Fetch Live Dynamic Links from Firestore DB
        let dynamicBlogLinks: { url: string; title: string; keywords: string[] }[] = [];
        try {
            const blogsSnapshot = await adminDb.collection('blogs').orderBy('created', 'desc').limit(35).get();
            dynamicBlogLinks = blogsSnapshot.docs
                .map(doc => {
                    const d = doc.data();
                    if (d.slug && d.title) {
                        return {
                            url: `/blog/${d.slug}`,
                            title: d.title,
                            keywords: [d.title.toLowerCase()]
                        };
                    }
                    return null;
                })
                .filter(Boolean) as { url: string; title: string; keywords: string[] }[];
        } catch (fetchBlogsErr) {
            console.warn("[AI Generator Flow] Could not fetch existing blogs for linking:", fetchBlogsErr);
        }

        const allAvailableLinks = [...CORE_SITE_LINKS, ...dynamicBlogLinks];
        const formattedInternalLinks = allAvailableLinks
            .slice(0, 30)
            .map(l => `- "${l.title}" -> ${l.url}`)
            .join('\n');

        // STEP 0: Real-Time Web Research & Grounding (Dynamic Real-Time Research as of Today)
        console.log(`[AI Generator Flow] Step 0: Gathering live research & legal statutes as of ${currentDateFormatted} for: [${primaryKeyword}]...`);
        let researchContext = "";
        try {
            if (typeof (openai as any).responses?.create === 'function') {
                const searchResp = await (openai as any).responses.create({
                    model: MODEL_HEAVY,
                    tools: [{ type: "web_search_preview" }],
                    input: `Today's Date: ${currentDateFormatted} (Year: ${currentYear}).
Conduct authoritative legal, factual, and market research on: "${primaryKeyword}" strictly as of today (${currentDateFormatted}) under current Indian Law.
Ensure all data, statutory provisions, regulatory circulars, market players, and statistics reflect ${currentYear} (DO NOT cite outdated past years like 2023 or 2024).
If the query asks for top companies, agencies, apps, or services (e.g. debt settlement, loan recovery, legal drafting, banking defense), explicitly identify the top real-world names currently operating in India in ${currentYear} (e.g., AMA Legal Solutions, SingleDebt, Freed, SettleLoans, LoanSettlement.com, etc.), their operational models (Advocate-led law firm vs commercial fintech aggregator), fee structures, regulatory standing under the Advocates Act 1961 and RBI master directions, ability to appear in court, and pros/cons.
Also identify key statutory provisions (e.g. Bharatiya Nyaya Sanhita BNS, BNSS, BSA, NI Act Section 138, SARFAESI, RBI Master Directions on digital lending & recovery, PSSA Section 25), landmark High Court/Supreme Court rulings, and average settlement metrics. Provide a dense factual summary (~800 words).`
                });
                researchContext = extractResponseText(searchResp);
            }
        } catch (searchErr) {
            console.warn("[AI Generator Flow] Responses API web search failed or preview not enabled, using fallback grounding:", searchErr);
        }

        // Fallback grounding completion if responses API didn't return text
        if (!researchContext) {
            try {
                const groundingCompletion = await openai.chat.completions.create({
                    model: MODEL_HEAVY,
                    messages: [
                        {
                            role: "system",
                            content: `${coreInstructions}\n\nToday's Date: ${currentDateFormatted} (Year: ${currentYear}).\nTask: Provide dense, factual legal grounding context for: "${primaryKeyword}" strictly reflecting ${currentYear} Indian legal framework. If the topic covers top companies, service providers, or platforms in India, explicitly detail the real-world players (AMA Legal Solutions, SingleDebt, Freed, SettleLoans, LoanSettlement.com, etc.), their business models (Law Firm vs Commercial Aggregator), fees, legal standing under the Advocates Act 1961, and RBI guidelines. Limit to ~800 words.`
                        },
                        {
                            role: "user",
                            content: `Provide exhaustive legal context, statutes, specific company names/models, and procedural workflows for "${primaryKeyword}" as of ${currentDateFormatted}.`
                        }
                    ],
                });
                researchContext = groundingCompletion.choices[0]?.message?.content || "";
            } catch (groundingErr) {
                console.warn("[AI Generator Flow] Fallback grounding failed:", groundingErr);
            }
        }

        // Trim research context to ~850 words to prevent downstream prompt inflation
        const trimmedResearch = researchContext.split(/\s+/).slice(0, 850).join(" ");

        const targetHeadingCount = targetWordCount >= 3000 ? "8 to 11" : "6 to 8";
        console.log(`[AI Generator Flow] Step 1: Generating natural title, SEO metadata & tailored outline (${targetHeadingCount} headings for ~${targetWordCount} words) with ${MODEL_LIGHT}...`);

        // STEP 1: Natural Title, SEO Metadata & Adaptive Outline (JSON Mode with gpt-4o-mini / gpt-6-luna)
        const step1Completion = await openai.chat.completions.create({
            model: MODEL_LIGHT,
            messages: [
                {
                    role: "system",
                    content: `${coreInstructions}

--- TECHNICAL REQUIREMENTS FOR STEP 1 ---
Current Real-World Date: ${currentDateFormatted} (Year: ${currentYear}).
Task: Generate an SEO-optimized H1 Title, engaging subtitle, meta title, meta description, URL slug, and a detailed Outline of ${targetHeadingCount} comprehensive H2 headings tailored specifically to the search intent of "${primaryKeyword}" for an article targeting ~${targetWordCount} words.

CRITICAL TEMPORAL & YEAR DIRECTIVE:
- Today is ${currentDateFormatted}. If including a year in the title, meta tags, or outline, you MUST use the current year ${currentYear} (e.g., "...in India (${currentYear})").
- NEVER use outdated years like 2023 or 2024.

TOPIC ADAPTATION RULES:
1. If the topic is about "Top Companies", "Best Services", "Agencies", or "Reviews":
   - The outline MUST explicitly include dedicated H2 sections reviewing and comparing the actual top entities/companies in India (e.g. AMA Legal Solutions as the leading advocate-led law firm, Freed, SingleDebt, LoanSettlement.com/SettleLoans, etc.).
   - Include an H2 on the critical legal distinction: Registered Law Firms (Advocates Act 1961 & Section 126 Evidence Act Privilege) vs Commercial Fintech Aggregators.
   - Include an H2 for a Comprehensive Comparison Table (Fee models, Legal Standing, Settlement Capabilities).
   - Include an H2 on Evaluation Criteria & Risks of unregulated agencies.
   - Include an H2 on Borrower Rights & RBI Guidelines against recovery harassment.
   - Conclude with an H2 for Strategic Conclusion & Next Steps.
2. If the topic is about a legal procedure, notice, or statute:
   - Outline the statutory framework, step-by-step procedure (Step 1 to 5), comparison table, legal rights, and conclusion.
3. TITLE RULES: STRICT BAN on robotic template suffixes (do NOT add ": Legal Solutions", ": A Complete Guide", ": Comprehensive Overview", ": Step-by-Step Guide", ": Everything You Need to Know", ": Ultimate Guide").
4. Outlines must NEVER include "FAQs", "Reviews", or standalone "Table of Contents".

Return ONLY a JSON object with this exact structure:
{
  "title": "Natural, human H1 Title containing the primary keyword (max 70 chars, no cliché suffixes, current year ${currentYear} if year used)",
  "subtitle": "Engaging, practical subtitle (max 120 chars)",
  "metaTitle": "SEO meta title (60-70 chars)",
  "metaDescription": "Action-oriented SEO meta description (150-160 chars)",
  "slug": "url-friendly-slug",
  "outline": [
    "Introduction to [Topic] in India",
    "Detailed Overview & Review of Top Entities (AMA Legal Solutions, Freed, SingleDebt, etc.)",
    "Law Firm Legal Representation vs Commercial Aggregator Services",
    "Comprehensive Comparison Matrix of Leading Providers",
    "How to Evaluate and Choose the Right Solution Safely",
    "Legal Rights and Safeguards Under RBI Guidelines",
    "Strategic Conclusion: Navigating [Topic] with Legal Assurance"
  ]
}`
                }
            ],
            response_format: { type: "json_object" },
        });

        const step1ResultStr = sanitizeText(step1Completion.choices[0]?.message?.content || "{}");
        const step1Result = JSON.parse(step1ResultStr);
        step1Result.title = sanitizeTitle(step1Result.title || primaryKeyword, currentYear);
        let outline: string[] = Array.isArray(step1Result.outline) ? step1Result.outline : [];
        outline = outline.filter((h: string) => !/faq|frequently asked|review|table of contents/i.test(h));

        console.log(`[AI Generator Flow] Step 1 Complete. Title: "${step1Result.title}", Outline items: ${outline.length}`);
        console.log(`[AI Generator Flow] Step 2: Generating Core HTML Article (Target: ~${targetWordCount} words) with ${MODEL_HEAVY}...`);

        // STEP 2: Core HTML Article Generation (Single-Shot Authoritative Content Body)
        const dynamicMaxTokens = Math.min(8000, Math.max(4500, Math.ceil(targetWordCount * 2.2)));

        const step2SystemPrompt = `${coreInstructions}

--- TECHNICAL REQUIREMENTS FOR STEP 2 ---
Current Real-World Date: ${currentDateFormatted} (Year: ${currentYear}).
Target Primary Keyword: ${primaryKeyword}
Article Title: ${step1Result.title}
Target Word Count: ${targetWordCount} words (ensure the article is exhaustive, deep, and thoroughly reaches ~${targetWordCount} words).

TEMPORAL ACCURACY:
All legal commentary, statutory references (Bharatiya Nyaya Sanhita BNS, BNSS, BSA, current RBI Master Directions), and company analyses must be current as of ${currentYear}. NEVER cite outdated years like 2023 or 2024.

RESEARCH & GROUNDING CONTEXT:
${trimmedResearch ? trimmedResearch : "Ensure strict alignment with Indian Law, RBI Master Directions, BNS/BNSS/BSA, SARFAESI, and NI Act."}

MANDATORY OUTLINE DIRECTIVE:
You MUST structure the entire HTML article strictly following these H2 headings:
${outline.length > 0 ? outline.map((h, i) => `${i + 1}. <h2>${h}</h2>`).join('\n') : `1. <h2>Introduction to ${primaryKeyword}</h2>\n2. <h2>Comprehensive Analysis of Leading Providers & Options</h2>\n3. <h2>Legal Framework & Regulatory Standing Under Indian Law</h2>\n4. <h2>Comparison Table of Top Solutions</h2>\n5. <h2>Borrower Rights & RBI Protections</h2>\n6. <h2>Strategic Conclusion: Navigating with Legal Counsel</h2>`}

--- CONTENT & ENTITY SPECIFICITY RULES ---
1. IF TOPIC INVOLVES COMPANIES / SERVICES / APPS:
   - You MUST explicitly name and thoroughly evaluate each major entity in India (e.g., **AMA Legal Solutions** as the premier advocate-led law firm, **SingleDebt**, **Freed / InCred**, **LoanSettlement.com / SettleLoans**).
   - For each entity, explain:
     * Their operational model (Advocate-led law firm vs commercial fintech marketing aggregator).
     * Legal standing: Whether they can legally represent in court / file Vakalatnama / defend against Section 138 NI Act or Section 25 PSSA summons under the Advocates Act 1961, and provide statutory advocate-client privilege under Section 126 of the Evidence Act.
     * Fee structure transparency (Fixed transparent legal advisory vs ongoing percentage/monthly retainers).
     * Key pros & cons for borrowers.
2. FORMATTING RICHNESS:
   - Under each <h2> heading, provide exhaustive paragraphs <p>, structured sub-headings <h3>, and bullet lists with bold terms (e.g. <ul><li><strong>Parameter:</strong> Explanation...</li></ul>).
   - The final section MUST be an authoritative, reassuring Strategic Conclusion highlighting how engaging experienced legal counsel at AMA Legal Solutions achieves definitive resolution and protects constitutional rights.

--- MANDATORY STRUCTURED TABLE DIRECTIVE ---
You MUST include strictly 1 to 2 comprehensive, clean, and highly informative HTML <table> elements (3-4 columns, 4-6 rows) comparing key parameters (e.g., Entity Name, Operational Model, Legal Representation in Court, Fee Structure, Best Suited For).
Format:
<table>
  <thead>
    <tr>
      <th>Entity / Company</th>
      <th>Model & Legal Standing</th>
      <th>Court Representation</th>
      <th>Fee Structure</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>AMA Legal Solutions</strong></td>
      <td>Advocate-Led Law Firm (Advocates Act, 1961)</td>
      <td>Full Court & Lok Adalat Standing</td>
      <td>Transparent Fixed Legal Advisory</td>
    </tr>
    ...
  </tbody>
</table>
Do NOT include more than 2 tables total.

--- MANDATORY INTERNAL LINKING DIRECTIVE ---
You MUST contextually weave 6 to 10 natural HTML hyperlinks throughout the article text.
Rules:
1. ONLY use URLs from this Approved Internal Links Catalog:
${formattedInternalLinks}
2. Format: <a href="URL">Natural Contextual Anchor Text</a>.
3. NEVER use generic text like "click here", "read more", "this page", or naked URLs.
4. Integrate the anchor keywords seamlessly and grammatically into the analysis.

--- CRITICAL NEGATIVE CONSTRAINTS ---
1. STRICTLY Pure HTML output. Start directly with the first <h2> tag.
2. Do NOT output any <h1> tag (the title is handled separately).
3. Do NOT output any markdown code blocks (\`\`\`html or \`\`\`). Output RAW HTML only.
4. Do NOT output any FAQs or Reviews sections in this body (these are generated separately as structured data).
5. ABSOLUTE PROHIBITION ON META-COMMENTARY: Do NOT output any conversational text, apologies, disclaimers, or notes in parentheses explaining what was included or omitted (e.g. NEVER write '(The HTML content above does not include...')'). End directly with the final paragraph of the Strategic Conclusion.
6. ABSOLUTE PROHIBITION ON PUBLICATION DATES & BYLINES: Do NOT output any publication dates, date lines, or author bylines (e.g., 'Publication Date: ...', 'Published on: ...', 'Written by ...', 'Date: ...'). Publication dates and author credits are strictly handled natively by the platform CMS.
`;

        const step2Completion = await openai.chat.completions.create({
            model: MODEL_HEAVY,
            messages: [
                { role: "system", content: step2SystemPrompt },
                { role: "user", content: `Write the complete, authoritative HTML article body for: "${step1Result.title}" targeting "${primaryKeyword}". Aim for approximately ${targetWordCount} words.` }
            ],
            max_completion_tokens: dynamicMaxTokens,
        });

        let rawDescription = step2Completion.choices[0]?.message?.content || "";
        
        // 4. Post-Processing & HTML Sanitizer Layer
        let cleanedDescription = postProcessAndSanitizeHtml(rawDescription);

        // Safety cap: Enforce strictly 1 to 2 tables max across the article
        const tableMatches = Array.from(cleanedDescription.matchAll(/<table[\s\S]*?<\/table>/gi));
        if (tableMatches.length > 2) {
            let currentTableIdx = 0;
            cleanedDescription = cleanedDescription.replace(/<table[\s\S]*?<\/table>/gi, (match) => {
                currentTableIdx++;
                if (currentTableIdx <= 2) return match;
                return ''; // Remove any excess tables beyond 2
            });
        }

        // Ensure well-distributed internal links (target 6 to 10 links)
        cleanedDescription = enrichInternalLinks(cleanedDescription, allAvailableLinks);

        console.log(`[AI Generator Flow] Step 2 complete. Word count: ${cleanedDescription.split(/\s+/).length} words.`);
        console.log(`[AI Generator Flow] Step 3: Generating Key Takeaways, FAQs, Visual Prompts, Citations with ${MODEL_LIGHT}...`);

        // STEP 3: FAQs, Key Takeaways, References & Visual Prompts (NO Reviews as requested)
        let faqs: any[] = [];
        let suggestedImagePrompt = "Professional legal money recovery and consultation illustration";
        let suggestedInfographicPrompt = "Professional legal data breakdown and process flowchart infographic";
        let references: any[] = [];
        let keyTakeaways = "";

        try {
            const step3SystemPrompt = `${coreInstructions}

--- TECHNICAL REQUIREMENTS FOR STEP 3 ---
Task: Analyze the generated article Title, Subtitle, and HTML Body, and produce:
1. A concise, authoritative "Key Takeaways" summary (2-3 sentences) summarizing the core legal provisions, entity distinctions, borrower protections, and strategic action plan.
2. 6 to 8 concise, highly relevant, and practical FAQs (Frequently Asked Questions) answering real-world consumer/business queries.
3. A suggested Featured Hero Image Prompt describing a professional legal illustration that MUST feature real people, an Indian legal or corporate setting in the background, and prominently feature the exact title of the blog written within the image. Exclusively use colors #D29E0D (gold), white, and black.
4. A suggested Infographic Flowchart Prompt describing a sleek 2D corporate infographic visualizing key statistics, company comparisons, timeline phases, and procedural workflows with callouts, styled in gold (#D29E0D), dark navy/slate (#1a202c), and clean white background.
5. A list of 3 to 5 authoritative Indian legal and regulatory external references (e.g., Reserve Bank of India, Supreme Court of India, India Code, NCDRC).
6. 10 to 15 relevant SEO keyword phrases.

Article Title: ${step1Result.title}
Article Subtitle: ${step1Result.subtitle}
Article Summary Context:
${cleanedDescription.substring(0, 3500)} ...

Return ONLY a JSON object with this exact structure:
{
  "keyTakeaways": "Concise 2-3 sentence executive legal takeaway summarizing rights, laws, companies, and remedies...",
  "faqs": [
    { "question": "Practical question?", "answer": "Clear, authoritative answer." }
  ],
  "suggestedImagePrompt": "Visual description for the article's featured hero image",
  "suggestedInfographicPrompt": "Visual description for the article's infographic flowchart and data breakdown",
  "references": [
    { "title": "Reserve Bank of India (RBI) Official Guidelines", "url": "https://www.rbi.org.in/" }
  ],
  "keywords": ["keyword 1", "keyword 2"]
}`;

            const step3Completion = await openai.chat.completions.create({
                model: MODEL_LIGHT,
                messages: [
                    { role: "system", content: step3SystemPrompt }
                ],
                response_format: { type: "json_object" },
                max_completion_tokens: 2500,
            });

            const step3ResultStr = sanitizeText(step3Completion.choices[0]?.message?.content || "{}");
            const step3Result = JSON.parse(step3ResultStr);

            keyTakeaways = step3Result.keyTakeaways || step3Result.tldr || "";
            faqs = step3Result.faqs || [];
            suggestedImagePrompt = step3Result.suggestedImagePrompt || suggestedImagePrompt;
            suggestedInfographicPrompt = step3Result.suggestedInfographicPrompt || suggestedInfographicPrompt;
            references = step3Result.references || [];

            const keywords = step3Result.keywords || [];
            if (keywords.length > 0) {
                const keywordsHtml = keywords.map((k: string) => `<li>${k.replace(/^[•\-\d.]\s*/, '').trim()}</li>`).join('\n');
                cleanedDescription += `\n\n<h3>Popular Searches</h3>\n<ul>\n${keywordsHtml}\n</ul>`;
            }

            console.log(`[AI Generator Flow] Step 3 complete. FAQs: ${faqs.length}, References: ${references.length}, Keywords: ${keywords.length}`);
        } catch (step3Error) {
            console.error("[AI Generator Flow] Error in Step 3:", step3Error);
        }

        // Guarantee Key Takeaways box at the top (fallback to summary if needed)
        if (!keyTakeaways) {
            keyTakeaways = `Understanding the leading options and regulatory standing of debt settlement services in India empowers borrowers to choose registered legal counsel over commercial intermediaries, safeguard against harassment, and secure court-enforceable settlements.`;
        }

        // Format Short Answer / Key Takeaways Outlined Box at the top with <p> for Tiptap & DOM compatibility
        const cleanTakeawaysText = keyTakeaways.replace(/^Key Takeaways:\s*/i, '').trim();
        const topCalloutBoxHtml = `<blockquote><p><strong>Key Takeaways:</strong> <em>${cleanTakeawaysText}</em></p></blockquote>\n\n`;
        cleanedDescription = topCalloutBoxHtml + cleanedDescription;

        // Build the final unified payload (preserving empty reviews array to keep frontend contract intact)
        const finalResult = {
            title: step1Result.title,
            subtitle: step1Result.subtitle,
            metaTitle: step1Result.metaTitle,
            metaDescription: step1Result.metaDescription,
            slug: step1Result.slug,
            description: cleanedDescription,
            faqs: faqs,
            reviews: [], // Intentionally empty array (reviews not implemented per request)
            suggestedImagePrompt: suggestedImagePrompt,
            suggestedInfographicPrompt: suggestedInfographicPrompt,
            references: references,
            date: todayIsoDate
        };

        const finalJsonStr = JSON.stringify(finalResult);

        // Stream the final JSON to the client
        const stream = new ReadableStream({
            async start(controller) {
                controller.enqueue(new TextEncoder().encode(finalJsonStr));
                controller.close();
            },
        });

        return new Response(stream, {
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
            },
        });
    } catch (error) {
        console.error('[AI Generator Flow] Critical error generating article:', error);
        return NextResponse.json(
            { error: 'Internal server error', details: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}

export const maxDuration = 300;

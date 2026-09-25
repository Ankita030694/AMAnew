import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { adminDb } from '../../../lib/firebase-admin';

// Models configured with cost-optimized tiered strategy
const MODEL_HEAVY = process.env.OPENAI_MODEL_HEAVY || 'gpt-4o';
const MODEL_LIGHT = process.env.OPENAI_MODEL_LIGHT || 'gpt-4o-mini';

// Comprehensive static service & landing page directory across all practice areas
const CORE_SITE_LINKS = [
    // Banking, Debt & Recovery Practice
    { url: '/services/loan-settlement', title: 'Loan Settlement Services', keywords: ['loan settlement services', 'loan settlement', 'settle loans', 'debt settlement'] },
    { url: '/services/banking-and-finance', title: 'Banking and Finance Law', keywords: ['banking and finance', 'banking lawyer', 'banking law firm', 'banking disputes'] },
    { url: '/services/debt-consolidation', title: 'Debt Consolidation & Restructuring', keywords: ['debt consolidation', 'debt restructuring', 'debt relief'] },
    { url: '/credit-card-debt-settlement', title: 'Credit Card Debt Settlement', keywords: ['credit card debt settlement', 'credit card settlement', 'credit card default'] },
    { url: '/how-to-reply-to-bank-legal-notice-for-personal-loan-default', title: 'Reply to Bank Legal Notice for Loan Default', keywords: ['reply to bank legal notice', 'bank legal notice', 'loan default notice'] },
    { url: '/what-are-my-legal-rights-when-dealing-with-recovery-agents', title: 'Legal Rights Against Recovery Agent Harassment', keywords: ['recovery agent harassment', 'rights against recovery agents', 'rbi recovery guidelines'] },
    { url: '/cheque-bounce-legal-notice', title: 'Cheque Bounce Section 138 Notice', keywords: ['cheque bounce notice', 'section 138 notice', 'dishonour of cheque', '138 ni act'] },
    
    // Corporate, Commercial & Contracts
    { url: '/services/corporate', title: 'Corporate Law and Compliance', keywords: ['corporate law', 'corporate compliance', 'business legal advisory', 'company law'] },
    { url: '/services/drafting', title: 'Legal Notice and Agreement Drafting', keywords: ['legal notice drafting', 'agreement drafting', 'contract drafting', 'legal drafting'] },
    
    // Dispute Resolution & Litigation
    { url: '/services/arbitration', title: 'Arbitration and Dispute Resolution', keywords: ['arbitration', 'arbitration proceedings', 'dispute resolution', 'arbitration act'] },
    { url: '/services/litigation', title: 'Commercial Litigation & Court Representation', keywords: ['commercial litigation', 'court representation', 'litigation lawyer', 'high court advocate'] },
    { url: '/services/civil', title: 'Civil Litigation and Disputes', keywords: ['civil litigation', 'civil dispute', 'civil lawyer', 'property disputes'] },
    { url: '/services/criminal-law', title: 'Criminal Law & Defense', keywords: ['criminal law', 'criminal defense', 'bail application', 'anticipatory bail', 'fir quashing'] },
    
    // Intellectual Property Rights
    { url: '/services/trademark-registration', title: 'Trademark Registration in India', keywords: ['trademark registration', 'trademark filing', 'trademark application', 'register trademark'] },
    { url: '/services/trademark-search', title: 'Trademark Search & Classification', keywords: ['trademark search', 'tm search', 'trademark classification'] },
    { url: '/services/trademark-status', title: 'Trademark Status & Examination Reply', keywords: ['trademark status', 'trademark objection reply', 'trademark examination'] },
    { url: '/services/intellectual-property-rights', title: 'Intellectual Property Rights (IPR)', keywords: ['intellectual property', 'ipr services', 'copyright registration', 'patent law'] },

    // Real Estate, Cyber & Consumer
    { url: '/services/real-estate', title: 'Real Estate & RERA Law', keywords: ['real estate lawyer', 'rera complaint', 'builder dispute', 'property lawyer'] },
    { url: '/services/cyber', title: 'Cyber Law & Online Fraud', keywords: ['cyber crime lawyer', 'online fraud complaint', 'cyber law'] },

    // Firm Overview & Contact
    { url: '/services', title: 'All Legal Practice Areas', keywords: ['legal services', 'practice areas', 'legal advisory'] },
    { url: '/contact', title: 'Contact AMA Legal Solutions', keywords: ['contact our legal team', 'legal consultation', 'schedule legal consultation', 'consult an advocate'] },
    { url: '/about', title: 'About AMA Legal Solutions', keywords: ['about ama legal solutions', 'ama legal solutions team', 'advocate anuj anand malik'] }
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

// Select only relevant internal links matching the primary keyword's subject matter
function getRelevantInternalLinks(primaryKeyword: string, allLinks: { url: string; title: string; keywords: string[] }[]) {
    const kwTokens = primaryKeyword.toLowerCase().split(/\s+/).filter(t => t.length > 2);

    const scored = allLinks.map(link => {
        let score = 0;
        const linkText = `${link.title} ${link.keywords.join(' ')} ${link.url}`.toLowerCase();
        for (const token of kwTokens) {
            if (linkText.includes(token)) score += 3;
        }
        if (['/contact', '/services', '/about'].includes(link.url)) {
            score += 1;
        }
        return { link, score };
    });

    const topRelevant = scored
        .filter(s => s.score > 0)
        .sort((a, b) => b.score - a.score)
        .map(s => s.link);

    // Ensure general fallback links are available
    const fallbackUrls = ['/services', '/contact', '/about'];
    for (const fbUrl of fallbackUrls) {
        if (!topRelevant.some(l => l.url === fbUrl)) {
            const found = allLinks.find(l => l.url === fbUrl);
            if (found) topRelevant.push(found);
        }
    }

    return topRelevant.slice(0, 15);
}

// Helper to ensure relevant internal links are well-distributed (6 to 10 contextual links)
function enrichInternalLinks(htmlContent: string, links: { url: string; keywords: string[] }[]) {
    let enriched = htmlContent;
    let currentLinkCount = (enriched.match(/<a\s[^>]*href=["'][^"']*["']/gi) || []).length;
    if (currentLinkCount >= 8) return enriched;

    for (const linkItem of links) {
        if (currentLinkCount >= 10) break;
        if (enriched.includes(`href="${linkItem.url}"`) || enriched.includes(`href='${linkItem.url}'`)) {
            continue;
        }
        for (const keyword of linkItem.keywords) {
            const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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

// SEO Verification Helper: Ensures primary keyword is prominently placed and appropriately repeated
function ensurePrimaryKeywordPresence(html: string, keyword: string): string {
    if (!keyword) return html;
    const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b${escaped}\\b`, 'gi');
    const matches = html.match(regex) || [];
    console.log(`[AI Generator Flow] SEO Keyword Check: "${keyword}" appears ${matches.length} times in generated HTML body.`);

    let updated = html;
    // If the keyword appears fewer than 6 times, reinforce it naturally in the first paragraph
    if (matches.length < 6) {
        console.log(`[AI Generator Flow] Keyword density is low (${matches.length} matches). Naturally reinforcing "${keyword}" in introduction...`);
        const firstPRegex = /(<h2[^>]*>[\s\S]*?<\/h2>\s*<p[^>]*>)([\s\S]*?)(<\/p>)/i;
        const match = updated.match(firstPRegex);
        if (match && !new RegExp(`\\b${escaped}\\b`, 'i').test(match[2])) {
            const introEnhancement = `When evaluating <strong>${keyword}</strong> in India, understanding the applicable statutory framework, legal procedures, and strategic rights is essential. `;
            updated = updated.replace(firstPRegex, `$1${introEnhancement}$2$3`);
        }
    }

    return updated;
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

        // Dynamically compute real-world current date and year in local Indian format
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentDateFormatted = now.toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        const todayIsoDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

        // 1. Validation Guard
        if (!primaryKeyword) {
            return NextResponse.json({ error: 'Primary Keyword is required' }, { status: 400 });
        }

        let coreInstructions = "You are a senior legal SEO, AEO strategist and counsel for AMA Legal Solutions (India). Write in an authoritative, highly informative, and practical tone suitable for India's leading law firm.";
        let targetWordCount = 3500; // Fallback only if no profile exists and no word count is found in instructions

        try {
            let promptData: any = null;
            if (promptId) {
                const promptDoc = await adminDb.collection('prompts').doc(promptId).get();
                if (promptDoc.exists) {
                    promptData = promptDoc.data();
                    console.log(`[AI Generator Flow] Found Selected Prompt Profile: "${promptData?.name}"`);
                }
            }
            if (!promptData) {
                // If promptId not explicitly passed or not found, load the default prompt profile from Firestore
                const defaultPromptSnap = await adminDb.collection('prompts').where('isDefault', '==', true).limit(1).get();
                if (!defaultPromptSnap.empty) {
                    promptData = defaultPromptSnap.docs[0].data();
                    console.log(`[AI Generator Flow] Found Default Prompt Profile: "${promptData?.name}"`);
                }
            }

            if (promptData) {
                if (promptData.coreInstructions) {
                    coreInstructions = promptData.coreInstructions;
                }
                const profileWordCount = Number(promptData.targetWordCount);
                if (!isNaN(profileWordCount) && profileWordCount > 0) {
                    targetWordCount = profileWordCount;
                }
            }

            // Also inspect instructions text in case the user specified an explicit target word count
            const wordCountRegexes = [
                /(?:target\s+word\s+count|word\s+count|length\s*of\s*article|article\s+length|target\s+length)\s*[:=]?\s*(\d{3,5})(?:\s*[-–to]+\s*(\d{3,5}))?\s*words?/i,
                /(?:write|generate|target)\s*(?:an?\s+)?(?:exhaustive|comprehensive|detailed|in-depth)?\s*article\s*(?:of|around|approximately)?\s*(\d{3,5})(?:\s*[-–to]+\s*(\d{3,5}))?\s*words/i,
                /\b(\d{3,5})\s*[-–to]+\s*(\d{3,5})\s*words\b/i
            ];
            for (const regex of wordCountRegexes) {
                const match = coreInstructions.match(regex);
                if (match) {
                    const count1 = Number(match[1]);
                    const count2 = match[2] ? Number(match[2]) : count1;
                    const parsed = Math.round((count1 + count2) / 2);
                    if (parsed >= 500 && parsed <= 12000) {
                        if (!promptData?.targetWordCount || promptData.targetWordCount === 0) {
                            targetWordCount = parsed;
                            console.log(`[AI Generator Flow] Extracted Target Word Count from prompt instructions text: ${targetWordCount}`);
                        }
                        break;
                    }
                }
            }
            console.log(`[AI Generator Flow] Active Target Word Count from Prompt: ${targetWordCount} words.`);
        } catch (error) {
            console.error("[AI Generator Flow] Error fetching prompt profile:", error);
        }

        // 2. Fetch Live Dynamic Links from Firestore DB
        let dynamicBlogLinks: { url: string; title: string; keywords: string[] }[] = [];
        try {
            const blogsSnapshot = await adminDb.collection('blogs').orderBy('created', 'desc').limit(40).get();
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
        // Select ONLY topic-relevant links for this specific primary keyword
        const relevantLinks = getRelevantInternalLinks(primaryKeyword, allAvailableLinks);
        const formattedInternalLinks = relevantLinks
            .map(l => `- "${l.title}" -> ${l.url}`)
            .join('\n');

        // STEP 0: Real-Time Web Research & Grounding (Domain-Agnostic, 100% strictly bound to Primary Keyword)
        console.log(`[AI Generator Flow] Step 0: Gathering live research & legal statutes as of ${currentDateFormatted} for: [${primaryKeyword}]...`);
        let researchContext = "";
        try {
            if (typeof (openai as any).responses?.create === 'function') {
                const searchResp = await (openai as any).responses.create({
                    model: MODEL_HEAVY,
                    tools: [{ type: "web_search_preview" }],
                    input: `Today's Date: ${currentDateFormatted} (Year: ${currentYear}).
Conduct authoritative legal, statutory, procedural, and market research on the primary keyword: "${primaryKeyword}" strictly under current Indian Law as of ${currentYear}.

RESEARCH OBJECTIVES:
1. Grounding Scope: Confine 100% of your research exclusively to the factual domain and subject matter of "${primaryKeyword}".
2. Statutory Provisions & Precedents: Identify the specific Indian statutes, sections, central acts, rules, and landmark High Court / Supreme Court judgments that govern "${primaryKeyword}".
3. Procedural Stages & Workflows: Detail mandatory legal steps, checklists, competent forums/tribunals/authorities, and timelines.
4. Market Landscape & Options: If the query evaluates services, providers, tools, or platforms, identify the real-world options, legal categories, and industry standards operating in India in ${currentYear} specifically for "${primaryKeyword}".
5. Rights, Safeguards & Remedies: Outline critical legal safeguards, practical risks to avoid, and constitutional or statutory remedies.
Provide a dense, factual summary (~800 words).`
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
                            content: `${coreInstructions}\n\nToday's Date: ${currentDateFormatted} (Year: ${currentYear}).
Task: Provide dense, factual legal grounding context for: "${primaryKeyword}" strictly reflecting ${currentYear} Indian legal framework.
Scope: Confine 100% of your commentary exclusively to the domain of "${primaryKeyword}". Detail applicable Indian statutes, procedural stages, real-world options or standards in this specific domain, and practical remedies. Limit to ~800 words.`
                        },
                        {
                            role: "user",
                            content: `Provide exhaustive legal context, statutes, procedural workflows, and real-world options for "${primaryKeyword}" as of ${currentDateFormatted}.`
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
Target Primary Keyword: "${primaryKeyword}"

Task: Analyze the search intent of "${primaryKeyword}" and generate an SEO-optimized H1 Title, engaging subtitle, meta title, meta description, URL slug, and a detailed Outline of ${targetHeadingCount} comprehensive H2 headings tailored specifically to the search intent of "${primaryKeyword}" for an article targeting ~${targetWordCount} words.

CRITICAL SEO & KEYWORD INTEGRATION DIRECTIVE:
1. The H1 Title MUST naturally contain the exact primary keyword "${primaryKeyword}" near the beginning.
2. The metaTitle MUST start with or prominently feature "${primaryKeyword}" (55-65 characters).
3. The metaDescription MUST include "${primaryKeyword}" within the first 80 characters (145-160 characters).
4. The slug MUST be derived directly from "${primaryKeyword}".
5. CRITICAL TEMPORAL DIRECTIVE: Today is ${currentDateFormatted}. If including a year in the title, meta tags, or outline, you MUST use the current year ${currentYear} (e.g., "...in India (${currentYear})"). NEVER use outdated past years like 2023 or 2024.

TOPIC SCOPE & INTENT ADAPTATION:
1. POSITIVE SCOPE ANCHORING:
   - Outline MUST address 100% the subject matter and legal domain of "${primaryKeyword}".
   - Every heading must advance the narrative logically based on whether the search intent is informational guidance, procedural workflow, statutory defense, or comparative evaluation.
2. ADAPTIVE OUTLINE LOGIC:
   - Begin with an introductory foundation defining the topic under current Indian law.
   - Detail the statutory framework, relevant legal acts, and judicial principles.
   - Provide exhaustive substantive analysis (procedural steps, core legal parameters, options, or provider models).
   - Include a section designed for a comprehensive comparison matrix or evaluation framework.
   - Detail legal rights, practical safeguards, common pitfalls, and compliance requirements.
   - Conclude with an authoritative Strategic Conclusion on navigating the matter with registered advocate counsel at AMA Legal Solutions.
3. TITLE RULES: STRICT BAN on robotic template suffixes (do NOT add ": Legal Solutions", ": A Complete Guide", ": Comprehensive Overview", ": Step-by-Step Guide", ": Everything You Need to Know", ": Ultimate Guide").
4. Outlines must NEVER include "FAQs", "Reviews", or standalone "Table of Contents".

Return ONLY a JSON object with this exact structure:
{
  "title": "Natural H1 Title containing ${primaryKeyword} (max 70 chars, no cliché suffixes, ${currentYear} if year used)",
  "subtitle": "Engaging, practical subtitle highlighting key solutions for ${primaryKeyword} (max 120 chars)",
  "metaTitle": "SEO meta title featuring ${primaryKeyword} (55-65 chars)",
  "metaDescription": "Action-oriented SEO meta description featuring ${primaryKeyword} (145-160 chars)",
  "slug": "url-friendly-slug-with-${primaryKeyword.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}",
  "outline": [
    "Introduction to [Topic] in India",
    "Statutory Framework & Governing Legal Provisions",
    "Comprehensive Analysis & Practical Evaluation of [Topic]",
    "Comparative Parameters / Procedural Workflow Matrix",
    "Legal Safeguards, Consumer Rights, and Critical Risks to Avoid",
    "Strategic Conclusion: Securing Legal Assurance with AMA Legal Solutions"
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
Target Primary Keyword: "${primaryKeyword}"
Article Title: ${step1Result.title}
Target Word Count: ${targetWordCount} words (ensure the article is exhaustive, deep, and thoroughly reaches ~${targetWordCount} words).

===================================================================
MANDATORY PRIMARY KEYWORD INTEGRATION & SEO ENHANCEMENT
===================================================================
To secure #1 ranking on Google and prominence in AI Overviews (AEO):
1. REPETITION & OPTIMAL KEYWORD DENSITY:
   - You MUST naturally use the exact primary keyword "${primaryKeyword}" (and close direct variations) AT LEAST 10 TO 18 TIMES across the article body (targeting a natural, high-authority ~1.0% to 1.5% keyword density).
2. STRATEGIC POSITIONING:
   - Lead Paragraph: Explicitly include "${primaryKeyword}" in the opening 60-100 words under the first <h2> heading (Bottom Line Up Front / BLUF principle).
   - Subheadings: Integrate "${primaryKeyword}" (or close grammatical variants) into at least 2 to 3 of the <h2> or <h3> section headings.
   - Body Content: Evenly distribute "${primaryKeyword}" across statutory explanations, procedural steps, comparative evaluations, and risk analyses.
   - Strategic Conclusion: Reinforce "${primaryKeyword}" in the final summary paragraph and Call to Action.
3. CONTEXTUAL FLUENCY:
   - Every single occurrence of "${primaryKeyword}" must fit seamlessly and grammatically into high-level legal analysis. Never perform unnatural keyword stuffing.

===================================================================
POSITIVE TOPIC SCOPE & DOMAIN INTEGRITY
===================================================================
1. STRICT TOPIC ANCHORING:
   - Confine 100% of your legal analysis, statutory citations, and procedural commentary strictly to the domain and search intent of: "${primaryKeyword}".
   - Every paragraph, statutory reference, and practical tip must directly inform someone searching specifically for "${primaryKeyword}".
2. ROLE OF AMA LEGAL SOLUTIONS:
   - Represent AMA Legal Solutions as India's premier advocate-led law firm with specialized advocates handling "${primaryKeyword}".
   - Highlight that AMA Legal Solutions provides registered advocate counsel, customized legal drafting, and pan-India court representation under the Advocates Act, 1961.
   - If evaluating service options or providers, highlight the critical advantage of registered advocate counsel (advocate-client privilege under Section 126 Evidence Act, full court appearance standing) over unregulated commercial intermediaries.

TEMPORAL ACCURACY:
All legal commentary, statutory references (Bharatiya Nyaya Sanhita BNS, BNSS, BSA, and current circulars), and entity analyses must be current as of ${currentYear}. NEVER cite outdated years like 2023 or 2024.

RESEARCH & GROUNDING CONTEXT:
${trimmedResearch ? trimmedResearch : `Ensure strict alignment with Indian Law, current statutes, and Supreme Court / High Court precedents governing ${primaryKeyword}.`}

MANDATORY OUTLINE DIRECTIVE:
You MUST structure the entire HTML article strictly following these H2 headings:
${outline.length > 0 ? outline.map((h, i) => `${i + 1}. <h2>${h}</h2>`).join('\n') : `1. <h2>Introduction to ${primaryKeyword} in India</h2>\n2. <h2>Statutory Framework & Governing Laws</h2>\n3. <h2>Comprehensive Analysis of Leading Options & Procedures</h2>\n4. <h2>Comparative Evaluation Matrix</h2>\n5. <h2>Legal Safeguards & Practical Pitfalls to Avoid</h2>\n6. <h2>Strategic Conclusion: Legal Resolution with AMA Legal Solutions</h2>`}

--- MANDATORY STRUCTURED TABLE DIRECTIVE (STRICTLY 1 TO 2 TABLES) ---
You MUST include strictly 1 to 2 clean, informative HTML <table> elements (3 to 5 columns, 4 to 6 rows) directly relevant to "${primaryKeyword}".
- Compare parameters, statutory provisions, procedural stages, legal representation standing, or best-suited options relevant to "${primaryKeyword}".
Format:
<table>
  <thead>
    <tr>
      <th>Parameter / Option</th>
      <th>Legal Basis & Requirements</th>
      <th>Key Procedures / Considerations</th>
      <th>Strategic Advantage with Counsel</th>
    </tr>
  </thead>
  <tbody>
    ...
  </tbody>
</table>
Do NOT include more than 2 tables total.

--- MANDATORY INTERNAL LINKING DIRECTIVE ---
Contextually weave 6 to 10 natural HTML hyperlinks throughout the article text.
Rules:
1. ONLY use URLs from this Approved Internal Links Catalog:
${formattedInternalLinks}
2. Format: <a href="URL">Natural Contextual Anchor Text</a>.
3. NEVER use generic text like "click here", "read more", "this page", or naked URLs.

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
                { role: "user", content: `Write the complete, authoritative HTML article body for: "${step1Result.title}" targeting "${primaryKeyword}". Ensure "${primaryKeyword}" appears naturally at least 10 to 18 times throughout the article. Aim for approximately ${targetWordCount} words.` }
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

        // Ensure well-distributed internal links using ONLY topic-relevant links
        cleanedDescription = enrichInternalLinks(cleanedDescription, relevantLinks);

        // SEO Verification & Keyword Reinforcement
        cleanedDescription = ensurePrimaryKeywordPresence(cleanedDescription, primaryKeyword);

        console.log(`[AI Generator Flow] Step 2 complete. Word count: ${cleanedDescription.split(/\s+/).length} words.`);
        console.log(`[AI Generator Flow] Step 3: Generating Key Takeaways, FAQs, Visual Prompts, Citations with ${MODEL_LIGHT}...`);

        // STEP 3: FAQs, Key Takeaways, References & Visual Prompts (strictly topic-tailored)
        let faqs: any[] = [];
        let suggestedImagePrompt = `Professional legal illustration featuring Indian advocates in a corporate law setting representing ${primaryKeyword}`;
        let suggestedInfographicPrompt = `Professional legal process flowchart and procedural roadmap infographic for ${primaryKeyword}`;
        let references: any[] = [];
        let keyTakeaways = "";

        try {
            const step3SystemPrompt = `${coreInstructions}

--- TECHNICAL REQUIREMENTS FOR STEP 3 ---
Target Primary Keyword: "${primaryKeyword}"
Task: Analyze the generated article Title, Subtitle, and HTML Body for "${primaryKeyword}", and produce:
1. A concise, authoritative "Key Takeaways" summary (2-3 sentences) summarizing the critical legal principles, procedural roadmap, and practical remedies for "${primaryKeyword}".
2. 6 to 8 concise, highly relevant, and practical FAQs (Frequently Asked Questions) answering real-world consumer/business queries specifically about "${primaryKeyword}". At least 1-2 FAQ questions MUST include the exact keyword "${primaryKeyword}".
3. A suggested Featured Hero Image Prompt describing a professional legal illustration specifically representing "${primaryKeyword}" that MUST feature real people, an Indian legal or corporate setting in the background, and prominently feature the exact title of the blog written within the image. Exclusively use colors #D29E0D (gold), white, and black.
4. A suggested Infographic Flowchart Prompt describing a sleek 2D corporate infographic visualizing key stages, statistics, legal workflows, or comparison data specifically for "${primaryKeyword}" with callouts, styled in gold (#D29E0D), dark navy/slate (#1a202c), and clean white background.
5. A list of 3 to 5 authoritative Indian legal and regulatory external references relevant to "${primaryKeyword}" (e.g., Supreme Court of India, High Courts, India Code, relevant ministry or statutory portal).
6. 10 to 15 relevant SEO keyword phrases centered on "${primaryKeyword}".

Scope: Focus strictly and exclusively on "${primaryKeyword}".

Article Title: ${step1Result.title}
Article Subtitle: ${step1Result.subtitle}
Article Summary Context:
${cleanedDescription.substring(0, 3500)} ...

Return ONLY a JSON object with this exact structure:
{
  "keyTakeaways": "Concise 2-3 sentence executive legal takeaway summarizing rights, laws, procedures, and remedies for ${primaryKeyword}...",
  "faqs": [
    { "question": "Practical question about ${primaryKeyword}?", "answer": "Clear, authoritative answer." }
  ],
  "suggestedImagePrompt": "Visual description for the article's featured hero image representing ${primaryKeyword}",
  "suggestedInfographicPrompt": "Visual description for the article's infographic flowchart for ${primaryKeyword}",
  "references": [
    { "title": "Official Legal Portal / Statute", "url": "https://www.indiacode.nic.in/" }
  ],
  "keywords": ["${primaryKeyword} query 1", "${primaryKeyword} query 2"]
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

        // Dynamic, topic-tailored fallback for Key Takeaways
        if (!keyTakeaways) {
            keyTakeaways = `Understanding the statutory framework, legal procedures, and strategic remedies for ${primaryKeyword} empowers individuals and businesses in India to protect their rights and achieve definitive resolution through experienced advocate counsel.`;
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

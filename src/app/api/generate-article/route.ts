
import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { adminDb } from '../../../lib/firebase-admin';

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

// Helper to ensure internal links are well-distributed
function enrichInternalLinks(htmlContent: string, links: { url: string; keywords: string[] }[]) {
    let enriched = htmlContent;
    let currentLinkCount = (enriched.match(/<a\s[^>]*href=["'][^"']*["']/gi) || []).length;
    if (currentLinkCount >= 5) return enriched;

    for (const linkItem of links) {
        if (currentLinkCount >= 7) break;
        // If url already linked, skip
        if (enriched.includes(`href="${linkItem.url}"`) || enriched.includes(`href='${linkItem.url}'`)) {
            continue;
        }
        for (const keyword of linkItem.keywords) {
            // Match keyword only if not inside an HTML tag or already within an <a>...</a>
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

export async function POST(request: Request) {
    const openai = new OpenAI({
        apiKey: process.env.HELLO_DROP_CHOO,
    });

    const sanitizeText = (txt: string) => txt.replace(/—/g, "-").replace(/\u2014/g, "-");

    try {
        const body = await request.json();
        const primaryKeyword = body.primaryKeyword;
        const promptId = body.promptId;

        if (!primaryKeyword) {
            return NextResponse.json({ error: 'Primary Keyword is required' }, { status: 400 });
        }

        let coreInstructions = "You are a professional legal SEO and AEO strategist. Write in a highly authoritative, informative, and professional tone suitable for a top-tier law firm.";
        let targetWordCount = 3500;

        if (promptId) {
            try {
                const promptDoc = await adminDb.collection('prompts').doc(promptId).get();
                if (promptDoc.exists) {
                    const data = promptDoc.data();
                    coreInstructions = data?.coreInstructions || coreInstructions;
                    targetWordCount = data?.targetWordCount || targetWordCount;
                }
            } catch (error) {
                console.error("Error fetching prompt profile:", error);
            }
        }

        // Fetch recent published blogs from Firestore for dynamic interlinking
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

        console.log(`[AI Generator Flow] Step 1: Generating SEO metadata and Article Outline for: [${primaryKeyword}]...`);

        // STEP 1: Generate Title, Subtitle, Meta Title, Meta Description, Slug, and Outline
        const step1Completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "system",
                    content: `${coreInstructions}

--- TECHNICAL REQUIREMENTS FOR STEP 1 ---
Task: Generate an SEO-optimized H1 Title, engaging subtitle, meta title, meta description, URL slug, and a detailed outline of 10 to 12 H2 headings for an exhaustive blog article.
Primary Keyword: ${primaryKeyword}

Outline Guidelines:
- Ensure at least 1 or 2 headings naturally lend themselves to structured data tables (e.g. comparison of legal remedies, procedural steps vs timelines, rights vs obligations, or criteria/fee matrices) so that AI crawlers (Perplexity, ChatGPT Search, Google SGE) can easily extract structured table content.
- CRITICAL: Do NOT include any headings for "FAQs", "Frequently Asked Questions", "Reviews", or "Conclusion" in your outline. These sections will be generated separately.

Return ONLY a JSON object with this exact structure:
{
  "title": "H1 Title containing the primary keyword (max 70 chars)",
  "subtitle": "Engaging subtitle (max 120 chars)",
  "metaTitle": "SEO meta title (60-70 chars)",
  "metaDescription": "SEO meta description (150-160 chars)",
  "slug": "url-friendly-slug",
  "outline": [
    "Dynamic and engaging introductory H2 heading specific to the topic",
    "Dynamic secondary H2 heading exploring the core legal concept",
    ... (10 to 12 detailed H2 heading titles)
  ]
}`
                }
            ],
            response_format: { type: "json_object" },
            temperature: 0.7,
        });

        const step1ResultStr = sanitizeText(step1Completion.choices[0].message.content || "{}");
        const step1Result = JSON.parse(step1ResultStr);
        let outline: string[] = step1Result.outline || [];
        
        // Filter out FAQ, Review, or Conclusion headings just in case the AI ignores the instruction
        outline = outline.filter(h => !/faq|frequently asked|review|conclusion/i.test(h));

        console.log(`[AI Generator Flow] Step 1 complete. Title: "${step1Result.title}", Outline items: ${outline.length}`);
        console.log(`[AI Generator Flow] Step 2: Iteratively generating description content with internal links (Aiming for 3500+ words HTML)...`);

        // STEP 2: Iteratively generate content for each outline heading
        let finalHtmlBodyChunks = [];

        // Pre-determine exactly 1 or 2 specific sections for table placement across the entire article
        // Target: strictly 1 to 2 tables total per blog (never 5 or 6)
        const tableIndices = new Set<number>();
        for (let i = 0; i < outline.length; i++) {
            if (/comparison|vs|difference|process|timeline|matrix|checklist|remedies/i.test(outline[i])) {
                tableIndices.add(i);
                if (tableIndices.size >= 2) break;
            }
        }
        
        // If no keyword matches or only 1, pick balanced section positions (e.g., section 2 and/or section 6)
        if (tableIndices.size === 0 && outline.length >= 3) {
            tableIndices.add(2);
            if (outline.length >= 7) {
                tableIndices.add(6);
            }
        } else if (tableIndices.size === 1 && outline.length >= 6) {
            const existingIdx = Array.from(tableIndices)[0];
            const secondIdx = existingIdx < 4 ? Math.min(existingIdx + 4, outline.length - 2) : Math.max(existingIdx - 4, 1);
            tableIndices.add(secondIdx);
        }

        let tablesGeneratedCount = 0;

        for (let i = 0; i < outline.length; i++) {
            const heading = outline[i];
            const sectionWordCount = Math.floor(targetWordCount / Math.max(outline.length, 1));
            const shouldGenerateTable = tableIndices.has(i) && tablesGeneratedCount < 2;

            if (shouldGenerateTable) {
                tablesGeneratedCount++;
            }

            console.log(`[AI Generator Flow] Step 2.${i + 1}: Expanding heading "${heading}" (Target: ~${sectionWordCount} words, Generate Table: ${shouldGenerateTable})...`);

            const step2SystemPrompt = `
${coreInstructions}

--- TECHNICAL REQUIREMENTS FOR STEP 2 ---
Target Primary Keyword: ${primaryKeyword}
Article Title: ${step1Result.title}

Task: You are writing ONLY the content for the specific H2 section titled: "${heading}".
Word Count: Write approximately ${sectionWordCount} words for this specific section alone. Ensure it is extremely detailed and comprehensive.

Formatting Requirements:
- Output HTML ONLY. Start directly with an <h2>${heading}</h2> tag.
- Follow the <h2> with <p>, <h3>, <ul>, <li> tags.
- Do NOT use markdown headers (like ## or ###) or bolding (like **text**). Use HTML tags instead.
- Do NOT wrap the response in markdown code blocks like \`\`\`html. Output RAW HTML only.
- Do NOT include any main article H1 title.
- Do NOT include any FAQs or Reviews in this content.

--- TABLE DIRECTIVE ---
${shouldGenerateTable 
    ? `MANDATORY FOR THIS SECTION: You MUST include exactly 1 comprehensive, clean, and highly structured HTML <table> (with 3 to 4 columns and 4 to 5 rows) summarizing key comparison points, procedural steps, legal remedies, or timelines.
Format:
<table>
  <thead>
    <tr>
      <th>Parameter / Criterion</th>
      <th>Key Details / Legal Provision</th>
      <th>Timeline / Practical Impact</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
  </tbody>
</table>
Do NOT include more than 1 table in this section.`
    : `STRICT PROHIBITION: DO NOT include any <table> tags in this section. Format this section using exclusively informative paragraphs <p>, subheadings <h3>, and bullet lists <ul>/<li>.`
}

--- MANDATORY INTERNAL LINKING DIRECTIVE ---
You MUST include 1 to 2 natural, contextual internal HTML hyperlinks within the text of this section whenever relevant.
Rules:
1. ONLY use URLs from the following Approved Internal Links List:
${formattedInternalLinks}
2. Wrap natural, contextual keywords in standard anchor tags: <a href="URL">Relevant Contextual Keyword</a>.
3. NEVER use generic text like "click here", "read more", "this link", or raw naked URLs.
4. Ensure the anchor text flows 100% naturally and grammatically within the sentence.
5. Do NOT invent any URLs that are not in the approved list.
`;

            const sectionContext = `Write the specific HTML section for "${heading}" relating to the primary keyword: ${primaryKeyword}`;

            try {
                const sectionCompletion = await openai.chat.completions.create({
                    model: "gpt-4o",
                    messages: [
                        { role: "system", content: step2SystemPrompt },
                        { role: "user", content: sectionContext },
                    ],
                    temperature: 0.8,
                });

                let rawSection = sanitizeText(sectionCompletion.choices[0].message.content || "");
                let cleanedSection = rawSection.trim();
                
                // Clean up markdown fences
                if (cleanedSection.startsWith("```html")) {
                    cleanedSection = cleanedSection.slice(7).trim();
                } else if (cleanedSection.startsWith("```")) {
                    cleanedSection = cleanedSection.slice(3).trim();
                }
                if (cleanedSection.endsWith("```")) {
                    cleanedSection = cleanedSection.slice(0, -3).trim();
                }

                finalHtmlBodyChunks.push(cleanedSection);
            } catch (err) {
                console.error(`[AI Generator Flow] Step 2.${i + 1}: Error generating section "${heading}":`, err);
                // Continue to the next section even if one fails
            }
        }

        let cleanedDescription = finalHtmlBodyChunks.join("\n\n");
        // Enrich with smart interlinker fallback to guarantee solid internal linking
        cleanedDescription = enrichInternalLinks(cleanedDescription, allAvailableLinks);

        // Safety cap: Ensure total tables across the entire article is strictly between 1 and 2 (maximum 2)
        const tableMatches = Array.from(cleanedDescription.matchAll(/<table[\s\S]*?<\/table>/gi));
        if (tableMatches.length > 2) {
            let currentTableIdx = 0;
            cleanedDescription = cleanedDescription.replace(/<table[\s\S]*?<\/table>/gi, (match) => {
                currentTableIdx++;
                if (currentTableIdx <= 2) return match;
                return ''; // Remove any excess tables beyond 2
            });
        }

        console.log(`[AI Generator Flow] Step 2 complete. Total description length: ${cleanedDescription.split(/\s+/).length} words.`);
        console.log(`[AI Generator Flow] Step 3: Generating FAQs, reviews, and dual image prompts (featured + infographic)...`);

        // STEP 3: Generate FAQs, Reviews, suggestedImagePrompt, suggestedInfographicPrompt
        let faqs: any[] = [];
        let reviews: any[] = [];
        let suggestedImagePrompt = "Professional legal recovery illustration";
        let suggestedInfographicPrompt = "Professional legal data and statistical breakdown infographic";
        let references: any[] = [];

        try {
            const step3SystemPrompt = `
${coreInstructions}

--- TECHNICAL REQUIREMENTS FOR STEP 3 ---
Task: Analyze the following generated article Title, Subtitle, and HTML Description, and generate:
1. At least 8-10 highly relevant, detailed FAQs (frequently asked questions) that directly relate to the article content.
2. 5 realistic customer review snippets (with Indian names) expressing high satisfaction with the legal service.
3. A suggested image prompt describing a highly professional legal illustration that MUST feature real people, an Indian landscape or setting in the background, and prominently feature the exact title of the blog written within the image. The image must exclusively use the colors #D29E0D, white, and black.
4. A suggested infographic prompt designed specifically for this blog topic. It MUST describe a clean, modern 2D vector/corporate infographic visualizing key statistics, comparative bar charts, process workflows, timelines, and data metrics about this specific topic. The prompt should specify clear numerical callouts, sleek data visualization cards, and a color palette of gold (#D29E0D, #B8860B), dark navy/slate (#1a202c), and clean white background with high legibility.
5. A list of 3-5 highly authoritative external references (like RBI, NCDRC, India Code, Supreme Court) relevant to the article's topic.
6. A list of 10-15 highly relevant SEO keyword phrases (unlinked) that users might search to find this content.
7. A concise "Key Takeaways" paragraph summarizing the most important takeaways from the article.

Article Title: ${step1Result.title}
Article Subtitle: ${step1Result.subtitle}

Article Description (Partial/Summary context):
${cleanedDescription.substring(0, 4000)} ... (content truncated for context)

Return ONLY a JSON object with this exact structure:
{
  "faqs": [
    { "question": "Detailed question?", "answer": "Detailed helpful answer." }
  ],
  "reviews": [
    { "name": "Reviewer Full Name", "rating": 5, "review": "Detailed review text..." }
  ],
  "suggestedImagePrompt": "Visual description for the article's featured cover image",
  "suggestedInfographicPrompt": "Visual description for the article's data and charts infographic",
  "references": [
    { "title": "Reserve Bank of India (RBI) Official Guidelines", "url": "https://www.rbi.org.in/" }
  ],
  "keywords": ["keyword phrase 1", "keyword phrase 2"],
  "keyTakeaways": "A concise paragraph summarizing the key takeaways from the article..."
}`;

            const step3Completion = await openai.chat.completions.create({
                model: "gpt-4o",
                messages: [
                    { role: "system", content: step3SystemPrompt }
                ],
                response_format: { type: "json_object" },
                temperature: 0.8,
            });

            const step3ResultStr = sanitizeText(step3Completion.choices[0].message.content || "{}");
            const step3Result = JSON.parse(step3ResultStr);

            faqs = step3Result.faqs || [];
            reviews = step3Result.reviews || [];
            suggestedImagePrompt = step3Result.suggestedImagePrompt || "Professional legal recovery illustration";
            suggestedInfographicPrompt = step3Result.suggestedInfographicPrompt || "Professional legal data and statistical breakdown infographic";
            references = step3Result.references || [];
            
            const keywords = step3Result.keywords || [];
            if (keywords.length > 0) {
                // Append Keywords section as standard HTML list so Tiptap preserves it
                const keywordsHtml = keywords.map((k: string) => `<li>${k}</li>`).join('\n');
                cleanedDescription += `\n\n<h3>Popular Searches</h3>\n<ul>\n${keywordsHtml}\n</ul>`;
            }

            const keyTakeaways = step3Result.keyTakeaways || step3Result.tldr;
            if (keyTakeaways) {
                // Prepend Key Takeaways to the top of the description
                cleanedDescription = `<blockquote><strong>Key Takeaways:</strong> ${keyTakeaways}</blockquote>\n\n` + cleanedDescription;
            }

            console.log(`[AI Generator Flow] Step 3 complete. FAQs: ${faqs.length}, Reviews: ${reviews.length}, Keywords: ${keywords.length}, KeyTakeaways: ${!!keyTakeaways}`);
        } catch (step3Error) {
            console.error("[AI Generator Flow] Error in Step 3:", step3Error);
        }

        // Build the final unified JSON object
        const finalResult = {
            title: step1Result.title,
            subtitle: step1Result.subtitle,
            metaTitle: step1Result.metaTitle,
            metaDescription: step1Result.metaDescription,
            slug: step1Result.slug,
            description: cleanedDescription,
            faqs: faqs,
            reviews: reviews,
            suggestedImagePrompt: suggestedImagePrompt,
            suggestedInfographicPrompt: suggestedInfographicPrompt,
            references: references
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
        console.error('Error generating article:', error);
        return NextResponse.json(
            { error: 'Internal server error', details: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}

export const maxDuration = 300;

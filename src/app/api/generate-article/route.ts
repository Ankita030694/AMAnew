
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(request: Request) {
    const openai = new OpenAI({
        apiKey: process.env.HELLO_DROP_CHOO,
    });

    const sanitizeText = (txt: string) => txt.replace(/—/g, "-").replace(/\u2014/g, "-");

    try {
        const body = await request.json();
        const primaryKeyword = body.primaryKeyword;

        if (!primaryKeyword) {
            return NextResponse.json({ error: 'Primary Keyword is required' }, { status: 400 });
        }

        console.log(`[AI Generator Flow] Step 1: Generating SEO metadata and Article Outline for: [${primaryKeyword}]...`);

        // STEP 1: Generate Title, Subtitle, Meta Title, Meta Description, Slug, and Outline
        const step1Completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "system",
                    content: `You are a professional legal SEO and AEO strategist.
Generate an SEO-optimized H1 Title, engaging subtitle, meta title, meta description, URL slug, and a detailed outline of 10 to 12 H2 headings for an exhaustive blog article on AMA Legal Solutions.
Primary Keyword: ${primaryKeyword}

CRITICAL NEGATIVE CONSTRAINT:
Under no circumstances should you include any em dashes (—) anywhere in your response. Always use normal hyphens (-), colons (:), commas, parentheses, or rewrite the sentence to avoid them.

Return ONLY a JSON object with this exact structure:
{
  "title": "H1 Title containing the primary keyword (max 70 chars)",
  "subtitle": "Engaging subtitle (max 120 chars)",
  "metaTitle": "SEO meta title (60-70 chars)",
  "metaDescription": "SEO meta description (150-160 chars)",
  "slug": "url-friendly-slug",
  "outline": [
    "Introduction to Primary Keyword",
    "Understanding the Legal Framework...",
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
        const outline: string[] = step1Result.outline || [];

        console.log(`[AI Generator Flow] Step 1 complete. Title: "${step1Result.title}", Outline items: ${outline.length}`);
        console.log(`[AI Generator Flow] Step 2: Iteratively generating description content (Aiming for 3500+ words HTML)...`);

        // STEP 2: Iteratively generate content for each outline heading
        let finalHtmlBodyChunks = [];

        for (let i = 0; i < outline.length; i++) {
            const heading = outline[i];
            console.log(`[AI Generator Flow] Step 2.${i + 1}: Expanding heading "${heading}"...`);
            
            const step2SystemPrompt = `
You are a professional legal content writer and SEO expert writing for AMA Legal Solutions (https://www.amalegalsolutions.com).
Target Primary Keyword: ${primaryKeyword}
Article Title: ${step1Result.title}

**CRITICAL WORD COUNT REQUIREMENT**:
You are writing ONLY the content for the specific H2 section titled: "${heading}".
Write exactly 350 to 450 words for this specific section alone. Ensure it is extremely detailed, comprehensive, and exhaustive. Expand with 4-6 detailed paragraphs.

**Requirements**:
- **Structure**: Output HTML ONLY. Start with an <h2>${heading}</h2> tag, followed by <p>, <h3>, <ul>, <li>, or <table> tags as appropriate.
- **Tone**: Professional, authoritative, human. Use Indian context (Rupees ₹, RBI, etc.) naturally.
- **No Markdown**: Do NOT use markdown headers (like ## or ###) or markdown bold (like **text**). Use HTML tags instead.
- **Internal Linking**: You MUST naturally integrate mentions and links to the following AMA Legal Solutions services within the text where relevant:
  - https://www.amalegalsolutions.com/services/banking-and-finance
  - https://www.amalegalsolutions.com/services/loan-settlement
  - https://www.amalegalsolutions.com/services/intellectual-property-rights
  - https://www.amalegalsolutions.com/services/entertainment
  - https://www.amalegalsolutions.com/services/real-estate
  - https://www.amalegalsolutions.com/services/criminal-law
  - https://www.amalegalsolutions.com/services/corporate
  - https://www.amalegalsolutions.com/services/arbitration
  - https://www.amalegalsolutions.com/services/cyber
  - https://www.amalegalsolutions.com/services/civil
  - https://www.amalegalsolutions.com/services/drafting
  - https://www.amalegalsolutions.com/services/litigation
- **Do NOT** include any main article H1 title. Start directly with the <h2> tag for your section.
- **Do NOT** include any FAQs or Reviews in this content.
- **Do NOT** wrap the response in markdown code blocks like \`\`\`html or \`\`\`. Output RAW HTML only.
- **CRITICAL NEGATIVE CONSTRAINT**:
  Under no circumstances should you include any em dashes (—) anywhere in your entire response. Always use normal hyphens (-), colons, commas, or parentheses if needed instead.
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
                console.error(`[AI Generator Flow] Step 2.${i + 1} Error generating section "${heading}":`, err);
                // Continue to the next section even if one fails
            }
        }

        const cleanedDescription = finalHtmlBodyChunks.join("\n\n");
        console.log(`[AI Generator Flow] Step 2 complete. Total description length: ${cleanedDescription.split(/\s+/).length} words.`);
        console.log(`[AI Generator Flow] Step 3: Generating FAQs, reviews, and image prompt in the context of the description...`);

        // STEP 3: Generate FAQs, Reviews, suggestedImagePrompt based on the Title, Subtitle, and Description
        let faqs = [];
        let reviews = [];
        let suggestedImagePrompt = "Professional legal recovery illustration";

        try {
            const step3SystemPrompt = `
You are a legal content strategist and SEO expert.
Analyze the following generated article Title, Subtitle, and HTML Description, and generate:
1. At least 8-10 highly relevant, detailed FAQs (frequently asked questions) that directly relate to the article content.
2. 5 realistic customer review snippets (with Indian names) expressing high satisfaction with the legal service.
3. A suggested image prompt describing a clean, professional, modern corporate infographic/illustration suitable for this article.

Article Title: ${step1Result.title}
Article Subtitle: ${step1Result.subtitle}

Article Description (Partial/Summary context):
${cleanedDescription.substring(0, 4000)} ... (content truncated for context)

CRITICAL NEGATIVE CONSTRAINT:
Under no circumstances should you include any em dashes (—) anywhere in your response. Always use normal hyphens (-), colons (:), commas, parentheses, or rewrite the sentence to avoid them.

Return ONLY a JSON object with this exact structure:
{
  "faqs": [
    { "question": "Detailed question?", "answer": "Detailed helpful answer." }
  ],
  "reviews": [
    { "name": "Reviewer Full Name", "rating": 5, "review": "Detailed review text..." }
  ],
  "suggestedImagePrompt": "Visual description for the article's featured image"
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

            console.log(`[AI Generator Flow] Step 3 complete. FAQs: ${faqs.length}, Reviews: ${reviews.length}`);
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
            suggestedImagePrompt: suggestedImagePrompt
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

export const runtime = 'edge';
export const maxDuration = 300;

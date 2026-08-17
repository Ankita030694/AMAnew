
import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { adminDb } from '../../../lib/firebase-admin';

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

CRITICAL: Do NOT include any headings for "FAQs", "Frequently Asked Questions", "Reviews", or "Conclusion" in your outline. These sections will be generated separately.

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
        let outline: string[] = step1Result.outline || [];
        
        // Filter out FAQ, Review, or Conclusion headings just in case the AI ignores the instruction
        outline = outline.filter(h => !/faq|frequently asked|review|conclusion/i.test(h));

        console.log(`[AI Generator Flow] Step 1 complete. Title: "${step1Result.title}", Outline items: ${outline.length}`);
        console.log(`[AI Generator Flow] Step 2: Iteratively generating description content (Aiming for 3500+ words HTML)...`);

        // STEP 2: Iteratively generate content for each outline heading
        let finalHtmlBodyChunks = [];

        for (let i = 0; i < outline.length; i++) {
            const heading = outline[i];
            const sectionWordCount = Math.floor(targetWordCount / Math.max(outline.length, 1));
            console.log(`[AI Generator Flow] Step 2.${i + 1}: Expanding heading "${heading}" (Target: ~${sectionWordCount} words)...`);
            
            const step2SystemPrompt = `
${coreInstructions}

--- TECHNICAL REQUIREMENTS FOR STEP 2 ---
Target Primary Keyword: ${primaryKeyword}
Article Title: ${step1Result.title}

Task: You are writing ONLY the content for the specific H2 section titled: "${heading}".
Word Count: Write approximately ${sectionWordCount} words for this specific section alone. Ensure it is extremely detailed and comprehensive.

Formatting Requirements:
- Output HTML ONLY. Start directly with an <h2>${heading}</h2> tag.
- Follow the <h2> with <p>, <h3>, <ul>, <li>, or <table> tags as appropriate.
- Do NOT use markdown headers (like ## or ###) or bolding (like **text**). Use HTML tags instead.
- Do NOT wrap the response in markdown code blocks like \`\`\`html. Output RAW HTML only.
- Do NOT include any main article H1 title.
- Do NOT include any FAQs or Reviews in this content.
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
${coreInstructions}

--- TECHNICAL REQUIREMENTS FOR STEP 3 ---
Task: Analyze the following generated article Title, Subtitle, and HTML Description, and generate:
1. At least 8-10 highly relevant, detailed FAQs (frequently asked questions) that directly relate to the article content.
2. 5 realistic customer review snippets (with Indian names) expressing high satisfaction with the legal service.
3. A suggested image prompt describing a highly professional legal illustration that MUST feature real people, an Indian landscape or setting in the background, and prominently feature the exact title of the blog written within the image. The image must exclusively use the colors #D29E0D, white, and black. Do NOT generate random infographics stuffed with numerics.

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

export const maxDuration = 300;

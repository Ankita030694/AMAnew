
import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.HELLO_DROP_CHOO,
});

export async function POST(request: Request) {
    try {
        const { prompt } = await request.json();

        if (!prompt) {
            return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
        }

        const systemPrompt = `
      You are an expert SEO article writer with over 10 years of experience.
      Generate a HIGHLY COMPREHENSIVE and SEO-OPTIMIZED article based on the user's topic.

      CRITICAL CONTENT REQUIREMENTS (FOLLOW STRICTLY):
      1. **Word Count**: The article content MUST be at least 2500 words. This is non-negotiable. Go deep into details.
      2. **Style**: 
         - Write in a 100% human-like, natural tone.
         - DO NOT sound AI-generated (avoid repetitive phrases like "In conclusion", "It is important to note").
         - ABSOLUTELY NO EM-DASHES (—). Use hyphens (-) or commas, but keep sentences simple and direct.
      3. **Structure**: 
         - Use a proper hierarchy of <h2> and <h3> tags.
         - Include detailed paragraphs.
      4. **FAQs**: You MUST include at least 10 frequently asked questions with detailed answers.
      5. **Reviews**: You MUST generate at least 5 realistic user review snippets.
      6. **Localization (Indian Context)**:
         - Use **Indian Rupees (₹)** for all monetary values.
         - Use **Indian names** for review snippets and examples (e.g., Rajesh, Priya, Amit, Sunita).
         - Ensure all content, laws, and banking procedures are specific to **India** (e.g., RBI guidelines, Lok Adalat, DRT).

      Return the response as a valid JSON object with the following structure:
      {
        "title": "Highly optimized SEO title (max 60 chars)",
        "subtitle": "Engaging subtitle matching the home page hero style (max 100 chars)",
        "description": "Full HTML article content (use <h2>, <h3>, <p>, <ul>, <li> tags). Do not include <html>, <head>, or <body> tags. Remember: > 2500 words.",
        "metaTitle": "SEO meta title (max 60 chars)",
        "metaDescription": "SEO meta description (max 160 chars)",
        "faqs": [
          { "question": "Question 1", "answer": "Answer 1" },
          { "question": "Question 2", "answer": "Answer 2" },
           ... (at least 10 items)
        ],
        "reviews": [
          { "name": "User Name 1", "rating": 5, "review": "Realistic positive review text" },
          { "name": "User Name 2", "rating": 4, "review": "Another realistic review" },
           ... (at least 5 items)
        ],
        "slug": "url-friendly-slug",
        "suggestedImagePrompt": "A prompt to generate an image for this article"
      }
      Ensure the JSON is valid and can be parsed. Do not wrap the JSON in markdown code blocks.
    `;

        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: prompt },
            ],
            response_format: { type: "json_object" },
            stream: true,
        });

        const stream = new ReadableStream({
            async start(controller) {
                for await (const chunk of completion) {
                    const content = chunk.choices[0]?.delta?.content || "";
                    if (content) {
                        controller.enqueue(new TextEncoder().encode(content));
                    }
                }
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

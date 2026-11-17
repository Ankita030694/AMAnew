import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { google } from 'googleapis';
import { submitUrlsToIndexNow } from '@/lib/indexnow';
import { submitSitemapsAndUrlsToBing } from '@/lib/bing-webmaster';

export const dynamic = 'force-dynamic';

const SITE_ORIGIN = 'https://www.amalegalsolutions.com';

async function submitSitemapsToGsc() {
  const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL || process.env.SEARCH_CONSOLE_CLIENT_EMAIL;
  const rawPrivateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY || process.env.SEARCH_CONSOLE_PRIVATE_KEY;

  if (!clientEmail || !rawPrivateKey) {
    return { gscSubmitted: false, reason: 'Missing GSC credentials' };
  }

  try {
    const privateKey = rawPrivateKey.replace(/\\n/g, '\n');
    const auth = new google.auth.GoogleAuth({
      credentials: { client_email: clientEmail, private_key: privateKey },
      scopes: ['https://www.googleapis.com/auth/webmasters'],
    });

    const searchconsole = google.searchconsole({ version: 'v1', auth });
    const siteUrl = 'sc-domain:amalegalsolutions.com';
    const feeds = [
      'https://www.amalegalsolutions.com/sitemap.xml',
      'https://www.amalegalsolutions.com/sitemap-image.xml',
      'https://www.amalegalsolutions.com/api/rss',
    ];

    for (const feedpath of feeds) {
      await searchconsole.sitemaps.submit({ siteUrl, feedpath }).catch(() => {});
    }
    return { gscSubmitted: true, feeds };
  } catch (err: any) {
    return { gscSubmitted: false, error: err?.message || 'GSC error' };
  }
}

export async function GET(request: NextRequest) {
  try {
    const slug = request.nextUrl.searchParams.get('slug');
    const type = request.nextUrl.searchParams.get('type') || 'blog';

    // 1. Revalidate sitemaps, RSS feed, and main listing pages
    revalidatePath('/sitemap.xml');
    revalidatePath('/sitemap-image.xml');
    revalidatePath('/api/rss');
    revalidatePath('/blog');
    revalidatePath('/paged/blog/[page]', 'page');
    revalidatePath('/articles');

    if (slug) {
      if (type === 'article') {
        revalidatePath(`/articles/${slug}`);
      } else {
        revalidatePath(`/blog/${slug}`);
      }
    }

    // 2. Build URLs to push immediately via IndexNow
    const urlsToPing: string[] = [`${SITE_ORIGIN}/`];
    if (type === 'article') {
      urlsToPing.push(`${SITE_ORIGIN}/articles`);
      if (slug) {
        urlsToPing.push(`${SITE_ORIGIN}/articles/${encodeURIComponent(slug)}`);
      }
    } else {
      urlsToPing.push(`${SITE_ORIGIN}/blog`);
      if (slug) {
        urlsToPing.push(`${SITE_ORIGIN}/blog/${encodeURIComponent(slug)}`);
      }
    }

    if (request.method === 'POST') {
      const rawBody = await request.text().catch(() => '');
      if (rawBody.trim().length > 0) {
        try {
          const parsed = JSON.parse(rawBody);
          if (Array.isArray(parsed?.urls)) {
            const extraUrls = parsed.urls
              .filter((u: unknown): u is string => typeof u === 'string')
              .slice(0, 500);
            urlsToPing.push(...extraUrls);
          }
        } catch {
          // Ignore invalid JSON body
        }
      }
    }

    // 3. Submit updated sitemaps to GSC, ping IndexNow, and push to Bing Webmaster API in parallel
    const [gscResult, indexNowResult, bingResult] = await Promise.all([
      submitSitemapsToGsc(),
      submitUrlsToIndexNow(urlsToPing),
      submitSitemapsAndUrlsToBing(urlsToPing),
    ]);

    return NextResponse.json({
      revalidated: true,
      slug: slug || null,
      type,
      gsc: gscResult,
      indexNow: indexNowResult,
      bing: bingResult,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    return NextResponse.json(
      { revalidated: false, error: error?.message || 'Failed to revalidate' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  return GET(request);
}

const BING_WEBMASTER_API_BASE = 'https://ssl.bing.com/webmaster/api.svc/json';
const BING_SITE_URL = 'https://www.amalegalsolutions.com/';
const BING_FEEDS = [
  'https://www.amalegalsolutions.com/sitemap.xml',
  'https://www.amalegalsolutions.com/sitemap-image.xml',
  'https://www.amalegalsolutions.com/api/rss',
];

export interface BingWebmasterResult {
  bingSubmitted: boolean;
  feedsSubmitted: number;
  urlsSubmitted: number;
  reason?: string;
  error?: string;
}

async function postBingApi(
  method: 'SubmitFeed' | 'SubmitUrlBatch',
  apiKey: string,
  payload: Record<string, unknown>
): Promise<{ ok: boolean; status: number; error?: string }> {
  const endpoint = `${BING_WEBMASTER_API_BASE}/${method}?apikey=${encodeURIComponent(apiKey)}`;
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(8000),
  });

  if (response.ok) {
    return { ok: true, status: response.status };
  }

  const text = await response.text().catch(() => '');
  return {
    ok: false,
    status: response.status,
    error: text || `HTTP ${response.status}`,
  };
}

/**
 * Submits AMA Legal Solutions' sitemaps/RSS feeds and priority URLs directly to
 * the Bing Webmaster Tools JSON API when BING_WEBMASTER_API_KEY is configured.
 */
export async function submitSitemapsAndUrlsToBing(urls: string[]): Promise<BingWebmasterResult> {
  const apiKey = process.env.BING_WEBMASTER_API_KEY?.trim();
  if (!apiKey) {
    return {
      bingSubmitted: false,
      feedsSubmitted: 0,
      urlsSubmitted: 0,
      reason: 'Missing BING_WEBMASTER_API_KEY',
    };
  }

  const seen = new Set<string>();
  const urlList: string[] = [];
  for (const raw of urls) {
    if (typeof raw !== 'string') continue;
    const trimmed = raw.trim();
    if (!trimmed) continue;
    try {
      const parsed = new URL(trimmed);
      if (
        parsed.protocol === 'https:' &&
        parsed.hostname === 'www.amalegalsolutions.com' &&
        !seen.has(parsed.href)
      ) {
        seen.add(parsed.href);
        urlList.push(parsed.href);
        if (urlList.length >= 500) break;
      }
    } catch {
      // Ignore malformed URLs
    }
  }

  let feedsSubmitted = 0;
  let urlsSubmitted = 0;
  const errors: string[] = [];

  for (const feedUrl of BING_FEEDS) {
    try {
      const res = await postBingApi('SubmitFeed', apiKey, {
        siteUrl: BING_SITE_URL,
        feedUrl,
      });
      if (res.ok) {
        feedsSubmitted += 1;
      } else {
        errors.push(`SubmitFeed(${feedUrl}): ${res.error}`);
      }
    } catch (err: any) {
      errors.push(`SubmitFeed(${feedUrl}): ${err?.message || 'request failed'}`);
    }
  }

  if (urlList.length > 0) {
    try {
      const res = await postBingApi('SubmitUrlBatch', apiKey, {
        siteUrl: BING_SITE_URL,
        urlList,
      });
      if (res.ok) {
        urlsSubmitted = urlList.length;
      } else {
        errors.push(`SubmitUrlBatch: ${res.error}`);
      }
    } catch (err: any) {
      errors.push(`SubmitUrlBatch: ${err?.message || 'request failed'}`);
    }
  }

  return {
    bingSubmitted: feedsSubmitted > 0 || urlsSubmitted > 0,
    feedsSubmitted,
    urlsSubmitted,
    ...(errors.length > 0 ? { error: errors.join('; ') } : {}),
  };
}

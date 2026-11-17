export const INDEXNOW_HOST = 'www.amalegalsolutions.com';
export const DEFAULT_INDEXNOW_KEY = 'a4f9c2e8d1b743059e6a2c8f1d4b7e3a';

export interface IndexNowResult {
  submitted: boolean;
  urlCount: number;
  status?: number;
  reason?: string;
  error?: string;
}

export function getIndexNowKey(): string {
  return (process.env.INDEXNOW_API_KEY || DEFAULT_INDEXNOW_KEY).trim();
}

/**
 * Submits one or more URLs on www.amalegalsolutions.com to the IndexNow API
 * (shared across Microsoft Bing, DuckDuckGo, Yahoo, Ecosia, and Copilot).
 */
export async function submitUrlsToIndexNow(rawUrls: string[]): Promise<IndexNowResult> {
  const seen = new Set<string>();
  const urlList: string[] = [];

  for (const raw of rawUrls) {
    if (typeof raw !== 'string') continue;
    const trimmed = raw.trim();
    if (!trimmed) continue;
    try {
      const parsed = new URL(trimmed);
      if (parsed.protocol === 'https:' && parsed.hostname === INDEXNOW_HOST && !seen.has(parsed.href)) {
        seen.add(parsed.href);
        urlList.push(parsed.href);
        if (urlList.length >= 10000) break;
      }
    } catch {
      // Ignore malformed URLs
    }
  }

  if (urlList.length === 0) {
    return { submitted: false, urlCount: 0, reason: 'No valid URLs' };
  }

  if (process.env.NODE_ENV !== 'production' && process.env.INDEXNOW_FORCE !== 'true') {
    return {
      submitted: false,
      urlCount: urlList.length,
      reason: 'Skipped outside production (set INDEXNOW_FORCE=true to override)',
    };
  }

  const key = getIndexNowKey();
  const keyLocation = `https://${INDEXNOW_HOST}/${key}.txt`;

  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: INDEXNOW_HOST,
        key,
        keyLocation,
        urlList,
      }),
      signal: AbortSignal.timeout(8000),
    });

    if (response.status === 200 || response.status === 202) {
      return {
        submitted: true,
        status: response.status,
        urlCount: urlList.length,
      };
    }

    const bodyText = await response.text().catch(() => '');
    return {
      submitted: false,
      status: response.status,
      urlCount: urlList.length,
      error: bodyText || `HTTP ${response.status}`,
    };
  } catch (err: any) {
    return {
      submitted: false,
      urlCount: urlList.length,
      error: err?.message || 'IndexNow request failed',
    };
  }
}

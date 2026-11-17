#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');

const BING_API_BASE = 'https://ssl.bing.com/webmaster/api.svc/json';
const HOST = 'www.amalegalsolutions.com';
const BASE_ORIGIN = `https://${HOST}`;
const FEEDS = [
  `${BASE_ORIGIN}/sitemap.xml`,
  `${BASE_ORIGIN}/sitemap-image.xml`,
  `${BASE_ORIGIN}/api/rss`,
];

const PRIORITY_PATHS = [
  '/',
  '/personal-loan-settlement',
  '/credit-card-settlement',
  '/credit-card-debt-settlement',
  '/services',
  '/services/loan-settlement',
  '/services/intellectual-property-rights',
  '/services/corporate',
  '/services/banking-and-finance',
  '/services/civil',
  '/services/criminal-law',
  '/services/arbitration',
  '/services/cyber',
  '/services/real-estate',
  '/services/drafting',
  '/send-legal-notice',
  '/best-debt-settlement-company',
  '/loan-settlement-by-bank',
  '/loan-settlement-services',
  '/success-stories',
  '/ama-legal-solutions-reviews',
  '/contact',
  '/about',
  '/blog',
  '/articles',
];

const PRIORITY_PREFIXES = [
  '/services/loan-settlement/',
  '/loan-settlement-by-bank/',
  '/credit-card-settlement/',
  '/loan-settlement-services/',
  '/success-stories/',
];

const TOP_INSPECT_URLS = [
  `${BASE_ORIGIN}/`,
  `${BASE_ORIGIN}/personal-loan-settlement`,
  `${BASE_ORIGIN}/credit-card-settlement`,
  `${BASE_ORIGIN}/services/loan-settlement`,
  `${BASE_ORIGIN}/services/intellectual-property-rights`,
];

function loadApiKey() {
  if (process.env.BING_WEBMASTER_API_KEY?.trim()) {
    return process.env.BING_WEBMASTER_API_KEY.trim();
  }

  const envPath = path.join(PROJECT_ROOT, '.env');
  if (!fs.existsSync(envPath)) {
    console.error('Error: .env file not found and BING_WEBMASTER_API_KEY env var is unset.');
    process.exit(1);
  }

  const envContent = fs.readFileSync(envPath, 'utf8');
  for (const line of envContent.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIndex = trimmed.indexOf('=');
    if (eqIndex === -1) continue;
    const key = trimmed.slice(0, eqIndex).trim();
    if (key === 'BING_WEBMASTER_API_KEY') {
      let val = trimmed.slice(eqIndex + 1).trim();
      if (
        (val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))
      ) {
        val = val.slice(1, -1);
      }
      if (val) return val.trim();
    }
  }

  console.error('Error: BING_WEBMASTER_API_KEY is missing in .env.');
  process.exit(1);
}

function decodeXmlEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

function formatBingDate(val) {
  if (!val || typeof val !== 'string') return val ?? null;
  const match = val.match(/\/Date\((\d+)([+-]\d+)?\)\//);
  if (match) {
    const ms = Number(match[1]);
    if (!Number.isNaN(ms)) return new Date(ms).toISOString();
  }
  return val;
}

async function bingRequest(method, apiKey, { query = {}, body } = {}) {
  const url = new URL(`${BING_API_BASE}/${method}`);
  url.searchParams.set('apikey', apiKey);
  for (const [k, v] of Object.entries(query)) {
    if (v !== undefined && v !== null) {
      url.searchParams.set(k, String(v));
    }
  }

  const isPost = body !== undefined;
  const res = await fetch(url.toString(), {
    method: isPost ? 'POST' : 'GET',
    headers: isPost ? { 'Content-Type': 'application/json; charset=utf-8' } : undefined,
    body: isPost ? JSON.stringify(body) : undefined,
    signal: AbortSignal.timeout(20000),
  });

  const rawText = await res.text();
  let parsed = null;
  if (rawText) {
    try {
      parsed = JSON.parse(rawText);
    } catch {
      parsed = rawText;
    }
  }

  if (!res.ok) {
    const detail =
      typeof parsed === 'object' && parsed !== null
        ? parsed.Message || parsed.message || JSON.stringify(parsed)
        : rawText || `HTTP ${res.status}`;
    throw new Error(`${method} failed (HTTP ${res.status}): ${detail}`);
  }

  if (typeof parsed === 'object' && parsed !== null && 'd' in parsed) {
    return parsed.d;
  }
  return parsed;
}

async function resolveSiteUrl(apiKey) {
  const sites = await bingRequest('GetUserSites', apiKey);
  const siteList = Array.isArray(sites) ? sites : [];
  const matched = siteList.find((s) =>
    typeof s?.Url === 'string' && s.Url.toLowerCase().includes('amalegalsolutions.com')
  );
  return {
    siteList,
    siteUrl: matched?.Url || `${BASE_ORIGIN}/`,
  };
}

async function fetchOrderedSitemapUrls() {
  const res = await fetch(`${BASE_ORIGIN}/sitemap.xml`, {
    signal: AbortSignal.timeout(20000),
  });
  if (!res.ok) {
    throw new Error(`Failed to fetch sitemap.xml (HTTP ${res.status})`);
  }
  const xml = await res.text();
  const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/gi)];

  const seen = new Set();
  const byPath = new Map();
  const allUrls = [];

  for (const match of matches) {
    const rawUrl = decodeXmlEntities(match[1].trim());
    if (!rawUrl) continue;
    try {
      const parsed = new URL(rawUrl);
      if (parsed.protocol === 'https:' && parsed.hostname === HOST && !seen.has(parsed.href)) {
        seen.add(parsed.href);
        allUrls.push(parsed.href);
        const normPath = parsed.pathname === '' ? '/' : parsed.pathname;
        if (!byPath.has(normPath)) {
          byPath.set(normPath, parsed.href);
        }
      }
    } catch {
      // Skip invalid URLs
    }
  }

  const ordered = [];
  const added = new Set();

  // 1. Exact priority commercial pages first
  for (const p of PRIORITY_PATHS) {
    const u = byPath.get(p);
    if (u && !added.has(u)) {
      ordered.push(u);
      added.add(u);
    }
  }

  // 2. High-value commercial category pages next
  for (const u of allUrls) {
    if (added.has(u)) continue;
    const pathname = new URL(u).pathname;
    if (PRIORITY_PREFIXES.some((prefix) => pathname.startsWith(prefix))) {
      ordered.push(u);
      added.add(u);
    }
  }

  // 3. Remaining sitemap URLs
  for (const u of allUrls) {
    if (!added.has(u)) {
      ordered.push(u);
      added.add(u);
    }
  }

  return ordered;
}

async function runSetup(apiKey) {
  console.log('1. Checking verified sites in Bing Webmaster Tools...');
  const { siteList, siteUrl } = await resolveSiteUrl(apiKey);
  console.log(
    `   Registered sites (${siteList.length}):`,
    siteList.map((s) => `${s.Url} (verified=${s.IsVerified})`).join(', ') || 'None'
  );
  console.log(`   Using siteUrl: ${siteUrl}`);

  console.log('\n2. Submitting sitemaps & RSS feed via SubmitFeed...');
  for (const feedUrl of FEEDS) {
    try {
      await bingRequest('SubmitFeed', apiKey, {
        body: { siteUrl, feedUrl },
      });
      console.log(`   Submitted: ${feedUrl}`);
    } catch (err) {
      console.error(`   Failed: ${feedUrl} -> ${err.message}`);
    }
  }

  console.log('\n3. Checking registered feeds via GetFeeds...');
  try {
    const feeds = await bingRequest('GetFeeds', apiKey, { query: { siteUrl } });
    const feedArr = Array.isArray(feeds) ? feeds : [];
    console.log(`   Total registered feeds: ${feedArr.length}`);
    for (const f of feedArr) {
      console.log(
        `   - ${f.Url} | Status=${f.Status} | Submitted=${formatBingDate(f.Submitted)} | LastCrawled=${formatBingDate(f.LastCrawled)} | UrlCount=${f.UrlCount ?? 'n/a'}`
      );
    }
  } catch (err) {
    console.error(`   GetFeeds error: ${err.message}`);
  }

  console.log('\n4. Checking URL submission quota via GetUrlSubmissionQuota...');
  let dailyQuota = 0;
  let monthlyQuota = 0;
  try {
    const quota = await bingRequest('GetUrlSubmissionQuota', apiKey, { query: { siteUrl } });
    dailyQuota = Number(quota?.DailyQuota ?? 0);
    monthlyQuota = Number(quota?.MonthlyQuota ?? 0);
    console.log(`   DailyQuota: ${dailyQuota}, MonthlyQuota: ${monthlyQuota}`);
  } catch (err) {
    console.error(`   GetUrlSubmissionQuota error: ${err.message}`);
  }

  console.log('\n5. Fetching sitemap URLs & submitting priority commercial URLs via SubmitUrlBatch...');
  const orderedUrls = await fetchOrderedSitemapUrls();
  console.log(`   Total unique URLs in sitemap.xml: ${orderedUrls.length}`);

  const maxToSubmit = Math.max(
    0,
    Math.min(orderedUrls.length, dailyQuota > 15 ? dailyQuota - 10 : dailyQuota)
  );
  let totalSubmitted = 0;

  if (maxToSubmit === 0) {
    console.log('   Skipping SubmitUrlBatch because DailyQuota is 0.');
  } else {
    const toSubmit = orderedUrls.slice(0, maxToSubmit);
    console.log(`   Submitting ${toSubmit.length} priority URLs (preserving 10 daily headroom)...`);
    for (let i = 0; i < toSubmit.length; i += 500) {
      const chunk = toSubmit.slice(i, i + 500);
      try {
        await bingRequest('SubmitUrlBatch', apiKey, {
          body: { siteUrl, urlList: chunk },
        });
        totalSubmitted += chunk.length;
        console.log(`   Batch ${Math.floor(i / 500) + 1} succeeded (${chunk.length} URLs).`);
      } catch (err) {
        console.error(`   Batch ${Math.floor(i / 500) + 1} failed: ${err.message}`);
        break;
      }
    }
  }

  try {
    const afterQuota = await bingRequest('GetUrlSubmissionQuota', apiKey, { query: { siteUrl } });
    console.log(
      `   Submitted ${totalSubmitted} URLs. Remaining quota -> DailyQuota: ${afterQuota?.DailyQuota}, MonthlyQuota: ${afterQuota?.MonthlyQuota}`
    );
  } catch (err) {
    console.log(`   Submitted ${totalSubmitted} URLs. (Post-check quota error: ${err.message})`);
  }

  console.log('\n6. Inspecting top 5 commercial pages via GetUrlInfo...');
  for (const targetUrl of TOP_INSPECT_URLS) {
    try {
      const info = await bingRequest('GetUrlInfo', apiKey, {
        query: { siteUrl, url: targetUrl },
      });
      console.log(
        `   - ${targetUrl} | HttpStatus=${info?.HttpStatus ?? 'n/a'} | IsPage=${info?.IsPage ?? 'n/a'} | LastCrawled=${formatBingDate(info?.LastCrawledDate) ?? 'n/a'} | Discovery=${formatBingDate(info?.DiscoveryDate) ?? 'n/a'}`
      );
    } catch (err) {
      console.log(`   - ${targetUrl} | GetUrlInfo error: ${err.message}`);
    }
  }
}

async function runStatus(apiKey) {
  const { siteList, siteUrl } = await resolveSiteUrl(apiKey);
  console.log('Sites:', siteList);

  const [feeds, quota, issues] = await Promise.all([
    bingRequest('GetFeeds', apiKey, { query: { siteUrl } }).catch((e) => ({ error: e.message })),
    bingRequest('GetUrlSubmissionQuota', apiKey, { query: { siteUrl } }).catch((e) => ({
      error: e.message,
    })),
    bingRequest('GetCrawlIssues', apiKey, { query: { siteUrl } }).catch((e) => ({ error: e.message })),
  ]);

  console.log('\nFeeds:', JSON.stringify(feeds, null, 2));
  console.log('\nQuota:', JSON.stringify(quota, null, 2));
  if (Array.isArray(issues)) {
    console.log(`\nCrawlIssues count: ${issues.length}`);
  } else {
    console.log('\nCrawlIssues:', JSON.stringify(issues, null, 2));
  }
}

async function runInspect(apiKey, targetUrl) {
  if (!targetUrl) {
    console.error('Usage: node scripts/bing-webmaster.mjs inspect <url>');
    process.exit(1);
  }
  const { siteUrl } = await resolveSiteUrl(apiKey);
  const info = await bingRequest('GetUrlInfo', apiKey, {
    query: { siteUrl, url: targetUrl },
  });
  console.log(JSON.stringify(info, null, 2));
}

async function runAnalytics(apiKey) {
  const { siteUrl } = await resolveSiteUrl(apiKey);
  const [rankAndTraffic, queryStats, pageStats] = await Promise.all([
    bingRequest('GetRankAndTrafficStats', apiKey, { query: { siteUrl } }).catch((e) => ({
      error: e.message,
    })),
    bingRequest('GetQueryStats', apiKey, { query: { siteUrl } }).catch((e) => ({ error: e.message })),
    bingRequest('GetPageStats', apiKey, { query: { siteUrl } }).catch((e) => ({ error: e.message })),
  ]);

  const snapshot = {
    fetchedAt: new Date().toISOString(),
    siteUrl,
    rankAndTraffic,
    queryStats,
    pageStats,
  };

  const outDir = path.join(PROJECT_ROOT, 'scratch');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'bing_analytics_snapshot.json');
  fs.writeFileSync(outPath, JSON.stringify(snapshot, null, 2));

  console.log('Bing Analytics Summary:');
  console.log(`- RankAndTraffic entries: ${Array.isArray(rankAndTraffic) ? rankAndTraffic.length : JSON.stringify(rankAndTraffic)}`);
  console.log(`- QueryStats entries: ${Array.isArray(queryStats) ? queryStats.length : JSON.stringify(queryStats)}`);
  console.log(`- PageStats entries: ${Array.isArray(pageStats) ? pageStats.length : JSON.stringify(pageStats)}`);
  console.log(`Saved full snapshot to ${outPath}`);
}

async function main() {
  const apiKey = loadApiKey();
  const cmd = (process.argv[2] || 'setup').toLowerCase();

  if (cmd === 'setup') {
    await runSetup(apiKey);
  } else if (cmd === 'status') {
    await runStatus(apiKey);
  } else if (cmd === 'inspect') {
    await runInspect(apiKey, process.argv[3]);
  } else if (cmd === 'analytics') {
    await runAnalytics(apiKey);
  } else {
    console.error(`Unknown command "${cmd}". Use: setup | status | inspect <url> | analytics`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('Bing Webmaster CLI error:', err?.message || err);
  process.exit(1);
});

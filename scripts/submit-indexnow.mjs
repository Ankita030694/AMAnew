#!/usr/bin/env node

const HOST = 'www.amalegalsolutions.com';
const BASE_URL = `https://${HOST}`;
const KEY = (process.env.INDEXNOW_API_KEY || 'a4f9c2e8d1b743059e6a2c8f1d4b7e3a').trim();
const KEY_URL = `${BASE_URL}/${KEY}.txt`;
const SITEMAP_URL = `${BASE_URL}/sitemap.xml`;
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
const CHUNK_SIZE = 10000;

function decodeXmlEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

async function main() {
  console.log(`1. Verifying live IndexNow key file at ${KEY_URL}...`);
  const keyRes = await fetch(KEY_URL, { signal: AbortSignal.timeout(10000) });
  const keyBody = (await keyRes.text()).trim();

  if (keyRes.status !== 200 || keyBody !== KEY) {
    console.error(
      `Key check failed (HTTP ${keyRes.status}). Expected body "${KEY}".\n` +
        `Please deploy public/${KEY}.txt to production first, then re-run this script.`
    );
    process.exit(1);
  }
  console.log('   Key verified (HTTP 200).');

  console.log(`2. Fetching live sitemap from ${SITEMAP_URL}...`);
  const sitemapRes = await fetch(SITEMAP_URL, { signal: AbortSignal.timeout(20000) });
  if (!sitemapRes.ok) {
    console.error(`Failed to fetch sitemap (HTTP ${sitemapRes.status}).`);
    process.exit(1);
  }
  const xml = await sitemapRes.text();

  const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/gi)];
  const seen = new Set();
  const urls = [];

  for (const match of matches) {
    const rawUrl = decodeXmlEntities(match[1].trim());
    if (!rawUrl) continue;
    try {
      const parsed = new URL(rawUrl);
      if (parsed.protocol === 'https:' && parsed.hostname === HOST && !seen.has(parsed.href)) {
        seen.add(parsed.href);
        urls.push(parsed.href);
      }
    } catch {
      // Skip invalid URLs
    }
  }

  console.log(`   Found ${urls.length} unique URLs.`);
  if (urls.length === 0) {
    console.error('No URLs found in sitemap. Exiting.');
    process.exit(1);
  }

  let totalSubmitted = 0;
  for (let i = 0; i < urls.length; i += CHUNK_SIZE) {
    const chunk = urls.slice(i, i + CHUNK_SIZE);
    const batchNum = Math.floor(i / CHUNK_SIZE) + 1;
    console.log(`3. Submitting batch ${batchNum} (${chunk.length} URLs) to IndexNow...`);

    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: KEY_URL,
        urlList: chunk,
      }),
      signal: AbortSignal.timeout(20000),
    });

    const statusLabel = res.status === 200 ? '200 OK' : res.status === 202 ? '202 Accepted' : `HTTP ${res.status}`;
    if (res.status === 200 || res.status === 202) {
      totalSubmitted += chunk.length;
      console.log(`   Batch ${batchNum} succeeded: ${statusLabel} (${chunk.length} URLs).`);
    } else {
      const errText = await res.text().catch(() => '');
      console.error(`   Batch ${batchNum} failed: ${statusLabel} - ${errText}`);
      process.exit(1);
    }
  }

  console.log(`Done! Total URLs submitted to IndexNow: ${totalSubmitted}`);
}

main().catch((err) => {
  console.error('IndexNow submission error:', err);
  process.exit(1);
});

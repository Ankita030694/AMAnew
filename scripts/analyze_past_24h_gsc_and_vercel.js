const fs = require('fs');
const path = require('path');
const https = require('https');
const { google } = require('googleapis');

// 1. Load Environment Variables
const envPath = path.resolve(__dirname, '../.env');
const envContent = fs.readFileSync(envPath, 'utf8');
const envVars = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) {
    let key = match[1].trim();
    let val = match[2].trim();
    if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
    else if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1);
    envVars[key] = val;
  }
});

// 2. Setup Vercel Auth
const authPath = path.join(process.env.HOME, 'Library/Application Support/com.vercel.cli/auth.json');
let vercelToken = '';
if (fs.existsSync(authPath)) {
  const authData = JSON.parse(fs.readFileSync(authPath, 'utf8'));
  vercelToken = authData.token;
}
const projectConfig = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../.vercel/project.json'), 'utf8'));
const projectId = projectConfig.projectId;
const teamId = projectConfig.orgId;

function fetchVercelQuery(endpoint, params) {
  return new Promise((resolve, reject) => {
    const queryParams = new URLSearchParams({
      projectId,
      teamId,
      environment: 'production',
      ...params,
    });
    const url = new URL(`https://api.vercel.com${endpoint}?${queryParams.toString()}`);
    const options = {
      headers: {
        Authorization: `Bearer ${vercelToken}`,
        'Content-Type': 'application/json',
      },
    };
    https.get(url, options, res => {
      let data = '';
      res.on('data', chunk => (data += chunk));
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve({ raw: data });
        }
      });
    }).on('error', reject);
  });
}

// 3. Setup Google Search Console Auth
const clientEmail = envVars.FIREBASE_ADMIN_CLIENT_EMAIL || envVars.SEARCH_CONSOLE_CLIENT_EMAIL;
let privateKey = (envVars.FIREBASE_ADMIN_PRIVATE_KEY || envVars.SEARCH_CONSOLE_PRIVATE_KEY).replace(/\\n/g, '\n');

async function main() {
  console.log('🚀 Extracting Past 24-Hour Vercel Analytics & GSC Data...\n');

  // --- VERCEL 24H DATA ---
  const now = new Date();
  const past24h = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const timeParams = {
    since: past24h.toISOString(),
    until: now.toISOString(),
  };

  const vercelCounts = await fetchVercelQuery('/v1/query/web-analytics/visits/count', timeParams);
  const vercelPaths = await fetchVercelQuery('/v1/query/web-analytics/visits/aggregate', { ...timeParams, by: 'requestPath', limit: 40 });
  const vercelReferrers = await fetchVercelQuery('/v1/query/web-analytics/visits/aggregate', { ...timeParams, by: 'referrerHostname', limit: 20 });
  const vercelDevices = await fetchVercelQuery('/v1/query/web-analytics/visits/aggregate', { ...timeParams, by: 'deviceType', limit: 10 });
  const vercelOS = await fetchVercelQuery('/v1/query/web-analytics/visits/aggregate', { ...timeParams, by: 'osName', limit: 10 });
  const vercelCountries = await fetchVercelQuery('/v1/query/web-analytics/visits/aggregate', { ...timeParams, by: 'country', limit: 15 });
  const vercelHours = await fetchVercelQuery('/v1/query/web-analytics/visits/aggregate', { ...timeParams, by: 'hour', limit: 25 });

  console.log('✅ Vercel Data Retrieved!');
  console.log(`   Past 24h Unique Visitors: ${vercelCounts.data?.visitors}`);
  console.log(`   Past 24h Pageviews: ${vercelCounts.data?.pageviews}`);

  // --- GOOGLE SEARCH CONSOLE DATA ---
  const auth = new google.auth.GoogleAuth({
    credentials: { client_email: clientEmail, private_key: privateKey },
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  });
  const searchconsole = google.searchconsole({ version: 'v1', auth });
  const siteUrl = 'sc-domain:amalegalsolutions.com';

  // Find recent dates
  const todayStr = now.toISOString().split('T')[0];
  const fourDaysAgoStr = new Date(now.getTime() - 4 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  const datesRes = await searchconsole.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate: fourDaysAgoStr,
      endDate: todayStr,
      dimensions: ['date'],
    },
  });

  const availableDates = datesRes.data.rows || [];
  const latestDateRow = availableDates[availableDates.length - 1];
  const latestDate = latestDateRow?.keys[0];

  console.log(`\n✅ Google Search Console Data Retrieved!`);
  console.log(`   Latest GSC Reporting Date: ${latestDate}`);
  console.log(`   GSC 24h Daily Clicks: ${latestDateRow?.clicks}`);
  console.log(`   GSC 24h Daily Impressions: ${latestDateRow?.impressions}`);
  console.log(`   GSC 24h Daily CTR: ${(latestDateRow?.ctr * 100).toFixed(2)}%`);
  console.log(`   GSC 24h Daily Avg Position: ${latestDateRow?.position.toFixed(1)}`);

  // Query top queries and landing pages for this latest date
  const gscQueriesRes = await searchconsole.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate: latestDate,
      endDate: latestDate,
      dimensions: ['query', 'page'],
      rowLimit: 250,
    },
  });

  // Query device breakdown for latest date
  const gscDeviceRes = await searchconsole.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate: latestDate,
      endDate: latestDate,
      dimensions: ['device'],
    },
  });

  const fullPayload = {
    generatedAt: now.toISOString(),
    vercel: {
      timeWindow: { since: past24h.toISOString(), until: now.toISOString() },
      summary: vercelCounts.data,
      topPaths: vercelPaths.data || [],
      referrers: vercelReferrers.data || [],
      devices: vercelDevices.data || [],
      os: vercelOS.data || [],
      countries: vercelCountries.data || [],
      hourly: vercelHours.data || [],
    },
    gsc: {
      latestDate,
      recentDailyTrend: availableDates,
      latestDaySummary: latestDateRow,
      devices: gscDeviceRes.data.rows || [],
      topQueryPagePairs: gscQueriesRes.data.rows || [],
    },
  };

  const outputPath = path.resolve(__dirname, '../issues/past_24h_gsc_and_vercel_analytics.json');
  fs.writeFileSync(outputPath, JSON.stringify(fullPayload, null, 2));
  console.log(`\n💾 Saved detailed report payload to: issues/past_24h_gsc_and_vercel_analytics.json`);
}

main().catch(console.error);

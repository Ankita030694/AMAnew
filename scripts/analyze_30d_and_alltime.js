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
  console.log('🚀 Extracting 30-Day and All-Time Vercel & GSC Pageview Data...\n');

  const now = new Date();
  const past30d = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  const past180d = new Date(now.getTime() - 180 * 24 * 60 * 60 * 1000); // For all-time / long-term Vercel
  const past16m = new Date(now.getTime() - 480 * 24 * 60 * 60 * 1000); // 16 months GSC max

  // --- VERCEL 30-DAY DATA ---
  const timeParams30d = {
    since: past30d.toISOString(),
    until: now.toISOString(),
  };
  const vercelCounts30d = await fetchVercelQuery('/v1/query/web-analytics/visits/count', timeParams30d);
  const vercelPaths30d = await fetchVercelQuery('/v1/query/web-analytics/visits/aggregate', { ...timeParams30d, by: 'requestPath', limit: 60 });

  // --- VERCEL ALL-TIME (Longest Window) DATA ---
  const timeParamsAllTime = {
    since: past180d.toISOString(),
    until: now.toISOString(),
  };
  const vercelCountsAllTime = await fetchVercelQuery('/v1/query/web-analytics/visits/count', timeParamsAllTime);
  const vercelPathsAllTime = await fetchVercelQuery('/v1/query/web-analytics/visits/aggregate', { ...timeParamsAllTime, by: 'requestPath', limit: 60 });

  console.log('✅ Vercel Analytics:');
  console.log(`   Past 30 Days Total Visitors: ${vercelCounts30d.data?.visitors}, Pageviews: ${vercelCounts30d.data?.pageviews}`);
  console.log(`   Long-Term Total Visitors: ${vercelCountsAllTime.data?.visitors}, Pageviews: ${vercelCountsAllTime.data?.pageviews}`);

  // --- GOOGLE SEARCH CONSOLE DATA ---
  const auth = new google.auth.GoogleAuth({
    credentials: { client_email: clientEmail, private_key: privateKey },
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
  });
  const searchconsole = google.searchconsole({ version: 'v1', auth });
  const siteUrl = 'sc-domain:amalegalsolutions.com';

  const todayStr = now.toISOString().split('T')[0];
  const thirtyDaysAgoStr = past30d.toISOString().split('T')[0];
  const allTimeStr = past16m.toISOString().split('T')[0];

  // GSC Past 30 Days Top Pages
  const gsc30dPagesRes = await searchconsole.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate: thirtyDaysAgoStr,
      endDate: todayStr,
      dimensions: ['page'],
      rowLimit: 50,
    },
  });

  // GSC All-Time Top Pages
  const gscAllTimePagesRes = await searchconsole.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate: allTimeStr,
      endDate: todayStr,
      dimensions: ['page'],
      rowLimit: 50,
    },
  });

  console.log('✅ GSC Analytics:');
  console.log(`   30-Day Top Pages Count: ${gsc30dPagesRes.data.rows?.length}`);
  console.log(`   All-Time Top Pages Count: ${gscAllTimePagesRes.data.rows?.length}`);

  const output = {
    generatedAt: now.toISOString(),
    vercel: {
      past30Days: {
        summary: vercelCounts30d.data,
        topPaths: vercelPaths30d.data || []
      },
      allTime: {
        summary: vercelCountsAllTime.data,
        topPaths: vercelPathsAllTime.data || []
      }
    },
    gsc: {
      past30Days: {
        topPages: gsc30dPagesRes.data.rows || []
      },
      allTime: {
        topPages: gscAllTimePagesRes.data.rows || []
      }
    }
  };

  const outputPath = path.resolve(__dirname, '../issues/analytics_30d_and_all_time.json');
  fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));
  console.log(`\n💾 Saved detailed 30-day and all-time data to: issues/analytics_30d_and_all_time.json`);
}

main().catch(console.error);

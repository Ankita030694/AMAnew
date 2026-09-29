const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

// 1. Read .env file
const envPath = path.resolve(__dirname, '..', '.env');
if (!fs.existsSync(envPath)) {
  console.error('❌ .env file not found');
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, 'utf8');
const envVars = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) {
    let key = match[1].trim();
    let val = match[2].trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    envVars[key] = val;
  }
});

const clientEmail = envVars.FIREBASE_ADMIN_CLIENT_EMAIL || envVars.SEARCH_CONSOLE_CLIENT_EMAIL;
let privateKey = envVars.FIREBASE_ADMIN_PRIVATE_KEY || envVars.SEARCH_CONSOLE_PRIVATE_KEY;

if (!clientEmail || !privateKey) {
  console.error('❌ Missing Search Console credentials in .env');
  process.exit(1);
}

privateKey = privateKey.replace(/\\n/g, '\n');

async function submitSitemaps() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: { client_email: clientEmail, private_key: privateKey },
      scopes: ['https://www.googleapis.com/auth/webmasters'],
    });

    const searchconsole = google.searchconsole({ version: 'v1', auth });
    const siteUrl = 'sc-domain:amalegalsolutions.com';

    const sitemapsToSubmit = [
      'https://www.amalegalsolutions.com/sitemap.xml',
      'https://amalegalsolutions.com/sitemap.xml',
    ];

    console.log(`📡 Submitting sitemaps to Google Search Console for property: "${siteUrl}"...`);

    for (const feedpath of sitemapsToSubmit) {
      try {
        const res = await searchconsole.sitemaps.submit({ siteUrl, feedpath });
        console.log(`✅ Successfully submitted: ${feedpath} (HTTP ${res.status})`);
      } catch (err) {
        console.error(`❌ Failed to submit ${feedpath}:`, err.message);
      }
    }

    console.log('\n📊 Fetching updated sitemap submission status from GSC:');
    const listRes = await searchconsole.sitemaps.list({ siteUrl });
    const sitemaps = listRes.data.sitemap || [];
    sitemaps.forEach((sm, i) => {
      console.log(`  [${i + 1}] ${sm.path}`);
      console.log(`      Last Submitted: ${sm.lastSubmitted}`);
      console.log(`      Pending: ${sm.isPending}`);
      console.log(`      Last Downloaded: ${sm.lastDownloaded || 'N/A'}`);
      console.log(`      Warnings: ${sm.warnings}, Errors: ${sm.errors}`);
    });
  } catch (error) {
    console.error('❌ Error executing GSC sitemap submission:', error.message);
  }
}

submitSitemaps();

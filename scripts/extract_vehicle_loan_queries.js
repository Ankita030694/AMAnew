const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');

// 1. Load env
const envPath = path.resolve(__dirname, '../.env');
const envContent = fs.readFileSync(envPath, 'utf8');
const envVars = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) {
    let key = match[1].trim();
    let val = match[2].trim().replace(/^['"]|['"]$/g, '');
    envVars[key] = val;
  }
});

const clientEmail = envVars.FIREBASE_ADMIN_CLIENT_EMAIL || envVars.SEARCH_CONSOLE_CLIENT_EMAIL;
let privateKey = (envVars.FIREBASE_ADMIN_PRIVATE_KEY || envVars.SEARCH_CONSOLE_PRIVATE_KEY).replace(/\\n/g, '\n');

const auth = new google.auth.GoogleAuth({
  credentials: { client_email: clientEmail, private_key: privateKey },
  scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
});
const searchconsole = google.searchconsole({ version: 'v1', auth });
const siteUrl = 'sc-domain:amalegalsolutions.com';

const startDate = '2025-05-18';
const endDate = '2026-09-30';

async function main() {
  console.log('🚀 Extracting complete vehicle loan, car loan, auto loan, and movable asset queries...');

  // 1. Fetch Query+Page data with regex filter for vehicle/car/auto/bike/scooter/tractor/truck/movable/hypothec/reposses/seiz
  console.log('📡 Fetching Query + Page mapping from GSC...');
  let queryPageMap = {}; // query -> { page, clicks, impressions, position }
  
  let startRow = 0;
  const batchSize = 25000;
  let totalQueryPageRows = [];

  while (true) {
    const res = await searchconsole.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate,
        endDate,
        dimensions: ['query', 'page'],
        dimensionFilterGroups: [
          {
            filters: [
              {
                dimension: 'query',
                operator: 'includingRegex',
                expression: '(?i)(car|vehicle|auto|bike|scooter|wheeler|tractor|truck|movable|hypothec|reposses|seiz)'
              }
            ]
          }
        ],
        rowLimit: batchSize,
        startRow,
        dataState: 'all'
      }
    });

    const rows = res.data.rows || [];
    console.log(`  Fetched ${rows.length} query+page rows at offset ${startRow}...`);
    totalQueryPageRows = totalQueryPageRows.concat(rows);
    if (rows.length < batchSize) break;
    startRow += batchSize;
  }

  console.log(`Total Query+Page rows fetched: ${totalQueryPageRows.length}`);
  for (const r of totalQueryPageRows) {
    const q = r.keys[0].toLowerCase().trim();
    const p = r.keys[1];
    if (!queryPageMap[q] || queryPageMap[q].clicks < r.clicks) {
      queryPageMap[q] = {
        page: p,
        clicks: r.clicks,
        impressions: r.impressions,
        position: r.position
      };
    }
  }

  // 2. Load the complete unfiltered 157,739 queries dataset
  const allQueriesRaw = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'all_gsc_queries.json'), 'utf8'));
  console.log(`Loaded ${allQueriesRaw.length} total queries from all-time history.`);

  // 3. Define Comprehensive Filtering & Categorization Logic
  const loanTerms = [
    'loan', 'loans', 'settle', 'settlement', 'default', 'defaulter', 'npa', 'emi', 'kist', 'kisht',
    'bounce', 'interest', 'byaj', 'waiver', 'maaf', 'maafi', 'chhoot', 'foreclos', 'recovery',
    'harass', 'seiz', 'reposses', 'repo', 'auction', 'neelam', 'hypothec', 'cibil', 'overdue',
    'lok adalat', 'court', 'legal', 'advocate', 'lawyer', 'notice', 'arbitrat', 'police', 'guideline',
    'rule', 'rules', 'rights', 'rbi', 'finance', 'financer', 'challan', 'surrender', 'dispute', 'calculator',
    'agent', 'debt', 'restructur', 'moratorium', 'forgive', 'relief', 'concession', 'compromise',
    'samjhauta', 'fir', '420', 'section 138', 'cheque', 'nach', 'ecs', 'mandate', 'penalty', 'dues',
    'noc', 'form 35', 'rto', 'clearance', 'outstanding', 'down payment', 'cibil defaulter', 'write off',
    'settled', 'restructure', 'ots', 'one time settlement'
  ];

  // Specific false positives to discard
  // E.g., 'credit card', 'pan card', 'car wash', 'car rental', 'car insurance check' (unless loan related)
  function isFalsePositive(q) {
    if (q.includes('credit card') || q.includes('pan card') || q.includes('ration card') || q.includes('id card') || q.includes('sim card')) {
      return true;
    }
    if (q.includes('car wash') || q.includes('car rental') || q.includes('car parking') || q.includes('career') || q.includes('care center')) {
      return true;
    }
    if (q.includes('car accident lawyer') || q.includes('auto accident') || q.includes('accident claim')) {
      return true;
    }
    if (q.includes('automation') || q.includes('automatic call') || q.includes('autorikshaw')) {
      return true;
    }
    return false;
  }

  function categorizeQuery(q, words) {
    const isMovable = q.includes('movable asset') || q.includes('movable property') || q.includes('moveable asset') || q.includes('moveable property') || q.includes('chattel');
    const isHypothecation = words.some(w => w.startsWith('hypotheca')) || q.includes('hypothecation');
    const isCommercial = q.includes('commercial vehicle') || words.some(w => ['truck', 'trucks', 'tractor', 'tractors', 'bus', 'buses', 'tempo', 'tipper', 'jcb'].includes(w));
    const isTwoWheeler = q.includes('two wheeler') || q.includes('2 wheeler') || words.some(w => ['bike', 'bikes', 'scooter', 'scooters', 'scooty', 'motorcycle', 'motorcycles'].includes(w));
    const isCar = words.some(w => ['car', 'cars'].includes(w));
    const isAuto = words.some(w => ['auto', 'automobile', 'automobiles'].includes(w));
    const isVehicle = words.some(w => ['vehicle', 'vehicles', 'gadi', 'gaadi', 'vahan', 'vaahan'].includes(w));
    const isRepossessionSeizure = words.some(w => ['repossession', 'repossess', 'repo'].includes(w)) || (words.some(w => ['seizure', 'seize', 'seized'].includes(w)) && (isVehicle || isCar || isAuto || isTwoWheeler || isCommercial || q.includes('asset') || q.includes('bank')));
    const isChallan = q.includes('challan') && (isVehicle || isCar || isTwoWheeler || isAuto);

    if (isMovable) return 'Movable Asset Loan & Property';
    if (isHypothecation) return 'Hypothecation & Vehicle Pledge';
    if (isChallan) return 'Vehicle / Traffic Challan Lok Adalat';
    if (isCommercial) return 'Commercial & Heavy Vehicle Loan (Truck/Tractor/Bus)';
    if (isTwoWheeler) return 'Two-Wheeler / Bike / Scooter Loan';
    if (isCar) return 'Car Loan & Four-Wheeler';
    if (isAuto) return 'Auto / Automobile Loan';
    if (isRepossessionSeizure) return 'Vehicle Repossession & Seizure Rights';
    if (isVehicle) return 'Vehicle Loan (General)';
    return null;
  }

  function detectIntentCluster(q) {
    if (q.includes('settle') || q.includes('settlement') || q.includes('maafi') || q.includes('chhut') || q.includes('compromise') || q.includes('ots')) {
      return 'Loan Settlement / OTS';
    }
    if (q.includes('calculator') || q.includes('percentage') || q.includes('kitne percent') || q.includes('how much')) {
      return 'Settlement Calculator & Percentage';
    }
    if (q.includes('reposses') || q.includes('seiz') || q.includes('khinch') || q.includes('surrender') || q.includes('auction')) {
      return 'Repossession, Seizure & Surrender';
    }
    if (q.includes('default') || q.includes('npa') || q.includes('overdue') || q.includes('cibil') || q.includes('bounce') || q.includes('kist na')) {
      return 'Default, NPA & EMI Bounce';
    }
    if (q.includes('legal') || q.includes('notice') || q.includes('court') || q.includes('lok adalat') || q.includes('lawyer') || q.includes('advocate') || q.includes('arbitrat') || q.includes('rbi') || q.includes('judgement') || q.includes('rule') || q.includes('police')) {
      return 'Legal Rights, Notices & Lok Adalat';
    }
    if (q.includes('harass') || q.includes('agent') || q.includes('recovery')) {
      return 'Recovery Agent & Harassment';
    }
    if (q.includes('hypothec') || q.includes('noc') || q.includes('form 35') || q.includes('rc')) {
      return 'Hypothecation, NOC & RC Removal';
    }
    if (q.includes('process') || q.includes('kaise kare') || q.includes('kare') || q.includes('how to')) {
      return 'Process & How-To Guides';
    }
    return 'General Inquiry / Information';
  }

  function detectLender(q) {
    if (q.includes('hdfc')) return 'HDFC Bank';
    if (q.includes('sbi') || q.includes('state bank')) return 'SBI';
    if (q.includes('icici')) return 'ICICI Bank';
    if (q.includes('axis')) return 'Axis Bank';
    if (q.includes('kotak')) return 'Kotak Mahindra';
    if (q.includes('mahindra') || q.includes('mfinance')) return 'Mahindra Finance';
    if (q.includes('bajaj') || q.includes('bfl')) return 'Bajaj Finserv / Auto Finance';
    if (q.includes('l&t') || q.includes('l and t') || q.includes('lt finance')) return 'L&T Finance';
    if (q.includes('tvs')) return 'TVS Credit';
    if (q.includes('hero')) return 'Hero Fincorp';
    if (q.includes('shriram')) return 'Shriram Finance';
    if (q.includes('chola') || q.includes('cholamandalam')) return 'Cholamandalam Finance';
    if (q.includes('idfc')) return 'IDFC First Bank';
    if (q.includes('indusind')) return 'IndusInd Bank';
    if (q.includes('canara')) return 'Canara Bank';
    if (q.includes('punjab') || q.includes('pnb')) return 'PNB';
    if (q.includes('bank of baroda') || q.includes('bob')) return 'Bank of Baroda';
    if (q.includes('muthoot')) return 'Muthoot';
    if (q.includes('tata')) return 'Tata Capital / Motors Finance';
    return 'General / Unspecified Lender';
  }

  const extracted = [];
  const querySet = new Set();

  for (const row of allQueriesRaw) {
    const rawQuery = row.keys[0];
    const q = rawQuery.toLowerCase().trim();
    if (querySet.has(q)) continue;
    querySet.add(q);

    if (isFalsePositive(q)) continue;

    const words = q.split(/[^a-z0-9]+/);
    const category = categorizeQuery(q, words);
    if (!category) continue;

    // Check if it has loan / finance / legal / challan context
    const hasLoanContext = loanTerms.some(term => q.includes(term)) || words.includes('loan') || words.includes('loans');
    if (!hasLoanContext) continue;

    const intentCluster = detectIntentCluster(q);
    const lender = detectLender(q);
    const pageData = queryPageMap[q];
    const rankingPage = pageData ? pageData.page : 'Not directly mapped in top pairs';

    extracted.push({
      query: rawQuery,
      category,
      intentCluster,
      lender,
      clicks: row.clicks,
      impressions: row.impressions,
      ctr: parseFloat((row.ctr * 100).toFixed(2)),
      position: parseFloat(row.position.toFixed(1)),
      rankingPage
    });
  }

  console.log(`✅ Extracted a total of ${extracted.length} relevant queries!`);

  // Sort by impressions descending
  extracted.sort((a, b) => b.impressions - a.impressions);

  // Write JSON
  const jsonPath = path.resolve(__dirname, 'vehicle_auto_car_movable_assets_queries.json');
  fs.writeFileSync(jsonPath, JSON.stringify(extracted, null, 2));
  console.log(`💾 Saved full JSON to ${jsonPath}`);

  // Write CSV
  const csvPath = path.resolve(__dirname, 'vehicle_auto_car_movable_assets_queries.csv');
  const csvHeaders = ['Query', 'Category', 'Intent Cluster', 'Lender / Bank', 'Clicks', 'Impressions', 'CTR (%)', 'Position', 'Ranking URL'];
  const csvRows = extracted.map(item => [
    `"${item.query.replace(/"/g, '""')}"`,
    `"${item.category}"`,
    `"${item.intentCluster}"`,
    `"${item.lender}"`,
    item.clicks,
    item.impressions,
    item.ctr,
    item.position,
    `"${item.rankingPage}"`
  ]);

  const csvContent = [csvHeaders.join(','), ...csvRows.map(r => r.join(','))].join('\n');
  fs.writeFileSync(csvPath, csvContent);
  console.log(`💾 Saved full CSV to ${csvPath}`);

  // Copy CSV and JSON to artifacts / root directory if needed
  const rootCsvPath = path.resolve(__dirname, '../vehicle_auto_car_movable_assets_queries.csv');
  fs.writeFileSync(rootCsvPath, csvContent);
  console.log(`💾 Copied CSV to ${rootCsvPath}`);

  // Print Summary Analytics
  console.log('\n=============================================');
  console.log('📊 COMPREHENSIVE GSC ALL-TIME VEHICLE QUERIES SUMMARY');
  console.log('=============================================');
  console.log(`Total Matching Keywords/Phrases: ${extracted.length}`);
  console.log(`Total Clicks Generated: ${extracted.reduce((s, r) => s + r.clicks, 0)}`);
  console.log(`Total Impressions Generated: ${extracted.reduce((s, r) => s + r.impressions, 0)}`);

  console.log('\n--- BY VEHICLE & ASSET CATEGORY ---');
  const catStats = {};
  extracted.forEach(r => {
    if (!catStats[r.category]) catStats[r.category] = { count: 0, clicks: 0, impressions: 0 };
    catStats[r.category].count++;
    catStats[r.category].clicks += r.clicks;
    catStats[r.category].impressions += r.impressions;
  });
  console.table(catStats);

  console.log('\n--- BY INTENT CLUSTER ---');
  const intentStats = {};
  extracted.forEach(r => {
    if (!intentStats[r.intentCluster]) intentStats[r.intentCluster] = { count: 0, clicks: 0, impressions: 0 };
    intentStats[r.intentCluster].count++;
    intentStats[r.intentCluster].clicks += r.clicks;
    intentStats[r.intentCluster].impressions += r.impressions;
  });
  console.table(intentStats);

  console.log('\n--- BY LENDER / BANK ---');
  const lenderStats = {};
  extracted.forEach(r => {
    if (r.lender !== 'General / Unspecified Lender') {
      if (!lenderStats[r.lender]) lenderStats[r.lender] = { count: 0, clicks: 0, impressions: 0 };
      lenderStats[r.lender].count++;
      lenderStats[r.lender].clicks += r.clicks;
      lenderStats[r.lender].impressions += r.impressions;
    }
  });
  console.table(lenderStats);

  console.log('\n--- TOP 25 BY CLICKS ---');
  const byClicks = [...extracted].sort((a, b) => b.clicks - a.clicks).slice(0, 25);
  console.table(byClicks.map(r => ({
    Query: r.query,
    Category: r.category,
    Clicks: r.clicks,
    Imp: r.impressions,
    CTR: `${r.ctr}%`,
    Pos: r.position
  })));

  console.log('\n--- TOP 25 BY IMPRESSIONS ---');
  const byImp = [...extracted].sort((a, b) => b.impressions - a.impressions).slice(0, 25);
  console.table(byImp.map(r => ({
    Query: r.query,
    Category: r.category,
    Clicks: r.clicks,
    Imp: r.impressions,
    CTR: `${r.ctr}%`,
    Pos: r.position
  })));
}

main().catch(err => {
  console.error('Fatal Error:', err);
  process.exit(1);
});

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const width = 1200;
const height = 675;

const svgContent = `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#000000" />
      <stop offset="50%" stop-color="#1c1813" />
      <stop offset="100%" stop-color="#5A4C33" />
    </linearGradient>

    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5D77F" />
      <stop offset="50%" stop-color="#D2A02A" />
      <stop offset="100%" stop-color="#8E6A17" />
    </linearGradient>

    <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2a2319" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#17130e" stop-opacity="0.95" />
    </linearGradient>
  </defs>

  <rect width="${width}" height="${height}" fill="url(#bgGrad)" />

  <g stroke="#D2A02A" stroke-opacity="0.06" stroke-width="1">
    <line x1="100" y1="0" x2="100" y2="${height}" />
    <line x1="300" y1="0" x2="300" y2="${height}" />
    <line x1="500" y1="0" x2="500" y2="${height}" />
    <line x1="700" y1="0" x2="700" y2="${height}" />
    <line x1="900" y1="0" x2="900" y2="${height}" />
    <line x1="1100" y1="0" x2="1100" y2="${height}" />
    <line x1="0" y1="135" x2="${width}" y2="135" />
    <line x1="0" y1="270" x2="${width}" y2="270" />
    <line x1="0" y1="405" x2="${width}" y2="405" />
    <line x1="0" y1="540" x2="${width}" y2="540" />
  </g>

  <rect x="30" y="30" width="1140" height="615" rx="20" fill="none" stroke="url(#goldGrad)" stroke-width="2" stroke-opacity="0.4" />
  <rect x="38" y="38" width="1124" height="599" rx="14" fill="none" stroke="#D2A02A" stroke-width="1" stroke-opacity="0.15" />

  <g transform="translate(60, 65)">
    <rect x="0" y="0" width="450" height="38" rx="19" fill="#D2A02A" fill-opacity="0.15" stroke="#D2A02A" stroke-opacity="0.6" stroke-width="1.5" />
    <circle cx="20" cy="19" r="6" fill="#D2A02A" />
    <text x="35" y="24" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="bold" fill="#F5D77F" letter-spacing="1.5">
      AMA LEGAL SOLUTIONS | LEGAL DEBT RELIEF
    </text>
  </g>

  <text x="60" y="160" font-family="Arial, Helvetica, sans-serif" font-size="42" font-weight="bold" fill="#FFFFFF">
    Credit Card Debt Settlement
  </text>
  <text x="60" y="210" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="bold" fill="url(#goldGrad)">
    Legal Defense, OTS Negotiations and Harassment Shield
  </text>

  <text x="60" y="255" font-family="Arial, Helvetica, sans-serif" font-size="17" font-weight="normal" fill="#D1D5DB">
    Commercial One Time Settlements (OTS) under RBI Compromise Settlement Regulations
  </text>

  <!-- Card 1 -->
  <g transform="translate(60, 290)">
    <rect x="0" y="0" width="330" height="230" rx="16" fill="url(#cardGrad)" stroke="#D2A02A" stroke-width="1.5" stroke-opacity="0.5" />
    <rect x="0" y="0" width="330" height="6" rx="3" fill="url(#goldGrad)" />
    <text x="25" y="45" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="bold" fill="#F5D77F">
      40% - 75%
    </text>
    <text x="25" y="75" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="bold" fill="#FFFFFF">
      Debt Waiver Target
    </text>
    <text x="25" y="110" font-family="Arial, Helvetica, sans-serif" font-size="13" fill="#9CA3AF">
      - 100% Penal Interest Waiver
    </text>
    <text x="25" y="135" font-family="Arial, Helvetica, sans-serif" font-size="13" fill="#9CA3AF">
      - Compound Charge Elimination
    </text>
    <text x="25" y="160" font-family="Arial, Helvetica, sans-serif" font-size="13" fill="#9CA3AF">
      - Structured Lump-Sum Payment
    </text>
    <text x="25" y="195" font-family="Arial, Helvetica, sans-serif" font-size="12" font-weight="bold" fill="#D2A02A">
      [+] Official Bank Sanction
    </text>
  </g>

  <!-- Card 2 -->
  <g transform="translate(425, 290)">
    <rect x="0" y="0" width="330" height="230" rx="16" fill="url(#cardGrad)" stroke="#D2A02A" stroke-width="1.5" stroke-opacity="0.5" />
    <rect x="0" y="0" width="330" height="6" rx="3" fill="url(#goldGrad)" />
    <text x="25" y="45" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="bold" fill="#F5D77F">
      Anti-Harassment
    </text>
    <text x="25" y="75" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="bold" fill="#FFFFFF">
      RBI Fair Practice Shield
    </text>
    <text x="25" y="110" font-family="Arial, Helvetica, sans-serif" font-size="13" fill="#9CA3AF">
      - Immediate Cease and Desist
    </text>
    <text x="25" y="135" font-family="Arial, Helvetica, sans-serif" font-size="13" fill="#9CA3AF">
      - Prohibition of Workplace Contact
    </text>
    <text x="25" y="160" font-family="Arial, Helvetica, sans-serif" font-size="13" fill="#9CA3AF">
      - Section 25 / Sec 138 Defense
    </text>
    <text x="25" y="195" font-family="Arial, Helvetica, sans-serif" font-size="12" font-weight="bold" fill="#D2A02A">
      [+] Statutory Legal Representation
    </text>
  </g>

  <!-- Card 3 -->
  <g transform="translate(790, 290)">
    <rect x="0" y="0" width="330" height="230" rx="16" fill="url(#cardGrad)" stroke="#D2A02A" stroke-width="1.5" stroke-opacity="0.5" />
    <rect x="0" y="0" width="330" height="6" rx="3" fill="url(#goldGrad)" />
    <text x="25" y="45" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="bold" fill="#F5D77F">
      100% Closure
    </text>
    <text x="25" y="75" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="bold" fill="#FFFFFF">
      No Dues Certificate (NDC)
    </text>
    <text x="25" y="110" font-family="Arial, Helvetica, sans-serif" font-size="13" fill="#9CA3AF">
      - Legally Binding Settlement Letter
    </text>
    <text x="25" y="135" font-family="Arial, Helvetica, sans-serif" font-size="13" fill="#9CA3AF">
      - Termination of Future Claims
    </text>
    <text x="25" y="160" font-family="Arial, Helvetica, sans-serif" font-size="13" fill="#9CA3AF">
      - CIBIL Score Restoration Plan
    </text>
    <text x="25" y="195" font-family="Arial, Helvetica, sans-serif" font-size="12" font-weight="bold" fill="#D2A02A">
      [+] Permanent Legal Discharge
    </text>
  </g>

  <!-- Bottom Trust Footer -->
  <g transform="translate(60, 560)">
    <text x="0" y="25" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="bold" fill="#E5E7EB">
      Senior Advocates | 4.7 Google Rating | 10,000+ Borrowers Represented | RBI Compliance Experts
    </text>
    <text x="880" y="25" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="bold" fill="url(#goldGrad)">
      amalegalsolutions.com
    </text>
  </g>
</svg>
`;

async function generate() {
  const outDir = path.join(__dirname, '../public/images/og');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const pngPath = path.join(outDir, 'credit-card-debt-settlement.png');
  const jpgPath = path.join(outDir, 'credit-card-debt-settlement.jpg');

  await sharp(Buffer.from(svgContent))
    .png({ quality: 95 })
    .toFile(pngPath);

  await sharp(Buffer.from(svgContent))
    .jpeg({ quality: 90 })
    .toFile(jpgPath);

  console.log('Successfully generated:', pngPath, jpgPath);
}

generate().catch(console.error);

const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

// Parse environment variables from ama/.env
const envConfig = fs.readFileSync(path.join(__dirname, '../.env'), 'utf-8')
  .split('\n')
  .reduce((acc, line) => {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match) {
      let key = match[1].trim();
      let val = match[2].trim();
      if (val.startsWith('"') && val.endsWith('"')) {
        val = val.substring(1, val.length - 1).replace(/\\n/g, '\n');
      }
      acc[key] = val;
    }
    return acc;
  }, {});

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: envConfig['FIREBASE_ADMIN_PROJECT_ID'],
      clientEmail: envConfig['FIREBASE_ADMIN_CLIENT_EMAIL'],
      privateKey: envConfig['FIREBASE_ADMIN_PRIVATE_KEY'],
    }),
    storageBucket: envConfig['WEBSITE_FIREBASE_STORAGE_BUCKET'],
  });
}

const db = admin.firestore();

const blogData = {
  title: "Will Drafting Services for NRI: How Global Indians Can Protect Indian Assets from Abroad (2026)",
  subtitle: "A comprehensive legal guide on modern Will drafting services for Non-Resident Indians (NRIs) and OCIs managing real estate, bank accounts, and investments across India.",
  slug: "will-drafting-services-for-nri",
  author: "Anuj Anand Malik",
  date: "2026-10-16",
  created: Date.now(),
  image: "https://firebasestorage.googleapis.com/v0/b/amalegalsolutionss.firebasestorage.app/o/blog-images%2F1792145767712_will_drafting_services_for_nri.png?alt=media&token=f86ddc43-83fb-4bbb-aecd-bce715582a14",
  metaTitle: "Will Drafting Services for NRI: Legal Guide & Process (2026)",
  metaDescription: "Explore specialized Will drafting services for NRIs in India. Learn the Two-Will strategy, Section 63 remote execution, FEMA compliance, and lawyer verification.",
  description: `<blockquote>
<p><strong>Key Takeaways:</strong> <em>For Non-Resident Indians (NRIs) and Overseas Citizens of India (OCIs), estate planning across international borders is governed by strict statutory rules. Under the Indian legal doctrine of Lex Situs, immovable properties in India are subject exclusively to Indian succession law, regardless of an NRI's foreign residency or citizenship. Relying on an overseas Will or a US Living Trust leads to protracted court re-sealing proceedings under Section 228 of the Indian Succession Act, 1925, freezing bank accounts and properties for 18 to 36 months. Modern Will drafting services like WillDrafting.in (backed by AMA Legal Solutions) solve this through the "Two-Will Strategy"—enabling NRIs to execute a fully compliant, court-ready Indian Will on plain paper from abroad without international travel.</em></p>
</blockquote>

<h2>1. Why NRIs Require Specialized Will Drafting Services in India</h2>
<p>Over 32 million Indians live across the United States, the United Kingdom, Canada, the United Arab Emirates, Australia, and Singapore. While their primary professional careers and residences are situated overseas, a significant portion of their financial and emotional wealth remains anchored in India—comprising flats in metropolitan hubs, inherited ancestral properties, NRE/NRO fixed deposits, Demat portfolios, and mutual funds.</p>
<p>However, estate planning across international borders is fraught with intricate legal complexities that generic online form-builders or domestic foreign lawyers cannot resolve:</p>
<ul>
<li><strong>The Rule of Lex Situs (Section 5, Indian Succession Act, 1925):</strong> Indian courts enforce the principle that succession to immovable property (land, apartments, commercial buildings) is governed solely by the law of the place where the property is situated (<em>lex loci rei sitae</em>). Even if an NRI is a US or UK citizen, their property in India must be distributed under Indian succession jurisprudence.</li>
<li><strong>The Section 228 Ancillary Probate Bottleneck:</strong> A probate decree granted by a court in London, California, or Ontario has no direct legal effect in India. Under <strong>Section 228 of the Indian Succession Act</strong>, your family must file an ancillary petition before an Indian High Court or District Court to re-seal the foreign probate. This cumbersome process requires certified court transcripts, diplomatic Apostilles or consular legalizations, and typically takes 18 to 36 months—leaving Indian bank accounts frozen and assets unmanaged.</li>
<li><strong>The Risk of Intestacy:</strong> If an NRI passes away without an India-specific Will, their Indian assets are divided strictly according to religious personal laws (such as the <strong>Hindu Succession Act, 1956</strong>), creating fragmented co-ownership among Class-I legal heirs and triggering acrimonious partition disputes in Indian civil courts.</li>
</ul>

<h2>2. The Two-Will Strategy: The Global Gold Standard in NRI Estate Planning</h2>
<p>Leading cross-border succession advocates and estate planning practitioners recommend that every global Indian adopt the <strong>Two-Will Strategy</strong>:</p>
<ol>
<li><strong>The Domestic Overseas Will / Living Trust:</strong> Governs solely your assets located in your country of residence (e.g., your primary home in New Jersey, 401(k) accounts in the US, or property in London), structured under local municipal laws.</li>
<li><strong>The India-Specific Will:</strong> Governs exclusively your movable and immovable assets situated within the territory of India, structured under the Indian Succession Act, 1925.</li>
</ol>

<h3>The Vital Non-Revocation Territorial Scope Clause</h3>
<p>The greatest trap in drafting an Indian Will from abroad is the boilerplate revocation clause commonly found in generic templates (<em>"I hereby revoke all previous Wills and testamentary instruments made by me"</em>). Signing such a clause in India unintentionally voids your existing US, UK, or Canadian estate plan!</p>
<p>Dedicated platforms like <a href="https://www.willdrafting.in/nri-will-india" target="_blank" rel="noopener noreferrer"><strong>WillDrafting.in's NRI Portal</strong></a> incorporate an explicit <strong>Territorial Scope and Non-Revocation Clause</strong>. This clause strictly restricts the Will's operational boundary to assets located within India and affirmatively preserves all foreign trusts and wills governing overseas assets.</p>

<h3>Single Foreign Will vs. Two-Will Strategy: Key Differences</h3>
<table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 0.95rem;">
<thead>
<tr style="background-color: #172228; color: #FFFFFF; text-align: left;">
<th style="padding: 12px 16px; border: 1px solid #ddd;">Key Estate Factor</th>
<th style="padding: 12px 16px; border: 1px solid #ddd;">Single Foreign Will / Living Trust</th>
<th style="padding: 12px 16px; border: 1px solid #ddd;">Dedicated Indian Will (WillDrafting.in)</th>
</tr>
</thead>
<tbody>
<tr style="background-color: #FAF7F0;">
<td style="padding: 12px 16px; border: 1px solid #ddd; font-weight: bold;">Enforceability in India</td>
<td style="padding: 12px 16px; border: 1px solid #ddd; color: #b91c1c;">Must undergo complex Section 228 court re-sealing in India; takes 18–36 months.</td>
<td style="padding: 12px 16px; border: 1px solid #ddd; color: #047857;">Instant parallel administration; immediate property mutation and bank transfer.</td>
</tr>
<tr>
<td style="padding: 12px 16px; border: 1px solid #ddd; font-weight: bold;">Legal Costs & Bureaucracy</td>
<td style="padding: 12px 16px; border: 1px solid #ddd; color: #b91c1c;">High dual-jurisdiction legal fees, court translations, diplomatic consularization.</td>
<td style="padding: 12px 16px; border: 1px solid #ddd; color: #047857;">Transparent flat-fee online drafting; zero cross-border court overhead.</td>
</tr>
<tr style="background-color: #FAF7F0;">
<td style="padding: 12px 16px; border: 1px solid #ddd; font-weight: bold;">Accidental Revocation Risk</td>
<td style="padding: 12px 16px; border: 1px solid #ddd; color: #b91c1c;">Severe risk of standard revocation clauses nullifying foreign trusts or wills.</td>
<td style="padding: 12px 16px; border: 1px solid #ddd; color: #047857;">Protected by precise territorial exclusion clauses vetted by High Court advocates.</td>
</tr>
<tr>
<td style="padding: 12px 16px; border: 1px solid #ddd; font-weight: bold;">FEMA & Agricultural Land</td>
<td style="padding: 12px 16px; border: 1px solid #ddd; color: #b91c1c;">Often overlooked by foreign lawyers, resulting in blocked estate transmissions.</td>
<td style="padding: 12px 16px; border: 1px solid #ddd; color: #047857;">Calibrated under Section 6(5) FEMA & RBI remittance guidelines.</td>
</tr>
</tbody>
</table>

<h2>3. Key Assets Governed Under an NRI Will in India</h2>

<h3>A. Immovable Real Estate (Residential, Commercial & Ancestral)</h3>
<p>An Indian Will must clearly identify each property by its complete municipal address, survey number, revenue registration volume, and exact percentage share. Clear bequests prevent fractional ownership disputes among siblings residing across different continents.</p>

<h3>B. Agricultural Land and Farmhouses Under FEMA Regulations</h3>
<p>A critical statutory distinction exists for NRIs regarding agricultural parcels. Under <strong>Section 6(5) of the Foreign Exchange Management Act (FEMA), 1999</strong> and the <em>FEMA (Non-Debt Instruments) Rules, 2019</em>:</p>
<ul>
<li>NRIs and OCIs are strictly <strong>prohibited from purchasing</strong> agricultural land, plantation property, or farmhouses in India.</li>
<li>However, NRIs and OCIs <strong>CAN lawfully inherit</strong> agricultural land or farmhouses from a resident Indian through a valid testamentary Will.</li>
<li>If the NRI beneficiary later sells this inherited agricultural land, the sale can only be made to a <strong>resident Indian citizen</strong>.</li>
</ul>

<h3>C. NRE, NRO, and FCNR(B) Bank Accounts</h3>
<p>Under the landmark rulings of the Supreme Court of India in <em>Sarbati Devi v. Usha Devi</em> and <em>Ram Chander Talwar v. Devender Kumar Talwar</em>, a nominee in a bank account or fixed deposit is merely a temporary custodian/trustee. A nominee has no legal title or beneficial ownership over the funds. An India-specific Will supersedes bank nominations, directing exact distributions and preventing account freeze disputes.</p>

<h3>D. Demat Portfolios, Mutual Funds & Equity Investments</h3>
<p>With massive NRI capital deployed across Indian equity markets via the Portfolio Investment Scheme (PIS) and mutual fund folios, an Indian Will provides designated depositories (NSDL/CDSL) with authoritative transmission instructions, bypassing court-issued Succession Certificates.</p>

<h2>4. How NRIs Execute a Legally Valid Will from Abroad Without Traveling</h2>
<p>A common misconception among NRIs is that creating a legally binding Indian Will requires purchasing Indian non-judicial stamp paper or physically visiting a court in India. <strong>Under Indian law, this is completely false.</strong></p>

<h3>Formalities Under Section 63 of the Indian Succession Act, 1925:</h3>
<ol>
<li><strong>Plain White A4 Paper:</strong> Under the Indian Stamp Act, 1899, Wills are <strong>100% exempt from stamp duty</strong> in India. You can print your draft on ordinary white A4 paper anywhere abroad.</li>
<li><strong>Testator Execution:</strong> Sign or affix your initials at the foot of every page, and provide your full signature on the final page alongside your date and overseas residential address.</li>
<li><strong>Dual-Witness Attestation:</strong> Under <strong>Section 63(c)</strong>, the Will must be attested by <strong>at least two adult witnesses</strong> who are present simultaneously. The witnesses must watch you sign, and then sign in your presence.</li>
<li><strong>Witness Disqualification Safeguard:</strong> Under <strong>Section 67</strong>, <em>neither witness should be a beneficiary under the Will, nor the spouse of a beneficiary</em>. Suitable witnesses include non-relative colleagues, neighbors, or friends residing in your foreign city.</li>
</ol>

<h3>International Authentication: Apostille vs. Indian Embassy Legalization</h3>
<p>While Section 63 compliance renders the document legally valid, obtaining international authentication establishes undeniable evidentiary proof for Indian revenue authorities and banks:</p>
<ul>
<li><strong>Hague Apostille Convention Countries (USA, UK, Canada, Australia, Singapore, EU):</strong> You can have your signature notarized by a local notary public and obtain an <strong>Apostille certificate</strong> from the competent local department (e.g., Secretary of State in the US, FCDO in the UK). Because India is a signatory to the Hague Apostille Convention, apostilled documents are accepted by Indian courts and authorities without embassy legalization.</li>
<li><strong>Non-Hague Countries (UAE, Oman, Qatar, GCC):</strong> Documents executed abroad should be notarized and presented before the Consular Wing of the Indian Embassy (Abu Dhabi) or Consulate General of India (Dubai) for official consular attestation.</li>
</ul>

<h3>Is Will Registration Mandatory in India?</h3>
<p>Under <strong>Section 18 of the Registration Act, 1908</strong>, the registration of a Will at the local Sub-Registrar Office (SRO) is <strong>strictly optional</strong>. An unregistered Will executed in compliance with Section 63 is completely valid in law.</p>
<p>However, registration provides superior evidential protection against false claims of forgery or tampering. NRIs can register their Will in two ways:
<ul>
<li><strong>In Person:</strong> Personally present the executed Will before the Sub-Registrar during their next scheduled trip to India.</li>
<li><strong>Via Special Power of Attorney (PoA):</strong> Execute a Special Power of Attorney (notarized and apostilled abroad) appointing an advocate or trusted family member in India to present the Will for registration under the provisions of the Registration Act.</li>
</ul>
</p>

<h2>5. Repatriating Inherited Funds: FEMA and the RBI USD 1 Million Scheme</h2>
<p>When an NRI beneficiary inherits funds or liquidates property in India, how can the proceeds be transferred back to their overseas bank account?</p>
<p>Under the <strong>RBI Remittance of Assets Regulations</strong>, non-resident beneficiaries can repatriate up to <strong>USD 1,000,000 (One Million US Dollars) per financial year</strong> (April 1 to March 31) from balances held in their NRO account representing the proceeds of an inheritance or legacy.</p>

<h3>Procedural Requirements:</h3>
<ul>
<li><strong>Form 15CB:</strong> A certificate issued by a practising Indian Chartered Accountant verifying the source of the inheritance and confirming applicable tax compliance.</li>
<li><strong>Form 15CA:</strong> An electronic self-declaration filed on the Income Tax Department e-filing portal by the remitter.</li>
<li><strong>Zero Inheritance Tax in India:</strong> India abolished Estate Duty in 1985 and Wealth Tax in 2015. Under <strong>Section 56(2)(x) of the Income Tax Act, 1961</strong>, property or funds received under a Will or by way of inheritance are <strong>100% exempt from income tax in India</strong> at the time of receipt. (Taxes apply only to future capital gains if and when the inherited asset is eventually sold).</li>
</ul>

<h2>6. Appointing an Executor in India: Powers and Best Practices</h2>
<p>The executor is the legal representative tasked with administering the estate, obtaining probate (if required), liquidating bank balances, and distributing assets to beneficiaries. For NRIs, appointing an executor requires careful logistical planning:</p>
<ol>
<li><strong>Appoint a Resident Indian Co-Executor or Alternate Executor:</strong> While you can name an NRI spouse or child as executor, having a trusted resident Indian executor (or co-executor) avoids massive delays in physically visiting local Indian banks, registrars, and tax offices.</li>
<li><strong>Explicit Administrative Powers:</strong> Ensure your Will explicitly empowers the executor to handle municipal mutations, operate bank accounts, oversee Demat transmission, sign tax filings, and represent the estate in legal proceedings.</li>
</ol>

<h2>7. How WillDrafting.in Solves Estate Planning for Global Indians</h2>
<p>Recognizing the exorbitant fees and friction of dealing with traditional law firms while living abroad, <strong>AMA Legal Solutions</strong> developed <a href="https://www.willdrafting.in" target="_blank" rel="noopener noreferrer"><strong>WillDrafting.in</strong></a>—a dedicated, digital legal-tech platform tailored specifically for Indian succession and NRI estate planning:</p>

<h3>Key Platform Advantages:</h3>
<ul>
<li><strong>Dedicated NRI Estate Hub:</strong> Tailored specifically to cross-border succession under the <a href="https://www.willdrafting.in/nri-will-india" target="_blank" rel="noopener noreferrer"><strong>Two-Will Strategy</strong></a>, automatically incorporating non-revocation territorial clauses.</li>
<li><strong>Proprietary 18-Point Legal Health Check:</strong> An automated succession audit that detects legal vulnerabilities (such as disinherited Class-I heirs, unallocated joint assets, or loan encumbrances under Section 167) before the Will is finalized.</li>
<li><strong>Controlled Statutory Clause Library:</strong> Unlike unregulated AI tools that hallucinate clauses, WillDrafting.in compiles court-tested clauses vetted by Bar Council enrolled High Court advocates.</li>
<li><strong>Helping Aging Parents in India:</strong> NRIs can easily guide their elderly parents back in India through a bilingual (English & Hindi) questionnaire with audio voice assistance, ensuring their parents' estate is protected against future disputes.</li>
<li><strong>Transparent Flat-Fee Pricing:</strong> Clear, upfront plans on <a href="https://www.willdrafting.in/#plans" target="_blank" rel="noopener noreferrer"><strong>WillDrafting Plans</strong></a> with zero hidden charges—ranging from Auto-Verified drafts (₹2,490) to Lawyer-Verified packages (₹4,990) and 1-on-1 Senior Advocate Consultations (₹9,990).</li>
</ul>

<h2>8. 5 Costly Mistakes NRIs Must Avoid</h2>
<ol>
<li><strong>Relying Exclusively on Bank Nominations:</strong> Assuming a bank nominee becomes the owner of the funds (legally false under Supreme Court precedent).</li>
<li><strong>Using a Single Foreign Will for Indian Real Estate:</strong> Triggering 18–36 month Section 228 court re-sealing proceedings in India.</li>
<li><strong>Omitting the Residuary Estate Clause:</strong> Failing to name a residuary legatee, resulting in partial intestacy for newly acquired or omitted assets.</li>
<li><strong>Allowing a Beneficiary to Sign as a Witness:</strong> Voiding the bequest to that beneficiary under Section 67 of the Indian Succession Act.</li>
<li><strong>Failing to Update the Will After Major Life Events:</strong> Not revising allocations after marriages, births, property sales, or the demise of an appointed executor.</li>
</ol>

<h2>9. Conclusion: Protecting Your Roots with Legal Certainty</h2>
<p>You have dedicated years of hard work to establishing your life abroad while building and preserving valuable assets in India. Leaving your Indian estate to statutory intestacy, informal verbal understandings, or ambiguous foreign wills places an enormous emotional and financial burden on the family you seek to protect.</p>
<p>Take 15 minutes today to establish your India-specific Will. Visit <a href="https://www.willdrafting.in/nri-will-india" target="_blank" rel="noopener noreferrer"><strong>WillDrafting.in's NRI Portal</strong></a> to begin your guided draft, or <a href="/contact"><strong>contact our legal advisory team at AMA Legal Solutions</strong></a> for specialized cross-border estate planning, NRI property mutation, and succession guidance.</p>`,
};

const nriServicesFaqs = [
  {
    question: "Why can't an NRI use their US, UK, or Canadian Will for their properties in India?",
    answer: "Under Section 5 of the Indian Succession Act, 1925, Indian real estate is governed exclusively by Indian law (Lex Situs). An overseas Will cannot be directly enforced in India without filing an ancillary court petition under Section 228 to re-seal the foreign probate, which takes 18 to 36 months. A separate India-specific Will ensures immediate local estate administration."
  },
  {
    question: "What is the Two-Will Strategy for NRIs?",
    answer: "The Two-Will Strategy involves having one Will or Living Trust in your country of residence governing local overseas assets, and a separate, dedicated Will executed under Indian succession laws governing assets in India. Both Wills include non-revocation territorial clauses to ensure they operate in parallel without conflicting."
  },
  {
    question: "Can an NRI sign an Indian Will on plain paper from abroad without traveling to India?",
    answer: "Yes. Under Section 63 of the Indian Succession Act and the Indian Stamp Act, 1899, Wills are 100% exempt from stamp duty in India. An NRI can print their Will on plain white A4 paper anywhere abroad and sign it in the presence of two independent adult witnesses."
  },
  {
    question: "What is the difference between an Apostille and an Indian Embassy attestation for an NRI Will?",
    answer: "If you reside in a Hague Apostille Convention country (such as the US, UK, Canada, Australia, Singapore, or EU), your notarized Will can receive a local Apostille stamp, which is automatically recognized in India. If you reside in a non-Hague country (such as the UAE), you must have the document attested by the Consular Wing of the Indian Embassy or Consulate."
  },
  {
    question: "Can an NRI or OCI inherit agricultural land in India through a Will?",
    answer: "Yes. Under Section 6(5) of FEMA, 1999 and the FEMA (Non-Debt Instruments) Rules, 2019, NRIs and OCIs cannot buy agricultural land in India, but they CAN legally inherit agricultural land, farmhouses, or plantations through a valid Will from a resident Indian."
  },
  {
    question: "How can an NRI beneficiary repatriate inherited money out of India?",
    answer: "Under the RBI Remittance of Assets Scheme, an NRI or OCI beneficiary can repatriate up to USD 1,000,000 (One Million US Dollars) per financial year from their NRO account after submitting Chartered Accountant certificate Form 15CB and filing online undertaking Form 15CA."
  },
  {
    question: "Is there any inheritance tax in India on assets bequeathed to an NRI?",
    answer: "No. India abolished Estate Duty in 1985 and Wealth Tax in 2015. Under Section 56(2)(x) of the Indian Income Tax Act, 1961, receiving property or money by inheritance or through a Will is completely tax-free at the time of inheritance."
  },
  {
    question: "Can an NRI use WillDrafting.in to help elderly parents living in India make a Will?",
    answer: "Yes. WillDrafting.in offers a bilingual English and Hindi interface along with an AI voice assistant, allowing NRIs to assist aging parents in India in recording their wishes comfortably from home, backed by High Court advocate verification from AMA Legal Solutions."
  }
];

async function publishNriServicesBlog() {
  console.log("Checking if blog already exists with slug:", blogData.slug);
  const existing = await db.collection('blogs').where('slug', '==', blogData.slug).limit(1).get();
  
  let blogId;
  if (!existing.empty) {
    blogId = existing.docs[0].id;
    console.log("Existing blog found with ID:", blogId, "- updating document...");
    await db.collection('blogs').doc(blogId).update(blogData);
    
    // Clear old FAQs
    const oldFaqs = await db.collection('blogs').doc(blogId).collection('faqs').get();
    for (const doc of oldFaqs.docs) {
      await doc.ref.delete();
    }
  } else {
    console.log("Creating new blog document...");
    const docRef = await db.collection('blogs').add(blogData);
    blogId = docRef.id;
    console.log("Created blog document with ID:", blogId);
  }

  // Add FAQs to subcollection
  console.log("Adding", nriServicesFaqs.length, "FAQs to subcollection...");
  for (const faq of nriServicesFaqs) {
    await db.collection('blogs').doc(blogId).collection('faqs').add(faq);
  }

  console.log("Successfully published NRI Services blog! ID:", blogId);
  console.log("Live URL: https://www.amalegalsolutions.com/blog/" + blogData.slug);
}

publishNriServicesBlog().then(() => process.exit(0)).catch(err => {
  console.error("Failed to publish NRI Services blog:", err);
  process.exit(1);
});

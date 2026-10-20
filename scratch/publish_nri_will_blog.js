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
  title: "Will Drafting Services for Indians Living Abroad (NRIs & OCIs): The Complete Cross-Border Legal Guide (2026)",
  subtitle: "How Non-Resident Indians can protect their Indian real estate, NRE/NRO accounts, and Demat investments without flying to India or risking multi-year probate disputes.",
  slug: "will-drafting-services-for-indians-living-abroad-nri-guide",
  author: "Anuj Anand Malik",
  date: "2026-10-16",
  created: Date.now(),
  image: "https://firebasestorage.googleapis.com/v0/b/amalegalsolutionss.firebasestorage.app/o/blog-images%2F1792145594633_nri_will_drafting_services_india.png?alt=media&token=1a70e971-fcee-407b-b9d5-5baf3035707c",
  metaTitle: "Will Drafting for Indians Living Abroad: NRI Legal Guide (2026)",
  metaDescription: "Comprehensive guide on Will drafting services for NRIs and OCIs with Indian property, NRE/NRO accounts and Demat shares. Discover the Two-Will strategy on WillDrafting.in.",
  description: `<blockquote>
<p><strong>Key Takeaways:</strong> <em>Non-Resident Indians (NRIs) and Overseas Citizens of India (OCIs) face unique cross-border legal challenges when managing estates spanning multiple jurisdictions. Under Indian law (Lex Situs rule), immovable property in India is governed exclusively by the Indian Succession Act, 1925, irrespective of where the NRI resides or holds citizenship. Relying on a single US, UK, Canadian, or UAE Will often triggers Section 228 probate re-sealing disputes that freeze Indian assets for years. The internationally accepted solution is the "Two-Will Strategy"—maintaining a dedicated, India-specific Will executed under Indian succession rules alongside your foreign estate plan.</em></p>
</blockquote>

<h2>1. The Cross-Border Inheritance Challenge: Why Foreign Wills Fail in India</h2>
<p>Millions of Non-Resident Indians (NRIs), Person of Indian Origin (PIO), and Overseas Citizen of India (OCI) cardholders living in the United States, United Kingdom, United Arab Emirates, Canada, Australia, and Singapore retain substantial economic roots in India. These include residential apartments in Gurgaon, Bengaluru, Mumbai, or Pune, ancestral agricultural parcels, NRE/NRO fixed deposits, Demat portfolios, and family gold.</p>
<p>However, when an NRI passes away having executed only a foreign Will or a US Living Trust, their surviving family invariably encounters a bureaucratic and legal nightmare in India due to two foundational legal realities:</p>

<h3>The Rule of Lex Situs (Section 5, Indian Succession Act, 1925)</h3>
<p>Under <strong>Section 5(1) of the Indian Succession Act, 1925</strong>, succession to immovable property (land, flats, houses) situated in India is regulated strictly by the law of India (<em>lex loci rei sitae</em> or <em>lex situs</em>), regardless of the deceased's country of domicile, nationality, or tax residency at the time of death. Only movable property (cash, shares) follows the law of the country of domicile under Section 5(2).</p>

<h3>The Section 228 Foreign Probate Trap</h3>
<p>A grant of probate or letters of administration issued by a probate court in California, London, or Toronto holds <strong>no direct legal authority in India</strong>. Under <strong>Section 228 of the Indian Succession Act, 1925</strong>, when a foreign Will has been proved and probated abroad, the executor cannot simply walk into an Indian Sub-Registrar office or bank. They must file an ancillary petition before the competent Indian District Court or High Court to have an authenticated copy of the foreign probate recognized and re-sealed in India.</p>
<p>This process routinely takes between <strong>18 and 36 months</strong>, involves high litigation expenses, requires costly Apostille certifications or Indian Embassy attestations, and frequently sparks contested litigation from distant relatives challenging the validity of the foreign decree.</p>

<h2>2. The Gold Standard: The NRI "Two-Will Strategy"</h2>
<p>To eliminate cross-border friction, senior succession lawyers and international estate planners unanimously recommend the <strong>Two-Will Strategy</strong> for global Indians:</p>
<ul>
<li><strong>Will #1 (Overseas Estate):</strong> Governs exclusively your assets located in your country of residence (e.g., your home in Texas, 401(k) retirement accounts in the USA, ISAs in the UK, or properties in Dubai), drafted according to local state or national laws.</li>
<li><strong>Will #2 (Indian Estate):</strong> Governs exclusively your movable and immovable assets situated within the territorial boundaries of the Republic of India, drafted in strict compliance with the Indian Succession Act, 1925 and Hindu/Christian/Parsi/Muslim personal succession laws.</li>
</ul>

<h3>The Crucial "Non-Revocation Territorial Scope Clause"</h3>
<p>The single greatest legal risk in cross-border estate planning is boilerplate revocation wording. Most standard Will templates begin with: <em>"I hereby revoke all prior Wills, codicils, and testamentary dispositions made by me."</em> If an NRI signs such a document in India or abroad, it unintentionally cancels their foreign estate plan!</p>
<p>Through <a href="https://www.willdrafting.in/nri-will-india" target="_blank" rel="noopener noreferrer"><strong>WillDrafting.in's dedicated NRI Portal</strong></a>, every India-specific Will includes an explicit <strong>Territorial Scope and Non-Revocation Clause</strong>. It affirms that the Will applies solely to assets located within India and expressly preserves all foreign testamentary instruments, revocable trusts, or living wills governing properties outside India.</p>

<h3>Single Foreign Will vs. Two-Will Strategy: Direct Comparison</h3>
<table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 0.95rem;">
<thead>
<tr style="background-color: #172228; color: #FFFFFF; text-align: left;">
<th style="padding: 12px 16px; border: 1px solid #ddd;">Estate Factor</th>
<th style="padding: 12px 16px; border: 1px solid #ddd;">Single Foreign Will / Living Trust</th>
<th style="padding: 12px 16px; border: 1px solid #ddd;">Two-Will Strategy (WillDrafting.in)</th>
</tr>
</thead>
<tbody>
<tr style="background-color: #FAF7F0;">
<td style="padding: 12px 16px; border: 1px solid #ddd; font-weight: bold;">Indian Probate Process</td>
<td style="padding: 12px 16px; border: 1px solid #ddd; color: #b91c1c;">Requires Section 228 court re-sealing in India; takes 18–36 months after overseas probate completes.</td>
<td style="padding: 12px 16px; border: 1px solid #ddd; color: #047857;">Instant parallel execution in India; immediate mutation and bank asset transfer.</td>
</tr>
<tr>
<td style="padding: 12px 16px; border: 1px solid #ddd; font-weight: bold;">Legal Costs & Expenses</td>
<td style="padding: 12px 16px; border: 1px solid #ddd; color: #b91c1c;">Extremely high (dual-jurisdiction litigation fees, certified court copies, diplomatic apostilles).</td>
<td style="padding: 12px 16px; border: 1px solid #ddd; color: #047857;">Affordable, fixed-fee Indian Will drafting with zero cross-border court overhead.</td>
</tr>
<tr style="background-color: #FAF7F0;">
<td style="padding: 12px 16px; border: 1px solid #ddd; font-weight: bold;">Risk of Mutual Revocation</td>
<td style="padding: 12px 16px; border: 1px solid #ddd; color: #b91c1c;">High risk that generic revocation clauses accidentally nullify foreign trusts or wills.</td>
<td style="padding: 12px 16px; border: 1px solid #ddd; color: #047857;">Protected by strict territorial exclusion clauses drafted by High Court advocates.</td>
</tr>
<tr>
<td style="padding: 12px 16px; border: 1px solid #ddd; font-weight: bold;">Bank & Asset Liquidity</td>
<td style="padding: 12px 16px; border: 1px solid #ddd; color: #b91c1c;">Indian NRE/NRO accounts frozen indefinitely pending foreign court certificates.</td>
<td style="padding: 12px 16px; border: 1px solid #ddd; color: #047857;">Indian executor transfers funds and liquidates portfolios swiftly.</td>
</tr>
</tbody>
</table>

<h2>3. Key Indian Assets That Require Specific Planning</h2>

<h3>A. Residential and Commercial Real Estate</h3>
<p>Property mutation at the local Municipal Corporation or Revenue Department requires proof of legal succession. Having an India-specific Will stating exact municipal property identification numbers, registration details, and clear percentage divisions among legal heirs ensures smooth mutation into the beneficiary's name.</p>

<h3>B. Agricultural Land and Farmhouses Under FEMA</h3>
<p>This is a major pitfall for NRIs and OCIs. Under <strong>Section 6(5) of the Foreign Exchange Management Act (FEMA), 1999</strong> and the <em>FEMA (Non-Debt Instruments) Rules, 2019</em>:</p>
<ul>
<li>NRIs and OCIs are <strong>prohibited from purchasing</strong> agricultural land, plantation property, or farmhouses in India.</li>
<li>However, NRIs and OCIs <strong>CAN lawfully inherit</strong> agricultural land or farmhouses from a resident Indian via a valid testamentary Will or intestate succession.</li>
<li>Crucially, if the NRI later decides to sell this inherited agricultural land, the sale can only be made to a <strong>resident Indian citizen</strong>.</li>
</ul>

<h3>C. NRE, NRO, and FCNR(B) Bank Accounts</h3>
<p>Under landmark Supreme Court of India judgments (<em>Sarbati Devi v. Usha Devi</em> and <em>Ram Chander Talwar v. Devender Kumar Talwar</em>), a bank nominee is merely a collection agent or trustee. A nominee does not possess beneficial ownership. An India-specific Will supersedes bank nominations, ensuring that your accounts (and the interest earned thereon) devolve upon your chosen beneficiaries rather than being disputed among Class-I legal heirs.</p>

<h3>D. Demat Accounts, Mutual Funds & Indian Shares</h3>
<p>With thousands of NRIs invested in Indian equities via the Portfolio Investment Scheme (PIS) or mutual fund direct platforms, an India-specific Will provides clear instructions to depository participants (CDSL/NSDL) and AMCs for seamless transmission of shares without requiring indemnity bonds or court succession certificates.</p>

<h2>4. How Can an NRI Execute a Legally Valid Indian Will from Abroad?</h2>
<p>A common myth is that an NRI must physically travel to India, purchase non-judicial Indian stamp paper, or appear before an Indian Sub-Registrar to make a Will. <strong>This is completely incorrect under Indian law.</strong></p>

<h3>Section 63 Requirements for Overseas Execution:</h3>
<ol>
<li><strong>Plain A4 Paper:</strong> Under the Indian Stamp Act, 1899, Wills are 100% exempt from stamp duty. You can print your Will on plain white A4 paper in New York, London, Dubai, Toronto, or Sydney.</li>
<li><strong>Testator Signature:</strong> Sign or initial at the bottom of every page and sign fully at the conclusion of the Will.</li>
<li><strong>Dual-Witness Attestation:</strong> Under <strong>Section 63(c) of the Indian Succession Act, 1925</strong>, the Will must be signed in the simultaneous presence of <strong>two independent adult witnesses</strong>. The witnesses must watch you sign, and then sign in your presence.</li>
<li><strong>Witness Disqualification Rule:</strong> Under <strong>Section 67</strong>, an attesting witness must <em>never be a beneficiary under the Will, nor the spouse of a beneficiary</em>, as doing so voids the bequest to that person. Suitable witnesses can be colleagues, neighbours, or friends abroad.</li>
</ol>

<h3>Apostille vs. Indian Embassy Attestation:</h3>
<p>While plain-paper execution before two witnesses fulfills Section 63 validity, having the signatures notarized and certified adds valuable evidentiary weight:</p>
<ul>
<li><strong>In Hague Apostille Convention Countries (USA, UK, Canada, Australia, Singapore, EU):</strong> You can have your signature notarized by a local notary public and obtain an <strong>Apostille certificate</strong> from the competent local authority (such as the Secretary of State in the US or the Foreign, Commonwealth & Development Office in the UK). India is a member of the Hague Apostille Convention, meaning apostilled documents are recognized in Indian courts and registration offices without further consular legalization.</li>
<li><strong>In Non-Hague Jurisdictions (such as the UAE, Oman, Qatar):</strong> You can execute or notarize the document and have it authenticated at the Consular Section of the Indian Embassy (Abu Dhabi) or Indian Consulate (Dubai).</li>
</ul>

<h2>5. Repatriating Inherited Funds: FEMA and the RBI USD 1 Million Annual Limit</h2>
<p>After Indian assets are liquidated or bank balances inherited into an NRO account, how can an NRI beneficiary legally remit the funds back to their overseas bank account?</p>
<p>Under the <strong>Reserve Bank of India (RBI) Remittance of Assets Regulations</strong>, an NRI or OCI beneficiary can remit up to <strong>USD 1,000,000 (One Million US Dollars) per financial year</strong> (April 1 to March 31) out of balances held in their NRO account representing the proceeds of inheritance or legacy.</p>

<h3>Required Procedural Compliance:</h3>
<ul>
<li><strong>Form 15CB:</strong> A certificate issued by an Indian Chartered Accountant certifying that appropriate taxes have been paid or accounted for.</li>
<li><strong>Form 15CA:</strong> An online undertaking submitted on the Income Tax portal by the remitter.</li>
<li><strong>Zero Inheritance Tax in India:</strong> India abolished Estate Duty in 1985 and Wealth Tax in 2015. Under <strong>Section 56(2)(x) of the Income Tax Act, 1961</strong>, money or property received under a Will or by way of inheritance is <strong>completely exempt from income tax in India</strong> at the time of receipt. (Taxes only apply to subsequent capital gains when the inherited property or shares are sold).</li>
</ul>

<h2>6. Appointing an Indian Executor: Powers and Safeguards</h2>
<p>Choosing the right executor is critical for NRIs. While you are legally permitted to appoint an NRI family member living abroad as your executor, doing so can cause administrative bottlenecks when visiting Indian banks, municipal offices, and tax departments.</p>
<p>Estate planning best practice recommends:</p>
<ol>
<li><strong>Appointing a Resident Indian Co-Executor or Alternate Executor:</strong> A trusted sibling, family member, or professional in India who can physically represent the estate before Indian authorities.</li>
<li><strong>Granting Comprehensive Administrative Powers:</strong> Ensure your Will explicitly empowers the executor to apply for property mutation, operate and close bank accounts, manage Demat transmission, sign tax filings, and represent the estate in all administrative forums.</li>
</ol>

<h2>7. Helping Aging Parents in India: The NRI Child's Responsibility</h2>
<p>Thousands of NRIs find themselves stranded when elderly parents living alone in Delhi, Punjab, Gujarat, Bengaluru, or Kerala pass away without a Will. The children are forced to take indefinite leave from their careers abroad, fly to India, navigate complex bureaucratic succession certificate filings, and negotiate with distant relatives.</p>
<p>Through <a href="https://www.willdrafting.in" target="_blank" rel="noopener noreferrer"><strong>WillDrafting.in</strong></a>, NRIs can actively assist their aging parents in creating an official, legally bulletproof Will:</p>
<ul>
<li><strong>Bilingual (English & Hindi) Interface:</strong> Respectful, clear, and easy for senior citizens to comprehend.</li>
<li><strong>AI Voice Guidance:</strong> Older parents can listen to questions explained in simple spoken terms, removing the intimidation of legal jargon.</li>
<li><strong>Supervised by Bar Council Advocates:</strong> Practising High Court advocates from <strong>AMA Legal Solutions</strong> review the questionnaire, verify Class-I allocations, and ensure the Will cannot be contested later.</li>
</ul>

<h2>8. WillDrafting.in: Tailored Plans for Global Indians</h2>
<p>Estate planning should not cost thousands of dollars in opaque international legal fees. Through <a href="https://www.willdrafting.in/#plans" target="_blank" rel="noopener noreferrer"><strong>WillDrafting.in Plans</strong></a>, NRIs and their families can choose clear, fixed-fee options with zero hidden charges:</p>
<ul>
<li><strong>Auto Verified Plan (₹2,490 flat):</strong> Instant court-ready automated Will draft complying with the Indian Succession Act, asset schedules, executor/guardian designations, and dual-witness signing guides.</li>
<li><strong>Lawyer Verified Plan (₹4,990 flat - Most Popular):</strong> Line-by-line manual legal review by a senior succession advocate from AMA Legal Solutions, ensuring territorial clauses, personal law compliance, and statutory health check certification.</li>
<li><strong>Connect to Lawyer Plan (₹9,990 flat):</strong> Direct scheduled telephone/video consultation with a practising advocate for complex estates involving cross-border trusts, joint ancestral holdings, or business succession.</li>
</ul>

<h2>9. Conclusion: Protect Your Indian Roots with Professional Clarity</h2>
<p>You have worked tirelessly to build a successful life abroad while preserving your heritage and investments in India. Leaving your Indian estate to statutory intestacy or an un-re-sealed foreign Will invites avoidable delays, disputes, and court litigation for the very family you seek to protect.</p>
<p>Take 15 minutes today to establish your Two-Will Strategy. Visit <a href="https://www.willdrafting.in/nri-will-india" target="_blank" rel="noopener noreferrer"><strong>WillDrafting.in's NRI Portal</strong></a> to prepare your India-specific Will, or <a href="/contact"><strong>contact the cross-border legal advisory team at AMA Legal Solutions</strong></a> for specialized estate planning, NRI property mutation, and succession guidance.</p>`,
};

const nriFaqs = [
  {
    question: "Do NRIs and OCIs need a separate Indian Will if they already have a US, UK, or Canadian Will?",
    answer: "Yes. Under Section 228 of the Indian Succession Act, 1925, an overseas Will cannot be directly enforced in India without a lengthy court re-sealing process (taking 18 to 36 months). Maintaining a separate India-specific Will under the Two-Will Strategy ensures immediate, parallel estate administration."
  },
  {
    question: "How do I ensure my Indian Will does not accidentally cancel my foreign Will or Living Trust?",
    answer: "Every NRI Will prepared on WillDrafting.in contains an explicit Territorial Scope and Non-Revocation clause. It limits the Will's applicability strictly to assets situated in India and specifically preserves all foreign wills, trusts, and testamentary instruments."
  },
  {
    question: "Does an NRI need to travel to India or buy Indian stamp paper to sign a valid Will?",
    answer: "No. Under Section 63 of the Indian Succession Act and the Indian Stamp Act, 1899, Wills are completely exempt from stamp duty. You can print your Will on plain white A4 paper anywhere abroad and sign it before two independent adult witnesses."
  },
  {
    question: "Can an NRI or OCI inherit agricultural land or farmhouses in India?",
    answer: "Yes. While Section 6(5) of FEMA, 1999 prohibits NRIs and OCIs from purchasing agricultural land in India, they are legally permitted to inherit agricultural land, plantation property, or farmhouses through a valid Will from a resident Indian."
  },
  {
    question: "How much money from inherited Indian property can an NRI transfer abroad each year?",
    answer: "Under RBI and FEMA regulations, an NRI or OCI can repatriate up to USD 1,000,000 (One Million US Dollars) per financial year from their NRO account after submitting tax clearance forms 15CA and 15CB."
  },
  {
    question: "Is there any inheritance tax or estate duty on property inherited in India by an NRI?",
    answer: "No. India abolished Estate Duty in 1985 and Wealth Tax in 2015. Under Section 56(2)(x) of the Income Tax Act, 1961, property or funds received under a Will or by inheritance are completely exempt from income tax in India at the time of transfer."
  },
  {
    question: "When is a Hague Apostille or Indian Embassy attestation required for an NRI Will?",
    answer: "For basic legal validity under Section 63, signing on plain paper with two witnesses is sufficient. However, for seamless property mutation in Indian revenue records, having the Will apostilled (in Hague countries like the US/UK) or consularized by the Indian Embassy (in non-Hague countries like the UAE) provides strong proof of authenticity."
  },
  {
    question: "Can an NRI use WillDrafting.in to help their elderly parents in India make a Will?",
    answer: "Yes. WillDrafting.in features a bilingual (English and Hindi) interface and an AI voice assistant so NRI children can guide aging parents living in India through a simple, comfortable process at home, backed by AMA Legal Solutions advocate review."
  }
];

async function publishNriBlog() {
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
  console.log("Adding", nriFaqs.length, "FAQs to subcollection...");
  for (const faq of nriFaqs) {
    await db.collection('blogs').doc(blogId).collection('faqs').add(faq);
  }

  console.log("Successfully published NRI blog! ID:", blogId);
  console.log("Live URL: https://www.amalegalsolutions.com/blog/" + blogData.slug);
}

publishNriBlog().then(() => process.exit(0)).catch(err => {
  console.error("Failed to publish NRI blog:", err);
  process.exit(1);
});

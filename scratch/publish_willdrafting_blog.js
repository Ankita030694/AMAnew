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
  title: "Online Will Drafting in India: The Complete Legal Guide to Estate Planning (2026)",
  subtitle: "Protect your family's legacy, prevent bitter inheritance disputes, and discover how to create a legally binding, court-ready Will online under the Indian Succession Act, 1925.",
  slug: "online-will-drafting-india-legal-guide-estate-planning",
  author: "Anuj Anand Malik",
  date: "2026-10-16",
  created: Date.now(),
  image: "https://firebasestorage.googleapis.com/v0/b/amalegalsolutionss.firebasestorage.app/o/blog-images%2F1792133706029_online_will_drafting_india.png?alt=media&token=8fac649d-c457-45f2-b5be-939725e9b63b",
  metaTitle: "Online Will Drafting in India: Legal Guide & Process (2026)",
  metaDescription: "Learn how to draft a legally valid Will online in India under the Indian Succession Act, 1925. Avoid inheritance disputes with lawyer-verified estate planning.",
  description: `<blockquote>
<p><strong>Key Takeaways:</strong> <em>Writing a Will is not about death or extreme wealth; it is an essential act of financial responsibility for anyone with a home, savings account, mutual funds, or family dependants. Without a clear, legally sound Will, your life's savings are divided by statutory succession tables rather than your personal wishes, frequently triggering decades of traumatic litigation among surviving relatives. With modern legal technology backed by institutional law firms like AMA Legal Solutions, drafting a court-ready, lawyer-vetted Will online has never been simpler, safer, or more accessible.</em></p>
</blockquote>

<h2>1. What Is a Will Under Indian Law?</h2>
<p>In India, a Will is defined under <strong>Section 2(h) of the Indian Succession Act, 1925</strong> as <em>"the legal declaration of the intention of a testator with respect to his property which he desires to be carried into effect after his death."</em></p>
<p>Under <strong>Section 59 of the Indian Succession Act, 1925</strong>, any individual of sound mind who has attained the age of majority (18 years or older) possesses the absolute legal right to dispose of their self-acquired property through a testamentary instrument. A Will takes effect exclusively upon the demise of the testator, meaning that during your lifetime, you retain complete, unhindered ownership, control, and enjoyment of all your assets. You are also legally permitted to modify, revoke, or rewrite your Will as many times as your circumstances evolve.</p>
<p>Despite this legal clarity, more than 80% of urban Indians pass away <strong>intestate</strong> (without leaving a Will). The pervasive myth that Wills are solely for senior citizens or ultra-high-net-worth individuals leaves millions of grieving families tangled in bureaucratic probate battles, bank account freezes, and bitter partition suits in <a href="/services/civil">civil courts</a>.</p>

<h2>2. The Danger of Intestacy: What Happens If You Die Without a Will in India?</h2>
<p>When an individual passes away without leaving a valid Will, their estate does not automatically pass to their spouse in full, nor does it follow informal family agreements. Instead, it is distributed strictly according to religious personal succession laws:</p>
<ul>
<li><strong>For Hindus, Buddhists, Jains, and Sikhs:</strong> The estate is governed by the <strong>Hindu Succession Act, 1956</strong>. Assets are divided equally among Class-I legal heirs (surviving spouse, mother, sons, and daughters). If your elderly mother, spouse, and minor children all survive you, each receives a fractional undivided share in every piece of property, creating immediate joint-tenancy bottlenecks when attempting to sell, lease, or mortgage the family home.</li>
<li><strong>For Christians, Parsis, and Jews:</strong> The rules under the <strong>Indian Succession Act, 1925</strong> apply. Typically, one-third of the estate goes to the surviving spouse, and two-thirds are divided equally among children.</li>
<li><strong>For Muslims:</strong> Inheritance is governed by Muslim Personal Law (Shariat). A Muslim cannot bequeath more than one-third (1/3rd) of their net estate through a Will (<em>Wasiyat</em>) without the explicit consent of all legal heirs, and fixed statutory shares are mandatorily distributed among Quranic heirs.</li>
</ul>

<h3>Intestate Succession vs. Having a Valid Will: A Clear Comparison</h3>
<table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 0.95rem;">
<thead>
<tr style="background-color: #30261C; color: #FFFFFF; text-align: left;">
<th style="padding: 12px 16px; border: 1px solid #ddd;">Estate Consideration</th>
<th style="padding: 12px 16px; border: 1px solid #ddd;">Dying Without a Will (Intestate)</th>
<th style="padding: 12px 16px; border: 1px solid #ddd;">With a Valid Will (Testate)</th>
</tr>
</thead>
<tbody>
<tr style="background-color: #FAF7F0;">
<td style="padding: 12px 16px; border: 1px solid #ddd; font-weight: bold;">Asset Distribution</td>
<td style="padding: 12px 16px; border: 1px solid #ddd; color: #b91c1c;">Dictated strictly by statutory tables; non-relatives or distant in-laws may inherit unintended shares.</td>
<td style="padding: 12px 16px; border: 1px solid #ddd; color: #047857;">You dictate the exact percentage and specific asset allocations for each beneficiary.</td>
</tr>
<tr>
<td style="padding: 12px 16px; border: 1px solid #ddd; font-weight: bold;">Bank & Investment Access</td>
<td style="padding: 12px 16px; border: 1px solid #ddd; color: #b91c1c;">Heirs must obtain expensive Legal Heir Certificates or Succession Certificates from civil courts (taking 12 to 24 months).</td>
<td style="padding: 12px 16px; border: 1px solid #ddd; color: #047857;">Executor administers and transfers bank balances, FDs, and Demat shares smoothly and swiftly.</td>
</tr>
<tr style="background-color: #FAF7F0;">
<td style="padding: 12px 16px; border: 1px solid #ddd; font-weight: bold;">Minor Children Custody</td>
<td style="padding: 12px 16px; border: 1px solid #ddd; color: #b91c1c;">Guardianship is determined by court discretion under personal law, often precipitating acrimonious custody battles.</td>
<td style="padding: 12px 16px; border: 1px solid #ddd; color: #047857;">You explicitly name trusted testamentary guardians and backup guardians in writing.</td>
</tr>
<tr>
<td style="padding: 12px 16px; border: 1px solid #ddd; font-weight: bold;">Family Harmony</td>
<td style="padding: 12px 16px; border: 1px solid #ddd; color: #b91c1c;">Ambiguity breeds friction, jealousy, and contested partition litigation that drains estate value.</td>
<td style="padding: 12px 16px; border: 1px solid #ddd; color: #047857;">Crystal-clear instructions minimize misunderstandings and honor your true family wishes.</td>
</tr>
</tbody>
</table>

<h2>3. The Nominee Trap: Why Bank & Demat Nominations Do Not Replace a Will</h2>
<p>One of the most dangerous and widespread misconceptions in Indian personal finance is the belief that <em>"I have already added my wife or son as a nominee in my bank accounts, mutual funds, and flat, so I don't need a Will."</em></p>
<p>Under Indian jurisprudence established by the Supreme Court of India in landmark precedents including <em>Sarbati Devi v. Usha Devi</em> and <em>Ram Chander Talwar v. Devender Kumar Talwar</em>, a <strong>nominee is merely a trustee or custodian</strong>. The nominee has the legal duty to receive the funds from the financial institution upon the account holder's death, but they <strong>do not become the beneficial owner</strong> of those assets.</p>
<p>The money received by the nominee remains part of the deceased's general estate and must ultimately be distributed among the legal heirs according to the rules of intestate succession—unless the deceased left a valid Will bequeathing those specific accounts to that individual. In short: <strong>A legally valid Will supersedes nomination records in all banking, insurance, and investment matters.</strong></p>

<h2>4. The 6 Non-Negotiable Pillars of an Unshakeable Will</h2>
<p>To withstand judicial scrutiny and prevent malicious challenges from disgruntled relatives, every professionally drafted Will must incorporate six structural pillars:</p>
<ol>
<li><strong>Sound Mind & Testamentary Capacity Declaration:</strong> The testator must state their full legal name, permanent residential address, PAN/Aadhaar identity, and affirm that they are executing the document in sound disposing mind, free from coercion, fraud, undue influence, or duress. Attaching an authorized medical fitness certificate from a registered medical practitioner adds an impenetrable layer of protection against competency challenges.</li>
<li><strong>Comprehensive Movable and Immovable Asset Scheduling:</strong> The Will must accurately itemize residential houses, commercial spaces, agricultural parcels, bank accounts, fixed deposits, Demat portfolios, PPF/EPF balances, gold and heirloom jewellery, vehicles, and digital assets.</li>
<li><strong>Unequivocal Allocation & Specific Bequests:</strong> Allocations should be stated clearly in precise percentages (summing to exactly 100%) or specific item bequests to prevent co-ownership disputes.</li>
<li><strong>The Mandatory Residuary Estate Clause:</strong> This is the vital safety net of estate planning. Any asset omitted by mistake, newly purchased before demise, or inherited subsequently passes under this clause (e.g., <em>"All the rest, residue, and remainder of my estate, whether movable or immovable, shall devolve upon..."</em>). Without this clause, partial intestacy occurs for newly acquired assets.</li>
<li><strong>Appointment of an Executor and Alternate Executor:</strong> The executor is the legally designated administrator responsible for presenting the Will for probate (if required), liquidating debts, and distributing bequests as directed. Appointing a trustworthy backup executor guarantees continuity if the primary executor predeceases the testator.</li>
<li><strong>Guardianship for Minor Children:</strong> Under <strong>Section 9 of the Hindu Minority and Guardianship Act, 1956</strong>, parents have the right to appoint testamentary guardians who will care for their minor children's personal welfare and manage their inheritance until they attain 18 years of age.</li>
</ol>

<h2>5. Introducing WillDrafting.in: Powered by AMA Legal Solutions</h2>
<p>Recognizing the friction, exorbitant costs, and widespread intimidation associated with traditional law firm visits, <strong>AMA Legal Solutions</strong> has engineered <a href="https://www.willdrafting.in" target="_blank" rel="noopener noreferrer"><strong>WillDrafting.in</strong></a>—India's dedicated, state-of-the-art online Will making and digital estate planning platform.</p>
<p>Unlike generic AI tools or unregulated online document generators that churn out risky, legally fragile text, WillDrafting.in combines fintech-grade simplicity with the rigorous institutional backing of Bar Council enrolled High Court advocates:</p>

<h3>The Proprietary 18-Point Legal Health Check</h3>
<p>At the heart of the platform is an automated legal audit engine developed by senior succession lawyers. Before any Will is finalized, the system scans the estate structure against 18 statutory criteria:</p>
<ul>
<li><strong>Natural Heir Disinheritance Audit:</strong> Flags if a Class-I legal heir (e.g., a son, daughter, or spouse) is excluded or given zero allocation, prompting the testator to record the explicit rational explanation to insulate against future undue-influence lawsuits.</li>
<li><strong>Minor Guardianship Verification:</strong> Detects if a minor is named as a beneficiary without a testamentary guardian or trust structure.</li>
<li><strong>Encumbered Asset Auditing:</strong> Checks for outstanding mortgages or home loans under Section 167 of the Indian Succession Act to ensure liabilities are addressed.</li>
<li><strong>Residuary Safety Validation:</strong> Verifies that every possible unlisted, contingent, or future asset is covered by an alternate residuary legatee.</li>
</ul>

<h3>Deterministic Clause Library (No Unchecked AI Hallucinations)</h3>
<p>While generic AI chatbots routinely invent non-existent Indian legal precedents or apply foreign probate clauses, WillDrafting.in relies on a <strong>controlled statutory clause library</strong>. Every single sentence compiled into your draft is calibrated against the Indian Succession Act, 1925, the Hindu Succession Act, 1956, and state-level registration norms.</p>

<h3>Bilingual Accessibility (English & Hindi) with Voice Guidance</h3>
<p>Estate planning must be accessible to all generations. WillDrafting.in is fully bilingual in English and Hindi, complete with an interactive audio assistant that walks elderly parents through each question in simple, everyday language—demystifying legalese entirely.</p>

<h3>Specialized NRI "Two-Will Strategy" for Global Indians</h3>
<p>Non-Resident Indians (NRIs) and Overseas Citizens of India (OCIs) holding real estate, NRE/NRO accounts, and Demat shares across India face severe probate complications if they only rely on a foreign Will. Under Section 228 of the Indian Succession Act, enforcing a foreign Will in an Indian court requires tedious, multi-year court re-sealing proceedings.</p>
<p>Through <a href="https://www.willdrafting.in/nri-will-india" target="_blank" rel="noopener noreferrer"><strong>WillDrafting's NRI Estate Planning Portal</strong></a>, global Indians can seamlessly execute a dedicated, India-specific Will covering Indian movable and immovable assets under FEMA regulations and Reserve Bank of India remittance rules (Form 15CA/15CB).</p>

<h2>6. Is an Online Will Legally Valid in India?</h2>
<p><strong>Yes, 100% legally valid.</strong> Under Indian law, there is no requirement that a Will must be handwritten by a lawyer or printed on non-judicial stamp paper. Under Section 63 of the Indian Succession Act, 1925, a Will drafted online and printed on ordinary A4 white paper is fully enforceable provided the following statutory conditions are met:</p>
<ol>
<li><strong>Signed by the Testator:</strong> You must sign (or affix your thumb impression) at the foot or end of every page of the printed Will.</li>
<li><strong>Dual-Witness Attestation:</strong> The Will must be attested by <strong>at least two competent witnesses</strong> who are 18 years or older and present at the same time. The witnesses must watch you sign, and then sign in your presence.</li>
<li><strong>Witness Eligibility Rule:</strong> Crucially, <em>neither witness should be a beneficiary under the Will, nor the spouse of a beneficiary</em> (Section 67 of the Indian Succession Act), as this can void the bequest to that person.</li>
</ol>

<h3>Is Registration of a Will Mandatory in India?</h3>
<p>Under <strong>Section 18 of the Registration Act, 1908</strong>, registration of a Will at the local Sub-Registrar's office is <strong>strictly optional</strong>. An unregistered Will executed in accordance with Section 63 is completely valid in the eyes of the law.</p>
<p>However, getting your Will registered provides strong evidentiary value: it places the document on government record, establishes the testator's identity through biometric verification, and makes it virtually impossible for disgruntled heirs to allege forgery, tampering, or post-demise substitution.</p>

<h2>7. How to Create Your Court-Ready Will in 15 Minutes</h2>
<p>Securing your family's future through <a href="https://www.willdrafting.in" target="_blank" rel="noopener noreferrer"><strong>WillDrafting.in</strong></a> follows a calm, five-step guided workflow:</p>
<ul>
<li><strong>Step 1: Build Your Profile & Family Tree:</strong> Enter your basic details and map out your spouse, children, parents, and dependants.</li>
<li><strong>Step 2: Schedule Your Assets:</strong> List your properties, bank accounts, investments, and personal valuables with guided suggestions.</li>
<li><strong>Step 3: Define Allocations & Appoint Guardians:</strong> Use intuitive visual percentage sliders to distribute your estate, nominate executors, and choose guardians for minor children.</li>
<li><strong>Step 4: Run the Legal Health Check:</strong> Review the automated audit report, resolve any highlighted warnings, and select your preferred verification plan on <a href="https://www.willdrafting.in/#plans" target="_blank" rel="noopener noreferrer"><strong>WillDrafting Plans</strong></a> (from Auto Verified to High Court Advocate Manual Review).</li>
<li><strong>Step 5: Print, Sign & Secure:</strong> Download your high-resolution court-ready PDF, follow the step-by-step dual-witness signing guide, and store your digital backup inside the encrypted Will Vault.</li>
</ul>

<h2>8. When Should You Review and Update Your Will?</h2>
<p>A Will should never be a static, one-time document left untouched for thirty years. Estate planning is a living process that should be refreshed whenever significant life milestones occur:</p>
<ul>
<li><strong>Marriage or Divorce:</strong> Welcoming a spouse or undergoing legal separation necessitates redefining beneficiary shares.</li>
<li><strong>Birth or Adoption of Children/Grandchildren:</strong> Welcoming a new child requires updating guardian provisions and dividing family shares equitably.</li>
<li><strong>Acquisition or Sale of Assets:</strong> Buying a new apartment, liquidating a business, or opening new Demat portfolios.</li>
<li><strong>Demise of an Appointed Role:</strong> If an appointed executor, guardian, or primary beneficiary passes away before you, appointing successors immediately prevents administrative gridlock.</li>
</ul>

<h2>9. Conclusion: The Greatest Gift You Leave Your Family Is Clarity</h2>
<p>At AMA Legal Solutions, our courtroom advocates witness daily the emotional devastation and financial drain suffered by families fighting over undivided inheritance. A Will is neither an invitation to tragedy nor an admission of old age—it is the single most caring, selfless document you will ever execute for the people you love.</p>
<p>Take 15 minutes today to organize your estate, protect your minor children, and put your wishes in writing. Visit <a href="https://www.willdrafting.in" target="_blank" rel="noopener noreferrer"><strong>WillDrafting.in</strong></a> to begin your guided draft, or <a href="/contact"><strong>contact our legal advisory team at AMA Legal Solutions</strong></a> for specialized estate planning, business succession, and family trust consultations.</p>`,
};

const faqs = [
  {
    question: "Is an online Will legally valid in India?",
    answer: "Yes. Under Section 63 of the Indian Succession Act, 1925, a Will drafted online, printed on plain paper, signed by the testator, and attested by at least two independent witnesses is 100% legally binding and court-ready."
  },
  {
    question: "Is it mandatory to register a Will at the Sub-Registrar's office in India?",
    answer: "No. Under Section 18 of the Registration Act, 1908, the registration of a Will is strictly optional. An unregistered Will is fully valid, although registration provides valuable official proof of authenticity."
  },
  {
    question: "Does a bank or Demat nominee inherit the assets instead of the person named in a Will?",
    answer: "No. The Supreme Court of India has repeatedly ruled that a nominee is merely a trustee/custodian responsible for receiving funds, not the beneficial owner. A legally valid Will overrides nominations in bank accounts, Demat portfolios, and mutual funds."
  },
  {
    question: "What is the 18-Point Legal Health Check on WillDrafting.in?",
    answer: "It is a proprietary automated audit engine developed by AMA Legal Solutions advocates that checks your estate data for critical legal vulnerabilities, such as disinherited natural heirs, unassigned residuary assets, minor children lacking testamentary guardians, and loan encumbrances."
  },
  {
    question: "Can an NRI or OCI draft a Will online for their assets located in India?",
    answer: "Yes. Non-Resident Indians (NRIs) and OCIs can use WillDrafting.in's specialized NRI portal to draft an India-specific Will covering Indian immovable property, NRE/NRO accounts, and Demat shares, avoiding tedious foreign probate re-sealing (Section 228)."
  },
  {
    question: "Can I disinherit a family member or Class-I legal heir in my Will?",
    answer: "Yes. You have full legal freedom to bequeath your self-acquired property to anyone you choose. However, explicitly stating the clear reason for excluding a natural heir prevents them from successfully claiming undue influence or fraud in court later."
  },
  {
    question: "Who can act as a witness to my Will in India?",
    answer: "Any adult of sound mind (18+ years) can be a witness. However, under Section 67 of the Indian Succession Act, a beneficiary named in the Will or the spouse of a beneficiary must NOT act as a witness, as doing so voids their bequest."
  },
  {
    question: "What is a residuary estate clause and why is it necessary?",
    answer: "A residuary clause directs what happens to any assets not specifically named in the Will, including assets acquired after the Will is signed. Without it, your estate would face partial intestacy for those unlisted assets."
  }
];

async function publishBlog() {
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
  console.log("Adding", faqs.length, "FAQs to subcollection...");
  for (const faq of faqs) {
    await db.collection('blogs').doc(blogId).collection('faqs').add(faq);
  }

  console.log("Successfully published blog! ID:", blogId);
  console.log("Live URL: https://www.amalegalsolutions.com/blog/" + blogData.slug);
}

publishBlog().then(() => process.exit(0)).catch(err => {
  console.error("Failed to publish blog:", err);
  process.exit(1);
});

# SEO Change Log

Rule: one change at a time on isolated pages. Do not touch the same page twice within 14 days. Do not run another mass rewrite or other structural change before the Nov 9-15 decision gate.
Baseline snapshot: `issues/baseline_2026-10-19.json` (GSC data through 2026-10-16, event-adjusted baseline about 290 clicks/day).
Rollback rule: revert a title or meta change if the page's clicks fall more than 30% against its expected level after 14 days, excluding Lok Adalat event weeks.

| Date | URL / file | Change | Reason | Baseline | Review date | Result |
|---|---|---|---|---|---|---|
| 2026-10-19 | `src/app/sitemap.xml/route.ts` | Added 4 URLs to the static sitemap list: `/two-wheeler-loan-settlement`, `/commercial-vehicle-loan-settlement`, `/vehicle-repossession-laws-india`, `/criminal-complaint-against-loan-defaulter-bns-316-318` | GSC URL Inspection: "URL is unknown to Google" for all 4 | Not known to Google | 2026-11-02 (re-inspect) | ✅ Indexed on Oct 19! By Oct 25 (7d): repossession 10c/420i (p3.7), two-wheeler 7c/228i (p5.5), commercial-vehicle 3c/96i (p4.5), BNS 316/318 1c/275i (p6.0) |
| 2026-10-19 | `src/app/car-loan-settlement/page.tsx` | Added 4 sidebar links (two-wheeler, commercial vehicle, repossession, BNS 316/318) and 1 in-body link to `/vehicle-repossession-laws-india` | Give new pages crawlable inbound links from an indexed, regularly crawled page. The repossession page had 0 inbound links | car-loan page: 25 clicks, 2,836 imps, position 6.2 (28d). Watch for any drop | 2026-11-02 | ✅ Grew to 31 clicks, 2,959 imps, position 6.2 (28d to Oct 25) |
| 2026-10-19 | `src/app/directory/page.tsx` | Added 3 vehicle pages at the top of `directoryLinks` | Directory already lists the other new pages | n/a | 2026-11-02 | ✅ Deployed 2026-10-19 |
| 2026-10-27 | `src/app/special-lok-adalat-for-challan/page.tsx` | Updated title/meta for "Digital Traffic Lok Adalat 2026" and added state-wise section (Mumbai, MH, UP, Odisha, Rajasthan, Guwahati) | "digital traffic lok adalat" surged to 7,928 imps (2.6% CTR, pos 8.2); page had 38,414 imps / 746 clicks (1.94% CTR, pos 7.9) | 746 clicks, 38,414 imps, 1.94% CTR, pos 7.9 (28d to Oct 25) | 2026-11-10 | deployed 2026-10-27 (commit c137c5b9) |
| 2026-10-27 | `src/app/bank-complaint-in-rbi/page.tsx` | Updated title/meta for "RBI Complaint Against Bank Online (2026): CMS Portal, Ombudsman & 14448 Helpline"; added sidebar links to SBI, HDFC, Bajaj, Section 25 defense, and Bankruptcy pages | 15,823 imps with only 63 clicks (0.40% CTR, pos 8.8); "rbi complaint" had 4,557 imps at 0.3% CTR | 63 clicks, 15,823 imps, 0.40% CTR, pos 8.8 (28d to Oct 25) | 2026-11-10 | deployed 2026-10-27 (commit d1d7f8cb) |
| 2026-10-27 | `src/app/section-25-payment-and-settlement-act-bailable-or-not/page.tsx` & `src/app/best-loan-settlement-agencies-in-india/page.tsx` | Optimized Section 25 title/meta for CTR; added contextual & sidebar links to `/section-25-payment-and-settlement-act-legal-defense`, `/bankruptcy-lawyer-in-india`, `/services/loan-settlement/bangalore`, `/freed-loan-settlement-review-and-legal-alternatives`, and bank pages | Section 25 page had 3,448 imps / 34 clicks (0.99% CTR, pos 4.4); pass internal link authority to unindexed & new commercial pages | Sec 25: 34c/3,448i (0.99% CTR, p4.4); Best agencies: 222c/4,802i (p6.5) | 2026-11-10 | deployed 2026-10-27 (commit ce0f7a32) |
| 2026-10-27 | `can-company-hold-my-salary-after-resignation`, `where-to-file-a-complaint-if-your-employer-doesnt-pay-you`, `what-happens-after-bank-issues-recall-notice` | Optimized titles/meta descriptions for exact search queries (`salary na milne par online complaint kaise kare`, `loan recall notice meaning`); added bank & bankruptcy links on recall notice page | 3 high-impression pages sitting at pos 4.8–6.9 with sub-1% CTR (combined 12,429 imps, 113 clicks) | Salary hold: 41c/4,478i (0.92%, p4.8); Employer complaint: 38c/4,377i (0.87%, p6.9); Recall notice: 34c/3,574i (0.95%, p5.9) | 2026-11-10 | deployed 2026-10-27 (commit 6cdb5e72) |
| 2026-10-27 | `src/app/services/loan-settlement/moneyview/page.tsx` & `scripts/submit_sitemap_to_gsc.js` | Optimized Moneyview title/meta for OTS letter & harassment queries; removed non-www sitemap from submit script | Moneyview page had 5,678 imps / 42 clicks (0.74% CTR, pos 6.8) | 42 clicks, 5,678 imps, 0.74% CTR, pos 6.8 (28d to Oct 25) | 2026-11-10 | deployed 2026-10-27 |

## Planned
| Date | Item |
|---|---|
| 2026-10-22 | Title/meta test: `/special-lok-adalat-for-challan` (baseline query "digital traffic lok adalat": 3,621 imps, 1.1% CTR, position 8.9) |
| 2026-10-29 | Title/meta test: `/bank-complaint-in-rbi` (baseline "rbi complaint": 2,795 imps, 0.5% CTR, position 10.3) |
| 2026-11-05 | Review title tests |
| 2026-11-09 to 15 | Phase 3 decision gate (index pruning, new-page strategy, sitemap generator) |
| ~2026-11-20 | Lok Adalat pages refresh ahead of the next National Lok Adalat (verify date; probably Dec 12) |

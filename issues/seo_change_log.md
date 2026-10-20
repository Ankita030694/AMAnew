# SEO Change Log

Rule: one change at a time on isolated pages. Do not touch the same page twice within 14 days. Do not run another mass rewrite or other structural change before the Nov 9-15 decision gate.
Baseline snapshot: `issues/baseline_2026-10-19.json` (GSC data through 2026-10-16, event-adjusted baseline about 290 clicks/day).
Rollback rule: revert a title or meta change if the page's clicks fall more than 30% against its expected level after 14 days, excluding Lok Adalat event weeks.

| Date | URL / file | Change | Reason | Baseline | Review date | Result |
|---|---|---|---|---|---|---|
| 2026-10-19 | `src/app/sitemap.xml/route.ts` | Added 4 URLs to the static sitemap list: `/two-wheeler-loan-settlement`, `/commercial-vehicle-loan-settlement`, `/vehicle-repossession-laws-india`, `/criminal-complaint-against-loan-defaulter-bns-316-318` | GSC URL Inspection: "URL is unknown to Google" for all 4 | Not known to Google | 2026-11-02 (re-inspect) | deployed 2026-10-19 (commit 268bb5b9); www sitemap resubmitted 12:05 IST |
| 2026-10-19 | `src/app/car-loan-settlement/page.tsx` | Added 4 sidebar links (two-wheeler, commercial vehicle, repossession, BNS 316/318) and 1 in-body link to `/vehicle-repossession-laws-india` | Give new pages crawlable inbound links from an indexed, regularly crawled page. The repossession page had 0 inbound links | car-loan page: 25 clicks, 2,836 imps, position 6.2 (28d). Watch for any drop | 2026-11-02 | deployed 2026-10-19 (commit 268bb5b9); www sitemap resubmitted 12:05 IST |
| 2026-10-19 | `src/app/directory/page.tsx` | Added 3 vehicle pages at the top of `directoryLinks` | Directory already lists the other new pages | n/a | 2026-11-02 | deployed 2026-10-19 (commit 268bb5b9); www sitemap resubmitted 12:05 IST |

## Planned
| Date | Item |
|---|---|
| 2026-10-22 | Title/meta test: `/special-lok-adalat-for-challan` (baseline query "digital traffic lok adalat": 3,621 imps, 1.1% CTR, position 8.9) |
| 2026-10-29 | Title/meta test: `/bank-complaint-in-rbi` (baseline "rbi complaint": 2,795 imps, 0.5% CTR, position 10.3) |
| 2026-11-05 | Review title tests |
| 2026-11-09 to 15 | Phase 3 decision gate (index pruning, new-page strategy, sitemap generator) |
| ~2026-11-20 | Lok Adalat pages refresh ahead of the next National Lok Adalat (verify date; probably Dec 12) |

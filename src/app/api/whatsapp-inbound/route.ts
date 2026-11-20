import { NextResponse } from 'next/server';
import crypto from 'crypto';
import * as admin from 'firebase-admin';
import { adminDb } from '../../../lib/firebase-admin';
import { WEBSITE_TAG_RE } from '../../../lib/whatsapp';

/**
 * Saves WhatsApp chats started on amalegalsolutions.com as website leads.
 *
 * Flow: every WhatsApp link on the site opens the WATI number (+91 92896 22596) with a message ending in
 * "(Ref: amalegalsolutions.com/<page>)". WATI posts incoming messages to the CRM's Cloud Functions
 * (the plan allows only 2 webhooks), and those functions forward each tagged message here. We save it to
 * the `form` collection with the same fields as /api/contact-submit, so the CRM sync picks it up as an
 * "AMA" lead like any other website form.
 *
 * The WATI number is shared with WillDrafting and LegalRecovery, so only messages with the exact AMA tag
 * create a lead. Everything else (OTP replies, warm-up "yes" replies, other brands' conversations,
 * follow-up messages) is ignored. A number that already sent a lead in the last 7 days is not saved again,
 * and the same WhatsApp message can never create two leads (both CRM webhooks may forward it).
 *
 * Auth: ?token=<WHATSAPP_INBOUND_TOKEN>.
 */

const SITE = 'https://www.amalegalsolutions.com';
const DUPLICATE_WINDOW_DAYS = 7;

interface WatiInbound {
  id?: string;
  whatsappMessageId?: string;
  waId?: string;
  senderName?: string;
  text?: string;
  owner?: boolean;
  eventType?: string;
  event_type?: string;
  timestamp?: string | number;
  [key: string]: unknown;
}

function tokenMatches(given: string | null): boolean {
  const expected = process.env.WHATSAPP_INBOUND_TOKEN;
  if (!expected || !given) return false;
  const a = Buffer.from(given);
  const b = Buffer.from(expected);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

// Pages about loans/debt (and the homepage, where most chats are about loans) count as Loan Settlement leads.
// The CRM filters leads into "Loan Settlement" vs "Other Services" by this exact value.
function isLoanPage(page: string): boolean {
  if (page === '/' || page === '') return true;
  // Recovery products for lenders (B2B) are not borrower loan settlement
  if (/nbfc|digital-lenders|debt-recovery-system|recovery-for-/i.test(page)) return false;
  return /loan|settle|debt|credit-card|emi|recovery|harass|bank|npa|ots|cibil|pay-?day|lending|lok-adalat|arbitration|recall|cheque|138|defaulter|bajaj|hdfc|sbi|icici|axis|kotak|idfc|indusind|rbl|navi|fibe|kreditbee|moneyview|mpokket|si-creva|calculator/i.test(page);
}

async function recentLeadExists(phone: string): Promise<boolean> {
  const since = Date.now() - DUPLICATE_WINDOW_DAYS * 24 * 60 * 60 * 1000;
  const snap = await adminDb.collection('form').where('phone', '==', phone).get();
  return snap.docs.some((doc) => {
    const ts = doc.data().timestamp;
    const ms = ts?.toMillis ? ts.toMillis() : ts ? new Date(ts).getTime() : 0;
    return ms > since;
  });
}

// Stable id per WhatsApp message, so a message forwarded twice (or retried) maps to the same `form` doc
function leadDocId(msg: WatiInbound, phone: string, text: string): string {
  const raw = String(msg.whatsappMessageId || msg.id || '');
  const key = raw || `${phone}|${msg.timestamp || ''}|${text}`;
  return `wa_${crypto.createHash('sha1').update(key).digest('hex').slice(0, 24)}`;
}

async function handleMessage(msg: WatiInbound): Promise<string> {
  if (!msg || typeof msg !== 'object') return 'invalid';
  // Only messages sent by the visitor (owner = true is a message sent from our side)
  if (msg.owner === true) return 'outgoing';
  const eventType = msg.eventType || msg.event_type;
  if (eventType && eventType !== 'message') return 'not-a-message';

  const text = typeof msg.text === 'string' ? msg.text : '';
  const tag = text.match(WEBSITE_TAG_RE);
  if (!tag) return 'no-ama-tag';
  const page = tag[1];

  const digits = String(msg.waId || '').replace(/\D/g, '');
  // Indian numbers only: 91 + 10 digits
  if (!(digits.length === 12 && digits.startsWith('91'))) return 'non-indian-number';
  const phone = digits.slice(-10);

  const docRef = adminDb.collection('form').doc(leadDocId(msg, phone, text));
  if ((await docRef.get()).exists) return 'already-saved';
  if (await recentLeadExists(phone)) return 'duplicate';

  const isCalculator = page.startsWith('/loan-settlement-amount-calculator');
  const leadData = {
    name: (msg.senderName || '').toString().trim() || 'WhatsApp user',
    email: '',
    phone,
    serviceRequired: isLoanPage(page) ? 'Loan Settlement' : 'WhatsApp Enquiry',
    message: text.slice(0, 2000),
    source: isCalculator ? 'WhatsApp - Calculator' : 'WhatsApp',
    submissionUrl: `${SITE}${page}`,
    verified: true, // the number comes from WhatsApp itself
    timestamp: admin.firestore.FieldValue.serverTimestamp(),
  };

  try {
    // create() fails if the doc exists, so two forwards of the same message never make two leads
    await docRef.create(leadData);
  } catch (err: unknown) {
    const code = (err as { code?: number | string })?.code;
    if (code === 6 || code === 'already-exists') return 'already-saved';
    throw err;
  }
  return 'saved';
}

export async function POST(request: Request) {
  if (!process.env.WHATSAPP_INBOUND_TOKEN) {
    console.error('[whatsapp-inbound] WHATSAPP_INBOUND_TOKEN is not set');
    return NextResponse.json({ error: 'Not configured' }, { status: 500 });
  }
  if (!tokenMatches(new URL(request.url).searchParams.get('token'))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const messages = (Array.isArray(body) ? body : [body]) as WatiInbound[];
  const results: string[] = [];
  for (const msg of messages) {
    try {
      results.push(await handleMessage(msg));
    } catch (err) {
      console.error('[whatsapp-inbound] Failed to save message:', err);
      results.push('error');
    }
  }

  // 500 only when saving failed, so the caller can retry (safe: a retried message cannot create a second lead)
  if (results.includes('error')) {
    return NextResponse.json({ ok: false, results }, { status: 500 });
  }
  return NextResponse.json({ ok: true, results });
}

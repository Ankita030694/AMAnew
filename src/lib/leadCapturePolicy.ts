// One place that decides when a visitor may be prompted with a lead form.
// Goal: ask once, at a moment the visitor is engaged, and never chase
// someone who has already submitted or said no.

const SUBMITTED_AT_KEY = "ama_lead_submitted_at";
const SUBMITTED_PHONE_KEY = "ama_lead_phone_last4";
const LEGACY_SUBMITTED_KEY = "form_submitted";
const DISMISSED_AT_KEY = "ama_lead_prompt_dismissed_at";
const SHOWN_LOG_KEY = "ama_lead_prompt_shown_log";
const SESSION_SHOWN_KEY = "ama_lead_prompt_shown_session";
const SESSION_ENGAGED_KEY = "ama_lead_form_engaged_session";

const DAY = 24 * 60 * 60 * 1000;

// Caps (edit here)
export const LEAD_POLICY = {
  submittedQuietDays: 30, // no auto prompts and a compact "request received" card for 30 days after any submission
  dismissQuietDays: 7, // closing an auto prompt silences it for 7 days
  maxAutoPromptsPer30Days: 2, // hard cap across sessions
};

function readNumber(storage: Storage, key: string): number | null {
  const raw = storage.getItem(key);
  if (!raw) return null;
  const n = Number(raw);
  return Number.isFinite(n) ? n : null;
}

function safe<T>(fn: () => T, fallback: T): T {
  try {
    return typeof window === "undefined" ? fallback : fn();
  } catch {
    return fallback;
  }
}

/** Call after any lead is saved (inline funnel, modal, contact page OTP). */
export function markLeadSubmitted(phone?: string) {
  safe(() => {
    localStorage.setItem(SUBMITTED_AT_KEY, String(Date.now()));
    localStorage.setItem(LEGACY_SUBMITTED_KEY, "true");
    const digits = (phone || "").replace(/\D/g, "");
    if (digits.length >= 4) localStorage.setItem(SUBMITTED_PHONE_KEY, digits.slice(-4));
  }, undefined);
}

/** Last submission within the quiet window, if any. */
export function getRecentLead(): { phoneLast4: string | null } | null {
  return safe(() => {
    const at = readNumber(localStorage, SUBMITTED_AT_KEY);
    if (!at || Date.now() - at > LEAD_POLICY.submittedQuietDays * DAY) return null;
    return { phoneLast4: localStorage.getItem(SUBMITTED_PHONE_KEY) };
  }, null);
}

/** Visitor started filling a form on this visit; don't interrupt them with another one. */
export function markLeadFormEngaged() {
  safe(() => sessionStorage.setItem(SESSION_ENGAGED_KEY, "1"), undefined);
}

export function markAutoPromptShown() {
  safe(() => {
    sessionStorage.setItem(SESSION_SHOWN_KEY, "1");
    const log: number[] = JSON.parse(localStorage.getItem(SHOWN_LOG_KEY) || "[]");
    const recent = log.filter((t) => Date.now() - t < 30 * DAY);
    recent.push(Date.now());
    localStorage.setItem(SHOWN_LOG_KEY, JSON.stringify(recent));
  }, undefined);
}

export function markAutoPromptDismissed() {
  safe(() => localStorage.setItem(DISMISSED_AT_KEY, String(Date.now())), undefined);
}

/** Whether an automatic (not user-clicked) prompt may be shown right now. */
export function canAutoPrompt(): boolean {
  return safe(() => {
    if (getRecentLead()) return false;
    if (localStorage.getItem(LEGACY_SUBMITTED_KEY) && !localStorage.getItem(SUBMITTED_AT_KEY)) return false; // older submitters
    if (sessionStorage.getItem(SESSION_SHOWN_KEY)) return false;
    if (sessionStorage.getItem(SESSION_ENGAGED_KEY)) return false;
    const dismissedAt = readNumber(localStorage, DISMISSED_AT_KEY);
    if (dismissedAt && Date.now() - dismissedAt < LEAD_POLICY.dismissQuietDays * DAY) return false;
    const log: number[] = JSON.parse(localStorage.getItem(SHOWN_LOG_KEY) || "[]");
    if (log.filter((t) => Date.now() - t < 30 * DAY).length >= LEAD_POLICY.maxAutoPromptsPer30Days) return false;
    return true;
  }, false);
}

// WhatsApp number used by every "chat on WhatsApp" link on the site. It is the WATI-connected
// number, so incoming chats reach /api/whatsapp-inbound and are saved as leads.
// Calls (tel: links) stay on +91 87003 43611.
export const WHATSAPP_NUMBER = "919289622596";

// Earlier site-wide WhatsApp number (a plain WhatsApp Business account, not on WATI).
export const LEGACY_WHATSAPP_NUMBER = "918700343611";

// Tag appended to every pre-filled message, e.g. "(Ref: amalegalsolutions.com/debt-settlement-letter)".
// The WATI number is shared with WillDrafting and LegalRecovery, so /api/whatsapp-inbound only creates a
// lead when a message carries this exact AMA tag. Keep the format in sync with WEBSITE_TAG_RE.
export const TAG_DOMAIN = "amalegalsolutions.com";
export function pageTag(path: string): string {
  return `(Ref: ${TAG_DOMAIN}${path})`;
}
export const WEBSITE_TAG_RE = /\(Ref: amalegalsolutions\.com(\/[^)\s]*)\)/;

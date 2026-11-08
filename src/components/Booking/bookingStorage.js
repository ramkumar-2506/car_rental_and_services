const STORAGE_KEYS = {
  DRAFT: "carrental.booking.draft",
  FINAL: "carrental.booking.final",
  CONTACTS: "carrental.contact.inbox",
};

const safeJsonParse = (value, fallback) => {
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
};

export const bookingStorage = {
  getDraft() {
    const raw = localStorage.getItem(STORAGE_KEYS.DRAFT);
    return safeJsonParse(raw, null);
  },

  setDraft(draft) {
    localStorage.setItem(STORAGE_KEYS.DRAFT, JSON.stringify(draft));
  },

  getFinalList() {
    const raw = localStorage.getItem(STORAGE_KEYS.FINAL);
    return safeJsonParse(raw, []);
  },

  addFinalBooking(booking) {
    const list = this.getFinalList();
    const next = [booking, ...list];
    localStorage.setItem(STORAGE_KEYS.FINAL, JSON.stringify(next));
  },

  clearDraft() {
    localStorage.removeItem(STORAGE_KEYS.DRAFT);
  },

  addContactMessage(message) {
    const raw = localStorage.getItem(STORAGE_KEYS.CONTACTS);
    const list = safeJsonParse(raw, []);
    const next = [message, ...list];
    localStorage.setItem(STORAGE_KEYS.CONTACTS, JSON.stringify(next));
  },
};


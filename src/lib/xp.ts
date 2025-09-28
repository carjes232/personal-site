export type XPAwardReason =
  | "project_read"
  | "repo_click"
  | "demo_click"
  | "note_read";

interface XPStore {
  total: number;
  awarded: Record<string, number>;
}

const STORAGE_KEY = "danielcardenas.dev/xp";
const XP_POINTS: Record<XPAwardReason, number> = {
  project_read: 60,
  repo_click: 20,
  demo_click: 25,
  note_read: 30,
};

function now() {
  return Math.round(Date.now() / 1000);
}

function getInitialStore(): XPStore {
  if (typeof window === "undefined") {
    return { total: 0, awarded: {} };
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return { total: 0, awarded: {} };
  try {
    const parsed = JSON.parse(raw) as XPStore;
    if (!parsed.awarded) parsed.awarded = {};
    return parsed;
  } catch (error) {
    console.warn("Failed to parse XP store", error);
    return { total: 0, awarded: {} };
  }
}

export function readXP(): XPStore {
  return getInitialStore();
}

function persistXP(store: XPStore) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

function dispatchXPEvent(store: XPStore) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent("xp:update", {
      detail: store,
    }),
  );
}

export function awardXP(reason: XPAwardReason, identifier: string) {
  if (typeof window === "undefined") return;
  const key = `${reason}:${identifier}`;
  const store = getInitialStore();
  if (store.awarded[key]) return;
  const amount = XP_POINTS[reason] ?? 10;
  store.awarded[key] = now();
  store.total += amount;
  persistXP(store);
  dispatchXPEvent(store);
}

export function resetXP() {
  if (typeof window === "undefined") return;
  const store: XPStore = { total: 0, awarded: {} };
  persistXP(store);
  dispatchXPEvent(store);
}

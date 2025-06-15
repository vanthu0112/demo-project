export const localStoreKeys = {
  SAVE_ME: "save_me",
};

export default function saveThemeToLocalStorage(
  storageKey: string,
  theme: string
) {
  if (!storageKey || !theme) return;
  return localStorage.setItem(storageKey, theme);
}

export function getThemeFromLocalStorage(storageKey: string) {
  if (!storageKey) return;
  const theme = localStorage.getItem(storageKey);
  return theme;
}

export function removeThemeFromLocalStorage(storageKey: string) {
  if (!storageKey) return;
  return localStorage.removeItem(storageKey);
}

export function saveInfoAccount(info: { email: string; password: string }) {
  if (!info || !info.email || !info.password) return;
  return localStorage.setItem(localStoreKeys.SAVE_ME, JSON.stringify(info));
}

export function getInfoAccount() {
  const infoAccount = localStorage.getItem(localStoreKeys.SAVE_ME);
  return infoAccount ? JSON.parse(infoAccount) : null;
}

export function removeInfoAccount() {
  return localStorage.removeItem(localStoreKeys.SAVE_ME);
}

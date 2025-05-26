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


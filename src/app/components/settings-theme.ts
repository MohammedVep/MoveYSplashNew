'use client';

export type ThemePreference = 'light' | 'dark' | 'dynamic';

export const NIGHT_START_HOUR = 19;
export const NIGHT_END_HOUR = 6;

export const THEME_OPTIONS: Array<{ value: ThemePreference; label: string }> = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'dynamic', label: 'Auto (Day/Night)' }
];

export function normalizeThemePreference(value?: string): ThemePreference {
  if (value === 'light' || value === 'dark') {
    return value;
  }

  if (value === 'dynamic' || value === 'system') {
    return 'dynamic';
  }

  return 'dark';
}

export function shouldUseNightTheme(date: Date = new Date()): boolean {
  const hour = date.getHours();
  return hour >= NIGHT_START_HOUR || hour < NIGHT_END_HOUR;
}

export function resolveThemePreference(
  preference: ThemePreference,
  date: Date = new Date()
): 'light' | 'dark' {
  if (preference === 'dynamic') {
    return shouldUseNightTheme(date) ? 'dark' : 'light';
  }

  return preference;
}

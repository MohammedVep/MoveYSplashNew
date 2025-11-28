import { describe, expect, it } from 'vitest';
import {
  normalizeThemePreference,
  resolveThemePreference,
  shouldUseNightTheme
} from '../settings-theme';

describe('settings theme helpers', () => {
  it('normalizes arbitrary input into a theme preference', () => {
    expect(normalizeThemePreference('light')).toBe('light');
    expect(normalizeThemePreference('dark')).toBe('dark');
    expect(normalizeThemePreference('dynamic')).toBe('dynamic');
    expect(normalizeThemePreference('system')).toBe('dynamic');
    expect(normalizeThemePreference('unknown')).toBe('dark');
    expect(normalizeThemePreference(undefined)).toBe('dark');
  });

  it('identifies night hours correctly', () => {
    expect(shouldUseNightTheme(new Date('2024-06-01T21:00:00'))).toBe(true);
    expect(shouldUseNightTheme(new Date('2024-06-01T05:59:00'))).toBe(true);
    expect(shouldUseNightTheme(new Date('2024-06-01T12:00:00'))).toBe(false);
    expect(shouldUseNightTheme(new Date('2024-06-01T18:59:00'))).toBe(false);
  });

  it('resolves dynamic preference to light or dark based on time', () => {
    expect(resolveThemePreference('dynamic', new Date('2024-06-01T12:00:00'))).toBe('light');
    expect(resolveThemePreference('dynamic', new Date('2024-06-01T22:00:00'))).toBe('dark');
    expect(resolveThemePreference('light', new Date('2024-06-01T22:00:00'))).toBe('light');
    expect(resolveThemePreference('dark', new Date('2024-06-01T12:00:00'))).toBe('dark');
  });
});

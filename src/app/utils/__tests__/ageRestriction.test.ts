import { describe, expect, it } from 'vitest';
import {
  getLatestEligibleBirthdate,
  validateMinimumAccountAge,
} from '@/lib/ageRestriction';

describe('age restriction helpers', () => {
  const asOf = new Date(Date.UTC(2026, 5, 21));

  it('allows someone on their 16th birthday', () => {
    const result = validateMinimumAccountAge('2010-06-21', 16, asOf);

    expect(result.allowed).toBe(true);
    if (result.allowed) {
      expect(result.normalizedBirthdate).toBe('2010-06-21');
    }
  });

  it('blocks someone one day younger than 16', () => {
    const result = validateMinimumAccountAge('2010-06-22', 16, asOf);

    expect(result).toMatchObject({
      allowed: false,
      reason: 'underage',
    });
  });

  it('rejects impossible and future dates', () => {
    expect(validateMinimumAccountAge('2010-02-31', 16, asOf)).toMatchObject({
      allowed: false,
      reason: 'invalid',
    });
    expect(validateMinimumAccountAge('2027-01-01', 16, asOf)).toMatchObject({
      allowed: false,
      reason: 'future',
    });
  });

  it('builds the latest eligible birthdate from the current date', () => {
    expect(getLatestEligibleBirthdate(16, asOf)).toBe('2010-06-21');
  });
});

export const MINIMUM_ACCOUNT_AGE = 16;

const DATE_ONLY_PATTERN = /^(\d{4})-(\d{2})-(\d{2})$/;

type DateParts = {
  year: number;
  month: number;
  day: number;
};

export type AgeValidationResult =
  | {
      allowed: true;
      normalizedBirthdate: string;
    }
  | {
      allowed: false;
      reason: 'missing' | 'invalid' | 'future' | 'underage';
      error: string;
    };

const padDatePart = (value: number) => String(value).padStart(2, '0');

const formatDateParts = ({ year, month, day }: DateParts) =>
  `${year}-${padDatePart(month)}-${padDatePart(day)}`;

const getUtcDateParts = (date: Date): DateParts => ({
  year: date.getUTCFullYear(),
  month: date.getUTCMonth() + 1,
  day: date.getUTCDate(),
});

const getDaysInMonth = (year: number, month: number) =>
  new Date(Date.UTC(year, month, 0)).getUTCDate();

const compareDateParts = (left: DateParts, right: DateParts) => {
  if (left.year !== right.year) {
    return left.year - right.year;
  }

  if (left.month !== right.month) {
    return left.month - right.month;
  }

  return left.day - right.day;
};

export const parseDateOnly = (value: string): DateParts | null => {
  const match = DATE_ONLY_PATTERN.exec(value.trim());
  if (!match) {
    return null;
  }

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);

  if (
    !Number.isInteger(year) ||
    !Number.isInteger(month) ||
    !Number.isInteger(day) ||
    month < 1 ||
    month > 12 ||
    day < 1 ||
    day > getDaysInMonth(year, month)
  ) {
    return null;
  }

  return { year, month, day };
};

export const getLatestEligibleBirthdate = (
  minimumAge = MINIMUM_ACCOUNT_AGE,
  asOf = new Date(),
) => {
  const today = getUtcDateParts(asOf);
  const eligibleYear = today.year - minimumAge;
  const eligibleDay = Math.min(today.day, getDaysInMonth(eligibleYear, today.month));

  return formatDateParts({
    year: eligibleYear,
    month: today.month,
    day: eligibleDay,
  });
};

export const validateMinimumAccountAge = (
  birthdate: string,
  minimumAge = MINIMUM_ACCOUNT_AGE,
  asOf = new Date(),
): AgeValidationResult => {
  const trimmedBirthdate = birthdate.trim();
  if (!trimmedBirthdate) {
    return {
      allowed: false,
      reason: 'missing',
      error: 'Please enter your birthdate.',
    };
  }

  const parsedBirthdate = parseDateOnly(trimmedBirthdate);
  if (!parsedBirthdate) {
    return {
      allowed: false,
      reason: 'invalid',
      error: 'Please enter a valid birthdate.',
    };
  }

  const today = getUtcDateParts(asOf);
  if (compareDateParts(parsedBirthdate, today) > 0) {
    return {
      allowed: false,
      reason: 'future',
      error: 'Birthdate cannot be in the future.',
    };
  }

  const latestEligibleBirthdate = parseDateOnly(
    getLatestEligibleBirthdate(minimumAge, asOf),
  );

  if (
    !latestEligibleBirthdate ||
    compareDateParts(parsedBirthdate, latestEligibleBirthdate) > 0
  ) {
    return {
      allowed: false,
      reason: 'underage',
      error: `MoveYSplash is for people ${minimumAge} and older. You cannot create or keep an account yet.`,
    };
  }

  return {
    allowed: true,
    normalizedBirthdate: formatDateParts(parsedBirthdate),
  };
};

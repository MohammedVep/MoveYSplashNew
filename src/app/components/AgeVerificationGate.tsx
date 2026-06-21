"use client";

import React, { useMemo, useState } from "react";
import { ShieldCheck } from "lucide-react";
import {
  getLatestEligibleBirthdate,
  MINIMUM_ACCOUNT_AGE,
  validateMinimumAccountAge,
} from "@/lib/ageRestriction";

type AgeVerificationGateProps = {
  storedBirthdate?: string;
  onVerify: (birthdate: string) => Promise<boolean>;
  onLogout: () => void;
};

export function AgeVerificationGate({
  storedBirthdate,
  onVerify,
  onLogout,
}: AgeVerificationGateProps) {
  const [birthdate, setBirthdate] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isBlocked, setIsBlocked] = useState(false);
  const latestEligibleBirthdate = getLatestEligibleBirthdate();
  const storedValidation = useMemo(
    () => (storedBirthdate ? validateMinimumAccountAge(storedBirthdate) : null),
    [storedBirthdate],
  );
  const storedBirthdateIsUnderage = storedValidation?.allowed === false && storedValidation.reason === "underage";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const validation = validateMinimumAccountAge(birthdate);
    if (!validation.allowed) {
      if (validation.reason === "underage") {
        setIsBlocked(true);
      }
      setError(validation.error);
      return;
    }

    setBusy(true);
    try {
      const success = await onVerify(validation.normalizedBirthdate);
      if (!success) {
        setError("We could not save your age confirmation right now. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong while confirming your age. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  if (storedBirthdateIsUnderage || isBlocked) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-950 px-4 text-slate-50">
        <section className="w-full max-w-md rounded-2xl border border-red-500/30 bg-slate-900/80 p-8 shadow-xl">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-500/15 text-red-300">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <h1 className="mb-2 text-2xl font-semibold">MoveYSplash is {MINIMUM_ACCOUNT_AGE}+</h1>
          <p className="mb-6 text-sm leading-6 text-slate-300">
            This account cannot continue because it does not meet the minimum age requirement.
          </p>
          {error && (
            <p className="mb-4 rounded-md border border-red-500/30 bg-red-950/30 px-3 py-2 text-sm text-red-300">
              {error}
            </p>
          )}
          <button
            type="button"
            onClick={onLogout}
            className="w-full rounded-lg bg-slate-100 py-2 text-sm font-medium text-slate-950 hover:bg-white"
          >
            Sign out
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 px-4 text-slate-50">
      <section className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/80 p-8 shadow-xl">
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-300">
          <ShieldCheck className="h-6 w-6" />
        </div>
        <h1 className="mb-2 text-2xl font-semibold">Confirm your age</h1>
        <p className="mb-6 text-sm leading-6 text-slate-400">
          MoveYSplash accounts are available to people {MINIMUM_ACCOUNT_AGE} and older.
        </p>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <label className="block text-sm">
            <span className="mb-1 block text-slate-200">Birthdate</span>
            <input
              type="date"
              autoComplete="bday"
              max={latestEligibleBirthdate}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-indigo-500"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              required
            />
          </label>

          {error && (
            <p className="rounded-md border border-red-500/30 bg-red-950/30 px-3 py-2 text-sm text-red-400">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-lg bg-indigo-500 py-2 text-sm font-medium hover:bg-indigo-400 disabled:opacity-60"
          >
            {busy ? "Confirming..." : "Continue"}
          </button>
        </form>

        <button
          type="button"
          onClick={onLogout}
          className="mt-4 w-full rounded-lg border border-slate-800 px-3 py-2 text-sm text-slate-200 hover:border-slate-700"
        >
          Sign out
        </button>
      </section>
    </main>
  );
}

export default AgeVerificationGate;

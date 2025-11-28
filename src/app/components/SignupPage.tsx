"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

type SignupPageProps = {
  onSignup?: (
    name: string,
    email: string,
    password: string,
    birthdate: string
  ) => Promise<void> | void;
  onBack?: () => void;
  onLogin?: () => void;
};

export function SignupPage({ onSignup, onBack, onLogin }: SignupPageProps) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setInfo(null);

    if (!name || !email || !password || !birthdate) {
      setError("Please fill in your name, birthdate, email, and password.");
      return;
    }

    if (password.length < 8) {
      setError("Password should be at least 8 characters long.");
      return;
    }

    setBusy(true);
    try {
      if (onSignup) {
        await onSignup(name, email, password, birthdate);
      } else {
        const { data, error: supabaseError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { name, birthdate },
            emailRedirectTo: `${window.location.origin}/`,
          },
        });

        if (supabaseError) {
          setError(supabaseError.message);
          return;
        }

        if (!data.user) {
          setError("Signup failed. Please try again.");
          return;
        }

        setInfo(
          "Account created. Check your email to confirm your address, then sign in."
        );
        // Optionally redirect after a short delay
        setTimeout(() => router.push("/login"), 2500);
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong while signing up. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-50">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/70 p-8 shadow-xl">
        <h1 className="text-2xl font-semibold mb-2">Create your account</h1>
        <p className="text-sm text-slate-400 mb-6">
          We&apos;ll send a confirmation link before you can log in.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm">
            <span className="mb-1 block text-slate-200">Full name</span>
            <input
              type="text"
              autoComplete="name"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-indigo-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label className="block text-sm">
            <span className="mb-1 block text-slate-200">Birthdate</span>
            <input
              type="date"
              autoComplete="bday"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-indigo-500"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </label>

          <label className="block text-sm">
            <span className="mb-1 block text-slate-200">Email</span>
            <input
              type="email"
              autoComplete="email"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="block text-sm">
            <span className="mb-1 block text-slate-200">Password</span>
            <input
              type="password"
              autoComplete="new-password"
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none focus:border-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          {error && (
            <p className="text-sm text-red-400 border border-red-500/30 rounded-md px-3 py-2 bg-red-950/30">
              {error}
            </p>
          )}

          {info && (
            <p className="text-sm text-emerald-400 border border-emerald-500/30 rounded-md px-3 py-2 bg-emerald-950/30">
              {info}
            </p>
          )}

          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-lg bg-indigo-500 py-2 text-sm font-medium hover:bg-indigo-400 disabled:opacity-60"
          >
            {busy ? "Creating account…" : "Sign up"}
          </button>
        </form>

        <div className="mt-6 flex items-center justify-between text-sm text-slate-400">
          <button
            type="button"
            onClick={onBack}
            className="rounded-lg border border-slate-800 px-3 py-2 text-slate-200 hover:border-slate-700"
          >
            Back
          </button>
          <button
            type="button"
            onClick={onLogin}
            className="text-indigo-300 hover:text-indigo-200 underline-offset-4 hover:underline"
          >
            Already have an account?
          </button>
        </div>
      </div>
    </main>
  );
}

export default SignupPage;

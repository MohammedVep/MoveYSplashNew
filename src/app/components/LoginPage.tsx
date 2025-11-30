"use client";
/* Mohammed Vepari
   ID: 5145543
   Sunday November 30th 2025
  */
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

type LoginPageProps = {
  onLogin?: (email: string, password: string) => Promise<void> | void;
  onBack?: () => void;
  onSignup?: () => void;
};

export function LoginPage({ onLogin, onBack, onSignup }: LoginPageProps) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Please fill in both email and password.");
      return;
    }

    setBusy(true);
    try {
      if (onLogin) {
        await onLogin(email, password);
      } else {
        const { data, error: supabaseError } =
          await supabase.auth.signInWithPassword({
            email,
            password,
          });

        if (supabaseError) {
          setError(supabaseError.message);
          return;
        }

        if (!data.session) {
          setError("Login failed. Please try again.");
          return;
        }

        // redirect to main app
        router.push("/");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong while logging in. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-50">
      <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/70 p-8 shadow-xl">
        <h1 className="text-2xl font-semibold mb-2">Sign in to MoveYSplash</h1>
        <p className="text-sm text-slate-400 mb-6">
          Enter your credentials to get back into your workspace.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
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
              autoComplete="current-password"
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

          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-lg bg-indigo-500 py-2 text-sm font-medium hover:bg-indigo-400 disabled:opacity-60"
          >
            {busy ? "Signing in…" : "Sign in"}
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
            onClick={onSignup}
            className="text-indigo-300 hover:text-indigo-200 underline-offset-4 hover:underline"
          >
            Create account
          </button>
        </div>
      </div>
    </main>
  );
}

export default LoginPage;

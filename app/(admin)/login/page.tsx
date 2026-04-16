"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Loader2, Lock } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError("Invalid email or password. Please try again.");
        setLoading(false);
        return;
      }

      router.push("/dashboard");
      router.refresh();
    } catch {
      setError("An unexpected error occurred. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="relative w-full max-w-md">
        {/* Card */}
        <div className="border border-border-subtle bg-white p-8 sm:p-10">
          {/* Logo */}
          <div className="mb-8 flex flex-col items-center text-center">
            <img
              src="/images/logo.png"
              alt="Opslogica"
              className="h-8 w-auto"
            />
            <p className="mt-3 text-sm text-text-secondary">Admin Panel</p>
          </div>

          {/* Heading */}
          <div className="mb-6 flex items-center justify-center gap-2">
            <Lock className="h-5 w-5 text-text-primary" />
            <h2 className="font-display text-xl font-semibold text-text-primary">
              Admin Login
            </h2>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 border border-error/30 bg-error/5 px-4 py-3 text-sm text-error">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-text-secondary font-mono uppercase tracking-wider text-xs"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                placeholder="admin@opslogica.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-border-subtle text-text-primary px-4 py-3 text-sm placeholder:text-text-secondary/50 focus:border-text-primary focus:outline-none transition-colors"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-sm font-medium text-text-secondary font-mono uppercase tracking-wider text-xs"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                autoComplete="current-password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white border border-border-subtle text-text-primary px-4 py-3 text-sm placeholder:text-text-secondary/50 focus:border-text-primary focus:outline-none transition-colors"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          {/* Footer note */}
          <p className="mt-6 text-center text-xs text-text-secondary/60">
            Protected area. Authorized personnel only.
          </p>
        </div>
      </div>
    </div>
  );
}

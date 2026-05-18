"use client";

import { useActionState, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Check, AlertCircle } from "lucide-react";
import { LuxButtonBtn } from "@/components/ui/button";
import { submitContactForm } from "@/lib/actions/contact";
import { initialContactState } from "@/lib/contact-types";

export function ContactForm({ services }: { services: string[] }) {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialContactState,
  );

  // Form-mount timestamp — the server checks that real users take at least a
  // couple of seconds to fill it out. Bots that submit instantly get filtered.
  const [mountedAt, setMountedAt] = useState<number | null>(null);
  useEffect(() => {
    setMountedAt(Date.now());
  }, []);

  // Force light-theme variables on the form card so the same component
  // renders correctly inside .section-dark heroes (where --foreground is
  // white and labels would otherwise vanish on the white card).
  const lightThemeReset: React.CSSProperties = {
    ["--foreground" as string]: "#14111c",
    ["--foreground-muted" as string]: "#3a3447",
    ["--muted" as string]: "#6b6480",
    ["--muted-strong" as string]: "#4a4459",
  };

  if (state.status === "ok") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={lightThemeReset}
        className="relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white p-10 md:p-14 text-[color:var(--foreground)] shadow-soft"
      >
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 border border-brand-200">
          <Check className="h-6 w-6 text-brand-700" />
        </div>
        <h3 className="font-display mt-6 text-3xl text-[color:var(--foreground)] md:text-4xl">
          Thank you — we&apos;ll be in touch.
        </h3>
        <p className="mt-4 max-w-md text-[color:var(--muted-strong)] leading-relaxed">
          A clinician will review your note and follow up shortly. If it&apos;s
          time-sensitive, please call us — we answer around the clock.
        </p>
      </motion.div>
    );
  }

  const inputCls =
    "w-full rounded-2xl border border-[color:var(--border)] bg-white px-5 py-4 text-base text-[color:var(--foreground)] placeholder:text-[color:var(--muted)]/80 transition focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/25 disabled:opacity-60";

  return (
    <form
      action={formAction}
      style={lightThemeReset}
      className="relative rounded-3xl border border-[color:var(--border)] bg-white p-8 text-[color:var(--foreground)] shadow-soft md:p-10"
    >
      <h3 className="font-display text-2xl text-[color:var(--foreground)] md:text-3xl">
        Tell us about yourself
      </h3>
      <p className="mt-2 text-sm text-[color:var(--muted-strong)]">
        We&apos;ll respond within a few hours.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted-strong)]">
            Full name
          </span>
          <input
            required
            type="text"
            name="name"
            autoComplete="name"
            className={inputCls}
            placeholder="Your name"
            disabled={isPending}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted-strong)]">
            Email
          </span>
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className={inputCls}
            placeholder="you@example.com"
            disabled={isPending}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted-strong)]">
            Phone
          </span>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            className={inputCls}
            placeholder="(000) 000-0000"
            disabled={isPending}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted-strong)]">
            Region
          </span>
          <select name="region" className={inputCls} disabled={isPending}>
            <option>Florida</option>
            <option>New York</option>
            <option>Other</option>
          </select>
        </label>
        <label className="md:col-span-2 flex flex-col gap-2">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted-strong)]">
            Interested in
          </span>
          <select
            name="service"
            className={inputCls}
            defaultValue=""
            disabled={isPending}
          >
            <option value="" disabled>
              Choose a service
            </option>
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
            <option>Not sure yet</option>
            <option>Other</option>
          </select>
        </label>
        <label className="md:col-span-2 flex flex-col gap-2">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted-strong)]">
            Tell us more
          </span>
          <textarea
            name="message"
            rows={5}
            className={inputCls + " resize-none"}
            placeholder="Your goals, schedule, any questions…"
            disabled={isPending}
          />
        </label>
      </div>

      {/* Honeypot — bots fill this; real users don't see it. */}
      <div aria-hidden className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
        <label>
          Company
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      {/* Time-fill probe — real users can't submit faster than a few seconds. */}
      <input type="hidden" name="ts" value={mountedAt ?? ""} readOnly />

      {state.status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.75} />
          <span>{state.message}</span>
        </motion.div>
      )}

      <div className="mt-8 flex items-center justify-between gap-4">
        <p className="max-w-sm text-xs leading-relaxed text-[color:var(--muted)]">
          By submitting you agree to be contacted by phone, email, or SMS by a
          Skilled Visits clinician. Message and data rates may apply. See our{" "}
          <Link href="/privacy" className="underline underline-offset-2 hover:text-brand-700">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="underline underline-offset-2 hover:text-brand-700">
            Terms
          </Link>
          .
        </p>
        <LuxButtonBtn
          type="submit"
          size="lg"
          withArrow
          disabled={isPending}
          aria-busy={isPending}
        >
          {isPending ? "Sending…" : "Send inquiry"}
        </LuxButtonBtn>
      </div>
    </form>
  );
}

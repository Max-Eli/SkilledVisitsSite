"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { LuxButtonBtn } from "@/components/ui/button";

export function ContactForm({ services }: { services: string[] }) {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder — hook up to a real endpoint later.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border border-subtle bg-card-lux p-10 md:p-14"
      >
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/20 border border-brand-400/40">
          <Check className="h-6 w-6 text-brand-200" />
        </div>
        <h3 className="font-display mt-6 text-3xl md:text-4xl">
          Thank you — we&apos;ll be in touch.
        </h3>
        <p className="mt-4 max-w-md text-muted leading-relaxed">
          A clinician will review your note and follow up shortly. If it&apos;s
          time-sensitive, please call us — we answer around the clock.
        </p>
      </motion.div>
    );
  }

  const inputCls =
    "w-full rounded-2xl border border-subtle bg-white/[0.03] px-5 py-4 text-base text-foreground placeholder:text-muted/70 transition focus:border-brand-400/60 focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-brand-500/30";

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-subtle bg-card-lux p-8 md:p-10"
    >
      <h3 className="font-display text-2xl md:text-3xl">Tell us about yourself</h3>
      <p className="mt-2 text-sm text-muted">
        We&apos;ll respond within a few hours.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted">
            Full name
          </span>
          <input required type="text" name="name" className={inputCls} placeholder="Your name" />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted">
            Email
          </span>
          <input required type="email" name="email" className={inputCls} placeholder="you@example.com" />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted">
            Phone
          </span>
          <input type="tel" name="phone" className={inputCls} placeholder="(000) 000-0000" />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted">
            Region
          </span>
          <select name="region" className={inputCls}>
            <option className="bg-surface">Florida</option>
            <option className="bg-surface">New York</option>
            <option className="bg-surface">Other</option>
          </select>
        </label>
        <label className="md:col-span-2 flex flex-col gap-2">
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted">
            Interested in
          </span>
          <select name="service" className={inputCls} defaultValue="">
            <option className="bg-surface" value="" disabled>
              Choose a service
            </option>
            {services.map((s) => (
              <option key={s} className="bg-surface">
                {s}
              </option>
            ))}
            <option className="bg-surface">Not sure yet</option>
          </select>
        </label>
        <label className="md:col-span-2 flex flex-col gap-2">
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted">
            Tell us more
          </span>
          <textarea
            name="message"
            rows={5}
            className={inputCls + " resize-none"}
            placeholder="Your goals, schedule, any questions…"
          />
        </label>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <p className="text-xs text-muted max-w-xs">
          By submitting you agree to be contacted by a Skilled Visits clinician.
        </p>
        <LuxButtonBtn type="submit" size="lg" withArrow>
          Send inquiry
        </LuxButtonBtn>
      </div>
    </form>
  );
}

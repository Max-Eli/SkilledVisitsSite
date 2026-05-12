"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Stethoscope,
  Beaker,
  Clock,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const FEATURES = [
  {
    icon: Stethoscope,
    title: "Board-Certified Clinicians",
    body: "Every visit is delivered by experienced registered nurses following physician-approved treatment protocols.",
  },
  {
    icon: Beaker,
    title: "Medical-Grade Ingredients",
    body: "Premium vitamins, minerals, and wellness medications sourced from trusted U.S. pharmacies and medical suppliers.",
  },
  {
    icon: Clock,
    title: "24/7 Same-Day Service",
    body: "Book in minutes, treated in hours. We answer around the clock — including weekends and holidays.",
  },
  {
    icon: Sparkles,
    title: "Concierge Experience",
    body: "Personal attention, unhurried visits, and a clinical concierge who handles every detail end-to-end.",
  },
];

const STATS = [
  { value: "10K+", label: "Visits Delivered" },
  { value: "100%", label: "Licensed & Insured" },
  { value: "5.0★", label: "Google Rating" },
  { value: "24/7", label: "Same-Day Available" },
];

export function WhySkilledVisits() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 brand-glow-soft opacity-50"
      />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="eyebrow"
          >
            Why Us
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display mt-5 text-4xl tracking-tight text-[color:var(--foreground)] md:text-5xl lg:text-6xl"
          >
            Why{" "}
            <span className="font-display-italic text-brand-700">
              Skilled Visits?
            </span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-4 h-px w-16 origin-center bg-brand-500/80"
          />
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-[color:var(--muted-strong)]"
          >
            We built Skilled Visits because waiting rooms don&apos;t belong in
            wellness. Every part of our service is engineered around the
            standard of care we&apos;d want for ourselves.
          </motion.p>
        </div>

        {/* Feature grid */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.article
                key={f.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.05 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-soft-lg md:p-8"
              >
                {/* Subtle accent corner */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-100/0 blur-2xl transition-colors duration-700 group-hover:bg-brand-100/60"
                />

                <div className="relative">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-brand-500/30 bg-brand-50 text-brand-700 transition-colors group-hover:border-brand-500/50 group-hover:bg-brand-100">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-6 font-display text-xl leading-tight tracking-tight text-[color:var(--foreground)] md:text-[22px]">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-[color:var(--muted-strong)] md:text-sm">
                    {f.body}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid grid-cols-2 divide-y divide-x divide-[color:var(--border)] overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-soft md:grid-cols-4 md:divide-y-0"
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center gap-2 px-6 py-8 text-center md:py-10 ${
                // Remove top border on first row, left border on first col
                i % 2 === 0 ? "border-l-0" : ""
              } ${i < 2 ? "border-t-0" : ""}`}
            >
              <div className="font-display text-4xl tracking-tight text-brand-700 md:text-5xl lg:text-[56px]">
                {s.value}
              </div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted-strong)]">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 rounded-md bg-gradient-to-b from-brand-500 to-brand-700 px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-white shadow-[0_10px_28px_-12px_color-mix(in_oklab,var(--brand-500)_60%,transparent)] transition hover:-translate-y-0.5"
          >
            Book Your Visit
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2.5 rounded-md border border-[color:var(--border-strong)] bg-white px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-[color:var(--foreground)] transition hover:border-brand-500/60 hover:bg-brand-50 hover:text-brand-700"
          >
            Our Story
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

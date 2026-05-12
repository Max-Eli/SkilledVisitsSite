"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  Clock,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { BRAND } from "@/lib/content";

const TRUST_PILLS = [
  { icon: Clock, label: "24/7 Available" },
  { icon: ShieldCheck, label: "Licensed Clinicians" },
  { icon: MapPin, label: "We Come To You" },
];

const CONTACTS = [
  {
    icon: Phone,
    label: "Florida",
    value: BRAND.phoneFL,
    href: `tel:${BRAND.phoneFL.replace(/\D/g, "")}`,
  },
  {
    icon: Phone,
    label: "New York",
    value: BRAND.phoneNY,
    href: `tel:${BRAND.phoneNY.replace(/\D/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email Us",
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
  },
];

export function CTA() {
  return (
    <section className="section-dark relative overflow-hidden">
      {/* Background van photo at low opacity */}
      <div aria-hidden className="absolute inset-0 -z-20">
        <Image
          src="/van-side-1.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-25"
        />
      </div>

      {/* Gradient overlay + brand glow */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[color:var(--background)] via-[color:var(--background)]/85 to-[color:var(--background)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 brand-glow opacity-50"
      />

      <div className="mx-auto max-w-3xl px-5 py-24 text-center md:px-8 md:py-32">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="eyebrow"
        >
          Begin
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display mt-5 text-5xl leading-[1] tracking-tight text-[color:var(--foreground)] md:text-6xl lg:text-7xl"
        >
          Ready to Feel{" "}
          <span className="font-display-italic text-brand-700">Better?</span>
        </motion.h2>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-4 h-px w-16 origin-center bg-brand-500/80"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-[color:var(--foreground-muted)]"
        >
          Book your visit and a clinician will design your protocol before they
          arrive. Same-day, around the clock, wherever you are.
        </motion.p>

        {/* Trust pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2"
        >
          {TRUST_PILLS.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-[10px] uppercase tracking-[0.18em] text-[color:var(--foreground)] backdrop-blur-md"
            >
              <Icon className="h-3.5 w-3.5 text-brand-700" strokeWidth={1.7} />
              {label}
            </span>
          ))}
        </motion.div>

        {/* Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
        >
          <Link
            href={BRAND.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 rounded-md bg-gradient-to-b from-brand-500 to-brand-700 px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-white shadow-[0_10px_28px_-12px_color-mix(in_oklab,var(--brand-500)_60%,transparent)] transition hover:-translate-y-0.5"
          >
            Book Your Visit
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2.5 rounded-md border border-[color:var(--border-strong)] bg-[color:var(--surface)]/30 px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-[color:var(--foreground)] backdrop-blur-sm transition hover:border-brand-500/60 hover:bg-[color:var(--surface)]/60"
          >
            Explore Services
          </Link>
        </motion.div>

        {/* "Or reach us directly" divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="mx-auto mt-14 flex max-w-md items-center gap-4"
        >
          <div className="h-px flex-1 bg-[color:var(--border)]" />
          <span className="text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted)]">
            Or Reach Us Directly
          </span>
          <div className="h-px flex-1 bg-[color:var(--border)]" />
        </motion.div>

        {/* Contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3"
        >
          {CONTACTS.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-left backdrop-blur-md transition hover:-translate-y-0.5 hover:border-brand-400/50 hover:bg-white/[0.08]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-400/40 bg-brand-500/15 text-brand-700">
                <Icon className="h-4 w-4" strokeWidth={1.7} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] uppercase tracking-[0.22em] text-brand-700">
                  {label}
                </div>
                <div className="truncate text-sm text-[color:var(--foreground)]">
                  {value}
                </div>
              </div>
              <ArrowRight
                className="h-3.5 w-3.5 shrink-0 text-[color:var(--muted)] transition-all group-hover:translate-x-0.5 group-hover:text-brand-700"
                strokeWidth={1.7}
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

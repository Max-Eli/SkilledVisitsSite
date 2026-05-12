"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { BRAND } from "@/lib/content";
import {
  Sparkles,
  CalendarCheck,
  Truck,
  Heart,
  ArrowRight,
} from "lucide-react";

const STEPS = [
  {
    num: "01",
    icon: Sparkles,
    title: "Choose Your Treatment",
    body: "Browse our IV menus, wellness shots, and lab panels — or chat with our concierge to design a protocol around your goals.",
  },
  {
    num: "02",
    icon: CalendarCheck,
    title: "Book Your Visit",
    body: "Pick a time and place. Home, hotel, office, or the mobile lounge — same-day appointments included.",
  },
  {
    num: "03",
    icon: Truck,
    title: "We Come To You",
    body: "A licensed clinician arrives on time, fully equipped, with everything tailored exactly to your protocol.",
  },
  {
    num: "04",
    icon: Heart,
    title: "Relax & Recover",
    body: "Sit back. We monitor every minute, follow up after, and adjust as you go. That's the standard.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-cream relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="eyebrow"
          >
            The Process
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display mt-5 text-4xl tracking-tight text-[color:var(--foreground)] md:text-5xl lg:text-6xl"
          >
            How <span className="font-display-italic text-brand-700">It Works</span>
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
            From booking to bedside in four simple steps. Every visit is tailored,
            every detail handled — so you can focus on feeling better.
          </motion.p>
        </div>

        <div className="relative mt-16 md:mt-20">
          {/* Connecting dashed line behind icons on desktop */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[5.25rem] hidden h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent md:block lg:top-[5.75rem]"
          />

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.article
                  key={step.num}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: 0.05 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-soft-lg md:p-8"
                >
                  {/* Decorative oversized number watermark */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-3 -top-6 select-none font-display text-[140px] leading-none tracking-tighter text-brand-50 md:text-[160px]"
                  >
                    {step.num}
                  </div>

                  <div className="relative">
                    <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full border border-brand-500/30 bg-brand-50 text-brand-700 shadow-[0_0_0_6px_var(--background)]">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <div className="mt-6">
                      <div className="text-[10px] uppercase tracking-[0.24em] text-brand-700">
                        Step {step.num}
                      </div>
                      <h3 className="mt-2 font-display text-xl leading-tight tracking-tight text-[color:var(--foreground)] md:text-[22px]">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-[13px] leading-relaxed text-[color:var(--muted-strong)] md:text-sm">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href={BRAND.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-md bg-gradient-to-b from-brand-500 to-brand-700 px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-white shadow-[0_10px_28px_-12px_color-mix(in_oklab,var(--brand-500)_60%,transparent)] transition hover:-translate-y-0.5"
          >
            Book Your Visit
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 rounded-md border border-[color:var(--border-strong)] bg-white px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-[color:var(--foreground)] transition hover:border-brand-500/60 hover:bg-brand-50 hover:text-brand-700"
          >
            View Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "motion/react";
import { LuxButton } from "@/components/ui/button";
import { BRAND } from "@/lib/content";
import { AccentText } from "@/components/ui/accent-text";

export function CTA() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-28 md:px-8">
      <div className="relative overflow-hidden rounded-[28px] border border-[color:var(--border-strong)] bg-[color:var(--surface-2)] p-8 sm:p-10 md:rounded-[36px] md:p-20">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(50% 60% at 100% 0%, color-mix(in oklab, var(--brand-400) 55%, transparent) 0%, transparent 65%), radial-gradient(40% 55% at 0% 100%, color-mix(in oklab, var(--brand-300) 70%, transparent) 0%, transparent 70%)",
          }}
        />

        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="pointer-events-none absolute -right-10 -top-20 h-[460px] w-[460px] rounded-full border border-brand-300/70"
        />
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.15 }}
          className="pointer-events-none absolute -right-32 -top-40 h-[680px] w-[680px] rounded-full border border-brand-200"
        />
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, delay: 0.3 }}
          className="pointer-events-none absolute -right-52 -top-56 h-[880px] w-[880px] rounded-full border border-brand-200/60"
        />

        <div className="relative flex items-start justify-between gap-8">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.22em] text-brand-700">
              Begin
            </div>
            <h2 className="font-display mt-4 text-5xl leading-[1.02] tracking-tight md:text-7xl">
              Care that comes<br />
              <AccentText className="text-gradient">to you.</AccentText>
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-[color:var(--muted-strong)]">
              Book your consultation. We&apos;ll design a protocol, schedule a
              time, and arrive when you&apos;re ready.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <LuxButton href="/contact" size="lg" withArrow>
                Start your consultation
              </LuxButton>
              <a
                href={`tel:${BRAND.phoneFL.replace(/\D/g, "")}`}
                className="text-sm text-[color:var(--muted-strong)] hover:text-brand-700 transition-colors"
              >
                Or call {BRAND.phoneFL}
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="text-right text-[10px] uppercase tracking-[0.28em] text-brand-700/80">
              By appointment
              <div className="mt-2 ml-auto h-px w-12 bg-brand-300" />
              <div className="mt-2 normal-case tracking-normal text-[11px] text-[color:var(--muted)]">
                Available 24 / 7
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

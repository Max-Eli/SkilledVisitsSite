"use client";

import { motion } from "motion/react";
import { LuxButton } from "@/components/ui/button";
import { BRAND } from "@/lib/content";

export function CTA() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-28 md:px-8">
      <div className="relative overflow-hidden rounded-[28px] md:rounded-[36px] border border-[color:var(--border-strong)] bg-[color:var(--surface-2)] p-8 sm:p-10 md:p-20">
        <div
          aria-hidden
          className="absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(45% 55% at 100% 0%, color-mix(in oklab, var(--brand-300) 50%, transparent) 0%, transparent 65%), radial-gradient(35% 45% at 0% 100%, color-mix(in oklab, var(--brand-200) 70%, transparent) 0%, transparent 70%)",
          }}
        />

        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="pointer-events-none absolute -right-10 -top-20 h-[420px] w-[420px] rounded-full border border-brand-300/60"
        />
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.15 }}
          className="pointer-events-none absolute -right-32 -top-32 h-[640px] w-[640px] rounded-full border border-brand-200"
        />

        <div className="relative flex items-start justify-between gap-8">
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.22em] text-brand-700">
              Begin
            </div>
            <h2 className="font-display mt-4 text-5xl leading-[1.02] tracking-tight md:text-7xl">
              Care that comes<br />
              <span className="italic text-gradient">to you.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[color:var(--muted-strong)]">
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
              <div className="mt-2 h-px w-12 ml-auto bg-brand-300" />
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

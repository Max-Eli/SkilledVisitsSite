"use client";

import { motion } from "motion/react";
import { LuxButton } from "@/components/ui/button";
import { BRAND } from "@/lib/content";

export function CTA() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-28 md:px-8">
      <div className="relative overflow-hidden rounded-[28px] md:rounded-[32px] border border-subtle bg-card-lux p-8 sm:p-10 md:p-20">
        <div
          aria-hidden
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(55% 60% at 50% 0%, color-mix(in oklab, var(--brand-500) 35%, transparent) 0%, transparent 70%), radial-gradient(40% 50% at 100% 100%, color-mix(in oklab, var(--violet) 30%, transparent) 0%, transparent 70%)",
          }}
        />

        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          className="pointer-events-none absolute -left-20 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-brand-400/20"
        />
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, delay: 0.15 }}
          className="pointer-events-none absolute -left-20 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full border border-brand-400/10"
        />

        <div className="relative max-w-3xl">
          <div className="text-[11px] uppercase tracking-[0.22em] text-brand-300">
            Begin
          </div>
          <h2 className="font-display mt-4 text-5xl leading-[1.02] tracking-tight md:text-7xl">
            Care that comes<br />
            <span className="italic text-gradient">to you.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Book your consultation. We&apos;ll design a protocol, schedule a
            time, and arrive when you&apos;re ready.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <LuxButton href="/contact" size="lg" withArrow>
              Start your consultation
            </LuxButton>
            <a
              href={`tel:${BRAND.phoneFL.replace(/\D/g, "")}`}
              className="text-sm text-foreground/80 hover:text-foreground"
            >
              Or call {BRAND.phoneFL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

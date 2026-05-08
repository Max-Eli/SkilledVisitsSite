"use client";

import { motion } from "motion/react";
import { Download, ShieldCheck, Check } from "lucide-react";
import { BLOOD_PANELS, BLOOD_WORK_FEE, MENU_PDF } from "@/lib/content";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { AccentText } from "@/components/ui/accent-text";

export function BloodPanelsMenu() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow>Lab Panels</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight md:text-5xl">
                Comprehensive panels,<br />
                <AccentText className="text-gradient">drawn at home.</AccentText>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md text-[color:var(--muted-strong)] leading-relaxed">
                Mobile phlebotomy from licensed clinicians. Samples are
                transported to accredited labs with chain-of-custody care.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <a
                href={MENU_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-[color:var(--border-strong)] bg-white px-5 py-3 text-sm text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700"
              >
                <Download className="h-4 w-4" strokeWidth={1.75} />
                <span>Download menu (PDF)</span>
              </a>
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-strong)]">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" strokeWidth={1.75} />
                <span>We accept insurance</span>
              </div>
            </div>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-soft"
        >
          <div className="flex items-center justify-between gap-4 border-b border-[color:var(--border)] bg-[color:var(--surface-2)] px-6 py-5 md:px-10">
            <div className="text-[11px] uppercase tracking-[0.22em] text-brand-700">
              Available Panels
            </div>
            <div className="font-display text-lg tracking-tight text-foreground md:text-xl">
              {BLOOD_WORK_FEE}
            </div>
          </div>

          <ul className="grid grid-cols-1 gap-x-8 px-6 py-2 md:grid-cols-2 md:px-10">
            {BLOOD_PANELS.map((panel, i) => (
              <motion.li
                key={panel.name}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-3 border-b border-[color:var(--border)] py-4 text-foreground last:border-b-0 md:[&:nth-last-child(2)]:border-b-0"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 border border-brand-200">
                  <Check className="h-3 w-3 text-brand-700" strokeWidth={2.5} />
                </span>
                <span className="font-medium">{panel.name}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

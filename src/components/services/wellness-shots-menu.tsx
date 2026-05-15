"use client";

import { motion } from "motion/react";
import { Download } from "lucide-react";
import { WELLNESS_SHOT_TIERS, MENU_PDF } from "@/lib/content";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { AccentText } from "@/components/ui/accent-text";

export function WellnessShotsMenu() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow>Tiers & Add-Ons</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight md:text-5xl">
                Targeted shots,<br />
                <AccentText className="text-gradient">three tiers.</AccentText>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md text-[color:var(--muted-strong)] leading-relaxed">
                Standalone or paired with any IV protocol. Choose by ingredient
                profile or ask your clinician what fits your goals.
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
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {WELLNESS_SHOT_TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-0.5 hover:shadow-soft-lg md:p-10"
            >
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <div className="font-display text-2xl tracking-tight md:text-3xl">
                    {tier.name}
                  </div>
                  {tier.note && (
                    <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-brand-700">
                      {tier.note}
                    </div>
                  )}
                </div>
                <div className="font-display text-3xl tracking-tight text-foreground md:text-4xl">
                  {tier.price}
                </div>
              </div>

              <div className="lux-divider" />

              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted-strong)]">
                  Includes
                </div>
                <ul className="mt-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                  {tier.ingredients.map((ing) => (
                    <li
                      key={ing}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

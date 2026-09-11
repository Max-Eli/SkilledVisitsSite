"use client";

import { motion } from "motion/react";
import { Download } from "lucide-react";
import type { WellnessShotTier } from "@/lib/content";
import {
  WELLNESS_SHOT_TIERS,
  IV_ADD_ON_TIERS,
  SPECIALTY_SHOTS,
  EXTRA_FLUID_BAGS,
  VISIT_MINIMUM_NOTE,
  MENU_PDF,
} from "@/lib/content";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { AccentText } from "@/components/ui/accent-text";

function TierGrid({ tiers }: { tiers: WellnessShotTier[] }) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
      {tiers.map((tier, i) => (
        <motion.div
          key={tier.name}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-0.5 hover:shadow-soft-lg md:p-10"
        >
          <div className="flex items-baseline justify-between gap-4">
            <div className="font-display text-2xl tracking-tight md:text-3xl">
              {tier.name}
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

          {tier.note && (
            <p className="mt-auto text-[11px] italic leading-snug text-[color:var(--muted)]">
              {tier.note}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
}

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
                <AccentText className="text-gradient">every enhancement.</AccentText>
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

        {/* Standalone injections */}
        <div className="mt-14">
          <Reveal>
            <div className="flex items-center gap-4">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-700">
                Wellness Shots
              </h3>
              <span
                aria-hidden
                className="h-px flex-1 bg-[color:var(--border-strong)]"
              />
              <span className="text-[10px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
                Standalone injection
              </span>
            </div>
          </Reveal>
          <TierGrid tiers={WELLNESS_SHOT_TIERS} />

          <Reveal>
            <div className="mt-5 rounded-3xl border border-[color:var(--border)] bg-white p-8 shadow-soft md:p-10">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div className="font-display text-2xl tracking-tight md:text-3xl">
                  Specialty
                </div>
                <span className="text-xs italic text-[color:var(--muted)]">
                  priced individually
                </span>
              </div>
              <ul className="mt-5 divide-y divide-[color:var(--border)]">
                {SPECIALTY_SHOTS.map((s) => (
                  <li
                    key={s.name}
                    className="flex items-baseline justify-between gap-3 py-3"
                  >
                    <span className="text-[color:var(--muted-strong)]">
                      {s.name}{" "}
                      <span className="text-[color:var(--muted)]">
                        ({s.dose})
                      </span>
                    </span>
                    <span className="font-display text-xl text-brand-700">
                      {s.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Boosts layered onto a drip */}
        <div className="mt-16">
          <Reveal>
            <div className="flex items-center gap-4">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-700">
                IV Add-Ons
              </h3>
              <span
                aria-hidden
                className="h-px flex-1 bg-[color:var(--border-strong)]"
              />
              <span className="text-[10px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
                Added to any drip
              </span>
            </div>
          </Reveal>
          <TierGrid tiers={IV_ADD_ON_TIERS} />
        </div>

        {/* Extra fluids */}
        <div className="mt-16">
          <Reveal>
            <div className="flex items-center gap-4">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-700">
                Extra Fluid Bags
              </h3>
              <span
                aria-hidden
                className="h-px flex-1 bg-[color:var(--border-strong)]"
              />
              <span className="text-[10px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
                Added to any drip
              </span>
            </div>
          </Reveal>
          <Reveal>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {EXTRA_FLUID_BAGS.map((f) => (
                <div
                  key={f.name}
                  className="flex items-baseline justify-between gap-4 rounded-3xl border border-[color:var(--border)] bg-white p-7 shadow-soft"
                >
                  <div>
                    <div className="font-display text-2xl tracking-tight">
                      {f.name}
                    </div>
                    <p className="mt-1 text-sm text-[color:var(--muted-strong)]">
                      {f.detail}
                    </p>
                  </div>
                  <div className="font-display text-2xl tracking-tight text-brand-700">
                    {f.price}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-12 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-2)]/60 p-6 text-sm leading-relaxed text-[color:var(--muted-strong)]">
            <span className="font-medium text-foreground">Please note — </span>
            {VISIT_MINIMUM_NOTE}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

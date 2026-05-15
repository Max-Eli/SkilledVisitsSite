"use client";

import { motion } from "motion/react";
import { Download, Activity, Wind, Bug, FlaskConical } from "lucide-react";
import { RAPID_TESTS_LIST, MENU_PDF } from "@/lib/content";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { AccentText } from "@/components/ui/accent-text";

const TEST_ICONS: Record<string, typeof Activity> = {
  Covid: Activity,
  "Influenza A&B": Wind,
  Strep: Bug,
  "Drug Screening": FlaskConical,
};

export function RapidTestsMenu() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow>What We Test</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight md:text-5xl">
                Same-visit answers,<br />
                <AccentText className="text-gradient">no waiting room.</AccentText>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md text-[color:var(--muted-strong)] leading-relaxed">
                Rapid-turnaround diagnostics administered in-home by licensed
                professionals — discreet, comfortable, and back to you fast.
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

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {RAPID_TESTS_LIST.map((test, i) => {
            const Icon = TEST_ICONS[test.name] ?? FlaskConical;
            return (
              <motion.div
                key={test.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-4 rounded-3xl border border-[color:var(--border)] bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-0.5 hover:shadow-soft-lg"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 border border-brand-200">
                  <Icon className="h-5 w-5 text-brand-700" strokeWidth={1.75} />
                </div>
                <div className="font-display text-xl tracking-tight md:text-2xl">
                  {test.name}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

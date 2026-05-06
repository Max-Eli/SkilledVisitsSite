"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { LuxButton } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { AccentText } from "@/components/ui/accent-text";

export function Spotlight() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1.12]);

  return (
    <section ref={ref} className="relative overflow-hidden py-28 md:py-40">
      <div aria-hidden className="absolute inset-0 -z-10 brand-glow-soft opacity-50" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 md:grid-cols-12 md:gap-16 md:px-8">
        <div className="md:col-span-6">
          <Reveal>
            <Eyebrow>The Mobile Suite</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight md:text-6xl">
              A clinical sanctuary,<br />
              <AccentText className="text-gradient">wherever you are.</AccentText>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-lg text-[color:var(--muted-strong)] leading-relaxed">
              Our private mobile suite brings the tranquility of a high-end
              clinic to your driveway, your hotel, or your event. Climate
              controlled, hospital-grade clean, and finished for comfort — so
              treatment feels like a ritual, not a visit.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Clinical-grade sanitation",
                "Climate-controlled interior",
                "Private, serene treatment space",
                "Same clinician, end to end",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-3 rounded-2xl border border-[color:var(--border)] bg-white px-4 py-3 text-sm text-foreground shadow-[0_1px_2px_rgba(20,17,28,0.03)]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10">
              <LuxButton href="/about" variant="outline" withArrow>
                About our practice
              </LuxButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="md:col-span-6">
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full border border-brand-200"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-[color:var(--border-strong)] bg-white shadow-soft-lg">
              <motion.div style={{ y, scale }} className="absolute inset-0">
                <Image
                  src="/mobilesuite.png"
                  alt="Skilled Visits luxury mobile suite"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </motion.div>
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/85 via-white/30 to-transparent"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-[color:var(--border)] bg-white/95 p-5 backdrop-blur-sm shadow-soft"
              >
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-brand-700">
                    Now serving
                  </div>
                  <div className="font-display text-xl text-foreground">Florida · New York</div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-50 border border-[color:var(--border)]">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 pulse-glow" />
                </div>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

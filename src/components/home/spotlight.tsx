"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { LuxButton } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";

export function Spotlight() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1.14]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-28 md:py-40"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 md:grid-cols-12 md:gap-16 md:px-8">
        <div className="md:col-span-6">
          <Reveal>
            <Eyebrow>The Luxury Mobile Suite</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight md:text-6xl">
              A clinical sanctuary,<br />
              <span className="text-gradient italic">wherever you are.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-lg text-muted leading-relaxed">
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
                  className="flex items-center gap-3 rounded-2xl border border-subtle bg-white/[0.02] px-4 py-3 text-sm text-foreground/85"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
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
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-subtle bg-card-lux">
            <motion.div style={{ y, scale }} className="absolute inset-0">
              <Image
                src="/mobilesuite.png"
                alt="Skilled Visits luxury mobile suite"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-background/50 p-5 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-brand-300">
                    Now serving
                  </div>
                  <div className="font-display text-2xl">Florida · New York</div>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-subtle bg-white/[0.03]">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 pulse-glow" />
                </div>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

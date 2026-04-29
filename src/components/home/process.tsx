"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { HOW_IT_WORKS } from "@/lib/content";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(45% 35% at 50% 50%, color-mix(in oklab, var(--brand-200) 55%, transparent) 0%, transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="text-center">
          <Reveal>
            <div className="inline-flex">
              <Eyebrow>The Experience</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight md:text-6xl">
              From consult to care<br />
              <span className="text-gradient italic">in four considered steps.</span>
            </h2>
          </Reveal>
        </div>

        <div ref={ref} className="relative mt-20">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[color:var(--border)] md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-6 top-0 w-px bg-gradient-to-b from-brand-300 via-brand-500 to-brand-700 md:left-1/2 md:-translate-x-1/2"
          />

          <ol className="relative space-y-16">
            {HOW_IT_WORKS.map((step, i) => (
              <motion.li
                key={step.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`relative grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-12 ${
                  i % 2 === 0 ? "md:text-right" : "md:[&>:first-child]:order-2 md:text-left"
                }`}
              >
                <div className={`pl-14 md:pl-0 ${i % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                  <div className="font-display text-5xl leading-none text-gradient md:text-7xl">
                    {step.step}
                  </div>
                  <h3 className="mt-4 font-display text-2xl md:text-3xl">{step.title}</h3>
                  <p className="mt-3 text-[color:var(--muted-strong)] leading-relaxed">{step.body}</p>
                </div>
                <div className="relative hidden md:block" />
                <div
                  aria-hidden
                  className="absolute left-6 top-3 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-white bg-brand-500 shadow-[0_0_0_4px_color-mix(in_oklab,var(--brand-200)_55%,transparent),0_6px_18px_-4px_color-mix(in_oklab,var(--brand-500)_45%,transparent)] md:left-1/2"
                />
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

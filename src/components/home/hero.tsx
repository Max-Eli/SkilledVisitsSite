"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { LuxButton } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden pt-10 pb-20 md:pt-16 md:pb-28"
    >
      {/* ambient violet wash */}
      <div aria-hidden className="absolute inset-0 -z-10 brand-glow opacity-90" />

      {/* faint dot-grid texture, masked to fade at edges */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 dot-grid opacity-50"
        style={{
          maskImage:
            "radial-gradient(70% 60% at 50% 35%, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(70% 60% at 50% 35%, black 0%, transparent 75%)",
        }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 md:grid-cols-12 md:gap-12 md:px-8 lg:gap-20">
        <div className="md:col-span-7 md:pt-8 lg:pt-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow>Concierge Wellness · FL & NY</Eyebrow>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display mt-6 max-w-[14ch] text-5xl leading-[0.96] tracking-tight sm:text-6xl md:text-[5.25rem] lg:text-[6rem]"
          >
            <span className="block">Wellness,</span>
            <span className="block text-gradient italic">delivered to you.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-[color:var(--muted-strong)]"
          >
            Private, in-home IV therapy, injectables and diagnostics from
            licensed clinicians. Step into the comfort of your home — we take
            care of everything else.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <LuxButton href="/contact" size="lg" withArrow>
              Book a visit
            </LuxButton>
            <LuxButton href="/services" size="lg" variant="outline">
              Explore services
            </LuxButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-14 flex flex-wrap items-center gap-x-5 gap-y-3 text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted)]"
          >
            <div className="flex -space-x-2">
              {["1494790108377-be9c29b29330", "1544005313-94ddf0286df2", "1438761681033-6461ffad8d80"].map((id) => (
                <div
                  key={id}
                  className="h-9 w-9 rounded-full border-2 border-white overflow-hidden relative shadow-[0_2px_8px_rgba(20,17,28,0.08)]"
                >
                  <Image
                    src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=120&q=80`}
                    alt=""
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            Trusted by clients in Miami, Manhattan & beyond
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative md:col-span-5"
        >
          {/* decorative violet ring */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-6 -top-6 h-36 w-36 rounded-full border border-brand-200 md:h-48 md:w-48"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-8 -bottom-8 h-44 w-44 rounded-full bg-brand-100 blur-3xl opacity-70"
          />

          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-[color:var(--border-strong)] bg-white shadow-soft-lg">
            <motion.div style={{ y, scale }} className="absolute inset-0">
              <Image
                src="/svahero1.jpg"
                alt="A Skilled Visits clinician at work"
                fill
                priority
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover"
              />
            </motion.div>

            <div
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/85 via-white/40 to-transparent"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-[color:var(--border)] bg-white/95 px-5 py-4 backdrop-blur-sm shadow-soft"
            >
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-brand-700">
                  Now serving
                </div>
                <div className="font-display text-lg leading-tight text-foreground">
                  Florida · New York
                </div>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-50 border border-[color:var(--border)]">
                <span className="h-2 w-2 rounded-full bg-emerald-500 pulse-glow" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

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
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[92vh] min-h-[92dvh] overflow-hidden"
    >
      <motion.div
        aria-hidden
        className="absolute inset-0 brand-glow"
        style={{ opacity }}
      />

      <motion.div
        aria-hidden
        style={{ y, scale }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/svahero1.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
      </motion.div>

      <div className="mx-auto flex max-w-7xl flex-col justify-center px-5 pb-20 pt-20 md:px-8 md:pt-32 min-h-[92vh] min-h-[92dvh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Eyebrow>Concierge Wellness · FL & NY</Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display mt-6 max-w-5xl text-5xl leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          <span className="block">Wellness,</span>
          <span className="block text-gradient italic">delivered to you.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-muted"
        >
          Private, in-home IV therapy, injectables and diagnostics from
          licensed clinicians. Step into the comfort of your home — we take
          care of everything else.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
          className="mt-12 md:mt-16 flex flex-wrap items-center gap-x-5 gap-y-3 text-[11px] uppercase tracking-[0.18em] text-muted"
        >
          <div className="flex -space-x-2">
            {["1494790108377-be9c29b29330", "1544005313-94ddf0286df2", "1438761681033-6461ffad8d80"].map((id) => (
              <div
                key={id}
                className="h-9 w-9 rounded-full border-2 border-background overflow-hidden relative"
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

      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-muted"
        >
          Scroll
          <div className="h-10 w-px bg-gradient-to-b from-brand-400/60 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

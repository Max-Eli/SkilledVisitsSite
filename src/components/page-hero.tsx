"use client";

import { motion } from "motion/react";
import { Eyebrow } from "@/components/ui/eyebrow";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  accent,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden pt-20 pb-20 md:pt-32 md:pb-28">
      <div aria-hidden className="absolute inset-0 -z-10 brand-glow opacity-90" />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 dot-grid opacity-40"
        style={{
          maskImage:
            "radial-gradient(60% 55% at 50% 30%, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(60% 55% at 50% 30%, black 0%, transparent 75%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Eyebrow>{eyebrow}</Eyebrow>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display mt-6 max-w-4xl text-5xl leading-[1.02] tracking-tight md:text-7xl"
        >
          {title}
          {accent && (
            <>
              <br />
              <span className="italic text-gradient">{accent}</span>
            </>
          )}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-[color:var(--muted-strong)]"
          >
            {description}
          </motion.p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}

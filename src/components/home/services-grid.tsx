"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/content";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

export function ServicesGrid() {
  const featured = SERVICES.slice(0, 6);
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-28 md:px-8 md:py-40">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>The Menu</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Curated treatments,<br />
              <span className="text-gradient italic">uncompromising standards.</span>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <p className="max-w-sm text-[color:var(--muted-strong)] leading-relaxed">
            Every protocol is designed with a clinician, delivered with care, and
            adjusted to your biology — not a one-size-fits-all menu.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-6">
        {featured.map((s, i) => {
          const isFeature = i === 0;
          const isTall = i === 3;
          const cellSpan =
            i === 0
              ? "md:col-span-4 md:row-span-2"
              : i === 3
              ? "md:col-span-2 md:row-span-2"
              : "md:col-span-2";

          return (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={cellSpan}
            >
              <Link
                href={`/services/${s.slug}`}
                className={cn(
                  "group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-soft transition-all duration-500",
                  "hover:-translate-y-0.5 hover:shadow-soft-lg hover:border-brand-200",
                )}
              >
                <div
                  className={cn(
                    "relative w-full overflow-hidden",
                    isFeature || isTall ? "aspect-[4/3] md:aspect-auto md:flex-1" : "aspect-[16/10]",
                  )}
                >
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-tr from-brand-700/15 via-transparent to-transparent mix-blend-multiply opacity-60"
                  />
                  <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/90 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-brand-700 backdrop-blur-sm">
                    {s.category}
                  </div>
                </div>

                <div
                  className={cn(
                    "flex shrink-0 items-end justify-between gap-4 p-6 md:p-7",
                    isFeature && "bg-[color:var(--surface-2)]",
                  )}
                >
                  <div className="min-w-0">
                    <h3 className="font-display text-2xl leading-tight md:text-3xl">
                      {s.name}
                    </h3>
                    <p className="mt-2 text-sm text-[color:var(--muted-strong)] leading-relaxed">
                      {s.tagline}
                    </p>
                  </div>
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[color:var(--border)] bg-white text-brand-700 transition-all duration-300 group-hover:border-brand-400 group-hover:bg-brand-500 group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/content";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";

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
          <p className="max-w-sm text-muted leading-relaxed">
            Every protocol is designed with a clinician, delivered with care, and
            adjusted to your biology — not a one-size-fits-all menu.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-6">
        {featured.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className={
              i === 0
                ? "md:col-span-4 md:row-span-2"
                : i === 3
                ? "md:col-span-2 md:row-span-2"
                : "md:col-span-2"
            }
          >
            <Link
              href={`/services/${s.slug}`}
              className="group relative block h-full min-h-[260px] overflow-hidden rounded-3xl border border-subtle bg-card-lux"
            >
              <div className="absolute inset-0">
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-50 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
              </div>

              <div className="relative flex h-full min-h-[260px] flex-col justify-end p-6 md:p-8">
                <div className="mb-2 text-[10px] uppercase tracking-[0.22em] text-brand-300">
                  {s.category}
                </div>
                <div className="flex items-end justify-between gap-4">
                  <h3 className="font-display text-2xl leading-tight md:text-3xl">
                    {s.name}
                  </h3>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-subtle bg-white/[0.04] backdrop-blur-sm transition-all duration-300 group-hover:border-brand-400/70 group-hover:bg-brand-500/20">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
                <p className="mt-3 max-w-md text-sm text-foreground/70">{s.tagline}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

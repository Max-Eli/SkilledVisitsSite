"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/content";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { AccentText } from "@/components/ui/accent-text";

export function ServicesGrid() {
  const [featured, ...rest] = SERVICES;

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
              <span className="italic text-gradient">uncompromising </span>
              <AccentText className="text-gradient">standards.</AccentText>
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

      {/* featured (large) card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16"
      >
        <Link
          href={`/services/${featured.slug}`}
          className="group relative grid grid-cols-1 overflow-hidden rounded-[28px] border border-[color:var(--border)] bg-white shadow-soft transition-all duration-500 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-soft-lg md:grid-cols-12 md:rounded-[32px]"
        >
          <div className="relative md:col-span-7 aspect-[16/10] md:aspect-auto md:min-h-[480px] overflow-hidden">
            <Image
              src={featured.image}
              alt={featured.name}
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-tr from-brand-700/20 via-transparent to-transparent mix-blend-multiply"
            />
            <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/90 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-brand-700 backdrop-blur-sm">
              {featured.category}
            </div>
          </div>

          <div className="flex flex-col justify-between gap-8 p-8 md:col-span-5 md:p-12">
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-brand-700">
                Featured
              </div>
              <h3 className="font-display mt-3 text-3xl leading-tight tracking-tight md:text-5xl">
                {featured.name}
              </h3>
              <p className="mt-4 font-display italic text-lg text-brand-700 md:text-xl">
                {featured.tagline}
              </p>
              <p className="mt-5 text-[color:var(--muted-strong)] leading-relaxed">
                {featured.description}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-foreground/80 transition-colors group-hover:text-brand-700">
                Explore {featured.name.toLowerCase()}
              </span>
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border)] bg-white text-brand-700 transition-all duration-300 group-hover:border-brand-400 group-hover:bg-brand-500 group-hover:text-white">
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>
        </Link>
      </motion.div>

      {/* supporting tiles */}
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {rest.map((s, i) => (
          <motion.div
            key={s.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={`/services/${s.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-soft transition-all duration-500 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-soft-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-tr from-brand-700/15 via-transparent to-transparent mix-blend-multiply"
                />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/90 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-brand-700 backdrop-blur-sm">
                  {s.category}
                </div>
              </div>
              <div className="flex flex-1 items-end justify-between gap-4 p-6">
                <div>
                  <h3 className="font-display text-xl leading-tight">{s.name}</h3>
                  <p className="mt-1.5 text-sm text-[color:var(--muted)] leading-relaxed">
                    {s.tagline}
                  </p>
                </div>
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[color:var(--border)] bg-white text-brand-700 transition-all duration-300 group-hover:border-brand-400 group-hover:bg-brand-500 group-hover:text-white">
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

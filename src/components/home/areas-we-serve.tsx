"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { SERVICE_AREAS } from "@/lib/content";

const ENTRIES: {
  key: keyof typeof SERVICE_AREAS;
  display: string;
  short: string;
  tagline: string;
}[] = [
  {
    key: "Florida",
    display: "South Florida",
    short: "South Florida",
    tagline: "Sunshine. Wellness. Delivered.",
  },
  {
    key: "New York",
    display: "New York City",
    short: "New York",
    tagline: "The City That Never Stops.",
  },
];

export function AreasWeServe() {
  return (
    <section className="section-cream relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 brand-glow-soft opacity-50"
      />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="eyebrow"
          >
            Service Areas
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display mt-5 text-4xl tracking-tight text-[color:var(--foreground)] md:text-5xl lg:text-6xl"
          >
            Areas We{" "}
            <span className="font-display-italic text-brand-700">Serve</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-4 h-px w-16 origin-center bg-brand-500/80"
          />
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-[color:var(--muted-strong)]"
          >
            From South Florida to New York City — concierge wellness delivered
            across dozens of neighborhoods, all under one concierge line.
          </motion.p>
        </div>

        {/* Region cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
          {ENTRIES.map((entry, i) => {
            const data = SERVICE_AREAS[entry.key];
            return (
              <motion.article
                key={entry.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: 0.05 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-soft-lg"
              >
                {/* Photo header */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={data.hero}
                    alt={entry.display}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"
                  />

                  {/* Top-right count badge */}
                  <div className="absolute right-5 top-5 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/45 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white backdrop-blur-md">
                    <MapPin className="h-3 w-3 text-brand-300" strokeWidth={1.8} />
                    {data.cities.length}+ Areas
                  </div>

                  {/* Bottom overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
                    <div className="text-[10px] uppercase tracking-[0.24em] text-brand-200">
                      {entry.tagline}
                    </div>
                    <h3 className="font-display mt-2 text-3xl tracking-tight text-white md:text-4xl lg:text-5xl">
                      {entry.display}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-7 md:p-8">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-brand-700">
                    Neighborhoods Covered
                  </div>

                  {/* Auto-scrolling neighborhood marquee — FL left, NY right */}
                  <div className="group/marquee relative -mx-7 mt-5 overflow-hidden md:-mx-8">
                    <div
                      className={`flex w-max gap-1.5 px-2 group-hover/marquee:[animation-play-state:paused] ${
                        i === 0
                          ? "marquee-track-slow"
                          : "marquee-track-slow-reverse"
                      }`}
                    >
                      {[...data.cities, ...data.cities].map((c, idx) => (
                        <span
                          key={`${c}-${idx}`}
                          aria-hidden={idx >= data.cities.length}
                          className="inline-flex shrink-0 items-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface-2)] px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-brand-700"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                    {/* Edge fades blend chips into the card background */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent"
                    />
                  </div>

                  <div className="mt-5 text-[11px] leading-relaxed text-[color:var(--muted-strong)]">
                    {data.cities.length}+ neighborhoods across {entry.short} —
                    if you&apos;re nearby, we&apos;ll come to you.
                  </div>

                  <div className="mt-auto flex flex-col items-stretch gap-4 border-t border-[color:var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
                    <a
                      href={`tel:${data.phone.replace(/\D/g, "")}`}
                      className="inline-flex items-center gap-2.5 text-sm text-[color:var(--foreground)] transition hover:text-brand-700"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-500/30 bg-brand-50 text-brand-700">
                        <Phone className="h-3.5 w-3.5" strokeWidth={1.8} />
                      </span>
                      {data.phone}
                    </a>
                    <Link
                      href="/contact"
                      className="group/cta inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-b from-brand-500 to-brand-700 px-5 py-3 text-[10px] uppercase tracking-[0.22em] text-white shadow-[0_8px_22px_-10px_color-mix(in_oklab,var(--brand-500)_60%,transparent)] transition hover:-translate-y-0.5 md:text-[11px]"
                    >
                      Book in {entry.short}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* "Outside our regions?" prompt */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-soft md:flex-row md:gap-6 md:p-7"
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-500/30 bg-brand-50 text-brand-700">
              <MapPin className="h-4 w-4" strokeWidth={1.7} />
            </span>
            <div>
              <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--foreground)]">
                Don&apos;t see your neighborhood?
              </div>
              <div className="mt-1 text-[13px] leading-relaxed text-[color:var(--muted-strong)]">
                Reach out — we likely still come to you, and we&apos;ll confirm
                the logistics within minutes.
              </div>
            </div>
          </div>
          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2.5 rounded-md border border-[color:var(--border-strong)] bg-white px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-[color:var(--foreground)] transition hover:-translate-y-0.5 hover:border-brand-500/60 hover:bg-brand-50 hover:text-brand-700"
          >
            Ask the Concierge
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

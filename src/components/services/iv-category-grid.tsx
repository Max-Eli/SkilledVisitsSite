"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { Cocktail } from "@/lib/content";
import { cocktailSlug } from "@/lib/content";

/**
 * One category of drips laid out as a full grid — every drip is on the page
 * rather than behind a horizontal scroller.
 */
export function IVCategoryGrid({
  category,
  items,
  groupIndex,
}: {
  category: string;
  items: Cocktail[];
  groupIndex: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Category header */}
      <div className="flex items-end justify-between gap-4 px-5 md:px-8">
        <div className="flex min-w-0 items-baseline gap-4">
          <div className="font-display text-[10px] uppercase tracking-[0.28em] text-brand-700 sm:text-xs">
            0{groupIndex + 1}
          </div>
          <h3 className="font-display text-2xl tracking-tight md:text-3xl">
            {category}
          </h3>
          <div className="hidden flex-1 border-b border-dashed border-[color:var(--border)] sm:block" />
        </div>
        <div className="shrink-0 text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
          {items.length} {items.length === 1 ? "Drip" : "Drips"}
        </div>
      </div>

      {/* Grid */}
      <div className="mt-6 grid grid-cols-1 gap-4 px-5 sm:grid-cols-2 md:gap-5 md:px-8 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((c) => (
          <article
            key={c.name}
            className="group flex flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-soft-lg"
          >
            {/* Image */}
            <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-brand-50 via-white to-[color:var(--surface-2)]">
              <Image
                src={c.image}
                alt={c.name}
                fill
                sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-contain p-5 transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-[color:var(--border)] bg-white/95 px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-brand-700 shadow-sm backdrop-blur-sm">
                <span className="h-1 w-1 rounded-full bg-brand-500" />
                {c.category}
              </div>
              {c.badge && (
                <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-gradient-to-b from-brand-500 to-brand-700 px-2.5 py-1 text-[9px] uppercase tracking-[0.14em] text-white shadow-sm">
                  <span aria-hidden>★</span>
                  {c.badge}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col gap-3 p-5">
              <div className="flex items-start justify-between gap-3">
                <h4 className="font-display text-lg leading-tight tracking-tight text-[color:var(--foreground)] md:text-xl">
                  {c.name}
                </h4>
                <div className="whitespace-nowrap font-display text-lg leading-none tracking-tight text-brand-700 md:text-xl">
                  {c.priceFrom && (
                    <span className="mr-1 align-middle text-[9px] uppercase tracking-[0.16em] text-[color:var(--muted)]">
                      from
                    </span>
                  )}
                  {c.price}
                </div>
              </div>

              <p className="font-display italic text-[12px] leading-snug text-brand-700">
                {c.tagline}
              </p>

              {(c.threePack || c.memberRate) && (
                <dl className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[11px]">
                  {c.threePack && (
                    <div className="flex items-baseline gap-1.5">
                      <dt className="text-[color:var(--muted)]">3 for</dt>
                      <dd className="font-medium text-[color:var(--foreground)]">
                        {c.threePack}
                      </dd>
                    </div>
                  )}
                  {c.memberRate && (
                    <div className="flex items-baseline gap-1.5">
                      <dt className="text-[color:var(--muted)]">Member</dt>
                      <dd className="font-medium text-brand-700">
                        {c.memberRate}
                      </dd>
                    </div>
                  )}
                </dl>
              )}

              {/* Benefits */}
              <div className="mt-1 flex flex-wrap gap-1 border-t border-[color:var(--border)] pt-3">
                {c.benefits.slice(0, 3).map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center rounded-full bg-[color:var(--surface-2)] px-2 py-0.5 text-[9px] uppercase tracking-[0.14em] text-brand-700"
                  >
                    {b}
                  </span>
                ))}
                {c.benefits.length > 3 && (
                  <span className="inline-flex items-center text-[9px] uppercase tracking-[0.14em] text-[color:var(--muted)]">
                    +{c.benefits.length - 3} more
                  </span>
                )}
              </div>

              {c.note && (
                <p className="text-[10px] italic leading-snug text-[color:var(--muted)]">
                  {c.note}
                </p>
              )}

              <Link
                href={`/services/iv-therapy/${cocktailSlug(c.name)}`}
                className="group/cta mt-auto inline-flex items-center gap-1.5 self-start text-[10px] uppercase tracking-[0.22em] text-brand-700 transition hover:text-brand-800"
              >
                View Drip Details
                <ArrowRight className="h-3 w-3 transition-transform group-hover/cta:translate-x-0.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </motion.div>
  );
}

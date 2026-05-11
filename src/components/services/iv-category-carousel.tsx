"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Cocktail, CocktailCategory } from "@/lib/content";

export function IVCategoryCarousel({
  category,
  items,
  groupIndex,
}: {
  category: CocktailCategory;
  items: Cocktail[];
  groupIndex: number;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const getMetrics = () => {
    const el = scrollRef.current;
    if (!el) return null;
    const first = el.children[0] as HTMLElement | undefined;
    const cardW = first?.offsetWidth ?? 0;
    const styles = getComputedStyle(el);
    const gap = parseFloat(styles.columnGap || styles.gap || "0");
    return { el, cardW, gap };
  };

  const update = useCallback(() => {
    const m = getMetrics();
    if (!m) return;
    const { el, cardW, gap } = m;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
    const idx = Math.round(el.scrollLeft / (cardW + gap));
    setActiveIndex(Math.max(0, Math.min(idx, items.length - 1)));
  }, [items.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollByDir = (dir: 1 | -1) => {
    const m = getMetrics();
    if (!m) return;
    m.el.scrollBy({ left: dir * (m.cardW + m.gap), behavior: "smooth" });
  };

  const scrollToIndex = (i: number) => {
    const m = getMetrics();
    if (!m) return;
    m.el.scrollTo({ left: i * (m.cardW + m.gap), behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: groupIndex * 0.05, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Category header */}
      <div className="flex items-end justify-between gap-4 px-5 md:px-8">
        <div className="flex items-baseline gap-4 min-w-0">
          <div className="font-display text-[10px] uppercase tracking-[0.28em] text-brand-700 sm:text-xs">
            0{groupIndex + 1}
          </div>
          <h3 className="font-display text-2xl tracking-tight md:text-3xl">
            {category}
          </h3>
          <div className="hidden flex-1 border-b border-dashed border-[color:var(--border)] sm:block" />
        </div>

        {/* Desktop arrow controls */}
        <div className="hidden shrink-0 items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => scrollByDir(-1)}
            disabled={!canPrev}
            aria-label={`Previous ${category} treatment`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-white text-[color:var(--foreground)] transition disabled:opacity-30 disabled:cursor-not-allowed hover:enabled:border-brand-500/60 hover:enabled:bg-brand-50 hover:enabled:text-brand-700"
          >
            <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.7} />
          </button>
          <button
            type="button"
            onClick={() => scrollByDir(1)}
            disabled={!canNext}
            aria-label={`Next ${category} treatment`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-white text-[color:var(--foreground)] transition disabled:opacity-30 disabled:cursor-not-allowed hover:enabled:border-brand-500/60 hover:enabled:bg-brand-50 hover:enabled:text-brand-700"
          >
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.7} />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative mt-6">
        {/* Soft edge fades */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-10 bg-gradient-to-r from-[color:var(--background)] to-transparent md:block"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-10 bg-gradient-to-l from-[color:var(--background)] to-transparent md:block"
        />

        <div
          ref={scrollRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 hide-scrollbar md:gap-5 md:px-8"
          style={{ scrollPadding: "0 1.25rem" }}
        >
          {items.map((c, i) => (
            <article
              key={c.name}
              className="group flex w-[56%] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-soft-lg sm:w-[40%] md:w-[calc((100%-2.5rem)/3)] lg:w-[calc((100%-3rem)/4)]"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-brand-50 via-white to-[color:var(--surface-2)]">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 40vw, 56vw"
                  className="object-contain p-5 transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-[color:var(--border)] bg-white/95 px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-brand-700 shadow-sm backdrop-blur-sm">
                  <span className="h-1 w-1 rounded-full bg-brand-500" />
                  {category.split(" ")[0]}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-display text-lg leading-tight tracking-tight text-[color:var(--foreground)] md:text-xl">
                    {c.name}
                  </h4>
                  <div className="font-display text-lg leading-none tracking-tight text-brand-700 md:text-xl">
                    {c.price}
                  </div>
                </div>

                <p className="font-display italic text-[12px] leading-snug text-brand-700">
                  {c.tagline}
                </p>

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

                <Link
                  href="/contact"
                  className="group/cta mt-auto inline-flex items-center gap-1.5 self-start text-[10px] uppercase tracking-[0.22em] text-brand-700 transition hover:text-brand-800"
                >
                  Book This Drip
                  <ArrowRight className="h-3 w-3 transition-transform group-hover/cta:translate-x-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Progress dots */}
        {items.length > 1 && (
          <div className="mt-6 flex items-center justify-center gap-1.5 px-5 md:px-8">
            {items.map((c, i) => (
              <button
                key={c.name}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to ${c.name}`}
                className={`h-1 rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? "w-8 bg-brand-500"
                    : "w-2.5 bg-[color:var(--border-strong)] hover:bg-brand-300"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

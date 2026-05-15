"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { IV_COCKTAILS } from "@/lib/content";

// Pick the 6 highlight infusions for the home page featured carousel.
const FEATURED_SLUGS = new Set([
  "Original Myers",
  "Pure Hydration",
  "Energy Charge",
  "Hangover Hero",
  "Immunity Shield",
  "NAD+ Revive",
]);

export function FeaturedTreatments() {
  const featured = IV_COCKTAILS.filter((c) => FEATURED_SLUGS.has(c.name));
  const COUNT = featured.length;
  // 3× duplication so the user always has a copy on either side to scroll into;
  // we silently jump back to the middle copy when they reach an outer copy.
  const slides = [...featured, ...featured, ...featured];
  const middleStart = COUNT;
  const middleEnd = COUNT * 2;

  const scrollRef = useRef<HTMLDivElement>(null);
  const settleTimer = useRef<number | null>(null);
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

  const onScroll = useCallback(() => {
    const m = getMetrics();
    if (!m) return;
    const { el, cardW, gap } = m;
    const stride = cardW + gap;
    const rawIdx = Math.round(el.scrollLeft / stride);
    setActiveIndex(((rawIdx % COUNT) + COUNT) % COUNT);

    // After scroll settles, if we're in an outer copy, snap back to the middle copy.
    if (settleTimer.current) window.clearTimeout(settleTimer.current);
    settleTimer.current = window.setTimeout(() => {
      const idx = Math.round(el.scrollLeft / stride);
      if (idx < middleStart) {
        el.scrollLeft = (idx + COUNT) * stride;
      } else if (idx >= middleEnd) {
        el.scrollLeft = (idx - COUNT) * stride;
      }
    }, 180);
  }, [COUNT, middleStart, middleEnd]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    // Land on the start of the middle copy without animation.
    const positionToMiddle = () => {
      const m = getMetrics();
      if (!m) return;
      m.el.scrollLeft = middleStart * (m.cardW + m.gap);
    };
    positionToMiddle();
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", positionToMiddle);
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", positionToMiddle);
      if (settleTimer.current) window.clearTimeout(settleTimer.current);
    };
  }, [middleStart, onScroll]);

  const scrollByDir = (dir: 1 | -1) => {
    const m = getMetrics();
    if (!m) return;
    m.el.scrollBy({ left: dir * (m.cardW + m.gap), behavior: "smooth" });
  };

  const scrollToIndex = (i: number) => {
    const m = getMetrics();
    if (!m) return;
    const target = middleStart + i;
    m.el.scrollTo({ left: target * (m.cardW + m.gap), behavior: "smooth" });
  };

  return (
    <section className="section-cream relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header row — title left, arrow controls right (desktop) */}
        <div className="flex flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-end md:px-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="eyebrow"
            >
              Featured Drips
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display mt-5 text-4xl tracking-tight text-[color:var(--foreground)] md:text-5xl lg:text-6xl"
            >
              Featured{" "}
              <span className="font-display-italic text-brand-700">
                Treatments
              </span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 h-px w-16 origin-left bg-brand-500/80"
            />
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-[color:var(--muted-strong)]"
            >
              Six of our most-booked IV infusions — formulated by clinicians,
              adjusted to your biology, delivered to your door.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden items-center gap-2 md:flex"
          >
            <button
              type="button"
              onClick={() => scrollByDir(-1)}
              aria-label="Previous treatment"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-white text-[color:var(--foreground)] transition hover:border-brand-500/60 hover:bg-brand-50 hover:text-brand-700"
            >
              <ArrowLeft className="h-4 w-4" strokeWidth={1.7} />
            </button>
            <button
              type="button"
              onClick={() => scrollByDir(1)}
              aria-label="Next treatment"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-white text-[color:var(--foreground)] transition hover:border-brand-500/60 hover:bg-brand-50 hover:text-brand-700"
            >
              <ArrowRight className="h-4 w-4" strokeWidth={1.7} />
            </button>
          </motion.div>
        </div>

        {/* Carousel */}
        <div className="relative mt-14">
          {/* Soft edge fades */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-12 bg-gradient-to-r from-[color:var(--background)] to-transparent md:block"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-12 bg-gradient-to-l from-[color:var(--background)] to-transparent md:block"
          />

          <div
            ref={scrollRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 hide-scrollbar md:gap-6 md:px-8"
            style={{ scrollPadding: "0 1.25rem" }}
          >
            {slides.map((c, i) => {
              const isClone = i < middleStart || i >= middleEnd;
              return (
                <motion.article
                  key={`${c.name}-${i}`}
                  aria-hidden={isClone}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: 0.05 + (i % COUNT) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex w-[82%] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-soft-lg sm:w-[55%] md:w-[calc((100%-3rem)/2.5)] lg:w-[calc((100%-3rem)/3)]"
                >
                  {/* Image area — subtle violet-tinted gradient backdrop */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-brand-50 via-white to-[color:var(--surface-2)]">
                    <Image
                      src={c.image}
                      alt={c.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 55vw, 82vw"
                      className="object-contain p-7 transition-transform duration-[1200ms] group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-[color:var(--border)] bg-white/95 px-3 py-1.5 text-[10px] uppercase tracking-[0.22em] text-brand-700 shadow-sm backdrop-blur-sm">
                      <span className="h-1 w-1 rounded-full bg-brand-500" />
                      {c.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col gap-5 p-7 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-2xl leading-tight tracking-tight text-[color:var(--foreground)] md:text-[28px]">
                        {c.name}
                      </h3>
                      <div className="text-right">
                        <div className="text-[9px] uppercase tracking-[0.22em] text-[color:var(--muted)]">
                          From
                        </div>
                        <div className="font-display text-2xl leading-none tracking-tight text-brand-700 md:text-3xl">
                          {c.price}
                        </div>
                      </div>
                    </div>

                    <p className="text-[13px] leading-relaxed text-[color:var(--muted-strong)] md:text-sm">
                      {c.tagline}
                    </p>

                    {/* Benefit chips */}
                    <div className="flex flex-wrap gap-1.5 border-t border-[color:var(--border)] pt-5">
                      {c.benefits.slice(0, 4).map((b) => (
                        <span
                          key={b}
                          className="inline-flex items-center rounded-full bg-[color:var(--surface-2)] px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-brand-700"
                        >
                          {b}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/services/iv-therapy"
                      tabIndex={isClone ? -1 : 0}
                      className="group/cta mt-auto inline-flex items-center gap-2 self-start rounded-full border border-[color:var(--border-strong)] bg-white px-5 py-2.5 text-[10px] uppercase tracking-[0.22em] text-[color:var(--foreground)] transition hover:-translate-y-0.5 hover:border-brand-500/60 hover:bg-brand-50 hover:text-brand-700 md:text-[11px]"
                    >
                      View Details
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-0.5" />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Progress dots */}
          <div className="mt-8 flex items-center justify-center gap-1.5 px-5 md:px-8">
            {featured.map((c, i) => (
              <button
                key={c.name}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to ${c.name}`}
                className={`h-1 rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? "w-10 bg-brand-500"
                    : "w-3 bg-[color:var(--border-strong)] hover:bg-brand-300"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center px-5 md:px-8">
          <Link
            href="/services/iv-therapy"
            className="group inline-flex items-center gap-2.5 rounded-md bg-gradient-to-b from-brand-500 to-brand-700 px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-white shadow-[0_10px_28px_-12px_color-mix(in_oklab,var(--brand-500)_60%,transparent)] transition hover:-translate-y-0.5"
          >
            View the Full IV Menu
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

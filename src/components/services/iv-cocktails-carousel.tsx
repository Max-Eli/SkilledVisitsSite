"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";
import type { Cocktail } from "@/lib/content";
import { MENU_PDF } from "@/lib/content";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { AccentText } from "@/components/ui/accent-text";

const AUTOPLAY_INTERVAL = 5000;
const RESUME_AFTER_INTERACT = 8000;

export function IVCocktailsCarousel({ cocktails }: { cocktails: Cocktail[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [pauseUntil, setPauseUntil] = useState(0);

  const update = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 8);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
    const card = el.querySelector<HTMLElement>("[data-card]");
    if (card) {
      const w = card.offsetWidth + 20;
      setActiveIndex(Math.round(el.scrollLeft / w));
    }
  }, []);

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
  }, [update, cocktails.length]);

  const pauseInteraction = useCallback(() => {
    setPauseUntil(Date.now() + RESUME_AFTER_INTERACT);
  }, []);

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const w = card ? card.offsetWidth + 20 : el.clientWidth * 0.85;
    el.scrollBy({ left: w * dir, behavior: "smooth" });
    pauseInteraction();
  };

  const scrollToIndex = (i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const w = card ? card.offsetWidth + 20 : el.clientWidth * 0.85;
    el.scrollTo({ left: w * i, behavior: "smooth" });
    pauseInteraction();
  };

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      if (isHovered) return;
      if (Date.now() < pauseUntil) return;
      if (typeof document !== "undefined" && document.hidden) return;
      const el = scrollRef.current;
      if (!el) return;
      const card = el.querySelector<HTMLElement>("[data-card]");
      const w = card ? card.offsetWidth + 20 : el.clientWidth * 0.85;
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 8;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: w, behavior: "smooth" });
      }
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [isHovered, pauseUntil]);

  return (
    <section
      className="relative py-20 md:py-24"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow>The Menu</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight md:text-5xl">
                Curated infusions,<br />
                <AccentText className="text-gradient">tailored to your goals.</AccentText>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md text-[color:var(--muted-strong)] leading-relaxed">
                Every formulation is dosed by a clinician and adjusted to your
                biology — these are starting points, not prescriptions.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <a
                href={MENU_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-2 text-sm text-brand-700 transition-colors hover:text-brand-800"
              >
                <Download className="h-4 w-4" strokeWidth={1.75} />
                <span className="border-b border-brand-300/60 group-hover:border-brand-700">
                  Download full menu (PDF)
                </span>
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="hidden items-center gap-2 md:flex">
              <button
                type="button"
                aria-label="Previous infusion"
                onClick={() => scrollByCard(-1)}
                disabled={!canPrev}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-white text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:-translate-y-0 disabled:hover:border-[color:var(--border-strong)] disabled:hover:bg-white disabled:hover:text-foreground"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
              </button>
              <button
                type="button"
                aria-label="Next infusion"
                onClick={() => scrollByCard(1)}
                disabled={!canNext}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-white text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:-translate-y-0 disabled:hover:border-[color:var(--border-strong)] disabled:hover:bg-white disabled:hover:text-foreground"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative mt-12 md:mt-14">
        {/* edge fades */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-12 bg-gradient-to-r from-white to-transparent md:block"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-12 bg-gradient-to-l from-white to-transparent md:block"
        />

        <div
          ref={scrollRef}
          onTouchStart={pauseInteraction}
          onWheel={pauseInteraction}
          className="hide-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-6 md:px-8"
        >
          {cocktails.map((c, i) => (
            <motion.article
              key={c.name}
              data-card
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-soft-lg w-[68vw] max-w-[260px] md:w-[240px] lg:w-[260px]"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-b from-[color:var(--surface-2)] via-white to-white">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  sizes="(min-width: 1024px) 260px, (min-width: 768px) 240px, 68vw"
                  className="object-contain p-4 transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-[color:var(--border)] bg-white/90 px-2.5 py-0.5 text-[9px] uppercase tracking-[0.22em] text-brand-700 backdrop-blur-sm">
                  <span className="h-1 w-1 rounded-full bg-brand-500" />
                  {c.category}
                </div>
                <div className="absolute right-3 top-3 inline-flex items-center rounded-full border border-[color:var(--border)] bg-white/95 px-2.5 py-0.5 font-display text-[12px] tracking-tight text-foreground backdrop-blur-sm">
                  {c.price}
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-3 p-5">
                <div>
                  <h3 className="font-display text-lg tracking-tight md:text-xl">
                    {c.name}
                  </h3>
                  <p className="mt-1 font-display italic text-[13px] text-brand-700">
                    {c.tagline}
                  </p>
                </div>
                <p className="text-[13px] leading-relaxed text-[color:var(--muted-strong)]">
                  {c.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                  {c.benefits.map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface-2)] px-2 py-0.5 text-[9px] uppercase tracking-[0.16em] text-brand-700"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* progress indicator dots */}
      <div className="mx-auto mt-8 flex max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
        <div className="flex items-center gap-2">
          {cocktails.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to infusion ${i + 1}`}
              onClick={() => scrollToIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-8 bg-brand-500"
                  : "w-1.5 bg-[color:var(--border-strong)] hover:bg-brand-300"
              }`}
            />
          ))}
        </div>
        <div className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
          {String(activeIndex + 1).padStart(2, "0")} / {String(cocktails.length).padStart(2, "0")}
        </div>
      </div>
    </section>
  );
}

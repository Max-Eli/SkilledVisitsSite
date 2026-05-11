"use client";

import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import type { GoogleReview } from "@/lib/content";
import { GOOGLE_BUSINESS_URL, GOOGLE_REVIEWS } from "@/lib/content";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { AccentText } from "@/components/ui/accent-text";

const AUTOPLAY_INTERVAL = 6000;
const RESUME_AFTER_INTERACT = 9000;

function GoogleGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.76h3.56c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.56-2.76c-.99.66-2.25 1.06-3.72 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.11A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.44.34-2.11V7.05H2.18A11 11 0 0 0 1 12c0 1.78.43 3.46 1.18 4.95l3.66-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.07.56 4.21 1.64l3.15-3.15A11 11 0 0 0 12 1 11 11 0 0 0 2.18 7.05l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
      />
    </svg>
  );
}

function relativeTime(iso: string): string {
  const date = new Date(iso);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days < 7) return days <= 1 ? "this week" : `${days} days ago`;
  const weeks = Math.floor(days / 7);
  if (weeks < 5) return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return months === 1 ? "1 month ago" : `${months} months ago`;
  const years = Math.floor(days / 365);
  return years === 1 ? "1 year ago" : `${years} years ago`;
}

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase() ?? "")
    .join("");
}

const AVATAR_BG = [
  "bg-brand-200 text-brand-800",
  "bg-amber-100 text-amber-800",
  "bg-emerald-100 text-emerald-800",
  "bg-rose-100 text-rose-800",
  "bg-sky-100 text-sky-800",
  "bg-stone-200 text-stone-800",
];

export function GoogleReviews() {
  const reviews: GoogleReview[] = GOOGLE_REVIEWS;
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
  }, [update, reviews.length]);

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
      if (atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
      else el.scrollBy({ left: w, behavior: "smooth" });
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [isHovered, pauseUntil]);

  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Reviews</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight md:text-6xl">
                Loved by people who<br />
                <AccentText className="text-gradient">expect more.</AccentText>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="flex items-center gap-3 rounded-full border border-[color:var(--border)] bg-white px-4 py-2.5 shadow-soft">
              <GoogleGlyph className="h-4 w-4" />
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <span className="text-[11px] uppercase tracking-[0.18em] text-foreground">
                100+ reviews
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4 md:mt-12">
          <a
            href={GOOGLE_BUSINESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[color:var(--muted-strong)] transition-colors hover:text-brand-700"
          >
            <GoogleGlyph className="h-4 w-4" />
            See all reviews on Google
            <span aria-hidden>→</span>
          </a>
          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              aria-label="Previous review"
              onClick={() => scrollByCard(-1)}
              disabled={!canPrev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-white text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:-translate-y-0 disabled:hover:border-[color:var(--border-strong)] disabled:hover:bg-white disabled:hover:text-foreground"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              aria-label="Next review"
              onClick={() => scrollByCard(1)}
              disabled={!canNext}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-white text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:-translate-y-0 disabled:hover:border-[color:var(--border-strong)] disabled:hover:bg-white disabled:hover:text-foreground"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </div>

      <div className="relative mt-8">
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
          {reviews.map((r, i) => (
            <motion.article
              key={`${r.name}-${i}`}
              data-card
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex shrink-0 snap-start flex-col gap-5 rounded-3xl border border-[color:var(--border)] bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-soft-lg w-[82vw] max-w-[360px] md:w-[360px] md:p-8"
            >
              <div
                aria-hidden
                className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent md:inset-x-8"
              />

              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    aria-hidden
                    className={`flex h-11 w-11 items-center justify-center rounded-full font-display text-base ${
                      AVATAR_BG[i % AVATAR_BG.length]
                    }`}
                  >
                    {initials(r.name)}
                  </div>
                  <div>
                    <div className="text-[15px] font-medium text-foreground">{r.name}</div>
                    <div className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
                      {relativeTime(r.date)}
                    </div>
                  </div>
                </div>
                <GoogleGlyph className="mt-1 h-4 w-4 shrink-0" />
              </div>

              <div className="flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                    strokeWidth={0}
                  />
                ))}
              </div>

              <p className="text-[15px] leading-relaxed text-foreground/90">
                {r.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
        <div className="flex items-center gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to review ${i + 1}`}
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
          {String(activeIndex + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}
        </div>
      </div>
    </section>
  );
}

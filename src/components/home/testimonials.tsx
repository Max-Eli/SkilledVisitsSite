"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Star, ArrowRight } from "lucide-react";
import { GOOGLE_REVIEWS, GOOGLE_BUSINESS_URL } from "@/lib/content";
import type { GoogleReview } from "@/lib/content";

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09 0-.73.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

function formatReviewDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

function getInitial(name: string): string {
  return name.trim().charAt(0).toUpperCase();
}

function ReviewCard({ review, ariaHidden }: { review: GoogleReview; ariaHidden?: boolean }) {
  return (
    <figure
      aria-hidden={ariaHidden}
      className="flex w-[300px] shrink-0 flex-col gap-5 rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-soft transition-shadow hover:shadow-soft-lg md:w-[360px] md:p-7"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: review.rating }).map((_, i) => (
            <Star
              key={i}
              className="h-3.5 w-3.5 fill-brand-500 text-brand-500"
              strokeWidth={0}
            />
          ))}
        </div>
        <GoogleIcon className="h-4 w-4 opacity-90" />
      </div>

      <blockquote className="flex-1 text-[13.5px] leading-relaxed text-[color:var(--foreground)] md:text-sm">
        &ldquo;{review.text}&rdquo;
      </blockquote>

      <figcaption className="flex items-center gap-3 border-t border-[color:var(--border)] pt-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface-2)] font-display text-base text-brand-700">
          {getInitial(review.name)}
        </div>
        <div className="min-w-0">
          <div className="truncate text-[12px] font-medium text-[color:var(--foreground)]">
            {review.name}
          </div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
            {formatReviewDate(review.date)}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const half = Math.ceil(GOOGLE_REVIEWS.length / 2);
  const rowA = GOOGLE_REVIEWS.slice(0, half);
  const rowB = GOOGLE_REVIEWS.slice(half);

  return (
    <section className="section-cream relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="eyebrow"
          >
            Real Reviews
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display mt-5 text-4xl tracking-tight text-[color:var(--foreground)] md:text-5xl lg:text-6xl"
          >
            What Our{" "}
            <span className="font-display-italic text-brand-700">
              Clients Say
            </span>
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
            Verified Google reviews from clients across South Florida and New
            York City.
          </motion.p>

          {/* Aggregate rating */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 inline-flex items-center gap-3 rounded-full border border-[color:var(--border)] bg-white px-5 py-2.5 shadow-soft"
          >
            <GoogleIcon className="h-4 w-4" />
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-3.5 w-3.5 fill-brand-500 text-brand-500"
                  strokeWidth={0}
                />
              ))}
            </div>
            <div className="font-display text-lg leading-none tracking-tight text-[color:var(--foreground)]">
              5.0
            </div>
            <div className="h-3 w-px bg-[color:var(--border)]" />
            <div className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted-strong)]">
              100+ Reviews
            </div>
          </motion.div>
        </div>

        {/* Dual-row marquee */}
        <div className="relative mt-14 space-y-4 md:mt-16 md:space-y-5">
          {/* Edge fades */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[color:var(--background)] to-transparent md:w-32"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[color:var(--background)] to-transparent md:w-32"
          />

          {/* Row A — scrolls left */}
          <div className="group overflow-hidden">
            <div className="marquee-track-slow flex w-max gap-4 group-hover:[animation-play-state:paused] md:gap-5">
              {[...rowA, ...rowA].map((r, i) => (
                <ReviewCard
                  key={`a-${r.name}-${i}`}
                  review={r}
                  ariaHidden={i >= rowA.length}
                />
              ))}
            </div>
          </div>

          {/* Row B — scrolls right (reverse) */}
          <div className="group overflow-hidden">
            <div className="marquee-track-slow-reverse flex w-max gap-4 group-hover:[animation-play-state:paused] md:gap-5">
              {[...rowB, ...rowB].map((r, i) => (
                <ReviewCard
                  key={`b-${r.name}-${i}`}
                  review={r}
                  ariaHidden={i >= rowB.length}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 flex justify-center px-5 md:px-8"
        >
          <Link
            href={GOOGLE_BUSINESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-md border border-[color:var(--border-strong)] bg-white px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-[color:var(--foreground)] shadow-soft transition hover:-translate-y-0.5 hover:border-brand-500/60 hover:bg-brand-50 hover:text-brand-700"
          >
            <GoogleIcon className="h-4 w-4" />
            See All Reviews on Google
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

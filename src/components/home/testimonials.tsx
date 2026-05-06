"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { AccentText } from "@/components/ui/accent-text";

const QUOTES = [
  {
    quote:
      "Felt like a private spa at home. The clinician was meticulous and actually listened. I've stopped booking clinic visits entirely.",
    name: "Alessandra R.",
    role: "Miami Beach",
  },
  {
    quote:
      "They treat your time like it matters. My morning meeting and my NAD+ drip happened at the same time. Best business decision I've made this year.",
    name: "Jonathan K.",
    role: "Manhattan",
  },
  {
    quote:
      "Their IV protocol completely changed how I prepare for travel. The clinician was thorough, the visit felt unhurried, and I felt a noticeable difference within hours.",
    name: "Priya D.",
    role: "Brooklyn",
  },
  {
    quote:
      "Post-flight recovery drip before a shoot, delivered at 6am to my hotel. Entire crew now swears by them.",
    name: "Marcos L.",
    role: "South Beach",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
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
                5-Star Rated
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
          {QUOTES.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white p-9 md:p-11 shadow-soft transition hover:shadow-soft-lg hover:-translate-y-0.5"
            >
              <div
                aria-hidden
                className="absolute inset-x-9 top-0 h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent md:inset-x-11"
              />
              <span
                aria-hidden
                className="font-display text-6xl leading-none text-brand-200 select-none"
              >
                &ldquo;
              </span>
              <blockquote className="-mt-4 font-display italic text-xl leading-snug text-foreground md:text-[1.6rem] md:leading-[1.35]">
                {q.quote}
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[color:var(--muted-strong)]">
                <span className="text-foreground">{q.name}</span>
                <span aria-hidden className="text-brand-400">—</span>
                <span className="text-[color:var(--muted)]">{q.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

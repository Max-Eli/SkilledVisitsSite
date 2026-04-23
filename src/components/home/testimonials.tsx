"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";

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
      "My botox has never looked more natural. Their injector is an artist and the entire process was so relaxed.",
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
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <Eyebrow>Reviews</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight md:text-6xl">
                Loved by people who<br />
                <span className="text-gradient italic">expect more.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
          {QUOTES.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-3xl border border-subtle bg-card-lux p-8 md:p-10"
            >
              <Quote className="h-8 w-8 text-brand-500/60" strokeWidth={1.25} />
              <blockquote className="mt-5 font-display text-xl leading-snug text-foreground/90 md:text-2xl">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between text-sm">
                <div>
                  <div className="text-foreground/90">{q.name}</div>
                  <div className="text-muted">{q.role}</div>
                </div>
                <div className="flex gap-1 text-brand-400">
                  {"★★★★★".split("").map((s, idx) => (
                    <span key={idx}>{s}</span>
                  ))}
                </div>
              </figcaption>
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-500/10 blur-3xl" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

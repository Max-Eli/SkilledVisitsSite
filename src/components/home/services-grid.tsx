"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Droplets,
  Syringe,
  TestTube,
  ArrowRight,
  Heart,
  Shield,
  Zap,
  Sparkles,
  Activity,
  Stethoscope,
  Beaker,
  ClipboardList,
  Microscope,
  HeartPulse,
  Calendar,
} from "lucide-react";

type ServiceColumn = {
  id: string;
  label: string;
  icon: typeof Droplets;
  href: string;
  title: string;
  description: string;
  image: string;
  features: { icon: typeof Heart; title: string; body: string }[];
  ctaLabel: string;
};

const COLUMNS: ServiceColumn[] = [
  {
    id: "iv-therapy",
    label: "IV Therapy",
    icon: Droplets,
    href: "/services/iv-therapy",
    title: "IV Therapy",
    description:
      "Advanced IV infusions designed to hydrate, restore, and optimize your health.",
    image: "/iv.png",
    features: [
      { icon: Droplets, title: "Hydration & Recovery", body: "Replenish and rehydrate your body." },
      { icon: Shield, title: "Immunity Support", body: "Strengthen your immune system and stay well." },
      { icon: Zap, title: "Energy & Performance", body: "Boost energy, focus, and mental clarity." },
      { icon: Sparkles, title: "Detox & Wellness", body: "Support your body's natural detox and overall wellness." },
    ],
    ctaLabel: "View IV Therapy Menu",
  },
  {
    id: "wellness-shots",
    label: "Wellness Shots",
    icon: Syringe,
    href: "/services/wellness-shots",
    title: "Wellness Shots",
    description:
      "Quick, targeted injections that support your health and wellness goals.",
    image: "/wellnessshot.png",
    features: [
      { icon: Zap, title: "B12 Energy", body: "Boost energy and support metabolism." },
      { icon: Activity, title: "Vitamin D3", body: "Support immunity, mood, and bone health." },
      { icon: Syringe, title: "MIC Shot", body: "Support fat metabolism and energy." },
      { icon: Sparkles, title: "Biotin", body: "Promote healthy hair, skin and nails." },
      { icon: Heart, title: "Glutathione", body: "Powerful antioxidant and detox support." },
      { icon: Stethoscope, title: "And More", body: "Ask about our other wellness shots." },
    ],
    ctaLabel: "View Wellness Shots",
  },
  {
    id: "blood-work",
    label: "Blood Work",
    icon: TestTube,
    href: "/services/blood-draws",
    title: "Concierge Blood Work",
    description:
      "Professional lab testing delivered to you for better health insights.",
    image: "/blooddraw.png",
    features: [
      { icon: ClipboardList, title: "Wellness Panels", body: "Comprehensive overview of your overall health." },
      { icon: Activity, title: "Athletic Performance", body: "Track, optimize and elevate your performance." },
      { icon: HeartPulse, title: "Hormone Testing", body: "Optimize hormones for energy & balance." },
      { icon: Shield, title: "Preventative Health", body: "Stay ahead with proactive health screening." },
      { icon: Microscope, title: "Vitamin Deficiency", body: "Identify deficiencies and improve performance." },
      { icon: Beaker, title: "Custom Panels", body: "Personalized testing based on your goals." },
    ],
    ctaLabel: "View Blood Work Options",
  },
];

export function ServicesGrid() {
  return (
    <section className="section-cream relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl tracking-tight text-[color:var(--foreground)] md:text-5xl"
          >
            Explore <span className="font-display-italic text-brand-700">Our Services</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-3 h-px w-16 origin-center bg-brand-500/80"
          />
        </div>

        {/* Tab-style column headers — labels for the cards below */}
        <div className="mt-12 grid grid-cols-3 gap-4 md:gap-5">
          {COLUMNS.map((col, i) => (
            <motion.div
              key={col.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col items-center gap-2 pb-4 text-center"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-500/40 bg-white text-brand-700">
                <col.icon className="h-4 w-4" strokeWidth={1.6} />
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-[color:var(--foreground)] md:text-[11px]">
                {col.label}
              </span>
              {i === 0 && (
                <span className="absolute inset-x-8 -bottom-px h-0.5 rounded-full bg-brand-500" />
              )}
            </motion.div>
          ))}
        </div>

        <div className="relative">
          <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-[color:var(--border)]" />
          <div className="grid grid-cols-1 gap-5 pt-8 md:grid-cols-3 md:gap-5">
            {COLUMNS.map((col, i) => (
              <motion.article
                key={col.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col overflow-hidden rounded-[20px] border border-[color:var(--border)] bg-[color:var(--surface)]"
              >
                {/* Image area + headline + description (all dark inside the card) */}
                <div className="flex flex-col gap-5 p-7 md:flex-row md:gap-7">
                  <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl bg-[color:var(--background)] md:aspect-square md:w-[42%]">
                    <Image
                      src={col.image}
                      alt={col.title}
                      fill
                      sizes="(min-width: 768px) 18vw, 60vw"
                      className="object-contain p-3"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-display text-[26px] leading-tight tracking-tight text-brand-700 md:text-[28px]">
                      {col.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-relaxed text-[color:var(--foreground-muted)] md:text-sm">
                      {col.description}
                    </p>
                  </div>
                </div>

                {/* Feature grid — inside the dark card, in 2 columns */}
                <div className="border-t border-[color:var(--border)] px-7 pb-7 pt-6">
                  <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                    {col.features.map(({ icon: Icon, title, body }) => (
                      <div key={title} className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand-400/40 bg-brand-500/10 text-brand-700">
                          <Icon className="h-3 w-3" strokeWidth={1.6} />
                        </span>
                        <div className="leading-tight">
                          <div className="text-[11px] font-medium text-[color:var(--foreground)]">
                            {title}
                          </div>
                          <div className="mt-1 text-[11px] leading-relaxed text-[color:var(--muted)]">
                            {body}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA inside the card footer */}
                <div className="mt-auto border-t border-[color:var(--border)] p-5">
                  <Link
                    href={col.href}
                    className="group flex items-center justify-center gap-2 rounded-lg border border-brand-400/40 bg-brand-500/5 px-5 py-3 text-[10px] uppercase tracking-[0.22em] text-brand-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/70 hover:bg-brand-500/15 hover:text-brand-700 md:text-[11px]"
                  >
                    {col.ctaLabel}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Bottom recommendation banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center justify-between gap-5 rounded-[20px] border border-[color:var(--border)] bg-[color:var(--surface)] p-6 md:flex-row md:gap-8 md:p-7"
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-400/40 bg-brand-500/10 text-brand-700">
              <Calendar className="h-4 w-4" strokeWidth={1.6} />
            </span>
            <div>
              <div className="font-display text-lg leading-tight text-[color:var(--foreground)] md:text-xl">
                Not sure which drip is right for you?
              </div>
              <div className="mt-1 text-[13px] text-[color:var(--muted)]">
                Our medical team can help recommend the best option for your goals.
              </div>
            </div>
          </div>
          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2.5 rounded-lg bg-gradient-to-b from-brand-500 to-brand-700 px-6 py-3.5 text-[10px] uppercase tracking-[0.22em] text-white shadow-[0_10px_28px_-12px_color-mix(in_oklab,var(--brand-500)_60%,transparent)] transition hover:-translate-y-0.5 md:text-[11px]"
          >
            Get a Personalized Recommendation
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

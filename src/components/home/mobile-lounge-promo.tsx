"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { BRAND } from "@/lib/content";
import {
  ArrowRight,
  Thermometer,
  ShieldCheck,
  Stethoscope,
  MapPin,
  Truck,
} from "lucide-react";

const FEATURES = [
  {
    icon: Thermometer,
    title: "Climate Controlled",
    body: "Comfortable in any weather, any time of year.",
  },
  {
    icon: ShieldCheck,
    title: "Private Treatment",
    body: "A calm, discreet space designed entirely for you.",
  },
  {
    icon: Stethoscope,
    title: "Clinical-Grade Setup",
    body: "The same medical standard you'd get on a home visit.",
  },
  {
    icon: MapPin,
    title: "Parks Where You Need",
    body: "Home, hotel, office, marina, event — wherever you are.",
  },
];

export function MobileLoungePromo() {
  return (
    <section className="section-dark relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 brand-glow opacity-50"
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
            Mobile IV Lounge
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display mt-5 text-4xl tracking-tight text-[color:var(--foreground)] md:text-5xl lg:text-6xl"
          >
            Wellness.{" "}
            <span className="font-display-italic text-brand-700">Elevated.</span>
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
            className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-[color:var(--foreground-muted)]"
          >
            A private wellness suite on wheels — climate-controlled,
            clinical-grade, and parked wherever life takes you.
          </motion.p>
        </div>

        {/* Image + features split */}
        <div className="mt-16 grid grid-cols-1 items-center gap-10 md:mt-20 md:grid-cols-12 md:gap-12 lg:gap-16">
          {/* Featured van image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7"
          >
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-soft-lg">
              <Image
                src="/van-side-2.jpg"
                alt="Skilled Visits mobile IV lounge"
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-tr from-[color:var(--background)]/40 via-transparent to-transparent"
              />
              {/* Floating tag */}
              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.22em] text-white backdrop-blur-md">
                <Truck className="h-3 w-3 text-brand-300" strokeWidth={1.7} />
                Exclusive Suite
              </div>
              {/* Edge corner accent */}
              <div
                aria-hidden
                className="pointer-events-none absolute bottom-5 right-5 hidden h-12 w-12 rounded-full border border-brand-400/40 bg-brand-500/15 backdrop-blur-md md:flex md:items-center md:justify-center"
              >
                <ArrowRight className="h-4 w-4 text-brand-300" strokeWidth={1.7} />
              </div>
            </div>
          </motion.div>

          {/* Feature list */}
          <div className="md:col-span-5">
            <ul className="space-y-5">
              {FEATURES.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.li
                    key={f.title}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, delay: 0.05 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="flex items-start gap-4 border-b border-[color:var(--border)] pb-5 last:border-b-0 last:pb-0"
                  >
                    <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-400/40 bg-brand-500/10 text-brand-700">
                      <Icon className="h-4 w-4" strokeWidth={1.6} />
                    </span>
                    <div>
                      <div className="text-[12px] font-medium uppercase tracking-[0.18em] text-[color:var(--foreground)]">
                        {f.title}
                      </div>
                      <div className="mt-2 text-[13px] leading-relaxed text-[color:var(--foreground-muted)] md:text-sm">
                        {f.body}
                      </div>
                    </div>
                  </motion.li>
                );
              })}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/mobile-iv-lounge"
                className="group inline-flex items-center gap-2.5 rounded-md bg-gradient-to-b from-brand-500 to-brand-700 px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] text-white shadow-[0_10px_28px_-12px_color-mix(in_oklab,var(--brand-500)_60%,transparent)] transition hover:-translate-y-0.5"
              >
                Explore the Lounge
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href={BRAND.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-md border border-[color:var(--border-strong)] bg-[color:var(--surface)]/30 px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] text-[color:var(--foreground)] backdrop-blur-sm transition hover:border-brand-500/60 hover:bg-[color:var(--surface)]/60"
              >
                Book the Lounge
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

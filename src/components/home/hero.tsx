"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ShieldCheck,
  Clock,
  Droplet,
  Stethoscope,
  Sparkles,
  Droplets,
  Syringe,
  TestTube,
  FlaskConical,
} from "lucide-react";

const TRUST = [
  { icon: ShieldCheck, label: "Licensed Nurses" },
  { icon: Clock, label: "Same-Day Appointments" },
  { icon: Droplet, label: "Medical-Grade Ingredients" },
  { icon: Stethoscope, label: "Physician Oversight" },
  { icon: Sparkles, label: "Concierge Service" },
];

const QUICK_LINKS = [
  { icon: Stethoscope, label: "Consultation", href: "/services/virtual-consultation" },
  { icon: Droplets, label: "IV Therapy", href: "/services/iv-therapy" },
  { icon: Syringe, label: "Wellness Shots", href: "/services/wellness-shots" },
  { icon: TestTube, label: "Rapid Testing", href: "/services/rapid-tests" },
  { icon: FlaskConical, label: "Blood Draws", href: "/services/blood-draws" },
];

export function Hero() {
  return (
    <section className="section-dark relative isolate -mt-20 flex min-h-[78svh] flex-col overflow-hidden md:-mt-24 md:block md:min-h-0">
      {/* Full-bleed editorial hero photo — NYC penthouse, IV at golden hour */}
      <div aria-hidden className="absolute inset-0 -z-20">
        <Image
          src="/siteimages/temphero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[88%_center] md:object-center"
        />
      </div>

      {/* Mobile overlay — dark at top for headline, photo visible mid, soft fade into trust strip */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[color:var(--background)]/92 via-[color:var(--background)]/35 to-[color:var(--background)]/90 md:hidden"
      />
      {/* Desktop overlay — left-side dark fade, photo clear on the right */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-[color:var(--background)]/80 via-[color:var(--background)]/30 to-transparent md:block"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 hidden bg-gradient-to-b from-[color:var(--background)]/30 via-transparent to-[color:var(--background)]/85 md:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 brand-glow opacity-40"
      />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-start px-5 pt-24 pb-12 md:block md:pt-44 md:pb-28 md:px-8 lg:pt-52 lg:pb-36">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[10px] uppercase tracking-[0.28em] text-brand-700 sm:text-[11px] sm:tracking-[0.32em]"
          >
            Wellness · Whenever · Wherever
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display mt-5 text-[40px] leading-[1] tracking-[-0.02em] text-[color:var(--foreground)] sm:mt-7 sm:text-[56px] sm:leading-[0.98] md:text-[80px] lg:text-[92px]"
          >
            <span className="block">Wellness Treatments,</span>
            <span className="block">
              <span className="relative inline-block font-display-italic text-brand-700">
                Delivered!
                <svg
                  aria-hidden
                  className="pointer-events-none absolute -bottom-1 left-0 h-4 w-full sm:-bottom-1.5 sm:h-5 md:-bottom-2 md:h-7 lg:-bottom-3 lg:h-8"
                  viewBox="0 0 300 18"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <defs>
                    <linearGradient
                      id="hero-underline-gradient"
                      x1="0"
                      y1="0"
                      x2="1"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="#d4b3f5" stopOpacity="0.35" />
                      <stop offset="50%" stopColor="#9e50e5" stopOpacity="1" />
                      <stop offset="100%" stopColor="#d4b3f5" stopOpacity="0.35" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M 4 10 C 60 2, 140 14, 200 8 S 280 4, 296 9"
                    stroke="url(#hero-underline-gradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      pathLength: { duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] },
                      opacity: { duration: 0.4, delay: 0.7 },
                    }}
                  />
                </svg>
              </span>
            </span>
          </motion.h1>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-auto grid grid-cols-2 gap-2 pt-8 md:mt-10 md:flex md:flex-wrap md:items-center md:gap-2.5 md:pt-0"
        >
          {QUICK_LINKS.map(({ icon: Icon, label, href }, i) => (
            <Link
              key={label}
              href={href}
              className={`group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.14em] text-white/90 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-400/60 hover:bg-white/10 hover:text-white md:px-4 md:py-2.5 md:text-[11px] md:tracking-[0.18em] ${
                i === QUICK_LINKS.length - 1 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <Icon
                className="h-3 w-3 text-brand-300 transition-colors group-hover:text-brand-200 md:h-3.5 md:w-3.5"
                strokeWidth={1.7}
              />
              {label}
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Trust badges — inline scrolling pills on mobile, divided grid on desktop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="relative border-y border-[color:var(--border)] bg-[color:var(--background)]/85 backdrop-blur-sm"
      >
        {/* Mobile: auto-scrolling marquee of pills */}
        <div className="group relative overflow-hidden py-4 md:hidden">
          <div className="marquee-track flex w-max items-center gap-2 pl-2 group-hover:[animation-play-state:paused]">
            {[...TRUST, ...TRUST].map(({ icon: Icon, label }, i) => (
              <div
                key={`${label}-${i}`}
                aria-hidden={i >= TRUST.length}
                className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-[10px] uppercase tracking-[0.16em] text-white/90 backdrop-blur-md"
              >
                <Icon className="h-3.5 w-3.5 shrink-0 text-brand-300" strokeWidth={1.6} />
                {label}
              </div>
            ))}
          </div>
          {/* Soft edge fades so chips slide in/out gracefully */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[color:var(--background)] to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[color:var(--background)] to-transparent"
          />
        </div>
        {/* Desktop: divided 5-column grid (unchanged) */}
        <div className="mx-auto hidden max-w-7xl md:grid md:grid-cols-5 md:divide-x md:divide-[color:var(--border)]">
          {TRUST.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-3 px-5 py-7"
            >
              <Icon className="h-4 w-4 shrink-0 text-brand-700" strokeWidth={1.6} />
              <span className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--foreground)]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

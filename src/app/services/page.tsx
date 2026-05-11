import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Droplet,
  Truck,
  Stethoscope,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import { BRAND } from "@/lib/content";
import { ServicesTabs } from "@/components/services/services-tabs";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Complete wellness, delivered to you. IV therapy, wellness shots, rapid testing, and concierge blood work from licensed clinicians across South Florida and New York.",
};

const TRUST = [
  { icon: ShieldCheck, label: "Licensed Nurses" },
  { icon: Clock, label: "Same-Day Appointments" },
  { icon: Droplet, label: "Medical-Grade Ingredients" },
  { icon: Truck, label: "We Come To You" },
  { icon: Stethoscope, label: "Physician Oversight" },
];

const TRUST_PILLS = [
  { icon: Clock, label: "24/7 Available" },
  { icon: ShieldCheck, label: "Licensed Clinicians" },
  { icon: MapPin, label: "We Come To You" },
];

const CONTACTS = [
  {
    icon: Phone,
    label: "Florida",
    value: BRAND.phoneFL,
    href: `tel:${BRAND.phoneFL.replace(/\D/g, "")}`,
  },
  {
    icon: Phone,
    label: "New York",
    value: BRAND.phoneNY,
    href: `tel:${BRAND.phoneNY.replace(/\D/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email Us",
    value: BRAND.email,
    href: `mailto:${BRAND.email}`,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark relative isolate -mt-20 overflow-hidden md:-mt-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 brand-glow opacity-60"
        />

        <div className="mx-auto max-w-3xl px-5 pb-16 pt-32 text-center md:px-8 md:pt-44 md:pb-24">
          <div className="text-[11px] uppercase tracking-[0.32em] text-brand-700">
            Our Services
          </div>
          <h1 className="font-display mt-6 text-[44px] leading-[1] tracking-tight text-[color:var(--foreground)] sm:text-[58px] md:text-[78px] lg:text-[88px]">
            <span className="block">Complete Wellness.</span>
            <span className="block font-display-italic text-brand-700">
              Delivered to You.
            </span>
          </h1>
          <div className="mx-auto mt-5 h-px w-16 bg-brand-500/80" />
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-[color:var(--foreground-muted)] md:text-base">
            From IV therapy and wellness shots to rapid testing and concierge
            blood work, our medical services are designed to help you feel your
            best — wherever you are.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#menus"
              className="group inline-flex items-center gap-2.5 rounded-md bg-gradient-to-b from-brand-500 to-brand-700 px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] text-white shadow-[0_10px_28px_-12px_color-mix(in_oklab,var(--brand-500)_60%,transparent)] transition hover:-translate-y-0.5"
            >
              Browse the Menus
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-md border border-[color:var(--border-strong)] bg-[color:var(--surface)]/30 px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] text-[color:var(--foreground)] backdrop-blur-sm transition hover:border-brand-500/60 hover:bg-[color:var(--surface)]/60"
            >
              Talk to Concierge
            </Link>
          </div>
        </div>

        {/* Trust strip */}
        <div className="border-y border-[color:var(--border)]">
          {/* Mobile: marquee */}
          <div className="group/strip relative overflow-hidden py-4 md:hidden">
            <div className="marquee-track flex w-max items-center gap-2 pl-2 group-hover/strip:[animation-play-state:paused]">
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
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[color:var(--background)] to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[color:var(--background)] to-transparent"
            />
          </div>
          {/* Desktop: divided grid */}
          <div className="mx-auto hidden max-w-7xl md:grid md:grid-cols-5 md:divide-x md:divide-[color:var(--border)]">
            {TRUST.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center justify-center gap-3 px-5 py-7">
                <Icon className="h-4 w-4 shrink-0 text-brand-700" strokeWidth={1.6} />
                <span className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--foreground)]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed services menu */}
      <div id="menus" className="scroll-mt-24">
        <ServicesTabs />
      </div>

      {/* Final CTA — dark closer */}
      <section className="section-dark relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-20">
          <Image
            src="/van-side-1.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center opacity-25"
          />
        </div>
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-b from-[color:var(--background)] via-[color:var(--background)]/85 to-[color:var(--background)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 brand-glow opacity-50"
        />

        <div className="mx-auto max-w-3xl px-5 py-24 text-center md:px-8 md:py-32">
          <div className="eyebrow">Need a Recommendation?</div>
          <h2 className="font-display mt-5 text-5xl leading-[1] tracking-tight text-[color:var(--foreground)] md:text-6xl lg:text-7xl">
            Not sure which service{" "}
            <span className="font-display-italic text-brand-700">
              is right for you?
            </span>
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-brand-500/80" />
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-[color:var(--foreground-muted)]">
            Our clinical team can design a protocol around your goals. Tell us
            what you&apos;re working on — recovery, performance, longevity — and
            we&apos;ll handle the rest.
          </p>

          {/* Trust pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {TRUST_PILLS.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-[10px] uppercase tracking-[0.18em] text-[color:var(--foreground)] backdrop-blur-md"
              >
                <Icon className="h-3.5 w-3.5 text-brand-700" strokeWidth={1.7} />
                {label}
              </span>
            ))}
          </div>

          {/* Primary CTAs */}
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2.5 rounded-md bg-gradient-to-b from-brand-500 to-brand-700 px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-white shadow-[0_10px_28px_-12px_color-mix(in_oklab,var(--brand-500)_60%,transparent)] transition hover:-translate-y-0.5"
            >
              Get a Personalized Recommendation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/memberships"
              className="inline-flex items-center justify-center gap-2.5 rounded-md border border-[color:var(--border-strong)] bg-[color:var(--surface)]/30 px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-[color:var(--foreground)] backdrop-blur-sm transition hover:border-brand-500/60 hover:bg-[color:var(--surface)]/60"
            >
              Explore Memberships
            </Link>
          </div>

          {/* "Or reach us directly" divider */}
          <div className="mx-auto mt-14 flex max-w-md items-center gap-4">
            <div className="h-px flex-1 bg-[color:var(--border)]" />
            <span className="text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted)]">
              Or Reach Us Directly
            </span>
            <div className="h-px flex-1 bg-[color:var(--border)]" />
          </div>

          {/* Contact cards */}
          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {CONTACTS.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-left backdrop-blur-md transition hover:-translate-y-0.5 hover:border-brand-400/50 hover:bg-white/[0.08]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-400/40 bg-brand-500/15 text-brand-700">
                  <Icon className="h-4 w-4" strokeWidth={1.7} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-brand-700">
                    {label}
                  </div>
                  <div className="truncate text-sm text-[color:var(--foreground)]">
                    {value}
                  </div>
                </div>
                <ArrowRight
                  className="h-3.5 w-3.5 shrink-0 text-[color:var(--muted)] transition-all group-hover:translate-x-0.5 group-hover:text-brand-700"
                  strokeWidth={1.7}
                />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

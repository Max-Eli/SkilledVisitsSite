import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Check,
  Crown,
  HandCoins,
  HeartHandshake,
  Sparkles,
  Truck,
  Clock,
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { BRAND } from "@/lib/content";

export const metadata: Metadata = {
  title: "Memberships",
  description:
    "Skilled Visits memberships — concierge wellness, simplified. Priority access, member pricing, and care included every month.",
};

const BENEFITS = [
  {
    icon: Crown,
    title: "Priority Access",
    body: "Same-day concierge scheduling and first pick of clinician availability — every time.",
  },
  {
    icon: HandCoins,
    title: "Member Pricing",
    body: "Preferential member rates on every IV, shot, and lab — plus exclusive add-ons.",
  },
  {
    icon: Sparkles,
    title: "Personalized Protocols",
    body: "Custom wellness protocols tailored to your goals, biology, and lifestyle.",
  },
  {
    icon: HeartHandshake,
    title: "Concierge Care",
    body: "A dedicated clinical concierge for protocol design, follow-ups, and labs.",
  },
  {
    icon: Truck,
    title: "Travel Coverage",
    body: "Sessions at home, office, hotel, or the Mobile IV Lounge — always included.",
  },
];

type Tier = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  ctaLabel: string;
  highlight?: boolean;
};

const TIERS: Tier[] = [
  {
    name: "Essential",
    price: "$179",
    cadence: "/ month",
    description: "Routine wellness, made effortless.",
    features: [
      "One concierge IV therapy session monthly",
      "10% off all add-on services",
      "Priority concierge scheduling",
      "One signature wellness shot included",
      "Quarterly clinician wellness check-in",
    ],
    ctaLabel: "Choose Essential",
  },
  {
    name: "Premier",
    price: "$349",
    cadence: "/ month",
    description: "For the serious wellness client. Real protocols, real results.",
    features: [
      "Two concierge IV therapy sessions monthly",
      "15% off all add-on services",
      "One signature wellness shot monthly",
      "Quarterly bloodwork panel",
      "Personalized protocol design",
      "Priority concierge booking",
    ],
    ctaLabel: "Choose Premier",
    highlight: true,
  },
  {
    name: "Elite",
    price: "$599",
    cadence: "/ month",
    description: "Exclusive access. Executive-level care.",
    features: [
      "Up to four concierge IV therapy sessions monthly (or two premium)",
      "20% off all add-on services",
      "Quarterly NAD+ infusion included",
      "Two signature wellness shots monthly",
      "Bi-annual executive blood panel",
      "Exclusive access to the Skilled Visits Mobile IV Lounge",
      "Dedicated concierge line",
      "Priority after-hours dispatch",
      "Quarterly guest pass for a spouse or friend",
    ],
    ctaLabel: "Choose Elite",
  },
];

const ALL_PLANS_INCLUDE = [
  "Licensed clinician on every session",
  "Same-day concierge availability",
  "Cancel or pause anytime",
  "No setup fees, ever",
];

const ENHANCEMENTS = [
  "Add-on NAD+ infusions at member rate",
  "Hormone optimization panels",
  "Mobile lounge buyouts for groups",
  "Aesthetic & beauty add-ons",
  "Custom IV formulations",
  "Annual executive physical",
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

const FAQS = [
  {
    q: "How do I redeem my membership each month?",
    a: "Book through your member portal or call our concierge line. Sessions, add-ons, and member rates are tracked automatically.",
  },
  {
    q: "What if I can't use all my sessions in a month?",
    a: "Unused sessions roll forward up to three months, and your concierge will help plan your cadence around travel and your schedule.",
  },
  {
    q: "Can I share my membership with family?",
    a: "Each plan covers one member. Elite includes a quarterly guest pass for a spouse or friend, and household add-ons are available on every plan — ask your concierge.",
  },
  {
    q: "What's the cancellation policy?",
    a: "Month-to-month. Cancel or pause anytime. No setup fee, no penalty.",
  },
];

export default function MembershipsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark relative isolate -mt-20 overflow-hidden md:-mt-24">
        <div aria-hidden className="absolute inset-0 -z-10 brand-glow" />

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 pb-16 pt-32 md:grid-cols-12 md:gap-12 md:px-8 md:pt-44">
          <div className="md:col-span-7">
            <div className="text-[10px] uppercase tracking-[0.28em] text-brand-700 sm:text-[11px] sm:tracking-[0.32em]">
              The Skilled Visits Membership
            </div>
            <h1 className="font-display mt-5 text-[40px] leading-[1] tracking-tight text-[color:var(--foreground)] sm:mt-7 sm:text-[56px] md:text-[72px] lg:text-[84px]">
              <span className="block">Wellness. Simplified.</span>
              <span className="block font-display-italic text-brand-700">
                Always Included.
              </span>
            </h1>
            <p className="mt-5 max-w-md text-[14px] leading-relaxed text-[color:var(--foreground-muted)] sm:mt-7 sm:text-[15px] md:text-base">
              Concierge-level access, personalized protocols, and priority care
              — engineered for clients who treat their health as a long-term
              investment.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="#plans"
                className="group inline-flex items-center justify-center gap-2.5 rounded-md bg-gradient-to-b from-brand-500 to-brand-700 px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-white shadow-[0_10px_28px_-12px_color-mix(in_oklab,var(--brand-500)_60%,transparent)] transition hover:-translate-y-0.5"
              >
                View Plans
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 rounded-md border border-[color:var(--border-strong)] bg-[color:var(--surface)]/30 px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-[color:var(--foreground)] backdrop-blur-sm transition hover:border-brand-500/60 hover:bg-[color:var(--surface)]/60"
              >
                Talk to Concierge
              </Link>
            </div>
          </div>

          <div className="relative md:col-span-5">
            <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-soft-lg">
              <Image
                src="/iv.png"
                alt="Skilled Visits IV"
                fill
                sizes="(min-width: 768px) 35vw, 80vw"
                className="object-contain p-10"
              />
            </div>
          </div>
        </div>

        {/* Benefits strip — marquee on mobile, divided grid on desktop */}
        <div className="relative border-y border-[color:var(--border)] bg-[color:var(--background)]/85 backdrop-blur-sm">
          <div className="group/strip relative overflow-hidden py-4 md:hidden">
            <div className="marquee-track flex w-max items-center gap-2 pl-2 group-hover/strip:[animation-play-state:paused]">
              {[...BENEFITS, ...BENEFITS].map(({ icon: Icon, title }, i) => (
                <div
                  key={`${title}-${i}`}
                  aria-hidden={i >= BENEFITS.length}
                  className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-[10px] uppercase tracking-[0.16em] text-white/90 backdrop-blur-md"
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 text-brand-300" strokeWidth={1.6} />
                  {title}
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
          <div className="mx-auto hidden max-w-7xl md:grid md:grid-cols-5 md:divide-x md:divide-[color:var(--border)]">
            {BENEFITS.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex flex-col gap-3 px-5 py-7 md:px-6">
                <Icon className="h-5 w-5 text-brand-700" strokeWidth={1.6} />
                <div>
                  <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--foreground)]">
                    {title}
                  </div>
                  <div className="mt-2 text-[12px] leading-relaxed text-[color:var(--muted-strong)]">
                    {body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="section-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow">Choose Your Cadence</div>
            <h2 className="font-display mt-5 text-4xl tracking-tight text-[color:var(--foreground)] md:text-5xl lg:text-6xl">
              Membership{" "}
              <span className="font-display-italic text-brand-700">Plans</span>
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-brand-500/80" />
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-[color:var(--muted-strong)]">
              Three plans, one standard of care. Upgrade, downgrade, or pause
              at any time.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-soft-lg md:p-9 ${
                  tier.highlight
                    ? "border-brand-500/60 ring-1 ring-brand-500/30"
                    : "border-[color:var(--border)]"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-b from-brand-500 to-brand-700 px-4 py-1 text-[10px] uppercase tracking-[0.22em] text-white shadow-[0_8px_20px_-8px_color-mix(in_oklab,var(--brand-500)_60%,transparent)]">
                    Most Popular
                  </div>
                )}

                <div className="text-[11px] uppercase tracking-[0.24em] text-brand-700">
                  {tier.name}
                </div>
                <div className="mt-3 flex items-end gap-2">
                  <div className="font-display text-5xl tracking-tight text-[color:var(--foreground)] md:text-6xl">
                    {tier.price}
                  </div>
                  <div className="pb-2 text-[12px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
                    {tier.cadence}
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-strong)]">
                  {tier.description}
                </p>

                <ul className="mt-7 space-y-3 border-t border-[color:var(--border)] pt-7">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand-500/30 bg-brand-50 text-brand-700">
                        <Check className="h-3 w-3" strokeWidth={2.5} />
                      </span>
                      <span className="text-[color:var(--foreground)]">{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={`group mt-8 inline-flex items-center justify-center gap-2 rounded-md px-5 py-3.5 text-[11px] uppercase tracking-[0.22em] transition hover:-translate-y-0.5 ${
                    tier.highlight
                      ? "bg-gradient-to-b from-brand-500 to-brand-700 text-white shadow-[0_10px_28px_-12px_color-mix(in_oklab,var(--brand-500)_60%,transparent)]"
                      : "border border-brand-500/40 bg-white text-brand-700 hover:bg-brand-50"
                  }`}
                >
                  {tier.ctaLabel}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            ))}
          </div>

          {/* All plans include strip */}
          <div className="mt-10 rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-soft md:p-7">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8">
              <div className="text-[11px] uppercase tracking-[0.22em] text-brand-700 shrink-0">
                Every Plan Includes
              </div>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {ALL_PLANS_INCLUDE.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[13px] text-[color:var(--foreground)]">
                    <Check className="h-3.5 w-3.5 shrink-0 text-brand-700" strokeWidth={2.5} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhancements + FAQ */}
      <section className="section-cream pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 md:grid-cols-12 md:gap-16 md:px-8">
          {/* Enhancements */}
          <div className="md:col-span-6">
            <div className="eyebrow">Enhance Your Membership</div>
            <h3 className="font-display mt-5 text-3xl tracking-tight text-[color:var(--foreground)] md:text-4xl">
              Add-on options at{" "}
              <span className="font-display-italic text-brand-700">
                member rate.
              </span>
            </h3>
            <div className="mt-4 h-px w-16 bg-brand-500/80" />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[color:var(--muted-strong)]">
              Layer additional services on top of any plan, billed at your
              preferential member rate.
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {ENHANCEMENTS.map((e) => (
                <li
                  key={e}
                  className="group flex items-start gap-3 rounded-xl border border-[color:var(--border)] bg-white p-4 text-sm leading-relaxed text-[color:var(--foreground)] shadow-soft transition hover:-translate-y-0.5 hover:border-brand-500/30 hover:shadow-soft-lg"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-brand-500/30 bg-brand-50 text-brand-700">
                    <Check className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  {e}
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <div className="md:col-span-6">
            <div className="eyebrow">Common Questions</div>
            <h3 className="font-display mt-5 text-3xl tracking-tight text-[color:var(--foreground)] md:text-4xl">
              Frequently asked{" "}
              <span className="font-display-italic text-brand-700">
                questions.
              </span>
            </h3>
            <div className="mt-4 h-px w-16 bg-brand-500/80" />
            <div className="mt-8 space-y-3">
              {FAQS.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-[color:var(--border)] bg-white p-5 shadow-soft transition open:shadow-soft-lg md:p-6"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-[14px] font-medium text-[color:var(--foreground)] md:text-[15px]">
                    <span>{f.q}</span>
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-brand-500/30 bg-brand-50 text-brand-700 transition group-open:rotate-45">
                      <span className="text-base leading-none">+</span>
                    </span>
                  </summary>
                  <p className="mt-3 text-[13px] leading-relaxed text-[color:var(--muted-strong)] md:text-sm">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA — dark closer */}
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
          <div className="eyebrow">Begin</div>
          <h2 className="font-display mt-5 text-5xl leading-[1] tracking-tight text-[color:var(--foreground)] md:text-6xl lg:text-7xl">
            Invest in your health.{" "}
            <span className="font-display-italic text-brand-700">
              Join today.
            </span>
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-brand-500/80" />
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-[color:var(--foreground-muted)]">
            Membership opens immediately. No setup fee. Cancel any time.
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

          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2.5 rounded-md bg-gradient-to-b from-brand-500 to-brand-700 px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-white shadow-[0_10px_28px_-12px_color-mix(in_oklab,var(--brand-500)_60%,transparent)] transition hover:-translate-y-0.5"
            >
              Become a Member
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#plans"
              className="inline-flex items-center justify-center gap-2.5 rounded-md border border-[color:var(--border-strong)] bg-[color:var(--surface)]/30 px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-[color:var(--foreground)] backdrop-blur-sm transition hover:border-brand-500/60 hover:bg-[color:var(--surface)]/60"
            >
              Compare Plans
            </Link>
          </div>

          <div className="mx-auto mt-14 flex max-w-md items-center gap-4">
            <div className="h-px flex-1 bg-[color:var(--border)]" />
            <span className="text-[10px] uppercase tracking-[0.24em] text-[color:var(--muted)]">
              Or Reach Us Directly
            </span>
            <div className="h-px flex-1 bg-[color:var(--border)]" />
          </div>

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

import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Stethoscope,
  HeartPulse,
  Award,
  Sparkles,
  ScrollText,
  Lightbulb,
  Activity,
  Shield,
  Hourglass,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { BRAND } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Skilled Visits is South Florida's premier mobile wellness provider — delivering concierge IV therapy, wellness shots, and blood work to where you are.",
};

const TRUST = [
  { icon: ShieldCheck, label: "Licensed Nurses" },
  { icon: Clock, label: "7 Days a Week" },
  { icon: Award, label: "Experienced MDs" },
  { icon: Stethoscope, label: "Physician Oversight" },
];

const VALUES = [
  {
    icon: HeartPulse,
    title: "Patient First",
    body: "Care delivered around you — your schedule, your goals, your home.",
  },
  {
    icon: Sparkles,
    title: "Excellence",
    body: "The highest standard of care in everything we do.",
  },
  {
    icon: ScrollText,
    title: "Integrity",
    body: "Honest, transparent, professional care you can count on.",
  },
  {
    icon: Clock,
    title: "Convenience",
    body: "We make wellness simple by coming directly to you.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    body: "We continually evolve to bring you the best in wellness.",
  },
];

const FOCUS = [
  {
    icon: Activity,
    title: "Performance",
    body: "Optimize your body and mind — recovery, energy, focus.",
  },
  {
    icon: Shield,
    title: "Prevention",
    body: "Stay ahead of your health with proactive screening.",
  },
  {
    icon: Hourglass,
    title: "Longevity",
    body: "Evidence-backed protocols for a longer, healthier life.",
  },
];

const STATS = [
  { value: "10K+", label: "Happy Clients" },
  { value: "25K+", label: "Treatments Delivered" },
  { value: "5.0★", label: "Google Rating" },
  { value: "100%", label: "Licensed & Insured" },
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

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark relative isolate -mt-20 overflow-hidden md:-mt-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 brand-glow opacity-60" />

        <div className="mx-auto max-w-3xl px-5 pb-16 pt-32 text-center md:px-8 md:pt-44 md:pb-24">
          <div className="text-[11px] uppercase tracking-[0.32em] text-brand-700">
            About Skilled Visits
          </div>
          <h1 className="font-display mt-6 text-[44px] leading-[1] tracking-tight text-[color:var(--foreground)] sm:text-[58px] md:text-[72px] lg:text-[80px]">
            <span className="block">Elevated Wellness.</span>
            <span className="block font-display-italic text-brand-700">
              Delivered to You.
            </span>
          </h1>
          <div className="mx-auto mt-5 h-px w-16 bg-brand-500/80" />
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-[color:var(--foreground-muted)] md:text-base">
            Skilled Visits is South Florida&apos;s premier mobile wellness
            provider, delivering concierge IV therapy, wellness shots, and
            blood work directly to your location — home, hotel, office, or
            wherever life takes you.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-md bg-gradient-to-b from-brand-500 to-brand-700 px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] text-white shadow-[0_10px_28px_-12px_color-mix(in_oklab,var(--brand-500)_60%,transparent)] transition hover:-translate-y-0.5"
            >
              Book Your Visit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2.5 rounded-md border border-[color:var(--border-strong)] bg-[color:var(--surface)]/30 px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] text-[color:var(--foreground)] backdrop-blur-sm transition hover:border-brand-500/60 hover:bg-[color:var(--surface)]/60"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Trust strip — marquee on mobile, divided grid on desktop */}
        <div className="relative border-y border-[color:var(--border)] bg-[color:var(--background)]/85 backdrop-blur-sm">
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
          <div className="mx-auto hidden max-w-7xl md:grid md:grid-cols-4 md:divide-x md:divide-[color:var(--border)]">
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

      {/* Our Story split */}
      <section className="section-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 md:grid-cols-12 md:gap-16 md:px-8">
          <div className="md:col-span-6">
            <div className="eyebrow">Our Story</div>
            <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight text-[color:var(--foreground)] md:text-5xl lg:text-6xl">
              Wellness Built{" "}
              <span className="font-display-italic text-brand-700">
                Around You.
              </span>
            </h2>
            <div className="mt-4 h-px w-16 bg-brand-500/80" />
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[color:var(--muted-strong)]">
              Skilled Visits was founded with a simple belief: exceptional
              wellness care should be convenient, personalized, and accessible
              — without compromising quality. We saw a chance for a higher
              standard in mobile wellness, one that combines clinical
              excellence with luxury service.
            </p>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[color:var(--muted-strong)]">
              Today, we bring that vision to life for our community across
              South Florida and New York City — one visit at a time.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2.5 rounded-md bg-gradient-to-b from-brand-500 to-brand-700 px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] text-white shadow-[0_10px_28px_-12px_color-mix(in_oklab,var(--brand-500)_60%,transparent)] transition hover:-translate-y-0.5"
              >
                Our Services
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/mobile-iv-lounge"
                className="inline-flex items-center gap-2.5 rounded-md border border-[color:var(--border-strong)] bg-white px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] text-[color:var(--foreground)] transition hover:-translate-y-0.5 hover:border-brand-500/60 hover:bg-brand-50 hover:text-brand-700"
              >
                The Mobile Lounge
              </Link>
            </div>
          </div>
          <div className="md:col-span-6">
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-2)] shadow-soft-lg">
              <Image
                src="/van-side-2.jpg"
                alt="Skilled Visits mobile lounge"
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow">Our Values</div>
            <h2 className="font-display mt-5 text-4xl tracking-tight text-[color:var(--foreground)] md:text-5xl lg:text-6xl">
              The Standards We{" "}
              <span className="font-display-italic text-brand-700">
                Live By.
              </span>
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-brand-500/80" />
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-[color:var(--muted-strong)]">
              Five principles that guide every visit, every protocol, and every
              conversation with our team.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group relative overflow-hidden flex flex-col items-center gap-4 rounded-2xl border border-[color:var(--border)] bg-white p-6 text-center shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-soft-lg"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-100/0 blur-2xl transition-colors duration-700 group-hover:bg-brand-100/60"
                />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-brand-500/30 bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div className="relative">
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

      {/* Mission focus */}
      <section className="section-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 md:grid-cols-12 md:gap-16 md:px-8">
          <div className="md:col-span-5">
            <div className="eyebrow">Our Mission</div>
            <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight text-[color:var(--foreground)] md:text-5xl lg:text-6xl">
              To Elevate Wellness<br />
              <span className="font-display-italic text-brand-700">
                Everywhere We Go.
              </span>
            </h2>
            <div className="mt-4 h-px w-16 bg-brand-500/80" />
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[color:var(--muted-strong)]">
              Our mission is to redefine the way people experience wellness by
              bringing exceptional, evidence-backed treatments directly to
              them.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {FOCUS.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="group relative overflow-hidden flex flex-col gap-4 rounded-2xl border border-[color:var(--border)] bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-soft-lg"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-100/0 blur-2xl transition-colors duration-700 group-hover:bg-brand-100/60"
                  />
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-brand-500/30 bg-brand-50 text-brand-700">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div className="relative">
                    <div className="font-display text-xl tracking-tight text-[color:var(--foreground)]">
                      {title}
                    </div>
                    <div className="mt-2 text-[13px] leading-relaxed text-[color:var(--muted-strong)]">
                      {body}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team + Stats */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 items-end gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <div className="eyebrow">Expert Care You Can Trust</div>
              <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight text-[color:var(--foreground)] md:text-5xl lg:text-6xl">
                Experienced. Licensed.<br />
                <span className="font-display-italic text-brand-700">
                  Dedicated to You.
                </span>
              </h2>
              <div className="mt-4 h-px w-16 bg-brand-500/80" />
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[color:var(--muted-strong)]">
                Our team of licensed nurses and medical professionals are
                passionate about helping you feel your best — safely,
                effectively, and on your terms.
              </p>
            </div>

            <div className="relative md:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-soft-lg">
                <Image
                  src="/svahero1.jpg"
                  alt="Skilled Visits team"
                  fill
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                />
              </div>
              <div className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/55 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-white backdrop-blur-md">
                <Stethoscope className="h-3.5 w-3.5 text-brand-300" strokeWidth={1.7} /> Physician Oversight
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-14 grid grid-cols-2 divide-y divide-x divide-[color:var(--border)] overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-soft md:grid-cols-4 md:divide-y-0">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col items-center gap-2 px-6 py-8 text-center md:py-10 ${
                  i % 2 === 0 ? "border-l-0" : ""
                } ${i < 2 ? "border-t-0" : ""}`}
              >
                <div className="font-display text-4xl tracking-tight text-brand-700 md:text-5xl lg:text-[56px]">
                  {s.value}
                </div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted-strong)]">
                  {s.label}
                </div>
              </div>
            ))}
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
          <div className="eyebrow">Wellness on Your Terms</div>
          <h2 className="font-display mt-5 text-5xl leading-[1] tracking-tight text-[color:var(--foreground)] md:text-6xl lg:text-7xl">
            Your Health. Our Mission.{" "}
            <span className="font-display-italic text-brand-700">
              Anywhere You Are.
            </span>
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-brand-500/80" />
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-[color:var(--foreground-muted)]">
            Experience the Skilled Visits difference. Same-day booking, around
            the clock, wherever life takes you.
          </p>

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
              Book Your Visit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/memberships"
              className="inline-flex items-center justify-center gap-2.5 rounded-md border border-[color:var(--border-strong)] bg-[color:var(--surface)]/30 px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-[color:var(--foreground)] backdrop-blur-sm transition hover:border-brand-500/60 hover:bg-[color:var(--surface)]/60"
            >
              Explore Memberships
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

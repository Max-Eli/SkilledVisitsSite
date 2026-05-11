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
} from "lucide-react";

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
    body: "Care is delivered around you — your schedule, your goals, your home.",
  },
  {
    icon: Sparkles,
    title: "Excellence",
    body: "We deliver the highest standard of care in everything we do.",
  },
  {
    icon: ScrollText,
    title: "Integrity",
    body: "Honest, transparent, and professional care you can count on.",
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
    body: "Optimize your body and mind.",
  },
  {
    icon: Shield,
    title: "Prevention",
    body: "Stay ahead of your health.",
  },
  {
    icon: Hourglass,
    title: "Longevity",
    body: "Support a longer, healthier life.",
  },
];

const STATS = [
  { value: "10K+", label: "Happy Clients" },
  { value: "25K+", label: "IV Treatments Delivered" },
  { value: "5★", label: "Ratings Average" },
  { value: "100%", label: "Licensed & Insured" },
  { value: "FL & NY", label: "Proudly Serving" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark relative isolate -mt-20 overflow-hidden md:-mt-24">
        <div aria-hidden className="absolute inset-0 -z-10 brand-glow" />

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-16 pt-32 md:grid-cols-12 md:px-8 md:pt-44">
          <div className="md:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.32em] text-brand-700">
              About Skilled Visits
            </div>
            <h1 className="font-display mt-6 text-[52px] leading-[0.98] tracking-tight text-[color:var(--foreground)] sm:text-[64px] md:text-[78px]">
              <span className="block">Elevated Wellness.</span>
              <span className="block font-display-italic text-brand-700">
                Delivered to You.
              </span>
            </h1>
            <p className="mt-7 max-w-md text-[15px] leading-relaxed text-[color:var(--foreground-muted)] md:text-base">
              Skilled Visits is South Florida&apos;s premier mobile wellness
              provider, delivering concierge IV therapy, wellness shots, and
              blood work directly to your location — home, hotel, office, or
              anywhere you are. It&apos;s wellness that fits your life.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
              {TRUST.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-2)] px-3 py-3"
                >
                  <Icon className="h-4 w-4 shrink-0 text-brand-700" strokeWidth={1.6} />
                  <span className="text-[10px] uppercase tracking-[0.16em] text-[color:var(--foreground)]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative md:col-span-5">
            <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-soft-lg">
              <Image
                src="/iv.png"
                alt="Skilled Visits products"
                fill
                sizes="(min-width: 768px) 35vw, 80vw"
                className="object-contain p-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story split */}
      <section className="section-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 md:grid-cols-12 md:gap-16 md:px-8">
          <div className="md:col-span-6">
            <div className="eyebrow">Our Story</div>
            <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight md:text-5xl">
              Wellness Built{" "}
              <span className="font-display-italic text-brand-700">
                Around You.
              </span>
            </h2>
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-[color:var(--muted-strong)]">
              Skilled Visits was founded with a simple belief: exceptional
              wellness care should be convenient, personalized, and accessible
              — without compromising quality. We saw a chance for a higher
              standard in mobile wellness, one that combines clinical
              excellence with luxury service. Today, we bring that vision to
              life for our community across South Florida.
            </p>
            <Link
              href="/services"
              className="group mt-10 inline-flex items-center gap-2.5 rounded-md border border-brand-500/40 bg-white px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] text-brand-700 transition hover:-translate-y-0.5 hover:bg-brand-50"
            >
              Our Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="md:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white">
              <Image
                src="/van-rear-1.jpg"
                alt="Mobile lounge"
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center">
            <div className="text-[11px] uppercase tracking-[0.32em] text-brand-700">
              Our Values
            </div>
            <h2 className="font-display mt-5 text-4xl tracking-tight text-[color:var(--foreground)] md:text-5xl">
              The Standards We{" "}
              <span className="font-display-italic text-brand-700">
                Live By.
              </span>
            </h2>
            <div className="mx-auto mt-3 h-px w-16 bg-brand-500/60" />
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-5">
            {VALUES.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="flex flex-col items-center gap-4 rounded-2xl border border-[color:var(--border)] bg-white p-6 text-center shadow-soft transition hover:-translate-y-0.5 hover:shadow-soft-lg hover:border-brand-500/30"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-400/40 bg-brand-500/10 text-brand-700">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
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

      {/* Mission focus */}
      <section className="section-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 md:grid-cols-12 md:gap-16 md:px-8">
          <div className="md:col-span-5">
            <div className="eyebrow">Our Mission</div>
            <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight md:text-5xl">
              To Elevate Wellness<br />
              <span className="font-display-italic text-brand-700">
                Everywhere We Go.
              </span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[color:var(--muted-strong)]">
              Our mission is to redefine the way people experience wellness by
              bringing exceptional, evidence-backed treatments directly to them.
            </p>
          </div>
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {FOCUS.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="flex flex-col gap-4 rounded-2xl border border-[color:var(--border)] bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-soft-lg"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-500/30 bg-brand-50 text-brand-700">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <div className="font-display text-xl tracking-tight">
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

      {/* Team */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 items-end gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <div className="text-[11px] uppercase tracking-[0.32em] text-brand-700">
                Expert Care You Can Trust
              </div>
              <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight text-[color:var(--foreground)] md:text-5xl">
                Experienced. Licensed.<br />
                <span className="font-display-italic text-brand-700">
                  Dedicated to You.
                </span>
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[color:var(--foreground-muted)]">
                Our team of licensed nurses and medical professionals are
                passionate about helping you feel your best — safely,
                effectively, and on your terms.
              </p>
            </div>

            <div className="relative md:col-span-7">
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)]">
                <Image
                  src="/svahero1.jpg"
                  alt="Skilled Visits team"
                  fill
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-r from-[color:var(--background)]/40 via-transparent to-transparent"
                />
              </div>
              <div className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full border border-[color:var(--border-strong)] bg-black/60 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-brand-700 backdrop-blur-md">
                <Stethoscope className="h-3.5 w-3.5" /> Physician Oversight
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-y-10 border-y border-[color:var(--border)] py-10 md:grid-cols-5 md:gap-x-8">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-4xl tracking-tight text-brand-700 md:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-[color:var(--foreground)]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10 brand-glow-soft" />
        <div aria-hidden className="absolute inset-0 -z-10 brand-glow-soft" />

        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 py-20 md:flex-row md:items-center md:justify-between md:gap-12 md:px-8 md:py-24">
          <div>
            <div className="text-[11px] uppercase tracking-[0.32em] text-brand-700">
              Wellness on Your Terms
            </div>
            <h2 className="font-display mt-5 text-4xl leading-[1.02] tracking-tight text-[color:var(--foreground)] md:text-5xl">
              Your Health. Our Mission.<br />
              <span className="font-display-italic text-brand-700">
                Anywhere You Are.
              </span>
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[color:var(--foreground-muted)]">
              Experience the Skilled Visits difference.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 rounded-md bg-gradient-to-b from-brand-500 to-brand-700 px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-white shadow-[0_10px_28px_-12px_color-mix(in_oklab,var(--brand-500)_60%,transparent)] transition hover:-translate-y-0.5"
          >
            Book Your Visit
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </>
  );
}

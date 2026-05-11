import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  MapPin,
  Clock,
  Truck,
  CalendarCheck,
  Heart,
  Home,
  Briefcase,
  Building2,
  Hotel,
  Plane,
} from "lucide-react";
import { SERVICE_AREAS, BRAND } from "@/lib/content";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Concierge mobile wellness across South Florida and New York City. Same-day visits, 24/7 availability.",
};

const QUICK_FACTS = [
  { icon: Truck, label: "We Come To You" },
  { icon: Clock, label: "7 Days a Week" },
  { icon: MapPin, label: "Multiple Locations" },
  { icon: CalendarCheck, label: "Fast Booking" },
];

const COVERAGE: Record<keyof typeof SERVICE_AREAS, string[]> = {
  Florida: SERVICE_AREAS.Florida.cities,
  "New York": SERVICE_AREAS["New York"].cities,
};

const TRAVEL_SETTINGS = [
  { icon: Home, label: "Residential" },
  { icon: Briefcase, label: "Corporate" },
  { icon: Hotel, label: "Hotels" },
  { icon: Building2, label: "Yachts & Estates" },
  { icon: Heart, label: "Events" },
  { icon: Plane, label: "Airports" },
];

const STEPS = [
  { num: "1", title: "Book Your Service", body: "Choose your treatment and preferred time." },
  { num: "2", title: "We Come To You", body: "Our concierge team arrives at your location." },
  { num: "3", title: "Receive Your Treatment", body: "Sit back, relax, and enjoy the benefits." },
  { num: "4", title: "Feel Your Best", body: "Hydrated, refreshed, and ready for life." },
];

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark relative isolate -mt-20 overflow-hidden md:-mt-24">
        <div aria-hidden className="absolute inset-0 -z-10 brand-glow" />

        <div className="mx-auto max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pt-44">
          <div className="max-w-2xl">
            <div className="text-[11px] uppercase tracking-[0.32em] text-brand-700">
              Service Areas
            </div>
            <h1 className="font-display mt-6 text-[52px] leading-[0.98] tracking-tight text-[color:var(--foreground)] sm:text-[64px] md:text-[80px]">
              <span className="block">Premium Wellness.</span>
              <span className="block font-display-italic text-brand-700">
                Where You Are.
              </span>
            </h1>
            <p className="mt-7 max-w-lg text-[15px] leading-relaxed text-[color:var(--foreground-muted)] md:text-base">
              We bring concierge IV therapy, wellness shots, and blood work
              directly to your location across South Florida and New York City.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
            {QUICK_FACTS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-2)] px-4 py-3.5"
              >
                <Icon className="h-4 w-4 shrink-0 text-brand-700" strokeWidth={1.6} />
                <span className="text-[11px] uppercase tracking-[0.16em] text-[color:var(--foreground)]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regions */}
      <section className="section-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center">
            <div className="eyebrow">Proudly Serving</div>
            <h2 className="font-display mt-5 text-4xl tracking-tight md:text-5xl">
              South Florida &amp;{" "}
              <span className="font-display-italic text-brand-700">
                New York City
              </span>
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {Object.entries(SERVICE_AREAS).map(([region, data]) => {
              const sub =
                region === "Florida"
                  ? "Sunshine. Wellness. Delivered."
                  : "The City That Never Stops.";
              return (
                <article
                  key={region}
                  className="group overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-soft-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={data.hero}
                      alt={region}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-brand-700">
                        {sub}
                      </div>
                      <h3 className="font-display mt-2 text-4xl tracking-tight text-[color:var(--foreground)] md:text-5xl">
                        {region === "Florida" ? "SOUTH FLORIDA" : "NEW YORK CITY"}
                      </h3>
                    </div>
                  </div>
                  <div className="p-7 md:p-8">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-strong)]">
                      Areas covered
                    </div>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {COVERAGE[region as keyof typeof COVERAGE].map((c) => (
                        <span
                          key={c}
                          className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface-2)] px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-brand-700"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                    <div className="mt-7 flex flex-wrap items-center gap-4 justify-between">
                      <a
                        href={`tel:${data.phone.replace(/\D/g, "")}`}
                        className="inline-flex items-center gap-2 text-sm text-[color:var(--foreground)] hover:text-brand-700"
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-500/30 bg-brand-50 text-brand-700">
                          <MapPin className="h-3.5 w-3.5" />
                        </span>
                        {data.phone}
                      </a>
                      <Link
                        href="/contact"
                        className="group/cta inline-flex items-center gap-2 rounded-md bg-gradient-to-b from-brand-500 to-brand-700 px-5 py-2.5 text-[10px] uppercase tracking-[0.22em] text-white shadow-[0_8px_22px_-10px_color-mix(in_oklab,var(--brand-500)_60%,transparent)] transition hover:-translate-y-0.5 md:text-[11px]"
                      >
                        Book in {region === "Florida" ? "South Florida" : "New York"}
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/cta:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage strip */}
      <section className="section-cream pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 md:grid-cols-12 md:px-8">
          <div className="md:col-span-7">
            <div className="eyebrow">Wide Coverage</div>
            <h3 className="font-display mt-5 text-3xl tracking-tight md:text-4xl">
              We Come To You{" "}
              <span className="font-display-italic text-brand-700">
                Across Our Regions.
              </span>
            </h3>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-[color:var(--muted-strong)]">
              Our routes connect every neighborhood worth knowing in South
              Florida and the boroughs of New York. We&apos;ll be at your door —
              fast.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {TRAVEL_SETTINGS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[color:var(--foreground)] shadow-soft"
                >
                  <Icon className="h-3.5 w-3.5 text-brand-700" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="grid grid-cols-1 gap-3">
              {Object.entries(COVERAGE).map(([region, cities]) => (
                <div
                  key={region}
                  className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] p-6 text-[color:var(--foreground)]"
                >
                  <div className="text-[10px] uppercase tracking-[0.22em] text-brand-700">
                    {region === "Florida" ? "South Florida Coverage" : "New York City Coverage"}
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[12px] text-[color:var(--foreground)]">
                    {cities.map((c) => (
                      <li key={c} className="flex items-center gap-2">
                        <MapPin className="h-3 w-3 text-brand-700" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted)]">
              Don&apos;t see your area? Contact us — we may still be able to come
              to you.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center">
            <div className="eyebrow">
              How It Works
            </div>
            <h2 className="font-display mt-5 text-4xl tracking-tight text-[color:var(--foreground)] md:text-5xl">
              Wellness, Made{" "}
              <span className="font-display-italic text-brand-700">Easy.</span>
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div
                key={s.num}
                className="flex flex-col gap-5 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-7 transition hover:-translate-y-0.5 hover:border-brand-500/30"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-400/40 bg-brand-500/10 font-display text-lg text-brand-700">
                  {s.num}
                </span>
                <div>
                  <div className="text-[12px] font-medium uppercase tracking-[0.16em] text-[color:var(--foreground)]">
                    {s.title}
                  </div>
                  <div className="mt-2 text-[13px] leading-relaxed text-[color:var(--muted-strong)]">
                    {s.body}
                  </div>
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
              Your Location
            </div>
            <h2 className="font-display mt-5 text-4xl leading-[1.02] tracking-tight text-[color:var(--foreground)] md:text-5xl">
              Your Location. Our Care.<br />
              <span className="font-display-italic text-brand-700">
                Exceptional Wellness, Wherever Life Takes You.
              </span>
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[color:var(--foreground-muted)]">
              Book today and experience the Skilled Visits difference.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 md:items-end">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 rounded-md bg-gradient-to-b from-brand-500 to-brand-700 px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-white shadow-[0_10px_28px_-12px_color-mix(in_oklab,var(--brand-500)_60%,transparent)] transition hover:-translate-y-0.5"
            >
              Book Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href={`tel:${BRAND.phoneFL.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-[color:var(--muted-strong)] transition hover:text-brand-700"
            >
              <Clock className="h-3.5 w-3.5 text-brand-700" />
              Text us 24/7
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

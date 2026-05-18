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
import { BRAND } from "@/lib/content";
import { AreasWeServe } from "@/components/home/areas-we-serve";

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

      {/* Regions — shared design with the home Service Areas section */}
      <AreasWeServe
        eyebrow="Proudly Serving"
        titleLead="South Florida &"
        titleAccent="New York City"
        description="Two regions, one concierge line. Every neighborhood worth knowing — across South Florida and the five boroughs of New York."
        showFooterCard={false}
      />

      {/* Where we travel — settings strip */}
      <section className="section-cream pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow">Wide Coverage</div>
            <h3 className="font-display mt-5 text-3xl tracking-tight md:text-4xl">
              We Come To You{" "}
              <span className="font-display-italic text-brand-700">
                Across Our Regions.
              </span>
            </h3>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-[color:var(--muted-strong)]">
              From private residences to yachts and airport pickups, our routes
              connect every setting that matters. Wherever you are, we&apos;ll
              be at the door — fast.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
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
              href={BRAND.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
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

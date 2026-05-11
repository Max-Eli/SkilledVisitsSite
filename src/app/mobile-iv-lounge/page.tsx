import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  PlayCircle,
  MapPin,
  Briefcase,
  Hotel,
  Sailboat,
  Camera,
  Thermometer,
  ShieldCheck,
  Stethoscope,
  Truck,
  Clock,
  Phone,
  Mail,
  Home,
} from "lucide-react";
import { BRAND } from "@/lib/content";

export const metadata: Metadata = {
  title: "Mobile IV Lounge",
  description:
    "A private wellness lounge on wheels. Climate-controlled, clinical-grade, parked wherever you need it across South Florida and New York.",
};

const QUICK_FACTS = [
  { icon: Truck, label: "Luxury Mobile" },
  { icon: MapPin, label: "Comes To You" },
  { icon: ShieldCheck, label: "Discreet Service" },
];

const COMFORT_FEATURES = [
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

const SETTINGS = [
  { icon: Sailboat, title: "Marina & Yacht", body: "Park beside the slip." },
  { icon: Hotel, title: "Hotel Curbside", body: "Suite delivery on demand." },
  { icon: Briefcase, title: "Office & HQ", body: "Onsite team wellness." },
  { icon: Camera, title: "Events & Sets", body: "Crew-ready, all day." },
  { icon: Home, title: "Private Residence", body: "Driveway or porte cochère." },
];

const LOUNGE_STATS = [
  { value: "Up to 4", label: "Guests Per Visit" },
  { value: "24/7", label: "Booking Available" },
  { value: "60–90", label: "Minute Sessions" },
  { value: "FL & NY", label: "Coverage Regions" },
];

const GALLERY = [
  "/van-side-2.jpg",
  "/van-rear-1.jpg",
  "/van-front.jpg",
  "/van-rear-2.jpg",
  "/van-side-1.jpg",
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
    q: "How early do I need to book the lounge?",
    a: "Same-day bookings are possible for members and routine appointments. For events or group buyouts we recommend 48–72 hours.",
  },
  {
    q: "Is the lounge available 24/7?",
    a: "Yes. Our concierge line takes bookings around the clock and we dispatch as soon as a clinician and the lounge are available.",
  },
  {
    q: "How many people can the lounge accommodate?",
    a: "Up to four guests can be treated simultaneously in the lounge. Larger groups are handled in rotating sessions.",
  },
  {
    q: "Can the lounge travel outside the standard service area?",
    a: "On a case-by-case basis. Travel fees apply. Reach out to the concierge to confirm logistics.",
  },
];

export default function MobileIVLoungePage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark relative isolate -mt-20 overflow-hidden md:-mt-24">
        <div className="relative min-h-[78vh] overflow-hidden">
          <Image
            src="/van-front.jpg"
            alt="Skilled Visits mobile IV lounge"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[68%_center] md:object-center"
          />
          {/* Mobile overlay — vertical wash */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-[color:var(--background)]/90 via-[color:var(--background)]/40 to-[color:var(--background)]/95 md:hidden"
          />
          {/* Desktop overlay — left dark, right photo */}
          <div
            aria-hidden
            className="absolute inset-0 hidden bg-gradient-to-r from-[color:var(--background)] via-[color:var(--background)]/80 to-[color:var(--background)]/20 md:block"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[color:var(--background)] to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 brand-glow opacity-30"
          />

          <div className="relative flex min-h-[78vh] items-center px-5 pt-32 pb-20 md:px-8 md:pt-40">
            <div className="mx-auto w-full max-w-7xl">
              <div className="max-w-xl">
                <div className="text-[10px] uppercase tracking-[0.28em] text-brand-700 sm:text-[11px] sm:tracking-[0.32em]">
                  Mobile IV Lounge
                </div>
                <h1 className="font-display mt-5 text-[44px] leading-[1] tracking-tight text-[color:var(--foreground)] sm:mt-7 sm:text-[58px] md:text-[76px] lg:text-[84px]">
                  <span className="block">Wellness.</span>
                  <span className="block font-display-italic text-brand-700">
                    Elevated.
                  </span>
                </h1>
                <p className="mt-5 max-w-md text-[14px] leading-relaxed text-[color:var(--foreground-muted)] sm:mt-7 sm:text-[15px] md:text-base">
                  A luxury, climate-controlled lounge designed around your
                  comfort — parked wherever you are across South Florida and
                  New York.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2.5 rounded-md bg-gradient-to-b from-brand-500 to-brand-700 px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-white shadow-[0_10px_28px_-12px_color-mix(in_oklab,var(--brand-500)_60%,transparent)] transition hover:-translate-y-0.5"
                  >
                    Book the Lounge
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href="#features"
                    className="inline-flex items-center justify-center gap-2.5 rounded-md border border-[color:var(--border-strong)] bg-[color:var(--surface)]/30 px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-[color:var(--foreground)] backdrop-blur-sm transition hover:border-brand-500/60 hover:bg-[color:var(--surface)]/60"
                  >
                    <PlayCircle className="h-4 w-4" />
                    Watch the Tour
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick facts strip — marquee on mobile, divided grid on desktop */}
        <div className="relative border-y border-[color:var(--border)] bg-[color:var(--background)]/85 backdrop-blur-sm">
          <div className="group/strip relative overflow-hidden py-4 md:hidden">
            <div className="marquee-track flex w-max items-center gap-2 pl-2 group-hover/strip:[animation-play-state:paused]">
              {[...QUICK_FACTS, ...QUICK_FACTS].map(({ icon: Icon, label }, i) => (
                <div
                  key={`${label}-${i}`}
                  aria-hidden={i >= QUICK_FACTS.length}
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
          <div className="mx-auto hidden max-w-7xl md:grid md:grid-cols-3 md:divide-x md:divide-[color:var(--border)]">
            {QUICK_FACTS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center justify-center gap-3 px-5 py-6">
                <Icon className="h-4 w-4 shrink-0 text-brand-700" strokeWidth={1.6} />
                <span className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--foreground)]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro split — image + 3-step experience */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 md:grid-cols-12 md:gap-16 md:px-8">
          <div className="md:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-soft-lg">
              <Image
                src="/van-side-2.jpg"
                alt="Skilled Visits mobile lounge"
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="eyebrow">The Experience</div>
            <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight text-[color:var(--foreground)] md:text-5xl">
              A Private Wellness Lounge<br />
              <span className="font-display-italic text-brand-700">
                — On Wheels.
              </span>
            </h2>
            <div className="mt-4 h-px w-16 bg-brand-500/80" />
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[color:var(--muted-strong)]">
              Our lounge is fully outfitted to function as a private wellness
              suite. Custom-built interior, medical-grade equipment, and curated
              comforts — wherever it parks.
            </p>

            <ul className="mt-10 space-y-5">
              {[
                { num: "01", title: "Park & Treat", body: "We arrive, set up, and treat — anywhere you are." },
                { num: "02", title: "Relax", body: "Reclined seating, ambient lighting, calm scent." },
                { num: "03", title: "Recover", body: "Your clinician monitors throughout the entire visit." },
              ].map((s) => (
                <li key={s.num} className="flex items-start gap-5">
                  <span className="font-display text-3xl leading-none text-brand-700">
                    {s.num}
                  </span>
                  <div className="flex-1 border-b border-[color:var(--border)] pb-5">
                    <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--foreground)]">
                      {s.title}
                    </div>
                    <div className="mt-2 text-[13px] leading-relaxed text-[color:var(--muted-strong)] md:text-sm">
                      {s.body}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Features grid — conservative claims */}
      <section id="features" className="section-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow">Thoughtfully Designed</div>
            <h2 className="font-display mt-5 text-4xl tracking-tight text-[color:var(--foreground)] md:text-5xl lg:text-6xl">
              For Your{" "}
              <span className="font-display-italic text-brand-700">
                Comfort.
              </span>
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-brand-500/80" />
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-[color:var(--muted-strong)]">
              Every detail — from the seating to the temperature — is designed
              to make your visit feel effortless.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {COMFORT_FEATURES.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-soft-lg"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-100/0 blur-2xl transition-colors duration-700 group-hover:bg-brand-100/60"
                />
                <div className="relative">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand-500/30 bg-brand-50 text-brand-700">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-display text-lg leading-tight tracking-tight text-[color:var(--foreground)] md:text-xl">
                    {title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[color:var(--muted-strong)]">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats bar */}
          <div className="mt-12 grid grid-cols-2 divide-y divide-x divide-[color:var(--border)] overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-soft md:grid-cols-4 md:divide-y-0">
            {LOUNGE_STATS.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col items-center gap-2 px-6 py-8 text-center md:py-10 ${
                  i % 2 === 0 ? "border-l-0" : ""
                } ${i < 2 ? "border-t-0" : ""}`}
              >
                <div className="font-display text-3xl tracking-tight text-brand-700 md:text-4xl lg:text-5xl">
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

      {/* Gallery mosaic */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow">The Gallery</div>
            <h2 className="font-display mt-5 text-4xl tracking-tight text-[color:var(--foreground)] md:text-5xl lg:text-6xl">
              Luxury. Comfort.{" "}
              <span className="font-display-italic text-brand-700">
                Every Detail.
              </span>
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-brand-500/80" />
          </div>

          <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
            {GALLERY.map((src, i) => (
              <div
                key={src}
                className={`group relative overflow-hidden rounded-2xl border border-[color:var(--border)] shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-soft-lg ${
                  i === 0
                    ? "col-span-2 row-span-2 aspect-square"
                    : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={src}
                  alt="Mobile IV Lounge"
                  fill
                  sizes="(min-width: 768px) 20vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where it goes */}
      <section className="section-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow">Concierge Locations</div>
            <h2 className="font-display mt-5 text-4xl tracking-tight text-[color:var(--foreground)] md:text-5xl lg:text-6xl">
              Where Wellness Meets{" "}
              <span className="font-display-italic text-brand-700">
                Lifestyle.
              </span>
            </h2>
            <div className="mx-auto mt-4 h-px w-16 bg-brand-500/80" />
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-[color:var(--muted-strong)]">
              The lounge parks wherever life takes you — discreet, ready, and
              fully equipped.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-4">
            {SETTINGS.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="flex flex-col items-center gap-4 rounded-2xl border border-[color:var(--border)] bg-white p-6 text-center shadow-soft transition hover:-translate-y-0.5 hover:shadow-soft-lg hover:border-brand-500/30"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-500/30 bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div>
                  <div className="text-[11px] font-medium uppercase tracking-[0.16em] text-[color:var(--foreground)]">
                    {title}
                  </div>
                  <div className="mt-2 text-[12px] leading-relaxed text-[color:var(--muted-strong)]">
                    {body}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* "Custom location?" prompt */}
          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-soft md:flex-row md:gap-6 md:p-7">
            <div className="flex items-center gap-4 text-center md:text-left">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-500/30 bg-brand-50 text-brand-700">
                <MapPin className="h-4 w-4" strokeWidth={1.7} />
              </span>
              <div>
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--foreground)]">
                  Have somewhere specific in mind?
                </div>
                <div className="mt-1 text-[13px] leading-relaxed text-[color:var(--muted-strong)]">
                  Studio shoots, private parties, wellness retreats — tell us
                  the venue and we&apos;ll confirm the logistics.
                </div>
              </div>
            </div>
            <Link
              href="/contact"
              className="group inline-flex shrink-0 items-center gap-2.5 rounded-md border border-[color:var(--border-strong)] bg-white px-5 py-3 text-[11px] uppercase tracking-[0.22em] text-[color:var(--foreground)] transition hover:-translate-y-0.5 hover:border-brand-500/60 hover:bg-brand-50 hover:text-brand-700"
            >
              Ask the Concierge
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ + concierge panel split */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
            {/* Left: FAQ accordion */}
            <div className="md:col-span-7">
              <div className="eyebrow">Common Questions</div>
              <h2 className="font-display mt-5 text-4xl tracking-tight text-[color:var(--foreground)] md:text-5xl">
                Frequently Asked{" "}
                <span className="font-display-italic text-brand-700">
                  Questions.
                </span>
              </h2>
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

            {/* Right: concierge contact panel */}
            <div className="md:col-span-5">
              <div className="md:sticky md:top-28">
                <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-2)] p-7 shadow-soft md:p-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-500/30 bg-white text-brand-700">
                      <Phone className="h-4 w-4" strokeWidth={1.7} />
                    </span>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-brand-700">
                      Still Have Questions?
                    </div>
                  </div>
                  <h3 className="font-display mt-5 text-2xl leading-tight tracking-tight text-[color:var(--foreground)] md:text-3xl">
                    Talk to our concierge —{" "}
                    <span className="font-display-italic text-brand-700">
                      we&apos;re available 24/7.
                    </span>
                  </h3>
                  <p className="mt-4 text-[13px] leading-relaxed text-[color:var(--muted-strong)] md:text-sm">
                    Group buyouts, custom locations, multi-stop service —
                    anything not covered above, our concierge will scope and
                    quote within the hour.
                  </p>

                  <div className="mt-7 space-y-3">
                    {CONTACTS.map(({ icon: Icon, label, value, href }) => (
                      <a
                        key={label}
                        href={href}
                        className="group flex items-center gap-3 rounded-xl border border-[color:var(--border)] bg-white px-4 py-3 transition hover:-translate-y-0.5 hover:border-brand-500/40 hover:shadow-soft"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-500/30 bg-brand-50 text-brand-700">
                          <Icon className="h-4 w-4" strokeWidth={1.7} />
                        </span>
                        <div className="min-w-0 flex-1">
                          <div className="text-[10px] uppercase tracking-[0.22em] text-brand-700">
                            {label}
                          </div>
                          <div className="truncate text-[13px] text-[color:var(--foreground)]">
                            {value}
                          </div>
                        </div>
                        <ArrowRight
                          className="h-3.5 w-3.5 shrink-0 text-[color:var(--muted)] transition group-hover:translate-x-0.5 group-hover:text-brand-700"
                          strokeWidth={1.7}
                        />
                      </a>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="group mt-5 inline-flex w-full items-center justify-center gap-2.5 rounded-md bg-gradient-to-b from-brand-500 to-brand-700 px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] text-white shadow-[0_10px_28px_-12px_color-mix(in_oklab,var(--brand-500)_60%,transparent)] transition hover:-translate-y-0.5"
                  >
                    Send a Message
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          <div className="eyebrow">Book Now</div>
          <h2 className="font-display mt-5 text-5xl leading-[1] tracking-tight text-[color:var(--foreground)] md:text-6xl lg:text-7xl">
            Ready to Elevate{" "}
            <span className="font-display-italic text-brand-700">
              Your Experience?
            </span>
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-brand-500/80" />
          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-[color:var(--foreground-muted)]">
            Book the Skilled Visits Lounge and experience luxury wellness
            delivered to wherever you are.
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
              Book the Lounge
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

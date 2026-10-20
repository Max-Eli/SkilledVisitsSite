import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { BRAND } from "@/lib/content";
import { CURRENT_EVENT as EVENT } from "@/lib/event";
import { Reveal } from "@/components/motion/reveal";
import { AccentText } from "@/components/ui/accent-text";

export const metadata: Metadata = {
  title: `${EVENT.name} — Check In`,
  description: `${EVENT.name} with Skilled Visits at ${EVENT.venue.name}, ${EVENT.date}. Check in and sign your consent form before your treatment.`,
  // Reached by QR code at the event, and the content changes every time —
  // keeping it out of search avoids stale event listings.
  robots: { index: false, follow: true },
  openGraph: {
    title: `${EVENT.name} — Check In`,
    description: `${EVENT.date} · ${EVENT.time} · ${EVENT.venue.name}`,
    type: "website",
  },
};

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

const STEPS = [
  {
    step: "01",
    title: "Tap check in",
    body: "The button opens our secure intake form in a new tab. Nothing to download.",
  },
  {
    step: "02",
    title: "Add your details & sign",
    body: "Contact information, a short medical history, and your consent form. It takes about two minutes.",
  },
  {
    step: "03",
    title: "Find our nurse",
    body: "Show the confirmation screen at our station and we'll take it from there.",
  },
];

const GOOD_TO_KNOW = [
  "Signing before you walk up means no paperwork at the station.",
  "A clinician reviews your history and confirms the treatment is right for you.",
  "Bring a photo ID — we check it against your form.",
];

function CheckInButton({
  className = "",
  label = "Check in & sign consent",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={EVENT.intakeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-b from-brand-500 to-brand-700 px-8 py-4 text-[12px] font-medium uppercase tracking-[0.18em] text-white shadow-[0_14px_34px_-14px_color-mix(in_oklab,var(--brand-500)_80%,transparent)] transition-all duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 ${className}`}
    >
      {label}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

export default function ScanPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark relative isolate -mt-20 overflow-hidden md:-mt-24">
        <div aria-hidden className="absolute inset-0 -z-10 brand-glow" />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 dot-grid opacity-30"
          style={{
            maskImage:
              "radial-gradient(70% 60% at 50% 20%, black 0%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(70% 60% at 50% 20%, black 0%, transparent 78%)",
          }}
        />

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 pb-16 pt-32 md:grid-cols-12 md:gap-16 md:px-8 md:pb-20 md:pt-44">
          <div className="md:col-span-7">
            <Reveal>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-[color:var(--border-strong)] bg-white/5 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.18em] text-[color:var(--foreground-muted)] backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                  {BRAND.name} on site
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
                  Hosted by {EVENT.host.name}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="font-display mt-7 text-[46px] leading-[0.95] tracking-tight text-[color:var(--foreground)] sm:text-[62px] md:text-[76px]">
                {EVENT.name}
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-4 font-display text-2xl text-brand-700 md:text-3xl">
                <AccentText>{EVENT.tagline}</AccentText>
                {EVENT.note && (
                  <span className="mt-2 block text-[11px] uppercase not-italic tracking-[0.2em] text-[color:var(--muted)] sm:mt-0 sm:ml-3 sm:inline sm:align-middle">
                    {EVENT.note}
                  </span>
                )}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-[color:var(--foreground-muted)] md:text-base">
                {EVENT.description}
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <CheckInButton />
                <a
                  href={EVENT.venue.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-strong)] px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] text-[color:var(--foreground)] transition hover:border-brand-400/60 hover:text-brand-700"
                >
                  <MapPin className="h-3.5 w-3.5" strokeWidth={1.7} />
                  Get directions
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <p className="mt-5 text-[12px] text-[color:var(--muted)]">
                Takes about two minutes. Sign before you reach the station and
                skip the wait.
              </p>
            </Reveal>
          </div>

          {/* Event card */}
          <div className="md:col-span-5">
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)]/80 p-8 shadow-soft-lg backdrop-blur-sm md:p-10">
                <div className="text-[10px] uppercase tracking-[0.24em] text-brand-700">
                  The details
                </div>

                <dl className="mt-7 flex flex-col gap-7">
                  <div className="flex items-start gap-4">
                    <CalendarDays
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-700"
                      strokeWidth={1.7}
                    />
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
                        Date
                      </dt>
                      <dd className="font-display mt-1 text-xl tracking-tight text-[color:var(--foreground)]">
                        {EVENT.date}
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-700"
                      strokeWidth={1.7}
                    />
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
                        Time
                      </dt>
                      <dd className="font-display mt-1 text-xl tracking-tight text-[color:var(--foreground)]">
                        {EVENT.time}
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-700"
                      strokeWidth={1.7}
                    />
                    <div>
                      <dt className="text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
                        Venue
                      </dt>
                      <dd className="font-display mt-1 text-xl leading-tight tracking-tight text-[color:var(--foreground)]">
                        {EVENT.venue.name}
                      </dd>
                      <dd className="mt-1 text-sm text-[color:var(--foreground-muted)]">
                        {EVENT.venue.address}
                        {EVENT.venue.locality && (
                          <>
                            <br />
                            {EVENT.venue.locality}
                          </>
                        )}
                      </dd>
                    </div>
                  </div>
                </dl>

                <div className="lux-divider my-8" />

                <a
                  href={EVENT.host.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4"
                >
                  <span className="flex items-center gap-3">
                    <InstagramIcon className="h-4 w-4 text-brand-700" />
                    <span className="text-sm text-[color:var(--foreground)]">
                      {EVENT.host.handle}
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-[color:var(--muted)] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-700" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Check-in steps */}
      <section className="section-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-4">
              <Reveal>
                <div className="eyebrow">Before your treatment</div>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-display mt-5 text-3xl leading-tight tracking-tight md:text-4xl">
                  Three steps,{" "}
                  <span className="font-display-italic text-brand-700">
                    two minutes.
                  </span>
                </h2>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-[color:var(--muted-strong)]">
                  Every guest signs a consent form before any treatment. Doing
                  it on your phone keeps the line moving.
                </p>
              </Reveal>
            </div>

            <div className="md:col-span-8">
              <ol className="divide-y divide-[color:var(--border)] border-y border-[color:var(--border)]">
                {STEPS.map((s, i) => (
                  <Reveal as="li" key={s.step} delay={i * 0.06}>
                    <div className="flex items-baseline gap-6 py-7 md:gap-10">
                      <div className="font-display text-sm tracking-[0.1em] text-brand-700">
                        {s.step}
                      </div>
                      <div>
                        <h3 className="font-display text-xl tracking-tight text-[color:var(--foreground)] md:text-2xl">
                          {s.title}
                        </h3>
                        <p className="mt-2 max-w-md text-[15px] leading-relaxed text-[color:var(--muted-strong)]">
                          {s.body}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ol>

              <Reveal delay={0.2}>
                <div className="mt-10">
                  <CheckInButton />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* On site tonight */}
      <section className="section-snow py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <Reveal>
                <div className="eyebrow">On site tonight</div>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-display mt-5 text-3xl leading-tight tracking-tight md:text-4xl">
                  What our nurses are{" "}
                  <span className="font-display-italic text-brand-700">
                    bringing.
                  </span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.14}>
              <Link
                href="/services/iv-therapy"
                className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-brand-700 transition hover:text-brand-800"
              >
                See the full drip menu
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {EVENT.onSite.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <article className="flex h-full flex-col rounded-3xl border border-[color:var(--border)] bg-white p-8 shadow-soft">
                  <div className="font-display text-xl tracking-tight text-[color:var(--foreground)] md:text-2xl">
                    {item.title}
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--muted-strong)]">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Venue + good to know */}
      <section className="section-cream py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
          <div>
            <Reveal>
              <div className="eyebrow">The venue</div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-5 text-3xl leading-tight tracking-tight md:text-4xl">
                {EVENT.venue.name}
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--muted-strong)]">
                {EVENT.venue.address}
                {EVENT.venue.locality && <>, {EVENT.venue.locality}</>}
                <br />
                Find us {EVENT.date.split(",")[0]} from {EVENT.time}.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <a
                href={EVENT.venue.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex items-center gap-2 rounded-full border border-[color:var(--border-strong)] bg-white px-6 py-3.5 text-[11px] uppercase tracking-[0.18em] text-[color:var(--foreground)] transition hover:-translate-y-0.5 hover:border-brand-500/60 hover:text-brand-700"
              >
                <MapPin className="h-3.5 w-3.5" strokeWidth={1.7} />
                Open in maps
              </a>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <div className="eyebrow">Good to know</div>
            </Reveal>
            <ul className="mt-7 flex flex-col gap-5">
              {GOOD_TO_KNOW.map((item, i) => (
                <Reveal as="li" key={item} delay={i * 0.06}>
                  <div className="flex items-start gap-3.5">
                    <ShieldCheck
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-700"
                      strokeWidth={1.7}
                    />
                    <span className="text-[15px] leading-relaxed text-[color:var(--muted-strong)]">
                      {item}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.2}>
              <a
                href={`tel:${BRAND.phoneFL.replace(/\D/g, "")}`}
                className="mt-8 inline-flex items-center gap-2.5 text-sm text-[color:var(--foreground)] transition hover:text-brand-700"
              >
                <Phone className="h-4 w-4 text-brand-700" strokeWidth={1.7} />
                Questions tonight? {BRAND.phoneFL}
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-dark relative isolate overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10 brand-glow-soft" />
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 py-20 pb-28 md:flex-row md:items-center md:justify-between md:px-8 md:py-24 md:pb-24">
          <div>
            <Reveal>
              <h2 className="font-display text-3xl leading-tight tracking-tight text-[color:var(--foreground)] md:text-4xl">
                Ready when you are.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[color:var(--foreground-muted)]">
                Sign your consent form now and walk straight up to our station.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <CheckInButton />
          </Reveal>
        </div>
      </section>

      {/* Sticky check-in bar — phones only, where guests actually scan */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[color:var(--border)] bg-white/90 px-4 py-3 backdrop-blur-md md:hidden">
        <CheckInButton className="w-full" label="Check in & sign" />
      </div>
    </>
  );
}

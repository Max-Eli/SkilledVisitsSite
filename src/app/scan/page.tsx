import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { BRAND } from "@/lib/content";
import { CURRENT_EVENT as EVENT } from "@/lib/event";
import { Reveal } from "@/components/motion/reveal";

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

/** Checkerboard band lifted from the flyer's border. */
function CheckerBand({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 h-7 md:h-9 ${className}`}
      style={{
        backgroundImage:
          "repeating-conic-gradient(var(--paper) 0% 25%, transparent 0% 50%)",
        backgroundSize: "28px 28px",
        opacity: 0.9,
      }}
    />
  );
}

/** The flyer hangs spiders off the top edge. */
function Spider({
  className = "",
  drop = 110,
}: {
  className?: string;
  drop?: number;
}) {
  return (
    <svg
      aria-hidden
      viewBox={`0 0 40 ${drop + 34}`}
      className={`pointer-events-none absolute w-[34px] md:w-[46px] ${className}`}
      fill="none"
      stroke="var(--paper)"
      strokeWidth="1.1"
      strokeLinecap="round"
    >
      <path d={`M20 0 V ${drop}`} opacity="0.45" />
      <g opacity="0.72">
        <path d={`M20 ${drop + 2} q -13 2 -16 12`} />
        <path d={`M20 ${drop + 5} q -14 5 -15 16`} />
        <path d={`M20 ${drop + 9} q -12 8 -11 17`} />
        <path d={`M20 ${drop + 2} q 13 2 16 12`} />
        <path d={`M20 ${drop + 5} q 14 5 15 16`} />
        <path d={`M20 ${drop + 9} q 12 8 11 17`} />
      </g>
      <ellipse
        cx="20"
        cy={drop + 12}
        rx="7.5"
        ry="9.5"
        fill="var(--paper)"
        stroke="none"
        opacity="0.9"
      />
      <circle
        cx="20"
        cy={drop + 1}
        r="4.2"
        fill="var(--paper)"
        stroke="none"
        opacity="0.9"
      />
    </svg>
  );
}

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
      className={`inline-flex items-center justify-center rounded-full bg-[color:var(--paper)] px-9 py-4 text-[12px] font-semibold uppercase tracking-[0.2em] text-[color:var(--ink)] transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--paper)] focus-visible:ring-offset-4 focus-visible:ring-offset-[color:var(--ink)] ${className}`}
    >
      {label}
    </a>
  );
}

export default function ScanPage() {
  const themeVars = {
    "--ink": EVENT.theme.ink,
    "--paper": EVENT.theme.paper,
  } as CSSProperties;

  return (
    <>
      {/* The invite */}
      <section
        style={themeVars}
        className="relative isolate -mt-20 overflow-hidden bg-[color:var(--ink)] text-[color:var(--paper)] md:-mt-24"
      >
        <CheckerBand className="top-20 md:top-24" />
        <CheckerBand className="bottom-0" />

        {EVENT.theme.motif === "halloween" && (
          <>
            <Spider className="right-[14%] top-20 md:right-[22%] md:top-24" drop={120} />
            <Spider className="right-[6%] top-20 md:right-[13%] md:top-24" drop={66} />
          </>
        )}

        <div className="mx-auto max-w-4xl px-6 pb-20 pt-32 text-center md:pb-28 md:pt-44">
          {/* The night, co-signed: host in their script, our mark reversed out */}
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
              <a
                href={EVENT.host.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display-italic text-[24px] leading-none transition-opacity hover:opacity-80 md:text-[32px]"
              >
                {EVENT.host.name}
              </a>
              <span
                aria-hidden
                className="text-lg font-light leading-none opacity-45 md:text-xl"
              >
                &times;
              </span>
              <Image
                src="/brand/logo.svg"
                alt={BRAND.name}
                width={220}
                height={50}
                className="h-8 w-auto md:h-10"
                style={{ filter: "brightness(0) invert(1)" }}
                priority
              />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <h1 className="mt-9 break-words text-[clamp(2.75rem,12vw,7rem)] font-black uppercase leading-[0.84] tracking-[-0.03em]">
              {(EVENT.titleLines ?? [EVENT.name]).map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mx-auto mt-7 max-w-2xl text-[10px] uppercase leading-relaxed tracking-[0.22em] opacity-80 md:text-xs md:tracking-[0.26em]">
              {EVENT.tagline}
              {EVENT.note && <span className="opacity-70"> — {EVENT.note}</span>}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div
              aria-hidden
              className="mx-auto mt-11 h-px w-20 bg-[color:var(--paper)] opacity-30"
            />
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-11 text-base uppercase tracking-[0.2em] md:text-lg">
              {EVENT.date} · {EVENT.time}
            </p>
          </Reveal>

          <Reveal delay={0.34}>
            <p className="mt-3 text-sm opacity-70">
              {EVENT.venue.name} · {EVENT.venue.address}
              {EVENT.venue.locality && <>, {EVENT.venue.locality}</>}
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-12">
              <CheckInButton />
            </div>
          </Reveal>

          <Reveal delay={0.46}>
            <p className="mt-5 text-[11px] uppercase tracking-[0.18em] opacity-55">
              Two minutes · Before you reach our table
            </p>
          </Reveal>
        </div>
      </section>

      {/* The practical half */}
      <section className="section-cream py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <div>
            <Reveal>
              <h2 className="font-display text-3xl leading-tight tracking-tight md:text-4xl">
                Why we need the form
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 text-[15px] leading-relaxed text-[color:var(--muted-strong)] md:text-base">
                Every guest is screened before a drip or a shot. The form takes
                your contact details, a short medical history, and your
                signature, and a clinician reads it before anything gets mixed.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--muted-strong)] md:text-base">
                It runs about two minutes on your phone. Sign it now and you can
                walk straight up to us. Leave it and you&apos;ll be filling it
                in at the table while the rest of your group is already done.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 text-[13px] text-[color:var(--muted)]">
                Bring a photo ID — we check it against your form.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <div
                style={themeVars}
                className="mt-9 inline-block rounded-full bg-[color:var(--ink)]"
              >
                <CheckInButton />
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <p className="mt-7 text-[13px] text-[color:var(--muted)]">
                Can&apos;t find us or something&apos;s not working?{" "}
                <a
                  href={`tel:${BRAND.phoneFL.replace(/\D/g, "")}`}
                  className="text-brand-700 underline underline-offset-4 transition hover:text-brand-800"
                >
                  {BRAND.phoneFL}
                </a>
              </p>
            </Reveal>
          </div>

        </div>
      </section>

      {/* Who we are, for anyone meeting us tonight */}
      <section className="section-snow border-t border-[color:var(--border)] py-14 pb-28 md:pb-14">
        <div className="mx-auto flex max-w-5xl flex-col gap-5 px-5 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="max-w-xl text-[15px] leading-relaxed text-[color:var(--muted-strong)]">
            <span className="text-[color:var(--foreground)]">{BRAND.name}</span>{" "}
            is a mobile IV therapy practice — licensed nurses bringing drips and
            wellness shots to homes, hotels, and events across Florida and New
            York.
          </p>
          <Link
            href="/services/iv-therapy"
            className="shrink-0 text-[11px] uppercase tracking-[0.2em] text-brand-700 underline underline-offset-4 transition hover:text-brand-800"
          >
            See the drip menu
          </Link>
        </div>
      </section>

      {/* Phones get a permanent way back to the form */}
      <div
        style={themeVars}
        className="fixed inset-x-0 bottom-0 z-40 bg-[color:var(--ink)] px-4 py-3 md:hidden"
      >
        <CheckInButton className="w-full" label="Check in & sign" />
      </div>
    </>
  );
}

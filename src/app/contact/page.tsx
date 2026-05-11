import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Phone,
  Mail,
  MessageSquare,
  MapPin,
  Clock,
  AlertCircle,
} from "lucide-react";
import { BRAND, SERVICES } from "@/lib/content";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach Skilled Visits anytime, anywhere. Available 24/7 across South Florida and New York City.",
};

const QUICK_FACTS = [
  { icon: Clock, label: "24/7 Concierge Support" },
  { icon: MessageSquare, label: "Licensed & Experienced Team" },
  { icon: MapPin, label: "Coverage in FL & NY" },
];

const CONTACT_CARDS = [
  {
    icon: Phone,
    label: "Call Us",
    primary: BRAND.phoneFL,
    sub: "Florida",
    href: `tel:${BRAND.phoneFL.replace(/\D/g, "")}`,
  },
  {
    icon: Phone,
    label: "Call Us",
    primary: BRAND.phoneNY,
    sub: "New York",
    href: `tel:${BRAND.phoneNY.replace(/\D/g, "")}`,
  },
  {
    icon: Mail,
    label: "Email",
    primary: BRAND.email,
    sub: "Reply within hours",
    href: `mailto:${BRAND.email}`,
  },
  {
    icon: MessageSquare,
    label: "Text Us",
    primary: BRAND.phoneFL,
    sub: "24/7 Concierge",
    href: `sms:${BRAND.phoneFL.replace(/\D/g, "")}`,
  },
];

const FAQS = [
  {
    q: "How quickly can you arrive?",
    a: "In most service areas we arrive within 60–90 minutes of booking. Same-day appointments are routine; members get priority dispatch.",
  },
  {
    q: "Do you offer same-day appointments?",
    a: "Yes — every day, including weekends and holidays. Call our concierge line and we'll dispatch a clinician as soon as one is available.",
  },
  {
    q: "What areas do you cover?",
    a: "South Florida (Miami-Dade, Broward, Palm Beach) and New York City (all five boroughs). Travel service available case-by-case.",
  },
  {
    q: "How do I book a visit?",
    a: "Call our concierge line, text, email, or submit the form below. A clinician will follow up to design your protocol and confirm timing.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark relative isolate -mt-20 overflow-hidden md:-mt-24">
        <div aria-hidden className="absolute inset-0 -z-10 brand-glow" />

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 pb-16 pt-32 md:grid-cols-12 md:px-8 md:pt-44">
          <div className="md:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.32em] text-brand-700">
              Contact
            </div>
            <h1 className="font-display mt-6 text-[52px] leading-[0.98] tracking-tight text-[color:var(--foreground)] sm:text-[64px] md:text-[80px]">
              <span className="block">We&apos;re Here for You.</span>
              <span className="block font-display-italic text-brand-700">
                Anytime. Anywhere.
              </span>
            </h1>
            <p className="mt-7 max-w-lg text-[15px] leading-relaxed text-[color:var(--foreground-muted)] md:text-base">
              Have questions or ready to book your appointment? Our team is
              available 24/7 to help you choose the right care and schedule
              your visit.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-3">
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

          <div className="md:col-span-5">
            <ContactForm services={SERVICES.map((s) => s.name)} />
          </div>
        </div>
      </section>

      {/* Multiple ways to reach */}
      <section className="section-cream py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center">
            <div className="eyebrow">
              Multiple Ways
            </div>
            <h2 className="font-display mt-5 text-4xl tracking-tight text-[color:var(--foreground)] md:text-5xl">
              Multiple Ways to{" "}
              <span className="font-display-italic text-brand-700">Reach Us.</span>
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CONTACT_CARDS.map((c) => (
              <a
                key={`${c.label}-${c.primary}-${c.sub}`}
                href={c.href}
                className="flex flex-col items-center gap-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-7 text-center transition hover:-translate-y-0.5 hover:border-brand-500/30"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-400/40 bg-brand-500/10 text-brand-700">
                  <c.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div>
                  <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--foreground)]">
                    {c.label}
                  </div>
                  <div className="mt-2 font-display text-xl text-[color:var(--foreground)] md:text-[22px]">
                    {c.primary}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-brand-700">
                    {c.sub}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
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
            {(["Florida", "New York"] as const).map((region) => (
              <div
                key={region}
                className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-soft"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={
                      region === "Florida"
                        ? "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=1600&q=80"
                        : "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=1600&q=80"
                    }
                    alt={region}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-7 md:p-8">
                    <h3 className="font-display text-3xl tracking-tight text-[color:var(--foreground)] md:text-4xl">
                      {region === "Florida" ? "SOUTH FLORIDA" : "NEW YORK CITY"}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center justify-between p-6">
                  <a
                    href={`tel:${
                      region === "Florida"
                        ? BRAND.phoneFL.replace(/\D/g, "")
                        : BRAND.phoneNY.replace(/\D/g, "")
                    }`}
                    className="inline-flex items-center gap-2 text-sm text-[color:var(--foreground)] hover:text-brand-700"
                  >
                    <Phone className="h-3.5 w-3.5 text-brand-700" />
                    {region === "Florida" ? BRAND.phoneFL : BRAND.phoneNY}
                  </a>
                  <Link
                    href="/service-areas"
                    className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-brand-700"
                  >
                    Service Areas <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + Emergency */}
      <section className="section-cream pb-24 md:pb-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 md:grid-cols-12 md:gap-12 md:px-8">
          <div className="md:col-span-7">
            <div className="eyebrow">Members Listen</div>
            <h3 className="font-display mt-5 text-3xl tracking-tight md:text-4xl">
              Common{" "}
              <span className="font-display-italic text-brand-700">
                Questions.
              </span>
            </h3>
            <div className="mt-8 space-y-3">
              {FAQS.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-xl border border-[color:var(--border)] bg-white p-5 shadow-soft transition open:shadow-soft-lg"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-sm font-medium text-[color:var(--foreground)]">
                    <span>{f.q}</span>
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-brand-500/30 bg-brand-50 text-brand-700 transition group-open:rotate-45">
                      <span className="text-base leading-none">+</span>
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted-strong)]">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-3)] p-8 text-[color:var(--foreground)] shadow-soft md:p-9">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-500/30 bg-white text-brand-700">
                  <AlertCircle className="h-4 w-4" strokeWidth={1.7} />
                </span>
                <div className="text-[10px] uppercase tracking-[0.24em] text-brand-700">
                  Need Immediate Assistance?
                </div>
              </div>
              <h4 className="font-display mt-5 text-2xl leading-tight tracking-tight md:text-3xl">
                Our concierge team is available 24/7 to help you book a same-day
                appointment.
              </h4>

              <div className="mt-7 space-y-3">
                <a
                  href={`tel:${BRAND.phoneFL.replace(/\D/g, "")}`}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 transition hover:border-brand-500/30 hover:bg-[color:var(--surface-2)]"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-brand-700" />
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.22em] text-brand-700">
                        Florida
                      </div>
                      <div className="text-sm">{BRAND.phoneFL}</div>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={`tel:${BRAND.phoneNY.replace(/\D/g, "")}`}
                  className="group flex items-center justify-between gap-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 transition hover:border-brand-500/30 hover:bg-[color:var(--surface-2)]"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-brand-700" />
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.22em] text-brand-700">
                        New York
                      </div>
                      <div className="text-sm">{BRAND.phoneNY}</div>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={`sms:${BRAND.phoneFL.replace(/\D/g, "")}`}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-b from-brand-500 to-brand-700 px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] text-white shadow-[0_10px_28px_-12px_color-mix(in_oklab,var(--brand-500)_60%,transparent)] transition hover:-translate-y-0.5"
                >
                  Text Us 24/7
                  <MessageSquare className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10 brand-glow-soft" />
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between md:gap-12 md:px-8 md:py-20">
          <div>
            <div className="text-[11px] uppercase tracking-[0.32em] text-brand-700">
              We Look Forward
            </div>
            <h2 className="font-display mt-5 text-4xl leading-[1.02] tracking-tight text-[color:var(--foreground)] md:text-5xl">
              We Look Forward to{" "}
              <span className="font-display-italic text-brand-700">
                Caring for You.
              </span>
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[color:var(--foreground-muted)]">
              Premium wellness, delivered with care.
            </p>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2.5 rounded-md bg-gradient-to-b from-brand-500 to-brand-700 px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-white shadow-[0_10px_28px_-12px_color-mix(in_oklab,var(--brand-500)_60%,transparent)] transition hover:-translate-y-0.5"
          >
            Explore Services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </>
  );
}

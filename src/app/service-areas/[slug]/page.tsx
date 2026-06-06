import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowRight,
  Phone,
  MapPin,
  ShieldCheck,
  Clock,
  Truck,
  Star,
} from "lucide-react";
import { BRAND, GOOGLE_REVIEWS } from "@/lib/content";
import { CITY_PAGES, getCity } from "@/lib/cities";

type Props = { params: Promise<{ slug: string }> };

const SITE_URL = "https://skilledvisits.com";

export function generateStaticParams() {
  return CITY_PAGES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return {
    title: city.metaTitle,
    description: city.metaDescription,
    alternates: { canonical: `${SITE_URL}/service-areas/${city.slug}` },
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      type: "website",
    },
  };
}

const TRUST = [
  { icon: ShieldCheck, label: "Licensed Nurses" },
  { icon: Clock, label: "Same-Day Appointments" },
  { icon: Truck, label: "We Come To You" },
  { icon: Star, label: "5-Star Google Rated" },
];

// Reviews whose text mentions one of the city's neighborhoods get pulled
// in as social proof on that city's page.
function relatedReviews(neighborhoods: string[]) {
  const needles = neighborhoods.map((n) => n.toLowerCase());
  return GOOGLE_REVIEWS.filter((r) =>
    needles.some((n) => r.text.toLowerCase().includes(n)),
  ).slice(0, 2);
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const reviews = relatedReviews(city.neighborhoods);

  // LocalBusiness + FAQPage structured data for SEO rich results.
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: `Skilled Visits — ${city.name}`,
    description: city.metaDescription,
    url: `${SITE_URL}/service-areas/${city.slug}`,
    telephone: city.phone,
    image: `${SITE_URL}${city.heroImage}`,
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "FL",
      addressCountry: "US",
    },
    priceRange: "$$$",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="section-dark relative isolate -mt-20 overflow-hidden md:-mt-24">
        <div aria-hidden className="absolute inset-0 -z-10 brand-glow" />

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-12 pt-32 md:grid-cols-12 md:px-8 md:pt-44">
          <div className="md:col-span-7">
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-strong)] transition hover:text-brand-700"
            >
              <ArrowRight className="h-3 w-3 rotate-180" />
              Service Areas
            </Link>
            <h1 className="font-display mt-6 text-[44px] leading-[0.98] tracking-tight text-[color:var(--foreground)] sm:text-[58px] md:text-[72px] lg:text-[80px]">
              <span className="block">{city.heroTagline}</span>
              <span className="block font-display-italic text-brand-700">
                {city.heroAccent}
              </span>
            </h1>
            <p className="mt-7 max-w-lg text-[15px] leading-relaxed text-[color:var(--foreground-muted)] md:text-base">
              {city.intro}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href={BRAND.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-md bg-gradient-to-b from-brand-500 to-brand-700 px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] text-white shadow-[0_10px_28px_-12px_color-mix(in_oklab,var(--brand-500)_60%,transparent)] transition hover:-translate-y-0.5"
              >
                Book in {city.name}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={`tel:${city.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center gap-2.5 rounded-md border border-[color:var(--border-strong)] px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] text-[color:var(--foreground)] transition hover:border-brand-500/60"
              >
                <Phone className="h-4 w-4" strokeWidth={1.75} />
                {city.phone}
              </a>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-soft-lg">
              <Image
                src={city.heroImage}
                alt={`Skilled Visits mobile IV van serving ${city.name}`}
                fill
                priority
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="border-y border-[color:var(--border)]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[color:var(--border)] md:grid-cols-4">
            {TRUST.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center justify-center gap-3 px-5 py-6"
              >
                <Icon
                  className="h-4 w-4 shrink-0 text-brand-700"
                  strokeWidth={1.6}
                />
                <span className="text-[10px] uppercase tracking-[0.18em] text-[color:var(--foreground)] md:text-[11px]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial body */}
      <section className="section-cream py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <div className="eyebrow">About Our {city.name} Service</div>
          <h2 className="font-display mt-5 text-3xl tracking-tight md:text-4xl">
            Concierge wellness,{" "}
            <span className="font-display-italic text-brand-700">
              built around {city.name}.
            </span>
          </h2>
          <div className="mt-8 space-y-6">
            {city.body.map((p, i) => (
              <p
                key={i}
                className="text-[15px] leading-relaxed text-[color:var(--muted-strong)] md:text-base"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="section-cream pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="eyebrow">How We Serve {city.name}</div>
            <h2 className="font-display mt-5 text-3xl tracking-tight md:text-4xl">
              Where the visits{" "}
              <span className="font-display-italic text-brand-700">
                happen.
              </span>
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {city.useCases.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="flex flex-col gap-4 rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-brand-500/30 hover:shadow-soft-lg md:p-7"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-500/30 bg-brand-50 text-brand-700">
                  <Icon className="h-4 w-4" strokeWidth={1.7} />
                </span>
                <div>
                  <div className="font-display text-base tracking-tight text-[color:var(--foreground)] md:text-lg">
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
      </section>

      {/* Neighborhoods */}
      <section className="section-cream pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="rounded-3xl border border-[color:var(--border)] bg-white p-8 shadow-soft md:p-10">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-xl">
                <div className="eyebrow">Neighborhoods Covered</div>
                <h2 className="font-display mt-5 text-3xl tracking-tight md:text-4xl">
                  Where we travel{" "}
                  <span className="font-display-italic text-brand-700">
                    across {city.name}.
                  </span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted-strong)]">
                  {city.neighborhoods.length}+ neighborhoods covered. Don&apos;t
                  see yours? Call us — we likely still come to you.
                </p>
              </div>
              <Link
                href={`tel:${city.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-strong)] bg-white px-4 py-2.5 text-sm text-[color:var(--foreground)] transition hover:border-brand-500/60 hover:bg-brand-50 hover:text-brand-700"
              >
                <Phone className="h-3.5 w-3.5 text-brand-700" />
                {city.phone}
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {city.neighborhoods.map((n) => (
                <span
                  key={n}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-2)] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-brand-700"
                >
                  <MapPin className="h-3 w-3" />
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews — only show if any matched this city */}
      {reviews.length > 0 && (
        <section className="section-cream pb-20 md:pb-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="eyebrow">From {city.name} Clients</div>
              <h2 className="font-display mt-5 text-3xl tracking-tight md:text-4xl">
                What people are{" "}
                <span className="font-display-italic text-brand-700">
                  saying.
                </span>
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
              {reviews.map((r) => (
                <div
                  key={r.name}
                  className="rounded-2xl border border-[color:var(--border)] bg-white p-7 shadow-soft"
                >
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                        strokeWidth={0}
                      />
                    ))}
                  </div>
                  <p className="mt-4 text-[15px] leading-relaxed text-[color:var(--foreground)]">
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div className="mt-5 text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-strong)]">
                    — {r.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="section-cream pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <div className="eyebrow">Frequently Asked</div>
          <h2 className="font-display mt-5 text-3xl tracking-tight md:text-4xl">
            About mobile IV therapy{" "}
            <span className="font-display-italic text-brand-700">
              in {city.name}.
            </span>
          </h2>
          <div className="mt-10 space-y-3">
            {city.faqs.map((f) => (
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
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10 brand-glow-soft" />
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between md:gap-12 md:px-8 md:py-20">
          <div>
            <div className="text-[11px] uppercase tracking-[0.32em] text-brand-700">
              Ready to Book?
            </div>
            <h2 className="font-display mt-5 text-3xl leading-[1.02] tracking-tight text-[color:var(--foreground)] md:text-5xl">
              Concierge wellness,{" "}
              <span className="font-display-italic text-brand-700">
                at your door in {city.name}.
              </span>
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[color:var(--foreground-muted)]">
              Most appointments dispatch within 60 to 90 minutes. Call or text
              us 24/7.
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
              href={`tel:${city.phone.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-[color:var(--muted-strong)] transition hover:text-brand-700"
            >
              <Phone className="h-3.5 w-3.5 text-brand-700" />
              {city.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

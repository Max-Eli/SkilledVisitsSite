import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Clock,
  Droplet,
  Truck,
  Star,
  Beaker,
  Sparkles,
} from "lucide-react";
import {
  BRAND,
  IV_COCKTAILS,
  cocktailSlug,
  getCocktailBySlug,
} from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

const SITE_URL = "https://skilledvisits.com";

export function generateStaticParams() {
  return IV_COCKTAILS.map((c) => ({ slug: cocktailSlug(c.name) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const drip = getCocktailBySlug(slug);
  if (!drip) return {};
  const title = `${drip.name} IV Therapy — ${drip.tagline}`;
  return {
    title,
    description: drip.description,
    alternates: {
      canonical: `${SITE_URL}/services/iv-therapy/${cocktailSlug(drip.name)}`,
    },
    openGraph: {
      title,
      description: drip.description,
      type: "website",
      images: [`${SITE_URL}${drip.image}`],
    },
  };
}

const TRUST = [
  { icon: ShieldCheck, label: "Licensed Nurses" },
  { icon: Clock, label: "Same-Day Booking" },
  { icon: Droplet, label: "Medical-Grade" },
  { icon: Truck, label: "We Come To You" },
  { icon: Star, label: "5-Star Google Rated" },
];

export default async function DripPage({ params }: Props) {
  const { slug } = await params;
  const drip = getCocktailBySlug(slug);
  if (!drip) notFound();

  // Other drips in the same category — surfaced as "Related Drips".
  const related = IV_COCKTAILS.filter(
    (c) => c.category === drip.category && c.name !== drip.name,
  ).slice(0, 3);

  // Product structured data for the drip itself.
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${drip.name} IV Therapy`,
    description: drip.description,
    image: [`${SITE_URL}${drip.image}`],
    brand: { "@type": "Brand", name: "Skilled Visits" },
    offers: {
      "@type": "Offer",
      price: drip.price.replace(/[^0-9.]/g, ""),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/services/iv-therapy/${cocktailSlug(drip.name)}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Hero */}
      <section className="section-dark relative isolate -mt-20 overflow-hidden md:-mt-24">
        <div aria-hidden className="absolute inset-0 -z-10 brand-glow" />

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-12 pt-32 md:grid-cols-12 md:px-8 md:pt-44">
          <div className="md:col-span-7">
            <Link
              href="/services/iv-therapy"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-strong)] transition hover:text-brand-700"
            >
              <ArrowRight className="h-3 w-3 rotate-180" />
              IV Therapy Menu
            </Link>
            <div className="mt-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-brand-700">
              <Sparkles className="h-3.5 w-3.5" strokeWidth={1.75} />
              {drip.category}
            </div>
            <h1 className="font-display mt-4 text-[44px] leading-[0.98] tracking-tight text-[color:var(--foreground)] sm:text-[56px] md:text-[68px] lg:text-[76px]">
              <span className="block">{drip.name}</span>
              <span className="block font-display-italic text-brand-700">
                {drip.tagline}
              </span>
            </h1>
            <p className="mt-7 max-w-lg text-[15px] leading-relaxed text-[color:var(--foreground-muted)] md:text-base">
              {drip.description}
            </p>

            <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-2)] px-5 py-3">
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-brand-700">
                  Price
                </div>
                <div className="font-display text-2xl tracking-tight text-[color:var(--foreground)]">
                  {drip.price}
                </div>
              </div>
              {drip.infusedIn && (
                <>
                  <div className="h-10 w-px bg-[color:var(--border)]" />
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-brand-700">
                      Infused In
                    </div>
                    <div className="text-sm text-[color:var(--foreground)]">
                      {drip.infusedIn}
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href={BRAND.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-md bg-gradient-to-b from-brand-500 to-brand-700 px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] text-white shadow-[0_10px_28px_-12px_color-mix(in_oklab,var(--brand-500)_60%,transparent)] transition hover:-translate-y-0.5"
              >
                Book {drip.name}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2.5 rounded-md border border-[color:var(--border-strong)] px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] text-[color:var(--foreground)] transition hover:border-brand-500/60"
              >
                How It Works
              </Link>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-soft-lg">
              <Image
                src={drip.image}
                alt={`${drip.name} IV bag`}
                fill
                priority
                sizes="(min-width: 768px) 35vw, 80vw"
                className="object-contain p-10"
              />
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="border-y border-[color:var(--border)]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[color:var(--border)] sm:grid-cols-3 md:grid-cols-5">
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

      {/* What's inside */}
      <section className="section-cream py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <div className="eyebrow">What&apos;s Inside</div>
              <h2 className="font-display mt-5 text-3xl tracking-tight md:text-4xl">
                The active{" "}
                <span className="font-display-italic text-brand-700">
                  ingredients.
                </span>
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-[color:var(--muted-strong)]">
                Every {drip.name} infusion is built around the same core
                ingredient blend. Your clinician will review your medical
                history and confirm the protocol is appropriate before the
                visit begins.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {drip.benefits.map((b) => (
                  <div
                    key={b}
                    className="flex items-center gap-4 rounded-2xl border border-[color:var(--border)] bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-brand-500/30 hover:shadow-soft-lg"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-500/30 bg-brand-50 text-brand-700">
                      <Beaker className="h-4 w-4" strokeWidth={1.7} />
                    </span>
                    <div className="font-display text-[15px] tracking-tight text-[color:var(--foreground)] md:text-base">
                      {b}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How the visit works */}
      <section className="section-cream pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="eyebrow">How the Visit Works</div>
            <h2 className="font-display mt-5 text-3xl tracking-tight md:text-4xl">
              Concierge from{" "}
              <span className="font-display-italic text-brand-700">
                start to finish.
              </span>
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                num: "01",
                title: "Book",
                body: "Reserve online or call us. Same-day appointments are routine.",
              },
              {
                num: "02",
                title: "Screen",
                body: "Your clinician reviews medical history and vitals on arrival.",
              },
              {
                num: "03",
                title: "Infuse",
                body: `${drip.name} runs over 30 to 60 minutes while you relax.`,
              },
              {
                num: "04",
                title: "Recover",
                body: "Most clients feel the effects within an hour of completion.",
              },
            ].map((s) => (
              <div
                key={s.num}
                className="flex flex-col gap-5 rounded-2xl border border-[color:var(--border)] bg-white p-7 shadow-soft transition hover:-translate-y-0.5 hover:border-brand-500/30"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-400/40 bg-brand-500/10 font-display text-sm text-brand-700">
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

      {/* Related drips */}
      {related.length > 0 && (
        <section className="section-cream pb-20 md:pb-28">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="flex items-end justify-between gap-6">
              <div className="max-w-xl">
                <div className="eyebrow">More from {drip.category}</div>
                <h2 className="font-display mt-5 text-3xl tracking-tight md:text-4xl">
                  Other drips you{" "}
                  <span className="font-display-italic text-brand-700">
                    might consider.
                  </span>
                </h2>
              </div>
              <Link
                href="/services/iv-therapy"
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-brand-700"
              >
                Full menu
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.name}
                  href={`/services/iv-therapy/${cocktailSlug(r.name)}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-soft-lg"
                >
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-brand-50 via-white to-[color:var(--surface-2)]">
                    <Image
                      src={r.image}
                      alt={r.name}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg leading-tight tracking-tight text-[color:var(--foreground)]">
                        {r.name}
                      </h3>
                      <div className="font-display text-base tracking-tight text-brand-700">
                        {r.price}
                      </div>
                    </div>
                    <p className="font-display italic text-[12px] leading-snug text-brand-700">
                      {r.tagline}
                    </p>
                    <p className="mt-auto text-[12.5px] leading-relaxed text-[color:var(--muted-strong)]">
                      {r.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10 brand-glow-soft" />
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between md:gap-12 md:px-8 md:py-20">
          <div>
            <div className="text-[11px] uppercase tracking-[0.32em] text-brand-700">
              Ready to Book?
            </div>
            <h2 className="font-display mt-5 text-3xl leading-[1.02] tracking-tight text-[color:var(--foreground)] md:text-5xl">
              Book {drip.name}{" "}
              <span className="font-display-italic text-brand-700">today.</span>
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[color:var(--foreground-muted)]">
              Concierge mobile IV therapy delivered to your home, hotel, office,
              or yacht across South Florida and New York.
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
              <Phone className="h-3.5 w-3.5 text-brand-700" />
              {BRAND.phoneFL}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Check, ArrowRight, ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/content";
import { LuxButton } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { CTA } from "@/components/home/cta";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return {};
  return { title: s.name, description: s.tagline };
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const otherServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-12 md:pb-28 md:pt-16">
        <div aria-hidden className="absolute inset-0 -z-10 brand-glow opacity-80" />
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-[color:var(--muted-strong)] transition-colors hover:text-brand-700"
            >
              <ArrowRight className="h-3.5 w-3.5 rotate-180" />
              All services
            </Link>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 items-start gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-6 md:sticky md:top-28">
              <Reveal>
                <Eyebrow>{service.category}</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="font-display mt-6 text-5xl leading-[1.02] tracking-tight md:text-7xl">
                  {service.name}
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-5 text-xl leading-snug text-gradient italic font-display">
                  {service.tagline}
                </p>
              </Reveal>
              <Reveal delay={0.22}>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-[color:var(--muted-strong)]">
                  {service.description}
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <ul className="mt-10 space-y-3">
                  {service.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <span className="mt-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-brand-50 border border-brand-200">
                        <Check className="h-3 w-3 text-brand-700" />
                      </span>
                      <span className="text-foreground">{h}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.38}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <LuxButton href="/contact" size="lg" withArrow>
                    Book {service.name}
                  </LuxButton>
                  <LuxButton href="/how-it-works" variant="outline">
                    How it works
                  </LuxButton>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15} className="md:col-span-6">
              <div className="relative">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full border border-brand-200"
                />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-[color:var(--border-strong)] bg-white shadow-soft-lg">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    priority
                    className="object-cover"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-tr from-brand-700/10 via-transparent to-transparent mix-blend-multiply"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-28 md:px-8">
        <div className="lux-divider mb-20" />
        <Reveal>
          <h2 className="font-display text-3xl tracking-tight md:text-5xl">
            You might also consider
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {otherServices.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-soft transition-all duration-500 hover:-translate-y-0.5 hover:shadow-soft-lg hover:border-brand-200"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-tr from-brand-700/12 via-transparent to-transparent mix-blend-multiply"
                  />
                </div>
                <div className="flex items-start justify-between gap-3 p-6">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-brand-700">
                      {s.category}
                    </div>
                    <h3 className="mt-2 font-display text-2xl">{s.name}</h3>
                  </div>
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[color:var(--border)] bg-white text-brand-700 transition-all duration-300 group-hover:border-brand-400 group-hover:bg-brand-500 group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}

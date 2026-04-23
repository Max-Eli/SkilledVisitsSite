import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import { SERVICES } from "@/lib/content";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { CTA } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "IV therapy, injectables, wellness shots, rapid testing and mobile phlebotomy — delivered to your door by licensed clinicians.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="The Full Menu"
        title="Clinical care,"
        accent="designed like a suite."
        description="Every service is administered by a licensed professional and adjusted to you — because wellness isn't one-size-fits-all."
      />

      <section className="mx-auto max-w-7xl px-5 pb-28 md:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.08}>
              <Link
                href={`/services/${s.slug}`}
                className="group relative block h-full overflow-hidden rounded-3xl border border-subtle bg-card-lux"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute left-4 top-4 text-[10px] uppercase tracking-[0.22em] text-brand-200 px-3 py-1 rounded-full bg-background/40 backdrop-blur-sm border border-white/10">
                    {s.category}
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4 p-6 md:p-7">
                  <div>
                    <h3 className="font-display text-2xl leading-tight">{s.name}</h3>
                    <p className="mt-2 text-sm text-muted">{s.tagline}</p>
                  </div>
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-subtle bg-white/[0.04] transition-all duration-300 group-hover:border-brand-400/70 group-hover:bg-brand-500/20">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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

import Image from "next/image";
import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { SERVICE_AREAS } from "@/lib/content";
import { PageHero } from "@/components/page-hero";
import { LuxButton } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { CTA } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "Where we serve",
  description:
    "Concierge in-home wellness across Florida (Miami-Dade, Broward, Palm Beach) and New York (all five boroughs).",
};

export default function ServiceAreas() {
  return (
    <>
      <PageHero
        eyebrow="Where We Serve"
        title="Two cities."
        accent="One uncompromising standard."
        description="Available 24/7 across Florida and New York. If you're near one of the regions below, we'll be at your door."
      />

      <section className="mx-auto max-w-7xl px-5 pb-28 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {Object.entries(SERVICE_AREAS).map(([region, data], i) => (
            <Reveal key={region} delay={i * 0.1}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-soft transition-all duration-500 hover:-translate-y-0.5 hover:shadow-soft-lg hover:border-brand-200">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={data.hero}
                    alt={region}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-tr from-brand-700/15 via-transparent to-transparent mix-blend-multiply"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white via-white/55 to-transparent"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex items-end p-8 md:p-10">
                    <h3 className="font-display text-5xl tracking-tight text-foreground md:text-6xl">
                      {region}
                    </h3>
                  </div>
                </div>

                <div className="p-8 md:p-10">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-brand-700">
                    Areas covered
                  </div>
                  <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-foreground">
                    {data.cities.map((c) => (
                      <li key={c} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-brand-500" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap items-center gap-4 justify-between">
                    <a
                      href={`tel:${data.phone.replace(/\D/g, "")}`}
                      className="inline-flex items-center gap-2 text-foreground hover:text-brand-700 transition"
                    >
                      <Phone className="h-4 w-4 text-brand-500" />
                      {data.phone}
                    </a>
                    <LuxButton href="/contact" size="sm" withArrow>
                      Book in {region}
                    </LuxButton>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface-2)] p-8 md:p-12 text-center">
            <h3 className="font-display text-3xl md:text-4xl">
              Outside our current regions?
            </h3>
            <p className="mt-4 max-w-2xl mx-auto text-[color:var(--muted-strong)] leading-relaxed">
              We&apos;re expanding carefully and thoughtfully. Reach out — in select
              cases we offer event bookings and travel service for our existing
              clients.
            </p>
            <div className="mt-6 inline-flex">
              <LuxButton href="/contact" variant="outline" withArrow>
                Inquire
              </LuxButton>
            </div>
          </div>
        </Reveal>
      </section>
      <CTA />
    </>
  );
}

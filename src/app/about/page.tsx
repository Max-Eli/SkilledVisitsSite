import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { LuxButton } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { Stats } from "@/components/home/stats";
import { CTA } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "Skilled Visits was founded on a single idea: that expert wellness should come to you. Meet the practice, the team, and the standard behind every visit.",
};

const VALUES = [
  {
    title: "Licensed. Always.",
    body: "Every treatment is delivered by a board-certified MD, nurse practitioner, or RN. No exceptions. We credential rigorously and work only with clinicians whose care we'd want for ourselves.",
  },
  {
    title: "Considered, not clinical.",
    body: "Clinical care can still feel human. We prioritize calm environments, unhurried consultations, and the kind of attentiveness that makes a treatment feel like a ritual.",
  },
  {
    title: "Discreet by design.",
    body: "Our mobile suite parks without branding. Our clinicians arrive without fanfare. Your wellness is no one's business but your own.",
  },
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Practice"
        title="The concierge standard"
        accent="for in-home wellness."
        description="We started Skilled Visits because waiting rooms don't belong in wellness. What we built is a private practice that arrives at your door — with the same clinical rigor and a much better experience."
      />

      <section className="mx-auto max-w-7xl px-5 pb-28 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-6">
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -left-6 -top-6 h-32 w-32 rounded-full border border-brand-200"
              />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-[color:var(--border-strong)] bg-white shadow-soft-lg">
                <Image
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1400&q=80"
                  alt="Skilled Visits clinician"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-tr from-brand-700/10 via-transparent to-transparent mix-blend-multiply"
                />
              </div>
            </div>
          </Reveal>
          <div className="md:col-span-6">
            <Reveal>
              <h2 className="font-display text-4xl leading-[1.05] tracking-tight md:text-5xl">
                A new kind of practice.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-[color:var(--muted-strong)] leading-relaxed">
                Skilled Visits is a concierge wellness practice serving Florida
                and New York. Our clinicians are licensed, credentialed, and
                obsessive about care — the kind of professionals who chose this
                model because they believe medicine works better when it&apos;s
                considered, unhurried, and private.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-4 text-[color:var(--muted-strong)] leading-relaxed">
                Whether you&apos;re looking to recover from a long week, optimize for
                a demanding schedule, or explore aesthetic refinement with an
                artist&apos;s hand — we design protocols around your life, not ours.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <div className="mt-10">
                <LuxButton href="/services" variant="outline" withArrow>
                  Explore our services
                </LuxButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Stats />

      <section className="mx-auto max-w-7xl px-5 pb-28 md:px-8">
        <Reveal>
          <h2 className="font-display text-4xl leading-tight tracking-tight md:text-5xl">
            What we stand for.
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white p-8 md:p-10 shadow-soft transition hover:shadow-soft-lg hover:-translate-y-0.5">
                <div className="font-display text-5xl text-gradient leading-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-6 font-display text-2xl md:text-3xl">{v.title}</h3>
                <p className="mt-4 text-[color:var(--muted-strong)] leading-relaxed">{v.body}</p>
                <div
                  aria-hidden
                  className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent md:inset-x-10"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}

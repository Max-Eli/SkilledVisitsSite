import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { LuxButton } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { Gift, UserPlus, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Referrals",
  description:
    "Refer a friend to Skilled Visits and receive $50 off your next treatment. Our best clients come from introductions — thank you for yours.",
};

const STEPS = [
  {
    icon: UserPlus,
    title: "Share your clinician",
    body: "Introduce a friend, colleague, or family member. We'll extend the same concierge standard you know.",
  },
  {
    icon: Sparkles,
    title: "They book a visit",
    body: "After their first treatment, your referral credit is activated automatically — no codes or paperwork.",
  },
  {
    icon: Gift,
    title: "You receive $50 off",
    body: "Applied to your next treatment. Stack referrals — there's no cap.",
  },
];

export default function ReferralsPage() {
  return (
    <>
      <PageHero
        eyebrow="Referrals"
        title="Share the ritual."
        accent="Receive the reward."
        description="Our best clients come from introductions. When you send someone our way, we thank you with $50 off your next treatment — on every referral."
      >
        <LuxButton href="/contact" size="lg" withArrow>
          Refer a friend
        </LuxButton>
      </PageHero>

      <section className="mx-auto max-w-7xl px-5 pb-28 md:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white p-8 md:p-10 shadow-soft transition hover:shadow-soft-lg hover:-translate-y-0.5">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-50 border border-brand-200">
                      <Icon className="h-5 w-5 text-brand-700" strokeWidth={1.75} />
                    </div>
                    <div className="font-display text-5xl text-gradient leading-none">
                      0{i + 1}
                    </div>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl">{s.title}</h3>
                  <p className="text-[color:var(--muted-strong)] leading-relaxed">{s.body}</p>
                  <div
                    aria-hidden
                    className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand-300 to-transparent md:inset-x-10"
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-28 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] md:rounded-[36px] border border-[color:var(--border-strong)] bg-[color:var(--surface-2)] p-10 md:p-16">
            <div
              aria-hidden
              className="absolute inset-0 opacity-80"
              style={{
                background:
                  "radial-gradient(50% 60% at 100% 0%, color-mix(in oklab, var(--brand-300) 45%, transparent), transparent 70%), radial-gradient(40% 50% at 0% 100%, color-mix(in oklab, var(--brand-200) 60%, transparent), transparent 70%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-32 h-[500px] w-[500px] rounded-full border border-brand-300/60"
            />

            <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-brand-700">
                  Influencer program
                </div>
                <h3 className="font-display mt-4 text-4xl leading-tight md:text-5xl">
                  Have a platform?<br />
                  <span className="italic text-gradient">Partner with us.</span>
                </h3>
                <p className="mt-5 max-w-md text-[color:var(--muted-strong)] leading-relaxed">
                  A selective program for creators, athletes, and hosts who
                  embody our standard. Complimentary services, custom protocols,
                  and long-term partnerships.
                </p>
              </div>
              <div className="flex md:justify-end">
                <LuxButton href="/contact" size="lg" withArrow>
                  Apply to partner
                </LuxButton>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

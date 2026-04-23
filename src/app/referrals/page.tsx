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
                <div className="flex h-full flex-col gap-5 rounded-3xl border border-subtle bg-card-lux p-8 md:p-10">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-500/15 border border-brand-400/30">
                      <Icon className="h-5 w-5 text-brand-300" />
                    </div>
                    <div className="font-display text-5xl text-gradient leading-none">
                      0{i + 1}
                    </div>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl">{s.title}</h3>
                  <p className="text-muted leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-28 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-subtle bg-card-lux p-10 md:p-16">
            <div
              aria-hidden
              className="absolute inset-0 opacity-70"
              style={{
                background:
                  "radial-gradient(50% 60% at 50% 0%, color-mix(in oklab, var(--brand-500) 28%, transparent), transparent 70%)",
              }}
            />
            <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-2">
              <div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-brand-300">
                  Influencer program
                </div>
                <h3 className="font-display mt-4 text-4xl leading-tight md:text-5xl">
                  Have a platform?<br />
                  <span className="italic text-gradient">Partner with us.</span>
                </h3>
                <p className="mt-5 max-w-md text-muted leading-relaxed">
                  A selective program for creators, athletes, and hosts who
                  embody our standard. Complimentary services, custom protocols,
                  and long-term partnerships.
                </p>
              </div>
              <div className="flex md:justify-end">
                <LuxButton href="/contact" size="lg" variant="outline" withArrow>
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

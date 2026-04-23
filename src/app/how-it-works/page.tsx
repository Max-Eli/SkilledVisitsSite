import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Process } from "@/components/home/process";
import { CTA } from "@/components/home/cta";
import { Reveal } from "@/components/motion/reveal";
import { Calendar, MapPin, Leaf, HeartPulse } from "lucide-react";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "From consultation to care in four considered steps — licensed clinicians, 24/7 availability, and a process built entirely around your schedule.",
};

const DETAIL = [
  {
    icon: Calendar,
    title: "A considered intake",
    body: "Your clinician reviews your medical history, discusses goals, and explains every option. No templates, no rushed calls.",
  },
  {
    icon: MapPin,
    title: "Come to you — or to our suite",
    body: "Most visits happen in your home, office, or hotel. Prefer privacy? Our luxury mobile suite parks discreetly where you need it.",
  },
  {
    icon: Leaf,
    title: "An unhurried treatment",
    body: "Calming environment, hospital-grade cleanliness, and time for conversation. Our clinicians stay until you're comfortable.",
  },
  {
    icon: HeartPulse,
    title: "Continued aftercare",
    body: "A follow-up virtual check-in, detailed aftercare notes, and direct access to your clinician whenever you have a question.",
  },
];

export default function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="The Experience"
        title="A process built"
        accent="around you."
        description="Concierge wellness should feel as considered as the treatment itself. Here's what working with us looks like."
      />
      <Process />

      <section className="mx-auto max-w-7xl px-5 pb-28 md:px-8">
        <div className="lux-divider mb-20" />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {DETAIL.map((d, i) => {
            const Icon = d.icon;
            return (
              <Reveal key={d.title} delay={(i % 2) * 0.08}>
                <div className="flex h-full flex-col gap-4 rounded-3xl border border-subtle bg-card-lux p-8 md:p-10">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-500/15 border border-brand-400/30">
                    <Icon className="h-5 w-5 text-brand-300" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl">{d.title}</h3>
                  <p className="text-muted leading-relaxed">{d.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>
      <CTA />
    </>
  );
}

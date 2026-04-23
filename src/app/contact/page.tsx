import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { BRAND, SERVICES } from "@/lib/content";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Speak with a Skilled Visits clinician. Call us, email us, or leave a note — we respond around the clock.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's speak."
        accent="We'll be in touch quickly."
        description="Tell us a little about what you're looking for, and a clinician will follow up to design your protocol. Or call us — we answer 24/7."
      />

      <section className="mx-auto max-w-7xl px-5 pb-28 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <div className="rounded-3xl border border-subtle bg-card-lux p-8 md:p-10">
                <h3 className="font-display text-2xl md:text-3xl">Direct lines</h3>
                <ul className="mt-8 space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-500/15 border border-brand-400/30">
                      <Phone className="h-4 w-4 text-brand-300" />
                    </div>
                    <div className="text-sm">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-brand-300">
                        Florida
                      </div>
                      <a
                        href={`tel:${BRAND.phoneFL.replace(/\D/g, "")}`}
                        className="mt-1 block text-lg text-foreground hover:text-brand-300 transition"
                      >
                        {BRAND.phoneFL}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-500/15 border border-brand-400/30">
                      <Phone className="h-4 w-4 text-brand-300" />
                    </div>
                    <div className="text-sm">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-brand-300">
                        New York
                      </div>
                      <a
                        href={`tel:${BRAND.phoneNY.replace(/\D/g, "")}`}
                        className="mt-1 block text-lg text-foreground hover:text-brand-300 transition"
                      >
                        {BRAND.phoneNY}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-500/15 border border-brand-400/30">
                      <Mail className="h-4 w-4 text-brand-300" />
                    </div>
                    <div className="text-sm">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-brand-300">
                        Email
                      </div>
                      <a
                        href={`mailto:${BRAND.email}`}
                        className="mt-1 block text-lg text-foreground hover:text-brand-300 transition"
                      >
                        {BRAND.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-500/15 border border-brand-400/30">
                      <Clock className="h-4 w-4 text-brand-300" />
                    </div>
                    <div className="text-sm">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-brand-300">
                        Hours
                      </div>
                      <div className="mt-1 text-lg text-foreground">Available 24 / 7</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-500/15 border border-brand-400/30">
                      <MapPin className="h-4 w-4 text-brand-300" />
                    </div>
                    <div className="text-sm">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-brand-300">
                        Regions
                      </div>
                      <div className="mt-1 text-lg text-foreground">
                        Florida · New York
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal delay={0.1}>
              <ContactForm services={SERVICES.map((s) => s.name)} />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

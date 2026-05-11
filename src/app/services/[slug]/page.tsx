import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Droplet,
  Truck,
  Stethoscope,
} from "lucide-react";
import { SERVICES } from "@/lib/content";
import { IVMenuList } from "@/components/services/iv-menu-list";
import { WellnessShotsMenu } from "@/components/services/wellness-shots-menu";
import { BloodPanelsMenu } from "@/components/services/blood-panels-menu";
import { RapidTestsMenu } from "@/components/services/rapid-tests-menu";

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

const TRUST = [
  { icon: ShieldCheck, label: "Licensed Nurses" },
  { icon: Clock, label: "Same-Day Appointments" },
  { icon: Droplet, label: "Medical-Grade" },
  { icon: Truck, label: "We Come To You" },
  { icon: Stethoscope, label: "Physician Oversight" },
];

const SUBLINES: Record<string, { heading: string; accent: string; tagline: string }> = {
  "iv-therapy": {
    heading: "IV Therapy",
    accent: "Menu",
    tagline:
      "Advanced IV infusions designed to hydrate, restore, and optimize your health — delivered to you by licensed medical professionals.",
  },
  "wellness-shots": {
    heading: "Wellness",
    accent: "Shots",
    tagline:
      "Our wellness shots are designed to deliver fast, effective support for energy, immunity, recovery, and overall wellness — in minutes.",
  },
  "blood-draws": {
    heading: "Concierge",
    accent: "Blood Work",
    tagline:
      "Professional lab testing delivered directly to you, providing valuable insights to help you take control of your health.",
  },
  "rapid-tests": {
    heading: "Rapid",
    accent: "Tests",
    tagline:
      "Same-day diagnostic testing in the comfort of your home, hotel, or office — discreet and accurate.",
  },
  "virtual-consultation": {
    heading: "Virtual",
    accent: "Consultation",
    tagline:
      "Expert clinician guidance before we arrive — to design your perfect protocol.",
  },
};

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const sub = SUBLINES[service.slug] ?? {
    heading: service.name,
    accent: "",
    tagline: service.tagline,
  };

  return (
    <>
      {/* Hero */}
      <section className="section-dark relative isolate -mt-20 overflow-hidden md:-mt-24">
        <div aria-hidden className="absolute inset-0 -z-10 brand-glow" />

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-12 pt-32 md:grid-cols-12 md:px-8 md:pt-44">
          <div className="md:col-span-7">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-strong)] transition hover:text-brand-700"
            >
              <ArrowRight className="h-3 w-3 rotate-180" />
              Services
            </Link>
            <h1 className="font-display mt-6 text-[52px] leading-[0.98] tracking-tight text-[color:var(--foreground)] sm:text-[64px] md:text-[80px]">
              <span className="block">{sub.heading}</span>
              {sub.accent && (
                <span className="block font-display-italic text-brand-700">
                  {sub.accent}
                </span>
              )}
            </h1>
            <p className="mt-7 max-w-md text-[15px] leading-relaxed text-[color:var(--foreground-muted)] md:text-base">
              {sub.tagline}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-md bg-gradient-to-b from-brand-500 to-brand-700 px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] text-white shadow-[0_10px_28px_-12px_color-mix(in_oklab,var(--brand-500)_60%,transparent)] transition hover:-translate-y-0.5"
              >
                Book {service.name}
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

          <div className="relative md:col-span-5">
            <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-soft-lg">
              <Image
                src={service.image}
                alt={service.name}
                fill
                sizes="(min-width: 768px) 35vw, 80vw"
                className="object-contain p-10"
              />
            </div>
          </div>
        </div>

        {/* Trust badges row */}
        <div className="border-y border-[color:var(--border)]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-[color:var(--border)] sm:grid-cols-3 md:grid-cols-5">
            {TRUST.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center justify-center gap-3 px-5 py-6"
              >
                <Icon className="h-4 w-4 shrink-0 text-brand-700" strokeWidth={1.6} />
                <span className="text-[10px] uppercase tracking-[0.18em] text-[color:var(--foreground)] md:text-[11px]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service-specific menus */}
      {service.cocktails && service.cocktails.length > 0 && (
        <IVMenuList cocktails={service.cocktails} />
      )}
      {service.slug === "wellness-shots" && <WellnessShotsMenu />}
      {service.slug === "blood-draws" && <BloodPanelsMenu />}
      {service.slug === "rapid-tests" && <RapidTestsMenu />}

      {/* Bottom CTA */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10 brand-glow-soft" />
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-5 py-16 md:flex-row md:items-center md:justify-between md:gap-12 md:px-8 md:py-20">
          <div>
            <div className="text-[11px] uppercase tracking-[0.32em] text-brand-700">
              Ready to Begin?
            </div>
            <h2 className="font-display mt-5 text-3xl leading-[1.02] tracking-tight text-[color:var(--foreground)] md:text-5xl">
              Ready to Take Control{" "}
              <span className="font-display-italic text-brand-700">
                of Your Health?
              </span>
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[color:var(--foreground-muted)]">
              Book your service and experience concierge wellness, delivered.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 rounded-md bg-gradient-to-b from-brand-500 to-brand-700 px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-white shadow-[0_10px_28px_-12px_color-mix(in_oklab,var(--brand-500)_60%,transparent)] transition hover:-translate-y-0.5"
          >
            Book Now
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>
    </>
  );
}

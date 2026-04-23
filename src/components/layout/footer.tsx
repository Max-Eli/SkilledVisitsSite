import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.25-1.5 1.55-1.5H16.5V4.4c-.3 0-1.2-.1-2.25-.1-2.2 0-3.75 1.35-3.75 3.8v2.4H8v3h2.5V21z" />
    </svg>
  );
}
import { BRAND, NAV_LINKS, SERVICES } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/[0.06] bg-surface/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px lux-divider"
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-20 md:grid-cols-12 md:px-8">
        <div className="md:col-span-4">
          <Image
            src="/brand/logo.svg"
            alt="Skilled Visits"
            width={170}
            height={38}
            className="h-8 w-auto"
          />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            Private concierge wellness, delivered to your door. Licensed clinicians,
            FDA-approved protocols, 24/7 across Florida and New York.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={BRAND.social.instagram}
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-subtle bg-white/[0.03] text-foreground/70 transition hover:border-brand-400/60 hover:text-foreground"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={BRAND.social.facebook}
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-subtle bg-white/[0.03] text-foreground/70 transition hover:border-brand-400/60 hover:text-foreground"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-display text-lg text-foreground">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-muted hover:text-foreground transition">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-display text-lg text-foreground">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-muted hover:text-foreground transition"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-display text-lg text-foreground">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
              <div>
                <div className="text-foreground/90">Florida · {BRAND.phoneFL}</div>
                <div className="text-foreground/90">New York · {BRAND.phoneNY}</div>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-brand-400" />
              <a href={`mailto:${BRAND.email}`} className="hover:text-foreground">
                {BRAND.email}
              </a>
            </li>
            <li className="text-foreground/60">{BRAND.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.05]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-muted md:flex-row md:px-8">
          <div>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

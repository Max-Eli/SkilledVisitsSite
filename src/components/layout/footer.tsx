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
import { BRAND, NAV_LINKS, FOOTER_EXTRA_LINKS, SERVICES } from "@/lib/content";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-[color:var(--border)] bg-[color:var(--surface-2)]">
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
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-[color:var(--muted-strong)]">
            Private concierge wellness, delivered to your door. Licensed clinicians,
            FDA-approved protocols, 24/7 across Florida and New York.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={BRAND.social.instagram}
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-white text-[color:var(--muted)] transition hover:border-brand-300 hover:text-brand-700 hover:bg-brand-50"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={BRAND.social.facebook}
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-white text-[color:var(--muted)] transition hover:border-brand-300 hover:text-brand-700 hover:bg-brand-50"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-display text-lg text-foreground">Explore</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[...NAV_LINKS, ...FOOTER_EXTRA_LINKS].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[color:var(--muted)] hover:text-brand-700 transition">
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
                  className="text-[color:var(--muted)] hover:text-brand-700 transition"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-display text-lg text-foreground">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-[color:var(--muted-strong)]">
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
              <div>
                <div className="text-foreground">Florida · {BRAND.phoneFL}</div>
                <div className="text-foreground">New York · {BRAND.phoneNY}</div>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-brand-500" />
              <a href={`mailto:${BRAND.email}`} className="hover:text-brand-700">
                {BRAND.email}
              </a>
            </li>
            <li className="text-[color:var(--muted)]">{BRAND.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[color:var(--border)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-[color:var(--muted)] md:flex-row md:px-8">
          <div>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-brand-700">Privacy</Link>
            <Link href="/terms" className="hover:text-brand-700">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Clock, MapPin, Star, ArrowRight } from "lucide-react";
import {
  BRAND,
  NAV_LINKS,
  FOOTER_EXTRA_LINKS,
  SERVICES,
  GOOGLE_BUSINESS_URL,
} from "@/lib/content";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
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

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09 0-.73.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

const REGIONS = ["South Florida", "Miami", "Fort Lauderdale", "New York City", "Manhattan", "Brooklyn"];

export function Footer() {
  return (
    <footer className="relative border-t border-[color:var(--border)] bg-[color:var(--surface-2)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px lux-divider"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-20 md:grid-cols-12 md:gap-12 md:px-8">
        {/* Brand block */}
        <div className="md:col-span-4">
          <Link href="/" className="inline-flex items-center" aria-label="Skilled Visits home">
            <Image
              src="/brand/logo.svg"
              alt="Skilled Visits"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-[color:var(--muted-strong)]">
            Concierge mobile wellness, delivered to your door. Licensed
            clinicians, medical-grade ingredients, available across Florida and
            New York.
          </p>

          {/* Google rating badge */}
          <Link
            href={GOOGLE_BUSINESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 inline-flex items-center gap-2.5 rounded-full border border-[color:var(--border)] bg-white px-3.5 py-2 shadow-soft transition hover:border-brand-500/40 hover:shadow-soft-lg"
          >
            <GoogleIcon className="h-3.5 w-3.5" />
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-3 w-3 fill-brand-500 text-brand-500"
                  strokeWidth={0}
                />
              ))}
            </div>
            <div className="font-display text-sm leading-none tracking-tight text-[color:var(--foreground)]">
              5.0
            </div>
            <div className="h-2.5 w-px bg-[color:var(--border)]" />
            <div className="text-[9px] uppercase tracking-[0.22em] text-[color:var(--muted-strong)]">
              100+ Reviews
            </div>
          </Link>

          {/* Social */}
          <div className="mt-6 flex gap-2.5">
            <a
              href={BRAND.social.instagram}
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-white text-[color:var(--foreground-muted)] transition hover:border-brand-500/60 hover:text-brand-700 hover:bg-brand-50"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={BRAND.social.facebook}
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border)] bg-white text-[color:var(--foreground-muted)] transition hover:border-brand-500/60 hover:text-brand-700 hover:bg-brand-50"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Explore */}
        <div className="md:col-span-2">
          <h4 className="text-[10px] font-medium uppercase tracking-[0.22em] text-brand-700">
            Explore
          </h4>
          <ul className="mt-5 space-y-3 text-[13px]">
            {[...NAV_LINKS, ...FOOTER_EXTRA_LINKS].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-[color:var(--muted-strong)] transition hover:text-brand-700"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="md:col-span-3">
          <h4 className="text-[10px] font-medium uppercase tracking-[0.22em] text-brand-700">
            Services
          </h4>
          <ul className="mt-5 space-y-3 text-[13px]">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-[color:var(--muted-strong)] transition hover:text-brand-700"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-3">
          <h4 className="text-[10px] font-medium uppercase tracking-[0.22em] text-brand-700">
            Contact
          </h4>
          <ul className="mt-5 space-y-3">
            <li>
              <a
                href={`tel:${BRAND.phoneFL.replace(/\D/g, "")}`}
                className="group flex items-center gap-3 rounded-xl border border-[color:var(--border)] bg-white px-3 py-2.5 transition hover:-translate-y-0.5 hover:border-brand-500/40 hover:shadow-soft"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-500/30 bg-brand-50 text-brand-700">
                  <Phone className="h-3.5 w-3.5" strokeWidth={1.7} />
                </span>
                <div className="min-w-0">
                  <div className="text-[9px] uppercase tracking-[0.22em] text-brand-700">
                    Florida
                  </div>
                  <div className="text-[13px] text-[color:var(--foreground)]">
                    {BRAND.phoneFL}
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href={`tel:${BRAND.phoneNY.replace(/\D/g, "")}`}
                className="group flex items-center gap-3 rounded-xl border border-[color:var(--border)] bg-white px-3 py-2.5 transition hover:-translate-y-0.5 hover:border-brand-500/40 hover:shadow-soft"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-500/30 bg-brand-50 text-brand-700">
                  <Phone className="h-3.5 w-3.5" strokeWidth={1.7} />
                </span>
                <div className="min-w-0">
                  <div className="text-[9px] uppercase tracking-[0.22em] text-brand-700">
                    New York
                  </div>
                  <div className="text-[13px] text-[color:var(--foreground)]">
                    {BRAND.phoneNY}
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${BRAND.email}`}
                className="group flex items-center gap-3 rounded-xl border border-[color:var(--border)] bg-white px-3 py-2.5 transition hover:-translate-y-0.5 hover:border-brand-500/40 hover:shadow-soft"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand-500/30 bg-brand-50 text-brand-700">
                  <Mail className="h-3.5 w-3.5" strokeWidth={1.7} />
                </span>
                <div className="min-w-0 truncate">
                  <div className="text-[9px] uppercase tracking-[0.22em] text-brand-700">
                    Email
                  </div>
                  <div className="truncate text-[13px] text-[color:var(--foreground)]">
                    {BRAND.email}
                  </div>
                </div>
              </a>
            </li>
            <li className="flex items-center gap-2 px-1 pt-1 text-[11px] text-[color:var(--muted-strong)]">
              <Clock className="h-3.5 w-3.5 shrink-0 text-brand-700" strokeWidth={1.7} />
              {BRAND.hours}
            </li>
          </ul>
        </div>
      </div>

      {/* Service area strip */}
      <div className="border-t border-[color:var(--border)]">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-5 py-6 md:flex-row md:items-center md:gap-6 md:px-8">
          <div className="flex shrink-0 items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-brand-700">
            <MapPin className="h-3.5 w-3.5" strokeWidth={1.7} />
            Proudly Serving
          </div>
          <div className="flex flex-wrap gap-1.5">
            {REGIONS.map((r) => (
              <span
                key={r}
                className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-white px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-[color:var(--muted-strong)]"
              >
                {r}
              </span>
            ))}
            <Link
              href="/service-areas"
              className="group inline-flex items-center gap-1.5 rounded-full border border-brand-500/40 bg-brand-50 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-brand-700 transition hover:bg-brand-100"
            >
              View All
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[color:var(--border)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-[color:var(--muted)] md:flex-row md:px-8">
          <div>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-brand-700">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-brand-700">
              Terms
            </Link>
            <Link href="/referrals" className="hover:text-brand-700">
              Referrals
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

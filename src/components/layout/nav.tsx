"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { BRAND, NAV_LINKS } from "@/lib/content";
import { LuxButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "border-b border-[color:var(--border)] bg-[color:var(--background)]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-5 md:h-24 md:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Skilled Visits home">
          <Image
            src="/brand/logo.svg"
            alt="Skilled Visits"
            width={220}
            height={50}
            className="h-12 w-auto md:h-14"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "rounded-full px-3 py-2 text-[13px] uppercase tracking-[0.14em] transition-colors",
                scrolled
                  ? "text-[color:var(--foreground-muted)] hover:text-brand-700"
                  : "text-white/80 hover:text-white",
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LuxButton href={BRAND.bookingUrl}
              target="_blank"
              rel="noopener noreferrer" size="sm" withArrow>
            Book Now
          </LuxButton>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-full backdrop-blur-md transition-colors lg:hidden",
            scrolled
              ? "border border-[color:var(--border-strong)] bg-[color:var(--surface)] text-[color:var(--foreground)] shadow-soft"
              : "border border-white/40 bg-black/45 text-white shadow-[0_4px_12px_rgba(0,0,0,0.25)]",
          )}
        >
          <Menu className="h-5 w-5" strokeWidth={1.8} />
        </button>
      </div>

      {open && (
        <div className="section-dark fixed inset-0 z-[60] flex flex-col overflow-y-auto lg:hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 brand-glow opacity-50"
          />
          <div className="flex h-20 items-center justify-between px-5">
            <Image
              src="/brand/logo.svg"
              alt="Skilled Visits"
              width={260}
              height={58}
              className="h-12 w-auto"
            />
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-black/45 text-white backdrop-blur-md shadow-[0_4px_12px_rgba(0,0,0,0.25)]"
            >
              <X className="h-5 w-5" strokeWidth={1.8} />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-5 pt-8">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between gap-3 border-b border-white/10 py-4 font-display text-3xl tracking-tight text-white transition-colors hover:text-brand-300"
              >
                {l.label}
                <span
                  aria-hidden
                  className="text-brand-300 transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3 px-5 pb-10 pt-10">
            <LuxButton
              href={BRAND.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              withArrow
              onClick={() => setOpen(false)}
            >
              Book Now
            </LuxButton>
            <a
              href={`tel:${BRAND.phoneFL.replace(/\D/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 py-3 text-sm text-white backdrop-blur-md transition hover:border-brand-400/50 hover:bg-white/10"
            >
              <Phone className="h-4 w-4 text-brand-300" />
              {BRAND.phoneFL}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

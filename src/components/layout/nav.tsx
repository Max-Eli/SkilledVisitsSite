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
          ? "border-b border-white/[0.06] bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 md:h-20 md:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Skilled Visits home">
          <Image
            src="/brand/logo.svg"
            alt="Skilled Visits"
            width={160}
            height={36}
            className="h-7 w-auto md:h-8"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-foreground/75 transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${BRAND.phoneFL.replace(/\D/g, "")}`}
            className="inline-flex items-center gap-2 text-sm text-foreground/75 transition-colors hover:text-foreground"
          >
            <Phone className="h-3.5 w-3.5 text-brand-400" />
            {BRAND.phoneFL}
          </a>
          <LuxButton href="/contact" size="sm" withArrow>
            Book a visit
          </LuxButton>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-subtle bg-white/[0.03] lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-background/95 backdrop-blur-2xl lg:hidden">
          <div className="flex h-16 items-center justify-between px-5">
            <Image src="/brand/logo.svg" alt="Skilled Visits" width={140} height={32} className="h-7 w-auto" />
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-subtle bg-white/[0.03]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-5 pt-6">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl tracking-tight text-foreground/90 py-3 border-b border-white/[0.05]"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto px-5 pb-10 pt-8 flex flex-col gap-3">
            <LuxButton href="/contact" size="lg" withArrow onClick={() => setOpen(false)}>
              Book a visit
            </LuxButton>
            <a
              href={`tel:${BRAND.phoneFL.replace(/\D/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-subtle py-3 text-sm"
            >
              <Phone className="h-4 w-4 text-brand-400" /> {BRAND.phoneFL}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

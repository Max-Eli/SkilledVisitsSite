"use client";

import { motion } from "motion/react";
import { Download, ShieldCheck } from "lucide-react";
import type { Cocktail, CocktailCategory } from "@/lib/content";
import { COCKTAIL_CATEGORIES, MENU_PDF } from "@/lib/content";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/motion/reveal";
import { AccentText } from "@/components/ui/accent-text";

export function IVMenuList({ cocktails }: { cocktails: Cocktail[] }) {
  const grouped = COCKTAIL_CATEGORIES.map((cat) => ({
    category: cat,
    items: cocktails.filter((c) => c.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>The Full Menu</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight md:text-5xl">
                Every infusion,<br />
                <AccentText className="text-gradient">every ingredient.</AccentText>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <a
                href={MENU_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-[color:var(--border-strong)] bg-white px-5 py-3 text-sm text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700"
              >
                <Download className="h-4 w-4" strokeWidth={1.75} />
                <span>Download menu (PDF)</span>
              </a>
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-strong)]">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" strokeWidth={1.75} />
                <span>We accept insurance</span>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 space-y-16 md:space-y-20">
          {grouped.map(({ category, items }, gi) => (
            <CategoryGroup
              key={category}
              category={category}
              items={items}
              groupIndex={gi}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryGroup({
  category,
  items,
  groupIndex,
}: {
  category: CocktailCategory;
  items: Cocktail[];
  groupIndex: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: groupIndex * 0.05, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mb-8 flex items-baseline gap-4">
        <div className="text-[10px] uppercase tracking-[0.28em] text-brand-700">
          0{groupIndex + 1}
        </div>
        <h3 className="font-display text-2xl tracking-tight md:text-3xl">
          {category}
        </h3>
        <div className="hidden flex-1 border-b border-dashed border-[color:var(--border)] sm:block" />
      </div>

      <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-soft">
        <ul className="divide-y divide-[color:var(--border)]">
          {items.map((item) => (
            <li
              key={item.name}
              className="grid grid-cols-1 gap-4 px-6 py-7 transition-colors hover:bg-[color:var(--surface)] md:grid-cols-12 md:gap-6 md:px-8 md:py-8"
            >
              <div className="md:col-span-4">
                <div className="font-display text-xl tracking-tight md:text-2xl">
                  {item.name}
                </div>
                <p className="mt-1.5 font-display italic text-sm text-brand-700">
                  {item.tagline}
                </p>
              </div>
              <div className="md:col-span-6">
                <div className="text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted-strong)]">
                  Active Nutrients
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {item.benefits.map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface-2)] px-2.5 py-0.5 text-[10px] uppercase tracking-[0.16em] text-brand-700"
                    >
                      {b}
                    </span>
                  ))}
                </div>
                {item.infusedIn && (
                  <div className="mt-3 text-[11px] text-[color:var(--muted)]">
                    Infused in: <span className="text-foreground">{item.infusedIn}</span>
                  </div>
                )}
              </div>
              <div className="flex items-start justify-between gap-3 md:col-span-2 md:justify-end">
                <div className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
                  {item.price}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

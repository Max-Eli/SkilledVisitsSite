"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Download, Check } from "lucide-react";
import type { Cocktail, CocktailCategory } from "@/lib/content";
import { COCKTAIL_CATEGORIES, MENU_PDF } from "@/lib/content";
import { IVCategoryCarousel } from "@/components/services/iv-category-carousel";

export function IVMenuList({ cocktails }: { cocktails: Cocktail[] }) {
  // Group cocktails by category, then drop categories with nothing in them.
  const grouped = COCKTAIL_CATEGORIES.map((cat) => ({
    category: cat,
    items: cocktails.filter((c) => c.category === cat),
  })).filter((g) => g.items.length > 0);

  const [selected, setSelected] = useState<CocktailCategory>(grouped[0].category);
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Close the dropdown when clicking outside or pressing Escape.
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const activeGroup = grouped.find((g) => g.category === selected) ?? grouped[0];

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Page header */}
        <div className="flex flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-end md:px-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="eyebrow"
            >
              The Full Menu
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display mt-5 text-4xl leading-[1.05] tracking-tight text-[color:var(--foreground)] md:text-5xl lg:text-6xl"
            >
              Every infusion,
              <br />
              <span className="font-display-italic text-brand-700">
                every ingredient.
              </span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 h-px w-16 origin-left bg-brand-500/80"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start gap-3 md:items-end"
          >
            <a
              href={MENU_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-[color:var(--border-strong)] bg-white px-5 py-3 text-sm text-[color:var(--foreground)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/60 hover:bg-brand-50 hover:text-brand-700"
            >
              <Download className="h-4 w-4" strokeWidth={1.75} />
              Download Menu (PDF)
            </a>
          </motion.div>
        </div>

        {/* Category dropdown */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col items-center gap-3 px-5 md:mt-16 md:px-8"
        >
          <div className="text-[10px] font-medium uppercase tracking-[0.28em] text-[color:var(--muted-strong)]">
            Browse by Category
          </div>

          <div ref={wrapperRef} className="relative w-full max-w-[420px]">
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-haspopup="listbox"
              aria-expanded={open}
              aria-label="Select IV therapy category"
              className="group inline-flex w-full items-center justify-between gap-4 rounded-full border border-[color:var(--border-strong)] bg-white px-5 py-3.5 text-left shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/60 hover:shadow-soft-lg md:px-6 md:py-4"
            >
              <span className="flex items-center gap-3 md:gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-brand-500 to-brand-700 font-display text-[11px] text-white shadow-[0_4px_12px_-4px_color-mix(in_oklab,var(--brand-500)_55%,transparent)] md:h-10 md:w-10 md:text-xs">
                  0{grouped.findIndex((g) => g.category === selected) + 1}
                </span>
                <span className="font-display text-xl leading-none tracking-tight text-[color:var(--foreground)] md:text-2xl">
                  {selected}
                </span>
              </span>
              <span className="flex shrink-0 items-center gap-2 md:gap-3">
                <span className="hidden text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)] sm:inline">
                  {activeGroup.items.length} Drips
                </span>
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface-2)] transition-transform duration-300 ${
                    open ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown
                    className="h-3.5 w-3.5 text-brand-700"
                    strokeWidth={2}
                  />
                </span>
              </span>
            </button>

            <AnimatePresence>
              {open && (
                <motion.ul
                  role="listbox"
                  aria-label="IV therapy categories"
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 right-0 z-30 mt-2 origin-top overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white p-1.5 shadow-soft-lg"
                >
                  {grouped.map((g, gi) => {
                    const isActive = g.category === selected;
                    return (
                      <li key={g.category}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={isActive}
                          onClick={() => {
                            setSelected(g.category);
                            setOpen(false);
                          }}
                          className={`group flex w-full items-center justify-between gap-3 rounded-full px-4 py-3 text-left transition md:px-5 ${
                            isActive
                              ? "bg-gradient-to-r from-brand-50 to-brand-100/60"
                              : "hover:bg-[color:var(--surface-2)]"
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            <span
                              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-display text-[10px] transition ${
                                isActive
                                  ? "bg-gradient-to-b from-brand-500 to-brand-700 text-white"
                                  : "border border-[color:var(--border)] bg-white text-brand-700 group-hover:border-brand-500/40"
                              }`}
                            >
                              0{gi + 1}
                            </span>
                            <span className="font-display text-base tracking-tight text-[color:var(--foreground)] md:text-lg">
                              {g.category}
                            </span>
                          </span>
                          <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
                            {g.items.length} Drips
                            {isActive && (
                              <Check
                                className="h-3.5 w-3.5 text-brand-700"
                                strokeWidth={2.5}
                              />
                            )}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Active category carousel */}
        <div className="mt-10 md:mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeGroup.category}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <IVCategoryCarousel
                category={activeGroup.category}
                items={activeGroup.items}
                groupIndex={grouped.findIndex(
                  (g) => g.category === activeGroup.category,
                )}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

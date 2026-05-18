"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Download,
  Truck,
  ShieldCheck,
  Wallet,
  FlaskConical,
  ChevronDown,
  Check,
} from "lucide-react";
import type { BloodPanelCategory } from "@/lib/content";
import {
  BLOOD_PANELS,
  BLOOD_PANEL_CATEGORIES,
  BLOOD_WORK_FEE,
  MENU_PDF,
} from "@/lib/content";

type Filter = "All" | BloodPanelCategory;

const FEE_OPTIONS = [
  {
    icon: Truck,
    label: BLOOD_WORK_FEE,
    title: "Concierge Service Fee",
    body:
      "Covers the in-home draw, expert handling, and chain-of-custody transport to the lab.",
  },
  {
    icon: ShieldCheck,
    label: "Insurance",
    title: "Lab Analysis Only",
    body:
      "Most major insurance plans are accepted for the laboratory analysis itself.",
  },
  {
    icon: Wallet,
    label: "Cash Pay",
    title: "Transparent Pricing",
    body:
      "Prefer to skip insurance entirely? An all-cash option is available on request.",
  },
];

export function BloodPanelsMenu() {
  const grouped = BLOOD_PANEL_CATEGORIES.map((cat) => ({
    category: cat,
    items: BLOOD_PANELS.filter((p) => p.category === cat),
  })).filter((g) => g.items.length > 0);

  const totalCount = grouped.reduce((sum, g) => sum + g.items.length, 0);
  const filters: Filter[] = ["All", ...grouped.map((g) => g.category)];

  const [selected, setSelected] = useState<Filter>("All");
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

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

  const visibleGroups =
    selected === "All" ? grouped : grouped.filter((g) => g.category === selected);

  const selectedIndex = filters.indexOf(selected);
  const selectedLabel = selected === "All" ? "All Panels" : selected;
  const selectedCount =
    selected === "All"
      ? totalCount
      : grouped.find((g) => g.category === selected)?.items.length ?? 0;

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Page header */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="eyebrow"
            >
              Lab Panels
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display mt-5 text-4xl leading-[1.05] tracking-tight text-[color:var(--foreground)] md:text-5xl lg:text-6xl"
            >
              Comprehensive panels,
              <br />
              <span className="font-display-italic text-brand-700">
                drawn at home.
              </span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 h-px w-16 origin-left bg-brand-500/80"
            />
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-lg text-[15px] leading-relaxed text-[color:var(--muted-strong)]"
            >
              Mobile phlebotomy from licensed clinicians. Samples are
              transported to accredited labs with chain-of-custody care — the
              same diagnostics your physician orders, drawn in your living
              room.
            </motion.p>
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

        {/* Fee structure — three-column explainer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3 md:mt-14 md:gap-4"
        >
          {FEE_OPTIONS.map(({ icon: Icon, label, title, body }) => (
            <div
              key={title}
              className="flex flex-col gap-4 rounded-2xl border border-[color:var(--border)] bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-brand-500/30 hover:shadow-soft-lg md:p-7"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-500/30 bg-brand-50 text-brand-700">
                  <Icon className="h-4 w-4" strokeWidth={1.7} />
                </span>
                <span className="font-display text-base tracking-tight text-brand-700 md:text-lg">
                  {label}
                </span>
              </div>
              <div>
                <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--foreground)]">
                  {title}
                </div>
                <div className="mt-2 text-[13px] leading-relaxed text-[color:var(--muted-strong)]">
                  {body}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Category dropdown */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 flex flex-col items-center gap-3 md:mt-20"
        >
          <div className="text-[10px] font-medium uppercase tracking-[0.28em] text-[color:var(--muted-strong)]">
            Browse by Category
          </div>

          <div ref={wrapperRef} className="relative w-full max-w-[440px]">
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-haspopup="listbox"
              aria-expanded={open}
              aria-label="Select lab panel category"
              className="group inline-flex w-full items-center justify-between gap-4 rounded-full border border-[color:var(--border-strong)] bg-white px-5 py-3.5 text-left shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/60 hover:shadow-soft-lg md:px-6 md:py-4"
            >
              <span className="flex items-center gap-3 md:gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-brand-500 to-brand-700 font-display text-[11px] text-white shadow-[0_4px_12px_-4px_color-mix(in_oklab,var(--brand-500)_55%,transparent)] md:h-10 md:w-10 md:text-xs">
                  {selected === "All" ? "All" : `0${selectedIndex}`}
                </span>
                <span className="font-display text-xl leading-none tracking-tight text-[color:var(--foreground)] md:text-2xl">
                  {selectedLabel}
                </span>
              </span>
              <span className="flex shrink-0 items-center gap-2 md:gap-3">
                <span className="hidden text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)] sm:inline">
                  {selectedCount} Panels
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
                  aria-label="Lab panel categories"
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 right-0 z-30 mt-2 origin-top overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white p-1.5 shadow-soft-lg"
                >
                  {filters.map((f, fi) => {
                    const isActive = f === selected;
                    const count =
                      f === "All"
                        ? totalCount
                        : grouped.find((g) => g.category === f)?.items.length ??
                          0;
                    const label = f === "All" ? "All Panels" : f;
                    return (
                      <li key={f}>
                        <button
                          type="button"
                          role="option"
                          aria-selected={isActive}
                          onClick={() => {
                            setSelected(f);
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
                              {f === "All" ? "All" : `0${fi}`}
                            </span>
                            <span className="font-display text-base tracking-tight text-[color:var(--foreground)] md:text-lg">
                              {label}
                            </span>
                          </span>
                          <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[color:var(--muted)]">
                            {count} Panels
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

        {/* Categorized panel sections */}
        <div className="mt-12 space-y-14 md:mt-14 md:space-y-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-14 md:space-y-16"
            >
              {visibleGroups.map(({ category, items }) => {
                const gi = grouped.findIndex((g) => g.category === category);
                return (
                  <div key={category}>
                    {/* Category header */}
                    <div className="mb-6 flex items-baseline gap-4">
                      <div className="font-display text-[10px] uppercase tracking-[0.28em] text-brand-700 sm:text-xs">
                        0{gi + 1}
                      </div>
                      <h3 className="font-display text-2xl tracking-tight text-[color:var(--foreground)] md:text-3xl">
                        {category}
                      </h3>
                      <div className="hidden flex-1 border-b border-dashed border-[color:var(--border)] sm:block" />
                      <div className="hidden shrink-0 text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted)] sm:inline">
                        {items.length} panels
                      </div>
                    </div>

                    {/* Panel cards */}
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
                      {items.map((panel) => (
                        <div
                          key={panel.name}
                          className="group flex items-start gap-4 rounded-2xl border border-[color:var(--border)] bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-brand-500/30 hover:shadow-soft-lg"
                        >
                          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-500/30 bg-brand-50 text-brand-700 transition group-hover:border-brand-500/60 group-hover:bg-brand-100">
                            <FlaskConical className="h-4 w-4" strokeWidth={1.7} />
                          </span>
                          <div>
                            <div className="font-display text-[15px] leading-tight tracking-tight text-[color:var(--foreground)] md:text-base">
                              {panel.name}
                            </div>
                            <p className="mt-1.5 text-[12.5px] leading-relaxed text-[color:var(--muted-strong)]">
                              {panel.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom note — physician orders */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-2)] p-6 text-center text-[12px] leading-relaxed text-[color:var(--muted-strong)] md:p-7 md:text-[13px]"
        >
          Don&apos;t see a specific test? We can draw any physician-ordered
          panel. Reach out and our concierge will coordinate the requisition.
        </motion.div>
      </div>
    </section>
  );
}

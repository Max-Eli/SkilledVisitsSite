"use client";

import { motion } from "motion/react";
import {
  Download,
  Truck,
  ShieldCheck,
  Wallet,
  FlaskConical,
} from "lucide-react";
import {
  BLOOD_PANELS,
  BLOOD_PANEL_CATEGORIES,
  BLOOD_WORK_FEE,
  MENU_PDF,
} from "@/lib/content";

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

        {/* Categorized panel sections */}
        <div className="mt-16 space-y-14 md:mt-20 md:space-y-16">
          {grouped.map(({ category, items }, gi) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: gi * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
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
            </motion.div>
          ))}
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

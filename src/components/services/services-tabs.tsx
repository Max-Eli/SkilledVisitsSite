"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Droplets, Syringe, TestTube, FlaskConical } from "lucide-react";
import { IVMenuList } from "@/components/services/iv-menu-list";
import { WellnessShotsMenu } from "@/components/services/wellness-shots-menu";
import { RapidTestsMenu } from "@/components/services/rapid-tests-menu";
import { BloodPanelsMenu } from "@/components/services/blood-panels-menu";
import { IV_COCKTAILS } from "@/lib/content";

type TabKey = "iv" | "shots" | "tests" | "blood";

type TabDef = {
  key: TabKey;
  label: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  description: string;
};

const TABS: TabDef[] = [
  {
    key: "iv",
    label: "IV Therapy",
    icon: Droplets,
    description:
      "Advanced IV infusions designed to hydrate, restore, and optimize — formulated by clinicians around your goals.",
  },
  {
    key: "shots",
    label: "Wellness Shots",
    icon: Syringe,
    description:
      "Quick, targeted intramuscular shots for energy, immunity, and recovery — standalone or paired with any IV.",
  },
  {
    key: "tests",
    label: "Rapid Testing",
    icon: TestTube,
    description:
      "Same-day diagnostics delivered in your home, hotel, or office — discreet and accurate.",
  },
  {
    key: "blood",
    label: "Blood Draws",
    icon: FlaskConical,
    description:
      "Concierge phlebotomy for comprehensive wellness panels, hormones, and physician-ordered labs.",
  },
];

export function ServicesTabs() {
  const [active, setActive] = useState<TabKey>("iv");
  const activeTab = TABS.find((t) => t.key === active) ?? TABS[0];

  return (
    <section className="section-cream relative">
      {/* Section header */}
      <div className="mx-auto max-w-7xl px-5 pt-24 md:px-8 md:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="eyebrow"
          >
            Our Menus
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display mt-5 text-4xl tracking-tight text-[color:var(--foreground)] md:text-5xl lg:text-6xl"
          >
            Browse{" "}
            <span className="font-display-italic text-brand-700">
              the Menu.
            </span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-4 h-px w-16 origin-center bg-brand-500/80"
          />
          <motion.p
            key={activeTab.key}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-[color:var(--muted-strong)]"
          >
            {activeTab.description}
          </motion.p>
        </div>

        {/* Tab bar — 2x2 grid on mobile, inline pill bar on desktop */}
        <div className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Service menus"
            className="grid w-full grid-cols-2 gap-2 sm:gap-2.5 md:flex md:w-auto md:gap-0 md:rounded-full md:border md:border-[color:var(--border)] md:bg-white md:p-1.5 md:shadow-soft"
          >
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.key === active;
              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(tab.key)}
                  className={`flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full px-3 py-3 text-[10px] uppercase tracking-[0.16em] transition-all duration-300 sm:text-[11px] sm:tracking-[0.18em] md:w-auto md:px-5 md:py-2.5 ${
                    isActive
                      ? "bg-gradient-to-b from-brand-500 to-brand-700 text-white shadow-[0_6px_18px_-8px_color-mix(in_oklab,var(--brand-500)_60%,transparent)]"
                      : "border border-[color:var(--border)] bg-white text-[color:var(--foreground-muted)] hover:border-brand-500/40 hover:text-brand-700 md:border-transparent md:bg-transparent md:shadow-none"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={1.7} />
                  <span className="truncate">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active tab panel */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            role="tabpanel"
            aria-labelledby={`tab-${active}`}
          >
            {active === "iv" && <IVMenuList cocktails={IV_COCKTAILS} />}
            {active === "shots" && <WellnessShotsMenu />}
            {active === "tests" && <RapidTestsMenu />}
            {active === "blood" && <BloodPanelsMenu />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

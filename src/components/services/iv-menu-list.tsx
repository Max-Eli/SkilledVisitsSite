"use client";

import { motion } from "motion/react";
import { Download } from "lucide-react";
import type { Cocktail } from "@/lib/content";
import { COCKTAIL_CATEGORIES, MENU_PDF } from "@/lib/content";
import { IVCategoryCarousel } from "@/components/services/iv-category-carousel";

export function IVMenuList({ cocktails }: { cocktails: Cocktail[] }) {
  const grouped = COCKTAIL_CATEGORIES.map((cat) => ({
    category: cat,
    items: cocktails.filter((c) => c.category === cat),
  })).filter((g) => g.items.length > 0);

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

        {/* Category carousels */}
        <div className="mt-16 space-y-16 md:mt-20 md:space-y-20">
          {grouped.map(({ category, items }, gi) => (
            <IVCategoryCarousel
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

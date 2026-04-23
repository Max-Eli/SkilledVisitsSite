import { TRUST_POINTS } from "@/lib/content";
import { ShieldCheck, BadgeCheck, Clock, Gem } from "lucide-react";

const icons = [ShieldCheck, BadgeCheck, Clock, Gem];

export function TrustMarquee() {
  const items = [...TRUST_POINTS, ...TRUST_POINTS];
  return (
    <section className="relative border-y border-white/[0.05] bg-surface/50 py-8 overflow-hidden">
      <div className="relative">
        <div className="flex gap-16 marquee-track whitespace-nowrap">
          {items.map((t, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex items-center gap-3 text-sm">
                <Icon className="h-4 w-4 text-brand-400" />
                <span className="text-foreground/90">{t.label}</span>
                <span className="text-muted">· {t.detail}</span>
              </div>
            );
          })}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>
    </section>
  );
}

import { STATS } from "@/lib/content";
import { Reveal } from "@/components/motion/reveal";

export function Stats() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="flex flex-col items-start border-l border-white/[0.08] pl-6">
                <div className="font-display text-5xl leading-none text-gradient md:text-6xl">
                  {s.value}
                </div>
                <div className="mt-3 text-xs uppercase tracking-[0.2em] text-muted">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

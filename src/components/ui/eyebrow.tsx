import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-brand-700 shadow-[0_1px_2px_rgba(20,17,28,0.04)]",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-500 pulse-glow" />
      {children}
    </div>
  );
}

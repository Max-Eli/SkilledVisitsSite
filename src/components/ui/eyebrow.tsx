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
        "inline-flex items-center gap-2 rounded-full border border-subtle bg-white/[0.03] px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-brand-300 backdrop-blur-sm",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-400 pulse-glow" />
      {children}
    </div>
  );
}

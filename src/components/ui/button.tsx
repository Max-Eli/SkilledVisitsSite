import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "ghost" | "outline" | "white" | "glass";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 will-change-transform active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)] uppercase tracking-[0.14em]";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-b from-brand-500 to-brand-700 text-white shadow-[0_8px_24px_-10px_color-mix(in_oklab,var(--brand-600)_55%,transparent)] hover:shadow-[0_14px_32px_-12px_color-mix(in_oklab,var(--brand-500)_70%,transparent)] hover:-translate-y-0.5",
  outline:
    "border border-[color:var(--border-strong)] bg-[color:var(--surface)] text-[color:var(--foreground)] hover:border-brand-500/60 hover:text-brand-700 hover:bg-brand-50",
  ghost:
    "text-[color:var(--foreground-muted)] hover:text-brand-700 hover:bg-[color:var(--surface-2)]",
  white:
    "bg-[color:var(--foreground)] text-[color:var(--background)] hover:bg-brand-700 hover:-translate-y-0.5",
  glass:
    "border border-[color:var(--border-strong)] bg-[color:var(--surface)]/80 text-[color:var(--foreground)] backdrop-blur-md hover:border-brand-500/40 hover:bg-[color:var(--surface)]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[11px]",
  md: "h-11 px-6 text-[12px]",
  lg: "h-14 px-8 text-[13px]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = CommonProps & ComponentProps<typeof Link>;
type ButtonProps = CommonProps & Omit<ComponentProps<"button">, "children">;

export function LuxButton({
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  children,
  ...rest
}: LinkButtonProps) {
  return (
    <Link
      {...rest}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </Link>
  );
}

export function LuxButtonBtn({
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      {...rest}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </button>
  );
}

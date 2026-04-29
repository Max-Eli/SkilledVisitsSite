import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "ghost" | "outline" | "white";
type Size = "sm" | "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 will-change-transform active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-b from-brand-500 to-brand-700 text-white shadow-[0_8px_24px_-10px_color-mix(in_oklab,var(--brand-600)_55%,transparent)] hover:shadow-[0_14px_32px_-12px_color-mix(in_oklab,var(--brand-600)_70%,transparent)] hover:-translate-y-0.5",
  outline:
    "border border-[color:var(--border-strong)] bg-white text-foreground hover:border-brand-400 hover:text-brand-700 hover:bg-brand-50",
  ghost:
    "text-foreground/85 hover:text-brand-700 hover:bg-brand-50",
  white:
    "bg-white text-brand-700 shadow-[0_8px_24px_-10px_rgba(20,17,28,0.18)] hover:bg-brand-50 hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-[15px]",
  lg: "h-14 px-8 text-[15px] tracking-wide",
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

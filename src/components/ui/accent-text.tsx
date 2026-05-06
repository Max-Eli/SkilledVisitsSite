"use client";

import { motion } from "motion/react";
import { useId } from "react";
import { cn } from "@/lib/utils";

export function AccentText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const id = useId();
  return (
    <span className={cn("relative inline-block italic", className)}>
      {children}
      <svg
        aria-hidden
        className="pointer-events-none absolute -bottom-1 left-0 h-3 w-full md:-bottom-2 md:h-4"
        viewBox="0 0 300 14"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id={`accent-${id}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0.35" />
            <stop offset="50%" stopColor="#9e50e5" stopOpacity="1" />
            <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.35" />
          </linearGradient>
        </defs>
        <motion.path
          d="M 4 9 Q 75 3, 150 7 T 296 6"
          stroke={`url(#accent-${id})`}
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            pathLength: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
            opacity: { duration: 0.4 },
          }}
        />
      </svg>
    </span>
  );
}

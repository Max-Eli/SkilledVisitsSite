"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Video, Droplets, Zap, FlaskConical, Star, ShieldCheck } from "lucide-react";

const HERO_LINKS = [
  { icon: Video, label: "Virtual Consult", href: "/services/virtual-consultation" },
  { icon: Droplets, label: "IV Therapy", href: "/services/iv-therapy" },
  { icon: Zap, label: "Wellness Shots", href: "/services/wellness-shots" },
  { icon: FlaskConical, label: "Blood Work", href: "/services/blood-draws" },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[100svh] overflow-hidden md:min-h-[100vh]"
    >
      <motion.div
        aria-hidden
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 -z-20"
      >
        <Image
          src="/van-front.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_bottom] md:hidden"
        />
        <Image
          src="/van-side-2.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-[center_bottom] md:block"
        />
      </motion.div>

      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/55 via-black/15 to-transparent md:from-black/45"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 md:hidden"
        style={{
          background:
            "radial-gradient(ellipse 95% 70% at 50% 40%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.15) 70%, transparent 90%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 hidden md:block"
        style={{
          background:
            "radial-gradient(ellipse 65% 80% at 22% 45%, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.4) 35%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-white/15"
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-28 pt-24 md:min-h-[100vh] md:px-8 md:pb-28 md:pt-16"
      >
        <div className="mr-auto max-w-2xl text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[9px] uppercase tracking-[0.16em] text-white backdrop-blur-md md:gap-2 md:px-3.5 md:py-1.5 md:text-[11px] md:tracking-[0.18em]"
          >
            <span className="h-1 w-1 rounded-full bg-emerald-400 pulse-glow md:h-1.5 md:w-1.5" />
            Concierge Services · FL & NY
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display mt-6 text-[40px] leading-[0.95] tracking-tight text-white sm:text-6xl md:mt-7 md:text-7xl lg:text-[5.75rem]"
            style={{ textShadow: "0 2px 24px rgba(0,0,0,0.25)" }}
          >
            <span className="block">Wellness Treatments,</span>
            <span className="relative inline-block italic text-[color:var(--brand-200)]">
              Delivered!
              <svg
                aria-hidden
                className="pointer-events-none absolute -bottom-1 left-0 h-3 w-full md:-bottom-2 md:h-4"
                viewBox="0 0 300 14"
                preserveAspectRatio="none"
                fill="none"
              >
                <defs>
                  <linearGradient id="heroUnderline" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#d4b3f5" stopOpacity="0.35" />
                    <stop offset="50%" stopColor="#e9d5fb" stopOpacity="1" />
                    <stop offset="100%" stopColor="#d4b3f5" stopOpacity="0.35" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M 4 9 Q 75 3, 150 7 T 296 6"
                  stroke="url(#heroUnderline)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    pathLength: { duration: 1.3, delay: 1.3, ease: [0.16, 1, 0.3, 1] },
                    opacity: { duration: 0.4, delay: 1.3 },
                  }}
                />
              </svg>
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2.5 md:mt-10 md:gap-x-6 md:gap-y-3"
          >
            <div className="inline-flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3 w-3 fill-amber-400 text-amber-400 md:h-3.5 md:w-3.5"
                    strokeWidth={0}
                  />
                ))}
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/85 md:text-[11px]">
                5-Star Rated
              </span>
            </div>

            <div aria-hidden className="h-3 w-px bg-white/25 md:h-3.5" />

            <div className="inline-flex items-center gap-2">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 md:h-4 md:w-4" strokeWidth={1.6} />
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/85 md:text-[11px]">
                Licensed Nurses Only
              </span>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.07, delayChildren: 0.5 } },
            }}
            className="mt-10 grid grid-cols-2 gap-2 md:mt-12 md:flex md:flex-nowrap md:items-center md:gap-2.5"
          >
            {HERO_LINKS.map(({ icon: Icon, label, href }) => (
              <motion.div
                key={href}
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  show: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={href}
                  className="group flex w-full items-center justify-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-2.5 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/55 hover:bg-white/20 md:w-auto md:justify-start md:gap-2 md:px-4 md:py-2.5"
                >
                  <Icon
                    className="h-4 w-4 shrink-0 text-white/90 transition-colors group-hover:text-white md:h-[18px] md:w-[18px]"
                    strokeWidth={1.6}
                  />
                  <span className="text-[11px] uppercase tracking-[0.18em] text-white/90 transition-colors group-hover:text-white md:text-xs">
                    {label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="pointer-events-none absolute inset-x-0 bottom-7 z-10 flex justify-center"
      >
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-white/65">
          <div className="h-px w-10 bg-white/25" />
          Scroll
          <div className="h-px w-10 bg-white/25" />
        </div>
      </motion.div>
    </section>
  );
}

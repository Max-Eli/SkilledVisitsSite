"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Play, Layers } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { AccentText } from "@/components/ui/accent-text";
import { BRAND } from "@/lib/content";
import type { InstagramPost } from "@/lib/instagram";

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

const HANDLE = "@skilledvisits";

export function Instagram({ posts }: { posts: InstagramPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Reveal>
              <Eyebrow>{HANDLE}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
                Follow the<br />
                <AccentText className="text-gradient">visits.</AccentText>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-md text-[color:var(--muted-strong)] leading-relaxed">
                Protocols, client moments, and behind-the-scenes from the
                mobile suite. Tap any post to view it on Instagram.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <Link
              href={BRAND.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-5 py-3 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700"
            >
              <InstagramGlyph className="h-4 w-4" />
              <span className="text-sm font-medium">Follow {HANDLE}</span>
              <span
                aria-hidden
                className="text-sm transition-transform duration-300 group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-6">
          {posts.map((post, i) => {
            const captionPreview = post.caption
              ? post.caption.split("\n")[0].slice(0, 100)
              : "";
            const isVideo = post.mediaType === "VIDEO";
            const isCarousel = post.mediaType === "CAROUSEL_ALBUM";
            const isLocal = post.mediaUrl.startsWith("/");

            return (
              <motion.a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View Instagram post: ${captionPreview || HANDLE}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative aspect-square overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-soft-lg"
              >
                <Image
                  src={post.mediaUrl}
                  alt={captionPreview || HANDLE}
                  fill
                  unoptimized={!isLocal}
                  sizes="(min-width: 1024px) 200px, (min-width: 640px) 30vw, 45vw"
                  className={
                    isLocal && post.mediaUrl.endsWith(".jpeg")
                      ? "object-contain bg-gradient-to-b from-[color:var(--surface-2)] via-white to-white p-2 transition-transform duration-700 group-hover:scale-[1.05]"
                      : "object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  }
                />

                {(isVideo || isCarousel) && (
                  <div className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm">
                    {isVideo ? (
                      <Play className="h-3.5 w-3.5 fill-white" strokeWidth={0} />
                    ) : (
                      <Layers className="h-3.5 w-3.5" strokeWidth={2} />
                    )}
                  </div>
                )}

                <div className="pointer-events-none absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex items-end justify-between gap-2 p-3 md:p-4">
                    {captionPreview && (
                      <p className="line-clamp-2 max-w-[80%] text-[11px] leading-snug text-white">
                        {captionPreview}
                        {post.caption && post.caption.length > 100 ? "…" : ""}
                      </p>
                    )}
                    <div className="ml-auto flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/95 text-foreground">
                      <InstagramGlyph className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-10 flex items-center justify-center">
            <Link
              href={BRAND.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm text-[color:var(--muted-strong)] transition-colors hover:text-brand-700"
            >
              View more on Instagram
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

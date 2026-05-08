import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { CTA } from "@/components/home/cta";
import { BLOG_POSTS, formatBlogDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes from our clinical team — IV therapy, recovery protocols, mobile wellness, and the science behind the visit.",
};

export default function BlogPage() {
  const posts = [...BLOG_POSTS].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title="Notes from"
        accent="our clinical team."
        description="Protocols, recovery science, and behind-the-scenes from a practice that visits you. New posts when we have something worth saying."
      />

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        {featured && (
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group relative grid grid-cols-1 overflow-hidden rounded-[28px] border border-[color:var(--border)] bg-white shadow-soft transition-all duration-500 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-soft-lg md:grid-cols-12 md:rounded-[32px]"
            >
              <div className="relative md:col-span-7 aspect-[16/10] md:aspect-auto md:min-h-[440px] overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt ?? featured.title}
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  priority
                  className={
                    featured.image.endsWith(".jpeg")
                      ? "object-contain bg-gradient-to-b from-[color:var(--surface-2)] via-white to-white p-6 transition-transform duration-700 group-hover:scale-[1.04]"
                      : "object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  }
                />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/90 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-brand-700 backdrop-blur-sm">
                  Featured
                </div>
              </div>

              <div className="flex flex-col justify-between gap-8 p-8 md:col-span-5 md:p-12">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-brand-700">
                    {featured.category}
                  </div>
                  <h2 className="font-display mt-3 text-3xl leading-tight tracking-tight md:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-[color:var(--muted-strong)] leading-relaxed">
                    {featured.excerpt}
                  </p>
                </div>
                <div className="flex items-end justify-between gap-4">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
                    {formatBlogDate(featured.publishedAt)} · {featured.readTime}
                  </div>
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[color:var(--border)] bg-white text-brand-700 transition-all duration-300 group-hover:border-brand-400 group-hover:bg-brand-500 group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        )}

        {rest.length > 0 && (
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 0.06}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-soft transition-all duration-500 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-soft-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt ?? post.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className={
                        post.image.endsWith(".jpeg")
                          ? "object-contain bg-gradient-to-b from-[color:var(--surface-2)] via-white to-white p-4 transition-transform duration-700 group-hover:scale-[1.04]"
                          : "object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      }
                    />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/90 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-brand-700 backdrop-blur-sm">
                      {post.category}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-6 md:p-7">
                    <h3 className="font-display text-xl leading-tight tracking-tight md:text-2xl">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[color:var(--muted-strong)] leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
                      <span>{formatBlogDate(post.publishedAt)}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      <CTA />
    </>
  );
}

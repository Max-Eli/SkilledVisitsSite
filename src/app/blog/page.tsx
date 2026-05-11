import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  Activity,
  Droplet,
  Hourglass,
  Heart,
  Trophy,
  Shield,
  Plane,
  Stethoscope,
  Mail,
} from "lucide-react";
import { BLOG_POSTS, formatBlogDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Expert guidance on wellness, recovery, hydration, longevity, and concierge healthcare — delivered with care.",
};

const TOPICS = [
  { icon: Activity, label: "Recovery" },
  { icon: Droplet, label: "Hydration" },
  { icon: Hourglass, label: "Longevity" },
  { icon: Heart, label: "Wellness" },
  { icon: Trophy, label: "Performance" },
  { icon: Shield, label: "Immune Support" },
  { icon: Plane, label: "Travel Recovery" },
  { icon: Stethoscope, label: "Preventative Care" },
];

export default function BlogPage() {
  const posts = [...BLOG_POSTS].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  const featured = posts.slice(0, 4);
  const latest = posts.slice(4);

  return (
    <>
      {/* Hero */}
      <section className="section-dark relative isolate -mt-20 overflow-hidden md:-mt-24">
        <div aria-hidden className="absolute inset-0 -z-10 brand-glow" />

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-16 pt-32 md:grid-cols-12 md:px-8 md:pt-44">
          <div className="md:col-span-7">
            <div className="text-[11px] uppercase tracking-[0.32em] text-brand-700">
              Insights
            </div>
            <h1 className="font-display mt-6 text-[52px] leading-[0.98] tracking-tight text-[color:var(--foreground)] sm:text-[64px] md:text-[80px]">
              <span className="block">Wellness</span>
              <span className="block font-display-italic text-brand-700">
                Insights.
              </span>
            </h1>
            <p className="mt-7 max-w-md text-[15px] leading-relaxed text-[color:var(--foreground-muted)] md:text-base">
              Expert guidance on wellness, recovery, hydration, longevity, and
              concierge healthcare — delivered with care.
            </p>

            <Link
              href="#articles"
              className="group mt-10 inline-flex items-center gap-2.5 rounded-md bg-gradient-to-b from-brand-500 to-brand-700 px-6 py-3.5 text-[11px] uppercase tracking-[0.22em] text-white shadow-[0_10px_28px_-12px_color-mix(in_oklab,var(--brand-500)_60%,transparent)] transition hover:-translate-y-0.5"
            >
              Explore Insights
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] shadow-soft-lg">
              <Image
                src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1400&q=80"
                alt="Open journal"
                fill
                sizes="(min-width: 768px) 35vw, 80vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section id="articles" className="section-cream py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="eyebrow">Featured Articles</div>
              <h2 className="font-display mt-5 text-3xl tracking-tight md:text-4xl">
                Read the{" "}
                <span className="font-display-italic text-brand-700">
                  Latest.
                </span>
              </h2>
            </div>
            <Link
              href="#latest"
              className="hidden text-[11px] uppercase tracking-[0.22em] text-brand-700 hover:text-brand-600 md:inline-flex items-center gap-2"
            >
              View All Articles
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-soft-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt ?? post.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className={
                      post.image.endsWith(".jpeg")
                        ? "object-contain bg-[color:var(--surface-2)] p-3 transition-transform duration-700 group-hover:scale-[1.04]"
                        : "object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    }
                  />
                  <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white/95 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-brand-700 backdrop-blur-sm">
                    {post.category}
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="font-display text-lg leading-tight tracking-tight text-[color:var(--foreground)] md:text-xl">
                    {post.title}
                  </h3>
                  <p className="text-[12px] leading-relaxed text-[color:var(--muted-strong)]">
                    {post.excerpt.slice(0, 90)}…
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <span className="text-[10px] uppercase tracking-[0.22em] text-brand-700">
                      Read More
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-brand-700 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="section-cream pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="rounded-3xl border border-[color:var(--border)] bg-white p-8 shadow-soft md:p-10">
            <div className="text-center">
              <div className="eyebrow">Explore By Topic</div>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {TOPICS.map(({ icon: Icon, label }) => (
                <button
                  type="button"
                  key={label}
                  className="group inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface-2)] px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[color:var(--foreground)] transition hover:border-brand-500/60 hover:bg-brand-50 hover:text-brand-700"
                >
                  <Icon className="h-3.5 w-3.5 text-brand-700" strokeWidth={1.6} />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      {latest.length > 0 && (
        <section id="latest" className="section-cream pb-24 md:pb-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="text-center">
              <div className="eyebrow">Latest Insights</div>
              <h2 className="font-display mt-5 text-3xl tracking-tight md:text-4xl">
                Fresh from the{" "}
                <span className="font-display-italic text-brand-700">
                  clinical team.
                </span>
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
              {latest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-soft transition-all duration-500 hover:-translate-y-0.5 hover:shadow-soft-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt ?? post.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className={
                        post.image.endsWith(".jpeg")
                          ? "object-contain bg-[color:var(--surface-2)] p-3 transition-transform duration-700 group-hover:scale-[1.04]"
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
                    <p className="text-sm leading-relaxed text-[color:var(--muted-strong)]">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
                      <span>{formatBlogDate(post.publishedAt)}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Subscribe banner */}
      <section className="section-cream py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid grid-cols-1 items-center gap-8 rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 md:grid-cols-12 md:gap-12 md:p-12">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-400/40 bg-brand-500/10 text-brand-700">
                  <Mail className="h-4 w-4" strokeWidth={1.6} />
                </span>
                <div className="text-[11px] uppercase tracking-[0.24em] text-brand-700">
                  Stay Informed
                </div>
              </div>
              <h3 className="font-display mt-5 text-3xl tracking-tight text-[color:var(--foreground)] md:text-4xl">
                Stay informed.{" "}
                <span className="font-display-italic text-brand-700">
                  Live well.
                </span>
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[color:var(--foreground-muted)]">
                The latest wellness insights, tips, and exclusive updates
                delivered to your inbox.
              </p>
            </div>
            <form className="md:col-span-7">
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="flex-1 rounded-md border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-4 text-sm text-[color:var(--foreground)] placeholder:text-[color:var(--muted)] focus:border-brand-500/60 focus:outline-none"
                />
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-md bg-gradient-to-b from-brand-500 to-brand-700 px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-white shadow-[0_10px_28px_-12px_color-mix(in_oklab,var(--brand-500)_60%,transparent)] transition hover:-translate-y-0.5"
                >
                  Subscribe
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
              <div className="mt-3 text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted)]">
                We respect your privacy. Unsubscribe anytime.
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

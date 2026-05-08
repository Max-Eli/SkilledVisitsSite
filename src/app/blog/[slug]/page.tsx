import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CTA } from "@/components/home/cta";
import {
  BLOG_POSTS,
  formatBlogDate,
  getPost,
  getRecentPosts,
  parseBlogBody,
} from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const blocks = parseBlogBody(post.body);
  const related = getRecentPosts(3, slug);

  return (
    <>
      <section className="relative overflow-hidden pb-12 pt-12 md:pb-16 md:pt-16">
        <div aria-hidden className="absolute inset-0 -z-10 brand-glow opacity-80" />
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-[color:var(--muted-strong)] transition-colors hover:text-brand-700"
            >
              <ArrowRight className="h-3.5 w-3.5 rotate-180" />
              All posts
            </Link>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-10">
              <Eyebrow>{post.category}</Eyebrow>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-display mt-6 text-4xl leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
              {post.title}
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-strong)]">
              <span className="text-foreground">{post.author}</span>
              <span aria-hidden className="text-brand-400">
                ·
              </span>
              <span>{formatBlogDate(post.publishedAt)}</span>
              <span aria-hidden className="text-brand-400">
                ·
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3 w-3" strokeWidth={1.75} />
                {post.readTime}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 pb-12 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[24px] border border-[color:var(--border)] bg-white shadow-soft md:rounded-[28px]">
            <div className="relative aspect-[16/9]">
              <Image
                src={post.image}
                alt={post.imageAlt ?? post.title}
                fill
                priority
                sizes="(min-width: 768px) 768px, 100vw"
                className={
                  post.image.endsWith(".jpeg")
                    ? "object-contain bg-gradient-to-b from-[color:var(--surface-2)] via-white to-white p-6"
                    : "object-cover"
                }
              />
            </div>
          </div>
        </Reveal>
      </section>

      <article className="mx-auto max-w-3xl px-5 pb-24 md:px-8">
        <Reveal>
          <div className="prose-sv">
            {blocks.map((b, i) => {
              if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
              if (b.type === "h3") return <h3 key={i}>{b.text}</h3>;
              if (b.type === "ul")
                return (
                  <ul key={i}>
                    {b.items.map((it, j) => (
                      <li key={j}>{renderInline(it)}</li>
                    ))}
                  </ul>
                );
              return <p key={i}>{renderInline(b.text)}</p>;
            })}
          </div>
        </Reveal>
      </article>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
          <div className="lux-divider mb-16" />
          <Reveal>
            <h2 className="font-display text-3xl tracking-tight md:text-4xl">
              Keep reading
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.slug} delay={i * 0.06}>
                <Link
                  href={`/blog/${r.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-soft transition-all duration-500 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-soft-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={r.image}
                      alt={r.imageAlt ?? r.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className={
                        r.image.endsWith(".jpeg")
                          ? "object-contain bg-gradient-to-b from-[color:var(--surface-2)] via-white to-white p-4 transition-transform duration-700 group-hover:scale-[1.04]"
                          : "object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      }
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-brand-700">
                      {r.category}
                    </div>
                    <h3 className="font-display text-lg leading-tight tracking-tight md:text-xl">
                      {r.title}
                    </h3>
                    <div className="mt-auto flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
                      <span>{formatBlogDate(r.publishedAt)}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-brand-700 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}

// Inline renderer: handles **bold** and [text](url) within a string of plain text.
function renderInline(text: string): React.ReactNode {
  // First split by links, then handle bold within remaining text segments.
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = linkRegex.exec(text))) {
    if (m.index > lastIndex) {
      parts.push(...renderBold(text.slice(lastIndex, m.index), key++));
    }
    parts.push(
      <a key={`link-${key++}`} href={m[2]}>
        {m[1]}
      </a>,
    );
    lastIndex = m.index + m[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(...renderBold(text.slice(lastIndex), key++));
  }
  return parts;
}

function renderBold(text: string, baseKey: number): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  const re = /\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = re.exec(text))) {
    if (m.index > last) {
      out.push(text.slice(last, m.index));
    }
    out.push(<strong key={`b-${baseKey}-${i++}`}>{m[1]}</strong>);
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

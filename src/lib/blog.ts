export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string; // ISO
  readTime: string;
  image: string;
  imageAlt?: string;
  // Body is rendered as paragraphs separated by blank lines.
  // Lines starting with "## " become h2, "### " become h3.
  // Lines starting with "- " are list items (consecutive lines = single list).
  body: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-is-nad-and-why-its-the-most-talked-about-iv",
    title: "What is NAD+ and why it's the most talked-about IV in wellness",
    excerpt:
      "Cellular fuel, mental clarity, and longevity support — here's what NAD+ actually does, and why it's worth the price tag.",
    category: "IV Therapy",
    author: "Skilled Visits Clinical Team",
    publishedAt: "2026-04-22T09:00:00Z",
    readTime: "5 min read",
    image: "/nad-revive.jpeg",
    imageAlt: "NAD+ Revive infusion bag",
    body: `NAD+ — short for nicotinamide adenine dinucleotide — is a coenzyme present in every cell in your body. It's involved in roughly 500 metabolic reactions, including the ones that turn food into energy and the ones that repair DNA. Levels naturally decline with age, stress, and certain lifestyle factors.

## Why people are doing it
The interest in NAD+ infusion comes from research linking higher cellular NAD+ levels with sharper cognition, faster physical recovery, and longevity protocols. People typically come to us looking for one of three things:

- Mental clarity and focus, especially during demanding stretches of work
- Recovery support during or after high-output athletic seasons
- Longevity-oriented protocols, often paired with broader anti-aging routines

## What an NAD+ visit actually looks like
Our NAD+ Revive is delivered in a 500 mL saline base over a longer infusion window than a standard drip — typically 90 to 120 minutes, sometimes more — because NAD+ is dose-sensitive. We start slow and dial in based on how your body responds.

Most clients report a feeling of mental sharpness during and shortly after the visit, with deeper effects building over a series. We often recommend an initial sequence rather than a one-off.

## Is it for everyone?
No. NAD+ isn't appropriate for every health profile, and your clinician will review your medications and history before booking. It's also our most expensive infusion at $499 — there are good reasons to start with a lower-tier protocol if you're new to IV therapy.

If you're curious whether it's right for you, schedule a virtual consultation and we'll talk through it.`,
  },
  {
    slug: "the-science-behind-the-hangover-iv",
    title: "The science behind the hangover IV",
    excerpt:
      "Aggressive hydration, anti-nausea meds, and a B-complex hit. Why a 45-minute drip can rebuild your morning.",
    category: "Recovery",
    author: "Skilled Visits Clinical Team",
    publishedAt: "2026-04-08T09:00:00Z",
    readTime: "4 min read",
    image: "/hangover-hero.jpeg",
    imageAlt: "Hangover Hero IV bag",
    body: `A hangover isn't just dehydration. It's a layered cocktail of fluid loss, electrolyte imbalance, depleted B-vitamins, low blood sugar, and inflammatory byproducts of metabolizing alcohol. Drinking water and eating brunch helps, but slowly.

## Why the IV approach works faster
Oral hydration takes hours to be absorbed through your gut and distributed. An IV puts saline directly into your bloodstream, which is why most clients feel a noticeable shift within the first 20 minutes of a visit.

Our Hangover Hero protocol layers four things into a 1-liter saline drip:

- Vitamin C and B-Complex to restore what alcohol depleted
- A mineral blend to rebalance electrolytes
- Ondansetron, a prescription anti-nausea medication, when nausea is part of the picture
- The 1-liter saline itself, the workhorse

## When it actually helps
Hangover IVs are most effective in the first 12-18 hours after drinking. We see a lot of pre-flight bookings ("we're flying at 9am, I shouldn't have stayed out") and post-event bookings (weddings, milestone birthdays, work trips that ran long).

The visit takes 30 to 45 minutes door-to-door, including setup. You sit in your bed or couch, the clinician stays the whole time, and you're back to your day before lunch.`,
  },
  {
    slug: "mobile-iv-vs-clinic-which-is-actually-better",
    title: "Mobile IV vs. clinic — which is actually better?",
    excerpt:
      "We run both kinds of visits. Here's the honest comparison most providers won't give you.",
    category: "Concierge Care",
    author: "Skilled Visits Clinical Team",
    publishedAt: "2026-03-25T09:00:00Z",
    readTime: "6 min read",
    image: "/van-side-2.jpg",
    imageAlt: "Skilled Visits mobile clinic",
    body: `We get this question from new clients almost every week: is in-home IV therapy actually as good as going to a clinic? Honestly, it depends on what you're optimizing for.

## What clinic visits do better
- **Volume:** clinic settings can handle high throughput, which can mean lower per-visit pricing for standard protocols.
- **Specialized equipment:** if you need a service that requires equipment we don't carry mobile (full-procedure setups, specific imaging), a clinic is the right call.

## What mobile visits do better
- **Time:** no drive, no waiting room, no parking. The visit happens in the time you'd otherwise spend traveling to one.
- **Comfort:** treatments feel different when they happen in your space. Lying in your own bed for an NAD+ infusion changes the experience.
- **Privacy:** no waiting-room exposure, no awkward elevator runs while you're feeling rough.
- **Continuity:** the clinician who runs your intake is the same one who delivers the visit. No handoffs.

## Where we land
For ongoing wellness routines, recovery protocols, and pre-/post-event drips, mobile is almost always the better choice. For one-off cost-sensitive visits where time isn't tight, a clinic might be enough.

We're biased — we built a mobile practice on purpose — but the calculation isn't complicated.`,
  },
  {
    slug: "pre-travel-iv-routine-for-frequent-flyers",
    title: "The pre-travel IV routine frequent flyers swear by",
    excerpt:
      "What we administer in the 24 hours before a long flight, and why it works.",
    category: "IV Therapy",
    author: "Skilled Visits Clinical Team",
    publishedAt: "2026-03-11T09:00:00Z",
    readTime: "4 min read",
    image: "/jet-lag-recovery.jpeg",
    imageAlt: "Jet-Lag Recovery IV bag",
    body: `Long-haul travel does three things to your body: dehydrates you (cabin air is roughly desert humidity), depletes your B-vitamins (stress + altered eating), and disrupts your circadian rhythm (sleep schedule, light exposure).

The pre-travel IV routine our frequent-flyer clients book before transcontinental and trans-Atlantic flights addresses all three.

## What we typically run
**Jet-Lag Recovery (1 liter, $249)** is our go-to. The active ingredients:

- Vitamin B-12 — sustained energy without overstimulation
- Vitamin C and B-Complex — immune and metabolic support
- Magnesium — sleep regulation and muscle ease

When clients have a particularly punishing schedule on the other end, we'll sometimes add a Wellness Shot of glutathione (immune support).

## When to time it
Most people book the visit at home in the 4-12 hours before departure. Some prefer to schedule the visit at their hotel within a day of landing — equally effective, just on the other side of the trip.

## What about on the way back?
We get more bookings post-arrival than pre-departure. A Pure Hydration ($199) or Energy Charge ($249) drip on day one of being home is the fastest path back to baseline.`,
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRecentPosts(limit = 3, excludeSlug?: string): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.slug !== excludeSlug)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, limit);
}

export function formatBlogDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Render a simple markdown-flavored body to JSX-friendly blocks.
// Supports: ## h2, ### h3, "- " list items (groups consecutive), paragraphs, **bold**, [text](url)
export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export function parseBlogBody(body: string): BlogBlock[] {
  const lines = body.split("\n");
  const blocks: BlogBlock[] = [];
  let buffer: string[] = [];
  let listBuffer: string[] = [];

  const flushParagraph = () => {
    if (buffer.length) {
      blocks.push({ type: "p", text: buffer.join(" ").trim() });
      buffer = [];
    }
  };
  const flushList = () => {
    if (listBuffer.length) {
      blocks.push({ type: "ul", items: listBuffer });
      listBuffer = [];
    }
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flushParagraph();
      flushList();
      continue;
    }
    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "h2", text: line.slice(3).trim() });
      continue;
    }
    if (line.startsWith("### ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "h3", text: line.slice(4).trim() });
      continue;
    }
    if (line.startsWith("- ")) {
      flushParagraph();
      listBuffer.push(line.slice(2).trim());
      continue;
    }
    flushList();
    buffer.push(line);
  }
  flushParagraph();
  flushList();
  return blocks;
}

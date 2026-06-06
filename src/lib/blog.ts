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
  // Optional structured FAQs. When present, the post page emits an
  // FAQPage JSON-LD block for SEO in addition to whatever's in the body.
  faqs?: { q: string; a: string }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "mobile-iv-therapy-near-me",
    title:
      "Mobile IV Therapy Near Me: Professional IV Hydration Delivered to Your Door",
    excerpt:
      "What mobile IV therapy actually is, how a visit works, where we serve across South Florida, and how to know if it's right for you.",
    category: "IV Therapy",
    author: "Skilled Visits Clinical Team",
    publishedAt: "2026-06-05T09:00:00Z",
    readTime: "8 min read",
    image: "/van-side-1.jpg",
    imageAlt: "Skilled Visits mobile IV van serving South Florida",
    body: `## Looking for Mobile IV Therapy Near Me?

When you're feeling dehydrated, exhausted, recovering from illness, or simply looking for a convenient way to support your wellness, the last thing you want is to sit in traffic, wait in a crowded urgent care, or spend hours in a waiting room.

[Mobile IV therapy](/services/iv-therapy) brings professional hydration and wellness services directly to your home, hotel, office, yacht, or event location.

At Skilled Visits, our experienced healthcare professionals provide mobile IV therapy services throughout [South Florida](/service-areas), delivering personalized wellness treatments where and when you need them.

Whether you're recovering from a long night out, battling dehydration, experiencing travel fatigue, or simply prioritizing your health, our team makes receiving professional IV hydration simple, convenient, and comfortable.

## What Is Mobile IV Therapy?

Mobile IV therapy is a concierge wellness service that delivers intravenous hydration and wellness treatments directly to your location.

Rather than visiting a clinic, a licensed healthcare professional travels to you with all necessary equipment and supplies.

Treatments are administered through a small intravenous catheter placed into a vein, allowing fluids and wellness ingredients to be delivered directly into the bloodstream.

This service is ideal for individuals seeking:

- Hydration support
- Recovery after illness
- Travel recovery
- Athletic recovery
- Wellness support
- Vitamin supplementation
- Convenient healthcare services

The entire experience takes place in the comfort of your chosen location.

## How Does IV Therapy Work?

IV stands for intravenous, meaning fluids are delivered directly into the bloodstream through a vein.

Because fluids are administered intravenously, hydration occurs efficiently without relying on the digestive system.

Every appointment begins with a medical screening and assessment.

Our nurses evaluate:

- Current symptoms
- Medical history
- Medications
- Allergies
- Vital signs
- Treatment appropriateness

Safety is always our highest priority.

Once approved, the IV is started and the infusion begins while you relax comfortably.

Most appointments take approximately 30 to 60 minutes.

## Why Are More People Searching for Mobile IV Therapy Near Me?

Convenience has changed healthcare.

People now expect many services to come directly to them, including:

- Food delivery
- Grocery delivery
- Telemedicine
- Concierge healthcare

Mobile IV therapy follows the same trend.

Rather than spending hours traveling and waiting, clients can receive care in the comfort of:

- Their home
- Hotel room
- Office
- Yacht
- Vacation rental
- Event venue

For many busy professionals, travelers, parents, and athletes, convenience is one of the biggest advantages.

## Common Causes of Dehydration

Dehydration occurs when the body loses more fluids than it takes in.

Even mild dehydration can cause noticeable symptoms.

Common causes include:

### Illness

Vomiting, diarrhea, fever, and reduced fluid intake can quickly contribute to dehydration.

### Heat Exposure

South Florida's climate can significantly increase fluid loss through sweating.

### Alcohol Consumption

Alcohol can contribute to dehydration and may worsen symptoms such as fatigue and headaches.

### Travel

Long flights and changes in routine often result in inadequate hydration.

### Intense Exercise

Athletes frequently lose substantial amounts of fluid and electrolytes through sweat.

## Signs You May Be Dehydrated

Common symptoms may include:

- Fatigue
- Headache
- Dizziness
- Dry mouth
- Increased thirst
- Muscle cramps
- Dark urine
- Weakness
- Difficulty concentrating

If symptoms are severe or accompanied by concerning medical conditions, emergency medical evaluation may be necessary.

## Mobile IV Therapy vs Drinking Water

One common question we receive is: "Why not just drink water?"

Water is always important and should be your first line of hydration.

However, some individuals experiencing significant fluid losses or difficulty maintaining hydration may seek professional hydration support.

Mobile IV therapy provides fluids directly into the bloodstream under professional supervision.

Every situation is unique, which is why proper medical screening is essential.

## Mobile IV Therapy at Home

Home IV therapy is one of our most requested services.

Many clients prefer receiving treatment in their own environment.

Benefits include:

- Maximum comfort
- No travel required
- No waiting rooms
- Flexible scheduling
- Personalized attention

Our nurses arrive equipped with all necessary supplies and administer treatment while you relax at home.

## Mobile IV Therapy at Hotels

South Florida welcomes millions of visitors each year.

Many travelers experience:

- Jet lag
- Dehydration
- Travel fatigue
- Heat exhaustion
- Stomach illness

Instead of searching for an urgent care center in an unfamiliar city, our team can travel directly to your hotel.

We frequently serve clients staying in [Miami Beach, Brickell, Downtown Miami, Sunny Isles Beach, Aventura, Fort Lauderdale, Boca Raton, Delray Beach, and West Palm Beach](/service-areas).

## Mobile IV Therapy for Athletes

Hydration plays a critical role in athletic performance and recovery.

Many athletes prioritize hydration before and after:

- Endurance events
- Intense training sessions
- Competitions
- Travel tournaments

Athletes often appreciate the convenience of receiving professional hydration services without disrupting their training schedule.

## Mobile IV Therapy for Events

Group wellness services have become increasingly popular for:

- Corporate events
- Wellness retreats
- Weddings
- Bachelor parties
- Bachelorette parties
- Sporting events
- Conferences

Our [Mobile IV Lounge](/mobile-iv-lounge) and event services allow guests to receive hydration support in a professional and comfortable setting.

## Our Most Requested IV Drips

Several of our IV protocols come up again and again in client bookings. Each one targets a different goal, and our clinicians can help you choose the right starting point.

- [Immunity Shield](/services/iv-therapy/immunity-shield) — vitamin C, zinc, and B-Complex to support your immune system during cold and flu season or before travel.
- [Hangover Hero](/services/iv-therapy/hangover-hero) — aggressive rehydration, B-vitamins, and anti-nausea medication when needed.
- [Original Myers Cocktail](/services/iv-therapy/original-myers) — the classic blend of magnesium, calcium, B-vitamins, and vitamin C for everyday energy and wellness.
- [NAD+ Revive](/services/iv-therapy/nad-revive) — high-dose NAD+ infusion for cellular repair, mental clarity, and longevity protocols.
- [Pure Hydration](/services/iv-therapy/pure-hydration) — straightforward fluid and electrolyte replacement when hydration alone is the goal.

Browse the full menu on our [IV Therapy services page](/services/iv-therapy).

## What Nurses Check Before Starting an IV

At Skilled Visits, every appointment begins with a clinical assessment.

We evaluate:

### Blood Pressure

Abnormal blood pressure readings may require additional evaluation before treatment.

### Heart Rate

Vital signs help determine whether treatment is appropriate.

### Medical History

Certain medical conditions require special consideration.

### Current Symptoms

Understanding the full clinical picture helps ensure safety.

### Medications

Medication interactions and underlying conditions must be considered.

Not every client is automatically a candidate for treatment.

In some cases, we recommend evaluation by an urgent care center or emergency department instead.

Safety always comes first.

## When We May Decline Treatment

One of the most important differences between experienced healthcare professionals and wellness providers is knowing when not to proceed.

Examples may include:

- Severely elevated blood pressure
- Chest pain
- Difficulty breathing
- Signs of stroke
- Severe dehydration requiring hospital care
- Unstable medical conditions

When necessary, we recommend a higher level of medical care.

Protecting patient safety will always be more important than completing a treatment.

## Mobile IV Therapy in Miami

Miami residents and visitors frequently seek mobile IV therapy for:

- Travel recovery
- Wellness support
- Busy professional schedules
- Event recovery
- Athletic recovery

Our team provides service throughout [Miami and surrounding communities](/service-areas/miami).

## Mobile IV Therapy in Fort Lauderdale

Fort Lauderdale's active lifestyle, boating culture, and year-round outdoor activities make hydration support a common request.

We provide mobile IV therapy services throughout [Fort Lauderdale and nearby areas](/service-areas/fort-lauderdale).

## Mobile IV Therapy in Boca Raton

Boca Raton residents appreciate concierge healthcare services that prioritize convenience and professionalism.

Our mobile services bring [hydration and wellness support directly to homes, offices, and hotels throughout Boca Raton](/service-areas/boca-raton).

## Mobile IV Therapy in Palm Beach County

From Delray Beach to West Palm Beach and Palm Beach Island, Skilled Visits provides mobile wellness services throughout [Palm Beach County](/service-areas/palm-beach).

Whether at home, work, or a hotel, our team comes directly to you.

## What Our Clients Say

Real reviews from clients across South Florida who've experienced concierge mobile IV therapy with Skilled Visits.

> "Received an IV therapy last minute before my best friend's wedding. I was literally so sick and vomiting. Rudy came and gave me a liter IV bag with medication that healed me. I'm so glad he came within 30 minutes of me calling." — **Manhattan Laser Spa**

> "I scheduled an appointment for them to come to our home on Friday night after a night out drinking to get an IV for my wife and me. We had an early flight Saturday morning and wanted to feel our best before traveling. They arrived on time, were professional, and provided excellent service. I highly recommend them 100% if you're in the Fort Lauderdale area. Thanks!" — **Igor Charta**

> "Fast and professional. Came to my apartment in Sunny Isles and provided quick liver support IV. 100% recommend. Thanks." — **Вадим Ишутин**

## Why Choose Skilled Visits?

At Skilled Visits, healthcare is more than a service — it's our profession.

Our team is led by experienced healthcare professionals who prioritize:

- Safety
- Professionalism
- Clinical judgment
- Convenience
- Exceptional patient experiences

We proudly provide:

- [Mobile IV Therapy](/services/iv-therapy)
- [Wellness Shots](/services/wellness-shots)
- [Mobile Blood Draws](/services/blood-draws)
- Concierge Wellness Services
- [Mobile IV Lounge Services](/mobile-iv-lounge)

Every visit begins with proper screening, assessment, and individualized care.

## Frequently Asked Questions

### How long does a mobile IV therapy appointment take?

Most appointments take approximately 30 to 60 minutes, depending on the selected treatment.

### Can I receive IV therapy at my hotel?

Yes. We regularly provide services at hotels, residences, offices, and approved event locations throughout South Florida.

### Do I need to leave my house?

No. Our nurses travel directly to your location.

### Are mobile IV services available on weekends?

Yes. Availability varies by schedule and location.

### What areas do you serve?

We serve Miami-Dade, Broward, and Palm Beach counties.

### Is IV therapy safe?

All treatments begin with medical screening and are administered by trained healthcare professionals. Not every client will be a candidate for treatment.

## Schedule Mobile IV Therapy with Skilled Visits

If you've been searching for "Mobile IV Therapy Near Me," Skilled Visits is here to help.

We proudly provide professional [mobile IV therapy](/services/iv-therapy) services throughout [South Florida](/service-areas), bringing healthcare convenience directly to your door.

Whether you're at home, staying in a hotel, recovering after travel, preparing for an event, or simply prioritizing your wellness, our experienced team is ready to deliver exceptional care wherever you are.`,
    faqs: [
      {
        q: "How long does a mobile IV therapy appointment take?",
        a: "Most appointments take approximately 30 to 60 minutes, depending on the selected treatment.",
      },
      {
        q: "Can I receive IV therapy at my hotel?",
        a: "Yes. We regularly provide services at hotels, residences, offices, and approved event locations throughout South Florida.",
      },
      {
        q: "Do I need to leave my house?",
        a: "No. Our nurses travel directly to your location.",
      },
      {
        q: "Are mobile IV services available on weekends?",
        a: "Yes. Availability varies by schedule and location.",
      },
      {
        q: "What areas do you serve?",
        a: "We serve Miami-Dade, Broward, and Palm Beach counties.",
      },
      {
        q: "Is IV therapy safe?",
        a: "All treatments begin with medical screening and are administered by trained healthcare professionals. Not every client will be a candidate for treatment.",
      },
    ],
  },
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
// Supports: ## h2, ### h3, "- " list items (groups consecutive),
// "> " blockquotes, paragraphs, **bold**, [text](url).
export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "blockquote"; text: string };

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
    if (line.startsWith("> ")) {
      flushParagraph();
      flushList();
      blocks.push({ type: "blockquote", text: line.slice(2).trim() });
      continue;
    }
    flushList();
    buffer.push(line);
  }
  flushParagraph();
  flushList();
  return blocks;
}

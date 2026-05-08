// Real Instagram feed via Behold (https://behold.so).
//
// Setup steps for the customer:
//  1. Sign up at https://behold.so (free tier is enough for one feed)
//  2. Connect their @skilledvisits Instagram account (must be Business or Creator)
//  3. From the Behold dashboard, copy the feed ID (looks like "abc123-def456")
//  4. Add it to the project env: BEHOLD_FEED_ID=...
//     (in dev: .env.local; in prod: hosting provider's env var settings)
//  5. Redeploy / restart dev server.
//
// If BEHOLD_FEED_ID is not set, the section gracefully falls back to placeholder
// posts using existing site imagery so the layout doesn't break.

export type InstagramPost = {
  id: string;
  mediaUrl: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  permalink: string;
  caption: string;
  thumbnailUrl?: string;
};

const PLACEHOLDER_POSTS: InstagramPost[] = [
  {
    id: "ph-1",
    mediaUrl: "/van-side-1.jpg",
    mediaType: "IMAGE",
    permalink: "https://instagram.com/skilledvisits",
    caption:
      "The mobile suite, fully stocked and en route. Same clinician, end to end.",
  },
  {
    id: "ph-2",
    mediaUrl: "/nad-revive.jpeg",
    mediaType: "IMAGE",
    permalink: "https://instagram.com/skilledvisits",
    caption: "NAD+ Revive — cellular restoration at depth.",
  },
  {
    id: "ph-3",
    mediaUrl: "/svahero1.jpg",
    mediaType: "IMAGE",
    permalink: "https://instagram.com/skilledvisits",
    caption: "Behind every visit: licensed clinicians who actually listen.",
  },
  {
    id: "ph-4",
    mediaUrl: "/her-beauty.jpeg",
    mediaType: "IMAGE",
    permalink: "https://instagram.com/skilledvisits",
    caption: "Her Beauty — biotin, glutathione, and high-dose vitamin C.",
  },
  {
    id: "ph-5",
    mediaUrl: "/mobilesuite.png",
    mediaType: "IMAGE",
    permalink: "https://instagram.com/skilledvisits",
    caption: "The luxury mobile suite parks where you need it. Discreet by design.",
  },
  {
    id: "ph-6",
    mediaUrl: "/wellnessshot.png",
    mediaType: "IMAGE",
    permalink: "https://instagram.com/skilledvisits",
    caption: "Wellness shots — vitamin support that takes 5 minutes.",
  },
];

type BeholdPost = {
  id: string;
  mediaType?: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  mediaUrl?: string;
  thumbnailUrl?: string;
  permalink?: string;
  caption?: string;
  sizes?: {
    medium?: { mediaUrl?: string };
    large?: { mediaUrl?: string };
  };
};

type BeholdResponse = {
  posts?: BeholdPost[];
};

export async function getInstagramPosts(limit = 6): Promise<InstagramPost[]> {
  const feedId = process.env.BEHOLD_FEED_ID;
  if (!feedId) return PLACEHOLDER_POSTS.slice(0, limit);

  try {
    const res = await fetch(`https://feeds.behold.so/${feedId}`, {
      next: { revalidate: 1800 }, // refresh every 30 minutes
    });
    if (!res.ok) throw new Error(`Behold ${res.status}`);
    const data = (await res.json()) as BeholdResponse;
    const posts = data.posts ?? [];
    return posts.slice(0, limit).map<InstagramPost>((p) => ({
      id: p.id,
      mediaUrl:
        p.sizes?.medium?.mediaUrl ??
        p.mediaUrl ??
        p.thumbnailUrl ??
        "",
      mediaType: p.mediaType ?? "IMAGE",
      permalink: p.permalink ?? "https://instagram.com/skilledvisits",
      caption: p.caption ?? "",
      thumbnailUrl: p.thumbnailUrl,
    }));
  } catch (err) {
    console.warn("[instagram] Behold fetch failed, using placeholders:", err);
    return PLACEHOLDER_POSTS.slice(0, limit);
  }
}

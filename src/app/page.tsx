import { Hero } from "@/components/home/hero";
import { TrustMarquee } from "@/components/home/trust-marquee";
import { ServicesGrid } from "@/components/home/services-grid";
import { Spotlight } from "@/components/home/spotlight";
import { Process } from "@/components/home/process";
import { Stats } from "@/components/home/stats";
import { GoogleReviews } from "@/components/home/google-reviews";
import { Instagram } from "@/components/home/instagram";
import { CTA } from "@/components/home/cta";
import { getInstagramPosts } from "@/lib/instagram";

export default async function Home() {
  const instagramPosts = await getInstagramPosts(6);

  return (
    <>
      <Hero />
      <TrustMarquee />
      <ServicesGrid />
      <Spotlight />
      <Process />
      <Stats />
      <GoogleReviews />
      <Instagram posts={instagramPosts} />
      <CTA />
    </>
  );
}

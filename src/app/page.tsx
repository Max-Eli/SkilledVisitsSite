import { Hero } from "@/components/home/hero";
import { TrustMarquee } from "@/components/home/trust-marquee";
import { ServicesGrid } from "@/components/home/services-grid";
import { Spotlight } from "@/components/home/spotlight";
import { Process } from "@/components/home/process";
import { Stats } from "@/components/home/stats";
import { Testimonials } from "@/components/home/testimonials";
import { CTA } from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <ServicesGrid />
      <Spotlight />
      <Process />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}

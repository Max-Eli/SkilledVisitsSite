import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { FeaturedTreatments } from "@/components/home/featured-treatments";
import { WhySkilledVisits } from "@/components/home/why-skilled-visits";
import { MobileLoungePromo } from "@/components/home/mobile-lounge-promo";
import { Testimonials } from "@/components/home/testimonials";
import { AreasWeServe } from "@/components/home/areas-we-serve";
import { CTA } from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <FeaturedTreatments />
      <WhySkilledVisits />
      <MobileLoungePromo />
      <Testimonials />
      <AreasWeServe />
      <CTA />
    </>
  );
}

import type { Metadata } from "next";
import { BRAND } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    "Book your concierge mobile IV therapy or wellness appointment with Skilled Visits.",
  alternates: {
    canonical: "https://skilledvisits.com/book",
  },
};

export default function BookPage() {
  // The nav hides itself on this route; pull the section up under the
  // layout's nav-clearance padding so the embed fills the viewport.
  return (
    <section className="-mt-20 md:-mt-24">
      <iframe
        src={BRAND.bookingEmbedUrl}
        title="Skilled Visits online booking"
        className="block h-screen min-h-[640px] w-full"
        allow="payment"
      />
    </section>
  );
}

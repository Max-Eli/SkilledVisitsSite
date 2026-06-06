// City-level landing page data for local SEO.
// One entry per city we want to rank for. Each generates a static page at
// /service-areas/<slug>. Copy is intentionally city-specific to avoid the
// near-duplicate-content penalty Google applies to template-stuffed pages.

import {
  Hotel,
  Sailboat,
  Briefcase,
  Home,
  Plane,
  Heart,
  Building2,
  type LucideIcon,
} from "lucide-react";
import { BRAND } from "@/lib/content";

export type CityUseCase = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export type CityFAQ = { q: string; a: string };

export type CityPage = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  heroTagline: string; // 1-line eyebrow above the H1
  heroAccent: string; // italicized portion of the H1
  intro: string; // 2-3 sentence lead paragraph below the H1
  body: string[]; // editorial paragraphs that follow the hero
  neighborhoods: string[];
  useCases: CityUseCase[];
  faqs: CityFAQ[];
  phone: string;
  heroImage: string;
};

export const CITY_PAGES: CityPage[] = [
  {
    slug: "miami",
    name: "Miami",
    metaTitle: "Mobile IV Therapy in Miami | Skilled Visits",
    metaDescription:
      "Concierge mobile IV therapy, wellness shots, and blood draws across Miami — South Beach, Brickell, Sunny Isles, and beyond. Same-day, 24/7.",
    heroTagline: "Mobile IV Therapy",
    heroAccent: "in Miami.",
    intro:
      "Skilled Visits brings licensed nurses, medical-grade IV infusions, and concierge wellness services to your door across Miami — from South Beach to Brickell, Coconut Grove to Sunny Isles.",
    body: [
      "Miami runs on a different clock. Nightlife rolls into early-morning flights, beachside afternoons turn into rooftop events, and clients juggle work, travel, and recovery on schedules that don't tolerate waiting rooms. Our mobile clinical team arrives with everything needed to deliver hydration, recovery, immune support, or longevity protocols wherever you are — typically within 60–90 minutes of booking.",
      "We serve hotels along Collins Avenue, residences in Brickell and Edgewater, yachts at Miami Beach Marina and Sunset Harbour, and corporate offices across Wynwood, Doral, and the Design District. Whether it's a Saturday-morning hangover IV in your hotel suite or a pre-event vitamin drip before a launch party, the visit happens on your terms.",
    ],
    neighborhoods: [
      "Miami Beach",
      "South Beach",
      "Mid Beach",
      "Sunny Isles Beach",
      "Bal Harbour",
      "Surfside",
      "Aventura",
      "Brickell",
      "Downtown Miami",
      "Edgewater",
      "Wynwood",
      "Coconut Grove",
      "Coral Gables",
      "Key Biscayne",
      "Pinecrest",
      "Doral",
      "Design District",
    ],
    useCases: [
      {
        icon: Hotel,
        title: "Hotel Curbside",
        body: "In-room IV service across South Beach, Brickell, and Downtown — discreet, fast, no lobby wait.",
      },
      {
        icon: Sailboat,
        title: "Yacht & Marina",
        body: "Slip-side service at Miami Beach Marina, Sunset Harbour, and private docks. We bring everything to the boat.",
      },
      {
        icon: Briefcase,
        title: "Corporate Wellness",
        body: "Onsite team drips and wellness shots at offices across Brickell, Wynwood, and the Design District.",
      },
      {
        icon: Heart,
        title: "Events & Weddings",
        body: "Bachelor parties, wedding-morning recovery, milestone birthdays, retreats. Our Mobile IV Lounge can park onsite.",
      },
      {
        icon: Home,
        title: "Home Visits",
        body: "Concierge wellness in your residence across Miami-Dade. Most appointments take 30 to 60 minutes door-to-door.",
      },
      {
        icon: Plane,
        title: "Pre & Post-Travel",
        body: "Hydration before international flights at MIA, recovery the day you land. A common booking for frequent flyers.",
      },
    ],
    faqs: [
      {
        q: "How quickly can a nurse arrive in Miami?",
        a: "Most appointments are dispatched within 60 to 90 minutes of booking, depending on time of day and location. Same-day appointments are routine; members get priority.",
      },
      {
        q: "Do you serve South Beach hotels?",
        a: "Yes. We regularly serve guests at hotels along Collins Avenue, Ocean Drive, and the Mid-Beach corridor. We arrive curbside, head to your room, and treat in private.",
      },
      {
        q: "Can you come to a yacht or marina?",
        a: "Yes. We service yachts and private vessels at Miami Beach Marina, Sunset Harbour, and other private docks. Tell us the slip and we'll be there.",
      },
      {
        q: "What areas of Miami do you cover?",
        a: "All of Miami-Dade — Miami Beach, Brickell, Downtown, Coconut Grove, Coral Gables, Key Biscayne, Sunny Isles, Aventura, Bal Harbour, Surfside, Wynwood, Doral, and surrounding communities.",
      },
    ],
    phone: BRAND.phoneFL,
    heroImage: "/van-side-2.jpg",
  },
  {
    slug: "fort-lauderdale",
    name: "Fort Lauderdale",
    metaTitle: "Mobile IV Therapy in Fort Lauderdale | Skilled Visits",
    metaDescription:
      "On-demand mobile IV therapy and wellness across Fort Lauderdale — Las Olas, Victoria Park, Harbor Beach, and the marinas. Licensed nurses, same-day service.",
    heroTagline: "Mobile IV Therapy",
    heroAccent: "in Fort Lauderdale.",
    intro:
      "Skilled Visits delivers concierge IV therapy, wellness shots, and mobile blood draws throughout Fort Lauderdale — from Las Olas townhomes to Harbor Beach estates, Victoria Park to Lauderdale-by-the-Sea.",
    body: [
      "Fort Lauderdale is a boating town. We see a lot of athletic and post-marine recovery bookings — clients coming off the water dehydrated, owners and crew prepping for a charter, captains looking for IV vitamin support during long stretches at sea. Our nurses come to private residences, hotels, and the slip — wherever the visit makes sense.",
      "Beyond the water, we serve Fort Lauderdale's busy professionals and travelers. Office wellness in downtown's high-rises, hotel visits along the Beach Boulevard corridor, and routine concierge wellness across Coral Ridge, Rio Vista, and Victoria Park. Same-day appointments are typical, and the visit takes 30 to 60 minutes door-to-door.",
    ],
    neighborhoods: [
      "Downtown Fort Lauderdale",
      "Las Olas",
      "Victoria Park",
      "Rio Vista",
      "Coral Ridge",
      "Harbor Beach",
      "Lauderdale-by-the-Sea",
      "Pompano Beach",
      "Hollywood",
      "Hallandale Beach",
      "Wilton Manors",
      "Plantation",
      "Sunrise",
    ],
    useCases: [
      {
        icon: Sailboat,
        title: "Boating & Marina",
        body: "Slip-side service across Fort Lauderdale's marinas. Pre-charter prep, captain hydration, post-trip recovery for guests.",
      },
      {
        icon: Hotel,
        title: "Beachside Hotels",
        body: "In-room IV service at hotels along A1A and Las Olas. Discreet, professional, on your schedule.",
      },
      {
        icon: Home,
        title: "Residential",
        body: "Home visits across Harbor Beach, Coral Ridge, Rio Vista, and Victoria Park. A common booking for ongoing wellness routines.",
      },
      {
        icon: Briefcase,
        title: "Corporate",
        body: "Onsite wellness for teams across Fort Lauderdale's downtown offices and corporate parks.",
      },
      {
        icon: Heart,
        title: "Events & Recovery",
        body: "Wedding-morning recovery, group bookings, retreats. Our Mobile IV Lounge can serve groups of up to four guests onsite.",
      },
      {
        icon: Plane,
        title: "Pre & Post-Travel",
        body: "Pre-flight hydration and post-landing recovery for travelers using Fort Lauderdale-Hollywood International (FLL).",
      },
    ],
    faqs: [
      {
        q: "Do you come to private boats and yachts?",
        a: "Yes. Slip-side service is one of our most common Fort Lauderdale bookings. Tell us the marina and slip — we bring everything to the boat.",
      },
      {
        q: "How quickly can you arrive in Fort Lauderdale?",
        a: "Most same-day bookings are dispatched within 60 to 90 minutes. Members receive priority scheduling.",
      },
      {
        q: "What neighborhoods do you serve?",
        a: "All of greater Fort Lauderdale — Las Olas, Victoria Park, Coral Ridge, Harbor Beach, Rio Vista, Lauderdale-by-the-Sea, Pompano Beach, Hollywood, Hallandale, Wilton Manors, and surrounding communities.",
      },
      {
        q: "Can you serve me at a Fort Lauderdale hotel?",
        a: "Yes. We regularly visit guests at hotels along A1A and Las Olas Boulevard. Curbside arrival, in-room treatment, complete privacy.",
      },
    ],
    phone: BRAND.phoneFL,
    heroImage: "/van-side-1.jpg",
  },
  {
    slug: "boca-raton",
    name: "Boca Raton",
    metaTitle: "Mobile IV Therapy in Boca Raton | Skilled Visits",
    metaDescription:
      "Discreet, professional mobile IV therapy across Boca Raton — Royal Palm, East Boca, Mizner Park, Boca West. Licensed nurses, same-day appointments.",
    heroTagline: "Mobile IV Therapy",
    heroAccent: "in Boca Raton.",
    intro:
      "Skilled Visits provides concierge mobile IV therapy, wellness shots, and mobile blood draws across Boca Raton — Royal Palm, East Boca, Boca West, Highland Beach, and the corporate parks along Glades Road.",
    body: [
      "Boca Raton clients value two things in healthcare: discretion and professionalism. Our nurses arrive on time, in an unmarked clinical bag, and deliver the same treatment you'd receive at a top wellness clinic — only inside your home, office, or country-club residence. Most visits take 30 to 60 minutes from setup to finish.",
      "We serve residential clients across East Boca, Royal Palm Yacht & Country Club, Boca West, and Highland Beach. Corporate wellness for the office parks along Yamato and Glades. And hotel visits for travelers staying at the resorts and beachfront properties along A1A. Concierge memberships are particularly popular here for clients who want ongoing wellness on a predictable schedule.",
    ],
    neighborhoods: [
      "Downtown Boca",
      "East Boca",
      "Royal Palm Yacht & Country Club",
      "Boca West",
      "Mizner Park",
      "Boca Pointe",
      "Highland Beach",
      "Spanish River",
      "Sandalfoot Cove",
      "Boca Bath & Tennis",
      "Broken Sound",
    ],
    useCases: [
      {
        icon: Home,
        title: "Residential",
        body: "Discreet in-home visits across East Boca, Royal Palm, Highland Beach, and the country clubs. Most-booked use case in Boca.",
      },
      {
        icon: Building2,
        title: "Country Club",
        body: "We serve residences at Boca West, Broken Sound, St. Andrews, and other country-club communities.",
      },
      {
        icon: Briefcase,
        title: "Corporate",
        body: "Onsite wellness for teams across Boca's corporate parks — Glades, Yamato, and Town Center.",
      },
      {
        icon: Hotel,
        title: "Resort & Hotel",
        body: "In-room IV service for guests at Boca's resorts and beachfront hotels along A1A.",
      },
      {
        icon: Heart,
        title: "Wellness Routines",
        body: "Memberships and protocol-based wellness for clients who want ongoing care on a predictable cadence.",
      },
      {
        icon: Plane,
        title: "Pre & Post-Travel",
        body: "Hydration before and after travel out of FLL and PBI. A standard booking for frequent flyers in the area.",
      },
    ],
    faqs: [
      {
        q: "Do you serve country-club communities in Boca?",
        a: "Yes — Boca West, Broken Sound, St. Andrews, Royal Palm, and other gated communities. Our nurses arrive professionally and check in at the gate as needed.",
      },
      {
        q: "Is this discreet enough for my residence?",
        a: "Yes. Our team arrives in regular clinical attire with a single bag of supplies. No branding required at your door. Most clients tell us the visit feels like a private wellness appointment.",
      },
      {
        q: "Do you offer recurring memberships in Boca?",
        a: "Yes. Memberships are popular with Boca clients who want predictable, ongoing wellness. Plans range from monthly drips to fully tailored protocols.",
      },
      {
        q: "What's the response time in Boca Raton?",
        a: "Same-day appointments are routine. Most visits dispatch within 60 to 90 minutes. Members receive priority scheduling.",
      },
    ],
    phone: BRAND.phoneFL,
    heroImage: "/van-rear-1.jpg",
  },
  {
    slug: "palm-beach",
    name: "Palm Beach",
    metaTitle: "Mobile IV Therapy in Palm Beach | Skilled Visits",
    metaDescription:
      "Mobile IV therapy and concierge wellness across Palm Beach Island, West Palm Beach, Wellington, and Jupiter. Licensed nurses, discreet 24/7 service.",
    heroTagline: "Mobile IV Therapy",
    heroAccent: "in Palm Beach.",
    intro:
      "Skilled Visits delivers concierge IV therapy, wellness shots, and mobile blood draws across Palm Beach Island and Palm Beach County — from oceanfront estates to West Palm offices, Wellington equestrian compounds to Jupiter homes.",
    body: [
      "Palm Beach is one of our most established service regions. We serve oceanfront estates on Palm Beach Island, residential clients in West Palm Beach and Singer Island, equestrian families in Wellington during the season, and travelers passing through PBI airport. The common thread is the level of service expectation — appointments are precise, nurses arrive prepared, and the visit feels like the high end of private healthcare.",
      "Whether it's a pre-event vitamin drip before a Worth Avenue gala, recovery support during equestrian season, or routine wellness for a family in Jupiter, we structure the visit around your schedule. Concierge memberships are common here for clients who travel between residences and want consistent care wherever they are.",
    ],
    neighborhoods: [
      "Palm Beach Island",
      "West Palm Beach",
      "Singer Island",
      "Wellington",
      "Jupiter",
      "Palm Beach Gardens",
      "North Palm Beach",
      "Lake Worth",
      "Delray Beach",
      "Boynton Beach",
      "Manalapan",
      "Tequesta",
    ],
    useCases: [
      {
        icon: Home,
        title: "Estate Visits",
        body: "Discreet in-home service across Palm Beach Island, Manalapan, and oceanfront residences. Our most common booking on the island.",
      },
      {
        icon: Heart,
        title: "Equestrian Season",
        body: "Recovery and hydration support during Wellington's competition season for riders, trainers, and visiting families.",
      },
      {
        icon: Hotel,
        title: "Resort & Hotel",
        body: "In-room visits at the Breakers, Eau, and other luxury properties. Curbside arrival, complete discretion.",
      },
      {
        icon: Briefcase,
        title: "Corporate",
        body: "Onsite wellness at offices across West Palm and Palm Beach Gardens.",
      },
      {
        icon: Plane,
        title: "Travel Recovery",
        body: "Pre and post-flight hydration for travelers using Palm Beach International (PBI). Same-day bookings are common.",
      },
      {
        icon: Building2,
        title: "Concierge Members",
        body: "Memberships are popular with Palm Beach clients who split time between residences. We coordinate care across locations.",
      },
    ],
    faqs: [
      {
        q: "Do you come to Palm Beach Island?",
        a: "Yes. Palm Beach Island estates are one of our most common bookings. Our nurses arrive professionally and discreetly, with no signage on the vehicle required.",
      },
      {
        q: "Can you support Wellington equestrian season?",
        a: "Yes. We serve riders, trainers, families, and visiting clients across Wellington throughout the season. Hydration, recovery, and protocol-based wellness are routine bookings.",
      },
      {
        q: "Do you visit luxury hotels like the Breakers?",
        a: "Yes. We regularly serve guests at the Breakers, Eau Palm Beach, and other resort properties. Curbside arrival, in-room treatment, full discretion.",
      },
      {
        q: "What areas of Palm Beach County do you cover?",
        a: "All of Palm Beach County — Palm Beach Island, West Palm Beach, Singer Island, Wellington, Jupiter, Palm Beach Gardens, North Palm Beach, Manalapan, Lake Worth, Delray Beach, Boynton Beach, and surrounding areas.",
      },
    ],
    phone: BRAND.phoneFL,
    heroImage: "/van-rear-2.jpg",
  },
];

export function getCity(slug: string): CityPage | undefined {
  return CITY_PAGES.find((c) => c.slug === slug);
}

export function citySlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const BRAND = {
  name: "Skilled Visits",
  tagline: "Wellness, delivered.",
  email: "info@skilledvisits.com",
  phoneFL: "(305) 808-7777",
  phoneNY: "(888) 664-3964",
  hours: "Available 24 / 7",
  social: {
    instagram: "https://instagram.com/skilledvisits",
    facebook: "https://facebook.com/skilledvisits",
    x: "https://x.com/skilledvisits",
  },
};

export const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/service-areas", label: "Where We Serve" },
  { href: "/referrals", label: "Referrals" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  category: "IV" | "Aesthetic" | "Wellness" | "Diagnostic";
  highlights: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "iv-therapy",
    name: "IV Therapy",
    tagline: "Intravenous wellness, engineered for you.",
    description:
      "Custom intravenous formulations delivered to you by licensed clinicians. From next-day recovery to deep cellular repair with NAD+, every drip is tailored to your biology, your schedule, and your goals.",
    image: "/iv.png",
    category: "IV",
    highlights: [
      "Energy • Myers • Hangover • NAD+",
      "Immune • Hydration • Beauty",
      "Detox • Athletic Recovery",
    ],
  },
  {
    slug: "botox",
    name: "Botox",
    tagline: "Subtle refinement. Unmistakable results.",
    description:
      "Precision neuromodulator treatments from board-certified providers. We emphasize natural movement, gentle softening of lines, and results that feel like a better version of you — never frozen.",
    image: "/botox.png",
    category: "Aesthetic",
    highlights: ["Forehead & frown lines", "Crow's feet", "Preventative dosing"],
  },
  {
    slug: "dermal-fillers",
    name: "Dermal Fillers",
    tagline: "Restore volume. Honor your features.",
    description:
      "Hyaluronic acid fillers placed with a surgeon's eye for proportion and balance. Lips, cheeks, jawline, under-eyes — artistry in millimeters, refined over a private in-home consultation.",
    image: "/dermalfiller.png",
    category: "Aesthetic",
    highlights: ["Lip enhancement", "Cheek & jawline contouring", "Tear-trough refinement"],
  },
  {
    slug: "wellness-shots",
    name: "Wellness Shots",
    tagline: "Targeted micronutrients. Immediate effect.",
    description:
      "Intramuscular vitamin and amino-acid shots for sustained energy, sharper focus, and metabolic support. Ideal as a standalone visit or paired with your IV protocol.",
    image: "/wellnessshot.png",
    category: "Wellness",
    highlights: ["B-12 • Lipo-Mino", "Glutathione • Vitamin D", "Amino blends"],
  },
  {
    slug: "rapid-tests",
    name: "Rapid Tests",
    tagline: "On-site diagnostics. Same-visit answers.",
    description:
      "Rapid-turnaround testing administered in-home by licensed professionals — discreet, comfortable, and back to you without the waiting room.",
    image: "/rapidtesting.png",
    category: "Diagnostic",
    highlights: ["COVID-19 PCR & antigen", "Strep • Flu • RSV", "STI panels"],
  },
  {
    slug: "blood-draws",
    name: "Blood Draws",
    tagline: "Lab-grade panels, drawn in your living room.",
    description:
      "Mobile phlebotomy for comprehensive wellness panels, hormone work, and physician-ordered labs. Transported to accredited partner labs with chain-of-custody care.",
    image: "/blooddraw.png",
    category: "Diagnostic",
    highlights: ["Executive wellness panels", "Hormone testing", "Physician-ordered labs"],
  },
  {
    slug: "virtual-consultation",
    name: "Virtual Consultation",
    tagline: "Expert guidance, before we arrive.",
    description:
      "A private video consultation with one of our clinicians to review your history, set goals, and design a protocol — so when we arrive, everything is ready.",
    image:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1600&q=80",
    category: "Wellness",
    highlights: ["Licensed clinicians", "Full history review", "Protocol design"],
  },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Book a private consultation",
    body: "Schedule a video consultation with a licensed clinician. We review your history, discuss your goals, and design a protocol tailored to you.",
  },
  {
    step: "02",
    title: "Choose your time & place",
    body: "Select a date, time, and location — your home, office, hotel, or our luxury mobile suite. Choose a preferred practitioner from our network.",
  },
  {
    step: "03",
    title: "Prepare in comfort",
    body: "Complete intake forms and set up a calm corner. Hydrate well and relax. We handle everything else.",
  },
  {
    step: "04",
    title: "Receive, unwind, repeat",
    body: "Your clinician arrives on time, treats you in a serene setting, and follows up with a virtual check-in. That's the standard.",
  },
];

export const SERVICE_AREAS = {
  Florida: {
    phone: BRAND.phoneFL,
    cities: ["Miami-Dade", "Broward", "Palm Beach"],
    hero: "https://images.unsplash.com/photo-1513415277900-a62401e19be4?auto=format&fit=crop&w=1600&q=80",
  },
  "New York": {
    phone: BRAND.phoneNY,
    cities: ["Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island"],
    hero: "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=1600&q=80",
  },
};

export const TRUST_POINTS = [
  { label: "Licensed Clinicians", detail: "Board-certified MDs, NPs & RNs" },
  { label: "FDA-Approved", detail: "Only vetted, compliant products" },
  { label: "24/7 Availability", detail: "On-demand, every day of the year" },
  { label: "Concierge Standard", detail: "Private, discreet, uncompromising" },
];

export const STATS = [
  { value: "24/7", label: "Availability" },
  { value: "2", label: "States served" },
  { value: "15+", label: "Custom protocols" },
  { value: "100%", label: "Licensed clinicians" },
];

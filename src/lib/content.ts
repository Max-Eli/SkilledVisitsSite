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

export type Cocktail = {
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
  image: string;
};

export type Service = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  category: "IV" | "Wellness" | "Diagnostic";
  highlights: string[];
  cocktails?: Cocktail[];
};

export const IV_COCKTAILS: Cocktail[] = [
  {
    name: "Original Myers",
    tagline: "The classic restorative blend.",
    description:
      "B-vitamins, magnesium, and calcium — Myers' original formulation, ideal for daily wellness, stress relief, and whole-body restoration.",
    benefits: ["B-Complex", "Magnesium", "Daily Wellness"],
    image: "/original-myers.jpeg",
  },
  {
    name: "NAD+ Revive",
    tagline: "Cellular restoration at depth.",
    description:
      "High-dose NAD+ targeting mitochondrial repair, cognitive clarity, and longevity protocols. Ideal for serious recovery and anti-aging.",
    benefits: ["Mitochondrial Repair", "Cognitive", "Longevity"],
    image: "/nad-revive.jpeg",
  },
  {
    name: "Hangover Hero",
    tagline: "Same-morning recovery.",
    description:
      "Aggressive hydration paired with anti-nausea, anti-inflammatory medication, and a B-complex boost. Reset and back to your day in under an hour.",
    benefits: ["Rapid Hydration", "Anti-Inflammatory", "B-Complex"],
    image: "/hangover-hero.jpeg",
  },
  {
    name: "Immunity Shield",
    tagline: "Reinforce your defenses.",
    description:
      "Mega-dose vitamin C, zinc, and glutathione for immune support before travel, after exposure, or during seasonal stress.",
    benefits: ["Vitamin C", "Zinc", "Glutathione"],
    image: "/immunity-shield.jpeg",
  },
  {
    name: "Athletic Performance",
    tagline: "Muscle repair & hydration.",
    description:
      "Amino acids, magnesium, and electrolyte balance to accelerate post-training recovery, reduce soreness, and replenish what you lost.",
    benefits: ["Amino Acids", "Electrolytes", "Recovery"],
    image: "/athletic-performance.jpeg",
  },
  {
    name: "Her Beauty",
    tagline: "Skin, hair, and nails support.",
    description:
      "Biotin, glutathione, and high-dose vitamin C for collagen support and a luminous complexion — a favorite before events and shoots.",
    benefits: ["Biotin", "Glutathione", "Collagen"],
    image: "/her-beauty.jpeg",
  },
  {
    name: "Energy Charge",
    tagline: "Sharp focus, sustained drive.",
    description:
      "B12, taurine, and amino blends for sustained mental and physical energy — without the caffeine crash.",
    benefits: ["B12", "Taurine", "Amino Blend"],
    image: "/energy-charge.jpeg",
  },
  {
    name: "Custom+",
    tagline: "Designed for you, by your clinician.",
    description:
      "A fully bespoke protocol formulated during your consultation around your goals, lab results, and biology. The premium tier.",
    benefits: ["Bespoke", "Lab-Informed", "Premium"],
    image: "/custom-plus.jpeg",
  },
  {
    name: "Her Monthly",
    tagline: "Cycle support & balance.",
    description:
      "Magnesium, B-complex, and calming amino acids designed to ease cramps, fatigue, and other cycle-related symptoms.",
    benefits: ["Magnesium", "B-Complex", "Cycle Support"],
    image: "/her-monthly.jpeg",
  },
  {
    name: "Post-Surgery Recovery",
    tagline: "Heal faster, feel better.",
    description:
      "Vitamin C, zinc, and amino acids to support tissue repair, reduce inflammation, and accelerate post-operative recovery.",
    benefits: ["Tissue Repair", "Anti-Inflammatory", "Amino Acids"],
    image: "/post-surgery-recovery.jpeg",
  },
  {
    name: "Prenatal Support",
    tagline: "Gentle nourishment for two.",
    description:
      "Pregnancy-safe formulation focused on hydration, B-vitamins, and key prenatal micronutrients. Always cleared with your OB.",
    benefits: ["Pregnancy-Safe", "B-Complex", "Hydration"],
    image: "/prenatal-support.jpeg",
  },
  {
    name: "Pure Hydration",
    tagline: "Replenish, simply.",
    description:
      "Pure electrolyte and saline replenishment for dehydration, jet lag, or post-exercise recovery — no additives, no extras.",
    benefits: ["Electrolytes", "Saline", "Jet Lag"],
    image: "/pure-hydration.jpeg",
  },
  {
    name: "Stomach Rescue",
    tagline: "Settle and reset.",
    description:
      "Anti-nausea medication paired with hydration and B-complex to settle stomach issues, food poisoning, or motion sickness.",
    benefits: ["Anti-Nausea", "Hydration", "B-Complex"],
    image: "/stomach-rescue.jpeg",
  },
  {
    name: "Stress Relief",
    tagline: "Calm the nervous system.",
    description:
      "Magnesium, taurine, and calming amino acids designed to reduce stress, improve sleep, and restore nervous-system balance.",
    benefits: ["Magnesium", "Taurine", "Calming"],
    image: "/stress-relief.jpeg",
  },
  {
    name: "Ultra Flush",
    tagline: "Detox at the cellular level.",
    description:
      "Glutathione, vitamin C, and antioxidants to support liver function, neutralize free radicals, and reset after toxin exposure.",
    benefits: ["Glutathione", "Antioxidants", "Liver Support"],
    image: "/ultra-flush.jpeg",
  },
];

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
    cocktails: IV_COCKTAILS,
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
    hero: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=1600&q=80",
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

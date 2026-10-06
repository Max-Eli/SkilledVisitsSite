export const BRAND = {
  name: "Skilled Visits",
  tagline: "Wellness, delivered.",
  email: "info@skilledvisits.com",
  phoneFL: "(305) 808-7777",
  phoneNY: "(718) 465-7777",
  hours: "Available 24 / 7",
  bookingUrl: "/book",
  // External CRM booking page, embedded on /book via an iframe.
  bookingEmbedUrl: "https://skilledvisits.xn--lumcrm-5ua.com/book/skilledvisits",
  social: {
    instagram: "https://instagram.com/skilledvisits",
    facebook: "https://facebook.com/skilledvisits",
    x: "https://x.com/skilledvisits",
  },
};

export const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/mobile-iv-lounge", label: "Mobile IV Lounge" },
  { href: "/memberships", label: "Memberships" },
  { href: "/about", label: "About" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

// Extra links shown only in the footer.
export const FOOTER_EXTRA_LINKS = [
  { href: "/referrals", label: "Referrals" },
  { href: "/how-it-works", label: "How It Works" },
];

export type CocktailCategory =
  | "Recovery"
  | "Maintenance"
  | "Women's Health"
  | "Longevity"
  | "Medical Infusions";

export type Cocktail = {
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
  image: string;
  price: string;
  category: CocktailCategory;
  infusedIn?: string;
  /** Bundle price when three visits are booked together. */
  threePack?: string;
  /** Reduced price for active members. */
  memberRate?: string;
  /** Menu callout, e.g. "Best Seller". */
  badge?: string;
  /** Clearance or prescription requirement shown as fine print. */
  note?: string;
  /** Render the price as "from $X" - dosing sets the final figure. */
  priceFrom?: boolean;
};

// Slug helper for per-drip landing pages at /services/iv-therapy/<slug>.
// Non-alphanumerics (including the "+" in NAD+ / Custom+) collapse to a
// hyphen, then leading/trailing hyphens are trimmed.
export function cocktailSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export type WellnessShotTier = {
  name: string;
  price: string;
  note?: string;
  ingredients: string[];
};

export type BloodPanelCategory =
  | "General Health"
  | "Metabolic & Diabetes"
  | "Organ Function"
  | "Thyroid & Hormones"
  | "Cardiac & Nutrient"
  | "Screening";

export type BloodPanel = {
  name: string;
  description: string;
  category: BloodPanelCategory;
  price: string;
  /** Render as "from $X" - the scope of the panel sets the final figure. */
  priceFrom?: boolean;
};

export type RapidTest = {
  name: string;
  price: string;
};

export const MENU_PDF = "/skilled-visits-menu.pdf";

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

// Standard saline volume used by every infusion unless otherwise noted.
const STD_SALINE = "1 Liter 0.9% Normal Saline";

export const IV_COCKTAILS: Cocktail[] = [
  // ---- Recovery ----
  {
    name: "Immunity Shield",
    tagline: "IV armor. Infused to defend.",
    description:
      "Zinc, Vitamin C, B-Complex, and a Glutathione push for immune support before travel, after exposure, or during seasonal stress.",
    benefits: ["Zinc", "Vitamin C", "B-Complex", "Glutathione Push"],
    image: "/bags/immunity-shield.jpg",
    price: "$249",
    threePack: "$669",
    memberRate: "$215",
    badge: "Client Favorite",
    category: "Recovery",
    infusedIn: STD_SALINE,
  },
  {
    name: "Jet-Lag Reset",
    tagline: "A smooth landing for your body.",
    description:
      "Vitamin B-12, B-complex, and magnesium to reset circadian fatigue, rehydrate after long-haul travel, and feel grounded fast.",
    benefits: ["Vitamin B-12", "Vitamin C", "B-Complex", "Magnesium"],
    image: "/bags/jet-lag-reset.jpg",
    price: "$249",
    threePack: "$669",
    memberRate: "$215",
    category: "Recovery",
    infusedIn: STD_SALINE,
  },
  {
    name: "Stomach Rescue",
    tagline: "Your tummy's first responder.",
    description:
      "B-Complex, Famotidine, Magnesium, and L-Glutamine to settle stomach issues, food poisoning, motion sickness, and gut inflammation.",
    benefits: ["B-Complex", "Famotidine (Pepcid)", "Magnesium", "L-Glutamine"],
    image: "/bags/stomach-rescue.jpg",
    price: "$249",
    threePack: "$669",
    memberRate: "$215",
    note: "Includes Rx medication - provider order required",
    category: "Recovery",
    infusedIn: STD_SALINE,
  },
  {
    name: "Post-Surgery Support",
    tagline: "Faster healing. Better outcomes.",
    description:
      "Zinc, Taurine, Vitamin C, and L-Glutamine to support tissue repair, reduce inflammation, and accelerate post-operative recovery.",
    benefits: ["Zinc", "Taurine", "Vitamin C", "L-Glutamine"],
    image: "/bags/post-surgery-support.jpg",
    price: "$249",
    threePack: "$669",
    memberRate: "$215",
    note: "Requires surgeon clearance",
    category: "Recovery",
    infusedIn: STD_SALINE,
  },
  {
    name: "Hangover Hero",
    tagline: "Save the day after.",
    description:
      "Aggressive hydration paired with Ondansetron for nausea and a B-complex + mineral boost. Reset and back to your day in under an hour.",
    benefits: ["Vitamin C", "B-Complex", "Ondansetron (Zofran)", "Mineral Blend"],
    image: "/bags/hangover-hero.jpg",
    price: "$249",
    threePack: "$669",
    memberRate: "$215",
    badge: "Best Seller",
    note: "Includes Rx medication - provider order required",
    category: "Recovery",
    infusedIn: STD_SALINE,
  },
  {
    name: "Athletic Performance",
    tagline: "Optimize. Perform. Dominate.",
    description:
      "Taurine, L-Carnitine, and an amino blend to boost endurance, accelerate recovery, and replenish the minerals you lose under load.",
    benefits: ["Taurine", "L-Carnitine", "B-Complex", "Magnesium", "Amino Blend"],
    image: "/bags/athletic-performance.jpg",
    price: "$299",
    threePack: "$809",
    memberRate: "$215",
    category: "Recovery",
    infusedIn: STD_SALINE,
  },

  // ---- Maintenance ----
  {
    name: "Pure Hydration",
    tagline: "Simple replenishment.",
    description:
      "Pure 0.9% Normal Saline for straightforward dehydration, post-flight recovery, or rebalancing fluids without additives.",
    benefits: ["No Vitamins", "0.9% Normal Saline"],
    image: "/bags/pure-hydration.jpg",
    price: "$199",
    threePack: "$539",
    memberRate: "$179",
    category: "Maintenance",
    infusedIn: STD_SALINE,
  },
  {
    name: "Energy Charge",
    tagline: "Energize from within.",
    description:
      "Vitamin B-12, Vitamin C, B-Complex, and L-Carnitine for sustained mental and physical energy, without the caffeine crash.",
    benefits: ["Vitamin B-12", "Vitamin C", "B-Complex", "L-Carnitine"],
    image: "/bags/energy-charge.jpg",
    price: "$249",
    threePack: "$669",
    memberRate: "$215",
    category: "Maintenance",
    infusedIn: STD_SALINE,
  },
  {
    name: "Custom+",
    tagline: "Create your FOURmula.",
    description:
      "Choose any 4 of 11 active nutrients to build your own bespoke infusion, designed with your clinician around your goals.",
    benefits: [
      "Vitamin B-12",
      "Vitamin C",
      "B-Complex",
      "Biotin",
      "Magnesium",
      "Zinc",
      "Taurine",
      "Amino Acids",
      "L-Carnitine",
      "Glutamine",
      "Glutathione",
    ],
    image: "/bags/custom-plus.jpg",
    price: "$249",
    threePack: "$669",
    memberRate: "$215",
    category: "Maintenance",
    infusedIn: STD_SALINE,
  },
  {
    name: "Stress Relief",
    tagline: "The peace potion.",
    description:
      "Taurine, magnesium, and B-complex to ease tension, improve sleep quality, and restore nervous-system balance.",
    benefits: ["Taurine", "B-Complex", "Magnesium", "Vitamin C"],
    image: "/bags/stress-relief.jpg",
    price: "$249",
    threePack: "$669",
    memberRate: "$215",
    category: "Maintenance",
    infusedIn: STD_SALINE,
  },
  {
    name: "Original Myers",
    tagline: "The classic blend.",
    description:
      "Vitamin B-12, Vitamin C, Calcium, B-Complex, and Magnesium. The original Myers formulation, ideal for daily wellness and whole-body restoration.",
    benefits: ["Vitamin B-12", "Vitamin C", "Calcium", "B-Complex", "Magnesium"],
    image: "/bags/original-myers.jpg",
    price: "$299",
    threePack: "$809",
    memberRate: "$215",
    badge: "Most Popular",
    category: "Maintenance",
    infusedIn: STD_SALINE,
  },
  {
    name: "Ultra Flush",
    tagline: "Double the fluids. Deeper the flush.",
    description:
      "Vitamin C, Glutathione, NAC, and Alpha Lipoic Acid in a 2-liter infusion to support the liver, neutralize free radicals, and deeply flush the system.",
    benefits: [
      "Vitamin C",
      "Glutathione",
      "N-Acetylcysteine (NAC)",
      "Alpha Lipoic Acid (ALA)",
    ],
    image: "/bags/ultra-flush.jpg",
    price: "$349",
    threePack: "$939",
    memberRate: "$215",
    category: "Maintenance",
    infusedIn: "2 Liters 0.9% Normal Saline",
  },

  // ---- Women's Health ----
  {
    name: "Prenatal Care",
    tagline: "Gentle wellness for two.",
    description:
      "Vitamin B-12, Vitamin C, and B-Complex at gentle dosing, in a pregnancy-safe formulation focused on hydration and prenatal micronutrients.",
    benefits: ["Vitamin B-12", "Vitamin C", "B-Complex"],
    image: "/bags/prenatal-care.jpg",
    price: "$229",
    threePack: "$619",
    memberRate: "$199",
    note: "Requires OB/GYN clearance",
    category: "Women's Health",
    infusedIn: STD_SALINE,
  },
  {
    name: "Her Beauty",
    tagline: "The drip behind her glow.",
    description:
      "Biotin, Vitamin C, B-Complex, and Glutathione for collagen support, skin clarity, and a luminous complexion. A favorite before events.",
    benefits: ["Biotin", "Vitamin C", "B-Complex", "Glutathione"],
    image: "/bags/her-beauty.jpg",
    price: "$249",
    threePack: "$669",
    memberRate: "$215",
    badge: "Most Gifted",
    category: "Women's Health",
    infusedIn: STD_SALINE,
  },
  {
    name: "Her Monthly",
    tagline: "In rhythm, in flow.",
    description:
      "Vitamin B-12, Calcium, B-Complex, and Magnesium designed to ease cramps, fatigue, and other cycle-related symptoms.",
    benefits: ["Vitamin B-12", "Calcium", "B-Complex", "Magnesium"],
    image: "/bags/her-monthly.jpg",
    price: "$249",
    threePack: "$669",
    memberRate: "$215",
    category: "Women's Health",
    infusedIn: STD_SALINE,
  },

  // ---- Longevity ----
  {
    name: "NAD+ Revive",
    tagline: "Cellular fuel. Mental clarity. Longevity support.",
    description:
      "500 mg of NAD+ infused slowly, targeting mitochondrial repair, cognitive clarity, and longevity protocols. Our most powerful infusion, and it runs 3 to 4 hours.",
    benefits: ["NAD+ 500 mg"],
    image: "/bags/nad-revive.jpg",
    price: "$599",
    threePack: "$1,619",
    memberRate: "$449",
    category: "Longevity",
    infusedIn: "500 mL 0.9% Normal Saline",
  },
  {
    name: "Niagen Boost",
    tagline: "Advanced cellular support.",
    description:
      "500 mg of NR (Nicotinamide Riboside), an NAD+ precursor, for cellular energy and longevity support with a shorter infusion time.",
    benefits: ["Nicotinamide Riboside 500 mg"],
    image: "/bags/niagen-boost.jpg",
    price: "$799",
    threePack: "$2,159",
    memberRate: "$599",
    category: "Longevity",
    infusedIn: STD_SALINE,
  },

  // ---- Medical Infusions ----
  {
    name: "Iron Sucrose (Venofer)",
    tagline: "Prescription iron repletion.",
    description:
      "50 to 200 mg of iron sucrose for diagnosed iron deficiency, with dosing based on provider evaluation and laboratory results.",
    benefits: ["Iron Sucrose 50-200 mg"],
    image: "/bags/iron-sucrose.jpg",
    price: "$499",
    priceFrom: true,
    note: "Prescription only, requires provider evaluation",
    category: "Medical Infusions",
    infusedIn: STD_SALINE,
  },
];

export const COCKTAIL_CATEGORIES: CocktailCategory[] = [
  "Recovery",
  "Maintenance",
  "Women's Health",
  "Longevity",
  "Medical Infusions",
];

/** Standalone intramuscular injections - no drip required. */
export const WELLNESS_SHOT_TIERS: WellnessShotTier[] = [
  {
    name: "Standard",
    price: "$49",
    ingredients: [
      "Vitamin B-12",
      "Vitamin C",
      "B-Complex",
      "Glutathione",
      "Biotin (low concentration)",
    ],
  },
  {
    name: "Premium",
    price: "$79",
    ingredients: [
      "L-Carnitine",
      "Vitamin D3",
      "Mineral Blend",
      "Tres Aminos",
      "Tri-Immune Boost",
      "Biotin (high concentration)",
    ],
  },
  {
    name: "Medications",
    price: "$49",
    note: "Administered only under provider order following evaluation",
    ingredients: [
      "Toradol (Ketorolac)",
      "Ondansetron (Zofran)",
      "Diphenhydramine (Benadryl)",
    ],
  },
];

/** Boosts that can be layered onto any infusion. */
export const IV_ADD_ON_TIERS: WellnessShotTier[] = [
  {
    name: "Standard",
    price: "$29",
    ingredients: [
      "Vitamin B-12",
      "Vitamin C",
      "B-Complex",
      "Biotin (low concentration)",
      "Magnesium",
      "Zinc",
      "Glutathione",
    ],
  },
  {
    name: "Premium",
    price: "$49",
    ingredients: [
      "Biotin (high concentration)",
      "Mineral Blend",
      "Calcium",
      "Amino Blend",
      "Tres Aminos",
      "Taurine",
      "L-Carnitine",
      "Glutamine",
      "NAC (Preserved Acetylcysteine)",
      "Alpha Lipoic Acid",
      "Tri-Immune Boost",
    ],
  },
  {
    name: "Medications",
    price: "$29",
    note: "Administered only under provider order following evaluation",
    ingredients: [
      "Toradol (Ketorolac)",
      "Ondansetron (Zofran)",
      "Famotidine (Pepcid)",
      "Diphenhydramine (Benadryl)",
    ],
  },
];

/** Specialty injections, priced individually. */
export const SPECIALTY_SHOTS = [
  { name: "Niagen", dose: "100 mg", price: "$199" },
  { name: "NAD+", dose: "100 mg", price: "$129" },
];

/** Additional fluids, added to any drip. */
export const EXTRA_FLUID_BAGS = [
  { name: "250 mL", detail: "Added hydration boost", price: "$29" },
  { name: "500 mL", detail: "Extended hydration", price: "$49" },
];

export const VISIT_MINIMUM_NOTE =
  "Mobile service requires a $150 minimum visit total. Multiple clients and treatments may be combined to meet the minimum. A redeemed membership credit satisfies the minimum.";

export const BLOOD_PANEL_CATEGORIES: BloodPanelCategory[] = [
  "General Health",
  "Metabolic & Diabetes",
  "Organ Function",
  "Thyroid & Hormones",
  "Cardiac & Nutrient",
  "Screening",
];

export const BLOOD_PANELS: BloodPanel[] = [
  // ---- General Health ----
  {
    name: "Complete Blood Count",
    description: "Measures red & white blood cells, hemoglobin & platelets.",
    category: "General Health",
    price: "$39",
  },
  {
    name: "Comprehensive Metabolic",
    description: "Measures glucose, electrolytes, kidney & liver function.",
    category: "General Health",
    price: "$39",
  },
  {
    name: "Lipid Panel",
    description: "Measures total cholesterol, LDL, HDL & triglycerides.",
    category: "General Health",
    price: "$39",
  },
  {
    name: "Urinalysis",
    description: "Tests urine for protein, glucose, blood & infection.",
    category: "General Health",
    price: "$39",
  },
  {
    name: "Allergy Panel",
    description: "Tests IgE reactions to environmental & food allergens.",
    category: "General Health",
    price: "$199",
    priceFrom: true,
  },

  // ---- Metabolic & Diabetes ----
  {
    name: "Hemoglobin A1c",
    description: "Measures your average blood sugar over the past 90 days.",
    category: "Metabolic & Diabetes",
    price: "$49",
  },
  {
    name: "Glucose & Insulin",
    description:
      "Measures fasting glucose & insulin to detect insulin resistance.",
    category: "Metabolic & Diabetes",
    price: "$79",
  },

  // ---- Organ Function ----
  {
    name: "Hepatic Panel",
    description: "Measures liver enzymes: AST, ALT, ALP & bilirubin.",
    category: "Organ Function",
    price: "$39",
  },
  {
    name: "Renal Panel",
    description: "Measures BUN, creatinine & eGFR filtration rate.",
    category: "Organ Function",
    price: "$39",
  },

  // ---- Thyroid & Hormones ----
  {
    name: "Thyroid Panel",
    description: "Measures TSH, Free T4 & Free T3 thyroid hormones.",
    category: "Thyroid & Hormones",
    price: "$199",
  },
  {
    name: "Female Hormone Panel",
    description: "Measures FSH, LH, estradiol, progesterone & prolactin.",
    category: "Thyroid & Hormones",
    price: "$299",
  },
  {
    name: "Male Hormone Panel",
    description: "Measures total & free testosterone, SHBG & estradiol.",
    category: "Thyroid & Hormones",
    price: "$449",
  },

  // ---- Cardiac & Nutrient ----
  {
    name: "Inflammation Panel",
    description: "Measures CRP & ESR inflammation levels.",
    category: "Cardiac & Nutrient",
    price: "$99",
  },
  {
    name: "Vitamins & Iron",
    description: "Measures vitamin D, B12, folate, iron & ferritin.",
    category: "Cardiac & Nutrient",
    price: "$249",
  },
  {
    name: "Advanced Cardiac",
    description: "Measures ApoB, Lp(a) & hs-CRP heart-risk markers.",
    category: "Cardiac & Nutrient",
    price: "$299",
  },

  // ---- Screening ----
  {
    name: "STI Panel",
    description: "Confidential, comprehensive screening.",
    category: "Screening",
    price: "$199",
    priceFrom: true,
  },
  {
    name: "Heavy Metals",
    description: "Measures lead, mercury & arsenic exposure.",
    category: "Screening",
    price: "$299",
  },
];

export const BLOOD_WORK_FEE = "$149 Mobile Draw & Provider Service";

export const BLOOD_WORK_DISCLAIMER =
  "Our $149 mobile draw fee covers the provider visit, blood collection, and submission to Quest Diagnostics, with results typically available within one week. With active insurance, the lab analysis itself is usually covered (any co-pay or deductible is your responsibility). Without insurance, the prices listed above apply per panel.";

export const RAPID_TESTS_LIST: RapidTest[] = [
  { name: "COVID-19", price: "$99" },
  { name: "Influenza A&B", price: "$99" },
  { name: "Strep A", price: "$99" },
  { name: "Drug Screening", price: "$149" },
];

export function getCocktailBySlug(slug: string): Cocktail | undefined {
  return IV_COCKTAILS.find((c) => cocktailSlug(c.name) === slug);
}

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
      "18 formulations from $179",
      "Recovery • Maintenance • Women's Health",
      "Longevity: NAD+ Revive & Niagen Boost",
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
    highlights: [
      "Standard & Premium shots from $49",
      "IV add-ons from $29",
      "Specialty: NAD+ & Niagen injections",
    ],
  },
  {
    slug: "rapid-tests",
    name: "Rapid Tests",
    tagline: "On-site diagnostics. Same-visit answers.",
    description:
      "Rapid-turnaround testing administered in-home by licensed professionals — discreet, comfortable, and back to you without the waiting room.",
    image: "/rapidtesting.png",
    category: "Diagnostic",
    highlights: [
      "Results the same visit",
      "COVID-19 • Influenza A&B • Strep A — $99",
      "Drug screening — $149",
    ],
  },
  {
    slug: "blood-draws",
    name: "Blood Draws",
    tagline: "Lab-grade panels, drawn in your living room.",
    description:
      "Mobile phlebotomy for comprehensive wellness panels, hormone work, and physician-ordered labs. Collected at your location by a licensed provider and submitted to Quest Diagnostics, with results typically available within one week.",
    image: "/blooddraw.png",
    category: "Diagnostic",
    highlights: [
      "Mobile draw & provider service — $149",
      "Panels from $39",
      "Hormones, cardiac, nutrient & screening",
    ],
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
    cities: [
      "Miami",
      "Miami Beach",
      "South Beach",
      "Sunny Isles",
      "Aventura",
      "Bal Harbour",
      "Surfside",
      "Brickell",
      "Coral Gables",
      "Coconut Grove",
      "Key Biscayne",
      "Pinecrest",
      "Doral",
      "Wynwood",
      "Fort Lauderdale",
      "Hollywood",
      "Hallandale",
      "Pompano Beach",
      "Deerfield Beach",
      "Boca Raton",
      "Delray Beach",
      "Boynton Beach",
      "West Palm Beach",
      "Palm Beach",
      "Jupiter",
      "Palm Beach Gardens",
    ],
    hero: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?auto=format&fit=crop&w=1600&q=80",
  },
  "New York": {
    phone: BRAND.phoneNY,
    cities: [
      "Manhattan",
      "Upper East Side",
      "Upper West Side",
      "Midtown",
      "Tribeca",
      "SoHo",
      "Financial District",
      "Chelsea",
      "West Village",
      "East Village",
      "Brooklyn",
      "Williamsburg",
      "DUMBO",
      "Park Slope",
      "Brooklyn Heights",
      "Queens",
      "Long Island City",
      "Astoria",
      "Forest Hills",
      "The Bronx",
      "Staten Island",
      "Westchester",
      "Long Island",
      "The Hamptons",
      "Greenwich",
    ],
    hero: "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=1600&q=80",
  },
};

export const TRUST_POINTS = [
  { label: "Licensed Clinicians", detail: "Board-certified MDs, NPs & RNs" },
  { label: "FDA-Approved", detail: "Only vetted, compliant products" },
  { label: "24/7 Availability", detail: "On-demand, every day of the year" },
  { label: "Concierge Standard", detail: "Private, discreet, uncompromising" },
];

export type GoogleReview = {
  name: string;
  rating: number;
  date: string;
  text: string;
  // Optional deep link to this specific review on Google. To get one: open
  // the review on Google Maps → ⋮ menu → "Share review" → copy the link.
  // When omitted, the card links to the business reviews page instead.
  url?: string;
};

export const GOOGLE_BUSINESS_URL = "https://maps.app.goo.gl/jvsDcMbfaetFgE9PA";

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    name: "Вадим Ишутин",
    rating: 5,
    date: "2025-03-20",
    text: "Fast and professional. Came to my apartment in Sunny Isles and provided quick liver support IV. 100% recommend. Thanks",
  },
  {
    name: "Royce Soyfer",
    rating: 5,
    date: "2025-03-08",
    text: "Skilled Visits was fantastic! They came to our business office and provided IV hydration and booster shots to me and my colleagues. The team was professional, efficient, and made the whole experience easy and convenient. Highly recommend!",
  },
  {
    name: "Olga Chart",
    rating: 5,
    date: "2025-03-08",
    text: "Сервис Skilled Visits просто отличный! Быстрая и профессиональная мобильная IV терапия прямо на дом. Команда вежливая и знает своё дело. Рекомендую!",
  },
  {
    name: "Manhattan Laser Spa",
    rating: 5,
    date: "2025-02-25",
    text: "Received an IV therapy last minute before my best friend's wedding. I was literally so sick and vomiting. Rudy came and gave me a liter IV bag with medication that healed me. I'm so glad he came within 30 minutes of me calling.",
  },
  {
    name: "Igor Charta",
    rating: 5,
    date: "2025-02-23",
    text: "I scheduled an appointment for them to come to our home on Friday night after a night out drinking to get an IV for my wife and me. We had an early flight Saturday morning and wanted to feel our best before traveling. They arrived on time, were professional, and provided excellent service. I highly recommend them 100% if you're in the Fort Lauderdale area. Thanks!",
  },
  {
    name: "Lisa Zhang",
    rating: 5,
    date: "2025-02-20",
    text: "I just tried the hangover IV drip and I felt instant relief from my symptoms. It's so convenient to have home visits, I should've tried this years ago.",
  },
  {
    name: "Yanna Taraniuk",
    rating: 5,
    date: "2025-02-25",
    text: "Hi guys. I did my IV with Skilled Visits — they are very good. They do their job professionally. I highly recommend it to everyone.",
  },
  {
    name: "Max E.",
    rating: 5,
    date: "2024-07-18",
    text: "What a great experience working with Skilled Visits. I hired them to do an IV vitamin drip at my home and it was so easy and stress free. I will definitely be doing this once a month — I highly recommend this to everyone.",
  },
  {
    name: "gil reyes",
    rating: 5,
    date: "2025-02-27",
    text: "Thank you Skilled Visits — nice and welcoming. I'm feeling so much better after my IV treatment.",
  },
  {
    name: "Anything M.",
    rating: 5,
    date: "2024-07-19",
    text: "Best IV — I feel rejuvenated, I feel brand new after the IV treatment. Very professional.",
  },
  {
    name: "Julian Rozenstein",
    rating: 5,
    date: "2025-02-24",
    text: "Excellent customer service and highly satisfied!",
  },
];

export const STATS = [
  { value: "24/7", label: "Availability" },
  { value: "2", label: "States served" },
  { value: "15+", label: "Custom protocols" },
  { value: "100%", label: "Licensed clinicians" },
];

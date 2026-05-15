export const BRAND = {
  name: "Skilled Visits",
  tagline: "Wellness, delivered.",
  email: "info@skilledvisits.com",
  phoneFL: "(305) 808-7777",
  phoneNY: "(718) 465-7777",
  hours: "Available 24 / 7",
  bookingUrl: "https://SkilledVisits.as.me/",
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
  { href: "/contact", label: "Contact" },
];

// Extra links shown only in the footer.
export const FOOTER_EXTRA_LINKS = [
  { href: "/blog", label: "Insights" },
  { href: "/referrals", label: "Referrals" },
  { href: "/how-it-works", label: "How It Works" },
];

export type CocktailCategory =
  | "Performance"
  | "Recovery"
  | "Maintenance"
  | "Detox"
  | "Longevity"
  | "Women's Health";

export type Cocktail = {
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
  image: string;
  price: string;
  category: CocktailCategory;
  infusedIn?: string;
};

export type WellnessShotTier = {
  name: string;
  price: string;
  note?: string;
  ingredients: string[];
};

export type BloodPanel = {
  name: string;
};

export type RapidTest = {
  name: string;
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
  {
    name: "Athletic Performance",
    tagline: "Optimize. Perform. Dominate.",
    description:
      "Taurine, L-Carnitine, and an amino blend to boost endurance, accelerate recovery, and replenish the minerals you lose under load.",
    benefits: ["Taurine", "L-Carnitine", "B-Complex", "Magnesium", "Amino Blend"],
    image: "/athletic-performance.jpeg",
    price: "$299",
    category: "Performance",
    infusedIn: STD_SALINE,
  },
  {
    name: "Hangover Hero",
    tagline: "Save the day after.",
    description:
      "Aggressive hydration paired with Ondansetron for nausea and a B-complex + mineral boost. Reset and back to your day in under an hour.",
    benefits: ["Vitamin C", "B-Complex", "Ondansetron", "Mineral Blend"],
    image: "/hangover-hero.jpeg",
    price: "$249",
    category: "Recovery",
    infusedIn: STD_SALINE,
  },
  {
    name: "Jet-Lag Recovery",
    tagline: "A smooth landing for your body.",
    description:
      "Vitamin B-12, B-complex, and magnesium to reset circadian fatigue, rehydrate after long-haul travel, and feel grounded fast.",
    benefits: ["Vitamin B-12", "Vitamin C", "B-Complex", "Magnesium"],
    image: "/jet-lag-recovery.jpeg",
    price: "$249",
    category: "Recovery",
    infusedIn: STD_SALINE,
  },
  {
    name: "Stress Relief",
    tagline: "The peace potion.",
    description:
      "Taurine, magnesium, and a calming amino blend to ease tension, improve sleep quality, and restore nervous-system balance.",
    benefits: ["Taurine", "B-Complex", "Magnesium", "Amino Blend"],
    image: "/stress-relief.jpeg",
    price: "$249",
    category: "Performance",
    infusedIn: STD_SALINE,
  },
  {
    name: "Post-Surgery Recovery",
    tagline: "Faster healing. Better outcomes.",
    description:
      "Zinc, Taurine, Vitamin C, and L-Glutamine to support tissue repair, reduce inflammation, and accelerate post-operative recovery.",
    benefits: ["Zinc", "Taurine", "Vitamin C", "L-Glutamine"],
    image: "/post-surgery-recovery.jpeg",
    price: "$249",
    category: "Recovery",
    infusedIn: STD_SALINE,
  },

  {
    name: "Energy Charge",
    tagline: "Energize from within.",
    description:
      "Vitamin B-12, Vitamin C, B-Complex, and L-Carnitine for sustained mental and physical energy — without the caffeine crash.",
    benefits: ["Vitamin B-12", "Vitamin C", "B-Complex", "L-Carnitine"],
    image: "/energy-charge.jpeg",
    price: "$249",
    category: "Maintenance",
    infusedIn: STD_SALINE,
  },
  {
    name: "Original Myers",
    tagline: "The classic blend.",
    description:
      "Vitamin B-12, Calcium, B-Complex, and Magnesium — Myers' original formulation, ideal for daily wellness and whole-body restoration.",
    benefits: ["Vitamin B-12", "Calcium", "B-Complex", "Magnesium"],
    image: "/original-myers.jpeg",
    price: "$299",
    category: "Maintenance",
    infusedIn: STD_SALINE,
  },
  {
    name: "Pure Hydration",
    tagline: "Simple replenishment.",
    description:
      "Pure 0.9% Normal Saline for straightforward dehydration, post-flight recovery, or rebalancing fluids without additives.",
    benefits: ["No Vitamins", "0.9% Normal Saline"],
    image: "/pure-hydration.jpeg",
    price: "$199",
    category: "Maintenance",
    infusedIn: STD_SALINE,
  },
  {
    name: "Custom+",
    tagline: "Create your FOURmula.",
    description:
      "Choose any 4 active nutrients from a curated list to build your own bespoke infusion — designed with your clinician around your goals.",
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
    image: "/custom-plus.jpeg",
    price: "$249",
    category: "Maintenance",
    infusedIn: STD_SALINE,
  },

  {
    name: "Immunity Shield",
    tagline: "IV armor. Infused to defend.",
    description:
      "Zinc, Vitamin C, B-Complex, and Glutathione for immune support before travel, after exposure, or during seasonal stress.",
    benefits: ["Zinc", "Vitamin C", "B-Complex", "Glutathione"],
    image: "/immunity-shield.jpeg",
    price: "$249",
    category: "Maintenance",
    infusedIn: STD_SALINE,
  },
  {
    name: "NAD+ Revive",
    tagline: "Cellular fuel. Mental clarity. Longevity support.",
    description:
      "High-dose NAD+ targeting mitochondrial repair, cognitive clarity, and longevity protocols. Our most powerful infusion.",
    benefits: ["NAD+"],
    image: "/nad-revive.jpeg",
    price: "$499",
    category: "Longevity",
    infusedIn: "500 mL 0.9% Normal Saline",
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
    image: "/ultra-flush.jpeg",
    price: "$349",
    category: "Detox",
    infusedIn: "2 Liters 0.9% Normal Saline",
  },
  {
    name: "Stomach Rescue",
    tagline: "Your tummy first responder.",
    description:
      "B-Complex, Famotidine, Magnesium, and L-Glutamine to settle stomach issues, food poisoning, motion sickness, and gut inflammation.",
    benefits: ["B-Complex", "Famotidine", "Magnesium", "L-Glutamine"],
    image: "/stomach-rescue.jpeg",
    price: "$249",
    category: "Detox",
    infusedIn: STD_SALINE,
  },

  {
    name: "Her Beauty",
    tagline: "The drip behind her glow.",
    description:
      "Biotin, Vitamin C, B-Complex, and Glutathione for collagen support, skin clarity, and a luminous complexion — favorite before events.",
    benefits: ["Biotin", "Vitamin C", "B-Complex", "Glutathione"],
    image: "/her-beauty.jpeg",
    price: "$249",
    category: "Women's Health",
    infusedIn: STD_SALINE,
  },
  {
    name: "Her Monthly",
    tagline: "In rhythm, in flow.",
    description:
      "Vitamin B-12, Calcium, B-Complex, and Magnesium designed to ease cramps, fatigue, and other cycle-related symptoms.",
    benefits: ["Vitamin B-12", "Calcium", "B-Complex", "Magnesium"],
    image: "/her-monthly.jpeg",
    price: "$249",
    category: "Women's Health",
    infusedIn: STD_SALINE,
  },
  {
    name: "Prenatal Support",
    tagline: "Gentle wellness for two.",
    description:
      "Vitamin B-12, Vitamin C, and B-Complex in a pregnancy-safe formulation focused on hydration and prenatal micronutrients. Always cleared with your OB.",
    benefits: ["Vitamin B-12", "Vitamin C", "B-Complex"],
    image: "/prenatal-support.jpeg",
    price: "$199",
    category: "Women's Health",
    infusedIn: STD_SALINE,
  },
];

export const COCKTAIL_CATEGORIES: CocktailCategory[] = [
  "Performance",
  "Recovery",
  "Maintenance",
  "Detox",
  "Longevity",
  "Women's Health",
];

export const WELLNESS_SHOT_TIERS: WellnessShotTier[] = [
  {
    name: "Standard",
    price: "$29",
    ingredients: ["Vitamin B-12", "Vitamin C", "B-Complex", "Magnesium", "Zinc"],
  },
  {
    name: "Signature",
    price: "$49",
    ingredients: [
      "Biotin",
      "L-Carnitine",
      "Amino Acids",
      "Taurine",
      "Calcium",
      "Vitamin D3",
    ],
  },
  {
    name: "Premier",
    price: "$99",
    note: "High dose",
    ingredients: [
      "NAD+",
      "Preserved Acetylcysteine",
      "Glutamine",
      "Glutathione",
    ],
  },
  {
    name: "Medications",
    price: "$29",
    ingredients: ["Toradol (Ketorolac)", "Famotidine", "Ondansetron"],
  },
];

export const BLOOD_PANELS: BloodPanel[] = [
  { name: "Heavy Metal Panel" },
  { name: "Hormonal Panel" },
  { name: "CBC" },
  { name: "CMP" },
  { name: "Lipid Panel" },
  { name: "Hemoglobin A1C" },
  { name: "Vitamin D" },
  { name: "Vitamin B12" },
  { name: "Iron Panel" },
  { name: "Food Sensitivity Testing" },
];

export const BLOOD_WORK_FEE = "$125 Service Fee";

export const RAPID_TESTS_LIST: RapidTest[] = [
  { name: "Covid" },
  { name: "Influenza A&B" },
  { name: "Strep" },
  { name: "Drug Screening" },
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

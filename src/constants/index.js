import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  customer3,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  shoe8,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#products", label: "Collection" },
  { href: "#about-us", label: "Craftsmanship" },
  { href: "#special-offer", label: "Offers" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact-us", label: "Newsletter" },
];

export const shoes = [
  {
    id: "hero-air-max-97",
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
    name: "Nike Air Max 97 OG",
    edition: "University Red / White",
    sku: "NK-AM97-01",
    category: "Performance Running",
    price: "$210.00",
    numericPrice: 210.0,
    stars: "4.9",
    reviewCount: 142,
    description:
      "Full-length Max Air unit engineered for responsive heel-to-toe energy return with welded ripple overlays and breathable mesh upper.",
    specs: [
      "Full-length nitrogen-infused Max Air cushioning",
      "Reflective 3M piping along dynamic wave upper",
      "Modified waffle rubber outsole for wet/dry traction",
    ],
  },
  {
    id: "hero-vapormax-crimson",
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
    name: "Nike Air VaporMax Evo",
    edition: "Hyper Crimson / Obsidian",
    sku: "NK-VMX-02",
    category: "Performance Running",
    price: "$225.00",
    numericPrice: 225.0,
    stars: "4.8",
    reviewCount: 98,
    description:
      "Ultra-lightweight Flyknit containment paired with articulated VaporMax air pods positioned directly beneath high-pressure strike zones.",
    specs: [
      "Zonal Flyknit weave with integrated Flywire cables",
      "One-piece articulated VaporMax Air outsole unit",
      "TPU heel counter for locked-in lateral stability",
    ],
  },
  {
    id: "hero-air-force-volt",
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
    name: "Nike Air Zoom Streak",
    edition: "Cyber Volt / Sail",
    sku: "NK-AZS-03",
    category: "Limited Archive",
    price: "$240.00",
    numericPrice: 240.0,
    stars: "5.0",
    reviewCount: 76,
    description:
      "Archive-grade court and track hybrid featuring dual-density Cushlon foam and a forefoot Zoom Air propulsion chamber.",
    specs: [
      "Forefoot Zoom Air unit with internal shank plate",
      "Perforated nubuck and ripstop nylon upper construction",
      "High-abrasion carbon rubber heel crash pad",
    ],
  },
];

export const statistics = [
  { value: 1200, label: "Archive Releases", suffix: "+" },
  { value: 500, label: "Retail Partners", suffix: "+" },
  { value: 250, label: "Verified Athletes", suffix: "k+" },
];

export const availableSizes = ["US 7.5", "US 8", "US 8.5", "US 9", "US 9.5", "US 10", "US 10.5", "US 11", "US 12"];

export const sizeGuideRows = [
  { us: "7.5", uk: "6.5", eu: "40.5", cm: "25.5" },
  { us: "8.0", uk: "7.0", eu: "41.0", cm: "26.0" },
  { us: "8.5", uk: "7.5", eu: "42.0", cm: "26.5" },
  { us: "9.0", uk: "8.0", eu: "42.5", cm: "27.0" },
  { us: "9.5", uk: "8.5", eu: "43.0", cm: "27.5" },
  { us: "10.0", uk: "9.0", eu: "44.0", cm: "28.0" },
  { us: "10.5", uk: "9.5", eu: "44.5", cm: "28.5" },
  { us: "11.0", uk: "10.0", eu: "45.0", cm: "29.0" },
  { us: "12.0", uk: "11.0", eu: "46.0", cm: "30.0" },
];

export const products = [
  {
    id: "prod-aj-01",
    sku: "NK-AJ1-001",
    stars: "4.8",
    reviewCount: 184,
    imgURL: shoe4,
    name: "Nike Air Jordan-01 Low",
    category: "Court Classics",
    colorway: "Varsity Red / Summit White",
    price: "$200.20",
    numericPrice: 200.2,
    tag: "In Stock",
    description:
      "Cut from full-grain tumbled leather with an encapsulated Air-Sole heel unit, delivering heritage hardwood silhouette and all-day street durability.",
    specs: [
      "Full-grain tumbled cowhide leather upper",
      "Encapsulated heel Air-Sole cushioning unit",
      "Concentric pivot-circle cupsole traction pattern",
    ],
  },
  {
    id: "prod-aj-10",
    sku: "NK-AJ10-010",
    stars: "5.0",
    reviewCount: 219,
    imgURL: shoe5,
    name: "Nike Air Jordan-10 Retro",
    category: "Limited Archive",
    colorway: "Infrared / Anthracite",
    price: "$210.20",
    numericPrice: 210.2,
    tag: "Limited Run",
    description:
      "Engineered for explosive lateral cuts with speed-lacing elastic bands, Phylon midsole geometry, and full-length Air cushioning.",
    specs: [
      "Speed-lace webbed lockdown system",
      "Lightweight compression-molded Phylon midsole",
      "Outsole engraved with career milestone stripes",
    ],
  },
  {
    id: "prod-aj-100",
    sku: "NK-AJ100-100",
    stars: "4.9",
    reviewCount: 156,
    imgURL: shoe6,
    name: "Nike Air Jordan-100 Trainer",
    category: "Performance Running",
    colorway: "Team Crimson / Pure Platinum",
    price: "$220.20",
    numericPrice: 220.2,
    tag: "In Stock",
    description:
      "High-output cross-training silhouette combining breathable monofilament mesh with dual forefoot Zoom pods for sprint and agility drills.",
    specs: [
      "Dual forefoot Zoom Air pods for explosive toe-off",
      "Reinforced TPU midfoot cage for lateral containment",
      "Multi-surface herringbone rubber outsole",
    ],
  },
  {
    id: "prod-aj-001",
    sku: "NK-AJ001-004",
    stars: "4.7",
    reviewCount: 112,
    imgURL: shoe7,
    name: "Nike Air Jordan-001 Craft",
    category: "Court Classics",
    colorway: "Bred Toe / Sail",
    price: "$230.20",
    numericPrice: 230.2,
    tag: "In Stock",
    description:
      "Hand-finished suede and artisan leather panels over a vintage-tinted Sail cupsole, built for collectors demanding premium material depth.",
    specs: [
      "Double-stitched nubuck and vegetable-tanned overlays",
      "Padded micro-perforated collar lining",
      "Stitched 360-degree rubber cupsole construction",
    ],
  },
  {
    id: "prod-sq-08",
    sku: "NK-SQ8-088",
    stars: "4.9",
    reviewCount: 167,
    imgURL: shoe8,
    name: "Nike Air Max Hyper-Pro",
    category: "Performance Running",
    colorway: "Solar Orange / Royal",
    price: "$245.00",
    numericPrice: 245.0,
    tag: "Archive Edition",
    description:
      "Our flagship craftsmanship release featuring anatomical arch support, dual-pressure Air chambers, and seamless thermo-welded overlays.",
    specs: [
      "Dual-pressure heel and forefoot Air-Sole chambers",
      "Seamless thermo-welded ripstop upper",
      "Anatomical Ortholite® rebound sockliner",
    ],
  },
  {
    id: "prod-am97-og",
    sku: "NK-AM97-01",
    stars: "4.9",
    reviewCount: 142,
    imgURL: bigShoe1,
    name: "Nike Air Max 97 OG",
    category: "Limited Archive",
    colorway: "University Red / White",
    price: "$210.00",
    numericPrice: 210.0,
    tag: "Best Seller",
    description:
      "Iconic ripple-line silhouette inspired by high-speed transit, featuring first-of-its-kind full-length visible Air cushioning.",
    specs: [
      "Full-length visible Max Air cushioning unit",
      "Hidden speed-lacing system for streamlined profile",
      "Low-profile solid rubber Waffle outsole",
    ],
  },
];

export const craftsmanshipPillars = [
  {
    index: "01",
    title: "01. Precision Flyknit & Tumbled Leather",
    metric: "38% Lighter Upper",
    summary:
      "High-tenacity micro-filaments are woven at variable tensions—tighter along the midfoot for 5G lateral lockdown, open across the instep for rapid thermal ventilation.",
    detail: "Zero-wasteloom knitting reduces upper seam friction by 74% over 10km runs.",
  },
  {
    index: "02",
    title: "02. Nitrogen-Infused Zoom Air Chambers",
    metric: "89% Energy Return",
    summary:
      "Pressurized tensile fibers inside our articulated Air units snap back instantaneously upon ground impact, converting vertical shock into forward propulsion.",
    detail: "Tested across 500,000 compression cycles with <2% cushioning degradation.",
  },
  {
    index: "03",
    title: "03. High-Abrasion Carbon Rubber Outsole",
    metric: "1,200 km Tread Life",
    summary:
      "Computer-mapped waffle lugs and concentric court pivot rings maximize surface contact coefficient on wet asphalt, synthetic track, and hardwood.",
    detail: "Dual-durometer heel crash pad absorbs initial heel strike forces.",
  },
];

export const services = [
  {
    imgURL: truckFast,
    index: "01",
    metric: "Complimentary on $150+",
    label: "Express Insured Shipping",
    subtext: "Tracked door-to-door air courier dispatch within 24 hours of order verification, double-boxed to protect collector packaging.",
  },
  {
    imgURL: shieldTick,
    index: "02",
    metric: "256-Bit Encrypted & COD",
    label: "Verified Checkout & Authenticity",
    subtext: "Every pair is serialized against our studio archive ledger with instant digital receipt and flexible Cash on Delivery or card settlement.",
  },
  {
    imgURL: support,
    index: "03",
    metric: "30-Day Trial Guarantee",
    label: "Dedicated Fit Concierge",
    subtext: "Complimentary size exchanges and direct access to footwear specialists for sizing calibration, arch profiling, and care guidance.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Ankit Baiyanpuria",
    role: "Endurance Athlete",
    organization: "75 Hard Finisher · Haryana",
    modelPurchased: "Nike Air Jordan-100 Trainer",
    rating: "4.9",
    outcomeMetric: "+32% Outdoor Grip & Recovery",
    feedback:
      "Ram Ram Bhai Saryane! As an athlete training twice daily across dirt akhada tracks and road sprints, ankle stability used to limit my mileage. Switching to Nike's Zoom trainer gave me locked-in grip and zero heel fatigue over 90-minute sessions.",
  },
  {
    imgURL: customer2,
    customerName: "Yash Bandal",
    role: "Tactical Marathoner",
    organization: "YB Athletics Club · Pune",
    modelPurchased: "Nike Air Max 97 OG",
    rating: "5.0",
    outcomeMetric: "1,100+ km Logged Without Sole Wear",
    feedback:
      "During 20km tempo drills on rough tarmac, standard foam midsoles flatten out within three months. Nike shoes have consistently delivered responsive cushioning, wet-surface traction, and structural durability for mission readiness.",
  },
  {
    imgURL: customer3,
    customerName: "Rohan Deshmukh",
    role: "Point Guard & Footwear Collector",
    organization: "Mumbai Pro-Am League",
    modelPurchased: "Nike Air Jordan-01 Low",
    rating: "4.8",
    outcomeMetric: "Zero Break-In Time on Hardwood",
    feedback:
      "Before picking up the Jordan-01 Low from YB Studios, stiff court leather always caused midfoot blisters during tournament weekends. The tumbled leather upper and encapsulated Air unit felt broken-in from tip-off.",
  },
];

export const footerLinks = [
  {
    title: "Footwear Archive",
    links: [
      { name: "Air Jordan-01 Low", link: "#products", filter: "Court Classics" },
      { name: "Air Max 97 OG", link: "#products", filter: "Limited Archive" },
      { name: "Air Jordan-100 Trainer", link: "#products", filter: "Performance Running" },
      { name: "Air Max Hyper-Pro", link: "#about-us" },
      { name: "Season Bundle Offer", link: "#special-offer" },
    ],
  },
  {
    title: "Client Services",
    links: [
      { name: "Interactive Size Guide", link: "#products", action: "size-guide" },
      { name: "Shipping & Delivery", link: "#services" },
      { name: "Authenticity Guarantee", link: "#about-us" },
      { name: "30-Day Exchanges", link: "#services" },
    ],
  },
  {
    title: "Studio Concierge",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92 554 862 354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "Facebook", href: "https://facebook.com" },
  { src: twitter, alt: "Twitter", href: "https://twitter.com" },
  { src: instagram, alt: "Instagram", href: "https://instagram.com" },
];

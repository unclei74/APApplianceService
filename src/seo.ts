import { SERVICE_AREAS, SITE } from "./data";

// Public origin used for canonical URLs, the sitemap, and structured data.
export const SITE_URL = "https://apapplianceservice.com";

export type PageMeta = { title: string; description: string; keywords: readonly string[] };

export const PAGES: Record<string, PageMeta> = {
  "/": {
    title: `Appliance Repair Las Vegas, NV – Same-Day Service | ${SITE.name}`,
    description: `Same-day appliance repair in Las Vegas, Henderson & North Las Vegas. Refrigerator, washer, dryer, oven, dishwasher & ice maker repair. Call or text ${SITE.phone}.`,
    keywords: [
      "appliance repair Las Vegas",
      "appliance repair Las Vegas NV",
      "same day appliance repair Las Vegas",
      "appliance repair near me",
      "appliance repair Henderson NV",
      "appliance repair North Las Vegas",
      "family owned appliance repair Las Vegas",
    ],
  },
  "/repairs": {
    title: `Refrigerator, Washer, Dryer & Oven Repair in Las Vegas | ${SITE.name}`,
    description:
      "Fridge not cooling? Washer not draining? Dryer not heating? We repair refrigerators, washers, dryers, ovens, dishwashers and more from all major brands in Las Vegas, NV.",
    keywords: [
      "refrigerator repair Las Vegas",
      "washer repair Las Vegas",
      "dryer repair Las Vegas",
      "oven repair Las Vegas",
      "refrigerator not cooling Las Vegas",
      "washer not draining repair",
      "dryer not heating repair",
      "ice maker not working repair",
    ],
  },
  "/services": {
    title: `Appliance Repair Services in Las Vegas, NV | ${SITE.name}`,
    description:
      "Refrigerator, washer, dryer, dishwasher, oven, stove, freezer, microwave and ice maker repair in Las Vegas. Honest diagnostics, parts replacement and testing.",
    keywords: [
      "dishwasher repair Las Vegas",
      "stove repair Las Vegas",
      "range repair Las Vegas",
      "freezer repair Las Vegas",
      "microwave repair Las Vegas",
      "ice maker repair Las Vegas",
      "washing machine repair Las Vegas",
    ],
  },
  "/brands": {
    title: `Samsung, LG, GE, Whirlpool & Sub-Zero Repair in Las Vegas | ${SITE.name}`,
    description:
      "Repair for Samsung, LG, GE, Whirlpool, Maytag, KitchenAid, Bosch, Sub-Zero, Viking, Wolf, Thermador, Miele and more in Las Vegas, Henderson & North Las Vegas.",
    keywords: [
      "Samsung appliance repair Las Vegas",
      "LG appliance repair Las Vegas",
      "GE appliance repair Las Vegas",
      "Whirlpool appliance repair Las Vegas",
      "Sub-Zero repair Las Vegas",
      "Viking appliance repair Las Vegas",
      "Bosch dishwasher repair Las Vegas",
    ],
  },
  "/about": {
    title: `About Us – Local, Family-Owned Appliance Repair in Las Vegas | ${SITE.name}`,
    description:
      "AP Appliance Service is a local, family-owned appliance repair company serving Las Vegas, Henderson and North Las Vegas with experienced technicians and honest pricing.",
    keywords: ["family owned appliance repair Las Vegas", "local appliance repair Las Vegas", "appliance repair technician Las Vegas"],
  },
  "/service-areas": {
    title: `Appliance Repair in Las Vegas, Henderson & North Las Vegas | ${SITE.name}`,
    description:
      "In-home appliance repair across Las Vegas, Henderson and North Las Vegas, including Summerlin, Spring Valley and Enterprise. See every zip code we serve.",
    keywords: [
      "appliance repair Henderson NV",
      "appliance repair North Las Vegas",
      "appliance repair Summerlin",
      "appliance repair Spring Valley NV",
      "appliance repair Enterprise NV",
    ],
  },
  "/contact": {
    title: `Contact Us – Schedule Appliance Repair in Las Vegas | ${SITE.name}`,
    description: `Schedule appliance repair in Las Vegas. Call or text ${SITE.phone}, email us, or send a request online. ${SITE.hours}.`,
    keywords: ["schedule appliance repair Las Vegas", "appliance repair appointment Las Vegas"],
  },
};

export const pageMeta = (path: string): PageMeta => PAGES[path] ?? PAGES["/"];
export const canonicalUrl = (path: string) => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`);

export const localBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE_URL}/#business`,
  name: SITE.name,
  description: PAGES["/"].description,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/hero.webp`,
  telephone: `+1-${SITE.phoneTel.slice(0, 3)}-${SITE.phoneTel.slice(3, 6)}-${SITE.phoneTel.slice(6)}`,
  email: SITE.email,
  priceRange: "$$",
  address: { "@type": "PostalAddress", addressLocality: "Las Vegas", addressRegion: "NV", addressCountry: "US" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  areaServed: [
    ...SERVICE_AREAS.map((g) => ({ "@type": "City", name: `${g.city}, NV` })),
    ...SERVICE_AREAS.flatMap((g) =>
      g.zips.map((zip) => ({
        "@type": "Place",
        address: { "@type": "PostalAddress", postalCode: zip, addressLocality: g.city, addressRegion: "NV", addressCountry: "US" },
      }))
    ),
  ],
  knowsAbout: [
    "Appliance repair",
    "Refrigerator repair",
    "Washer repair",
    "Dryer repair",
    "Oven repair",
    "Stove repair",
    "Dishwasher repair",
    "Freezer repair",
    "Microwave repair",
    "Ice maker repair",
  ],
});

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Head tags for a page, injected into the prerendered HTML. */
export function headTags(path: string): string {
  const meta = pageMeta(path);
  const json = JSON.stringify(localBusinessSchema()).replace(/</g, "\\u003c");
  return [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<meta name="keywords" content="${esc(meta.keywords.join(", "))}" />`,
    `<link rel="canonical" href="${canonicalUrl(path)}" />`,
    `<script type="application/ld+json">${json}</script>`,
  ].join("\n    ");
}

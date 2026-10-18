import { SERVICE_AREAS, SITE } from "./data";

// Public origin used for canonical URLs, the sitemap, and structured data.
export const SITE_URL = "https://apapplianceservice.com";

export type PageMeta = { title: string; description: string };

export const PAGES: Record<string, PageMeta> = {
  "/": {
    title: `Appliance Repair in ${SITE.city} | ${SITE.name}`,
    description:
      "Fast, honest appliance repair in Las Vegas, Henderson, and North Las Vegas. Washers, dryers, refrigerators, ovens, dishwashers and more. Call 702 518-3034.",
  },
  "/repairs": {
    title: `Appliance Repairs & Brands We Fix in Las Vegas | ${SITE.name}`,
    description:
      "We repair washers, dryers, ovens, refrigerators, dishwashers, freezers, microwaves, ice makers and stoves from all major brands in Las Vegas, NV.",
  },
  "/services": {
    title: `Appliance Repair Services in Las Vegas | ${SITE.name}`,
    description:
      "Diagnostics, parts replacement, and performance testing for washers, dryers, ovens, refrigerators, dishwashers and more across the Las Vegas Valley.",
  },
  "/brands": {
    title: `Appliance Brands We Repair in Las Vegas | ${SITE.name}`,
    description:
      "Repair for Samsung, LG, Whirlpool, GE, Bosch, KitchenAid, Maytag, Sub-Zero, Viking, Wolf, Thermador, Miele and more in Las Vegas, NV.",
  },
  "/about": {
    title: `About Us – Family-Owned Appliance Repair in Las Vegas | ${SITE.name}`,
    description:
      "AP Appliance Service is a local, family-owned appliance repair company serving Las Vegas with experienced technicians and clear, honest service.",
  },
  "/service-areas": {
    title: `Service Areas – Las Vegas, Henderson & North Las Vegas | ${SITE.name}`,
    description:
      "In-home appliance repair across Las Vegas, Henderson, and North Las Vegas. See every zip code we serve on our service area map.",
  },
  "/contact": {
    title: `Contact Us – Schedule Appliance Repair in Las Vegas | ${SITE.name}`,
    description: `Request appliance repair in Las Vegas. Call or text ${SITE.phone}, email us, or send a request online. ${SITE.hours}.`,
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
  knowsAbout: ["Appliance repair", "Refrigerator repair", "Washer repair", "Dryer repair", "Oven repair", "Dishwasher repair"],
});

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Head tags for a page, injected into the prerendered HTML. */
export function headTags(path: string): string {
  const meta = pageMeta(path);
  const json = JSON.stringify(localBusinessSchema()).replace(/</g, "\\u003c");
  return [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<link rel="canonical" href="${canonicalUrl(path)}" />`,
    `<script type="application/ld+json">${json}</script>`,
  ].join("\n    ");
}

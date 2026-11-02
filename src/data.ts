export const SITE = {
  name: "AP Appliance Service",
  city: "Las Vegas, NV",
  phone: "702 518-3034",
  phoneTel: "7025183034",
  email: "service@apapplianceservice.com",
  hours: "Mon–Sat 8:00 AM – 5:00 PM",
} as const;

export const BASE = import.meta.env.BASE_URL;

export const SERVICES = [
  {
    name: "Washing Machines",
    file: "washer.png",
    alt: "Washing machine repair and diagnostics in Las Vegas, NV by AP Appliance Service",
    desc: "Washer repair for front-load and top-load machines that won't spin, won't drain, leak, or shake.",
  },
  {
    name: "Dryers",
    file: "dryer.png",
    alt: "Dryer repair and diagnostics in Las Vegas, NV by AP Appliance Service",
    desc: "Gas and electric dryer repair when your dryer won't heat, takes too long to dry, squeals, or won't start.",
  },
  {
    name: "Ovens",
    file: "oven.png",
    alt: "Oven repair and diagnostics in Las Vegas, NV by AP Appliance Service",
    desc: "Oven repair for wall ovens and ranges that won't heat, heat unevenly, or show error codes.",
  },
  {
    name: "Refrigerators",
    file: "fridge.png",
    alt: "Refrigerator repair and diagnostics in Las Vegas, NV by AP Appliance Service",
    desc: "Refrigerator repair when your fridge isn't cooling, is leaking water, or making loud noises, including built-in and French-door models.",
  },
  {
    name: "Dishwashers",
    file: "dishwasher.png",
    alt: "Dishwasher repair and diagnostics in Las Vegas, NV by AP Appliance Service",
    desc: "Dishwasher repair for units that won't drain, leave dishes dirty, leak, or won't start.",
  },
  {
    name: "Freezers",
    file: "freezer.png",
    alt: "Freezer repair and diagnostics in Las Vegas, NV by AP Appliance Service",
    desc: "Upright and chest freezer repair when your freezer isn't freezing, frosts up, or runs constantly.",
  },
  {
    name: "Microwaves",
    file: "microwave.png",
    alt: "Microwave repair and diagnostics in Las Vegas, NV by AP Appliance Service",
    desc: "Over-the-range and built-in microwave repair for units that won't heat, spark, or won't turn on.",
  },
  {
    name: "Ice Makers",
    file: "icemaker.png",
    alt: "Ice maker repair and diagnostics in Las Vegas, NV by AP Appliance Service",
    desc: "Ice maker repair when your refrigerator stops making ice, leaks, or makes small or hollow cubes.",
  },
  {
    name: "Stoves",
    file: "stove.png",
    alt: "Stove repair and diagnostics in Las Vegas, NV by AP Appliance Service",
    desc: "Stove, range, and cooktop repair for gas or electric burners that won't light or heat.",
  },
] as const;

// Neighborhoods inside the Las Vegas zip codes listed in SERVICE_AREAS.
export const NEIGHBORHOODS = ["Summerlin", "Spring Valley", "Enterprise", "Paradise"] as const;

export const BRANDS = [
  { name: "Amana", file: "amana.png" },
  { name: "Admiral", file: "admiral.png" },
  { name: "Bosch", file: "bosch.png" },
  { name: "Frigidaire", file: "frigidaire.png" },
  { name: "Whirlpool", file: "whirlpool.png" },
  { name: "KitchenAid", file: "kitchenaid.png" },
  { name: "Samsung", file: "samsung.png" },
  { name: "LG", file: "lg.png" },
  { name: "GE", file: "ge.png" },
  { name: "GE Monogram", file: "ge_monogram.png" },
  { name: "Viking", file: "viking.png" },
  { name: "Sub Zero", file: "sub_zero.png" },
  { name: "Thermador", file: "thermador.png" },
  { name: "Kenmore", file: "kenmore.png" },
  { name: "Electrolux", file: "electrolux.png" },
  { name: "Maytag", file: "maytag.png" },
  { name: "Miele", file: "miele.png" },
  { name: "Magic Chef", file: "magic_chef.png" },
  { name: "Dacor", file: "dacor.png" },
  { name: "Wolf", file: "wolf.png" },
] as const;

export const imgService = (file: string) => `${BASE}services/${file}`;
export const imgBrand = (file: string) => `${BASE}brands/${file}`;
export const imgLogo = () => `${BASE}logo.png`;
export const imgHero = () => `${BASE}hero.webp`;

export const altBrand = (brand: string) => `${brand} appliance repair in ${SITE.city} by ${SITE.name}`;

export const SERVICE_AREAS = [
  {
    city: "Las Vegas",
    zips: [
      "89102", "89103", "89104", "89106", "89107", "89108", "89109", "89113", "89117", "89118", "89119", "89120",
      "89121", "89122", "89123", "89124", "89128", "89129", "89130", "89131", "89134", "89135", "89138", "89139",
      "89141", "89142", "89143", "89144", "89145", "89146", "89147", "89148", "89149", "89158", "89161", "89166",
      "89169", "89178", "89179", "89183", "89191",
    ],
  },
  {
    city: "Henderson",
    zips: ["89002", "89009", "89011", "89012", "89014", "89015", "89016", "89044", "89052", "89053", "89074", "89077"],
  },
  {
    city: "North Las Vegas",
    zips: ["89030", "89031", "89032", "89033", "89036", "89081", "89084", "89085", "89086", "89087"],
  },
] as const;

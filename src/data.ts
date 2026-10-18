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
  { name: "Washing Machines", file: "washer.png", alt: "Washing machine repair and diagnostics in Las Vegas, NV by AP Appliance Service" },
  { name: "Dryers", file: "dryer.png", alt: "Dryer repair and diagnostics in Las Vegas, NV by AP Appliance Service" },
  { name: "Ovens", file: "oven.png", alt: "Oven repair and diagnostics in Las Vegas, NV by AP Appliance Service" },
  { name: "Refrigerators", file: "fridge.png", alt: "Refrigerator repair and diagnostics in Las Vegas, NV by AP Appliance Service" },
  { name: "Dishwashers", file: "dishwasher.png", alt: "Dishwasher repair and diagnostics in Las Vegas, NV by AP Appliance Service" },
  { name: "Freezers", file: "freezer.png", alt: "Freezer repair and diagnostics in Las Vegas, NV by AP Appliance Service" },
  { name: "Microwaves", file: "microwave.png", alt: "Microwave repair and diagnostics in Las Vegas, NV by AP Appliance Service" },
  { name: "Ice Makers", file: "icemaker.png", alt: "Ice maker repair and diagnostics in Las Vegas, NV by AP Appliance Service" },
  { name: "Stoves", file: "stove.png", alt: "Stove repair and diagnostics in Las Vegas, NV by AP Appliance Service" },
] as const;

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

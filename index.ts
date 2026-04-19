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
  { name: "Washing Machines", file: "washer.png", alt: "Washing machine repair" },
  { name: "Dryers", file: "dryer.png", alt: "Dryer repair" },
  { name: "Ovens", file: "oven.png", alt: "Oven repair" },
  { name: "Refrigerators", file: "fridge.png", alt: "Refrigerator repair" },
  { name: "Dishwashers", file: "dishwasher.png", alt: "Dishwasher repair" },
  { name: "Freezers", file: "freezer.png", alt: "Freezer repair" },
  { name: "Microwaves", file: "microwave.png", alt: "Microwave repair" },
  { name: "Ice Makers", file: "icemaker.png", alt: "Ice maker repair" },
  { name: "Stoves", file: "stove.png", alt: "Stove repair" },
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
export const imgLogo = () => `${BASE}logo.svg`;
export const imgHero = () => `${BASE}hero.svg`;

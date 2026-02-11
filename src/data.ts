export const SITE = {
  name: "AP Appliance Service",
  city: "Las Vegas, NV",
  phone: "123-456-7890",
  phoneTel: "1234567890",
  email: "service@apapplianceservice.com",
  hours: "Mon–Sat 8:00 AM – 5:00 PM",
} as const;

export const BASE = import.meta.env.BASE_URL;

export const SERVICES = [
  { name: "Washing Machines", file: "washer.svg", alt: "Washing machine repair" },
  { name: "Dryers", file: "dryer.svg", alt: "Dryer repair" },
  { name: "Ovens", file: "oven.svg", alt: "Oven repair" },
  { name: "Refrigerators", file: "fridge.svg", alt: "Refrigerator repair" },
  { name: "Dishwashers", file: "dishwasher.svg", alt: "Dishwasher repair" },
  { name: "Freezers", file: "freezer.svg", alt: "Freezer repair" },
  { name: "Microwaves", file: "microwave.svg", alt: "Microwave repair" },
  { name: "Ice Makers", file: "icemaker.svg", alt: "Ice maker repair" },
  { name: "Stoves", file: "stove.svg", alt: "Stove repair" },
] as const;

export const BRANDS = [
  { name: "Amana", file: "amana.svg" },
  { name: "Admiral", file: "admiral.svg" },
  { name: "Bosch", file: "bosch.svg" },
  { name: "Frigidaire", file: "frigidaire.svg" },
  { name: "Whirlpool", file: "whirlpool.svg" },
  { name: "KitchenAid", file: "kitchenaid.svg" },
  { name: "Samsung", file: "samsung.svg" },
  { name: "LG", file: "lg.svg" },
  { name: "GE", file: "ge.svg" },
  { name: "Viking", file: "viking.svg" },
  { name: "Sub Zero", file: "sub_zero.svg" },
  { name: "Thermador", file: "thermador.svg" },
  { name: "Kenmore", file: "kenmore.svg" },
  { name: "Electrolux", file: "electrolux.svg" },
  { name: "Maytag", file: "maytag.svg" },
  { name: "Miele", file: "miele.svg" },
  { name: "Magic Chef", file: "magic_chef.svg" },
  { name: "Dacor", file: "dacor.svg" },
  { name: "Wolf", file: "wolf.svg" },
] as const;

export const imgService = (file: string) => `${BASE}services/${file}`;
export const imgBrand = (file: string) => `${BASE}brands/${file}`;
export const imgLogo = () => `${BASE}logo.svg`;
export const imgHero = () => `${BASE}hero.svg`;

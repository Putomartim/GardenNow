export const baseMediaUrl = "http://funparquesaojoao.pt";

export const contactEmail = "info@funparquesaojoao.pt";
export const contactPhone = "+351 912 444 077";
export const contactPhoneCompact = "+351912444077";
export const whatsappNumber = "351912444077";

export type HeroMoment = { image: string; title: string; description: string };
export type ExperienceStep = { number: string; title: string; description: string };
export type HeroPhases = { badge: string; heading: string; steps: ExperienceStep[] };
export type HighlightStat = { label: string; description: string };
export type Activity = {
  slug: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  details: string[];
};
export type GalleryItem = { src: string; alt: string };
export type ScheduleItem = { season: string; details: string; note: string };
export type ActivityPackage = { title: string; options: string[] };
export type PricingItem = { label: string; description: string };
export type DirectionsOption = { label: string; description: string };
export type FormField = { label: string; placeholder?: string; mailLabel: string };
export type AgeRangeField = {
  label: string;
  fromPlaceholder: string;
  toPlaceholder: string;
  separator: string;
  mailLabelFrom: string;
  mailLabelTo: string;
};

export type PartyPackage = {
  option: string;
  title: string;
  activityContext: string;
  age: string;
  requirements: string[];
  description: string;
  includes: string[];
  priceNote: string;
  pricing: {
    withoutSnack: { label: string; price: string }[];
    withSnack?: { label: string; price: string }[];
  };
};

export type PricingCategory = {
  id: string;
  label: string;
  description?: string;
  details?: string[];
  price?: string;
  cards?: { title: string; bulletPoints: string[] }[];
  highlights?: string[];
};

export type PartyAddOn = {
  title: string;
  description: string;
  price: string;
};

export type LanguageContent = {
  localeLabel: string;
  mailSubject: string;
  navLinks: { label: string; href: string }[];
  navSubtopics: Record<string, { label: string; href: string }[]>;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    chips: string[];
    ctas: { primary: string; secondary: string; tertiary: string };
    whatsappMessage: string;
    moments: HeroMoment[];
    phases: HeroPhases;
  };
  about: {
    badge: string;
    title: string;
    paragraphs: string[];
    highlights: { title: string; description: string }[];
    highlightLabel: string;
    footer: string;
  };
  highlightStats: HighlightStat[];
  activitiesSection: {
    badge: string;
    title: string;
    description: string;
    menuTitle: string;
    menuSubtitle: string;
  };
  activities: Activity[];
  experience: {
    badge: string;
    title: string;
    description: string;
    steps: ExperienceStep[];
  };
  gallery: {
    badge: string;
    title: string;
    instructions: string;
    images: GalleryItem[];
  };
  schedule: {
    badge: string;
    title: string;
    items: ScheduleItem[];
    contactTitle: string;
    phoneLabel: string;
    emailLabel: string;
    locationLabel: string;
    mapLinkText: string;
    schoolsNote: string;
  };
  directions: {
    badge: string;
    title: string;
    intro: string;
    options: DirectionsOption[];
    mapCta: string;
  };
  reservation: {
    badge: string;
    title: string;
    description: string;
    checklist: string[];
    contactHeading: string;
    contactSubheading: string;
    successMessage: string;
    submitText: string;
    fields: {
      reservationType: FormField;
      activity: FormField;
      name: FormField;
      email: FormField;
      phone: FormField;
      date: FormField;
      adults: FormField;
      kids: FormField;
      ageRange: AgeRangeField;
      lunch: FormField;
      birthday: FormField;
      notes: FormField;
    };
  };
  reservationTypes: string[];
  activityPackages: ActivityPackage[];
  lunchOptions: string[];
  footer: { heading: string; tagline: string; connect: string; rights: string };
  pricing: {
    badge: string;
    title: string;
    description?: string;
    items: PricingItem[];
    note: string;
    ctaLabel?: string;
    ctaHref?: string;
  };
  pricingOverview?: {
    badge: string;
    title: string;
    description: string;
    categories: PricingCategory[];
  };
  partyPackages?: {
    heading: string;
    description: string;
    packages: PartyPackage[];
    addOns: PartyAddOn[];
    notes: string[];
    schedule: { season: string; slots: string }[];
  };
};

export type LanguageKey = "pt" | "en" | "es" | "fr";

export const flagSources: Record<LanguageKey, string> = {
  pt: "https://flagcdn.com/w40/pt.png",
  en: "https://flagcdn.com/w40/gb.png",
  es: "https://flagcdn.com/w40/es.png",
  fr: "https://flagcdn.com/w40/fr.png",
};

export const getFlagSrc = (lang: LanguageKey) => flagSources[lang];




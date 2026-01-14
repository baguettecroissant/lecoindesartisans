// TypeScript interfaces for data.json

export interface SiteSettings {
  name: string;
  domain: string;
  tagline: string;
  cta_main: string;
  cta_sub: string;
  contact_email: string;
  trust_badges: string[];
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  short_desc: string;
  full_desc: string;
  seo_title: string;
  icon: string;
  payout_category: "High Ticket" | "Medium Ticket" | "Volume";
}

export interface City {
  name: string;
  slug: string;
  zip: string;
  region: string;
}

export interface USP {
  title: string;
  description: string;
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogCategory {
  slug: string;
  name: string;
  description: string;
}

export interface SiteData {
  site_settings: SiteSettings;
  services: Service[];
  usps: USP[];
  faq_common: FAQ[];
  blog_categories: BlogCategory[];
  sample_cities: City[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  image: string;
}

import { SiteData, Service, City, SiteSettings, USP, FAQ, BlogCategory } from "@/types";
import dataJson from "../../data.json";

const data: SiteData = dataJson as SiteData;

export function getSiteSettings(): SiteSettings {
    return data.site_settings;
}

export function getAllServices(): Service[] {
    return data.services;
}

export function getServiceBySlug(slug: string): Service | undefined {
    return data.services.find((service) => service.slug === slug);
}

export function getAllCities(): City[] {
    return data.sample_cities;
}

export function getCityBySlug(slug: string): City | undefined {
    return data.sample_cities.find((city) => city.slug === slug);
}

export function getUSPs(): USP[] {
    return data.usps;
}

export function getFAQs(): FAQ[] {
    return data.faq_common;
}

export function getBlogCategories(): BlogCategory[] {
    return data.blog_categories;
}

export function getNearbyCities(currentSlug: string, limit: number = 4): City[] {
    const cities = data.sample_cities.filter((city) => city.slug !== currentSlug);
    // Shuffle and return a subset to simulate nearby cities
    const shuffled = cities.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, limit);
}

export function getOtherServices(currentSlug: string, limit: number = 3): Service[] {
    const services = data.services.filter((service) => service.slug !== currentSlug);
    return services.slice(0, limit);
}

// Generate SEO title by replacing {city} and {zip} placeholders
export function generateSeoTitle(template: string, city: City): string {
    return template.replace("{city}", city.name).replace("{zip}", city.zip);
}

// Generate all service/city combinations for static params
export function getAllServiceCityCombinations(): { serviceSlug: string; citySlug: string }[] {
    const combinations: { serviceSlug: string; citySlug: string }[] = [];

    for (const service of data.services) {
        for (const city of data.sample_cities) {
            combinations.push({
                serviceSlug: service.slug,
                citySlug: city.slug,
            });
        }
    }

    return combinations;
}

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

const RELATED_SERVICES: Record<string, string[]> = {
    "panneaux-solaires": ["pompe-a-chaleur", "borne-recharge", "isolation-exterieure"],
    "pompe-a-chaleur": ["panneaux-solaires", "climatisation-reversible", "isolation-exterieure"],
    "isolation-exterieure": ["fenetres-menuiserie", "pompe-a-chaleur", "toiture-couverture"],
    "fenetres-menuiserie": ["isolation-exterieure", "climatisation-reversible", "toiture-couverture"],
    "toiture-couverture": ["isolation-exterieure", "panneaux-solaires", "fenetres-menuiserie"],
    "plomberie-sanitaire": ["pompe-a-chaleur", "isolation-exterieure", "ballon-thermodynamique"],
    "climatisation-reversible": ["pompe-a-chaleur", "isolation-exterieure", "panneaux-solaires"],
    "borne-recharge": ["panneaux-solaires", "climatisation-reversible", "pompe-a-chaleur"]
};

export function getNearbyCities(currentSlug: string, limit: number = 4): City[] {
    const currentCity = getCityBySlug(currentSlug);
    const allCities = data.sample_cities.filter((city) => city.slug !== currentSlug);

    if (!currentCity) {
        // Fallback if current city not found (should not happen)
        return allCities.sort(() => 0.5 - Math.random()).slice(0, limit);
    }

    // 1. Prioritize cities in the same region
    const regionalCities = allCities.filter(c => c.region === currentCity.region);

    // 2. If we have enough regional cities, return them deterministically
    // We sort by name length or name itself to be stable
    if (regionalCities.length >= limit) {
        return regionalCities
            .sort((a, b) => a.name.localeCompare(b.name))
            .slice(0, limit);
    }

    // 3. Else, fill with other cities (stable sort)
    const otherCities = allCities.filter(c => c.region !== currentCity.region);
    const fillCount = limit - regionalCities.length;
    const filler = otherCities
        .sort((a, b) => a.name.localeCompare(b.name))
        .slice(0, fillCount);

    return [...regionalCities, ...filler];
}

export function getOtherServices(currentSlug: string, limit: number = 3): Service[] {
    const relatedSlugs = RELATED_SERVICES[currentSlug] || [];

    // Get the actual service objects for the related slugs
    const relatedServices = data.services.filter(s => relatedSlugs.includes(s.slug));

    // If we have enough related services, return them
    if (relatedServices.length >= limit) {
        return relatedServices.slice(0, limit);
    }

    // Otherwise fill with others (excluding current)
    const otherServices = data.services.filter(
        s => s.slug !== currentSlug && !relatedSlugs.includes(s.slug)
    );

    return [...relatedServices, ...otherServices].slice(0, limit);
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

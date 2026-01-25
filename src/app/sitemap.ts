import { MetadataRoute } from "next";
import { getSiteSettings, getAllServiceCityCombinations } from "@/lib/data";
import { getAllBlogPosts } from "@/data/blog-posts";

export default function sitemap(): MetadataRoute.Sitemap {
    const settings = getSiteSettings();
    const baseUrl = `https://${settings.domain}`;

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/qui-sommes-nous`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.6,
        },
        {
            url: `${baseUrl}/mentions-legales`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${baseUrl}/politique-confidentialite`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${baseUrl}/simulateur`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/simulateur/aides-etat`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/simulateur/isolation`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/simulateur/comparateur-devis`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/barometre-prix-renovation`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
    ];

    // Service/City pages (programmatic)
    const serviceCityPages = getAllServiceCityCombinations().map((combo) => ({
        url: `${baseUrl}/service/${combo.serviceSlug}/${combo.citySlug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.9,
    }));

    // Blog posts
    const blogPages = getAllBlogPosts().map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    return [...staticPages, ...serviceCityPages, ...blogPages];
}

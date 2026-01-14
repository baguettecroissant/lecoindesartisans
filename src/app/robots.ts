import { MetadataRoute } from "next";
import { getSiteSettings } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
    const settings = getSiteSettings();

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/", "/admin/"],
        },
        sitemap: `https://${settings.domain}/sitemap.xml`,
    };
}

import Link from "next/link";
import { Mail, MapPin, Shield } from "lucide-react";
import { getSiteSettings, getAllServices, getAllCities } from "@/lib/data";

export default function Footer() {
    const settings = getSiteSettings();
    const services = getAllServices();
    const cities = getAllCities().slice(0, 6);

    return (
        <footer className="bg-navy-900 text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">{settings.name}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {settings.tagline}
                        </p>
                        <div className="flex items-center space-x-2 text-gray-300">
                            <Mail className="w-4 h-4" />
                            <a
                                href={`mailto:${settings.contact_email}`}
                                className="text-sm hover:text-amber-400 transition-colors"
                            >
                                {settings.contact_email}
                            </a>
                        </div>
                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {settings.trust_badges.map((badge) => (
                                <span
                                    key={badge}
                                    className="inline-flex items-center px-2 py-1 bg-navy-800 rounded text-xs text-gray-300"
                                >
                                    <Shield className="w-3 h-3 mr-1 text-amber-400" />
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Nos Services</h4>
                        <ul className="space-y-2">
                            {services.map((service) => (
                                <li key={service.id}>
                                    <Link
                                        href={`/service/${service.slug}/paris`}
                                        className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                                    >
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Cities Column */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Villes Principales</h4>
                        <ul className="space-y-2">
                            {cities.map((city) => (
                                <li key={city.slug}>
                                    <Link
                                        href={`/service/panneaux-solaires/${city.slug}`}
                                        className="text-gray-300 hover:text-amber-400 transition-colors text-sm inline-flex items-center"
                                    >
                                        <MapPin className="w-3 h-3 mr-1" />
                                        {city.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Informations</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/blog"
                                    className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                                >
                                    Blog & Conseils
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/mentions-legales"
                                    className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                                >
                                    Mentions Légales
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/politique-confidentialite"
                                    className="text-gray-300 hover:text-amber-400 transition-colors text-sm"
                                >
                                    Politique de Confidentialité
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-navy-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <p className="text-center text-gray-400 text-sm">
                        © {new Date().getFullYear()} {settings.name}. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
}

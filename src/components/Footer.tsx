import Link from "next/link";
import { MapPin, Shield, Home } from "lucide-react";
import { getSiteSettings, getAllServices, getAllCities } from "@/lib/data";

export default function Footer() {
    const settings = getSiteSettings();
    const services = getAllServices();
    const cities = getAllCities().slice(0, 6);

    return (
        <footer className="bg-navy-900 pt-20 pb-10 overflow-hidden relative">
            {/* Decorative background element */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 pb-16">
                    {/* Brand Column */}
                    <div className="space-y-8">
                        <div>
                            <Link href="/" className="flex items-center space-x-2 group">
                                <div className="p-1.5 rounded-lg bg-amber-500 text-navy-900">
                                    <Home className="w-6 h-6" />
                                </div>
                                <span className="text-2xl font-black tracking-tighter text-white">
                                    Le Coin des <span className="text-amber-500">Artisans</span>
                                </span>
                            </Link>
                            <p className="mt-6 text-navy-200/60 leading-relaxed text-sm">
                                Votre partenaire de confiance pour tous vos projets de rénovation. Nous connectons les meilleurs artisans avec des clients exigeants.
                            </p>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-3">
                            <div className="flex items-center space-x-2 px-3 py-2 bg-white/5 border border-white/10 rounded-xl" title="Artisans Certifiés RGE">
                                <Shield className="w-4 h-4 text-amber-500" />
                                <span className="text-[10px] font-bold text-white uppercase tracking-wider">Certifié RGE</span>
                            </div>
                            <div className="flex items-center space-x-2 px-3 py-2 bg-white/5 border border-white/10 rounded-xl" title="Garantie Décennale">
                                <Shield className="w-4 h-4 text-amber-500" />
                                <span className="text-[10px] font-bold text-white uppercase tracking-wider">Qualibat</span>
                            </div>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-8 relative inline-block">
                            Expertises
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-amber-500 rounded-full" />
                        </h4>
                        <ul className="space-y-4">
                            {services.map((service) => (
                                <li key={service.id}>
                                    <Link
                                        href={`/service/${service.slug}/paris`}
                                        className="text-navy-200/60 hover:text-amber-500 transition-all duration-300 text-sm flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-4 h-px bg-amber-500 mr-0 group-hover:mr-2 transition-all" />
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Cities Column */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-8 relative inline-block">
                            Zones populaires
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-amber-500 rounded-full" />
                        </h4>
                        <ul className="grid grid-cols-1 gap-4">
                            {cities.map((city) => (
                                <li key={city.slug}>
                                    <Link
                                        href={`/service/panneaux-solaires/${city.slug}`}
                                        className="text-navy-200/60 hover:text-amber-500 transition-all duration-300 text-sm flex items-center group"
                                    >
                                        <MapPin className="w-3.5 h-3.5 mr-2 text-amber-500/50 group-hover:text-amber-500" />
                                        {city.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact/Legal Column */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-8 relative inline-block">
                            Contact
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-amber-500 rounded-full" />
                        </h4>
                        <div className="space-y-6">
                            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                                <p className="text-navy-200/40 text-xs mb-1 uppercase font-bold tracking-widest">Email professionnel</p>
                                <a
                                    href={`mailto:${settings.contact_email}`}
                                    className="text-white hover:text-amber-500 transition-colors font-medium"
                                >
                                    {settings.contact_email}
                                </a>
                            </div>

                            <ul className="space-y-4 pt-4 border-t border-white/5">
                                <li>
                                    <Link href="/qui-sommes-nous" className="text-navy-200/60 hover:text-white transition-colors text-sm">Qui sommes-nous ?</Link>
                                </li>
                                <li>
                                    <Link href="/blog" className="text-navy-200/60 hover:text-white transition-colors text-sm">Blog & Conseils</Link>
                                </li>
                                <li>
                                    <Link href="/mentions-legales" className="text-navy-200/60 hover:text-white transition-colors text-sm">Mentions Légales</Link>
                                </li>
                                <li>
                                    <Link href="/politique-confidentialite" className="text-navy-200/60 hover:text-white transition-colors text-sm">Confidentialité</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-navy-200/30 text-[11px] font-medium tracking-widest uppercase">
                        © {new Date().getFullYear()} {settings.name}. L'excellence artisanale.
                    </p>
                    <div className="flex items-center space-x-6">
                        <span className="text-navy-200/30 text-[10px] font-bold uppercase tracking-widest">Paris • Lyon • Marseille • Bordeaux</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

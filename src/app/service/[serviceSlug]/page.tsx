
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    getServiceBySlug,
    getAllCities,
    getSiteSettings
} from "@/lib/data";
import { getServiceContent } from "@/data/service-content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    CheckCircle,
    MapPin,
    ArrowRight,
    Star,
    ShieldCheck,
    Clock,
    // Add missing icons for dynamic mapping
    Thermometer,
    VolumeX,
    Shield,
    Sparkles,
    Zap,
    Activity,
    Gift,
    Home,
    Smartphone,
    Wrench,
    Wind,
    TrendingUp
} from "lucide-react";

interface PageProps {
    params: Promise<{
        serviceSlug: string;
    }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const service = getServiceBySlug(resolvedParams.serviceSlug);
    const settings = getSiteSettings();

    if (!service) {
        return {
            title: "Service non trouvé",
        };
    }

    return {
        title: `${service.name} : Tout savoir sur l'installation et les devis - ${settings.name}`,
        description: `Guide complet sur ${service.name.toLowerCase()} : fonctionnement, prix, aides de l'État. Trouvez un artisan RGE qualifié dans votre région.`,
    };
}

export default async function ServiceHubPage({ params }: PageProps) {
    const resolvedParams = await params;
    const service = getServiceBySlug(resolvedParams.serviceSlug);
    const serviceContent = getServiceContent(resolvedParams.serviceSlug);
    const cities = getAllCities();

    if (!service || !serviceContent) {
        notFound();
    }

    // Group cities by region
    const citiesByRegion = cities.reduce((acc, city) => {
        if (!acc[city.region]) {
            acc[city.region] = [];
        }
        acc[city.region].push(city);
        return acc;
    }, {} as Record<string, typeof cities>);

    // Sort regions alphabetically
    const sortedRegions = Object.keys(citiesByRegion).sort();

    // Helper to render icons dynamically
    const renderServiceIcon = (icon: string) => {
        // Map string names to Lucide components
        const iconMap: Record<string, any> = {
            "thermometer": <Thermometer className="w-10 h-10 text-amber-500" />,
            "volume-x": <VolumeX className="w-10 h-10 text-amber-500" />,
            "shield": <Shield className="w-10 h-10 text-amber-500" />,
            "sparkles": <Sparkles className="w-10 h-10 text-amber-500" />,
            "zap": <Zap className="w-10 h-10 text-amber-500" />,
            "clock": <Clock className="w-10 h-10 text-amber-500" />,
            "activity": <Activity className="w-10 h-10 text-amber-500" />,
            "gift": <Gift className="w-10 h-10 text-amber-500" />,
            "home": <Home className="w-10 h-10 text-amber-500" />,
            "smartphone": <Smartphone className="w-10 h-10 text-amber-500" />,
            "tools": <Wrench className="w-10 h-10 text-amber-500" />,
            "wind": <Wind className="w-10 h-10 text-amber-500" />,
            "trending-up": <TrendingUp className="w-10 h-10 text-amber-500" />,
        };

        if (iconMap[icon]) {
            return iconMap[icon];
        }

        // Return emoji or other text as is
        return <span className="text-4xl">{icon}</span>;
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-navy-900 text-white pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <div className="flex items-center text-sm text-navy-200 mb-6">
                        <Link href="/" className="hover:text-white transition-colors">
                            Accueil
                        </Link>
                        <span className="mx-2">/</span>
                        <Link href="/service" className="hover:text-white transition-colors">
                            Services
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="text-amber-400">{service.name}</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                                {service.name}
                            </h1>
                            <p className="text-xl text-navy-100 mb-8 leading-relaxed">
                                {serviceContent.tagline}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#regions"
                                    className="px-8 py-4 bg-amber-500 text-white font-bold rounded-xl hover:bg-amber-600 transition-colors shadow-lg shadow-amber-500/20"
                                >
                                    Trouver un artisan près de chez moi
                                </a>
                            </div>
                        </div>
                        <div className="hidden lg:block relative">
                            {/* Abstract Decorative Elements representing quality/trust */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                                <ul className="space-y-6">
                                    <li className="flex items-start">
                                        <div className="p-2 bg-amber-500 rounded-lg mr-4 mt-1">
                                            <ShieldCheck className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">Garantie Décennale</h3>
                                            <p className="text-navy-100 text-sm">Tous nos artisans partenaires sont assurés.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="p-2 bg-amber-500 rounded-lg mr-4 mt-1">
                                            <CheckCircle className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">Certifié RGE</h3>
                                            <p className="text-navy-100 text-sm">Indispensable pour vos aides financières.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="p-2 bg-amber-500 rounded-lg mr-4 mt-1">
                                            <Clock className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">Réponse sous 48h</h3>
                                            <p className="text-navy-100 text-sm">Obtenez vos devis rapidement.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-navy-900 mb-8">
                        Pourquoi choisir {service.name.toLowerCase()} ?
                    </h2>
                    <div className="prose prose-lg mx-auto text-gray-600">
                        {serviceContent.introduction.split('\n\n').map((paragraph, idx) => (
                            <p key={idx} className="mb-4">{paragraph}</p>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-navy-900 mb-12 text-center">
                        {serviceContent.benefitsTitle}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {serviceContent.benefits.map((benefit, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <div className="mb-6">{renderServiceIcon(benefit.icon)}</div>
                                <h3 className="text-xl font-bold text-navy-900 mb-3">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Regional Links (The Silo) */}
            <section id="regions" className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-amber-600 font-bold uppercase tracking-wider text-sm">Zone d'intervention</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2">
                            Trouvez un installateur {service.name.toLowerCase()} dans votre région
                        </h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            Nous sélectionnons les meilleurs artisans RGE partout en France.
                            Cliquez sur votre région ou votre ville pour commencer.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sortedRegions.map((region) => (
                            <div key={region} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center">
                                    <MapPin className="w-5 h-5 text-amber-600 mr-2" />
                                    {region}
                                </h3>
                                <ul className="space-y-2">
                                    {citiesByRegion[region]
                                        .sort((a, b) => a.name.localeCompare(b.name))
                                        .map((city) => (
                                            <li key={city.slug}>
                                                <Link
                                                    href={`/service/${service.slug}/${city.slug}`}
                                                    className="text-gray-600 hover:text-amber-600 transition-colors flex items-center justify-between group"
                                                >
                                                    <span>{city.name}</span>
                                                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                                                </Link>
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-amber-500 py-16">
                <div className="max-w-4xl mx-auto px-4 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        {serviceContent.ctaTitle}
                    </h2>
                    <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                        {serviceContent.ctaDescription}
                    </p>
                    <a
                        href="#regions"
                        className="inline-block px-8 py-4 bg-white text-amber-600 font-bold rounded-xl hover:bg-navy-50 transition-colors shadow-lg"
                    >
                        Commencer ma demande de devis
                    </a>
                </div>
            </section>
        </div>
    );
}

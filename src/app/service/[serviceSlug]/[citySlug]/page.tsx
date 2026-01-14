import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, ArrowRight, CheckCircle, Star } from "lucide-react";
import {
    getAllServiceCityCombinations,
    getServiceBySlug,
    getCityBySlug,
    generateSeoTitle,
    getFAQs,
    getNearbyCities,
    getOtherServices,
    getSiteSettings,
} from "@/lib/data";
import LeadForm from "@/components/LeadForm";
import FAQAccordion from "@/components/FAQAccordion";
import StickyCTA from "@/components/StickyCTA";

interface PageProps {
    params: Promise<{
        serviceSlug: string;
        citySlug: string;
    }>;
}

// Generate all service/city combinations at build time
export async function generateStaticParams() {
    return getAllServiceCityCombinations();
}

// Generate dynamic metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const service = getServiceBySlug(resolvedParams.serviceSlug);
    const city = getCityBySlug(resolvedParams.citySlug);

    if (!service || !city) {
        return {
            title: "Page non trouvée",
        };
    }

    const title = generateSeoTitle(service.seo_title, city);
    const description = `${service.full_desc} Comparez les devis des artisans à ${city.name} (${city.zip}).`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: "website",
        },
    };
}

export default async function ServiceCityPage({ params }: PageProps) {
    const resolvedParams = await params;
    const service = getServiceBySlug(resolvedParams.serviceSlug);
    const city = getCityBySlug(resolvedParams.citySlug);

    if (!service || !city) {
        notFound();
    }

    const settings = getSiteSettings();
    const faqs = getFAQs();
    const nearbyCities = getNearbyCities(city.slug);
    const otherServices = getOtherServices(service.slug);

    // Generate localized H1
    const h1Title = generateSeoTitle(service.seo_title, city).replace(" - ", " : ");

    // Schema.org Structured Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.name,
        "provider": {
            "@type": "LocalBusiness",
            "name": `${settings.name} ${city.name}`,
            "image": `https://${settings.domain}/logo.png`,
            "address": {
                "@type": "PostalAddress",
                "addressLocality": city.name,
                "postalCode": city.zip,
                "addressCountry": "FR"
            },
            "priceRange": "€€-€€€"
        },
        "areaServed": {
            "@type": "City",
            "name": city.name
        },
        "description": service.full_desc,
        "url": `https://${settings.domain}/service/${service.slug}/${city.slug}`
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <StickyCTA cityName={city.name} />

            {/* Hero Section */}
            <section className="gradient-hero text-white py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center text-sm text-navy-200 mb-4">
                        <Link href="/" className="hover:text-white">
                            Accueil
                        </Link>
                        <span className="mx-2">/</span>
                        <span>{service.name}</span>
                        <span className="mx-2">/</span>
                        <span className="text-amber-400">{city.name}</span>
                    </div>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        {h1Title}
                    </h1>

                    <div className="flex items-center space-x-4 text-navy-100">
                        <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {city.name} ({city.zip}) - {city.region}
                        </span>
                        <span className="flex items-center">
                            <Star className="w-4 h-4 text-amber-400 mr-1" />
                            4.8/5 (127 avis)
                        </span>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Content Column */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Service Description */}
                            <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8">
                                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                                    {service.name} à {city.name}
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {service.full_desc}
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                                        <div>
                                            <p className="font-medium text-navy-900">Artisans certifiés RGE</p>
                                            <p className="text-sm text-gray-600">Qualification reconnue par l&apos;État</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                                        <div>
                                            <p className="font-medium text-navy-900">Garantie décennale</p>
                                            <p className="text-sm text-gray-600">Assurance travaux incluse</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                                        <div>
                                            <p className="font-medium text-navy-900">Devis détaillé gratuit</p>
                                            <p className="text-sm text-gray-600">Sans engagement de votre part</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                                        <div>
                                            <p className="font-medium text-navy-900">Intervention à {city.name}</p>
                                            <p className="text-sm text-gray-600">{city.region} et alentours</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Why Choose Us */}
                            <div className="bg-amber-50 rounded-xl border border-amber-100 p-6 md:p-8">
                                <h3 className="text-xl font-bold text-navy-900 mb-4">
                                    Pourquoi passer par {settings.name} ?
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-gray-700">
                                        <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                                        Comparez jusqu&apos;à 3 devis d&apos;artisans à {city.name}
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                                        Service 100% gratuit et sans engagement
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                                        Artisans vérifiés avec avis clients authentiques
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                                        Réponse sous 24h à 48h maximum
                                    </li>
                                </ul>
                            </div>

                            {/* FAQ Section */}
                            <div>
                                <h3 className="text-xl font-bold text-navy-900 mb-4">
                                    Questions fréquentes sur {service.name.toLowerCase()}
                                </h3>
                                <FAQAccordion
                                    faqs={faqs}
                                    serviceName={service.name}
                                    cityName={city.name}
                                />
                            </div>

                            {/* Internal Links - Other Cities */}
                            <div className="bg-white rounded-xl border border-gray-100 p-6">
                                <h3 className="text-lg font-bold text-navy-900 mb-4">
                                    {service.name} dans d&apos;autres villes
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {nearbyCities.map((nearbyCity) => (
                                        <Link
                                            key={nearbyCity.slug}
                                            href={`/service/${service.slug}/${nearbyCity.slug}`}
                                            className="flex items-center text-gray-600 hover:text-amber-600 transition-colors"
                                        >
                                            <MapPin className="w-4 h-4 mr-1" />
                                            {nearbyCity.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Internal Links - Other Services */}
                            <div className="bg-white rounded-xl border border-gray-100 p-6">
                                <h3 className="text-lg font-bold text-navy-900 mb-4">
                                    Autres services à {city.name}
                                </h3>
                                <div className="space-y-3">
                                    {otherServices.map((otherService) => (
                                        <Link
                                            key={otherService.id}
                                            href={`/service/${otherService.slug}/${city.slug}`}
                                            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-amber-50 transition-colors group"
                                        >
                                            <span className="font-medium text-navy-900 group-hover:text-amber-600">
                                                {otherService.name}
                                            </span>
                                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-amber-600" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar - Lead Form */}
                        <div className="lg:col-span-1">
                            <div id="lead-form" className="sticky top-20">
                                <LeadForm serviceName={service.name} cityName={city.name} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

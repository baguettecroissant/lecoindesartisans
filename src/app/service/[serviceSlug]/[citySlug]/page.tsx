import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, ArrowRight, CheckCircle, Star, Clock } from "lucide-react";
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
import { getRegionalContent, generateRegionalDescription } from "@/data/regional-content";
import { getServiceContent } from "@/data/service-content";
import { MARKET_DATA } from "@/data/market-prices";
import LeadForm from "@/components/LeadForm";
import FAQAccordion from "@/components/FAQAccordion";
import StickyCTA from "@/components/StickyCTA";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

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
    const settings = getSiteSettings();

    if (!service || !city) {
        return {
            title: "Page non trouvée",
        };
    }

    const title = generateSeoTitle(service.seo_title, city);
    const description = generateRegionalDescription(service.name, city.name, city.region, service.slug);
    const canonicalUrl = `/service/${service.slug}/${city.slug}`;

    return {
        title,
        description,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title,
            description,
            type: "website",
            url: `https://${settings.domain}${canonicalUrl}`,
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

    // Get regional content for unique SEO
    const regionalData = getRegionalContent(service.slug, city.region);

    // Get rich service content (if available)
    const serviceContentData = getServiceContent(service.slug);

    // Generate localized H1
    const h1Title = generateSeoTitle(service.seo_title, city).replace(" - ", " : ");

    // Map service to market data category
    const marketDataCategoryMap: Record<string, string> = {
        "panneaux-solaires": "solaire",
        "pompe-a-chaleur": "chauffage",
        "isolation-exterieure": "isolation",
        "fenetres-menuiserie": "menuiserie"
    };
    const marketCategoryId = marketDataCategoryMap[service.slug];
    const marketData = marketCategoryId ? MARKET_DATA.find(c => c.id === marketCategoryId) : null;

    // Schema.org: Service with AggregateRating
    const serviceSchema = {
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
            "priceRange": "€€-€€€",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127",
                "bestRating": "5",
                "worstRating": "1"
            }
        },
        "areaServed": {
            "@type": "City",
            "name": city.name
        },
        "description": regionalData.intro,
        "url": `https://${settings.domain}/service/${service.slug}/${city.slug}`
    };

    // Schema.org: BreadcrumbList
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Accueil",
                "item": `https://${settings.domain}`
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": service.name,
                "item": `https://${settings.domain}/service/${service.slug}`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": city.name,
                "item": `https://${settings.domain}/service/${service.slug}/${city.slug}`
            }
        ]
    };

    // Schema.org: FAQPage
    // Merge specific service FAQs with generic FAQs
    const allFaqs = [
        ...(serviceContentData?.faqs || []),
        ...faqs
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": allFaqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question.replace("{service}", service.name.toLowerCase()).replace("{city}", city.name),
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer.replace("{service}", service.name.toLowerCase()).replace("{city}", city.name)
            }
        }))
    };

    // Schema.org: HowTo
    // Use specific process steps if available, otherwise generic
    const howToSteps = serviceContentData?.processSteps
        ? serviceContentData.processSteps.map((step, index) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": step.title,
            "text": step.description,
            "url": `https://${settings.domain}/service/${service.slug}/${city.slug}#process`
        }))
        : [
            {
                "@type": "HowToStep",
                "position": 1,
                "name": "Décrivez votre projet",
                "text": `Remplissez le formulaire en décrivant votre projet de ${service.name.toLowerCase()} : surface, état actuel, délai souhaité.`,
                "url": `https://${settings.domain}/service/${service.slug}/${city.slug}#lead-form`
            },
            {
                "@type": "HowToStep",
                "position": 2,
                "name": "Recevez jusqu'à 3 devis",
                "text": "Sous 24 à 48h, recevez jusqu'à 3 propositions détaillées d'artisans certifiés RGE de votre région."
            },
            {
                "@type": "HowToStep",
                "position": 3,
                "name": "Comparez et choisissez",
                "text": "Comparez les devis en toute transparence : prix, délais, garanties. Choisissez l'artisan qui vous convient."
            },
            {
                "@type": "HowToStep",
                "position": 4,
                "name": "Lancez vos travaux",
                "text": `Votre artisan intervient à ${city.name} pour réaliser vos travaux avec garantie décennale.`
            }
        ];

    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": serviceContentData?.processTitle || `Comment obtenir des devis pour ${service.name.toLowerCase()} à ${city.name}`,
        "description": `Guide étape par étape pour ${service.name.toLowerCase()} à ${city.name}.`,
        "totalTime": serviceContentData ? "P21D" : "PT5M", // 21 days real process vs 5 mins quote
        "estimatedCost": {
            "@type": "MonetaryAmount",
            "currency": "EUR",
            "value": "0"
        },
        "step": howToSteps
    };

    return (
        <>
            {/* Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
            />
            <StickyCTA cityName={city.name} />

            {/* Hero Section */}
            <section className="gradient-hero text-white pt-32 pb-16 md:pt-40 md:pb-24">
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
                        <div className="lg:col-span-2 space-y-8 min-w-0">
                            {/* Service Description - Regional Content */}
                            <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8">
                                <h2 className="text-2xl font-bold text-navy-900 mb-4">
                                    {service.name} à {city.name}
                                </h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    {regionalData.intro}
                                </p>

                                {/* Regional Climate Note */}
                                {regionalData.climate_note && (
                                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6 rounded-r-lg">
                                        <p className="text-amber-800 text-sm font-medium">
                                            💡 {regionalData.climate_note}
                                        </p>
                                    </div>
                                )}

                                {/* Regional Price Range */}
                                {regionalData.price_range && (
                                    <div className="bg-navy-50 border border-navy-100 rounded-xl p-5 mb-6">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="font-bold text-navy-900">💰 Prix indicatifs à {city.name}</h3>
                                            <span className="text-xs text-gray-500">Avant aides</span>
                                        </div>
                                        <div className="flex items-baseline gap-1 mb-2">
                                            <span className="text-3xl font-bold text-amber-600">
                                                {regionalData.price_range.min.toLocaleString('fr-FR')}€
                                            </span>
                                            <span className="text-gray-500">à</span>
                                            <span className="text-3xl font-bold text-amber-600">
                                                {regionalData.price_range.max.toLocaleString('fr-FR')}€
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-1">
                                            {regionalData.price_range.unit}
                                        </p>
                                        {regionalData.price_range.note && (
                                            <p className="text-xs text-gray-500 italic">
                                                {regionalData.price_range.note}
                                            </p>
                                        )}
                                    </div>
                                )}

                                {/* Dynamic Price Barometer (GEO Data Injection) */}
                                {marketData && (
                                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden mb-8">
                                        <div className="bg-navy-900 px-6 py-4 flex justify-between items-center">
                                            <h3 className="font-bold text-white flex items-center gap-2">
                                                <TrendingUp className="w-5 h-5 text-amber-500" />
                                                Baromètre Prix {city.name} {new Date().getFullYear()}
                                            </h3>
                                            <span className="text-[10px] font-bold uppercase tracking-wider text-navy-200 bg-white/10 px-2 py-1 rounded">
                                                Moyenne Constatée
                                            </span>
                                        </div>
                                        <div className="divide-y divide-gray-100">
                                            {marketData.items.map((item, idx) => (
                                                <div key={idx} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                                                    <div>
                                                        <p className="font-medium text-navy-900 text-sm">{item.label}</p>
                                                        <div className="flex items-center text-xs text-gray-500 mt-1">
                                                            <span className={item.trend < 0 ? "text-green-600 font-bold" : "text-gray-500"}>
                                                                {item.trend > 0 ? "+" : ""}{item.trend}%
                                                            </span>
                                                            <span className="mx-1">•</span>
                                                            <span>vs année précédente</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="font-bold text-amber-600 text-lg">
                                                            {item.price.toLocaleString()} {item.unit}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="bg-amber-50 px-6 py-3 border-t border-amber-100">
                                            <Link href="/barometre-prix-renovation" className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center justify-center">
                                                Voir toutes les tendances nationales <ArrowRight className="w-3 h-3 ml-1" />
                                            </Link>
                                        </div>
                                    </div>
                                )}

                                {/* Regional Specialties */}
                                <div className="mb-6">
                                    <p className="text-sm font-semibold text-navy-900 mb-2">Spécialités locales :</p>
                                    <div className="flex flex-wrap gap-2">
                                        {regionalData.specialties.map((specialty, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-navy-50 text-navy-700 rounded-full text-sm">
                                                {specialty}
                                            </span>
                                        ))}
                                    </div>
                                </div>

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

                            {/* Rich Service Content */}
                            {serviceContentData && (
                                <>
                                    {/* Detailed Introduction */}
                                    <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8">
                                        <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-4">
                                            Tout savoir sur : {service.name} à {city.name}
                                        </h2>
                                        <div className="prose max-w-none text-gray-600 leading-relaxed">
                                            {serviceContentData.introduction.split('\n\n').map((paragraph, idx) => (
                                                <p key={idx} className="mb-4 last:mb-0">{paragraph}</p>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Process Steps */}
                                    <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8">
                                        <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-6">
                                            {serviceContentData.processTitle}
                                        </h3>
                                        <div className="space-y-6">
                                            {serviceContentData.processSteps.map((step, idx) => (
                                                <div key={idx} className="flex gap-4">
                                                    <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base">
                                                        {idx + 1}
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex flex-wrap items-center gap-2 mb-1">
                                                            <h4 className="font-bold text-navy-900 text-sm md:text-base">{step.title}</h4>
                                                            {step.duration && (
                                                                <span className="inline-flex items-center text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-full border border-gray-100 whitespace-nowrap">
                                                                    <Clock className="w-3 h-3 mr-1" />
                                                                    {step.duration}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Benefits Grid */}
                                    <div className="bg-navy-900 rounded-xl p-6 md:p-8 text-white">
                                        <h3 className="text-xl md:text-2xl font-bold mb-6">
                                            {serviceContentData.benefitsTitle}
                                        </h3>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            {serviceContentData.benefits.map((benefit, idx) => (
                                                <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-4">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <span className="text-2xl">{benefit.icon}</span>
                                                        <h4 className="font-bold text-sm md:text-base">{benefit.title}</h4>
                                                    </div>
                                                    <p className="text-navy-100 text-sm leading-relaxed">{benefit.description}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Price Table - Simplified for stability */}
                                    <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8">
                                        <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-2">
                                            {serviceContentData.priceTableTitle}
                                        </h3>
                                        <p className="text-gray-500 text-sm mb-6">{serviceContentData.priceTableNote}</p>

                                        {/* Mobile Cards */}
                                        <div className="md:hidden space-y-3">
                                            {serviceContentData.priceTable.map((row, idx) => (
                                                <div key={idx} className={`p-4 rounded-lg border ${row.recommended ? 'border-amber-400 bg-amber-50' : 'border-gray-100 bg-gray-50'}`}>
                                                    <div className="flex justify-between items-start mb-2">
                                                        <div>
                                                            <h4 className="font-bold text-navy-900 text-sm">{row.option}</h4>
                                                            {row.recommended && (
                                                                <span className="inline-block mt-1 text-[10px] uppercase font-bold text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">
                                                                    Recommandé
                                                                </span>
                                                            )}
                                                        </div>
                                                        <span className="font-bold text-amber-600 text-sm">{row.priceRange}</span>
                                                    </div>
                                                    <p className="text-xs text-gray-600 leading-relaxed">{row.details}</p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Desktop Table */}
                                        <div className="hidden md:block overflow-x-auto">
                                            <table className="w-full">
                                                <thead>
                                                    <tr className="bg-gray-50 text-sm text-gray-500">
                                                        <th className="px-4 py-3 text-left rounded-tl-lg font-semibold">Option</th>
                                                        <th className="px-4 py-3 text-left font-semibold">Prix</th>
                                                        <th className="px-4 py-3 text-left rounded-tr-lg font-semibold">Détails</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-100 text-sm">
                                                    {serviceContentData.priceTable.map((row, idx) => (
                                                        <tr key={idx} className={row.recommended ? 'bg-amber-50/50' : ''}>
                                                            <td className="px-4 py-4 font-medium text-navy-900">
                                                                {row.option}
                                                                {row.recommended && (
                                                                    <span className="ml-2 text-[10px] bg-amber-500 text-white px-2 py-0.5 rounded-full uppercase tracking-wide">
                                                                        Recommandé
                                                                    </span>
                                                                )}
                                                            </td>
                                                            <td className="px-4 py-4 font-bold text-amber-600 whitespace-nowrap">{row.priceRange}</td>
                                                            <td className="px-4 py-4 text-gray-600">{row.details}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Comparison Table - Standard scroll, no sticky */}
                                    {serviceContentData.comparisonTable && serviceContentData.comparisonOptions && (
                                        <div className="bg-white rounded-xl border border-gray-100 p-6 md:p-8">
                                            <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-6">
                                                {serviceContentData.comparisonTitle}
                                            </h3>
                                            <div className="overflow-x-auto">
                                                <table className="min-w-full divide-y divide-gray-200">
                                                    <thead>
                                                        <tr className="bg-gray-50">
                                                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">Critère</th>
                                                            {serviceContentData.comparisonOptions.map((option, idx) => (
                                                                <th key={idx} className="px-4 py-3 text-left text-xs font-bold text-navy-900 uppercase tracking-wider whitespace-nowrap">{option}</th>
                                                            ))}
                                                        </tr>
                                                    </thead>
                                                    <tbody className="bg-white divide-y divide-gray-200 text-sm">
                                                        {serviceContentData.comparisonTable.map((row, idx) => (
                                                            <tr key={idx}>
                                                                <td className="px-4 py-3 font-medium text-navy-900 whitespace-nowrap bg-gray-50/50">{row.criteria}</td>
                                                                {serviceContentData.comparisonOptions!.map((option, optIdx) => (
                                                                    <td key={optIdx} className="px-4 py-3 text-gray-600 min-w-[140px]">
                                                                        {row.options[option]}
                                                                    </td>
                                                                ))}
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}

                            {/* FAQ Section (Merged) */}
                            <div>
                                <h3 className="text-xl font-bold text-navy-900 mb-4">
                                    Questions fréquentes
                                </h3>
                                <FAQAccordion
                                    faqs={serviceContentData ? [...serviceContentData.faqs, ...faqs] : faqs}
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

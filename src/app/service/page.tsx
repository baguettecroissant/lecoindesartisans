
import { getAllServices } from "@/lib/data";
import Link from "next/link";
import { ArrowRight, CheckCircle, Wrench } from "lucide-react";

export const metadata = {
    title: "Nos Services de Rénovation Énergétique - Le Coin des Artisans",
    description: "Découvrez tous nos services pour améliorer la performance énergétique de votre habitat : panneaux solaires, pompe à chaleur, isolation, et plus encore.",
};

export default function ServicesIndexPage() {
    const services = getAllServices();

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="bg-navy-900 text-white pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Nos Expertises et Services
                    </h1>
                    <p className="text-xl text-navy-100 max-w-3xl mx-auto">
                        Des solutions clés en main pour la rénovation énergétique de votre habitat.
                        Trouvez l'artisan qualifié RGE qu'il vous faut.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <Link
                                key={service.id}
                                href={`/service/${service.slug}`}
                                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
                            >
                                <div className="p-8 flex-grow">
                                    <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors">
                                        <Wrench className="w-7 h-7 text-amber-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-navy-900 mb-3 group-hover:text-amber-600 transition-colors">
                                        {service.name}
                                    </h3>
                                    <p className="text-gray-600 mb-6 line-clamp-3">
                                        {/* Fallback description if not in data, or generic text */}
                                        Installation, entretien et dépannage par des experts certifiés RGE.
                                        Obtenez vos devis et estimez vos aides en quelques clics.
                                    </p>
                                    <ul className="space-y-2 mb-6">
                                        <li className="flex items-center text-sm text-gray-500">
                                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                            Artisans RGE vérifiés
                                        </li>
                                        <li className="flex items-center text-sm text-gray-500">
                                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                            Devis gratuits & sans engagement
                                        </li>
                                        <li className="flex items-center text-sm text-gray-500">
                                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                                            Garantie décennale incluse
                                        </li>
                                    </ul>
                                </div>
                                <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between group-hover:bg-amber-50 transition-colors">
                                    <span className="font-semibold text-navy-900">En savoir plus</span>
                                    <ArrowRight className="w-5 h-5 text-amber-600 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

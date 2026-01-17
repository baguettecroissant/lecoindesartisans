
import { Metadata } from "next";
import Link from "next/link";
import { Calculator, Sun, Flame, ArrowRight, MousePointerClick } from "lucide-react";

export const metadata: Metadata = {
    title: "Outils & Simulateurs Gratuits | Le Coin des Artisans",
    description: "Nos outils 100% gratuits pour vos projets travaux : Rentabilité Solaire, Dimensionnement Chauffage, Aides de l'État.",
};

const TOOLS = [
    {
        id: "solaire",
        title: "Rentabilité Solaire",
        description: "Estimez vos économies sur 20 ans et votre retour sur investissement photovoltaïque.",
        icon: Sun,
        color: "text-amber-500",
        bg: "bg-amber-50 group-hover:bg-amber-100",
        href: "/simulateur/solaire",
        badge: "Populaire 🔥"
    },
    {
        id: "chauffage",
        title: "Dimensionnement Chauffage",
        description: "Calculez la puissance idéale (kW) de votre future Pompe à Chaleur pour éviter le surcoût.",
        icon: Flame,
        color: "text-blue-500",
        bg: "bg-blue-50 group-hover:bg-blue-100",
        href: "/simulateur/chauffage",
        badge: "Nouveau ✨"
    }
];

export default function SimulatorsHubPage() {
    return (
        <main className="min-h-screen bg-gray-50 pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold text-navy-900 mb-6">
                        Des outils <span className="text-amber-500">gratuits</span> pour réussir vos travaux
                    </h1>
                    <p className="text-xl text-gray-600">
                        Ne partez pas à l'aveugle. Utilisez nos simulateurs développés avec des experts pour chiffrer vos projets avant de demander des devis.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TOOLS.map((tool) => (
                        <Link
                            key={tool.id}
                            href={tool.href}
                            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all group relative overflow-hidden"
                        >
                            {tool.badge && (
                                <span className="absolute top-4 right-4 bg-navy-900 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    {tool.badge}
                                </span>
                            )}

                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors ${tool.bg}`}>
                                <tool.icon className={`w-8 h-8 ${tool.color}`} />
                            </div>

                            <h2 className="text-2xl font-bold text-navy-900 mb-3 group-hover:text-amber-600 transition-colors">
                                {tool.title}
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {tool.description}
                            </p>

                            <div className="flex items-center text-navy-900 font-bold group-hover:translate-x-2 transition-transform">
                                Utiliser l'outil
                                <ArrowRight className="w-5 h-5 ml-2 text-amber-500" />
                            </div>
                        </Link>
                    ))}

                    {/* Coming Soon Card */}
                    <div className="bg-gray-100 rounded-2xl p-8 border border-dashed border-gray-300 flex flex-col justify-center items-center text-center opacity-75">
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-6">
                            <Calculator className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-500 mb-2">Bientôt disponible</h3>
                        <p className="text-sm text-gray-500">
                            De nouveaux outils arrivent : Éligibilité MaPrimeRénov', Vérificateur d'Artisan...
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}

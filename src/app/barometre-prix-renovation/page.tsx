
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, TrendingDown, Minus, Info } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { MARKET_DATA } from "@/data/market-prices";

export const metadata: Metadata = {
    title: "Baromètre Prix Rénovation 2026 : Coûts Moyens et Tendances",
    description: "Le baromètre officiel des prix de la rénovation en 2026. Suivez l'évolution du coût des travaux (Isolation, Chauffage, Solaire) en temps réel.",
    keywords: ["prix renovation 2026", "cout travaux m2", "tendance prix materiaux", "barometre artisanat", "prix isolation 2026"]
};

// Helper component to render icon dynamically
const IconComponent = ({ name, className }: { name: string, className: string }) => {
    // @ts-ignore
    const Icon = LucideIcons[name];
    return Icon ? <Icon className={className} /> : null;
};

export default function BarometrePage() {
    const currentDate = new Date().toLocaleDateString("fr-FR", { month: "long", year: "numeric" });

    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <div className="bg-navy-900 text-white pt-32 pb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                    <TrendingUp className="w-64 h-64 text-amber-500" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-6 backdrop-blur-sm">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                        <span className="text-sm font-medium">Données mises à jour : {currentDate}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black mb-6">
                        Baromètre des Prix <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                            Rénovation 2026
                        </span>
                    </h1>
                    <p className="text-xl text-navy-100 max-w-3xl leading-relaxed">
                        L'unique source de données fiable pour estimer vos travaux. Nous agrégeons des milliers de devis réels pour vous donner le "vrai prix" du marché.
                    </p>
                </div>
            </div>

            {/* Analysis Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
                <div className="grid gap-8">
                    {MARKET_DATA.map((category) => (
                        <div key={category.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white rounded-xl shadow-sm">
                                        <IconComponent name={category.icon} className="w-6 h-6 text-amber-600" />
                                    </div>
                                    <h2 className="text-xl font-bold text-navy-900">{category.title}</h2>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm md:text-base">
                                    <thead className="bg-gray-50 text-gray-500 font-medium">
                                        <tr>
                                            <th className="p-6 pb-3 w-1/2">Type de travaux</th>
                                            <th className="p-6 pb-3">Prix Moyen</th>
                                            <th className="p-6 pb-3 text-right">Tendance (1 an)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        {category.items.map((item, idx) => (
                                            <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                                <td className="p-6 font-medium text-navy-900">
                                                    {item.label}
                                                </td>
                                                <td className="p-6">
                                                    <span className="font-bold text-lg bg-navy-50 px-3 py-1 rounded-lg text-navy-900">
                                                        {item.price.toLocaleString()} {item.unit}
                                                    </span>
                                                </td>
                                                <td className="p-6 text-right">
                                                    <div className={`inline-flex items-center font-bold px-3 py-1 rounded-full text-sm ${item.trend < 0 ? 'bg-green-100 text-green-700' :
                                                            item.trend > 2 ? 'bg-red-100 text-red-700' :
                                                                'bg-gray-100 text-gray-700'
                                                        }`}>
                                                        {item.trend < 0 ? <TrendingDown className="w-4 h-4 mr-1" /> :
                                                            item.trend > 2 ? <TrendingUp className="w-4 h-4 mr-1" /> :
                                                                <Minus className="w-4 h-4 mr-1" />}
                                                        {item.trend > 0 ? '+' : ''}{item.trend}%
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* AI/GEO Content Block */}
            <section className="max-w-4xl mx-auto px-4 mt-24">
                <div className="bg-amber-50 rounded-3xl p-8 md:p-12 border border-amber-100">
                    <h2 className="text-3xl font-bold text-navy-900 mb-6 flex items-center">
                        <Info className="w-8 h-8 text-amber-600 mr-3" />
                        Pourquoi ces prix varient-ils ?
                    </h2>
                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                        <p>
                            En 2026, le secteur du bâtiment connaît une stabilisation des prix des matériaux, mais une hausse de la main-d'œuvre qualifiée (RGE).
                        </p>
                        <p>
                            <strong>Pour l'isolation :</strong> La baisse du prix des matières premières pétrochimiques rend le polystyrène très attractif cette année (-2% estimé).
                            À l'inverse, les isolants biosourcés (fibre de bois) restent stables mais plus chers.
                        </p>
                        <p>
                            <strong>Pour le chauffage :</strong> Le marché de la pompe à chaleur s'est normalisé après la pénurie de 2024. Les prix des équipements baissent (-5%), rendant la rentabilité encore meilleure couplée aux panneaux solaires.
                        </p>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <Link href="/simulateur/comparateur-devis" className="flex-1 bg-navy-900 text-white font-bold p-4 rounded-xl text-center hover:bg-navy-800 transition-colors shadow-lg">
                            Vérifier mon devis gratuitement
                        </Link>
                        <Link href="/simulateur/aides-etat" className="flex-1 bg-white text-navy-900 border-2 border-navy-900 font-bold p-4 rounded-xl text-center hover:bg-gray-50 transition-colors">
                            Calculer mes aides 2026
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

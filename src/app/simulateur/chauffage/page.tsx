
import { Metadata } from "next";
import HeatingCalculator from "@/components/tools/HeatingCalculator";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Flame, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
    title: "Dimensionnement Pompe à Chaleur 2026 | Calcul Puissance kW",
    description: "Calculez gratuitement la puissance idéale (kW) pour votre pompe à chaleur. Évitez le surdimensionnement et économisez sur votre installation.",
};

export default function HeatingSimulatorPage() {
    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <div className="bg-navy-900 text-white pt-32 pb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                    <Flame className="w-64 h-64 text-blue-400" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link href="/" className="inline-flex items-center text-navy-200 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Retour à l'accueil
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Quel chauffage pour <span className="text-blue-400">votre maison ?</span>
                    </h1>
                    <p className="text-xl text-navy-100 max-w-2xl leading-relaxed">
                        Ne laissez pas le hasard décider de votre confort. Calculez la puissance de chauffe exacte nécessaire à votre logement.
                    </p>

                    <div className="flex flex-wrap gap-6 mt-8">
                        <div className="flex items-center gap-2 text-navy-200 bg-navy-800/50 px-4 py-2 rounded-full border border-navy-700">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>Calcul norme RT2012/RE2020</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Calculator Section - Overlapping Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
                <HeatingCalculator />
            </div>

            {/* Explanations */}
            <section className="max-w-4xl mx-auto px-4 mt-20 space-y-16">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-navy-900 mb-6">Pourquoi le dimensionnement est crucial ?</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                            <AlertTriangle className="w-6 h-6 text-red-600" />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-red-600">Danger du Surdimensionnement</h3>
                        <p className="text-gray-600">
                            Une pompe trop puissante va multiplier les cycles "Marche/Arrêt" (courts cycles). Résultat : usure prématurée du compresseur et surconsommation électrique (+15%).
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <Flame className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="font-bold text-lg mb-2 text-blue-600">Risque du Sous-dimensionnement</h3>
                        <p className="text-gray-600">
                            Une pompe trop faible tournera en continu sans jamais atteindre la température de consigne par grand froid. Vous devrez utiliser une résistance électrique (chère) en appoint.
                        </p>
                    </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-navy-900 mb-4">Vous avez la puissance, maintenant le prix ?</h3>
                    <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                        Une pompe à chaleur de 8kW ne coûte pas le même prix qu'une 16kW. Obtenez 3 devis comparatifs pour le bon modèle.
                    </p>
                    <Link
                        href="/service/pompe-a-chaleur/paris#lead-form"
                        className="inline-block bg-navy-900 text-white font-bold py-4 px-8 rounded-xl hover:bg-navy-800 transition-colors shadow-lg"
                    >
                        Comparer les prix pour une PAC {2026}
                    </Link>
                </div>
            </section>
        </main>
    );
}

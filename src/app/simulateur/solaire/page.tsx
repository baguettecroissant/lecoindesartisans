
import { Metadata } from "next";
import SolarCalculator from "@/components/tools/SolarCalculator";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Zap, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
    title: "Simulateur Rentabilité Panneaux Solaires 2026 | Calcul Gratuit",
    description: "Calculez gratuitement la rentabilité de vos futurs panneaux solaires. Estimez vos économies sur 20 ans et votre retour sur investissement en 3 clics.",
};

export default function SolarSimulatorPage() {
    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <div className="bg-navy-900 text-white pt-32 pb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                    <Zap className="w-64 h-64 text-amber-400" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link href="/" className="inline-flex items-center text-navy-200 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Retour à l'accueil
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Estimez vos économies <span className="text-amber-400">solaires</span>
                    </h1>
                    <p className="text-xl text-navy-100 max-w-2xl leading-relaxed">
                        Découvrez combien vous pourriez économiser en passant à l'autoconsommation.
                        Notre simulateur prend en compte les tarifs de l'électricité 2026.
                    </p>

                    <div className="flex flex-wrap gap-6 mt-8">
                        <div className="flex items-center gap-2 text-navy-200 bg-navy-800/50 px-4 py-2 rounded-full border border-navy-700">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>Données mises à jour 2026</span>
                        </div>
                        <div className="flex items-center gap-2 text-navy-200 bg-navy-800/50 px-4 py-2 rounded-full border border-navy-700">
                            <TrendingUp className="w-4 h-4 text-amber-400" />
                            <span>Inflation élec. incluse</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Calculator Section - Overlapping Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
                <SolarCalculator />
            </div>

            {/* Explanations */}
            <section className="max-w-4xl mx-auto px-4 mt-20 space-y-16">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-navy-900 mb-6">Comment fonctionne ce simulateur ?</h2>
                    <p className="text-gray-600 text-lg">
                        Nous utilisons une méthode de calcul simplifiée mais robuste pour vous donner une première estimation fiable.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                            <span className="text-2xl">☀️</span>
                        </div>
                        <h3 className="font-bold text-lg mb-2">Ensoleillement Local</h3>
                        <p className="text-gray-600">
                            Nous ajustons la production selon votre département. Un panneau à Marseille produit 40% de plus qu'à Lille.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                            <span className="text-2xl">📈</span>
                        </div>
                        <h3 className="font-bold text-lg mb-2">Inflation Électricité</h3>
                        <p className="text-gray-600">
                            Nous intégrons une hausse annuelle moyenne de 5% du prix du kWh, rendant le solaire de plus en plus rentable.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                            <span className="text-2xl">💰</span>
                        </div>
                        <h3 className="font-bold text-lg mb-2">Autoconsommation</h3>
                        <p className="text-gray-600">
                            Le calcul maximise l'autoconsommation (économies sur facture) et compte la revente du surplus à EDF OA.
                        </p>
                    </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-navy-900 mb-4">Envie d'une étude précise à l'euro près ?</h3>
                    <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                        Ce simulateur est une estimation. Pour valider la faisabilité technique (ombrage, toiture) et obtenir un devis ferme, faites appel à un expert.
                    </p>
                    <Link
                        href="/service/panneaux-solaires/paris#lead-form"
                        className="inline-block bg-navy-900 text-white font-bold py-4 px-8 rounded-xl hover:bg-navy-800 transition-colors shadow-lg"
                    >
                        Demander mon étude gratuite avec un artisan RGE
                    </Link>
                </div>
            </section>
        </main>
    );
}

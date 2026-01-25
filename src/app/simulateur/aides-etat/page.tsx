
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Wallet, Info } from "lucide-react";
import MaPrimeRenovCalculator from "@/components/tools/MaPrimeRenovCalculator";

export const metadata: Metadata = {
    title: "Simulateur MaPrimeRénov' 2026 | Test d'Éligibilité Gratuit",
    description: "Calculez vos aides MaPrimeRénov' en 30 secondes. Découvrez votre profil couleur (Bleu, Jaune, Violet, Rose) et le montant de vos subventions.",
    keywords: ["maprimerenov", "simulateur aides etat", "maprimerenov bleu", "subvention renovation"]
};

export default function MaPrimeRenovPage() {
    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <div className="bg-navy-900 text-white pt-32 pb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                    <Wallet className="w-64 h-64 text-amber-400" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link href="/simulateur" className="inline-flex items-center text-navy-200 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Retour aux outils
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Simulateur <span className="text-amber-400">MaPrimeRénov'</span>
                    </h1>
                    <p className="text-xl text-navy-100 max-w-2xl leading-relaxed">
                        Le dispositif d'aide évolue en 2026. Vérifiez votre éligibilité et calculez le montant de vos primes pour vos travaux de rénovation énergétique.
                    </p>

                    <div className="flex flex-wrap gap-6 mt-8">
                        <div className="flex items-center gap-2 text-navy-200 bg-navy-800/50 px-4 py-2 rounded-full border border-navy-700">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>Barèmes officiels 2026</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Application Section - Overlapping Header */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Calculator Column */}
                    <div className="lg:col-span-3">
                        <MaPrimeRenovCalculator />
                    </div>

                    {/* Info Sidebar */}
                    <div className="lg:col-span-2 space-y-8 pt-16 lg:pt-0">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-navy-900 mb-4 flex items-center">
                                <Info className="w-5 h-5 text-amber-500 mr-2" />
                                Comment ça marche ?
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold flex-shrink-0">1</div>
                                    <p className="text-gray-600">Renseignez votre <strong>Revenu Fiscal de Référence (RFR)</strong> indiqué sur votre avis d'imposition.</p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold flex-shrink-0">2</div>
                                    <p className="text-gray-600">Le simulateur détermine instantanément votre <strong>profil couleur</strong> (Bleu, Jaune, Violet, Rose).</p>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold flex-shrink-0">3</div>
                                    <p className="text-gray-600">Découvrez les montants maximum d'aides pour vos travaux (Isolation, Chauffage, Global).</p>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                            <h3 className="font-bold text-navy-900 mb-2">Bon à savoir</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                MaPrimeRénov' est cumulable avec les <strong>Primes CEE</strong> (Certificats d'Économies d'Énergie). Le montant total peut couvrir jusqu'à 90% de vos travaux selon votre profil !
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SEO Content */}
            <section className="max-w-4xl mx-auto px-4 mt-24 space-y-12">
                <div>
                    <h2 className="text-3xl font-bold text-navy-900 mb-6">Les profils MaPrimeRénov' en détail</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-xl border-l-4 border-blue-500 shadow-sm">
                            <h3 className="text-xl font-bold text-blue-600 mb-2">Profil Bleu</h3>
                            <p className="text-gray-600">Foyers aux revenus très modestes. Accès aux aides maximales, jusqu'à 90% de prise en charge sur la rénovation globale.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border-l-4 border-yellow-500 shadow-sm">
                            <h3 className="text-xl font-bold text-yellow-600 mb-2">Profil Jaune</h3>
                            <p className="text-gray-600">Foyers aux revenus modestes. Aides importantes, notamment pour le changement de chauffage (Pompe à chaleur).</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border-l-4 border-purple-500 shadow-sm">
                            <h3 className="text-xl font-bold text-purple-600 mb-2">Profil Violet</h3>
                            <p className="text-gray-600">Revenus intermédiaires. Aides ciblées sur les rénovations globales ("Parcours Accompagné").</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl border-l-4 border-pink-500 shadow-sm">
                            <h3 className="text-xl font-bold text-pink-600 mb-2">Profil Rose</h3>
                            <p className="text-gray-600">Revenus supérieurs. Aides limitées aux rénovations d'ampleur en passoire thermique.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

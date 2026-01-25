
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Layers, ShieldCheck, Banknote, Home } from "lucide-react";
import InsulationCalculator from "@/components/tools/InsulationCalculator";

export const metadata: Metadata = {
    title: "Prix Isolation au m² 2026 | Simulateur Coût Travaux",
    description: "Estimez le prix de votre isolation (Extérieure, Intérieure, Combles). Calculez votre budget travaux et vos économies d'énergie potentielles.",
    keywords: ["prix isolation m2", "cout isolation exterieure", "devis isolation", "simulation prix isolation"]
};

export default function InsulationPage() {
    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <div className="bg-navy-900 text-white pt-32 pb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                    <Layers className="w-64 h-64 text-green-400" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link href="/simulateur" className="inline-flex items-center text-navy-200 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Retour aux outils
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Quel prix pour <span className="text-green-400">votre isolation ?</span>
                    </h1>
                    <p className="text-xl text-navy-100 max-w-2xl leading-relaxed">
                        L'énergie la moins chère est celle qu'on ne consomme pas. Estimez le coût de vos travaux d'isolation pour améliorer votre DPE.
                    </p>
                </div>
            </div>

            {/* Application Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Calculator Column */}
                    <div className="lg:col-span-3">
                        <InsulationCalculator />
                    </div>

                    {/* Info Sidebar */}
                    <div className="lg:col-span-2 space-y-8 pt-16 lg:pt-0">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-navy-900 mb-4">Prix moyens constatés 2026</h3>
                            <div className="space-y-4">
                                <div className="border-b border-gray-100 pb-3">
                                    <div className="flexjustify-between items-center mb-1">
                                        <span className="font-bold text-navy-900">Isolation Extérieure (ITE)</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Polystyrène / Laine de roche</span>
                                        <span className="font-bold text-amber-600">140€ - 210€ / m²</span>
                                    </div>
                                </div>
                                <div className="border-b border-gray-100 pb-3">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-bold text-navy-900">Combles Perdus</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Soufflage</span>
                                        <span className="font-bold text-amber-600">25€ - 60€ / m²</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="font-bold text-navy-900">Isolation Intérieure (ITI)</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Doublage collé / rails</span>
                                        <span className="font-bold text-amber-600">50€ - 90€ / m²</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                            <h3 className="font-bold text-navy-900 mb-2 flex items-center">
                                <Banknote className="w-5 h-5 mr-2 text-amber-600" />
                                N'oubliez pas les aides !
                            </h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Ces prix sont <strong>avant déduction des aides</strong>. Selon vos revenus, MaPrimeRénov' peut financer jusqu'à 75€/m² pour l'isolation extérieure.
                            </p>
                            <Link href="/simulateur/aides-etat" className="text-amber-700 font-bold text-sm hover:underline flex items-center">
                                Calculer mes aides <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <section className="max-w-4xl mx-auto px-4 mt-24 space-y-12">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-navy-900 mb-6">Pourquoi isoler sa maison ?</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Banknote className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Jusqu'à 30% d'économies</h3>
                        <p className="text-gray-600 text-sm">Le toit et les murs représentent les principales sources de déperdition thermique.</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <ShieldCheck className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Confort Été / Hiver</h3>
                        <p className="text-gray-600 text-sm">Gardez la chaleur en hiver et la fraîcheur en été. Fini les courants d'air froids.</p>
                    </div>
                    <div className="text-center">
                        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Home className="w-8 h-8 text-amber-600" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">Valeur Immobilière</h3>
                        <p className="text-gray-600 text-sm">Une maison bien classée au DPE se vend plus cher et plus vite (Valeur verte).</p>
                    </div>
                </div>
            </section>
        </main>
    );
}

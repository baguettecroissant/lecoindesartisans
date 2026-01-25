
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle, AlertTriangle } from "lucide-react";
import QuoteComparator from "@/components/tools/QuoteComparator";

export const metadata: Metadata = {
    title: "Vérifier mon Devis Travaux | Comparateur de Prix Gratuit",
    description: "Votre devis est-il trop cher ? Analysez les prix de vos travaux (Peinture, Plomberie, Électricité) par rapport à la moyenne du marché.",
    keywords: ["verifier devis", "prix travaux m2", "comparateur artisan", "arnaque devis"]
};

export default function QuoteComparatorPage() {
    return (
        <main className="min-h-screen bg-gray-50 pb-20">
            {/* Header */}
            <div className="bg-navy-900 text-white pt-32 pb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                    <FileText className="w-64 h-64 text-purple-400" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link href="/simulateur" className="inline-flex items-center text-navy-200 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Retour aux outils
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Votre devis est-il <span className="text-purple-400">juste ?</span>
                    </h1>
                    <p className="text-xl text-navy-100 max-w-2xl leading-relaxed">
                        Évitez les arnaques et les surfacturations. Comparez instantanément les tarifs proposés avec notre base de données nationale.
                    </p>
                </div>
            </div>

            {/* Application Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Calculator Column */}
                    <div className="lg:col-span-3">
                        <QuoteComparator />
                    </div>

                    {/* Info Sidebar */}
                    <div className="lg:col-span-2 space-y-8 pt-16 lg:pt-0">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-navy-900 mb-4">Les pièges à éviter</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                                    <p className="text-gray-600 text-sm"><strong>Devis trop bas :</strong> Souvent signe de matériaux bas de gamme ou de travail au noir (sans assurance).</p>
                                </li>
                                <li className="flex gap-3">
                                    <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                                    <p className="text-gray-600 text-sm"><strong>Acomptes élevés :</strong> Ne versez jamais plus de 30% à la commande.</p>
                                </li>
                                <li className="flex gap-3">
                                    <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                                    <p className="text-gray-600 text-sm"><strong>Flou artistique :</strong> Le devis doit détailler prix unitaires, quantités et marques des matériaux.</p>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
                            <h3 className="font-bold text-navy-900 mb-2">Besoin d'un avis d'expert ?</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Pour les gros chantiers (&gt; 10 000€), nous pouvons analyser votre devis manuellement.
                            </p>
                            <Link href="/contact" className="text-purple-700 font-bold text-sm hover:underline">
                                Contacter notre équipe support
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

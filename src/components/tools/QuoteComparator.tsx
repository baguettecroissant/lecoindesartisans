"use client";

import { useState } from "react";
import { AlertTriangle, CheckCircle, FileText, Search, ThumbsUp, DollarSign } from "lucide-react";
import Link from "next/link";

// Simplified database for demo - In production this would be an API
const PRICE_DATABASE: Record<string, { min: number; max: number; unit: string }> = {
    "peinture": { min: 25, max: 45, unit: "€ / m²" },
    "carrelage": { min: 40, max: 70, unit: "€ / m²" },
    "plomberie": { min: 50, max: 80, unit: "€ / h" },
    "electricite": { min: 50, max: 90, unit: "€ / h" },
    "toiture": { min: 60, max: 120, unit: "€ / m²" }
};

export default function QuoteComparator() {
    const [step, setStep] = useState(1);
    const [trade, setTrade] = useState("peinture");
    const [price, setPrice] = useState("");

    const [analysis, setAnalysis] = useState<{ status: 'GOOD' | 'HIGH' | 'LOW'; diff: number; avg: number } | null>(null);

    const analyze = () => {
        const p = parseFloat(price);
        if (isNaN(p)) return;

        const ref = PRICE_DATABASE[trade];
        const avg = (ref.min + ref.max) / 2;
        const diffPercent = ((p - avg) / avg) * 100;

        let status: 'GOOD' | 'HIGH' | 'LOW' = 'GOOD';
        if (diffPercent > 30) status = 'HIGH';
        if (diffPercent < -30) status = 'LOW';

        setAnalysis({ status, diff: Math.round(diffPercent), avg });
        setStep(2);
    };

    const reset = () => {
        setStep(1);
        setAnalysis(null);
        setPrice("");
    };

    return (
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            {/* Header */}
            <div className="bg-navy-900 p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-2">Analyser mon devis</h2>
                <p className="text-navy-200">Vérifiez si le prix proposé est dans la moyenne du marché</p>
            </div>

            <div className="p-8">
                {step === 1 ? (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Trade Selector */}
                        <div>
                            <label className="block text-navy-900 font-bold mb-2">Type de travaux</label>
                            <select
                                value={trade}
                                onChange={(e) => setTrade(e.target.value)}
                                className="w-full p-4 rounded-xl border-2 border-gray-200 bg-white focus:border-amber-500 focus:outline-none font-medium"
                            >
                                <option value="peinture">Peinture intérieure</option>
                                <option value="carrelage">Pose de carrelage</option>
                                <option value="plomberie">Plomberie (Taux horaire)</option>
                                <option value="electricite">Électricité (Taux horaire)</option>
                                <option value="toiture">Rénovation Toiture</option>
                            </select>
                        </div>

                        {/* Price Input */}
                        <div>
                            <label className="block text-navy-900 font-bold mb-2">
                                Prix unitaire annoncé ({PRICE_DATABASE[trade].unit})
                            </label>
                            <div className="relative">
                                <input
                                    type="number"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    placeholder="Ex: 55"
                                    className="w-full p-4 pl-12 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:outline-none text-lg font-bold text-navy-900"
                                />
                                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            </div>
                        </div>

                        <button
                            onClick={analyze}
                            disabled={!price}
                            className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold p-5 rounded-xl shadow-lg transition-all flex items-center justify-center text-lg"
                        >
                            <Search className="w-6 h-6 mr-2" />
                            Vérifier ce prix
                        </button>
                    </div>
                ) : (
                    <div className="animate-in zoom-in duration-500 text-center space-y-8">
                        {analysis && (
                            <>
                                <div>
                                    {analysis.status === 'GOOD' && (
                                        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
                                            <ThumbsUp className="w-10 h-10 text-green-600" />
                                        </div>
                                    )}
                                    {analysis.status === 'HIGH' && (
                                        <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-4">
                                            <AlertTriangle className="w-10 h-10 text-red-600" />
                                        </div>
                                    )}
                                    {analysis.status === 'LOW' && (
                                        <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 rounded-full mb-4">
                                            <AlertTriangle className="w-10 h-10 text-yellow-600" />
                                        </div>
                                    )}

                                    <h3 className="text-2xl font-bold text-navy-900 mb-2">
                                        {analysis.status === 'GOOD' && "Prix Cohérent"}
                                        {analysis.status === 'HIGH' && "Prix Élevé"}
                                        {analysis.status === 'LOW' && "Prix Bas (Attention)"}
                                    </h3>

                                    <p className="text-gray-600">
                                        Ce tarif est {analysis.diff > 0 ? `${analysis.diff}% au-dessus` : `${Math.abs(analysis.diff)}% en-dessous`} de la moyenne constatée.
                                    </p>
                                </div>

                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-gray-500">Moyenne du marché</span>
                                        <span className="font-bold text-navy-900">{analysis.avg} {PRICE_DATABASE[trade].unit}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-500">Votre devis</span>
                                        <span className={`font-bold ${analysis.status === 'HIGH' ? 'text-red-600' : 'text-green-600'}`}>
                                            {price} {PRICE_DATABASE[trade].unit}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-sm text-gray-500 italic">
                                        Le prix ne fait pas tout. Vérifiez les assurances et les avis de l'artisan.
                                    </p>
                                    <Link
                                        href="/#lead-form"
                                        className="block w-full text-center bg-navy-900 hover:bg-navy-800 text-white font-bold p-4 rounded-xl shadow-lg transition-colors"
                                    >
                                        Comparer avec 3 autres artisans
                                    </Link>
                                    <button
                                        onClick={reset}
                                        className="block w-full text-center text-gray-500 hover:text-navy-900 font-medium p-2"
                                    >
                                        Nouvelle analyse
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

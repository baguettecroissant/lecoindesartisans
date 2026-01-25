"use client";

import { useState } from "react";
import { ArrowRight, Calculator, Home, Layers, Ruler, PiggyBank, Leaf } from "lucide-react";
import Link from "next/link";

type InsulationType = "ITE" | "ITI" | "COMBLES" | "TOITURE";

const INSULATION_TYPES = {
    ITE: { name: "Murs Extérieurs (ITE)", priceRange: [140, 210], savings: 25, badge: "Le plus efficace" },
    ITI: { name: "Murs Intérieurs (ITI)", priceRange: [50, 90], savings: 20, badge: "Économique" },
    COMBLES: { name: "Combles Perdus", priceRange: [25, 60], savings: 30, badge: "Prioritaire" },
    TOITURE: { name: "Toiture (Sarking ou Rampants)", priceRange: [180, 280], savings: 30, badge: "Rénovation lourde" },
};

export default function InsulationCalculator() {
    const [step, setStep] = useState(1);
    const [type, setType] = useState<InsulationType>("ITE");
    const [surface, setSurface] = useState(100);

    const [result, setResult] = useState<{ min: number; max: number; savings: number } | null>(null);

    const calculate = () => {
        const data = INSULATION_TYPES[type];
        const min = data.priceRange[0] * surface;
        const max = data.priceRange[1] * surface;
        // Simple ROI logic
        const energyBill = 2000; // yearly avg
        const yearlySavings = energyBill * (data.savings / 100);

        setResult({ min, max, savings: yearlySavings });
        setStep(2);
    };

    const reset = () => {
        setStep(1);
        setResult(null);
    };

    return (
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            {/* Header */}
            <div className="bg-navy-900 p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-2">Estimer le prix de mon isolation</h2>
                <p className="text-navy-200">Calcul du coût des travaux et des économies</p>
            </div>

            <div className="p-8">
                {step === 1 ? (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Type Selection */}
                        <div>
                            <label className="block text-navy-900 font-bold mb-4 flex items-center">
                                <Layers className="w-5 h-5 mr-2 text-amber-500" />
                                Quel type d'isolation ?
                            </label>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {(Object.keys(INSULATION_TYPES) as InsulationType[]).map((key) => (
                                    <button
                                        key={key}
                                        onClick={() => setType(key)}
                                        className={`p-4 rounded-xl border-2 text-left transition-all ${type === key ? "border-amber-500 bg-amber-50" : "border-gray-200 hover:border-amber-200"}`}
                                    >
                                        <div className="flex justify-between items-start mb-1">
                                            <span className={`font-bold ${type === key ? "text-navy-900" : "text-gray-600"}`}>
                                                {INSULATION_TYPES[key].name}
                                            </span>
                                            {INSULATION_TYPES[key].badge && (
                                                <span className="text-[10px] bg-white border border-gray-200 px-2 py-0.5 rounded-full text-gray-500">
                                                    {INSULATION_TYPES[key].badge}
                                                </span>
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Surface Slider */}
                        <div>
                            <label className="block text-navy-900 font-bold mb-4 flex items-center">
                                <Ruler className="w-5 h-5 mr-2 text-amber-500" />
                                Surface à isoler (m²)
                            </label>
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <input
                                    type="range"
                                    min="10"
                                    max="300"
                                    step="5"
                                    value={surface}
                                    onChange={(e) => setSurface(parseInt(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                                />
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="text-gray-400 font-medium">10 m²</span>
                                    <span className="text-3xl font-bold text-navy-900">{surface} m²</span>
                                    <span className="text-gray-400 font-medium">300 m²</span>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={calculate}
                            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold p-5 rounded-xl shadow-lg hover:shadow-amber-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center text-lg"
                        >
                            <Calculator className="w-6 h-6 mr-2" />
                            Calculer le devis estimatif
                        </button>
                    </div>
                ) : (
                    <div className="animate-in zoom-in duration-500 space-y-8">
                        {result && (
                            <>
                                <div className="text-center">
                                    <p className="text-gray-500 font-medium mb-2 uppercase tracking-wide">Budget estimatif (Hors Aides)</p>
                                    <div className="text-4xl md:text-5xl font-extrabold text-navy-900 mb-2">
                                        {result.min.toLocaleString()}€ - {result.max.toLocaleString()}€
                                    </div>
                                    <p className="text-sm text-gray-400">Pour {surface}m² en {INSULATION_TYPES[type].name}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-green-50 p-4 rounded-xl border border-green-100 text-center">
                                        <Leaf className="w-8 h-8 text-green-500 mx-auto mb-2" />
                                        <p className="text-green-800 font-bold text-lg">-{INSULATION_TYPES[type].savings}%</p>
                                        <p className="text-xs text-green-600">Sur votre facture chauffage</p>
                                    </div>
                                    <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 text-center">
                                        <PiggyBank className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                                        <p className="text-amber-800 font-bold text-lg">~{Math.round(result.savings)}€ / an</p>
                                        <p className="text-xs text-amber-600">Économies estimées</p>
                                    </div>
                                </div>

                                <div className="bg-navy-50 p-6 rounded-xl border border-navy-100">
                                    <h4 className="font-bold text-navy-900 mb-3">Ce prix inclut généralement :</h4>
                                    <ul className="space-y-2 text-sm text-gray-600">
                                        <li className="flex gap-2">
                                            <div className="min-w-[5px] h-[5px] rounded-full bg-navy-400 mt-2"></div>
                                            Fourniture de l'isolant (Résistance R ≥ seuil RGE)
                                        </li>
                                        <li className="flex gap-2">
                                            <div className="min-w-[5px] h-[5px] rounded-full bg-navy-400 mt-2"></div>
                                            Pose par un artisan certifié RGE
                                        </li>
                                        <li className="flex gap-2">
                                            <div className="min-w-[5px] h-[5px] rounded-full bg-navy-400 mt-2"></div>
                                            Finitions (Enduit, Peinture ou Plaques selon cas)
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex flex-col gap-4 pt-4">
                                    <Link
                                        href="/#lead-form"
                                        className="block w-full text-center bg-navy-900 hover:bg-navy-800 text-white font-bold p-4 rounded-xl shadow-lg transition-colors"
                                    >
                                        Demander 3 devis réels (Gratuit)
                                    </Link>
                                    <button
                                        onClick={reset}
                                        className="block w-full text-center text-gray-500 hover:text-navy-900 font-medium p-2"
                                    >
                                        Nouveau calcul
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

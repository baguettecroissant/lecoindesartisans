"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Info, Euro, Users, MapPin, RefreshCw } from "lucide-react";
import Link from "next/link";

type Region = "IDF" | "HORS_IDF";
type ColorProfile = "BLEU" | "JAUNE" | "VIOLET" | "ROSE";

const PROFILES = {
    BLEU: { name: "MaPrimeRénov' Bleu", description: "Revenus modestes", color: "text-blue-600", bg: "bg-blue-100", border: "border-blue-200" },
    JAUNE: { name: "MaPrimeRénov' Jaune", description: "Revenus modestes", color: "text-yellow-600", bg: "bg-yellow-100", border: "border-yellow-200" },
    VIOLET: { name: "MaPrimeRénov' Violet", description: "Revenus intermédiaires", color: "text-purple-600", bg: "bg-purple-100", border: "border-purple-200" },
    ROSE: { name: "MaPrimeRénov' Rose", description: "Revenus supérieurs", color: "text-pink-600", bg: "bg-pink-100", border: "border-pink-200" },
};

// Simplified thresholds 2024/2026 (Example data - approximates)
const THRESHOLDS = {
    IDF: {
        1: [23541, 28657, 40018], // Bleu <= T1, Jaune <= T2, Violet <= T3, Rose > T3
        2: [34551, 42058, 58827],
        3: [41533, 50513, 70382],
        4: [48534, 58981, 82839],
        5: [55543, 67473, 94844],
    },
    HORS_IDF: {
        1: [17009, 21805, 30549],
        2: [24875, 31889, 44907],
        3: [29917, 38349, 54071],
        4: [34948, 44802, 63235],
        5: [40002, 51281, 72400],
    }
};

const ADDITIONAL_PERSON = {
    IDF: [7002, 8474, 11993],
    HORS_IDF: [5045, 6462, 9165]
};

export default function MaPrimeRenovCalculator() {
    const [step, setStep] = useState(1);
    const [region, setRegion] = useState<Region>("HORS_IDF");
    const [householdSize, setHouseholdSize] = useState(2);
    const [revenue, setRevenue] = useState(30000);
    const [result, setResult] = useState<ColorProfile | null>(null);

    const calculate = () => {
        let size = householdSize;
        if (size > 5) size = 5;

        let thresholds = THRESHOLDS[region][size as 1 | 2 | 3 | 4 | 5];
        let add = ADDITIONAL_PERSON[region];

        // Adjust for extra people if > 5
        if (householdSize > 5) {
            const extra = householdSize - 5;
            thresholds = thresholds.map((t, i) => t + (extra * add[i]));
        }

        if (revenue <= thresholds[0]) setResult("BLEU");
        else if (revenue <= thresholds[1]) setResult("JAUNE");
        else if (revenue <= thresholds[2]) setResult("VIOLET");
        else setResult("ROSE");

        setStep(2);
    };

    const reset = () => {
        setStep(1);
        setResult(null);
    };

    return (
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            {/* Header Simulator */}
            <div className="bg-navy-900 p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-2">Simulateur MaPrimeRénov' 2026</h2>
                <p className="text-navy-200">Testez votre éligibilité en 30 secondes</p>
            </div>

            <div className="p-8">
                {step === 1 ? (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Region */}
                        <div>
                            <label className="block text-navy-900 font-bold mb-4 flex items-center">
                                <MapPin className="w-5 h-5 mr-2 text-amber-500" />
                                Votre Région
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => setRegion("IDF")}
                                    className={`p-4 rounded-xl border-2 transition-all font-medium ${region === "IDF" ? "border-amber-500 bg-amber-50 text-amber-800" : "border-gray-200 hover:border-amber-200 text-gray-600"}`}
                                >
                                    Île-de-France
                                </button>
                                <button
                                    onClick={() => setRegion("HORS_IDF")}
                                    className={`p-4 rounded-xl border-2 transition-all font-medium ${region === "HORS_IDF" ? "border-amber-500 bg-amber-50 text-amber-800" : "border-gray-200 hover:border-amber-200 text-gray-600"}`}
                                >
                                    Autre Région
                                </button>
                            </div>
                        </div>

                        {/* Household */}
                        <div>
                            <label className="block text-navy-900 font-bold mb-4 flex items-center">
                                <Users className="w-5 h-5 mr-2 text-amber-500" />
                                Personnes dans le foyer
                            </label>
                            <div className="flex items-center gap-4">
                                <input
                                    type="range"
                                    min="1"
                                    max="10"
                                    step="1"
                                    value={householdSize}
                                    onChange={(e) => setHouseholdSize(parseInt(e.target.value))}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                                />
                                <span className="text-2xl font-bold text-navy-900 w-12 text-center">{householdSize}</span>
                            </div>
                        </div>

                        {/* Revenue */}
                        <div>
                            <label className="block text-navy-900 font-bold mb-4 flex items-center">
                                <Euro className="w-5 h-5 mr-2 text-amber-500" />
                                Revenu Fiscal de Référence (RFR)
                            </label>
                            <div className="relative">
                                <input
                                    type="number"
                                    value={revenue}
                                    onChange={(e) => setRevenue(parseInt(e.target.value))}
                                    className="w-full p-4 pl-12 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:outline-none text-lg font-bold text-navy-900 transition-colors"
                                />
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">€</span>
                            </div>
                            <p className="text-xs text-gray-400 mt-2 flex items-center">
                                <Info className="w-3 h-3 mr-1" />
                                Indiqué sur votre dernier avis d'imposition
                            </p>
                        </div>

                        <button
                            onClick={calculate}
                            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold p-5 rounded-xl shadow-lg hover:shadow-amber-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center text-lg"
                        >
                            <RefreshCw className="w-6 h-6 mr-2" />
                            Calculer mes aides
                        </button>
                    </div>
                ) : (
                    <div className="animate-in zoom-in duration-500">
                        {result && (
                            <div className={`text-center p-8 rounded-2xl border-2 mb-8 ${PROFILES[result].bg} ${PROFILES[result].border}`}>
                                <h3 className="text-gray-600 font-medium mb-2 uppercase tracking-wide">Votre profil est</h3>
                                <div className={`text-4xl md:text-5xl font-extrabold mb-4 ${PROFILES[result].color}`}>
                                    {PROFILES[result].name}
                                </div>
                                <p className="text-lg text-gray-700 max-w-md mx-auto">
                                    Vous êtes éligible aux aides pour les foyers aux <strong>{PROFILES[result].description.toLowerCase()}</strong>.
                                </p>
                            </div>
                        )}

                        <div className="space-y-6">
                            <div className="bg-navy-50 p-6 rounded-xl">
                                <h4 className="font-bold text-navy-900 mb-4 flex items-center">
                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                    Exemples d'aides pour vous :
                                </h4>
                                <ul className="space-y-3">
                                    {result === "BLEU" && (
                                        <>
                                            <li className="flex justify-between text-sm md:text-base border-b border-gray-200 pb-2">
                                                <span>Pompe à Chaleur Air/Eau</span>
                                                <span className="font-bold text-navy-900">Jusqu'à 5 000€</span>
                                            </li>
                                            <li className="flex justify-between text-sm md:text-base border-b border-gray-200 pb-2">
                                                <span>Isolation des murs (ITE)</span>
                                                <span className="font-bold text-navy-900">75€ / m²</span>
                                            </li>
                                            <li className="flex justify-between text-sm md:text-base">
                                                <span>Rénovation d'ampleur</span>
                                                <span className="font-bold text-navy-900">Jusqu'à 90% des travaux</span>
                                            </li>
                                        </>
                                    )}
                                    {result === "JAUNE" && (
                                        <>
                                            <li className="flex justify-between text-sm md:text-base border-b border-gray-200 pb-2">
                                                <span>Pompe à Chaleur Air/Eau</span>
                                                <span className="font-bold text-navy-900">Jusqu'à 4 000€</span>
                                            </li>
                                            <li className="flex justify-between text-sm md:text-base border-b border-gray-200 pb-2">
                                                <span>Isolation des murs (ITE)</span>
                                                <span className="font-bold text-navy-900">60€ / m²</span>
                                            </li>
                                            <li className="flex justify-between text-sm md:text-base">
                                                <span>Rénovation d'ampleur</span>
                                                <span className="font-bold text-navy-900">Jusqu'à 90% des travaux</span>
                                            </li>
                                        </>
                                    )}
                                    {result === "VIOLET" && (
                                        <>
                                            <li className="flex justify-between text-sm md:text-base border-b border-gray-200 pb-2">
                                                <span>Pompe à Chaleur Air/Eau</span>
                                                <span className="font-bold text-navy-900">Jusqu'à 3 000€</span>
                                            </li>
                                            <li className="flex justify-between text-sm md:text-base border-b border-gray-200 pb-2">
                                                <span>Isolation des murs (ITE)</span>
                                                <span className="font-bold text-navy-900">40€ / m²</span>
                                            </li>
                                            <li className="flex justify-between text-sm md:text-base">
                                                <span>Rénovation d'ampleur</span>
                                                <span className="font-bold text-navy-900">Jusqu'à 60% des travaux</span>
                                            </li>
                                        </>
                                    )}
                                    {result === "ROSE" && (
                                        <>
                                            <li className="flex justify-between text-sm md:text-base border-b border-gray-200 pb-2">
                                                <span>Rénovation d'ampleur</span>
                                                <span className="font-bold text-navy-900">Jusqu'à 35% des travaux</span>
                                            </li>
                                            <li className="flex justify-between text-sm md:text-base border-b border-gray-200 pb-2">
                                                <span>Isolation des murs (ITE)</span>
                                                <span className="font-bold text-navy-900">Via prime CEE uniquement</span>
                                            </li>
                                        </>
                                    )}
                                </ul>
                            </div>

                            <p className="text-xs text-gray-500 text-center italic">
                                *Montants indicatifs selon barèmes en vigueur. Sous réserve d'éligibilité technique.
                            </p>

                            <div className="flex flex-col gap-4">
                                <Link
                                    href="/#lead-form"
                                    className="block w-full text-center bg-navy-900 hover:bg-navy-800 text-white font-bold p-4 rounded-xl shadow-lg transition-colors"
                                >
                                    Valider mon dossier avec un expert
                                </Link>
                                <button
                                    onClick={reset}
                                    className="block w-full text-center text-gray-500 hover:text-navy-900 font-medium p-2"
                                >
                                    Refaire une simulation
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

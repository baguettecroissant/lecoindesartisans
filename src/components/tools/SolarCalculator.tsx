"use client";

import { useState, useEffect } from "react";
import { Calculator, Sun, Euro, Leaf, ArrowRight, MapPin, CheckCircle } from "lucide-react";

// Simplified sunlight factor per region/dept (approximate)
const SUNLIGHT_FACTORS: Record<string, number> = {
    "nord": 0.9,
    "ouest": 1.0,
    "est": 1.0,
    "paris": 0.95,
    "centre": 1.1,
    "sud-ouest": 1.2,
    "sud-est": 1.3,
    "corse": 1.4
};

// Departments mapped to regions
const DEPARTMENTS = [
    { code: "01", name: "Ain", region: "est" },
    { code: "06", name: "Alpes-Maritimes", region: "sud-est" },
    { code: "13", name: "Bouches-du-Rhône", region: "sud-est" },
    { code: "31", name: "Haute-Garonne", region: "sud-ouest" },
    { code: "33", name: "Gironde", region: "sud-ouest" },
    { code: "44", name: "Loire-Atlantique", region: "ouest" },
    { code: "59", name: "Nord", region: "nord" },
    { code: "67", name: "Bas-Rhin", region: "est" },
    { code: "69", name: "Rhône", region: "centre" },
    { code: "75", name: "Paris", region: "paris" },
    // Add generic option
    { code: "other-nord", name: "Autre (Nord de la France)", region: "nord" },
    { code: "other-sud", name: "Autre (Sud de la France)", region: "sud-est" },
];

export default function SolarCalculator() {
    // Inputs
    const [bill, setBill] = useState<number>(150);
    const [surface, setSurface] = useState<number>(30);
    const [dept, setDept] = useState<string>("other-sud");

    // Results
    const [results, setResults] = useState<{
        installedPower: number;
        production: number;
        annualSavings: number;
        totalSavings20Years: number;
        roiYears: number;
        co2Saved: number;
    } | null>(null);

    useEffect(() => {
        calculate();
    }, [bill, surface, dept]);

    const calculate = () => {
        // Constants (2026 estimates)
        const ELECTRICITY_PRICE = 0.28; // €/kWh
        const PANEL_YIELD = 0.21; // kWc per m² (approx 400W panel for 1.9m²) -> ~210W/m²
        const PRICE_PER_KWC = 2200; // €/kWc installed (average)
        const ANNUAL_INCREASE = 0.05; // 5% electricity price increase per year

        // 1. Installed Power (kWc)
        // Max power limited by surface. 1 kWc takes approx 5m².
        const installedPower = calculatePower(surface);

        // 2. Solar Production (kWh/year)
        const region = DEPARTMENTS.find(d => d.code === dept)?.region || "centre";
        const factor = SUNLIGHT_FACTORS[region];
        const production = installedPower * 1000 * factor; // 1 kWc produces ~1000-1400 kWh

        // 3. Annual Savings (Year 1)
        // Assume 50% self-consumption, 50% resale (simplified for tool)
        // Or simpler: Value of production avoided from grid.
        // Let's take a simplified approach: You save what you produce (up to your consumption)
        // Annual Consumption estimate
        const annualConsumption = (bill * 12) / ELECTRICITY_PRICE;

        // Self consumed (capped at consumption) - simplified optimistic view for lead gen
        const selfConsumed = Math.min(production, annualConsumption);
        // Surplus sold (at 0.13)
        const surplus = Math.max(0, production - annualConsumption);

        const initialAnnualSavings = (selfConsumed * ELECTRICITY_PRICE) + (surplus * 0.13);

        // 4. Cost of installation
        let cost = installedPower * PRICE_PER_KWC;
        // Apply "Prime à l'autoconsommation" (approx)
        if (installedPower <= 3) cost -= (installedPower * 350);
        else if (installedPower <= 9) cost -= (installedPower * 250);

        // 5. Total Savings 20 Years (with inflation)
        let totalSavings = 0;
        let currentSavings = initialAnnualSavings;
        for (let i = 0; i < 20; i++) {
            totalSavings += currentSavings;
            currentSavings *= (1 + ANNUAL_INCREASE);
        }

        // 6. ROI
        // Simple ROI: Cost / Average Annual Savings
        // Better: Find year where cumulated savings > cost
        let cumulated = 0;
        let roi = 0;
        let price = ELECTRICITY_PRICE;

        for (let year = 1; year <= 20; year++) {
            const savingsThisYear = (selfConsumed * price) + (surplus * 0.13);
            cumulated += savingsThisYear;
            price *= (1 + ANNUAL_INCREASE);
            if (cumulated >= cost && roi === 0) {
                roi = year + (cost - (cumulated - savingsThisYear)) / savingsThisYear;
            }
        }

        setResults({
            installedPower: Math.round(installedPower * 10) / 10,
            production: Math.round(production),
            annualSavings: Math.round(initialAnnualSavings),
            totalSavings20Years: Math.round(totalSavings),
            roiYears: Math.round(roi * 10) / 10,
            co2Saved: Math.round(production * 0.05 * 20) // 50g/kWh * 20 years approx
        });
    };

    // Helper to snap surface to realistic kWc steps (3, 6, 9)
    const calculatePower = (surf: number) => {
        if (surf < 20) return 3;
        if (surf < 40) return 6;
        return 9;
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 max-w-4xl mx-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-400 to-amber-500 p-6 text-white text-center">
                <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
                    <Sun className="w-8 h-8 text-yellow-100" />
                    Calculateur de Rentabilité Solaire
                </h2>
                <p className="text-amber-100 mt-2">Simulez vos économies en 3 clics (Mise à jour 2026)</p>
            </div>

            <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Inputs */}
                <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-navy-900 border-b pb-2">Votre Situation</h3>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Facture d'électricité mensuelle
                        </label>
                        <div className="relative">
                            <input
                                type="range"
                                min="50"
                                max="500"
                                step="10"
                                value={bill}
                                onChange={(e) => setBill(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                            />
                            <div className="mt-2 flex justify-between items-center">
                                <span className="text-xs text-gray-500">50€</span>
                                <span className="text-2xl font-bold text-amber-600">{bill}€<span className="text-sm font-normal text-gray-500">/mois</span></span>
                                <span className="text-xs text-gray-500">500€</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Département (Ensoleillement)
                        </label>
                        <div className="relative">
                            <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                            <select
                                value={dept}
                                onChange={(e) => setDept(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-400 focus:border-amber-400 transition-colors"
                            >
                                {DEPARTMENTS.map(d => (
                                    <option key={d.code} value={d.code}>{d.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Surface de toiture disponible
                        </label>
                        <div className="relative">
                            <input
                                type="range"
                                min="15"
                                max="100"
                                step="5"
                                value={surface}
                                onChange={(e) => setSurface(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
                            />
                            <div className="mt-2 flex justify-between items-center">
                                <span className="text-xs text-gray-500">15m²</span>
                                <span className="text-2xl font-bold text-blue-600">{surface}m²</span>
                                <span className="text-xs text-gray-500">100m²</span>
                            </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Puissance estimée : {results?.installedPower} kWc</p>
                    </div>
                </div>

                {/* Results */}
                <div className="bg-navy-900 rounded-2xl p-6 text-white relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Sun className="w-32 h-32" />
                    </div>

                    <div className="relative z-10">
                        <h3 className="text-lg font-medium text-navy-200 mb-6 flex items-center gap-2">
                            <Calculator className="w-5 h-5" />
                            Votre Potentiel Solaire
                        </h3>

                        <div className="space-y-6">
                            <div className="flex items-center justify-between border-b border-navy-700 pb-4">
                                <span className="text-navy-200">Économies (20 ans)</span>
                                <span className="text-3xl font-bold text-green-400">
                                    {results?.totalSavings20Years.toLocaleString('fr-FR')} €
                                </span>
                            </div>

                            <div className="flex items-center justify-between pb-2">
                                <span className="text-navy-200">Retour sur investissement</span>
                                <span className="text-xl font-bold text-white flex items-center gap-2">
                                    {results?.roiYears} ans
                                    <span className="text-xs font-normal bg-green-500/20 text-green-400 px-2 py-1 rounded-full">Excellent</span>
                                </span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-navy-200">Gain annuel moyen</span>
                                <span className="text-lg font-semibold text-white">
                                    ~{Math.round((results?.totalSavings20Years || 0) / 20)} € / an
                                </span>
                            </div>

                            <div className="mt-6 bg-navy-800 rounded-lg p-4 flex items-center gap-3">
                                <Leaf className="w-8 h-8 text-green-500" />
                                <div>
                                    <p className="text-sm font-medium text-white">Impact Écologique</p>
                                    <p className="text-xs text-navy-300">
                                        -{results?.co2Saved.toLocaleString('fr-FR')} kg CO2, soit l'équivalent de {(results?.co2Saved || 0) / 20} arbres plantés 🌳
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 relative z-10">
                        <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2 group">
                            Obtenir mon étude détaillée gratuite
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-center text-xs text-navy-300 mt-3 flex items-center justify-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            Sans engagement - Installateurs RGE vérifiés
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

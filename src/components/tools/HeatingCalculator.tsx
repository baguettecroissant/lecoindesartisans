"use client";

import { useState, useEffect } from "react";
import { Calculator, Thermometer, Wind, Home, ArrowRight, CheckCircle, Info } from "lucide-react";

// G Coefficients (Insulation quality)
const INSULATION_COEFFS = [
    { value: 1.8, label: "Avant 1980 (Mal isolé)", short: "Passoire thermique" },
    { value: 1.3, label: "1980 - 2000 (Moyen)", short: "Standard" },
    { value: 1.0, label: "2000 - 2010 (Bon)", short: "Bonne isolation" },
    { value: 0.7, label: "Après 2012 (RT2012 / RE2020)", short: "Très performant" }
];

// Climate Zones based on Base Temperature
// Simplified mapping (Zone 1 = Cold, Zone 2 = Temperate, Zone 3 = Warm)
const CLIMATE_ZONES = [
    { id: "cold", name: "Zone Froide (Est / Nord / Montagne)", baseTemp: -10, delta35: 45, delta55: 65, color: "text-blue-600 bg-blue-50" },
    { id: "temperate", name: "Zone Tempérée (Ouest / Centre)", baseTemp: -7, delta35: 42, delta55: 62, color: "text-green-600 bg-green-50" },
    { id: "warm", name: "Zone Chaude (Sud / Corse)", baseTemp: -4, delta35: 39, delta55: 59, color: "text-amber-600 bg-amber-50" }
];

export default function HeatingCalculator() {
    // Inputs
    const [surface, setSurface] = useState<number>(100);
    const [ceilingHeight, setCeilingHeight] = useState<number>(2.5);
    const [insulation, setInsulation] = useState<number>(1.3); // Default medium
    const [zone, setZone] = useState<string>("temperate");

    // Results
    const [power, setPower] = useState<{ min: number, max: number, recommended: number } | null>(null);

    useEffect(() => {
        calculate();
    }, [surface, ceilingHeight, insulation, zone]);

    const calculate = () => {
        // Formula: P = V * G * (T_desired - T_base)
        // We assume T_desired = 20°C

        const volume = surface * ceilingHeight;
        const selectedZone = CLIMATE_ZONES.find(z => z.id === zone) || CLIMATE_ZONES[1];
        const deltaT = 20 - selectedZone.baseTemp; // e.g. 20 - (-7) = 27

        // Power in Watts
        const powerWatts = volume * insulation * deltaT;

        // Add 20% safety margin for domestic hot water (DHW) production + pickup
        const totalPowerWatts = powerWatts * 1.2;

        // Convert to kW
        const powerKW = totalPowerWatts / 1000;

        setPower({
            recommended: Math.ceil(powerKW * 2) / 2, // Round to nearest 0.5
            min: Math.floor(powerKW * 0.9 * 2) / 2,
            max: Math.ceil(powerKW * 1.1 * 2) / 2
        });
    };

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 max-w-4xl mx-auto">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white text-center">
                <h2 className="text-2xl font-bold flex items-center justify-center gap-2">
                    <Thermometer className="w-8 h-8 text-blue-100" />
                    Calculateur Puissance Pompe à Chaleur
                </h2>
                <p className="text-blue-100 mt-2">Dimensionnez votre chauffage en quelques clics</p>
            </div>

            <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8 md:gap-12">
                {/* Inputs */}
                <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-navy-900 border-b pb-2">Caractéristiques du logement</h3>

                    {/* Surface */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Surface à chauffer (m²)
                        </label>
                        <div className="relative">
                            <input
                                type="range"
                                min="20"
                                max="300"
                                step="10"
                                value={surface}
                                onChange={(e) => setSurface(Number(e.target.value))}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                            />
                            <div className="mt-2 flex justify-between items-center">
                                <span className="text-xs text-gray-500">20m²</span>
                                <span className="text-2xl font-bold text-blue-600">{surface}m²</span>
                                <span className="text-xs text-gray-500">300m²</span>
                            </div>
                        </div>
                    </div>

                    {/* Height */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Hauteur sous plafond
                        </label>
                        <select
                            value={ceilingHeight}
                            onChange={(e) => setCeilingHeight(Number(e.target.value))}
                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                        >
                            <option value={2.3}>2.30m (Bas)</option>
                            <option value={2.5}>2.50m (Standard)</option>
                            <option value={2.8}>2.80m (Ancien)</option>
                            <option value={3.5}>3.50m (Hauts plafonds)</option>
                        </select>
                    </div>

                    {/* Insulation */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                            <Home className="w-4 h-4" /> Qualité de l'isolation
                        </label>
                        <div className="grid grid-cols-1 gap-2">
                            {INSULATION_COEFFS.map((coeff) => (
                                <button
                                    key={coeff.value}
                                    onClick={() => setInsulation(coeff.value)}
                                    className={`p-3 rounded-lg text-left text-sm transition-all border ${insulation === coeff.value
                                            ? "bg-blue-50 border-blue-500 text-blue-700 shadow-sm"
                                            : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                                        }`}
                                >
                                    <span className="font-bold block">{coeff.label}</span>
                                    <span className="text-xs opacity-75">{coeff.short}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Zone */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                            <Wind className="w-4 h-4" /> Zone Climatique
                        </label>
                        <div className="grid grid-cols-1 gap-2">
                            {CLIMATE_ZONES.map((z) => (
                                <button
                                    key={z.id}
                                    onClick={() => setZone(z.id)}
                                    className={`p-3 rounded-lg text-left text-sm transition-all border ${zone === z.id
                                            ? `border-blue-500 shadow-sm ${z.color}`
                                            : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
                                        }`}
                                >
                                    <span className="font-bold">{z.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Results */}
                <div className="bg-navy-900 rounded-2xl p-6 text-white relative overflow-hidden flex flex-col justify-between">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Thermometer className="w-32 h-32" />
                    </div>

                    <div className="relative z-10">
                        <h3 className="text-lg font-medium text-navy-200 mb-6 flex items-center gap-2">
                            Dimensionnement Recommandé
                        </h3>

                        <div className="text-center py-8">
                            <span className="text-6xl font-bold text-white block">
                                {power?.recommended} kW
                            </span>
                            <span className="text-navy-300 text-sm mt-2 block">
                                Puissance thermique nécessaire
                            </span>
                        </div>

                        <div className="bg-navy-800 rounded-lg p-5 space-y-3">
                            <h4 className="text-sm font-bold text-gray-300 flex items-center gap-2">
                                <Info className="w-4 h-4" /> Analyse Expert
                            </h4>
                            <p className="text-sm text-navy-200 leading-relaxed">
                                Pour votre logement de <strong className="text-white">{Math.round(surface * ceilingHeight)}m³</strong> en {CLIMATE_ZONES.find(z => z.id === zone)?.name.split('(')[0]}, nous recommandons une PAC d'une puissance nominale entre <strong className="text-white">{power?.min} kW</strong> et <strong className="text-white">{power?.max} kW</strong>.
                            </p>
                            <p className="text-xs text-orange-300 mt-2">
                                ⚠️ Une pompe surdimensionnée (ex: 16kW) consommera plus et s'usera plus vite (cycles courts).
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 relative z-10">
                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2 group">
                            Voir les modèles adaptés & prix
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-center text-xs text-navy-300 mt-3 flex items-center justify-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            Devis gratuit avec des pros certifiés RGE
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

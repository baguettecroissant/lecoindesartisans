"use client";

import { useState } from "react";
import { Shield, CheckCircle, Clock, ArrowRight } from "lucide-react";
import { getSiteSettings } from "@/lib/data";

interface LeadFormProps {
    serviceName?: string;
    cityName?: string;
}

export default function LeadForm({ serviceName, cityName }: LeadFormProps) {
    const settings = getSiteSettings();
    const [step, setStep] = useState(1);

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-navy-900 to-navy-800 px-6 py-5 text-white">
                <h3 className="text-xl font-bold">
                    {serviceName && cityName
                        ? `Devis ${serviceName} à ${cityName}`
                        : settings.cta_main}
                </h3>
                <p className="text-navy-100 text-sm mt-1">{settings.cta_sub}</p>
            </div>

            {/* Form Content */}
            <div className="p-6">
                {step === 1 && (
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Type de projet
                            </label>
                            <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all">
                                <option value="">Sélectionnez votre projet</option>
                                <option value="installation">Installation neuve</option>
                                <option value="renovation">Rénovation / Remplacement</option>
                                <option value="reparation">Réparation / Dépannage</option>
                                <option value="conseil">Demande de conseil</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Votre code postal
                            </label>
                            <input
                                type="text"
                                placeholder="Ex: 75001"
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                            />
                        </div>

                        <button
                            onClick={() => setStep(2)}
                            className="w-full flex items-center justify-center px-6 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
                        >
                            Recevoir mes devis gratuits
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Prénom
                                </label>
                                <input
                                    type="text"
                                    placeholder="Jean"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Nom
                                </label>
                                <input
                                    type="text"
                                    placeholder="Dupont"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Téléphone
                            </label>
                            <input
                                type="tel"
                                placeholder="06 12 34 56 78"
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="jean.dupont@email.fr"
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full flex items-center justify-center px-6 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                        >
                            Envoyer ma demande
                        </button>

                        <button
                            onClick={() => setStep(1)}
                            className="w-full text-gray-500 text-sm hover:text-gray-700"
                        >
                            ← Retour
                        </button>
                    </div>
                )}

                {/* Trust Indicators */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="flex flex-col items-center">
                            <Shield className="w-6 h-6 text-green-500 mb-1" />
                            <span className="text-xs text-gray-600">100% Gratuit</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <CheckCircle className="w-6 h-6 text-green-500 mb-1" />
                            <span className="text-xs text-gray-600">Sans engagement</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <Clock className="w-6 h-6 text-green-500 mb-1" />
                            <span className="text-xs text-gray-600">Réponse 24h</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

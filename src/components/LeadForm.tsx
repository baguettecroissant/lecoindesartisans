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
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Form states
    const [formData, setFormData] = useState({
        projectType: "",
        zipCode: "",
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch("https://formspree.io/f/mkoognya", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    service: serviceName || "Général",
                    city: cityName || "France",
                    source: window.location.href,
                }),
            });

            if (response.ok) {
                setIsSuccess(true);
                setStep(3); // Move to success step/view
            } else {
                throw new Error("Erreur lors de l'envoi");
            }
        } catch (err) {
            setError("Une erreur est survenue. Veuillez réessayer.");
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden min-h-[400px] flex flex-col justify-center items-center text-center p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-2">
                    Demande envoyée !
                </h3>
                <p className="text-gray-600 mb-6">
                    Vos artisans partenaires ont bien reçu votre demande. Ils vous
                    contacteront sous 24h pour étudier votre projet.
                </p>
                <button
                    onClick={() => {
                        setIsSuccess(false);
                        setStep(1);
                        setFormData({
                            projectType: "",
                            zipCode: "",
                            firstName: "",
                            lastName: "",
                            phone: "",
                            email: "",
                        });
                    }}
                    className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
                >
                    Faire une autre demande
                </button>
            </div>
        );
    }

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
                            <select
                                name="projectType"
                                value={formData.projectType}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                            >
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
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleChange}
                                placeholder="Ex: 75001"
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                            />
                        </div>

                        <button
                            onClick={() => {
                                if (formData.projectType && formData.zipCode) {
                                    setStep(2);
                                } else {
                                    alert("Veuillez remplir tous les champs");
                                }
                            }}
                            className="w-full flex items-center justify-center px-6 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
                        >
                            Recevoir mes devis gratuits
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                )}

                {step === 2 && (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Prénom
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
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
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
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
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
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
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="jean.dupont@email.fr"
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                            />
                        </div>

                        {error && (
                            <div className="text-red-500 text-sm text-center">{error}</div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full flex items-center justify-center px-6 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                        </button>

                        <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="w-full text-gray-500 text-sm hover:text-gray-700"
                        >
                            ← Retour
                        </button>
                    </form>
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

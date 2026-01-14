"use client";

import { Phone } from "lucide-react";

interface StickyCTAProps {
    cityName: string;
}

export default function StickyCTA({ cityName }: StickyCTAProps) {
    const scrollToForm = () => {
        const form = document.getElementById("lead-form");
        if (form) {
            form.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 shadow-lg p-3">
            <button
                onClick={scrollToForm}
                className="w-full flex items-center justify-center px-4 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-colors"
            >
                <Phone className="w-5 h-5 mr-2" />
                Demander un devis à {cityName}
            </button>
        </div>
    );
}

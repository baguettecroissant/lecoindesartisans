"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQ } from "@/types";

interface FAQAccordionProps {
    faqs: FAQ[];
    serviceName?: string;
    cityName?: string;
}

export default function FAQAccordion({ faqs, serviceName, cityName }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    // Localize FAQs if service/city provided
    const localizedFaqs = faqs.map((faq) => ({
        ...faq,
        question: faq.question
            .replace("{service}", serviceName || "vos travaux")
            .replace("{city}", cityName || "votre ville"),
        answer: faq.answer
            .replace("{service}", serviceName || "vos travaux")
            .replace("{city}", cityName || "votre ville"),
    }));

    return (
        <div className="space-y-3">
            {localizedFaqs.map((faq, index) => (
                <div
                    key={index}
                    className="bg-white rounded-lg border border-gray-100 overflow-hidden"
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                    >
                        <span className="font-medium text-navy-900 pr-4">{faq.question}</span>
                        {openIndex === index ? (
                            <ChevronUp className="w-5 h-5 text-amber-500 flex-shrink-0" />
                        ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                        )}
                    </button>

                    {openIndex === index && (
                        <div className="px-5 pb-4">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

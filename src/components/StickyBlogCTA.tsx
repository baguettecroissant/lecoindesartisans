"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

interface StickyBlogCTAProps {
    targetId: string;
}

export default function StickyBlogCTA({ targetId }: StickyBlogCTAProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Check initial state

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsFormVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        observer.observe(targetElement);

        return () => observer.disconnect();
    }, [targetId]);

    const scrollToForm = () => {
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    const isVisible = isScrolled && !isFormVisible;

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] lg:hidden transition-transform duration-300 ease-in-out ${isVisible ? "translate-y-0" : "translate-y-full"
                }`}
        >
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <div className="flex flex-col">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Besoin d'un artisan ?
                    </span>
                    <span className="font-bold text-navy-900 leading-tight">
                        Recevez 3 devis gratuits
                    </span>
                </div>
                <button
                    onClick={scrollToForm}
                    className="flex items-center px-5 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-colors shadow-md active:scale-95"
                >
                    <span>Comparer</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                </button>
            </div>
        </div>
    );
}

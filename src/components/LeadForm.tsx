"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, CheckCircle, Clock } from "lucide-react";
import { getSiteSettings } from "@/lib/data";

interface LeadFormProps {
    serviceName?: string;
    cityName?: string;
    instanceId?: string; // Unique ID pour éviter les conflits quand plusieurs formulaires sur la même page
}

export default function LeadForm({ serviceName, cityName, instanceId = "main" }: LeadFormProps) {
    const settings = getSiteSettings();
    const containerRef = useRef<HTMLDivElement>(null);

    // États pour le rendu conditionnel (Mobile vs Desktop)
    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Détermine si on est sur une page spécifique (service) ou générale (accueil)
    const isGenericPage = !serviceName;

    // IDs uniques pour cette instance
    const scriptId = `vud-widget-script-${instanceId}`;
    const containerId = isGenericPage ? `v4c4175c0f5d-${instanceId}` : `v7fd1a16f1ad-${instanceId}`;

    // 1. Logique de visibilité pour éviter les conflits d'ID
    useEffect(() => {
        setIsMounted(true);

        const checkVisibility = () => {
            const width = window.innerWidth;
            // Correspond aux breakpoints Tailwind 'lg' (1024px)
            if (instanceId === 'desktop') {
                setIsVisible(width >= 1024);
            } else if (instanceId === 'mobile') {
                setIsVisible(width < 1024);
            } else {
                setIsVisible(true); // Toujours visible pour les autres instances (sidebar blog etc)
            }
        };

        checkVisibility();
        window.addEventListener('resize', checkVisibility);
        return () => window.removeEventListener('resize', checkVisibility);
    }, [instanceId]);

    // 2. Chargement du Widget
    useEffect(() => {
        // Ne rien faire si le composant n'est pas censé être visible
        if (!isVisible || !isMounted) return;

        const partnerId = '2353';

        const loadWidget = () => {
            // Vérifier si script pas déjà chargé pour cette instance
            if (document.getElementById(scriptId)) return;

            if (isGenericPage) {
                // === PAGE D'ACCUEIL / GÉNÉRIQUE ===
                const categoryId = '0';

                (window as any)[`vud_partenaire_id_${instanceId}`] = partnerId;
                (window as any)[`vud_categorie_id_${instanceId}`] = categoryId;

                // Le widget ViteUnDevis cherche un container avec un ID spécifique hardcodé
                // Comme on ne peut pas changer l'ID attendu par le script, on va créer 
                // un container temporaire avec l'ID officiel DANS notre container personnalisé
                const officialContainer = document.createElement('div');
                officialContainer.id = 'v4c4175c0f5d';

                const ourContainer = document.getElementById(containerId);
                if (ourContainer) {
                    ourContainer.innerHTML = '';
                    ourContainer.appendChild(officialContainer);
                }

                const script = document.createElement('script');
                script.id = scriptId;
                script.type = 'text/javascript';
                script.src = `//www.viteundevis.com/4c4175c0f5/${partnerId}/${categoryId}/`;

                const firstScript = document.getElementsByTagName('script')[0];
                if (firstScript?.parentNode) {
                    firstScript.parentNode.insertBefore(script, firstScript);
                } else {
                    document.body.appendChild(script);
                }
            } else {
                // === PAGE DE SERVICE SPÉCIFIQUE ===
                const boxId = '7fd1a16f1a';

                let keyword = serviceName;
                if (cityName) {
                    keyword += ` ${cityName}`;
                }
                const encodedKeyword = encodeURIComponent(keyword || '');

                (window as any).vud_partenaire_id = partnerId;
                (window as any).vud_keyword = keyword;
                (window as any).vud_box_id = boxId;

                const officialContainer = document.createElement('div');
                officialContainer.id = 'v7fd1a16f1ad';

                const ourContainer = document.getElementById(containerId);
                if (ourContainer) {
                    ourContainer.innerHTML = '';
                    ourContainer.appendChild(officialContainer);
                }

                const script = document.createElement('script');
                script.id = scriptId;
                script.type = 'text/javascript';
                script.src = `//www.viteundevis.com/marqueblanche/?b=${boxId}&p=${partnerId}&c=${encodedKeyword}`;

                const firstScript = document.getElementsByTagName('script')[0];
                if (firstScript?.parentNode) {
                    firstScript.parentNode.insertBefore(script, firstScript);
                } else {
                    document.body.appendChild(script);
                }
            }
        };

        // Charger jQuery si pas présent (Essential)
        if (!(window as any).jQuery) {
            if (!document.getElementById('jquery-loader')) {
                const jqueryScript = document.createElement('script');
                jqueryScript.id = 'jquery-loader';
                jqueryScript.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js";
                jqueryScript.onload = loadWidget;
                document.head.appendChild(jqueryScript);
            } else {
                const checkJQuery = setInterval(() => {
                    if ((window as any).jQuery) {
                        clearInterval(checkJQuery);
                        loadWidget();
                    }
                }, 100);
            }
        } else {
            loadWidget();
        }

        return () => {
            try {
                const widgetScript = document.getElementById(scriptId);
                if (widgetScript) widgetScript.remove();
            } catch (e) { }
        };
    }, [serviceName, cityName, isGenericPage, instanceId, scriptId, containerId, isVisible, isMounted]);

    // Rendu conditionnel
    if (!isMounted) return <div className="min-h-[400px] bg-white rounded-2xl animate-pulse"></div>;
    if (!isVisible) return null;

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

            {/* Widget Container */}
            <div className="p-6">
                <div ref={containerRef} className="min-h-[400px]">
                    {/* Container avec ID unique pour cette instance */}
                    <div id={containerId} className="w-full"></div>
                </div>

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

// Rich service content for SEO-optimized service pages
// This content is shared across all cities for a given service

export interface ServiceStep {
    title: string;
    description: string;
    duration?: string;
}

export interface PriceTableRow {
    option: string;
    priceRange: string;
    details: string;
    recommended?: boolean;
}

export interface ComparisonRow {
    criteria: string;
    options: Record<string, string>;
}

export interface ServiceFAQ {
    question: string;
    answer: string;
}

export interface ServiceContent {
    slug: string;

    // Hero section
    tagline: string;

    // Main content sections
    introduction: string;

    // How it works
    processTitle: string;
    processSteps: ServiceStep[];

    // Benefits section
    benefitsTitle: string;
    benefits: Array<{
        title: string;
        description: string;
        icon: string; // emoji or lucide icon name
    }>;

    // Price table
    priceTableTitle: string;
    priceTableNote: string;
    priceTable: PriceTableRow[];

    // Comparison table (e.g., different types of panels, PAC types)
    comparisonTitle?: string;
    comparisonOptions?: string[];
    comparisonTable?: ComparisonRow[];

    // Detailed FAQ (separate from global FAQ)
    faqTitle: string;
    faqs: ServiceFAQ[];

    // Call to action text
    ctaTitle: string;
    ctaDescription: string;
}

export const serviceContent: Record<string, ServiceContent> = {
    "panneaux-solaires": {
        slug: "panneaux-solaires",
        tagline: "Produisez votre propre électricité et réduisez vos factures jusqu'à 70%",

        introduction: `L'installation de panneaux solaires photovoltaïques est l'un des investissements les plus rentables pour votre habitat. En 2026, avec la hausse des prix de l'électricité (+15% par an en moyenne), l'autoconsommation solaire devient incontournable.

Nos installateurs certifiés RGE (Reconnus Garants de l'Environnement) vous accompagnent de l'étude de faisabilité jusqu'à la mise en service, en passant par les démarches administratives (déclaration préalable, raccordement Enedis, contrat EDF OA).`,

        processTitle: "Comment se déroule l'installation ?",
        processSteps: [
            {
                title: "Visite technique gratuite",
                description: "Un technicien évalue votre toiture : orientation, inclinaison, ombrage, état de la charpente. Il dimensionne l'installation optimale pour vos besoins.",
                duration: "1h sur place"
            },
            {
                title: "Devis détaillé et simulation",
                description: "Vous recevez un devis complet avec simulation de production, économies estimées et retour sur investissement. Nous gérons les demandes d'aides.",
                duration: "48h"
            },
            {
                title: "Démarches administratives",
                description: "Déclaration préalable en mairie, demande de raccordement Enedis, dossier MaPrimeRénov'... Nous nous occupons de tout.",
                duration: "4-8 semaines"
            },
            {
                title: "Installation des panneaux",
                description: "Pose des panneaux, onduleur(s), câblage et mise en service. Nos équipes sont formées aux normes NF C 15-100.",
                duration: "1-2 jours"
            },
            {
                title: "Raccordement et mise en service",
                description: "Passage du Consuel, raccordement au réseau et activation de votre contrat de revente (EDF OA ou autre).",
                duration: "2-4 semaines"
            }
        ],

        benefitsTitle: "Pourquoi installer des panneaux solaires ?",
        benefits: [
            {
                title: "Réduction facture jusqu'à 70%",
                description: "L'autoconsommation permet de consommer directement l'électricité produite, sans passer par le réseau.",
                icon: "💰"
            },
            {
                title: "Revente du surplus",
                description: "EDF OA rachète votre surplus à 0,13€/kWh (tarif 2026). Une source de revenus passive.",
                icon: "📈"
            },
            {
                title: "Indépendance énergétique",
                description: "Moins dépendant des hausses de prix de l'électricité (+15% par an en moyenne).",
                icon: "🔌"
            },
            {
                title: "Valorisation immobilière",
                description: "Une maison équipée de panneaux solaires se vend 5 à 10% plus cher.",
                icon: "🏠"
            },
            {
                title: "Écologique",
                description: "Réduisez votre empreinte carbone. 1 kWc évite 500 kg de CO2 par an.",
                icon: "🌱"
            },
            {
                title: "Durée de vie 25-30 ans",
                description: "Les panneaux sont garantis 25 ans avec une perte de rendement < 20%.",
                icon: "⏱️"
            }
        ],

        priceTableTitle: "Prix des panneaux solaires en 2026",
        priceTableNote: "Prix moyens TTC, pose comprise, avant déduction des aides. Basés sur des panneaux monocristallins haut rendement.",
        priceTable: [
            {
                option: "3 kWc (8-10 panneaux)",
                priceRange: "7 000€ - 10 000€",
                details: "Idéal pour un couple ou petit foyer. Couvre 50% des besoins.",
                recommended: false
            },
            {
                option: "6 kWc (15-18 panneaux)",
                priceRange: "12 000€ - 16 000€",
                details: "Le plus demandé. Parfait pour une famille de 4 personnes.",
                recommended: true
            },
            {
                option: "9 kWc (22-26 panneaux)",
                priceRange: "17 000€ - 23 000€",
                details: "Grandes maisons ou projet autoconsommation + revente.",
                recommended: false
            }
        ],

        comparisonTitle: "Quel type de panneau choisir ?",
        comparisonOptions: ["Monocristallin", "Polycristallin", "Tuiles solaires"],
        comparisonTable: [
            {
                criteria: "Rendement",
                options: {
                    "Monocristallin": "20-22% ⭐⭐⭐",
                    "Polycristallin": "15-17% ⭐⭐",
                    "Tuiles solaires": "10-15% ⭐"
                }
            },
            {
                criteria: "Prix au m²",
                options: {
                    "Monocristallin": "250-350€",
                    "Polycristallin": "200-280€",
                    "Tuiles solaires": "400-600€"
                }
            },
            {
                criteria: "Esthétique",
                options: {
                    "Monocristallin": "Noir uniforme",
                    "Polycristallin": "Bleuté marbré",
                    "Tuiles solaires": "Intégré à la toiture"
                }
            },
            {
                criteria: "Durée de vie",
                options: {
                    "Monocristallin": "25-30 ans",
                    "Polycristallin": "25-30 ans",
                    "Tuiles solaires": "25-30 ans"
                }
            },
            {
                criteria: "Recommandation",
                options: {
                    "Monocristallin": "✅ Meilleur rapport qualité/prix",
                    "Polycristallin": "Budget serré",
                    "Tuiles solaires": "Contrainte esthétique (ABF)"
                }
            }
        ],

        faqTitle: "Questions fréquentes sur les panneaux solaires",
        faqs: [
            {
                question: "Combien de temps pour rentabiliser des panneaux solaires ?",
                answer: "En moyenne 8 à 12 ans selon votre région, les aides obtenues et votre consommation. Avec les hausses de prix de l'électricité, ce délai se raccourcit chaque année. Après rentabilisation, vous bénéficiez d'électricité quasi gratuite pendant 15-20 ans."
            },
            {
                question: "Quelles aides pour les panneaux solaires en 2026 ?",
                answer: "Prime à l'autoconsommation (jusqu'à 1 140€), TVA réduite à 10% pour les installations ≤ 3kWc, et certaines aides régionales. Attention : les panneaux solaires seuls ne sont pas éligibles à MaPrimeRénov' (uniquement le solaire thermique)."
            },
            {
                question: "Les panneaux fonctionnent-ils par temps nuageux ?",
                answer: "Oui, les panneaux produisent même par temps couvert (10-25% de leur capacité). La France bénéficie de suffisamment d'ensoleillement pour rentabiliser une installation, même dans le Nord."
            },
            {
                question: "Faut-il une batterie de stockage ?",
                answer: "Pas obligatoire. En autoconsommation, vous consommez le jour et injectez le surplus sur le réseau. Une batterie (5 000€-10 000€) n'est rentable que si vous avez des besoins importants en soirée ou souhaitez une autonomie complète."
            },
            {
                question: "Quelle est la durée de vie des panneaux ?",
                answer: "Les panneaux sont garantis 25 ans avec une production maintenue à > 80% de la capacité initiale. En réalité, ils peuvent durer 30-40 ans. L'onduleur doit être remplacé tous les 10-15 ans (~1 500€)."
            },
            {
                question: "Mon toit est-il adapté aux panneaux solaires ?",
                answer: "Idéalement : orientation sud (sud-est/sud-ouest acceptable), inclinaison 30-35°, sans ombrage. Mais même un toit est/ouest produit 80-85% d'un toit sud. Nos techniciens évaluent gratuitement votre potentiel."
            },
            {
                question: "Puis-je installer des panneaux moi-même ?",
                answer: "Techniquement oui, mais vous perdez les aides, la garantie décennale et la revente à EDF OA. L'installation par un artisan RGE est indispensable pour bénéficier des avantages fiscaux et du rachat."
            }
        ],

        ctaTitle: "Prêt à passer au solaire ?",
        ctaDescription: "Recevez jusqu'à 3 devis gratuits d'installateurs certifiés RGE près de chez vous. Comparez les prix et les garanties en toute transparence."
    },

    "pompe-a-chaleur": {
        slug: "pompe-a-chaleur",
        tagline: "Divisez par 3 votre facture de chauffage avec une PAC haute performance",

        introduction: `La pompe à chaleur est la solution de chauffage la plus efficace en 2026. Elle capte les calories gratuites de l'air extérieur (ou du sol) pour chauffer votre logement et produire votre eau chaude.

Avec un COP de 4 (coefficient de performance), pour 1€ d'électricité consommé, la PAC produit l'équivalent de 4€ de chaleur. Nos installateurs certifiés RGE dimensionnent et installent votre système pour un confort optimal été comme hiver.`,

        processTitle: "Les étapes de votre projet PAC",
        processSteps: [
            {
                title: "Étude thermique gratuite",
                description: "Un technicien analyse votre logement : isolation, surface, besoins en chauffage et eau chaude. Il détermine la puissance optimale.",
                duration: "1h30 sur place"
            },
            {
                title: "Proposition technique et financière",
                description: "Devis détaillé avec type de PAC recommandé, économies estimées et plan de financement incluant toutes les aides.",
                duration: "5 jours"
            },
            {
                title: "Dossier d'aides",
                description: "Nous montons votre dossier MaPrimeRénov', CEE et éco-PTZ. Vous connaissez votre reste à charge avant de vous engager.",
                duration: "2-3 semaines"
            },
            {
                title: "Installation de la PAC",
                description: "Dépose de l'ancien système, pose de l'unité extérieure et intérieure, raccordement au circuit de chauffage.",
                duration: "2-3 jours"
            },
            {
                title: "Mise en service et formation",
                description: "Paramétrage de la PAC, test du système et formation à l'utilisation de votre nouveau chauffage.",
                duration: "2h"
            }
        ],

        benefitsTitle: "Pourquoi choisir une pompe à chaleur ?",
        benefits: [
            {
                title: "Facture divisée par 3",
                description: "Une PAC consomme 3 à 4 fois moins qu'un chauffage électrique classique.",
                icon: "💰"
            },
            {
                title: "Jusqu'à 5 000€ d'aides",
                description: "MaPrimeRénov' + CEE + éco-PTZ peuvent financer jusqu'à 70% de votre projet.",
                icon: "🎁"
            },
            {
                title: "Chauffage + eau chaude",
                description: "Une seule installation pour le chauffage et la production d'eau chaude sanitaire.",
                icon: "🚿"
            },
            {
                title: "Confort optimal",
                description: "Chaleur douce et homogène, sans à-coups, compatible plancher chauffant.",
                icon: "🏠"
            },
            {
                title: "Écologique",
                description: "75% de l'énergie provient de l'air (gratuit et renouvelable).",
                icon: "🌱"
            },
            {
                title: "Valorisation du bien",
                description: "Un meilleur DPE augmente la valeur de votre maison de 5 à 15%.",
                icon: "📈"
            }
        ],

        priceTableTitle: "Prix d'une pompe à chaleur en 2026",
        priceTableNote: "Prix moyens TTC, pose comprise, avant déduction des aides. Installation dans une maison de 100-150m².",
        priceTable: [
            {
                option: "PAC Air-Air (multisplit)",
                priceRange: "5 000€ - 10 000€",
                details: "Chauffage + clim. Non éligible MaPrimeRénov'.",
                recommended: false
            },
            {
                option: "PAC Air-Eau (standard)",
                priceRange: "10 000€ - 15 000€",
                details: "Chauffage + eau chaude. Éligible MaPrimeRénov'.",
                recommended: true
            },
            {
                option: "PAC Air-Eau (haute temp.)",
                priceRange: "12 000€ - 18 000€",
                details: "Compatible anciens radiateurs. Éligible MaPrimeRénov'.",
                recommended: false
            },
            {
                option: "PAC Géothermique",
                priceRange: "20 000€ - 35 000€",
                details: "La plus performante. Forage nécessaire.",
                recommended: false
            }
        ],

        comparisonTitle: "PAC Air-Eau vs PAC Air-Air",
        comparisonOptions: ["PAC Air-Eau", "PAC Air-Air"],
        comparisonTable: [
            {
                criteria: "Prix moyen",
                options: {
                    "PAC Air-Eau": "10 000€ - 18 000€",
                    "PAC Air-Air": "5 000€ - 10 000€"
                }
            },
            {
                criteria: "MaPrimeRénov'",
                options: {
                    "PAC Air-Eau": "✅ Jusqu'à 5 000€",
                    "PAC Air-Air": "❌ Non éligible"
                }
            },
            {
                criteria: "Eau chaude sanitaire",
                options: {
                    "PAC Air-Eau": "✅ Oui",
                    "PAC Air-Air": "❌ Non"
                }
            },
            {
                criteria: "Climatisation",
                options: {
                    "PAC Air-Eau": "❌ Rare",
                    "PAC Air-Air": "✅ Intégrée"
                }
            },
            {
                criteria: "Plancher chauffant",
                options: {
                    "PAC Air-Eau": "✅ Compatible",
                    "PAC Air-Air": "❌ Non compatible"
                }
            }
        ],

        faqTitle: "Questions fréquentes sur les pompes à chaleur",
        faqs: [
            {
                question: "Une PAC fonctionne-t-elle par grand froid ?",
                answer: "Oui, les PAC modernes fonctionnent jusqu'à -15°C voire -25°C pour les modèles haute performance. Le COP diminue par temps très froid, mais la PAC reste plus économique qu'un chauffage électrique classique."
            },
            {
                question: "Quel entretien pour une pompe à chaleur ?",
                answer: "Un entretien annuel obligatoire par un professionnel (100-200€/an). Entre les visites : nettoyage des filtres, vérification de l'unité extérieure. Durée de vie moyenne : 15-20 ans."
            },
            {
                question: "Une PAC est-elle bruyante ?",
                answer: "L'unité intérieure est silencieuse (25-35 dB). L'unité extérieure émet 45-55 dB (conversation normale). Il faut respecter les distances avec les voisins et privilégier un emplacement adapté."
            },
            {
                question: "Puis-je garder mes radiateurs actuels ?",
                answer: "Oui, avec une PAC haute température (65-80°C). Pour une PAC basse température (35-45°C), il faut des radiateurs basse température ou un plancher chauffant. Nos techniciens vous conseillent."
            },
            {
                question: "Combien de temps pour installer une PAC ?",
                answer: "En moyenne 2-3 jours pour l'installation technique. Comptez 4-8 semaines au total avec les démarches administratives et le délai d'obtention des aides."
            }
        ],

        ctaTitle: "Passez à la pompe à chaleur",
        ctaDescription: "Comparez gratuitement les devis de nos installateurs RGE certifiés. Étude thermique et simulation des aides incluses."
    },

    "isolation-exterieure": {
        slug: "isolation-exterieure",
        tagline: "Supprimez les ponts thermiques et réduisez votre facture de chauffage jusqu'à 25%",

        introduction: `L'isolation thermique par l'extérieur (ITE) est la solution la plus efficace pour améliorer les performances énergétiques de votre maison. En enveloppant votre habitation d'un manteau isolant, vous supprimez les ponts thermiques et conservez l'inertie thermique de vos murs.

En 2026, l'ITE bénéficie d'aides massives (MaPrimeRénov', CEE) et permet d'améliorer significativement votre DPE. Nos artisans certifiés RGE réalisent votre projet de A à Z : du diagnostic thermique à la finition des façades.`,

        processTitle: "Les étapes de votre isolation extérieure",
        processSteps: [
            {
                title: "Diagnostic thermique gratuit",
                description: "Un technicien analyse vos murs, identifie les ponts thermiques et les déperditions. Il préconise l'épaisseur d'isolant adaptée.",
                duration: "1h30 sur place"
            },
            {
                title: "Devis détaillé et plan de financement",
                description: "Devis complet avec choix d'isolant, finition et couleurs. Simulation des aides MaPrimeRénov' et CEE incluse.",
                duration: "5-7 jours"
            },
            {
                title: "Montage des dossiers d'aides",
                description: "Nous préparons vos dossiers MaPrimeRénov', CEE et éco-PTZ. Vous connaissez votre reste à charge avant travaux.",
                duration: "2-4 semaines"
            },
            {
                title: "Préparation du chantier",
                description: "Installation des échafaudages, protection des ouvrants et des sols. Préparation des supports muraux.",
                duration: "1-2 jours"
            },
            {
                title: "Pose de l'isolation et finitions",
                description: "Fixation des panneaux isolants, pose de l'armature, enduit de finition et peinture. Nettoyage du chantier.",
                duration: "2-4 semaines"
            }
        ],

        benefitsTitle: "Pourquoi choisir l'isolation extérieure ?",
        benefits: [
            {
                title: "Économies jusqu'à 25%",
                description: "Les murs représentent 20-25% des déperditions thermiques. L'ITE les supprime quasi totalement.",
                icon: "💰"
            },
            {
                title: "Jusqu'à 75€/m² d'aides",
                description: "MaPrimeRénov' + CEE peuvent financer 50 à 90% de votre projet selon vos revenus.",
                icon: "🎁"
            },
            {
                title: "Confort été comme hiver",
                description: "L'inertie thermique des murs est préservée : frais l'été, chaud l'hiver.",
                icon: "🌡️"
            },
            {
                title: "Pas de perte de surface",
                description: "Contrairement à l'isolation intérieure, aucune réduction de votre surface habitable.",
                icon: "📐"
            },
            {
                title: "Ravalement inclus",
                description: "Votre façade est rénovée et embellie. Choix de couleurs et finitions multiples.",
                icon: "🏠"
            },
            {
                title: "Valorisation du bien",
                description: "Un meilleur DPE augmente la valeur de votre maison et facilite la vente/location.",
                icon: "📈"
            }
        ],

        priceTableTitle: "Prix de l'isolation extérieure en 2026",
        priceTableNote: "Prix moyens TTC, pose comprise, avant déduction des aides. Pour une maison de 100m² de façade.",
        priceTable: [
            {
                option: "Polystyrène expansé (PSE)",
                priceRange: "120€ - 160€/m²",
                details: "Le plus économique. Bon rapport qualité/prix.",
                recommended: true
            },
            {
                option: "Laine de roche",
                priceRange: "150€ - 200€/m²",
                details: "Meilleure résistance au feu. Excellent confort acoustique.",
                recommended: false
            },
            {
                option: "Fibre de bois",
                priceRange: "180€ - 250€/m²",
                details: "Écologique, excellent confort d'été. Matériau biosourcé.",
                recommended: false
            },
            {
                option: "Bardage ventilé",
                priceRange: "200€ - 300€/m²",
                details: "Esthétique premium. Bois, composite ou métallique.",
                recommended: false
            }
        ],

        comparisonTitle: "Quel isolant choisir ?",
        comparisonOptions: ["PSE (Polystyrène)", "Laine de roche", "Fibre de bois"],
        comparisonTable: [
            {
                criteria: "Prix moyen",
                options: {
                    "PSE (Polystyrène)": "120-160€/m² ⭐",
                    "Laine de roche": "150-200€/m²",
                    "Fibre de bois": "180-250€/m²"
                }
            },
            {
                criteria: "Performance thermique",
                options: {
                    "PSE (Polystyrène)": "λ = 0.032 ⭐⭐⭐",
                    "Laine de roche": "λ = 0.035 ⭐⭐",
                    "Fibre de bois": "λ = 0.038 ⭐⭐"
                }
            },
            {
                criteria: "Confort d'été",
                options: {
                    "PSE (Polystyrène)": "Moyen",
                    "Laine de roche": "Bon ⭐⭐",
                    "Fibre de bois": "Excellent ⭐⭐⭐"
                }
            },
            {
                criteria: "Résistance au feu",
                options: {
                    "PSE (Polystyrène)": "Faible",
                    "Laine de roche": "Excellent ⭐⭐⭐",
                    "Fibre de bois": "Moyen"
                }
            },
            {
                criteria: "Impact écologique",
                options: {
                    "PSE (Polystyrène)": "Pétrochimie",
                    "Laine de roche": "Minéral",
                    "Fibre de bois": "Biosourcé ⭐⭐⭐"
                }
            },
            {
                criteria: "Recommandation",
                options: {
                    "PSE (Polystyrène)": "✅ Meilleur rapport qualité/prix",
                    "Laine de roche": "Zones à risque incendie",
                    "Fibre de bois": "Démarche écologique"
                }
            }
        ],

        faqTitle: "Questions fréquentes sur l'isolation extérieure",
        faqs: [
            {
                question: "Quelle épaisseur d'isolant pour une bonne performance ?",
                answer: "En général 14 à 20 cm selon le matériau et votre zone climatique. Pour atteindre une résistance thermique R ≥ 4 m².K/W (minimum pour les aides), comptez 12-16 cm de PSE ou 14-18 cm de laine de roche."
            },
            {
                question: "L'ITE nécessite-t-elle une autorisation ?",
                answer: "Oui, une déclaration préalable de travaux est obligatoire car l'aspect extérieur de votre maison est modifié. Nous nous occupons de toutes les démarches administratives."
            },
            {
                question: "Combien de temps durent les travaux ?",
                answer: "Pour une maison individuelle standard (100-150m² de façade), comptez 2 à 4 semaines de travaux. Le chantier dépend de la météo et de la complexité (baies vitrées, balcons...)."
            },
            {
                question: "Puis-je rester dans ma maison pendant les travaux ?",
                answer: "Oui, l'isolation se fait entièrement par l'extérieur. Vous n'êtes pas dérangé à l'intérieur. Seul l'accès aux façades est temporairement limité par les échafaudages."
            },
            {
                question: "Quelle durée de vie pour une ITE ?",
                answer: "Une isolation extérieure bien posée dure 30 à 50 ans. L'enduit de finition peut nécessiter un ravalement tous les 15-20 ans selon l'exposition et le climat."
            },
            {
                question: "L'ITE est-elle compatible avec tous les types de murs ?",
                answer: "L'ITE convient à la plupart des murs : parpaing, brique, béton, pierre (avec adaptation). Seuls les murs très irréguliers ou classés peuvent poser des contraintes. Notre diagnostic gratuit évalue la faisabilité."
            },
            {
                question: "Quelles aides pour l'isolation extérieure en 2026 ?",
                answer: "MaPrimeRénov' (jusqu'à 75€/m² pour les revenus modestes), CEE (primes énergie), éco-PTZ (prêt à taux zéro jusqu'à 50 000€), et parfois des aides locales. Le cumul peut financer 50-90% du projet."
            }
        ],

        ctaTitle: "Isolez votre maison par l'extérieur",
        ctaDescription: "Recevez jusqu'à 3 devis gratuits d'artisans RGE qualifiés. Diagnostic thermique et simulation des aides inclus."
    }
};

export function getServiceContent(serviceSlug: string): ServiceContent | undefined {
    return serviceContent[serviceSlug];
}

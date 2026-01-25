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
    },
    "toiture-couverture": {
        slug: "toiture-couverture",
        tagline: "Rénovation, étanchéité et zinguerie : protégez votre maison pour 30 ans",

        introduction: `Votre toiture est le premier rempart de votre maison contre les intempéries. Une couverture en bon état garantit l'étanchéité, l'isolation et la valeur de votre patrimoine.
        
En 2026, les normes d'isolation et d'étanchéité se sont renforcées. Nos couvreurs-zingueurs certifiés interviennent pour tout type de travaux : du simple démoussage à la rénovation complète, en passant par la pose de fenêtres de toit et les travaux de zinguerie (gouttières, abergements).`,

        processTitle: "Déroulement de votre chantier toiture",
        processSteps: [
            {
                title: "Diagnostic toiture gratuit",
                description: "Inspection complète : état des tuiles/ardoises, étanchéité, charpente, zinguerie et isolation. Photos par drone si nécessaire.",
                duration: "1h sur place"
            },
            {
                title: "Devis et choix des matériaux",
                description: "Conseils sur les matériaux (terre cuite, ardoise, zinc) adaptés à votre PLU (Plan Local d'Urbanisme) et votre budget.",
                duration: "48h"
            },
            {
                title: "Sécurisation et échafaudage",
                description: "Installation des protections collectives, lignes de vie et échafaudages pour un chantier en toute sécurité.",
                duration: "1 jour"
            },
            {
                title: "Travaux de couverture",
                description: "Dépose de l'ancienne couverture, vérification des liteaux, pose du nouvel écran sous-toiture et des matériaux de couverture.",
                duration: "1-3 semaines"
            },
            {
                title: "Zinguerie et finitions",
                description: "Pose des gouttières, solins, faîtages et abergements de cheminée pour une étanchéité parfaite. Nettoyage du chantier.",
                duration: "2-3 jours"
            }
        ],

        benefitsTitle: "Pourquoi rénover votre toiture ?",
        benefits: [
            {
                title: "Étanchéité parfaite",
                description: "Fini les infiltrations et les dégâts des eaux. Votre maison est saine et protégée.",
                icon: "💧"
            },
            {
                title: "Meilleure isolation",
                description: "30% de la chaleur s'échappe par le toit. Une rénovation améliore votre confort thermique.",
                icon: "thermometer"
            },
            {
                title: "Valorisation immobilière",
                description: "Une toiture neuve est un argument de vente majeur qui rassure les acheteurs.",
                icon: "🏠"
            },
            {
                title: "Esthétique retrouvée",
                description: "Redonnez du cachet à votre maison avec des matériaux neufs et modernes.",
                icon: "✨"
            },
            {
                title: "Longévité accrue",
                description: "Des matériaux de qualité (tuiles, zinc) durent 30 à 50 ans, voire 100 ans pour l'ardoise.",
                icon: "⏳"
            },
            {
                title: "Sécurité",
                description: "Évitez les chutes de tuiles et les risques liés à une charpente fragilisée.",
                icon: "🛡️"
            }
        ],

        priceTableTitle: "Prix couverture et toiture en 2026",
        priceTableNote: "Prix moyens TTC au m², pose et fourniture comprises. Variable selon la complexité du toit.",
        priceTable: [
            {
                option: "Tuiles mécaniques",
                priceRange: "60€ - 100€ / m²",
                details: "Le plus courant. Large choix de couleurs et formes.",
                recommended: true
            },
            {
                option: "Ardoise naturelle",
                priceRange: "100€ - 160€ / m²",
                details: "Esthétique premium, durée de vie exceptionnelle (100 ans).",
                recommended: false
            },
            {
                option: "Zinc (joint debout)",
                priceRange: "120€ - 180€ / m²",
                details: "Moderne, léger, adapté aux faibles pentes.",
                recommended: false
            },
            {
                option: "Bac acier",
                priceRange: "40€ - 70€ / m²",
                details: "Économique, idéal pour annexes ou garages.",
                recommended: false
            },
            {
                option: "Nettoyage / Démoussage",
                priceRange: "15€ - 35€ / m²",
                details: "Entretien indispensable tous les 5-10 ans.",
                recommended: false
            }
        ],

        comparisonTitle: "Comparatif des matériaux de couverture",
        comparisonOptions: ["Tuile TC", "Ardoise", "Zinc"],
        comparisonTable: [
            {
                criteria: "Durée de vie",
                options: {
                    "Tuile TC": "30-50 ans",
                    "Ardoise": "80-100 ans ⭐⭐⭐",
                    "Zinc": "50-80 ans ⭐⭐"
                }
            },
            {
                criteria: "Prix unitaire",
                options: {
                    "Tuile TC": "€€ (Abordable) ⭐3",
                    "Ardoise": "€€€€ (Élevé)",
                    "Zinc": "€€€ (Moyen)"
                }
            },
            {
                criteria: "Entretien",
                options: {
                    "Tuile TC": "Démoussage régulier",
                    "Ardoise": "Très peu (naturel)",
                    "Zinc": "Aucun (patine)"
                }
            },
            {
                criteria: "Pente min.",
                options: {
                    "Tuile TC": "20° à 45°",
                    "Ardoise": "20°",
                    "Zinc": "5° (très faible) ⭐"
                }
            },
            {
                criteria: "Résistance",
                options: {
                    "Tuile TC": "Bonne",
                    "Ardoise": "Excellente (feu/gel)",
                    "Zinc": "Excellente (étanche)"
                }
            }
        ],

        faqTitle: "Questions fréquentes toiture",
        faqs: [
            {
                question: "Quand faut-il refaire sa toiture ?",
                answer: "Signes d'alerte : tuiles cassées ou poreuses, infiltrations, mousses abondantes, lumière visible depuis les combles, affaissement de la charpente. Une toiture a une durée de vie moyenne de 30 à 50 ans selon les matériaux."
            },
            {
                question: "Faut-il une autorisation pour refaire son toit ?",
                answer: "Oui, une déclaration préalable de travaux (DP) en mairie est obligatoire si vous modifiez l'aspect extérieur (changement de couleur ou de matériau). Si vous refaites à l'identique, ce n'est généralement pas nécessaire, mais vérifiez auprès du service urbanisme."
            },
            {
                question: "Combien coûte un démoussage de toiture ?",
                answer: "Comptez entre 15€ et 35€ par m² pour un nettoyage complet avec traitement hydrofuge. Attention aux prix trop bas (<10€/m²) qui cachent souvent l'utilisation de produits agressifs (Javel) qui endommagent les tuiles."
            },
            {
                question: "Peut-on poser des panneaux solaires sur un vieux toit ?",
                answer: "Il est recommandé d'avoir une toiture saine avant de poser des panneaux, car ils sont installés pour 25 ans. Si votre toit doit être rénové dans les 5-10 ans, faites-le AVANT ou PENDANT l'installation solaire."
            },
            {
                question: "L'amiante : que faire si j'ai des plaques fibrociment ?",
                answer: "Si les plaques sont en bon état, vous pouvez les laisser ou les recouvrir (surtoiture). Si vous devez les enlever, l'intervention d'une entreprise certifiée désamiantage est obligatoire pour l'évacuation en déchetterie spécialisée."
            },
            {
                question: "Qu'est-ce qu'un écran sous-toiture ?",
                answer: "C'est une membrane posée entre la charpente et les tuiles. Elle protège des infiltrations de neige poudreuse, de poussière et évacue la condensation. Indispensable pour une toiture durable."
            },
            {
                question: "Intervenez-vous pour les fuites urgentes ?",
                answer: "Oui, nos artisans proposent un service de bâchage d'urgence pour sécuriser votre habitat en cas de fuite ou de sinistre tempête, en attendant la réparation définitive."
            }
        ],

        ctaTitle: "Besoin d'un couvreur fiable ?",
        ctaDescription: "Comparez les devis de couvreurs-zingueurs certifiés de votre région. Garantie décennale incluse."
    },
    "fenetres-menuiserie": {
        slug: "fenetres-menuiserie",
        tagline: "Isolation, sécurité et design : changez votre regard sur l'extérieur",

        introduction: `Vos fenêtres sont responsables de 15% des déperditions thermiques de votre logement. Les remplacer par du double ou triple vitrage performant est l'un des travaux les plus efficaces pour améliorer votre confort thermique et acoustique.
        
En 2026, l'installation de menuiseries performantes par un artisan RGE vous ouvre droit à des aides financières (MaPrimeRénov', CEE). Que vous choisissiez le PVC pour son rapport qualité/prix, l'Aluminium pour sa finesse ou le Bois pour son authenticité, nos partenaires garantissent une pose dans les règles de l'art.`,

        processTitle: "Votre projet menuiserie étape par étape",
        processSteps: [
            {
                title: "Métré technique précis",
                description: "Un technicien expert vient prendre les cotes au millimètre près pour commander vos menuiseries sur-mesure.",
                duration: "1h sur place"
            },
            {
                title: "Fabrication sur-mesure",
                description: "Vos fenêtres sont fabriquées selon vos spécifications (dimensions, couleur, vitrage). Délais variables selon le matériau.",
                duration: "4-8 semaines"
            },
            {
                title: "Protection du chantier",
                description: "Le jour J, nous protégeons soigneusement vos sols et votre mobilier. La zone d'intervention est sécurisée.",
                duration: "15 min"
            },
            {
                title: "Dépose et installation",
                description: "Dépose de l'ancien bâti (rénovation ou dépose totale), pose de la nouvelle fenêtre, réglages et étanchéité.",
                duration: "1/2 journée / fenêtre"
            },
            {
                title: "Finitions et nettoyage",
                description: "Pose des habillages intérieurs/extérieurs, joints de finition. Nettoyage complet et évacuation des anciennes menuiseries.",
                duration: "1h"
            }
        ],

        benefitsTitle: "Pourquoi changer vos fenêtres ?",
        benefits: [
            {
                title: "Isolation thermique",
                description: "Supprimez la sensation de paroi froide. Réduisez votre chauffage jusqu'à 15%.",
                icon: "thermometer"
            },
            {
                title: "Silence absolu",
                description: "Un vitrage acoustique divise le bruit extérieur par 4. Retrouvez le calme.",
                icon: "volume-x"
            },
            {
                title: "Sécurité renforcée",
                description: "Retardateurs d'effraction et volets roulants motorisés protègent votre habitat.",
                icon: "shield"
            },
            {
                title: "Esthétique moderne",
                description: "Lignes fines, couleurs variées (bicoloration possible). Valorisez votre façade.",
                icon: "✨"
            },
            {
                title: "Entretien facile",
                description: "PVC et Aluminium se nettoient d'un simple coup d'éponge. Fini les corvées de peinture.",
                icon: "sparkles"
            },
            {
                title: "Valorisation DPE",
                description: "Améliorez la classe énergétique de votre logement pour la vente ou la location.",
                icon: "📈"
            }
        ],

        priceTableTitle: "Prix fenêtres et volets en 2026",
        priceTableNote: "Prix moyens TTC, pose et fourniture comprises. Pour des dimensions standard (120x130cm).",
        priceTable: [
            {
                option: "Fenêtre PVC (Double vitrage)",
                priceRange: "400€ - 600€",
                details: "Le meilleur rapport performance/prix. Isolant et économique.",
                recommended: true
            },
            {
                option: "Fenêtre Aluminium",
                priceRange: "600€ - 900€",
                details: "Finesse des profils, clarté maximale, grand choix de couleurs.",
                recommended: false
            },
            {
                option: "Fenêtre Bois",
                priceRange: "700€ - 1000€",
                details: "Authenticité, chaleur et performance thermique naturelle.",
                recommended: false
            },
            {
                option: "Baie vitrée Alu (215x240)",
                priceRange: "1500€ - 2500€",
                details: "Lumière et ouverture sur l'extérieur. Indispensable au salon.",
                recommended: false
            },
            {
                option: "Volet Roulant Solaire",
                priceRange: "400€ - 700€",
                details: "Installation sans fil, motorisation autonome. Idéal rénovation.",
                recommended: true
            }
        ],

        comparisonTitle: "Quel matériau choisir ?",
        comparisonOptions: ["PVC", "Aluminium", "Bois"],
        comparisonTable: [
            {
                criteria: "Prix",
                options: {
                    "PVC": "€ (Éco) ⭐⭐⭐",
                    "Aluminium": "€€ (Moyen)",
                    "Bois": "€€€ (Premium)"
                }
            },
            {
                criteria: "Isolation thermique",
                options: {
                    "PVC": "Excellente ⭐⭐⭐",
                    "Aluminium": "Bonne (Rupture pont th.)",
                    "Bois": "Excellente"
                }
            },
            {
                criteria: "Esthétique",
                options: {
                    "PVC": "Classique (Blancs épais)",
                    "Aluminium": "Moderne et Fin ⭐⭐⭐",
                    "Bois": "Chaleureux et Noble"
                }
            },
            {
                criteria: "Entretien",
                options: {
                    "PVC": "Très facile ⭐⭐⭐",
                    "Aluminium": "Très facile ⭐⭐⭐",
                    "Bois": "Régulier (Lasure/Peinture)"
                }
            },
            {
                criteria: "Grandes dimensions",
                options: {
                    "PVC": "Limité (Renforts néc.)",
                    "Aluminium": "Idéal (Rigide) ⭐⭐⭐",
                    "Bois": "Bon"
                }
            }
        ],

        faqTitle: "Questions fréquentes fenêtres",
        faqs: [
            {
                question: "Double ou triple vitrage ?",
                answer: "Le double vitrage suffit pour la majorité des climats en France. Le triple vitrage est recommandé pour les façades exposées au nord dans les régions très froides, ou pour les maisons passives."
            },
            {
                question: "Rénovation ou dépose totale ?",
                answer: "La 'pose en rénovation' conserve le cadre existant (plus rapide, moins de dégâts). La 'dépose totale' enlève tout (meilleure isolation, plus de lumière), mais nécessite des reprises de maçonnerie/peinture."
            },
            {
                question: "Quelle TVA pour changer ses fenêtres ?",
                answer: "TVA à 5,5% si vous passez par un artisan RGE et que le logement a plus de 2 ans. Sinon TVA 10% ou 20%."
            },
            {
                question: "Les aides MaPrimeRénov' en 2026 ?",
                answer: "Oui, le remplacement de fenêtres est éligible (forfait par fenêtre) à condition de réaliser un geste d'isolation supplémentaire (chauffage ou isolation murs/toit) ou de faire une rénovation globale."
            },
            {
                question: "Aluminium ou PVC ?",
                answer: "PVC = isolation et prix. Alu = lumière, design et couleurs. Souvent, on mixe : PVC pour les chambres/cuisine, Alu pour les grandes baies du salon."
            },
            {
                question: "Combien de temps pour installer une fenêtre ?",
                answer: "Comptez environ une demi-journée par fenêtre pour une pose soignée. Pour une maison complète (10 fenêtres), prévoyez 3 à 5 jours de travaux."
            },
            {
                question: "Qu'est-ce que le coeff Uw ?",
                answer: "C'est la performance thermique de la fenêtre. Plus il est bas, plus elle isole. Visez un Uw ≤ 1.3 W/m².K pour une bonne performance."
            }
        ],

        ctaTitle: "Changez vos fenêtres au meilleur prix",
        ctaDescription: "Comparez 3 devis d'artisans menuisiers RGE de votre secteur. Qualibat et Garantie Décennale vérifiés."
    },
    "plomberie-sanitaire": {
        slug: "plomberie-sanitaire",
        tagline: "Dépannage d'urgence 24/7 et rénovation salle de bain : réactivité et qualité",

        introduction: `La plomberie couvre deux besoins essentiels : le dépannage d'urgence (fuite d'eau, canalisation bouchée, chauffe-eau en panne) qui exige une réactivité immédiate, et les travaux de rénovation (création de salle de bain, installation de cuisine) qui demandent expertise et conseil.
        
En 2026, nos artisans plombiers partenaires s'engagent sur des tarifs transparents et des interventions rapides. Qu'il s'agisse de stopper un dégât des eaux ou de concevoir la salle de bain de vos rêves, vous bénéficiez du savoir-faire de professionnels qualifiés et assurés.`,

        processTitle: "Comment se déroule une intervention ?",
        processSteps: [
            {
                title: "Prise de contact rapide",
                description: "Pour les urgences, nos artisans vous répondent 24/7. Pour les projets, nous convenons d'un rendez-vous sous 24h.",
                duration: "Immédiat"
            },
            {
                title: "Diagnostic sur place",
                description: "Le plombier identifie l'origine précise de la fuite ou de la panne, ou étudie la faisabilité de votre projet de rénovation.",
                duration: "30 min - 1h"
            },
            {
                title: "Devis immédiat et transparent",
                description: "Avant toute intervention, un devis clair est établi. Pas de mauvaise surprise sur le prix final.",
                duration: "Sur place"
            },
            {
                title: "Intervention et réparation",
                description: "Réalisation des travaux avec des matériaux professionnels (cuivre, multicouche, marques reconnues) et respect des normes.",
                duration: "Variable"
            },
            {
                title: "Contrôle et nettoyage",
                description: "Vérification de l'étanchéité, mise en eau et nettoyage de la zone de travail avant le départ.",
                duration: "30 min"
            }
        ],

        benefitsTitle: "Pourquoi nous faire confiance ?",
        benefits: [
            {
                title: "Intervention < 2h",
                description: "Pour les urgences fuites et débouchages, nos partenaires interviennent en priorité.",
                icon: "⚡"
            },
            {
                title: "Tarifs transparents",
                description: "Fini les arnaques. Les prix sont annoncés avant travaux et respectent les grilles tarifaires.",
                icon: "💰"
            },
            {
                title: "Matériel Pro",
                description: "Nous installons des marques reconnues pour leur fiabilité (Grohe, Geberit, Atlantic, Thermor).",
                icon: "🔧"
            },
            {
                title: "Garantie Décennale",
                description: "Vos installations (douche, chauffe-eau, réseaux) sont couvertes par l'assurance de l'artisan.",
                icon: "🛡️"
            },
            {
                title: "Agrément Assurance",
                description: "Nos devis détaillés facilitent vos démarches de remboursement en cas de sinistre.",
                icon: "📝"
            },
            {
                title: "Polyvalence",
                description: "Un seul interlocuteur pour le dépannage, l'entretien annuel et vos projets de rénovation.",
                icon: "🛠️"
            }
        ],

        priceTableTitle: "Tarifs plomberie 2026 (Moyens constatés)",
        priceTableNote: "Prix TTC hors pièces onéreuses. Majorations possibles soirs et weekends (50% à 100%).",
        priceTable: [
            {
                option: "Recherche de fuite",
                priceRange: "100€ - 250€",
                details: "Inclus déplacement et diagnostic (souvent remboursé par assurance).",
                recommended: true
            },
            {
                option: "Débouchage canalisation",
                priceRange: "90€ - 150€",
                details: "Débouchage manuel ou furet électrique. Curage haute pression sur devis.",
                recommended: false
            },
            {
                option: "Remplacement Chauffe-eau",
                priceRange: "800€ - 1500€",
                details: "Fourniture et pose d'un ballon 150-200L (Atlantic/Thermor).",
                recommended: false
            },
            {
                option: "Remplacement Robinetterie",
                priceRange: "120€ - 250€",
                details: "Fourniture et pose d'un mitigeur évier ou lavabo standard.",
                recommended: false
            },
            {
                option: "Rénovation SDB complète",
                priceRange: "3 000€ - 8 000€",
                details: "Douche italienne, carrelage, meuble vasque (hors fournitures luxe).",
                recommended: false
            }
        ],

        comparisonTitle: "Urgence vs Rénovation",
        comparisonOptions: ["Dépannage Urgence", "Rénovation Programmée"],
        comparisonTable: [
            {
                criteria: "Délai intervention",
                options: {
                    "Dépannage Urgence": "Dans l'heure / < 4h ⚡",
                    "Rénovation Programmée": "2 à 4 semaines"
                }
            },
            {
                criteria: "Tarification",
                options: {
                    "Dépannage Urgence": "Forfait déplacement + MO",
                    "Rénovation Programmée": "Devis global forfaitaire"
                }
            },
            {
                criteria: "Majoration",
                options: {
                    "Dépannage Urgence": "Oui (Soir/WE) ⚠️",
                    "Rénovation Programmée": "Non"
                }
            },
            {
                criteria: "Objectif",
                options: {
                    "Dépannage Urgence": "Réparation provisoire ou définitive",
                    "Rénovation Programmée": "Amélioration durable & Esthétique"
                }
            },
            {
                criteria: "Prise en charge",
                options: {
                    "Dépannage Urgence": "Possible (Assurance Habitation)",
                    "Rénovation Programmée": "A la charge du propriétaire"
                }
            }
        ],

        faqTitle: "Questions fréquentes plomberie",
        faqs: [
            {
                question: "Quels sont les tarifs de nuit ou weekend ?",
                answer: "En dehors des horaires classiques (8h-18h), les tarifs de main d'œuvre et déplacement sont généralement majorés de 50% à 100%. Demandez toujours le prix avant le déplacement."
            },
            {
                question: "Mon assurance couvre-t-elle la recherche de fuite ?",
                answer: "Oui, la plupart des contrats Multirisque Habitation (MRH) couvrent les frais de recherche de fuite destructive ou non. Contactez votre assureur dès la constatation du dégât des eaux."
            },
            {
                question: "Comment lutter contre le calcaire ?",
                answer: "Si votre eau est très dure (TH > 25°f), l'installation d'un adoucisseur d'eau est recommandée pour protéger vos appareils électroménagers, votre chauffe-eau et votre robinetterie, et pour le confort de votre peau."
            },
            {
                question: "Quand faut-il faire détartrer son chauffe-eau ?",
                answer: "Il est conseillé de faire vérifier et détartrer son chauffe-eau électrique tous les 2 à 3 ans (surtout en zone calcaire) pour maintenir son rendement et éviter la surconsommation électrique."
            },
            {
                question: "Que faire en cas de fuite d'eau importante ?",
                answer: "1. Coupez l'arrivée d'eau générale (souvent avant le compteur). 2. Coupez l'électricité si l'eau est proche de prises. 3. Épongez pour limiter les dégâts. 4. Appelez un plombier pour le dépannage."
            },
            {
                question: "Réparez-vous les sanibroyeurs ?",
                answer: "Oui, nos plombiers interviennent sur les WC classiques et les broyeurs. Attention, ne jetez jamais de lingettes ou produits hygiéniques dans un sanibroyeur, c'est la cause n°1 des pannes."
            },
            {
                question: "Faites-vous la recherche de fuite non destructive ?",
                answer: "Oui, nos partenaires sont équipés de caméras thermiques, gaz traceur ou écoute électro-acoustique pour localiser une fuite encastrée sans tout casser."
            }
        ],

        ctaTitle: "Urgence ou projet plomberie ?",
        ctaDescription: "Trouvez un plombier disponible immédiatement ou obtenez 3 devis pour votre rénovation de salle de bain."
    },
    "climatisation-reversible": {
        slug: "climatisation-reversible",
        tagline: "Fraîcheur l'été, chaleur l'hiver : le confort 4 saisons économique",

        introduction: `La climatisation réversible (ou pompe à chaleur Air/Air) est la solution idéale pour maintenir une température agréable toute l'année. En été, elle rafraîchit votre logement ; en hiver, elle le chauffe en consommant jusqu'à 3 fois moins d'énergie qu'un radiateur électrique.

En 2026, avec les épisodes de canicule de plus en plus fréquents, s'équiper devient une nécessité pour le confort et la santé (surtout pour les personnes fragiles). Nos frigoristes qualifiés vous installent des systèmes silencieux, design et pilotables à distance.`,

        processTitle: "Installation de votre climatisation",
        processSteps: [
            {
                title: "Étude de dimensionnement",
                description: "Calcul du volume à traiter et des apports calorifiques (fenêtres, isolation) pour choisir la bonne puissance (kW).",
                duration: "1h sur place"
            },
            {
                title: "Choix de l'emplacement",
                description: "Validation de la position des unités intérieures (flux d'air, esthétique) et du groupe extérieur (bruit, voisinage).",
                duration: "30 min"
            },
            {
                title: "Installation technique",
                description: "Perçage des murs, passage des liaisons frigorifiques et électriques, fixation des unités.",
                duration: "1 jour (Mono) à 3 jours (Multi)"
            },
            {
                title: "Mise en service",
                description: "Tirage au vide, vérification de l'étanchéité, charge en gaz (si besoin) et tests de fonctionnement.",
                duration: "2-3h"
            },
            {
                title: "Explication fonctionnement",
                description: "Démonstration de la télécommande/appli wifi et conseils d'entretien des filtres.",
                duration: "30 min"
            }
        ],

        benefitsTitle: "Les atouts de la clim réversible",
        benefits: [
            {
                title: "2-en-1 Économique",
                description: "Un seul appareil pour chauffer et climatiser. Le mode chauffage est très économique (COP > 3).",
                icon: "💰"
            },
            {
                title: "Confort immédiat",
                description: "La température baisse ou monte en quelques minutes seulement. Idéal pour les retours de vacances.",
                icon: "⚡"
            },
            {
                title: "Qualité de l'air",
                description: "Filtration des poussières, pollens et bactéries. L'air intérieur est assaini et déshumidifié.",
                icon: "wind"
            },
            {
                title: "Pilotage à distance",
                description: "Activez la clim 15 min avant de rentrer chez vous via votre smartphone.",
                icon: "smartphone"
            },
            {
                title: "Silence",
                description: "Les modèles modernes sont quasi inaudibles en mode 'nuit' (19-21 dB).",
                icon: "volume-x"
            },
            {
                title: "Installation rapide",
                description: "Peu de gros travaux par rapport à un chauffage central. Idéal en rénovation.",
                icon: "tools"
            }
        ],

        priceTableTitle: "Prix climatisation réversible 2026",
        priceTableNote: "Prix TTC posé (TVA 10% ou 20%). Variable selon la complexité et la marque (Daikin, Mitsubishi...).",
        priceTable: [
            {
                option: "Mono-split (1 pièce)",
                priceRange: "1 500€ - 2 500€",
                details: "Idéal pour un salon ou une chambre parentale (20-35m²).",
                recommended: true
            },
            {
                option: "Bi-split (2 pièces)",
                priceRange: "3 000€ - 4 500€",
                details: "Un groupe extérieur pour deux unités intérieures.",
                recommended: false
            },
            {
                option: "Tri-split (3 pièces)",
                priceRange: "4 500€ - 6 500€",
                details: "Pour climatiser un étage complet ou un petit appartement.",
                recommended: false
            },
            {
                option: "Gainable (Toute la maison)",
                priceRange: "8 000€ - 12 000€",
                details: "Invisible (dans les combles). Diffusion par grilles discrètes. Le top du confort.",
                recommended: false
            }
        ],

        comparisonTitle: "Quel type d'unité choisir ?",
        comparisonOptions: ["Murale", "Console", "Gainable"],
        comparisonTable: [
            {
                criteria: "Esthétique",
                options: {
                    "Murale": "Visible (en haut du mur)",
                    "Console": "Comme un radiateur",
                    "Gainable": "Invisible (juste des grilles) ⭐⭐⭐"
                }
            },
            {
                criteria: "Prix",
                options: {
                    "Murale": "€ (Le moins cher) ⭐⭐⭐",
                    "Console": "€€ (Moyen)",
                    "Gainable": "€€€ (Premium)"
                }
            },
            {
                criteria: "Installation",
                options: {
                    "Murale": "Simple et rapide",
                    "Console": "Simple",
                    "Gainable": "Complexe (nécessite combles/faux-plafond)"
                }
            },
            {
                criteria: "Silence",
                options: {
                    "Murale": "Très bon",
                    "Console": "Bon",
                    "Gainable": "Excellent (moteur éloigné) ⭐⭐⭐"
                }
            }
        ],

        faqTitle: "Questions fréquentes climatisation",
        faqs: [
            {
                question: "Une clim consomme-t-elle beaucoup d'électricité ?",
                answer: "En mode froid, elle coûte environ 1€ par jour de canicule pour 30m². En mode chaud (hiver), elle est 3 fois plus économique qu'un radiateur électrique grâce à la pompe à chaleur. Sur l'année, le bilan est souvent positif."
            },
            {
                question: "Le groupe extérieur est-il bruyant ?",
                answer: "Les modèles de grandes marques (Daikin, Mitsubishi, Atlantic) sont très silencieux (45-50 dB), équivalent à un lave-vaisselle récent. Cependant, il faut respecter les règles de distance avec le voisinage."
            },
            {
                question: "Faut-il une autorisation en copropriété ?",
                answer: "OUI. L'installation du groupe extérieur modifie l'aspect de la façade ou est posée sur une partie commune (balcon). Il faut obligatoirement l'accord de l'assemblée générale (AG) des copropriétaires."
            },
            {
                question: "Quel entretien est nécessaire ?",
                answer: "L'utilisateur doit nettoyer les filtres (aspirateur/eau) 2 à 4 fois par an. Un contrôle d'étanchéité par un professionnel est obligatoire tous les ans pour les installations contenant plus de 2kg de fluide frigorigène."
            },
            {
                question: "La clim réversible est-elle éligible aux aides ?",
                answer: "Seules les primes CEE (Certificats d'Économies d'Énergie) sont accessibles pour les PAC Air/Air. MaPrimeRénov' ne finance pas ce type d'équipement (considéré comme du confort d'été), sauf dans le cadre d'une rénovation globale."
            }
        ],

        ctaTitle: "Restez au frais cet été",
        ctaDescription: "Installation rapide par des frigoristes qualifiés. Demandez votre devis gratuit dès maintenant."
    },

    "borne-recharge": {
        slug: "borne-recharge",
        tagline: "Rechargez votre voiture électrique 3x plus vite à domicile",

        introduction: `Avec l'essor des véhicules électriques, la recharge à domicile devient un enjeu majeur. Fini la dépendance aux bornes publiques ! Installer une borne de recharge (Wallbox) chez soi, c'est l'assurance de partir chaque matin avec une batterie pleine ("le plein" pour quelques euros).

L'installation doit être réalisée par un électricien qualifié IRVE (Infrastructure de Recharge de Véhicule Électrique) pour garantir la sécurité, respecter les normes et bénéficier des aides de l'État (Crédit d'impôt).`,

        processTitle: "Installation de votre borne IRVE",
        processSteps: [
            {
                title: "Vérification électrique",
                description: "Contrôle de votre tableau électrique et de la puissance disponible (Mise à la terre, abonnement Linky).",
                duration: "30 min"
            },
            {
                title: "Installation de la ligne dédiée",
                description: "Tirage d'un câble spécifique de grosse section depuis le tableau jusqu'à l'emplacement de la borne (garage/parking).",
                duration: "2-4h"
            },
            {
                title: "Pose des protections",
                description: "Ajout d'un disjoncteur différentiel adapté (Type A ou B) et d'un disjoncteur courbe C dédiés à la borne.",
                duration: "1h"
            },
            {
                title: "Fixation et raccordement",
                description: "Pose murale ou sur pied de la borne. Raccordement et paramétrage (délestage, heures creuses).",
                duration: "1-2h"
            },
            {
                title: "Remise du certificat",
                description: "Essais de charge et remise du certificat de conformité IRVE/Qualifelec (obligatoire pour assurances).",
                duration: "30 min"
            }
        ],

        benefitsTitle: "Pourquoi installer une Wallbox ?",
        benefits: [
            {
                title: "Charge 3x à 7x plus rapide",
                description: "Récupérez 40 à 100km d'autonomie par heure de charge (contre 10-15km sur prise standard).",
                icon: "zap"
            },
            {
                title: "Sécurité maximale",
                description: "Ligne dédiée et protections spécifiques. Aucun risque de surchauffe ou d'incendie sur votre installation domestique.",
                icon: "shield"
            },
            {
                title: "Économies Heures Creuses",
                description: "Programmez la charge pour qu'elle se lance uniquement quand l'électricité est la moins chère.",
                icon: "clock"
            },
            {
                title: "Gestion dynamique (Délestage)",
                description: "La borne adapte sa puissance en temps réel pour ne jamais faire sauter votre compteur, même si le four est allumé.",
                icon: "activity"
            },
            {
                title: "Crédit d'impôt 500€",
                description: "Obtenez un crédit d'impôt de 500€ par système de charge (pilotable) installé par un pro IRVE.",
                icon: "gift"
            },
            {
                title: "Valorisation de la maison",
                description: "Un équipement de plus en plus recherché par les futurs acquéreurs.",
                icon: "home"
            }
        ],

        priceTableTitle: "Prix installation borne recharge 2026",
        priceTableNote: "Prix TTC posé (TVA 5.5% si logement > 2 ans). Déduction faite du crédit d'impôt de 500€.",
        priceTable: [
            {
                option: "Prise Renforcée (3,7 kW)",
                priceRange: "400€ - 600€",
                details: "Alternative économique (Green'up). Charge lente mais sécurisée. Pour petits rouleurs.",
                recommended: false
            },
            {
                option: "Borne 7 kW (Monophasé)",
                priceRange: "900€ - 1 500€",
                details: "Le standard pour la maison. Charge complète en une nuit (6-8h).",
                recommended: true
            },
            {
                option: "Borne 22 kW (Triphasé)",
                priceRange: "1 600€ - 2 500€",
                details: "Charge ultra-rapide. Nécessite une installation électrique en triphasé (rare chez les particuliers).",
                recommended: false
            },
            {
                option: "Borne en Copropriété",
                priceRange: "Devis sur mesure",
                details: "Installation complexe avec comptage individuel. Droit à la prise garanti par la loi.",
                recommended: false
            }
        ],

        comparisonTitle: "Prise standard vs Wallbox",
        comparisonOptions: ["Prise Domestique", "Prise Renforcée", "Borne Wallbox"],
        comparisonTable: [
            {
                criteria: "Puissance",
                options: {
                    "Prise Domestique": "2.3 kW (10A) ⚠️",
                    "Prise Renforcée": "3.7 kW (16A)",
                    "Borne Wallbox": "7.4 kW (32A) ⭐⭐⭐"
                }
            },
            {
                criteria: "Temps plein (50kWh)",
                options: {
                    "Prise Domestique": "20h - 25h",
                    "Prise Renforcée": "13h - 15h",
                    "Borne Wallbox": "6h - 8h (Une nuit) ⭐⭐⭐"
                }
            },
            {
                criteria: "Sécurité",
                options: {
                    "Prise Domestique": "Risque surchauffe",
                    "Prise Renforcée": "Sécurisée",
                    "Borne Wallbox": "Optimale (Comm. véhicule)"
                }
            },
            {
                criteria: "Fonctions",
                options: {
                    "Prise Domestique": "Aucune",
                    "Prise Renforcée": "Détection",
                    "Borne Wallbox": "Programmation, Appli, Délestage"
                }
            },
            {
                criteria: "Prix install.",
                options: {
                    "Prise Domestique": "0€",
                    "Prise Renforcée": "500€",
                    "Borne Wallbox": "1500€ (avant aides)"
                }
            }
        ],

        faqTitle: "Questions fréquentes recharge électrique",
        faqs: [
            {
                question: "Dois-je changer mon abonnement EDF ?",
                answer: "C'est souvent inutile grâce à la fonction de 'délestage dynamique' de la borne. Elle réduit sa puissance si vous consommez trop ailleurs. Un abonnement 9kVA est généralement suffisant pour une borne 7kW."
            },
            {
                question: "Quelle est la différence entre 7kW et 22kW ?",
                answer: "7kW est une installation monophasée (standard des maisons). 22kW nécessite du triphasé (plus cher d'abonnement et d'installation). De plus, beaucoup de voitures chargent au max à 11kW en AC, rendant le 22kW inutile à la maison."
            },
            {
                question: "J'habite en copropriété, est-ce possible ?",
                answer: "Oui, la loi consacre le 'Droit à la Prise'. Vous pouvez demander l'installation à vos frais. Le syndic ne peut s'y opposer sans motif sérieux et légitime (qu'il doit saisir au tribunal). Il existe aussi des solutions collectives."
            },
            {
                question: "Puis-je charger ma voiture avec mes panneaux solaires ?",
                answer: "Oui ! Certaines bornes 'intelligentes' peuvent être couplées à votre onduleur solaire pour charger votre voiture uniquement avec le surplus d'énergie solaire produit. C'est la recharge 100% gratuite et verte."
            },
            {
                question: "Qu'est-ce que la qualification IRVE ?",
                answer: "IRVE (Infrastructure de Recharge Véhicule Électrique) est une certification obligatoire pour les électriciens installant des bornes > 3,7kW. Sans elle, pas de crédit d'impôt et risque de non-couverture par votre assurance en cas d'incendie."
            }
        ],

        ctaTitle: "Passez à la vitesse supérieure",
        ctaDescription: "Obtenez 3 devis d'électriciens certifiés IRVE près de chez vous. Installation sécurisée et audit électrique compris."
    }
};

export function getServiceContent(serviceSlug: string): ServiceContent | undefined {
    return serviceContent[serviceSlug];
}

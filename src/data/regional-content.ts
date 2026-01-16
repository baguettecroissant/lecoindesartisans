// Regional content variations for SEO-unique content per city/region
// This avoids duplicate content penalties from Google

export interface RegionalContent {
    intro: string;
    specialties: string[];
    climate_note?: string;
    local_tip?: string;
    price_range?: {
        min: number;
        max: number;
        unit: string;
        note?: string;
    };
}

export interface ServiceRegionalContent {
    [serviceSlug: string]: {
        [region: string]: RegionalContent;
        default: RegionalContent;
    };
}

// Regional content mapped by service and region
export const regionalContent: ServiceRegionalContent = {
    "panneaux-solaires": {
        "Île-de-France": {
            intro: "En région parisienne, l'ensoleillement moyen de 1 650 heures par an permet une excellente rentabilité solaire. Nos installateurs certifiés QualiPV maîtrisent les contraintes des copropriétés et toitures parisiennes.",
            specialties: ["Toitures plates urbaines", "Copropriétés", "Surimposition ardoise"],
            climate_note: "Avec 4,2 kWh/m²/jour en moyenne, votre installation peut couvrir jusqu'à 50% de vos besoins.",
            local_tip: "Les aides de la Région Île-de-France s'ajoutent aux primes nationales.",
            price_range: {
                min: 8500,
                max: 16000,
                unit: "installation 3-6 kWc",
                note: "Prix légèrement supérieurs en zone dense (contraintes accès, copropriétés)"
            }
        },
        "PACA": {
            intro: "Avec plus de 2 800 heures d'ensoleillement annuel, la région PACA est idéale pour le photovoltaïque. Nos artisans locaux optimisent l'orientation de vos panneaux face au soleil méditerranéen.",
            specialties: ["Tuiles canal", "Intégration au bâti", "Résistance mistral"],
            climate_note: "Le Sud bénéficie de 5,2 kWh/m²/jour, maximisant votre autoconsommation.",
            local_tip: "Les toitures en tuiles romanes nécessitent des systèmes d'intégration spécifiques.",
            price_range: {
                min: 7500,
                max: 14500,
                unit: "installation 3-6 kWc",
                note: "Rentabilité excellente grâce à l'ensoleillement record"
            }
        },
        "Auvergne-Rhône-Alpes": {
            intro: "Entre Lyon et les Alpes, l'ensoleillement varie mais reste favorable au solaire. Nos installateurs connaissent les spécificités alpines et les contraintes de neige en altitude.",
            specialties: ["Résistance neige", "Pentes fortes", "Chalets et rénovation"],
            climate_note: "L'altitude améliore le rendement des panneaux grâce à l'air plus froid.",
            local_tip: "Pensez au solaire combiné avec une pompe à chaleur pour l'autonomie énergétique."
        },
        "Occitanie": {
            intro: "L'Occitanie, de Toulouse à Montpellier, profite d'un ensoleillement exceptionnel. Nos installateurs régionaux sont experts des toitures typiques du Sud-Ouest et du Languedoc.",
            specialties: ["Tuiles méridionales", "Grandes toitures", "Autoconsommation agricole"],
            climate_note: "Avec près de 2 500 heures de soleil, le retour sur investissement est rapide.",
            local_tip: "La Région Occitanie propose des accompagnements spécifiques pour les projets solaires."
        },
        "default": {
            intro: "Nos installateurs certifiés RGE interviennent dans votre ville pour vous proposer une solution photovoltaïque adaptée à votre toiture et vos besoins énergétiques.",
            specialties: ["Surimposition", "Intégration au bâti", "Autoconsommation"],
            climate_note: "La France bénéficie d'un ensoleillement suffisant pour rentabiliser une installation en 8-12 ans.",
            local_tip: "Vérifiez les aides locales qui peuvent s'ajouter à MaPrimeRénov'.",
            price_range: {
                min: 7000,
                max: 15000,
                unit: "installation 3-6 kWc",
                note: "Prix moyens constatés en 2026, avant aides"
            }
        }
    },
    "pompe-a-chaleur": {
        "Île-de-France": {
            intro: "En Île-de-France, les hivers modérés (moyenne 5°C) sont parfaits pour les PAC air-eau. Nos artisans parisiens gèrent les contraintes acoustiques imposées en zone urbaine dense.",
            specialties: ["PAC split silencieuses", "Copropriétés", "Remplacement fioul"],
            climate_note: "Le climat francilien offre un COP moyen de 4, soit 4 kWh produits pour 1 consommé.",
            local_tip: "Paris et petite couronne imposent des normes acoustiques strictes.",
            price_range: {
                min: 10000,
                max: 18000,
                unit: "PAC air-eau 8-12 kW",
                note: "Surcoût de 10-15% en zone dense (contraintes pose)"
            }
        },
        "PACA": {
            intro: "Sous le soleil méditerranéen, les PAC réversibles offrent chauffage ET climatisation. Nos installateurs locaux dimensionnent votre système pour les étés chauds.",
            specialties: ["PAC réversibles", "Climatisation", "Chauffage piscine"],
            climate_note: "Le besoin en chauffage est réduit, maximisant les économies.",
            local_tip: "Optez pour une PAC air-air réversible pour rafraîchir en été.",
            price_range: {
                min: 8000,
                max: 15000,
                unit: "PAC réversible 6-10 kW",
                note: "Investissement rentabilisé par la clim en été"
            }
        },
        "Hauts-de-France": {
            intro: "Dans les Hauts-de-France, les hivers plus rigoureux nécessitent un dimensionnement adapté. Nos artisans lillois et amiénois maîtrisent les installations haute performance.",
            specialties: ["PAC air-eau haute temp.", "Plancher chauffant", "Relève chaudière"],
            climate_note: "Les PAC haute température garantissent le confort même par -15°C.",
            local_tip: "Un appoint électrique peut être prévu pour les jours les plus froids."
        },
        "default": {
            intro: "Nos installateurs certifiés RGE vous accompagnent dans le choix et l'installation de votre pompe à chaleur. Air-eau ou air-air, nous trouvons la solution adaptée à votre logement.",
            specialties: ["PAC air-eau", "PAC air-air", "Remplacement chaudière"],
            climate_note: "Une PAC permet de diviser par 3 votre facture de chauffage.",
            local_tip: "Profitez des aides MaPrimeRénov' et CEE pour financer votre projet.",
            price_range: {
                min: 8000,
                max: 16000,
                unit: "PAC air-eau 8-12 kW",
                note: "Prix moyens 2026, avant déduction des aides"
            }
        }
    },
    "isolation-exterieure": {
        "Île-de-France": {
            intro: "En région parisienne, l'ITE permet de rénover les façades tout en isolant. Nos artisans connaissent les exigences des ABF pour les zones protégées.",
            specialties: ["Ravalement + isolation", "Immeubles haussmanniens", "Bardage haut de gamme"],
            climate_note: "L'isolation extérieure supprime les ponts thermiques des murs épais parisiens.",
            local_tip: "Vérifiez si votre commune impose une déclaration préalable."
        },
        "Normandie": {
            intro: "Le climat océanique normand rend l'isolation extérieure essentielle. Nos artisans utilisent des matériaux résistants à l'humidité et aux embruns.",
            specialties: ["Bardage bois", "Résistance humidité", "Maisons en pierre"],
            climate_note: "L'ITE protège vos murs de l'humidité normande tout en conservant la chaleur.",
            local_tip: "Le bardage bois s'intègre parfaitement au patrimoine local."
        },
        "default": {
            intro: "L'isolation thermique par l'extérieur (ITE) est la solution la plus efficace pour supprimer les ponts thermiques. Nos artisans RGE vous garantissent une mise en œuvre conforme.",
            specialties: ["Polystyrène expansé", "Laine de roche", "Bardage ventilé"],
            climate_note: "L'ITE peut faire gagner jusqu'à 2 classes sur votre DPE.",
            local_tip: "L'ITE est éligible aux aides MaPrimeRénov' et CEE."
        }
    },
    "fenetres-menuiserie": {
        "Grand Est": {
            intro: "Les hivers alsaciens et lorrains exigent des menuiseries haute performance. Nos artisans locaux vous proposent du triple vitrage et des certifications NF adaptées au climat continental.",
            specialties: ["Triple vitrage", "Uw ≤ 1.0", "Volets roulants électriques"],
            climate_note: "Le triple vitrage est recommandé pour les hivers rigoureux de l'Est.",
            local_tip: "Les maisons à colombages nécessitent des menuiseries sur-mesure."
        },
        "PACA": {
            intro: "Au soleil du Sud, vos fenêtres doivent aussi protéger de la chaleur. Nos menuisiers installent des vitrages à contrôle solaire et volets roulants solaires.",
            specialties: ["Vitrage contrôle solaire", "Volets solaires", "Aluminium thermolaqué"],
            climate_note: "Un vitrage réfléchissant réduit la surchauffe estivale de 30%.",
            local_tip: "L'aluminium résiste mieux au soleil méditerranéen que le PVC."
        },
        "default": {
            intro: "Nos menuisiers certifiés Qualibat installent vos fenêtres PVC, aluminium ou bois. Double ou triple vitrage, nous vous conseillons selon votre région et votre budget.",
            specialties: ["Double vitrage", "PVC et aluminium", "Portes-fenêtres"],
            climate_note: "Des fenêtres performantes réduisent les déperditions de 15%.",
            local_tip: "Le label Origine France Garantie assure une fabrication locale."
        }
    },
    "toiture-couverture": {
        "Bretagne": {
            intro: "Sous la pluie bretonne, votre toiture doit être irréprochable. Nos couvreurs locaux maîtrisent l'ardoise et le zinc, matériaux traditionnels de la région.",
            specialties: ["Ardoise naturelle", "Zinguerie étanche", "Traitement anti-mousse"],
            climate_note: "L'humidité bretonne nécessite un entretien régulier de votre couverture.",
            local_tip: "Le démoussage annuel prolonge la durée de vie de votre toiture."
        },
        "PACA": {
            intro: "Les toitures provençales en tuiles canal demandent un savoir-faire spécifique. Nos couvreurs méditerranéens perpétuent les techniques traditionnelles.",
            specialties: ["Tuiles canal", "Génoises", "Réfection complète"],
            climate_note: "Les tuiles terre cuite résistent parfaitement au soleil et au mistral.",
            local_tip: "La sous-toiture ventilée est essentielle pour éviter la surchauffe."
        },
        "Île-de-France": {
            intro: "À Paris et en Île-de-France, zinc et ardoise dominent les toitures. Nos couvreurs zingueurs interviennent sur tous types de bâtiments, du pavillon à l'immeuble.",
            specialties: ["Zinc joint debout", "Ardoise", "Étanchéité terrasse"],
            climate_note: "Le zinc parisien a une durée de vie de 50 à 80 ans bien entretenu.",
            local_tip: "Les toitures plates nécessitent une étanchéité bitumineuse ou EPDM."
        },
        "default": {
            intro: "Nos couvreurs certifiés Qualibat interviennent pour tous types de toiture : tuiles, ardoises, zinc ou bac acier. Réparation de fuites, rénovation complète ou nettoyage.",
            specialties: ["Réparation fuite", "Rénovation complète", "Démoussage"],
            climate_note: "Une toiture bien entretenue dure 30 à 50 ans.",
            local_tip: "Le diagnostic toiture gratuit permet d'estimer les travaux nécessaires."
        }
    },
    "plomberie-sanitaire": {
        "Île-de-France": {
            intro: "En région parisienne, nos plombiers interviennent en urgence 24h/24. Réseaux anciens, copropriétés, appartements haussmanniens : ils connaissent toutes les configurations.",
            specialties: ["Urgence 24h/24", "Rénovation salle de bain", "Détection de fuites"],
            climate_note: "Les canalisations parisiennes anciennes nécessitent une attention particulière.",
            local_tip: "La détection de fuites par caméra évite de casser les murs."
        },
        "default": {
            intro: "Nos plombiers qualifiés interviennent rapidement pour tous vos besoins : dépannage urgent, installation sanitaire, rénovation de salle de bain ou cuisine.",
            specialties: ["Dépannage urgent", "Installation chauffe-eau", "Rénovation salle de bain"],
            climate_note: "Un entretien annuel du chauffe-eau prolonge sa durée de vie.",
            local_tip: "Demandez plusieurs devis pour comparer les tarifs locaux."
        }
    }
};

// Helper function to get regional content for a service/region combination
export function getRegionalContent(serviceSlug: string, region: string): RegionalContent {
    const serviceContent = regionalContent[serviceSlug];
    if (!serviceContent) {
        return regionalContent["panneaux-solaires"].default; // Fallback
    }

    return serviceContent[region] || serviceContent.default;
}

// Generate unique meta description based on region
export function generateRegionalDescription(
    serviceName: string,
    cityName: string,
    region: string,
    serviceSlug: string
): string {
    const content = getRegionalContent(serviceSlug, region);
    const specialty = content.specialties[0] || "travaux";

    return `${serviceName} à ${cityName} (${region}). ${content.climate_note || ""} Comparez 3 devis gratuits d'artisans certifiés. Spécialités : ${specialty}.`;
}

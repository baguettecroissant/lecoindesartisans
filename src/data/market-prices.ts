export interface PriceTrend {
    label: string;
    price: number;
    unit: string;
    trend: number; // Percentage change vs last year
    history: number[]; // Last 6 months prices
}

export interface BarometerCategory {
    id: string;
    title: string;
    icon: string; // Lucide icon name
    items: PriceTrend[];
}

export const MARKET_DATA: BarometerCategory[] = [
    {
        id: "isolation",
        title: "Isolation Thermique",
        icon: "Layers",
        items: [
            { label: "Isolation Extérieure (ITE) - Polystyrène", price: 165, unit: "€ / m²", trend: 5.2, history: [155, 158, 160, 162, 164, 165] },
            { label: "Isolation Extérieure (ITE) - Laine de Roche", price: 195, unit: "€ / m²", trend: 4.8, history: [185, 188, 190, 192, 194, 195] },
            { label: "Combles Perdus (Soufflage)", price: 35, unit: "€ / m²", trend: 2.1, history: [34, 34, 35, 35, 35, 35] },
            { label: "Combles Aménageables (Rampants)", price: 75, unit: "€ / m²", trend: 3.5, history: [72, 73, 74, 74, 75, 75] },
        ]
    },
    {
        id: "chauffage",
        title: "Chauffage & Énergie",
        icon: "Flame",
        items: [
            { label: "Pompe à Chaleur Air/Eau (Fourniture + Pose)", price: 13500, unit: "€", trend: -2.5, history: [14200, 14000, 13900, 13800, 13600, 13500] },
            { label: "Pompe à Chaleur Air/Air (Mono-split)", price: 2800, unit: "€", trend: -1.2, history: [2900, 2880, 2850, 2850, 2820, 2800] },
            { label: "Chauffe-eau Thermodynamique", price: 3200, unit: "€", trend: 1.5, history: [3100, 3150, 3150, 3180, 3200, 3200] },
        ]
    },
    {
        id: "solaire",
        title: "Solaire Photovoltaïque",
        icon: "Sun",
        items: [
            { label: "Panneaux 3 kWp (Clé en main)", price: 7800, unit: "€", trend: -8.5, history: [8500, 8400, 8200, 8000, 7900, 7800] },
            { label: "Panneaux 6 kWp (Clé en main)", price: 12500, unit: "€", trend: -7.2, history: [13500, 13200, 13000, 12800, 12600, 12500] },
            { label: "Panneaux 9 kWp (Clé en main)", price: 16800, unit: "€", trend: -6.8, history: [18000, 17800, 17500, 17200, 17000, 16800] },
        ]
    },
    {
        id: "menuiserie",
        title: "Menuiseries",
        icon: "AppWindow",
        items: [
            { label: "Fenêtre Double Vitrage PVC (Standard)", price: 550, unit: "€", trend: 3.2, history: [520, 525, 530, 540, 545, 550] },
            { label: "Baie Vitrée Alu 2m", price: 1400, unit: "€", trend: 4.1, history: [1320, 1340, 1360, 1380, 1390, 1400] },
            { label: "Volet Roulant Solaire", price: 650, unit: "€", trend: -1.5, history: [680, 675, 670, 665, 660, 650] },
        ]
    }
];

import { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
    {
        slug: "maprimenov-2026-guide-complet",
        title: "MaPrimeRénov' 2026 : Le Guide Complet des Aides à la Rénovation",
        excerpt: "Découvrez tous les changements de MaPrimeRénov' en 2026, les montants des aides selon vos revenus et comment en bénéficier pour vos travaux de rénovation énergétique.",
        content: `
      <h2>Qu'est-ce que MaPrimeRénov' ?</h2>
      <p>MaPrimeRénov' est la principale aide de l'État pour la rénovation énergétique des logements. En 2026, le dispositif évolue pour encourager encore plus les travaux d'isolation et le remplacement des systèmes de chauffage polluants.</p>
      
      <h2>Les montants selon vos revenus</h2>
      <p>Les ménages sont classés en 4 catégories de revenus :</p>
      <ul>
        <li><strong>MaPrimeRénov' Bleu</strong> (revenus très modestes) : jusqu'à 11 000€ d'aides</li>
        <li><strong>MaPrimeRénov' Jaune</strong> (revenus modestes) : jusqu'à 8 000€</li>
        <li><strong>MaPrimeRénov' Violet</strong> (revenus intermédiaires) : jusqu'à 5 000€</li>
        <li><strong>MaPrimeRénov' Rose</strong> (revenus supérieurs) : jusqu'à 2 000€</li>
      </ul>
      
      <h2>Les travaux éligibles</h2>
      <p>Sont concernés par MaPrimeRénov' :</p>
      <ul>
        <li>Installation de pompe à chaleur</li>
        <li>Panneaux solaires thermiques</li>
        <li>Isolation des murs, toiture et planchers</li>
        <li>Remplacement des fenêtres</li>
        <li>Ventilation mécanique contrôlée (VMC)</li>
      </ul>
      
      <h2>Comment faire votre demande ?</h2>
      <p>La démarche se fait en ligne sur le site officiel. Vous devez d'abord obtenir des devis d'artisans RGE, puis créer votre dossier avec les justificatifs demandés.</p>
    `,
        category: "aides-etat",
        publishedAt: "2026-01-10",
        readingTime: "8 min",
        image: "/images/blog/maprimenov.jpg"
    },
    {
        slug: "choisir-pompe-chaleur-air-eau-air-air",
        title: "Pompe à Chaleur Air/Eau vs Air/Air : Comment Choisir ?",
        excerpt: "Comparatif complet entre les deux types de pompes à chaleur les plus populaires. Performances, coûts, avantages et inconvénients pour faire le bon choix.",
        content: `
      <h2>Comprendre les différences</h2>
      <p>La pompe à chaleur (PAC) est devenue incontournable pour remplacer les chaudières fioul ou gaz. Mais entre Air/Eau et Air/Air, le choix n'est pas toujours évident.</p>
      
      <h2>La PAC Air/Eau</h2>
      <p>Elle capte les calories de l'air extérieur pour chauffer de l'eau qui circule dans vos radiateurs ou plancher chauffant. Ses avantages :</p>
      <ul>
        <li>Compatible avec votre système de chauffage existant</li>
        <li>Produit aussi l'eau chaude sanitaire</li>
        <li>Éligible aux aides maximales</li>
        <li>COP moyen de 3 à 4 (3 à 4 kWh produits pour 1 kWh consommé)</li>
      </ul>
      
      <h2>La PAC Air/Air</h2>
      <p>Elle diffuse directement l'air chaud via des unités murales (splits). Ses avantages :</p>
      <ul>
        <li>Installation plus simple et moins coûteuse</li>
        <li>Réversible : climatisation en été</li>
        <li>Idéale pour les logements sans chauffage central</li>
        <li>Mise en route rapide</li>
      </ul>
      
      <h2>Notre recommandation</h2>
      <p>Si vous avez déjà des radiateurs ou un plancher chauffant, la PAC Air/Eau est le meilleur choix. Pour un appartement ou une maison sans chauffage central, la Air/Air est plus adaptée.</p>
    `,
        category: "guides-travaux",
        publishedAt: "2026-01-05",
        readingTime: "6 min",
        image: "/images/blog/pac-comparatif.jpg"
    },
    {
        slug: "isolation-exterieure-avantages-inconvenients",
        title: "Isolation Extérieure (ITE) : Avantages, Inconvénients et Prix 2026",
        excerpt: "Tout savoir sur l'isolation thermique par l'extérieur : technique, matériaux, coût au m² et retour sur investissement pour votre maison.",
        content: `
      <h2>Pourquoi isoler par l'extérieur ?</h2>
      <p>L'ITE consiste à envelopper votre maison d'un manteau isolant. C'est la technique la plus efficace car elle supprime tous les ponts thermiques.</p>
      
      <h2>Les avantages</h2>
      <ul>
        <li>Aucune perte de surface habitable</li>
        <li>Ravalement de façade inclus</li>
        <li>Suppression des ponts thermiques</li>
        <li>Amélioration de l'inertie thermique</li>
        <li>Travaux réalisés sans quitter votre logement</li>
      </ul>
      
      <h2>Les inconvénients</h2>
      <ul>
        <li>Coût plus élevé que l'isolation intérieure</li>
        <li>Modification de l'aspect extérieur (permis parfois requis)</li>
        <li>Débords de toiture à adapter</li>
      </ul>
      
      <h2>Prix au m² en 2026</h2>
      <p>Comptez entre 120€ et 200€/m² pose comprise, selon le matériau choisi :</p>
      <ul>
        <li>Polystyrène expansé : 120-150€/m²</li>
        <li>Laine de roche : 150-180€/m²</li>
        <li>Fibre de bois : 170-200€/m²</li>
      </ul>
    `,
        category: "guides-travaux",
        publishedAt: "2025-12-28",
        readingTime: "7 min",
        image: "/images/blog/isolation-exterieure.jpg"
    }
];

export function getAllBlogPosts(): BlogPost[] {
    return blogPosts;
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(categorySlug: string): BlogPost[] {
    return blogPosts.filter((post) => post.category === categorySlug);
}

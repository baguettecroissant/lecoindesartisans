---
description: Génère un article SEO parfait pour Le Coin des Artisans avec image, CTAs et maillage interne
---

# Content Factory — Le Coin des Artisans

## Inputs requis
- **Titre** : Titre H1 de l'article
- **Mot-clé** : Mot-clé principal cible
- **Cluster** : Catégorie thématique (Solaire & Photovoltaïque, Chauffage & PAC, Isolation, Toiture, etc.)
- **Intent** : Type de contenu (Guide, Comparatif, Prix, Aide financière, etc.)

## Étapes

### 1. Recherche du projet
// turbo
- Lire `src/data/blog-posts.ts` pour comprendre la structure des articles existants
- Identifier la catégorie (`solaire-photovoltaique`, `chauffage-pac`, `toiture-couverture`, `isolation-fenetres`, `guides-travaux`, `aides-financieres`, etc.)
- Lister les slugs existants pour le maillage interne (grep_search par thème)
- Vérifier les images existantes dans `public/images/blog/`

### 2. Génération de l'image hero
- Générer une image avec `generate_image` : photo professionnelle, réaliste, en rapport avec le sujet
- Copier l'image dans `public/images/blog/{slug}.png`

### 3. Rédaction de l'article
L'article doit respecter ces règles :
- **3000+ mots** minimum
- **HTML inline** dans un template literal TypeScript (backtick)
- **Structure** : Introduction → Sommaire (ancres) → Sections H2/H3 → Conclusion → FAQ (H2 + H3)
- **SEO** : Mot-clé dans H1, premier paragraphe, H2, meta description (excerpt)
- **CTAs** : Minimum 3 blockquotes CTA avec liens vers `/service/...` ou `/#services`
- **Maillage interne** : Minimum 5 liens vers d'autres articles du blog (`/blog/slug`)
- **Tableaux comparatifs** : Au moins 1 tableau HTML stylé avec en-têtes `#1e3a5f`
- **Blockquotes info** : Utiliser les styles bleu (💡), jaune (💰/🏠), rouge (⚠️), vert (📊/✅)
- **FAQ** : Minimum 4 questions en H3 sous un H2 `id="faq"`
- **Ton** : Expert mais accessible, données chiffrées, références 2026

### 4. Insertion dans blog-posts.ts
- Ajouter l'article en **première position** du tableau `blogPosts`
- Remplir tous les champs : `slug`, `title`, `excerpt`, `content`, `category`, `publishedAt` (date du jour), `readingTime`, `image`
- Le slug doit correspondre au mot-clé principal (kebab-case)

### 5. Vérification
// turbo
- Lancer `npx next build` pour vérifier que le build passe
- Vérifier que l'exit code est 0

### 6. Notification
- Notifier l'utilisateur avec un résumé de l'article créé

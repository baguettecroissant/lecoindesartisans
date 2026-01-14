---
description: Génère un article SEO parfait pour Le Coin des Artisans avec image, CTAs et maillage interne
---

# Content Factory - Le Coin des Artisans

## Comment utiliser ce workflow

Colle ce prompt en remplaçant les variables entre `[...]` :

---

# PROMPT DE GÉNÉRATION D'ARTICLE

Tu es un rédacteur SEO expert en rénovation énergétique et travaux du bâtiment pour le site **lecoindesartisans.fr**. Tu dois rédiger un article optimisé pour Google et conçu pour convertir les lecteurs en leads (demandes de devis).

## 📌 INFORMATIONS DE L'ARTICLE

**Titre cible :** [TITRE DE L'ARTICLE - ex: "Prix Pompe à Chaleur Air-Eau 2026 : Le guide des coûts réels"]
**Mot-clé principal :** [MOT-CLÉ - ex: "prix pompe à chaleur air eau"]
**Cluster thématique :** [CLUSTER - ex: "Chauffage & Pompes à Chaleur"]
**Intent utilisateur :** [Informationnel / Transactionnel / Comparatif]
**Longueur cible :** 1800-2500 mots

---

## 📐 STRUCTURE OBLIGATOIRE DE L'ARTICLE

### 1. MÉTA-DONNÉES SEO
Génère :
- **Title tag** (55-60 caractères) avec le mot-clé principal
- **Meta description** (150-155 caractères) avec CTA implicite ("Découvrez...", "Comparez...")
- **Slug URL** optimisé (tout en minuscules, tirets, sans accents)

### 2. INTRODUCTION (150-200 mots)
- Hook accrocheur (chiffre, question, problème)
- Présentation du sujet et de ce que l'article va couvrir
- Promise de valeur ("Dans ce guide, vous découvrirez...")
- **CTA précoce** : "Besoin d'un devis personnalisé ? [Comparez 3 devis gratuits](#devis)"

### 3. TABLE DES MATIÈRES
- Liste cliquable des H2 pour le featured snippet

### 4. CORPS DE L'ARTICLE
Structure avec **H2 et H3** pertinents :

**Règles :**
- Chaque H2 doit pouvoir répondre à une question Google (Position 0)
- Utilise des **listes à puces** pour la scannabilité
- Intègre des **tableaux comparatifs** (prix, caractéristiques)
- Ajoute des **encadrés** pour les infos clés (💡 Bon à savoir, ⚠️ Attention, 📊 Exemple concret)

**Inclure obligatoirement :**
- Section "Prix" avec fourchettes réalistes et tableau
- Section "Avantages / Inconvénients" 
- Section "Aides financières disponibles" (MaPrimeRénov, CEE, etc.)
- Section FAQ avec 4-5 questions (schema markup ready)

### 5. MAILLAGE INTERNE
Intègre naturellement 3-5 liens internes vers :
- Articles du même cluster thématique
- Pages services pertinentes : `/service/[service-slug]/paris`
- Article sur les aides : `/blog/maprimenov-2026-guide-complet`

Format : `[texte ancre](/chemin-url)`

### 6. CTAs STRATÉGIQUES
Place 3 CTAs dans l'article :

**CTA 1 (après l'intro) :**
```
> 💰 **Obtenez vos devis gratuits**
> Comparez jusqu'à 3 propositions d'artisans qualifiés près de chez vous.
> [Demander mes devis gratuits →](/service/[service-pertinent]/paris)
```

**CTA 2 (milieu d'article, après section prix) :**
```
> 🏠 **Quel budget pour votre projet ?**
> Décrivez votre projet en 2 min et recevez des estimations personnalisées.
> [Estimer mon projet →](/#services)
```

**CTA 3 (conclusion) :**
```
> ✅ **Prêt à lancer votre projet ?**
> Les artisans de notre réseau sont disponibles dans votre ville.
> [Comparer 3 devis gratuits →](/#services)
```

### 7. CONCLUSION (100-150 mots)
- Récap des points clés
- Conseil d'expert personnalisé
- CTA final fort

### 8. FAQ (Schema.org ready)
4-5 questions fréquentes avec réponses concises (40-60 mots chacune).
Ces questions doivent cibler les "People Also Ask" de Google.

---

## 🎨 GÉNÉRATION D'IMAGE

Après avoir rédigé l'article, génère une image hero avec ce prompt :

```
"Professional photograph for a French home renovation blog article about [SUJET]. 
Show [ÉLÉMENT VISUEL PRINCIPAL - ex: a modern heat pump unit installed outside a beautiful French house]. 
Clean, bright, trustworthy aesthetic. 
No text overlays. 
High resolution, editorial style, natural lighting."
```

---

## ✍️ STYLE ET TON

- **Ton :** Expert accessible, ni trop technique ni condescendant
- **Vouvoiement** systématique (audience française)
- **Preuves sociales :** "Nos artisans partenaires...", "Les propriétaires qui ont fait ce choix..."
- **Urgence légère :** "En 2026, les aides évoluent..."
- **Réassurance :** "100% gratuit", "Sans engagement", "Artisans vérifiés"

---

## 📊 DONNÉES À UTILISER (2026)

### Aides MaPrimeRénov' PAC Air-Eau :
| Profil | Montant |
|--------|---------|
| Bleu (très modeste) | 5 000€ |
| Jaune (modeste) | 4 000€ |
| Violet (intermédiaire) | 3 000€ |
| Rose (aisé) | 0€ |

### Prix moyens indicatifs :
- PAC Air-Eau : 10 000€ - 18 000€ (pose comprise)
- PAC Air-Air : 3 000€ - 8 000€
- Panneaux solaires 3kWc : 7 000€ - 10 000€
- Panneaux solaires 6kWc : 12 000€ - 17 000€
- ITE polystyrène : 120€ - 180€/m²
- Fenêtre PVC double vitrage : 300€ - 800€/unité

---

## 🔗 LIENS INTERNES DISPONIBLES

### Pages services :
- `/service/pompe-a-chaleur/[ville]`
- `/service/panneaux-solaires/[ville]`
- `/service/isolation-exterieure/[ville]`
- `/service/fenetres-menuiserie/[ville]`
- `/service/toiture-couverture/[ville]`
- `/service/plomberie-sanitaire/[ville]`

### Articles existants :
- `/blog/maprimenov-2026-guide-complet`
- `/blog/choisir-pompe-chaleur-air-eau-air-air`
- `/blog/isolation-exterieure-avantages-inconvenients`

---

## 📤 FORMAT DE SORTIE

Génère l'article complet en **TypeScript** pour l'intégrer directement dans `/src/data/blog-posts.ts` :

```typescript
{
  slug: "prix-pompe-chaleur-air-eau-2026",
  title: "Prix Pompe à Chaleur Air-Eau 2026 : Le guide des coûts réels",
  excerpt: "Découvrez le prix réel d'une PAC air-eau en 2026...",
  content: `
    <h2>...</h2>
    <p>...</p>
    ...
  `,
  category: "guides-travaux",
  publishedAt: "2026-01-15",
  readingTime: "12 min",
  image: "/images/blog/prix-pac-air-eau.jpg"
}
```

---

## ✅ CHECKLIST AVANT PUBLICATION

- [ ] Title tag < 60 caractères avec mot-clé
- [ ] Meta description 150-155 caractères
- [ ] H1 unique et optimisé
- [ ] 3+ CTAs placés stratégiquement
- [ ] 3-5 liens internes naturels
- [ ] Tableaux de prix inclus
- [ ] FAQ schema-ready (4-5 questions)
- [ ] Image hero générée
- [ ] Données chiffrées à jour (2026)
- [ ] Maillage vers pages services

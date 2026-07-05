# Inkit Paris — site vitrine

Site vitrine Next.js (App Router, TypeScript, Tailwind CSS v4) pour Inkit Paris,
spécialiste de la personnalisation textile pour entreprises.

## Démarrer en local

```bash
npm install
npm run dev
```

Le site est disponible sur [http://localhost:3000](http://localhost:3000).

## Structure du contenu

Le contenu éditorial est centralisé dans `src/data/` pour être modifié sans toucher
au code des pages :

- `src/data/company.ts` — coordonnées de l'entreprise (email, téléphone, adresse) —
  **à remplacer par les vraies informations avant mise en ligne**.
- `src/data/services.ts` — les 4 techniques (broderie, DTF, flocage, conseil).
- `src/data/catalogue.ts` — les 12 catégories du catalogue textile.
- `src/data/faq.ts` — les questions/réponses de la FAQ.

Les images sont pour l'instant des blocs placeholder (`src/components/PlaceholderImage.tsx`)
indiquant le type de photo attendu à chaque emplacement. À remplacer par de vraies
photos produit/atelier avant la mise en ligne.

## Formulaires

Les formulaires de devis (`/devis`) et de contact (`/contact`) envoient leurs données
à des routes API internes (`src/app/api/devis/route.ts` et `src/app/api/contact/route.ts`)
qui, pour l'instant, se contentent de journaliser la demande côté serveur.

**Avant la mise en production**, il faut brancher un service d'envoi d'email (ex.
[Resend](https://resend.com), SMTP...) dans ces deux routes pour que les demandes
soient réellement transmises à l'équipe Inkit Paris, avec le fichier logo joint le
cas échéant.

## Catalogue produits

Le PDF catalogue fourni initialement était tronqué (fichier incomplet) et n'a pas pu
être exploité. Le contenu du catalogue (`src/data/catalogue.ts`) est donc rédigé de
façon générique et devra être vérifié/complété avec les vraies références produits
une fois un catalogue exploitable fourni.

## Déploiement

Projet prêt pour un déploiement sur [Vercel](https://vercel.com/new) (recommandé pour
Next.js) ou tout hébergeur compatible Node.js.

## Prochaines étapes suggérées

1. Remplacer les informations dans `src/data/company.ts`.
2. Remplacer les blocs `PlaceholderImage` par de vraies photos.
3. Brancher l'envoi d'email sur les deux routes API de formulaire.
4. Compléter `src/data/catalogue.ts` avec les vraies références produits.
5. Créer un dépôt GitHub et y pousser ce projet (voir ci-dessous).
6. Déployer sur Vercel en connectant le dépôt GitHub.

## Pousser ce projet sur GitHub

```bash
git remote add origin <URL_DU_DEPOT_GITHUB>
git branch -M main
git push -u origin main
```

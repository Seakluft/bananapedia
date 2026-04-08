# 🍌 Bananapedia - L'Encyclopédie Ultime des Bananes

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **Bananapedia** est une application web interactive et moderne dédiée à l'univers fascinant des bananes. Des espèces rares aux recettes gourmandes, devenez un expert du fruit le plus populaire au monde !

---

## ✨ Fonctionnalités

### 📖 Encyclopédie Interactive
- **Catalogue exhaustif** : Parcourez plus de 10 espèces de bananes (Cavendish, Blue Java, Red Dacca, etc.).
- **Recherche en temps réel** : Trouvez instantanément une variété par son nom ou sa description.
- **Détails Scientifiques** : Accédez au nom latin, à l'origine géographique et aux profils gustatifs.
- **Système de Favoris ❤️** : Sauvegardez vos bananes préférées localement (via `localStorage`).

### 🎮 Banana Quiz
- Testez vos connaissances avec un mini-jeu interactif.
- Score en temps réel et questions sur la botanique et la culture.

### 🍲 Recettes Gourmandes
- Une sélection de recettes à base de bananes (Banana Bread, Smoothies).
- Ingrédients détaillés et instructions pas-à-pas.

### 🌿 Culture & Histoire
- Apprenez le cycle de vie du bananier (du rejet à la récolte).
- Découvrez des "Fun Facts" surprenants sur chaque espèce.

---

## 🛠 Architecture du Projet

L'application suit une structure modulaire pour une maintenance aisée :

```text
bananapedia/
├── src/
│   ├── components/       # Composants UI réutilisables
│   │   ├── layout/       # Header, Footer, Navigation
│   │   └── features/     # Cartes, Quiz, Listes
│   ├── data/             # Bases de données JSON (bananes, recettes)
│   ├── hooks/            # Logique métier (favoris, état)
│   ├── types/            # Interfaces TypeScript centralisées
│   ├── styles/           # Thèmes et styles CSS modulaires
│   └── App.tsx           # Point d'entrée principal (Routing)
├── public/               # Assets statiques
└── README.md             # Documentation (vous êtes ici)
```

---

## 🚀 Installation Locale

Pour lancer Bananapedia sur votre machine :

### Pré-requis
- [Node.js](https://nodejs.org/) (version 18 ou supérieure)
- npm ou yarn

### Étapes
1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/Seakluft/bananapedia.git
   cd bananapedia
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```
   L'application sera accessible sur `http://localhost:5173`.

---

## 🍌 Pourquoi les bananes ?

Botaniquement, la banane est une **baie** et le bananier est l'une des plus grandes **herbes** de la planète. Bananapedia a pour mission de célébrer cette biodiversité souvent ignorée par le grand public.

---

## 🤝 Contribution

Les contributions sont les bienvenues ! 
1. Forkez le projet.
2. Créez votre branche (`git checkout -b feature/AmazingFeature`).
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`).
4. Pushez vers la branche (`git push origin feature/AmazingFeature`).
5. Ouvrez une Pull Request.

---

## 📜 Licence

Distribué sous la licence MIT. Voir `LICENSE` pour plus d'informations.

---
*Fait avec ❤️ par Seakluft (et un peu d'aide fruitée).*

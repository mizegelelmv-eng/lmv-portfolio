# LMV Portfolio

Portfolio statique premium pour développeur web freelance, construit avec Astro + CSS natif.

## 🚀 Démarrage rapide

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
# → http://localhost:4321

# Build production
npm run build
# → ./dist/

# Preview du build local
npm run preview
```

## 📝 Configuration

**Toutes les informations personnalisables sont dans `src/config.ts` :**

| Champ | Action requise |
|-------|----------------|
| `PERSONAL.fullName` | Remplacer "À DEFINIR" par votre nom complet |
| `PERSONAL.email` | Ajouter votre email professionnel |
| `PERSONAL.whatsapp` | Numéro WhatsApp format international sans le + (ex: `33612345678`) |
| `PERSONAL.location` | Votre ville/pays |
| `SOCIAL.github` | URL GitHub |
| `SOCIAL.linkedin` | URL LinkedIn |
| `SOCIAL.twitter` | URL Twitter/X (ou `null`) |
| `SOCIAL.dribbble` | URL Dribbble (ou `null`) |

## 🌐 Déploiement GitHub Pages

Le projet est configuré pour GitHub Pages avec `base: '/lmv-portfolio'`.

### Étape 1 : Créer le repository GitHub
Créer un repo nommé `lmv-portfolio` sur GitHub.

### Étape 2 : Configurer GitHub Pages
1. Aller dans **Settings → Pages** du repository
2. Source : **GitHub Actions**
3. Sauvegarder

### Étape 3 : Push vers GitHub
```bash
git init
git add .
git commit -m "Initial commit: LMV Portfolio"
git branch -M main
git remote add origin https://github.com/mizegelelmv-eng/lmv-portfolio.git
git push -u origin main
```

Le workflow `.github/workflows/deploy.yml` déploiera automatiquement à `https://mizegelelmv-eng.github.io/lmv-portfolio/`.

## 📊 Structure du projet

```
lmv-portfolio/
├── astro.config.mjs          # Configuration Astro (site + base)
├── package.json
├── tsconfig.json
├── .gitignore
├── .github/workflows/
│   └── deploy.yml            # Workflow GitHub Actions
├── public/
│   ├── favicon.svg           # Favicon SVG
│   └── images/               # Images futures (mockups réels)
└── src/
    ├── config.ts             # Configuration centralisée
    ├── layouts/
    │   └── BaseLayout.astro  # Layout global + SEO
    ├── components/
    │   ├── Head.astro        # Meta tags + Google Fonts
    │   ├── Navbar.astro      # Navigation responsive
    │   ├── Hero.astro        # Section accueil
    │   ├── About.astro       # Section À propos
    │   ├── Skills.astro      # Compétences techniques
    │   ├── Projects.astro    # Projets de démonstration
    │   ├── Services.astro    # Services proposés
    │   ├── Process.astro     # Processus de travail
    │   ├── Contact.astro     # Formulaire + WhatsApp
    │   ├── Footer.astro      # Pied de page
    │   ├── MockupEcommerce.astro
    │   ├── MockupDashboard.astro
    │   └── MockupLanding.astro
    ├── pages/
    │   └── index.astro       # Page unique assemblant tout
    └── styles/
        └── global.css        # Design system complet
```

## ⚙️ Formulaire de contact

Le formulaire utilise `mailto:` comme fallback. Pour un envoi direct sans opening client mail :

**Option recommandée : Formspree**
1. Créer un compte sur https://formspree.io
2. Créer un nouveau formulaire
3. Remplacer `action="mailto:..."` dans `src/components/Contact.astro` par `action="https://formspree.io/f/VotreID"`

**Alternative : Web3Forms**
1. Créer un compte sur https://web3forms.com
2. Obtenir une Access Key gratuite
3. Remplacer l'action du formulaire

## 🎨 Design System

- **Palette** : Noir (#0a0a0a), Blanc, Or (#c9a84c)
- **Typographie** : Inter (corps) + Playfair Display (titres)
- **Animations** : Fade-in au scroll via Intersection Observer
- **Accessibilité** : ARIA labels, skip link, prefers-reduced-motion

## 📈 Performances

- Zéro JavaScript client side (hors animations scroll)
- CSS pur, pas de framework
- Google Fonts avec preconnect
- Images SVG inline (mockups)

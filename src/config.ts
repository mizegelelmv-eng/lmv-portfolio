// @ts-check

/**
 * LMV Portfolio — Configuration centralisée
 *
 * Modifiez les valeurs ci-dessous pour personnaliser votre portfolio.
 * Toutes les pages lisent ces constantes.
 */

export const SITE = /** @type {const} */ ({
  // URL de base du site (modifiez pour votre domaine)
  url: 'https://mizegelelmv-eng.github.io/lmv-portfolio',

  // Titre affiché dans l'onglet du navigateur
  title: 'LMV — Développeur Web Freelance',

  // Description SEO (150-160 caractères recommandés)
  description:
    'Développeur web freelance spécialisé dans la création de sites modernes, performants et sur-mesure.',

  // Favicon
  favicon: '/favicon.svg',
});

/**
 * Informations personnelles — À remplir
 */
export const PERSONAL = /** @type {const} */ ({
  // Votre nom complet
  fullName: 'LMV Mizegele',

  // Court bio (À propos)
  bio: 'Développeur web freelance passionné par la création d\'expériences numériques modernes, performantes et accessibles.',

  // Location (optionnel)
  location: 'Kinshasa, Congo',

  // Email professionnel
  email: 'mizegelelmv@gmail.com',

  // Numéro WhatsApp au format international sans le + (ex: 33612345678)
  whatsapp: '243985990399',
});

/**
 * Liens sociaux — À remplir ou supprimer les entrées non utilisées
 */
export const SOCIAL = /** @type {const} */ ({
  github: 'https://github.com/mizegelelmv-eng',
  linkedin: 'https://www.linkedin.com/in/lmv-mizegele-014165445',
  twitter: null,               // ex: 'https://x.com/lmv' — null si non utilisé
  dribbble: null,              // ex: 'https://dribbble.com/lmv' — null si non utilisé
});

/**
 * Compétences techniques — maîtrise confirmée
 */
export const SKILLS = /** @type {const} */ ({
  frontend: [
    'HTML5 / CSS3',
    'JavaScript / TypeScript',
    'Astro',
    'Animation CSS',
  ],
  tools: [
    'Git / GitHub',
    'npm / pnpm',
    'GitHub Pages',
    'Figma',
  ],
  /** Technologies en cours d'apprentissage — pas encore maîtrisées */
  learning: [
    'React (bases)',
    'Node.js (notions)',
    'Tailwind CSS (découverte)',
    'Python (débutant)',
  ],
});

/**
 * Services proposés
 */
export const SERVICES = /** @type {const} */ ([
  {
    icon: 'website',
    title: 'Site vitrine responsive',
    description:
      'Site professionnel moderne, adapté à tous les écrans (mobile, tablette, desktop). Design soigné, chargement rapide et structure claire pour présenter votre activité.',
  },
  {
    icon: 'application',
    title: 'Application web simple',
    description:
      'Dashboard interactif ou outil interne léger. Interface intuitive avec fonctionnalités de base (tableaux, formulaires, navigation).',
  },
  {
    icon: 'redesign',
    title: 'Amélioration d\'interface',
    description:
      'Modernisation visuelle d\'un site existant : mise à jour du design, meilleure lisibilité et adaptation aux standards actuels.',
  },
  {
    icon: 'performance',
    title: 'Optimisation de base',
    description:
      'Amélioration des temps de chargement et de l\'accessibilité pour offrir une expérience fluide à tous les visiteurs.',
  },
]);

/**
 * Étapes du processus de travail
 */
export const PROCESS = /** @type {const} */ ([
  {
    step: 1,
    title: 'Échange & compréhension',
    description:
      'Nous définissons ensemble vos objectifs, votre audience et le périmètre du projet lors d\'un premier appel.',
  },
  {
    step: 2,
    title: 'Conception & maquettes',
    description:
      'Je propose une architecture informationnelle et des maquettes validées avant toute rédaction de code.',
  },
  {
    step: 3,
    title: 'Développement',
    description:
      'Intégration fidèle aux maquettes, code propre et performant, avec points réguliers vous tenant informé de l\'avancement.',
  },
  {
    step: 4,
    title: 'Mise en ligne & suivi',
    description:
      'Déploiement sur votre hébergement, tests finaux et correction des ajustements. Support post-livraison inclus.',
  },
]);

/**
 * Projets de démonstration
 *
 * ⚠️ Ces projets sont des démonstrations techniques, pas des réalisations clients.
 * Chaque projet est clairement identifié comme tel.
 */
export const PROJECTS = /** @type {const} */ ([
  {
    id: 'shopflow',
    title: 'ShopFlow',
    tagline: 'Site e-commerce responsive',
    badge: 'Projet de démonstration',
    description:
      'Maquette d\'une boutique en ligne : catalogue produits et panier. Mise en avant du design responsive et des animations CSS.',
    tags: ['Astro', 'CSS', 'JavaScript'],
    demoUrl: null,
    repoUrl: null,
    mockupType: 'ecommerce',
  },
  {
    id: 'dashcore',
    title: 'DashCore',
    tagline: 'Dashboard administrateur SaaS',
    badge: 'Projet de démonstration',
    description:
      'Interface d\'administration avec tableaux de données et navigation. Démonstration de la mise en page en CSS pur.',
    tags: ['HTML/CSS', 'JavaScript'],
    demoUrl: null,
    repoUrl: null,
    mockupType: 'dashboard',
  },
  {
    id: 'lumina',
    title: 'Lumina',
    tagline: 'Landing page startup',
    badge: 'Projet de démonstration',
    description:
      'Page d\'atterrissage moderne pour une startup tech : hero animé, sections features, pricing table et formulaire de contact intégrés.',
    tags: ['Astro', 'CSS', 'Animation'],
    demoUrl: null,
    repoUrl: null,
    mockupType: 'landing',
  },
]);

/**
 * Icônes SVG inline (pour éviter les appels externes)
 */
export const ICONS = /** @type {const} */ {
  github: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
  twitter: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>`,
  dribbble: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path></svg>`,
  whatsapp: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.85 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`,
  arrow: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  menu: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
  website: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
  application: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
  redesign: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>`,
  performance: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
  star: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
  email: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
  external: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
  location: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
};

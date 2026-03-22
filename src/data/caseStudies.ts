export interface CaseStudy {
  slug: string;
  client: string;
  sector: string;
  location: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string; description: string }[];
  testimonial: { quote: string; author: string; role: string };
  image: string;
  duration: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'btp-montpellier',
    client: 'Construire Sud',
    sector: 'BTP & Construction',
    location: 'Montpellier, Hérault',
    duration: '6 mois',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=85',
    challenge: "Construire Sud, entreprise BTP familiale avec 25 ans d'expérience, était quasi-invisible sur Google malgré une excellente réputation locale. Leur site web vieillissant ne générait presque aucun lead digital.",
    solution: "Refonte SEO complète du site, création d'une stratégie de contenu axée sur les requêtes locales (maçon Montpellier, extension maison Hérault...), optimisation de la fiche Google Business Profile, campagne de netlinking local.",
    results: [
      { metric: '+340%', value: 'Trafic organique', description: 'en 6 mois' },
      { metric: '1er', value: 'Position Google', description: 'sur 23 requêtes clés' },
      { metric: '+180%', value: 'Demandes de devis', description: 'via le site web' }
    ],
    testimonial: {
      quote: "Stratègere a complètement transformé notre présence en ligne. On reçoit maintenant des demandes de devis qualifiées chaque semaine, des clients qui ont trouvé notre site sur Google.",
      author: 'Michel Brun',
      role: 'Dirigeant, Construire Sud'
    }
  },
  {
    slug: 'cabinet-medical-lyon',
    client: 'Cabinet Dr. Moreau',
    sector: 'Santé & Médical',
    location: 'Lyon, Rhône',
    duration: '4 mois',
    image: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=85',
    challenge: "Le cabinet médical du Dr. Moreau, spécialisé en médecine esthétique, perdait des patients au profit de cliniques concurrentes mieux positionnées sur Google. Le site web ne convertissait pas.",
    solution: "Stratégie SEO locale intensive, optimisation pour les requêtes à intention transactionnelle (médecin esthétique Lyon, injection botox Lyon prix...), refonte de la page de prise de rendez-vous, amélioration des Core Web Vitals.",
    results: [
      { metric: '+280%', value: 'RDV en ligne', description: 'en 4 mois' },
      { metric: '+420%', value: 'Trafic organique', description: 'sur les requêtes locales' },
      { metric: '4.9/5', value: 'Note Google', description: '127 avis collectés' }
    ],
    testimonial: {
      quote: "En 4 mois, Stratègere a complètement changé la donne pour notre cabinet. Notre agenda est maintenant complet à 3 semaines, uniquement grâce aux patients trouvés sur Google.",
      author: 'Dr. Claire Moreau',
      role: 'Médecin esthétique, Cabinet Dr. Moreau'
    }
  },
  {
    slug: 'ecommerce-mode',
    client: 'Maison Éclat',
    sector: 'E-commerce Mode',
    location: 'Paris & national',
    duration: '8 mois',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=85',
    challenge: "Maison Éclat, boutique de mode féminine haut de gamme, avait un ROAS Google Ads de 1.8 — à peine rentable. Leur SEO était inexistant et leur budget publicitaire augmentait sans amélioration des résultats.",
    solution: "Double stratégie : restructuration complète des campagnes Google Ads (Performance Max + Search) et lancement d'une stratégie SEO/content marketing pour réduire la dépendance à la publicité payante sur 12 mois.",
    results: [
      { metric: '×4.2', value: 'ROI Google Ads', description: 'ROAS passé de 1.8 à 7.6' },
      { metric: '-35%', value: 'Coût par acquisition', description: "en 3 mois d'optimisation" },
      { metric: '+890%', value: 'Trafic SEO', description: 'en 8 mois (0 → 12 000/mois)' }
    ],
    testimonial: {
      quote: "L'équipe Stratègere a sauvé notre budget publicitaire et construit en parallèle une machine SEO qui génère maintenant autant de ventes que nos campagnes Ads. Résultats bluffants.",
      author: 'Amélie Fontaine',
      role: 'Directrice e-commerce, Maison Éclat'
    }
  }
];

export const getCaseStudyBySlug = (slug: string) => caseStudies.find(c => c.slug === slug);

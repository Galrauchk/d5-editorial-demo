export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
  twitter?: string;
  expertise: string[];
}

export const teamMembers: TeamMember[] = [
  {
    slug: 'marie-dubois',
    name: 'Marie Dubois',
    role: 'Directrice SEO & Fondatrice',
    bio: "Experte SEO avec 12 ans d'expérience. Ancienne de Google France, Marie a aidé plus de 200 entreprises à transformer leur visibilité organique.",
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=85',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    expertise: ['SEO technique', 'Audit SEO', 'Stratégie digitale']
  },
  {
    slug: 'thomas-laurent',
    name: 'Thomas Laurent',
    role: 'Expert Content Marketing',
    bio: "Journaliste reconverti en expert content marketing, Thomas crée des stratégies de contenu qui génèrent des leads qualifiés pour nos clients depuis 8 ans.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=85',
    linkedin: 'https://linkedin.com',
    expertise: ['Content Marketing', 'SEO éditorial', 'Copywriting']
  },
  {
    slug: 'sophie-martin',
    name: 'Sophie Martin',
    role: 'Experte Google Ads',
    bio: "Google Ads Partner certifiée, Sophie pilote des campagnes pour un budget cumulé de plus de 2M€/an avec un ROAS moyen de 5.8 pour nos clients e-commerce.",
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=85',
    linkedin: 'https://linkedin.com',
    expertise: ['Google Ads', 'Performance Max', 'E-commerce']
  },
  {
    slug: 'julien-petit',
    name: 'Julien Petit',
    role: 'Développeur SEO technique',
    bio: "Expert en SEO technique et Core Web Vitals, Julien assure que les fondations techniques de chaque site sont optimales pour un référencement maximal.",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=85',
    linkedin: 'https://linkedin.com',
    expertise: ['SEO technique', 'Core Web Vitals', 'Structured Data']
  }
];

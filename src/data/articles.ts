export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  categorySlug: string;
  author: string;
  authorSlug: string;
  date: string;
  readTime: number;
  image: string;
  tags: string[];
  relatedSlugs: string[];
}

export const articles: Article[] = [
  {
    slug: 'guide-seo-local-2026',
    title: 'Guide complet du SEO local en 2026 : Dominez Google Maps et la recherche locale',
    excerpt: 'Le SEO local est devenu incontournable pour toute entreprise cherchant à attirer des clients dans sa zone géographique. Découvrez les stratégies qui fonctionnent vraiment en 2026.',
    category: 'SEO',
    categorySlug: 'seo',
    author: 'Marie Dubois',
    authorSlug: 'marie-dubois',
    date: '2026-03-15',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=85',
    tags: ['SEO local', 'Google Maps', 'GMB', 'référencement local'],
    relatedSlugs: ['content-marketing-strategie-2026', 'audit-seo-complet-guide'],
    content: `<h2 id="introduction">Pourquoi le SEO local est crucial en 2026</h2>
<p>En 2026, plus de 46% des recherches Google ont une intention locale. Les consommateurs cherchent des prestataires, des restaurants, des médecins — et ils les cherchent "près de chez moi". Si votre entreprise n'apparaît pas dans ces résultats, vous perdez des clients chaque jour.</p>
<p>Le SEO local englobe l'ensemble des techniques permettant d'améliorer la visibilité d'un établissement ou d'une entreprise dans les résultats de recherche géolocalisés. Cela inclut le référencement sur Google Maps, les résultats du "Local Pack" (les 3 fiches qui apparaissent au-dessus des résultats organiques) et les résultats organiques traditionnels avec une intention locale.</p>
<h2 id="fiche-google-business">Optimiser votre fiche Google Business Profile</h2>
<p>La fiche Google Business Profile (anciennement Google My Business) est le pilier du SEO local. C'est votre vitrine sur Google Maps et dans les résultats de recherche locaux. Une fiche bien optimisée peut représenter à elle seule 25% de votre trafic local.</p>
<h3 id="fiche-complete">Une fiche 100% complète</h3>
<p>Commencez par vous assurer que votre fiche est complète à 100%. Cela signifie : nom de l'entreprise exact, adresse précise, numéro de téléphone local, horaires d'ouverture (y compris les jours fériés), catégorie principale correcte, catégories secondaires pertinentes, description optimisée avec vos mots-clés principaux, photos de qualité (extérieur, intérieur, équipe, produits).</p>
<h3 id="avis-clients">La stratégie des avis clients</h3>
<p>Les avis Google sont l'un des facteurs de classement les plus importants en SEO local. Les entreprises avec une note supérieure à 4.5 étoiles et plus de 50 avis ont 73% plus de chances d'apparaître dans le Local Pack. Mettez en place un processus systématique de collecte d'avis : email automatisé post-achat, QR code en magasin, demande directe par votre équipe.</p>
<blockquote><p>"Un avis positif vaut mille mots marketing. C'est de la preuve sociale que Google valorise autant que vos clients."</p></blockquote>
<h2 id="citations-locales">Les citations locales : NAP consistency</h2>
<p>Le NAP (Name, Address, Phone) doit être identique sur tous les annuaires et plateformes où votre entreprise apparaît. Une incohérence entre "Rue de la Paix" sur votre site et "R. de la Paix" sur PagesJaunes peut pénaliser votre classement local.</p>
<p>Les principales plateformes à optimiser en France : PagesJaunes, Yelp, TripAdvisor (pour les commerces), LinkedIn, Facebook, Foursquare, Mappy. Créez une feuille de calcul listant toutes vos présences en ligne et vérifiez la cohérence de votre NAP sur chacune.</p>
<h2 id="contenu-local">Créer du contenu à intention locale</h2>
<p>Le contenu est roi, y compris en SEO local. Créez des pages dédiées à chaque ville/zone que vous ciblez. Une agence SEO basée à Montpellier qui cible également Nîmes, Béziers et Sète devrait avoir une page optimisée pour chaque ville.</p>
<h3 id="pages-locales">Structure des pages locales</h3>
<p>Chaque page locale doit inclure : le mot-clé géographique dans le titre H1 et la balise title, du contenu unique mentionnant des landmarks locaux, des témoignages de clients locaux, une carte Google intégrée, vos coordonnées NAP, un schéma LocalBusiness en JSON-LD.</p>
<h2 id="backlinks-locaux">Le netlinking local</h2>
<p>Les backlinks provenant de sites locaux ont un impact particulièrement fort sur votre SEO local. Identifiez les opportunités : presse locale (Midi Libre pour Montpellier), annuaires de la chambre de commerce, sites d'associations locales, partenaires commerciaux de votre région, blogs locaux.</p>
<h2 id="core-web-vitals">Core Web Vitals et SEO local</h2>
<p>Google prend de plus en plus en compte l'expérience utilisateur dans son algorithme de classement. Les Core Web Vitals — LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift), INP (Interaction to Next Paint) — s'appliquent autant au SEO local qu'au SEO national.</p>
<p>Un site qui charge en moins de 2.5 secondes sur mobile (LCP) aura un avantage concurrentiel significatif sur ses concurrents locaux, souvent moins bien optimisés techniquement.</p>
<h2 id="mesure-resultats">Mesurer vos résultats SEO local</h2>
<p>Utilisez ces KPIs pour suivre l'efficacité de votre stratégie SEO local : nombre de vues sur Google Maps, nombre de clics "Itinéraire", nombre d'appels depuis la fiche GBP, classement sur les requêtes "[service] + [ville]", trafic organique local dans Google Analytics 4, taux de conversion des visiteurs locaux.</p>
<h2 id="conclusion">Conclusion : le SEO local, un investissement rentable</h2>
<p>Le SEO local est l'un des leviers marketing les plus rentables pour les entreprises à ancrage géographique. Contrairement à la publicité payante qui s'arrête dès que vous coupez le budget, le SEO local génère des résultats durables. Une stratégie bien menée pendant 6 à 12 mois peut transformer complètement votre acquisition locale.</p>`
  },
  {
    slug: 'content-marketing-strategie-2026',
    title: 'Content Marketing : La stratégie de contenu qui génère des leads qualifiés en 2026',
    excerpt: 'Comment créer une stratégie de content marketing qui attire, engage et convertit vos prospects en clients. Méthodes, outils et cas pratiques pour une agence SEO.',
    category: 'Content Marketing',
    categorySlug: 'content-marketing',
    author: 'Thomas Laurent',
    authorSlug: 'thomas-laurent',
    date: '2026-03-10',
    readTime: 10,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=85',
    tags: ['content marketing', 'stratégie contenu', 'lead generation', 'inbound marketing'],
    relatedSlugs: ['guide-seo-local-2026', 'audit-seo-complet-guide'],
    content: `<h2 id="definition">Qu'est-ce que le content marketing en 2026 ?</h2>
<p>Le content marketing est la discipline qui consiste à créer et distribuer du contenu pertinent, utile et cohérent pour attirer et fidéliser une audience clairement définie, dans le but de générer des actions commerciales rentables. En 2026, c'est le fondement de toute stratégie digitale performante.</p>
<p>Contrairement à la publicité traditionnelle qui interrompt l'audience, le content marketing attire les prospects au moment où ils cherchent des réponses à leurs questions. C'est ce qu'on appelle l'inbound marketing : plutôt que d'aller chercher le client, vous faites en sorte qu'il vienne à vous.</p>
<h2 id="audience">Définir son audience avec précision</h2>
<p>La première étape d'une stratégie de content marketing efficace est la définition précise de vos personas. Un persona est une représentation semi-fictive de votre client idéal, basée sur des données réelles et des suppositions éclairées. Pour une agence SEO comme Stratègere, nous pourrions définir plusieurs personas : le Dirigeant PME (40-55 ans, peu de temps, cherche des résultats chiffrés), le Responsable Marketing (30-45 ans, comprend le digital, cherche des experts), l'E-commerçant (25-45 ans, ROI focus, compétition intense).</p>
<h3 id="intent-mapping">La cartographie des intentions de recherche</h3>
<p>Pour chaque persona, mappez les intentions de recherche à chaque étape du tunnel : TOFU (Top of Funnel) — requêtes informationnelles, l'utilisateur cherche à comprendre. MOFU (Middle of Funnel) — requêtes de comparaison, l'utilisateur évalue ses options. BOFU (Bottom of Funnel) — requêtes transactionnelles, l'utilisateur est prêt à acheter.</p>
<h2 id="piliers-contenu">La stratégie des piliers de contenu</h2>
<p>La stratégie des topic clusters (ou piliers de contenu) est aujourd'hui la référence en content marketing SEO. Le principe : créer une page pilier exhaustive sur un sujet large, puis des articles satellites qui traitent de sous-sujets spécifiques et linkent tous vers la page pilier.</p>
<blockquote><p>"Un cluster thématique bien construit envoie un signal fort à Google : vous êtes L'EXPERT sur ce sujet."</p></blockquote>
<h2 id="formats-contenu">Les formats qui convertissent en 2026</h2>
<p>Tous les formats de contenu ne se valent pas en termes de génération de leads. Voici les formats les plus efficaces selon notre expérience : Articles longs (2000+ mots) pour le SEO organique, Guides PDF téléchargeables (lead magnets), Études de cas avec résultats chiffrés, Webinaires et vidéos expertise, Infographies partageables, Newsletters hebdomadaires, Podcasts (en croissance forte).</p>
<h3 id="long-form-content">Le long-form content : pourquoi ça marche</h3>
<p>Les articles de plus de 2000 mots génèrent en moyenne 3 fois plus de backlinks et 4 fois plus de trafic que les articles courts. Ils permettent de couvrir un sujet en profondeur, de cibler de nombreuses requêtes de longue traîne, et d'établir votre expertise aux yeux de Google et de vos lecteurs.</p>
<h2 id="calendrier-editorial">Construire un calendrier éditorial</h2>
<p>Un calendrier éditorial est l'outil central de votre stratégie de contenu. Il permet de planifier la production, d'assurer une cohérence thématique, de gérer les ressources, et de ne jamais manquer d'idées. Fréquence recommandée : au minimum 2 articles par semaine pour un blog en croissance, 1 newsletter par semaine, 1 guide PDF par mois.</p>
<h2 id="distribution">Distribuer son contenu efficacement</h2>
<p>Créer du contenu ne suffit pas : il faut le distribuer. La règle 80/20 du content marketing dit que vous devriez passer 20% de votre temps à créer et 80% à distribuer. Distribution organique : SEO, réseaux sociaux, newsletter. Distribution payante : LinkedIn Ads, Facebook Ads pour amplifier vos meilleurs contenus. Relations presse : pitcher vos études et statistiques aux médias de votre secteur.</p>
<h2 id="mesure">Mesurer le ROI du content marketing</h2>
<p>Le content marketing est un investissement long terme mais mesurable. KPIs à suivre : trafic organique mensuel, taux de conversion visiteur → lead, coût par lead (vs. Google Ads), nombre de backlinks générés, autorité de domaine (DR/DA), revenu attribué au contenu dans GA4.</p>
<h2 id="conclusion">Conclusion</h2>
<p>Le content marketing est la stratégie la plus durable et la plus rentable sur le long terme. Les entreprises qui investissent sérieusement dans le contenu aujourd'hui construisent un avantage concurrentiel considérable qui sera très difficile à rattraper dans 3-5 ans. Chez Stratègere, nous aidons nos clients à construire cette machine à contenu qui génère des leads 24h/24, 7j/7.</p>`
  },
  {
    slug: 'google-ads-optimisation-2026',
    title: "Google Ads 2026 : Les stratégies d'optimisation qui multiplient votre ROI",
    excerpt: "Performance Max, Smart Bidding, IA créative... Google Ads évolue vite. Découvrez comment optimiser vos campagnes pour un ROI maximal en 2026.",
    category: 'Google Ads',
    categorySlug: 'google-ads',
    author: 'Sophie Martin',
    authorSlug: 'sophie-martin',
    date: '2026-03-05',
    readTime: 9,
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=85',
    tags: ['Google Ads', 'Performance Max', 'ROI', 'smart bidding'],
    relatedSlugs: ['guide-seo-local-2026', 'content-marketing-strategie-2026'],
    content: `<h2 id="landscape">Le paysage Google Ads en 2026</h2>
<p>Google Ads a considérablement évolué ces dernières années. L'IA et le machine learning sont désormais au cœur de la plateforme, avec des formats comme Performance Max qui automatisent une grande partie de la gestion des campagnes. Pour les annonceurs, cela représente à la fois une opportunité et un défi : comment garder le contrôle et optimiser dans un environnement de plus en plus automatisé ?</p>
<h2 id="performance-max">Maîtriser Performance Max</h2>
<p>Performance Max (PMax) est le format incontournable de 2026. Il permet de diffuser des annonces sur l'ensemble du réseau Google (Search, Display, YouTube, Gmail, Maps, Discover) depuis une seule campagne. Les résultats peuvent être excellents... ou désastreux, selon la qualité de vos signaux d'audience et de vos assets créatifs.</p>
<h3 id="asset-groups">Optimiser ses Asset Groups</h3>
<p>La qualité des assets (titres, descriptions, images, vidéos) est cruciale dans PMax. Google recommande de fournir le maximum d'assets variés et de haute qualité. Un asset group avec score "Excellent" peut performer 2 à 3 fois mieux qu'un asset group avec score "Faible".</p>
<blockquote><p>"Performance Max n'est pas une boîte noire si vous lui donnez les bons signaux. C'est un amplificateur : il amplifie ce que vous lui fournissez, en bien ou en mal."</p></blockquote>
<h2 id="smart-bidding">Smart Bidding : l'art de guider l'IA</h2>
<p>Les stratégies Smart Bidding (tROAS, tCPA, Maximiser les conversions) utilisent l'IA de Google pour optimiser les enchères en temps réel. La clé : fournir suffisamment de données de conversion de qualité. Minimum recommandé : 30-50 conversions par mois par campagne pour que l'algorithme soit efficace.</p>
<h2 id="audience">Stratégie d'audience avancée</h2>
<p>En 2026, les cookies tiers disparaissent progressivement. Les annonceurs qui s'en sortent le mieux ont investi dans leurs propres données (first-party data) : listes CRM, audiences personnalisées, segments d'intention d'achat. Intégrez votre CRM à Google Ads via Customer Match pour cibler vos prospects et clients existants.</p>
<h2 id="search-campaigns">Les campagnes Search : toujours essentielles</h2>
<p>Malgré la montée de PMax, les campagnes Search classiques restent indispensables pour capturer l'intention explicite des utilisateurs. Structurez vos campagnes par intention de recherche : Brand (votre marque), Generic (mots-clés secteur), Concurrents (noms des concurrents), Longue traîne (requêtes spécifiques à forte conversion).</p>
<h2 id="copy">L'art de la rédaction d'annonces</h2>
<p>Les Responsive Search Ads (RSA) permettent de fournir jusqu'à 15 titres et 4 descriptions que Google combine automatiquement. Mais attention : diversifiez vraiment vos angles. Ne mettez pas 15 variantes du même message. Testez : avantages vs. urgence, questions vs. affirmations, prix vs. qualité.</p>
<h2 id="conversion-tracking">Le tracking de conversion : fondation indispensable</h2>
<p>Un tracking de conversion précis est la base de tout. En 2026, implémentez : le tracking amélioré des conversions pour une meilleure précision malgré les restrictions cookies, le consent mode v2 pour respecter le RGPD tout en collectant des données modélisées, les conversions hors ligne pour les leads qui se transforment en ventes CRM.</p>
<h2 id="conclusion">Maximiser son ROI Google Ads</h2>
<p>Le secret d'un ROI Google Ads exceptionnel en 2026 : combiner l'IA de Google avec votre intelligence stratégique. L'IA optimise les enchères et la diffusion. Vous fournissez les signaux, les assets, la structure et la vision business. L'annonceur qui gagne n'est plus celui qui gère le mieux les enchères manuelles — c'est celui qui pilote le mieux la machine IA.</p>`
  },
  {
    slug: 'audit-seo-complet-guide',
    title: "Comment réaliser un audit SEO complet : Le guide étape par étape 2026",
    excerpt: "Un audit SEO révèle les freins cachés qui pénalisent votre classement. Suivez notre méthodologie en 7 étapes pour identifier toutes les opportunités d'amélioration.",
    category: 'SEO',
    categorySlug: 'seo',
    author: 'Marie Dubois',
    authorSlug: 'marie-dubois',
    date: '2026-02-28',
    readTime: 12,
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f5a07d?w=800&q=85',
    tags: ['audit SEO', 'technique SEO', 'Screaming Frog', 'Search Console'],
    relatedSlugs: ['guide-seo-local-2026', 'core-web-vitals-guide'],
    content: `<h2 id="introduction">Pourquoi un audit SEO est indispensable</h2>
<p>Un audit SEO est l'équivalent d'un bilan de santé pour votre site web. Il permet d'identifier les problèmes techniques qui freinent votre référencement, de découvrir des opportunités de contenu inexploitées, d'analyser votre profil de liens et de définir un plan d'action prioritaire. Sans audit, vous naviguez à l'aveugle.</p>
<h2 id="preparation">Étape 1 : Préparation et collecte des données</h2>
<p>Avant de commencer l'audit technique, rassemblez tous les accès nécessaires : Google Search Console, Google Analytics 4, accès FTP ou CMS, outil de crawl (Screaming Frog, Sitebulb), outil de suivi de positions (Semrush, Ahrefs), outil d'analyse des backlinks.</p>
<h3 id="baseline">Établir une baseline</h3>
<p>Notez les métriques actuelles avant de commencer les corrections : trafic organique mensuel, nombre de mots-clés positionnés, autorité de domaine, Core Web Vitals, taux de crawl. Ces données vous permettront de mesurer l'impact de vos optimisations.</p>
<h2 id="audit-technique">Étape 2 : Audit technique</h2>
<p>L'audit technique est la fondation. Un site techniquement défaillant ne peut pas performer en SEO, peu importe la qualité de son contenu. Checklist technique principale : Crawlabilité (robots.txt, sitemap XML, balises noindex), Indexation (pages indexées vs. pages attendues dans GSC), Redirections (chaînes de redirections, redirections 302 incorrectes), Codes d'erreur (404, 5xx), Vitesse de chargement (Core Web Vitals), HTTPS et sécurité, Compatibilité mobile.</p>
<h2 id="audit-contenu">Étape 3 : Audit du contenu</h2>
<p>L'audit de contenu analyse chaque page de votre site pour identifier : le contenu dupliqué (interne et externe), les pages thin content (moins de 300 mots sans valeur ajoutée), les cannibalisations de mots-clés (plusieurs pages en concurrence sur la même requête), les opportunités de mise à jour de contenu obsolète, les pages sans trafic organique depuis 12 mois.</p>
<blockquote><p>"Parfois, supprimer ou consolider du contenu de mauvaise qualité améliore plus le SEO que d'en créer du nouveau."</p></blockquote>
<h2 id="audit-on-page">Étape 4 : Audit on-page</h2>
<p>Vérifiez l'optimisation on-page de vos pages prioritaires : Balises title (unicité, longueur 50-60 caractères, mot-clé principal), Meta descriptions (unicité, longueur 150-160 caractères, appel à l'action), Balises H1/H2/H3 (hiérarchie logique, mots-clés), URLs (courtes, descriptives, avec tirets), Images (balises alt, compression, formats modernes WebP).</p>
<h2 id="audit-backlinks">Étape 5 : Audit du profil de liens</h2>
<p>Analysez votre profil de backlinks avec Ahrefs ou Semrush. Identifiez : les domaines référents (qualité vs. quantité), les ancres de liens (diversité naturelle vs. sur-optimisation), les liens toxiques (à désavouer via Google), les opportunités de récupération de liens perdus, les pages qui méritent plus de liens entrants.</p>
<h2 id="audit-concurrents">Étape 6 : Analyse concurrentielle</h2>
<p>Analysez vos 3-5 concurrents principaux : leurs mots-clés organiques (opportunités manquées), leur profil de backlinks (sources à cibler), leur stratégie de contenu (thèmes non couverts), leurs performances Core Web Vitals, leur structure de site.</p>
<h2 id="plan-action">Étape 7 : Priorisation et plan d'action</h2>
<p>L'audit est terminé, place à l'action. Priorisez selon l'impact vs. l'effort : Quick wins (impact fort, effort faible) → à faire en priorité absolue. Projets structurants (impact fort, effort fort) → à planifier sur 3-6 mois. Optimisations progressives (impact moyen) → intégrées au workflow continu. Faible priorité → déprioritiser ou ignorer.</p>
<h2 id="conclusion">Un audit, point de départ d'une stratégie</h2>
<p>Un audit SEO complet prend entre 20 et 80 heures selon la taille du site. C'est un investissement rentable : nos clients constatent en moyenne une augmentation de 40 à 120% de leur trafic organique dans les 6 mois suivant la mise en œuvre des recommandations. Chez Stratègere, nous réalisons des audits SEO complets qui incluent tous ces éléments, plus une session de restitution et un plan d'action détaillé.</p>`
  },
  {
    slug: 'core-web-vitals-guide',
    title: 'Core Web Vitals 2026 : Guide pratique pour un score parfait',
    excerpt: 'LCP, CLS, INP... Les Core Web Vitals sont des facteurs de classement officiels. Apprenez à les mesurer, les comprendre et les optimiser pour booster votre SEO.',
    category: 'Analytics',
    categorySlug: 'analytics',
    author: 'Thomas Laurent',
    authorSlug: 'thomas-laurent',
    date: '2026-02-20',
    readTime: 11,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=85',
    tags: ['Core Web Vitals', 'LCP', 'CLS', 'INP', 'performance web'],
    relatedSlugs: ['audit-seo-complet-guide', 'guide-seo-local-2026'],
    content: `<h2 id="introduction">Pourquoi les Core Web Vitals sont cruciaux</h2>
<p>Depuis le déploiement du Page Experience Update en 2021, les Core Web Vitals sont des facteurs de classement officiels dans l'algorithme Google. En 2026, leur importance n'a fait qu'augmenter. Un site avec d'excellents CWV bénéficie d'un avantage concurrentiel direct sur ses concurrents moins optimisés — à contenu égal.</p>
<p>Les trois Core Web Vitals actuels sont : LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift), et INP (Interaction to Next Paint, qui a remplacé FID en mars 2024).</p>
<h2 id="lcp">LCP — Largest Contentful Paint</h2>
<p>Le LCP mesure le temps de chargement de l'élément le plus large visible dans le viewport lors du chargement initial. C'est généralement une image hero, une vidéo, ou un grand bloc de texte. Objectif : LCP inférieur à 2.5 secondes. Entre 2.5 et 4 secondes : à améliorer. Au-delà de 4 secondes : mauvais.</p>
<h3 id="optimiser-lcp">Comment optimiser le LCP</h3>
<p>Les principales causes d'un mauvais LCP : image hero trop lourde ou non préchargée, JavaScript bloquant le rendu, CSS critique non inliné, serveur lent (TTFB élevé). Solutions : utiliser le format WebP ou AVIF, ajouter loading="eager" et fetchpriority="high" à l'image LCP, précharger avec une balise link rel="preload", optimiser le TTFB avec un CDN, inliner le CSS critique.</p>
<h2 id="cls">CLS — Cumulative Layout Shift</h2>
<p>Le CLS mesure la stabilité visuelle de la page. Il quantifie les déplacements inattendus des éléments de la page pendant son chargement. Objectif : CLS inférieur à 0.1. Entre 0.1 et 0.25 : à améliorer. Au-delà de 0.25 : mauvais.</p>
<h3 id="causes-cls">Les principales causes de CLS</h3>
<p>Images sans dimensions explicites : toujours spécifier width et height sur les balises img. Publicités et embeds sans espace réservé : définissez une hauteur minimale. Polices web : utilisez font-display: swap et preload. Contenu injecté dynamiquement au-dessus du contenu existant.</p>
<blockquote><p>"Un CLS élevé est l'une des expériences les plus frustrantes sur mobile : vous êtes sur le point de cliquer sur un lien, et la page saute juste avant."</p></blockquote>
<h2 id="inp">INP — Interaction to Next Paint</h2>
<p>L'INP mesure la réactivité de la page aux interactions utilisateur (clics, touches, appuis sur le clavier). Il remplace le FID depuis mars 2024. Objectif : INP inférieur à 200ms. Entre 200 et 500ms : à améliorer. Au-delà de 500ms : mauvais.</p>
<h3 id="optimiser-inp">Optimiser l'INP</h3>
<p>Un mauvais INP est souvent causé par : du JavaScript lourd exécuté sur le thread principal, des gestionnaires d'événements trop complexes, du rendu React/Vue non optimisé. Solutions : découper les tâches longues (Long Tasks), utiliser les Web Workers pour les calculs lourds, différer le JavaScript non critique, optimiser les re-renders React avec useMemo et useCallback.</p>
<h2 id="mesurer">Mesurer vos Core Web Vitals</h2>
<p>Outils de mesure : Google Search Console (rapport CWV avec données réelles de terrain), PageSpeed Insights (données réelles + lab), Chrome DevTools (onglet Performance), Lighthouse (audit lab), CrUX Dashboard (données historiques par segment). Données de terrain vs. données lab : les données de terrain (RUM - Real User Monitoring) sont celles que Google utilise pour le classement. Les données lab sont utiles pour le débogage.</p>
<h2 id="conclusion">Vers un score parfait</h2>
<p>Obtenir un score parfait sur les Core Web Vitals est exigeant mais tout à fait atteignable. Les gains sont doubles : meilleure expérience utilisateur (taux de rebond réduit, conversions améliorées) et avantage SEO direct. Chez Stratègere, l'optimisation des Core Web Vitals fait partie de chaque audit SEO. Nos clients passent en moyenne d'un score de 45 à 85+ sur PageSpeed Insights en quelques semaines d'optimisation.</p>`
  }
];

export const getArticleBySlug = (slug: string) => articles.find(a => a.slug === slug);
export const getArticlesByCategory = (categorySlug: string) => articles.filter(a => a.categorySlug === categorySlug);
export const getFeaturedArticle = () => articles[0];
export const getRecentArticles = (count: number = 5) => articles.slice(0, count);

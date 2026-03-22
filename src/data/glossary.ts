export interface GlossaryTerm {
  slug: string;
  term: string;
  shortDef: string;
  definition: string;
  letter: string;
  relatedTerms: string[];
  relatedArticles: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: 'seo-on-page', term: 'SEO on-page', letter: 'S',
    shortDef: "Ensemble des optimisations réalisées directement sur les pages d'un site web.",
    definition: "Le SEO on-page (ou SEO on-site) désigne l'ensemble des optimisations réalisées directement sur les pages d'un site web pour améliorer son positionnement dans les résultats de recherche. Cela inclut l'optimisation des balises title et meta description, la structure des titres H1-H6, l'optimisation du contenu avec les mots-clés ciblés, les URLs, les images (balises alt), le maillage interne et l'amélioration de l'expérience utilisateur. Contrairement au SEO off-page qui dépend de facteurs externes, le SEO on-page est entièrement sous le contrôle du webmaster.",
    relatedTerms: ['balise-title', 'meta-description', 'maillage-interne'], relatedArticles: ['audit-seo-complet-guide']
  },
  {
    slug: 'backlink', term: 'Backlink', letter: 'B',
    shortDef: "Lien hypertexte provenant d'un site externe et pointant vers votre site.",
    definition: "Un backlink (ou lien entrant) est un lien hypertexte placé sur un site web externe qui pointe vers votre site. Les backlinks constituent l'un des facteurs de classement les plus importants de Google. Leur valeur dépend de plusieurs critères : l'autorité du site source, la pertinence thématique, le texte d'ancre utilisé, la position du lien dans la page et le caractère dofollow ou nofollow du lien. Une stratégie de netlinking vise à obtenir des backlinks de qualité pour renforcer l'autorité de votre domaine.",
    relatedTerms: ['netlinking', 'anchor-text', 'pagerank'], relatedArticles: ['audit-seo-complet-guide']
  },
  {
    slug: 'ctr', term: 'CTR', letter: 'C',
    shortDef: 'Taux de clic mesurant le rapport entre les impressions et les clics.',
    definition: "Le CTR (Click-Through Rate ou taux de clic) mesure le pourcentage d'utilisateurs qui cliquent sur votre résultat après l'avoir vu dans les pages de résultats de recherche (SERP). Il se calcule ainsi : CTR = (Clics / Impressions) × 100. Un CTR élevé indique que votre balise title et meta description sont attrayantes et pertinentes. Le CTR est un signal indirect pour Google : un résultat très cliqué peut bénéficier d'un meilleur positionnement.",
    relatedTerms: ['serp', 'balise-title', 'meta-description'], relatedArticles: ['audit-seo-complet-guide']
  },
  {
    slug: 'serp', term: 'SERP', letter: 'S',
    shortDef: 'Pages de résultats affichées par un moteur de recherche suite à une requête.',
    definition: "La SERP (Search Engine Results Page) est la page de résultats qu'affiche un moteur de recherche en réponse à une requête utilisateur. En 2026, les SERPs Google sont très enrichies et peuvent inclure : des résultats organiques classiques, des featured snippets (position zéro), des Knowledge Panels, des Local Packs (carte + fiches Google Business), des People Also Ask (questions connexes), des résultats d'images et de vidéos, des résultats Shopping. Comprendre la structure des SERPs est essentiel pour adapter sa stratégie SEO.",
    relatedTerms: ['featured-snippet', 'rich-snippet', 'knowledge-graph'], relatedArticles: ['guide-seo-local-2026']
  },
  {
    slug: 'balise-title', term: 'Balise Title', letter: 'B',
    shortDef: "Balise HTML définissant le titre d'une page, affiché dans les résultats de recherche.",
    definition: "La balise title est l'une des balises HTML les plus importantes pour le SEO. Elle définit le titre d'une page web, affiché dans les onglets du navigateur, les résultats de recherche (SERP) et lors du partage sur les réseaux sociaux. Pour être optimale, une balise title doit contenir le mot-clé principal, avoir une longueur de 50 à 60 caractères (pour éviter la troncature dans les SERPs), être unique pour chaque page, donner envie de cliquer. C'est un facteur de classement direct pour Google.",
    relatedTerms: ['meta-description', 'seo-on-page', 'ctr'], relatedArticles: ['audit-seo-complet-guide']
  },
  {
    slug: 'meta-description', term: 'Meta Description', letter: 'M',
    shortDef: "Balise HTML résumant le contenu d'une page, affichée sous le titre dans les SERPs.",
    definition: "La meta description est une balise HTML qui fournit un court résumé du contenu d'une page web. Elle apparaît sous le titre dans les résultats de recherche Google. Bien qu'elle ne soit pas un facteur de classement direct, une meta description optimisée influence fortement le CTR. Longueur idéale : 150 à 160 caractères. Elle doit inclure le mot-clé principal (Google le met en gras), présenter clairement la valeur de la page et contenir un appel à l'action indirect.",
    relatedTerms: ['balise-title', 'ctr', 'seo-on-page'], relatedArticles: ['audit-seo-complet-guide']
  },
  {
    slug: 'crawl', term: 'Crawl', letter: 'C',
    shortDef: "Processus par lequel un robot de recherche explore les pages d'un site web.",
    definition: "Le crawl (ou exploration) est le processus par lequel les robots des moteurs de recherche (Googlebot, Bingbot...) parcourent le web en suivant les liens hypertextes pour découvrir et analyser les pages web. Googlebot commence par une liste d'URLs connues, visite ces pages, en extrait le contenu et suit les liens vers de nouvelles pages. Pour optimiser le crawl de votre site : créez un sitemap XML, optimisez votre robots.txt, améliorez le maillage interne, réduisez les pages orphelines et évitez les pages de faible qualité qui \"gaspillent\" le crawl budget.",
    relatedTerms: ['indexation', 'maillage-interne', 'seo-on-page'], relatedArticles: ['audit-seo-complet-guide']
  },
  {
    slug: 'indexation', term: 'Indexation', letter: 'I',
    shortDef: 'Processus par lequel Google enregistre une page dans sa base de données.',
    definition: "L'indexation est l'étape qui suit le crawl : après avoir exploré une page, Google l'analyse et peut l'intégrer dans son index — sa gigantesque base de données de pages web. Une page indexée est une page qui peut potentiellement apparaître dans les résultats de recherche. Pour vérifier l'indexation d'une page, utilisez l'opérateur site: dans Google ou l'outil d'inspection d'URL dans Google Search Console. Attention : être indexé ne signifie pas être bien positionné — c'est simplement un prérequis.",
    relatedTerms: ['crawl', 'google-search-console', 'seo-on-page'], relatedArticles: ['audit-seo-complet-guide']
  },
  {
    slug: 'pagerank', term: 'PageRank', letter: 'P',
    shortDef: "Algorithme de Google mesurant l'autorité d'une page selon ses liens entrants.",
    definition: "Le PageRank est l'algorithme fondateur de Google, créé par Larry Page et Sergey Brin. Il mesure l'autorité d'une page web en analysant la quantité et la qualité des backlinks qui pointent vers elle. Le principe : une page qui reçoit beaucoup de liens de pages elles-mêmes autorités a un PageRank élevé. Bien que Google n'affiche plus le PageRank public depuis 2016, l'algorithme continue d'exister et d'influencer les classements. Des métriques comme le Domain Rating (Ahrefs) ou le Domain Authority (Moz) tentent de l'approximer.",
    relatedTerms: ['backlink', 'netlinking', 'anchor-text'], relatedArticles: ['audit-seo-complet-guide']
  },
  {
    slug: 'anchor-text', term: 'Anchor Text', letter: 'A',
    shortDef: "Texte cliquable d'un lien hypertexte, signal important pour les moteurs de recherche.",
    definition: "L'anchor text (ou texte d'ancre) est le texte visible et cliquable d'un lien hypertexte. C'est un signal important pour Google, car il indique le sujet de la page vers laquelle pointe le lien. Un profil d'ancres naturel inclut : des ancres exact match (mot-clé exact), des ancres partial match (variation du mot-clé), des ancres de marque (nom de l'entreprise), des ancres génériques (cliquez ici, en savoir plus), des ancres URL (www.example.com). Une sur-optimisation des ancres exact match peut être perçue comme une manipulation et pénaliser le site.",
    relatedTerms: ['backlink', 'netlinking', 'pagerank'], relatedArticles: ['audit-seo-complet-guide']
  },
  {
    slug: 'canonical', term: 'Balise Canonical', letter: 'B',
    shortDef: 'Balise HTML indiquant à Google la version préférée d\'une page dupliquée.',
    definition: "La balise canonical (rel=\"canonical\") est une balise HTML qui indique aux moteurs de recherche quelle est la version \"officielle\" d'une page lorsqu'il existe plusieurs URLs avec un contenu identique ou très similaire. Elle résout les problèmes de contenu dupliqué sans supprimer les pages. Exemple d'usage : pages avec et sans www, pages avec paramètres UTM, pages paginées, versions HTTP et HTTPS d'une même page. La canonical doit pointer vers l'URL canonique dans la balise head de chaque page concernée.",
    relatedTerms: ['seo-on-page', 'indexation', 'hreflang'], relatedArticles: ['audit-seo-complet-guide']
  },
  {
    slug: 'hreflang', term: 'Hreflang', letter: 'H',
    shortDef: 'Attribut HTML indiquant aux moteurs la langue et le pays cible d\'une page.',
    definition: "L'attribut hreflang est une balise HTML qui indique à Google la langue et éventuellement le pays cible d'une page web. Il est essentiel pour les sites multilingues ou multirégionaux pour éviter que Google affiche la mauvaise version linguistique à un utilisateur. Exemple : hreflang=\"fr\" pour le contenu en français, hreflang=\"fr-BE\" pour le français de Belgique, hreflang=\"x-default\" pour la version par défaut. Les erreurs hreflang sont fréquentes et peuvent provoquer des problèmes d'indexation internationaux.",
    relatedTerms: ['canonical', 'indexation', 'seo-on-page'], relatedArticles: []
  },
  {
    slug: 'core-web-vitals', term: 'Core Web Vitals', letter: 'C',
    shortDef: 'Métriques de performance web utilisées par Google comme facteur de classement.',
    definition: "Les Core Web Vitals sont un ensemble de métriques défini par Google pour mesurer l'expérience utilisateur sur le web. Depuis le Page Experience Update de 2021, ils constituent des facteurs de classement officiels. Les trois métriques actuelles sont : LCP (Largest Contentful Paint) — vitesse de chargement du plus grand élément visible, objectif < 2.5s ; CLS (Cumulative Layout Shift) — stabilité visuelle de la page, objectif < 0.1 ; INP (Interaction to Next Paint) — réactivité aux interactions, objectif < 200ms. Ils se mesurent avec PageSpeed Insights, Search Console ou Lighthouse.",
    relatedTerms: ['google-search-console', 'seo-on-page'], relatedArticles: ['core-web-vitals-guide']
  },
  {
    slug: 'e-e-a-t', term: 'E-E-A-T', letter: 'E',
    shortDef: 'Critères Google : Expérience, Expertise, Autorité, Fiabilité d\'un contenu.',
    definition: "E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) est un cadre d'évaluation de la qualité du contenu utilisé par les Quality Raters de Google. Le premier E (Experience) a été ajouté fin 2022 — Google valorise désormais le contenu basé sur une expérience réelle et vécue. Expertise : l'auteur est-il qualifié sur le sujet ? Autorité : le site est-il reconnu comme référence dans son secteur ? Fiabilité : le contenu est-il exact, transparent et sûr ? L'E-E-A-T est particulièrement crucial pour les sujets YMYL (Your Money or Your Life).",
    relatedTerms: ['seo-on-page', 'netlinking'], relatedArticles: ['content-marketing-strategie-2026']
  },
  {
    slug: 'tf-idf', term: 'TF-IDF', letter: 'T',
    shortDef: "Mesure statistique de la pertinence d'un terme dans un document par rapport à une collection.",
    definition: "TF-IDF (Term Frequency-Inverse Document Frequency) est une mesure statistique utilisée en traitement du langage naturel pour évaluer l'importance d'un mot dans un document par rapport à une collection de documents. En SEO, l'analyse TF-IDF permet d'identifier les termes et expressions à inclure dans un contenu pour qu'il soit considéré comme sémantiquement complet par Google. Des outils comme Surfer SEO ou SEMrush utilisent le TF-IDF pour recommander les mots-clés à intégrer dans un contenu optimisé.",
    relatedTerms: ['seo-on-page', 'longue-traine'], relatedArticles: ['content-marketing-strategie-2026']
  },
  {
    slug: 'netlinking', term: 'Netlinking', letter: 'N',
    shortDef: "Stratégie d'acquisition de backlinks pour renforcer l'autorité d'un site.",
    definition: "Le netlinking (ou link building) est la stratégie visant à obtenir des liens entrants (backlinks) de qualité provenant d'autres sites web pour renforcer l'autorité de son propre site aux yeux des moteurs de recherche. Les principales techniques de netlinking white hat : création de contenu de qualité qui attire naturellement des liens, guest posting sur des sites partenaires, relations presse et digital PR, récupération de liens perdus (link reclamation), création de ressources (études, infographies, outils) qui génèrent des liens naturellement.",
    relatedTerms: ['backlink', 'anchor-text', 'pagerank'], relatedArticles: ['audit-seo-complet-guide']
  },
  {
    slug: 'maillage-interne', term: 'Maillage interne', letter: 'M',
    shortDef: "Réseau de liens hypertextes entre les pages d'un même site web.",
    definition: "Le maillage interne désigne l'ensemble des liens hypertextes qui relient les pages d'un même site web entre elles. Un maillage interne bien structuré remplit plusieurs fonctions : il facilite la navigation des utilisateurs, aide les robots de Google à découvrir et crawler toutes les pages, distribue l'autorité de page (PageRank) de manière stratégique et renforce la pertinence thématique des pages importantes. La règle des 3 clics recommande que chaque page soit accessible depuis la page d'accueil en 3 clics maximum.",
    relatedTerms: ['crawl', 'pagerank', 'seo-on-page'], relatedArticles: ['audit-seo-complet-guide']
  },
  {
    slug: 'google-search-console', term: 'Google Search Console', letter: 'G',
    shortDef: "Outil gratuit Google pour surveiller et optimiser la présence d'un site dans Search.",
    definition: "Google Search Console (GSC, anciennement Webmaster Tools) est un outil gratuit proposé par Google qui permet aux webmasters de surveiller et d'optimiser la présence de leur site dans les résultats de recherche Google. Fonctionnalités principales : rapport de performances (impressions, clics, CTR, positions), rapport d'indexation (pages indexées, erreurs de crawl), inspection d'URL, rapport Core Web Vitals, rapport sur les backlinks, soumission de sitemap, alertes en cas de problème de sécurité ou de pénalité manuelle. C'est un outil indispensable pour tout SEO.",
    relatedTerms: ['crawl', 'indexation', 'core-web-vitals'], relatedArticles: ['audit-seo-complet-guide', 'core-web-vitals-guide']
  },
  {
    slug: 'google-analytics', term: 'Google Analytics', letter: 'G',
    shortDef: 'Plateforme d\'analyse web de Google mesurant le comportement des visiteurs.',
    definition: "Google Analytics (GA4 depuis 2023) est la plateforme d'analyse web de Google, utilisée par plus de 28 millions de sites web dans le monde. Elle permet de mesurer et d'analyser le comportement des visiteurs : sources de trafic (organique, payant, social, direct), pages les plus visitées, durée des sessions, taux de rebond, parcours utilisateur, conversions et objectifs. GA4 est basé sur un modèle événementiel (vs. sessions dans Universal Analytics), intègre une IA predictive et est compatible avec Google Ads pour une attribution multi-touch précise.",
    relatedTerms: ['kpi-digital', 'conversion', 'google-search-console'], relatedArticles: []
  },
  {
    slug: 'kpi-digital', term: 'KPI Digital', letter: 'K',
    shortDef: "Indicateurs clés de performance mesurant l'efficacité d'une stratégie digitale.",
    definition: "Les KPI (Key Performance Indicators) digitaux sont les indicateurs clés de performance utilisés pour mesurer l'efficacité d'une stratégie marketing digitale. En SEO et content marketing, les KPI essentiels sont : trafic organique mensuel, nombre de mots-clés positionnés (top 3, top 10), taux de clic (CTR) moyen, taux de conversion, coût par lead (CPL), nombre de backlinks acquis, autorité de domaine (DR/DA), Core Web Vitals scores. La définition des bons KPI, en lien avec les objectifs business, est la première étape de toute stratégie.",
    relatedTerms: ['google-analytics', 'conversion', 'ctr'], relatedArticles: ['content-marketing-strategie-2026']
  },
  {
    slug: 'taux-de-rebond', term: 'Taux de rebond', letter: 'T',
    shortDef: "Pourcentage de visiteurs qui quittent un site après n'avoir consulté qu'une seule page.",
    definition: "Le taux de rebond (bounce rate) est le pourcentage de sessions au cours desquelles l'utilisateur a quitté le site depuis la page d'entrée sans interagir avec d'autres pages. Dans Universal Analytics, un taux de rebond élevé était souvent considéré comme un signal négatif. Dans GA4, cette métrique a été remplacée par le \"taux d'engagement\" (inverse du rebond) : une session est \"engagée\" si elle dure plus de 10 secondes, génère un événement de conversion, ou inclut au moins 2 pages vues. Un taux de rebond \"normal\" varie fortement selon le type de page.",
    relatedTerms: ['google-analytics', 'kpi-digital', 'core-web-vitals'], relatedArticles: []
  },
  {
    slug: 'conversion', term: 'Conversion', letter: 'C',
    shortDef: "Action souhaitée accomplie par un visiteur : achat, formulaire, appel...",
    definition: "En marketing digital, une conversion est l'accomplissement d'une action souhaitée par un visiteur d'un site web. Les conversions peuvent être macros (objectifs principaux : achat, demande de devis, prise de rendez-vous, formulaire de contact) ou micros (objectifs secondaires : inscription newsletter, téléchargement d'un guide, vue d'une vidéo, scroll 75%). Le taux de conversion est le pourcentage de visiteurs qui accomplissent cette action. L'optimisation du taux de conversion (CRO) vise à maximiser ce pourcentage.",
    relatedTerms: ['tunnel-de-conversion', 'kpi-digital', 'google-analytics'], relatedArticles: ['content-marketing-strategie-2026']
  },
  {
    slug: 'tunnel-de-conversion', term: 'Tunnel de conversion', letter: 'T',
    shortDef: "Parcours utilisateur depuis la première visite jusqu'à la conversion finale.",
    definition: "Le tunnel de conversion (ou entonnoir de conversion) représente le parcours qu'emprunte un prospect depuis sa première interaction avec une marque jusqu'à la conversion finale. Il se visualise comme un entonnoir car le nombre de personnes diminue à chaque étape. Structure classique : Awareness (prise de conscience du besoin), Interest (intérêt pour une solution), Consideration (évaluation des options), Intent (intention d'achat), Conversion (passage à l'acte), Loyalty (fidélisation). En SEO et content marketing, on crée du contenu adapté à chaque étape du tunnel.",
    relatedTerms: ['conversion', 'kpi-digital', 'intention-de-recherche'], relatedArticles: ['content-marketing-strategie-2026']
  },
  {
    slug: 'intention-de-recherche', term: 'Intention de recherche', letter: 'I',
    shortDef: "Objectif réel d'un utilisateur derrière sa requête dans un moteur de recherche.",
    definition: "L'intention de recherche (search intent) est l'objectif réel qu'un utilisateur cherche à accomplir lorsqu'il tape une requête dans un moteur de recherche. Google classe les intentions en 4 catégories : Informationnelle (l'utilisateur cherche à apprendre : \"comment faire un audit SEO\"), Navigationnelle (il cherche un site spécifique : \"Google Search Console\"), Commerciale (il compare des options : \"meilleure agence SEO Montpellier\"), Transactionnelle (il est prêt à agir : \"agence SEO devis gratuit\"). Comprendre et aligner son contenu sur l'intention de recherche est fondamental en SEO moderne.",
    relatedTerms: ['longue-traine', 'serp', 'tunnel-de-conversion'], relatedArticles: ['content-marketing-strategie-2026']
  },
  {
    slug: 'longue-traine', term: 'Longue traîne', letter: 'L',
    shortDef: 'Requêtes de recherche longues et spécifiques, moins concurrentielles mais très ciblées.',
    definition: "La longue traîne (long tail) désigne les requêtes de recherche composées de plusieurs mots, très spécifiques et donc moins recherchées individuellement — mais qui représentent collectivement la grande majorité du volume de recherche. Exemple : \"référencement\" (tête de traîne, très concurrentiel) vs. \"agence SEO spécialisée e-commerce Montpellier\" (longue traîne, moins de concurrence, intention très ciblée). En SEO, cibler la longue traîne permet d'attirer du trafic qualifié plus facilement, avec un taux de conversion souvent supérieur aux requêtes génériques.",
    relatedTerms: ['intention-de-recherche', 'seo-on-page', 'tf-idf'], relatedArticles: ['content-marketing-strategie-2026']
  },
  {
    slug: 'requete-transactionnelle', term: 'Requête transactionnelle', letter: 'R',
    shortDef: "Requête signalant une intention d'achat ou d'action immédiate.",
    definition: "Une requête transactionnelle est une recherche effectuée par un utilisateur qui a l'intention d'effectuer une action immédiate : acheter, s'inscrire, télécharger, contacter. Ces requêtes contiennent souvent des mots comme \"acheter\", \"commander\", \"prix\", \"devis\", \"tarif\", \"gratuit\", \"en ligne\". Elles se situent en bas du tunnel de conversion et ont généralement un taux de conversion plus élevé. En SEO, les pages transactionnelles (pages de service, pages produit, landing pages) doivent être optimisées pour ces requêtes.",
    relatedTerms: ['intention-de-recherche', 'tunnel-de-conversion', 'longue-traine'], relatedArticles: ['content-marketing-strategie-2026']
  },
  {
    slug: 'featured-snippet', term: 'Featured Snippet', letter: 'F',
    shortDef: 'Encadré en position zéro dans Google affichant directement une réponse.',
    definition: "Un featured snippet (ou position zéro) est un encadré spécial qui apparaît tout en haut des résultats Google, avant même le premier résultat organique. Il affiche directement une réponse extraite d'une page web : paragraphe de texte, liste à puces, tableau ou vidéo. Obtenir un featured snippet peut multiplier le CTR d'une page par 2 à 3. Pour l'obtenir : structurez votre contenu avec des questions-réponses claires, utilisez des listes et des tableaux, répondez directement à la question dans les 40 à 60 premiers mots après le titre.",
    relatedTerms: ['serp', 'rich-snippet', 'schema-org'], relatedArticles: ['audit-seo-complet-guide']
  },
  {
    slug: 'knowledge-graph', term: 'Knowledge Graph', letter: 'K',
    shortDef: 'Base de connaissances Google reliant entités et concepts pour enrichir les résultats.',
    definition: "Le Knowledge Graph est une base de données sémantique développée par Google depuis 2012, qui relie des entités (personnes, lieux, organisations, concepts) et leurs relations entre elles. Il alimente les Knowledge Panels (encadrés d'information dans les SERPs), les réponses directes de Google et l'assistant Google. Pour les entreprises, apparaître dans le Knowledge Graph renforce la crédibilité et la visibilité de la marque. Schema.org et des données structurées bien implémentées facilitent l'intégration dans le Knowledge Graph.",
    relatedTerms: ['schema-org', 'rich-snippet', 'serp'], relatedArticles: []
  },
  {
    slug: 'schema-org', term: 'Schema.org', letter: 'S',
    shortDef: 'Vocabulaire de balisage sémantique standardisé pour enrichir les données des pages web.',
    definition: "Schema.org est un vocabulaire de données structurées développé conjointement par Google, Microsoft, Yahoo et Yandex. Il permet aux webmasters de baliser le contenu de leurs pages pour aider les moteurs de recherche à comprendre leur nature et leur contexte. Implémenté en JSON-LD (format recommandé par Google), microdata ou RDFa, Schema.org propose des types pour : articles, organisations, personnes, produits, événements, recettes, FAQ, HowTo, etc. Une implémentation correcte peut générer des rich snippets et améliorer le CTR dans les SERPs.",
    relatedTerms: ['rich-snippet', 'knowledge-graph', 'featured-snippet'], relatedArticles: []
  },
  {
    slug: 'rich-snippet', term: 'Rich Snippet', letter: 'R',
    shortDef: 'Résultat enrichi dans les SERPs grâce aux données structurées Schema.org.',
    definition: "Un rich snippet est un résultat de recherche enrichi visuellement grâce à l'implémentation de données structurées Schema.org. Il peut afficher des étoiles de notation, des prix, des photos de recettes, des temps de préparation, des FAQ, des étapes de guide pratique, etc. Les rich snippets améliorent significativement le CTR en rendant votre résultat plus attractif dans la SERP. Pour les obtenir : implémentez le balisage Schema.org approprié, vérifiez avec le test des résultats enrichis de Google, et attendez que Google indexe vos données (quelques jours à quelques semaines).",
    relatedTerms: ['schema-org', 'serp', 'ctr'], relatedArticles: []
  },
  {
    slug: 'amp', term: 'AMP', letter: 'A',
    shortDef: 'Accelerated Mobile Pages : framework Google pour des pages mobiles ultra-rapides.',
    definition: "AMP (Accelerated Mobile Pages) est un framework open source développé par Google pour créer des pages web qui se chargent quasi-instantanément sur mobile. Les pages AMP sont des versions simplifiées des pages web, avec un JavaScript limité et hébergées sur les serveurs cache de Google. Depuis 2021, l'AMP n'est plus obligatoire pour apparaître dans les Google News ou les Top Stories (remplacé par les Core Web Vitals). Son adoption a décliné, mais certains éditeurs de presse continuent à l'utiliser pour garantir une vitesse maximale sur mobile.",
    relatedTerms: ['core-web-vitals', 'seo-on-page'], relatedArticles: ['core-web-vitals-guide']
  }
];

export const getTermBySlug = (slug: string) => glossaryTerms.find(t => t.slug === slug);
export const getTermsByLetter = () => {
  const grouped: Record<string, GlossaryTerm[]> = {};
  for (const term of glossaryTerms) {
    if (!grouped[term.letter]) grouped[term.letter] = [];
    grouped[term.letter].push(term);
  }
  return grouped;
};

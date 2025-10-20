export interface Company {
  id: number;
  name: string;
  sector: string;
  description: string;
  website: string;
  location: string;
  employees: string;
  logo: string;
  specialties: string[];
}

// Fonction pour obtenir un logo basé sur l'ID de l'entreprise
const getLogo = (companyId: number) => `/img/entreprise/${companyId}.png`;

export const companiesData: Company[] = [
  {
    id: 1,
    name: "SOPAL",
    sector: "Industrie Alimentaire",
    description: "SOPAL (Société de Plats Alimentaires) est une entreprise tunisienne leader dans l'industrie agroalimentaire. Avec son slogan 'La Force de la Qualité', SOPAL se spécialise dans la production et la distribution de produits alimentaires de haute qualité. L'entreprise s'engage à fournir des aliments nutritifs et savoureux tout en respectant les normes internationales de qualité et de sécurité alimentaire.",
    website: "www.sopal.com.tn",
    location: "Tunis, Tunisie",
    employees: "500+",
    logo: getLogo(1),
    specialties: ["Production Alimentaire", "Contrôle Qualité", "Distribution"]
  },
  {
    id: 2,
    name: "AMEN BANK",
    sector: "Services Bancaires",
    description: "AMEN BANK est une banque tunisienne de référence offrant une gamme complète de services bancaires et financiers. Avec une approche moderne et innovante, la banque accompagne ses clients particuliers et entreprises dans leurs projets et investissements. AMEN BANK se distingue par son expertise en financement et ses solutions bancaires digitales.",
    website: "www.amenbank.com.tn",
    location: "Tunis, Tunisie",
    employees: "1000+",
    logo: getLogo(2),
    specialties: ["Banque Particuliers", "Banque Entreprises", "Services Digitaux"]
  },
  {
    id: 3,
    name: "POULINA GROUP HOLDING",
    sector: "Conglomérat Industriel",
    description: "Poulina Group Holding est l'un des plus grands conglomérats tunisiens, présent dans de multiples secteurs d'activité. Le groupe se distingue par sa diversification stratégique et son leadership dans l'industrie agroalimentaire, l'acier, et les matériaux de construction. Avec une vision d'expansion et d'innovation, Poulina Group contribue significativement à l'économie tunisienne.",
    website: "www.poulina.com.tn",
    location: "Tunis, Tunisie",
    employees: "5000+",
    logo: getLogo(3),
    specialties: ["Agroalimentaire", "Sidérurgie", "Matériaux de Construction"]
  },
  {
    id: 4,
    name: "OneTech",
    sector: "Technologies & Innovation",
    description: "OneTech est une entreprise tunisienne spécialisée dans les solutions technologiques innovantes. Avec une approche moderne et dynamique, OneTech développe des solutions digitales sur mesure pour accompagner la transformation numérique des entreprises. L'entreprise se distingue par son expertise technique et sa capacité d'adaptation aux besoins spécifiques de chaque client.",
    website: "www.onetech.tn",
    location: "Tunis, Tunisie",
    employees: "100-200",
    logo: getLogo(4),
    specialties: ["Développement Logiciel", "Transformation Digitale", "Conseil IT"]
  },
  {
    id: 5,
    name: "TELNET Holding",
    sector: "Télécommunications & IT",
    description: "TELNET Holding est un groupe tunisien leader dans les télécommunications et les technologies de l'information. Le groupe offre une gamme complète de services incluant l'infrastructure réseau, les solutions cloud, et les services de télécommunications. TELNET se positionne comme un partenaire de confiance pour la connectivité et les solutions IT en Tunisie et en Afrique.",
    website: "www.telnet.tn",
    location: "Tunis, Tunisie",
    employees: "1000+",
    logo: getLogo(5),
    specialties: ["Réseaux & Connectivité", "Solutions Cloud", "Télécommunications"]
  },
  {
    id: 6,
    name: "TOKKI - The House of Digital Experts",
    sector: "Marketing Digital & Communication",
    description: "TOKKI est une agence digitale tunisienne spécialisée dans le marketing digital et la communication. Avec son positionnement 'The House of Digital Experts', TOKKI accompagne les marques dans leur stratégie digitale en offrant des solutions créatives et innovantes. L'agence se distingue par son approche holistique du digital et son expertise multi-canal.",
    website: "www.tokki.tn",
    location: "Tunis, Tunisie",
    employees: "50-100",
    logo: getLogo(6),
    specialties: ["Stratégie Digitale", "Création de Contenu", "Social Media Marketing"]
  },
  {
    id: 7,
    name: "SFBT - Société de Football de Brabant Tunisien",
    sector: "Sport & Management",
    description: "La SFBT représente l'excellence dans le management sportif en Tunisie. Cette organisation se consacre au développement du football tunisien à travers des programmes de formation, de management d'équipes et de développement de talents. La SFBT contribue activement à l'épanouissement du sport national et à la formation de la prochaine génération de footballeurs tunisiens.",
    website: "www.sfbt.tn",
    location: "Tunis, Tunisie",
    employees: "100-200",
    logo: getLogo(7),
    specialties: ["Management Sportif", "Formation de Talents", "Développement Football"]
  },
  {
    id: 8,
    name: "Microsoft Tunisie",
    sector: "Technologies & Logiciels",
    description: "Microsoft Tunisie est la filiale locale du géant technologique mondial Microsoft. L'entreprise offre une gamme complète de solutions technologiques incluant les systèmes d'exploitation, les applications de productivité, les services cloud Azure, et les solutions d'intelligence artificielle. Microsoft Tunisie accompagne la transformation digitale des entreprises tunisiennes et contribue au développement de l'écosystème technologique local.",
    website: "www.microsoft.com/fr-tn",
    location: "Tunis, Tunisie",
    employees: "200-300",
    logo: getLogo(8),
    specialties: ["Cloud Computing", "Intelligence Artificielle", "Solutions Entreprises"]
  },
  {
    id: 9,
    name: "SAFRAN",
    sector: "Aéronautique & Défense",
    description: "SAFRAN est un groupe international de haute technologie présent en Tunisie, opérant dans les domaines de l'aéronautique, de l'espace et de la défense. Le groupe développe et produit des systèmes de propulsion, d'équipements aéronautiques et spatiaux, ainsi que des systèmes de défense. SAFRAN Tunisie contribue à l'excellence technologique et à l'innovation dans le secteur aérospatial.",
    website: "www.safran-group.com",
    location: "Tunis, Tunisie",
    employees: "500+",
    logo: getLogo(9),
    specialties: ["Propulsion Aéronautique", "Systèmes Aérospatiaux", "Technologies de Défense"]
  },
  {
    id: 10,
    name: "PwC Tunisie",
    sector: "Conseil & Audit",
    description: "PricewaterhouseCoopers (PwC) Tunisie est l'une des plus importantes firmes de conseil et d'audit au monde, présente en Tunisie. PwC offre des services de conseil en management, d'audit financier, de conseil fiscal et juridique, ainsi que des services de transformation digitale. L'entreprise accompagne les organisations tunisiennes dans leur croissance et leur développement stratégique.",
    website: "www.pwc.com/tn",
    location: "Tunis, Tunisie",
    employees: "200-300",
    logo: getLogo(10),
    specialties: ["Audit & Assurance", "Conseil en Management", "Transformation Digitale"]
  },
  {
    id: 11,
    name: "TechnoServ Solutions",
    sector: "Services Technologiques",
    description: "TechnoServ Solutions est une entreprise tunisienne spécialisée dans les services technologiques et l'intégration de systèmes. L'entreprise propose des solutions IT complètes incluant le développement d'applications, l'infrastructure réseau, et la maintenance informatique. TechnoServ se distingue par son approche client-centrée et sa capacité à fournir des solutions sur mesure.",
    website: "www.technoserv.tn",
    location: "Tunis, Tunisie",
    employees: "150-250",
    logo: getLogo(11),
    specialties: ["Intégration Systèmes", "Développement Applications", "Support IT"]
  },
  {
    id: 12,
    name: "EduTech Solutions",
    sector: "Éducation & Technologie",
    description: "EduTech Solutions développe des plateformes d'apprentissage en ligne et des solutions éducatives digitales. Partenaire de plusieurs universités tunisiennes, l'entreprise révolutionne l'éducation grâce aux technologies numériques. EduTech propose des solutions d'e-learning, de réalité virtuelle éducative et de gamification pour améliorer l'expérience d'apprentissage.",
    website: "www.edutech-solutions.tn",
    location: "Tunis, Tunisie",
    employees: "80-120",
    logo: getLogo(12),
    specialties: ["E-Learning", "Réalité Virtuelle", "Gamification"]
  },
  {
    id: 13,
    name: "HealthTech Innovations",
    sector: "Santé & Technologie",
    description: "HealthTech Innovations révolutionne le secteur de la santé avec des solutions de télémédecine et des dispositifs médicaux connectés. L'entreprise développe des applications de santé digitale, des plateformes de gestion hospitalière et des solutions de suivi patient à distance. HealthTech contribue à moderniser le système de santé tunisien.",
    website: "www.healthtech-innovations.tn",
    location: "Tunis, Tunisie",
    employees: "100-150",
    logo: getLogo(13),
    specialties: ["Télémédecine", "Dispositifs Connectés", "Dossier Médical Électronique"]
  },
  {
    id: 14,
    name: "Green Building Solutions",
    sector: "Construction Durable",
    description: "Green Building Solutions est spécialisée dans la construction écologique et les bâtiments intelligents. Pionnier de la certification environnementale en Tunisie, l'entreprise développe des projets de construction durable en utilisant des matériaux écologiques et des technologies d'efficacité énergétique. Green Building contribue à un environnement urbain plus durable.",
    website: "www.green-building.tn",
    location: "Tunis, Tunisie",
    employees: "200-300",
    logo: getLogo(14),
    specialties: ["Construction Écologique", "Bâtiments Intelligents", "Certification Verte"]
  },
  {
    id: 15,
    name: "CyberSecurity Pro",
    sector: "Cybersécurité",
    description: "CyberSecurity Pro protège les entreprises contre les cybermenaces avec des solutions de sécurité avancées. Expert en audit de sécurité et formation, l'entreprise offre des services de conseil en cybersécurité, de mise en place de SOC (Security Operations Center), et de formation des équipes IT. CyberSecurity Pro est le partenaire de confiance pour la sécurité informatique en Tunisie.",
    website: "www.cybersecurity-pro.tn",
    location: "Tunis, Tunisie",
    employees: "60-80",
    logo: getLogo(15),
    specialties: ["Audit Sécurité", "Formation Cybersécurité", "SOC"]
  },
  {
    id: 16,
    name: "DataCorp Analytics",
    sector: "Big Data & Analytics",
    description: "DataCorp Analytics aide les entreprises à valoriser leurs données avec des solutions d'analyse avancée et de business intelligence. L'entreprise développe des plateformes de visualisation de données, des modèles prédictifs et des solutions d'intelligence artificielle pour optimiser les performances business. DataCorp transforme les données en avantage concurrentiel.",
    website: "www.datacorp-analytics.tn",
    location: "Tunis, Tunisie",
    employees: "120-150",
    logo: getLogo(16),
    specialties: ["Business Intelligence", "Data Visualization", "Analyse Prédictive"]
  },
  {
    id: 17,
    name: "Fashion Tech",
    sector: "Mode & Technologie",
    description: "Fashion Tech combine mode et technologie pour créer des vêtements intelligents et des solutions de personnalisation. Innovation dans le textile connecté, l'entreprise développe des produits fashion-tech incluant des vêtements avec capteurs intégrés et des solutions d'impression 3D pour la mode. Fashion Tech révolutionne l'industrie textile tunisienne.",
    website: "www.fashion-tech.tn",
    location: "Monastir, Tunisie",
    employees: "70-100",
    logo: getLogo(17),
    specialties: ["Vêtements Connectés", "Impression 3D", "Personnalisation"]
  },
  {
    id: 18,
    name: "RetailTech Solutions",
    sector: "Commerce & Retail",
    description: "RetailTech Solutions modernise le commerce de détail avec des solutions de caisse intelligente, gestion d'inventaire et analyse client. L'entreprise propose des systèmes de point de vente avancés, des solutions de gestion d'inventaire en temps réel et des outils d'analyse comportementale des clients pour optimiser les performances des commerces.",
    website: "www.retailtech-solutions.tn",
    location: "Sousse, Tunisie",
    employees: "80-120",
    logo: getLogo(18),
    specialties: ["Caisse Intelligente", "Gestion Inventaire", "Analytics Client"]
  },
  {
    id: 19,
    name: "Maritime Services",
    sector: "Services Maritimes",
    description: "Maritime Services optimise les opérations portuaires avec des solutions digitales. Leader dans la gestion des terminaux et la logistique maritime, l'entreprise développe des systèmes de tracking de cargo, de gestion portuaire automatisée et d'optimisation des flux logistiques. Maritime Services contribue à l'efficacité du commerce maritime tunisien.",
    website: "www.maritime-services.tn",
    location: "Bizerte, Tunisie",
    employees: "300-400",
    logo: getLogo(19),
    specialties: ["Gestion Portuaire", "Logistique Maritime", "Tracking Cargo"]
  },
  {
    id: 20,
    name: "FoodTech Innovations",
    sector: "Agroalimentaire Tech",
    description: "FoodTech Innovations révolutionne l'industrie agroalimentaire avec des solutions de traçabilité, qualité et automatisation de production. L'entreprise développe des systèmes de contrôle qualité automatisés, des solutions de traçabilité blockchain pour l'alimentation et des technologies d'automatisation pour l'industrie alimentaire.",
    website: "www.foodtech-innovations.tn",
    location: "Béja, Tunisie",
    employees: "150-200",
    logo: getLogo(20),
    specialties: ["Traçabilité Alimentaire", "Contrôle Qualité", "Automatisation"]
  },
  {
    id: 21,
    name: "Smart City Solutions",
    sector: "Ville Intelligente",
    description: "Smart City Solutions développe des technologies pour les villes intelligentes. Spécialisée dans l'éclairage public intelligent et la gestion des déchets, l'entreprise propose des solutions IoT pour l'optimisation urbaine, des systèmes de transport intelligent et des plateformes de gestion énergétique pour les municipalités.",
    website: "www.smartcity-solutions.tn",
    location: "Tunis, Tunisie",
    employees: "100-150",
    logo: getLogo(21),
    specialties: ["Éclairage Intelligent", "Gestion Déchets", "Mobilité Urbaine"]
  },
  {
    id: 22,
    name: "Gaming Studio",
    sector: "Jeux Vidéo",
    description: "Gaming Studio développe des jeux mobiles et des applications de réalité augmentée. Studio créatif reconnu dans le développement de serious games, l'entreprise crée des expériences ludiques innovantes pour l'éducation, la formation professionnelle et le divertissement. Gaming Studio contribue à l'émergence de l'industrie du jeu vidéo en Tunisie.",
    website: "www.gaming-studio.tn",
    location: "Tunis, Tunisie",
    employees: "50-80",
    logo: getLogo(22),
    specialties: ["Jeux Mobiles", "Réalité Augmentée", "Serious Games"]
  },
  {
    id: 23,
    name: "CleanTech Energy",
    sector: "Technologies Propres",
    description: "CleanTech Energy développe des solutions de technologies propres pour réduire l'empreinte carbone des entreprises. Expert en efficacité énergétique, l'entreprise propose des audits environnementaux, des solutions de réduction des émissions carbone et des technologies d'énergie renouvelable pour accompagner la transition écologique des entreprises.",
    website: "www.cleantech-energy.tn",
    location: "Gabès, Tunisie",
    employees: "120-160",
    logo: getLogo(23),
    specialties: ["Efficacité Énergétique", "Réduction Carbone", "Audit Environnemental"]
  },
  {
    id: 24,
    name: "AI Robotics",
    sector: "Robotique & IA",
    description: "AI Robotics conçoit et fabrique des robots industriels intelligents. Pionnier dans l'intégration de l'intelligence artificielle dans la robotique, l'entreprise développe des solutions de robotique avancée pour l'industrie, des systèmes de vision robotique et des robots collaboratifs pour optimiser les processus de production.",
    website: "www.ai-robotics.tn",
    location: "Sfax, Tunisie",
    employees: "80-120",
    logo: getLogo(24),
    specialties: ["Robots Industriels", "IA Embarquée", "Vision Robotique"]
  },
  {
    id: 25,
    name: "Digital Marketing Pro",
    sector: "Marketing Digital",
    description: "Digital Marketing Pro accompagne les entreprises dans leur transformation digitale marketing. Agence leader en SEO, publicité en ligne et marketing automation, l'entreprise offre des services complets de stratégie digitale, gestion des réseaux sociaux et optimisation des performances marketing pour maximiser le ROI des entreprises.",
    website: "www.digital-marketing-pro.tn",
    location: "Tunis, Tunisie",
    employees: "60-90",
    logo: getLogo(25),
    specialties: ["SEO/SEM", "Marketing Automation", "Social Media"]
  },
  {
    id: 26,
    name: "Blockchain Solutions",
    sector: "Blockchain & Crypto",
    description: "Blockchain Solutions développe des applications blockchain pour diverses industries. Expert en smart contracts et solutions de traçabilité décentralisées, l'entreprise propose des services de développement blockchain, des solutions DeFi (Finance Décentralisée) et des plateformes NFT pour moderniser les processus business avec la technologie blockchain.",
    website: "www.blockchain-solutions.tn",
    location: "Tunis, Tunisie",
    employees: "40-60",
    logo: getLogo(26),
    specialties: ["Smart Contracts", "DeFi", "NFT"]
  },
  {
    id: 27,
    name: "SportTech",
    sector: "Sport & Technologie",
    description: "SportTech révolutionne le sport avec des solutions technologiques. Développeur d'applications fitness et de dispositifs de suivi de performance, l'entreprise crée des solutions pour les athlètes, les clubs sportifs et les amateurs de fitness. SportTech combine passion du sport et innovation technologique pour améliorer les performances sportives.",
    website: "www.sporttech.tn",
    location: "Tunis, Tunisie",
    employees: "50-80",
    logo: getLogo(27),
    specialties: ["Applications Fitness", "Wearables", "Analytics Sportifs"]
  },
  {
    id: 28,
    name: "3D Printing Hub",
    sector: "Impression 3D",
    description: "3D Printing Hub est le leader de l'impression 3D industrielle en Tunisie. Services de prototypage rapide et production de pièces sur mesure, l'entreprise propose des solutions d'impression 3D avancées incluant l'impression métal, le scan 3D et la conception assistée par ordinateur pour diverses industries.",
    website: "www.3dprinting-hub.tn",
    location: "Ariana, Tunisie",
    employees: "40-60",
    logo: getLogo(28),
    specialties: ["Prototypage Rapide", "Impression Métal", "Scan 3D"]
  },
  {
    id: 29,
    name: "VR Experiences",
    sector: "Réalité Virtuelle",
    description: "VR Experiences crée des expériences immersives en réalité virtuelle pour la formation, le divertissement et le marketing. Studio créatif innovant, l'entreprise développe des applications VR éducatives, des expériences de marketing immersif et des solutions de formation professionnelle en réalité virtuelle pour transformer l'apprentissage et l'engagement client.",
    website: "www.vr-experiences.tn",
    location: "Tunis, Tunisie",
    employees: "30-50",
    logo: getLogo(29),
    specialties: ["Formation VR", "Marketing Immersif", "Divertissement VR"]
  },
  {
    id: 30,
    name: "Cloud Computing Co",
    sector: "Cloud & Infrastructure",
    description: "Cloud Computing Co fournit des services cloud et d'infrastructure informatique. Partenaire certifié des principaux fournisseurs cloud mondiaux, l'entreprise offre des services de migration cloud, d'infrastructure as a Service (IaaS), et de sécurité cloud pour accompagner la transformation digitale des entreprises tunisiennes.",
    website: "www.cloudcomputing-co.tn",
    location: "Tunis, Tunisie",
    employees: "150-200",
    logo: getLogo(30),
    specialties: ["Services Cloud", "Migration", "Sécurité Cloud"]
  },
  {
    id: 31,
    name: "Mobile Solutions",
    sector: "Solutions Mobiles",
    description: "Mobile Solutions développe des applications mobiles innovantes pour entreprises et particuliers. Expert en développement natif et cross-platform, l'entreprise crée des applications iOS et Android performantes, des solutions m-commerce et des applications d'entreprise pour répondre aux besoins croissants de mobilité digitale.",
    website: "www.mobile-solutions.tn",
    location: "Tunis, Tunisie",
    employees: "100-150",
    logo: getLogo(31),
    specialties: ["Apps Natives", "React Native", "Flutter"]
  },
  {
    id: 32,
    name: "E-Commerce Plus",
    sector: "E-Commerce",
    description: "E-Commerce Plus développe des plateformes de commerce électronique sur mesure. Solutions complètes incluant paiement en ligne et logistique, l'entreprise crée des boutiques en ligne performantes, des marketplaces B2B/B2C et des solutions omnicanales pour accompagner les commerces dans leur transformation digitale.",
    website: "www.ecommerce-plus.tn",
    location: "Sousse, Tunisie",
    employees: "80-120",
    logo: getLogo(32),
    specialties: ["Plateformes E-Commerce", "Paiement en Ligne", "Marketplace"]
  },
  {
    id: 33,
    name: "Network Security",
    sector: "Sécurité Réseau",
    description: "Network Security sécurise les infrastructures réseau des entreprises. Spécialisée dans les firewalls, VPN et surveillance réseau 24/7, l'entreprise offre des services de sécurisation réseau, de monitoring continu et de réponse aux incidents pour protéger les systèmes d'information des entreprises contre les cybermenaces.",
    website: "www.network-security.tn",
    location: "Tunis, Tunisie",
    employees: "60-90",
    logo: getLogo(33),
    specialties: ["Firewalls", "VPN", "Monitoring Réseau"]
  },
  {
    id: 34,
    name: "AI Vision Systems",
    sector: "Vision par Ordinateur",
    description: "AI Vision Systems développe des systèmes de vision par ordinateur pour l'industrie. Solutions de contrôle qualité automatisé et reconnaissance faciale, l'entreprise propose des systèmes d'inspection automatisée, de reconnaissance d'objets et d'analyse vidéo intelligente pour optimiser les processus industriels et la sécurité.",
    website: "www.ai-vision-systems.tn",
    location: "Sfax, Tunisie",
    employees: "70-100",
    logo: getLogo(34),
    specialties: ["Contrôle Qualité", "Reconnaissance Faciale", "Inspection Automatisée"]
  },
  {
    id: 35,
    name: "Renewable Tech",
    sector: "Énergies Renouvelables",
    description: "Renewable Tech développe des technologies innovantes pour les énergies renouvelables. Spécialisée dans les systèmes de stockage d'énergie avancés, l'entreprise propose des solutions solaires intelligentes, des systèmes de stockage par batteries et des technologies de smart grid pour accélérer la transition énergétique.",
    website: "www.renewable-tech.tn",
    location: "Tozeur, Tunisie",
    employees: "100-150",
    logo: getLogo(35),
    specialties: ["Stockage Énergie", "Systèmes Hybrides", "Smart Grid"]
  },
  {
    id: 36,
    name: "Space Tech Tunisia",
    sector: "Technologie Spatiale",
    description: "Space Tech Tunisia développe des technologies spatiales et des solutions satellitaires. Pionnier dans le développement de CubeSats et applications spatiales, l'entreprise travaille sur des projets de télédétection, de communication satellite et de technologies spatiales pour contribuer au développement du secteur spatial tunisien et africain.",
    website: "www.spacetech-tunisia.tn",
    location: "Tunis, Tunisie",
    employees: "30-50",
    logo: getLogo(36),
    specialties: ["CubeSats", "Télédétection", "Communication Satellite"]
  }
];
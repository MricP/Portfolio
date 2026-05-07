export default {
  nav: {
    home: "ACCUEIL",
    projects: "PROJETS",
    experiences: "EXPERIENCES",
    technologies: "TECHNOLOGIES"
  },
  home: {
    subtitle: "Développeur Logiciel",
    quote: "Tout ce que vous pouvez imaginer est probablement faisable, il vous suffit de l'imaginer et d'y travailler. (Larry Page)",
    contact: "Contacter",
    cv: "En savoir plus",
    projects_title: "PROJETS",
    experiences_title: "EXPERIENCES",
    technologies_title: "TECHNOLOGIES"
  },
  projects: {
    airconcess: {
      sub: "Concessionaire d'aéronefs en ligne.",
      brief: "Airconcess est une plateforme web dédiée à la concession d’aéronefs, permettant aux utilisateurs de consulter un catalogue d’appareils et de gérer leur profil. Le site vise à moderniser la gestion en ligne des locations aériennes grâce à une interface simple et responsive, pensée pour les passionnés comme pour les professionnels.",
      contrib: "J’ai été responsable de la création de la page catalogue, qui présente tous les aéronefs disponibles avec filtres dynamiques, et de la page profil utilisateur avec édition des informations. Mon travail a aussi consisté à assurer une bonne ergonomie générale et une cohérence visuelle sur ces sections.",
      prob: "Le premier défi a été de structurer efficacement le catalogue, notamment en matière de performance et de tri. J’ai aussi rencontré des difficultés liées à l’hébergement et à la mise en ligne du projet, notamment sur le rendu responsive."
    },
    tvshelf: {
      sub: "Application mobile permettant de suivre les séries que vous avez regardé",
      brief: "TVShelf est une application mobile développée en Kotlin qui permet à l’utilisateur de suivre les séries qu’il regarde. Elle propose un moteur de recherche, la possibilité de noter les séries qu'on a visionné, et une organisation visuelle intuitive des séries vues, à voir ou en cours. Parfait pour préparer une bonne soirée sur son canapé",
      contrib: "Je me suis occupé de la page d’accueil, avec un affichage clair des dernières séries vues, et de la page de recherche connectée à une API externe. Mon objectif était de rendre l’expérience utilisateur fluide tout en respectant les contraintes d’une application mobile.",
      prob: "Le système de recherche a posé plusieurs problèmes. J’ai également rencontré des complications avec l’intégration de l’API TV et l'optimisation des différentes requêtes (format des données, gestion des images)"
    },
    finanzen: {
      sub: "Application web permettant de gérer vos finances de façon zen",
      brief: "Finanzen est un site web de suivi budgétaire orienté bien-être. L’objectif est de permettre à l’utilisateur de gérer ses finances sans stress grâce à une interface épurée, des graphiques simples et un système de visualisation par catégories.",
      contrib: "J’ai développé la page statistiques qui regroupe toutes les données financières de l’utilisateur sous forme de graphiques clairs. Elle permet d’avoir une vue synthétique des revenus, dépenses et objectifs personnels sur une période définie.",
      prob: "L’intégration de Symfony avec Twig a représenté défi, notamment en ce qui concerne la liaison entre la logique métier et l’affichage. Il m’a fallu du temps pour bien comprendre le framework."
    },
    flightcheck: {
      sub: "Logiciel permettant de gérer et réguler le trafic aérien",
      brief: "FlightCheck est une application Java conçue pour la régulation du trafic aérien. Elle permet de visualiser en temps réel les vols, détecter les conflits potentiels et proposer des solutions via des algorithmes de graphes. Elle s’adresse à des cas d’usage semi-réels ou pédagogiques.",
      contrib: "Ma contribution principale s’est concentrée sur la partie tests des interfaces graphiques et l’intégration des fonctionnalités de gestion des vols. J’ai également travaillé sur la modélisation de certaines données de trafic.",
      prob: "L’un des problèmes majeurs a été de comprendre et d’implémenter des algorithmes de graphes complexes, notamment pour la détection de conflits. La mise en place d’un système de coloration pour la résolution visuelle des conflits s’est aussi révélée délicate."
    }
  },
  experience: {
    diag_group_sub: "3ème Année BUT Informatique",
    diag_group_tag: "Développeur Logiciel",
    diag_info_sub: "2ème Année BUT Informatique",
    diag_info_tag: "Développeur Logiciel"
  },
  alternance: {
    title: "Alternance",
    subtitle: "Immersion professionnelle au sein de Groupe Diagram (3ème Année)",
    company_desc: "Entreprise spécialisée dans le développement de solutions logicielles sur mesure, accompagnant ses clients dans la conception et le déploiement d’applications adaptées à leurs besoins métiers.",
    tag_date: "Sept 2025 - Août 2026",
    tag_alt: "Développeur Logiciel",
    missions_title: "Grandes Missions & Projets",
    skill_assoc: "Compétences associées",
    proofs: "Traces et Preuves",
    bilan_title: "Bilan de l'Alternance",
    bilan_desc: "\" Bientôt disponible \"",
    m1_title: "Implémentation d'un composant Diagmag (Norme NF525)",
    m1_desc: "Ma mission principale a consisté à concevoir et développer un nouveau composant pour le logiciel Diagmag, en m'assurant de sa stricte conformité avec la norme française NF525 (règles de certification pour les logiciels de caisse). Cela a impliqué une analyse approfondie du cahier des charges, l'implémentation de processus sécurisés et immuables, ainsi qu'une phase de tests rigoureuse pour valider la conformité légale de la solution.",
    skills: {
      s1: "Concevoir, développer et tester une application complexe",
      s2: "Améliorer les performances et la qualité de l'application",
      s3: "Déployer des services dans une architecture réseau",
      s4: "Concevoir et gérer des bases de données volumineuses",
      s5: "Organiser le travail dans une équipe informatique",
      l2: "Niveau 2",
      l3: "Niveau 3"
    },
    proofs_labels: {
      github: "Lien vers le dépôt Git",
      web: "Page web réalisée",
      img: "Capture d'écran (Bientôt disponible)",
      arch: "Schéma d'architecture",
      src: "Code source de la solution"
    }
  },
  stage: {
    title: "Stage",
    subtitle: "Première immersion au sein de Diagram Informatique (2ème Année)",
    company_desc: "Diagram Informatique est une entreprise spécialisée dans le développement de solutions logicielles sur mesure, qui accompagne ses clients dans la conception, la réalisation et le déploiement d’applications adaptées à leurs besoins métiers.",
    tag_stage: "Stage : Développeur logiciel",
    duration: "8 semaines",
    comp_title: "Compétences Techniques Acquises",
    comp_ref: "Référence",
    comp_char: "Caractéristique (Référentiel)",
    bilan_title: "Bilans du Stage",
    bilan_w_title: "Travail effectué",
    bilan_t_title: "Apprentissages techniques",
    bilan_o_title: "Bilan organisationnel & humain",
    bilan_p_title: "Bilan professionnel & culturel",
    bilan_w: {
      l1: "Développement sur projets de logiciels",
      l2: "Utilisation de WinDev (Conception, Développement, Amélioration)",
      l3: "Correction de bugs et ajout de fonctionnalités",
      l4: "Manipulation de bases de données"
    },
    bilan_t: {
      l1: "Structuration rigoureuse du code",
      l2: "Logique événementielle",
      l3: "Programmation orientée objet",
      l4: "Création d'interfaces graphiques (UI)"
    },
    bilan_o: {
      l1: "Gestion des deadlines et priorités évolutives",
      l2: "Méthodes de suivi de projet & réunions",
      l3: "Environnement de travail stimulant",
      l4: "Intégration dans la hiérarchie professionnelle"
    },
    bilan_p: {
      l1: "Découverte de différentes méthodologies",
      l2: "Immersion dans le monde de l'entreprise",
      l3: "Savoir-être professionnels essentiels",
      l4: "Développement logiciel, web et mobile"
    },
    skills: {
      ac2101: "Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences",
      ac2102: "Appliquer des principes d’accessibilité et d’ergonomie",
      ac2103: "Adopter de bonnes pratiques de conception et de programmation",
      ac2104: "Vérifier et valider la qualité de l’application par les tests",
      ac2201: "Choisir des structures de données complexes adaptées au problème",
      ac2202: "Utiliser des techniques algorithmiques adaptées pour des problèmes complexes",
      ac2203: "Comprendre les enjeux et moyens de sécurisation des données et du code",
      ac2301: "Concevoir et développer des applications communicantes",
      ac2302: "Utiliser des serveurs et des services réseaux virtualisés",
      ac2303: "Sécuriser les services et données d’un système",
      ac2401: "Optimiser les modèles de données de l’entreprise",
      ac2403: "Organiser la restitution de données à travers la programmation et la visualisation",
      ac2404: "Manipuler des données hétérogènes",
      ac2501: "Identifier les processus présents dans une organisation en vue d’améliorer les systèmes d’information",
      ac2502: "Formaliser les besoins du client et de l’utilisateur",
      ac2503: "Identifier les critères de faisabilité d’un projet informatique",
      ac2601: "Comprendre la diversité, la structure et la dimension de l’informatique dans une organisation",
      ac2602: "Appliquer une démarche pour intégrer une équipe informatique au sein d’une organisation"
    }
  },
  project_view: {
    video_unsupported: "Votre navigateur ne supporte pas la balise vidéo.",
    brief: "BRIEF",
    contribution: "MA CONTRIBUTION",
    problems: "PROBLÈMES"
  }
}

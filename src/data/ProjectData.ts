export interface IProject {
  id: number;
  title: string;
  description: string;
  coverImage: string;
  client?: string;
  location?: string;
  date?: string;
  status?: string;
  gallery?: string[];
}

export const projets: IProject[] = [
  {
    id: 1,
    title: "Fontaine Moderne avec Éclairage LED",
    description: "Construction d'une fontaine contemporaine intégrant un système d'éclairage LED dynamique et une pompe haute performance. Réalisation complète avec finitions haut de gamme en pierre reconstituée.",
    coverImage: "/images/ksk/5.jpeg",
    client: "Particulier",
    location: "Abidjan - Cocody",
    date: "2025",
    status: "Terminé",
    gallery: ["/images/ksk/4.jpeg","/images/ksk/8.jpeg", "/images/ksk/10.jpeg", "/images/ksk/1.mp4","/images/ksk/9.jpeg"],
  },
  {
    id: 2,
    title: "Rénovation Complète de Façade Résidentielle",
    description: "Restructuration et ravalement de façade incluant traitement de l'étanchéité, ragréage des enduits, et application d'un revêtement hydrofuge moderne. Mise aux normes des réseaux électriques et sanitaires.",
    coverImage: "/images/ksk/15.jpeg",
    client: "Client privé",
    location: "Abidjan - Marcory",
    date: "2025",
    status: "Terminé",
    gallery: ["/images/ksk/11.jpeg", "/images/ksk/15.jpeg", "/images/ksk/16.jpeg", "/images/ksk/19.jpeg"],
  },
  {
    id: 4,
    title: "Aménagement Pavé Autobloquant - Terrasse Extérieure",
    description: "Pose de pavés autobloquants sur une terrasse de 85m² avec système de drainage intégré. Travaux incluant la préparation du sol, la pose de géotextile et le compactage professionnel.",
    coverImage: "/images/ksk/6.jpeg",
    client: "Particulier",
    location: "Abidjan - Zone Résidentielle",
    date: "2025",
    status: "Terminé",
    gallery: ["/images/ksk/18.jpeg", "/images/ksk/22.jpeg", "/images/ksk/26.jpeg"],
  },
  {
    id: 5,
    title: "Dalle Béton Perméable pour Stationnement Écologique",
    description: "Réalisation d'une dalle en béton drainant de 120m² avec système de perméabilité avancé pour la gestion des eaux pluviales. Structure renforcée pour usage intensif.",
    coverImage: "/images/ksk/dalle/1.jpg",
    client: "Entreprise Privée",
    location: "Abidjan - Zone Industrielle",
    date: "2025",
    status: "Terminé",
    gallery: ["/images/ksk/dalle/2.jpg", "/images/ksk/dalle/3.jpg", "/images/ksk/dalle/4.jpg", "/images/ksk/dalle/5.jpg"]
  },
  {
    id: 6,
    title: "Aménagement Paysager - Cour Intérieure Villa Sassandra",
    description: "Réhabilitation complète d'une cour intérieure incluant création d'espaces verts, installation d'un système d'irrigation automatique et pose de dallages en pierre naturelle.",
    coverImage: "/images/ksk/sassandra/1.jpg",
    client: "Propriétaire Villa",
    location: "Sassandra - Résidence Côtière",
    date: "2024",
    status: "Terminé",
    gallery: ["/images/ksk/sassandra/2.jpg", "/images/ksk/sassandra/3.jpg", "/images/ksk/sassandra/4.jpg", "/images/ksk/sassandra/5.jpg", "/images/ksk/sassandra/6.jpg"]
  },
  {
    id: 7,
    title: "Installation de Vitrine Haute sur Structure Duplex",
    description: "Pose sécurisée d'une vitrine panoramique sur support en hauteur (8m), incluant la mise en place d'une structure porteuse et l'étanchéité périphérique.",
    coverImage: "/images/ksk/poseVitrine/1.jpg",
    client: "Commerce de Détail",
    location: "Abidjan - Centre Commercial",
    date: "2025",
    status: "Terminé",
    gallery: ["/images/ksk/poseVitrine/2.jpg", "/images/ksk/poseVitrine/3.jpg", "/images/ksk/poseVitrine/4.jpg", "/images/ksk/poseVitrine/5.jpg"]
  },
  {
    id: 8,
    title: "Construction Villa Moderne avec Piscine Intégrée",
    description: "Édification complète d'une villa contemporaine de 280m² sur deux niveaux, intégrant une piscine intérieure, des espaces de vie ouverts et des finitions premium.",
    coverImage: "/images/ksk/villa/1.jpg",
    client: "Investisseur Privé",
    location: "Abidjan - Résidence Exclusive",
    date: "2025",
    status: "Terminé",
    gallery: ["/images/ksk/villa/2.jpg", "/images/ksk/villa/3.jpg", "/images/ksk/villa/4.jpg", "/images/ksk/villa/5.jpg",
      "/images/ksk/villa/6.jpg", "/images/ksk/villa/7.jpg", "/images/ksk/villa/8.jpg", "/images/ksk/villa/9.jpg", "/images/ksk/villa/10.jpg",
      "/images/ksk/villa/11.jpg", "/images/ksk/villa/12.jpg", "/images/ksk/villa/13.jpg"
    ]
  },
  {
    id: 9,
    title: "Aménagement d'Entrée avec Comptoir sur Mesure",
    description: "Création d'un espace d'accueil avec comptoir design en matériaux composites, intégrant éclairage indirect et finitions bois/métal.",
    coverImage: "/images/ksk/entrer/1.jpg",
    client: "Société de Services",
    location: "Abidjan - Siège Social",
    date: "2025",
    status: "Terminé",
    gallery: ["/images/ksk/entrer/2.mp4"]
  },
]
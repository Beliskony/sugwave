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

export const projets: IProject[] =[
     {
    id: 1,
    title: "Construction d'un duplexe",
    description: "Construction complète d’un duplex moderne avec finitions haut de gamme.",
    coverImage: "/images/duplexe.jpg",
    client: "Particulier",
    location: "Abidjan - Cocody",
    date: "2025",
    status: "Terminé",
    gallery: ["/images/duplexe.jpg"],
  },
  {
    id: 2,
    title: "Rénovation d'un appartement",
    description: "Travaux de rénovation totale : plomberie, électricité et aménagement intérieur.",
    coverImage: "/images/renovation.jpg",
    client: "Client privé",
    location: "Abidjan - Marcory",
    date: "2025",
    status: "Terminé",
    gallery: ["/images/renovation.jpg"],
  },
  {
    id: 3,
    title: "Extension d'une maison à Abidjan-Riviera",
    description: "Extension d’une maison existante pour ajouter des pièces supplémentaires et moderniser la façade.",
    coverImage: "/images/Abidjan.jpg",
    client: "Famille Kouassi",
    location: "Abidjan - Riviera",
    date: "2025",
    status: "Terminé",
    gallery: ["/images/Abidjan.jpg"],
  },
  {
    id: 4,
    title: "Maison de luxe",
    description: "Réalisation d’une villa haut standing avec design moderne et piscine.",
    coverImage: "/images/projet1.jpg",
    client: "Client VIP",
    location: "Grand-Bassam",
    date: "2025",
    status: "Terminé",
    gallery: ["/images/projet1.jpg"],
  },
  {
    id: 5,
    title: "Création d'une piscine",
    description: "Construction d’une piscine moderne avec espace détente et terrasse.",
    coverImage: "/images/pool.webp",
    client: "Résidence privée",
    location: "Assinie",
    date: "2025",
    status: "Terminé",
    gallery: ["/images/pool.webp"],
  },
  {
    id: 6,
    title: "Chantier de construction - Bingerville",
    description: "Construction en cours d’une grande maison familiale à plusieurs niveaux.",
    coverImage: "/images/chantier.webp",
    client: "Client privé",
    location: "Bingerville",
    date: "2025",
    status: "En cours",
    gallery: ["/images/chantier.webp"],
  },
  {
    id: 7,
    title: "Fondation d'une maison à Abidjan",
    description: "Travaux de fondation pour une maison moderne en zone résidentielle.",
    coverImage: "/images/fondation.jpg",
    client: "Particulier",
    location: "Abidjan",
    date: "2025",
    status: "En cours",
    gallery: ["/images/fondation.jpg"],
  },
  {
    id: 8,
    title: "Tour centrale",
    description: "Élévation d’un immeuble moderne de plusieurs étages au centre-ville.",
    coverImage: "/images/etage.jpg",
    client: "Entreprise immobilière",
    location: "Plateau - Abidjan",
    date: "2025",
    status: "En cours",
    gallery: ["/images/etage.jpg"],
  },
  {
    id: 9,
    title: "Pose de feu de signalisation",
    description: "Mise en place et raccordement de feux de signalisation modernes pour la ville.",
    coverImage: "/images/feu.jpg",
    client: "Commune d’Abidjan",
    location: "Abidjan",
    date: "2025",
    status: "En cours",
    gallery: ["/images/feu.jpg"],
  },
  {
    id: 10,
    title: "Appartement à Abidjan",
    description: "Construction d’un immeuble résidentiel moderne avec appartements haut standing.",
    coverImage: "/images/appartement.jpg",
    client: "Investisseur privé",
    location: "Abidjan - Cocody",
    date: "2025",
    status: "En cours",
    gallery: ["/images/appartement.jpg"],
  },

]
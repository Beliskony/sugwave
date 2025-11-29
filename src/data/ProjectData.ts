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
    title: "Construction d'une fontaine",
    description: "Construction complète d’une fontaine moderne avec finitions haut de gamme.",
    coverImage: "/images/ksk/5.jpeg",
    client: "Particulier",
    location: "Abidjan - Cocody",
    date: "2025",
    status: "Terminé",
    gallery: ["/images/ksk/4.jpeg","/images/ksk/8.jpeg", "/images/ksk/10.jpeg", "/images/ksk/1.mp4"   ],
  },
  {
    id: 2,
    title: "Rénovation fassade",
    description: "Travaux de rénovation totale : plomberie, électricité et aménagement intérieur.",
    coverImage: "/images/ksk/15.jpeg",
    client: "Client privé",
    location: "Abidjan - Marcory",
    date: "2025",
    status: "Terminé",
    gallery: ["/images/ksk/11.jpeg", "/images/ksk/15.jpeg", "/images/ksk/16.jpeg", "/images/ksk/19.jpeg", "/images/ksk/9.jpeg"],
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


]
export type SliderHome = {
    id: number;
    titre: string;
    description: string;
    bg_image: string;
    thumbnail: string;
}

export const slidesData: SliderHome[] = [{
    id: 1,
    titre: "Balcon",
    description: "Nous construisons aussi des extensions de maison comme des balcons.",
    bg_image: "/images/balcon.webp",
    thumbnail: "/images/balcon.webp"
}, {
    id: 2,
    titre: "Piscine Sur Mesure",
    description: "Nous construisons des piscines sur mesure pour votre maison.",
    bg_image: "/images/pool.webp",
    thumbnail: "/images/pool.webp"
},{
    id: 3,
    titre: "Des maisons modernes",
    description: "Nous construisons des maisons modernes, durables et parfaitement conçues, en accord avec les normes en vigueur.",
    bg_image: "/images/building.webp",
    thumbnail: "/images/building.webp"
},{
    id: 5,
    titre: "Decoration Interieure & Exterieure",
    description: "Nous faisons de votre maison un endroit unique et chaleureux.",
    bg_image: "/images/interieur.webp",
    thumbnail: "/images/interieur.webp"
}]
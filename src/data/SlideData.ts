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
    bg_image: "/images/balcon.jpg",
    thumbnail: "/images/balcon.jpg"
}, {
    id: 2,
    titre: "Piscine Sur Mesure",
    description: "Nous construisons des piscines sur mesure pour votre maison.",
    bg_image: "/images/pool.jpg",
    thumbnail: "/images/pool.jpg"
},{
    id: 3,
    titre: "Des Buildings Modernes",
    description: "Nous construisons des bâtiments modernes et bien conçus en accord avec les normes.",
    bg_image: "/images/building.jpg",
    thumbnail: "/images/building.jpg"
},{
    id: 4,
    titre: "Structure Design",
    description: "Embellissez votre maison avec des designs modernes et uniques.",
    bg_image: "/images/designOne.jpg",
    thumbnail: "/images/designOne.jpg"
},{
    id: 5,
    titre: "Decoration Interieure & Exterieure",
    description: "Nous faisons de votre maison un endroit unique et chaleureux.",
    bg_image: "/images/interieur.jpg",
    thumbnail: "/images/interieur.jpg"
}]
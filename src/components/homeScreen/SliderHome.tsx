import { useState } from "react";


type SliderHome = {
    id: number;
    titre: string;
    description: string;
    bg_image: string;
    thumbnail: string;
}

const slides: SliderHome[] = [{
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

export default function SliderHome() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

 return (
    <section
      className="relative flex items-center justify-center w-full h-[600px] overflow-hidden">

      {slides.map((slide, index) => (
        <div key={slide.id} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
        index === currentSlide ? "opacity-100" : "opacity-0" }`}
      
          style={{ backgroundImage: `url(${slide.bg_image})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      ))}

      {/* Carte centrale */}
      <div className="relative flex flex-col items-center bg-white bg-opacity-90 rounded-3xl shadow-2xl w-[300px] max-w-full p-6">
        <img
          src={slides[currentSlide].thumbnail}
          alt={slides[currentSlide].titre}
          className="w-64 h-64 object-cover rounded-2xl mb-6"
          loading="lazy"
        />
        <h1 className="text-xl font-bold text-black mb-2 text-center">
          {slides[currentSlide].titre}
        </h1>
        <p className="text-xs text-gray-600 text-center">
          {slides[currentSlide].description}
        </p>
      </div>

{/* Bouton Previous */}
      <button
        onClick={handlePrev}
        className="absolute left-10 bottom-10 flex items-center gap-2 text-white text-lg font-medium hover:underline"
      >
        <span className="text-2xl">&#8592;</span> Previous
      </button>

      {/* Bouton Next */}
      <button
        onClick={handleNext}
        className="absolute right-10 bottom-10 flex items-center gap-2 text-white text-lg font-medium hover:underline"
      >
        Next <span className="text-2xl">&#8594;</span>
      </button>
    </section>
  );
}

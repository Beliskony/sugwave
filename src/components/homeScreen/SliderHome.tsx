import { useState } from "react";
import { slidesData } from "../../data/SlideData";
import { AnimatePresence, motion } from "framer-motion";



export default function SliderHome() {
    const [currentSlide, setCurrentSlide] = useState(0);
     const [direction, setDirection] = useState<"next" | "prev">("next");

    const handleNext = () => {
        setDirection("next");
        setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
    };

    const handlePrev = () => {
        setDirection("prev");
        setCurrentSlide((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
    };

 return (
    <section
      className="relative flex items-center justify-center w-full h-[600px] overflow-hidden">

      {slidesData.map((slide, index) => (
        <div key={slide.id} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
        index === currentSlide ? "opacity-100" : "opacity-0" }`}
      
          style={{ backgroundImage: `url(${slide.bg_image})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      ))}
 {/* Carte centrale animée */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={slidesData[currentSlide].id}
          custom={direction}
          initial={{
            opacity: 0,
            scale: 0.9,
            x: direction === "next" ? 50 : -50,
          }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{
            opacity: 0,
            scale: 0.9,
            x: direction === "next" ? -50 : 50,
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="relative flex flex-col items-center bg-white/90 rounded-3xl shadow-2xl w-[300px] max-w-full p-6 text-center backdrop-blur-md"
        >
          <img
            src={slidesData[currentSlide].thumbnail}
            alt={slidesData[currentSlide].titre}
            className="w-64 h-64 object-cover rounded-2xl mb-6 shadow-lg"
            loading="lazy"
          />
          <h1 className="text-xl font-bold text-black mb-2">
            {slidesData[currentSlide].titre}
          </h1>
          <p className="text-xs text-gray-600">{slidesData[currentSlide].description}</p>
        </motion.div>
      </AnimatePresence>

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

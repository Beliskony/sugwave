import { useState } from "react";
import { slidesData } from "../../data/SlideData";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

    // Variants pour les animations avec easing correct
    const backgroundVariants = {
        enter: (direction: "next" | "prev") => ({
            opacity: 0,
            scale: 1.1,
            x: direction === "next" ? 100 : -100,
        }),
        center: {
            opacity: 1,
            scale: 1,
            x: 0,
        },
        exit: (direction: "next" | "prev") => ({
            opacity: 0,
            scale: 0.9,
            x: direction === "next" ? -100 : 100,
        })
    };

    const cardVariants = {
        enter: (direction: "next" | "prev") => ({
            opacity: 0,
            scale: 0.8,
            x: direction === "next" ? 100 : -100,
            rotateY: direction === "next" ? 10 : -10,
        }),
        center: {
            opacity: 1,
            scale: 1,
            x: 0,
            rotateY: 0,
        },
        exit: (direction: "next" | "prev") => ({
            opacity: 0,
            scale: 0.8,
            x: direction === "next" ? -100 : 100,
            rotateY: direction === "next" ? -10 : 10,
        })
    };

    // Transition partagée pour toutes les animations
    const slideTransition = {
        duration: 0.7,
        ease: "easeInOut" as const
    };

    const backgroundTransition = {
        duration: 0.8,
        ease: "easeInOut" as const
    };

    return (
        <section className="relative flex items-center justify-center w-full h-[600px] overflow-hidden">
            {/* Background animé avec AnimatePresence */}
            <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                    key={`bg-${slidesData[currentSlide].id}`}
                    custom={direction}
                    variants={backgroundVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={backgroundTransition}
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${slidesData[currentSlide].bg_image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                />
            </AnimatePresence>

            {/* Overlay pour mieux lire le texte */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Carte centrale animée */}
            <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                    key={slidesData[currentSlide].id}
                    custom={direction}
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={slideTransition}
                    className="relative flex flex-col items-center bg-white/90 rounded-3xl shadow-2xl w-[300px] max-w-full p-6 text-center backdrop-blur-md border border-white/20"
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.3 }
                    }}
                >
                    {/* Image avec animation */}
                    <motion.img
                        src={slidesData[currentSlide].thumbnail}
                        alt={slidesData[currentSlide].titre}
                        className="w-64 h-64 object-cover rounded-2xl mb-6 shadow-lg"
                        loading="lazy"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    />
                    
                    {/* Titre avec animation */}
                    <motion.h1
                        className="text-xl font-bold text-black mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                    >
                        {slidesData[currentSlide].titre}
                    </motion.h1>
                    
                    {/* Description avec animation */}
                    <motion.p
                        className="text-xs text-gray-600"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        {slidesData[currentSlide].description}
                    </motion.p>
                </motion.div>
            </AnimatePresence>

            {/* Indicateurs de slide */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slidesData.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > currentSlide ? "next" : "prev");
                            setCurrentSlide(index);
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide 
                                ? "bg-white scale-125" 
                                : "bg-white/50 hover:bg-white/80"
                        }`}
                    />
                ))}
            </div>

            {/* Bouton Previous amélioré */}
            <motion.button
                onClick={handlePrev}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-white/20 rounded-full backdrop-blur-md text-white hover:bg-white/30 border border-white/30"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.9 }}
            >
                <motion.span
                    className="text-2xl font-light"
                    initial={{ x: 0 }}
                    whileHover={{ x: -2 }}
                >
                    <ChevronLeft size={18}/>
                </motion.span>
            </motion.button>

            {/* Bouton Next amélioré */}
            <motion.button
                onClick={handleNext}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-white/20 rounded-full backdrop-blur-md text-white hover:bg-white/30 border border-white/30"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.9 }}
            >
                <motion.span
                    className="text-2xl font-light"
                    initial={{ x: 0 }}
                    whileHover={{ x: 2 }}
                >
                    <ChevronRight size={18}/>
                </motion.span>
            </motion.button>

            
        </section>
    );
}
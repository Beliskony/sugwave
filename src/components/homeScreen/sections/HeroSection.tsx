import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-[650px] max-sm:h-[400px] bg-[url('/images/bgDark.webp')] bg-cover bg-center">
      {/* Overlay avec animation très lente */}
      <motion.div 
        className="absolute inset-0 bg-black/15"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ 
          duration: 2.5,
          ease: "easeOut"
        }}
      />

      {/* Contenu avec animations plus lentes */}
      <div className="relative flex flex-col items-start w-full lg:px-20 my-5 gap-y-3 px-2 max-sm:my-10 max-sm:items-center">
        <motion.h1
          className="lg:text-8xl font-black text-white text-2xl md:text-4xl"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.5,        // Plus long
            delay: 0.3,           // Légère attente
            ease: [0.25, 0.46, 0.45, 0.94] // Courbe plus smooth
          }}
        >
          CONSTRUISEZ - INNOVONS
        </motion.h1>

        <div className="flex flex-row items-center justify-between max-sm:justify-center w-full">
          <motion.p
            className="text-xl font-normal text-wrap text-white text-start max-sm:text-xs w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 1.8,      // Beaucoup plus long
              delay: 0.8,         // Délai augmenté
              ease: "easeOut"
            }}
          >
            PRENEZ PART A L'AVENIR DE LA CONSTRUCTION, SOUTENEZ L'INNOVATION
          </motion.p>
        </div>
      </div>

      {/* Animation de scroll qui apparaît plus tard */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          delay: 2.5,            // Apparaît après tout le reste
          duration: 1 
        }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          animate={{ y: [0, 12, 0] }}
          transition={{ 
            duration: 2.5,       // Mouvement plus lent
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <motion.div
            className="w-1 h-4 bg-white rounded-full mt-2"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default HeroSection;
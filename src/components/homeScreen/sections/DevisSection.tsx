import { motion } from 'framer-motion';
import DevisForm from "../DevisForm"

function DevisSection() {
  // Animation pour le conteneur principal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  // Animation pour le titre principal
  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut" as const
      }
    }
  };

  // Animation pour les textes
  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      x: -30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut" as const
      }
    }
  };

  // Animation pour le formulaire
  const formVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut" as const,
        delay: 0.8
      }
    }
  };

  // Animation pour le background (effet parallaxe)
  const backgroundVariants = {
    hidden: { scale: 1.1 },
    visible: {
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <motion.div 
      id="Contacts" 
      className="flex xl:flex-row flex-col bg-[url('/images/coverCinq.webp')] bg-cover bg-center w-full h-[550px] p-20 max-sm:p-1 max-sm:items-center max-sm:justify-center relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Overlay animé */}
      <motion.div 
        className="absolute inset-0 bg-black/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
      />

      {/* Background avec effet de parallaxe */}
      <motion.div 
        className="absolute inset-0 bg-[url('/images/coverCinq.webp')] bg-cover bg-center"
        variants={backgroundVariants}
      />

      {/* Partie gauche - Titre */}
      <motion.div 
        className="flex items-center justify-center xl:w-1/2 w-full relative z-10"
        variants={titleVariants}
      >
        <motion.h1 
          className="text-7xl font-black text-white text-wrap max-sm:text-center max-sm:text-4xl"
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
        >
          EXPRIMEZ VOUS
        </motion.h1>
      </motion.div>

      {/* Partie droite - Contenu et formulaire */}
      <motion.div 
        className="flex flex-col items-center justify-center xl:w-1/2 gap-y-5 w-full my-10 p-4 relative z-10"
        variants={containerVariants}
      >
        {/* Sous-titre */}
        <motion.h4 
          className="text-2xl font-medium text-wrap text-white lg:px-4 lg:text-start text-center"
          variants={textVariants}
        >
          Vous souhaitez en savoir plus sur nos services ?
        </motion.h4>

        {/* Description */}
        <motion.p 
          className="text-xl font-light text-wrap text-white text-start max-sm:text-base"
          variants={textVariants}
        >
          Nous sommes là pour vous aider à chaque étape de votre projet. Que vous ayez des questions sur nos services, 
          nos tarifs ou que vous souhaitiez discuter de votre projet en détail,
          nous sommes impatients de vous accompagner dans la réalisation de votre rêve.
        </motion.p>

        {/* Formulaire */}
        <motion.div 
          className="flex flex-row items-center w-full justify-center"
          variants={formVariants}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
        </motion.div>

        <DevisForm />
      </motion.div>
    </motion.div>
  );
}

export default DevisSection;
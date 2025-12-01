import { motion } from 'framer-motion';
import Separateur from "../Separateur";
import SpecialBox from "../SpecialBox";
import { useAnimationOnLoad } from '../../../hook/useAnimationOnLoad';

const Introduction = () => {
  const {ref, isVisible} = useAnimationOnLoad();
  
  // Animations pour le séparateur
  const separatorVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut" as const
      }
    }
  };

  // Animations pour le titre
  const titleVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut" as const,
        delay: 0.3
      }
    }
  };

  // Animations pour l'image
  const imageVariants = {
    hidden: { opacity: 0, x: -80, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1.4,
        ease: "easeOut" as const,
        delay: 0.5
      }
    }
  };

  // Animations pour la grille des SpecialBox
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.8
      }
    }
  };

  // Animations pour chaque SpecialBox
  const boxVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <>
      {/* Separateur animé */}
      <motion.div 
        className="lg:px-20 my-5 w-full px-5"
        ref={ref}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        viewport={{ once: true, margin: "-50px" }}
        variants={separatorVariants}
      >
        <Separateur numero="01" titre="Introduction" annee="2025" />
      </motion.div>
      
      <div id="InformationHome" className="lg:px-20 my-2 w-full flex flex-col items-start justify-center gap-y-5 px-2 max-sm:my-10 max-sm:gap-y-1">
        {/* Titre principal animé */}
        <motion.p 
          className="text-4xl text-start font-black text-black max-sm:text-2xl text-wrap lg:w-3/7 w-full dark:text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={titleVariants}
        >
          Promouvoir l'innovation dans le secteur de la construction.
        </motion.p>

        <div className="flex flex-row items-center justify-between my-5 w-full md:items-start gap-x-5 max-sm:flex-col max-sm:gap-y-5">
          {/* Image animée */}
          <motion.img 
            src="/images/House.webp" 
            alt="house" 
            className="w-1/2 h-auto rounded-3xl object-contain max-sm:w-full max-sm:h-[450px] max-sm:object-cover"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={imageVariants}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.4 }
            }}
          />

          {/* Grille des SpecialBox avec animation en cascade */}
          <motion.div 
            className="grid grid-cols-2 gap-2 lg:w-1/2 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={gridVariants}
          >
            <motion.div variants={boxVariants}>
              <SpecialBox 
                titre="Materiels De Qualité"
                icones="https://img.icons8.com/?size=100&id=BEGycNK1mtwx&format=png&color=000000"
                details="Nous vous offrons le meilleur pour des realisations durables et solides"
              />
            </motion.div>

            <motion.div variants={boxVariants}>
              <SpecialBox 
                titre="Designs Modernes"
                icones="https://img.icons8.com/?size=100&id=l83K3H9MIrGQ&format=png&color=000000"
                details="Nous appliquons les dernieres tendances de design pour vous offrir le meilleur"
              />
            </motion.div>

            <motion.div variants={boxVariants}>
              <SpecialBox 
                titre="Savoir Faire"
                icones="https://img.icons8.com/?size=100&id=11216&format=png&color=000000"
                details="Notre savoir faire est notre force, nous vous offrons le meilleur en plus d'un personnel qualifié"
              />
            </motion.div>

            <motion.div variants={boxVariants}>
              <SpecialBox 
                titre="Personnaliser"
                icones="https://img.icons8.com/?size=100&id=2i2jDnoEm4ER&format=png&color=000000"
                details="Chez nous, vous pouvez personnaliser votre projet selon vos gouts et vos envies"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Introduction;
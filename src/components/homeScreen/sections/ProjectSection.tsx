import { motion } from 'framer-motion';
import Separateur from "../Separateur";
import { projets } from "../../../data/ProjectData";
import ProjectBox from "../../projets/ProjectBox";
import { useAnimationOnLoad } from '../../../hook/useAnimationOnLoad';

function ProjectSection() {
  const { ref, isVisible } = useAnimationOnLoad();
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

  // Animations pour le titre principal
  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut" as const,
        delay: 0.3
      }
    }
  };

  // Animations pour la grille des projets
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.6
      }
    }
  };

  // Animations pour chaque ProjectBox
  const projectVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  // Animation pour le texte descriptif
  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 40 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut" as const,
        delay: 1.2
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
        <Separateur numero="03" titre="Projets" annee="2025" />
      </motion.div>

      <div className="flex flex-col lg:px-20 my-5 w-full items-center justify-end px-2">
        {/* Titre principal animé */}
        <motion.h1 
          className="text-end text-7xl font-bold max-sm:text-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={titleVariants}
        >
          NOS PROJETS
        </motion.h1>

        {/* Grille des projets avec animation en cascade */}
        <motion.div 
          className="flex flex-wrap items-center justify-between w-full my-5 max-sm:grid max-sm:grid-cols-2 gap-y-5 max-sm:gap-x-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={gridVariants}
        >
          {projets.slice(0,4).map((Projects, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <ProjectBox 
                title={Projects.title}
                description={Projects.description}
                imageUrl={Projects.coverImage}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Texte descriptif animé */}
        <motion.div 
          className="flex flex-col items-center justify-between w-full my-5 gap-y-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={textVariants}
        >
          <motion.p 
            className="text-xl text-start font-light text-black dark:text-white max-sm:text-xs text-wrap w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            Avec SugWave, construire votre maison devient une expérience unique.
            Au-delà de notre rôle de constructeur, nous sommes également votre conseiller, car construire une maison représente, 
            pour la majorité, l'investissement d'une vie. C'est pourquoi nous veillons à ce que chaque projet soit durable, 
            réfléchi et à la hauteur de vos attentes. Nous vous accompagnons à chaque étape : de la conception des plans jusqu'à la remise des clés.
            Avec SugWave, vous bénéficiez d'un suivi personnalisé, de conseils avisés et de matériaux de qualité pour bâtir un foyer solide, esthétique et pérenne.
            Notre objectif? Faire de votre projet une réussite, en alliant votre vision à notre expertise.
          </motion.p>
        </motion.div>
      </div>
    </>
  );
}

export default ProjectSection;
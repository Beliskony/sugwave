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
          QUELQUES PROJETS
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

      
      </div>
    </>
  );
}

export default ProjectSection;
import { motion } from 'framer-motion';
import Separateur from "../components/homeScreen/Separateur";
import ProjectDetails from "../components/projets/DetailsProject";
import { projets } from "../data/ProjectData";

function Project() {
  // Animations pour la bannière hero
  const heroVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut" as const
      }
    }
  };

  // Animations pour les séparateurs
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

  // Animations pour les sections de projets
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5
      }
    }
  };

  // Animations pour les titres de section
  const titleVariants = {
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

  // Animations pour la grille de projets
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.8
      }
    }
  };

  // Animations pour chaque projet
  const projectVariants = {
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
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  // Filtrer les projets une fois pour optimisation
  const projetsTermines = projets.filter(p => p.status === "Terminé");
  const projetsEnCours = projets.filter(p => p.status === "En cours");

  return (
    <section className="flex flex-col items-center justify-between h-full w-full">
      {/* Bannière Hero avec animation */}
      <motion.div 
        className="flex flex-col h-[550px] items-center justify-center w-full bg-[url('/images/projectBg.webp')] bg-cover bg-center relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        {/* Overlay animé */}
        <motion.div 
          className="absolute inset-0 bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
        />
        
        <div className="flex w-full items-center justify-center mt-20 relative">
          <motion.h1 
            className="text-8xl text-center text-white font-bold max-sm:text-4xl max-sm:px-4"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.5,
              ease: "easeOut" as const 
            }}
          >
            Decouvez Certains De Nos Projets
          </motion.h1>
        </div>

        {/* Indicateur de scroll */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" as const 
            }}
          >
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Separateur Projets Terminés */}
      <motion.div 
        className="px-20 my-5 w-full max-sm:px-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={separatorVariants}
      >
        <Separateur numero="01" titre="Projets Termines" annee="2025" />
      </motion.div>

      {/* Section Projets Terminés */}
      <motion.div 
        className="flex flex-col border-b border-black py-5 item-center justify-center w-full px-3 md:px-8 lg:px-20 gap-y-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Titre section */}
        <motion.div 
          className="w-full"
          variants={titleVariants}
        >
          <h3 className="text-4xl font-bold text-left text-wrap max-sm:text-2xl max-sm:text-center">
            Quelques uns de nos projets <span className="text-green-600">ACCOMPLIS</span>
          </h3>
        </motion.div>

        {/* Grille des projets terminés */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full"
          variants={gridVariants}
        >
          {projetsTermines.map((projet, index) => (
            <motion.div
              key={projet.id}
              variants={projectVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              custom={index}
            >
              <ProjectDetails project={projet} />
            </motion.div>
          ))}
        </motion.div>

        {/* Message si aucun projet terminé */}
        {projetsTermines.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl text-gray-500">
              Aucun projet terminé à afficher pour le moment.
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Separateur Projets En Cours */}
      <motion.div 
        className="px-20 my-5 w-full max-sm:px-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={separatorVariants}
      >
        <Separateur numero="02" titre="Projets En Cours" annee="2025" />
      </motion.div>

      {/* Section Projets En Cours */}
      <motion.div 
        className="flex flex-col py-5 item-center justify-center w-full px-3 md:px-8 lg:px-20 gap-y-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Titre section */}
        <motion.div 
          className="w-full"
          variants={titleVariants}
        >
          <h3 className="text-4xl font-bold text-left text-wrap max-sm:text-2xl max-sm:text-center">
            Projets en <span className="text-blue-600">COURS DE RÉALISATION</span>
          </h3>
        </motion.div>

        {/* Grille des projets en cours */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full"
          variants={gridVariants}
        >
          {projetsEnCours.map((projet, index) => (
            <motion.div
              key={projet.id}
              variants={projectVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              custom={index}
            >
              <ProjectDetails project={projet} />
            </motion.div>
          ))}
        </motion.div>

        {/* Message si aucun projet en cours */}
        {projetsEnCours.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl text-gray-500">
              Aucun projet en cours à afficher pour le moment.
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Section Statistiques (Nouvelle section ajoutée) */}
      <motion.div 
        className="w-full px-20 my-16 max-sm:px-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" as const }}
      >
        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-3xl p-12 text-center text-white max-sm:p-8">
          <motion.h2 
            className="text-4xl font-bold mb-8 max-sm:text-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Notre Impact en Chiffres
          </motion.h2>
          
          <div className="grid grid-cols-3 gap-8 max-sm:grid-cols-1 max-sm:gap-6">
            {[
              { number: projetsTermines.length, label: "Projets Livrés" },
              { number: projetsEnCours.length, label: "Projets en Cours" },
              { number: projets.length, label: "Projets Totaux" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
              >
                <motion.div 
                  className="text-6xl font-bold mb-2 max-sm:text-4xl"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.7 + index * 0.2,
                    type: "spring" 
                  }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-xl max-sm:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Section CTA */}
      <motion.div 
        className="w-full px-20 my-16 max-sm:px-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" as const }}
      >

      </motion.div>
    </section>
  );
}

export default Project;
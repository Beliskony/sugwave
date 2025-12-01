import { motion } from 'framer-motion';
import Separateur from "../components/homeScreen/Separateur";
import SpecialBox from "../components/homeScreen/SpecialBox";
import serviceData from '../data/ServiceData';


function Service() {

  // Animations pour la bannière hero
  const heroVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1
    }
  };

  // Animations pour les chiffres clés
  const counterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => {
    console.log(i);

    return {
      opacity: 1,
      y: 0
    };
  }
};


  
  
  

  // Animation pour la grille des services
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  // Transitions séparées
  const heroTransition = {
    duration: 1.5,
    ease: "easeOut" as const
  };

  const counterTransition = (i: number) => ({
    duration: 1,
    ease: "easeOut" as const,
    delay: i * 0.3
  });

  const itemTransition = {
    duration: 0.8,
    ease: "easeOut" as const
  };

  return (
    <section className="flex flex-col items-center justify-between h-full w-full mb-3">
      {/* Bannière Hero avec animation */}
      <motion.div 
        className="flex flex-col h-[550px] items-center justify-between w-full bg-[url('/images/servicebg.jpg')] bg-cover bg-center relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        transition={heroTransition}
      >
        {/* Overlay animé */}
        <motion.div 
          className="absolute inset-0 bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1 }}
        />
        
        <div className="flex w-full items-center justify-center mt-48 max-sm:mb-10 relative">
          <motion.h1 
            className="text-3xl md:text-6xl xl:text-8xl text-white text-center font-bold max-sm:text-5xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" as const }}
          >
            Decouvez Nos Services
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
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as const }}
          >
            <div className="w-1 h-3 bg-white rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Separateur Services */}
      <motion.div 
        className="px-20 my-5 w-full max-sm:px-1"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2, ease: "easeOut" as const }}
      >
        <Separateur numero="01" titre="Services Propose" annee="2025" />
      </motion.div>

      {/* Introduction texte */}
      <motion.div 
        className="w-full px-20 mb-10 max-sm:px-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" as const }}
      >
        <p className="text-xl text-gray-700 text-center leading-relaxed max-sm:text-base">
          Forts de notre expertise dans le secteur du BTP, nous mettons à votre disposition 
          une gamme complète de services pour concrétiser tous vos projets de construction, 
          de rénovation et d'aménagement. De la conception à la réalisation, 
          nous garantissons qualité, durabilité et respect des délais.
        </p>
      </motion.div>

      {/* Grille des services avec animations */}
      <motion.div 
        className="grid grid-cols-3 gap-6 w-full px-20 max-sm:px-5 max-sm:grid-cols-1 max-sm:gap-4"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {serviceData.map((service, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            transition={itemTransition}
            whileHover={{ 
              y: -5, 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <SpecialBox 
              titre={service.titre}
              icones={service.icones}
              details={service.details}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Section Processus */}
      <motion.div 
        className="px-20 my-16 w-full max-sm:px-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Separateur numero="02" titre="Notre Processus" annee="2025" />
        
        <div className="grid grid-cols-4 gap-8 mt-10 max-sm:grid-cols-1 max-sm:gap-6">
          {[
            { step: "01", title: "Consultation", desc: "Échange approfondi pour comprendre vos besoins et votre vision" },
            { step: "02", title: "Étude & Devis", desc: "Analyse technique et proposition détaillée avec devis transparent" },
            { step: "03", title: "Planification", desc: "Élaboration du planning et coordination des équipes" },
            { step: "04", title: "Réalisation", desc: "Exécution des travaux avec suivi rigoureux et qualité garantie" }
          ].map((process, index) => (
            <motion.div 
              key={index}
              className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" as const }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-4">{process.step}</div>
              <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
              <p className="text-gray-600 text-sm">{process.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Separateur Chiffres Clés */}
      <motion.div 
        className="px-20 my-5 w-full max-sm:px-1"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2, ease: "easeOut" as const }}
      >
        <Separateur numero="03" titre="Chiffres Clés" annee="2025" />
      </motion.div>

      {/* Section Chiffres Clés avec animations */}
      <motion.div 
        className="relative flex flex-row min-h-48 w-full items-center justify-around bg-[url('/images/bgSlim.webp')] bg-center bg-cover gap-x-10 px-20 max-sm:px-5 max-sm:flex-col max-sm:gap-y-8 max-sm:py-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-black/50" />
        
        {[
          { number: "100+", text: "Projets Réalisés" },
          { number: "80+", text: "Clients Satisfaits" },
          { number: "10+", text: "Années d'Expérience" },
          { number: "95%", text: "Taux de Satisfaction" }
        ].map((stat, index) => (
          <motion.div 
            key={index}
            className="flex flex-col items-center justify-center z-10"
            custom={index}
            variants={counterVariants}
            transition={counterTransition(index)}
          >
            <motion.h1 
              className="text-8xl text-white font-bold max-sm:text-5xl mb-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.3 + 0.5, type: "spring" }}
            >
              {stat.number}
            </motion.h1>
            <p className="text-2xl text-white font-semibold max-sm:text-sm text-center">
              {stat.text}
            </p>
          </motion.div>
        ))}
      </motion.div>


    </section>
  );
}

export default Service;
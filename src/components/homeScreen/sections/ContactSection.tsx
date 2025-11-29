import { motion } from 'framer-motion';
import Separateur from "../Separateur"
import ToggleText from "../ToggleText"

function ContactSection() {
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
        delay: 0.3
      }
    }
  };

  // Animations pour le conteneur principal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.6
      }
    }
  };

  // Animations pour les éléments enfants
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      x: -20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  // Animation pour la carte (iframe)
  const mapVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95,
      x: 50 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut" as const,
        delay: 0.8
      }
    }
  };

  // Animation pour les points d'information
  const pointsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1.2
      }
    }
  };

  const pointItemVariants = {
    hidden: { 
      opacity: 0, 
      x: -30 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <>
      {/* Separateur animé */}
      <motion.div 
        className="lg:px-20 my-5 w-full px-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={separatorVariants}
      >
        <Separateur numero="04" titre="Section Contact" annee="2025" />
      </motion.div>

      <motion.div 
        className="flex flex-col items-center justify-center gap-8 px-4 lg:px-20 my-10 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {/* Titre principal animé */}
        <motion.h1 
          className="text-end text-7xl font-bold max-sm:text-3xl"
          variants={titleVariants}
        >
          Retrouvez-nous
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
          {/* Carte Google Maps animée */}
          <motion.div 
            className="xl:w-3/5 w-full"
            variants={mapVariants}
          >
            <motion.iframe 
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d9255.441415304238!2d-3.931263809959062!3d5.367379089723322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sCocody%20Faya%20Laurier-%20Capital!5e0!3m2!1sfr!2sci!4v1764347281110!5m2!1sfr!2sci" 
              width="100%" 
              height="400"
              loading="lazy"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Contenu + Points animés */}
          <motion.div 
            className="flex flex-col gap-8 xl:w-2/5 w-full"
            variants={pointsVariants}
          >
            {/* Description animée */}
            <motion.p 
              className="text-base text-gray-700 dark:text-white leading-relaxed"
              variants={itemVariants}
            >
              Chez <span className="font-semibold text-gray-900 dark:text-white">KSK-BUILDING</span>, nous mettons notre expertise au service de vos projets.
              Que ce soit pour la <strong>construction de votre maison</strong>, la <strong>rénovation</strong> de votre bien ou la 
              <strong> réalisation d'ouvrages professionnels</strong>, nous vous accompagnons de l'étude à la finition.
              <br />
              Nos équipes qualifiées assurent un suivi rigoureux à chaque étape afin de garantir des travaux durables, esthétiques et conformes aux normes.
              <br /><br />
              Nous intervenons également dans les domaines suivants : 
              <span className="font-semibold">
                BTP – Aménagement paysager – Piscine – Cascade – Jet d'eau – Imprimerie – Gadgets publicitaires – Maintenance informatique et réseaux – Fourniture de matériels informatiques et bureautiques – Commerce général.
              </span>
            </motion.p>

            {/* Grands Points avec animation en cascade */}
            <motion.div 
              className="flex flex-col gap-6"
              variants={pointsVariants}
            >
              <motion.h3 
                className="text-2xl font-semibold border-b border-gray-300 pb-2"
                variants={pointItemVariants}
              >
                Pourquoi nous confier votre projet ?
              </motion.h3>

              {/* Item 1 */}
              <motion.div 
                className="border-b border-gray-200 pb-4"
                variants={pointItemVariants}
              >
                <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  1. Expérience & Expertise
                </h4>
                <ToggleText
                  text={`Notre équipe cumule plusieurs années d'expérience dans la construction et la rénovation.
                  Nous maîtrisons les techniques modernes, comme la méthode du béton par palier, garantissant solidité et longévité de vos ouvrages.`}
                />
              </motion.div>

              {/* Item 2 */}
              <motion.div 
                className="border-b border-gray-200 pb-4"
                variants={pointItemVariants}
              >
                <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  2. Accompagnement personnalisé
                </h4>
                <ToggleText
                  text={`Nous étudions chaque projet avec soin pour vous proposer des solutions adaptées à votre budget et à vos besoins.
                  De la conception aux finitions, nous restons à vos côtés.`}
                />
              </motion.div>

              {/* Item 3 */}
              <motion.div 
                className="border-b border-gray-200 pb-4"
                variants={pointItemVariants}
              >
                <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  3. Qualité & Fiabilité
                </h4>
                <ToggleText
                  text={`Nous utilisons des matériaux certifiés et respectons les normes de sécurité en vigueur.
                  Votre satisfaction et la durabilité de vos constructions sont notre priorité.`}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default ContactSection;
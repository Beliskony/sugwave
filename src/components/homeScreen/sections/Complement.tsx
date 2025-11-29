import { motion } from 'framer-motion';
import Separateur from "../Separateur";
import SliderHome from "../SliderHome";

function Complement() {
  return (
    <>
      {/* Separateur animé */}
      <motion.div 
        className="lg:px-20 my-5 w-full px-5"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2, ease: "easeOut" as const }}
      >
        <Separateur numero="02" titre="Complement" annee="2025" />
      </motion.div>

      <div className="my-2 w-full flex flex-col items-start justify-center gap-y-5 md:px-2 max-sm:my-10">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:px-20 px-2 gap-y-3">
          {/* Titre principal animé */}
          <motion.p 
            className="text-2xl xl:text-3xl xl:text-start text-center font-black text-black dark:text-white text-wrap xl:w-3/7 w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: "easeOut" as const, delay: 0.3 }}
          >
            Embelir votre espace de vie avec nos designs modernes.
          </motion.p>

          {/* Sous-titre animé */}
          <motion.p 
            className="text-xl xl:text-start text-center font-light text-black dark:text-white text-wrap xl:w-3/7 w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: "easeOut" as const, delay: 0.6 }}
          >
            Certe nous privilégions la qualité, mais nous ne négligeons pas le design. Nous vous offrons le meilleur en matière de design et de qualité.
          </motion.p>
        </div>

        {/* Slider animé */}
        <motion.div 
          className="w-full"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: "easeOut" as const, delay: 0.9 }}
        >
          <SliderHome/>
        </motion.div>
      </div>
    </>
  );
}

export default Complement;
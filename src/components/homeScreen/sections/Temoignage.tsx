import { motion } from 'framer-motion';
import Separateur from '../Separateur';

const Temoignage = () => {
  const temoignages = [
    {
      name: "M. et Mme Dupont",
      project: "Construction maison individuelle",
      quote: "Un professionnalisme remarquable du début à la fin. Les délais ont été respectés à la lettre !",
      rating: "★★★★★"
    },
    {
      name: "SARL TechSolutions",
      project: "Rénovation bureaux",
      quote: "Excellente communication et grande réactivité. Nous recommandons vivement leurs services.",
      rating: "★★★★★"
    },
    {
      name: "M. Laurent",
      project: "Aménagement paysager",
      quote: "Notre jardin est devenu un véritable havre de paix. Travail soigné et créatif.",
      rating: "★★★★☆"
    }
  ];

  return (
    <motion.div 
      className="w-full px-20 my-16 max-sm:px-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" as const }}
    >
      <Separateur numero="04" titre="Ils Nous Ont Fait Confiance" annee="2025" />
      
      <div className="mt-10 grid grid-cols-3 gap-8 max-sm:grid-cols-1">
        {temoignages.map((testimonial, index) => (
          <motion.div 
            key={index}
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            whileHover={{ 
              y: -5, 
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)", 
              transition: { duration: 0.3 } 
            }}
          >
            <div className="text-yellow-500 text-2xl mb-4">{testimonial.rating}</div>
            <p className="text-gray-700 italic mb-6 text-lg">"{testimonial.quote}"</p>
            <div className="border-t pt-4">
              <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
              <p className="text-gray-600 text-sm">{testimonial.project}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Temoignage;
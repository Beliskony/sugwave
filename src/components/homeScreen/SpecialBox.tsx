import { type FC } from "react"
import { motion } from "framer-motion"

interface SpecialBoxProps {
  titre?: string
  icones?: string
  details?: string
}

const SpecialBox: FC<SpecialBoxProps> = ({ titre, icones, details }) => {
  return (
    <motion.div
      whileHover={{ 
        y: -6, 
        scale: 1.02 
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        type: "spring", 
        stiffness: 250, 
        damping: 18 
      }}
      className="relative flex flex-col justify-between h-44 max-sm:h-56 p-3 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300 cursor-pointer overflow-hidden group"
    >
      {/* Icône et titre */}
      <div className="flex flex-row items-center justify-between">
        <h3 className="font-bold text-xl text-gray-900 group-hover:text-black transition-colors duration-300">
          {titre}
        </h3>
        {icones && (
          <motion.img
            src={icones}
            alt="icon"
            className="w-10 h-10 object-contain"
            whileHover={{ 
              rotate: 10,
              transition: { duration: 0.2 }
            }}
          />
        )}
      </div>

      {/* Détails */}
      <p className="text-gray-700 text-sm mt-2 mb-3 leading-relaxed">
        {details}
      </p>

      {/* Effet de fond au hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
    </motion.div>
  )
}

export default SpecialBox
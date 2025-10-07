import {type FC } from "react"
import { motion } from "framer-motion"

interface SpecialBoxProps {
  titre?: string
  icones?: string
  details?: string
}

const SpecialBox: FC<SpecialBoxProps> = ({ titre, icones, details }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="relative flex flex-col justify-between h-44 max-sm:h-56 p-2 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:border-black transition-all duration-300 cursor-pointer overflow-hidden group"
    >
      {/* Icône et titre */}
      <div className="flex flex-row items-center justify-between">
        <h3 className="font-bold text-xl text-gray-900 group-hover:text-black">
          {titre}
        </h3>
        {icones && (
          <motion.img
            src={icones}
            alt="icon"
            className="w-10 h-10 object-contain transition-transform duration-300 group-hover:rotate-6"
            whileHover={{ rotate: 12 }}
          />
        )}
      </div>

      {/* Détails */}
      <motion.div
      
        whileHover={{ y: -5, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="text-gray-800 dark:text-gray-300 mb-3 overflow-hidden hover:opacity-100 hover:translate-y-0 
                   max-sm:opacity-100 max-sm:translate-y-0 max-sm:h-auto"
      >
        {details}
      </motion.div>

      {/* Effet de lueur en fond */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
    </motion.div>
  )
}

export default SpecialBox

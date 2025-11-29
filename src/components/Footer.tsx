import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowUp } from "lucide-react"
import { Link } from "react-router-dom"
import { useDarkMode } from "../hook/useDarkMode"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const Footer = () => {
  const { isDark } = useDarkMode();
  const [isVisible, setIsVisible] = useState(false);
  const logoSrc = isDark ? "/images/LogoBlack.png" : "/images/LogoFondNoBG.png";

  // Show/hide scroll to top button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.footer 
      className="relative w-full flex flex-col items-center justify-center border-t-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: "easeOut" as const }}
    >
      {/* Bouton retour en haut */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Logo + Nom */}
      <motion.div 
        className="flex flex-col md:flex-row items-center justify-around w-full py-8 px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" as const }}
      >
        <div className="flex justify-center items-center gap-4 mb-6 md:mb-0">
          <motion.img 
            key={logoSrc} 
            src={logoSrc} 
            alt="Logo du site" 
            className="w-20 h-20 md:w-24 md:h-24 rounded-full"
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.3 }
            }}
          />
          <motion.h4 
            className="text-2xl md:text-3xl font-black text-black dark:text-white tracking-wide uppercase"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            KSK-BUILDING
          </motion.h4>
        </div>
      </motion.div>

      {/* Contenu principal */}
      <motion.div 
        className="w-full flex flex-col md:flex-row max-w-7xl items-center justify-around md:items-start px-4 md:px-8 py-8 gap-8 md:gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" as const }}
      >
        {/* Liens principaux */}
        <motion.div 
          className="flex flex-col items-center md:items-start justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" as const }}
        >
          <motion.h2 
            className="text-xl lg:text-2xl font-bold text-black dark:text-white"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Liens Rapides
          </motion.h2>
          <div className="flex flex-col items-center md:items-start gap-3">
            {[
              { path: "/", label: "Accueil" },
              { path: "/service", label: "Services" },
              { path: "/project", label: "Projets" }
            ].map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1 + 0.5,
                  duration: 0.5,
                  ease: "easeOut" as const
                }}
              >
                <Link
                  to={link.path}
                  className="text-sm text-gray-600 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group"
                >
                  <motion.span
                    className="w-2 h-2 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100"
                    whileHover={{ scale: 1.5 }}
                  />
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contacts */}
        <motion.div 
          className="flex flex-col items-center md:items-start gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" as const }}
        >
          <motion.h2 
            className="text-xl lg:text-2xl font-bold text-black dark:text-white"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Contacts
          </motion.h2>
          <div className="flex flex-col items-center md:items-start gap-3">
            {[
              { icon: Phone, href: "tel:+2250788557370", text: "07-88-55-73-70" },
              { icon: Mail, href: "mailto:nguessanaxel21@gmail.com", text: "contact@ksk-building.com" }
            ].map((contact, index) => (
              <motion.div
                key={contact.text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1 + 0.6,
                  duration: 0.5,
                  ease: "easeOut" as const
                }}
              >
                <a
                  href={contact.href}
                  className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group"
                >
                  <motion.div
                    className="p-2 bg-blue-100 dark:bg-blue-900 rounded-full"
                    whileHover={{ scale: 1.1 }}
                  >
                    <contact.icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  </motion.div>
                  {contact.text}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Adresse */}
        <motion.div 
          className="flex flex-col items-center md:items-start gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" as const }}
        >
          <motion.h2 
            className="text-xl lg:text-2xl font-bold text-black dark:text-white"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Adresse
          </motion.h2>
          <div className="flex flex-col items-center md:items-start gap-3">
            {[
              { href: "https://maps.app.goo.gl/1BUDiFMkHiqH4jDu9", text: "Abidjan, Koumassi" },
              { href: "https://maps.app.goo.gl/DnPLtnWqqUuEG9Kf8", text: "Rue H732" }
            ].map((address, index) => (
              <motion.div
                key={address.text}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1 + 0.7,
                  duration: 0.5,
                  ease: "easeOut" as const
                }}
              >
                <a
                  href={address.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group"
                >
                  <motion.div
                    className="p-2 bg-green-100 dark:bg-green-900 rounded-full"
                    whileHover={{ scale: 1.1 }}
                  >
                    <MapPin className="h-4 w-4 text-green-600 dark:text-green-400" />
                  </motion.div>
                  {address.text}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Réseaux sociaux */}
        <motion.div 
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" as const }}
        >
          <motion.h2 
            className="text-xl lg:text-2xl font-bold text-black dark:text-white text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Suivez-nous
          </motion.h2>
          <motion.p 
            className="text-sm text-gray-600 dark:text-gray-300 text-center mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            Nous vous attendons
          </motion.p>
          <div className="flex items-center gap-6">
            {[
              { icon: Facebook, href: "#", color: "hover:text-blue-600" },
              { icon: Instagram, href: "#", color: "hover:text-pink-500" },
              { icon: Twitter, href: "#", color: "hover:text-sky-500" }
            ].map((social, index) => (
              <motion.a
                key={social.color}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-500 dark:text-gray-400 ${social.color} transition-colors duration-300`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ 
                  delay: index * 0.1 + 0.8,
                  duration: 0.3
                }}
              >
                <social.icon className="h-6 w-6 md:h-7 md:w-7" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bas de page */}
      <motion.div 
        className="border-t border-gray-200 dark:border-gray-700 w-full py-6 flex justify-center bg-gray-50 dark:bg-gray-800"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" as const }}
      >
        <motion.p 
          className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium text-center"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          © {new Date().getFullYear()} KSK-BUILDING — Tous droits réservés.
        </motion.p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
import { Menu, X, Moon, Sun } from "lucide-react";
import { useDarkMode } from "../hook/useDarkMode";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const { isDark, toggleDarkMode } = useDarkMode(); 
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Animation au scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Empêcher le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <motion.section 
      className={`fixed w-full h-20 py-2 z-50 flex flex-row items-center justify-between px-8 max-sm:px-4 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg dark:bg-gray-900/95" 
          : "bg-transparent backdrop-blur-sm"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" as const }}
    >
      {/* Logo */}
      <motion.div 
        className="flex items-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <Link to="/">
          <motion.img 
            src="/images/LogoNoBG.png" 
            alt="Logo" 
            className="w-16 h-16 max-sm:w-14 max-sm:h-14"
            whileHover={{ rotate: 5 }}
            transition={{ duration: 0.3 }}
          />
        </Link>
      </motion.div>

      {/* Navigation Desktop */}
      <nav className="flex flex-row text-xl items-center max-sm:hidden gap-8">
        {[
          { path: "/", label: "Home" },
          { path: "/project", label: "Projects" },
          { path: "/service", label: "Services" }
        ].map((item, index) => (
          <motion.div
            key={item.path}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: index * 0.1 + 0.3,
              duration: 0.5,
              ease: "easeOut" as const
            }}
          >
            <Link 
              to={item.path}
              className={`relative px-4 py-2 font-medium transition-all duration-300 ${
                location.pathname === item.path
                  ? "text-black dark:text-white font-bold"
                  : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
              }`}
            >
              {item.label}
              {location.pathname === item.path && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-black dark:bg-white"
                  layoutId="underline"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Bouton Dark Mode uniquement */}
      <div className="flex items-center gap-x-4">
        <motion.button
          onClick={toggleDarkMode}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/20 dark:border-gray-600 max-sm:hidden flex"
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
        >
          {isDark ? (
            <Sun className="text-yellow-400 w-5 h-5" />
          ) : (
            <Moon className="text-gray-700 w-5 h-5" />
          )}
        </motion.button>

        {/* Menu Burger Mobile */}
        <div className="flex md:hidden items-center">
          <motion.button 
            onClick={() => setIsOpen(true)}
            className="p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Menu className="h-8 w-8 text-white" />
          </motion.button>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay sombre */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu mobile */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeOut" as const }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white dark:bg-gray-900 shadow-2xl z-50 md:hidden overflow-y-auto"
            >
              {/* En-tête du menu mobile */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <img 
                    src="/images/LogoNoBG.png" 
                    alt="Logo" 
                    className="w-12 h-12"
                  />
                  <span className="ml-3 text-lg font-bold text-black dark:text-white">
                    Menu
                  </span>
                </motion.div>

                {/* Bouton fermeture */}
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <X className="h-5 w-5 text-black dark:text-white" />
                </motion.button>
              </div>

              {/* Liens de navigation */}
              <nav className="flex flex-col p-6 gap-3">
                {[
                  { path: "/", label: "Home" },
                  { path: "/project", label: "Projects" },
                  { path: "/service", label: "Services" }
                ].map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: index * 0.1 + 0.3,
                      duration: 0.5,
                      ease: "easeOut" as const
                    }}
                  >
                    <Link
                      to={item.path}
                      className={`block w-full text-left text-lg font-semibold py-4 px-6 rounded-xl transition-all duration-300 ${
                        location.pathname === item.path
                          ? "bg-blue-600 text-white shadow-lg"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Séparateur */}
              <div className="px-6 py-4">
                <div className="border-t border-gray-200 dark:border-gray-700"></div>
              </div>

              {/* Dark Mode dans le menu mobile */}
              <motion.div 
                className="px-6 pb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Thème
                    </span>
                    <button
                      onClick={toggleDarkMode}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      {isDark ? (
                        <>
                          <Sun className="w-4 h-4" />
                          <span className="text-sm">Clair</span>
                        </>
                      ) : (
                        <>
                          <Moon className="w-4 h-4" />
                          <span className="text-sm">Sombre</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Informations de contact (optionnel) */}
              <motion.div 
                className="px-6 pb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="text-center">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    © 2024 SugWave. Tous droits réservés.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Header;
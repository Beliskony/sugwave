import { Facebook, Instagram, Twitter } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-white w-full flex flex-col items-center justify-center border-t-2 border-gray-200">
      {/* Logo + Nom */}
      <div className="flex flex-col md:flex-row items-center justify-around w-full gap-3 mb-4">
        <div className="flex justify-center items-center">
          <img src="/images/LogoFondNoBG.png" alt="logo" className="w-20 h-20 md:w-32 md:h-32 rounded-full" />
          <h4 className="text-2xl md:text-3xl font-black text-black tracking-wide">
            SUBWAVE
          </h4>
        </div>

      
      </div>

      {/* Contenu principal */}
      <div className="w-full flex flex-col md:flex-row max-w-7xl items-center justify-around md:text-left mb-3 gap-3 max-sm:gap-y-7">

        {/* Liens principaux */}
      <div className="flex flex-col items-center md:items-start justify-center gap-y-1.5">
        <h2 className="text-xl lg:text-3xl font-bold text-black ">Liens</h2>
        <div className="flex flex-row md:flex-col max-sm:gap-x-11">
        <Link
          to="/"
          className="text-sm text-gray-800 font-semibold hover:underline"
        >
          Home
        </Link>
        <Link
          to="/service"
          className="text-sm text-gray-800 font-semibold hover:underline"
        >
          Services
        </Link>
        <Link
          to="/project"
          className="text-sm text-gray-800 font-semibold hover:underline"
        >
          Projects
        </Link>
        </div>
      </div>

        {/* Contacts */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <h2 className="text-xl text-black lg:text-3xl font-bold">Contacts</h2>
          <div className="flex flex-row md:flex-col gap-1 max-sm:gap-x-11">
            <a
              href="tel:+2250788557370"
              className="text-sm text-gray-800 font-semibold hover:underline"
            >
              07-88-55-73-70
            </a>
            <a
              href="mailto:nguessanaxel21@gmail.com"
              className="text-sm text-gray-800 font-semibold hover:underline"
            >
              contact@info.com
            </a>
          </div>
        </div>

        {/* Adresse */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <h2 className="text-xl text-black lg:text-3xl font-bold">Adresse</h2>
          <div className="flex flex-row md:flex-col gap-1 max-sm:gap-x-11">
            <a
              href="https://maps.app.goo.gl/1BUDiFMkHiqH4jDu9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-800 font-semibold hover:underline"
            >
              Abidjan, Koumassi
            </a>
            <a
              href="https://maps.app.goo.gl/DnPLtnWqqUuEG9Kf8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-800 font-semibold hover:underline"
            >
              Rue H732
            </a>
          </div>
        </div>

                {/* Réseaux sociaux */}
        <div className="flex flex-col items-center gap-1.5">
          <h2 className="text-xl lg:text-3xl font-bold text-black ">Suivez-nous</h2>
          <div className="flex items-center gap-x-5 max-sm:gap-x-11">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-transform duration-200 hover:scale-110"
            >
              <Facebook className="h-6 w-6 max-sm:h-8 max-sm:w-8" />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-pink-500 transition-transform duration-200 hover:scale-110"
            >
              <Instagram className="h-6 w-6 max-sm:h-8 max-sm:w-8" />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-sky-500 transition-transform duration-200 hover:scale-110"
            >
              <Twitter className="h-6 w-6 max-sm:h-8 max-sm:w-8" />
            </a>
          </div>
          <h3>Nous vous attendons</h3>
        </div>
      </div>

      {/* Bas de page */}
      <div className="border-t border-gray-200 w-full pt-5 flex justify-center">
        <p className="text-sm md:text-base text-gray-400 font-medium text-center">
          © 2025 Subwave — Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}

export default Footer

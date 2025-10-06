import { Facebook, Instagram, Twitter } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <section className="bg-white w-full px-20 py-5 flex flex-col items-center justify-center max-sm:flex-col max-sm:px-1 max-sm:py-1">

        <div className="flex flex-row items-center justify-center gap-x-2 max-sm:gap-x-0">
              <h4 className="text-xl text-black font-black flex flex-row max-sm:text-xs">SUBWAVE</h4>
              <img src="/images/LogoFondNoBG.png" alt="logo" className="w-20 h-20 rounded-full ml-2" />
        </div>

      

      <div className="flex flex-row w-full items-center justify-center my-2 max-sm:flex-col">
        <div className="w-2/5 flex flex-row items-center justify-start gap-x-10 max-sm:gap-x-7 max-sm:w-full max-sm:justify-center">
          <Link to="/service" className="text-xl text-black font-normal hover:font-bold hover:transition-all hover:ease-in-out hover:underline">Services</Link>
          <Link to="/project" className="text-xl text-black font-normal hover:font-bold hover:transition-all hover:ease-in-out hover:underline">Projects</Link>
          <Link to="/" className="text-xl text-black font-normal hover:font-bold hover:transition-all hover:ease-in-out hover:underline">Home</Link>
        </div>

        <div className="w-3/5 flex flex-row max-sm:flex-col items-start justify-between gap-x-10 mt-10 max-sm:gap-y-3.5 max-sm:w-full max-sm:gap-x-0 max-sm:items-center max-sm:px-2 max-sm:mt-4">
          <div className="flex flex-col items-center justify-center gap-y-2 max-sm:hidden">
            <h1 className="text-xl text-gray-500">Follow Us</h1>
              <div className="flex flex-row items-start justify-center gap-x-6">
                <a href="#" className="text-xs text-black font-bold"> <Facebook className="h-6 w-6"/> </a>
                <a href="#" className="text-xs text-black font-bold"> <Instagram className="h-6 w-6"/> </a>
                <a href="#" className="text-xs text-black font-bold max-sm:hidden"> <Twitter className="h-6 w-6"/> </a>
              </div>
          </div>

          <div className="flex flex-col items-start justify-center max-sm:items-center gap-y-2">
            <h1 className="text-xl text-gray-500">Contacts</h1>
            <div className="flex flex-row md:flex-col items-start justify-center gap-x-5">
              <a href="tel:+2250788557370" className="text-xs text-black font-bold">07-88-55-73-70</a>
              <a href="mailto:nguessanaxel21@gmail.com" className="text-xs text-black font-bold">contact@info.com</a>
            </div>
          </div>

          <div className="flex flex-col items-start justify-center max-sm:items-center gap-y-2">
            <h1 className="text-xl text-gray-500">Adresse</h1>
            <div className="flex flex-row items-start justify-center gap-x-2">
              <a href="https://maps.app.goo.gl/1BUDiFMkHiqH4jDu9" target="_blank" rel="noopener noreferrer" className="text-xs text-black font-bold">Abidjan, Koumassi</a>
              <a href="https://maps.app.goo.gl/DnPLtnWqqUuEG9Kf8" target="_blank" rel="noopener noreferrer" className="text-xs text-black font-bold">Rue H732</a>
            </div>
          </div>
        
        </div>
        
      </div>

      <div className="flex flex-row items-center justify-center gap-2 md:hidden">
            <h1 className="text-xl text-gray-500">Follow Us</h1>
                <a href="#" className="text-xs text-black font-bold"> <Facebook className="h-6 w-6"/> </a>
                <a href="#" className="text-xs text-black font-bold"> <Instagram className="h-6 w-6"/> </a>
                <a href="#" className="text-xs text-black font-bold"> <Twitter className="h-6 w-6"/> </a>
          </div>

      <div className="w-full flex justify-center items-center py-3.5">
        <h4 className="text-gray-400 text-xl max-sm:text-xs">©all copyright reserve 2025</h4>
      </div>
    </section>
  )
}

export default Footer
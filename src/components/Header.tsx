import { Menu, X } from "lucide-react";
import { useState } from "react"
import { Link } from "react-router-dom"


const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    contact: "",
    email: "",
    message: "",
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 

  const handleSubmit = (e: React.FormEvent<HTMLFormElement | HTMLTextAreaElement>) => {
    e.preventDefault();
  console.log("Form submitted:", formData);

    setFormData({ Name: "", contact: "", email: "", message: "" });
    setIsClicked(false);
  }

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
 
  
  return (
    <section className="absolute bg-transparent backdrop-blur-sm w-full h-20 py-2 z-10 flex flex-row item-center justify-around px-4 max-sm:px-1 max-sm:justify-around">
      <div className="flex flex-row items-center p-2 max-sm:p-0">
        <Link to="/">
        <img src="/images/LogoNoBG.png" alt="Logo" className="w-20 h-20 max-sm:w-20 max-sm:h-20" /></Link>
      </div>

      <nav className="flex flex-row text-2xl items-center max-sm:hidden">
        <Link to="/" className="text-white mx-4 hover:font-bold hover:scale-110 transition-all">Home</Link>
        <Link to="/project" className="text-white mx-4 hover:font-bold hover:scale-110 transition-all">Projects</Link>
        <Link to="/service" className="text-white mx-4 hover:font-bold hover:scale-110 transition-all">Services</Link>
      </nav>


    <div className="flex flex-row items-center">
      <button onClick={handleClick}
        className="bg-white text-black px-6 py-2 rounded-2xl w-44 font-semibold shadow hover:scale-105 transition-transform" >
        Contactez-nous
      </button>

    </div>

    {isClicked && (
      <div className="fixed z-50 flex items-center justify-center h-screen">
        
        <div className="relative flex flex-col md:flex-row w-[850px] max-sm:w-[95%] bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Image côté gauche */}
          <img src="/images/bgOne.jpg" alt="bgOne" className="w-1/2 h-auto object-cover hidden md:block" />

        {/* Formulaire */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 w-full md:w-1/2 p-8" >

          {/* Bouton fermeture */}
          <button
            type="button"
            onClick={() => setIsClicked(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition" >
            <X className="h-10 w-10"/>
          </button>

          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Contactez-nous
          </h2>
          <p className="text-gray-500 text-center text-sm">
            Remplissez le formulaire ci-dessous et nous reviendrons vers vous.
          </p>

          {/* Inputs */}
            <input
              id="Name"
              name="Name"
              type="text"
              placeholder="Nom & Prénom"
              value={formData.Name}
              onChange={handleChange}
              className="flex-1 border rounded-xl px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
              required
            />

            <input
            id="contact"
            name="contact"
            type="text"
            placeholder="+225 0707070707"
            value={formData.contact}
            onChange={handleChange}
            className="border rounded-xl px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
            required
          />

          <input
            id="email"
            name="email"
            type="email"
            placeholder="Adresse email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-xl px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
            required
          />

          <textarea
            id="message"
            name="message"
            placeholder="Votre message..."
            value={formData.message}
            onChange={handleChange}
            className="border rounded-xl px-4 py-2 h-28 resize-none focus:ring-2 focus:ring-black focus:outline-none"
            required
          />

          <button
            type="submit"
            className="bg-black text-white py-3 rounded-xl font-semibold shadow hover:scale-105 transition-transform"
          >
            Envoyer
          </button>
        </form>
        </div>

      </div>
      )}



        <div className="hidden max-sm:flex items-center relative">
  {/* Bouton hamburger */}
  <button onClick={() => setIsOpen(true)}>
    <Menu className="h-10 w-10 text-white" />
  </button>

  {/* Overlay sombre */}
  {isOpen && (
    <div
      className="fixed inset-0 bg-black/50 z-40"
      onClick={() => setIsOpen(false)}
    />
  )}

  {/* Menu mobile */}
  <div
    className={`fixed top-0 right-0 h-screen w-3/4 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-500 ${
      isOpen ? "translate-x-0 duration-300 transition-all ease-in-out" : "translate-x-full hidden"
    }`}
  >
    {/* Bouton fermeture */}
    <button
      onClick={() => setIsOpen(false)}
      className="absolute top-4 right-4"
    >
      <X className="h-10 w-10"/>
    </button>

    {/* Liens */}
    <nav className="flex flex-col mt-16 gap-y-6 items-center">
      <Link
        to="/"
        className="text-black text-2xl font-bold hover:text-white hover:bg-black px-6 py-3 w-full text-center transition-all"
        onClick={() => setIsOpen(false)}
      >
        Home
      </Link>
      <Link
        to="/project"
        className="text-black text-2xl font-bold hover:text-white hover:bg-black px-6 py-3 w-full text-center transition-all"
        onClick={() => setIsOpen(false)}
      >
        Projects
      </Link>
      <Link
        to="/service"
        className="text-black text-2xl font-bold hover:text-white hover:bg-black px-6 py-3 w-full text-center transition-all"
        onClick={() => setIsOpen(false)}
      >
        Services
      </Link>
    </nav>
  </div>
</div>


    </section>
  )
}

export default Header
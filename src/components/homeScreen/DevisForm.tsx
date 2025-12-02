import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";

interface DevisFormProps {
  isClicked: boolean;
  setIsClicked: (value: boolean) => void;
}

const DevisForm: React.FC<DevisFormProps> = ({ isClicked, setIsClicked }) => {
  const [formData, setFormData] = useState({
    nom: "",
    contact: "",
    email: "",
    service: "",
    budget: "",
    delai: "",
    message: "",
  });

  const modalRef = useRef(null);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Demande de devis soumise :", formData);
    // Traitement backend ou API ici
    setIsClicked(false);
    setFormData({
      nom: "",
      contact: "",
      email: "",
      service: "",
      budget: "",
      delai: "",
      message: "",
    });
  };

  // Fermeture avec "Esc" ou clic à l’extérieur
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsClicked(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !(modalRef.current as any).contains(e.target)) {
        setIsClicked(false);
      }
    };

    if (isClicked) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);

      document.body.style.overflow = "auto";
    };
  }, [isClicked]);

  if (!isClicked) {
    return null
  }

  return (
      
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div
            ref={modalRef}
            className="relative flex flex-col md:flex-row w-[850px] my-7 max-sm:w-full bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            {/* Image côté gauche */}
            <img
              src="/images/DevisForm.webp"
              alt="bgOne"
              className="w-1/2 h-auto object-cover hidden md:block"
            />

            {/* Formulaire de devis */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full md:w-1/2 p-4">
              {/* Bouton fermeture */}
              <button
                type="button"
                onClick={() => setIsClicked(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
              >
                <X className="h-6 w-6" />
              </button>

              <h2 className="text-2xl font-bold text-gray-800 text-center">Demande de devis</h2>
              <p className="text-gray-500 text-center text-sm">
                Remplissez le formulaire pour recevoir une estimation.
              </p>

              {/* Inputs */}
              <input
                id="nom"
                name="nom"
                type="text"
                placeholder="Nom & Prénom"
                value={formData.nom}
                onChange={handleChange}
                className="border rounded-xl px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
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

              {/* Sélection du service */}
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="border rounded-xl px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
                required
              >
                <option value="">Type de service</option>
                <option value="Construction">Construction</option>
                <option value="Rénovation">Rénovation</option>
                <option value="Étude technique">Étude technique</option>
                <option value="Étude technique">Piscine</option>
                <option value="Autre">Autre</option>
              </select>

              {/* Budget estimé */}
              <input
                id="budget"
                name="budget"
                type="text"
                placeholder="Budget estimé (en FCFA)"
                value={formData.budget}
                onChange={handleChange}
                className="border rounded-xl px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
              />

              {/* Délai */}
              <input
                id="delai"
                name="delai"
                type="text"
                placeholder="Délai souhaité (ex : 2 mois)"
                value={formData.delai}
                onChange={handleChange}
                className="border rounded-xl px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
              />

              {/* Message */}
              <textarea
                id="message"
                name="message"
                placeholder="Détaillez votre projet ou besoin..."
                value={formData.message}
                onChange={handleChange}
                className="border rounded-xl px-4 py-2 h-28 resize-none focus:ring-2 focus:ring-black focus:outline-none"
              />

              <button
                type="submit"
                className="bg-black text-white py-3 rounded-xl font-semibold shadow hover:scale-105 transition-transform"
              >
                Envoyer la demande
              </button>
            </form>
          </div>
        </div>

  );
};

export default DevisForm;

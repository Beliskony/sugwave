import { X } from "lucide-react"
import Separateur from "../components/homeScreen/Separateur"
import SliderHome from "../components/homeScreen/SliderHome"
import SpecialBox from "../components/homeScreen/SpecialBox"
import ToggleText from "../components/homeScreen/ToggleText"
import ProjectBox from "../components/projets/ProjectBox"
import { useState } from "react"




function Home() {
    const [isClicked, setIsClicked] = useState(false);
    const handleClick = () => {
    setIsClicked(!isClicked);
  };
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


  return (
    <section className="flex flex-col items-center h-full w-full">
    {/*partie Une*/}
        <div className="flex flex-col items-center justify-end-safe w-full h-[730px] max-sm:h-[550px] bg-[url('/images/bgDark.jpg')] bg-cover bg-center">

           <div className="flex flex-col items-start  w-full px-20 my-5 gap-y-3 max-sm:px-1 max-sm:my-10">
              <h1 className="text-8xl font-black text-white max-sm:text-3xl">CONSTRUISEZ - INNOVONS</h1>

              <div className="flex flex-row items-center justify-between w-full">
                    <p className="text-xl font-normal text-wrap text-white w-[450px] text-start max-sm:text-xs max-sm:w-[250px]">
                       PRENEZ PART A L'AVENIR DE LA CONSTRUCTION, SOUTENEZ L'INOVATION
                    </p>

                    <div className="flex text-white">
                        <a href="#InformationHome" className="flex flex-row items-center gap-x-1 hover:scale-75">Explorer
                            <img src="https://img.icons8.com/?size=100&id=164&format=png&color=ffffff" alt="Arrow" className="w-10 h-10 max-sm:w-5 max-sm:h-5 " />
                        </a>
                    </div>
               

              </div>
           </div>

        </div>

    {/*Separateur*/}
    <div className="px-20 my-5 w-full max-sm:px-1">
      <Separateur numero ="01"
                  titre ="Introduction"
                  annee ="2025" />
    </div>
    {/*partie Deux*/}
    
    <div id="InformationHome" className="px-20 my-2 w-full flex flex-col items-start justify-center gap-y-5 max-sm:px-1 max-sm:my-10 max-sm:gap-y-1">
        <p className="text-4xl text-start font-black text-black max-sm:text-2xl text-wrap w-3/7 max-sm:w-full">
            Promouvoir l'innovation dans le secteur de la construction.
        </p>

        <div className="flex flex-row items-center justify-between my-5 w-full gap-x-5 max-sm:flex-col max-sm:gap-y-5">
            <img src="/images/House.jpg" alt="house" className="w-1/2 h-96 rounded-3xl object-contain max-sm:w-full max-sm:h-[450px] max-sm:object-cover"/>

            <div className="grid grid-cols-2 gap-x-3 w-1/2 max-sm:w-full">
               <SpecialBox titre="Materiels De Qualité"
                           icones= "https://img.icons8.com/?size=100&id=BEGycNK1mtwx&format=png&color=000000"
                           details="Nous vous offrons le meilleur pour des realisations durables et solides"
                           />

                <SpecialBox titre="Designs Modernes"
                           icones= "https://img.icons8.com/?size=100&id=l83K3H9MIrGQ&format=png&color=000000"
                           details="Nous appliquons les dernieres tendances de design pour vous offrir le meilleur"
                           />

                <SpecialBox titre="Savoir Faire"
                           icones= "https://img.icons8.com/?size=100&id=11216&format=png&color=000000"
                           details="Notre savoir faire est notre force, nous vous offrons le meilleur en plus d'un personnel qualifié"
                           />

                <SpecialBox titre="Personnaliser"
                           icones= "https://img.icons8.com/?size=100&id=2i2jDnoEm4ER&format=png&color=000000"
                           details="Chez nous, vous pouvez personnaliser votre projet selon vos gouts et vos envies"
                           />
            </div>
        </div>
    </div>

    {/*Separateur*/}
    <div className="px-20 my-5 w-full max-sm:px-1">
      <Separateur numero ="02"
                  titre ="Complement"
                  annee ="2025" />
    </div>

    {/*partie Trois*/}
    <div className=" my-2 w-full flex flex-col items-start justify-center gap-y-5 max-sm:px-1 max-sm:my-10">
        <div className="flex flex-row items-center justify-between px-20 max-sm:px-1 max-sm:flex-col max-sm:gap-y-3">
            <p className="text-4xl text-start font-black text-black max-sm:text-2xl text-wrap w-3/7 max-sm:w-full">
                Embelir votre espace de vie avec nos designs modernes.
            </p>

            <p className="text-xl text-start font-light text-black max-sm:text-xs text-wrap w-3/7 max-sm:w-full">
                Certe nous privilégions la qualité, mais nous ne négligeons pas le design. Nous vous offrons le meilleur en matière de design et de qualité.
            </p>
        </div>


        <div className="w-full ">
            <SliderHome/>
        </div>
    </div>

    {/*Separateur*/}
    <div className="px-20 my-5 w-full max-sm:px-1">
      <Separateur numero ="03"
                  titre ="Projets"
                  annee ="2025" />
    </div>

     {/*Partie quatre*/}
    <div className="flex flex-col px-20 my-5 w-full items-center justify-end max-sm:px-1">
        <h1 className="text-end text-7xl font-bold max-sm:text-3xl">NOS PROJETS</h1>

        <div className="flex flex-row items-center justify-between w-full my-5 max-sm:grid max-sm:grid-cols-2 max-sm:gap-y-5 max-sm:gap-x-1">
            <ProjectBox title="Renovation d'une chambre"
                        description="Votre chambre est votre sanctuaire. Nous vous offrons le meilleur en matière de rénovation."
                        imageUrl="/images/projet.jpg" />
            
            <ProjectBox title="Appartement moderne"
                        description="Concevoir un appartement moderne est notre spécialité. Nous vous offrons le meilleur en matière de design."
                        imageUrl="/images/projet1.jpg" />

            <ProjectBox title="Piscine privee"
                        description="Un espace de vie est incomplet sans une piscine. Nous vous offrons le meilleur en matière de design et de qualité."
                        imageUrl="/images/projet2.jpg" />
            
            <ProjectBox title="Realisation de marches"
                        description="Faciliter l'acces a votre maison est notre priorité. Nous vous offrons le meilleur en matière de design et de qualité."
                        imageUrl="/images/projet3.jpg" />

        </div>

        <div className="flex flex-row items-center justify-between w-full my-5 max-sm:flex-col max-sm:gap-y-5">
             <p className="text-xl text-start font-light text-black max-sm:text-xs text-wrap w-full">
                Avec SugWave, construire votre maison devient une expérience unique.
                Au-delà de notre rôle de constructeur, nous sommes également votre conseiller, car construire une maison représente, 
                pour la majorité, l’investissement d’une vie. C’est pourquoi nous veillons à ce que chaque projet soit durable, 
                réfléchi et à la hauteur de vos attentes.. </p> <ToggleText text="
                 Nous vous accompagnons à chaque étape : de la conception des plans jusqu’à la remise des clés.
                 Avec SugWave, vous bénéficiez d’un suivi personnalisé, de conseils avisés et de matériaux de qualité pour bâtir un foyer solide, esthétique et pérenne.

                 Notre objectif ?
                 Faire de votre projet une réussite, en alliant votre vision à notre expertise." />
             
        </div>


    </div>

    {/*Separateur*/}
    <div className="px-20 my-5 w-full max-sm:px-1">
      <Separateur numero ="04"
                  titre ="Article Du Jour"
                  annee ="2025" />
    </div>

    {/*Partie cinq*/}
    <div className="flex flex-row items-center justify-between px-20 my-5 w-full gap-x-2 max-sm:px-1 max-sm:flex-col max-sm:gap-y-5">
        <div className="flex flex-col items-start justify-start w-1/3 gap-y-5 max-sm:w-full">
            <h1 className="text-5xl font-black text-wrap max-sm:text-3xl my-4">Methode du beton par palier.</h1>
            <img src="/images/House.jpg" alt="house" className="w-full h-[430px] rounded-2xl object-cover max-sm:w-full max-sm:h-[450px] max-sm:object-cover"/>
        </div>


        <div className="flex flex-col items-start justify-start w-2/3 px-20 gap-y-2 max-sm:w-full max-sm:px-1">
            <h5 className="text-xs font-medium">19 Mai 2025</h5>
            <p className="text-sm">La méthode du béton par palier, aussi appelée mise en œuvre par couches ou par étapes, est une technique utilisée principalement pour le bétonnage 
                des grandes structures (fondations profondes, barrages, dalles épaisses, etc.). Elle consiste à couler le béton en plusieurs couches ou paliers successifs, plutôt qu’en
                 une seule fois, afin de mieux contrôler.</p>

            <div className="flex flex-col items-center justify-between w-full my-5">
                <div className="w-full border-b border-black">
                    <h3 className="text-xl font-bold">Grands Points</h3>
                </div>

                <div className="flex flex-col items-center justify-center w-3/4 gap-y-2">
                    <div className="flex flex-col items-center justify-between w-full my-3 border-b border-gray-400">
                        <h3 className="text-lg font-bold w-full">1. Avantages</h3>

                        <div className="flex w-full items-center justify-end">
                            <ToggleText text="Avec la méthode par palier, chaque couche a une épaisseur limitée, ce qui permet :
                                          Une meilleure dissipation thermique,
                                          Moins de concentration de chaleur dans la masse,
                                          Une réduction du risque de fissuration thermique." />
                        </div>
                    </div>


                    <div className="flex flex-col items-center justify-between w-full my-3 border-b border-gray-400">
                        <h3 className="text-lg font-bold w-full">2. Compactage & vibrage</h3>

                        <div className="flex w-full items-center justify-end">
                            <ToggleText text="En procédant par palier, chaque couche est plus accessible pour les outils de compactage :
                                              Le vibrage est plus homogène,
                                              On obtient un béton plus dense et durable." />
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-between w-full my-3 border-b border-gray-400">
                        <h3 className="text-lg font-bold w-full">3. Pression hydrostatique</h3>

                        <div className="flex w-full items-center justify-end">
                            <ToggleText text="En coulant par étapes, on laisse le temps au béton de commencer à prendre avant de rajouter du poids au-dessus :
                                              Cela réduit la pression totale sur les parois du coffrage,
                                              Moins de risque de déformation ou rupture du coffrage." />
                        </div>
                    </div>

                </div>

            </div>
        </div>

    </div>


    {/*Partie six*/}
    <div id="Contacts" className="flex flex-row bg-[url('/images/coverCinq.jpg')] bg-cover bg-center w-full h-[550px] p-20 max-sm:flex-col max-sm:p-1 max-sm:items-center max-sm:justify-center">
       <div className="flex items-center justify-center w-1/2 max-sm:w-full">
             <h1 className="text-7xl font-black text-white text-wrap max-sm:text-center">EXPRIMEZ VOUS</h1>
       </div>

       <div className="flex flex-col items-center justify-center w-1/2 gap-y-5 max-sm:w-full max-sm:my-10">
            <h4 className="text-2xl font-medium text-wrap text-white w-3/4 lg:px-4 text-start">
                Vous souhaitez en savoir plus sur nos services ?
            </h4>

            <p className="text-xs font-light text-wrap text-white w-3/4 text-start">
                Nous sommes là pour vous aider à chaque étape de votre projet. Que vous ayez des questions sur nos services, 
                nos tarifs ou que vous souhaitiez discuter de votre projet en détail,
                n'hésitez pas à nous contacter. Nous sommes impatients de vous accompagner dans la réalisation de votre rêve.
            </p>

      <div className="flex flex-row items-center ">
        <button onClick={handleClick} className="bg-white text-black px-4 py-2 rounded-2xl w-40">Contactez-nous </button>
           {isClicked && (
        <div className="fixed z-50 flex items-center justify-center h-screen">
        
          <div className="relative flex flex-col md:flex-row w-[850px] max-sm:w-[95%] bg-white rounded-3xl shadow-xl overflow-hidden">
            {/* Image côté gauche */}
            <img src="/images/bgOne.jpg" alt="bgOne" className="w-1/2 h-auto object-cover hidden md:block" />

            {/* Formulaire */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full md:w-1/2 p-8" >

                {/* Bouton fermeture */}
                <button type="button" onClick={() => setIsClicked(false)} className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition" >
                  <X className="h-10 w-10"/>
                </button>

                <h2 className="text-2xl font-bold text-gray-800 text-center">
                  Contactez-nous
                </h2>
                <p className="text-gray-500 text-center text-sm">
                  Remplissez le formulaire ci-dessous et nous reviendrons vers vous.
                </p>

            {/* Inputs */}
            <input id="Name" name="Name" type="text" placeholder="Nom & Prénom" value={formData.Name} onChange={handleChange}
              className="flex-1 border rounded-xl px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
              required
            />

            <input id="contact" name="contact" type="text" placeholder="+225 0707070707" value={formData.contact} onChange={handleChange}
              className="border rounded-xl px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
              required
            />

            <input id="email" name="email" type="email" placeholder="Adresse email" value={formData.email} onChange={handleChange}
              className="border rounded-xl px-4 py-2 focus:ring-2 focus:ring-black focus:outline-none"
              required
            />

            <textarea id="message" name="message" placeholder="Votre message..." value={formData.message} onChange={handleChange}
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
       </div>

    </div>
   </div>

    </section>
  )
}

export default Home

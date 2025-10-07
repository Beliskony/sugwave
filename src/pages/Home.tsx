import Separateur from "../components/homeScreen/Separateur"
import SliderHome from "../components/homeScreen/SliderHome"
import SpecialBox from "../components/homeScreen/SpecialBox"
import ToggleText from "../components/homeScreen/ToggleText"
import ProjectBox from "../components/projets/ProjectBox"
import { projets } from "../data/ProjectData"
import DevisForm from "../components/homeScreen/DevisForm"




function Home() {
 
  return (
    <section className="flex flex-col items-center h-full w-full">
      {/*partie Une*/}
      <div className="relative flex flex-col items-center justify-center w-full h-[730px] max-sm:h-[400px] bg-[url('/images/bgDark.jpg')] bg-cover bg-center">
      {/* Overlay noir semi-transparent */}
       <div className="absolute inset-0 bg-black/15"></div>

      {/* Contenu principal */} 
        <div className="relative flex flex-col items-start w-full lg:px-20 my-5 gap-y-3 px-2 max-sm:my-10 max-sm:items-center">
          <h1 className="lg:text-8xl font-black text-white text-2xl md:text-4xl">
           CONSTRUISEZ - INNOVONS
          </h1>

          <div className="flex flex-row items-center justify-between max-sm:justify-center w-full">
            <p className="text-xl font-normal text-wrap text-white text-start max-sm:text-xs w-full">
              PRENEZ PART A L'AVENIR DE LA CONSTRUCTION, SOUTENEZ L'INNOVATION
            </p>

            <div className="flex text-white max-sm:hidden">
              <a href="#InformationHome" className="flex flex-row items-center gap-x-1 hover:scale-90 transition-transform duration-300" >
                Explorer
                <img src="https://img.icons8.com/?size=100&id=164&format=png&color=ffffff" alt="Arrow" className="w-10 h-10 max-sm:w-5 max-sm:h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>


    {/*Separateur*/}
    <div className="lg:px-20 my-5 w-full px-5">
      <Separateur numero ="01"
                  titre ="Introduction"
                  annee ="2025" />
    </div>
      
      {/*partie Deux*/}
      <div id="InformationHome" className="lg:px-20 my-2 w-full flex flex-col items-start justify-center gap-y-5 px-2 max-sm:my-10 max-sm:gap-y-1">
        <p className="text-4xl text-start font-black text-black max-sm:text-2xl text-wrap lg:w-3/7 w-full">
            Promouvoir l'innovation dans le secteur de la construction.
        </p>

        <div className="flex flex-row items-center justify-between my-5 w-full md:items-start gap-x-5 max-sm:flex-col max-sm:gap-y-5">
            <img src="/images/House.jpg" alt="house" className="w-1/2 h-auto rounded-3xl object-contain max-sm:w-full max-sm:h-[450px] max-sm:object-cover"/>

            <div className="grid grid-cols-2 gap-2 lg:w-1/2 w-full">
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
    <div className="lg:px-20 my-5 w-full px-5">
      <Separateur numero ="02"
                  titre ="Complement"
                  annee ="2025" />
    </div>

      {/*partie Trois*/}
      <div className=" my-2 w-full flex flex-col items-start justify-center gap-y-5 md:px-2 max-sm:my-10">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:px-20 px-2 gap-y-3">
            <p className="text-2xl xl:text-3xl xl:text-start text-center font-black text-black text-wrap xl:w-3/7 w-full">
                Embelir votre espace de vie avec nos designs modernes.
            </p>

            <p className="text-xl xl:text-start text-center font-light text-black text-wrap xl:w-3/7 w-full">
                Certe nous privilégions la qualité, mais nous ne négligeons pas le design. Nous vous offrons le meilleur en matière de design et de qualité.
            </p>
        </div>


        <div className="w-full ">
            <SliderHome/>
        </div>
      </div>

    {/*Separateur*/}
    <div className="lg:px-20 my-5 w-full px-5">
      <Separateur numero ="03"
                  titre ="Projets"
                  annee ="2025" />
    </div>

    {/*Partie quatre*/}
    <div className="flex flex-col lg:px-20 my-5 w-full items-center justify-end px-2">
        <h1 className="text-end text-7xl font-bold max-sm:text-3xl">NOS PROJETS</h1>

        <div className="flex flex-wrap items-center justify-between w-full my-5 max-sm:grid max-sm:grid-cols-2 gap-y-5 max-sm:gap-x-1">
           {projets.slice(0,4).map((Projects, index) =>(
            <ProjectBox 
                        key={index}
                        title={Projects.title}
                        description={Projects.description}
                        imageUrl={Projects.coverImage}/>
            ))}
        </div>

        <div className="flex flex-col items-center justify-between w-full my-5 gap-y-5">
             <p className="text-xl text-start font-light text-black max-sm:text-xs text-wrap w-full">
                Avec SugWave, construire votre maison devient une expérience unique.
                Au-delà de notre rôle de constructeur, nous sommes également votre conseiller, car construire une maison représente, 
                pour la majorité, l’investissement d’une vie. C’est pourquoi nous veillons à ce que chaque projet soit durable, 
                réfléchi et à la hauteur de vos attentes.. </p>

              <ToggleText text="
                 Nous vous accompagnons à chaque étape : de la conception des plans jusqu’à la remise des clés.
                 Avec SugWave, vous bénéficiez d’un suivi personnalisé, de conseils avisés et de matériaux de qualité pour bâtir un foyer solide, esthétique et pérenne.
                 Notre objectif? Faire de votre projet une réussite, en alliant votre vision à notre expertise." />
             
        </div>
    </div>

    {/*Separateur*/}
    <div className="lg:px-20 my-5 w-full px-5">
      <Separateur numero ="04"
                  titre ="Section Contact"
                  annee ="2025" />
    </div>

      {/*Partie cinq*/}
      <div className="flex flex-col items-center justify-center gap-8 px-4 lg:px-20 my-10 w-full">
        <h1 className="text-end text-7xl font-bold max-sm:text-3xl">Retrouvez-nous</h1>

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
            {/* Carte  */}
            <div className=" xl:w-3/5 w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.861006131356!2d-3.961514925525194!3d5.284373936322389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ee91b3c6e2a5%3A0xc3f77fed2b26b5a9!2sPharmacie%20B%C3%A9thanie!5e0!3m2!1sfr!2sci!4v1759789677576!5m2!1sfr!2sci"
                    width="100%" height="100%" loading="lazy" className="rounded-md shadow-md border" >
                </iframe>
            </div>

            {/* Contenu + Points */}
            <div className="flex flex-col gap-8 xl:w-2/5 w-full">
                {/* Description */}
                <p className="text-base text-gray-700 leading-relaxed">
                    La méthode du béton par palier, aussi appelée mise en œuvre par couches ou par étapes, est une technique utilisée
                    principalement pour le bétonnage des grandes structures (fondations profondes, barrages, dalles épaisses, etc.).
                    Elle consiste à couler le béton en plusieurs couches ou paliers successifs, plutôt qu’en une seule fois, afin de mieux contrôler.
                </p>

                {/* Grands Points */}
                <div className="flex flex-col gap-6">
                    <h3 className="text-2xl font-semibold border-b border-gray-300 pb-2">Grands Points</h3>

                    {/* Item 1 */}
                    <div className="border-b border-gray-200 pb-4">
                        <h4 className="text-lg font-bold text-gray-800 mb-2">1. Avantages</h4>
                        <ToggleText text={`Avec la méthode par palier, chaque couche a une épaisseur limitée, ce qui permet :
                          - Une meilleure dissipation thermique,
                          - Moins de concentration de chaleur dans la masse,
                          - Une réduction du risque de fissuration thermique.`} />
                    </div>

                    {/* Item 2 */}
                    <div className="border-b border-gray-200 pb-4">
                        <h4 className="text-lg font-bold text-gray-800 mb-2">2. Compactage & vibrage</h4>
                        <ToggleText text={`En procédant par palier, chaque couche est plus accessible pour les outils de compactage :
                          - Le vibrage est plus homogène,
                          - On obtient un béton plus dense et durable.`} />
                    </div>

                    {/* Item 3 */}
                    <div className="border-b border-gray-200 pb-4">
                        <h4 className="text-lg font-bold text-gray-800 mb-2">3. Pression hydrostatique</h4>
                        <ToggleText text={`En coulant par étapes, on laisse le temps au béton de commencer à prendre avant de rajouter du poids au-dessus :
                          - Cela réduit la pression totale sur les parois du coffrage,
                          - Moins de risque de déformation ou rupture du coffrage.`} />
                    </div>
                </div>
            </div>
          </div>
      </div>


      {/*Partie six*/}
      <div id="Contacts" className="flex xl:flex-row flex-col bg-[url('/images/coverCinq.jpg')] bg-cover bg-center w-full h-[550px] p-20  max-sm:p-1 max-sm:items-center max-sm:justify-center">
        <div className="flex items-center justify-center xl:w-1/2 w-full">
          <h1 className="text-7xl font-black text-white text-wrap max-sm:text-center">EXPRIMEZ VOUS</h1>
        </div>

        <div className="flex flex-col items-center justify-center xl:w-1/2 gap-y-5 w-full my-10 p-4">
          <h4 className="text-2xl font-medium text-wrap text-white lg:px-4 lg:text-start text-center">
            Vous souhaitez en savoir plus sur nos services ?
          </h4>

          <p className="text-xs font-light text-wrap text-white text-start">
            Nous sommes là pour vous aider à chaque étape de votre projet. Que vous ayez des questions sur nos services, 
            nos tarifs ou que vous souhaitiez discuter de votre projet en détail,
            n'hésitez pas à nous contacter. Nous sommes impatients de vous accompagner dans la réalisation de votre rêve.
          </p>

            <div className="flex flex-row items-center ">
              <DevisForm />
            </div>
      </div>
   </div>

  </section>
  )
}

export default Home

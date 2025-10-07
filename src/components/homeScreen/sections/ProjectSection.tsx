import Separateur from "../Separateur"
import { projets } from "../../../data/ProjectData"
import ProjectBox from "../../projets/ProjectBox"

function ProjectSection() {
  return (
    <>
            {/*Separateur*/}
    <div className="lg:px-20 my-5 w-full px-5">
      <Separateur numero ="03"
                  titre ="Projets"
                  annee ="2025" />
    </div>

    
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
             <p className="text-xl text-start font-light text-black dark:text-white max-sm:text-xs text-wrap w-full">
                Avec SugWave, construire votre maison devient une expérience unique.
                Au-delà de notre rôle de constructeur, nous sommes également votre conseiller, car construire une maison représente, 
                pour la majorité, l’investissement d’une vie. C’est pourquoi nous veillons à ce que chaque projet soit durable, 
                réfléchi et à la hauteur de vos attentes. Nous vous accompagnons à chaque étape : de la conception des plans jusqu’à la remise des clés.
                 Avec SugWave, vous bénéficiez d’un suivi personnalisé, de conseils avisés et de matériaux de qualité pour bâtir un foyer solide, esthétique et pérenne.
                 Notre objectif? Faire de votre projet une réussite, en alliant votre vision à notre expertise. </p>
             
        </div>
    </div>
    </>
  )
}

export default ProjectSection
import Separateur from "../components/homeScreen/Separateur"
import ProjectDetails from "../components/projets/DetailsProject"
import { projets } from "../data/ProjectData"

function Project() {
  return (
     <section className="flex flex-col items-center justify-between h-full w-full">
        <div className="flex flex-col h-[550px] items-center justify-center w-full bg-[url('/images/projectBg.jpg')] bg-cover bg-center">

            <div className="flex w-full items-center justify-center mt-20">
                <h1 className="text-8xl text-center text-white font-bold max-sm:text-4xl">Decouvez Certains De Nos Projets</h1>
            </div>
        </div>

      {/*Separateur*/}
        <div className="px-20 my-5 w-full max-sm:px-1">
            <Separateur numero ="01"
                  titre ="Projets Termines"
                  annee ="2025" />
        </div>

      {/*partie Projets finis*/}
        <div className="flex flex-col border-b border-black py-5 item-center justify-center w-full px-3 md:px-8 lg:px-20 gap-y-10">
          <div className="w-full">
            <h3 className="text-4xl font-bold text-left text-wrap max-sm:text-2xl max-sm:text-center">Quelques un de nos projets END</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
            {projets.filter((p) =>(p.status === "Terminé")).map((projetsEND, index) => (
              <ProjectDetails
                              key={index}
                              project={projetsEND} />
            ))}
          </div>
        </div>



         {/*Separateur*/}
        <div className="px-20 my-5 w-full max-sm:px-1">
            <Separateur numero ="01"
                  titre ="Projets En Cours"
                  annee ="2025" />
        </div>

      {/*partie Projets en cours*/}
        <div className="flex flex-col py-5 item-center justify-center w-full px-3 md:px-8 lg:px-20 gap-y-10">
          <div className="w-full">
            <h3 className="text-4xl font-bold text-left text-wrap max-sm:text-2xl max-sm:text-center">Quelques un de nos projets IN-PROGRESS</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
           {projets.filter((p) =>(p.status === "En cours")).map((projetsEnCours, index) => (
              <ProjectDetails
                              key={index}
                              project={projetsEnCours} />
            ))}
            
          </div>
        </div>

    </section>
  )
}

export default Project

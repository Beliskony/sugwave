import Header from "../components/Header"
import Footer from "../components/Footer"
import Separateur from "../components/homeScreen/Separateur"
import ProjectBox from "../components/projets/ProjectBox"

function Project() {
  return (
     <section className="flex flex-col items-center justify-between h-full w-full">
        <div className="flex flex-col h-[550px] items-center justify-between w-full bg-[url('/images/projectBg.jpg')] bg-cover bg-right-bottom">
            <div className="w-full">
                <Header />
            </div>

            <div className="flex w-full items-center justify-center mb-52">
                <h1 className="text-8xl text-center text-white font-bold max-sm:text-4xl">Decouvez Certains De Nos Projets</h1>
            </div>
        </div>

      {/*Separateur*/}
        <div className="px-20 my-5 w-full max-sm:px-1">
            <Separateur numero ="01"
                  titre ="Projets Termines"
                  description ="By Axel"
                  annee ="2025" />
        </div>

      {/*partie Projets finis*/}
        <div className="flex flex-col item-center justify-center w-full px-20 gap-y-10 max-sm:px-1">
          <div className="w-full">
            <h3 className="text-4xl font-bold text-left text-wrap max-sm:text-2xl max-sm:text-center">Quelques un de nos projets END</h3>
          </div>

          <div className="grid grid-cols-4 gap-4 w-full max-sm:grid-cols-2">
            <ProjectBox title="Construction d'un duplexe"
                        description=""
                        imageUrl="/images/duplexe.jpg"/>
            
            <ProjectBox title="Renovation d'un appartement"
                        description=""
                        imageUrl="/images/renovation.jpg"/>

            <ProjectBox title="Extension d'une maison a Abidjan-Riviera"
                        description=""
                        imageUrl="/images/Abidjan.jpg"/>
            
            <ProjectBox title="Maison de luxe"
                        description=""
                        imageUrl="/images/projet1.jpg"/>
            
            <ProjectBox title="Creation d'une piscine"
                        description=""
                        imageUrl="/images/pool.jpg"/>

            
          </div>
        </div>



         {/*Separateur*/}
        <div className="px-20 my-5 w-full max-sm:px-1">
            <Separateur numero ="01"
                  titre ="Projets Termines"
                  description ="By Axel"
                  annee ="2025" />
        </div>

      {/*partie Projets en cours*/}
        <div className="flex flex-col border-b border-black py-5 item-center justify-center w-full px-20 gap-y-10 max-sm:px-1">
          <div className="w-full">
            <h3 className="text-4xl font-bold text-left text-wrap max-sm:text-2xl max-sm:text-center">Quelques un de nos projets IN-PROGRESS</h3>
          </div>

          <div className="grid grid-cols-4 gap-4 w-full max-sm:grid-cols-2">
            <ProjectBox title="Chantier de construction- Bingerville"
                        description=""
                        imageUrl="/images/chantier.jpg"/>
            
            <ProjectBox title="fondation d'une maison a Abidjan"
                        description=""
                        imageUrl="/images/fondation.jpg"/>
            
            <ProjectBox title="Tour centrale"
                        description=""
                        imageUrl="/images/etage.jpg"/>
            
            <ProjectBox title="Pose de feu de signalisation"
                        description=""
                        imageUrl="/images/feu.jpg"/>

            <ProjectBox title="appartement a Abidjan"
                        description=""
                        imageUrl="/images/appartement.jpg"/>
            
          </div>
        </div>



        {/*partie Footer*/}
        <Footer />
    </section>
  )
}

export default Project

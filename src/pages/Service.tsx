import Separateur from "../components/homeScreen/Separateur";
import SpecialBox from "../components/homeScreen/SpecialBox";


function Service() {
  return (
    <section className="flex flex-col items-center justify-between h-full w-full mb-3">
        <div className="flex flex-col h-[550px] items-center justify-between w-full bg-[url('/images/servicebg.jpg')] bg-cover bg-center">

            <div className="flex w-full items-center justify-center mt-48 max-sm:mb-10">
                <h1 className="text-3xl md:text-6xl xl:text-8xl text-white text-center font-bold max-sm:text-5xl">Decouvez Nos Services</h1>
            </div>
        </div>

    {/*Separateur*/}
    <div className="px-20 my-5 w-full max-sm:px-1">
      <Separateur numero ="01"
                  titre ="Services Propose"
                  annee ="2025" />
    </div>
    

    {/*partie Services*/}
    <div className="grid grid-cols-3 gap-4 w-full px-20 max-sm:px-1 max-sm:grid-cols-2">
        <SpecialBox titre="Construction de Maison"
                    icones="https://img.icons8.com/?size=100&id=l83K3H9MIrGQ&format=png&color=000000"
                    details="nous baptissons vos projets immobilier partant de 0"/>
    
        <SpecialBox titre="Construction de Piscine"
                    icones="https://img.icons8.com/?size=100&id=59G0LLKxAwxU&format=png&color=000000"
                    details="Envie d'une piscine privée alors ne chercher plus loin"/>

        <SpecialBox titre="Renovation & Reparation"
                    icones="https://img.icons8.com/?size=100&id=ldxwslzHXHyV&format=png&color=000000"
                    details="Nous remettons a neuf votre habitat tout en respectant les normes modernes de construction"/>
        
        <SpecialBox titre="Extension"
                    icones="https://img.icons8.com/?size=100&id=84033&format=png&color=000000"
                    details="Un balcon en plus, une piece a ajouté avec SUGWAVE c'est géré"/>

        <SpecialBox titre="Aménagement"
                    icones="https://img.icons8.com/?size=100&id=392&format=png&color=000000"
                    details="Vous ne savez comment ou quoi mettre ici et là nous vous aidons"/>
        
        <SpecialBox titre="Design Interieur & Exterieur" 
                    icones="https://img.icons8.com/?size=100&id=4JdTM07Jsdm9&format=png&color=000000"
                    details="Nous vous offrons aussi une expertise au niveau du visuel, pour un design attrayant"/>
    </div>


     {/*Separateur*/}
    <div className="px-20 my-5 w-full max-sm:px-1">
      <Separateur numero ="02"
                  titre ="Chiffres Clés"
                  annee ="2025" />
    </div>

    {/*partie Chiffres Clés*/}
    <div className="relative flex flex-row min-h-48 w-full items-center justify-around bg-[url('/images/bgSlim.webp')] bg-center bg-cover gap-x-10 px-20 max-sm:px-1">
      <div className="absolute flex flex-row inset-0 bg-black opacity-50"></div>
        <div className="flex flex-col items-center justify-center z-50">
            <h1 className="text-8xl text-white font-bold max-sm:text-4xl">100+</h1>
            <p className="text-2xl text-white font-bold max-sm:text-xs">Projets Realisés</p>
        </div>

        <div className="flex flex-col items-center justify-center z-50">
            <h1 className="text-8xl text-white font-bold max-sm:text-4xl">50+</h1>
            <p className="text-2xl text-white font-bold max-sm:text-xs">Clients Satisfaits</p>
        </div>

        <div className="flex flex-col items-center justify-center z-50">
            <h1 className="text-8xl text-white font-bold max-sm:text-4xl">10+</h1>
            <p className="text-2xl text-white font-bold max-sm:text-xs">Années d'Experience</p>
        </div>
      
    </div>
    
    </section>
  )
}

export default Service

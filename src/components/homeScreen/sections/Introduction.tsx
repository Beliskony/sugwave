import Separateur from "../Separateur"
import SpecialBox from "../SpecialBox"

const Introduction = () => {
  return (
    <>
        {/*Separateur*/}
    <div className="lg:px-20 my-5 w-full px-5">
      <Separateur numero ="01"
                  titre ="Introduction"
                  annee ="2025" />
    </div>
      
      
      <div id="InformationHome" className="lg:px-20 my-2 w-full flex flex-col items-start justify-center gap-y-5 px-2 max-sm:my-10 max-sm:gap-y-1">
        <p className="text-4xl text-start font-black text-black max-sm:text-2xl text-wrap lg:w-3/7 w-full dark:text-white">
            Promouvoir l'innovation dans le secteur de la construction.
        </p>

        <div className="flex flex-row items-center justify-between my-5 w-full md:items-start gap-x-5 max-sm:flex-col max-sm:gap-y-5">
            <img src="/images/House.webp" alt="house" className="w-1/2 h-auto rounded-3xl object-contain max-sm:w-full max-sm:h-[450px] max-sm:object-cover"/>

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
    </>
  )
}

export default Introduction
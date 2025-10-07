import Separateur from "../Separateur"
import SliderHome from "../SliderHome"

function Complement() {
  return (
    <>
        {/*Separateur*/}
    <div className="lg:px-20 my-5 w-full px-5">
      <Separateur numero ="02"
                  titre ="Complement"
                  annee ="2025" />
    </div>

      
      <div className=" my-2 w-full flex flex-col items-start justify-center gap-y-5 md:px-2 max-sm:my-10">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:px-20 px-2 gap-y-3">
            <p className="text-2xl xl:text-3xl xl:text-start text-center font-black text-black dark:text-white text-wrap xl:w-3/7 w-full">
                Embelir votre espace de vie avec nos designs modernes.
            </p>

            <p className="text-xl xl:text-start text-center font-light text-black dark:text-white text-wrap xl:w-3/7 w-full">
                Certe nous privilégions la qualité, mais nous ne négligeons pas le design. Nous vous offrons le meilleur en matière de design et de qualité.
            </p>
        </div>


        <div className="w-full ">
            <SliderHome/>
        </div>
      </div>
    </>
  )
}

export default Complement
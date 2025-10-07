import DevisForm from "../DevisForm"

function DevisSection() {
  return (
      <div id="Contacts" className="flex xl:flex-row flex-col bg-[url('/images/coverCinq.webp')] bg-cover bg-center w-full h-[550px] p-20  max-sm:p-1 max-sm:items-center max-sm:justify-center">
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
  )
}

export default DevisSection
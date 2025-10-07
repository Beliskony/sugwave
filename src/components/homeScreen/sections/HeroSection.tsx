

const HeroSection = () => {
  return (
   <div className="relative flex flex-col items-center justify-center w-full h-[730px] max-sm:h-[400px] bg-[url('/images/bgDark.webp')] bg-cover bg-center">
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
  )
}

export default HeroSection
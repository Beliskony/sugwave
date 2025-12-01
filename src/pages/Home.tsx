import HeroSection from "../components/homeScreen/sections/HeroSection"
import Introduction from "../components/homeScreen/sections/Introduction"
import Complement from "../components/homeScreen/sections/Complement"
import ProjectSection from "../components/homeScreen/sections/ProjectSection"
import ContactSection from "../components/homeScreen/sections/ContactSection"
import DevisSection from "../components/homeScreen/sections/DevisSection"
import Temoignage from "../components/homeScreen/sections/Temoignage"




function Home() {
 
  return (
    <section className="flex flex-col items-center h-full w-full">
      {/*partie Une*/}
      <HeroSection/>


      {/*partie Deux*/}
      <Introduction />

      {/*partie Trois*/}
      <Complement />

      {/*Partie quatre*/}
      <ProjectSection />

      <Temoignage />

      {/* Partie cinq : Retrouvez-nous */}
      <ContactSection />

      {/*Partie six*/}
      <DevisSection />

  </section>
  )
}

export default Home

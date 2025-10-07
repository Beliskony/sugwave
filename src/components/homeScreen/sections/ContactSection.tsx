import Separateur from "../Separateur"
import ToggleText from "../ToggleText"

function ContactSection() {
  return (
    <>
            {/*Separateur*/}
    <div className="lg:px-20 my-5 w-full px-5">
      <Separateur numero ="04"
                  titre ="Section Contact"
                  annee ="2025" />
    </div>


<div className="flex flex-col items-center justify-center gap-8 px-4 lg:px-20 my-10 w-full">
  <h1 className="text-end text-7xl font-bold max-sm:text-3xl">Retrouvez-nous</h1>

  <div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
    {/* Carte */}
    <div className="xl:w-3/5 w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.861006131356!2d-3.961514925525194!3d5.284373936322389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ee91b3c6e2a5%3A0xc3f77fed2b26b5a9!2sPharmacie%20B%C3%A9thanie!5e0!3m2!1sfr!2sci!4v1759789677576!5m2!1sfr!2sci"
        width="100%"
        height="100%"
        loading="lazy"
        className="rounded-md shadow-md border"
      ></iframe>
    </div>

    {/* Contenu + Points */}
    <div className="flex flex-col gap-8 xl:w-2/5 w-full">
      {/* Description */}
      <p className="text-base text-gray-700 dark:text-white leading-relaxed">
        Chez <span className="font-semibold text-gray-900 dark:text-white">[Nom de ta structure]</span>, nous mettons notre expertise au service de vos projets :
        <br />
        Que ce soit pour la <strong>construction de votre maison</strong>, la <strong>rénovation</strong> de votre bien, ou la
        <strong>réalisation d’ouvrages professionnels</strong>, nous vous accompagnons de l’étude à la finition.
        <br />
        Nos équipes qualifiées assurent un suivi rigoureux à chaque étape pour garantir des travaux durables, esthétiques et conformes aux normes.
      </p>

      {/* Grands Points */}
      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-semibold border-b border-gray-300 pb-2">
          Pourquoi nous confier votre projet ?
        </h3>

        {/* Item 1 */}
        <div className="border-b border-gray-200 pb-4">
          <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">1. Expérience & Expertise</h4>
          <ToggleText
            text={`Notre équipe cumule plusieurs années d’expérience dans la construction et la rénovation.
            Nous maîtrisons les techniques modernes, comme la méthode du béton par palier, garantissant solidité et longévité de vos ouvrages.`}
          />
        </div>

        {/* Item 2 */}
        <div className="border-b border-gray-200 pb-4">
          <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">2. Accompagnement personnalisé</h4>
          <ToggleText
            text={`Nous étudions chaque projet avec soin pour vous proposer des solutions adaptées à votre budget et à vos besoins.
            De la conception aux finitions, nous restons à vos côtés.`}
          />
        </div>

        {/* Item 3 */}
        <div className="border-b border-gray-200 pb-4">
          <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">3. Qualité & Fiabilité</h4>
          <ToggleText
            text={`Nous utilisons des matériaux certifiés et respectons les normes de sécurité en vigueur.
            Votre satisfaction et la durabilité de vos constructions sont notre priorité.`}
          />
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default ContactSection
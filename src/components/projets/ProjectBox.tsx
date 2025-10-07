import { type FC, useState } from "react";
import ProjectBoxSkeleton from "../SkeletonComposants/SkeletonProjectBox";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type ProjectBoxProps = {
  title: string;
  description: string;
  imageUrl: string;
};

const ProjectBox: FC<ProjectBoxProps> = ({ title, description, imageUrl }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  };

  return (
    <>
      {!isLoaded && <ProjectBoxSkeleton />}

      <div
        className={`relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-500
        h-[450px] w-[320px] max-sm:h-[280px] max-sm:w-[95%] mx-auto
        ${!isLoaded ? "hidden" : "block"}`}
        style={{ minHeight: 180 }}
      >
        {/* Image invisible pour déclencher le onLoad */}
        <img src={imageUrl} alt={title} className="hidden" onLoad={handleImageLoad} />

        {/* Background image */}
        <div
          className="absolute inset-0 bg-center bg-cover scale-105 group-hover:scale-110 transition-transform duration-700"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />

        {/* Dégradé pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Contenu */}
        <div className="relative z-10 flex flex-col items-center justify-end h-full p-6 text-center">
          <h3 className="text-2xl font-bold text-white drop-shadow-lg mb-2 max-sm:text-lg">
            {title}
          </h3>
          <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-sm:hidden">
            {description}
          </p>

          {/* Bouton voir plus */}
          <Link to={"/project"}>
          <button
            className="mt-4 flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full cursor-pointer text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500"
          >
            Voir plus <ArrowRight className="w-4 h-4" />
          </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectBox;

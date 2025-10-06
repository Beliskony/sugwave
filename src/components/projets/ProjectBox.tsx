import { type FC, useState } from "react";
import ProjectBoxSkeleton from "../SkeletonComposants/SkeletonProjectBox";

type ProjectBoxProps = {
  title: string;
  description: string;
  imageUrl: string;
};

const ProjectBox: FC<ProjectBoxProps> = ({ title, description, imageUrl }) => {
  const [isLoaded, setIsLoaded] = useState(false);

    const handleImageLoad = () => {
    // attendre 1 seconde avant d’afficher le contenu
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  };

  return (
    <>
      {!isLoaded && <ProjectBoxSkeleton />}

      <div
        className={`relative group cursor-pointer rounded-lg overflow-hidden border border-gray-200 transition-opacity duration-500
        h-[450px] w-[300px] max-sm:h-[300px] max-sm:w-[190px] max-sm:rounded-md max-sm:items-center max-sm:justify-center ${
          !isLoaded ? "hidden" : "block"
        }`}
        style={{ minHeight: 180 }}
      >
        {/* Image réelle (cachée derrière le background pour trigger le onLoad) */}
        <img
          src={imageUrl}
          alt={title}
          className="hidden"
          onLoad={handleImageLoad}
        />

        {/* Background image */}
        <div
          className="absolute inset-0 bg-center flex flex-col bg-cover transition-opacity duration-500"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />

        {/* Black overlay sur hover */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out hover:backdrop-blur-lg" />

        {/* Contenu */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 max-sm:items-center max-sm:justify-center">
          <h3 className="text-2xl text-white text-center font-bold mb-2 group-hover:text-white transition-colors duration-300 max-sm:text-center">
            {title}
          </h3>
          <p className="text-gray-700 opacity-0 group-hover:opacity-100 group-hover:text-white transition-opacity duration-300 text-center max-sm:hidden">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProjectBox;
